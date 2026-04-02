import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { CheckCircle2 } from "lucide-react";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "About Caraway" }
];

const features = [
  { title: "Genuinely Free Towing", desc: "We never deduct towing costs from your offer. The price quoted is the price you get, every time." },
  { title: "Same-Day Service", desc: "Most vehicles are collected the same day you accept our offer. We don't make you wait." },
  { title: "All Vehicles Accepted", desc: "We buy cars in any condition — running, broken, damaged, scrap, unregistered. No exclusions." },
  { title: "Cash on the Spot", desc: "You receive your cash payment before the car leaves your property. No bank transfers, no delays." },
  { title: "Responsible Recycling", desc: "We dispose of all vehicles through licensed Queensland recycling facilities, meeting EPA requirements." },
  { title: "No Pressure", desc: "Our quotes are free and come with zero obligation. If our offer doesn't work for you, no hard feelings." },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1 mt-14 lg:mt-[104px]">
        <section className="bg-gradient-to-br from-primary via-primary to-[hsl(222,65%,14%)] text-white py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs items={breadcrumbs} light />
            <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight mt-4 mb-6">
              About Caraway
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
              We&apos;re a locally owned Brisbane business that makes selling your car simple. No auctions, no advertising, no time-wasters — just fair cash offers and same-day service.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="max-w-3xl space-y-12">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Caraway is a Brisbane-based buyer — we pay cash for cars we want, and we organise pickup when we agree a price. No listings, no strangers at your door for test drives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We&apos;re not a faceless national franchise or an online broker who subcontracts the work. We&apos;re a local team who lives and works in Brisbane, knows the suburbs, and takes pride in providing a genuine, personal service to every customer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">How we work</h2>
              <p className="text-muted-foreground leading-relaxed">
                We&apos;re not going to publish vanity metrics here — vehicle markets move weekly. What we will say: we show up when we say we will, we pay what we agreed before the car leaves, and we use licensed recyclers when a car is at end of life.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">What Sets Us Apart</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {features.map(item => (
                  <div key={item.title} className="flex gap-3 p-4 rounded-xl bg-muted/50 border border-border/40">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground text-sm">{item.title}</strong>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Service Area</h2>
              <p className="text-muted-foreground leading-relaxed">
                We service the entire Greater Brisbane region — from Caboolture in the north to Beenleigh in the south, from Ipswich in the west to Cleveland in the east. This includes all suburbs across Brisbane City, Logan City, Ipswich City, Moreton Bay, and Redland City council areas. If you&apos;re not sure whether we cover your area, just call — we almost certainly do.
              </p>
            </div>
          </div>
        </div>

        <InternalLinks />
      </main>

      <Footer />
    </div>
  );
}
