import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Contact from "@/views/Contact";
import { breadcrumbListSchema } from "@/lib/breadcrumb-schema";
import { SITE_URL } from "@/lib/site";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Contact Us" },
];

export const metadata: Metadata = {
  title: "Contact Caraway | Cash for Cars Brisbane | 1800 227 293",
  description:
    "Contact Caraway for a free cash quote on your car. Call 1800 227 293 or fill out our form. Brisbane-wide service, 7 days a week, same-day pickup.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact Caraway | Cash for Cars Brisbane | 1800 227 293",
    description:
      "Contact Caraway for a free cash quote on your car. Call 1800 227 293 or fill out our form.",
  },
};

export default function ContactPage() {
  const canonical = `${SITE_URL}/contact`;
  return (
    <>
      <JsonLd data={breadcrumbListSchema(breadcrumbs, canonical)} />
      <Contact />
    </>
  );
}
