import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF8F3",
          100: "#F8F4EE",
          200: "#F2EBE0",
          300: "#E8DECC",
        },
        ink: {
          50: "#E6E8EE",
          100: "#9CA3B0",
          400: "#3A4150",
          700: "#1A1D24",
          800: "#11141B",
          900: "#0A0E1A",
          950: "#06080F",
        },
        rose: {
          50: "#FDF3F3",
          100: "#F9E0E0",
          200: "#F5D0D0",
          300: "#EDB4B6",
          400: "#E29A9D",
          500: "#D17A7E",
        },
        gold: {
          100: "#F0E4CC",
          200: "#E1CDA1",
          300: "#D2B679",
          400: "#C9A876",
          500: "#B8956A",
          600: "#9C7E55",
          700: "#7C6342",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        arabic: ["var(--font-tajawal)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.06em",
        extratight: "-0.04em",
      },
      backgroundImage: {
        "grain":
          "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        "gold-shine":
          "linear-gradient(120deg, #B8956A 0%, #E1CDA1 35%, #F0E4CC 50%, #E1CDA1 65%, #B8956A 100%)",
      },
      animation: {
        "float": "float 8s ease-in-out infinite",
        "float-slow": "float 14s ease-in-out infinite",
        "shine": "shine 6s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "blob": "blob 18s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-22px)" },
        },
        shine: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.85" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.08)" },
          "66%": { transform: "translate(-30px,30px) scale(0.95)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
