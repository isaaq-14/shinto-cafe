"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;

export function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return <TabsPrimitive.List className={cn("flex gap-2 overflow-x-auto p-[7px] -m-[4px]", className)} {...props} />;
}

export function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "flex-none cursor-pointer rounded-full border-2 border-cream/60 bg-transparent px-[1.15em] py-[0.65em] text-[15px] font-semibold leading-none text-cream transition-colors hover:border-cream focus-visible:outline-offset-2",
        "data-[state=active]:border-cream data-[state=active]:bg-cream data-[state=active]:text-shinto",
        className,
      )}
      {...props}
    />
  );
}

export function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content className={cn("outline-none", className)} {...props} />;
}
