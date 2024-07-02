import Badge from "@/common/components/elements/Badge";
import Author from "@/common/components/fragments/Author";
import { BlogType } from "@/common/types/blog";
import { getTrendingPost } from "@/services/blog";
import Image from "next/image";

export default async function TopBlog() {
  const data = await getTrendingPost(1);
  const topBlog = data.data as { id: string; data: BlogType }[];

  return (
    <div className="relative mx-auto h-[60vh] max-w-[68em] overflow-hidden rounded-md">
      <Image
        src={topBlog[0].data.image}
        alt="Top Blog Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute bottom-3 left-3 z-10 max-w-xl p-5">
        <Badge title={topBlog[0].data.category} />
        <h1 className="mb-6 mt-4 text-2xl font-semibold text-white">
          {topBlog[0].data.title}
        </h1>
        <Author
          date={topBlog[0].data.createdAt || ""}
          name={topBlog[0].data.author}
          image=""
          variant="white"
        />
      </div>
    </div>
  );
}
