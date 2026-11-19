"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles, Instagram, ArrowUpRight, ShieldCheck, Film } from "lucide-react";
import { COLLECTIONS_DATA, CollectionItem } from "@/data/collections-data";
import { ReelModal } from "./reel-modal";

export function CollectionGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);

  const categories = [
    { id: "all", label: "All Collections" },
    { id: "bridal", label: "Bridal Suites" },
    { id: "rings", label: "Bespoke Rings" },
    { id: "22ct-gold", label: "22ct Gold & Kadas" },
    { id: "polki-heritage", label: "Polki & Heritage" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? COLLECTIONS_DATA
      : COLLECTIONS_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="collections" className="py-20 sm:py-28 bg-obsidian relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Showroom Collections &amp; Craft Reels</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
              Master Goldsmith Craftsmanship in Motion
            </h2>
            <p className="text-sm sm:text-base text-platinum-muted">
              Explore recent bespoke commissions, hand-forged 22ct bridal sets, and certified diamond rings straight from our Hayes atelier benches.
            </p>
          </div>

          {/* Social Proof Linkout */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/nirajjewellersltd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-atelier hover:bg-atelier-light border border-atelier-border text-xs text-platinum hover:text-white transition-all shadow-sm group"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>@nirajjewellersltd</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-platinum-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Filter Tabs with Liquid Sliding Pill */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs tracking-wider uppercase whitespace-nowrap transition-colors touch-target shrink-0 font-medium ${
                  isActive ? "text-obsidian font-bold" : "text-platinum-muted hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 rounded-full shadow-lg shadow-gold-500/20"
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
                {!isActive && (
                  <span className="absolute inset-0 rounded-full border border-atelier-border -z-10 bg-atelier/80" />
                )}
              </button>
            );
          })}
        </div>

        {/* Collections Grid with Smooth Entrance Transitions */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-atelier rounded-2xl border border-atelier-border overflow-hidden cursor-pointer hover:border-gold-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/10 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Media Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/60">
                  <Image
                    src={item.thumbnailUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />

                  {/* Video Play Badge if Reel */}
                  {item.mediaType === "video" && (
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-gold-400 group-hover:scale-110 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-gold-400" />
                    </div>
                  )}

                  {/* Metal Purity Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-gold-500/30 text-[11px] font-semibold text-gold-300">
                    {item.metalPurity}
                  </div>

                  {/* Hallmark Stamp */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[10px] text-platinum-muted font-mono bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                    <ShieldCheck className="w-3 h-3 text-gold-500" />
                    <span>{item.hallmarkText}</span>
                  </div>

                  {/* Subtle Prototype Reel Placeholder Notice */}
                  {item.mediaType === "video" && (
                    <div className="absolute bottom-3 right-3 text-[9px] font-mono text-gold-400/80 bg-black/80 px-2 py-0.5 rounded backdrop-blur-sm border border-gold-500/20 flex items-center gap-1">
                      <Film className="w-2.5 h-2.5" />
                      <span>Reel Preview</span>
                    </div>
                  )}
                </div>

                {/* Card Meta Content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-lg font-medium text-white group-hover:text-gold-300 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-platinum-muted line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-3 flex items-center justify-between text-xs border-t border-atelier-border/80">
                    <span className="text-gold-400 font-medium">View Craft Reel</span>
                    <span className="text-gold-500 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Video / Photo Reel Modal */}
      <ReelModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
