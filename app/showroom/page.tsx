import type { Metadata } from "next";
import { ShowroomClientView } from "@/components/showroom/showroom-client-view";

export const metadata: Metadata = {
  title: "Hayes Flagship Showroom & Atelier Hub | Niraj Jewellers Ltd London",
  description:
    "Visit our working atelier at 136 Uxbridge Road, Hayes UB4 0JH. Direct diamond viewing, bespoke consultations & free customer parking guidance.",
  alternates: {
    canonical: "https://www.niraj-jewellers.co.uk/showroom",
  },
  openGraph: {
    title: "Hayes Flagship Showroom & Atelier Hub | Niraj Jewellers Ltd London",
    description:
      "Visit our working atelier at 136 Uxbridge Road, Hayes UB4 0JH. Direct diamond viewing, bespoke consultations & free customer parking.",
    url: "https://www.niraj-jewellers.co.uk/showroom",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers Ltd London - Hayes Flagship Showroom & Atelier Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hayes Flagship Showroom & Atelier Hub | Niraj Jewellers Ltd London",
    description:
      "Visit our working atelier at 136 Uxbridge Road, Hayes UB4 0JH.",
    images: ["/og-image.jpg"],
  },
};

export default function ShowroomPage() {
  const showroomJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.niraj-jewellers.co.uk",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Hayes Flagship Showroom & Atelier",
            item: "https://www.niraj-jewellers.co.uk/showroom",
          },
        ],
      },
      {
        "@type": ["JewelryStore", "LocalBusiness"],
        "@id": "https://www.niraj-jewellers.co.uk/showroom#place",
        name: "Niraj Jewellers Ltd Flagship Showroom & Atelier",
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
        hasMap: "https://maps.google.com/?q=136+Uxbridge+Road+Hayes+UB4+0JH",
        publicAccess: true,
        telephone: "+447955565137",
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
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(showroomJsonLd) }}
      />
      <ShowroomClientView />
    </>
  );
}
