"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 800, damping: 40, mass: 0.3 });
  const dotY = useSpring(y, { stiffness: 800, damping: 40, mass: 0.3 });
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 });

  const [hover, setHover] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    const fine =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;
    setSupported(fine);
    if (!fine) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t) return;
      const interactive = t.closest(
        "a, button, [data-cursor='hover'], input, textarea, [role='button']"
      );
      setHover(!!interactive);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  if (!supported) return null;

  return (
    <>
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-1.5 w-1.5 rounded-full bg-ink-900" />
      </motion.div>
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hover ? 1.8 : 1, opacity: hover ? 1 : 0.5 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed left-0 top-0 z-[99] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <div className="h-9 w-9 rounded-full border border-cream-100/80" />
      </motion.div>
    </>
  );
}
