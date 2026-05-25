import {
  Sparkles,
  PenTool,
  Globe,
  Smartphone,
  Layout,
  Search,
  Megaphone,
  Target,
  Bot,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "branding",
    title: "Branding & Identity",
    short: "Identity systems that endure",
    description:
      "Strategy-led brand systems — voice, logo, color, type and motion — built to compound recognition across every touchpoint.",
    icon: Sparkles,
    features: ["Brand strategy", "Visual identity", "Guidelines", "Naming"],
  },
  {
    slug: "logo",
    title: "Logo Design",
    short: "Marks designed to outlast trends",
    description:
      "Distinct, modular logo systems crafted with timeless geometry and meticulous typographic detail.",
    icon: PenTool,
    features: ["Concepts", "Refinement", "Lockups", "Export kits"],
  },
  {
    slug: "web",
    title: "Website Development",
    short: "Sites that feel like products",
    description:
      "Performant, accessible, story-driven sites built with Next.js, TypeScript, and motion that breathes.",
    icon: Globe,
    features: ["Next.js builds", "Headless CMS", "SEO", "Edge hosting"],
  },
  {
    slug: "mobile",
    title: "Mobile Apps",
    short: "Native-feel apps, cross-platform",
    description:
      "iOS and Android apps with crafted micro-interactions, offline-first sync and analytics from day one.",
    icon: Smartphone,
    features: ["iOS & Android", "React Native", "Design systems", "Analytics"],
  },
  {
    slug: "uiux",
    title: "UI / UX Design",
    short: "Interfaces with intent",
    description:
      "Research-grounded product design. Wireframes, prototypes, and pixel-tight interfaces that convert.",
    icon: Layout,
    features: ["Discovery", "Prototyping", "Design systems", "Usability"],
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    short: "Compounding organic growth",
    description:
      "Technical, on-page and content SEO that earns rankings — not loopholes. Reporting you can read.",
    icon: Search,
    features: ["Technical SEO", "Content", "Link strategy", "Analytics"],
  },
  {
    slug: "marketing",
    title: "Digital Marketing",
    short: "Full-funnel performance",
    description:
      "Acquisition, retention and lifecycle programs that respect the brand and obsess over the math.",
    icon: Megaphone,
    features: ["Paid media", "Email", "Lifecycle", "Attribution"],
  },
  {
    slug: "social-ads",
    title: "Social Media Ads",
    short: "Creative that earns the scroll",
    description:
      "Native-first ad systems with weekly creative iteration cycles, audience trees and ruthless reporting.",
    icon: Target,
    features: ["Meta", "TikTok", "LinkedIn", "Creative studio"],
  },
  {
    slug: "ai",
    title: "AI Solutions",
    short: "Models put to work",
    description:
      "Custom AI tools — copilots, classifiers, agents — wired into your stack, with evaluations and guardrails.",
    icon: Bot,
    features: ["LLM apps", "RAG", "Agents", "Evaluations"],
  },
  {
    slug: "automation",
    title: "Automation Systems",
    short: "Operations on autopilot",
    description:
      "Internal automations and workflows that compress hours into seconds and free your team for craft.",
    icon: Zap,
    features: ["Workflows", "Integrations", "Internal tools", "Dashboards"],
  },
];

export type Project = {
  title: string;
  category: string;
  year: string;
  cover: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Halo Atelier",
    category: "Branding · E-commerce",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80",
    accent: "from-rose-200 to-cream-200",
  },
  {
    title: "Northshore Capital",
    category: "Web · Identity",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
    accent: "from-ink-700 to-ink-900",
  },
  {
    title: "Solace Wellness",
    category: "Mobile · UX",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1545239351-cefa43af60f3?auto=format&fit=crop&w=1600&q=80",
    accent: "from-gold-200 to-cream-100",
  },
  {
    title: "Cobalt Labs",
    category: "AI · Product",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
    accent: "from-ink-800 to-ink-900",
  },
  {
    title: "Maison Lior",
    category: "Campaign · Social",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80",
    accent: "from-rose-100 to-rose-200",
  },
  {
    title: "Linea OS",
    category: "SaaS · Brand · UI",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
    accent: "from-cream-100 to-gold-100",
  },
];

export const testimonials = [
  {
    quote:
      "Lumen rebuilt our brand from first principles. Six months later we 3× our pipeline. They are the team I trust with the work that matters.",
    name: "Lena Park",
    title: "CMO, Northshore Capital",
  },
  {
    quote:
      "Every detail considered, every decision defensible. The kind of partner you wish you'd hired two years earlier.",
    name: "Adam Reyes",
    title: "Founder, Cobalt Labs",
  },
  {
    quote:
      "Their AI work shipped on time, on spec, with evals we still rely on. Rare combination of taste and rigor.",
    name: "Mira Khalid",
    title: "VP Product, Linea OS",
  },
];

export const stats = [
  { value: "120+", label: "Brands launched" },
  { value: "38", label: "Awwwards & FWA" },
  { value: "14", label: "Countries served" },
  { value: "98%", label: "Client retention" },
];

export const team = [
  {
    name: "Yara Hassan",
    role: "Founder · Creative Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Idris Okafor",
    role: "Head of Engineering",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sofia Marín",
    role: "Design Director",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kenji Watanabe",
    role: "Head of AI",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Noor Al-Asadi",
    role: "Brand Strategist",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Mateo Rossi",
    role: "Motion Lead",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "Workshops, interviews, audit. We surface the truth of the brand before we move a pixel.",
  },
  {
    step: "02",
    title: "Define",
    body: "Strategy, narrative and architecture. Decisions made on paper save weeks in production.",
  },
  {
    step: "03",
    title: "Design",
    body: "Identity systems, interfaces and motion — explored in parallel, refined in concert.",
  },
  {
    step: "04",
    title: "Build",
    body: "Engineering with empathy. Performance, accessibility and craft baked into the stack.",
  },
  {
    step: "05",
    title: "Launch",
    body: "Soft launch, observability, and a 90-day post-launch optimization plan.",
  },
  {
    step: "06",
    title: "Compound",
    body: "Quarterly creative sprints and AI ops to keep the brand in motion long after launch.",
  },
];

export const pricing = [
  {
    name: "Spark",
    price: "$4,800",
    period: "starting at",
    description: "For founders shaping their first brand experience.",
    features: [
      "Logo & visual identity",
      "1-page Next.js site",
      "Brand mini-guide",
      "2 design rounds",
    ],
    accent: "rose",
  },
  {
    name: "Studio",
    price: "$14,500",
    period: "starting at",
    description: "Our most-loved package for growing brands.",
    features: [
      "Full identity system",
      "Multi-page Next.js build",
      "Motion principles",
      "UX research sprint",
      "30-day post-launch retainer",
    ],
    accent: "gold",
    popular: true,
  },
  {
    name: "Atelier",
    price: "Bespoke",
    period: "let's talk",
    description: "Multi-quarter engagements for ambitious teams.",
    features: [
      "Brand + product + AI",
      "Dedicated squad",
      "Design system at scale",
      "Quarterly creative sprints",
      "Embedded engineers",
    ],
    accent: "ink",
  },
];

export const faqs = [
  {
    q: "How long does a typical engagement take?",
    a: "Spark packages run 3–4 weeks. Studio engagements run 8–12 weeks. Atelier is structured in quarterly cycles. We share a transparent timeline on day one.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Roughly 60% of our work ships outside our home market. We work fluently in English and Arabic and run our process across timezones.",
  },
  {
    q: "Can you take over an existing brand or codebase?",
    a: "Often. We start with a structured audit to map what works, what to keep, and what to rebuild — then propose the leanest path forward.",
  },
  {
    q: "What does your AI work look like in practice?",
    a: "Custom copilots, internal agents, RAG over your knowledge base, and automation that compresses hours into seconds. We always ship evaluations alongside the model.",
  },
  {
    q: "How do you handle revisions?",
    a: "Two structured revision rounds per phase, plus async micro-feedback in Figma and Linear. We design with you, not at you.",
  },
];
