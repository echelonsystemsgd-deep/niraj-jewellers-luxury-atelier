"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { WhatsAppIcon, LuxuryStarIcon, GoldsmithLoupeIcon, HallmarkCrownIcon, WorkshopBenchIcon } from "@/components/icons/luxury-icons";
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
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden bg-[#F6F1E9] texture-ivory-paper">
      {/* 1. Luminous Ambient Warmth & Archival Light Gradients (Zero Dark Blur) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Soft atmospheric golden warmth without muddy dark vignettes */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#DFBF7A]/12 via-[#E8DCC8]/20 to-transparent rounded-full blur-[120px] opacity-80" />
        <div className="absolute top-12 right-12 w-[420px] h-[420px] bg-[#E8DCC8]/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-12 left-12 w-[380px] h-[380px] bg-[#FAF7F2]/60 rounded-full blur-[90px]" />
      </div>

      {/* 2. Desktop Artisan Flanking Frames (Far margins only on large screens, >= 1280px) */}
      <div
        className="hidden xl:block absolute -left-10 2xl:left-6 top-1/2 -translate-y-1/2 w-64 pointer-events-none select-none z-0 transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(0, calc(-50% + ${scrollY * 0.06}px), 0)`,
        }}
        aria-hidden="true"
      >
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-2 border-[#C6A75E]/60 bg-[#FAF7F2] -rotate-6 transform hover:rotate-0 transition-transform duration-700">
          <Image
            src="/images/workshop/workshop-bench-velvet-trays.jpg"
            alt="Handcrafted goldsmith consultation tray"
            fill
            unoptimized
            priority
            sizes="256px"
            className="object-cover opacity-90 contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#1F2A44] border border-[#C6A75E]/60 text-xs font-sans tracking-wider text-[#FAF7F2] font-semibold uppercase shadow-sm">
              Hayes Goldsmith Bench
            </span>
          </div>
        </div>
      </div>

      <div
        className="hidden xl:block absolute -right-10 2xl:right-6 top-1/2 -translate-y-1/2 w-64 pointer-events-none select-none z-0 transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(0, calc(-50% + ${scrollY * -0.05}px), 0)`,
        }}
        aria-hidden="true"
      >
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-2 border-[#C6A75E]/60 bg-[#FAF7F2] rotate-6 transform hover:rotate-0 transition-transform duration-700">
          <Image
            src="/images/workshop/22ct-gold-filigree-bridal-suite.jpg"
            alt="Handcrafted 22ct gold filigree masterpiece"
            fill
            unoptimized
            priority
            sizes="256px"
            className="object-cover opacity-90 contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#1F2A44] border border-[#C6A75E]/60 text-xs font-sans tracking-wider text-[#FAF7F2] font-semibold uppercase shadow-sm">
              22ct Filigree Atelier
            </span>
          </div>
        </div>
      </div>

      {/* 3. Core Editorial Typography & Hero Interaction Area */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {/* Social Proof Pill (Overlapping Client Avatars + Google 5.0 Rating) */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#FAF7F2] border border-[#C6A75E]/50 text-[#1F2A44] text-[11px] sm:text-xs font-semibold tracking-wide shadow-xs max-w-full">
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
                <LuxuryStarIcon key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="#C6A75E" />
              ))}
            </div>

            <span className="text-[#C6A75E] font-medium hidden sm:inline">•</span>
            <span className="font-bold text-[#1F2A44] whitespace-nowrap">5.0 Rating</span>
            <span className="text-[#1F2A44]/75 hidden sm:inline">(140+ Google Reviews)</span>
          </div>

          {/* Cinematic Editorial Headline */}
          <div className="relative isolate">
            {/* Subtle Royal Crest Watermark behind text */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[420px] sm:h-[420px] pointer-events-none select-none z-0 opacity-10 transition-all duration-500"
              style={{
                transform: `translate3d(-50%, calc(-50% + ${scrollY * 0.08}px), 0)`,
                willChange: "transform",
              }}
              aria-hidden="true"
            >
              <Image
                src="/NIRAJ_LOGO9.png"
                alt=""
                fill
                sizes="(max-width: 640px) 220px, 420px"
                className="object-contain"
                priority
              />
            </div>

            <h1 className="relative z-10 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#1F2A44] leading-[1.14]">
              London&apos;s Bespoke{" "}
              <span className="font-script text-[#C6A75E] block sm:inline text-4xl sm:text-6xl md:text-7xl lg:text-8xl px-2 font-normal">
                Goldsmith Atelier
              </span>{" "}
              <span className="block sm:inline">&amp; Direct 22ct Gold</span>
            </h1>
          </div>

          {/* Specific Subtitle in UK English with 11.7:1 AAA Contrast */}
          <p className="text-xs sm:text-base md:text-lg text-[#1F2A44]/80 max-w-2xl mx-auto font-normal leading-relaxed px-1 sm:px-0">
            Handcrafted 22ct bridal suites, certified natural diamonds, and live bullion transactions forged on Uxbridge Road, Hayes. Direct master-goldsmith access without high-street retail markups.
          </p>

          {/* 4. The Live Looping Jewellery Masterpiece Vitrine (Visible on Desktop & Mobile) */}
          <div className="relative w-full max-w-xl sm:max-w-2xl mx-auto pt-2 pb-1">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#C6A75E] shadow-2xl bg-[#0F0F12] group">
              <video
                src="/images/collections/0bda9709-3486-4146-b08c-9f05cc25ee4d.mp4"
                poster="/images/collections/posters/0bda9709-3486-4146-b08c-9f05cc25ee4d.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center filter brightness-110 contrast-120 group-hover:scale-102 transition-transform duration-700"
              />
              {/* Subtle edge illumination gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35 pointer-events-none" />

              {/* Top Live Badge */}
              <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10 flex items-center gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#1F2A44]/80 backdrop-blur-md border border-[#C6A75E]/60 text-white text-[10px] sm:text-xs font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-[#E8DCC8]">Live Atelier Loop:</span>
                <span className="text-[#C6A75E] font-bold">22ct Diamond Masterpiece</span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex items-center justify-between text-[10px] sm:text-xs text-white/95">
                <span className="font-serif italic tracking-wide text-[#FAF7F2] drop-shadow-sm">
                  Hand-set Syndicate Diamonds &amp; Chased 22ct Gold
                </span>
                <span className="hidden sm:inline-block font-sans text-xs uppercase text-[#C6A75E] tracking-wider font-semibold">
                  136 Uxbridge Road • Hayes
                </span>
              </div>
            </div>
          </div>

          {/* Dual Dedicated CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
            <a
              href="#collections"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#C6A75E] hover:bg-[#b5954a] text-[#1F2A44] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
            >
              <span>Explore Masterpiece Showcase</span>
              <ArrowRight className="w-4 h-4 text-[#1F2A44]" />
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

          {/* 3 Sleek Trust Pills (Ivory Cards with Soft Gold Hairlines & Navy Font) */}
          <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10.5px] sm:text-xs">
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#FAF7F2] border border-[#C6A75E]/50 text-[#1F2A44] shadow-xs">
              <HallmarkCrownIcon className="w-3.5 h-3.5 text-[#C6A75E] shrink-0" />
              <span className="font-semibold text-[#1F2A44] truncate">Heritage Atelier</span>
            </div>

            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#FAF7F2] border border-[#C6A75E]/50 text-[#1F2A44] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C6A75E] shrink-0" />
              <span className="font-semibold text-[#1F2A44] truncate">London Hallmarked</span>
            </div>

            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#FAF7F2] border border-[#C6A75E]/50 text-[#1F2A44] shadow-xs">
              <WorkshopBenchIcon className="w-3.5 h-3.5 text-[#C6A75E] shrink-0" />
              <span className="font-semibold text-[#1F2A44] truncate">100% In-House</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
