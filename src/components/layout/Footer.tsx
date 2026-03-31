import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

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
  { label: "Get a Quote", href: "/#quote-section" },
];

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8">

          <div className="lg:col-span-2">
            <Link href="/" className="font-display font-bold text-2xl tracking-tight text-primary mb-4 block lowercase">
              caraway<span className="text-accent">.</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mt-3 leading-relaxed text-sm">
              Brisbane cash for cars and pickup. We quote before we load — running, damaged, or unregistered. Call or send the form.
            </p>
            <div className="mt-5 space-y-2.5">
              <a href="tel:1800227293" className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors group text-sm">
                <span className="flex h-8 w-8 rounded-full bg-primary/8 items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                </span>
                1800 227 293
              </a>
              <a href="mailto:info@caraway.au" className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors group text-sm">
                <span className="flex h-8 w-8 rounded-full bg-primary/8 items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                </span>
                info@caraway.au
              </a>
              <div className="flex items-center gap-3 text-foreground/70 text-sm">
                <span className="flex h-8 w-8 rounded-full bg-primary/8 items-center justify-center">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                </span>
                Brisbane, QLD
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary mb-5">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/60 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary mb-5">Locations</h4>
            <ul className="space-y-2.5">
              {locationLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/60 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary mb-5">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/60 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Caraway. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
