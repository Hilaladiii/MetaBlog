import CardBlog from "@/common/components/fragments/CardBlog";
import { BlogType } from "@/common/types/blog";
import { getPosts } from "@/services/blog";

export default async function LatestBlog() {
  const data = await getPosts();
  const blogData = data.data as { id: string; data: BlogType }[];
  return (
    <div className="mt-52 flex flex-col">
      <h1 className="dark:text-light mb-8 text-xl font-bold">Latest Post</h1>
      <div className="mx-auto grid grid-cols-3 gap-5">
        {blogData &&
          blogData.map((blog, index) => (
            <CardBlog
              title={blog.data.title}
              author={blog.data.author}
              image={blog.data.image}
              date={blog.data.createdAt || ""}
              category={blog.data.category}
              href={`/blog/${blog.id}`}
              key={index}
            />
          ))}
      </div>
    </div>
  );
}
