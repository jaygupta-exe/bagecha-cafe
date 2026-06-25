import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story & Culinary Journey | Bagecha by Adis Cafe",
  description:
    "Learn about the vision of Bagecha by Adis, Jalandhar's favorite nature-themed aesthetic cafe. Discover our journey from Chandigarh to a premium dining landmark in Punjab.",
  alternates: {
    canonical: "https://bagechabyadis.in/about",
  },
  openGraph: {
    title: "Our Story & Culinary Journey | Bagecha by Adis Cafe",
    description:
      "Learn about the vision of Bagecha by Adis, Jalandhar's favorite nature-themed aesthetic cafe. Discover our journey from Chandigarh to a premium dining landmark in Punjab.",
    url: "https://bagechabyadis.in/about",
    siteName: "Bagecha by Adis",
    images: [
      {
        url: "https://bagechabyadis.in/assests/about-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Bagecha by Adis Garden Cafe Ambiance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story & Culinary Journey | Bagecha by Adis Cafe",
    description:
      "Learn about the vision of Bagecha by Adis, Jalandhar's favorite nature-themed aesthetic cafe. Discover our journey from Chandigarh to a premium dining landmark in Punjab.",
    images: ["https://bagechabyadis.in/assests/about-hero.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
