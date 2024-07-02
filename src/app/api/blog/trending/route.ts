import { getDataLimit } from "@/common/db/blog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const params = await req.nextUrl.searchParams;
  const limit = params.get("limit") || 0;
  const res = await getDataLimit({
    collectionName: "posts",
    limitValue: limit as number,
    orderByField: "views",
  });
  return NextResponse.json(res, { status: res.status });
}
