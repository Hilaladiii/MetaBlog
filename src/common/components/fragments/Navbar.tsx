"use client";
import Link from "next/link";
import Input from "../elements/Input";
import ToggleDarkMode from "../elements/ToggleDarkMode";
import { usePathname } from "next/navigation";
import { cn } from "@/common/lib/utils";
import Button from "../elements/Button";
import { signOut } from "next-auth/react";
import { LuUser } from "react-icons/lu";
import Logo from "../elements/Logo";

export default function Navbar({
  initialTheme,
}: {
  initialTheme: { theme: "dark" | "light" };
}) {
  const pathname = usePathname();

  return (
    <nav className="dark:bg-dark2 dark:text-light fixed top-0 z-50 flex h-28 w-full flex-row items-center justify-around bg-white">
      <Logo />
      <div className="dark:text-light space-x-10 text-charcoal">
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
        />
        <ToggleDarkMode initialValue={initialTheme.theme} />
        <div className="group relative">
          <LuUser size={25} />
          <div className="dark:bg-dark1 dark:text-light absolute hidden space-y-3 rounded bg-white p-2 shadow-md group-hover:flex group-hover:flex-col">
            <Link href={"/"}>My Profile</Link>
            <Link href={"/"}>My Favorite</Link>
            <Button onClick={() => signOut()} variant="black" size="small">
              SignOut
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
