import { Link } from "wouter";

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
    <section className="py-14 md:py-20 bg-primary text-primary-foreground overflow-hidden" aria-label="Types of cars we buy in Brisbane">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10">
          <div className="md:w-1/3 shrink-0">
            <h2 className="text-xl sm:text-2xl font-display font-bold mb-3">What Cars We Buy in Brisbane</h2>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              We purchase all vehicle types across Greater Brisbane — regardless of age, condition, or registration status. Click any vehicle type to learn more about our buying service.
            </p>
          </div>

          <div className="w-full flex flex-wrap gap-3">
            {linkedTypes.map((type) => (
              <Link
                key={type.label}
                href={type.href}
                className="inline-block px-4 py-2.5 min-h-11 rounded-full border border-white/20 bg-white/5 text-sm font-medium hover:bg-white hover:text-primary transition-colors touch-manipulation"
              >
                {type.label}
              </Link>
            ))}
            {plainTypes.map((type) => (
              <span
                key={type}
                className="inline-flex items-center px-4 py-2.5 min-h-11 rounded-full border border-white/20 bg-white/5 text-sm font-medium cursor-default"
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
