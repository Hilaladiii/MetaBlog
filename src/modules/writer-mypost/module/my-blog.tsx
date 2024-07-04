import { authOption } from "@/app/api/auth/[[...nextauth]]/option";
import { getMyPosts } from "@/services/blog";
import { getServerSession } from "next-auth";
import CardBlog from "@/common/components/fragments/CardBlog";
import { BlogType } from "@/common/types/blog";

export default async function MyPosts() {
  const session = await getServerSession(authOption);
  const user = session?.user.username || "";
  const data = await getMyPosts(user);
  const blogData = data.data;
  return (
    <div className="mx-auto my-36 flex w-full flex-col md:my-20 md:max-w-[70em]">
      <h1 className="mx-auto mb-12 text-3xl font-semibold">My-Posts</h1>
      <div className="mx-auto grid grid-cols-1 gap-5 px-2 md:grid-cols-3 md:px-0">
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
