import { createPost } from "@/common/db/blog";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const reqBody = await req.formData();

  const res = await createPost({
    title: reqBody.get("title") as string,
    author: reqBody.get("author") as string,
    content: reqBody.get("content") as string,
    image: reqBody.get("image") as File,
  });
  return NextResponse.json(res, { status: res?.status });
}
