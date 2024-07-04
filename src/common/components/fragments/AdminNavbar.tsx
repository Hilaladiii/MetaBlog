import Link from "next/link";
import Button from "../elements/Button";
import Image from "next/image";
import { cn } from "@/common/lib/utils";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import Logo from "../elements/Logo";
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function AdminNavbar() {
  const pathname = usePathname();
  return (
    <div>
      <div className="fixed hidden min-h-screen w-44 flex-col items-center bg-white py-10 shadow-md md:flex">
        <Image
          src="/meta-blog.svg"
          alt="logo"
          width={300}
          height={300}
          className="h-16 w-32"
        />
        <div className="my-auto flex flex-col items-center gap-5">
          <Link
            href="/writer/my-post"
            className={cn("text-center", {
              underline: pathname == "/writer/my-post",
            })}
          >
            My-Posts
          </Link>
          <Link
            href="/writer/post"
            className={cn("text-center", {
              underline: pathname == "/writer/post",
            })}
          >
            Create Post
          </Link>
        </div>
        <Button
          variant="secondary"
          className="text-xs"
          onClick={() => signOut()}
        >
          Sign Out
        </Button>
      </div>
      <div className="fixed z-50 mx-auto flex w-full flex-col items-center justify-evenly bg-white py-5 shadow-md md:hidden">
        <Logo />
        <div className="mt-5 flex w-full flex-row items-center justify-around">
          <div className="space-x-4">
            <Link href="/writer/my-post">My-Post</Link>
            <Link href="/writer/post">Create-Post</Link>
          </div>
          <Button onClick={() => signOut()} variant="black" className="text-xs">
            <RiLogoutCircleRLine />
          </Button>
        </div>
      </div>
    </div>
  );
}
