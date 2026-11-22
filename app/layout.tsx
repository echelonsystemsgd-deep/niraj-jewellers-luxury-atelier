import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Alex_Brush } from "next/font/google";
import "./globals.css";
import { MobileDock } from "@/components/mobile/mobile-dock";
import { BackToTop } from "@/components/header/back-to-top";
import { ScrollRestorationHandler } from "@/components/common/ScrollRestorationHandler";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
  display: "swap",
});

const vivaldi = localFont({
  src: "../public/fonts/vivaldi.ttf",
  variable: "--font-vivaldi",
  display: "swap",
});

// Canonical site URL resolution (strict production domain standard)
const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://www.niraj-jewellers.co.uk";
};

const siteUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Niraj Jewellers Ltd | Bespoke Goldsmith & Bullion Hayes London",
    template: "%s",
  },
  description:
    "Bespoke 22ct/18ct bridal suites, certified diamond rings & wholesale bullion by Niraj Jewellers Ltd. Handcrafted in our Hayes workshop since 1984. Visit our showroom or speak with our atelier team.",
  applicationName: "Niraj Jewellers Ltd",
  keywords: [
    "Niraj Jewellers Ltd",
    "Bespoke Indian Bridal Jewellery Hayes",
    "22ct Gold Jewellery West London",
    "Jewellery Repairs Uxbridge Road",
    "Gold Bullion Wholesaler Middlesex",
    "Master Goldsmith Hayes",
    "Polki Kundan Bridal Suites London",
    "Same Day Ring Resizing Hayes",
    "Southall Hayes Gold Jewellers",
    "London Leopard Head Hallmarked Gold",
    "Direct Workshop Gold Prices",
    "Scrap Gold Cash Valuation Hayes",
    "3D CAD Custom Ring Design",
    "22ct vs 24ct Gold Hallmarking Guide",
  ],
  authors: [{ name: "Niraj Jewellers Ltd", url: "https://www.niraj-jewellers.co.uk" }],
  creator: "Niraj Jewellers Ltd",
  publisher: "Niraj Jewellers Ltd London",
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
        color: "#C5A059",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Niraj Jewellers Ltd | Bespoke Goldsmith & Bullion Hayes London",
    description:
      "Bespoke 22ct/18ct bridal suites, certified diamond rings & wholesale bullion by Niraj Jewellers Ltd. Handcrafted in our Hayes workshop since 1984.",
    url: "https://www.niraj-jewellers.co.uk",
    siteName: "Niraj Jewellers Ltd London",
    locale: "en_GB",
    alternateLocale: ["en_US", "en_IN"],
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        secureUrl: "https://www.niraj-jewellers.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Niraj Jewellers Ltd London - Bespoke Goldsmith Atelier & 22ct Bridal Suites",
      },
      {
        url: "/NIRAJ_LOGO9.png",
        secureUrl: "https://www.niraj-jewellers.co.uk/NIRAJ_LOGO9.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Niraj Jewellers Ltd - Official Atelier Insignia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niraj Jewellers Ltd | Bespoke Goldsmith & Bullion Hayes London",
    description:
      "Bespoke 22ct/18ct bridal suites, certified diamond rings & wholesale bullion by Niraj Jewellers Ltd. Handcrafted in our Hayes workshop since 1984.",
    site: "@nirajjewellers",
    creator: "@nirajjewellers",
    images: [
      {
        url: "/og-image.jpg",
        alt: "Niraj Jewellers Ltd London - Bespoke Goldsmith Atelier",
      },
    ],
  },
  alternates: {
    canonical: "https://www.niraj-jewellers.co.uk",
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
    "msapplication-TileColor": "#FFFFFF",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFFFF",
  colorScheme: "light",
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
        "@id": "https://www.niraj-jewellers.co.uk/#website",
        url: "https://www.niraj-jewellers.co.uk",
        name: "Niraj Jewellers Ltd London",
        description:
          "London's Bespoke Goldsmith Atelier & Direct Gold Wholesaler. Handcrafted 22ct/18ct bridal suites, certified diamond rings & live bullion rates.",
        publisher: {
          "@id": "https://www.niraj-jewellers.co.uk/#jewelrystore",
        },
        inLanguage: "en-GB",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.niraj-jewellers.co.uk/collections?search={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": ["JewelryStore", "LocalBusiness", "Organization"],
        "@id": "https://www.niraj-jewellers.co.uk/#jewelrystore",
        name: "Niraj Jewellers Ltd",
        legalName: "Niraj Jewellers Ltd",
        vatID: "GB 674 7451 05",
        logo: {
          "@type": "ImageObject",
          url: "https://www.niraj-jewellers.co.uk/NIRAJ_LOGO9.png",
          width: "512",
          height: "512",
        },
        image: [
          "https://www.niraj-jewellers.co.uk/og-image.jpg",
          "https://www.niraj-jewellers.co.uk/NIRAJ_LOGO9.png",
        ],
        telephone: "+447955565137",
        email: "nirajjewellersuk@gmail.com",
        url: "https://www.niraj-jewellers.co.uk",
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
            closes: "17:30",
          },
        ],
        sameAs: [
          "https://share.google/UzzobueZI6BXs8GZQ",
          "https://www.facebook.com/p/Niraj-Jewellers-Ltd-100063525010609/",
          "https://www.instagram.com/nirajjewellersltd",
          "https://www.tiktok.com/@nirajjewellersltd",
          "https://www.tiktok.com/@nirajjewellersuk",
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
              "Niraj Jewellers is in a league of their own. We spent weeks in central London jewellery shops being quoted astronomical prices with zero transparency. The master goldsmith sat down with us in Hayes, weighed the gold in front of us, 3D CAD printed my dream choker, and delivered a 22ct masterpiece under budget.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Devinder Singh" },
            datePublished: "2024-10-20",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
              "My grandfather's signet ring needed sizing down and the claw needed rebuild. The goldsmith resized it right here in the Hayes workshop in 4 hours while I had lunch down the road. Immaculate finish and fair workshop pricing.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Ananya & Tariq Sharma" },
            datePublished: "2024-12-05",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
              "Cannot recommend Niraj Jewellers Ltd enough. We brought in an Instagram reference video and the atelier team hand-selected three GIA diamonds for us to view under the loupe. No pushy retail tactics. The ring is breathtaking.",
          },
        ],
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
    <html lang="en" className={`${alexBrush.variable} ${vivaldi.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#141416] antialiased selection:bg-gold-200 selection:text-gold-900">
        <ScrollRestorationHandler />
        {children}
        <MobileDock />
        <BackToTop />
      </body>
    </html>
  );
}
