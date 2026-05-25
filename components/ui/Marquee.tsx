"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: number;
};

export function Marquee({ children, className, reverse = false, speed = 40 }: Props) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        className="flex w-max gap-12 whitespace-nowrap"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center gap-12">
          {children}
        </div>
      </div>
    </div>
  );
}
