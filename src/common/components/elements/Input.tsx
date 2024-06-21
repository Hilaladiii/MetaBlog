import { cn } from "@/common/lib/utils";
import { HtmlHTMLAttributes } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  type: "text" | "number";
  placeholder: string;
  size?: "default" | "small" | "large" | "full";
}

export default function Input({
  className,
  type,
  size = "default",
  placeholder,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      {...props}
      placeholder={placeholder}
      className={cn(
        `bg-secondary100 placeholder:text-secondary400 rounded-md px-4 py-2 ${inter.className}`,
        {
          "w-44": size == "default",
        },
      )}
    />
  );
}
