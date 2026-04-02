import { MessageSquare, DollarSign, Truck } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Tell us what it is",
    description: "Call or use the form — make, model, year, condition, suburb. Photos help if you have them.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Get a number",
    description: "We give a ballpark on the phone or after a quick call-back. Final figure is locked in before we send a truck.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "We collect, you get paid",
    description: "Pickup time that suits you. Cash (or agreed payment method) before the vehicle leaves your place.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-y bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="section-label mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-balance">
            How Cash for Cars Works in Brisbane
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            We buy the car directly. If we&apos;re not the right fit, we&apos;ll say so — we&apos;d rather you know upfront than waste a day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connector line between steps (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-px z-0" aria-hidden>
            <div className="w-full h-full bg-gradient-to-r from-accent/30 via-accent/50 to-accent/30" />
          </div>

          {steps.map((step, index) => (
            <div key={step.title} className="relative z-10 flex flex-col items-center text-center group">
              <div className="relative mb-6">
                {/* Step number ring */}
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shadow-[0_2px_8px_rgba(232,119,34,0.3)] z-10">
                  {index + 1}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/[0.08] to-primary/[0.03] border border-primary/10 flex items-center justify-center text-accent group-hover:border-accent/30 group-hover:from-accent/10 group-hover:to-accent/5 transition-all">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-[280px] text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
