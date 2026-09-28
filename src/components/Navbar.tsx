import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/business';
import { Menu as MenuIcon, X, Instagram, Phone, MapPin, ArrowRight, Clock, Facebook } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'menu' | 'contact';
  onNavigate: (page: 'home' | 'menu' | 'contact') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: 'home' | 'menu' | 'contact'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'contact', label: 'Contact & Location' },
  ];

  const handleNavClick = (page: 'home' | 'menu' | 'contact') => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Editorial Utility Bar */}
      <div className="bg-preachers-ink text-white text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs">
            <span className="font-semibold text-preachers-blue-sky flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-preachers-coral inline-block"></span>
              Traditional Scottish home baking since 1958
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:flex items-center gap-1 text-white/80">
              <Clock className="w-3.5 h-3.5 text-preachers-blue" />
              Open 7 days: 8am – 2pm
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-[11px] sm:text-xs">
            <a 
              href={`tel:${BUSINESS_INFO.phone.raw}`}
              className="flex items-center gap-1 text-white/90 hover:text-preachers-blue transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-preachers-blue" />
              <span className="hidden sm:inline">{BUSINESS_INFO.phone.display}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <span className="text-white/30">•</span>
            <a 
              href={BUSINESS_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-preachers-blue transition-colors flex items-center gap-1"
              aria-label="Instagram profile"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">@preacherspatisserie</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-preachers-cream/95 backdrop-blur-md shadow-soft py-3 border-b border-preachers-border' 
            : 'bg-preachers-blue-pale/90 backdrop-blur-sm py-4 border-b border-preachers-border/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Link */}
          <button 
            onClick={() => handleNavClick('home')}
            className="group focus:outline-none rounded-lg text-left"
            aria-label="Preacher's Patisserie Home"
          >
            <Logo />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navItems.map(item => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-full text-sm tracking-wide transition-all relative font-medium ${
                    isActive 
                      ? 'text-preachers-blue-deep bg-preachers-blue-light/70 font-semibold shadow-xs' 
                      : 'text-preachers-ink-muted hover:text-preachers-ink hover:bg-preachers-blue-pale'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-preachers-blue-dark rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Call Us Quick Button */}
            <a
              href={`tel:${BUSINESS_INFO.phone.raw}`}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-preachers-ink px-3.5 py-2 rounded-full bg-preachers-cream hover:bg-preachers-blue-light border border-preachers-border transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-preachers-coral" />
              <span>Call Bakery</span>
            </a>

            {/* Primary Action Button: Visit Us */}
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 bg-preachers-blue-dark hover:bg-preachers-blue-deep text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-soft hover:shadow-blue-glow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Visit Us</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-preachers-ink bg-preachers-cream hover:bg-preachers-blue-light focus:outline-none border border-preachers-border"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-50 bg-preachers-ink/60 backdrop-blur-xs flex flex-col justify-end"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="bg-preachers-blue-fog rounded-t-3xl p-6 shadow-2xl border-t border-preachers-blue/50 max-h-[90vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-preachers-border">
              <Logo size="sm" />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full bg-preachers-cream text-preachers-ink hover:bg-preachers-blue-light"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation items */}
            <div className="space-y-2">
              {navItems.map(item => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-5 py-3.5 rounded-2xl text-base font-semibold flex items-center justify-between transition-colors ${
                      isActive 
                        ? 'bg-preachers-blue-dark text-white shadow-soft' 
                        : 'bg-preachers-cream text-preachers-ink hover:bg-preachers-blue-pale border border-preachers-border'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </button>
                );
              })}
            </div>

            {/* Quick Contact & Social Buttons */}
            <div className="pt-2 space-y-3">
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${BUSINESS_INFO.phone.raw}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-preachers-cream text-preachers-ink text-xs font-bold border border-preachers-border hover:bg-preachers-blue-light transition-colors"
                >
                  <Phone className="w-4 h-4 text-preachers-coral" />
                  <span>Call Us</span>
                </a>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-preachers-blue-dark text-white text-xs font-bold hover:bg-preachers-blue-deep transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Directions</span>
                </a>
              </div>

              <div className="flex items-center justify-around py-3 px-4 rounded-xl bg-preachers-cream border border-preachers-border text-xs text-preachers-ink-muted">
                <a 
                  href={BUSINESS_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-preachers-ink font-medium"
                >
                  <Instagram className="w-4 h-4 text-preachers-coral" />
                  <span>Instagram</span>
                </a>
                <span>•</span>
                <a 
                  href={BUSINESS_INFO.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-preachers-ink font-medium"
                >
                  <Facebook className="w-4 h-4 text-preachers-blue-dark" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Address & Hours banner */}
            <div className="bg-preachers-cream p-4 rounded-2xl text-xs text-preachers-ink-muted border border-preachers-border space-y-1">
              <p className="font-semibold text-preachers-ink flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-preachers-coral" />
                24–26 Lady Lawson Street, Edinburgh EH3 9DS
              </p>
              <p className="text-[11px] pl-5">Open 7 days a week · 8am – 2pm</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
