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
    slug: "how-to-transfer-car-ownership-qld",
    title: "How to Transfer Car Ownership in QLD (2026)",
    metaDescription:
      "Step-by-step guide to transferring car ownership in Queensland. Learn what forms, fees, and documents you need when selling or buying a vehicle in Brisbane.",
    excerpt:
      "Transferring car ownership in Queensland is straightforward once you know the steps. Here's exactly what buyers and sellers need to do to stay legal.",
    content: [
      "Whether you're selling your car privately, through a dealer, or to a cash-for-cars buyer in Brisbane, you need to transfer ownership properly. Getting it wrong can leave you liable for fines, tolls, or even accidents after the car has left your hands. Here's how to handle it correctly in Queensland.",
      "The key document is the vehicle's registration certificate — also called a Certificate of Registration. In QLD, the seller must complete the disposal section on the back of this certificate and submit it to the Department of Transport and Main Roads (TMR) within 14 days of the sale. This step is non-negotiable. Until TMR updates their records, the car is still registered in your name.",
      "For the buyer, they need to complete a Transfer of Registration application (Form 18). This form is available at any TMR customer service centre or online. The buyer pays a transfer fee, which currently sits at around $37.85 for a standard vehicle, plus stamp duty based on the sale price or market value — whichever is higher. Stamp duty in Queensland is calculated at $3 per $100 of the dutiable value up to $100,000.",
      "If the car is sold with an active safety certificate (formerly known as a roadworthy certificate), the transfer is straightforward. Without one, the buyer will need to obtain a safety certificate before they can register the vehicle in their name. Safety certificates in Brisbane typically cost between $80 and $150 from an approved inspection station, though repairs to pass the inspection can add to that cost.",
      "Here's what the seller needs to provide: a signed transfer section on the registration certificate, a valid safety certificate (if the vehicle is being sold registered), and a receipt showing the agreed sale price. It's good practice to include the vehicle's VIN, make, model, year, and the odometer reading on the receipt. Both parties should keep a copy.",
      "Don't forget to notify your insurance company. Cancel or transfer your comprehensive or CTP insurance on the day of sale. If you forget, you could be paying premiums on a car you no longer own. In QLD, CTP insurance (also called a green slip) is included in your registration cost, so cancelling your rego will automatically end your CTP cover.",
      "One common mistake Brisbane sellers make is forgetting to cancel tolls and e-tag accounts linked to the vehicle. If the new owner racks up toll charges on the Gateway Motorway or Logan Motorway before you've updated your details with Linkt or another toll provider, those charges may land on your account. Remove the vehicle from your toll account on the day of sale.",
      "What if you've lost your registration certificate? You can apply for a replacement through TMR before the sale, or complete a statutory declaration confirming you are the registered owner. This adds a small delay, so sort it out early if you know your papers are missing.",
      "For cash-for-cars transactions, the process is simpler. Reputable buyers like Caraway handle much of the paperwork for you. When our team picks up your vehicle in Brisbane, we complete the transfer documentation on the spot and ensure TMR is notified. You still need to bring valid photo ID and sign the transfer forms, but the heavy lifting is done for you.",
      "If you're selling a written-off vehicle, there are extra rules. Statutory write-offs in Queensland cannot be re-registered — ever. Repairable write-offs can be re-registered, but only after passing a written-off vehicle inspection through TMR. Make sure you know which category your car falls into before listing it for sale.",
      "A few final tips to keep the transfer clean. Always conduct the sale during business hours so you can contact TMR if questions arise. Never hand over the keys before receiving full payment — in cash transactions, count the money before signing anything. And take a photo of the buyer's licence for your records, just in case.",
      "Transferring car ownership in QLD is not complicated, but skipping steps can create headaches weeks or months down the track. Whether you're selling a near-new sedan in Paddington or offloading a twenty-year-old ute in Logan, following this process protects both you and the buyer. If you'd rather skip the paperwork entirely, a cash-for-cars service handles it all — and you walk away with cash on the same day.",
    ],
    date: "2026-04-02",
    category: "Guides",
  },
  {
    slug: "how-much-is-my-car-worth-for-scrap-brisbane",
    title: "How Much Is My Car Worth for Scrap in Brisbane? (2025 Guide)",
    metaDescription:
      "Find out how much your scrap car is worth in Brisbane. We break down what affects scrap car prices in 2025, from metal weight to parts value, and how to get the best offer.",
    excerpt:
      "Wondering what your old car is actually worth as scrap? Brisbane scrap prices depend on several factors most sellers overlook. Here's what determines your payout.",
    content: [
      "If you have an old, damaged, or non-running car sitting in your driveway, one of the first questions you'll ask is: how much is it actually worth? The answer in Brisbane depends on a handful of factors that most sellers never think about.",
      "The biggest factor is weight. Scrap car prices in Brisbane are heavily influenced by the current price of steel and other metals. A typical sedan weighs between 1,200 and 1,800 kilograms. At current scrap metal rates, the raw metal in an average car is worth between $150 and $400. But that's only the starting point — the real value often comes from what's still usable inside.",
      "Salvageable parts can dramatically increase your car's value. An engine that still turns over, a working transmission, undamaged doors, headlights, or even a good set of alloy wheels can add hundreds of dollars to a scrap offer. Popular models like Toyota Corollas, Hiluxes, and Ford Rangers have high parts demand in Brisbane, which pushes their scrap value up even when the car itself is in poor condition.",
      "The make and model matter more than you'd expect. Japanese brands — Toyota, Honda, Mazda, Nissan — tend to fetch higher scrap prices because their parts are in constant demand from mechanics and panel shops across South East Queensland. European cars can go either way: some parts are valuable, but others are difficult to move.",
      "Age isn't always a dealbreaker. A 2005 car with a blown engine can be worth more than a 2015 car that's been in a major accident, simply because the older car may have more intact, sellable parts. It depends on the specific damage and what components survived.",
      "Condition categories and what they typically pay in Brisbane: Running and registered cars in average condition generally receive $1,000 to $9,999 depending on make, model, and age. Non-running cars with salvageable parts usually fetch $300 to $2,000. Complete scrap vehicles — no usable parts, just metal — typically bring $150 to $500 based on weight.",
      "Location within Brisbane also plays a small role. Most reputable cash-for-cars buyers offer free towing across the entire Greater Brisbane region, so your suburb shouldn't affect the price. However, if you're in a very remote area or the car is in a difficult access spot — think underground parking or a narrow laneway — mention it upfront so the buyer can send the right equipment.",
      "To get the best price for your scrap car in Brisbane, follow these steps. First, get at least two or three quotes. Prices vary between buyers, and having a competing offer gives you leverage. Second, be completely honest about the car's condition — surprises at pickup lead to renegotiation, which nobody enjoys. Third, have your ID and any registration documents ready to speed up the process.",
      "One common mistake is waiting too long. A car that sits unused loses value every month to rust, flat-spotted tyres, dead batteries, and rodent damage. If you've decided to sell, act sooner rather than later. The scrap metal market fluctuates, and today's price isn't guaranteed next month.",
      "The bottom line: most scrap cars in Brisbane are worth between $150 and $3,000, with the sweet spot for older but reasonably complete vehicles sitting around $500 to $1,500. The only way to know your specific car's value is to get a quote based on its actual make, model, year, and condition. A quick phone call or online form takes five minutes and costs nothing.",
    ],
    date: "2025-04-01",
    category: "Guides",
  },
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
