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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Caraway | Cash for Cars Brisbane — Sell Your Car Fast"
        description="Get instant cash for your car in Brisbane. Caraway buys all makes, all conditions — damaged, old, scrap. Free towing, same-day payment. Call 1800 227 293."
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
