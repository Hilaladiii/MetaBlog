import Badge from "@/common/components/elements/Badge";
import Author from "@/common/components/fragments/Author";
import Image from "next/image";

export default function TopBlog() {
  return (
    <div className="relative mx-auto grid h-[70vh] max-w-[68em] grid-cols-4 grid-rows-2 gap-5 rounded-md">
      <div className="relative col-span-2 row-span-2">
        <Image
          src="/topblog1.jpeg"
          alt="blog"
          priority
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        <div className="absolute bottom-6 left-6">
          <Badge title="Technology" />
          <h1 className="mb-5 mt-4 text-3xl font-semibold text-white">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <Author date="August 20, 2022" name="Jason Fransisco" image="" />
        </div>
      </div>
      <div className="relative col-span-2 row-span-1">
        <Image
          src="/topblog2.jpeg"
          alt="blog"
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-md"
        />
        <div className="absolute bottom-6 left-6">
          <Badge title="Technology" />
          <h1 className="mb-5 mt-4 text-2xl font-semibold text-white">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <Author date="August 20, 2022" name="Jason Fransisco" image="" />
        </div>
      </div>
      <div className="relative col-span-1 row-span-1">
        <Image
          src="/topblog3.png"
          alt="blog"
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="rounded-md"
        />
        <div className="absolute bottom-0 left-3">
          <Badge title="Technology" />
          <h1 className="mb-5 mt-4 text-xl font-semibold text-white">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
        </div>
      </div>
      <div className="relative col-span-1 row-span-1">
        <Image
          src="/topblog4.jpeg"
          alt="blog"
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="rounded-md"
        />
        <div className="absolute bottom-0 left-3">
          <Badge title="Technology" />
          <h1 className="mb-5 mt-4 text-xl font-semibold text-white">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
        </div>
      </div>
    </div>
  );
}
