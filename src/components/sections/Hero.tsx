import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Star } from "lucide-react";
import { BUSINESS } from "@/lib/site";

export function Hero() {

  return (
    <section
      className="relative w-full overflow-x-hidden mt-14 lg:mt-[104px] bg-[hsl(35,30%,96%)]"
      style={{ minHeight: "min(100svh, 560px)" }}
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-0 lg:min-h-[560px]">
        {/* Text side */}
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-[50%] shrink-0 px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-24 lg:pl-8 lg:pr-14">
          <h1
            id="hero-heading"
            className="text-3xl sm:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.08] tracking-tight text-primary mb-5"
          >
            Cash for Cars<br />
            <span className="text-accent">Brisbane</span>
          </h1>

          <p className="text-lg sm:text-xl font-medium text-foreground/80 mb-4 max-w-md leading-snug">
            We buy unwanted cars for cash — pickup included.
          </p>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-md">
            Running or not, with or without rego. You get a price before we load the car — then payment when we collect it from your place.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#quote-section"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-accent hover:bg-accent/90 text-white rounded-lg h-12 sm:h-13 px-6 sm:px-8 text-sm sm:text-base font-semibold group border-0"
              )}
            >
              Get a free quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden />
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center rounded-lg h-12 sm:h-13 px-6 sm:px-8 text-sm sm:text-base font-semibold border-2 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all"
            >
              {BUSINESS.phoneFriendly}
            </a>
          </div>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-6 gap-y-2.5">
            {["Paid on pickup", "Free towing", "No roadworthy needed"].map((text) => (
              <div key={text} className="flex items-center gap-2 whitespace-nowrap">
                <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={2.5} aria-hidden />
                <span className="text-xs sm:text-sm text-muted-foreground font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="relative flex-1 min-h-[260px] sm:min-h-[340px] lg:min-h-0">
          <Image
            src="/images/tow-truck-hero.webp"
            alt="Flatbed tow truck loaded with a vehicle — Caraway pickup in Brisbane"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
            fetchPriority="high"
          />

          {/* Price badge */}
          <div className="absolute bottom-5 left-4 right-4 sm:bottom-7 sm:left-auto sm:right-7 sm:max-w-sm z-[3] bg-white rounded-xl px-5 py-4 flex items-center gap-4 shadow-md">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0" aria-hidden>
              $
            </div>
            <div>
              <div className="font-display font-bold text-foreground text-sm">Offers up to $9,999</div>
              <div className="text-xs text-muted-foreground mt-0.5">Depends on make, condition &amp; market</div>
            </div>
          </div>

          {/* Rating badge */}
          <div className="absolute top-5 right-4 sm:top-7 sm:right-7 z-[3] bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-md">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-xs font-semibold text-foreground">4.8</span>
          </div>
        </div>
      </div>
    </section>
  );
}
