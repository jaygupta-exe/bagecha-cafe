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
    images: [
      "/assests/menu/pizza/Gooey%20Margherita%20pizza%20slice%20in%20focus.png",
      "/assests/menu/pizza/Mouthwatering%20mushroom%20pizza%20slice.png",
      "/assests/menu/pizza/ChatGPT%20Image%20Mar%2030,%202026,%2002_04_17%20PM.png",
      "/assests/menu/pizza/ChatGPT%20Image%20Mar%2030,%202026,%2002_04_26%20PM.png",
    ],
  },
  {
    id: "garlic-bread",
    title: "Garlic Bread",
    subtitle: "Warm, cheesy, and freshly baked",
    items: GARLIC_BREAD_ITEMS,
    images: [
      "/assests/menu/garlic%20bread/garlic%20bread%201.png",
      "/assests/menu/garlic%20bread/garlic%20bread%202.png",
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    subtitle: "Authentic Italian flavors in every bite",
    items: PASTA_ITEMS,
    images: [
      "/assests/menu/pasta/pasta%201%20PM.jpeg",
      "/assests/menu/pasta/pasta%2022%20PM.jpeg",
      "/assests/menu/pasta/pasta%203PM.jpeg",
    ],
  },
  {
    id: "grilled-wraps",
    title: "Grilled Wraps",
    subtitle: "Wholesome goodness, perfectly toasted",
    items: WRAP_ITEMS,
    images: [
      "/assests/menu/grilled%20wraps/grilled%20wrap%201.jpeg",
      "/assests/menu/grilled%20wraps/grilled%20wrap%202.jpeg",
      "/assests/menu/grilled%20wraps/grilled%20wrap%203.jpeg",
    ],
  },
  {
    id: "munchies",
    title: "Munchies",
    subtitle: "Crispy, savory bites for the soul",
    items: MUNCHIES_ITEMS,
    images: [
      "/assests/menu/munchies/munchies%201.jpeg",
      "/assests/menu/munchies/munchies%202.jpeg",
      "/assests/menu/munchies/munchies%203.jpeg",
    ],
  },
  {
    id: "hot-coffee",
    title: "Hot Coffee",
    subtitle: "Expertly brewed for your comforting moments",
    items: HOT_COFFEE_ITEMS,
    images: [
      "/assests/menu/hot%20coffee/hot%20coffee%201.png",
      "/assests/menu/hot%20coffee/hot%20coffee%202.png",
      "/assests/menu/hot%20coffee/hot%20coffee%203.png",
      "/assests/menu/hot%20coffee/hot%20coffee%204.png",
    ],
  },
  {
    id: "cold-coffee",
    title: "Cold Coffee",
    subtitle: "Chilled perfection to beat the heat",
    items: COLD_COFFEE_ITEMS,
    images: [
      "/assests/menu/cold%20coffee/cold%20coffee%201.jpeg",
      "/assests/menu/cold%20coffee/cold%20cofee%202.jpeg",
      "/assests/menu/cold%20coffee/cold%20cofee%203.jpeg",
      "/assests/menu/cold%20coffee/cold%20coffee%204.jpeg",
    ],
  },
  {
    id: "matcha-tea",
    title: "Matcha & Tea",
    subtitle: "Zen in a cup, crafted for wellness",
    items: MATCHA_TEA_ITEMS,
    images: [
      "/assests/menu/matcha/matcha%201.png",
      "/assests/menu/matcha/matcha%202.png",
      "/assests/menu/matcha/matcha%203,.png",
      "/assests/menu/matcha/matcha%204.png",
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    subtitle: "Gourmet layers stacked with fresh flavor",
    items: SANDWICH_ITEMS,
    images: [
      "/assests/menu/sandwich/sandwich%201.jpeg",
      "/assests/menu/sandwich/sandwich%202.jpeg",
      "/assests/menu/sandwich/sandwich%203.jpeg",
      "/assests/menu/sandwich/sandwich%204.jpeg",
      "/assests/menu/sandwich/sandwich%205.jpeg",
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    subtitle: "Juicy, towering, and absolutely delicious",
    items: BURGERS_ITEMS,
    images: [
      "/assests/menu/burger/burger%201.png",
      "/assests/menu/burger/burger%202.png",
      "/assests/menu/burger/burger%203.png",
      "/assests/menu/burger/burger%204.png",
    ],
  },
  {
    id: "french-fries",
    title: "French Fries",
    subtitle: "Golden, crispy, and universally loved",
    items: FRIES_ITEMS,
    images: [
      "/assests/menu/french%20fries/french%20fries%201.jpeg",
      "/assests/menu/french%20fries/french%20fries%202.jpeg",
      "/assests/menu/french%20fries/french%20fries%203.jpeg",
    ],
  },
  {
    id: "mocktails",
    title: "Mocktails",
    subtitle: "Vibrant, refreshing, and endlessly tropical",
    items: MOCKTAILS_ITEMS,
    images: [
      "/assests/menu/mocktail/mocktail%20%201.jpeg",
      "/assests/menu/mocktail/mocktail%202.jpeg",
      "/assests/menu/mocktail/mocktail%203.jpeg",
      "/assests/menu/mocktail/mocktail%204.jpeg",
    ],
  },
];
