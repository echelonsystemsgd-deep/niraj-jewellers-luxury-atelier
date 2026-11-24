"use client";

import { useState, useMemo } from "react";
import { Film } from "lucide-react";
import { COLLECTIONS_DATA, CollectionItem } from "@/data/collections-data";
import { AtelierVideoCard } from "./atelier-video-card";
import { ReelModal } from "./reel-modal";

interface InfiniteMotionRibbonProps {
  onSelectItem?: (item: CollectionItem) => void;
  items?: CollectionItem[];
}

export function InfiniteMotionRibbon({ onSelectItem, items }: InfiniteMotionRibbonProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);

  const sourceItems = useMemo(
    () => (items && items.length > 0 ? items : COLLECTIONS_DATA),
    [items]
  );

  // Curate 12 alternating cards: 6 authentic videos and 6 high-contrast photographs
  const ribbonPieces = useMemo(() => {
    const videos = sourceItems.filter((i) => i.mediaType === "video");
    const images = sourceItems.filter((i) => i.mediaType === "image");

    const curated: CollectionItem[] = [];
    for (let i = 0; i < 6; i++) {
      if (videos[i]) curated.push(videos[i]);
      if (images[i]) curated.push(images[i]);
    }
    return curated.length > 0 ? curated.slice(0, 12) : sourceItems.slice(0, 12);
  }, [sourceItems]);

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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#D4AF37]/50 text-[#8C6212] text-[11px] font-semibold uppercase tracking-widest shadow-xs">
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
              className="group relative w-60 sm:w-72 shrink-0 aspect-[4/5] overflow-hidden bg-white border border-[#E8DEC8] hover:border-[#D4AF37] shadow-sm hover:shadow-xl hover:shadow-[#D4AF37]/15 transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-[#996515] touch-target"
              aria-label={`Inspect ${item.title}`}
            >
              {/* Media Container with Inline Video Looper */}
              <AtelierVideoCard item={item} />

              {/* Gradient Darkening Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

              {/* Top Floating Badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] font-bold text-[#8C6212] shadow-sm z-10 pointer-events-none">
                {item.metalPurity.split("(")[0].trim()}
              </div>

              {/* Card Meta on Bottom - Clean, Minimalist Title & Spec */}
              <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                <h3 className="font-serif text-sm font-semibold leading-tight line-clamp-1 group-hover:text-[#DFBF7A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#E8DEC8] font-sans mt-0.5">
                  {item.specs.weight || item.specs.carat || item.metalPurity}
                </p>
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
