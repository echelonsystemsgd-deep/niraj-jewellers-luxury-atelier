"use client";

import { MessageCircle, Sparkles, ShieldCheck, ArrowRight, Award, Compass } from "lucide-react";
import { buildWhatsAppLink, NIRAJ_DISPLAY_PHONE } from "@/lib/whatsapp";

interface HeroSectionProps {
  onOpenBookingModal?: () => void;
}

export function HeroSection({ onOpenBookingModal }: HeroSectionProps) {
  const whatsappHeroLink = buildWhatsAppLink({
    source: "hero_primary_cta",
    customNote: "Hello Viky, I would like to enquire about creating a bespoke piece at Niraj Jewellers.",
  });

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-obsidian">
      {/* Background Ambient Glow & Light Beams */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gold-500/10 rounded-full blur-[140px] opacity-70" />
        <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-amber-600/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.15),rgba(9,9,11,0))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Subtle Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-atelier-light border border-gold-500/30 text-gold-300 text-xs tracking-widest uppercase font-medium shadow-inner animate-in fade-in duration-700">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Master Goldsmiths • 136 Uxbridge Road, Hayes</span>
            <span className="hidden sm:inline text-atelier-border">•</span>
            <span className="hidden sm:inline text-platinum-muted">Direct Workshop Access</span>
          </div>

          {/* Main Cinematic Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.1] sm:leading-[1.12]">
            London&apos;s Bespoke{" "}
            <span className="font-normal italic gold-gradient-text block sm:inline">
              Goldsmith Atelier
            </span>{" "}
            &amp; Direct Gold Wholesaler
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-platinum-muted max-w-2xl mx-auto font-light leading-relaxed">
            From majestic 22ct bridal suites handcrafted in our Hayes workshop to certified natural diamonds and wholesale gold bullion. Direct master-jeweller access with no high-street retail markups.
          </p>

          {/* Dual CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto sm:max-w-none">
            <a
              href="#estimator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-obsidian font-bold text-sm tracking-wide uppercase shadow-lg shadow-gold-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
            >
              <span>Design Your Bespoke Piece</span>
              <ArrowRight className="w-4 h-4 text-obsidian" />
            </a>

            <a
              href={whatsappHeroLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-atelier hover:bg-atelier-light border border-whatsapp/40 text-whatsapp hover:text-white font-semibold text-sm tracking-wide transition-all shadow-md transform hover:-translate-y-0.5 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 fill-whatsapp text-transparent" />
              <span>Chat with Viky on WhatsApp</span>
            </a>
          </div>

          {/* Speed-of-reply Reassurance Badge */}
          <p className="text-xs text-platinum-muted/80 flex items-center justify-center gap-2 pt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Direct Workshop Line: Speak with Viky within 15 Minutes ({NIRAJ_DISPLAY_PHONE})</span>
          </p>

          {/* Trust Value Badges Grid */}
          <div className="pt-8 sm:pt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="p-4 rounded-xl bg-atelier/80 border border-atelier-border backdrop-blur-sm">
              <div className="flex items-center gap-2.5 mb-1.5 text-gold-400">
                <Award className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Heritage</span>
              </div>
              <p className="text-xs text-platinum-muted">Decades of authentic South Asian &amp; British goldsmithing heritage.</p>
            </div>

            <div className="p-4 rounded-xl bg-atelier/80 border border-atelier-border backdrop-blur-sm">
              <div className="flex items-center gap-2.5 mb-1.5 text-gold-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">100% Hallmarked</span>
              </div>
              <p className="text-xs text-platinum-muted">Official London Assay Office hallmarked 22ct (916) and 18ct (750).</p>
            </div>

            <div className="p-4 rounded-xl bg-atelier/80 border border-atelier-border backdrop-blur-sm">
              <div className="flex items-center gap-2.5 mb-1.5 text-gold-400">
                <Compass className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">In-House Only</span>
              </div>
              <p className="text-xs text-platinum-muted">Crafted &amp; repaired on Uxbridge Road. Never outsourced to third parties.</p>
            </div>

            <div className="p-4 rounded-xl bg-atelier/80 border border-atelier-border backdrop-blur-sm">
              <div className="flex items-center gap-2.5 mb-1.5 text-gold-400">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Wholesale Advantage</span>
              </div>
              <p className="text-xs text-platinum-muted">Direct bullion &amp; diamond sourcing without middleman retail margins.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
