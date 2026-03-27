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

// Helper to generate unique high-quality image URLs dynamically
const generateImages = (keyword: string): string[] => {
  return Array.from({ length: 6 }).map((_, i) => 
    `https://image.pollinations.ai/prompt/premium_food_photography_of_${keyword}_on_dark_moody_gourmet_cafe_background?width=600&height=600&nologo=true&seed=${i + 1}`
  );
};

export const MENU_DATA: MenuCategory[] = [
  {
    id: "pizza",
    title: "Pizza (10 Inch)",
    items: [
      { name: "Melted Bliss Margherita", price: "₹249" },
      { name: "Golden Cheese Corn Pizza", price: "₹269" },
      { name: "Exotic Farmhouse Pizza", price: "₹289" },
      { name: "Chilly Mushroom Fantasy", price: "₹299" },
      { name: "Tandoori Paneer Tikka Pizza", price: "₹329" },
      { name: "Adi's Garden Authentic Pizza", price: "₹349" },
    ],
    images: generateImages("a_delicious_gourmet_pizza_slice_with_cheese_pull"),
  },
  {
    id: "garlic-bread",
    title: "Garlic Bread",
    items: [
      { name: "Cheese Corn Garlic Bread", price: "₹179" },
      { name: "Paneer Tikka Garlic Bread", price: "₹219" },
    ],
    images: generateImages("fresh_baked_cheesy_garlic_bread_slices"),
  },
  {
    id: "baked-bruschetta",
    title: "Baked Bruschetta",
    items: [
      { name: "Tuscan Tomato Bruschetta", price: "₹179" },
      { name: "Wild Mushroom Bruschetta", price: "₹199" },
    ],
    images: generateImages("gourmet_tomato_basil_bruschetta_on_crispy_baguette_toast"),
  },
  {
    id: "pasta",
    title: "Pasta",
    items: [
      { name: "Creamy Alfredo Pasta", price: "₹219" },
      { name: "Al-arrabbiata Mix Sauce Pasta", price: "₹229" },
      { name: "Adi's Mushroom Sauce Pasta", price: "₹249" },
    ],
    images: generateImages("creamy_italian_penne_pasta_bowl_with_herbs"),
  },
  {
    id: "grilled-wraps",
    title: "Grilled Wraps",
    items: [
      { name: "Exotic Veggie Wrap", price: "₹139" },
      { name: "Paneer Crunch Wrap", price: "₹159" },
      { name: "Smoky Paneer Tikka Wrap", price: "₹179" },
    ],
    images: generateImages("grilled_stuffed_veggie_wrap_cut_in_half_showing_filling"),
  },
  {
    id: "munchies",
    title: "Munchies",
    items: [
      { name: "Cottage Cheese Cigar Rolls", price: "₹189" },
      { name: "Veggie Spring Rolls", price: "₹169" },
      { name: "Hara Bhara Kababs", price: "₹179" },
      { name: "Crispy Potato Wedges", price: "₹169" },
      { name: "Mexican Salsa Nachos", price: "₹159" },
      { name: "Cheese Jalapeno Nachos", price: "₹179" },
    ],
    images: generateImages("crispy_fried_appetizers_like_spring_rolls_or_wedges_with_dip"),
  },
  {
    id: "thick-shakes",
    title: "Thick Shakes",
    items: [
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
    ],
    images: generateImages("tall_glass_of_thick_creamy_milkshake_with_whipped_cream"),
  },
  {
    id: "mocktails",
    title: "Mocktails",
    items: [
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
    ],
    images: generateImages("refreshing_colorful_mocktail_drink_with_ice_and_mint_garnish"),
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    items: [
      { name: "Spinach Corn Sandwich", price: "₹169" },
      { name: "Pizza Cheese Sandwich", price: "₹169" },
      { name: "Pan Mushroom Sandwich", price: "₹179" },
      { name: "Adi's Oriental Sandwich", price: "₹179" },
      { name: "Paneer Tikka Sandwich", price: "₹189" },
      { name: "Bagecha Signature Sandwich", price: "₹199" },
      { name: "Garden Club Sandwich", price: "₹219" },
    ],
    images: generateImages("grilled_gourmet_club_sandwich_cut_in_half_with_fries"),
  },
  {
    id: "burgers",
    title: "Burgers",
    items: [
      { name: "Adi's Aloo Tikki Burger", price: "₹69" },
      { name: "Classic Veggie Burger", price: "₹89" },
      { name: "Crispy Paneer Burger", price: "₹109" },
      { name: "Big Daddy Smash Burger", price: "₹129" },
      { name: "Spinach Mushroom Cheese Burger", price: "₹149" },
    ],
    images: generateImages("juicy_gourmet_veggie_burger_with_melted_cheese"),
  },
  {
    id: "french-fries",
    title: "French Fries",
    items: [
      { name: "Classic Salted Fries", price: "₹139" },
      { name: "Peri-peri Fries", price: "₹159" },
      { name: "Adi's Italiano Cheese Fries", price: "₹179" },
      { name: "Spicy Mexican Fries", price: "₹179" },
    ],
    images: generateImages("crispy_golden_french_fries_in_a_basket_with_dip"),
  },
  {
    id: "hot-coffee",
    title: "Hot Coffee",
    items: [
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
    ],
    images: generateImages("steaming_cup_of_latte_art_hot_coffee_in_a_mug"),
  },
  {
    id: "cold-coffee",
    title: "Cold Coffee",
    items: [
      { name: "Adi's Classic Coffee", price: "₹149" },
      { name: "Choco Mocha Coffee", price: "₹159" },
      { name: "French Vanilla Coffee", price: "₹159" },
      { name: "Roasted Hazelnut Coffee", price: "₹169" },
      { name: "Irish Cream Coffee", price: "₹169" },
      { name: "Toasted Almond Coffee", price: "₹179" },
      { name: "Frosted Tiramisu Coffee", price: "₹179" },
      { name: "Buttery Bliss Coffee", price: "₹179" },
    ],
    images: generateImages("tall_glass_of_iced_cold_coffee_with_ice_cubes_and_drizzle"),
  },
  {
    id: "matcha-tea",
    title: "Matcha & Tea",
    items: [
      { name: "Hot Matcha", price: "₹149" },
      { name: "Iced Matcha", price: "₹159" },
      { name: "Iced Vanilla Matcha", price: "₹169" },
      { name: "Iced Strawberry Matcha", price: "₹169" },
      { name: "Tulsi Green Tea", price: "₹79" },
      { name: "Honey Chamomile Tea", price: "₹89" },
      { name: "Ginger Honey Lemon Tea", price: "₹89" },
    ],
    images: generateImages("cup_of_vibrant_green_matcha_tea_or_iced_matcha_latte"),
  },
  {
    id: "iced-latte",
    title: "Iced Latte",
    items: [
      { name: "Adi's Iced Latte", price: "₹139" },
      { name: "Choco Mocha Iced Latte", price: "₹149" },
      { name: "French Vanilla Iced Latte", price: "₹149" },
      { name: "Roasted Hazelnut Iced Latte", price: "₹159" },
      { name: "Almond / Tiramisu / Brown Butter", price: "₹169" },
    ],
    images: generateImages("beautiful_glass_of_iced_latte_with_swirling_milk_and_espresso"),
  },
];
