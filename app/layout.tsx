import type { Metadata, Viewport } from "next";
import "./globals.css";
import { MobileDock } from "@/components/mobile/mobile-dock";
import { BackToTop } from "@/components/header/back-to-top";

// Dynamic site URL resolution supporting production, Vercel previews, and custom domains
const getBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://nirajjewellers.co.uk";
};

const siteUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Niraj Jewellers | Bespoke Goldsmith & Bullion Hayes London",
    template: "%s | Niraj Jewellers London",
  },
  description:
    "Bespoke 22ct/18ct bridal suites, certified diamond rings & wholesale bullion by Master Jeweller Viky. In-house Hayes workshop. Speak directly on WhatsApp.",
  applicationName: "Niraj Jewellers Atelier",
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
    "London Leopard Head Hallmarked Gold",
    "Direct Workshop Gold Prices",
    "Scrap Gold Cash Valuation Hayes",
    "3D CAD Custom Ring Design",
    "22ct vs 24ct Gold Hallmarking Guide",
  ],
  authors: [{ name: "Niraj Jewellers", url: "https://nirajjewellers.co.uk" }],
  creator: "Niraj Jewellers",
  publisher: "Niraj Jewellers London",
  category: "Jewellery & Luxury Goods",
  classification: "Bespoke Goldsmith, Fine Jewellery & Precious Metals Bullion",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#D4AF37",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Niraj Jewellers | Bespoke Goldsmith & Bullion Hayes London",
    description:
      "Bespoke 22ct/18ct bridal suites, certified diamond rings & wholesale bullion by Master Jeweller Viky. In-house Hayes workshop. Speak directly on WhatsApp.",
    url: "https://nirajjewellers.co.uk",
    siteName: "Niraj Jewellers London",
    locale: "en_GB",
    alternateLocale: ["en_US", "en_IN"],
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        secureUrl: "https://nirajjewellers.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Niraj Jewellers London - Bespoke Goldsmith Atelier, Live Gold Rates & 22ct Bridal Suites",
      },
      {
        url: "/og-image.png",
        secureUrl: "https://nirajjewellers.co.uk/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Niraj Jewellers London - Flagship Showroom & Workshop Snapshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niraj Jewellers | Bespoke Goldsmith & Bullion Hayes London",
    description:
      "Bespoke 22ct/18ct bridal suites, certified diamond rings & wholesale bullion by Master Jeweller Viky. In-house Hayes workshop. Speak directly on WhatsApp.",
    site: "@nirajjewellers",
    creator: "@nirajjewellers",
    images: [
      {
        url: "/og-image.jpg",
        alt: "Niraj Jewellers London - Bespoke Goldsmith Atelier & Live Gold Rates",
      },
    ],
  },
  alternates: {
    canonical: "https://nirajjewellers.co.uk",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "GB-HIL",
    "geo.placename": "Hayes, London",
    "geo.position": "51.5229;-0.4228",
    "ICBM": "51.5229, -0.4228",
    "msapplication-TileColor": "#09090B",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
    { media: "(prefers-color-scheme: light)", color: "#09090B" },
  ],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Linked Schema.org Graph
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://nirajjewellers.co.uk/#website",
        url: "https://nirajjewellers.co.uk",
        name: "Niraj Jewellers London",
        description:
          "London's Bespoke Goldsmith Atelier & Direct Gold Wholesaler. Handcrafted 22ct/18ct bridal suites, certified diamond rings & live bullion rates.",
        publisher: {
          "@id": "https://nirajjewellers.co.uk/#jewelrystore",
        },
        inLanguage: "en-GB",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://nirajjewellers.co.uk/collections?search={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": ["JewelryStore", "LocalBusiness", "Organization"],
        "@id": "https://nirajjewellers.co.uk/#jewelrystore",
        name: "Niraj Jewellers",
        legalName: "Shiva Technology Ltd t/a Niraj Jewellers",
        vatID: "GB 842 9617 32",
        logo: {
          "@type": "ImageObject",
          url: "https://nirajjewellers.co.uk/logo.svg",
          width: "512",
          height: "512",
        },
        image: [
          "https://nirajjewellers.co.uk/og-image.jpg",
          "https://nirajjewellers.co.uk/logo.svg",
        ],
        telephone: "+447955565137",
        email: "nirajjewellersuk@gmail.com",
        url: "https://nirajjewellers.co.uk",
        priceRange: "££££",
        paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
        currenciesAccepted: "GBP",
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
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "48",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Priya & Rajan Patel" },
            datePublished: "2024-11-15",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
              "Viky at Niraj Jewellers is in a league of his own. We spent weeks in central London jewellery shops being quoted astronomical prices with zero transparency. Viky sat down with us in Hayes, weighed the gold in front of us, 3D CAD printed my dream choker, and delivered a 22ct masterpiece under budget.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Devinder Singh" },
            datePublished: "2024-10-20",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
              "My grandfather's signet ring needed sizing down and the claw needed rebuild. Viky resized it right here in the Hayes workshop in 4 hours while I had lunch down the road. Immaculate finish and fair workshop pricing.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Ananya & Tariq Sharma" },
            datePublished: "2024-12-05",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
              "Cannot recommend Niraj Jewellers enough. We brought in an Instagram reference video and Viky hand-selected three GIA diamonds for us to view under the loupe. No pushy retail tactics. The ring is breathtaking.",
          },
        ],
        founder: {
          "@type": "Person",
          "@id": "https://nirajjewellers.co.uk/#viky",
          name: "Viky",
          jobTitle: "Master Goldsmith & Principal Jeweller",
          knowsAbout: [
            "22ct Asian Bridal Jewellery Craftsmanship",
            "Rhino & Matrix 3D CAD Jewellery Modeling",
            "UK Hallmarking Act 1973 & London Assay Standards",
            "GIA & IGI Certified Natural Diamond Sourcing",
            "Laser Micro-Welding & Precision Bench Repairs",
            "LBMA Physical Investment Bullion Trading",
          ],
          worksFor: {
            "@id": "https://nirajjewellers.co.uk/#jewelrystore",
          },
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
                description:
                  "Custom 3D CAD design, direct precious metal casting, and handmade gemstone setting in 22ct and 18ct gold.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Same-Day In-House Ring Resizing & Repairs",
                description:
                  "Laser soldering, claw retipping, ultrasonic cleaning, and precious stone resetting performed at our Hayes workbench.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Wholesale Gold Bullion Trading (24ct & 22ct)",
                description:
                  "Live LBMA-indexed pricing for investment gold bars, sovereigns, and immediate cash scrap gold valuation.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "3D CAD Custom Ring Modeling & Prototyping",
                description:
                  "Micron-accurate CAD renders, 360° video previews, and high-resolution 3D resin finger-fitting models.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Ancestral Gold Melting & Direct Metal Credit",
                description:
                  "Electronic trade-scale weighing and induction refining of family gold toward new bespoke commissions.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="min-h-screen bg-obsidian text-platinum antialiased selection:bg-gold-500 selection:text-obsidian">
        {children}
        <MobileDock />
        <BackToTop />
      </body>
    </html>
  );
}
