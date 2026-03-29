export interface MenuItem {
  name: string;
  price: string;
  desc?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
  images: string[];
}

const CATEGORY_STYLES: Record<string, string> = {
  pizza: "cheese melt, oregano, basil leaves, golden crust, mozzarella stretch",
  "garlic-bread": "cheesy texture, herbs, toasted edges, melting butter",
  pasta: "creamy sauce, herbs, plated elegantly, gourmet pasta bowl",
  "grilled-wraps": "grilled tortilla, fresh greens, vibrant sauce, tightly rolled, diagonal cut",
  munchies: "crispy texture, garnish, dipping sauce on side, elegant platter",
  "hot-coffee": "latte art, steam, ceramic cup, creamy texture, professional espresso pull",
  "cold-coffee": "condensation, ice cubes, tall glass, creamy texture, chilled coffee swirls",
  "matcha-tea": "vibrant green, bamboo whisk texture, ceramic bowl, zen aesthetic, stone matcha",
  sandwiches: "grilled bread, cheese melt, crispy texture, visible filling layers, gourmet sandwich stack",
  burgers: "grilled bun, fresh lettuce, juicy veg patty, cheese slice, gourmet presentation, towering burger",
  "french-fries": "crispy golden, sea salt, minimal plating, scattered herbs, rustic potato texture",
  mocktails: "fresh mint, lime slices, ice cubes, condensation droplets, vibrant fruit garnish",
};

const generateVegetarianImage = (itemName: string, categoryId: string): string => {
  const cleanName = itemName.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "_");
  const style = CATEGORY_STYLES[categoryId] || "premium gourmet presentation, fresh ingredients";
  
  // Base prompt with strict vegetarian constraints and consistent lighting/tones
  const basePrompt = `Professional_food_photography_of_${cleanName},_vegetarian,_no_meat,_no_egg,_no_non-veg_ingredients.Premium_cafe_presentation,_cinematic_lighting,_soft_shadows,_shallow_depth_of_field,_dark_green_and_warm_tones,_highly_detailed,_realistic_textures,_4K_quality,_minimal_aesthetic,_modern_luxury_food_styling,_` + style.replace(/\s+/g, "_");
  
  // Fallback if specific prompt string might result in failures (encoded for safety)
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(basePrompt)}?width=800&height=800&nologo=true`;
};

const PIZZA_ITEMS: MenuItem[] = [
  { name: "Melted Bliss Margherita", price: "249" },
  { name: "Golden Cheese Corn Pizza", price: "269" },
  { name: "Exotic Farmhouse Pizza", price: "289" },
  { name: "Chilly Mushroom Fantasy", price: "299" },
  { name: "Tandoori Paneer Tikka Pizza", price: "329" },
  { name: "Adi’s Garden Authentic Pizza", price: "349" },
];

const GARLIC_BREAD_ITEMS: MenuItem[] = [
  { name: "Cheese Corn Garlic Bread", price: "179" },
  { name: "Paneer Tikka Garlic Bread", price: "219" },
];

const PASTA_ITEMS: MenuItem[] = [
  { name: "Creamy Alfredo Pasta", price: "219" },
  { name: "Al-arrabbiata Mix Sauce Pasta", price: "229" },
  { name: "Adi’s Mushroom Sauce Pasta", price: "249" },
];

const WRAP_ITEMS: MenuItem[] = [
  { name: "Exotic Veggie Wrap", price: "139" },
  { name: "Paneer Crunch Wrap", price: "159" },
  { name: "Smoky Paneer Tikka Wrap", price: "179" },
];

const MUNCHIES_ITEMS: MenuItem[] = [
  { name: "Cottage Cheese Cigar Rolls", price: "189" },
  { name: "Veggie Spring Rolls", price: "169" },
  { name: "Hara Bhara Kababs", price: "179" },
  { name: "Crispy Potato Wedges", price: "169" },
  { name: "Mexican Salsa Nachos", price: "159" },
  { name: "Cheese Jalapeno Nachos", price: "179" },
];

const HOT_COFFEE_ITEMS: MenuItem[] = [
  { name: "Espresso", price: "79" },
  { name: "Americano", price: "99" },
  { name: "Cappuccino / Latte", price: "129" },
  { name: "Hot Mocha", price: "149" },
  { name: "Hazelnut Cappuccino", price: "149" },
  { name: "Vanilla Cappuccino", price: "149" },
];

const COLD_COFFEE_ITEMS: MenuItem[] = [
  { name: "Classic Coffee", price: "149" },
  { name: "Choco Mocha Coffee", price: "159" },
  { name: "French Vanilla Coffee", price: "159" },
  { name: "Roasted Hazelnut Coffee", price: "169" },
];

const MATCHA_TEA_ITEMS: MenuItem[] = [
  { name: "Hot Matcha", price: "149" },
  { name: "Iced Matcha", price: "159" },
  { name: "Iced Vanilla Matcha", price: "169" },
  { name: "Tulsi Green Tea", price: "79" },
];

const SANDWICH_ITEMS: MenuItem[] = [
  { name: "Spinach Corn Sandwich", price: "169" },
  { name: "Pizza Cheese Sandwich", price: "169" },
  { name: "Paneer Tikka Sandwich", price: "189" },
  { name: "Garden Club Sandwich", price: "219" },
];

const BURGERS_ITEMS: MenuItem[] = [
  { name: "Aloo Tikki Burger", price: "69" },
  { name: "Classic Veggie Burger", price: "89" },
  { name: "Crispy Paneer Burger", price: "109" },
  { name: "Big Daddy Burger", price: "129" },
];

const FRIES_ITEMS: MenuItem[] = [
  { name: "Classic Salted Fries", price: "139" },
  { name: "Peri-peri Fries", price: "159" },
  { name: "Italiano Cheese Fries", price: "179" },
];

const MOCKTAILS_ITEMS: MenuItem[] = [
  { name: "Virgin Mint Mojito", price: "129" },
  { name: "Tropical Green Apple", price: "129" },
  { name: "Peach Paradise", price: "139" },
  { name: "Blue Blossom", price: "139" },
];

export const MENU_DATA: MenuCategory[] = [
  {
    id: "pizza",
    title: "Pizza",
    subtitle: "Wood-fired & handcrafted to perfection",
    items: PIZZA_ITEMS,
    images: PIZZA_ITEMS.slice(0, 5).map((item) => generateVegetarianImage(item.name, "pizza")),
  },
  {
    id: "garlic-bread",
    title: "Garlic Bread",
    subtitle: "Warm, cheesy, and freshly baked",
    items: GARLIC_BREAD_ITEMS,
    images: GARLIC_BREAD_ITEMS.slice(0, 5).map((item) => generateVegetarianImage(item.name, "garlic-bread")),
  },
  {
    id: "pasta",
    title: "Pasta",
    subtitle: "Authentic Italian flavors in every bite",
    items: PASTA_ITEMS,
    images: PASTA_ITEMS.slice(0, 5).map((item) => generateVegetarianImage(item.name, "pasta")),
  },
  {
    id: "grilled-wraps",
    title: "Grilled Wraps",
    subtitle: "Wholesome goodness, perfectly toasted",
    items: WRAP_ITEMS,
    images: WRAP_ITEMS.slice(0, 5).map((item) => generateVegetarianImage(item.name, "grilled-wraps")),
  },
  {
    id: "munchies",
    title: "Munchies",
    subtitle: "Crispy, savory bites for the soul",
    items: MUNCHIES_ITEMS,
    images: MUNCHIES_ITEMS.slice(0, 5).map((item) => generateVegetarianImage(item.name, "munchies")),
  },
  {
    id: "hot-coffee",
    title: "Hot Coffee",
    subtitle: "Expertly brewed for your comforting moments",
    items: HOT_COFFEE_ITEMS,
    images: HOT_COFFEE_ITEMS.slice(0, 5).map((item) => generateVegetarianImage(item.name, "hot-coffee")),
  },
  {
    id: "cold-coffee",
    title: "Cold Coffee",
    subtitle: "Chilled perfection to beat the heat",
    items: COLD_COFFEE_ITEMS,
    images: COLD_COFFEE_ITEMS.slice(0, 5).map((item) => generateVegetarianImage(item.name, "cold-coffee")),
  },
  {
    id: "matcha-tea",
    title: "Matcha & Tea",
    subtitle: "Zen in a cup, crafted for wellness",
    items: MATCHA_TEA_ITEMS,
    images: MATCHA_TEA_ITEMS.slice(0, 5).map((item) => generateVegetarianImage(item.name, "matcha-tea")),
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    subtitle: "Gourmet layers stacked with fresh flavor",
    items: SANDWICH_ITEMS,
    images: SANDWICH_ITEMS.slice(0, 5).map((item) => generateVegetarianImage(item.name, "sandwiches")),
  },
  {
    id: "burgers",
    title: "Burgers",
    subtitle: "Juicy, towering, and absolutely delicious",
    items: BURGERS_ITEMS,
    images: BURGERS_ITEMS.slice(0, 5).map((item) => generateVegetarianImage(item.name, "burgers")),
  },
  {
    id: "french-fries",
    title: "French Fries",
    subtitle: "Golden, crispy, and universally loved",
    items: FRIES_ITEMS,
    images: FRIES_ITEMS.slice(0, 5).map((item) => generateVegetarianImage(item.name, "french-fries")),
  },
  {
    id: "mocktails",
    title: "Mocktails",
    subtitle: "Vibrant, refreshing, and endlessly tropical",
    items: MOCKTAILS_ITEMS,
    images: MOCKTAILS_ITEMS.slice(0, 5).map((item) => generateVegetarianImage(item.name, "mocktails")),
  },
];
