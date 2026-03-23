import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { suburbs } from "@/data/suburbs";

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
    <section className="py-24 bg-white" aria-label="Cash for cars service areas Brisbane">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Service Areas</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">
            Cash for Cars Across Greater Brisbane
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer free car removal and instant cash for cars throughout Brisbane, Ipswich, Logan, Redland Bay, Moreton Bay, and all surrounding suburbs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {suburbs.map((suburb) => (
            <Link
              key={suburb.slug}
              href={`/locations/${suburb.slug}`}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-primary/5 border border-primary/10 text-sm font-medium text-foreground hover:bg-primary hover:text-white transition-colors group"
            >
              <MapPin className="w-3.5 h-3.5 shrink-0 text-accent group-hover:text-white/80" />
              {suburb.h1.replace("Cash for Cars ", "")}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {additionalAreas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm text-foreground/70 border border-border/50"
            >
              <MapPin className="w-3 h-3 shrink-0" />
              {area}
            </span>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group"
          >
            View all service locations
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-10 text-center max-w-2xl mx-auto">
          <p className="text-foreground font-medium text-lg">
            Not in the list? <strong>We likely still service your area.</strong>
          </p>
          <p className="text-muted-foreground mt-2 text-sm">
            Call <a href="tel:1800227293" className="text-primary font-semibold hover:underline">1800 CAR AWAY (1800 227 293)</a> to confirm same-day availability at your location.
          </p>
        </div>
      </div>
    </section>
  );
}
