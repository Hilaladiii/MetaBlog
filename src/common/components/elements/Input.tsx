import { cn } from "@/common/lib/utils";
import { HtmlHTMLAttributes, forwardRef } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  type: "text" | "number" | "email" | "password";
  placeholder: string;
  size?: "default" | "small" | "large" | "full";
  name: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size = "default", placeholder, name, ...props }, ref) => {
    return (
      <input
        ref={ref}
        name={name}
        type={type}
        placeholder={placeholder}
        className={cn(
          `rounded-md bg-secondary100 px-4 py-1 placeholder:text-sm placeholder:text-secondary400 ${inter.className}`,
          {
            "w-44": size == "default",
            "w-full": size == "full",
            "w-24": size == "small",
            "w-64": size == "large",
          },
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
