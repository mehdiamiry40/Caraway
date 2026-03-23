import { Accordion } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much will I get for my car?",
    answer: "Every car is unique. We calculate your offer based on the make, model, year, condition, and current scrap metal/parts market prices. We pay anywhere from $150 up to $9,999 depending on the vehicle."
  },
  {
    question: "Do you really tow for free?",
    answer: "Yes! If you accept our offer and you are located in the Greater Brisbane area (or surrounding suburbs), towing is completely free. There are no hidden deductions from your quote."
  },
  {
    question: "How fast do I get paid?",
    answer: "You get paid instantly on the spot when our driver arrives to collect the vehicle. We handle the payment before the car goes on the truck."
  },
  {
    question: "Do I need a Roadworthy Certificate (RWC)?",
    answer: "No RWC is needed! We buy cars as-is, whether they are registered, unregistered, damaged, or completely wrecked."
  },
  {
    question: "What paperwork do I need?",
    answer: "Just your Photo ID (Driver's License) to prove ownership. If you have the registration papers, that's helpful, but we handle the transfer documents for you."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Questions?</h2>
          <h3 className="text-4xl font-display font-bold text-foreground">Frequently Asked Questions</h3>
        </div>
        
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
