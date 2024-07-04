import Badge from "@/common/components/elements/Badge";
import Author from "@/common/components/fragments/Author";
import { BlogType } from "@/common/types/blog";
import { getTrendingPost } from "@/services/blog";
import Image from "next/image";

export default async function TopBlog() {
  const data = await getTrendingPost(4);
  const blogData = data.data as { id: string; data: BlogType }[];

  return (
    <div className="relative mx-auto grid h-auto max-w-[68em] gap-5 rounded-md md:h-[70vh] md:grid-cols-4 md:grid-rows-2">
      <div className="relative col-span-2 row-span-2 h-72 md:h-auto">
        <Image
          src={blogData[0].data.image}
          alt={blogData[0].data.title}
          priority
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        <div className="absolute bottom-6 left-6">
          <Badge title={blogData[0].data.category} />
          <h1 className="mb-5 mt-4 text-2xl font-semibold text-white md:text-3xl">
            {blogData[0].data.title}
          </h1>
          <Author
            date={blogData[0].data.createdAt || ""}
            name={blogData[0].data.author}
            image=""
          />
        </div>
      </div>
      <div className="relative col-span-2 row-span-1 h-72 md:h-auto">
        <Image
          src={blogData[1].data.image}
          alt={blogData[1].data.title}
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-md"
        />
        <div className="absolute bottom-6 left-6">
          <Badge title={blogData[1].data.category} />
          <h1 className="mb-5 mt-4 text-xl font-semibold text-white md:text-2xl">
            {blogData[1].data.title}
          </h1>
          <Author
            date={blogData[1].data.createdAt || ""}
            name={blogData[1].data.author}
            image=""
          />
        </div>
      </div>
      <div className="relative col-span-1 row-span-1 h-48 md:h-auto">
        <Image
          src={blogData[2].data.image}
          alt={blogData[2].data.title}
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="rounded-md"
        />
        <div className="absolute bottom-0 left-3">
          <Badge title={blogData[2].data.category} />
          <h1 className="mb-5 mt-4 text-sm font-semibold text-white md:text-xl">
            {blogData[2].data.title}
          </h1>
        </div>
      </div>
      <div className="relative col-span-1 row-span-1 h-48 md:h-auto">
        <Image
          src={blogData[3].data.image}
          alt={blogData[3].data.title}
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="rounded-md"
        />
        <div className="absolute bottom-0 left-3">
          <Badge title={blogData[3].data.category} />
          <h1 className="mb-5 mt-4 text-sm font-semibold text-white md:text-xl">
            {blogData[3].data.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
