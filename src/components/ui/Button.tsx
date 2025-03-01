
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "mauve";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 disabled:cursor-not-allowed",
          "before:absolute before:inset-0 before:rounded-lg before:transition-all before:duration-300",
          "hover:before:opacity-90 active:scale-[0.98]",
          {
            "text-black bg-white before:bg-white/0 hover:before:bg-black/10": variant === "primary",
            "border border-white/20 text-white hover:bg-white/5": variant === "outline",
            "text-white bg-transparent hover:bg-white/5": variant === "ghost",
            "text-white bg-mauve hover:bg-mauve-dark before:bg-white/0 hover:before:bg-black/10": variant === "mauve",
            "text-xs px-3 py-2": size === "sm",
            "text-sm px-4 py-2.5": size === "md",
            "text-base px-6 py-3": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
