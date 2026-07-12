export interface MenuItem {
  name: string;
  price?: string;
  prices?: string[];
  desc?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
  images: string[];
  priceHeaders?: string[];
}

const PIZZA_ITEMS: MenuItem[] = [
  {
    name: "Melted Bliss Margherita",
    prices: ["269", "279"],
  },
  {
    name: "Golden Cheese Corn Pizza",
    prices: ["279", "289"],
  },
  {
    name: "Exotic Farmhouse Pizza",
    prices: ["299", "309"],
  },
  {
    name: "Chilly Mushroom Fantasy",
    prices: ["319", "329"],
  },
  {
    name: "Tandoori Paneer Tikka Pizza",
    prices: ["339", "349"],
  },
  {
    name: "Adi’s Garden Authentic Pizza",
    prices: ["359", "369"],
  },
];

const GARLIC_BREAD_ITEMS: MenuItem[] = [
  { name: "Cheese Corn Garlic Bread", price: "179" },
  { name: "Paneer Tikka Garlic Bread", price: "209" },
];

const PASTA_ITEMS: MenuItem[] = [
  { name: "Creamy Alfredo Pasta", price: "229" },
  { name: "Al-Arrabbiata Mix Sauce Pasta", price: "239" },
  { name: "Basil Pesto Olive Pasta", price: "249" },
];

const WRAP_ITEMS: MenuItem[] = [
  { name: "Exotic Veggie Wrap", price: "149" },
  { name: "Paneer Crunchy Wrap", price: "169" },
  { name: "Smoky Paneer Tikka Wrap", price: "179" },
];

const MUNCHIES_ITEMS: MenuItem[] = [
  { name: "Cottage Cheese Cigar Rolls (6PC)", price: "189" },
  { name: "Veggie Spring Rolls (6PC)", price: "169" },
  { name: "Cheesy Pizza Fingers (8 PC)", price: "159" },
  { name: "Hara Bhara Kababs (10 PC)", price: "169" },
  { name: "Mexican Salsa Nachos", price: "159" },
  { name: "Cheese Jalapeno Nachos", price: "179" },
];

const HOT_COFFEE_ITEMS: MenuItem[] = [
  { name: "Espresso", price: "89" },
  { name: "Americano", price: "99" },
  { name: "Cappuccino", price: "129" },
  { name: "Latte", price: "139" },
  { name: "Mocha", price: "149" },
  { name: "Hazelnut Cappuccino/Latte", price: "159" },
  { name: "Vanilla Cappuccino/Latte", price: "159" },
  { name: "Irish Cappuccino/Latte", price: "159" },
  { name: "Tiramisu Cappuccino/Latte", price: "169" },
  { name: "Caramello Cappuccino/Latte", price: "169" },
  { name: "Dubai Pistachio Latte", price: "179" },
];

const COLD_COFFEE_ITEMS: MenuItem[] = [
  { name: "Adi’s Classic Coffee", price: "149" },
  { name: "Choco Mocha Coffee", price: "159" },
  { name: "French Vanilla Coffee", price: "159" },
  { name: "Hazelnut Coffee", price: "169" },
  { name: "Irish Cream Coffee", price: "169" },
  { name: "Frosted Tiramisu Coffee", price: "179" },
  { name: "Caramello Bliss Coffee", price: "179" },
  { name: "Nutty Nutella Coffee", price: "189" },
];

const MATCHA_TEA_ITEMS: MenuItem[] = [
  { name: "Hot Matcha", price: "149" },
  { name: "Iced Matcha", price: "159" },
  { name: "Iced Vanilla Matcha", price: "169" },
  { name: "Tulsi Green Tea", price: "79" },
];

const SANDWICH_ITEMS: MenuItem[] = [
  { name: "Cheese Corn Sandwich", price: "169" },
  { name: "Pizza Cheese Sandwich", price: "169" },
  { name: "Pan Mushroom Sandwich", price: "179" },
  { name: "Adi’s Oriental Sandwich", price: "189" },
  { name: "Paneer Tikka Sandwich", price: "199" },
  { name: "Bagecha Signature Sandwich", price: "199" },
];

const BRUSCHETTA_ITEMS: MenuItem[] = [
  { name: "Tuscan Tomato Bruschetta", price: "179" },
  { name: "Wild Mushroom Bruschetta", price: "199" },
];

const BURGERS_ITEMS: MenuItem[] = [
  { name: "Crunchy Aloo Tikki Burger", price: "69" },
  { name: "Classic Veggies Burger", price: "89" },
  { name: "Crispy Paneer Zinger Burger", price: "119" },
  { name: "Big Daddy Smaash Burger", price: "129" },
];

const FRIES_ITEMS: MenuItem[] = [
  { name: "Classic Salted Fries", price: "139" },
  { name: "Peri-Peri Fries", price: "159" },
  { name: "Adi’s Italiano Cheese Fries", price: "179" },
  { name: "Spicy Mexican Fries", price: "179" },
  { name: "Crispy Potato Crisper", price: "169" },
];

const MOCKTAILS_ITEMS: MenuItem[] = [
  { name: "Virgin Mint Mojito", price: "129" },
  { name: "Tropical Green Apple", price: "129" },
  { name: "Peachy Paradise", price: "139" },
  { name: "Watermelon Wave", price: "139" },
  { name: "Blue Blossom", price: "139" },
  { name: "Mango Tango Burst", price: "149" },
  { name: "Passion Fruit Punch", price: "159" },
  { name: "Fresh Lime Lemonade", price: "99" },
  { name: "Coconut Pina Colada", price: "169" },
  { name: "Lemon Ice Tea", price: "119" },
  { name: "Peach Ice Tea", price: "129" },
  { name: "Mango Mint Ice Tea", price: "129" },
];

const THICK_SHAKES_ITEMS: MenuItem[] = [
  { name: "Vanilla Shake", price: "139" },
  { name: "Chocolate Shake", price: "149" },
  { name: "Mango Shake", price: "149" },
  { name: "Strawberry Shake", price: "149" },
  { name: "Butterscotch Shake", price: "149" },
  { name: "Black Current Shake", price: "159" },
  { name: "Down Town Oreo Shake", price: "169" },
  { name: "Choco Chip Shake", price: "169" },
  { name: "Kitkat Shake", price: "179" },
  { name: "Rich Blueberry Shake", price: "179" },
  { name: "Lotus Biscoff Shake", price: "189" },
  { name: "Nutty Nutella Shake", price: "189" },
];

const HEALTHY_GYM_DIET_ITEMS: MenuItem[] = [
  { name: "Protein Hulk Grilled Sandwich (28GM)", price: "199" },
  { name: "Exotic Sweet Chilly Salad (18GM)", price: "169" },
  { name: "Smokey Paneer Tikka Salad (26GM)", price: "179" },
  { name: "Muscle Mocha Protein Shake (30GM)", price: "159" },
  { name: "Muscle Mocha Protein Coffee (32GM)", price: "169" },
];

const DESSERT_ITEMS: MenuItem[] = [
  { name: "Nutella Fudge Brownie", price: "119" },
  { name: "Blueberry Muffin", price: "99" },
  { name: "Choco Lava Cake", price: "119" },
  { name: "Spl Italian Tiramisu", price: "159" },
  { name: "Chocolate Walnut Brownie with Vanilla Ice-Cream", price: "149" },
];

export const MENU_DATA: MenuCategory[] = [
  {
    id: "pizza",
    title: "Pizza",
    subtitle: "Wood-fired & handcrafted to perfection",
    items: PIZZA_ITEMS,
    priceHeaders: ["Normal Fluffy Crust 11 Inch", "Italiano Thin Crust 11 Inch"],
    images: [
      "/assests/menu/pizza/Gooey%20Margherita%20pizza%20slice%20in%20focus.png",
      "/assests/menu/pizza/Mouthwatering%20mushroom%20pizza%20slice.png",
      "/assests/menu/pizza/ChatGPT%20Image%20Mar%2030,%202026,%2002_04_17%20PM.png",
      "/assests/menu/pizza/ChatGPT%20Image%20Mar%2030,%202026,%2002_04_26%20PM.png",
    ],
  },
  {
    id: "garlic-bread",
    title: "Garlic Bread (4PC)",
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
    subtitle: "Made with whole wheat wrap",
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
    subtitle: "Served with Sweet Chilly",
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
    subtitle: "Served with Cookie",
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
    subtitle: "Blended with Ice-Cream",
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
    title: "Grilled Sandwich (4PC)",
    subtitle: "Served With Coleslaw and Aromatic Sauces",
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
    id: "bruschetta",
    title: "Baked Bruschetta (4PC)",
    subtitle: "Crispy baked bread with fresh toppings",
    items: BRUSCHETTA_ITEMS,
    images: [
      "/assests/menu/garlic%20bread/garlic%20bread%201.png",
      "/assests/menu/garlic%20bread/garlic%20bread%202.png",
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    subtitle: "Served with Ketchup",
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
    subtitle: "Served with Dip",
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
    subtitle: "Made with Fresh Ingredients",
    items: MOCKTAILS_ITEMS,
    images: [
      "/assests/menu/mocktail/mocktail%20%201.jpeg",
      "/assests/menu/mocktail/mocktail%202.jpeg",
      "/assests/menu/mocktail/mocktail%203.jpeg",
      "/assests/menu/mocktail/mocktail%204.jpeg",
    ],
  },
  {
    id: "thick-shakes",
    title: "Thick Shakes",
    subtitle: "Blended with Ice-Cream",
    items: THICK_SHAKES_ITEMS,
    images: [
      "/assests/menu/thick%20shake/thick%20shake%201.jpeg",
      "/assests/menu/thick%20shake/thick%20shake%202.jpeg",
      "/assests/menu/thick%20shake/thick%20shake%203.jpeg",
    ],
  },
  {
    id: "healthy-gym-diet",
    title: "Healthy Gym Diet",
    subtitle: "Made with Fresh Ingredients & Protein Rich Diet",
    items: HEALTHY_GYM_DIET_ITEMS,
    images: [
      "/assests/menu/healthy%20gym%20diet/WhatsApp%20Image%202026-07-12%20at%207.20.17%20PM%20(1).jpeg",
      "/assests/menu/healthy%20gym%20diet/WhatsApp%20Image%202026-07-12%20at%207.20.17%20PM%20(2).jpeg",
      "/assests/menu/healthy%20gym%20diet/WhatsApp%20Image%202026-07-12%20at%207.20.18%20PM.jpeg",
    ],
  },
  {
    id: "desserts",
    title: "Dessert Menu",
    subtitle: "Sweet endings to a perfect meal",
    items: DESSERT_ITEMS,
    images: [
      "/assests/menu/dessert/WhatsApp%20Image%202026-07-12%20at%207.20.16%20PM%20(1).jpeg",
      "/assests/menu/dessert/WhatsApp%20Image%202026-07-12%20at%207.20.16%20PM%20(2).jpeg",
      "/assests/menu/dessert/WhatsApp%20Image%202026-07-12%20at%207.20.17%20PM.jpeg",
    ],
  },
];

