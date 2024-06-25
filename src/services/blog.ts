import { BlogType } from "@/common/types/blog";

export async function createPost(data: BlogType) {
  try {
    const response = await fetch("/api/blog/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if (!response.ok) {
      throw new Error(res.message || "Failed to sign up");
    }

    return res;
  } catch (error) {
    throw error;
  }
}
