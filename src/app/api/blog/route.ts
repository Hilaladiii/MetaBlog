import { getPosts } from "@/common/db/blog";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await getPosts();
  return NextResponse.json(res, { status: res.status });
}
