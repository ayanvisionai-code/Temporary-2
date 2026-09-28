export interface BusinessHours {
  day: string;
  hours: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  subTagline: string;
  heritageText: string;
  established: string;
  category: string;
  priceRange: string;
  address: {
    street: string;
    city: string;
    postcode: string;
    country: string;
    full: string;
  };
  phone: {
    display: string;
    raw: string;
  };
  instagram: {
    handle: string;
    url: string;
  };
  facebook: {
    name: string;
    url: string;
  };
  googleRating: {
    rating: number;
    reviewCount: number;
    reviewCountFormatted: string;
  };
  hours: {
    summary: string;
    detail: string;
    schedule: BusinessHours[];
  };
  googleMapsUrl: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "Preacher's Patisserie",
  tagline: "Traditional Scottish home baking since 1958.",
  subTagline: "Sweet. Savoury. Coffee.",
  heritageText: "Scottish baking, freshly made for Edinburgh.",
  established: "1958",
  category: "Bakery & Café",
  priceRange: "£1–10",
  address: {
    street: "24–26 Lady Lawson Street",
    city: "Edinburgh",
    postcode: "EH3 9DS",
    country: "United Kingdom",
    full: "24–26 Lady Lawson Street, Edinburgh EH3 9DS, United Kingdom"
  },
  phone: {
    display: "+44 7810 898476",
    raw: "+447810898476"
  },
  instagram: {
    handle: "@preacherspatisserie",
    url: "https://www.instagram.com/preacherspatisserie/"
  },
  facebook: {
    name: "Preachers Patisserie",
    url: "https://www.facebook.com/PreachersPatisserie/"
  },
  googleRating: {
    rating: 4.8,
    reviewCount: 330,
    reviewCountFormatted: "330+"
  },
  hours: {
    summary: "Open 7 days a week · 8am – 2pm",
    detail: "Every day from 8:00 AM to 2:00 PM",
    schedule: [
      { day: "Monday", hours: "8:00 AM – 2:00 PM" },
      { day: "Tuesday", hours: "8:00 AM – 2:00 PM" },
      { day: "Wednesday", hours: "8:00 AM – 2:00 PM" },
      { day: "Thursday", hours: "8:00 AM – 2:00 PM" },
      { day: "Friday", hours: "8:00 AM – 2:00 PM" },
      { day: "Saturday", hours: "8:00 AM – 2:00 PM" },
      { day: "Sunday", hours: "8:00 AM – 2:00 PM" }
    ]
  },
  googleMapsUrl: "https://maps.google.com/?q=Preacher's+Patisserie,+24-26+Lady+Lawson+St,+Edinburgh+EH3+9DS"
};
