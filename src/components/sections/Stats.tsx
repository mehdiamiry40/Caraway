import { CalendarDays, MapPin, Truck, Banknote } from "lucide-react";

const stats = [
  { value: "7 Days", label: "Quotes available all week", icon: CalendarDays },
  { value: "Same Day", label: "Pickup where possible", icon: Truck },
  { value: "$0 Towing", label: "Free when we buy", icon: Banknote },
  { value: "All Brisbane", label: "Greater metro coverage", icon: MapPin },
];

export function Stats() {
  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 pb-8" aria-label="What to expect">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-float p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex items-start gap-4 ${i < stats.length - 1 ? "lg:border-r lg:border-border/50 lg:pr-8" : ""}`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/8">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg font-display font-bold text-foreground leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
