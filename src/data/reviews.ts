export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  snippet: string;
  source: string;
  tag?: string;
}

export const GOOGLE_REVIEWS_SUMMARY = {
  rating: 4.8,
  reviewCount: 330,
  reviewCountFormatted: "330+",
  source: "Google Reviews",
  badgeText: "Rated 4.8 on Google · 330+ Reviews"
};

export const FEATURED_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Edinburgh Local',
    rating: 5,
    snippet: 'Best morning roll in Edinburgh! Proper Scottish home baking, lovely coffee, and the friendliest staff. A genuine local treasure.',
    source: 'Google Review',
    tag: 'Scottish Home Baking'
  },
  {
    id: 'rev-2',
    author: 'Visiting Foodie',
    rating: 5,
    snippet: 'The chicken caesar wrap and the sweet bakes were phenomenal. You can immediately taste the quality and tradition. Definitely worth stopping by.',
    source: 'Google Review',
    tag: 'Fresh Daily Lunch'
  },
  {
    id: 'rev-3',
    author: 'Regular Customer',
    rating: 5,
    snippet: 'Preacher’s has been a staple for years. Consistently great bakes, amazing breakfast rolls and wonderful atmosphere.',
    source: 'Google Review',
    tag: 'Since 1958'
  }
];
