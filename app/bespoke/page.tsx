import { Metadata } from "next";
import { SubpageNav } from "@/components/header/subpage-nav";
import { CadJourney } from "@/components/craftsmanship/cad-journey";
import { BespokeEstimator } from "@/components/estimator/bespoke-estimator";
import { SubpageFaq } from "@/components/faq/subpage-faq";
import { BESPOKE_FAQS } from "@/data/subpage-faqs-data";
import { Footer } from "@/components/footer/footer";
import { Sparkles, Compass, ShieldCheck, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Bespoke Jewellery & 3D CAD Commissions",
  description:
    "Commission bespoke 22ct and 18ct bridal jewellery with Master Jeweller Viky. Experience 3D CAD modeling, loose GIA diamond inspection, and in-house gold casting in Hayes.",
  alternates: {
    canonical: "https://nirajjewellers.co.uk/bespoke",
  },
  openGraph: {
    title: "Bespoke Jewellery & 3D CAD Commissions | Niraj Jewellers London",
    description:
      "Commission bespoke 22ct/18ct jewellery with Master Jeweller Viky. 3D CAD modeling, loose GIA diamond inspection & direct workshop casting in Hayes.",
    url: "https://nirajjewellers.co.uk/bespoke",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers London - Bespoke Jewellery & 3D CAD Commissions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Jewellery & 3D CAD Commissions | Niraj Jewellers London",
    description:
      "Commission bespoke 22ct and 18ct bridal jewellery with Master Jeweller Viky in Hayes.",
    images: ["/og-image.jpg"],
  },
};

export default function BespokePage() {
  const whatsappConsultLink = buildWhatsAppLink({
    source: "bespoke_page_hero",
    visitPurpose: "Custom Bespoke Commission Inquiry",
    customNote: "Hello Viky, I would like to discuss commissioning a bespoke jewellery piece with you.",
  });

  const bespokeJsonLd = {
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
            name: "Bespoke Jewellery Atelier",
            item: "https://nirajjewellers.co.uk/bespoke",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://nirajjewellers.co.uk/bespoke#service",
        name: "Bespoke 22ct & 18ct Jewellery Commissions",
        description:
          "Custom 3D CAD modeling, direct precious metal casting, London Assay Office hallmarking, and handmade gemstone setting by Master Jeweller Viky.",
        provider: {
          "@type": "JewelryStore",
          "@id": "https://nirajjewellers.co.uk/#jewelrystore",
          name: "Niraj Jewellers",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Greater London, Middlesex, UK Nationwide",
        },
        serviceType: "Custom Fine Jewellery Manufacturing",
      },
      {
        "@type": "HowTo",
        "@id": "https://nirajjewellers.co.uk/bespoke#cad-journey",
        name: "The 4-Step Goldsmith & 3D CAD Bespoke Journey",
        description:
          "Step-by-step master goldsmith workflow from preliminary consultation to photorealistic 3D CAD rendering, London Assay hallmarking, and final polish.",
        totalTime: "P14D",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Step 1: Direct Workshop Consultation",
            text: "Meet directly with Master Jeweller Viky at 136 Uxbridge Road to review sketches, Instagram photos, or loose GIA diamonds.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Step 2: Photorealistic 3D CAD & Wax Prototyping",
            text: "Receive high-resolution 360° video renders via WhatsApp and optional 3D resin finger-fitting models.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Step 3: Direct Casting & London Assay Hallmarking",
            text: "Induction casting in 22ct or 18ct gold, submitted to Goldsmiths' Hall for independent Leopard's Head hallmarking.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Step 4: Micro-Prong Setting & Showroom Handover",
            text: "Hand stone setting under 40x magnification, final mirror buffing, and champagne presentation in Hayes.",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-obsidian text-platinum flex flex-col">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bespokeJsonLd) }}
      />

      <SubpageNav currentTitle="Bespoke Atelier" />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Editorial Subpage Header */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-950/40 border border-gold-500/30 text-gold-300 text-xs uppercase tracking-widest font-mono">
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            <span>Direct Workshop Collaboration</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight max-w-4xl mx-auto">
            Bespoke 22ct Bridal &amp; Diamond Atelier
          </h1>
          <p className="text-sm sm:text-base text-platinum-muted max-w-2xl mx-auto leading-relaxed">
            Collaborate directly with Principal Goldsmith Viky on Uxbridge Road. Bring an Instagram photo, family heirloom sketch, or rough idea — we convert it into a photorealistic 3D CAD render and cast it in solid precious metal.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href={whatsappConsultLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-black font-semibold text-xs tracking-wide transition-all shadow-lg hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-black text-whatsapp" />
              <span>Start Bespoke Design on WhatsApp</span>
            </a>
          </div>
        </header>

        {/* 4-Step Goldsmith Journey */}
        <CadJourney />

        {/* Dynamic Budget & Turnaround Estimator */}
        <BespokeEstimator />

        {/* Contextual Subpage FAQ with Answer-First schema */}
        <SubpageFaq
          title="Bespoke Commission &amp; 3D CAD FAQs"
          subtitle="Clear answers on deposits, turnaround, London Assay Office hallmarking, and ancestral gold melting."
          items={BESPOKE_FAQS}
          pageSlug="bespoke"
        />
      </main>

      <Footer />
    </div>
  );
}
