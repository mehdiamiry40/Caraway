import { motion } from "framer-motion";

const types = [
  "Old Cars", "Damaged Cars", "Scrap Cars", "Used Cars",
  "Unwanted Cars", "Fleet Vehicles", "Utes & 4x4s", "SUVs",
  "Vans & Trucks", "Accident Write-offs", "Flood-Damaged Cars",
  "Unregistered Cars", "Non-Running Cars", "Classic Cars",
];

export function CarTypes() {
  return (
    <section className="py-20 bg-primary text-primary-foreground overflow-hidden" aria-label="Types of cars we buy in Brisbane">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-1/3 shrink-0">
            <h2 className="text-2xl font-bold mb-3">What Cars We Buy in Brisbane</h2>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              We purchase all vehicle types across Greater Brisbane — regardless of age, condition, or registration status. No car is too old, too damaged, or too far gone for us to make an offer.
            </p>
          </div>

          <div className="w-full flex flex-wrap gap-3">
            {types.map((type, i) => (
              <motion.span
                key={type}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
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
