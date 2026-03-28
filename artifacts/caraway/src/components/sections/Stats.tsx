const stats = [
  { value: "8,500+", label: "Cars Purchased in Brisbane" },
  { value: "$4.2M+", label: "Paid Out to Brisbane Sellers" },
  { value: "60 min", label: "Average Response Time" },
  { value: "4.9★", label: "Average Customer Rating" },
];

export function Stats() {
  return (
    <section className="py-10 sm:py-12 bg-muted border-y border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
