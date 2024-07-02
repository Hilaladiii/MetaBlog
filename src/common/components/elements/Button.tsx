import { cn } from "@/common/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "black" | "button1";
  size?: "big" | "small" | "full";
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "small",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "rounded text-base font-medium transition-colors duration-300",
        {
          "px-8 py-3": size === "big",
          "px-5 py-2": size === "small",
          "w-full px-5 py-2": size === "full",
          "bg-secondary2 hover:bg-hover1 text-white": variant === "primary",
          "hover:text-text1 border border-black/50 bg-white text-black hover:border-black/30 hover:bg-white/30":
            variant === "secondary",
          "bg-black text-white hover:bg-black/80 disabled:bg-black/40":
            variant === "black",
          "bg-button1 text-text hover:bg-button1/80": variant == "button1",
        },
        className,
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
