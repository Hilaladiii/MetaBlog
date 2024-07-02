import Badge from "@/common/components/elements/Badge";
import Author from "@/common/components/fragments/Author";
import { BlogType } from "@/common/types/blog";
import { getTrendingPost } from "@/services/blog";
import Image from "next/image";

export default async function TopBlog() {
  const data = await getTrendingPost(4);
  const blogData = data.data as { id: string; data: BlogType }[];
  console.log(blogData[0].data);
  return (
    <div className="relative mx-auto grid h-[70vh] max-w-[68em] grid-cols-4 grid-rows-2 gap-5 rounded-md">
      <div className="relative col-span-2 row-span-2">
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
          <h1 className="mb-5 mt-4 text-3xl font-semibold text-white">
            {blogData[0].data.title}
          </h1>
          <Author
            date={blogData[0].data.createdAt || ""}
            name={blogData[0].data.author}
            image=""
          />
        </div>
      </div>
      <div className="relative col-span-2 row-span-1">
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
          <h1 className="mb-5 mt-4 text-2xl font-semibold text-white">
            {blogData[1].data.title}
          </h1>
          <Author
            date={blogData[1].data.createdAt || ""}
            name={blogData[1].data.author}
            image=""
          />
        </div>
      </div>
      <div className="relative col-span-1 row-span-1">
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
          <h1 className="mb-5 mt-4 text-xl font-semibold text-white">
            {blogData[2].data.title}
          </h1>
        </div>
      </div>
      <div className="relative col-span-1 row-span-1">
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
          <h1 className="mb-5 mt-4 text-xl font-semibold text-white">
            {blogData[3].data.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
