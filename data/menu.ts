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

const generateImageForItem = (itemName: string, context: string): string => {
  const cleanName = itemName.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "_");
  const prompt = `premium_cafe_food_photography_of_a_${cleanName}_${context}_on_a_dark_moody_table_with_studio_lighting`;
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=600&height=600&nologo=true`;
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
    images: PIZZA_ITEMS.map((item) => generateImageForItem(item.name, "pizza")),
  },
  {
    id: "garlic-bread",
    title: "Garlic Bread",
    subtitle: "Warm, cheesy, and freshly baked",
    items: GARLIC_BREAD_ITEMS,
    images: GARLIC_BREAD_ITEMS.map((item) => generateImageForItem(item.name, "cheesy_garlic_bread")),
  },
  {
    id: "pasta",
    title: "Pasta",
    subtitle: "Authentic Italian flavors in every bite",
    items: PASTA_ITEMS,
    images: PASTA_ITEMS.map((item) => generateImageForItem(item.name, "pasta_bowl")),
  },
  {
    id: "grilled-wraps",
    title: "Grilled Wraps",
    subtitle: "Wholesome goodness, perfectly toasted",
    items: WRAP_ITEMS,
    images: WRAP_ITEMS.map((item) => generateImageForItem(item.name, "grilled_wrap")),
  },
  {
    id: "munchies",
    title: "Munchies",
    subtitle: "Crispy, savory bites for the soul",
    items: MUNCHIES_ITEMS,
    images: MUNCHIES_ITEMS.map((item) => generateImageForItem(item.name, "crispy_appetizer")),
  },
  {
    id: "hot-coffee",
    title: "Hot Coffee",
    subtitle: "Expertly brewed for your comforting moments",
    items: HOT_COFFEE_ITEMS,
    images: HOT_COFFEE_ITEMS.map((item) => generateImageForItem(item.name, "steaming_cup_of_hot_coffee")),
  },
  {
    id: "cold-coffee",
    title: "Cold Coffee",
    subtitle: "Chilled perfection to beat the heat",
    items: COLD_COFFEE_ITEMS,
    images: COLD_COFFEE_ITEMS.map((item) => generateImageForItem(item.name, "iced_cold_coffee_glass")),
  },
  {
    id: "matcha-tea",
    title: "Matcha & Tea",
    subtitle: "Zen in a cup, crafted for wellness",
    items: MATCHA_TEA_ITEMS,
    images: MATCHA_TEA_ITEMS.map((item) => generateImageForItem(item.name, "vibrant_matcha_tea")),
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    subtitle: "Gourmet layers stacked with fresh flavor",
    items: SANDWICH_ITEMS,
    images: SANDWICH_ITEMS.map((item) => generateImageForItem(item.name, "gourmet_sandwich")),
  },
  {
    id: "burgers",
    title: "Burgers",
    subtitle: "Juicy, towering, and absolutely delicious",
    items: BURGERS_ITEMS,
    images: BURGERS_ITEMS.map((item) => generateImageForItem(item.name, "juicy_gourmet_burger")),
  },
  {
    id: "french-fries",
    title: "French Fries",
    subtitle: "Golden, crispy, and universally loved",
    items: FRIES_ITEMS,
    images: FRIES_ITEMS.map((item) => generateImageForItem(item.name, "crispy_french_fries")),
  },
  {
    id: "mocktails",
    title: "Mocktails",
    subtitle: "Vibrant, refreshing, and endlessly tropical",
    items: MOCKTAILS_ITEMS,
    images: MOCKTAILS_ITEMS.map((item) => generateImageForItem(item.name, "colorful_refreshing_mocktail")),
  },
];
