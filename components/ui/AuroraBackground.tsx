"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function AuroraBackground() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const sx = useSpring(x, { stiffness: 80, damping: 20 });
  const sy = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX / window.innerWidth);
      y.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  const orb1X = useTransform(sx, (v) => `${10 + v * 20}%`);
  const orb1Y = useTransform(sy, (v) => `${5 + v * 18}%`);
  const orb2X = useTransform(sx, (v) => `${60 - v * 15}%`);
  const orb2Y = useTransform(sy, (v) => `${55 - v * 18}%`);
  const orb3X = useTransform(sx, (v) => `${40 + v * 10}%`);
  const orb3Y = useTransform(sy, (v) => `${75 - v * 10}%`);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ left: orb1X, top: orb1Y }}
        className="absolute h-[42vw] w-[42vw] max-h-[640px] max-w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full glow-rose"
      />
      <motion.div
        style={{ left: orb2X, top: orb2Y }}
        className="absolute h-[36vw] w-[36vw] max-h-[560px] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full glow-gold"
      />
      <motion.div
        style={{ left: orb3X, top: orb3Y }}
        className="absolute h-[28vw] w-[28vw] max-h-[440px] max-w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full glow-ink opacity-60"
      />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(15,20,40,0.06)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    </div>
  );
}
