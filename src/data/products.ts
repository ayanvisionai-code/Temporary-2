export interface MenuItem {
  id: string;
  name: string;
  category: 'sweet' | 'savoury' | 'coffee' | 'specials';
  description: string;
  badge?: string;
  image?: string;
  featuredOnHome?: boolean;
}

export interface MenuCategory {
  id: 'sweet' | 'savoury' | 'coffee' | 'specials';
  name: string;
  label: string;
  description: string;
  items: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  // Sweet
  {
    id: 'lemon-iced-biscuit',
    name: 'Lemon Iced Biscuit',
    category: 'sweet',
    description: 'Crisp Scottish biscuit topped with a zesty citrus glaze, freshly baked each morning.',
    badge: 'Counter Favourite',
    image: '/images/lemon-iced-biscuit.jpg',
    featuredOnHome: true,
  },
  {
    id: 'chocolate-honeycomb-biscuit',
    name: 'Chocolate Honeycomb Empire Biscuit',
    category: 'sweet',
    description: 'Double shortbread sandwich filled with rich chocolate cream, topped with dark glaze and crunchy golden honeycomb crumb.',
    badge: 'Scottish Classic',
    image: '/images/chocolate-honeycomb-biscuit.jpg',
    featuredOnHome: true,
  },
  {
    id: 'chocolate-brookie-slice',
    name: 'Layered Chocolate Brookie Bar',
    category: 'sweet',
    description: 'Decadent combination of fudgy dark brownie and golden chocolate chip cookie base, finished with smooth caramel and white chocolate drops.',
    badge: 'Fresh Bake',
    image: '/images/chocolate-brookie-slice.jpg',
    featuredOnHome: true,
  },
  {
    id: 'toasted-fruit-loaf',
    name: 'Warm Toasted Fruit & Banana Loaf',
    category: 'sweet',
    description: 'Generous thick slice of traditional spiced fruit loaf, toasted and served warm with a quenelle of whipped espresso butter.',
    badge: 'Morning Treat',
    image: '/images/toasted-fruit-loaf.jpg',
    featuredOnHome: true,
  },
  {
    id: 'pistachio-chocolate-chip-cookie',
    name: 'Pistachio Chocolate Chip Cookie',
    category: 'sweet',
    description: 'Chewy bakery cookie packed with roasted pistachios and chunks of rich dark chocolate.',
    badge: 'Popular',
  },
  {
    id: 'scottish-baking-favourites',
    name: 'Traditional Scottish Home Baking Selection',
    category: 'sweet',
    description: 'Daily rotating selection of traditional Scottish bakes, scones, traybakes and sweet treats from our counter.',
  },

  // Savoury
  {
    id: 'chicken-caesar-wrap',
    name: 'Chicken Caesar Wrap',
    category: 'savoury',
    description: 'Tender roasted chicken, crisp romaine greens, homemade golden croutons and creamy parmesan Caesar dressing wrapped in a soft tortilla.',
    badge: 'Signature',
    image: '/images/chicken-caesar-wrap.jpg',
    featuredOnHome: true,
  },
  {
    id: 'kimchi-cheese-toastie',
    name: 'Toasted Kimchi & Triple Cheese Melt',
    category: 'savoury',
    description: 'Artisan sesame-crusted sourdough grilled golden with bubbling mature cheddar, mozzarella and spiced kimchi relish.',
    badge: 'Counter Special',
    image: '/images/kimchi-cheese-toastie.jpg',
    featuredOnHome: true,
  },
  {
    id: 'scottish-sausage-roll',
    name: 'Sausage & Melted Cheddar Morning Roll',
    category: 'savoury',
    description: 'Locally made Scottish sausages grilled fresh and served in a soft Edinburgh morning roll with melted mature cheese and relish.',
    badge: 'Edinburgh Classic',
    image: '/images/scottish-sausage-roll.jpg',
    featuredOnHome: true,
  },
  {
    id: 'breakfast-bagel',
    name: 'Fried Egg & Cheese Breakfast Bagel',
    category: 'savoury',
    description: 'Toasted seeded bagel stacked with a sunny fried egg, melted cheese and savoury breakfast cuts.',
    badge: 'Breakfast Favourite',
    image: '/images/breakfast-bagel.jpg',
    featuredOnHome: true,
  },
  {
    id: 'coronation-chicken-roll',
    name: 'Coronation Chicken & Cranberry Roll',
    category: 'savoury',
    description: 'Soft bakery roll stuffed with delicately spiced chicken salad, sweet cranberries, crispy fried shallots and fresh rocket.',
    badge: 'Lunch Special',
    image: '/images/coronation-chicken-roll.jpg',
  },
  {
    id: 'blt-roll',
    name: 'The BLT Morning Roll',
    category: 'savoury',
    description: 'Crisp smoked bacon, juicy ripe tomato slices, crisp salad greens and mayo in a traditional morning roll.',
  },
  {
    id: 'the-marshall',
    name: 'The Marshall',
    category: 'savoury',
    description: 'A hearty house-favourite savoury roll packed with seasoned meats and melted cheese.',
  },
  {
    id: 'holy-trinity',
    name: 'The Holy Trinity',
    category: 'savoury',
    description: 'Preacher’s classic Scottish breakfast combination roll made fresh to order.',
    badge: 'House Specialty',
  },
  {
    id: 'courgette-pancakes',
    name: 'Courgette Savoury Pancakes',
    category: 'savoury',
    description: 'Light savoury courgette fritters prepared with fresh herbs and served with house relish.',
  },

  // Coffee
  {
    id: 'latte-art-coffee',
    name: 'Artisan Flat White & Latte',
    category: 'coffee',
    description: 'Carefully extracted double espresso blended with velvety steamed whole milk or oat milk, poured with tulip latte art.',
    badge: 'Speciality Coffee',
    image: '/images/latte-art-coffee.jpg',
    featuredOnHome: true,
  },
  {
    id: 'iced-foam-latte',
    name: 'Iced Cold Foam Latte',
    category: 'coffee',
    description: 'Double espresso poured over chilled milk and ice, crowned with a thick layer of whipped vanilla cold foam.',
    badge: 'Chilled Favourite',
    image: '/images/iced-foam-latte.jpg',
    featuredOnHome: true,
  },
  {
    id: 'autumn-spiced-latte',
    name: 'Seasonal Spiced Iced Latte',
    category: 'coffee',
    description: 'Espresso infused with house warming spices, served chilled over ice with fresh milk and cinnamon.',
    badge: 'Seasonal',
    image: '/images/autumn-spiced-latte.jpg',
  },
  {
    id: 'espresso-americano',
    name: 'Espresso & Long Black',
    category: 'coffee',
    description: 'Rich, aromatic roast with tasting notes of milk chocolate and roasted nuts.',
  },
  {
    id: 'speciality-tea-hot-chocolate',
    name: 'Scottish Blend Teas & Rich Hot Chocolate',
    category: 'coffee',
    description: 'Selection of Scottish breakfast tea, Earl Grey, herbal infusions and decadent steamed hot chocolate.',
  }
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'savoury',
    name: 'Savoury & Morning Rolls',
    label: 'SAVOURY',
    description: 'Hearty Scottish morning rolls, filled sandwiches, hot melts and wraps made fresh on Lady Lawson Street.',
    items: MENU_ITEMS.filter(item => item.category === 'savoury')
  },
  {
    id: 'sweet',
    name: 'Scottish Home Baking & Sweet Treats',
    label: 'SWEET',
    description: 'Traditional Scottish biscuits, daily traybakes, cookies and decadent counter slices baked with care since 1958.',
    items: MENU_ITEMS.filter(item => item.category === 'sweet')
  },
  {
    id: 'coffee',
    name: 'Speciality Coffee & Hot Drinks',
    label: 'COFFEE',
    description: 'Expertly brewed espresso drinks, velvety flat whites, iced cold foam coffees and comforting hot teas.',
    items: MENU_ITEMS.filter(item => item.category === 'coffee')
  }
];

export const SIGNATURE_ITEMS = MENU_ITEMS.filter(item => item.featuredOnHome && item.image);
