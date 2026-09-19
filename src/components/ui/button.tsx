import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full border-2 border-transparent font-bold leading-none no-underline transition-transform hover:-translate-y-0.5 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-custard text-ink",
        matcha: "bg-matcha text-ink",
        ghost: "border-cream text-cream",
      },
      size: {
        default: "px-[1.35em] py-[0.75em] text-base",
        sm: "px-[1.1em] py-[0.6em] text-[15px]",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp data-btn className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
