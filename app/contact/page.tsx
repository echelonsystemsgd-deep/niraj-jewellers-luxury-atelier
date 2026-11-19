import type { Metadata } from "next";
import { ContactClientView } from "@/components/contact/contact-client-view";

export const metadata: Metadata = {
  title: "Contact & VIP WhatsApp Concierge",
  description:
    "Connect directly with Master Goldsmith Viky on WhatsApp (+44 7955 565137) or visit 136 Uxbridge Road, Hayes. Instant replies & bespoke consultations.",
  alternates: {
    canonical: "https://nirajjewellers.co.uk/contact",
  },
  openGraph: {
    title: "Contact & VIP WhatsApp Concierge | Niraj Jewellers London",
    description:
      "Speak directly with Principal Goldsmith Viky on WhatsApp (+44 7955 565137). In-house bespoke consultations at 136 Uxbridge Road, Hayes.",
    url: "https://nirajjewellers.co.uk/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers London - Contact & VIP WhatsApp Concierge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & VIP WhatsApp Concierge | Niraj Jewellers London",
    description:
      "Connect directly with Master Goldsmith Viky. 136 Uxbridge Road, Hayes.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return <ContactClientView />;
}
