import { authOption } from "@/app/api/auth/[[...nextauth]]/option";
import { getMyPosts } from "@/services/blog";
import { getServerSession } from "next-auth";
import CardBlog from "@/common/components/fragments/CardBlog";
import { BlogType } from "@/common/types/blog";
import CardBlogSkeleton from "@/common/components/fragments/CardBlogSkeleton";

export default async function MyPosts() {
  const session = await getServerSession(authOption);
  const user = session?.user.username || "";
  const data = await getMyPosts(user);
  const blogData = data.data;
  return (
    <div className="mx-auto my-20 flex w-full max-w-[70em] flex-col">
      <h1 className="mx-auto mb-12 text-3xl font-semibold">My-Posts</h1>
      <div className="grid grid-cols-3 gap-5">
        {blogData &&
          blogData.map(
            (blog: { id: string; data: BlogType }, index: number) => (
              <CardBlog
                title={blog.data.title}
                author={blog.data.author}
                image={blog.data.image}
                date={blog.data.createdAt || ""}
                category={blog.data.category}
                href={`/writer/my-post/${blog.id}`}
                key={index}
              />
            ),
          )}
      </div>
    </div>
  );
}
