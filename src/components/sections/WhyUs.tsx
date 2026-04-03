import { Zap, ShieldCheck, CarFront, FileText, Check } from "lucide-react";

const reasons = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Paid when we pick up",
    description: "We don't drive away with your keys until you've been paid the agreed amount.",
  },
  {
    icon: <CarFront className="w-5 h-5" />,
    title: "Towing's on us",
    description: "If we buy it, we bring the truck. No surprise deductions for collection in our service area.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Rough to written off",
    description: "Old daily drivers, damaged, unregistered, scrap — we'll tell you straight if it's a fit.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Transfer paperwork",
    description: "We handle the QLD transfer side so you're not stuck in a queue at the counter.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="section-y bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 md:mb-6 leading-tight text-balance">
              Why Brisbane Sellers Choose Caraway
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Private buyers flake. Dealers lowball trade-ins. We're a buyer — you get one price, one pickup, done.
            </p>

            <ul className="space-y-3">
              {["Brisbane-based team", "Licensed removal & disposal partners", "Upfront if we're not interested"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <Check className="w-4 h-4 text-primary/60 shrink-0" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-muted/40 p-6 rounded-2xl border border-border/40 hover:border-border transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-border/50 flex items-center justify-center text-primary/60 mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-base font-display font-bold text-primary mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
