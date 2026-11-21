"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { COLLECTIONS_DATA, CollectionItem } from "@/data/collections-data";
import { AtelierVideoCard } from "./atelier-video-card";
import { ReelModal } from "./reel-modal";

interface CollectionGridProps {
  isHomepage?: boolean;
  items?: CollectionItem[];
}

const formatCategoryLabel = (cat: string) => {
  if (cat === "bridal") return "Bridal Suites";
  if (cat === "polki-heritage") return "Polki & Heritage";
  if (cat === "22ct-gold") return "22ct Gold & Kadas";
  if (cat === "rings") return "Bespoke Rings & CAD";
  if (cat === "featured") return "Featured Masterpieces";
  if (cat === "bangles-kadas") return "Bangles & Kadas";
  if (cat === "mangalsutra") return "Sacred Mangalsutras";
  if (cat === "necklaces") return "Necklaces & Chokers";
  if (cat === "coins-bullion") return "Gold Coins & Bullion";
  // Custom categories: convert kebab-case or snake_case to Title Case
  return cat
    .split(/[-_ ]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
};

export function CollectionGrid({ isHomepage = false, items }: CollectionGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);

  const allItems = useMemo(
    () => (items && items.length > 0 ? items : COLLECTIONS_DATA),
    [items]
  );

  // Top 3 Verified Masterpieces for Clean Homepage Showcase
  const topThreeMasterpieces: CollectionItem[] = useMemo(() => {
    return allItems.slice(0, 3);
  }, [allItems]);

  // Compute category counts dynamically across all live pieces
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: allItems.length,
    };
    allItems.forEach((item) => {
      const cat = item.category || "other";
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [allItems]);

  // Dynamic category pills
  const categories = useMemo(() => {
    const standardOrder = ["bridal", "polki-heritage", "22ct-gold", "rings"];
    const catsInVault = Array.from(new Set(allItems.map((i) => i.category))).filter(Boolean);

    // Standard categories first, then any custom categories added by Viky
    const sortedCats = [
      ...standardOrder.filter((c) => catsInVault.includes(c)),
      ...catsInVault.filter((c) => !standardOrder.includes(c)),
    ];

    return [
      { id: "all", label: `All Masterpieces (${categoryCounts.all || 0})` },
      ...sortedCats.map((cat) => ({
        id: cat,
        label: `${formatCategoryLabel(cat)} (${categoryCounts[cat] || 0})`,
      })),
    ];
  }, [allItems, categoryCounts]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return allItems;
    return allItems.filter((item) => item.category === activeCategory);
  }, [allItems, activeCategory]);

  const displayedItems = isHomepage ? topThreeMasterpieces : filteredItems;

  return (
    <section id="collections" className="py-16 sm:py-24 bg-[#FAF9F5] texture-ivory-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#996515]">
            <span>Showroom Vault &amp; Craft Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight">
            {isHomepage ? "Curated Flagship Showpieces" : "The Complete Showroom Vault"}
          </h2>
          <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal">
            Bespoke artistry forged with micron precision
          </p>
          <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed">
            {isHomepage
              ? "A preview of our master goldsmith pieces handcrafted on Uxbridge Road. Official London Assay Office hallmarked with transparent bullion weight."
              : "Explore our archive of bridal suites, antique Polki heritage chokers, and 3D CAD bespoke solitaire rings."}
          </p>
        </div>

        {/* Category Filter Pills (Only shown on full /collections page) */}
        {!isHomepage && (
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 min-h-[44px] ${
                    isSelected
                      ? "bg-[#141416] text-[#DFBF7A] shadow-md border border-[#D4AF37]/50"
                      : "bg-white text-[#4A4A52] hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Collections Grid with Clean Cards (Single Metal Tag, Zero Tag Clutter) */}
        <motion.div
          layout
          className={`grid grid-cols-1 ${
            isHomepage ? "md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"
          } gap-6 sm:gap-8`}
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-white rounded-2xl border border-[#E8DEC8] hover:border-[#D4AF37] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/15 flex flex-col justify-between"
              >
                {/* Media Container with Clean Aspect Ratio */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7F2]">
                  <AtelierVideoCard item={item} hideMotionBadge={true} preferImage={isHomepage} />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity pointer-events-none" />

                  {/* Single Clean Metal Purity Tag (Hammered Gold Bullion Card) */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full texture-hammered-card border-hammered-gold text-[11px] font-bold text-[#141416] shadow-sm z-10 pointer-events-none">
                    {item.metalPurity.split("(")[0].replace(/&.*$/, "").trim()}
                  </div>
                </div>

                {/* Card Meta Content: Title, Short Description, Single Verified Spec, and Clean Link */}
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
                    {/* Clean Spec Display */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#8C6212] font-semibold">
                        {item.specs.metal || "Bespoke Suite"}
                      </span>
                      <span className="font-mono text-xs text-[#141416] font-medium">
                        {item.specs.weight || item.specs.carat || "In-House Crafted"}
                      </span>
                    </div>

                    {/* Action Line */}
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

        {/* Homepage Bottom CTA: Links cleanly to /collections without hardcoded numbers */}
        {isHomepage && (
          <div className="mt-14 text-center p-8 sm:p-12 rounded-3xl bg-white border border-[#E8DEC8] shadow-sm">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141416]">
              Explore the Complete Showroom Vault
            </h3>
            <p className="text-sm text-[#4A4A52] max-w-xl mx-auto mt-2 mb-6 leading-relaxed">
              View our full collection of solid 22ct gold kadas, antique Jadau Polki bridal sets, 3D CAD solitaire engagement rings, and gold bullion suites.
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#C5A059] via-[#DFBF7A] to-[#B88E3E] hover:from-[#B88E3E] hover:to-[#996515] text-[#141416] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 min-h-[48px]"
            >
              <span>View Full Collections Archive</span>
              <ArrowRight className="w-4 h-4 text-[#141416]" />
            </Link>
          </div>
        )}
      </div>

      {/* Fullscreen Video / Photo Reel Modal */}
      <ReelModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
