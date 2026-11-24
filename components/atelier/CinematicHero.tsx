"use client";

import React from "react";
import { ArrowDown, MessageSquare } from "lucide-react";
import { sound } from "@/lib/sound";

interface CinematicHeroProps {
  onInspectPiece?: (pieceId: string) => void;
  onExploreVault: () => void;
}

export function CinematicHero({ onExploreVault }: CinematicHeroProps) {
  return (
    <section className="relative w-full bg-[#FAF9F5] border-b border-[#E7E2DA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        {/* Top Header Badge & Social Proof Pill */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Social Proof Pill (Stacked Avatars + Rating + Review Count) */}
          <a
            href="https://share.google/UzzobueZI6BXs8GZQ"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playTick()}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[#D4AF37]/50 bg-white hover:border-[#141416] transition-all shadow-xs mb-6 cursor-pointer group"
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
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#141416] font-sans">
              <span className="text-[#C6A75E] tracking-tighter">★★★★★</span>
              <span>4.9</span>
              <span className="text-[#7A705E] font-normal">· 120+ Google &amp; Atelier Reviews</span>
            </div>
          </a>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141416] tracking-tight leading-[1.1] mb-5">
            Masterpieces in 22ct Gold. <br />
            <span className="font-light italic text-[#7A705E]">Forged for Generations.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#57534E] font-sans max-w-xl font-normal leading-relaxed mb-8">
            Authentic lost-wax casting, certified natural Polki diamonds, and heavy solid-mass kadas.
            Crafted on premises at 136 Uxbridge Road under London Assay hallmarking.
          </p>

          {/* Clean Decisive Primary CTAs with Refined Sans-Serif */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onExploreVault}
              className="w-full sm:w-auto px-8 py-4 bg-[#141416] text-[#FAF9F5] hover:bg-[#C6A75E] hover:text-[#141416] transition-colors font-sans text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm border border-[#141416]"
            >
              <span>Explore 3 Curated Masterpieces</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>

            <a
              href="https://wa.me/447955565137?text=Hi%20Niraj%20Jewellers%2C%20I%20am%20enquiring%20about%20your%20bespoke%2022ct%20goldsmith%20commissions%20and%20bridal%20suites."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playTick()}
              className="w-full sm:w-auto px-8 py-4 border border-[#25D366] bg-[#25D366] hover:bg-[#1ebe5b] text-white transition-all font-sans text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white text-white" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
