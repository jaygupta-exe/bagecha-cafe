import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gourmet Cafe Menu: Coffee, Pizzas & More | Bagecha by Adis",
  description:
    "Savor the rich flavours of Bagecha by Adis. Explore our extensive menu of wood-fired pizzas, gourmet sandwiches, artisan coffees, thick shakes, and refreshing mocktails.",
  alternates: {
    canonical: "https://bagechabyadis.in/menu",
  },
  openGraph: {
    title: "Gourmet Cafe Menu: Coffee, Pizzas & More | Bagecha by Adis",
    description:
      "Savor the rich flavours of Bagecha by Adis. Explore our extensive menu of wood-fired pizzas, gourmet sandwiches, artisan coffees, thick shakes, and refreshing mocktails.",
    url: "https://bagechabyadis.in/menu",
    siteName: "Bagecha by Adis",
    images: [
      {
        url: "https://bagechabyadis.in/categories/pizza.png",
        width: 800,
        height: 600,
        alt: "Artisan Wood-Fired Pizza at Bagecha Cafe",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gourmet Cafe Menu: Coffee, Pizzas & More | Bagecha by Adis",
    description:
      "Savor the rich flavours of Bagecha by Adis. Explore our extensive menu of wood-fired pizzas, gourmet sandwiches, artisan coffees, thick shakes, and refreshing mocktails.",
    images: ["https://bagechabyadis.in/categories/pizza.png"],
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
