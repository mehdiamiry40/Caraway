import './_group.css';
import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Current() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#", hasDropdown: true },
    { label: "Locations", href: "#" },
    { label: "About", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const serviceDropdown = [
    { label: "Cash for Cars Brisbane", href: "#" },
    { label: "Car Removal Brisbane", href: "#" },
    { label: "Sell My Car Brisbane", href: "#" },
    { label: "Scrap Car Removal", href: "#" },
    { label: "Unwanted Cars", href: "#" },
    { label: "Damaged Cars", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-[hsl(220,16%,96%)]">
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white py-3 border-[hsl(220,18%,88%)]/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span style={{ fontFamily: 'Outfit, sans-serif' }} className="font-bold text-2xl tracking-tight text-[hsl(221,92%,27%)]">
              Caraway<span className="text-[hsl(21,92%,54%)]">.</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <a
                  href={link.href}
                  className="text-sm font-medium text-[hsl(221,45%,14%)]/80 hover:text-[hsl(221,92%,27%)] transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </a>

                {link.hasDropdown && isServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-[hsl(220,18%,88%)]/50 py-2 z-50">
                    {serviceDropdown.map(item => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-[hsl(221,45%,14%)]/80 hover:text-[hsl(221,92%,27%)] hover:bg-[hsl(220,16%,96%)]/50 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:1800227293"
              className="flex items-center gap-2 text-sm font-semibold text-[hsl(221,45%,14%)] hover:text-[hsl(221,92%,27%)] transition-colors group"
            >
              <div className="h-8 w-8 rounded-full bg-[hsl(220,16%,96%)] flex items-center justify-center group-hover:bg-[hsl(221,92%,27%)]/10 transition-colors">
                <Phone className="h-4 w-4" />
              </div>
              1800 CAR AWAY
            </a>
            <Button size="sm" className="rounded-full px-6 bg-[hsl(21,92%,54%)] hover:bg-[hsl(21,92%,54%)]/90 text-white border-0">
              Get a Quote
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-[hsl(221,45%,14%)]"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-[hsl(220,18%,88%)]/50">
            <span style={{ fontFamily: 'Outfit, sans-serif' }} className="font-bold text-2xl text-[hsl(221,92%,27%)]">Caraway.</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 flex flex-col p-6 gap-4 overflow-y-auto">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-medium text-[hsl(221,45%,14%)] border-b border-[hsl(220,18%,88%)]/50 pb-3"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 pb-3 border-b border-[hsl(220,18%,88%)]/50">
                <p className="text-xs font-semibold text-[hsl(220,14%,48%)] uppercase tracking-wider mb-2">Popular Services</p>
                {serviceDropdown.map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-sm text-[hsl(221,45%,14%)]/70 hover:text-[hsl(221,92%,27%)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <a
                href="tel:1800227293"
                className="flex items-center justify-center gap-2 h-14 rounded-xl border-2 border-[hsl(221,92%,27%)] text-[hsl(221,92%,27%)] font-semibold text-lg"
              >
                <Phone className="h-5 w-5" />
                1800 227 293
              </a>
              <Button size="lg" className="w-full bg-[hsl(21,92%,54%)] hover:bg-[hsl(21,92%,54%)]/90 text-white border-0">
                Get My Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="pt-20 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[hsl(221,92%,27%)] rounded-2xl p-12 text-white">
            <h1 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl font-bold mb-3">Sell Your Car in Brisbane.</h1>
            <p className="text-white/70 text-lg">Fast, free pickup — cash in your hands today.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
