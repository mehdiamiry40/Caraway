import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Locations from "@/views/Locations";
import { breadcrumbListSchema } from "@/lib/breadcrumb-schema";
import { SITE_URL } from "@/lib/site";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Locations" },
];

export const metadata: Metadata = {
  title: "Cash for Cars Brisbane Locations | All Suburbs Serviced — Caraway",
  description:
    "Caraway services all Brisbane suburbs. Find cash for cars in your area — North Brisbane, South Brisbane, Logan, Ipswich, Redcliffe & more. Free removal.",
  alternates: { canonical: "/locations" },
  openGraph: {
    url: "/locations",
    title: "Cash for Cars Brisbane Locations | All Suburbs Serviced — Caraway",
    description:
      "Caraway services all Brisbane suburbs. Find cash for cars in your area.",
    images: [{ url: "/images/tow-truck-hero.webp", width: 1200, height: 800, alt: "Caraway cash for cars Brisbane" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function LocationsPage() {
  const canonical = `${SITE_URL}/locations`;
  return (
    <>
      <JsonLd data={breadcrumbListSchema(breadcrumbs, canonical)} />
      <Locations />
    </>
  );
}
