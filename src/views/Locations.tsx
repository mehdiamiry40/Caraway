"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { suburbs } from "@/data/suburbs";
import { MapPin, ArrowRight, Search, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Locations" }
];

export default function Locations() {
  const [query, setQuery] = useState("");
  const filtered = query.trim()
    ? suburbs.filter((s) =>
        s.h1.toLowerCase().includes(query.toLowerCase()) ||
        s.slug.toLowerCase().includes(query.toLowerCase())
      )
    : suburbs;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1 mt-14 lg:mt-[104px]">
        <section className="bg-gradient-to-br from-primary via-primary to-primary-deep text-white py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs items={breadcrumbs} light />
            <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight mt-4 mb-6">
              Cash for Cars — Brisbane Locations
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
              We buy cars for cash across all of Greater Brisbane. Find your local area below for suburb-specific service information, or call us on <a href={BUSINESS.phoneHref} className="text-accent hover:underline font-semibold">{BUSINESS.phone}</a> to get started.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          {/* Search */}
          <div className="relative max-w-md mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted-foreground pointer-events-none" />
            <input
              type="search"
              placeholder="Search suburbs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-12 rounded-xl border border-border bg-card pl-11 pr-4 text-base ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent hover:border-primary/50"
              aria-label="Search suburbs"
            />
          </div>

          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-16">
              No suburbs match &ldquo;{query}&rdquo;. We likely still service your area — call{" "}
              <a href={BUSINESS.phoneHref} className="text-primary font-semibold underline underline-offset-2">
                {BUSINESS.phone}
              </a>{" "}
              to check.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map(suburb => (
                <Link
                  key={suburb.slug}
                  href={`/locations/${suburb.slug}`}
                  className="group border border-border/60 rounded-2xl p-6 hover:border-primary/20 hover:shadow-md transition-all bg-white"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-accent" />
                    </div>
                    <h2 className="text-base font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {suburb.h1}
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {suburb.intro}
                  </p>
                  <span className="text-sm text-accent font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View details <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-16 rounded-2xl border border-primary/10 bg-gradient-to-b from-primary/[0.04] to-transparent p-8 md:p-10 text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-primary mb-3">Your Suburb Not Listed?</h2>
            <p className="text-muted-foreground mb-6">
              We service all of Greater Brisbane — even if your specific suburb isn&apos;t shown above. Call us to confirm availability and get a free quote.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-accent text-white rounded-full py-3 px-6 font-semibold hover:bg-accent/90 transition-colors shadow-accent-glow"
            >
              <Phone className="h-4 w-4" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>

        <InternalLinks />
      </main>

      <Footer />
    </div>
  );
}
