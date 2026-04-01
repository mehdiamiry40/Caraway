import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import { BUSINESS } from "@/lib/site";

export function Hero() {

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
            <p className="text-white/90 text-sm font-medium mb-2 tracking-wide">Cash for cars · Brisbane &amp; surrounds</p>
            <h1
              id="hero-heading"
              className="text-[1.75rem] sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-white mb-3"
            >
              Cash for Cars
              <br />
              Brisbane
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-accent mb-6">
              We buy unwanted cars for cash — pickup included.
            </p>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-md">
              Running or not, with or without rego. You get a price before we load the car — then payment when we collect it from your place.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#quote-section"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-accent hover:bg-accent/90 text-white rounded-full h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold shadow-lg group border-0"
                )}
              >
                Get a quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden />
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center rounded-full h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                {BUSINESS.phoneFriendly}
              </a>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-white/80 font-medium">
              {["Paid on pickup", "Towing when we buy", "No roadworthy required"].map((text) => (
                <div key={text} className="flex items-center gap-2 whitespace-nowrap">
                  <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} aria-hidden />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div
            className="hidden lg:block pointer-events-none absolute bottom-0 right-0 top-0 z-[5] w-24 bg-accent"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
            aria-hidden
          />
        </div>

        <div className="relative flex-1 min-h-[240px] sm:min-h-[320px] lg:min-h-0 bg-primary">
          <div
            aria-hidden
            className="absolute inset-y-0 z-0 bg-primary"
            style={{ left: 0, right: "calc(50% - 50vw)" }}
          />
          <div className="relative z-[1] block h-full min-h-[240px] sm:min-h-[320px]">
            <Image
              src="/images/tow-truck-hero.webp"
              alt="Flatbed tow truck loaded with a vehicle — Caraway pickup in Brisbane"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 54vw"
              className="object-cover"
              priority
              fetchPriority="high"
            />
          </div>
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
