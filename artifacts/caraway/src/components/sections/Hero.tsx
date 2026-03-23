import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToQuote = () => {
    document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden mt-[64px]" style={{ minHeight: "520px" }}>
      {/* Full-bleed navy + photo layout */}
      <div className="flex flex-col lg:flex-row min-h-[520px]">

        {/* Left — dark navy panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex flex-col justify-center bg-primary px-10 py-16 lg:py-20 lg:pl-16 lg:pr-14 w-full lg:w-[46%] shrink-0"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-white mb-4">
            Sell Your Car<br />in Brisbane.
          </h1>

          <p className="text-lg font-semibold text-accent mb-6">
            Fast, free pickup — cash in your hands today.
          </p>

          <p className="text-white/70 text-base leading-relaxed mb-10 max-w-sm">
            We buy all makes, models, and conditions across Greater Brisbane. No RWC needed. Free towing. Same-day payment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToQuote}
              className="bg-accent hover:bg-accent/90 text-white rounded-full h-13 px-8 text-base font-semibold shadow-lg group border-0"
            >
              Get My Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="tel:1800227293"
              className="inline-flex items-center justify-center rounded-full h-13 px-8 text-base font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
              style={{ height: "52px" }}
            >
              1800 CAR AWAY
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-white/60 font-medium">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Same-Day Payment
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free Towing
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No Paperwork
            </div>
          </div>

          {/* Orange diagonal slice at bottom-right of the navy panel */}
          <div
            className="hidden lg:block absolute bottom-0 right-0 w-24 h-full bg-accent"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
          />
        </motion.div>

        {/* Right — full-bleed car photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex-1 min-h-[320px] lg:min-h-0"
        >
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop&q=80"
            alt="Tow truck towing a car — free car removal Brisbane"
            className="w-full h-full object-cover"
            style={{ minHeight: "320px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent pointer-events-none" />

          {/* Floating badge */}
          <div className="absolute bottom-6 right-6 bg-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-4">
            <div className="w-11 h-11 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
              $
            </div>
            <div>
              <div className="font-display font-bold text-foreground text-sm">Top Dollar Paid</div>
              <div className="text-xs text-muted-foreground">Up to $9,999 cash today</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
