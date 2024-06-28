import Button from "@/common/components/elements/Button";
import TopBlog from "./TopBlog";
import LatestBlog from "./LatestBlog";
import TrendingBlog from "./Trending";
export default function Home() {
  return (
    <div className="w-full">
      <TopBlog />
      <TrendingBlog />
      <LatestBlog />
    </div>
  );
}
