import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { suburbs } from "@/data/suburbs";
import { BUSINESS } from "@/lib/site";

/** Shared styles so every area row looks and behaves the same */
const areaRowClassName =
  "group flex min-h-[2.5rem] items-center gap-2 rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-left text-xs sm:text-sm font-medium text-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-sm";

const areaIconWrapClassName =
  "flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white text-accent shadow-sm ring-1 ring-border/50 group-hover:bg-white/15 group-hover:text-primary-foreground group-hover:ring-white/20";

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
      className="relative section-y bg-white border-t border-border/50"
      aria-label="Cash for cars service areas Brisbane"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro — readable measure */}
        <div className="max-w-2xl mb-6 lg:mb-7">
          <p className="section-label mb-2">Service areas</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary leading-tight text-balance">
            Cash for Cars Brisbane Service Areas
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-muted-foreground leading-snug">
            We collect from Brisbane, Ipswich, Logan, Redland Bay, Moreton Bay, and nearby areas. Remote or unusual access? Say so when you call — we&apos;ll be honest about trucks.
          </p>
        </div>

        {/* Contact + view all — above the full-width browse list */}
        <div className="mb-6 lg:mb-7 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-between lg:gap-6">
          <div className="rounded-xl border border-border/70 bg-muted/40 p-4 sm:p-5 shadow-sm lg:max-w-md lg:sticky lg:top-28 lg:self-start">
            <div className="flex gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                aria-hidden
              >
                <MapPin className="h-5 w-5" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <p className="font-display font-bold text-foreground text-xs uppercase tracking-wide text-primary">
                  Same-day coverage
                </p>
                <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground leading-snug">
                  Pickup and quotes are available across the regions below. If your suburb is not listed, call us — we often still cover your area.
                </p>
              </div>
            </div>
            <a
              href={BUSINESS.phoneHref}
              className="mt-3 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-[0_4px_14px_0_rgba(27,58,104,0.2)] transition hover:bg-primary/90"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              {BUSINESS.phoneFriendly} ({BUSINESS.phone})
            </a>
          </div>

          <div className="flex items-end lg:items-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              View all service locations
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Browse by area — full width of container */}
        <div className="w-full min-w-0">
          <div className="rounded-xl border border-border/60 bg-card p-4 sm:p-5 lg:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] w-full">
            <h3 className="font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary mb-3">
              Browse by area
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1.5 lg:gap-2">
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
        </div>

        <div className="mt-8 lg:mt-9 max-w-3xl mx-auto rounded-xl border border-primary/15 bg-gradient-to-b from-primary/[0.06] to-transparent px-5 py-5 text-center sm:px-8">
          <p className="text-foreground font-display font-semibold text-base text-primary">
            Not in the list?
          </p>
          <p className="mt-1.5 text-muted-foreground text-xs sm:text-sm leading-snug">
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
