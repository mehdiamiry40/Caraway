import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

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
    <footer className="bg-foreground text-white py-16 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8">

          <div className="lg:col-span-2">
            <Link href="/" className="font-display font-bold text-3xl tracking-tight text-white mb-4 block">
              Caraway<span className="text-accent">.</span>
            </Link>
            <p className="text-white/60 max-w-sm mt-4 leading-relaxed">
              Brisbane's most trusted cash for cars service. Fast, fair, and hassle-free car removal. We buy any car, in any condition, today.
            </p>
            <div className="mt-6 space-y-3">
              <a href="tel:1800227293" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                <span className="flex h-8 w-8 rounded-full bg-white/5 items-center justify-center group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                  <Phone className="h-4 w-4" />
                </span>
                1800 227 293
              </a>
              <a href="mailto:info@caraway.com.au" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                <span className="flex h-8 w-8 rounded-full bg-white/5 items-center justify-center group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                  <Mail className="h-4 w-4" />
                </span>
                info@caraway.com.au
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <span className="flex h-8 w-8 rounded-full bg-white/5 items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </span>
                Brisbane, QLD
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-white/70">
              {serviceLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Locations</h4>
            <ul className="space-y-3 text-white/70">
              {locationLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-white/70">
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Caraway. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>ABN: 12 345 678 901</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
