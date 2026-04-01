import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import About from "@/views/About";
import { breadcrumbListSchema } from "@/lib/breadcrumb-schema";
import { SITE_URL } from "@/lib/site";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "About Caraway" },
];

export const metadata: Metadata = {
  title: "About Caraway | Cash for Cars Brisbane",
  description:
    "Learn about Caraway — Brisbane cash for cars and removal. Local team, upfront pricing, 7-day phone support.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About Caraway | Cash for Cars Brisbane",
    description:
      "Learn about Caraway — Brisbane cash for cars and removal. Local team, upfront pricing, 7-day phone support.",
    images: [{ url: "/images/tow-truck-hero.webp", width: 1200, height: 800, alt: "Caraway cash for cars Brisbane" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function AboutPage() {
  const canonical = `${SITE_URL}/about`;
  return (
    <>
      <JsonLd data={breadcrumbListSchema(breadcrumbs, canonical)} />
      <About />
    </>
  );
}
