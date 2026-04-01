import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/data/home-faqs";
import { BUSINESS } from "@/lib/site";

export { faqs } from "@/data/home-faqs";

export function FAQ() {
  return (
    <section id="faq" className="section-y bg-white" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-balance">Cash for Cars Brisbane FAQ</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Towing, rego, pricing — the stuff people actually ask before they book a pickup.
          </p>
        </div>

        <Accordion items={faqs} />

        <div className="mt-10 text-center text-sm text-muted-foreground">
          Still have questions?{" "}
          <a href={BUSINESS.phoneHref} className="text-primary font-semibold hover:underline">
            Call us on {BUSINESS.phoneFriendly}
          </a>{" "}
          — we're available 7 days a week.
        </div>
      </div>
    </section>
  );
}
