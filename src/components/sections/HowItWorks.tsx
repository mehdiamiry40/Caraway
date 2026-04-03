import { MessageSquare, DollarSign, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Tell us about your car",
    description: "Call, text, or use the form. Make, model, year, condition, suburb. Photos help but aren't required.",
  },
  {
    icon: DollarSign,
    title: "Get your offer",
    description: "We give you a ballpark on the spot. Final price is locked in before we send a truck — no surprises.",
  },
  {
    icon: Truck,
    title: "We collect, you get paid",
    description: "Pickup time that suits you. Cash or agreed payment before the car leaves your property.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-y bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">How it works</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground leading-tight text-balance">
            Sell Your Car in Three Simple Steps
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            No listings, no tyre-kickers, no waiting. We buy the car directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative text-center group">
                {/* Connector line — visible on md+ between cards */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-px bg-border" aria-hidden />
                )}

                <div className="relative inline-flex flex-col items-center">
                  {/* Step number + icon */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-white shadow-lg ring-1 ring-border/40 flex items-center justify-center group-hover:shadow-xl group-hover:ring-primary/20 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shadow-md">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-[280px] text-[15px]">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
