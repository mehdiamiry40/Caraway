import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/data/home-faqs";
import { BUSINESS } from "@/lib/site";

export { faqs } from "@/data/home-faqs";

export function FAQ() {
  return (
    <section id="faq" className="section-y bg-gradient-to-b from-white to-muted/30 relative" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-balance">Cash for Cars Brisbane FAQ</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Towing, rego, pricing — the stuff people actually ask before they book a pickup.
          </p>
        </div>

        <Accordion items={faqs} />

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors">
            Call us on {BUSINESS.phoneFriendly} — we&apos;re available 7 days a week
          </a>
        </div>
      </div>
    </section>
  );
}
