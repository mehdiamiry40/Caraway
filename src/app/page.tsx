import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/data/home-faqs";
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

/** Testimonial data mirrored here for JSON-LD (keeps component file clean). */
const reviews = [
  { name: "Jason M.", location: "Chermside", rating: 5, text: "Dead Commodore in the carport — they quoted over the phone and stuck to it at pickup. Cash before the truck left.", car: "2009 Holden Commodore" },
  { name: "Sarah K.", location: "Ipswich", rating: 5, text: "Written off in a bingle. Same-day pickup, no haggling on the day.", car: "2014 Toyota Camry" },
  { name: "Derek T.", location: "Capalaba", rating: 4, text: "Other place tried to chip the price when they arrived. These guys matched what they said.", car: "2006 Ford Falcon" },
  { name: "Priya S.", location: "Sunnybank", rating: 5, text: "Scrap Mazda sitting a year. $950, gone in under an hour. Fine by me.", car: "2005 Mazda 3" },
  { name: "Michael B.", location: "North Lakes", rating: 5, text: "Couldn't move it privately. They did the transfer paperwork — I didn't have to queue at Transport.", car: "2011 Nissan Dualis" },
];

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

