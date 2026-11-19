"use client";

import { useState, useMemo } from "react";
import { Sparkles, ShieldCheck, Eye, Film } from "lucide-react";
import { COLLECTIONS_DATA, CollectionItem } from "@/data/collections-data";
import { AtelierVideoCard } from "./atelier-video-card";
import { ReelModal } from "./reel-modal";

interface InfiniteMotionRibbonProps {
  onSelectItem?: (item: CollectionItem) => void;
}

export function InfiniteMotionRibbon({ onSelectItem }: InfiniteMotionRibbonProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);

  // Curate 12 alternating cards: 6 authentic videos and 6 high-contrast photographs
  const ribbonPieces = useMemo(() => {
    const videos = COLLECTIONS_DATA.filter((i) => i.mediaType === "video");
    const images = COLLECTIONS_DATA.filter((i) => i.mediaType === "image");

    const curated: CollectionItem[] = [];
    for (let i = 0; i < 6; i++) {
      if (videos[i]) curated.push(videos[i]);
      if (images[i]) curated.push(images[i]);
    }
    return curated.slice(0, 12);
  }, []);

  // Double array for seamless continuous infinite marquee loop
  const marqueeItems = useMemo(() => [...ribbonPieces, ...ribbonPieces], [ribbonPieces]);

  const handleCardClick = (item: CollectionItem) => {
    if (onSelectItem) {
      onSelectItem(item);
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FAF7F2] border-y border-[#E8DEC8] relative overflow-hidden">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4AF37]/50 text-[#8C6212] text-[11px] font-bold uppercase tracking-widest shadow-sm">
          <Film className="w-3.5 h-3.5 text-[#996515]" />
          <span>The Atelier Motion Ribbon</span>
          <span className="text-[#C5A059]">•</span>
          <span className="text-[#5A5960]">Continuous Workshop Showcase</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#141416] font-normal tracking-tight">
          Living Masterpieces in Motion
        </h2>
        <p className="text-xs sm:text-sm text-[#5A5960] max-w-xl mx-auto font-normal">
          Swipe, tap, or pause to inspect authentic bench-forged bridal suites, syndicate Polki collars, and 22ct kadas.
        </p>
      </div>

      {/* Marquee Track Container */}
      <div
        className="relative w-full overflow-hidden select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Soft edge gradient masks */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10 pointer-events-none" />

        {/* The 60fps Continuous Loop Track */}
        <div
          className="animate-infinite-ribbon gap-4 sm:gap-6 py-2 px-4"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {marqueeItems.map((item, index) => (
            <button
              key={`${item.id}-${index}`}
              onClick={() => handleCardClick(item)}
              className="group relative w-60 sm:w-72 shrink-0 aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-[#E8DEC8] hover:border-[#D4AF37] shadow-sm hover:shadow-xl hover:shadow-[#D4AF37]/15 transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-[#996515] touch-target"
              aria-label={`Inspect ${item.title}`}
            >
              {/* Media Container with Inline Video Looper */}
              <AtelierVideoCard item={item} />

              {/* Gradient Darkening Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

              {/* Top Floating Badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] font-bold text-[#8C6212] shadow-sm">
                {item.metalPurity.split("(")[0].trim()}
              </div>

              {/* Bottom Inspection Indicator */}
              <div className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 text-[#996515] group-hover:scale-110 group-hover:bg-[#996515] group-hover:text-white transition-all shadow-md">
                <Eye className="w-3.5 h-3.5" />
              </div>

              {/* Card Meta on Bottom */}
              <div className="absolute bottom-3 left-3 right-12 space-y-1 text-white">
                <div className="flex items-center gap-1.5 text-[10px] text-[#DFBF7A] font-semibold">
                  <ShieldCheck className="w-3 h-3 text-[#DFBF7A]" />
                  <span className="truncate">{item.hallmarkText}</span>
                </div>
                <h3 className="font-serif text-sm font-semibold leading-tight line-clamp-1 group-hover:text-[#DFBF7A] transition-colors">
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Standalone ReelModal fallback if not managed by parent */}
      {!onSelectItem && (
        <ReelModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}
