# Lumen — Creative Tech Agency

A premium, modern, futuristic agency website built with **Next.js 14**, **TypeScript**, **Tailwind CSS** and **Framer Motion**.

## Pages

1. **Home** — `/`
2. **About** — `/about`
3. **Services & Contact** — `/services`

## Design system

- Soft cream / off-white backgrounds (`cream-50` → `cream-300`)
- Muted gold details with animated gradient shine (`gold-100` → `gold-700`)
- Light pink accents (`rose-100` → `rose-500`)
- Dark navy / charcoal sections for contrast (`ink-700` → `ink-950`)
- Glassmorphism cards, subtle glowing orbs, animated gradient marquees
- Typography: Fraunces (display, light), Inter (sans), Tajawal (Arabic)

## Animations

- Page loader with animated brandmark
- Custom dot + ring cursor with `mix-blend-difference`
- Hero text reveal with split-word reveal
- Parallax orbs that react to mouse position
- Scroll-triggered fade/slide reveals on every section
- Marquees, counter-on-scroll, hover lift, magnetic buttons
- Layout-id animated nav pill, FAQ accordion, testimonial slider

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project structure

```
app/
  layout.tsx
  page.tsx                # Home
  about/page.tsx
  services/page.tsx       # Services & Contact
  globals.css
components/
  layout/                 # Navbar, Footer
  shared/                 # Cursor, PageLoader, WhatsAppButton
  ui/                     # Reveal, SplitText, Marquee, Magnetic, Counter, AuroraBackground, Eyebrow
  sections/               # All home/about/services sections
lib/
  data.ts                 # Services, projects, team, testimonials, pricing, FAQs
  motion.ts               # Shared variants
  cn.ts                   # className helper
```

## Notes

- Fully responsive, mobile-first.
- Reduced-motion preferences are respected.
- Images pulled from Unsplash via Next.js image optimization.
