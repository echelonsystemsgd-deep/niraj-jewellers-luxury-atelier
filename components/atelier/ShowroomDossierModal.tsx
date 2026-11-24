"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CollectionItem } from "@/data/collections-data";
import {
  X,
  ShieldCheck,
  MessageSquare,
  MapPin,
  Phone,
  Navigation,
  Film,
  Camera,
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
    `Hi Niraj Jewellers, I would like to inquire about "${piece.title}" (${piece.metalPurity}${weightStr}). Is this available to inspect at your Hayes showroom?`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?phone=447955565137&text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 lg:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${piece.title} Showroom Dossier`}
    >
      <div
        className="relative w-full max-w-4xl lg:max-w-5xl max-h-[92vh] bg-[#FAF9F5] border border-[#141416] shadow-2xl overflow-hidden my-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar: Crystal-Clear Title + Fully Visible Close Button */}
        <div className="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 border-b border-[#E7E2DA] bg-white font-sans text-xs tracking-wider uppercase text-[#141416] shrink-0 w-full">
          <div className="flex items-center gap-2 min-w-0 flex-1 mr-3 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-[#C6A75E] animate-pulse shrink-0"></span>
            <span className="truncate font-semibold text-[10px] sm:text-xs">
              VAULT DOSSIER · HAYES ATELIER
            </span>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#141416] bg-[#FAF9F5] hover:bg-[#141416] text-[#141416] hover:text-[#FAF9F5] transition-all text-[10px] sm:text-[11px] font-bold uppercase tracking-wider cursor-pointer shadow-xs"
            aria-label="Close modal and return to vault"
          >
            <span>CLOSE</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Modal Body: Scrollable on Mobile, 2-Column Split on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto lg:overflow-hidden">
          {/* Left: Authentic Media Reel / Photo */}
          <div className="lg:col-span-7 bg-[#0E0D0C] flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-[#2C2825] shrink-0 overflow-hidden">
            {/* Media Selector Tabs (if video exists) */}
            {piece.videoUrl && (
              <div className="absolute top-3 left-3 z-10 flex items-center gap-2 font-sans text-[10px] tracking-wider uppercase font-semibold">
                <button
                  type="button"
                  onClick={() => setMediaTab("video")}
                  className={`px-2.5 sm:px-3 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 ${
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
                  className={`px-2.5 sm:px-3 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 ${
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

            {/* Visual Media Canvas (Proper Aspect Ratio, No Overflow) */}
            <div className="w-full h-[260px] sm:h-[320px] lg:h-[480px] flex items-center justify-center relative bg-[#0E0D0C] overflow-hidden">
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
                  className="w-full h-full object-contain"
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
            <div className="p-2.5 sm:p-3 bg-[#141416] border-t border-[#2C2825] flex items-center justify-between font-sans text-[10px] text-[#A89F91] tracking-wider uppercase shrink-0">
              <span className="flex items-center gap-1.5 text-[#C6A75E] truncate">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{piece.hallmarkText || "London Assay Leopard's Head Stamped"}</span>
              </span>
              <span className="hidden sm:inline shrink-0 font-medium">100% SOLID GOLD</span>
            </div>
          </div>

          {/* Right: Piece Dossier & Direct Conversion (Clean, Concise) */}
          <div className="lg:col-span-5 p-4 sm:p-6 lg:p-7 bg-white flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              {/* Category, Title & Purity */}
              <div>
                <p className="font-sans text-[11px] tracking-[0.2em] text-[#8C6212] uppercase mb-1 font-semibold">
                  {piece.category.toUpperCase()}
                </p>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#141416] leading-tight">
                  {piece.title}
                </h2>
                <div className="font-sans text-xs text-[#7A705E] mt-1.5 tracking-wider flex flex-wrap items-center gap-2">
                  {piece.specs.weight && (
                    <span>MASS: <strong className="text-[#141416]">{piece.specs.weight}</strong></span>
                  )}
                  <span>·</span>
                  <span>{piece.metalPurity}</span>
                </div>
              </div>

              {/* Primary WhatsApp CTA */}
              <div className="space-y-1.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-sans text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.99] cursor-pointer min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-white shrink-0" />
                  <span>INQUIRE ON WHATSAPP (INSTANT GOLDSMITH)</span>
                </a>
                <p className="text-xs font-sans text-[#7A705E] text-center">
                  Direct chat with our master goldsmiths and workshop team for pricing and private viewing.
                </p>
              </div>

              {/* Concise Description */}
              <p className="font-sans text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {piece.description}
              </p>

              {/* Specification Summary */}
              <div className="border border-[#E7E2DA] bg-[#FAF9F5] p-3 text-xs font-sans space-y-1 text-[#57534E]">
                <div><span className="font-semibold text-[#141416]">CRAFTSMANSHIP:</span> {piece.specs.craftsmanship || "In-House Hayes Benchwork"}</div>
                <div><span className="font-semibold text-[#141416]">AUTHENTICITY:</span> London Assay Leopard&apos;s Head Stamped</div>
                <div><span className="font-semibold text-[#141416]">ACCESS:</span> Walk-ins welcome · Zero appointment needed</div>
              </div>

              {/* Showroom Direct Info: Clean Stacking to Prevent Awkward Mobile Wrapping */}
              <div className="border border-[#E7E2DA] bg-white p-3.5 font-sans text-xs space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C6A75E] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold uppercase tracking-wider text-xs text-[#141416]">
                      HAYES SHOWROOM
                    </div>
                    <div className="text-xs text-[#57534E]">
                      136 Uxbridge Road, Hayes UB4 0JH
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#F5F2EB] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#78716C] gap-1">
                  <span className="font-semibold text-[#141416]">Opening Hours:</span>
                  <span>Mon: 12:00 to 17:00 &bull; Tue to Sat: 11:00 to 17:30</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 font-sans">
                  <a
                    href="https://maps.google.com/?q=136+Uxbridge+Road+Hayes+UB4+0JH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-[#141416] text-[#FAF9F5] hover:bg-[#C6A75E] hover:text-[#141416] transition-colors font-semibold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>DIRECTIONS ↗</span>
                  </a>

                  <a
                    href="tel:02085739323"
                    className="py-2.5 px-3 border border-[#141416] bg-white text-[#141416] hover:bg-[#FAF9F5] transition-colors font-semibold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3 h-3 text-[#C6A75E]" />
                    <span>020 8573 9323</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
