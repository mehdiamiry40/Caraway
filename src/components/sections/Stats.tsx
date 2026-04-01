import { CalendarDays, MapPin, Truck, Banknote } from "lucide-react";

/** Service promises — not audited financial or volume statistics. */
const stats = [
  { value: "7 days", label: "Phone & online quotes", icon: CalendarDays },
  { value: "Greater Brisbane", label: "Pickup arranged with you", icon: MapPin },
  { value: "$0", label: "Towing when we buy", icon: Truck },
  { value: "Cash", label: "Paid on collection", icon: Banknote },
];

export function Stats() {
  return (
    <section className="relative bg-primary overflow-hidden" aria-label="What to expect">
      {/* Decorative diagonal accent strip */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/[0.03] rounded-full" />
        <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-white/[0.03] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-3 sm:gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 ring-1 ring-accent/25">
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <p className="text-xl sm:text-2xl font-display font-bold text-white leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/60 font-medium mt-0.5 leading-snug">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent" aria-hidden="true" />
    </section>
  );
}
