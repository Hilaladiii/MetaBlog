import CardBlogSkeleton from "@/common/components/fragments/CardBlogSkeleton";

export default function Loading() {
  return (
    <div className="mx-auto my-36 flex w-full max-w-[70em] flex-col md:my-20">
      <h1 className="mx-auto mb-12 text-3xl font-semibold">My-Posts</h1>
      <CardBlogSkeleton />;
    </div>
  );
}
