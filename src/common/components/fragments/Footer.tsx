import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer
      className={`mt-36 bg-secondary100 py-8 ${plus_jakarta_sans.className}`}
    >
      <div className="mx-auto flex max-w-[68em] flex-wrap justify-between">
        <div className="px-4 md:w-1/4">
          <h2 className="mb-4 text-xl font-semibold">About</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p className="mt-4">
            <strong>Email:</strong> metablog@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> 889 121 454 769
          </p>
        </div>
        <div className="flex flex-row justify-between gap-20">
          <div className="">
            <h2 className="mb-4 text-lg font-semibold">Quick Link</h2>
            <ul className="text-gray-600">
              <li className="mb-2">
                <a href="#">Home</a>
              </li>
              <li className="mb-2">
                <a href="#">About</a>
              </li>
              <li className="mb-2">
                <a href="#">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#">Archived</a>
              </li>
              <li className="mb-2">
                <a href="#">Author</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="px-4">
            <h2 className="mb-4 text-xl font-semibold">Category</h2>
            <ul className="text-gray-600">
              <li className="mb-2">
                <a href="#">Lifestyle</a>
              </li>
              <li className="mb-2">
                <a href="#">Technology</a>
              </li>
              <li className="mb-2">
                <a href="#">Travel</a>
              </li>
              <li className="mb-2">
                <a href="#">Business</a>
              </li>
              <li className="mb-2">
                <a href="#">Economy</a>
              </li>
              <li>
                <a href="#">Sports</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/4">
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
      <div className="mx-auto mt-8 flex max-w-[68em] flex-wrap items-center justify-between border-t border-gray-300 pt-4">
        <Image
          src="/meta-blog.svg"
          alt="logo"
          width={300}
          height={300}
          className="h-16 w-32"
        />
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600">
            Terms of Use
          </a>
          <a href="#" className="text-gray-600">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
