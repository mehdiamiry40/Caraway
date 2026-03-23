import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jason M.",
    location: "Chermside, Brisbane",
    rating: 5,
    text: "Caraway gave me $2,800 cash for my old Holden Commodore that hadn't run in two years. They came to Chermside within a few hours of my call. Free towing and cash on the spot — couldn't have been easier.",
    car: "2009 Holden Commodore",
  },
  {
    name: "Sarah K.",
    location: "Ipswich, QLD",
    rating: 5,
    text: "I needed to sell my car fast after an accident. Caraway picked it up from Ipswich the same day and paid me immediately. No hassle, no lowball offers — they were completely upfront about the price.",
    car: "2014 Toyota Camry (damaged)",
  },
  {
    name: "Derek T.",
    location: "Capalaba, Brisbane",
    rating: 5,
    text: "Best cash for cars service in Brisbane. I'd tried two other companies but they kept changing the offer at pickup. Caraway honoured exactly what they quoted me over the phone. Will definitely use again.",
    car: "2006 Ford Falcon",
  },
  {
    name: "Priya S.",
    location: "Sunnybank, Brisbane",
    rating: 5,
    text: "Sold my scrap Mazda 3 that had been sitting in my driveway for over a year. Got $950 cash and they were gone within 45 minutes. The team was professional and friendly. Highly recommend!",
    car: "2005 Mazda 3 (scrap)",
  },
  {
    name: "Michael B.",
    location: "North Lakes, Brisbane",
    rating: 5,
    text: "Tried selling privately for months with no luck. Caraway came out to North Lakes, gave me a fair price and handled all the transfer paperwork. Got cash in hand before they even drove away.",
    car: "2011 Nissan Dualis",
  },
  {
    name: "Angela W.",
    location: "Logan, QLD",
    rating: 5,
    text: "As a single mum I was nervous about getting ripped off. Caraway was transparent, professional and gave me a great price for my old SUV. The whole process took less than 2 hours from quote to cash.",
    car: "2008 Hyundai Santa Fe",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-background" aria-label="Customer reviews for Cash for Cars Brisbane">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Real Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">
            Brisbane Sellers Love Caraway
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            Over 8,500 Brisbane car owners have sold their vehicles through Caraway. Here's what some of them had to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-border/40 shadow-sm hover:shadow-md transition-shadow"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-start justify-between mb-4">
                <Stars count={review.rating} />
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{review.car}</span>
              </div>
              <blockquote
                className="text-foreground/80 text-sm leading-relaxed mb-6"
                itemProp="reviewBody"
              >
                "{review.text}"
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div
                  className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0"
                  aria-hidden="true"
                >
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground" itemProp="author">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.location}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
