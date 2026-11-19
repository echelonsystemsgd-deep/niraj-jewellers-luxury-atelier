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
  creator: "Niraj Jewellers",
  publisher: "Shiva Technology Ltd",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.svg"],
  },
  manifest: "/manifest.webmanifest",
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
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers London - Bespoke Goldsmith Atelier & Direct Gold Wholesaler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niraj Jewellers | Bespoke Goldsmith & Bullion Hayes London",
    description:
      "Bespoke 22ct/18ct bridal suites, certified diamond rings & wholesale bullion by Master Jeweller Viky. In-house Hayes workshop. Speak directly on WhatsApp.",
    images: ["/opengraph-image"],
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
    vatID: "GB 842 9617 32",
    logo: "https://nirajjewellers.co.uk/logo.svg",
    image: [
      "https://nirajjewellers.co.uk/opengraph-image",
      "https://nirajjewellers.co.uk/logo.svg",
    ],
    telephone: "+447955565137",
    email: "nirajjewellersuk@gmail.com",
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
