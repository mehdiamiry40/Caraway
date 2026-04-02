import { Star, Quote } from "lucide-react";
import { reviews as testimonials } from "@/data/reviews";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? "fill-accent text-accent" : "fill-transparent text-border"}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="section-y bg-muted relative overflow-hidden" aria-label="What sellers say">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="section-label mb-3">Recent feedback</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-balance">
            Cash for Cars Brisbane Reviews
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Typical situations — old cars, damage, no rego. Your offer depends on your car; these are examples only.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, index) => (
            <article
              key={`${review.name}-${review.location}-${index}`}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-border/60 shadow-sm hover:shadow-md hover:border-primary/15 transition-all relative"
            >
              {/* Decorative quote icon */}
              <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/[0.06] group-hover:text-accent/10 transition-colors" aria-hidden />

              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="flex flex-col gap-1.5">
                  <span className="sr-only">Rated {review.rating} out of 5 stars</span>
                  <Stars count={review.rating} />
                </div>
                <span className="text-[11px] sm:text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full shrink-0 leading-tight font-medium">
                  {review.car}
                </span>
              </div>
              <blockquote className="text-foreground/85 text-sm leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center text-primary font-bold text-sm shrink-0"
                  aria-hidden="true"
                >
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">
                    {review.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{review.location}, Brisbane</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
