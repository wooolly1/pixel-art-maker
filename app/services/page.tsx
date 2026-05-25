import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Socials } from "@/components/sections/Socials";
import { MapBlock } from "@/components/sections/MapBlock";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Services & Contact — Lumen",
  description:
    "Ten practices, one studio. Branding, web, mobile, UI/UX, marketing, SEO, AI and automation. Get a tailored proposal in one working day.",
};

export default function ServicesContactPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <Pricing />
      <FAQ />
      <Contact />
      <Socials />
      <MapBlock />
      <CTABanner />
    </>
  );
}
