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
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="section-label mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-balance">
            How Cash for Cars Works in Brisbane
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            We buy the car directly. If we&apos;re not the right fit, we&apos;ll say so — we&apos;d rather you know upfront than waste a day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative">
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-border z-0" aria-hidden />

          {steps.map((step, index) => (
            <div key={step.title} className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-2">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  {step.icon}
                </div>
              </div>
              <span className="text-5xl font-display font-bold text-primary/20 mb-2">{index + 1}</span>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs text-[15px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
