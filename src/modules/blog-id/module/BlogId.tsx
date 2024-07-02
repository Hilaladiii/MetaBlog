import Badge from "@/common/components/elements/Badge";
import Author from "@/common/components/fragments/Author";
import Image from "next/image";
import "../style/richtext.css";
import { Source_Serif_4 } from "next/font/google";
import parse from "html-react-parser";
import { getPostById } from "@/services/blog";
import { BlogType } from "@/common/types/blog";

const source_serif = Source_Serif_4({
  variable: "--font-source",
  subsets: ["latin"],
});

export default async function BlogId({ params }: { params: string }) {
  const data = await getPostById(params);
  const detailBlog = data.data as BlogType;
  return (
    <div className="mx-auto max-w-[47em]">
      <div>
        <Badge title={detailBlog.category} />
        <h1 className="dark:text-light mb-5 mt-4 text-3xl font-semibold">
          {detailBlog.title}
        </h1>
        <Author
          date={detailBlog.createdAt || ""}
          name={detailBlog.author}
          image=""
        />
        <div className="mt-5 text-xs text-gray300">
          Total views : {detailBlog.views}
        </div>
      </div>
      <Image
        src={detailBlog.image}
        alt="blog"
        width={750}
        height={750}
        loading="lazy"
        className="mt-8"
      />
      <div className="rich_text mt-10">{parse(detailBlog.content)}</div>
    </div>
  );
}
