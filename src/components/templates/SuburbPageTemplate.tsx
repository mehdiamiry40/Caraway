import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import dynamic from "next/dynamic";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { InternalLinks } from "@/components/sections/InternalLinks";

const QuoteForm = dynamic(() => import("@/components/sections/QuoteForm").then((mod) => mod.QuoteForm));
import { ScrollToQuoteCTA } from "@/components/sections/ScrollToQuoteCTA";
import type { SuburbPage } from "@/data/suburbs";
import { suburbs } from "@/data/suburbs";
import { services, type ServicePage } from "@/data/services";
import { CheckCircle2, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/site";

export default function SuburbPageTemplate({ suburb }: { suburb: SuburbPage }) {
  const relatedServiceData = suburb.relatedServices
    .map(slug => services.find(s => s.slug === slug))
    .filter((s): s is ServicePage => s !== undefined);

  const nearbySuburbData = suburb.nearbySuburbs
    .map(slug => suburbs.find(s => s.slug === slug))
    .filter((s): s is SuburbPage => s !== undefined);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: suburb.h1 }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(215,50%,18%)] via-[hsl(215,50%,22%)] to-[hsl(215,48%,28%)] text-white pt-32 lg:pt-36 pb-16 lg:pb-20">
          <div className="absolute inset-0 opacity-[0.03]" aria-hidden style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} light />
            <div className="flex items-center gap-3 mt-5 mb-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Local Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight mb-6">
              {suburb.h1}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-3xl mb-8">
              {suburb.intro}
            </p>
            <ScrollToQuoteCTA />
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Local Car Buying Service
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {suburb.localContent}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  What We Buy in {suburb.h1.replace("Cash for Cars ", "")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {suburb.serviceDetails}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Why Choose Caraway in {suburb.h1.replace("Cash for Cars ", "")}?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {suburb.whyUs}
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-card p-8">
                <h2 className="text-xl font-display font-bold text-foreground mb-6">
                  How It Works
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { step: "1", title: "Get Your Quote", desc: `Call ${BUSINESS.phone} or fill out our form with your car details.` },
                    { step: "2", title: "Accept Your Offer", desc: "We'll make a fair cash offer. No obligation if you decline." },
                    { step: "3", title: "Get Paid Today", desc: "We pick up your car free and pay you cash on the spot." }
                  ].map(item => (
                    <div key={item.step} className="text-center">
                      <div className="w-10 h-10 bg-accent text-white rounded-xl flex items-center justify-center font-bold text-lg mx-auto mb-3 shadow-md">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-display font-bold text-lg mb-4">Our Promise</h3>
                <ul className="space-y-3">
                  {["Up to $9,999 cash", "Same-day pickup", "Free towing always", "No RWC needed", "All makes & models", "7 days a week"].map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-display font-bold text-lg mb-2">Call for an Instant Quote</h3>
                <p className="text-sm text-muted-foreground mb-4">Speak to our Brisbane team now</p>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 bg-accent text-white rounded-xl py-3.5 px-6 font-bold shadow-md hover:bg-accent/90 hover:shadow-lg transition-all"
                >
                  {BUSINESS.phone}
                </a>
              </div>

              {relatedServiceData.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <h3 className="font-display font-bold text-lg mb-4">Our Services</h3>
                  <ul className="space-y-2.5">
                    {relatedServiceData.map(s => (
                      <li key={s.slug}>
                        <Link
                          href={`/${s.slug}`}
                          className="text-sm text-primary hover:text-accent transition-colors hover:underline underline-offset-2"
                        >
                          {s.h1}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {nearbySuburbData.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <h3 className="font-display font-bold text-lg mb-4">Nearby Areas</h3>
                  <ul className="space-y-2.5">
                    {nearbySuburbData.map(s => (
                      <li key={s.slug}>
                        <Link
                          href={`/locations/${s.slug}`}
                          className="text-sm text-primary hover:text-accent transition-colors hover:underline underline-offset-2"
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
        <InternalLinks currentSlug={suburb.slug} />
      </main>

      <Footer />
    </div>
  );
}
