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
    <section id="how-it-works" className="section-y bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-balance">
            How Cash for Cars Works in Brisbane
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We buy the car directly. If we&apos;re not the right fit, we&apos;ll say so — we&apos;d rather you know upfront than waste a day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl bg-white border border-border/50 flex items-center justify-center text-primary/60">
                  {step.icon}
                </div>
                <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-[300px] text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
