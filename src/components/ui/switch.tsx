"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "relative h-[26px] w-11 flex-none cursor-pointer rounded-full border-2 border-cream bg-transparent transition-colors",
        "data-[state=checked]:border-matcha data-[state=checked]:bg-matcha",
        "focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-custard",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb className="block size-[18px] translate-x-[2px] rounded-full bg-cream transition-transform data-[state=checked]:translate-x-[20px] data-[state=checked]:bg-ink" />
    </SwitchPrimitive.Root>
  );
}
