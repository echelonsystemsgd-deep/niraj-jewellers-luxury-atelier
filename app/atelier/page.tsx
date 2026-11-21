import { Metadata } from "next";
import { AtelierClientView } from "@/components/atelier/AtelierClientView";

export const metadata: Metadata = {
  title: "Digital Flagship Atelier | Niraj Jewellers Ltd (Est. 1984)",
  description:
    "Explore Niraj Jewellers' digital flagship atelier. Curated 54-piece 22ct gold vault, high-definition benchwork video reels, same-day laser repairs, and Hayes showroom appointments.",
  openGraph: {
    title: "Digital Flagship Atelier | Niraj Jewellers Ltd",
    description:
      "Curated 54-piece 22ct Royal Gold vault, syndicate Polki bridal suites, and London Assay hallmarking at 136 Uxbridge Road, Hayes.",
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
    name: "Niraj Jewellers Ltd — Digital Flagship Atelier",
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
