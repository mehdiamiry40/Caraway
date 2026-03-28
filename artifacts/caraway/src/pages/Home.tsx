import { lazy, Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { faqs as homeFaqs } from "@/components/sections/FAQ";

const HomeBelowFold = lazy(() => import("@/pages/HomeBelowFold"));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Cash for Cars Brisbane | Caraway — Same-Day Cash & Free Towing"
        description="Cash for cars Brisbane: fair quotes, free removal, and payment on pickup. Caraway buys any make or condition — up to $9,999. Greater Brisbane, 7 days. Call 1800 227 293 for a free quote."
        canonical="https://caraway.com.au/"
        schema={[
          {
            "@type": "WebPage",
            "@id": "https://caraway.com.au/#webpage",
            "url": "https://caraway.com.au/",
            "name": "Cash for Cars Brisbane | Caraway",
            "description": "Cash for cars Brisbane service: instant quotes, free towing, same-day cash payment. We buy damaged, old, scrap, and running vehicles across Greater Brisbane.",
            "isPartOf": { "@id": "https://caraway.com.au/#website" },
            "about": { "@type": "Service", "name": "Cash for cars Brisbane", "areaServed": { "@type": "City", "name": "Brisbane" } },
          },
          {
            "@type": "FAQPage",
            "mainEntity": homeFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          }
        ]}
      />

      <Header />

      <main className="flex-1">
        <Hero />
        <Suspense
          fallback={
            <div
              className="min-h-[32rem] w-full bg-muted/30"
              role="status"
              aria-live="polite"
              aria-label="Loading page content"
            />
          }
        >
          <HomeBelowFold />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
