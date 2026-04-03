import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/data/home-faqs";
import { BUSINESS } from "@/lib/site";

export { faqs } from "@/data/home-faqs";

export function FAQ() {
  return (
    <section id="faq" className="section-y bg-background" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-18">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-balance">
            Common Questions
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Towing, rego, pricing — the stuff people actually ask before they book a pickup.
          </p>
        </div>

        <Accordion items={faqs} />

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-2"
          >
            Call us on {BUSINESS.phoneFriendly}
          </a>
        </div>
      </div>
    </section>
  );
}
