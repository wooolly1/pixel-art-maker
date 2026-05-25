import type { Metadata } from "next";
import { Inter, Fraunces, Tajawal } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { Cursor } from "@/components/shared/Cursor";
import { PageLoader } from "@/components/shared/PageLoader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-tajawal",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Lumen — Creative Tech Agency",
  description:
    "Lumen is a creative tech agency designing brands, products and AI systems for the next decade.",
  metadataBase: new URL("https://lumen.agency"),
  openGraph: {
    title: "Lumen — Creative Tech Agency",
    description:
      "Brand, product and AI work for ambitious teams. Designed in Beirut, shipping worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${tajawal.variable}`}
    >
      <body className="font-sans bg-cream-100 text-ink-900 antialiased">
        <PageLoader />
        <Cursor />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
