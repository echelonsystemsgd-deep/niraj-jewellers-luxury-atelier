"use client";

import React from "react";
import Link from "next/link";
import { COLLECTIONS_DATA, CollectionItem } from "@/data/collections-data";
import { ArrowRight, Sparkles } from "lucide-react";

interface ProductGridProps {
  onSelectPiece: (piece: CollectionItem) => void;
}

// Exactly 3 authentic video pieces from the Hayes atelier vault
const CURATED_VIDEO_IDS = [
  "piece-4-chevron-v-collar-diamond-necklace",
  "piece-6-crown-milgrain-beaded-diamond-band",
  "piece-5-sovereign-shared-prong-eternity-band",
];

export function ProductGrid({ onSelectPiece }: ProductGridProps) {
  // Grab the exact 3 video pieces with complete metadata
  const featuredPieces: CollectionItem[] = CURATED_VIDEO_IDS.map((id) => {
    return (
      COLLECTIONS_DATA.find((item) => item.id === id) ||
      COLLECTIONS_DATA.find((item) => item.mediaType === "video") ||
      COLLECTIONS_DATA[0]
    );
  });

  return (
    <section id="vault" className="w-full bg-[#FAF9F5] border-b border-[#E7E2DA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7E2DA] pb-8 mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#7A705E] mb-2">
              <Sparkles className="w-3 h-3 text-[#C6A75E]" />
              <span>[ 01 / CURATED BENCH MASTERPIECES ]</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141416] tracking-tight">
              Curated Masterpieces &amp; Bridal Suites
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#57534E] max-w-md leading-relaxed">
            Recorded directly from our Hayes goldsmith bench. Three signature solid-cast creations engineered with zero hollow stamping, fully hallmarked by the UK London Assay Office.
          </p>
        </div>

        {/* 3-Column Hairline Architectural Grid: 3 Looping Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E7E2DA]">
          {featuredPieces.map((item, index) => {
            const massText = item.specs.weight || "Solid Cast";
            return (
              <article
                key={item.id}
                onClick={() => onSelectPiece(item)}
                className="group border-r border-b border-[#E7E2DA] bg-white p-6 sm:p-7 flex flex-col justify-between hover:bg-[#FAF9F5] transition-colors cursor-pointer relative"
              >
                <div>
                  {/* Card Header: Category & Benchmark Number (No redundant tags) */}
                  <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-[#7A705E] mb-4">
                    <span className="uppercase text-[#C6A75E] font-semibold">
                      [ {item.metalPurity.split("(")[0].trim().toUpperCase()} ]
                    </span>
                    <span className="text-[#A89F91]">0{index + 1} / 03</span>
                  </div>

                  {/* Looping Video Showcase (Autoplay, Loop, Muted, PlaysInline) */}
                  <div className="relative aspect-square w-full mb-5 overflow-hidden bg-[#0E0D0C] border border-[#E7E2DA]/60">
                    {item.videoUrl ? (
                      <video
                        src={item.videoUrl}
                        poster={item.thumbnailUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <img
                        src={item.thumbnailUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    )}

                    {/* Subtle Hover Inspect Tag */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-[#141416]/90 backdrop-blur-md text-[#FAF9F5] px-3 py-1 font-mono text-[10px] tracking-wider uppercase">
                      INSPECT DOSSIER ⊙
                    </div>
                  </div>

                  {/* Clean Metadata: Title & Concise Artisan Description */}
                  <div className="space-y-2">
                    <div className="font-mono text-[11px] text-[#7A705E] tracking-wider">
                      {item.metalPurity} · <strong className="text-[#141416] font-semibold">{massText}</strong>
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-[#141416] group-hover:text-[#C6A75E] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs text-[#57534E] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Specs Footer */}
                <div className="mt-6 pt-4 border-t border-[#E7E2DA] flex items-center justify-between font-mono text-xs">
                  <span className="text-[#141416] font-medium text-[11px]">
                    Hayes Workshop
                  </span>
                  <span className="text-[#C6A75E] text-[11px] font-semibold underline underline-offset-4 group-hover:text-[#141416] transition-colors">
                    RESERVE BENCH VIEWING →
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Complete 54-Piece Vault Link Button */}
        <div className="mt-12 text-center border-t border-[#E7E2DA] pt-10">
          <div className="max-w-xl mx-auto space-y-4">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#7A705E] block">
              [ 54 BESPOKE PIECES AUDITED ON HAYES BENCHES ]
            </span>
            <Link
              href="/collections"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#141416] hover:bg-[#C6A75E] text-[#FAF9F5] hover:text-[#141416] font-mono text-xs tracking-[0.18em] uppercase font-bold transition-all duration-300 shadow-md group min-h-[46px]"
            >
              <span>View Complete 54-Piece Showroom Vault</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-xs font-sans text-[#7A705E] leading-relaxed">
              Explore our full collection of 22ct bridal suites, Polki Kundan chokers, solid gold kadas, and certified diamond rings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
