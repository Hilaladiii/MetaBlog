import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";
import { getToken } from "next-auth/jwt";

const writerOnly = [/^\/writer\/post$/, /^\/writer\/my-post$/];
const readerOnly = [/^\/$/, /^\/blog\/[^/]+$/];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: (string | RegExp)[] = [],
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    if (
      requireAuth.some((path) =>
        path instanceof RegExp ? path.test(pathname) : path === pathname,
      )
    ) {
      const token = await getToken({
        req,
        secret: process.env.NEXT_AUTH_SECRET,
      });
      if (!token) {
        const url = new URL("/auth/sign-in", req.url);
        url.searchParams.set("callbacks", encodeURI(req.url));
        return NextResponse.redirect(url);
      }
      if (
        writerOnly.some((path) =>
          path instanceof RegExp ? path.test(pathname) : path === pathname,
        ) &&
        token.role !== "writer"
      ) {
        const url = new URL("/", req.url);
        return NextResponse.redirect(url);
      }
      if (
        readerOnly.some((path) =>
          path instanceof RegExp ? path.test(pathname) : path === pathname,
        ) &&
        token.role !== "reader"
      ) {
        const url = new URL("/writer/my-post", req.url);
        return NextResponse.redirect(url);
      }
    }
    return middleware(req, next);
  };
}
