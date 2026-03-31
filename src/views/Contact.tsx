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

      <main className="flex-1 mt-14 lg:mt-[104px]">
        <section className="bg-primary text-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} light />
            <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight mt-4 mb-6">
              Contact Caraway
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              Ready to sell your car for cash? Get in touch for a free, no-obligation quote. We're available 7 days a week across Greater Brisbane.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The fastest way to get a cash offer is to call us directly. Our Brisbane team can provide an instant quote over the phone and arrange same-day pickup in most areas.
                </p>
              </div>

              <div className="space-y-6">
                <a href={BUSINESS.phoneHref} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">Phone</h3>
                    <p className="text-lg font-bold text-primary">{BUSINESS.phone}</p>
                    <p className="text-sm text-muted-foreground">{BUSINESS.phoneFriendly} — Free call</p>
                  </div>
                </a>

                <a href={BUSINESS.emailHref} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">Email</h3>
                    <p className="text-primary">{BUSINESS.email}</p>
                    <p className="text-sm text-muted-foreground">We respond within 1 hour during business hours</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Service Area</h3>
                    <p className="text-muted-foreground">All of Greater {BUSINESS.location}</p>
                    <p className="text-sm text-muted-foreground">{BUSINESS.locationDetail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Operating Hours</h3>
                    <p className="text-muted-foreground">{BUSINESS.hours}</p>
                    <p className="text-sm text-muted-foreground">{BUSINESS.hoursDetail}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <ContactForm />

              <div className="bg-muted/50 rounded-2xl p-8 border border-border">
                <h2 className="text-xl font-display font-bold text-foreground mb-2">Quick Reference</h2>
                <p className="text-sm text-muted-foreground mb-6">Everything you need to know before calling</p>
                <div className="space-y-4 text-sm">
                  <div className="border-b border-border pb-3">
                    <strong className="text-foreground">What to have ready:</strong>
                    <p className="text-muted-foreground mt-1">Your car&apos;s make, model, year, approximate kilometres, and a brief description of its condition.</p>
                  </div>
                  <div className="border-b border-border pb-3">
                    <strong className="text-foreground">What you&apos;ll need at pickup:</strong>
                    <p className="text-muted-foreground mt-1">Photo ID (driver&apos;s licence). Registration papers if available, but not essential.</p>
                  </div>
                  <div className="border-b border-border pb-3">
                    <strong className="text-foreground">Payment method:</strong>
                    <p className="text-muted-foreground mt-1">Cash on the spot. Paid before the car leaves your property.</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Towing cost:</strong>
                    <p className="text-muted-foreground mt-1">Free. Always. No exceptions.</p>
                  </div>
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
