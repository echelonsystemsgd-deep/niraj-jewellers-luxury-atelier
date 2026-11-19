"use client";

import { MessageCircle, Sparkles, ShieldCheck, ArrowRight, Award, Compass, Phone } from "lucide-react";
import { buildWhatsAppLink, NIRAJ_UK_PHONE, NIRAJ_DISPLAY_PHONE } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappHeroLink = buildWhatsAppLink({
    intent: "general",
    customNote: "Hi Niraj Jewellers team, I would like to enquire about commissioning a bespoke jewellery piece at your Hayes atelier.",
  });

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-32 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF7F2]">
      {/* Background Ambient Warm Gold Radiance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#DFBF7A]/20 via-[#C5A059]/10 to-transparent rounded-full blur-[140px] opacity-75" />
        <div className="absolute top-12 right-10 w-[400px] h-[400px] bg-[#E8DEC8]/50 rounded-full blur-[110px]" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#FAF0DC]/60 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Subtle Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 text-[#8C6212] text-xs tracking-widest uppercase font-semibold shadow-sm animate-in fade-in duration-700">
            <Sparkles className="w-3.5 h-3.5 text-[#996515]" />
            <span>Master Goldsmiths • 136 Uxbridge Road, Hayes</span>
            <span className="hidden sm:inline text-[#D4AF37]/60">•</span>
            <span className="hidden sm:inline text-[#5A5960]">Direct Workshop Access</span>
          </div>

          {/* Main Cinematic Headline featuring Vivaldi Flourish */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#141416] leading-[1.12] sm:leading-[1.15]">
            London&apos;s Bespoke{" "}
            <span className="font-vivaldi text-[#996515] block sm:inline text-5xl sm:text-7xl md:text-8xl px-1 font-normal">
              Goldsmith Atelier
            </span>{" "}
            <span className="block sm:inline">&amp; Direct Gold Wholesaler</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#4A4A52] max-w-2xl mx-auto font-normal leading-relaxed">
            From majestic 22ct bridal suites handcrafted in our Hayes workshop to certified natural diamonds and wholesale gold bullion. Direct master-goldsmith access with no high-street retail markups.
          </p>

          {/* Dual CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto sm:max-w-none">
            <a
              href="#collections"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#C5A059] via-[#DFBF7A] to-[#B88E3E] hover:from-[#B88E3E] hover:to-[#996515] text-[#141416] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg shadow-[#C5A059]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
            >
              <span>Explore Masterpiece Showcase</span>
              <ArrowRight className="w-4 h-4 text-[#141416]" />
            </a>

            <a
              href={whatsappHeroLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#25D366]/60 text-[#128C7E] hover:text-[#075E54] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366] text-transparent" />
              <span>WhatsApp Atelier Concierge</span>
            </a>
          </div>

          {/* Speed-of-reply Reassurance Badge with Direct Phone */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-3 text-xs text-[#5A5960]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Direct Workshop Line: Speak with our Goldsmith Team within 15 Minutes</span>
            </span>
            <span className="hidden sm:inline text-[#D4AF37]">•</span>
            <a href={`tel:${NIRAJ_UK_PHONE.replace(/\s+/g, "")}`} className="font-mono font-bold text-[#141416] hover:text-[#996515] underline underline-offset-2 flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#996515]" />
              <span>{NIRAJ_UK_PHONE}</span>
            </a>
          </div>

          {/* Trust Value Badges Grid */}
          <div className="pt-8 sm:pt-12 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 text-left">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8DEC8] shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all">
              <div className="flex items-center gap-2 mb-2 text-[#996515]">
                <Award className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Heritage</span>
              </div>
              <p className="text-xs text-[#5A5960] leading-relaxed">Over 40 years of authentic British &amp; South Asian master goldsmithing.</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8DEC8] shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all">
              <div className="flex items-center gap-2 mb-2 text-[#996515]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">100% Hallmarked</span>
              </div>
              <p className="text-xs text-[#5A5960] leading-relaxed">Official London Assay Office hallmarked 22ct (916) and 18ct (750).</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8DEC8] shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all">
              <div className="flex items-center gap-2 mb-2 text-[#996515]">
                <Compass className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">In-House Only</span>
              </div>
              <p className="text-xs text-[#5A5960] leading-relaxed">Crafted &amp; repaired on Uxbridge Road. Never outsourced to third parties.</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8DEC8] shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all">
              <div className="flex items-center gap-2 mb-2 text-[#996515]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Wholesale Value</span>
              </div>
              <p className="text-xs text-[#5A5960] leading-relaxed">Direct bullion &amp; diamond sourcing without middleman retail markups.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
