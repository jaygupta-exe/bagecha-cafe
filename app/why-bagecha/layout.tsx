import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unique Water Sitting & Garden Ambiance | Bagecha by Adis",
  description:
    "Discover what makes Bagecha by Adis Jalandhar's most unique dining spot. Experience our signature indoor plant-lined water seating and photogenic nature aesthetics.",
  keywords: [
    "water sitting cafe",
    "best cafe in Jalandhar",
    "unique cafe experience",
    "Bagecha by Adis",
    "nature cafe Jalandhar",
    "Instagram worthy cafe",
    "premium cafe Jalandhar",
  ],
  alternates: {
    canonical: "https://bagechabyadis.in/why-bagecha",
  },
  openGraph: {
    title: "Unique Water Sitting & Garden Ambiance | Bagecha by Adis",
    description:
      "Discover what makes Bagecha by Adis Jalandhar's most unique dining spot. Experience our signature indoor plant-lined water seating and photogenic nature aesthetics.",
    type: "website",
    url: "https://bagechabyadis.in/why-bagecha",
    siteName: "Bagecha by Adis",
    images: [
      {
        url: "https://bagechabyadis.in/logo.png",
        width: 512,
        height: 512,
        alt: "Bagecha by Adis Cafe Logo",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unique Water Sitting & Garden Ambiance | Bagecha by Adis",
    description:
      "Discover what makes Bagecha by Adis Jalandhar's most unique dining spot. Experience our signature indoor plant-lined water seating and photogenic nature aesthetics.",
    images: ["https://bagechabyadis.in/logo.png"],
  },
};

export default function WhyBagechaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
