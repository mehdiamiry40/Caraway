import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Phone, Star, Check } from "lucide-react";
import { BUSINESS } from "@/lib/site";

const trustSignals = [
  "Paid on pickup",
  "Free towing",
  "No rego needed",
] as const;

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-primary mt-14 lg:mt-[104px]"
      aria-labelledby="hero-heading"
    >
      {/* Background image — full bleed on all screens */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tow-truck-hero.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20 lg:opacity-100"
          priority
        />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/40 lg:via-primary/85 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/30 lg:from-primary/40 lg:to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] py-12 sm:py-16 lg:py-20">
          {/* Left — copy */}
          <div className="max-w-xl">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3.5 py-1.5 mb-5 sm:mb-6 ring-1 ring-white/15">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-xs font-medium text-white/80">Brisbane&apos;s trusted car buyers</span>
            </div>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-[2.75rem] lg:text-[3.5rem] xl:text-6xl font-display font-bold leading-[1.08] tracking-tight text-white mb-4 sm:mb-5"
            >
              Cash for Cars{" "}
              <span className="text-accent">Brisbane</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed mb-8 sm:mb-10 max-w-md">
              We buy unwanted cars for cash and pick them up free.
              Running or not, with or without rego — you get paid before we load.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#quote-section"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-accent hover:bg-accent/90 text-white rounded-full h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold shadow-[0_0_20px_rgba(212,144,14,0.3)] hover:shadow-[0_0_28px_rgba(212,144,14,0.45)] group border-0"
                )}
              >
                Get your free quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden />
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 ring-1 ring-white/20 transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {BUSINESS.phoneFriendly}
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustSignals.map((text) => (
                <div key={text} className="flex items-center gap-2 text-xs sm:text-sm text-white/60 font-medium">
                  <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={3} aria-hidden />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating card (visible on larger screens, anchored bottom-right on mobile) */}
          <div className="hidden lg:flex justify-end items-end">
            <div className="bg-white/[0.07] backdrop-blur-xl rounded-2xl p-6 ring-1 ring-white/10 max-w-xs w-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-xl shrink-0" aria-hidden>
                  $
                </div>
                <div>
                  <p className="font-display font-bold text-white text-lg">Up to $9,999</p>
                  <p className="text-sm text-white/60">Cash offers for your car</p>
                </div>
              </div>
              <div className="space-y-2.5">
                {["Same-day pickup available", "All makes & conditions", "No paperwork hassle"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-accent" strokeWidth={3} aria-hidden />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile price badge — visible only on small screens */}
      <div className="lg:hidden relative z-10 px-4 sm:px-6 pb-6">
        <div className="bg-white/[0.08] backdrop-blur-xl rounded-xl px-4 py-3 ring-1 ring-white/10 flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-base shrink-0" aria-hidden>
            $
          </div>
          <div>
            <p className="font-display font-bold text-white text-sm">Offers up to $9,999</p>
            <p className="text-xs text-white/55">Same-day pickup · All conditions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
