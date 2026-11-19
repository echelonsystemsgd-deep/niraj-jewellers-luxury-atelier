"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  Eye,
  Award,
  Scale,
  Gem,
  ArrowRight
} from "lucide-react";
import { COLLECTIONS_DATA, CollectionItem } from "@/data/collections-data";
import { AtelierVideoCard } from "./atelier-video-card";
import { ReelModal } from "./reel-modal";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface MasterpieceHeroSliderProps {
  onSelectItem?: (item: CollectionItem) => void;
}

export function MasterpieceHeroSlider({ onSelectItem }: MasterpieceHeroSliderProps) {
  // Top 3 showpieces as defined in implementation plan
  const showpieces: CollectionItem[] = [
    COLLECTIONS_DATA[0], // 1. The Nizam Ruby & Basra Pearl Polki Choker
    COLLECTIONS_DATA[1], // 2. The Calcutta Filigree 22ct Gold Bridal Suite
    COLLECTIONS_DATA[2], // 3. The Chandbali Carved Zambian Emerald Melon Choker
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 6000; // 6 seconds auto-advance
  const INTERVAL_STEP = 50;

  // Touch gesture state for mobile swiping
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % showpieces.length);
    setProgress(0);
  }, [showpieces.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + showpieces.length) % showpieces.length);
    setProgress(0);
  }, [showpieces.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Auto-advance timer with micro-progress bar
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (INTERVAL_STEP / SLIDE_DURATION) * 100;
      });
    }, INTERVAL_STEP);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentPiece = showpieces[currentIndex];

  const whatsappEnquiryLink = buildWhatsAppLink({
    source: `masterpiece_slider_${currentPiece.id}`,
    pieceTitle: currentPiece.title,
    metalPurity: currentPiece.metalPurity,
    category: currentPiece.category,
    customNote: `Hi Niraj Jewellers team, I am enquiring about Showpiece #${currentIndex + 1}: ${currentPiece.title} (${currentPiece.metalPurity}). Could you please share bespoke commission details and showroom appointment availability?`,
  });

  const handleInspect = () => {
    if (onSelectItem) {
      onSelectItem(currentPiece);
    } else {
      setSelectedItem(currentPiece);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background Ambient Warm Gold Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DFBF7A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37]/50 text-[#8C6212] text-xs font-bold uppercase tracking-widest shadow-sm">
              <Award className="w-3.5 h-3.5 text-[#996515]" />
              <span>The Atelier Showpieces • 3 Grand Commissions</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141416] font-normal tracking-tight">
              The Masterpiece Slider
            </h2>
            <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515]">
              Handcrafted on Uxbridge Road with London Assay Guarantee
            </p>
          </div>

          {/* Slider Progress & Navigation Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {showpieces.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className="group relative h-2.5 rounded-full overflow-hidden transition-all duration-300 touch-target flex items-center justify-center"
                  style={{ width: idx === currentIndex ? "48px" : "16px" }}
                  aria-label={`Go to showpiece ${idx + 1}`}
                >
                  <span className="w-full h-1.5 rounded-full bg-[#E8DEC8] group-hover:bg-[#C5A059] block relative overflow-hidden">
                    {idx === currentIndex && (
                      <span
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#996515] to-[#C5A059] rounded-full transition-all duration-75"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 pl-2">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] text-[#141416] hover:text-[#996515] flex items-center justify-center shadow-sm hover:shadow-md transition-all touch-target"
                aria-label="Previous masterpiece"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] text-[#141416] hover:text-[#996515] flex items-center justify-center shadow-sm hover:shadow-md transition-all touch-target"
                aria-label="Next masterpiece"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* The Masterpiece Slide Card */}
        <div
          className="relative bg-white rounded-3xl border border-[#E8DEC8] hover:border-[#D4AF37] overflow-hidden shadow-xl shadow-[#D4AF37]/10 transition-all duration-500"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
            {/* Visual Media Pane (Video or Image) */}
            <div className="lg:col-span-7 relative bg-black min-h-[340px] sm:min-h-[460px] overflow-hidden group">
              <AtelierVideoCard item={currentPiece} priority={true} />

              {/* Hallmark Badge */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 shadow-md text-xs font-semibold text-[#8C6212]">
                <ShieldCheck className="w-4 h-4 text-[#996515]" />
                <span>{currentPiece.hallmarkText}</span>
              </div>

              {/* Showpiece Number Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141416]/80 backdrop-blur-md border border-[#D4AF37]/40 text-xs font-bold text-[#DFBF7A] shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#DFBF7A]" />
                <span>Showpiece 0{currentIndex + 1} of 03</span>
              </div>

              {/* Lightbox Quick-Inspect Overlay Trigger */}
              <button
                onClick={handleInspect}
                className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#996515] border border-[#E8DEC8] hover:border-[#D4AF37] text-xs font-bold shadow-md transition-all flex items-center gap-1.5 touch-target"
                aria-label="Inspect piece in high resolution lightbox"
              >
                <Eye className="w-3.5 h-3.5 text-[#996515]" />
                <span className="hidden sm:inline">Fullscreen Lightbox</span>
              </button>
            </div>

            {/* Content & Specifications Pane */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-white space-y-6">
              <div className="space-y-4">
                {/* Metal & Purity Pill */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/50 text-xs font-bold text-[#8C6212] uppercase tracking-wider">
                    {currentPiece.metalPurity}
                  </span>
                  <span className="text-xs text-[#5A5960] font-semibold uppercase tracking-wider">
                    Hayes Atelier Master Commission
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#141416] leading-tight">
                  {currentPiece.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#4A4A52] leading-relaxed">
                  {currentPiece.description}
                </p>

                {/* Craft Specs Bento */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DEC8] space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C6212] block">
                    Bench Craft Specifications
                  </span>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    {currentPiece.specs.weight && (
                      <div className="flex items-center gap-2">
                        <Scale className="w-4 h-4 text-[#996515] shrink-0" />
                        <div>
                          <span className="text-[10px] text-[#5A5960] block">Gross Weight</span>
                          <span className="font-semibold text-[#141416]">{currentPiece.specs.weight}</span>
                        </div>
                      </div>
                    )}
                    {currentPiece.specs.carat && (
                      <div className="flex items-center gap-2">
                        <Gem className="w-4 h-4 text-[#996515] shrink-0" />
                        <div>
                          <span className="text-[10px] text-[#5A5960] block">Gemstone Carat</span>
                          <span className="font-semibold text-[#141416]">{currentPiece.specs.carat}</span>
                        </div>
                      </div>
                    )}
                    <div className="col-span-2 flex items-center gap-2 pt-1 border-t border-[#EFE8DA]">
                      <Sparkles className="w-3.5 h-3.5 text-[#996515] shrink-0" />
                      <span className="text-xs text-[#5A5960]">
                        <strong className="text-[#141416]">{currentPiece.specs.craftsmanship}</strong>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pricing / Workshop note */}
                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/30 flex items-center justify-between text-xs">
                  <span className="text-[#5A5960] font-medium">Workshop Guarantee:</span>
                  <span className="font-bold text-[#8C6212]">{currentPiece.priceNote}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={whatsappEnquiryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>Enquire for Bespoke Consultation</span>
                </a>

                <button
                  onClick={handleInspect}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] text-[#141416] font-semibold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md min-h-[48px]"
                >
                  <Eye className="w-4 h-4 text-[#996515]" />
                  <span>Inspect High-Resolution Lightbox</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Standalone ReelModal fallback if not managed by parent */}
      {!onSelectItem && (
        <ReelModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}
