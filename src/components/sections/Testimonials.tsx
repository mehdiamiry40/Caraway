import { Star } from "lucide-react";
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
    <section className="section-y bg-muted" aria-label="What sellers say">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="section-label mb-3">Recent feedback</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-balance">
            Cash for Cars Brisbane Reviews
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Typical situations — old cars, damage, no rego. Your offer depends on your car; these are examples only.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, index) => (
            <article
              key={`${review.name}-${review.location}-${index}`}
              className="bg-white rounded-2xl p-5 sm:p-7 border border-border/60 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-2 sm:gap-3 mb-4">
                <div className="flex flex-col gap-1">
                  <span className="sr-only">Rated {review.rating} out of 5 stars</span>
                  <Stars count={review.rating} />
                </div>
                <span className="text-[11px] sm:text-xs text-muted-foreground bg-muted px-2 sm:px-2.5 py-1 rounded-full shrink-0 leading-tight">
                  {review.car}
                </span>
              </div>
              <blockquote className="text-foreground/85 text-sm leading-relaxed mb-6">
                {review.text}
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div
                  className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0"
                  aria-hidden="true"
                >
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">
                    {review.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{review.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
