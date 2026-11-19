import type { Metadata } from "next";
import { ShowroomClientView } from "@/components/showroom/showroom-client-view";

export const metadata: Metadata = {
  title: "Hayes Flagship Showroom & Atelier Hub",
  description:
    "Visit our working atelier at 136 Uxbridge Road, Hayes UB4 0JH. Direct diamond viewing, bespoke consultations & free customer parking guidance.",
  alternates: {
    canonical: "https://nirajjewellers.co.uk/showroom",
  },
  openGraph: {
    title: "Hayes Flagship Showroom & Atelier Hub | Niraj Jewellers London",
    description:
      "Visit our working atelier at 136 Uxbridge Road, Hayes UB4 0JH. Direct diamond viewing, bespoke consultations & free customer parking.",
    url: "https://nirajjewellers.co.uk/showroom",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers London - Hayes Flagship Showroom & Atelier Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hayes Flagship Showroom & Atelier Hub | Niraj Jewellers London",
    description:
      "Visit our working atelier at 136 Uxbridge Road, Hayes UB4 0JH.",
    images: ["/og-image.jpg"],
  },
};

export default function ShowroomPage() {
  return <ShowroomClientView />;
}
