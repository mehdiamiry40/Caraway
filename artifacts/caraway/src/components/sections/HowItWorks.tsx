import { MessageSquare, DollarSign, Truck } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Tell us about your car",
    description: "Fill out our quick online form or give us a call with your car's make, model, year, and condition.",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Get an instant offer",
    description: "We'll provide a highly competitive, no-obligation cash offer based on current market rates instantly.",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "We tow, you get paid",
    description: "Accept the offer and we'll schedule a free pickup. We hand you the cash on the spot and handle the paperwork.",
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Simple Process</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground">How Caraway Works</h3>
          <p className="mt-4 text-lg text-muted-foreground">
            Selling your car shouldn't be a headache. Our streamlined 3-step process guarantees you get paid today without any stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border/60 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white border-8 border-background shadow-xl flex items-center justify-center text-primary mb-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                <div className="relative z-10">{step.icon}</div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm z-20">
                  {index + 1}
                </div>
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
