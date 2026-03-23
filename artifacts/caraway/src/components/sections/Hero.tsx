import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  const scrollToQuote = () => {
    document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-noise">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent-foreground border border-accent/20 text-sm font-medium mb-8">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent text-white">
                <Star className="w-3 h-3 fill-current" />
              </span>
              Brisbane's #1 Car Buyer
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight text-balance mb-6">
              Sell Your Car in Brisbane. <br/>
              <span className="text-primary/70">Fast, Free, Fair.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Get instant cash for your car today. We buy all makes, models, and conditions. Free towing included, no hidden fees.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" onClick={scrollToQuote} className="w-full sm:w-auto h-14 px-8 text-lg group">
                Get My Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="tel:1800227293"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium transition-all w-full sm:w-auto h-14 px-8 text-lg border-2 border-border bg-transparent hover:border-primary hover:bg-primary/5 text-foreground"
              >
                Call 1800 CAR AWAY
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Same Day Payment
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Free Towing
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 relative">
              {/* public marketing landing page hero clean modern car parked on street minimalist style */}
              <img 
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&h=900&fit=crop" 
                alt="Modern car" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-overlay"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                  $
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">Top Dollar Paid</div>
                  <div className="text-sm text-foreground/70">Up to $9,999 cash today</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Image generated by Agent */}
            <img 
              src={`${import.meta.env.BASE_URL}images/abstract-accent.png`}
              alt=""
              className="absolute -top-12 -right-12 w-32 h-32 opacity-60 pointer-events-none mix-blend-multiply"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
