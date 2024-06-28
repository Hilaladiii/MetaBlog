import Badge from "@/common/components/elements/Badge";
import Author from "@/common/components/fragments/Author";

export default function TopBlog() {
  return (
    <div className="relative mx-auto h-[60vh] max-w-[68em] rounded-md bg-[url('/topblog.png')] bg-cover bg-center">
      <div className="absolute bottom-3 left-3 max-w-xl p-5">
        <Badge title="technology" />
        <h1 className="mb-6 mt-4 text-2xl font-semibold text-white">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <Author
          date="August 20, 2022"
          name="Jason Fransisco"
          image=""
          variant="white"
        />
      </div>
    </div>
  );
}
