import { getPostById, getPosts } from "@/common/db/blog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id) {
    const res = await getPostById(id);
    return NextResponse.json(res, { status: res.status });
  } else {
    const res = await getPosts();
    return NextResponse.json(res, { status: res.status });
  }
}
