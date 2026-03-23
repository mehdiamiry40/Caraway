import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { CarTypes } from "@/components/sections/CarTypes";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Caraway | Cash for Cars Brisbane — Sell Your Car Fast"
        description="Get instant cash for your car in Brisbane. Caraway buys all makes, all conditions. Free towing, same-day payment. Call 1800 227 293 for a free quote."
      />
      
      <Header />
      
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <WhyUs />
        <CarTypes />
        <QuoteForm />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}
