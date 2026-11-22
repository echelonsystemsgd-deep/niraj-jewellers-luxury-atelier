"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { COLLECTIONS_DATA, CollectionItem } from "@/data/collections-data";
import { ShowroomDossierModal } from "@/components/atelier/ShowroomDossierModal";
import { Search, Play, ShieldCheck, Sparkles } from "lucide-react";

interface CollectionGridProps {
  isHomepage?: boolean;
  items?: CollectionItem[];
}

export function CollectionGrid({ items }: CollectionGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mediaFilter, setMediaFilter] = useState<"all" | "video" | "image">("all");
  const [selectedPiece, setSelectedPiece] = useState<CollectionItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allItems = useMemo(
    () => (items && items.length > 0 ? items : COLLECTIONS_DATA),
    [items]
  );

  const categories = useMemo(() => {
    return [
      { id: "all", label: `ALL PIECES (${allItems.length})` },
      { id: "bridal", label: "22CT BRIDAL" },
      { id: "22ct-gold", label: "SOLID GOLD & KADAS" },
      { id: "polki-heritage", label: "POLKI & KUNDAN" },
      { id: "rings", label: "RINGS & SOLITAIRES" },
    ];
  }, [allItems.length]);

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      // Category match
      const matchesCategory =
        selectedCategory === "all" ||
        item.category.toLowerCase().includes(selectedCategory.toLowerCase());

      // Media filter match
      const matchesMedia = mediaFilter === "all" || item.mediaType === mediaFilter;

      // Search match with intelligent jewelry synonyms
      const q = searchQuery.toLowerCase().trim();
      const synonyms: Record<string, string[]> = {
        kada: ["kada", "bangle", "band", "cuff", "bracelet"],
        kadas: ["kada", "bangle", "band", "cuff", "bracelet"],
        bangle: ["bangle", "kada", "cuff", "band"],
        bangles: ["bangle", "kada", "cuff", "band"],
        necklace: ["necklace", "choker", "collar", "suite", "lariat"],
        choker: ["choker", "collar", "necklace", "suite"],
        emerald: ["emerald", "zambian", "melon"],
        ruby: ["ruby", "rubies", "crimson"],
        polki: ["polki", "kundan", "jadau"],
      };

      const searchTerms = [q, ...(synonyms[q] || [])];
      const matchesSearch =
        !q ||
        searchTerms.some(
          (term) =>
            item.title.toLowerCase().includes(term) ||
            item.description.toLowerCase().includes(term) ||
            item.category.toLowerCase().includes(term) ||
            item.tags.some((tag) => tag.toLowerCase().includes(term))
        );

      return matchesCategory && matchesMedia && matchesSearch;
    });
  }, [allItems, selectedCategory, mediaFilter, searchQuery]);

  const handleOpenPiece = (piece: CollectionItem) => {
    setSelectedPiece(piece);
    setIsModalOpen(true);
  };

  return (
    <section id="vault" className="w-full bg-[#FAF9F5] border-b border-[#E7E2DA] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className={`px-3.5 py-2 border transition-all cursor-pointer text-[11px] uppercase tracking-wider font-mono ${
                    isActive
                      ? "border-[#141416] bg-[#141416] text-[#FAF9F5] font-semibold shadow-xs"
                      : "border-[#E7E2DA] bg-white text-[#57534E] hover:border-[#141416] hover:text-[#141416]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar & Media Filter */}
          <div className="flex items-center gap-2.5">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#7A705E]" />
              <input
                type="text"
                placeholder="Search 54 bespoke pieces..."
                aria-label="Search 54 bespoke pieces by title, category, or gemstone"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-2 border border-[#E7E2DA] bg-white text-xs text-[#141416] focus:outline-none focus:border-[#141416] placeholder:text-[#A89F91]"
              />
            </div>

            <select
              value={mediaFilter}
              onChange={(e) => setMediaFilter(e.target.value as "all" | "video" | "image")}
              className="border border-[#E7E2DA] bg-white px-3 py-2 text-[11px] text-[#57534E] uppercase focus:outline-none focus:border-[#141416] font-mono cursor-pointer"
              aria-label="Filter vault pieces by media type"
            >
              <option value="all">ALL MEDIA</option>
              <option value="video">VIDEOS ONLY</option>
              <option value="image">PHOTOS ONLY</option>
            </select>
          </div>
        </div>

        {/* Results Counter Bar */}
        <div className="font-mono text-[11px] text-[#7A705E] uppercase tracking-wider mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-[#E7E2DA] pb-3">
          <span>SHOWING {filteredItems.length} OF {allItems.length} CERTIFIED ATELIER PIECES</span>
          <span>100% IN-HOUSE HAYES BENCHWORK · LONDON ASSAY STAMPED</span>
        </div>

        {/* 3-Column Hairline Architectural Grid (Zero Tag Clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E7E2DA]">
          {filteredItems.map((item) => {
            const massText = item.specs.weight || item.specs.carat || item.metalPurity.split("(")[0].trim();
            return (
              <article
                key={item.id}
                onClick={() => handleOpenPiece(item)}
                className="group border-r border-b border-[#E7E2DA] bg-white p-6 sm:p-7 flex flex-col justify-between hover:bg-[#FAF9F5] transition-colors cursor-pointer relative"
              >
                <div>
                  {/* Card Header: Category & Media Badge (No redundant tags) */}
                  <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-[#7A705E] mb-3">
                    <span className="uppercase text-[#C6A75E] font-semibold truncate max-w-[180px]">
                      [ {item.metalPurity.split("(")[0].replace(/&.*$/, "").trim().toUpperCase()} ]
                    </span>
                    {item.mediaType === "video" ? (
                      <span className="inline-flex items-center gap-1 text-[#C6A75E] bg-[#C6A75E]/10 px-2 py-0.5 font-semibold">
                        <Play className="w-2.5 h-2.5 fill-current" />
                        <span>1080P REEL</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[#7A705E]">
                        <span>STILL PHOTOGRAPHY</span>
                      </span>
                    )}
                  </div>

                  {/* Clean Visual Container (NO tag overlays, NO eye icon, NO motion badge) */}
                  <div className="relative aspect-square w-full mb-5 overflow-hidden bg-[#F6F3ED] border border-[#E7E2DA]/60">
                    <Image
                      src={item.thumbnailUrl}
                      alt={item.title}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Subtle Hover Inspect Tag */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-[#141416]/90 backdrop-blur-md text-[#FAF9F5] px-3 py-1 font-mono text-[10px] tracking-wider uppercase">
                      INSPECT DOSSIER ⊙
                    </div>
                  </div>

                  {/* Card Meta Content (Clean, Honest, Zero AI Slop) */}
                  <div className="space-y-2">
                    <div className="font-mono text-[11px] text-[#7A705E] tracking-wider">
                      {item.metalPurity} · <strong className="text-[#141416] font-semibold">{massText}</strong>
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-[#141416] group-hover:text-[#C6A75E] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs text-[#57534E] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Specs Footer: Mass & Direct Link */}
                <div className="mt-6 pt-4 border-t border-[#E7E2DA] flex items-center justify-between font-mono text-xs">
                  <span className="text-[#141416] font-semibold text-[11px]">
                    {item.specs.weight ? item.specs.weight : "Hayes Workshop"}
                  </span>
                  <span className="text-[#C6A75E] text-[11px] font-semibold underline underline-offset-4 group-hover:text-[#141416] transition-colors">
                    INSPECT DOSSIER →
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Showroom Dossier Modal (Single top-right close button, 100% visible on mobile) */}
        <ShowroomDossierModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          piece={selectedPiece}
        />
      </div>
    </section>
  );
}
