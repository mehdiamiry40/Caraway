import { motion } from "framer-motion";

const types = [
  "Old Cars", "Damaged Cars", "Scrap Cars", "Used Cars", 
  "Unwanted Cars", "Fleet Vehicles", "Utes & 4x4s", "SUVs", "Vans"
];

export function CarTypes() {
  return (
    <section className="py-16 bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3 shrink-0 text-center md:text-left">
            <h3 className="text-2xl font-display font-semibold">What We Buy</h3>
            <p className="text-primary-foreground/70 text-sm mt-1">If it's a vehicle, we want it.</p>
          </div>
          
          <div className="w-full flex flex-wrap justify-center md:justify-end gap-3">
            {types.map((type, i) => (
              <motion.span 
                key={type}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-4 py-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm text-sm font-medium hover:bg-primary-foreground hover:text-primary transition-colors cursor-default"
              >
                {type}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
