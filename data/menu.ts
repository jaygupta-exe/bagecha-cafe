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

const PIZZA_ITEMS: MenuItem[] = [
  { name: "Melted Bliss Margherita", price: "₹249" },
  { name: "Golden Cheese Corn Pizza", price: "₹269" },
  { name: "Exotic Farmhouse Pizza", price: "₹289" },
  { name: "Chilly Mushroom Fantasy", price: "₹299" },
  { name: "Tandoori Paneer Tikka Pizza", price: "₹329" },
  { name: "Adi's Garden Authentic Pizza", price: "₹349" },
];

const GARLIC_BREAD_ITEMS: MenuItem[] = [
  { name: "Cheese Corn Garlic Bread", price: "₹179" },
  { name: "Paneer Tikka Garlic Bread", price: "₹219" },
];

const BRUSCHETTA_ITEMS: MenuItem[] = [
  { name: "Tuscan Tomato Bruschetta", price: "₹179" },
  { name: "Wild Mushroom Bruschetta", price: "₹199" },
];

const PASTA_ITEMS: MenuItem[] = [
  { name: "Creamy Alfredo Pasta", price: "₹219" },
  { name: "Al-arrabbiata Mix Sauce Pasta", price: "₹229" },
  { name: "Adi's Mushroom Sauce Pasta", price: "₹249" },
];

const WRAP_ITEMS: MenuItem[] = [
  { name: "Exotic Veggie Wrap", price: "₹139" },
  { name: "Paneer Crunch Wrap", price: "₹159" },
  { name: "Smoky Paneer Tikka Wrap", price: "₹179" },
];

const MUNCHIES_ITEMS: MenuItem[] = [
  { name: "Cottage Cheese Cigar Rolls", price: "₹189" },
  { name: "Veggie Spring Rolls", price: "₹169" },
  { name: "Hara Bhara Kababs", price: "₹179" },
  { name: "Crispy Potato Wedges", price: "₹169" },
  { name: "Mexican Salsa Nachos", price: "₹159" },
  { name: "Cheese Jalapeno Nachos", price: "₹179" },
];

const SHAKES_ITEMS: MenuItem[] = [
  { name: "Vanilla Shake", price: "₹139" },
  { name: "Chocolate Shake", price: "₹139" },
  { name: "Mango Shake", price: "₹149" },
  { name: "Strawberry Shake", price: "₹149" },
  { name: "Butterscotch Shake", price: "₹149" },
  { name: "Black Current Shake", price: "₹159" },
  { name: "Down Town Oreo Shake", price: "₹169" },
  { name: "Choco Chip Shake", price: "₹169" },
  { name: "Kitkat Shake", price: "₹179" },
  { name: "Romanian Tiramisu Shake", price: "₹179" },
  { name: "Rich Blueberry Shake", price: "₹179" },
  { name: "Biscoff Brown Butter Shake", price: "₹189" },
];

const MOCKTAILS_ITEMS: MenuItem[] = [
  { name: "Virgin Mint Mojito", price: "₹129" },
  { name: "Tropical Green Apple", price: "₹129" },
  { name: "Peach Paradise", price: "₹139" },
  { name: "Blue Blossom", price: "₹139" },
  { name: "Passion Fruit Punch", price: "₹149" },
  { name: "Watermelon Wave", price: "₹139" },
  { name: "Fresh Lime Soda", price: "₹89" },
  { name: "Coconut Pina Colada", price: "₹159" },
  { name: "Lemon Ice Tea", price: "₹119" },
  { name: "Peach Ice Tea", price: "₹129" },
];

const SANDWICH_ITEMS: MenuItem[] = [
  { name: "Spinach Corn Sandwich", price: "₹169" },
  { name: "Pizza Cheese Sandwich", price: "₹169" },
  { name: "Pan Mushroom Sandwich", price: "₹179" },
  { name: "Adi's Oriental Sandwich", price: "₹179" },
  { name: "Paneer Tikka Sandwich", price: "₹189" },
  { name: "Bagecha Signature Sandwich", price: "₹199" },
  { name: "Garden Club Sandwich", price: "₹219" },
];

const BURGERS_ITEMS: MenuItem[] = [
  { name: "Adi's Aloo Tikki Burger", price: "₹69" },
  { name: "Classic Veggie Burger", price: "₹89" },
  { name: "Crispy Paneer Burger", price: "₹109" },
  { name: "Big Daddy Smash Burger", price: "₹129" },
  { name: "Spinach Mushroom Cheese Burger", price: "₹149" },
];

const FRIES_ITEMS: MenuItem[] = [
  { name: "Classic Salted Fries", price: "₹139" },
  { name: "Peri-peri Fries", price: "₹159" },
  { name: "Adi's Italiano Cheese Fries", price: "₹179" },
  { name: "Spicy Mexican Fries", price: "₹179" },
];

const HOT_COFFEE_ITEMS: MenuItem[] = [
  { name: "Espresso", price: "₹79" },
  { name: "Americano", price: "₹99" },
  { name: "Cappuccino / Latte", price: "₹129" },
  { name: "Hot Mocha", price: "₹149" },
  { name: "Hazelnut Cappuccino / Latte", price: "₹149" },
  { name: "Vanilla Cappuccino / Latte", price: "₹149" },
  { name: "Tiramisu Cappuccino / Latte", price: "₹159" },
  { name: "Brown Butter Cappuccino / Latte", price: "₹159" },
  { name: "Roasted Hazelnut Cappuccino / Latte", price: "₹159" },
  { name: "Toasted Almond Cappuccino / Latte", price: "₹169" },
  { name: "Signature Hot Chocolate", price: "₹149" },
  { name: "Special Brownie Hot Chocolate", price: "₹159" },
];

const COLD_COFFEE_ITEMS: MenuItem[] = [
  { name: "Adi's Classic Coffee", price: "₹149" },
  { name: "Choco Mocha Coffee", price: "₹159" },
  { name: "French Vanilla Coffee", price: "₹159" },
  { name: "Roasted Hazelnut Coffee", price: "₹169" },
  { name: "Irish Cream Coffee", price: "₹169" },
  { name: "Toasted Almond Coffee", price: "₹179" },
  { name: "Frosted Tiramisu Coffee", price: "₹179" },
  { name: "Buttery Bliss Coffee", price: "₹179" },
];

const MATCHA_ITEMS: MenuItem[] = [
  { name: "Hot Matcha", price: "₹149" },
  { name: "Iced Matcha", price: "₹159" },
  { name: "Iced Vanilla Matcha", price: "₹169" },
  { name: "Iced Strawberry Matcha", price: "₹169" },
  { name: "Tulsi Green Tea", price: "₹79" },
  { name: "Honey Chamomile Tea", price: "₹89" },
  { name: "Ginger Honey Lemon Tea", price: "₹89" },
];

const ICED_LATTE_ITEMS: MenuItem[] = [
  { name: "Adi's Iced Latte", price: "₹139" },
  { name: "Choco Mocha Iced Latte", price: "₹149" },
  { name: "French Vanilla Iced Latte", price: "₹149" },
  { name: "Roasted Hazelnut Iced Latte", price: "₹159" },
  { name: "Almond / Tiramisu / Brown Butter", price: "₹169" },
];

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
