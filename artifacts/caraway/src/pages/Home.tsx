import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { CarTypes } from "@/components/sections/CarTypes";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { FAQ } from "@/components/sections/FAQ";

const homeFaqs = [
  { question: "How much will I get for my car in Brisbane?", answer: "Every car is different. We calculate your offer based on make, model, year, condition, mileage, and the current scrap metal and spare parts market. Brisbane sellers typically receive between $150 and $9,999." },
  { question: "Do you really tow for free across Brisbane?", answer: "Yes — 100% free towing anywhere in Greater Brisbane, including Ipswich, Logan, Redland Bay, and Moreton Bay. There are no hidden deductions from your agreed quote." },
  { question: "How fast do I get paid for my car?", answer: "You get paid on the spot the moment our driver arrives to collect your vehicle — before the car goes on the truck. Most Brisbane sellers receive same-day payment." },
  { question: "What types of cars do you buy in Brisbane?", answer: "We buy all types of vehicles: old cars, damaged cars, scrap cars, accident write-offs, unregistered vehicles, flood-damaged cars, trucks, utes, 4WDs, SUVs, vans, and fleet vehicles." },
  { question: "Do I need a Roadworthy Certificate (RWC) to sell?", answer: "No RWC is required. We buy cars as-is, in any condition. Whether your car is registered, unregistered, damaged, broken down, or completely written off." },
  { question: "What paperwork do I need to sell my car?", answer: "Just your photo ID (driver's licence) to prove ownership. Registration papers help but aren't essential. We handle all the vehicle transfer documentation." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Caraway | Cash for Cars Brisbane — Sell Your Car Fast"
        description="Get instant cash for your car in Brisbane. Caraway buys all makes, all conditions — damaged, old, scrap. Free towing, same-day payment. Call 1800 227 293."
        canonical="https://caraway.com.au/"
        schema={[
          {
            "@type": "FAQPage",
            "mainEntity": homeFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          }
        ]}
      />

      <Header />

      <main className="flex-1">
        <Hero />
        <Stats />
        <HowItWorks />
        <WhyUs />
        <CarTypes />
        <Testimonials />
        <ServiceAreas />
        <QuoteForm />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
