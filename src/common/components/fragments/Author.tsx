import { cn } from "@/common/lib/utils";

export default function Author({
  name,
  image,
  variant = "gray",
  date,
}: {
  name: string;
  image: string;
  variant?: "white" | "gray";
  date: string;
}) {
  return (
    <div
      className={cn("flex flex-row items-center gap-3", {
        "text-gray300": variant == "gray",
        "text-white": variant == "white",
      })}
    >
      <div className="size-9 bg-[url('/author.png')] bg-cover bg-center" />
      <span className="font-mediumtext-gray300 text-base">{name}</span>
      <span className="text-basetext-gray300">{date}</span>
    </div>
  );
}
