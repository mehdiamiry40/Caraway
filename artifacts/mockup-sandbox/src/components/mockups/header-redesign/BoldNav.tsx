import './_group.css';
import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BoldNav() {
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
    <div className="min-h-screen bg-[hsl(220,16%,96%)] font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(221,92%,27%)] py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span style={{ fontFamily: 'Outfit, sans-serif' }} className="font-bold text-2xl tracking-tight text-white">
              Caraway<span className="text-[hsl(21,92%,54%)]">.</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative h-full py-2"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <a
                  href={link.href}
                  className="text-[15px] font-medium text-white/80 hover:text-white transition-colors flex items-center gap-1 group relative"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isServicesOpen ? "rotate-180" : "")} />
                  )}
                  {/* Hover underline */}
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[hsl(21,92%,54%)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>

                {link.hasDropdown && isServicesOpen && (
                  <div className="absolute top-full left-0 mt-4 w-64 bg-white rounded-lg shadow-xl border-t-2 border-t-[hsl(21,92%,54%)] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {serviceDropdown.map(item => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-5 py-2.5 text-sm font-medium text-[hsl(221,45%,14%)] hover:text-[hsl(21,92%,54%)] hover:bg-[hsl(220,16%,96%)] transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:1800227293"
              className="flex items-center gap-2 text-[15px] font-semibold text-white hover:text-[hsl(21,92%,54%)] transition-colors"
            >
              <Phone className="h-4 w-4" />
              1800 CAR AWAY
            </a>
            <Button size="lg" className="rounded-lg px-7 bg-[hsl(21,92%,54%)] hover:bg-[hsl(21,92%,54%)]/90 text-white border-0 shadow-[0_0_15px_rgba(242,101,34,0.3)] hover:shadow-[0_0_20px_rgba(242,101,34,0.5)] transition-all font-semibold">
              Get a Quote
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-white hover:text-[hsl(21,92%,54%)] transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[hsl(221,92%,27%)] lg:hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <span style={{ fontFamily: 'Outfit, sans-serif' }} className="font-bold text-2xl tracking-tight text-white">
              Caraway<span className="text-[hsl(21,92%,54%)]">.</span>
            </span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white hover:text-[hsl(21,92%,54%)] transition-colors">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 flex flex-col p-6 gap-6 overflow-y-auto">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col">
                  <a
                    href={link.href}
                    onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                    className="text-xl font-medium text-white/90 hover:text-white pb-3 border-b border-white/10 flex items-center justify-between"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="h-5 w-5 text-white/50" />}
                  </a>
                  {link.hasDropdown && (
                    <div className="flex flex-col gap-2 mt-3 pl-4 border-l-2 border-white/10">
                      {serviceDropdown.map(item => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="py-2 text-[15px] text-white/70 hover:text-white"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4 pt-6">
              <a
                href="tel:1800227293"
                className="flex items-center justify-center gap-2 h-14 rounded-lg bg-white/5 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="h-5 w-5 text-[hsl(21,92%,54%)]" />
                1800 227 293
              </a>
              <Button size="lg" className="w-full h-14 rounded-lg bg-[hsl(21,92%,54%)] hover:bg-[hsl(21,92%,54%)]/90 text-white border-0 font-bold text-lg shadow-[0_4px_14px_rgba(242,101,34,0.3)]">
                Get My Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section Context */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mt-8">
          <div className="bg-white rounded-2xl shadow-sm border border-[hsl(220,18%,88%)] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center rounded-full border border-[hsl(21,92%,54%)]/30 bg-[hsl(21,92%,54%)]/10 px-3 py-1 text-sm font-medium text-[hsl(21,92%,54%)]">
                Top Rated Cash For Cars
              </div>
              <h1 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl lg:text-6xl font-extrabold text-[hsl(221,45%,14%)] leading-tight tracking-tight">
                Turn Your Unwanted Car Into <span className="text-[hsl(21,92%,54%)]">Instant Cash</span> Today.
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif' }} className="text-lg text-[hsl(220,14%,48%)] max-w-xl leading-relaxed">
                We buy cars in any condition across Brisbane. Get a free valuation in 2 minutes and same-day removal with immediate payment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="h-14 px-8 rounded-lg bg-[hsl(21,92%,54%)] hover:bg-[hsl(21,92%,54%)]/90 text-white text-lg font-semibold">
                  Get Free Valuation
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-lg border-2 border-[hsl(221,92%,27%)] text-[hsl(221,92%,27%)] hover:bg-[hsl(221,92%,27%)]/5 text-lg font-semibold">
                  How it Works
                </Button>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="aspect-[4/3] rounded-2xl bg-[hsl(220,16%,96%)] border border-[hsl(220,18%,88%)] flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(221,92%,27%)]/5 to-[hsl(21,92%,54%)]/5"></div>
                 <Phone className="h-24 w-24 text-[hsl(220,14%,48%)]/20" />
                 <p className="absolute bottom-6 left-0 right-0 text-center text-sm text-[hsl(220,14%,48%)] font-medium uppercase tracking-widest">Mockup Image Area</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
