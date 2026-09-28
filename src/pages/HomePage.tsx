import React from 'react';
import { BUSINESS_INFO } from '../data/business';
import { MENU_CATEGORIES, SIGNATURE_ITEMS } from '../data/products';
import { GOOGLE_REVIEWS_SUMMARY, FEATURED_REVIEWS } from '../data/reviews';
import { BrandMarquee } from '../components/BrandMarquee';
import { ProductCard } from '../components/ProductCard';
import { ReviewCard } from '../components/ReviewCard';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  Sparkles, 
  Coffee, 
  UtensilsCrossed, 
  Cake, 
  Heart,
  Instagram,
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'menu' | 'contact') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-preachers-cream via-preachers-cream to-preachers-cream-warm border-b border-preachers-border">
        {/* Subtle decorative background circles */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-preachers-blue-pale/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute -bottom-20 right-10 w-[450px] h-[450px] bg-preachers-sage-pale/60 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Editorial Typography */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 bg-preachers-sage/70 border border-preachers-sage-mid/50 px-3.5 py-1.5 rounded-full shadow-xs">
                <span className="w-2 h-2 rounded-full bg-preachers-coral animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-preachers-ink">
                  Traditional Scottish Home Baking Since 1958
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-preachers-ink leading-[1.12] tracking-tight">
                Good things are <span className="italic font-cormorant font-normal text-preachers-blue-deep underline decoration-preachers-sage decoration-4 underline-offset-8">baked</span> into every day.
              </h1>

              {/* Supporting Copy */}
              <p className="text-preachers-ink-muted text-base sm:text-lg leading-relaxed max-w-xl">
                Sweet, savoury and coffee favourites from the heart of Edinburgh. Freshly made morning rolls, traditional biscuits, comforting melts, and artisan coffee.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2">
                <button
                  onClick={() => onNavigate('menu')}
                  className="inline-flex items-center gap-2 bg-preachers-blue hover:bg-preachers-blue-mid text-preachers-ink font-bold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-full shadow-soft hover:shadow-blue-glow transition-all duration-200 transform hover:-translate-y-0.5 border border-preachers-blue-dark/20 group"
                >
                  <span>Explore the Menu</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 bg-preachers-cream-warm hover:bg-preachers-sage/40 text-preachers-ink font-semibold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-full border border-preachers-border transition-colors duration-200"
                >
                  <MapPin className="w-4 h-4 text-preachers-coral" />
                  <span>Find Us in Edinburgh</span>
                </button>
              </div>

              {/* Trust & Location Snippet */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-preachers-ink-muted border-t border-preachers-border/70">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                    ))}
                  </div>
                  <span className="font-bold text-preachers-ink">4.8</span>
                  <span>(330+ Google reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-preachers-blue-dark" />
                  <span>Open 7 Days · 8am – 2pm</span>
                </div>
              </div>
            </div>

            {/* Right Column: Large Editorial Image Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Main Hero Showcase Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-elevated border-2 border-preachers-border/80 bg-preachers-cream-light p-3">
                  <div className="relative aspect-[4/3] sm:aspect-[14/11] rounded-2xl overflow-hidden">
                    <img 
                      src="/images/chicken-caesar-wrap.jpg" 
                      alt="Preacher's Patisserie Chicken Caesar Wrap" 
                      className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-preachers-ink/60 via-transparent to-transparent" />
                    
                    {/* Caption Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="bg-preachers-sage text-preachers-ink text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block mb-1.5 shadow-sm">
                        Daily Fresh Special
                      </span>
                      <p className="font-serif text-lg sm:text-xl font-bold text-white drop-shadow-sm">
                        Handcrafted Chicken Caesar Wrap
                      </p>
                      <p className="text-xs text-white/85 font-light">
                        Prepared fresh each morning on Lady Lawson Street
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overlapping Floating Badge / Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-preachers-cream rounded-2xl p-4 shadow-elevated border border-preachers-border max-w-[210px] hidden sm:block transform hover:-rotate-1 transition-transform">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-preachers-blue-mid flex-shrink-0">
                      <img src="/images/preachers-logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-xs text-preachers-ink leading-tight">Preacher&apos;s</p>
                      <p className="text-[10px] text-preachers-ink-muted">Lady Lawson St</p>
                    </div>
                  </div>
                  <p className="text-[11px] font-cormorant italic text-preachers-ink-light leading-snug">
                    Traditional Scottish baking heritage since 1958.
                  </p>
                </div>

                {/* Overlapping Floating Photo */}
                <div className="absolute -top-6 -right-3 sm:-right-6 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-elevated border-2 border-white transform rotate-3 hover:rotate-0 transition-transform">
                  <img 
                    src="/images/latte-art-coffee.jpg" 
                    alt="Artisan Coffee Latte Art" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-preachers-ink/10" />
                  <span className="absolute bottom-1 right-1 bg-preachers-ink/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                    Coffee
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. QUICK BUSINESS STRIP */}
      <section className="bg-preachers-sage/35 border-b border-preachers-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x-0 md:divide-x divide-preachers-border">
            
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-preachers-ink-muted">Location</span>
              <span className="font-serif font-bold text-base sm:text-lg text-preachers-ink mt-0.5">Edinburgh</span>
              <span className="text-xs text-preachers-ink-muted">24–26 Lady Lawson St</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-preachers-ink-muted">Schedule</span>
              <span className="font-serif font-bold text-base sm:text-lg text-preachers-ink mt-0.5">Open 7 Days</span>
              <span className="text-xs text-preachers-ink-muted">Monday to Sunday</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-preachers-ink-muted">Hours</span>
              <span className="font-serif font-bold text-base sm:text-lg text-preachers-ink mt-0.5">8:00am – 2:00pm</span>
              <span className="text-xs text-preachers-ink-muted">Fresh bakes daily</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-preachers-ink-muted">Counter</span>
              <span className="font-serif font-bold text-base sm:text-lg text-preachers-ink mt-0.5">Sweet · Savoury · Coffee</span>
              <span className="text-xs text-preachers-ink-muted">Scottish home baking</span>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Marquee Ticker */}
      <BrandMarquee />

      {/* 3. STORY / HERITAGE SECTION */}
      <section className="py-16 sm:py-24 bg-preachers-cream-warm/60 border-b border-preachers-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Imagery Split */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-card border border-preachers-border aspect-[3/4] bg-preachers-cream">
                    <img 
                      src="/images/lemon-iced-biscuit.jpg" 
                      alt="Lemon iced biscuit held at Preacher's blue shop door" 
                      className="w-full h-full object-cover transform hover:scale-104 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-preachers-blue-light p-5 rounded-3xl border border-preachers-blue-mid/40">
                    <p className="font-serif font-bold text-2xl text-preachers-ink">1958</p>
                    <p className="text-xs font-semibold text-preachers-ink-muted uppercase tracking-wider mt-0.5">
                      Established in Edinburgh
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="bg-preachers-sage p-5 rounded-3xl border border-preachers-sage-mid/40">
                    <p className="font-cormorant italic text-lg text-preachers-ink leading-snug">
                      &ldquo;Traditional Scottish home baking since 1958.&rdquo;
                    </p>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-card border border-preachers-border aspect-[3/4] bg-preachers-cream">
                    <img 
                      src="/images/toasted-fruit-loaf.jpg" 
                      alt="Toasted Scottish fruit loaf with whipped butter" 
                      className="w-full h-full object-cover transform hover:scale-104 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-preachers-sage-dark">
                <span>✦</span>
                <span>Our Story</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-preachers-ink leading-tight">
                Made with a little history.
              </h2>

              <div className="space-y-4 text-preachers-ink-muted text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Traditional Scottish home baking has been at the heart of Preacher&apos;s Patisserie since 1958. Today, the bakery brings that familiar character together with fresh, comforting food and coffee in the heart of Edinburgh.
                </p>
                <p className="text-sm sm:text-base text-preachers-ink-light">
                  From traditional empire biscuits and freshly iced treats to warm Scottish breakfast rolls, loaded sandwiches, and rich espresso, everything is prepared with care for our neighbourhood and visitors alike.
                </p>
              </div>

              {/* Heritage Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-preachers-cream-light border border-preachers-border">
                  <div className="w-8 h-8 rounded-full bg-preachers-blue-light text-preachers-blue-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Cake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-preachers-ink">Home Baking</h4>
                    <p className="text-xs text-preachers-ink-muted mt-0.5">Time-tested recipes & counter favourites</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-preachers-cream-light border border-preachers-border">
                  <div className="w-8 h-8 rounded-full bg-preachers-sage-light text-preachers-sage-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-preachers-ink">Made Fresh Daily</h4>
                    <p className="text-xs text-preachers-ink-muted mt-0.5">Savoury rolls, melts & wholesome wraps</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-preachers-ink hover:text-preachers-blue-deep transition-colors group"
                >
                  <span>Visit our bakery on Lady Lawson Street</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. SIGNATURE FOOD SECTION */}
      <section className="py-16 sm:py-24 bg-preachers-cream border-b border-preachers-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-xl text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-preachers-coral">
                <span>✦</span>
                <span>From the Counter</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-preachers-ink">
                Made for the table.
              </h2>
              <p className="text-preachers-ink-muted text-sm sm:text-base leading-relaxed">
                A selection of our most loved daily bakes, Scottish morning rolls, savoury lunchtime wraps and speciality coffees.
              </p>
            </div>

            <button
              onClick={() => onNavigate('menu')}
              className="inline-flex items-center gap-2 text-sm font-bold text-preachers-ink bg-preachers-sage/60 hover:bg-preachers-sage px-5 py-2.5 rounded-full border border-preachers-sage-mid/40 transition-all self-start md:self-auto group"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Grid of 4 Featured Real Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SIGNATURE_ITEMS.slice(0, 4).map(item => (
              <ProductCard 
                key={item.id} 
                item={item} 
                onExplore={() => onNavigate('menu')} 
              />
            ))}
          </div>

        </div>
      </section>

      {/* 5. MENU PREVIEW SECTION */}
      <section className="py-16 sm:py-24 bg-preachers-cream-warm/40 border-b border-preachers-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-preachers-blue-dark">
              At a Glance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-preachers-ink">
              A little taste of the menu.
            </h2>
            <p className="text-preachers-ink-muted text-sm sm:text-base">
              Everything at Preacher&apos;s is prepared with quality ingredients, honest flavours, and traditional Scottish baking craft.
            </p>
          </div>

          {/* 3 Column Category Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* SWEET */}
            <div className="bg-preachers-cream-light rounded-3xl p-7 border border-preachers-border shadow-soft flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-preachers-border">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-preachers-coral/20 text-preachers-coral flex items-center justify-center">
                      <Cake className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-preachers-ink">Sweet</h3>
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-preachers-coral uppercase bg-preachers-coral-light px-2.5 py-0.5 rounded-full">
                    Bakes
                  </span>
                </div>

                <ul className="space-y-4 text-left">
                  <li className="space-y-1">
                    <p className="font-serif font-bold text-sm sm:text-base text-preachers-ink">Pistachio Chocolate Chip Cookie</p>
                    <p className="text-xs text-preachers-ink-muted leading-relaxed">Roasted pistachios & dark chocolate chunks</p>
                  </li>
                  <li className="space-y-1">
                    <p className="font-serif font-bold text-sm sm:text-base text-preachers-ink">Chocolate Honeycomb Empire Biscuit</p>
                    <p className="text-xs text-preachers-ink-muted leading-relaxed">Shortbread sandwich with rich chocolate & honeycomb</p>
                  </li>
                  <li className="space-y-1">
                    <p className="font-serif font-bold text-sm sm:text-base text-preachers-ink">Lemon Iced Scottish Biscuit</p>
                    <p className="text-xs text-preachers-ink-muted leading-relaxed">Zesty citrus glaze on classic golden biscuit</p>
                  </li>
                  <li className="space-y-1">
                    <p className="font-serif font-bold text-sm sm:text-base text-preachers-ink">Traditional Scottish Baking Favourites</p>
                    <p className="text-xs text-preachers-ink-muted leading-relaxed">Daily rotating scones, fruit loaves & counter slices</p>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-preachers-border/60">
                <button
                  onClick={() => onNavigate('menu')}
                  className="w-full py-2.5 rounded-xl bg-preachers-cream-warm hover:bg-preachers-coral-light text-preachers-ink font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Explore Sweet Bakes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* SAVOURY */}
            <div className="bg-preachers-cream-light rounded-3xl p-7 border-2 border-preachers-sage-mid/60 shadow-card flex flex-col justify-between relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-preachers-sage text-preachers-ink text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-xs border border-preachers-sage-dark/20">
                Lunch & Breakfast
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-preachers-border">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-preachers-sage text-preachers-sage-deep flex items-center justify-center">
                      <UtensilsCrossed className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-preachers-ink">Savoury</h3>
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-preachers-sage-deep uppercase bg-preachers-sage-light px-2.5 py-0.5 rounded-full">
                    Rolls & Melts
                  </span>
                </div>

                <ul className="space-y-4 text-left">
                  <li className="space-y-1">
                    <p className="font-serif font-bold text-sm sm:text-base text-preachers-ink">Chicken Caesar Wrap</p>
                    <p className="text-xs text-preachers-ink-muted leading-relaxed">Roast chicken, romaine, homemade croutons & parmesan</p>
                  </li>
                  <li className="space-y-1">
                    <p className="font-serif font-bold text-sm sm:text-base text-preachers-ink">Scottish Sausage & Cheddar Roll</p>
                    <p className="text-xs text-preachers-ink-muted leading-relaxed">Warm Edinburgh morning roll with melted cheese</p>
                  </li>
                  <li className="space-y-1">
                    <p className="font-serif font-bold text-sm sm:text-base text-preachers-ink">The BLT Roll & The Marshall</p>
                    <p className="text-xs text-preachers-ink-muted leading-relaxed">Smoked bacon, crisp greens & hearty breakfast favourites</p>
                  </li>
                  <li className="space-y-1">
                    <p className="font-serif font-bold text-sm sm:text-base text-preachers-ink">Courgette Savoury Pancakes</p>
                    <p className="text-xs text-preachers-ink-muted leading-relaxed">Fresh savoury pancakes prepared with garden herbs</p>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-preachers-border/60">
                <button
                  onClick={() => onNavigate('menu')}
                  className="w-full py-2.5 rounded-xl bg-preachers-sage hover:bg-preachers-sage-mid text-preachers-ink font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Explore Savoury Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* COFFEE */}
            <div className="bg-preachers-cream-light rounded-3xl p-7 border border-preachers-border shadow-soft flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-preachers-border">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-preachers-blue-light text-preachers-blue-dark flex items-center justify-center">
                      <Coffee className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-preachers-ink">Coffee</h3>
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-preachers-blue-dark uppercase bg-preachers-blue-pale px-2.5 py-0.5 rounded-full">
                    Artisan
                  </span>
                </div>

                <ul className="space-y-4 text-left">
                  <li className="space-y-1">
                    <p className="font-serif font-bold text-sm sm:text-base text-preachers-ink">Artisan Flat White & Latte</p>
                    <p className="text-xs text-preachers-ink-muted leading-relaxed">Double espresso with silky steamed milk & latte art</p>
                  </li>
                  <li className="space-y-1">
                    <p className="font-serif font-bold text-sm sm:text-base text-preachers-ink">Iced Cold Foam Latte</p>
                    <p className="text-xs text-preachers-ink-muted leading-relaxed">Chilled double espresso crowned with sweet cold foam</p>
                  </li>
                  <li className="space-y-1">
                    <p className="font-serif font-bold text-sm sm:text-base text-preachers-ink">Seasonal Spiced Specials</p>
                    <p className="text-xs text-preachers-ink-muted leading-relaxed">Warm spiced lattes & specialty seasonal cold brews</p>
                  </li>
                  <li className="space-y-1">
                    <p className="font-serif font-bold text-sm sm:text-base text-preachers-ink">Scottish Teas & Hot Chocolate</p>
                    <p className="text-xs text-preachers-ink-muted leading-relaxed">Traditional loose teas & comforting hot chocolate</p>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-preachers-border/60">
                <button
                  onClick={() => onNavigate('menu')}
                  className="w-full py-2.5 rounded-xl bg-preachers-cream-warm hover:bg-preachers-blue-light text-preachers-ink font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Explore Coffee & Drinks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Center Call to Action */}
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('menu')}
              className="inline-flex items-center gap-2 bg-preachers-blue hover:bg-preachers-blue-mid text-preachers-ink font-bold text-base px-8 py-3.5 rounded-full shadow-soft hover:shadow-blue-glow transition-all duration-200 border border-preachers-blue-dark/20 group"
            >
              <span>View Full Menu & Counter Offerings</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* 6. SOCIAL PROOF & GOOGLE RATINGS */}
      <section className="py-16 sm:py-24 bg-preachers-cream border-b border-preachers-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold text-amber-900">
              <Star className="w-3.5 h-3.5 fill-amber-500 stroke-amber-600" />
              <span>4.8 ★ on Google · 330+ Reviews</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-preachers-ink">
              Loved by Edinburgh locals & visitors.
            </h2>
            <p className="text-preachers-ink-muted text-sm sm:text-base">
              A community bakery in the heart of Edinburgh with genuine Scottish baking craft.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_REVIEWS.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

        </div>
      </section>

      {/* 7. VISIT US / COME BY FOR SOMETHING GOOD */}
      <section className="py-16 sm:py-24 bg-preachers-sage/40 border-b border-preachers-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-preachers-cream-light rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-preachers-sage-mid/50 shadow-elevated relative overflow-hidden">
            
            {/* Background decorative watermark */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-preachers-sage/30 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-preachers-sage-deep">
                  <MapPin className="w-3.5 h-3.5 text-preachers-coral" />
                  <span>Lady Lawson Street, Edinburgh</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-preachers-ink leading-tight">
                  Come by for something good.
                </h2>

                <p className="text-preachers-ink-muted text-base sm:text-lg leading-relaxed max-w-xl">
                  Whether you&apos;re popping in for a morning coffee and hot roll, picking up traditional sweet bakes, or stopping by for lunch, we&apos;re delighted to welcome you.
                </p>

                {/* Details Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-preachers-ink uppercase tracking-wider">Address</p>
                    <p className="text-sm font-semibold text-preachers-ink-light">
                      24–26 Lady Lawson Street<br />
                      Edinburgh EH3 9DS
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-bold text-preachers-ink uppercase tracking-wider">Opening Hours</p>
                    <p className="text-sm font-semibold text-preachers-ink-light">
                      Open 7 Days a Week<br />
                      8:00 AM – 2:00 PM
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-4">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-preachers-blue hover:bg-preachers-blue-mid text-preachers-ink font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-soft hover:shadow-blue-glow transition-all duration-200 border border-preachers-blue-dark/20"
                  >
                    <MapPin className="w-4 h-4 text-preachers-ink" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.phone.raw}`}
                    className="inline-flex items-center gap-2 bg-preachers-cream hover:bg-preachers-sage/30 text-preachers-ink font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full border border-preachers-border transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4 text-preachers-coral" />
                    <span>Call Preacher&apos;s</span>
                  </a>
                </div>
              </div>

              {/* Store & Food Visual preview */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-card border border-preachers-border aspect-[4/3] bg-preachers-cream-warm">
                  <img 
                    src="/images/kimchi-cheese-toastie.jpg" 
                    alt="Toasted Kimchi and Cheese Sourdough at Preacher's Patisserie" 
                    className="w-full h-full object-cover object-center transform hover:scale-104 transition-transform duration-600"
                  />
                  <div className="absolute bottom-3 right-3 bg-preachers-ink/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    Edinburgh, EH3 9DS
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
