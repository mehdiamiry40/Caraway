import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { suburbs } from "@/data/suburbs";
import { BUSINESS } from "@/lib/site";

const additionalAreas = [
  "Brisbane CBD", "Fortitude Valley", "West End", "Paddington",
  "Kelvin Grove", "Newstead", "New Farm", "Kangaroo Point",
  "Aspley", "Stafford", "Kedron", "Nundah", "Clayfield",
  "Sandgate", "Brighton", "Bracken Ridge", "North Lakes",
  "Holland Park", "Calamvale", "Runcorn",
  "Loganholme", "Beenleigh",
  "Tingalpa", "Wynnum", "Manly", "Cleveland",
  "Redland Bay", "Victoria Point", "Capalaba",
  "Inala", "Forest Lake", "Richlands",
  "Oxley", "Darra", "Goodna", "Springfield",
];

export function ServiceAreas() {
  return (
    <section className="section-y bg-muted/50" aria-label="Cash for cars service areas Brisbane">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Service areas</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight text-balance">
              We Cover All of Greater Brisbane
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Brisbane, Ipswich, Logan, Redlands, Moreton Bay, and nearby areas. Remote or tricky access? Mention it when you call.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-primary/90 hover:shadow-lg transition-all"
            >
              <Phone className="h-4 w-4 shrink-0" />
              {BUSINESS.phoneFriendly}
            </a>
            <Link
              href="/locations"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
            >
              All locations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Areas grid */}
        <div className="bg-white rounded-2xl shadow-card p-6 sm:p-8">
          <h3 className="font-display text-sm font-bold text-foreground mb-5">Browse by area</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {suburbs.map((suburb) => (
              <li key={suburb.slug} className="min-w-0">
                <Link
                  href={`/locations/${suburb.slug}`}
                  className="group flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-primary hover:text-white"
                >
                  <MapPin className="h-3.5 w-3.5 text-muted-foreground group-hover:text-white/70 shrink-0 transition-colors" strokeWidth={2} />
                  <span className="leading-snug">{suburb.h1.replace("Cash for Cars ", "")}</span>
                </Link>
              </li>
            ))}
            {additionalAreas.map((area) => (
              <li key={`area-${area}`} className="min-w-0">
                <Link
                  href="/locations"
                  className="group flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-primary hover:text-white"
                  title={`${area} — view all locations`}
                >
                  <MapPin className="h-3.5 w-3.5 text-muted-foreground group-hover:text-white/70 shrink-0 transition-colors" strokeWidth={2} />
                  <span className="leading-snug">{area}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-white rounded-2xl shadow-card px-6 py-6 sm:px-10 sm:py-8 text-center max-w-2xl mx-auto">
          <p className="font-display font-bold text-foreground text-lg">Not in the list?</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We likely still service your area. Call{" "}
            <a href={BUSINESS.phoneHref} className="font-semibold text-primary hover:underline underline-offset-2">
              {BUSINESS.phoneFriendly}
            </a>{" "}
            to confirm availability at your location.
          </p>
        </div>
      </div>
    </section>
  );
}
