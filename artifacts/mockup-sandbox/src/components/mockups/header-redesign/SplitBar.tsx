import './_group.css';
import { useState } from "react";
import { Phone, Menu, X, ChevronDown, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SplitBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const navLinks = [
    { label: "Locations", href: "#" },
    { label: "About", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const serviceDropdown = [
    { 
      label: "Cash for Cars Brisbane", 
      href: "#",
      desc: "Get top dollar paid on the spot for your vehicle."
    },
    { 
      label: "Car Removal Brisbane", 
      href: "#",
      desc: "Fast, free towing from anywhere in the metro area."
    },
    { 
      label: "Sell My Car Brisbane", 
      href: "#",
      desc: "Skip the hassle of private sales. We buy instantly."
    },
    { 
      label: "Scrap Car Removal", 
      href: "#",
      desc: "Eco-friendly recycling for end-of-life vehicles."
    },
    { 
      label: "Unwanted Cars", 
      href: "#",
      desc: "Clear up your driveway and get paid today."
    },
    { 
      label: "Damaged Cars", 
      href: "#",
      desc: "Wrecked or written-off? We'll still buy it."
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(220,16%,96%)] font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {/* Top Utility Strip */}
        <div className="bg-[hsl(221,92%,27%)] text-white/90 h-9 hidden sm:flex items-center justify-between px-4 sm:px-6 lg:px-8 text-xs font-medium">
          <div className="flex items-center gap-6 max-w-7xl mx-auto w-full justify-between">
            <div className="flex items-center gap-4">
              <a href="tel:1800227293" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="h-3.5 w-3.5 text-[hsl(21,92%,54%)]" />
                <span>1800 227 293</span>
              </a>
              <div className="w-px h-3.5 bg-white/20"></div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[hsl(21,92%,54%)]" />
                <span>Servicing Greater Brisbane</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[hsl(21,92%,54%)]" />
              <span>Open 7 Days: 7am – 5pm</span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="bg-white border-b border-[hsl(220,18%,88%)] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group shrink-0">
              <span style={{ fontFamily: 'Outfit, sans-serif' }} className="font-bold text-2xl sm:text-3xl tracking-tight text-[hsl(221,92%,27%)]">
                Caraway<span className="text-[hsl(21,92%,54%)]">.</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center h-full gap-1 ml-8">
              {/* Services Mega Menu Dropdown */}
              <div 
                className="h-full flex items-center"
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                <a
                  href="#"
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-semibold transition-colors flex items-center gap-1.5",
                    isServicesHovered 
                      ? "text-[hsl(221,92%,27%)] bg-[hsl(220,16%,96%)]" 
                      : "text-[hsl(221,45%,14%)]/90 hover:text-[hsl(221,92%,27%)] hover:bg-[hsl(220,16%,96%)]/50"
                  )}
                >
                  Services
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isServicesHovered ? "rotate-180" : "")} />
                </a>

                {/* Mega Menu Panel */}
                {isServicesHovered && (
                  <div className="absolute top-full left-0 w-full bg-white border-b border-[hsl(220,18%,88%)] shadow-lg shadow-black/5 animate-in slide-in-from-top-2 fade-in duration-200">
                    <div className="max-w-7xl mx-auto px-8 py-8 flex gap-12">
                      <div className="w-1/3">
                        <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-xl font-bold text-[hsl(221,92%,27%)] mb-2">Our Services</h3>
                        <p className="text-sm text-[hsl(220,14%,48%)] mb-6 leading-relaxed">
                          We offer comprehensive car buying and removal services across Brisbane. No matter the condition of your vehicle, we'll make you a competitive cash offer.
                        </p>
                        <Button className="bg-[hsl(221,92%,27%)] hover:bg-[hsl(221,92%,27%)]/90 text-white">
                          View All Services
                        </Button>
                      </div>
                      <div className="w-2/3 grid grid-cols-2 gap-x-8 gap-y-6">
                        {serviceDropdown.map((item) => (
                          <a 
                            key={item.label} 
                            href={item.href}
                            className="group flex flex-col gap-1 p-3 -m-3 rounded-lg hover:bg-[hsl(220,16%,96%)] transition-colors"
                          >
                            <span className="text-sm font-semibold text-[hsl(221,45%,14%)] group-hover:text-[hsl(221,92%,27%)] flex items-center gap-2">
                              {item.label}
                            </span>
                            <span className="text-xs text-[hsl(220,14%,48%)] leading-snug">
                              {item.desc}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Standard Links */}
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-md text-sm font-semibold text-[hsl(221,45%,14%)]/90 hover:text-[hsl(221,92%,27%)] hover:bg-[hsl(220,16%,96%)]/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4 ml-auto">
              <Button size="lg" className="h-11 px-8 bg-[hsl(21,92%,54%)] hover:bg-[hsl(21,92%,54%)]/90 text-white font-semibold text-base shadow-sm">
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 lg:hidden">
              <a href="tel:1800227293" className="flex items-center justify-center h-10 w-10 rounded-full bg-[hsl(220,16%,96%)] text-[hsl(221,92%,27%)]">
                <Phone className="h-4 w-4" />
              </a>
              <button
                className="p-2 -mr-2 text-[hsl(221,45%,14%)] rounded-md hover:bg-[hsl(220,16%,96%)] transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white lg:hidden flex flex-col animate-in slide-in-from-right-full duration-300">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 h-16 sm:h-20 border-b border-[hsl(220,18%,88%)] shrink-0">
            <span style={{ fontFamily: 'Outfit, sans-serif' }} className="font-bold text-2xl tracking-tight text-[hsl(221,92%,27%)]">
              Caraway<span className="text-[hsl(21,92%,54%)]">.</span>
            </span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="p-2 -mr-2 text-[hsl(220,14%,48%)] hover:text-[hsl(221,45%,14%)] bg-[hsl(220,16%,96%)] rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto pb-24">
            <div className="px-4 py-6 flex flex-col gap-6">
              {/* Mobile Services Group */}
              <div>
                <h4 className="text-xs font-bold text-[hsl(220,14%,48%)] uppercase tracking-wider mb-3 px-2">Services</h4>
                <div className="flex flex-col gap-1">
                  {serviceDropdown.map(item => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-xl text-[hsl(221,45%,14%)] font-semibold bg-[hsl(220,16%,96%)]/50 hover:bg-[hsl(220,16%,96%)] transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile General Links */}
              <div>
                <h4 className="text-xs font-bold text-[hsl(220,14%,48%)] uppercase tracking-wider mb-3 px-2">Company</h4>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-xl text-[hsl(221,45%,14%)] font-semibold hover:bg-[hsl(220,16%,96%)] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Footer CTAs */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-[hsl(220,18%,88%)] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] flex flex-col gap-3">
            <a
              href="tel:1800227293"
              className="flex items-center justify-center gap-2 h-12 rounded-xl border-2 border-[hsl(221,92%,27%)] text-[hsl(221,92%,27%)] font-bold text-lg hover:bg-[hsl(221,92%,27%)] hover:text-white transition-colors"
            >
              <Phone className="h-5 w-5" />
              1800 227 293
            </a>
            <Button size="lg" className="w-full h-14 bg-[hsl(21,92%,54%)] hover:bg-[hsl(21,92%,54%)]/90 text-white font-bold text-lg shadow-md">
              Get Your Free Quote
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section for Context */}
      <main className="pt-[100px] sm:pt-[116px]"> {/* Account for fixed header height (36px utility + 64/80px main) */}
        <section className="bg-[hsl(221,92%,27%)] relative overflow-hidden py-20 lg:py-32">
          {/* Background texture/pattern simulation */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                <CheckCircle2 className="h-4 w-4 text-[hsl(21,92%,54%)]" />
                Brisbane's #1 Car Buyer
              </div>
              <h1 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                Turn your unwanted car into <span className="text-[hsl(21,92%,54%)]">cash today.</span>
              </h1>
              <p className="text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                We pay top dollar for cars in any condition. Get a free quote in minutes, and we'll tow it away for free. Same-day service across Greater Brisbane.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 bg-[hsl(21,92%,54%)] hover:bg-[hsl(21,92%,54%)]/90 text-white text-lg font-bold shadow-lg shadow-[hsl(21,92%,54%)]/20">
                  Get an Instant Quote
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg font-semibold backdrop-blur-sm">
                  <Phone className="mr-2 h-5 w-5" />
                  1800 227 293
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Decorative divider */}
        <div className="h-12 w-full bg-gradient-to-b from-[hsl(221,92%,27%)] to-transparent opacity-10 -mt-1"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Get a Quote", desc: "Call us or fill out our online form to get an instant valuation for your car." },
              { title: "Free Towing", desc: "Accept our offer and we'll schedule a free pickup from your location in Brisbane." },
              { title: "Get Paid", desc: "Receive your cash payment on the spot before we tow your vehicle away." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-[hsl(220,18%,88%)]/50 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-[120px] font-bold text-[hsl(220,16%,96%)] leading-none z-0 pointer-events-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {i + 1}
                </div>
                <div className="relative z-10">
                  <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-xl font-bold text-[hsl(221,92%,27%)] mb-3">{step.title}</h3>
                  <p className="text-[hsl(220,14%,48%)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
