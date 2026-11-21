"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { WhatsAppIcon, LuxuryStarIcon, GoldsmithLoupeIcon, GoldsmithScalesIcon, HallmarkCrownIcon, WorkshopBenchIcon } from "@/components/icons/luxury-icons";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  // Smooth scroll listener for lightweight 0.1x subtle parallax
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappHeroLink = buildWhatsAppLink({
    intent: "general",
    customNote: "Hi Niraj Jewellers team, I would like to enquire about commissioning a bespoke jewellery piece at your Hayes atelier.",
  });

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 sm:pt-36 pb-12 sm:pb-24 overflow-hidden bg-[#FAF9F5] texture-ivory-paper">
      {/* 0. Ambient Diamond Motion Video Backdrop (Cropped & Scaled to Focus on Sparkling Diamonds) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true">
        <video
          src="/images/collections/0bda9709-3486-4146-b08c-9f05cc25ee4d.mp4"
          poster="/images/collections/posters/0bda9709-3486-4146-b08c-9f05cc25ee4d.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top opacity-20 sm:opacity-25 scale-125 sm:scale-135 filter contrast-125 mix-blend-multiply"
        />
        {/* Soft atmospheric gradient masks preserving ivory luxury palette & hiding bottom watermark */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5]/75 via-[#FAF9F5]/50 to-[#FAF9F5]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#FAF9F5_85%)]" />
      </div>

      {/* 1. Tactile Archival Paper Micro-Texture & Ambient Gold Radiance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Soft atmospheric warmth */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-br from-[#DFBF7A]/15 via-[#C5A059]/10 to-transparent rounded-full blur-[140px] opacity-70" />
        <div className="absolute top-8 right-8 w-[380px] h-[380px] bg-[#E8DEC8]/40 rounded-full blur-[110px]" />
        <div className="absolute bottom-8 left-8 w-[320px] h-[320px] bg-[#FAF0DC]/50 rounded-full blur-[100px]" />
      </div>

      {/* 2. Desktop Bakery-Style Artisan Flanking Objects (Left & Right Margins) */}
      {/* Left Flank: Precision Bench Tools & Velvet Consultation Tray */}
      <div
        className="hidden lg:block absolute -left-12 xl:left-4 top-1/2 -translate-y-1/2 w-64 xl:w-72 pointer-events-none select-none z-0 transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(0, calc(-50% + ${scrollY * 0.08}px), 0)`,
        }}
        aria-hidden="true"
      >
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-hammered-gold bg-white/40 backdrop-blur-sm -rotate-6 transform hover:rotate-0 transition-transform duration-700">
          <Image
            src="/images/workshop/workshop-bench-velvet-trays.jpg"
            alt="Handcrafted goldsmith consultation tray"
            fill
            sizes="288px"
            className="object-cover opacity-90 contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-center">
            <span className="inline-block px-3.5 py-1 rounded-full texture-hammered-gold text-[10px] font-mono tracking-wider text-[#141416] font-bold uppercase shadow-sm">
              Hayes Goldsmith Bench
            </span>
          </div>
        </div>
      </div>

      {/* Right Flank: Handcrafted 22ct Gold Bridal Masterwork */}
      <div
        className="hidden lg:block absolute -right-12 xl:right-4 top-1/2 -translate-y-1/2 w-64 xl:w-72 pointer-events-none select-none z-0 transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(0, calc(-50% + ${scrollY * -0.06}px), 0)`,
        }}
        aria-hidden="true"
      >
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-hammered-gold bg-white/40 backdrop-blur-sm rotate-6 transform hover:rotate-0 transition-transform duration-700">
          <Image
            src="/images/workshop/22ct-gold-filigree-bridal-suite.jpg"
            alt="Handcrafted 22ct gold filigree masterpiece"
            fill
            sizes="288px"
            className="object-cover opacity-90 contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-center">
            <span className="inline-block px-3.5 py-1 rounded-full texture-hammered-gold text-[10px] font-mono tracking-wider text-[#141416] font-bold uppercase shadow-sm">
              22ct Filigree Atelier
            </span>
          </div>
        </div>
      </div>

      {/* 3. Core Editorial Typography & Hero Interaction Area */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-5 sm:space-y-8">
          {/* Social Proof Pill (Overlapping Client Avatars + Google 5.0 Rating) */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full texture-hammered-card border-hammered-gold text-[#141416] text-[11px] sm:text-xs font-semibold tracking-wide shadow-sm max-w-full">
            {/* Overlapping Client Avatars */}
            <div className="flex items-center -space-x-2 shrink-0">
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border border-white shadow-xs">
                <Image src="/images/avatars/avatar-1.svg" alt="Client" fill className="object-cover" />
              </div>
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border border-white shadow-xs">
                <Image src="/images/avatars/avatar-2.svg" alt="Client" fill className="object-cover" />
              </div>
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border border-white shadow-xs">
                <Image src="/images/avatars/avatar-3.svg" alt="Client" fill className="object-cover" />
              </div>
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border border-white shadow-xs">
                <Image src="/images/avatars/avatar-4.svg" alt="Client" fill className="object-cover" />
              </div>
            </div>

            {/* 5 Gold Stars */}
            <div className="flex items-center gap-0.5 shrink-0">
              {[...Array(5)].map((_, i) => (
                <LuxuryStarIcon key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="#C5A059" />
              ))}
            </div>

            <span className="text-[#3D3C42] font-medium hidden sm:inline">•</span>
            <span className="font-bold text-[#8C6212] whitespace-nowrap">5.0 Rating</span>
            <span className="text-[#5A5960] hidden sm:inline">(140+ Google Reviews)</span>
          </div>

          {/* Cinematic Editorial Headline */}
          <div className="relative isolate">
            {/* Subtle Royal Crest Watermark behind text */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[480px] sm:h-[480px] pointer-events-none select-none z-0 opacity-15 sm:opacity-20 transition-all duration-500"
              style={{
                transform: `translate3d(-50%, calc(-50% + ${scrollY * 0.1}px), 0)`,
                willChange: "transform",
              }}
              aria-hidden="true"
            >
              <Image
                src="/NIRAJ_LOGO9.png"
                alt=""
                fill
                sizes="(max-width: 640px) 240px, 480px"
                className="object-contain filter drop-shadow-[0_4px_24px_rgba(212,175,55,0.15)]"
                priority
              />
            </div>

            <h1 className="relative z-10 font-serif text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#141416] leading-[1.15] sm:leading-[1.12]">
              London&apos;s Bespoke{" "}
              <span className="font-vivaldi text-[#996515] block sm:inline text-3xl sm:text-6xl md:text-7xl lg:text-8xl px-1 font-normal">
                Goldsmith Atelier
              </span>{" "}
              <span className="block sm:inline">&amp; Direct 22ct Gold</span>
            </h1>
          </div>

          {/* Specific Subtitle in UK English */}
          <p className="text-xs sm:text-base md:text-lg text-[#4A4A52] max-w-2xl mx-auto font-normal leading-relaxed px-1 sm:px-0">
            Handcrafted 22ct bridal suites, certified natural diamonds, and live bullion transactions forged on Uxbridge Road, Hayes. Direct master-goldsmith access without high-street retail markups.
          </p>

          {/* Mobile Bakery-Style Artisan Cutouts Duo (Visible on mobile & tablet, hidden on desktop) */}
          <div className="lg:hidden flex items-center justify-center gap-3 sm:gap-6 py-2 select-none" aria-hidden="true">
            {/* Mobile Left Cutout: Workshop Consultation Tray */}
            <div className="relative w-28 h-36 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shadow-xl border-2 border-hammered-gold bg-white -rotate-3 shrink-0">
              <Image
                src="/images/workshop/workshop-bench-velvet-trays.jpg"
                alt="Hayes goldsmith bench"
                fill
                sizes="(max-width: 640px) 112px, 160px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-1.5 left-1.5 right-1.5 text-center">
                <span className="inline-block px-2 py-0.5 rounded-full texture-hammered-gold text-[8px] sm:text-[10px] font-mono tracking-wider text-[#141416] font-bold uppercase shadow-sm">
                  Hayes Bench
                </span>
              </div>
            </div>

            {/* Mobile Right Cutout: 22ct Filigree Masterpiece */}
            <div className="relative w-28 h-36 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shadow-xl border-2 border-hammered-gold bg-white rotate-3 shrink-0">
              <Image
                src="/images/workshop/22ct-gold-filigree-bridal-suite.jpg"
                alt="Handcrafted 22ct gold jewellery"
                fill
                sizes="(max-width: 640px) 112px, 160px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-1.5 left-1.5 right-1.5 text-center">
                <span className="inline-block px-2 py-0.5 rounded-full texture-hammered-gold text-[8px] sm:text-[10px] font-mono tracking-wider text-[#141416] font-bold uppercase shadow-sm">
                  22ct Bridal
                </span>
              </div>
            </div>
          </div>

          {/* Dual Dedicated CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
            <a
              href="#collections"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#C5A059] via-[#DFBF7A] to-[#B88E3E] hover:from-[#B88E3E] hover:to-[#996515] text-[#141416] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
            >
              <span>Explore Masterpiece Showcase</span>
              <ArrowRight className="w-4 h-4 text-[#141416]" />
            </a>

            <a
              href={whatsappHeroLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 min-h-[48px]"
            >
              <WhatsAppIcon className="w-4 h-4" fill="white" />
              <span>WhatsApp Atelier Concierge</span>
            </a>
          </div>

          {/* 4 Sleek Trust Pills (Textured Hammered Gold Cards) */}
          <div className="pt-6 sm:pt-10 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10.5px] sm:text-xs">
            <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full texture-hammered-card border-hammered-gold text-[#3D3C42] shadow-sm">
              <HallmarkCrownIcon className="w-3.5 h-3.5 text-[#996515] shrink-0" />
              <span className="font-semibold text-[#141416] truncate">Heritage Atelier</span>
            </div>

            <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full texture-hammered-card border-hammered-gold text-[#3D3C42] shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#996515] shrink-0" />
              <span className="font-semibold text-[#141416] truncate">London Hallmarked</span>
            </div>

            <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full texture-hammered-card border-hammered-gold text-[#3D3C42] shadow-sm">
              <WorkshopBenchIcon className="w-3.5 h-3.5 text-[#996515] shrink-0" />
              <span className="font-semibold text-[#141416] truncate">100% In-House</span>
            </div>

            <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full texture-hammered-card border-hammered-gold text-[#3D3C42] shadow-sm">
              <GoldsmithScalesIcon className="w-3.5 h-3.5 text-[#996515] shrink-0" />
              <span className="font-semibold text-[#141416] truncate">Live Bullion Fix</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
