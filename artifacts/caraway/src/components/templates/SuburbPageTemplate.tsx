import { useParams } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { breadcrumbListSchema } from "@/lib/breadcrumb-schema";
import { getSuburbBySlug, suburbs } from "@/data/suburbs";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle2, MapPin } from "lucide-react";
import { Link } from "wouter";
import NotFound from "@/pages/not-found";

export default function SuburbPageTemplate() {
  const params = useParams<{ slug: string }>();
  const suburb = getSuburbBySlug(params.slug);

  if (!suburb) return <NotFound />;

  const relatedServiceData = suburb.relatedServices
    .map(slug => services.find(s => s.slug === slug))
    .filter(Boolean);

  const nearbySuburbData = suburb.nearbySuburbs
    .map(slug => suburbs.find(s => s.slug === slug))
    .filter(Boolean);

  const canonicalUrl = `https://caraway.com.au/locations/${suburb.slug}`;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: suburb.h1 }
  ];

  const scrollToQuote = () => {
    document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={suburb.title}
        description={suburb.metaDescription}
        canonical={canonicalUrl}
        schema={[
          {
            "@type": "Service",
            "name": `Cash for Cars ${suburb.h1.replace("Cash for Cars ", "")}`,
            "description": suburb.metaDescription,
            "provider": { "@type": "LocalBusiness", "name": "Caraway" },
            "areaServed": { "@type": "Place", "name": suburb.h1.replace("Cash for Cars ", "") },
            "url": `https://caraway.com.au/locations/${suburb.slug}`
          },
          breadcrumbListSchema(breadcrumbs, canonicalUrl)
        ]}
      />
      <Header />

      <main className="flex-1 mt-14 lg:mt-[104px]">
        <section className="bg-primary text-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} light />
            <div className="flex items-center gap-3 mt-4 mb-2">
              <MapPin className="h-6 w-6 text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Local Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight mb-6">
              {suburb.h1}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mb-8">
              {suburb.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToQuote}
                className="bg-accent hover:bg-accent/90 text-white rounded-full h-13 px-8 text-base font-semibold shadow-lg group border-0"
              >
                Get My Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="tel:1800227293"
                className="inline-flex items-center justify-center rounded-full h-13 px-8 text-base font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
                style={{ height: "52px" }}
              >
                <Phone className="mr-2 h-4 w-4" />
                1800 CAR AWAY
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Local Car Buying Service
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {suburb.localContent}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  What We Buy in {suburb.h1.replace("Cash for Cars ", "")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {suburb.serviceDetails}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Why Choose Caraway in {suburb.h1.replace("Cash for Cars ", "")}?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {suburb.whyUs}
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8">
                <h2 className="text-xl font-display font-bold text-foreground mb-4">
                  How It Works
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { step: "1", title: "Get Your Quote", desc: "Call 1800 227 293 or fill out our form with your car details." },
                    { step: "2", title: "Accept Your Offer", desc: "We'll make a fair cash offer. No obligation if you decline." },
                    { step: "3", title: "Get Paid Today", desc: "We pick up your car free and pay you cash on the spot." }
                  ].map(item => (
                    <div key={item.step} className="text-center">
                      <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg mb-4">Our Promise</h3>
                <ul className="space-y-3">
                  {["Up to $9,999 cash", "Same-day pickup", "Free towing always", "No RWC needed", "All makes & models", "7 days a week"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent/5 border border-accent/10 rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg mb-2">Call for an Instant Quote</h3>
                <p className="text-sm text-muted-foreground mb-4">Speak to our Brisbane team now</p>
                <a
                  href="tel:1800227293"
                  className="flex items-center justify-center gap-2 bg-accent text-white rounded-full py-3 px-6 font-semibold hover:bg-accent/90 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  1800 227 293
                </a>
              </div>

              {relatedServiceData.length > 0 && (
                <div className="border border-border rounded-2xl p-6">
                  <h3 className="font-display font-bold text-lg mb-4">Our Services</h3>
                  <ul className="space-y-2">
                    {relatedServiceData.map(s => s && (
                      <li key={s.slug}>
                        <Link
                          href={`/${s.slug}`}
                          className="text-sm text-primary hover:text-accent transition-colors hover:underline"
                        >
                          {s.h1}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {nearbySuburbData.length > 0 && (
                <div className="border border-border rounded-2xl p-6">
                  <h3 className="font-display font-bold text-lg mb-4">Nearby Areas</h3>
                  <ul className="space-y-2">
                    {nearbySuburbData.map(s => s && (
                      <li key={s.slug}>
                        <Link
                          href={`/locations/${s.slug}`}
                          className="text-sm text-primary hover:text-accent transition-colors hover:underline"
                        >
                          {s.h1}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>

        <QuoteForm />
        <InternalLinks currentSlug={suburb.slug} />
      </main>

      <Footer />
    </div>
  );
}
