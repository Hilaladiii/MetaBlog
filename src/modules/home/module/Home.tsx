import TopBlog from "./TopBlog";
import LatestBlog from "./LatestBlog";
import TrendingBlog from "./Trending";

export default function Home() {
  return (
    <div className="dark:bg-dark2 w-full">
      <TopBlog />
      <TrendingBlog />
      <LatestBlog />
    </div>
  );
}
