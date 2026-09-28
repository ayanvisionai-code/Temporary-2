import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'full',
  size = 'md' 
}) => {
  const iconSizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-14 h-14'
  }[size];

  const titleSizeClasses = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl md:text-2xl',
    lg: 'text-2xl sm:text-3xl'
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      {/* Official Preacher's Patisserie Logo Emblem */}
      <div className={`relative flex-shrink-0 ${iconSizeClasses} rounded-full overflow-hidden border-2 border-preachers-blue-mid/40 shadow-soft group-hover:scale-105 transition-transform duration-300 bg-preachers-blue-light`}>
        <img 
          src="/images/preachers-logo.jpg" 
          alt="Preacher's Patisserie Logo" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col text-left">
        <span className={`font-serif font-bold tracking-wider uppercase text-preachers-ink leading-tight ${titleSizeClasses}`}>
          Preacher&apos;s
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-[10px] sm:text-[11px] font-cormorant font-semibold tracking-[0.25em] text-preachers-ink-muted uppercase">
            Patisserie
          </span>
          <span className="text-[8px] text-preachers-coral">•</span>
          <span className="text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.15em] text-preachers-ink-muted uppercase">
            Est. 1958
          </span>
        </div>
      </div>
    </div>
  );
};
