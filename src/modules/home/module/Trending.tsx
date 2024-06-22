import Badge from "@/common/components/elements/Badge";
import Button from "@/common/components/elements/Button";
import Image from "next/image";

export default function TrendingBlog() {
  return (
    <div className="mt-32 flex max-w-[68em] flex-col">
      <div className="mb-8 flex flex-row items-start justify-between">
        <h1 className="text-lg font-bold">Trending Post</h1>
        <Button variant="black">View All Post</Button>
      </div>
      <div className="flex flex-row gap-5">
        <div className="relative max-w-xs">
          <Image
            src="/topblog.png"
            width={500}
            height={500}
            alt="blog"
            className="h-72 w-full rounded-md object-cover"
          />
          <div className="absolute bottom-0 left-4">
            <Badge title="Technology" />
            <h1 className="mb-5 mt-4 text-lg font-semibold text-white">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h1>
          </div>
        </div>
        <div className="relative max-w-xs">
          <Image
            src="/topblog.png"
            width={500}
            height={500}
            alt="blog"
            className="h-72 w-full rounded-md object-cover"
          />
          <div className="absolute bottom-0 left-4">
            <Badge title="Technology" />
            <h1 className="mb-5 mt-4 text-lg font-semibold text-white">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h1>
          </div>
        </div>
        <div className="relative max-w-xs">
          <Image
            src="/topblog.png"
            width={500}
            height={500}
            alt="blog"
            className="h-72 w-full rounded-md object-cover"
          />
          <div className="absolute bottom-0 left-4">
            <Badge title="Technology" />
            <h1 className="mb-5 mt-4 text-lg font-semibold text-white">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h1>
          </div>
        </div>
        <div className="relative max-w-xs">
          <Image
            src="/topblog.png"
            width={500}
            height={500}
            alt="blog"
            className="h-72 w-full rounded-md object-cover"
          />
          <div className="absolute bottom-0 left-4">
            <Badge title="Technology" />
            <h1 className="mb-5 mt-4 text-lg font-semibold text-white">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
