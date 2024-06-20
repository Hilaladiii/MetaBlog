import Button from "@/common/components/elements/Button";
import CardBlog from "@/common/components/fragments/CardBlog";

export default function LatestBlog() {
  return (
    <div className="mx-auto mb-20 mt-52 flex max-w-[68em] flex-col">
      <h1 className="mb-8 text-xl font-bold">Latest Post</h1>
      <div className="mx-auto grid grid-cols-3 gap-5">
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
      <Button variant="black" className="mx-auto mt-10">
        View All Post
      </Button>
    </div>
  );
}
