import { MessageSquare, DollarSign, Truck } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Tell us about your car",
    description: "Fill out our quick online form or give us a call with your car's make, model, year, and condition.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Get an instant offer",
    description: "We'll provide a highly competitive, no-obligation cash offer based on current market rates instantly.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "We tow, you get paid",
    description: "Accept the offer and we'll schedule a free pickup. We hand you the cash on the spot and handle the paperwork.",
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent tracking-widest uppercase mb-3 block">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">How Caraway Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Selling your car shouldn't be a headache. Our streamlined 3-step process guarantees you get paid today without any stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-7 left-[20%] right-[20%] h-px bg-border z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
                {step.icon}
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xs">
                  {index + 1}
                </span>
              </div>
              <h4 className="text-xl font-display font-semibold mb-3">{step.title}</h4>
              <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
