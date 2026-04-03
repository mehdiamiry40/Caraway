import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Star } from "lucide-react";
import { BUSINESS } from "@/lib/site";


const serviceLinks = [
  { label: "Cash for Cars Brisbane", href: "/cash-for-cars-brisbane" },
  { label: "Car Removal Brisbane", href: "/car-removal-brisbane" },
  { label: "Sell My Car Brisbane", href: "/sell-my-car-brisbane" },
  { label: "Scrap Car Removal", href: "/scrap-car-removal-brisbane" },
  { label: "Unwanted Cars", href: "/unwanted-cars-brisbane" },
  { label: "Damaged Cars", href: "/damaged-cars-brisbane" },
];

const locationLinks = [
  { label: "North Brisbane", href: "/locations/north-brisbane" },
  { label: "South Brisbane", href: "/locations/south-brisbane" },
  { label: "Logan", href: "/locations/logan" },
  { label: "Ipswich", href: "/locations/ipswich" },
  { label: "Redcliffe", href: "/locations/redcliffe" },
  { label: "All Locations", href: "/locations" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Get a Quote", href: "/#quote-section" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,50%,15%)] via-[hsl(215,50%,12%)] to-[hsl(215,50%,9%)]" />
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* CTA banner */}
      <div className="relative z-10 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-white/50 text-sm font-medium">4.8 rating</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                Ready to turn your car
                <br className="hidden sm:block" />
                <span className="text-accent"> into cash?</span>
              </h3>
              <p className="text-white/40 mt-3 leading-relaxed">
                Free quote, free towing, same-day pickup available across Brisbane.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#quote-section"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-sm font-bold text-white shadow-lg hover:bg-accent/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Your Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white hover:bg-white/[0.08] hover:border-white/25 transition-all duration-200"
              >
                <Phone className="h-4 w-4 text-accent" />
                {BUSINESS.phoneFriendly}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="font-display font-bold text-2xl tracking-tight text-white block lowercase"
            >
              caraway<span className="text-accent">.</span>
            </Link>
            <p className="text-white/35 max-w-xs mt-5 leading-relaxed text-sm">
              Brisbane&apos;s trusted car buyer. We quote before we load
              &mdash; running, damaged, or unregistered. Fair cash, fast
              pickup.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group text-sm"
              >
                <span className="flex h-9 w-9 rounded-lg bg-white/[0.06] items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-4 w-4 text-accent" />
                </span>
                <span>
                  <span className="block text-white/70 font-medium">{BUSINESS.phone}</span>
                  <span className="block text-white/30 text-xs">{BUSINESS.phoneFriendly}</span>
                </span>
              </a>
              <a
                href={BUSINESS.emailHref}
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group text-sm"
              >
                <span className="flex h-9 w-9 rounded-lg bg-white/[0.06] items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-4 w-4 text-accent" />
                </span>
                {BUSINESS.email}
              </a>
              <div className="flex items-center gap-3 text-white/30 text-sm">
                <span className="flex h-9 w-9 rounded-lg bg-white/[0.06] items-center justify-center">
                  <MapPin className="h-4 w-4 text-white/25" />
                </span>
                <span>
                  <span className="block">{BUSINESS.location}</span>
                  <span className="block text-xs text-white/20">{BUSINESS.hours}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-white/25 mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/45 hover:text-white transition-colors text-sm leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-white/25 mb-5">
              Locations
            </h4>
            <ul className="space-y-2.5">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/45 hover:text-white transition-colors text-sm leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-white/25 mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/45 hover:text-white transition-colors text-sm leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>
            &copy; {new Date().getFullYear()} Caraway. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white/50 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white/50 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
