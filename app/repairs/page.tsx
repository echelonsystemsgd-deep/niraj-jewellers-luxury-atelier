import { Metadata } from "next";
import { SubpageNav } from "@/components/header/subpage-nav";
import { RepairsBento } from "@/components/repairs/repairs-bento";
import { HallmarkGuide } from "@/components/trust/hallmark-guide";
import { Footer } from "@/components/footer/footer";
import { Wrench, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import { buildWhatsAppLink, NIRAJ_DISPLAY_PHONE } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "In-House Jewellery Repairs & Laser Resizing Hayes | Niraj Jewellers",
  description: "Same-day ring resizing, diamond claw retipping, laser soldering, and ultrasonic restoration carried out on-site in our Hayes workshop by Master Jeweller Viky.",
};

export default function RepairsPage() {
  const whatsappRepairLink = buildWhatsAppLink({
    source: "repairs_page_header",
    visitPurpose: "In-House Jewellery Repair / Resizing",
    customNote: "Hello Viky, I need an in-house repair quote for my jewellery. Could you let me know when I can bring it in to your Hayes workshop?",
  });

  return (
    <div className="min-h-screen bg-obsidian text-platinum flex flex-col">
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
      </main>

      <Footer />
    </div>
  );
}
