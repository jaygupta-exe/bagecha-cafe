import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Water Sitting Cafe in Jalandhar | Bagecha by Adis",
  description:
    "Experience the first water sitting cafe in Jalandhar. Visit Bagecha by Adis for a unique dining experience with nature and premium ambiance.",
  keywords: [
    "water sitting cafe",
    "best cafe in Jalandhar",
    "unique cafe experience",
    "Bagecha by Adis",
    "nature cafe Jalandhar",
    "Instagram worthy cafe",
    "premium cafe Jalandhar",
  ],
  openGraph: {
    title: "First Water Sitting Cafe in Jalandhar | Bagecha by Adis",
    description:
      "Experience the first water sitting cafe in Jalandhar. Visit Bagecha by Adis for a unique dining experience with nature and premium ambiance.",
    type: "website",
    url: "https://bagechabyadis.in/why-bagecha",
  },
};

export default function WhyBagechaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
