import { getDataById } from "@/common/db/blog";

export default async function DetailMyPost({
  params,
}: {
  params: { id: string };
}) {
  const data = await getDataById("posts", params.id);
  return <div>hello</div>;
}
