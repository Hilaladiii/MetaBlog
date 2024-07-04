import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Logo from "../elements/Logo";
import Link from "next/link";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer
      className={`mt-36 bg-secondary100 py-8 dark:bg-dark1 dark:text-light ${plus_jakarta_sans.className}`}
    >
      <div className="mx-auto flex max-w-[68em] flex-wrap justify-between">
        <div className="px-4 md:w-1/4">
          <h2 className="mb-4 text-xl font-semibold">About</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p className="mt-4 hidden md:flex">
            <strong>Email:</strong> metablog@gmail.com
          </p>
          <p className="hidden md:flex">
            <strong>Phone:</strong> 889 121 454 769
          </p>
        </div>
        <div className="mt-4 flex flex-col justify-between md:mt-0 md:flex-row md:gap-20">
          <div className="px-4">
            <h2 className="mb-2 text-lg font-semibold md:mb-4">Quick Link</h2>
            <div className="flex flex-wrap gap-2 text-gray-600 md:flex-col">
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Archived</Link>
              <Link href="/">Author</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
          <div className="px-4">
            <h2 className="mb-2 text-lg font-semibold md:mb-4">Category</h2>
            <div className="flex flex-wrap gap-2 text-gray-600 md:flex-col">
              <Link href="/">Lifestyle</Link>
              <Link href="/">Technology</Link>
              <Link href="/">Travel</Link>
              <Link href="/">Business</Link>
              <Link href="/">Economy</Link>
              <Link href="/">Sports</Link>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full px-4 md:mt-0 md:w-1/4">
          <h2 className="mb-4 text-xl font-semibold">Weekly Newsletter</h2>
          <p className="mb-4 text-gray-600">
            Get blog articles and offers via email
          </p>
          <form>
            <input
              type="email"
              placeholder="Your Email"
              className="mb-4 w-full rounded border border-gray-300 px-4 py-2"
            />
            <button
              type="submit"
              className="w-full rounded bg-blue-600 px-4 py-2 text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-8 flex flex-col items-center justify-between gap-5 border-t border-gray-300 px-4 pt-4 md:max-w-[68em] md:flex-row md:px-0">
        <Logo />
        <div className="flex space-x-4 text-gray-600">
          <Link href="/">Terms of Use</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
