import { motion } from "framer-motion";

const stats = [
  { value: "8,500+", label: "Cars Purchased in Brisbane" },
  { value: "$4.2M+", label: "Paid Out to Brisbane Sellers" },
  { value: "60 min", label: "Average Response Time" },
  { value: "4.9★", label: "Average Customer Rating" },
];

export function Stats() {
  return (
    <section className="py-12 bg-white border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
