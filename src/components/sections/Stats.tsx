import { CalendarDays, MapPin, Truck, Banknote } from "lucide-react";

/** Service promises — not audited financial or volume statistics. */
const stats = [
  { value: "7 days", label: "Phone & online quotes", icon: CalendarDays },
  { value: "Greater Brisbane", label: "Pickup we arrange with you", icon: MapPin },
  { value: "$0", label: "Towing when we buy", icon: Truck },
  { value: "Cash", label: "Paid on collection", icon: Banknote },
];

export function Stats() {
  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden" aria-label="What to expect">
      {/* Decorative subtle background gradient */}
      <div 
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div 
                key={i} 
                className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-border/60 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Decorative corner accent */}
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-accent/5 rounded-full group-hover:bg-accent/10 group-hover:scale-150 transition-all duration-500 ease-out" />
                
                <div className="relative w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 ring-4 ring-white group-hover:bg-primary group-hover:shadow-lg group-hover:-rotate-3 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">
                    {stat.value}
                  </h3>
                  <p className="text-[15px] font-medium text-muted-foreground leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
