"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../elements/Button";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { cn } from "@/common/lib/utils";

export default function WriterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="flex w-full flex-row">
      <div className="fixed flex min-h-screen w-44 flex-col items-center bg-white py-10 shadow-md">
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
      <div className="ml-60 w-full">{children}</div>
    </div>
  );
}
