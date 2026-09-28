import React from 'react';

export const BrandMarquee: React.FC = () => {
  const items = [
    "TRADITIONAL SCOTTISH HOME BAKING",
    "SINCE 1958",
    "SWEET • SAVOURY • COFFEE",
    "24–26 LADY LAWSON STREET",
    "EDINBURGH",
    "OPEN 7 DAYS A WEEK · 8AM–2PM",
    "SCOTTISH BAKING, FRESHLY MADE",
    "HOMEMADE MORNING ROLLS & SLICES",
    "SPECIALITY COFFEE & ROLLS"
  ];

  return (
    <div className="bg-preachers-blue-light/80 text-preachers-ink py-3 border-y border-preachers-blue/40 overflow-hidden select-none relative">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-5 sm:mx-7">
            <span className="font-cormorant font-bold tracking-[0.18em] text-xs sm:text-sm uppercase text-preachers-ink">
              {item}
            </span>
            <span className="ml-5 sm:ml-7 text-preachers-coral font-serif text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
