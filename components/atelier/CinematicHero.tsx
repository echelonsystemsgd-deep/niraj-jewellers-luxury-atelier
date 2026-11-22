"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ShieldCheck, Play, Pause, ArrowDown, Eye, Sparkles, MessageSquare } from "lucide-react";
import { sound } from "@/lib/sound";

interface FeaturedVideo {
  pieceId: string;
  title: string;
  category: string;
  purity: string;
  weight: string;
  hallmark: string;
  videoUrl: string;
  posterUrl: string;
  description: string;
}

const FEATURED_VIDEOS: FeaturedVideo[] = [
  {
    pieceId: "piece-4-chevron-v-collar-diamond-necklace",
    title: "The Chevron V-Collar Diamond Gala Necklace",
    category: "Haute Joaillerie Diamond Collar",
    purity: "18ct White & Rose Gold (750)",
    weight: "48.5g solid gold mass",
    hallmark: "London Assay 750 Stamped",
    videoUrl: "/images/collections/0bda9709-3486-4146-b08c-9f05cc25ee4d.mp4",
    posterUrl: "/images/collections/posters/0bda9709-3486-4146-b08c-9f05cc25ee4d.jpg",
    description: "Multi-row graduated V-shaped natural diamond collar necklace with a signature chevron front drop, hand-set in 18ct gold.",
  },
  {
    pieceId: "piece-6-crown-milgrain-beaded-diamond-band",
    title: "The Crown Milgrain Beaded Diamond Band",
    category: "Solid Gold & Diamond Bands",
    purity: "18ct Warm Gold (750)",
    weight: "28.4g solid gold mass",
    hallmark: "London Assay Leopard's Head · 750",
    videoUrl: "/images/collections/39b5ba11-da50-4ab0-bc84-3d952b8b2a8d.mp4",
    posterUrl: "/images/collections/posters/39b5ba11-da50-4ab0-bc84-3d952b8b2a8d.jpg",
    description: "Handcrafted band featuring dual beaded milgrain borders framing a central channel of micro-pavé diamonds.",
  },
  {
    pieceId: "piece-5-sovereign-shared-prong-eternity-band",
    title: "The Sovereign Shared-Prong Diamond Eternity Band",
    category: "950 Platinum & Diamonds",
    purity: "950 Pure Platinum",
    weight: "24.6g solid platinum mass",
    hallmark: "London Assay 950 Platinum Stamped",
    videoUrl: "/images/collections/259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0.mp4",
    posterUrl: "/images/collections/posters/259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0.jpg",
    description: "Continuous circle of shared-prong round brilliant natural diamonds set in solid 950 platinum with maximum light dispersion.",
  },
];

interface CinematicHeroProps {
  onInspectPiece: (pieceId: string) => void;
  onExploreVault: () => void;
}

export function CinematicHero({ onInspectPiece, onExploreVault }: CinematicHeroProps) {
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activePiece = FEATURED_VIDEOS[activeVideoIdx];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSelectReel = (idx: number) => {
    setActiveVideoIdx(idx);
    setIsPlaying(true);
  };

  return (
    <section className="relative w-full bg-[#FAF9F5] border-b border-[#E7E2DA] overflow-hidden">
      {/* Niche Artisan Side Framing on Wide Viewports (The Goldsmith Atelier Benchmark) */}
      <div className="hidden 2xl:block absolute left-4 top-1/2 -translate-y-1/2 w-32 pointer-events-none opacity-40 select-none">
        <div className="border border-[#E7E2DA] bg-white p-2.5 space-y-2 shadow-xs">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7F2]">
            <Image
              src="/images/workshop/workshop-bench-velvet-trays.jpg"
              alt="Goldsmith Bench Trays"
              fill
              className="object-cover grayscale"
            />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#7A705E] block text-center">
            BENCH TRAY
          </span>
        </div>
      </div>

      <div className="hidden 2xl:block absolute right-4 top-1/2 -translate-y-1/2 w-32 pointer-events-none opacity-40 select-none">
        <div className="border border-[#E7E2DA] bg-white p-2.5 space-y-2 shadow-xs">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7F2]">
            <Image
              src="/images/workshop/22ct-gold-filigree-bridal-suite.jpg"
              alt="22ct Gold Filigree Craft"
              fill
              className="object-cover grayscale"
            />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#7A705E] block text-center">
            22CT FILIGREE
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-18">
        {/* Top Header Badge & Social Proof Pill */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Social Proof Pill (Stacked Avatars + Rating + Review Count) */}
          <a
            href="https://share.google/UzzobueZI6BXs8GZQ"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playTick()}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 bg-white hover:border-[#141416] transition-all shadow-xs mb-4 cursor-pointer group"
          >
            <div className="flex -space-x-1.5 overflow-hidden">
              <div className="w-5 h-5 rounded-full bg-[#141416] text-[#C6A75E] font-bold text-[9px] flex items-center justify-center border border-white">
                V
              </div>
              <div className="w-5 h-5 rounded-full bg-[#C6A75E] text-[#141416] font-bold text-[9px] flex items-center justify-center border border-white">
                S
              </div>
              <div className="w-5 h-5 rounded-full bg-[#57534E] text-white font-bold text-[9px] flex items-center justify-center border border-white">
                P
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#141416]">
              <span className="text-[#C6A75E] tracking-tighter">★★★★★</span>
              <span>4.9</span>
              <span className="text-[#7A705E] font-normal">· 120+ Google &amp; Atelier Reviews</span>
            </div>
          </a>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141416] tracking-tight leading-[1.1] mb-4">
            Masterpieces in 22ct Gold. <br />
            <span className="font-light italic text-[#7A705E]">Forged for Generations.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#57534E] font-sans max-w-xl font-normal leading-relaxed mb-6">
            Authentic lost-wax casting, certified natural Polki diamonds, and heavy solid-mass kadas.
            Crafted on premises at 136 Uxbridge Road under London Assay hallmarking.
          </p>

          {/* Strictly 2 Clean, Decisive Primary CTAs (Zero phone line bloat below) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onExploreVault}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#141416] text-[#FAF9F5] hover:bg-[#C6A75E] hover:text-[#141416] transition-colors font-mono text-xs tracking-[0.2em] uppercase font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm border border-[#141416]"
            >
              <span>EXPLORE 3 CURATED MASTERPIECES</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>

            <a
              href="https://wa.me/447955565137?text=Hi%20Niraj%20Jewellers%2C%20I%20am%20enquiring%20about%20your%20bespoke%2022ct%20goldsmith%20commissions%20and%20bridal%20suites."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playTick()}
              className="w-full sm:w-auto px-7 py-3.5 border border-[#25D366] bg-[#25D366] hover:bg-[#1ebe5b] text-white transition-all font-mono text-xs tracking-[0.16em] uppercase font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white text-white" />
              <span>WHATSAPP CONCIERGE</span>
            </a>
          </div>

          {/* 4 Sleek Horizontal Trust Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] text-[#57534E]">
            <div className="px-3 py-1 bg-white border border-[#E7E2DA] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]" />
              <span>42-YEAR GOLDSMITH LINEAGE</span>
            </div>
            <div className="px-3 py-1 bg-white border border-[#E7E2DA] flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-[#C6A75E]" />
              <span>LONDON ASSAY LEOPARD&apos;S HEAD</span>
            </div>
            <div className="px-3 py-1 bg-white border border-[#E7E2DA] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]" />
              <span>100% IN-HOUSE BENCHWORK</span>
            </div>
            <div className="px-3 py-1 bg-white border border-[#E7E2DA] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]" />
              <span>DIRECT BULLION TRADE VALUE</span>
            </div>
          </div>
        </div>

        {/* Centerpiece: Real Product Video Vitrine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          {/* Left Column: Video Reel Selector Tabs */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-4">
            <div className="border border-[#E7E2DA] bg-white p-5">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#7A705E] block mb-3">
                [ FEATURED ATELIER REELS ]
              </span>
              <div className="flex flex-col gap-2">
                {FEATURED_VIDEOS.map((item, idx) => {
                  const isActive = activeVideoIdx === idx;
                  return (
                    <button
                      key={item.pieceId}
                      type="button"
                      onClick={() => handleSelectReel(idx)}
                      className={`text-left p-3 border transition-all cursor-pointer ${
                        isActive
                          ? "border-[#141416] bg-[#141416] text-[#FAF9F5]"
                          : "border-[#E7E2DA] bg-white text-[#141416] hover:border-[#A89F91]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-sm font-semibold tracking-wide">
                          {item.title}
                        </span>
                        <span
                          className={`text-[9px] font-mono uppercase px-1.5 py-0.5 ${
                            isActive
                              ? "bg-[#C6A75E] text-[#141416] font-bold"
                              : "bg-[#FAF9F5] text-[#7A705E]"
                          }`}
                        >
                          REEL {idx + 1}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-mono tracking-wider block mt-1 ${
                          isActive ? "text-[#C6A75E]" : "text-[#7A705E]"
                        }`}
                      >
                        {item.category} · {item.weight}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hallmarking Reassurance Card */}
            <div className="border border-[#E7E2DA] bg-white p-5 font-mono text-xs">
              <span className="text-[10px] text-[#7A705E] tracking-[0.2em] uppercase block mb-2">
                [ LONDON ASSAY STANDARD ]
              </span>
              <div className="flex items-center gap-2 text-[#141416] font-semibold mb-1">
                <ShieldCheck className="w-4 h-4 text-[#C6A75E]" />
                <span className="text-[11px]">{activePiece.hallmark}</span>
              </div>
              <p className="text-[11px] text-[#7A705E] font-sans mt-2 leading-relaxed">
                {activePiece.description}
              </p>
            </div>
          </div>

          {/* Center Column: Live Looping High-Definition Video Player */}
          <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col">
            {/* Top Micro-HUD */}
            <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.2em] text-[#7A705E] px-2 mb-2">
              <span>HAYES BENCH REEL [ 0{activeVideoIdx + 1} / 03 ]</span>
              <span className="text-[#C6A75E] flex items-center gap-1 font-semibold">
                1080P MASTERWORK RECORDING
              </span>
            </div>

            {/* Video Vitrine Frame with Hairline Border */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-none border border-[#141416] bg-[#0E0D0C] overflow-hidden shadow-2xl group">
              <video
                ref={videoRef}
                key={activePiece.videoUrl}
                src={activePiece.videoUrl}
                poster={activePiece.posterUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center filter brightness-105 contrast-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              {/* Bottom Video Badge & Info */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10">
                <div className="max-w-md">
                  <span className="font-mono text-[10px] text-[#C6A75E] tracking-[0.2em] uppercase block mb-1">
                    {activePiece.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-2xl text-white font-semibold leading-tight">
                    {activePiece.title}
                  </h3>
                  <div className="font-mono text-xs text-[#E8DEC8] mt-1">
                    CERTIFIED: {activePiece.weight}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleTogglePlay}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md border border-white/40 flex items-center justify-center transition-all cursor-pointer"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => onInspectPiece(activePiece.pieceId)}
                className="w-full sm:flex-1 py-3.5 bg-[#141416] text-[#FAF9F5] hover:bg-[#C6A75E] hover:text-[#141416] transition-colors font-mono text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-2 cursor-pointer border border-[#141416]"
              >
                <Eye className="w-4 h-4" />
                <span>INSPECT PIECE &amp; INQUIRE</span>
              </button>

              <button
                type="button"
                onClick={onExploreVault}
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#141416] border border-[#E7E2DA] hover:border-[#141416] transition-colors font-mono text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>3 CURATED PIECES</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
