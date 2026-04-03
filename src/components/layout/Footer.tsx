import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
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
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,50%,16%)] to-[hsl(215,50%,12%)]" />

      {/* CTA bar */}
      <div className="relative z-10 border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Ready to sell your car?
              </h3>
              <p className="text-white/50 mt-1.5">Get a free, no-obligation cash offer today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/#quote-section"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/8 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS.phoneFriendly}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display font-bold text-2xl tracking-tight text-white mb-4 block lowercase">
              caraway<span className="text-accent">.</span>
            </Link>
            <p className="text-white/40 max-w-sm mt-4 leading-relaxed text-sm">
              Brisbane cash for cars and pickup. We quote before we load — running, damaged, or unregistered. Call or send the form.
            </p>
            <div className="mt-7 space-y-3.5">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group text-sm">
                <span className="flex h-9 w-9 rounded-xl bg-white/8 items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-4 w-4 text-accent" />
                </span>
                {BUSINESS.phone}
              </a>
              <a href={BUSINESS.emailHref} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group text-sm">
                <span className="flex h-9 w-9 rounded-xl bg-white/8 items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-4 w-4 text-accent" />
                </span>
                {BUSINESS.email}
              </a>
              <div className="flex items-center gap-3 text-white/40 text-sm">
                <span className="flex h-9 w-9 rounded-xl bg-white/8 items-center justify-center">
                  <MapPin className="h-4 w-4 text-white/30" />
                </span>
                {BUSINESS.location}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-white/30 mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-white/30 mb-6">Locations</h4>
            <ul className="space-y-3">
              {locationLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-white/30 mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Caraway. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
