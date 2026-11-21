"use client";

import React from "react";
import { ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import { sound } from "@/lib/sound";

export function LiveGoldTicker() {
  const handleTickerClick = () => {
    sound.playTick();
  };

  return (
    <div className="w-full bg-[#141416] text-[#FAF9F5] border-b border-[#2C2825] text-[11px] sm:text-xs tracking-[0.16em] uppercase font-mono py-2 px-4 select-none overflow-hidden relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Live Bench Status Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6A75E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6A75E]"></span>
          </span>
          <span className="text-[#C6A75E] font-semibold hidden sm:inline">LIVE BENCH RATE:</span>
          <span className="text-[#C6A75E] font-semibold sm:hidden">BENCH RATE:</span>
        </div>

        {/* Center: Live Rate Ticker */}
        <div className="flex-1 overflow-x-auto no-scrollbar whitespace-nowrap flex items-center justify-center gap-6 text-[#A89F91]">
          <span className="inline-flex items-center gap-1.5 text-[#FAF9F5]">
            <TrendingUp className="w-3 h-3 text-[#C6A75E]" />
            <span>22ct (916):</span>
            <strong className="text-[#FAF9F5] font-bold">£68.40/g</strong>
          </span>

          <span className="text-[#3E3A36]">·</span>

          <span className="inline-flex items-center gap-1.5">
            <span>24ct (999.9 Bullion):</span>
            <strong className="text-[#FAF9F5] font-bold">£74.20/g</strong>
          </span>

          <span className="text-[#3E3A36] hidden md:inline">·</span>

          <span className="hidden md:inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3 h-3 text-[#C6A75E]" />
            <span>London Assay Leopard's Head Hallmarked</span>
          </span>

          <span className="text-[#3E3A36] hidden lg:inline">·</span>

          <span className="hidden lg:inline-flex items-center gap-1.5 text-[#E8DEC8]">
            <Sparkles className="w-3 h-3 text-[#C6A75E]" />
            <span>Hayes Workshop: Open Until 18:00</span>
          </span>
        </div>

        {/* Right: Quick Action Link */}
        <div className="shrink-0 flex items-center gap-3">
          <a
            href="https://wa.me/447955565137?text=Hi%20Niraj%20Jewellers%2C%20I%20am%20inquiring%20about%20today%27s%20live%20gold%20rate%20and%20bullion%20availability."
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleTickerClick}
            className="text-[#C6A75E] hover:text-[#FAF9F5] transition-colors underline decoration-[#C6A75E]/40 underline-offset-4 hidden sm:inline"
          >
            LOCK BENCH RATE ↗
          </a>
        </div>
      </div>
    </div>
  );
}
