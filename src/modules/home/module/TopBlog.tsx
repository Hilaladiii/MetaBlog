import Badge from "@/common/components/elements/Badge";
import Author from "@/common/components/fragments/Author";

export default function TopBlog() {
  return (
    <div className="relative mx-auto h-[70vh] max-w-[68em] rounded-md bg-[url('/topblog.png')] bg-cover bg-center">
      <div className="absolute -bottom-14 left-14 max-w-sm rounded-md bg-white p-5 shadow-md">
        <Badge title="Technology" />
        <h1 className="mb-6 mt-4 text-2xl font-semibold">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <Author date="August 20, 2022" name="Jason Fransisco" image="" />
      </div>
    </div>
  );
}
