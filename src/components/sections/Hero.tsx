import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Star, Shield } from "lucide-react";
import { BUSINESS } from "@/lib/site";

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-primary-dark"
      style={{ minHeight: "min(100svh, 680px)" }}
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/tow-truck-hero.webp"
          alt="Flatbed tow truck loaded with a vehicle — Caraway pickup in Brisbane"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          fetchPriority="high"
        />
        {/* Sophisticated multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,50%,14%)] via-[hsl(215,50%,14%)/0.85] to-[hsl(215,50%,14%)/0.4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215,50%,14%)/0.3] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-44 pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-2xl">
          {/* Trust indicator */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 mb-8 border border-white/10">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-white/80 text-sm font-medium">4.8 rating from Brisbane sellers</span>
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-display font-bold leading-[1.06] tracking-tight text-white mb-6"
          >
            Cash for Cars
            <br />
            <span className="text-accent">Brisbane</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
            We buy unwanted cars for cash — pickup included, same day where possible. Running or not, with or without rego.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#quote-section"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-accent hover:bg-accent/90 text-white px-8 sm:px-10 font-bold group shadow-xl hover:shadow-2xl"
              )}
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden />
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center rounded-xl h-14 px-8 font-semibold border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
            >
              {BUSINESS.phoneFriendly}
            </a>
          </div>

          {/* Trust checkmarks */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
            {["Paid on pickup", "Free towing included", "No roadworthy needed"].map((text) => (
              <div key={text} className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20">
                  <Check className="w-3 h-3 text-accent" strokeWidth={3} aria-hidden />
                </div>
                <span className="text-sm text-white/60 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating offer card — desktop only */}
        <div className="hidden lg:flex absolute bottom-12 right-8 xl:right-16 z-10 bg-white rounded-2xl p-6 shadow-float max-w-xs flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <span className="text-accent font-bold text-xl">$</span>
            </div>
            <div>
              <p className="font-display font-bold text-foreground text-lg leading-tight">Up to $9,999</p>
              <p className="text-muted-foreground text-sm">Cash offers for your vehicle</p>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-3 border-t border-border">
            <Shield className="w-4 h-4 text-primary/60" />
            <span className="text-xs text-muted-foreground">Licensed buyer — QLD registered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
