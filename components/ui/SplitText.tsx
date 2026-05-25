"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
};

export function SplitText({ text, className, delay = 0.2, stagger = 0.05 }: Props) {
  const words = text.split(" ");
  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {words.map((word, wi) => (
        <span
          key={wi}
          className="inline-block overflow-hidden align-baseline pb-[0.1em]"
        >
          <motion.span
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.95,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + wi * stagger,
            }}
            className="inline-block will-change-transform"
          >
            {word}
            {wi !== words.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
