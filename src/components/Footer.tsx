import React from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/business';
import { Instagram, Facebook, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'menu' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-preachers-ink text-preachers-cream border-t border-preachers-ink/30 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-preachers-cream/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-preachers-cream-light inline-block p-2.5 rounded-2xl">
              <Logo size="sm" />
            </div>
            <p className="text-sm text-preachers-cream/75 max-w-sm leading-relaxed">
              Traditional Scottish home baking since 1958. Sweet, savoury and coffee favourites baked fresh daily for Edinburgh.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={BUSINESS_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-preachers-cream/10 hover:bg-preachers-coral/80 text-preachers-cream flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={BUSINESS_INFO.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-preachers-cream/10 hover:bg-preachers-blue-mid text-preachers-cream flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={`tel:${BUSINESS_INFO.phone.raw}`}
                className="w-9 h-9 rounded-full bg-preachers-cream/10 hover:bg-preachers-sage-dark text-preachers-cream flex items-center justify-center transition-colors"
                aria-label="Call bakery"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-preachers-sage uppercase font-sans">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-preachers-cream/75 hover:text-preachers-cream transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('menu'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-preachers-cream/75 hover:text-preachers-cream transition-colors text-left"
                >
                  Menu & Counter
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-preachers-cream/75 hover:text-preachers-cream transition-colors text-left"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-preachers-sage uppercase font-sans">
              Visit Us
            </h4>
            <div className="space-y-2.5 text-sm text-preachers-cream/80">
              <a 
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 group hover:text-preachers-blue transition-colors"
              >
                <MapPin className="w-4 h-4 text-preachers-coral flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {BUSINESS_INFO.address.street},<br />
                  {BUSINESS_INFO.address.city} {BUSINESS_INFO.address.postcode}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-2 pt-1 text-preachers-cream/80">
                <Clock className="w-4 h-4 text-preachers-blue flex-shrink-0" />
                <span>Open 7 days: 8:00 AM – 2:00 PM</span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-preachers-sage flex-shrink-0" />
                <a 
                  href={`tel:${BUSINESS_INFO.phone.raw}`}
                  className="hover:text-preachers-cream text-preachers-cream/90 transition-colors font-medium"
                >
                  {BUSINESS_INFO.phone.display}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-preachers-cream/50">
          <p>© {new Date().getFullYear()} Preacher&apos;s Patisserie. All rights reserved.</p>
          <p className="font-cormorant italic text-sm text-preachers-cream/70">
            Edinburgh, Scotland · Traditional Scottish Home Baking Since 1958
          </p>
        </div>
      </div>
    </footer>
  );
};
