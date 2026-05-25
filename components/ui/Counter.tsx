"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  value: string;
  duration?: number;
};

export function Counter({ value, duration = 1.8 }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [text, setText] = useState(value.replace(/\d/g, "0"));

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/(\d+(?:\.\d+)?)/);
    if (!match) {
      setText(value);
      return;
    }
    const target = parseFloat(match[1]);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[1].length);
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 4);
      const cur = target * eased;
      const formatted =
        match[1].includes(".") ? cur.toFixed(1) : Math.floor(cur).toString();
      setText(`${prefix}${formatted}${suffix}`);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  return <span ref={ref}>{text}</span>;
}
