import CardBlog from "@/common/components/fragments/CardBlog";
import TopBlog from "./TopBlog";
import { getPosts } from "@/services/blog";
import { BlogType } from "@/common/types/blog";

export default async function Blog() {
  const data = await getPosts();
  const blogData = data.data as { id: string; data: BlogType }[];
  return (
    <div className="w-full">
      <TopBlog />
      <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3">
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
