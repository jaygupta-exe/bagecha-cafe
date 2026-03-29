export interface MenuItem {
  name: string;
  price: string;
  desc?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
  images: string[];
}

// Helper to generate a unique, hyper-specific high-quality image URL per item
const generateImageForItem = (itemName: string, context: string): string => {
  // We explicitly combine the item name with the contextual category to ensure Pollinations 
  // never hallucinates off-brand images (e.g., ensuring "Chocolate" generates a shake, not a bar).
  const cleanName = itemName.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "_");
  const prompt = `premium_cafe_food_photography_of_a_${cleanName}_${context}_on_a_dark_moody_table_with_studio_lighting`;
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=600&height=600&nologo=true`;
};

const PIZZA_ITEMS: MenuItem[] = [];

const GARLIC_BREAD_ITEMS: MenuItem[] = [];

const BRUSCHETTA_ITEMS: MenuItem[] = [];

const PASTA_ITEMS: MenuItem[] = [];

const WRAP_ITEMS: MenuItem[] = [];

const MUNCHIES_ITEMS: MenuItem[] = [];

const SHAKES_ITEMS: MenuItem[] = [];

const MOCKTAILS_ITEMS: MenuItem[] = [];

const SANDWICH_ITEMS: MenuItem[] = [];

const BURGERS_ITEMS: MenuItem[] = [];

const FRIES_ITEMS: MenuItem[] = [];

const HOT_COFFEE_ITEMS: MenuItem[] = [];

const COLD_COFFEE_ITEMS: MenuItem[] = [];

const MATCHA_ITEMS: MenuItem[] = [];

const ICED_LATTE_ITEMS: MenuItem[] = [];

export const MENU_DATA: MenuCategory[] = [
  {
    id: "pizza",
    title: "Pizza (10 Inch)",
    items: PIZZA_ITEMS,
    images: PIZZA_ITEMS.map((item) => generateImageForItem(item.name, "pizza")),
  },
  {
    id: "garlic-bread",
    title: "Garlic Bread",
    items: GARLIC_BREAD_ITEMS,
    images: GARLIC_BREAD_ITEMS.map((item) => generateImageForItem(item.name, "cheesy_garlic_bread")),
  },
  {
    id: "baked-bruschetta",
    title: "Baked Bruschetta",
    items: BRUSCHETTA_ITEMS,
    images: BRUSCHETTA_ITEMS.map((item) => generateImageForItem(item.name, "bruschetta_appetizer")),
  },
  {
    id: "pasta",
    title: "Pasta",
    items: PASTA_ITEMS,
    images: PASTA_ITEMS.map((item) => generateImageForItem(item.name, "pasta_bowl")),
  },
  {
    id: "grilled-wraps",
    title: "Grilled Wraps",
    items: WRAP_ITEMS,
    images: WRAP_ITEMS.map((item) => generateImageForItem(item.name, "grilled_wrap_cut_in_half")),
  },
  {
    id: "munchies",
    title: "Munchies",
    items: MUNCHIES_ITEMS,
    images: MUNCHIES_ITEMS.map((item) => generateImageForItem(item.name, "crispy_appetizer_plate")),
  },
  {
    id: "thick-shakes",
    title: "Thick Shakes",
    items: SHAKES_ITEMS,
    images: SHAKES_ITEMS.map((item) => generateImageForItem(item.name, "creamy_milkshake_in_a_tall_glass")),
  },
  {
    id: "mocktails",
    title: "Mocktails",
    items: MOCKTAILS_ITEMS,
    images: MOCKTAILS_ITEMS.map((item) => generateImageForItem(item.name, "colorful_refreshing_mocktail_drink_with_ice")),
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    items: SANDWICH_ITEMS,
    images: SANDWICH_ITEMS.map((item) => generateImageForItem(item.name, "grilled_gourmet_sandwich_cut_in_half")),
  },
  {
    id: "burgers",
    title: "Burgers",
    items: BURGERS_ITEMS,
    images: BURGERS_ITEMS.map((item) => generateImageForItem(item.name, "juicy_gourmet_burger_with_fillings")),
  },
  {
    id: "french-fries",
    title: "French Fries",
    items: FRIES_ITEMS,
    images: FRIES_ITEMS.map((item) => generateImageForItem(item.name, "crispy_french_fries")),
  },
  {
    id: "hot-coffee",
    title: "Hot Coffee",
    items: HOT_COFFEE_ITEMS,
    images: HOT_COFFEE_ITEMS.map((item) => generateImageForItem(item.name, "steaming_cup_of_hot_coffee_with_latte_art")),
  },
  {
    id: "cold-coffee",
    title: "Cold Coffee",
    items: COLD_COFFEE_ITEMS,
    images: COLD_COFFEE_ITEMS.map((item) => generateImageForItem(item.name, "tall_glass_of_iced_cold_coffee_with_ice_cubes")),
  },
  {
    id: "matcha-tea",
    title: "Matcha & Tea",
    items: MATCHA_ITEMS,
    images: MATCHA_ITEMS.map((item) => generateImageForItem(item.name, "vibrant_green_matcha_tea_drink")),
  },
  {
    id: "iced-latte",
    title: "Iced Latte",
    items: ICED_LATTE_ITEMS,
    images: ICED_LATTE_ITEMS.map((item) => generateImageForItem(item.name, "beautiful_glass_of_iced_latte_with_swirling_milk")),
  },
];
