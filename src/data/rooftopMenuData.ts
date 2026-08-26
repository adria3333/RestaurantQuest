import { RooftopDish } from '../types';

export const ROOFTOP_MENU: RooftopDish[] = [
  // Starters ($2 - $4)
  {
    id: 'starter-1',
    nameEn: 'Truffle Mushroom Bruschetta',
    nameHu: 'Szarvasgombás gombás bruschetta',
    descriptionEn: 'Crispy toasted sourdough rubbed with garlic, topped with wild sautéed mushrooms, thyme, and black truffle drizzle.',
    price: 3,
    category: 'starter',
    emoji: '🍄',
    dietary: 'Vegetarian'
  },
  {
    id: 'starter-2',
    nameEn: 'Crispy Golden Calamari with Garlic Aioli',
    nameHu: 'Ropogós tintahalkarikák fokhagymás aiolival',
    descriptionEn: 'Tender calamari rings in light sea-salt batter, served with fresh lemon wedges and homemade herb aioli.',
    price: 4,
    category: 'starter',
    emoji: '🦑',
    dietary: 'Seafood'
  },
  {
    id: 'starter-3',
    nameEn: 'Fresh Burrata with Heirloom Tomatoes',
    nameHu: 'Friss burrata színes paradicsomokkal és bazsalikommal',
    descriptionEn: 'Creamy Italian burrata cheese with ripe balsamic heirloom tomatoes, fresh basil pesto, and extra virgin olive oil.',
    price: 4,
    category: 'starter',
    emoji: '🧀',
    dietary: 'Vegetarian'
  },
  {
    id: 'starter-4',
    nameEn: 'French Onion Soup Gratinée',
    nameHu: 'Francia hagymaleves pirított sajttal',
    descriptionEn: 'Slow-caramelized sweet onion broth topped with a crusty baguette slice and bubbling melted Gruyère cheese.',
    price: 3,
    category: 'starter',
    emoji: '🥣',
    dietary: 'Classic'
  },

  // Main Courses ($5 - $8)
  {
    id: 'main-1',
    nameEn: 'Prime Angus Ribeye Steak with Truffle Herb Butter',
    nameHu: 'Prémium Angus ribeye steak szarvasgombás fűszervajjal',
    descriptionEn: '28-day dry-aged 300g ribeye grilled to your preferred temperature, accompanied by crispy rosemary fries and grilled asparagus.',
    price: 7,
    category: 'main',
    emoji: '🥩',
    dietary: 'Chef Special'
  },
  {
    id: 'main-2',
    nameEn: 'Pan-Seared Atlantic Salmon with Dill Velouté',
    nameHu: 'Serpenyőben sült atlanti lazac kapros mártással',
    descriptionEn: 'Crispy-skinned Norwegian salmon fillet served on creamy saffron risotto and buttered baby spinach.',
    price: 6,
    category: 'main',
    emoji: '🐟',
    dietary: 'Seafood'
  },
  {
    id: 'main-3',
    nameEn: 'Handmade Tagliatelle with Wild Porcini & Truffle',
    nameHu: 'Kézműves tagliatelle vargányával és szarvasgombával',
    descriptionEn: 'Fresh egg pasta tossed in aged Parmesan emulsion with sautéed porcini mushrooms, baby herbs, and cracked pepper.',
    price: 5,
    category: 'main',
    emoji: '🍝',
    dietary: 'Vegetarian'
  },
  {
    id: 'main-4',
    nameEn: 'Herb-Roasted Supreme Chicken Breast with Fondant Potatoes',
    nameHu: 'Fűszervajas tanyasi csirkemell fondant burgonyával',
    descriptionEn: 'Pan-roasted tender corn-fed chicken breast with crispy skin, wild thyme jus, and seasonal roasted root vegetables.',
    price: 5,
    category: 'main',
    emoji: '🍗',
    dietary: 'Gluten-Free'
  },

  // Desserts ($3 - $4)
  {
    id: 'dessert-1',
    nameEn: 'Warm Belgian Chocolate Lava Cake',
    nameHu: 'Meleg belga csokoládé lávasüti vaníliafagylalttal',
    descriptionEn: 'Rich dark chocolate sponge with a decadent molten molten center, paired with artisanal Madagascan vanilla gelato.',
    price: 4,
    category: 'dessert',
    emoji: '🍫',
    dietary: 'Sweet Indulgence'
  },
  {
    id: 'dessert-2',
    nameEn: 'Classic Venetian Tiramisu Classico',
    nameHu: 'Klasszikus velencei tiramisu',
    descriptionEn: 'Espresso-soaked Savoiardi ladyfingers layered with fluffy mascarpone cream and dusted with Valrhona cocoa.',
    price: 3,
    category: 'dessert',
    emoji: '☕',
    dietary: 'House Favorite'
  },
  {
    id: 'dessert-3',
    nameEn: 'Madagascan Vanilla Bean Crème Brûlée',
    nameHu: 'Madagaszkári vaníliás crème brûlée',
    descriptionEn: 'Silky baked vanilla custard topped with a fragile caramelized sugar crust and fresh wild raspberries.',
    price: 3,
    category: 'dessert',
    emoji: '🍮',
    dietary: 'Gluten-Free'
  },

  // Drinks ($2 - $3)
  {
    id: 'drink-1',
    nameEn: 'Sparkling Wild Berry Lemonade with Mint',
    nameHu: 'Gyöngyöző erdei gyümölcsös mentás limonádé',
    descriptionEn: 'Hand-pressed organic lemon juice, crushed wild blueberries and raspberries, fresh mint leaves, and sparkling spring water.',
    price: 2,
    category: 'drink',
    emoji: '🍹',
    dietary: 'Non-Alcoholic'
  },
  {
    id: 'drink-2',
    nameEn: 'Rooftop Sunset Spritz Mocktail',
    nameHu: 'Naplementés tetőterasz Spritz koktél',
    descriptionEn: 'Blood orange nectar, bitter botanical herbs, tonic splash, and a dehydrated ruby grapefruit wheel.',
    price: 3,
    category: 'drink',
    emoji: '🍸',
    dietary: 'Signature Drink'
  },
  {
    id: 'drink-3',
    nameEn: 'Artisanal Italian Espresso / Cappuccino',
    nameHu: 'Kézműves olasz eszpresszó / cappuccino',
    descriptionEn: 'Single-origin Arabica roast with velvety micro-foam and a bite-sized chocolate hazelnut truffle.',
    price: 2,
    category: 'drink',
    emoji: '☕',
    dietary: 'Hot Beverage'
  }
];
