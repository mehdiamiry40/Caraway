/** Service promises — not audited financial or volume statistics. */
const stats = [
  { value: "7 days", label: "Phone & online quotes" },
  { value: "Greater Brisbane", label: "Pickup we arrange with you" },
  { value: "$0", label: "Towing when we buy" },
  { value: "Cash", label: "Paid on collection" },
];

export function Stats() {
  return (
    <section
      className="py-10 sm:py-12 bg-muted border-y border-border/60"
      aria-label="What to expect"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
