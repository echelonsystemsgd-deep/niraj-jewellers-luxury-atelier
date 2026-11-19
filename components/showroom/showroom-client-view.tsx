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
    customNote: "Hi Niraj Jewellers team, I would like to visit your Hayes showroom at 136 Uxbridge Road. Could you advise on consultation availability?",
  });

  return (
    <div className="min-h-screen bg-white text-[#141416] flex flex-col">
      <SubpageNav currentTitle="Hayes Flagship Showroom" />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Editorial Subpage Header */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/50 text-[#8C6212] text-xs uppercase tracking-widest font-bold shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#996515]" />
            <span>136 Uxbridge Road, Hayes UB4 0JH</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141416] font-normal tracking-tight max-w-4xl mx-auto">
            The Hayes Flagship Showroom &amp; Atelier
          </h1>
          <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal">
            Step directly into our working West London goldsmith atelier
          </p>
          <p className="text-sm sm:text-base text-[#4A4A52] max-w-2xl mx-auto leading-relaxed">
            Step directly into our working atelier. Inspect certified loose diamonds under digital microscopes, try on bridal suites, and speak face-to-face with our master goldsmiths.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href={whatsappShowroomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Message Atelier Before Visiting</span>
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
