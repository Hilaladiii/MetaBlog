import dynamic from "next/dynamic";

const BlogPostDynamic = dynamic(() => import("@/modules/writer-post"), {
  ssr: false,
});

export default function WriterPost() {
  return <BlogPostDynamic />;
}
