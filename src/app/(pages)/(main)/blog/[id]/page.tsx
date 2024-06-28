import BlogId from "@/modules/blog-id";

export default function DetailBlogPage({ params }: { params: { id: string } }) {
  return <BlogId params={params.id} />;
}
