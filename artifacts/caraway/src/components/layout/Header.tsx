import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/" || location === "";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToQuote = () => {
    if (isHome) {
      document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#quote-section";
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Services", href: "/cash-for-cars-brisbane", hasDropdown: true },
    { label: "Locations", href: "/locations" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceDropdown = [
    { label: "Cash for Cars Brisbane", href: "/cash-for-cars-brisbane" },
    { label: "Car Removal Brisbane", href: "/car-removal-brisbane" },
    { label: "Sell My Car Brisbane", href: "/sell-my-car-brisbane" },
    { label: "Scrap Car Removal", href: "/scrap-car-removal-brisbane" },
    { label: "Unwanted Cars", href: "/unwanted-cars-brisbane" },
    { label: "Damaged Cars", href: "/damaged-cars-brisbane" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3">
      <header
        className={cn(
          "max-w-7xl mx-auto bg-primary py-4 rounded-2xl transition-shadow duration-300",
          isScrolled ? "shadow-lg" : "shadow-md"
        )}
      >
        <div className="px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-2xl tracking-tight text-white">
              Caraway<span className="text-accent">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative py-2"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="text-[15px] font-medium text-white/80 hover:text-white transition-colors flex items-center gap-1 group relative"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isServicesOpen ? "rotate-180" : "")} />
                  )}
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>

                {link.hasDropdown && isServicesOpen && (
                  <div className="absolute top-full left-0 mt-4 w-64 bg-white rounded-lg shadow-xl border-t-2 border-t-accent py-2 z-50">
                    {serviceDropdown.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-2.5 text-sm font-medium text-foreground hover:text-accent hover:bg-muted/50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:1800227293"
              className="flex items-center gap-2 text-[15px] font-semibold text-white hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              1800 CAR AWAY
            </a>
            <Button
              onClick={scrollToQuote}
              size="lg"
              className="rounded-lg px-7 bg-accent hover:bg-accent/90 text-white border-0 shadow-[0_0_15px_rgba(242,101,34,0.3)] hover:shadow-[0_0_20px_rgba(242,101,34,0.5)] transition-all font-semibold"
            >
              Get a Quote
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-white hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-primary lg:hidden flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <span className="font-display font-bold text-2xl tracking-tight text-white">
              Caraway<span className="text-accent">.</span>
            </span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white hover:text-accent transition-colors">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 flex flex-col p-6 gap-6 overflow-y-auto">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col">
                  <Link
                    href={link.href}
                    onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                    className="text-xl font-display font-medium text-white/90 hover:text-white pb-3 border-b border-white/10 flex items-center justify-between"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="h-5 w-5 text-white/50" />}
                  </Link>
                  {link.hasDropdown && (
                    <div className="flex flex-col gap-2 mt-3 pl-4 border-l-2 border-white/10">
                      {serviceDropdown.map(item => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="py-2 text-[15px] text-white/70 hover:text-white"
                        >
                          {item.label}
                        </Link>
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
                <Phone className="h-5 w-5 text-accent" />
                1800 227 293
              </a>
              <Button
                onClick={scrollToQuote}
                size="lg"
                className="w-full h-14 rounded-lg bg-accent hover:bg-accent/90 text-white border-0 font-bold text-lg shadow-[0_4px_14px_rgba(242,101,34,0.3)]"
              >
                Get My Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
