"use client";
import Link from "next/link";
import Input from "../elements/Input";
import ToggleDarkMode from "../elements/ToggleDarkMode";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/common/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 flex h-28 w-full flex-row items-center justify-evenly bg-white">
      <Image
        src="/meta-blog.svg"
        alt="logo"
        width={300}
        height={300}
        className="h-16 w-32"
      />
      <div className="space-x-10 text-charcoal">
        <Link
          href={"/"}
          className={cn("", {
            "border-b-4 border-b-sky pb-1 transition-all duration-100":
              pathname == "/",
          })}
        >
          Home
        </Link>
        <Link
          href={"/blog"}
          className={cn("", {
            "border-b-4 border-b-sky pb-1 transition-all duration-100":
              pathname == "/blog",
          })}
        >
          Blog
        </Link>
        <Link
          href={"/"}
          className={cn("", {
            "border-b-4 border-b-sky pb-1 transition-all duration-100":
              pathname == "/single-post",
          })}
        >
          Single Post
        </Link>
        <Link
          href={"/"}
          className={cn("", {
            "border-b-4 border-b-sky pb-1 transition-all duration-100":
              pathname == "/pages",
          })}
        >
          Pages
        </Link>
        <Link
          href={"/"}
          className={cn("", {
            "border-b-4 border-b-sky pb-1 transition-all duration-100":
              pathname == "/contact",
          })}
        >
          Contact
        </Link>
      </div>
      <div className="flex flex-row items-center gap-5">
        <Input type="text" placeholder="Search" />
        <ToggleDarkMode />
      </div>
    </nav>
  );
}
