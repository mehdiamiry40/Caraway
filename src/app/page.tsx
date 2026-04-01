import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/data/home-faqs";
import { reviews } from "@/data/reviews";
import Home from "@/views/Home";

export const metadata: Metadata = {
  title:
    "Cash for Cars Brisbane | Caraway — Same-Day Cash & Free Towing",
  description:
    "Cash for cars Brisbane: fair quotes, free removal, and payment on pickup. Caraway buys any make or condition — up to $9,999. Greater Brisbane, 7 days. Call 1800 227 293 for a free quote.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title:
      "Cash for Cars Brisbane | Caraway — Same-Day Cash & Free Towing",
    description:
      "Cash for cars Brisbane: fair quotes, free removal, and payment on pickup. Caraway buys any make or condition — up to $9,999. Greater Brisbane, 7 days.",
  },
};

export default function HomePage() {
  const homeStructuredData = [
    {
      "@type": "WebPage",
      "@id": "https://caraway.au/#webpage",
      url: "https://caraway.au/",
      name: "Cash for Cars Brisbane | Caraway",
      description:
        "Cash for cars Brisbane service: instant quotes, free towing, same-day cash payment. We buy damaged, old, scrap, and running vehicles across Greater Brisbane.",
      isPartOf: { "@id": "https://caraway.au/#website" },
      about: {
        "@type": "Service",
        name: "Cash for cars Brisbane",
        areaServed: { "@type": "City", name: "Brisbane" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    ...reviews.map((r) => ({
      "@type": "Review" as const,
      author: { "@type": "Person" as const, name: r.name },
      reviewRating: {
        "@type": "Rating" as const,
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.text,
      itemReviewed: {
        "@type": "LocalBusiness" as const,
        "@id": "https://caraway.au/#business",
        name: "Caraway — Cash for Cars Brisbane",
      },
    })),
  ];

  return (
    <>
      <JsonLd data={homeStructuredData} />
      <Home />
    </>
  );
}

