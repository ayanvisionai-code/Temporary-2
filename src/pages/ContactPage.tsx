import React from 'react';
import { BUSINESS_INFO } from '../data/business';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  ExternalLink 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: 'home' | 'menu' | 'contact') => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-preachers-blue-mist min-h-screen">
      
      {/* 1. CONTACT HERO */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-preachers-blue-light via-preachers-blue-pale to-preachers-blue-mist border-b border-preachers-border text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-preachers-blue/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-preachers-blue/30 border border-preachers-blue/40 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-preachers-ink backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-preachers-coral" />
            <span>Edinburgh, Scotland</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-preachers-ink leading-tight">
            Come and see us.
          </h1>

          <p className="text-preachers-ink-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            We&apos;re open 7 days a week on Lady Lawson Street. Stop in for fresh morning rolls, traditional Scottish bakes, and great coffee.
          </p>
        </div>
      </section>

      {/* 2. MAIN LOCATION & DETAILS SECTION */}
      <section className="py-12 sm:py-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Col: Contact Cards & Opening Times */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              
              {/* Main Address Card */}
              <div className="bg-preachers-cream rounded-3xl p-6 sm:p-8 border border-preachers-border shadow-soft space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-preachers-coral/15 text-preachers-coral flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-xl text-preachers-ink">Preacher&apos;s Patisserie</h2>
                    <p className="text-xs text-preachers-ink-muted font-medium">Lady Lawson Street · Edinburgh</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-preachers-ink-light">
                  <p className="font-semibold text-base text-preachers-ink">
                    {BUSINESS_INFO.address.street}
                  </p>
                  <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.postcode}</p>
                  <p>{BUSINESS_INFO.address.country}</p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-preachers-blue-dark hover:bg-preachers-blue-deep text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-soft transition-all"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.phone.raw}`}
                    className="inline-flex items-center gap-2 bg-preachers-blue-fog hover:bg-preachers-blue-light text-preachers-ink font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full border border-preachers-border transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-preachers-coral" />
                    <span>{BUSINESS_INFO.phone.display}</span>
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-preachers-blue-light/70 rounded-3xl p-6 sm:p-8 border border-preachers-blue/40 shadow-soft space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-preachers-blue-dark text-white flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-preachers-ink">Opening Hours</h3>
                      <p className="text-xs text-preachers-blue-dark font-semibold">Open 7 Days a Week</p>
                    </div>
                  </div>
                  <span className="bg-preachers-cream px-3 py-1 rounded-full text-xs font-bold text-preachers-blue-deep border border-preachers-border shadow-xs">
                    8am – 2pm Daily
                  </span>
                </div>

                <div className="divide-y divide-preachers-blue/30 text-sm">
                  {BUSINESS_INFO.hours.schedule.map((item) => (
                    <div key={item.day} className="py-2 flex items-center justify-between">
                      <span className="font-medium text-preachers-ink">{item.day}</span>
                      <span className="font-semibold text-preachers-ink-light">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Connect Card */}
              <div className="bg-preachers-cream rounded-3xl p-6 border border-preachers-border shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="font-serif font-bold text-base text-preachers-ink">Follow our daily bakes</p>
                  <p className="text-xs text-preachers-ink-muted">Photos of what&apos;s fresh on the counter each morning</p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={BUSINESS_INFO.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-preachers-coral/15 hover:bg-preachers-coral text-preachers-coral-dark hover:text-white text-xs font-bold transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-preachers-blue-light hover:bg-preachers-blue text-preachers-blue-deep hover:text-preachers-ink text-xs font-bold transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Col: Store Visual & Map Card */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              
              {/* Bakery Image Card */}
              <div className="bg-preachers-cream rounded-3xl p-3 border border-preachers-border shadow-soft overflow-hidden">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-preachers-blue-fog">
                  <img 
                    src="/images/lemon-iced-biscuit.jpg" 
                    alt="Preacher's Patisserie Bakery & Scottish bakes" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-preachers-ink/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="bg-preachers-blue-sky text-preachers-ink text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block mb-1 font-sans">
                      Edinburgh EH3 9DS
                    </span>
                    <p className="font-serif text-lg font-bold text-white">
                      24–26 Lady Lawson Street
                    </p>
                    <p className="text-xs text-white/90">
                      Traditional Scottish Home Baking Since 1958
                    </p>
                  </div>
                </div>
              </div>

              {/* Styled Interactive Google Map Card */}
              <div className="bg-preachers-cream rounded-3xl p-6 border border-preachers-border shadow-soft space-y-4 text-left flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif font-bold text-lg text-preachers-ink flex items-center gap-2">
                      <Compass className="w-4 h-4 text-preachers-blue-dark" />
                      <span>Find us in Edinburgh</span>
                    </h3>
                    <span className="text-xs text-preachers-ink-muted">Near Grassmarket & Tollcross</span>
                  </div>

                  <p className="text-xs sm:text-sm text-preachers-ink-muted leading-relaxed">
                    Located centrally on Lady Lawson Street in Edinburgh, within easy walking distance from the Grassmarket, Edinburgh Castle, and Tollcross.
                  </p>
                </div>

                {/* Embedded Map iframe */}
                <div className="rounded-2xl overflow-hidden border border-preachers-border aspect-[16/9] relative bg-preachers-blue-fog">
                  <iframe
                    title="Preacher's Patisserie Location"
                    src="https://maps.google.com/maps?q=Preacher's%20Patisserie%2024-26%20Lady%20Lawson%20Street%20Edinburgh%20EH3%209DS&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-[20%] contrast-105"
                  />
                </div>

                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-2xl bg-preachers-blue-dark hover:bg-preachers-blue-deep text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-soft"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
