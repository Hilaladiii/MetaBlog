import BlogId from "@/modules/blog-id/module/BlogId";

export default function DetailBlogPage({ params }: { params: { id: string } }) {
  return <BlogId params={params.id} />;
}
