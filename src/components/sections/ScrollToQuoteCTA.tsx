"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";

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
        className="bg-accent hover:bg-accent/90 text-white rounded-lg h-13 px-8 text-base font-semibold group border-0"
      >
        Get My Free Quote
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
      <a
        href={BUSINESS.phoneHref}
        className="inline-flex items-center justify-center rounded-lg h-13 px-8 text-base font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
      >
        <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
        {BUSINESS.phoneFriendly}
      </a>
    </div>
  );
}
