"use client";

import { SubpageNav } from "@/components/header/subpage-nav";
import { ShowroomHub } from "@/components/showroom/showroom-hub";
import { ReviewsSection } from "@/components/trust/reviews-section";
import { Footer } from "@/components/footer/footer";
import { MapPin, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function ShowroomClientView() {
  const whatsappShowroomLink = buildWhatsAppLink({
    intent: "general",
    customNote: "Hi Viky, I would like to visit your Hayes showroom at 136 Uxbridge Road. Could you advise on availability?",
  });

  return (
    <div className="min-h-screen bg-obsidian text-platinum flex flex-col">
      <SubpageNav currentTitle="Hayes Flagship Showroom" />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Editorial Subpage Header */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-950/40 border border-gold-500/30 text-gold-300 text-xs uppercase tracking-widest font-mono">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>136 Uxbridge Road, Hayes UB4 0JH</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight max-w-4xl mx-auto">
            The Hayes Flagship Showroom &amp; Atelier
          </h1>
          <p className="text-sm sm:text-base text-platinum-muted max-w-2xl mx-auto leading-relaxed">
            Step directly into our working atelier. Inspect certified loose diamonds under digital microscopes, try on bridal suites, and speak face-to-face with Master Jeweller Viky.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href={whatsappShowroomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-lg hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-black text-whatsapp" />
              <span>Message Viky Before Visiting</span>
            </a>
          </div>
        </header>

        {/* Showroom Hub Component */}
        <ShowroomHub />

        {/* Verified Reviews Section */}
        <ReviewsSection />
      </main>

      <Footer />
    </div>
  );
}
