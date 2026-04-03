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
    <section
      className="section-y relative overflow-hidden"
      aria-label="Types of cars we buy in Brisbane"
    >
      {/* Rich dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215,50%,18%)] via-[hsl(215,50%,22%)] to-[hsl(215,48%,26%)]" />
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">What we buy</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight text-balance">
            Every Type of Vehicle, Any Condition
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            We purchase all vehicle types across Greater Brisbane — regardless of age, condition, or registration status.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {linkedTypes.map((type) => (
            <Link
              key={type.label}
              href={type.href}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.07] border border-white/10 text-sm font-medium text-white/90 hover:bg-white hover:text-primary-dark hover:border-white hover:shadow-lg transition-all duration-200 backdrop-blur-sm touch-manipulation focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {type.label}
              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
            </Link>
          ))}
          {plainTypes.map((type) => (
            <span
              key={type}
              className="inline-flex items-center px-5 py-3 rounded-xl border border-white/[0.06] text-sm text-white/30 cursor-default"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
