import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { BrandStory } from "@/components/sections/BrandStory";
import { VisionMission } from "@/components/sections/VisionMission";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { Philosophy } from "@/components/sections/Philosophy";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About — Lumen",
  description:
    "Lumen is a 22-person creative tech studio across Beirut, Dubai and remote — building brands, products and AI systems for ambitious teams.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BrandStory />
      <VisionMission />
      <WhyChooseUs />
      <Process />
      <Team />
      <Philosophy />
      <CTA />
    </>
  );
}
