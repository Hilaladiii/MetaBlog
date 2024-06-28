import { createPost } from "@/common/db/blog";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOption } from "@/app/api/auth/[[...nextauth]]/option";

type Category = "technology" | "education" | "health" | "economic" | "religion";

export async function POST(req: NextRequest) {
  const reqBody = await req.formData();
  const session = await getServerSession(authOption);
  const username = session?.user.username;
  if (!username) {
    return NextResponse.json(
      { message: "User not available in session" },
      { status: 404 },
    );
  }

  const category = reqBody.get("category") as Category | null;

  if (!category) {
    return NextResponse.json(
      { message: "Category is required" },
      { status: 400 },
    );
  }

  const res = await createPost({
    title: reqBody.get("title") as string,
    author: username,
    content: reqBody.get("content") as string,
    image: reqBody.get("image") as File,
    category: category,
  });

  return NextResponse.json(res, { status: res?.status });
}
