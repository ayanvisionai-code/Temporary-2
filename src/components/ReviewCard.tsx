import React from 'react';
import { CustomerReview } from '../data/reviews';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

interface ReviewCardProps {
  review: CustomerReview;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-preachers-cream-light rounded-3xl p-6 sm:p-7 border border-preachers-border/80 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between relative group">
      {/* Decorative quote stamp */}
      <div className="absolute top-5 right-5 text-preachers-sage/50 group-hover:text-preachers-sage transition-colors">
        <Quote className="w-7 h-7 rotate-180" />
      </div>

      <div>
        {/* Stars */}
        <div className="flex items-center gap-1 text-amber-500 mb-3">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
          ))}
          <span className="ml-2 text-xs font-semibold text-preachers-ink">5.0</span>
        </div>

        {/* Highlight badge */}
        {review.tag && (
          <div className="mb-3">
            <span className="inline-block bg-preachers-sage-light text-preachers-ink text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-preachers-sage-mid/30">
              {review.tag}
            </span>
          </div>
        )}

        {/* Comment */}
        <p className="text-preachers-ink/90 text-sm sm:text-base leading-relaxed italic relative z-10 font-cormorant text-lg sm:text-xl font-medium">
          &ldquo;{review.snippet}&rdquo;
        </p>
      </div>

      {/* Author & Verification */}
      <div className="pt-4 mt-5 border-t border-preachers-border/60 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-preachers-blue/40 border border-preachers-blue flex items-center justify-center font-serif font-bold text-preachers-ink text-xs">
            {review.author[0]}
          </div>
          <div>
            <span className="text-xs font-bold text-preachers-ink block">
              {review.author}
            </span>
            <span className="text-[10px] text-preachers-ink-muted flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-preachers-sage-dark" />
              {review.source}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
