import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import dynamic from "next/dynamic";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { InternalLinks } from "@/components/sections/InternalLinks";

const QuoteForm = dynamic(() => import("@/components/sections/QuoteForm").then((mod) => mod.QuoteForm));
import { ScrollToQuoteCTA } from "@/components/sections/ScrollToQuoteCTA";
import type { ServicePage } from "@/data/services";
import { services } from "@/data/services";
import { suburbs } from "@/data/suburbs";
import { Accordion } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/site";

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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1 mt-14 lg:mt-[104px]">
        <section className="bg-primary text-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} light />
            <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight mt-4 mb-6">
              {service.h1}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mb-8">
              {service.intro}
            </p>
            <ScrollToQuoteCTA />
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
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 bg-accent text-white rounded-full py-3 px-6 font-semibold hover:bg-accent/90 transition-colors"
                >
                  {BUSINESS.phone}
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
