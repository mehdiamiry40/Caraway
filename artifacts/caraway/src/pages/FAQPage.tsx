import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { Accordion } from "@/components/ui/accordion";
import { Link } from "wouter";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "FAQ" }
];

const faqCategories = [
  {
    category: "Pricing & Payment",
    faqs: [
      { question: "How much will I get for my car in Brisbane?", answer: "Every car is different. We calculate your offer based on make, model, year, condition, mileage, and the current market. Brisbane sellers typically receive between $150 and $9,999. We always aim to beat competing offers." },
      { question: "How do you determine my car's value?", answer: "We use real-time market data including current scrap metal prices, parts demand, and recent comparable sales in Brisbane. Our valuations are transparent — we'll explain exactly how we arrived at your offer." },
      { question: "When and how do I get paid?", answer: "You're paid in cash on the spot when our driver arrives to collect your vehicle — before the car leaves your property. No bank transfers, no waiting periods, no cheques." },
      { question: "Can you match or beat a quote I've received elsewhere?", answer: "We'll certainly try. If you've received a competing offer, let us know the amount and we'll do our best to match or exceed it. We're competitive on pricing across Brisbane." }
    ]
  },
  {
    category: "Vehicle Requirements",
    faqs: [
      { question: "What types of cars do you buy?", answer: "We buy all types — sedans, utes, 4WDs, SUVs, vans, trucks, and commercial vehicles. Old cars, damaged cars, scrap cars, accident write-offs, flood-damaged vehicles, and more. Running or not." },
      { question: "Do I need a Roadworthy Certificate (RWC)?", answer: "No. We buy cars as-is in any condition. A roadworthy certificate is not required to sell your vehicle to Caraway." },
      { question: "Can I sell a car without registration?", answer: "Yes. We buy unregistered, deregistered, and expired-registration vehicles across Brisbane. No current registration is needed." },
      { question: "Do you buy cars that don't run or start?", answer: "Absolutely. Non-running, mechanically failed, and immobile vehicles are among the most common types we purchase. Our tow truck will handle the rest." },
      { question: "Can I sell a car I still owe finance on?", answer: "In some cases, yes. Contact us to discuss your specific situation. We may be able to arrange payout of remaining finance as part of the sale." }
    ]
  },
  {
    category: "Process & Logistics",
    faqs: [
      { question: "How does the selling process work?", answer: "It's three simple steps: (1) Contact us with your car details for a free quote. (2) Accept our offer. (3) We pick up your car and pay you cash. The whole process can be completed in under an hour." },
      { question: "How fast can you pick up my car?", answer: "We offer same-day pickup across most Brisbane suburbs. Contact us before midday and we can usually arrange afternoon collection." },
      { question: "Is your towing really free?", answer: "Yes — 100% free towing anywhere in Greater Brisbane. There are no hidden towing fees, no deductions, and no surprises. The quoted price is what you receive." },
      { question: "What paperwork do I need?", answer: "Just your photo ID (driver's licence). Registration papers help speed things up but aren't essential. We handle all vehicle transfer documentation." },
      { question: "Do I need to be home for the pickup?", answer: "Ideally yes, as we pay cash in person and need to verify your ID. However, we can sometimes make alternative arrangements — just ask when booking." }
    ]
  },
  {
    category: "Service Area & Availability",
    faqs: [
      { question: "What areas of Brisbane do you cover?", answer: "We cover all of Greater Brisbane — north to Caboolture, south to Beenleigh, west to Ipswich, and east to Cleveland. This includes Logan, Moreton Bay, Redland City, and Ipswich council areas." },
      { question: "Do you charge extra for outer suburbs?", answer: "No. Whether you're in the CBD or Caboolture, our service is the same price — free towing and competitive cash offers regardless of your location." },
      { question: "Are you available on weekends?", answer: "Yes. We operate 7 days a week, Monday to Sunday, 7am to 7pm. Weekend pickups are available across all service areas." },
      { question: "What happens to my car after you buy it?", answer: "Depending on condition, we either resell it, salvage usable parts, or responsibly recycle it at a licensed Queensland facility. All fluids and hazardous materials are disposed of according to EPA regulations." }
    ]
  }
];

const allFaqs = faqCategories.flatMap(c => c.faqs);

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="FAQ | Cash for Cars Brisbane Questions Answered — Caraway"
        description="Frequently asked questions about selling your car for cash in Brisbane. Learn about our process, pricing, towing, paperwork, and service areas."
        canonical="https://caraway.com.au/faq"
        schema={[
          {
            "@type": "FAQPage",
            "mainEntity": allFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((bc, i) => ({
              "@type": "ListItem", "position": i + 1, "name": bc.label,
              "item": bc.href ? `https://caraway.com.au${bc.href}` : undefined
            }))
          }
        ]}
      />
      <Header />

      <main className="flex-1 mt-14 lg:mt-[104px]">
        <section className="bg-primary text-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} light />
            <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight mt-4 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Everything you need to know about selling your car for cash in Brisbane. Can't find your answer? Call us on <a href="tel:1800227293" className="text-accent hover:underline font-semibold">1800 227 293</a>.
            </p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          {faqCategories.map(category => (
            <div key={category.category}>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                {category.category}
              </h2>
              <Accordion items={category.faqs.map(f => ({ question: f.question, answer: f.answer }))} />
            </div>
          ))}

          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-display font-bold text-foreground mb-2">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-4">
              Our Brisbane team is happy to help. Call us or visit our contact page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1800227293"
                className="inline-flex items-center justify-center bg-accent text-white rounded-full py-3 px-6 font-semibold hover:bg-accent/90 transition-colors"
              >
                Call 1800 227 293
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-primary text-primary rounded-full py-3 px-6 font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <InternalLinks />
      </main>

      <Footer />
    </div>
  );
}
