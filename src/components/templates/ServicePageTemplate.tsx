"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { InternalLinks } from "@/components/sections/InternalLinks";
import type { ServicePage } from "@/data/services";
import { services } from "@/data/services";
import { suburbs } from "@/data/suburbs";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

export default function ServicePageTemplate({
  service,
}: {
  service: ServicePage;
}) {
  const relatedServiceData = service.relatedServices
    .map(slug => services.find(s => s.slug === slug))
    .filter(Boolean);

  const relatedSuburbData = service.relatedSuburbs
    .map(slug => suburbs.find(s => s.slug === slug))
    .filter(Boolean);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: service.h1 }
  ];

  const scrollToQuote = () => {
    document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 mt-14 lg:mt-[104px]">
        <section className="bg-primary text-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} light />
            <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight mt-4 mb-6">
              {service.h1}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mb-8">
              {service.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToQuote}
                className="bg-accent hover:bg-accent/90 text-white rounded-full h-13 px-8 text-base font-semibold shadow-lg group border-0"
              >
                Get My Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="tel:1800227293"
                className="inline-flex items-center justify-center rounded-full h-13 px-8 text-base font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
                style={{ height: "52px" }}
              >
                <Phone className="mr-2 h-4 w-4" />
                1800 CAR AWAY
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              {service.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}

              {service.faqs.length > 0 && (
                <div className="pt-6">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                    Frequently Asked Questions
                  </h2>
                  <Accordion items={service.faqs.map(f => ({ question: f.question, answer: f.answer }))} />
                </div>
              )}
            </div>

            <aside className="space-y-8">
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg mb-4">Why Caraway?</h3>
                <ul className="space-y-3">
                  {["Up to $9,999 cash", "Same-day pickup", "Free towing always", "No RWC needed", "All makes & models", "7 days a week"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent/5 border border-accent/10 rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg mb-2">Call for an Instant Quote</h3>
                <p className="text-sm text-muted-foreground mb-4">Speak to our Brisbane team now</p>
                <a
                  href="tel:1800227293"
                  className="flex items-center justify-center gap-2 bg-accent text-white rounded-full py-3 px-6 font-semibold hover:bg-accent/90 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  1800 227 293
                </a>
              </div>

              {relatedServiceData.length > 0 && (
                <div className="border border-border rounded-2xl p-6">
                  <h3 className="font-display font-bold text-lg mb-4">Related Services</h3>
                  <ul className="space-y-2">
                    {relatedServiceData.map(s => s && (
                      <li key={s.slug}>
                        <Link
                          href={`/${s.slug}`}
                          className="text-sm text-primary hover:text-accent transition-colors hover:underline"
                        >
                          {s.h1}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedSuburbData.length > 0 && (
                <div className="border border-border rounded-2xl p-6">
                  <h3 className="font-display font-bold text-lg mb-4">Service Areas</h3>
                  <ul className="space-y-2">
                    {relatedSuburbData.map(s => s && (
                      <li key={s.slug}>
                        <Link
                          href={`/locations/${s.slug}`}
                          className="text-sm text-primary hover:text-accent transition-colors hover:underline"
                        >
                          {s.h1}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>

        <QuoteForm />
        <InternalLinks currentSlug={service.slug} />
      </main>

      <Footer />
    </div>
  );
}
