"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BUSINESS } from "@/lib/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/" || pathname === "";

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const menu = mobileMenuRef.current;
    if (!menu) return () => { document.body.style.overflow = prev; };
    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const handleTab = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setIsMobileMenuOpen(false); return; }
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    menu.addEventListener("keydown", handleTab);
    first?.focus();

    return () => {
      document.body.style.overflow = prev;
      menu.removeEventListener("keydown", handleTab);
    };
  }, [isMobileMenuOpen]);

  const scrollToQuote = () => {
    if (isHome) {
      document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#quote-section");
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Services", href: "/cash-for-cars-brisbane", hasDropdown: true },
    { label: "Locations", href: "/locations" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-safe",
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <span className={cn(
                "font-display font-bold text-2xl tracking-tight lowercase transition-colors duration-300",
                isScrolled ? "text-foreground" : "text-white"
              )}>
                caraway<span className="text-accent">.</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-1",
                      isScrolled
                        ? "text-foreground/70 hover:text-primary hover:bg-primary/5"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                    {...(link.hasDropdown ? {
                      "aria-expanded": isServicesOpen,
                      "aria-haspopup": "true" as const,
                      onKeyDown: (e: React.KeyboardEvent) => {
                        if (e.key === "Escape" && isServicesOpen) {
                          setIsServicesOpen(false);
                        } else if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setIsServicesOpen((prev) => !prev);
                        }
                      },
                    } : {})}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown aria-hidden="true" className={cn("h-3.5 w-3.5 transition-transform duration-200", isServicesOpen ? "rotate-180" : "")} />
                    )}
                  </Link>

                  {link.hasDropdown && isServicesOpen && (
                    <div
                      aria-label="Services submenu"
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg ring-1 ring-black/5 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                      onKeyDown={(e) => {
                        if (e.key === "Escape") setIsServicesOpen(false);
                      }}
                    >
                      {serviceDropdown.map(item => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors focus-visible:bg-primary/5 focus-visible:text-primary focus-visible:outline-none mx-1 rounded-lg"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop right actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={BUSINESS.phoneHref}
                className={cn(
                  "flex items-center gap-2 text-sm font-semibold transition-colors duration-200",
                  isScrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"
                )}
              >
                <Phone className="h-4 w-4" />
                {BUSINESS.phoneFriendly}
              </a>
              <Button
                onClick={scrollToQuote}
                size="sm"
                className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-md hover:shadow-lg px-6"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile menu trigger */}
            <button
              type="button"
              className={cn(
                "lg:hidden min-h-11 min-w-11 -mr-1 inline-flex items-center justify-center rounded-lg transition-colors touch-manipulation",
                isScrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-white hover:bg-white/10"
              )}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} role="dialog" aria-modal="true" aria-label="Main menu" className="fixed inset-0 z-[100] bg-white lg:hidden flex flex-col pt-safe pb-safe">
          <div className="flex items-center justify-between h-16 px-4 border-b border-border shrink-0">
            <span className="font-display font-bold text-2xl tracking-tight text-foreground lowercase">
              caraway<span className="text-accent">.</span>
            </span>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-lg text-foreground hover:bg-muted transition-colors touch-manipulation"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col p-5 sm:p-6 gap-2 overflow-y-auto overscroll-contain min-h-0">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col">
                  <Link
                    href={link.href}
                    onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                    className="text-base font-semibold text-foreground hover:text-primary py-3.5 flex items-center justify-between touch-manipulation rounded-lg px-3 hover:bg-muted/60 transition-colors"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                  </Link>
                  {link.hasDropdown && (
                    <div className="flex flex-col gap-0.5 mb-2 ml-3 pl-4 border-l-2 border-primary/15">
                      {serviceDropdown.map(item => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="py-2.5 px-3 flex items-center text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-muted/60 transition-colors touch-manipulation"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 pt-6 pb-safe border-t border-border">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2.5 h-14 rounded-xl bg-muted text-foreground font-semibold text-base hover:bg-muted/80 transition-colors touch-manipulation"
              >
                <Phone className="h-5 w-5 text-primary" />
                {BUSINESS.phone}
              </a>
              <Button
                onClick={scrollToQuote}
                size="lg"
                className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-bold text-base shadow-lg"
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
