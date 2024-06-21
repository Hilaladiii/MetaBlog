import Image from "next/image";
import Badge from "../elements/Badge";
import Author from "./Author";

export default function CardBlog() {
  return (
    <div className="max-w-sm rounded-md border-2 border-cloud p-3">
      <Image
        src={"/topblog.png"}
        alt="topblog"
        width={500}
        height={500}
        className="mb-6 h-[250px] w-[380px] rounded-md object-cover object-center"
      />
      <Badge title="Technology" />
      <h1 className="mb-6 mt-4 text-2xl font-semibold">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>
      <Author date="August 20, 2022" name="Jason Fransisco" image="" />
    </div>
  );
}
