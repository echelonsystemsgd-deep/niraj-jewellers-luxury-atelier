"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, ArrowUpRight, Award, Gem, CheckCircle2, Eye } from "lucide-react";
import { COLLECTIONS_DATA, CollectionItem } from "@/data/collections-data";
import { ReelModal } from "./reel-modal";

interface CollectionGridProps {
  isHomepage?: boolean;
}

export function CollectionGrid({ isHomepage = false }: CollectionGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);

  // Top 3 Masterpieces for Homepage Showcase
  const topThreeMasterpieces: CollectionItem[] = [
    COLLECTIONS_DATA[0], // The Nizam Ruby & Basra Pearl Polki Choker
    COLLECTIONS_DATA[2], // The Calcutta Filigree 22ct Gold Bridal Suite
    COLLECTIONS_DATA[3], // The Chandbali Carved Zambian Emerald Melon Choker
  ];

  const categories = [
    { id: "all", label: "All Masterpieces (16)" },
    { id: "bridal", label: "Bridal Suites" },
    { id: "rings", label: "Bespoke Rings" },
    { id: "22ct-gold", label: "22ct Gold & Kadas" },
    { id: "polki-heritage", label: "Polki & Heritage" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? COLLECTIONS_DATA
      : COLLECTIONS_DATA.filter((item) => item.category === activeCategory);

  const displayedItems = isHomepage ? topThreeMasterpieces : filteredItems;

  return (
    <section id="collections" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Ambient background gold glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DFBF7A]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#996515]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {isHomepage ? "Flagship Atelier Showcase • Top 3 Masterpieces" : "Complete Showroom Vault & Craft Portfolio"}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight">
              Master Goldsmith Craftsmanship
            </h2>
            <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal">
              Hand-forged on Uxbridge Road, Hallmarked by London Assay
            </p>
            <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed pt-1">
              {isHomepage
                ? "Selected from our private commission archives. Hand-forged in solid 22ct imperial gold, adorned with certified natural gemstones and uncut Syndicate Polki."
                : "Explore our complete repertoire of handcrafted 22ct bridal sets, certified natural diamond engagement rings, solid gold kadas, and antique Polki heirlooms."}
            </p>
          </div>

          {/* Social Proof Linkout */}
          <div className="flex items-center gap-3">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] text-xs font-semibold text-[#141416] hover:text-[#996515] transition-all shadow-sm group"
            >
              <Sparkles className="w-4 h-4 text-[#996515]" />
              <span>Explore All 16 Pieces</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8C6212] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Category Tabs for dedicated Collections Page */}
        {!isHomepage && (
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar scroll-smooth">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs tracking-wider uppercase whitespace-nowrap transition-all touch-target shrink-0 font-bold shadow-sm ${
                    isActive
                      ? "bg-gradient-to-r from-[#996515] to-[#C5A059] text-white shadow-md"
                      : "bg-white text-[#4A4A52] hover:text-[#141416] border border-[#E8DEC8] hover:border-[#D4AF37]"
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Collections Grid with Smooth Entrance Transitions */}
        <motion.div
          layout
          className={`grid grid-cols-1 ${
            isHomepage ? "md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"
          } gap-6 sm:gap-8`}
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-white rounded-2xl border border-[#E8DEC8] hover:border-[#D4AF37] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/15 flex flex-col justify-between"
              >
                {/* Media Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7F2]">
                  <Image
                    src={item.thumbnailUrl}
                    alt={item.title}
                    fill
                    sizes={isHomepage ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Metal Purity Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#D4AF37]/40 text-[11px] font-bold text-[#8C6212] shadow-sm">
                    {item.metalPurity}
                  </div>

                  {/* Showcase index badge if on homepage */}
                  {isHomepage && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#141416]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] font-semibold text-[#DFBF7A] flex items-center gap-1 shadow-sm">
                      <Award className="w-3 h-3 text-[#DFBF7A]" />
                      <span>Showcase #{index + 1}</span>
                    </div>
                  )}

                  {/* Hallmark Stamp */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] text-white font-medium bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#DFBF7A]" />
                    <span>{item.hallmarkText}</span>
                  </div>

                  {/* Inspection View Badge */}
                  <div className="absolute bottom-3 right-3 p-2 rounded-full bg-white/95 text-[#996515] group-hover:scale-110 transition-transform shadow-md border border-[#E8DEC8]">
                    <Eye className="w-3.5 h-3.5 text-[#996515]" />
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-6 space-y-3 bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#141416] group-hover:text-[#996515] transition-colors leading-snug line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5A5960] line-clamp-2 leading-relaxed pt-1.5">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EFE8DA] space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#8C6212] font-semibold">{item.priceNote}</span>
                      <span className="font-mono text-xs text-[#5A5960]">{item.specs.weight || item.specs.carat}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-bold text-[#996515] group-hover:underline">
                        View Piece Specifications
                      </span>
                      <span className="text-[#996515] group-hover:translate-x-1.5 transition-transform text-sm font-bold">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Moving Carousel / Ticker Strip on Homepage */}
        {isHomepage && (
          <>
            <div className="mt-14 py-4 px-6 rounded-2xl bg-white border border-[#E8DEC8] shadow-sm flex items-center justify-between overflow-hidden">
              <div className="flex items-center gap-3 shrink-0 pr-6 border-r border-[#EFE8DA]">
                <Gem className="w-4 h-4 text-[#996515]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#141416]">Atelier Guarantee:</span>
              </div>
              <div className="flex items-center gap-8 text-xs text-[#4A4A52] overflow-x-auto no-scrollbar whitespace-nowrap pl-6">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#996515]" />
                  Zero High-Street Retail Markup
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#996515]" />
                  Official London Assay Hallmarked
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#996515]" />
                  Certified Natural Diamonds &amp; Uncut Polki
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#996515]" />
                  In-House Hayes Workshop Crafting
                </span>
              </div>
            </div>

            {/* Big Call to Action Leading to Full Collection Page */}
            <div className="mt-12 text-center p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#FAF7F2] via-white to-[#FAF7F2] border border-[#E8DEC8] shadow-sm">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141416]">
                Explore the Complete 16-Piece Vault
              </h3>
              <p className="text-sm text-[#4A4A52] max-w-xl mx-auto mt-2 mb-6">
                View our comprehensive collection of solid 22ct gold kadas, antique Jadau Polki choker sets, 3D CAD solitaire engagement rings, and royal bridal haars.
              </p>
              <Link
                href="/collections"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#C5A059] via-[#DFBF7A] to-[#B88E3E] hover:from-[#B88E3E] hover:to-[#996515] text-[#141416] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>View All Collections (16 Masterpieces)</span>
                <ArrowRight className="w-4 h-4 text-[#141416]" />
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Fullscreen Video / Photo Reel Modal */}
      <ReelModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
