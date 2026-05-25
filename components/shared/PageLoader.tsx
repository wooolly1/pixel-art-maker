"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] grid place-items-center bg-cream-100"
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
                <defs>
                  <linearGradient id="loader-grad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#C9A876" />
                    <stop offset="1" stopColor="#1A1D24" />
                  </linearGradient>
                </defs>
                <motion.circle
                  cx="36"
                  cy="36"
                  r="30"
                  fill="none"
                  stroke="url(#loader-grad)"
                  strokeWidth="1"
                  strokeDasharray="188.5"
                  initial={{ strokeDashoffset: 188.5 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.circle
                  cx="36"
                  cy="36"
                  r="12"
                  fill="url(#loader-grad)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  style={{ transformOrigin: "36px 36px" }}
                />
              </svg>
            </motion.div>
            <div className="flex items-baseline gap-2 overflow-hidden">
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-2xl tracking-tight"
              >
                Lumen
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-[11px] uppercase tracking-[0.32em] text-ink-900/50"
              >
                Studio
              </motion.span>
            </div>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
