import CardBlog from "@/common/components/fragments/CardBlog";
import TopBlog from "./TopBlog";

export default function Blog() {
  return (
    <div>
      <div className="w-full">
        <TopBlog />
        <div className="mx-auto mb-20 mt-52 flex max-w-[68em] flex-col">
          <div className="grid grid-cols-3 gap-5">
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
          </div>
        </div>
      </div>
    </div>
  );
}
