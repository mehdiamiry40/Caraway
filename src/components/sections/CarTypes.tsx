import Link from "next/link";
import { ArrowRight } from "lucide-react";

const linkedTypes = [
  { label: "Old Cars", href: "/old-cars-brisbane" },
  { label: "Damaged Cars", href: "/damaged-cars-brisbane" },
  { label: "Scrap Cars", href: "/scrap-car-removal-brisbane" },
  { label: "Used Cars", href: "/used-cars-brisbane" },
  { label: "Unwanted Cars", href: "/unwanted-cars-brisbane" },
  { label: "Accident Write-offs", href: "/accident-cars-brisbane" },
  { label: "Junk Cars", href: "/junk-cars-brisbane" },
  { label: "Unregistered Cars", href: "/unregistered-cars-brisbane" },
];

const plainTypes = [
  "Fleet Vehicles", "Utes & 4x4s", "SUVs",
  "Vans & Trucks", "Flood-Damaged Cars",
  "Non-Running Cars", "Classic Cars",
];

export function CarTypes() {
  return (
    <section className="section-y bg-primary" aria-label="Types of cars we buy in Brisbane">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-14">
          <div className="md:w-1/3 shrink-0">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 leading-tight">What Cars We Buy in Brisbane</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              We purchase all vehicle types across Greater Brisbane — regardless of age, condition, or registration status.
            </p>
          </div>

          <div className="w-full flex flex-wrap gap-2.5 sm:gap-3">
            {linkedTypes.map((type) => (
              <Link
                key={type.label}
                href={type.href}
                className="group inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-white/15 bg-white/[0.06] text-xs sm:text-sm font-medium text-white hover:bg-white hover:text-primary hover:border-white transition-all touch-manipulation focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                {type.label}
                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" aria-hidden />
              </Link>
            ))}
            {plainTypes.map((type) => (
              <span
                key={type}
                className="inline-flex items-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-white/8 bg-transparent text-xs sm:text-sm font-medium text-white/40 cursor-default"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
