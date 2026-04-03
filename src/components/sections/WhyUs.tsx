import { Zap, ShieldCheck, CarFront, FileText } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Paid when we pick up",
    description: "We don't drive away with your keys until you've been paid the agreed amount. No bank transfers, no delays.",
  },
  {
    icon: CarFront,
    title: "Towing is always free",
    description: "If we buy it, we bring the truck. No surprise deductions for collection anywhere in our service area.",
  },
  {
    icon: ShieldCheck,
    title: "Any condition accepted",
    description: "Old daily drivers, damaged, unregistered, scrap — we'll tell you straight whether it's a fit.",
  },
  {
    icon: FileText,
    title: "We handle the paperwork",
    description: "We take care of the QLD transfer paperwork so you're not stuck in a queue at Transport and Main Roads.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="section-y bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left column — headline + supporting text */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Why choose us</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight text-balance">
              Why Brisbane Sellers Choose Caraway
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Private buyers flake. Dealers lowball trade-ins. We&apos;re a direct buyer — one price, one pickup, done.
            </p>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-card">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <span className="text-accent font-bold text-lg">4.8</span>
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-sm">Excellent seller rating</p>
                <p className="text-muted-foreground text-sm mt-0.5">Based on verified Brisbane pickups</p>
              </div>
            </div>
          </div>

          {/* Right column — feature cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/12 transition-colors">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-display font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
