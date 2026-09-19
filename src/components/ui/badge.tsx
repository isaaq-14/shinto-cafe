import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("inline-block whitespace-nowrap rounded-full bg-tomato px-[0.6em] py-[0.2em] text-[11.5px] font-extrabold text-ink", className)}
      {...props}
    />
  );
}
