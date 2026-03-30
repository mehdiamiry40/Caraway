import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { suburbs } from "@/data/suburbs";
import { MapPin, ArrowRight } from "lucide-react";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Locations" }
];

export default function Locations() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 mt-14 lg:mt-[104px]">
        <section className="bg-primary text-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} light />
            <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight mt-4 mb-6">
              Cash for Cars — Brisbane Locations
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              We buy cars for cash across all of Greater Brisbane. Find your local area below for suburb-specific service information, or call us on <a href="tel:1800227293" className="text-accent hover:underline font-semibold">1800 227 293</a> to get started.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {suburbs.map(suburb => (
              <Link
                key={suburb.slug}
                href={`/locations/${suburb.slug}`}
                className="group border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <h2 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
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

          <div className="mt-16 bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-10 text-center max-w-2xl mx-auto">
            <h2 className="text-xl font-display font-bold text-foreground mb-2">Your Suburb Not Listed?</h2>
            <p className="text-muted-foreground mb-4">
              We service all of Greater Brisbane — even if your specific suburb isn't shown above. Call us to confirm availability and get a free quote.
            </p>
            <a
              href="tel:1800227293"
              className="inline-flex items-center justify-center bg-accent text-white rounded-full py-3 px-6 font-semibold hover:bg-accent/90 transition-colors"
            >
              Call 1800 227 293
            </a>
          </div>
        </div>

        <InternalLinks />
      </main>

      <Footer />
    </div>
  );
}
