import Badge from "@/common/components/elements/Badge";
import { BlogType } from "@/common/types/blog";
import { getTrendingPost } from "@/services/blog";
import Image from "next/image";
import Link from "next/link";

export default async function TrendingBlog() {
  const data = await getTrendingPost(4);
  const trendingBlog = data.data as { id: string; data: BlogType }[];
  return (
    <div className="mt-32 flex max-w-[68em] flex-col">
      <div className="mb-8 flex flex-row items-start justify-between">
        <h1 className="text-lg font-bold dark:text-light">Trending Post</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {trendingBlog &&
          trendingBlog.map((blog, index: number) => (
            <div className="relative max-w-xs" key={index}>
              <Link href={`/blog/${blog.id}`}>
                <Image
                  src={blog.data.image}
                  width={500}
                  height={500}
                  alt={blog.data.title}
                  className="h-72 rounded-md object-cover"
                />
              </Link>
              <div className="absolute bottom-0 left-4">
                <Badge title={blog.data.category} />
                <h1 className="mb-5 mt-4 text-sm font-semibold text-white md:text-lg">
                  {blog.data.title}
                </h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
