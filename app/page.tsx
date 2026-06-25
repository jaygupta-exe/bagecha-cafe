import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FloatingParticles from "@/components/FloatingParticles";
import HomeHero from "@/components/HomeHero";
import AboutSection from "@/components/AboutSection";
import CategoryShowcase from "@/components/CategoryShowcase";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best Aesthetic Cafe in Jalandhar | Bagecha by Adis",
  description:
    "Experience the best aesthetic cafe in Jalandhar. Bagecha by Adis offers a stunning nature-inspired garden setting with indoor water seating and premium continental cuisine.",
  alternates: {
    canonical: "https://bagechabyadis.in/",
  },
  openGraph: {
    title: "Best Aesthetic Cafe in Jalandhar | Bagecha by Adis",
    description:
      "Experience the best aesthetic cafe in Jalandhar. Bagecha by Adis offers a stunning nature-inspired garden setting with indoor water seating and premium continental cuisine.",
    url: "https://bagechabyadis.in/",
    siteName: "Bagecha by Adis",
    images: [
      {
        url: "https://bagechabyadis.in/logo.png",
        width: 512,
        height: 512,
        alt: "Bagecha by Adis Cafe Jalandhar Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Aesthetic Cafe in Jalandhar | Bagecha by Adis",
    description:
      "Experience the best aesthetic cafe in Jalandhar. Bagecha by Adis offers a stunning nature-inspired garden setting with indoor water seating and premium continental cuisine.",
    images: ["https://bagechabyadis.in/logo.png"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": "https://bagechabyadis.in/#restaurant",
        "name": "Bagecha by Adis Cafe",
        "image": "https://bagechabyadis.in/logo.png",
        "url": "https://bagechabyadis.in",
        "telephone": "+918360032762",
        "priceRange": "$$",
        "menu": "https://bagechabyadis.in/menu",
        "servesCuisine": "Continental, Italian, Pizza, Coffee, Dessert",
        "acceptsReservations": "true",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Doaba Chowk, Near Doaba Chowk, Vikas Puri, Santokh Pura",
          "addressLocality": "Jalandhar",
          "addressRegion": "Punjab",
          "postalCode": "144008",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "31.3414",
          "longitude": "75.5898"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "10:00",
            "closes": "22:30"
          }
        ],
        "sameAs": [
          "https://www.instagram.com/bagecha_by_adis_cafe",
          "https://www.swiggy.com/city/jalandhar/bagecha-by-adis-cafe-north-jalandhar-rest1328875",
          "https://www.zomato.com/jalandhar/bgecha-by-adis-cafe-preet-nagar-road"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://bagechabyadis.in/#localbusiness",
        "name": "Bagecha by Adis Cafe",
        "image": "https://bagechabyadis.in/logo.png",
        "url": "https://bagechabyadis.in",
        "telephone": "+918360032762",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Doaba Chowk, Near Doaba Chowk, Vikas Puri, Santokh Pura",
          "addressLocality": "Jalandhar",
          "addressRegion": "Punjab",
          "postalCode": "144008",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "31.3414",
          "longitude": "75.5898"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "10:00",
            "closes": "22:30"
          }
        ]
      }
    ]
  };

  return (
    <main className="relative min-h-screen" style={{ backgroundColor: "#364c11" }}>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <FloatingParticles />

      {/* Hero Section */}
      <HomeHero />

      {/* About Us section */}
      <AboutSection />

      {/* Menu Showcase section */}
      <CategoryShowcase />

      {/* Visit Us — map, hours, contact, socials */}
      <div id="locations">
        <VisitUs />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
