import { Metadata } from "next";
import { SubpageNav } from "@/components/header/subpage-nav";
import { CadJourney } from "@/components/craftsmanship/cad-journey";
import { BespokeEstimator } from "@/components/estimator/bespoke-estimator";
import { Footer } from "@/components/footer/footer";
import { Sparkles, Compass, ShieldCheck, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Bespoke Jewellery & 3D CAD Commissions | Niraj Jewellers London",
  description: "Commission bespoke 22ct and 18ct bridal jewellery with Master Jeweller Viky. Experience 3D CAD modeling, loose GIA diamond inspection, and in-house gold casting in Hayes.",
};

export default function BespokePage() {
  const whatsappConsultLink = buildWhatsAppLink({
    source: "bespoke_page_hero",
    visitPurpose: "Custom Bespoke Commission Inquiry",
    customNote: "Hello Viky, I would like to discuss commissioning a bespoke jewellery piece with you.",
  });

  return (
    <div className="min-h-screen bg-obsidian text-platinum flex flex-col">
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
      </main>

      <Footer />
    </div>
  );
}
