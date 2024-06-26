import { getData, getDataById } from "@/common/db/blog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id) {
    const res = await getDataById("posts", id);
    return NextResponse.json(res, { status: res.status });
  } else {
    const res = await getData("posts");
    return NextResponse.json(res, { status: res.status });
  }
}
