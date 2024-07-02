import { NextResponse, NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  revalidateTag("blog");
  revalidateTag("blog-id");
  revalidateTag("blog-trending");
  return NextResponse.json({
    revalidate: true,
    date: Date.now(),
    message: "revalidate success",
  });
}
