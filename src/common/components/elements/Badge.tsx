import { cn } from "@/common/lib/utils";

export default function Badge({ title }: { title: string }) {
  return (
    <span
      className={cn("rounded-sm px-3 py-1 text-xs text-white", {
        "bg-sky": title == "technology",
        "bg-green-500": title == "education",
        "bg-red-500": title == "health",
        "bg-orange-500": title == "economic",
      })}
    >
      {title.substring(0, 1).toUpperCase() + title.substring(1, title.length)}
    </span>
  );
}
