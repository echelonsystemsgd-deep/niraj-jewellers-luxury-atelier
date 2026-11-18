import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nirajjewellers.co.uk"),
  title: "Niraj Jewellers | Bespoke Goldsmith & Bullion Hayes London",
  description:
    "Bespoke 22ct/18ct bridal suites, certified diamond rings & wholesale bullion by Master Jeweller Viky. In-house Hayes workshop. Speak directly on WhatsApp.",
  keywords: [
    "Niraj Jewellers",
    "Bespoke Indian Bridal Jewellery Hayes",
    "22ct Gold Jewellery West London",
    "Jewellery Repairs Uxbridge Road",
    "Gold Bullion Wholesaler Middlesex",
    "Goldsmith Viky Hayes",
    "Polki Kundan Bridal Suites London",
    "Same Day Ring Resizing Hayes",
    "Southall Hayes Gold Jewellers",
  ],
  authors: [{ name: "Niraj Jewellers", url: "https://nirajjewellers.co.uk" }],
  openGraph: {
    title: "Niraj Jewellers | Bespoke Goldsmith & Bullion Hayes London",
    description:
      "Bespoke 22ct/18ct bridal suites, certified diamond rings & wholesale bullion by Master Jeweller Viky. In-house Hayes workshop. Speak directly on WhatsApp.",
    url: "https://nirajjewellers.co.uk",
    siteName: "Niraj Jewellers London",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers Bespoke 22ct Gold Bridal Suite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niraj Jewellers | Bespoke Goldsmith & Bullion Hayes London",
    description:
      "Bespoke 22ct/18ct bridal suites, certified diamond rings & wholesale bullion by Master Jeweller Viky. In-house Hayes workshop. Speak directly on WhatsApp.",
    images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop"],
  },
  alternates: {
    canonical: "https://nirajjewellers.co.uk",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#09090B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LocalBusiness & JewelryStore structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["JewelryStore", "LocalBusiness"],
    "@id": "https://nirajjewellers.co.uk/#jewelrystore",
    name: "Niraj Jewellers",
    legalName: "Shiva Technology Ltd t/a Niraj Jewellers",
    image: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    ],
    telephone: "+447955565137",
    url: "https://nirajjewellers.co.uk",
    priceRange: "££££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "136 Uxbridge Road",
      addressLocality: "Hayes",
      addressRegion: "Middlesex, Greater London",
      postalCode: "UB4 0JH",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5229,
      longitude: -0.4228,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "12:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "11:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/nirajjewellersltd",
      "https://www.tiktok.com/@nirajjewellersltd",
    ],
    founder: {
      "@type": "Person",
      name: "Viky",
      jobTitle: "Master Goldsmith & Principal Jeweller",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Goldsmith & Fine Jewellery Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bespoke 22ct Bridal Suites & Polki",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Same-Day In-House Ring Resizing & Repairs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wholesale Gold Bullion Trading (24ct & 22ct)",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-obsidian text-platinum antialiased selection:bg-gold-500 selection:text-obsidian">
        {children}
      </body>
    </html>
  );
}
