import { BlogType } from "@/common/types/blog";
import { createPost, getPosts } from "@/services/blog";
import { describe, expect, test } from "@jest/globals";
import { mockTestGetPost } from "@/common/constant/mock";

describe("get posts", () => {
  test("data post should be equal mock data", async () => {
    const data = await getPosts();
    const blogData = data.data as { id: string; data: BlogType }[];
    expect(blogData).toEqual(mockTestGetPost);
  });
});
