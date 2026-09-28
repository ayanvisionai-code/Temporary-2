import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/products';
import { BUSINESS_INFO } from '../data/business';
import { MapPin, Phone, Clock, ArrowRight, Sparkles, Coffee, Cake, UtensilsCrossed } from 'lucide-react';

interface MenuPageProps {
  onNavigate: (page: 'home' | 'menu' | 'contact') => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'savoury' | 'sweet' | 'coffee'>('all');

  const filteredCategories = activeTab === 'all' 
    ? MENU_CATEGORIES 
    : MENU_CATEGORIES.filter(cat => cat.id === activeTab);

  return (
    <div className="bg-preachers-cream min-h-screen">
      
      {/* 1. MENU HERO */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-preachers-cream-warm/70 to-preachers-cream border-b border-preachers-border text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-preachers-sage/70 border border-preachers-sage-mid/50 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-preachers-ink">
            <Sparkles className="w-3.5 h-3.5 text-preachers-coral" />
            <span>Daily Counter & Kitchen</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-preachers-ink leading-tight">
            Something for every kind of craving.
          </h1>

          <p className="text-preachers-ink-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Take a look at a few of the favourites you&apos;ll find at Preacher&apos;s. Fresh Scottish morning rolls, house-baked sweet treats, artisan sandwiches, and specialty coffee.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-preachers-ink-muted">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-preachers-blue-dark" />
              Baked & prepared fresh daily from 8am
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-preachers-coral" />
              Lady Lawson Street, Edinburgh
            </span>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY TABS */}
      <section className="sticky top-[69px] sm:top-[77px] z-30 bg-preachers-cream/95 backdrop-blur-md border-b border-preachers-border py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-preachers-ink text-preachers-cream shadow-sm'
                  : 'bg-preachers-cream-warm text-preachers-ink hover:bg-preachers-sage/50 border border-preachers-border'
              }`}
            >
              All Counter Favourites
            </button>

            <button
              onClick={() => setActiveTab('savoury')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'savoury'
                  ? 'bg-preachers-sage text-preachers-ink shadow-sm font-bold border border-preachers-sage-dark/30'
                  : 'bg-preachers-cream-warm text-preachers-ink hover:bg-preachers-sage/50 border border-preachers-border'
              }`}
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>Savoury & Morning Rolls</span>
            </button>

            <button
              onClick={() => setActiveTab('sweet')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'sweet'
                  ? 'bg-preachers-coral-light text-preachers-coral-dark shadow-sm font-bold border border-preachers-coral/30'
                  : 'bg-preachers-cream-warm text-preachers-ink hover:bg-preachers-coral-light/50 border border-preachers-border'
              }`}
            >
              <Cake className="w-3.5 h-3.5 text-preachers-coral" />
              <span>Sweet & Home Baking</span>
            </button>

            <button
              onClick={() => setActiveTab('coffee')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'coffee'
                  ? 'bg-preachers-blue-light text-preachers-blue-deep shadow-sm font-bold border border-preachers-blue-mid/40'
                  : 'bg-preachers-cream-warm text-preachers-ink hover:bg-preachers-blue-light/50 border border-preachers-border'
              }`}
            >
              <Coffee className="w-3.5 h-3.5 text-preachers-blue-dark" />
              <span>Coffee & Hot Drinks</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. MENU CONTENT SECTION */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-8">
              
              {/* Category Header */}
              <div className="border-b-2 border-preachers-ink/15 pb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-preachers-ink-muted mb-1">
                  <span>✦</span>
                  <span>{category.label}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-preachers-ink">
                    {category.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-preachers-ink-muted max-w-md">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {category.items.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-preachers-cream-light rounded-3xl p-5 sm:p-6 border border-preachers-border shadow-soft hover:shadow-card transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start justify-between group"
                  >
                    {/* Item Photo (if available) */}
                    {item.image && (
                      <div className="w-full sm:w-28 h-40 sm:h-28 rounded-2xl overflow-hidden bg-preachers-cream-warm flex-shrink-0 border border-preachers-border relative">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 space-y-2 text-left">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-serif font-bold text-lg sm:text-xl text-preachers-ink group-hover:text-preachers-blue-deep transition-colors leading-snug">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wider bg-preachers-sage/80 text-preachers-ink px-2.5 py-0.5 rounded-full border border-preachers-sage-mid/40">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-preachers-ink-muted text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* 4. VISITING / COUNTER NOTE */}
      <section className="py-12 bg-preachers-sage/30 border-t border-preachers-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <div className="w-12 h-12 rounded-full bg-preachers-cream mx-auto flex items-center justify-center border border-preachers-sage-mid shadow-xs">
            <UtensilsCrossed className="w-5 h-5 text-preachers-sage-deep" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-preachers-ink">
            Counter Specials Change Daily
          </h3>

          <p className="text-sm sm:text-base text-preachers-ink-muted max-w-xl mx-auto leading-relaxed">
            Our bakers make traditional Scottish loaves, cakes, and filled rolls fresh every morning. Pop by 24–26 Lady Lawson Street to see today&apos;s full counter display.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-preachers-blue hover:bg-preachers-blue-mid text-preachers-ink font-bold text-sm px-6 py-3 rounded-full shadow-soft transition-all border border-preachers-blue-dark/20"
            >
              <MapPin className="w-4 h-4" />
              <span>Find the Bakery</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone.raw}`}
              className="inline-flex items-center gap-2 bg-preachers-cream hover:bg-preachers-cream-warm text-preachers-ink font-semibold text-sm px-6 py-3 rounded-full border border-preachers-border transition-colors"
            >
              <Phone className="w-4 h-4 text-preachers-coral" />
              <span>Call Us ({BUSINESS_INFO.phone.display})</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
