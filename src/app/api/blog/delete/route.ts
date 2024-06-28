import { deletePost } from "@/common/db/blog";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const id = await req.text();
  const res = await deletePost(id);
  return NextResponse.json(res, { status: res.status });
}
