import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import dynamic from "next/dynamic";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { InternalLinks } from "@/components/sections/InternalLinks";
import { BUSINESS } from "@/lib/site";

const QuoteForm = dynamic(() => import("@/components/sections/QuoteForm").then((mod) => mod.QuoteForm));
const ContactForm = dynamic(() => import("@/components/sections/ContactForm").then((mod) => mod.ContactForm));
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Contact Us" }
];

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(215,50%,18%)] via-[hsl(215,50%,22%)] to-[hsl(215,48%,28%)] text-white pt-32 lg:pt-36 pb-16 lg:pb-20">
          <div className="absolute inset-0 opacity-[0.03]" aria-hidden style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} light />
            <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight mt-5 mb-6">
              Contact Caraway
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
              Ready to sell your car for cash? Get in touch for a free, no-obligation quote. We&apos;re available 7 days a week across Greater Brisbane.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The fastest way to get a cash offer is to call us directly. Our Brisbane team can provide an instant quote over the phone and arrange same-day pickup in most areas.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    href: BUSINESS.phoneHref,
                    title: "Phone",
                    main: BUSINESS.phone,
                    sub: `${BUSINESS.phoneFriendly} — Free call`,
                  },
                  {
                    icon: Mail,
                    href: BUSINESS.emailHref,
                    title: "Email",
                    main: BUSINESS.email,
                    sub: "We respond within 1 hour during business hours",
                  },
                ].map((item) => (
                  <a key={item.title} href={item.href} className="flex items-start gap-4 group p-4 rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-all">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-base font-bold text-primary">{item.main}</p>
                      <p className="text-sm text-muted-foreground">{item.sub}</p>
                    </div>
                  </a>
                ))}

                {[
                  {
                    icon: MapPin,
                    title: "Service Area",
                    main: `All of Greater ${BUSINESS.location}`,
                    sub: BUSINESS.locationDetail,
                  },
                  {
                    icon: Clock,
                    title: "Operating Hours",
                    main: BUSINESS.hours,
                    sub: BUSINESS.hoursDetail,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4">
                    <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <p className="text-muted-foreground">{item.main}</p>
                      <p className="text-sm text-muted-foreground">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <ContactForm />

              <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-card">
                <h2 className="text-lg font-display font-bold text-foreground mb-1">Quick Reference</h2>
                <p className="text-sm text-muted-foreground mb-6">Everything you need to know before calling</p>
                <div className="space-y-4 text-sm">
                  {[
                    { q: "What to have ready:", a: "Your car's make, model, year, approximate kilometres, and a brief description of its condition." },
                    { q: "What you'll need at pickup:", a: "Photo ID (driver's licence). Registration papers if available, but not essential." },
                    { q: "Payment method:", a: "Cash on the spot. Paid before the car leaves your property." },
                    { q: "Towing cost:", a: "Free. Always. No exceptions." },
                  ].map((item, i, arr) => (
                    <div key={item.q} className={i < arr.length - 1 ? "border-b border-border/60 pb-4" : ""}>
                      <strong className="text-foreground">{item.q}</strong>
                      <p className="text-muted-foreground mt-1">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <QuoteForm />
        <InternalLinks />
      </main>

      <Footer />
    </div>
  );
}
