import Button from "@/common/components/elements/Button";
import TopBlog from "./TopBlog";
import LatestBlog from "./LatestBlog";
export default function Home() {
  return (
    <div className="w-full">
      <TopBlog />
      <LatestBlog />
    </div>
  );
}
