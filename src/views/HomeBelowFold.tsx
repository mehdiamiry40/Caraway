import { Stats } from "@/components/sections/Stats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CarTypes } from "@/components/sections/CarTypes";
import dynamic from "next/dynamic";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { FAQ } from "@/components/sections/FAQ";

const QuoteForm = dynamic(() => import("@/components/sections/QuoteForm").then((mod) => mod.QuoteForm));

/**
 * Deferred chunk: below-the-fold sections + quote form + FAQ.
 * Keeps the initial Home bundle smaller (Hero + chrome load first).
 *
 * Section order optimised for conversion:
 * 1. Stats — trust/credibility bar (overlaps hero)
 * 2. HowItWorks — set expectations
 * 3. WhyUs — build confidence
 * 4. Testimonials — social proof
 * 5. QuoteForm — convert (right after social proof)
 * 6. CarTypes — SEO + additional info
 * 7. FAQ — objection handling
 * 8. ServiceAreas — SEO + local authority
 */
export default function HomeBelowFold() {
  return (
    <>
      <Stats />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <QuoteForm />
      <CarTypes />
      <FAQ />
      <ServiceAreas />
    </>
  );
}
