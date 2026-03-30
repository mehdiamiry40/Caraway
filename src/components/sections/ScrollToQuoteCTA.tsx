"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function ScrollToQuoteCTA() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  const scrollToQuote = () => {
    if (isHome) {
      document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // On inner pages, the QuoteForm is rendered on the same page
      const el = document.getElementById("quote-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#quote-section");
      }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        size="lg"
        onClick={scrollToQuote}
        className="bg-accent hover:bg-accent/90 text-white rounded-full h-13 px-8 text-base font-semibold shadow-lg group border-0"
      >
        Get My Free Quote
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
      <a
        href="tel:1800227293"
        className="inline-flex items-center justify-center rounded-full h-13 px-8 text-base font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
        style={{ height: "52px" }}
      >
        <Phone className="mr-2 h-4 w-4" />
        1800 CAR AWAY
      </a>
    </div>
  );
}
