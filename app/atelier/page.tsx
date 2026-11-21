import { Metadata } from "next";
import { AtelierClientView } from "@/components/atelier/AtelierClientView";

export const metadata: Metadata = {
  title: "3D Digital Flagship Atelier | Niraj Jewellers Ltd (Est. 1984)",
  description:
    "Explore Niraj Jewellers' interactive 3D digital metallurgy flagship. Real-time WebGL 22ct gold inspection, 72-frame canvas scroll scrubbing, same-day bench repairs, and Hayes showroom appointments.",
  openGraph: {
    title: "3D Digital Flagship Atelier | Niraj Jewellers Ltd",
    description:
      "Interactive 3D metallurgy atelier: 22ct Royal Gold, syndicate Polki bridal suites, and London Assay hallmarking at 136 Uxbridge Road, Hayes.",
    url: "https://www.niraj-jewellers.co.uk/atelier",
    siteName: "Niraj Jewellers Ltd",
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://www.niraj-jewellers.co.uk/atelier",
  },
};

export default function AtelierPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: "Niraj Jewellers Ltd — 3D Digital Flagship Atelier",
    url: "https://www.niraj-jewellers.co.uk/atelier",
    logo: "https://www.niraj-jewellers.co.uk/favicon.ico",
    telephone: "+442085739323",
    email: "nirajjewellersuk@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "136 Uxbridge Road",
      addressLocality: "Hayes",
      addressRegion: "Middlesex",
      postalCode: "UB4 0JH",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.5173",
      longitude: "-0.4206",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:30",
        closes: "18:00",
      },
    ],
    priceRange: "££££",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "22ct Asian Bridal Jewellery & Fine Bullion",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "22ct Imperial Bridal Masterwork",
            description: "Solid 22ct yellow gold lost-wax cast bridal masterwork hallmarked by the London Assay Office.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AtelierClientView />
    </>
  );
}
