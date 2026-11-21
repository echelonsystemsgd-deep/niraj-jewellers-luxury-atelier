"use client";

import React, { useState } from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { Eye, ShieldCheck, Sparkles } from "lucide-react";

export interface MasterpieceItem {
  id: string;
  title: string;
  category: "all" | "bridal" | "kadas" | "solitaires";
  categoryLabel: string;
  weight: string;
  purity: string;
  hallmark: string;
  image: string;
  description: string;
  defaultAlloy: "22ct" | "18ct" | "platinum";
}

const MASTERPIECES: MasterpieceItem[] = [
  {
    id: "imperial-polki-choker",
    title: "The Imperial Broad Mesh Polki Bridal Choker",
    category: "bridal",
    categoryLabel: "22ct Bridal",
    weight: "138.5g solid gold mass",
    purity: "22ct Royal Gold (916)",
    hallmark: "London Assay Leopard's Head · 916",
    image: "/images/collections/09f3084c-9c0e-49e0-a1dd-3d4c512907b1.jpeg",
    description: "Handcrafted 22ct gold lattice choker with natural Basra pearl fringe and syndicate uncut Polki diamonds.",
    defaultAlloy: "22ct",
  },
  {
    id: "jadau-bridal-collar",
    title: "The 22ct Jadau Polki Royal Collar & Jhumkas",
    category: "bridal",
    categoryLabel: "22ct Bridal",
    weight: "112.0g solid gold mass",
    purity: "22ct Royal Gold (916)",
    hallmark: "London Assay Leopard's Head · 916",
    image: "/images/collections/22ct-jadau-polki-bridal-choker.jpg",
    description: "Heirloom lost-wax bridal collar embedded with natural cabochon emeralds and uncut diamond polki.",
    defaultAlloy: "22ct",
  },
  {
    id: "solid-cast-kada",
    title: "The Sovereign Solid Cast 22ct Kada",
    category: "kadas",
    categoryLabel: "Solid Bands & Kadas",
    weight: "48.2g non-hollow gold mass",
    purity: "22ct Royal Gold (916)",
    hallmark: "London Assay Leopard's Head · 916",
    image: "/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb.jpeg",
    description: "Solid forged gold shank engineered with internal parabolic comfort bore. Generational family heirloom mass.",
    defaultAlloy: "22ct",
  },
  {
    id: "architectural-band",
    title: "The Platinum Monolith Signet Band",
    category: "kadas",
    categoryLabel: "Solid Bands & Kadas",
    weight: "26.8g dense platinum mass",
    purity: "950 Pure Platinum (950)",
    hallmark: "London Assay Orb & Cross · 950",
    image: "/images/collections/8cca104b-0936-4db2-82d0-92750aa40c0d.jpeg",
    description: "Brutalist beveled signet engineered for lifetime daily wear. Heavy non-tarnishing cold platinum luster.",
    defaultAlloy: "platinum",
  },
  {
    id: "solitaire-signet",
    title: "The Solitaire Cabochon & Diamond Seal",
    category: "solitaires",
    categoryLabel: "Polki & Solitaires",
    weight: "21.4g solid gold mass",
    purity: "18ct Rose Gold (750)",
    hallmark: "London Assay Leopard's Head · 750",
    image: "/images/collections/6993a897-24d0-4f1f-b8a8-06b2c0001dcb.jpeg",
    description: "Deep crimson cabochon center stone enveloped by microscope-seated brilliant-cut diamond claws.",
    defaultAlloy: "18ct",
  },
  {
    id: "kundan-emerald-suite",
    title: "The Royal Nizam Kundan Medallion Suite",
    category: "solitaires",
    categoryLabel: "Polki & Solitaires",
    weight: "94.6g solid gold mass",
    purity: "22ct Royal Gold (916)",
    hallmark: "London Assay Leopard's Head · 916",
    image: "/images/collections/9e9afd6e-1890-4467-9c3c-99fbdb640e4b.jpeg",
    description: "24ct gold foil encased natural gemstones suspended on hand-braided silk cord with solid gold tassels.",
    defaultAlloy: "22ct",
  },
];

interface ProductGridProps {
  onSelectPiece: (piece: MasterpieceItem) => void;
}

export function ProductGrid({ onSelectPiece }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: `[ ALL ARCHIVE (${MASTERPIECES.length}) ]` },
    { id: "bridal", label: `[ 22CT BRIDAL (2) ]` },
    { id: "kadas", label: `[ SOLID BANDS & KADAS (2) ]` },
    { id: "solitaires", label: `[ POLKI & SOLITAIRES (2) ]` },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? MASTERPIECES
      : MASTERPIECES.filter((item) => item.category === selectedCategory);

  const handleCategoryClick = (catId: string) => {
    sound.playTick();
    setSelectedCategory(catId);
  };

  const handleCardClick = (item: MasterpieceItem) => {
    sound.playTick();
    onSelectPiece(item);
  };

  return (
    <section id="archive" className="w-full bg-[#FAF9F5] border-b border-[#E7E2DA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7E2DA] pb-8 mb-10 gap-6">
          <div>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#7A705E] block mb-2">
              [ THE PERMANENT ARCHIVE ]
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141416] tracking-tight">
              Masterpieces in Permanent Metallurgy
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#57534E] max-w-md leading-relaxed">
            Every piece is cast in solid non-hollow precious metal at our Hayes bench. No gold plating.
            Hallmarked by the UK London Assay Office.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 font-mono text-[11px] tracking-[0.18em] uppercase">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryClick(cat.id)}
                className={`px-3.5 py-2 border transition-all cursor-pointer ${
                  isActive
                    ? "border-[#141416] bg-[#141416] text-[#FAF9F5]"
                    : "border-[#E7E2DA] bg-white text-[#57534E] hover:border-[#141416] hover:text-[#141416]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3-Column Hairline Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E7E2DA]">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="group border-r border-b border-[#E7E2DA] bg-white p-6 sm:p-8 flex flex-col justify-between hover:bg-[#FAF9F5] transition-colors cursor-pointer relative"
            >
              {/* Card Top: Category & Inspect Tag */}
              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-[#7A705E] mb-4">
                <span>[ {item.categoryLabel.toUpperCase()} ]</span>
                <span className="inline-flex items-center gap-1 text-[#C6A75E] opacity-90 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                  <Eye className="w-3 h-3" />
                  <span>[ 360° INSPECT ]</span>
                </span>
              </div>

              {/* Product Visual */}
              <div className="relative aspect-square w-full mb-6 overflow-hidden bg-[#F6F3ED] border border-[#E7E2DA]/60">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-[#141416]/0 group-hover:bg-[#141416]/10 transition-colors" />
              </div>

              {/* Card Details */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 font-mono text-[10px] text-[#C6A75E] tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{item.hallmark}</span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#141416] group-hover:text-[#C6A75E] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-[#57534E] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Specs Footer */}
                <div className="mt-4 pt-4 border-t border-[#E7E2DA] flex items-center justify-between font-mono text-xs">
                  <span className="text-[#141416] font-semibold">{item.weight}</span>
                  <span className="text-[#7A705E] text-[11px] underline underline-offset-4 group-hover:text-[#141416]">
                    RESERVE VIEWING →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export { MASTERPIECES };
