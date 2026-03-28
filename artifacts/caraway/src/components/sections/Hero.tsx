import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToQuote = () => {
    document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full overflow-x-hidden mt-14 lg:mt-[104px]"
      style={{ minHeight: "min(100svh, 520px)" }}
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-0 lg:min-h-[520px]">
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-[46%] shrink-0 px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 lg:pl-16 lg:pr-14">
          <div
            aria-hidden
            className="absolute inset-y-0 z-0 bg-primary"
            style={{ left: "calc(50% - 50vw)", right: 0 }}
          />
          <div className="relative z-10 w-full">
            <p className="text-white/80 text-sm font-medium mb-2 tracking-wide">Cash for cars · Brisbane &amp; surrounds</p>
            <h1
              id="hero-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-white mb-3"
            >
              Cash for Cars
              <br />
              Brisbane
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-accent mb-6">
              We buy unwanted cars for cash — pickup included.
            </p>

            <p className="text-white/75 text-base leading-relaxed mb-10 max-w-md">
              Running or not, with or without rego. You get a price before we load the car — then payment when we collect it from your place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToQuote}
                className="bg-accent hover:bg-accent/90 text-white rounded-full h-13 px-8 text-base font-semibold shadow-lg group border-0"
              >
                Get a quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden />
              </Button>
              <a
                href="tel:1800227293"
                className="inline-flex items-center justify-center rounded-full h-13 px-8 text-base font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors min-h-[52px]"
              >
                1800 CAR AWAY
              </a>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-white/60 font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Paid on pickup
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Towing when we buy
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                No roadworthy required
              </div>
            </div>
          </div>

          <div
            className="hidden lg:block pointer-events-none absolute bottom-0 right-0 top-0 z-[5] w-24 bg-accent"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
            aria-hidden
          />
        </div>

        <div className="relative flex-1 min-h-[320px] lg:min-h-0 bg-primary">
          <div
            aria-hidden
            className="absolute inset-y-0 z-0 bg-primary"
            style={{ left: 0, right: "calc(50% - 50vw)" }}
          />
          <picture className="relative z-[1] block h-full min-h-[320px]">
            <source
              srcSet={`${import.meta.env.BASE_URL}images/tow-truck-hero-sm.webp 600w, ${import.meta.env.BASE_URL}images/tow-truck-hero.webp 1200w`}
              sizes="(max-width: 1024px) 100vw, 54vw"
              type="image/webp"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/tow-truck-hero.png`}
              alt="Flatbed tow truck loaded with a vehicle — Caraway pickup in Brisbane"
              className="w-full h-full min-h-[320px] lg:min-h-full object-cover"
              width={1200}
              height={800}
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/15 to-transparent pointer-events-none" />

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-6 sm:max-w-sm z-[3] bg-white rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-lg border border-border/40 flex items-center gap-3 sm:gap-4">
            <div className="w-11 h-11 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0" aria-hidden>
              $
            </div>
            <div>
              <div className="font-display font-bold text-foreground text-sm">Offers up to $9,999</div>
              <div className="text-xs text-muted-foreground">Depends on make, condition &amp; market</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
