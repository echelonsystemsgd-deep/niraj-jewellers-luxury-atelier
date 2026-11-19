import { Metadata } from "next";
import { SubpageNav } from "@/components/header/subpage-nav";
import { RepairsBento } from "@/components/repairs/repairs-bento";
import { HallmarkGuide } from "@/components/trust/hallmark-guide";
import { SubpageFaq } from "@/components/faq/subpage-faq";
import { REPAIRS_FAQS } from "@/data/subpage-faqs-data";
import { REPAIR_SERVICES } from "@/data/repairs-data";
import { Footer } from "@/components/footer/footer";
import { Wrench, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import { buildWhatsAppLink, NIRAJ_DISPLAY_PHONE } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Same-Day In-House Jewellery Repairs Hayes",
  description:
    "Same-day ring resizing, laser gold soldering, claw retipping, ultrasonic cleaning & watch servicing at 136 Uxbridge Road workshop. Work done on-site by Master Jeweller Viky.",
  alternates: {
    canonical: "https://nirajjewellers.co.uk/repairs",
  },
  openGraph: {
    title: "Same-Day In-House Jewellery Repairs Hayes | Niraj Jewellers",
    description:
      "Same-day ring resizing, diamond claw retipping & laser restoration at our 136 Uxbridge Road Hayes workshop. Direct goldsmith service.",
    url: "https://nirajjewellers.co.uk/repairs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers London - Same-Day In-House Jewellery Repairs Hayes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Same-Day In-House Jewellery Repairs Hayes | Niraj Jewellers",
    description:
      "Same-day ring resizing, laser soldering, and diamond claw retipping in Hayes.",
    images: ["/og-image.jpg"],
  },
};

export default function RepairsPage() {
  const whatsappRepairLink = buildWhatsAppLink({
    source: "repairs_page_header",
    visitPurpose: "In-House Jewellery Repair / Resizing",
    customNote: "Hello Viky, I need an in-house repair quote for my jewellery. Could you let me know when I can bring it in to your Hayes workshop?",
  });

  const repairsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://nirajjewellers.co.uk",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "In-House Jewellery Repairs",
            item: "https://nirajjewellers.co.uk/repairs",
          },
        ],
      },
      ...REPAIR_SERVICES.map((srv) => ({
        "@type": "Service",
        "@id": `https://nirajjewellers.co.uk/repairs#${srv.id}`,
        name: srv.title,
        description: srv.summary,
        provider: {
          "@type": "JewelryStore",
          "@id": "https://nirajjewellers.co.uk/#jewelrystore",
          name: "Niraj Jewellers",
        },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "GBP",
            description: srv.pricingHint,
          },
        },
        serviceOutput: "Restored fine jewellery with London Assay hallmark intact",
        termsOfService: "Completed on-site at 136 Uxbridge Road, Hayes workshop",
      })),
    ],
  };

  return (
    <div className="min-h-screen bg-obsidian text-platinum flex flex-col">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(repairsJsonLd) }}
      />

      <SubpageNav currentTitle="In-House Workshop Repairs" />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Editorial Subpage Header */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-950/40 border border-gold-500/30 text-gold-300 text-xs uppercase tracking-widest font-mono">
            <Wrench className="w-3.5 h-3.5 text-gold-400" />
            <span>On-Site Hayes Goldsmith Benches</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight max-w-4xl mx-auto">
            Precision In-House Repairs &amp; Restoration
          </h1>
          <p className="text-sm sm:text-base text-platinum-muted max-w-2xl mx-auto leading-relaxed">
            Your precious heirlooms never leave our premises. Unlike high-street jewelers who courier your rings to third-party factories, all work is executed on Uxbridge Road with same-day turnaround available.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappRepairLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-black font-semibold text-xs tracking-wide transition-all shadow-lg hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-black text-whatsapp" />
              <span>Send Photo for Fast Repair Estimate</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs text-gold-400/90 font-medium">
            <span>⚡ Same-Day Ring Resizing (While You Wait)</span>
            <span>⚡ Pulse Laser Micro-Soldering</span>
            <span>⚡ Calibrated Trade-Approved Gold Scales</span>
          </div>
        </header>

        {/* Repairs Bento Component */}
        <RepairsBento />

        {/* London Assay Hallmarking Trust Guide */}
        <HallmarkGuide />

        {/* Contextual Subpage FAQ for Repairs */}
        <SubpageFaq
          title="In-House Jewellery Repair FAQs"
          subtitle="Clear answers on same-day ring resizing, laser pulse welding, gemstone safety, and workshop turnaround."
          items={REPAIRS_FAQS}
          pageSlug="repairs"
        />
      </main>

      <Footer />
    </div>
  );
}
