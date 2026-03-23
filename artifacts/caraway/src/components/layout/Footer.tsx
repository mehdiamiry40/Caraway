import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-2">
            <span className="font-display font-bold text-3xl tracking-tight text-white mb-4 block">
              Caraway<span className="text-accent">.</span>
            </span>
            <p className="text-white/60 max-w-sm mt-4 leading-relaxed">
              Brisbane's most trusted cash for cars service. Fast, fair, and hassle-free car removal. We buy any car, in any condition, today.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:1800227293" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <span className="flex h-8 w-8 rounded-full bg-white/5 items-center justify-center group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                    <Phone className="h-4 w-4" />
                  </span>
                  1800 227 293
                </a>
              </li>
              <li>
                <a href="mailto:info@caraway.com.au" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <span className="flex h-8 w-8 rounded-full bg-white/5 items-center justify-center group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                    <Mail className="h-4 w-4" />
                  </span>
                  info@caraway.com.au
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <span className="flex h-8 w-8 rounded-full bg-white/5 items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </span>
                Brisbane, QLD
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#how-it-works" className="hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="#why-us" className="hover:text-accent transition-colors">Why Choose Us</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQs</a></li>
              <li><a href="#quote-section" className="hover:text-accent transition-colors">Get a Quote</a></li>
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
