"use client";

import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/9611555901?text=Hi%20Lumen%2C%20I'd%20love%20to%20start%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_-10px_rgba(37,211,102,0.6)]"
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 blur-xl"
      />
      <span
        aria-hidden
        className="absolute -inset-1 -z-10 animate-pulse-glow rounded-full bg-[#25D366]/40 blur-2xl"
      />
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-current transition-transform duration-300 group-hover:rotate-[8deg]"
        aria-hidden="true"
      >
        <path d="M12.04 2.003c-5.523 0-10 4.477-10 10 0 1.764.46 3.485 1.335 5.003L2 22l5.123-1.343A9.953 9.953 0 0 0 12.04 22c5.523 0 10-4.477 10-10s-4.477-9.997-10-9.997Zm0 18.131c-1.572 0-3.107-.422-4.45-1.222l-.319-.19-3.04.797.811-2.96-.208-.305a8.122 8.122 0 0 1-1.255-4.252c0-4.49 3.652-8.142 8.461-8.142 2.262 0 4.387.881 5.988 2.482a8.408 8.408 0 0 1 2.481 5.985c0 4.49-3.652 8.807-8.469 8.807Zm4.625-6.094c-.252-.126-1.495-.738-1.727-.822-.232-.084-.401-.126-.57.126-.169.253-.652.822-.799.99-.148.169-.295.19-.547.063-.252-.126-1.065-.392-2.029-1.252-.75-.668-1.256-1.494-1.404-1.747-.148-.252-.016-.388.111-.514.114-.114.252-.295.378-.443.126-.148.169-.253.253-.422.084-.169.042-.317-.021-.443-.063-.126-.57-1.372-.781-1.881-.207-.494-.418-.427-.57-.435-.148-.008-.317-.01-.486-.01a.93.93 0 0 0-.677.317c-.232.252-.886.866-.886 2.113s.907 2.45 1.034 2.619c.126.169 1.785 2.724 4.323 3.82.604.261 1.075.417 1.443.534.606.193 1.158.166 1.594.101.486-.073 1.495-.611 1.706-1.2.21-.59.21-1.094.148-1.2-.063-.105-.231-.169-.483-.295Z" />
      </svg>
    </motion.a>
  );
}
