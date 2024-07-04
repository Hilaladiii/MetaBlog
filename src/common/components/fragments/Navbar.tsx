"use client";
import Link from "next/link";
import Input from "../elements/Input";
import ToggleDarkMode from "../elements/ToggleDarkMode";
import { usePathname } from "next/navigation";
import { cn } from "@/common/lib/utils";
import Button from "../elements/Button";
import { signOut } from "next-auth/react";
import { LuUser, LuMenu, LuX } from "react-icons/lu";
import Logo from "../elements/Logo";
import { useState } from "react";

export default function Navbar({
  initialTheme,
}: {
  initialTheme: { theme: "dark" | "light" };
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 z-50 flex h-28 w-full flex-row items-center justify-around bg-white dark:bg-dark2 dark:text-light">
      <Link href="/" className="cursor-pointer">
        <Logo />
      </Link>
      <div className="hidden space-x-10 text-charcoal dark:text-light md:flex">
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
              pathname.includes("/blog"),
          })}
        >
          Blog
        </Link>
      </div>
      <div className="flex flex-row items-center gap-5">
        <Input
          variant="secondary"
          type="text"
          placeholder="Search"
          name="search"
          className="hidden md:flex"
        />
        <ToggleDarkMode initialValue={initialTheme.theme} />
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <LuX size={25} /> : <LuMenu size={25} />}
        </button>
        <div className="group relative hidden md:flex">
          <LuUser size={25} />
          <div className="absolute -bottom-32 hidden space-y-3 rounded bg-white p-2 shadow-md group-hover:flex group-hover:flex-col dark:bg-dark1 dark:text-light">
            <Link href={"/"}>My Profile</Link>
            <Link href={"/"}>My Favorite</Link>
            <Button onClick={() => signOut()} variant="black" size="small">
              SignOut
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute -bottom-28 right-5 z-50 flex flex-col gap-3 bg-white p-5 shadow-md dark:bg-dark2 dark:text-white">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Button onClick={() => signOut()} variant="black" size="small">
            SignOut
          </Button>
        </div>
      )}
    </nav>
  );
}
