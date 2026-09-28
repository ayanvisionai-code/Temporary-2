import React from 'react';
import { MenuItem } from '../data/products';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  item: MenuItem;
  onExplore?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item, onExplore }) => {
  return (
    <div 
      onClick={onExplore}
      className="group bg-preachers-cream rounded-3xl overflow-hidden border border-preachers-border shadow-soft hover:shadow-card transition-all duration-400 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
    >
      {/* Image Frame */}
      {item.image && (
        <div className="relative aspect-[4/3] overflow-hidden bg-preachers-blue-fog">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-600 ease-out"
          />
          
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-preachers-ink/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Badge */}
          {item.badge && (
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="bg-preachers-cream/95 backdrop-blur-md text-preachers-ink text-[11px] font-bold tracking-wide px-3 py-1 rounded-full shadow-soft border border-preachers-border">
                {item.badge}
              </span>
            </div>
          )}

          {/* Category Pill */}
          <div className="absolute top-3.5 right-3.5 z-10">
            <span className="bg-preachers-blue-dark/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
              {item.category}
            </span>
          </div>
        </div>
      )}

      {/* Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-serif font-bold text-lg sm:text-xl text-preachers-ink leading-snug group-hover:text-preachers-blue-dark transition-colors">
            {item.name}
          </h3>
          <p className="text-preachers-ink-muted text-xs sm:text-sm leading-relaxed mt-2 line-clamp-3">
            {item.description}
          </p>
        </div>

        <div className="pt-3 border-t border-preachers-border/60 flex items-center justify-between text-xs font-bold text-preachers-blue-dark group-hover:text-preachers-blue-deep transition-colors">
          <span className="tracking-wide">See on menu</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
