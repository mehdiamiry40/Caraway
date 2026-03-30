import { Zap, ShieldCheck, CarFront, FileText } from "lucide-react";

const reasons = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Paid when we pick up",
    description: "We don’t drive away with your keys until you’ve been paid the agreed amount.",
  },
  {
    icon: <CarFront className="w-6 h-6" />,
    title: "Towing’s on us",
    description: "If we buy it, we bring the truck. No surprise deductions for collection in our service area.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Rough to written off",
    description: "Old daily drivers, damaged, unregistered, scrap — we’ll tell you straight if it’s a fit.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Transfer paperwork",
    description: "We handle the QLD transfer side so you’re not stuck in a queue at the counter.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="section-y bg-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="section-label mb-3">Why sell to us</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 md:mb-6 leading-tight text-balance">
              Skip the Gumtree circus
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Private buyers flake. Dealers lowball trade-ins. We’re a buyer — you get one price, one pickup, done.
            </p>

            <ul className="space-y-4 mb-2">
              {["Brisbane-based team", "Licensed removal & disposal partners", "Upfront if we’re not interested"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground font-medium">
                  <span className="w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-border/60 shadow-sm hover:shadow transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">{reason.icon}</div>
                <h3 className="text-lg font-display font-bold text-primary mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
