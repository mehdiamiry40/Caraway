import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
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
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b bg-white py-3",
          isScrolled ? "border-border/60 shadow-sm" : "border-border/30"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-2xl tracking-tight text-primary">
              Caraway<span className="text-accent">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </Link>

                {link.hasDropdown && isServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-border/50 py-2 z-50">
                    {serviceDropdown.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:1800227293"
              className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
            >
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Phone className="h-4 w-4" />
              </div>
              1800 CAR AWAY
            </a>
            <Button onClick={scrollToQuote} size="sm" className="rounded-full px-6 bg-accent hover:bg-accent/90 text-white border-0">
              Get a Quote
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-background lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <span className="font-display font-bold text-2xl text-primary">Caraway.</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 flex flex-col p-6 gap-4 overflow-y-auto">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-display font-medium text-foreground border-b border-border/50 pb-3"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2 pb-3 border-b border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Popular Services</p>
                  {serviceDropdown.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-sm text-foreground/70 hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>

              <div className="mt-auto flex flex-col gap-4">
                <a
                  href="tel:1800227293"
                  className="flex items-center justify-center gap-2 h-14 rounded-xl border-2 border-primary text-primary font-semibold text-lg"
                >
                  <Phone className="h-5 w-5" />
                  1800 227 293
                </a>
                <Button onClick={scrollToQuote} size="lg" className="w-full bg-accent hover:bg-accent/90 text-white border-0">
                  Get My Free Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
