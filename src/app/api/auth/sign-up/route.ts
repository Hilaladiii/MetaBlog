import { SignUp } from "@/common/db/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const res = await SignUp(data);
  return NextResponse.json(res, { status: res.status });
}
