import { NextRequest, NextResponse } from "next/server";
import withAuth from "./middlewares/withAuth";

export async function mainMiddleware(req: NextRequest) {
  return NextResponse.next();
}

export default withAuth(mainMiddleware, [
  "/",
  "/blog",
  /^\/blog\/[^/]+$/,
  "/writer/post",
  "/writer/my-post",
]);
