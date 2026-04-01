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
    <section className="relative bg-muted/30 overflow-hidden" aria-label="What to expect">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent/[0.06] rounded-full blur-3xl" />
        <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-accent/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-4"
              >
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-primary/[0.08] ring-1 ring-primary/[0.12] group-hover:bg-accent/15 group-hover:ring-accent/25 transition-colors">
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <p className="text-xl sm:text-2xl font-display font-bold text-primary leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium mt-1 leading-snug">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accent gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent/80 to-transparent" aria-hidden="true" />
    </section>
  );
}
