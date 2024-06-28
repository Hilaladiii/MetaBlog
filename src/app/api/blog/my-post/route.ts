import { NextRequest, NextResponse } from "next/server";
import { getSpesificData } from "@/common/db/blog";

export async function GET(req: NextRequest) {
  const params = await req.nextUrl.searchParams;
  const user = params.get("author");
  if (!user) {
    return NextResponse.json(
      { message: "User not available in session" },
      { status: 404 },
    );
  }
  const res = await getSpesificData({
    collectionName: "posts",
    field: "author",
    operator: "==",
    queryValue: user,
  });
  return NextResponse.json(res, { status: res.status });
}
