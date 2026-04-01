export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  category: string;
}

/** Calculate reading time from content paragraphs (~200 WPM average). */
function calcReadTime(content: string[]): string {
  const words = content.join(" ").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

/** Get related posts by matching category, excluding the current post. */
export function getRelatedPosts(currentSlug: string, limit = 2): BlogPost[] {
  const current = blogPosts.find((p) => p.slug === currentSlug);
  if (!current) return [];

  const sameCategory = blogPosts.filter(
    (p) => p.slug !== currentSlug && p.category === current.category
  );
  const others = blogPosts.filter(
    (p) => p.slug !== currentSlug && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}

const rawPosts: Omit<BlogPost, "readTime">[] = [
  {
    slug: "how-to-sell-your-car-for-cash-brisbane",
    title: "How to Sell Your Car for Cash in Brisbane: A Complete Guide",
    metaDescription:
      "Learn how to sell your car for cash in Brisbane. From getting quotes to same-day pickup, here's everything you need to know about cash for cars services.",
    excerpt:
      "Selling a car privately can take weeks of listing, fielding calls, and negotiating. If you want a faster option, cash-for-cars services let you skip all of that.",
    content: [
      "Selling a car privately can take weeks of listing, fielding calls, and negotiating. If you want a faster option, cash-for-cars services let you skip all of that. Here's how the process works in Brisbane.",
      "First, get a quote. You can call or fill out an online form with your car's make, model, year, and condition. A reputable buyer will give you a price over the phone — no obligation.",
      "Second, schedule your pickup. Most services offer same-day or next-day collection across Greater Brisbane, including Logan, Ipswich, and Moreton Bay.",
      "Third, get paid on the spot. When the tow truck arrives, the driver inspects the car, confirms the quote, and hands you cash. No waiting for bank transfers.",
      "What about cars that don't run? Most cash-for-cars buyers accept vehicles in any condition — damaged, unregistered, written off, or simply old. Free towing is standard.",
      "How much will you get? Offers typically range from a few hundred dollars for scrap vehicles up to $9,999 for cars in good working order. The main factors are make, model, age, condition, and current scrap metal prices.",
      "To get the best price, have your registration papers ready, be honest about the car's condition, and compare quotes from at least two buyers before committing.",
    ],
    date: "2025-03-15",
    category: "Guides",
  },
  {
    slug: "what-happens-to-your-car-after-selling",
    title: "What Happens to Your Car After You Sell It for Cash?",
    metaDescription:
      "Ever wondered what happens to your car after a cash-for-cars buyer picks it up? Here's the journey from your driveway to recycling or resale.",
    excerpt:
      "Once the tow truck drives away with your old car, what happens next? The answer depends on the vehicle's condition.",
    content: [
      "Once the tow truck drives away with your old car, what happens next? The answer depends on the vehicle's condition.",
      "Cars in reasonable working order are often resold at auction or exported to markets where older models are still in demand. The buyer handles re-registration and any needed repairs.",
      "Vehicles that are damaged, written off, or too old to resell go to licensed auto recyclers. There, they're carefully dismantled. Usable parts — engines, transmissions, doors, mirrors — are cleaned, tested, and sold as second-hand spares.",
      "The remaining shell is crushed, shredded, and sorted. Steel, aluminium, copper, and other metals are separated and sent to smelters. Australia recycles roughly 90% of an end-of-life vehicle's metal content.",
      "Fluids like engine oil, coolant, and brake fluid are drained and either re-refined or disposed of according to EPA guidelines. Tyres are sent to specialist recyclers.",
      "So whether your car runs or not, selling it for cash means it gets a second life — as parts, raw materials, or both. It's a more responsible option than letting it rust in the yard.",
    ],
    date: "2025-02-28",
    category: "Insights",
  },
  {
    slug: "signs-your-car-is-worth-more-as-scrap",
    title: "5 Signs Your Car Is Worth More as Scrap Than a Trade-In",
    metaDescription:
      "Not sure whether to trade in or scrap your old car? Here are five signs that scrapping might get you a better deal.",
    excerpt:
      "Trade-ins seem convenient, but dealerships lowball older vehicles. Here are five signs you'd do better selling for scrap cash.",
    content: [
      "Trade-ins seem convenient, but dealerships lowball older vehicles because they can't resell them easily. Here are five signs you'd do better selling your car to a cash buyer.",
      "1. The repair costs exceed the car's value. If a mechanic quotes $3,000 to fix a car worth $2,500, it's time to sell as-is. Cash buyers factor in the scrap value of metals and parts, so you still get paid.",
      "2. It's been sitting unused for months. A car that's been parked for six months or more is losing value to rust, flat tyres, and battery decay. The longer you wait, the less it's worth.",
      "3. It failed the safety inspection. If your car can't pass a roadworthy certificate and the fixes are expensive, a cash-for-cars service is the simplest exit. No roadworthy required.",
      "4. The trade-in offer was insultingly low. Dealerships often offer $500 or less for older cars, then charge you fees on top. A direct cash buyer typically offers more because they recover value from parts and metal.",
      "5. You just want it gone today. Private sales take time — ads, tyre-kickers, test drives, negotiation. If speed matters, cash buyers pick up same day and pay on the spot.",
    ],
    date: "2025-02-10",
    category: "Tips",
  },
  {
    slug: "preparing-your-car-for-pickup",
    title: "How to Prepare Your Car for a Cash-for-Cars Pickup",
    metaDescription:
      "Getting your car ready for a cash-for-cars pickup? Follow these simple steps to make the process smooth and quick.",
    excerpt:
      "A little preparation before the tow truck arrives makes the pickup faster and ensures you don't leave personal items behind.",
    content: [
      "A little preparation before the tow truck arrives makes the pickup faster and ensures you don't leave personal items behind. Here's a quick checklist.",
      "Remove all personal belongings. Check the glove box, boot, under seats, door pockets, and sun visors. People commonly forget sunglasses, phone chargers, garage remotes, and toll tags.",
      "Gather your paperwork. Have your registration certificate or proof of ownership ready. If you've lost the papers, let the buyer know in advance — most can still proceed with valid ID.",
      "Remove your number plates. In Queensland, plates belong to the registered owner, not the vehicle. Take them off before the driver arrives, or ask for help on the day.",
      "Cancel your registration. Once the car is gone, notify the Department of Transport to cancel rego and get a refund on any unused portion.",
      "Ensure access for the tow truck. Clear the driveway or parking area so the truck can reach the car easily. If the car is in a tight spot, mention it when booking so the right equipment is sent.",
      "That's it — five simple steps. The whole pickup usually takes 15 to 30 minutes from arrival to payment.",
    ],
    date: "2025-01-20",
    category: "Guides",
  },
];

export const blogPosts: BlogPost[] = rawPosts.map((p) => ({
  ...p,
  readTime: calcReadTime(p.content),
}));
