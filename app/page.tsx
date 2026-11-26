import { Metadata } from "next";
import { AtelierClientView } from "@/components/atelier/AtelierClientView";

export const metadata: Metadata = {
  title: "Niraj Jewellers Ltd | Master Goldsmith Atelier & 22ct Bridal Flagship Hayes London",
  description:
    "Official digital flagship for Niraj Jewellers Ltd (Est. 1984). Explore our curated 54-piece 22ct Royal Gold vault, handcrafted bridal chokers, same-day workshop repairs, and Hayes showroom.",
  alternates: {
    canonical: "https://www.niraj-jewellers.co.uk",
  },
  openGraph: {
    title: "Niraj Jewellers Ltd | Master Goldsmith Atelier & 22ct Bridal Flagship",
    description:
      "Curated 54-piece 22ct Royal Gold vault, syndicate Polki bridal suites, and London Assay hallmarking at 136 Uxbridge Road, Hayes.",
    url: "https://www.niraj-jewellers.co.uk",
    siteName: "Niraj Jewellers Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.niraj-jewellers.co.uk/og-image.jpg",
        secureUrl: "https://www.niraj-jewellers.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Niraj Jewellers Ltd London - Master Goldsmith Atelier & 22ct Bridal Flagship",
      },
      {
        url: "https://www.niraj-jewellers.co.uk/og-image.png",
        secureUrl: "https://www.niraj-jewellers.co.uk/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Niraj Jewellers Ltd London - Master Goldsmith Atelier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niraj Jewellers Ltd | Master Goldsmith Atelier & 22ct Bridal Flagship Hayes London",
    description:
      "Official digital flagship for Niraj Jewellers Ltd (Est. 1984). Explore our curated 54-piece 22ct Royal Gold vault, handcrafted bridal chokers, same-day workshop repairs, and Hayes showroom.",
    site: "@nirajjewellers",
    creator: "@nirajjewellers",
    images: [
      {
        url: "https://www.niraj-jewellers.co.uk/og-image.jpg",
        alt: "Niraj Jewellers Ltd London - Master Goldsmith Atelier & 22ct Bridal Flagship",
      },
    ],
  },
};

export default function Home() {
  return <AtelierClientView />;
}
