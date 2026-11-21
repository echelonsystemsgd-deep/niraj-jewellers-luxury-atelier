import { Metadata } from "next";
import { AtelierClientView } from "@/components/atelier/AtelierClientView";

export const metadata: Metadata = {
  title: "Niraj Jewellers Ltd | Master Goldsmith Atelier & 22ct Bridal Flagship Hayes London",
  description:
    "Official digital flagship for Niraj Jewellers Ltd (Est. 1984). Explore our curated 54-piece 22ct Royal Gold vault, handcrafted bridal chokers, same-day workshop repairs, and Hayes showroom.",
  openGraph: {
    title: "Niraj Jewellers Ltd | Master Goldsmith Atelier & 22ct Bridal Flagship",
    description:
      "Curated 54-piece 22ct Royal Gold vault, syndicate Polki bridal suites, and London Assay hallmarking at 136 Uxbridge Road, Hayes.",
    url: "https://www.niraj-jewellers.co.uk",
    siteName: "Niraj Jewellers Ltd",
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://www.niraj-jewellers.co.uk",
  },
};

export default function Home() {
  return <AtelierClientView />;
}
