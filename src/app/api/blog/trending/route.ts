import { getDataLimit } from "@/common/db/blog";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await getDataLimit({
    collectionName: "posts",
    limitValue: 5,
    orderByField: "views",
  });
  return NextResponse.json(res, { status: res.status });
}
