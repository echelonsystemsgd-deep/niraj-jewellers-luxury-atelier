"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { COLLECTIONS_DATA, CollectionItem } from "@/data/collections-data";
import { Eye, ShieldCheck, Play, Search, Filter } from "lucide-react";

interface ProductGridProps {
  onSelectPiece: (piece: CollectionItem) => void;
}

export function ProductGrid({ onSelectPiece }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mediaFilter, setMediaFilter] = useState<"all" | "video" | "image">("all");

  const categories = [
    { id: "all", label: `ALL PIECES (54)` },
    { id: "bridal", label: `22CT BRIDAL` },
    { id: "22ct-gold", label: `SOLID GOLD & KADAS` },
    { id: "polki-heritage", label: `POLKI & KUNDAN` },
    { id: "rings", label: `RINGS & SOLITAIRES` },
  ];

  const filteredItems = useMemo(() => {
    return COLLECTIONS_DATA.filter((item) => {
      // Category match
      const matchesCategory =
        selectedCategory === "all" ||
        item.category.toLowerCase().includes(selectedCategory.toLowerCase());

      // Media filter match
      const matchesMedia = mediaFilter === "all" || item.mediaType === mediaFilter;

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesMedia && matchesSearch;
    });
  }, [selectedCategory, mediaFilter, searchQuery]);

  return (
    <section id="vault" className="w-full bg-[#FAF9F5] border-b border-[#E7E2DA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7E2DA] pb-8 mb-8 gap-6">
          <div>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#7A705E] block mb-2">
              [ THE COMPLETE 54-PIECE ATELIER VAULT ]
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141416] tracking-tight">
              Curated Masterpieces & Bridal Suites
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#57534E] max-w-md leading-relaxed">
            Every piece is visually audited and documented from our Hayes workshop. 100% solid-cast non-hollow
            mass hallmarked by the UK London Assay Office.
          </p>
        </div>

        {/* Filter Toolbar: Categories, Search & Media Type */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 font-mono text-xs">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 border transition-all cursor-pointer text-[11px] uppercase tracking-wider ${
                    isActive
                      ? "border-[#141416] bg-[#141416] text-[#FAF9F5] font-semibold"
                      : "border-[#E7E2DA] bg-white text-[#57534E] hover:border-[#141416] hover:text-[#141416]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar & Media Filter */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#7A705E]" />
              <input
                type="text"
                placeholder="Search 54 pieces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 border border-[#E7E2DA] bg-white text-xs text-[#141416] focus:outline-none focus:border-[#141416] placeholder:text-[#A89F91]"
              />
            </div>

            <select
              value={mediaFilter}
              onChange={(e) => setMediaFilter(e.target.value as "all" | "video" | "image")}
              className="border border-[#E7E2DA] bg-white px-2.5 py-1.5 text-[11px] text-[#57534E] uppercase focus:outline-none focus:border-[#141416]"
              aria-label="Filter by media type"
            >
              <option value="all">ALL MEDIA</option>
              <option value="video">VIDEOS ONLY</option>
              <option value="image">PHOTOS ONLY</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="font-mono text-[11px] text-[#7A705E] uppercase tracking-wider mb-6 flex items-center justify-between">
          <span>SHOWING {filteredItems.length} OF {COLLECTIONS_DATA.length} CERTIFIED PIECES</span>
          <span>100% UNIQUE ATELIER ASSETS</span>
        </div>

        {/* 3-Column Hairline Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E7E2DA]">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              onClick={() => onSelectPiece(item)}
              className="group border-r border-b border-[#E7E2DA] bg-white p-6 sm:p-7 flex flex-col justify-between hover:bg-[#FAF9F5] transition-colors cursor-pointer relative"
            >
              <div>
                {/* Card Top: Category & Media Badge */}
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-[#7A705E] mb-3">
                  <span className="uppercase">[ {item.category} ]</span>
                  {item.mediaType === "video" ? (
                    <span className="inline-flex items-center gap-1 text-[#C6A75E] bg-[#C6A75E]/10 px-1.5 py-0.5 font-semibold">
                      <Play className="w-2.5 h-2.5 fill-current" />
                      <span>1080P REEL</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[#7A705E]">
                      <span>STILL PHOTOGRAPHY</span>
                    </span>
                  )}
                </div>

                {/* Product Visual */}
                <div className="relative aspect-square w-full mb-5 overflow-hidden bg-[#F6F3ED] border border-[#E7E2DA]/60">
                  <Image
                    src={item.thumbnailUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#141416]/0 group-hover:bg-[#141416]/10 transition-colors" />

                  {/* Hover Inspect Tag */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-[#141416]/90 backdrop-blur-md text-[#FAF9F5] px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase">
                    INSPECT DOSSIER ⊙
                  </div>
                </div>

                {/* Card Details */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#C6A75E] tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{item.hallmarkText || item.metalPurity}</span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-[#141416] group-hover:text-[#C6A75E] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-[#57534E] line-clamp-2 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Specs Footer (Zero Pricing Mentioned) */}
              <div className="mt-5 pt-4 border-t border-[#E7E2DA] flex items-center justify-between font-mono text-xs">
                <span className="text-[#141416] font-semibold text-[11px]">
                  {item.specs.weight ? item.specs.weight : item.metalPurity}
                </span>
                <span className="text-[#C6A75E] text-[11px] font-semibold underline underline-offset-4 group-hover:text-[#141416] transition-colors">
                  RESERVE VIEWING →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
