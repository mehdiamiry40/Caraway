import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import FAQPage, { allFaqs } from "@/views/FAQPage";
import { breadcrumbListSchema } from "@/lib/breadcrumb-schema";
import { SITE_URL } from "@/lib/site";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "FAQ" },
];

export const metadata: Metadata = {
  title: "FAQ | Cash for Cars Brisbane Questions Answered — Caraway",
  description:
    "Frequently asked questions about selling your car for cash in Brisbane. Learn about our process, pricing, towing, paperwork, and service areas.",
  alternates: { canonical: "/faq" },
  openGraph: {
    url: "/faq",
    title: "FAQ | Cash for Cars Brisbane Questions Answered — Caraway",
    description:
      "Frequently asked questions about selling your car for cash in Brisbane.",
    images: [{ url: "/images/tow-truck-hero.webp", width: 1200, height: 800, alt: "Caraway cash for cars Brisbane" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function FaqRoutePage() {
  const canonical = `${SITE_URL}/faq`;
  const faqStructuredData = [
    {
      "@type": "FAQPage",
      mainEntity: allFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    breadcrumbListSchema(breadcrumbs, canonical),
  ];

  return (
    <>
      <JsonLd data={faqStructuredData} />
      <FAQPage />
    </>
  );
}
