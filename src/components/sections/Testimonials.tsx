import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jason M.",
    location: "Chermside",
    rating: 5,
    text: "Dead Commodore in the carport — they quoted over the phone and stuck to it at pickup. Cash before the truck left.",
    car: "2009 Holden Commodore",
  },
  {
    name: "Sarah K.",
    location: "Ipswich",
    rating: 5,
    text: "Written off in a bingle. Same-day pickup, no haggling on the day.",
    car: "2014 Toyota Camry",
  },
  {
    name: "Derek T.",
    location: "Capalaba",
    rating: 4,
    text: "Other place tried to chip the price when they arrived. These guys matched what they said. Took a star off because traffic made them 20 min late — still solid.",
    car: "2006 Ford Falcon",
  },
  {
    name: "Priya S.",
    location: "Sunnybank",
    rating: 5,
    text: "Scrap Mazda sitting a year. $950, gone in under an hour. Fine by me.",
    car: "2005 Mazda 3",
  },
  {
    name: "Michael B.",
    location: "North Lakes",
    rating: 5,
    text: "Couldn’t move it privately. They did the transfer paperwork — I didn’t have to queue at Transport.",
    car: "2011 Nissan Dualis",
  },
];

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
