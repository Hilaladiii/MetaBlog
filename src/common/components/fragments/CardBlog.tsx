import Image from "next/image";
import Badge from "../elements/Badge";
import Author from "./Author";
import Link from "next/link";

export default function CardBlog({
  title,
  image,
  author,
  date,
  category,
  href,
}: {
  title: string;
  image: string;
  author: string;
  date: string;
  category: string;
  href: string;
}) {
  return (
    <div className="max-w-sm rounded-md border-2 border-cloud p-3">
      <Link href={href}>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="mb-6 h-[250px] w-[390px] rounded-md object-cover object-center"
        />
      </Link>
      <Badge title={category} />
      <h1 className="mb-6 mt-4 h-24 text-2xl font-semibold">{title}</h1>
      <Author date={date} name={author} image="" />
    </div>
  );
}
