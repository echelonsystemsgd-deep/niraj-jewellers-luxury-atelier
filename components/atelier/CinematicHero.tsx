"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ShieldCheck, Play, Pause, ArrowDown, Eye, CheckCircle2, Sparkles } from "lucide-react";

interface FeaturedVideo {
  id: string;
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
    id: "polki-bridal-suite",
    title: "The Imperial Broad Mesh Polki Suite",
    category: "22ct Bridal Choker & Jhumkas",
    purity: "22ct Royal Gold (916)",
    weight: "138.5g solid cast mass",
    hallmark: "London Assay Leopard's Head · 916",
    videoUrl: "/images/collections/0bda9709-3486-4146-b08c-9f05cc25ee4d.mp4",
    posterUrl: "/images/collections/posters/0bda9709-3486-4146-b08c-9f05cc25ee4d.jpg",
    description: "22ct yellow gold Kundan Polki lattice bridal choker necklace with cascading natural pearl fringe and matching bell jhumka earrings handcrafted on Hayes benches.",
  },
  {
    id: "royal-emerald-collar",
    title: "The Royal Emerald & Diamond Choker",
    category: "Syndicate Polki & Gemstones",
    purity: "22ct Royal Gold (916)",
    weight: "112.0g solid cast mass",
    hallmark: "London Assay Leopard's Head · 916",
    videoUrl: "/images/collections/39b5ba11-da50-4ab0-bc84-3d952b8b2a8d.mp4",
    posterUrl: "/images/collections/posters/39b5ba11-da50-4ab0-bc84-3d952b8b2a8d.jpg",
    description: "Natural cabochon emerald centerpiece enveloped by syndicate uncut Polki diamonds and suspended south sea pearls.",
  },
  {
    id: "calcutta-filigree",
    title: "The Calcutta Micro-Filigree Bridal Collar",
    category: "Handcrafted Filigree",
    purity: "22ct Royal Gold (916)",
    weight: "96.4g solid gold mass",
    hallmark: "London Assay Leopard's Head · 916",
    videoUrl: "/images/collections/86e9bedc-c2df-4ad8-81f5-a2f038596d60.mp4",
    posterUrl: "/images/collections/posters/86e9bedc-c2df-4ad8-81f5-a2f038596d60.jpg",
    description: "Intricate micro-wire lace collar cast in pure 22ct yellow gold with hand-set floral motifs and diamond cuts.",
  },
  {
    id: "solid-kada",
    title: "The Sovereign Solid Cast 22ct Kada",
    category: "Solid Bangles & Kadas",
    purity: "22ct Royal Gold (916)",
    weight: "48.2g non-hollow mass",
    hallmark: "London Assay Leopard's Head · 916",
    videoUrl: "/images/collections/259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0.mp4",
    posterUrl: "/images/collections/posters/259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0.jpg",
    description: "Generational solid non-hollow gold bangle engineered with parabolic comfort-fit inner bore for lifetime durability.",
  },
];

interface CinematicHeroProps {
  onInspectPiece: (pieceTitle: string) => void;
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        {/* Top Header Badge */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 border border-[#E7E2DA] bg-white text-[#7A705E] font-mono text-[10px] sm:text-[11px] tracking-[0.24em] uppercase mb-4 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#C6A75E]" />
            <span>BESPOKE GOLDSMITH BENCHWORK · HAYES · EST. 1984</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141416] tracking-tight leading-[1.1] mb-4">
            Masterpieces in 22ct Gold. <br />
            <span className="font-light italic text-[#7A705E]">Forged for Generations.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#57534E] font-sans max-w-xl font-normal leading-relaxed">
            Authentic lost-wax casting, certified natural Polki diamonds, and heavy solid-mass kadas.
            Crafted on premises at 136 Uxbridge Road under London Assay hallmarking.
          </p>
        </div>

        {/* Centerpiece: Real Product Video Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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
                      key={item.id}
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
            <div className="w-full flex items-center justify-between font-mono text-[11px] tracking-[0.2em] text-[#7A705E] px-2 mb-2">
              <span>HAYES BENCH REEL [ 0{activeVideoIdx + 1} / 04 ]</span>
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

              {/* Gradient Overlays for Architectural Restraint */}
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

                {/* Play/Pause Control Button */}
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
                onClick={() => onInspectPiece(activePiece.title)}
                className="w-full sm:flex-1 py-3.5 bg-[#141416] text-[#FAF9F5] hover:bg-[#C6A75E] hover:text-[#141416] transition-colors font-mono text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-2 cursor-pointer border border-[#141416]"
              >
                <Eye className="w-4 h-4" />
                <span>INSPECT PIECE & BOOK VIEWING</span>
              </button>

              <button
                type="button"
                onClick={onExploreVault}
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#141416] border border-[#E7E2DA] hover:border-[#141416] transition-colors font-mono text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>54-PIECE VAULT</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
