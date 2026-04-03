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
    <section className="section-y bg-background" aria-label="What sellers say">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Reviews</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground leading-tight text-balance">
            What Brisbane Sellers Say
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Real situations — old cars, damage, no rego. Your offer depends on your vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, index) => (
            <article
              key={`${review.name}-${review.location}-${index}`}
              className="relative bg-white rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              {/* Quote mark accent */}
              <Quote className="w-8 h-8 text-accent/15 mb-4" strokeWidth={1.5} aria-hidden />

              <blockquote className="text-foreground/80 text-[15px] leading-relaxed mb-6 flex-1">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between pt-5 border-t border-border/40">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center text-primary font-bold text-sm shrink-0"
                    aria-hidden="true"
                  >
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.location}, Brisbane</div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="sr-only">Rated {review.rating} out of 5 stars</span>
                  <Stars count={review.rating} />
                  <span className="text-xs text-muted-foreground font-medium">{review.car}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
