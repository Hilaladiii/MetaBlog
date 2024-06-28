import { UploadBlogType } from "@/common/types/blog";

export async function createPost(data: UploadBlogType) {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("image", data.image);
    formData.append("content", data.content);
    formData.append("category", data.category);

    const response = await fetch("/api/blog/create", {
      method: "POST",
      body: formData,
    });
    await fetch(`/api/revalidate`, { method: "POST" });
    const res = await response.json();
    if (!response.ok) {
      throw new Error(res.message || "Failed to sign up");
    }
    return res;
  } catch (error) {
    throw error;
  }
}

export async function getMyPosts(user: string) {
  try {
    const response = await fetch(
      `${process.env.BASE_API_URL}/api/blog/my-post?author=${user}`,
      {
        method: "GET",
        credentials: "include",
      },
    );
    const res = await response.json();
    return res;
  } catch (error) {
    throw error;
  }
}

export async function getPosts() {
  try {
    const response = await fetch(`${process.env.BASE_API_URL}/api/blog/`, {
      method: "GET",
      next: {
        tags: ["blog"],
      },
    });
    const res = await response.json();
    return res;
  } catch (error) {
    throw error;
  }
}

export async function getPostById(id: string) {
  try {
    const response = await fetch(
      `${process.env.BASE_API_URL}/api/blog?id=${id}`,
      {
        method: "GET",
        next: {
          tags: ["blog-id"],
        },
      },
    );
    const res = await response.json();
    return res;
  } catch (error) {
    throw error;
  }
}

export async function getTrendingPost(limit: number) {
  try {
    const response = await fetch(
      `${process.env.BASE_API_URL}/api/blog/trending?limit=${limit}`,
      {
        method: "GET",
        next: {
          revalidate: 24 * 60 * 60,
        },
      },
    );
    const res = await response.json();
    return res;
  } catch (error) {
    throw error;
  }
}
