import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { suburbs } from "@/data/suburbs";
import { BUSINESS } from "@/lib/site";

/** Shared styles so every area row looks and behaves the same */
const areaRowClassName =
  "group flex min-h-[2.75rem] items-center gap-2.5 rounded-xl border border-border/50 bg-white px-3.5 py-2.5 text-left text-xs sm:text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-sm";

const areaIconWrapClassName =
  "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/[0.06] text-accent ring-1 ring-primary/10 group-hover:bg-white/15 group-hover:text-primary-foreground group-hover:ring-white/20 transition-colors";

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
    <section
      className="relative section-y bg-white"
      aria-label="Cash for cars service areas Brisbane"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-2xl">
            <p className="section-label mb-3">Service areas</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary leading-tight text-balance">
              Cash for Cars Brisbane Service Areas
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              We collect from Brisbane, Ipswich, Logan, Redland Bay, Moreton Bay, and nearby areas. Remote or unusual access? Say so when you call — we&apos;ll be honest about trucks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_4px_14px_0_rgba(16,36,82,0.2)] transition hover:bg-primary/90"
            >
              <Phone className="h-4 w-4 shrink-0" />
              {BUSINESS.phoneFriendly}
            </a>
            <Link
              href="/locations"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/20 bg-transparent px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              All locations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Browse by area */}
        <div className="rounded-2xl border border-border/50 bg-muted/30 p-5 sm:p-6 lg:p-8">
          <h3 className="font-display text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Browse by area
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {suburbs.map((suburb) => (
              <li key={suburb.slug} className="min-w-0">
                <Link href={`/locations/${suburb.slug}`} className={areaRowClassName}>
                  <span className={areaIconWrapClassName} aria-hidden>
                    <MapPin className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="leading-snug break-words">
                    {suburb.h1.replace("Cash for Cars ", "")}
                  </span>
                </Link>
              </li>
            ))}
            {additionalAreas.map((area) => (
              <li key={`area-${area}`} className="min-w-0">
                <Link
                  href="/locations"
                  className={areaRowClassName}
                  title={`${area} — view all locations`}
                >
                  <span className={areaIconWrapClassName} aria-hidden>
                    <MapPin className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="leading-snug break-words">{area}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Not in list CTA */}
        <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-primary/10 bg-gradient-to-b from-primary/[0.04] to-transparent px-6 py-6 text-center sm:px-10">
          <p className="text-foreground font-display font-bold text-base sm:text-lg text-primary leading-snug">
            Not in the list?
          </p>
          <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
            <strong className="text-foreground font-semibold">We likely still service your area.</strong>{" "}
            Call{" "}
            <a
              href={BUSINESS.phoneHref}
              className="font-semibold text-primary underline-offset-2 hover:underline"
            >
              {BUSINESS.phoneFriendly} ({BUSINESS.phone})
            </a>{" "}
            to confirm same-day availability at your location.
          </p>
        </div>
      </div>
    </section>
  );
}
