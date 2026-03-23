import { motion } from "framer-motion";
import { Zap, ShieldCheck, CarFront, FileText } from "lucide-react";

const reasons = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Same-Day Payment",
    description: "No waiting for checks to clear. We pay you on the spot when we pick up your vehicle."
  },
  {
    icon: <CarFront className="w-6 h-6" />,
    title: "Free Towing",
    description: "Our fleet of tow trucks covers all of Brisbane. We come to you, and towing is 100% free."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "All Cars Accepted",
    description: "Running, broken, damaged, or completely totaled. If it has four wheels, we'll buy it."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "No Paperwork Hassle",
    description: "We handle all the transport and transfer documentation so you don't have to lift a finger."
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5">
            <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              The Smarter Way to Sell Your Car.
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We've built our reputation on transparency, speed, and paying top dollar. Forget dealing with private buyers, lowball dealership trade-ins, or expensive ads.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Licensed & Insured Auto Buyer",
                "Over 10 Years in Brisbane",
                "Thousands of Happy Customers",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-primary mb-6">
                  {reason.icon}
                </div>
                <h4 className="text-xl font-display font-semibold mb-3">{reason.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
