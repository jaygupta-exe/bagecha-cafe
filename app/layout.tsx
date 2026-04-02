import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bagecha by Adi's Cafe — Crafted Taste, Premium Experience",
  description:
    "Experience the finest in pizza, coffee, shakes, and more. Bagecha by Adi's Cafe — where every dish tells a story of crafted taste and premium experience.",
  keywords: ["Bagecha", "Adi's Cafe", "premium cafe", "coffee", "pizza", "gourmet food", "luxury dining"],
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32" },
      { url: "/logo.png", sizes: "16x16" },
    ],
    apple: "/logo.png",
  },
  openGraph: {
    title: "Bagecha by Adi's Cafe — Crafted Taste, Premium Experience",
    description: "Experience the finest in pizza, coffee, shakes, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
