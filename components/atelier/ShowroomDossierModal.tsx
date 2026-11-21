"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CollectionItem } from "@/data/collections-data";
import {
  X,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  MapPin,
  Phone,
  Navigation,
  Film,
  Camera,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";

interface ShowroomDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  piece: CollectionItem | null;
}

export function ShowroomDossierModal({ isOpen, onClose, piece }: ShowroomDossierModalProps) {
  const [mediaTab, setMediaTab] = useState<"video" | "image">("video");

  // Sync media tab whenever the active piece changes
  useEffect(() => {
    if (piece) {
      setMediaTab(piece.videoUrl ? "video" : "image");
    }
  }, [piece]);

  // Lock background body scroll & interactions completely when modal is active
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.body.style.touchAction = "";
        window.removeEventListener("keydown", handleKeyDown);
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !piece) return null;

  const weightStr = piece.specs.weight ? ` · ${piece.specs.weight}` : "";
  const whatsappMessage = encodeURIComponent(
    `Hi Niraj Jewellers, I am interested in "${piece.title}" (${piece.metalPurity}${weightStr}). Is this available to inspect at your Hayes showroom?`
  );
  // Direct deep-link format opens native WhatsApp app immediately without browser redirect lag
  const whatsappUrl = `https://api.whatsapp.com/send?phone=447955565137&text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 lg:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${piece.title} Showroom Dossier`}
    >
      <div
        className="relative w-full max-w-4xl lg:max-w-5xl lg:h-[620px] lg:max-h-[88vh] bg-[#FAF9F5] border border-[#141416] shadow-2xl rounded-2xl overflow-hidden my-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar: Crystal-Clear Title + High-Contrast Close Button */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 border-b border-[#E7E2DA] bg-white font-mono text-xs tracking-[0.2em] uppercase text-[#141416] shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C6A75E] animate-pulse"></span>
            <span className="truncate font-semibold text-[11px] sm:text-xs">
              SHOWROOM VAULT DOSSIER · HAYES ATELIER
            </span>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D4AF37]/60 bg-[#FAF7F2] hover:bg-[#141416] text-[#8C6212] hover:text-white transition-all text-[11px] font-bold uppercase tracking-wider cursor-pointer shadow-xs"
            aria-label="Close modal and return to vault"
          >
            <span>CLOSE</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Modal Body: 2 Columns on Desktop, Sized to Fit Without Page Scrolling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 lg:h-[calc(620px-48px)] overflow-hidden">
          {/* Left: Authentic Media Reel / Photo */}
          <div className="lg:col-span-7 bg-[#0E0D0C] flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-[#2C2825] h-full overflow-hidden">
            {/* Media Selector Tabs (if video exists) */}
            {piece.videoUrl && (
              <div className="absolute top-3 left-3 z-10 flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase">
                <button
                  type="button"
                  onClick={() => setMediaTab("video")}
                  className={`px-3 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 rounded-sm shadow-xs ${
                    mediaTab === "video"
                      ? "border-[#C6A75E] bg-[#C6A75E] text-[#141416] font-semibold"
                      : "border-white/30 bg-black/70 text-white/90 hover:text-white"
                  }`}
                >
                  <Film className="w-3 h-3" />
                  <span>1080P REEL</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMediaTab("image")}
                  className={`px-3 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 rounded-sm shadow-xs ${
                    mediaTab === "image"
                      ? "border-[#C6A75E] bg-[#C6A75E] text-[#141416] font-semibold"
                      : "border-white/30 bg-black/70 text-white/90 hover:text-white"
                  }`}
                >
                  <Camera className="w-3 h-3" />
                  <span>STILL FRAME</span>
                </button>
              </div>
            )}

            {/* Visual Media Canvas: Contained within viewport on desktop */}
            <div className="w-full h-[260px] sm:h-[320px] lg:h-full flex items-center justify-center relative bg-[#0E0D0C] overflow-hidden">
              {mediaTab === "video" && piece.videoUrl ? (
                <video
                  key={piece.videoUrl}
                  src={piece.videoUrl}
                  poster={piece.thumbnailUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full max-h-[500px] object-contain"
                />
              ) : (
                <div className="relative w-full h-full p-4 sm:p-6 flex items-center justify-center">
                  <Image
                    src={piece.thumbnailUrl}
                    alt={piece.title}
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Media Bottom Status */}
            <div className="p-2.5 sm:p-3 bg-[#141416] border-t border-[#2C2825] flex items-center justify-between font-mono text-[10px] text-[#A89F91] tracking-[0.18em] shrink-0">
              <span className="flex items-center gap-1.5 text-[#C6A75E] truncate">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{piece.hallmarkText || "London Assay Leopard's Head Hallmarked"}</span>
              </span>
              <span className="hidden sm:inline shrink-0">100% SOLID GOLD</span>
            </div>
          </div>

          {/* Right: Piece Dossier & Direct Conversion (Fits Desktop Without Scroll) */}
          <div className="lg:col-span-5 p-4 sm:p-6 bg-white flex flex-col justify-between overflow-y-auto max-h-[75vh] lg:max-h-full">
            <div className="space-y-3.5">
              {/* Category, Title & Purity */}
              <div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-[#C6A75E] uppercase mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{piece.category.toUpperCase()}</span>
                </div>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#141416] leading-tight">
                  {piece.title}
                </h2>
                <div className="font-mono text-xs text-[#7A705E] mt-1 tracking-wider flex flex-wrap items-center gap-2">
                  {piece.specs.weight && (
                    <span>MASS: <strong className="text-[#141416]">{piece.specs.weight}</strong></span>
                  )}
                  <span>•</span>
                  <span>{piece.metalPurity}</span>
                </div>
              </div>

              {/* ONLY 1 Primary WhatsApp CTA in the Entire Modal */}
              <div className="space-y-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-mono text-xs tracking-[0.14em] uppercase font-bold flex items-center justify-center gap-2 transition-all shadow-sm rounded-xl active:scale-[0.99] cursor-pointer min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-white shrink-0" />
                  <span>INQUIRE ON WHATSAPP (INSTANT GOLDSMITH)</span>
                </a>
                <p className="text-[10px] font-mono text-[#7A705E] text-center">
                  Direct chat with Viky &amp; master goldsmiths for pricing &amp; viewing.
                </p>
              </div>

              {/* Description */}
              <p className="font-sans text-xs text-[#57534E] leading-relaxed line-clamp-3 sm:line-clamp-none">
                {piece.description}
              </p>

              {/* Specification Badges */}
              <div className="border border-[#E7E2DA] bg-[#FAF9F5] p-2.5 text-[10.5px] font-mono space-y-1 text-[#57534E] rounded-xl">
                <div>CRAFTSMANSHIP: {piece.specs.craftsmanship || "In-House Hayes Benchwork"}</div>
                <div>AUTHENTICITY: London Assay Leopard&apos;s Head Hallmarked</div>
                <div>ACCESS: Walk-ins welcome · Zero appointment needed</div>
              </div>

              {/* Compact Showroom Direct Walk-In Card */}
              <div className="border border-[#E8DEC8] bg-[#FAF7F2] p-3 font-mono text-xs space-y-2 rounded-xl">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C6A75E] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold uppercase tracking-wider text-[10.5px] text-[#141416]">
                        HAYES SHOWROOM
                      </div>
                      <div className="font-sans text-[11px] text-[#57534E]">
                        136 Uxbridge Road, Hayes UB4 0JH
                      </div>
                    </div>
                  </div>
                  <div className="text-[9.5px] text-[#8C6212] font-semibold shrink-0">
                    Mon 12–17:00 | Tue–Sat 11–17:30
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-0.5">
                  <a
                    href="https://maps.google.com/?q=136+Uxbridge+Road+Hayes+UB4+0JH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-2.5 bg-[#141416] text-[#FAF9F5] hover:bg-[#C6A75E] hover:text-[#141416] transition-colors font-semibold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 rounded-lg"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>DIRECTIONS ↗</span>
                  </a>

                  <a
                    href="tel:02085739323"
                    className="py-2 px-2.5 border border-[#141416] bg-white text-[#141416] hover:bg-[#FAF9F5] transition-colors font-semibold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 rounded-lg"
                  >
                    <Phone className="w-3 h-3 text-[#C6A75E]" />
                    <span>020 8573 9323</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Explicit Close Button (Secondary Exit Route) */}
            <div className="pt-3 border-t border-[#EFE8DA] mt-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 px-3 rounded-xl border border-[#D4AF37]/50 hover:border-[#141416] bg-[#FAF9F5] hover:bg-[#141416] text-[#8C6212] hover:text-white font-mono text-[11px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <X className="w-3.5 h-3.5" />
                <span>CLOSE DOSSIER &amp; RETURN TO SHOWROOM</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
