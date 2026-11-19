import type { Metadata } from "next";
import { ContactClientView } from "@/components/contact/contact-client-view";

export const metadata: Metadata = {
  title: "Contact & Direct WhatsApp Concierge | Niraj Jewellers Ltd London",
  description:
    "Connect directly with our atelier team on WhatsApp (+44 7955 565137) or visit 136 Uxbridge Road, Hayes. Instant replies & bespoke consultations.",
  alternates: {
    canonical: "https://www.niraj-jewellers.co.uk/contact",
  },
  openGraph: {
    title: "Contact & Direct WhatsApp Concierge | Niraj Jewellers Ltd London",
    description:
      "Speak directly with our atelier team on WhatsApp (+44 7955 565137). In-house bespoke consultations at 136 Uxbridge Road, Hayes.",
    url: "https://www.niraj-jewellers.co.uk/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers Ltd London - Contact & Direct WhatsApp Concierge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Direct WhatsApp Concierge | Niraj Jewellers Ltd London",
    description:
      "Connect directly with Niraj Jewellers Ltd. 136 Uxbridge Road, Hayes.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  const contactJsonLd = {
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
            name: "Contact & Atelier Concierge",
            item: "https://www.niraj-jewellers.co.uk/contact",
          },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": "https://www.niraj-jewellers.co.uk/contact#webpage",
        url: "https://www.niraj-jewellers.co.uk/contact",
        name: "Contact Niraj Jewellers Ltd Atelier London",
        mainEntity: {
          "@type": "JewelryStore",
          "@id": "https://www.niraj-jewellers.co.uk/#jewelrystore",
          name: "Niraj Jewellers Ltd",
          telephone: "+447955565137",
          email: "nirajjewellersuk@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "136 Uxbridge Road",
            addressLocality: "Hayes",
            addressRegion: "Middlesex, Greater London",
            postalCode: "UB4 0JH",
            addressCountry: "GB",
          },
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactClientView />
    </>
  );
}
