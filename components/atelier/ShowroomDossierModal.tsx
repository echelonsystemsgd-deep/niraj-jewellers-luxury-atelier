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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${piece.title} Showroom Dossier`}
    >
      <div
        className="relative w-full max-w-5xl bg-[#FAF9F5] border border-[#141416] shadow-2xl overflow-hidden my-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Hairline Header with guaranteed 44px+ tap target */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#E7E2DA] bg-white font-mono text-xs tracking-[0.2em] uppercase text-[#141416] shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C6A75E] animate-pulse"></span>
            <span className="truncate">SHOWROOM VAULT DOSSIER · HAYES ATELIER</span>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg hover:bg-[#FAF9F5] border border-transparent hover:border-[#E7E2DA] transition-colors cursor-pointer text-[#141416] -mr-1"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Dual Column Grid (Fluid on Mobile, Zero Scroll-Trap) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1">
          {/* Left: Authentic Media Reel / Photo */}
          <div className="lg:col-span-7 bg-[#0E0D0C] flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-[#2C2825]">
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

            {/* Visual Display: Compact on mobile (260px) so user immediately sees actions below */}
            <div className="w-full h-[260px] sm:h-[380px] lg:h-full min-h-[260px] flex items-center justify-center relative bg-[#0E0D0C]">
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
                <div className="relative w-full h-full p-4 sm:p-6">
                  <Image
                    src={piece.thumbnailUrl}
                    alt={piece.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Media Bottom Status */}
            <div className="p-3 sm:p-4 bg-[#141416] border-t border-[#2C2825] flex items-center justify-between font-mono text-[10px] text-[#A89F91] tracking-[0.18em]">
              <span className="flex items-center gap-1.5 text-[#C6A75E] truncate">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{piece.hallmarkText || "London Assay Leopard's Head Hallmarked"}</span>
              </span>
              <span className="hidden sm:inline shrink-0">100% SOLID GOLD</span>
            </div>
          </div>

          {/* Right: Piece Dossier & Direct Conversion (Zero Nested Scroll Friction) */}
          <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between bg-white space-y-5">
            {/* Title & Metadata */}
            <div>
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-[#C6A75E] uppercase mb-1">
                <Sparkles className="w-3 h-3" />
                <span>{piece.category.toUpperCase()}</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#141416] leading-tight">
                {piece.title}
              </h2>
              <div className="font-mono text-xs text-[#7A705E] mt-2 tracking-wider flex flex-wrap items-center gap-2 sm:gap-3">
                {piece.specs.weight && (
                  <span>MASS: <strong className="text-[#141416]">{piece.specs.weight}</strong></span>
                )}
                <span>•</span>
                <span>{piece.metalPurity}</span>
              </div>
            </div>

            {/* High-Converting Immediate WhatsApp CTA (Above the fold for zero-scroll friction) */}
            <div className="space-y-1.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-mono text-xs tracking-[0.16em] uppercase font-bold flex items-center justify-center gap-2.5 transition-all shadow-sm rounded-xl active:scale-[0.99] cursor-pointer min-h-[48px]"
              >
                <MessageSquare className="w-4 h-4 fill-white text-white shrink-0" />
                <span>INQUIRE ON WHATSAPP (INSTANT GOLDSMITH)</span>
              </a>
              <p className="text-[10px] font-mono text-[#7A705E] text-center">
                One-tap direct chat with our master goldsmith for live bullion weight, pricing, and viewing.
              </p>
            </div>

            {/* Description */}
            <p className="font-sans text-xs text-[#57534E] leading-relaxed">
              {piece.description}
            </p>

            {/* Specification Badges */}
            <div className="border border-[#E7E2DA] bg-[#FAF9F5] p-3 text-[11px] font-mono space-y-1.5 text-[#57534E] rounded-xl">
              <div>CRAFTSMANSHIP: {piece.specs.craftsmanship || "In-House Hayes Benchwork"}</div>
              <div>AUTHENTICITY: London Assay Office Leopard's Head Hallmarked</div>
              <div>WALK-IN ACCESS: No appointment needed · Walk in anytime</div>
            </div>

            {/* Showroom Direct Walk-In Card */}
            <div className="border border-[#141416] bg-[#FAF9F5] p-3.5 sm:p-4 font-mono text-xs space-y-3 rounded-xl">
              <div className="flex items-start gap-2.5 text-[#141416]">
                <MapPin className="w-4 h-4 text-[#C6A75E] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold uppercase tracking-wider text-[11px]">HAYES FLAGSHIP SHOWROOM</div>
                  <div className="font-sans text-xs text-[#57534E] mt-0.5">
                    136-138 Uxbridge Road, Hayes, Middlesex, UB4 0JH
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-[#7A705E]">
                <Clock className="w-3.5 h-3.5 text-[#C6A75E] shrink-0" />
                <span>Mon: 12:00–17:00 | Tue–Sat: 11:00–17:30</span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://maps.google.com/?q=136+Uxbridge+Road+Hayes+UB4+0JH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-[#141416] text-[#FAF9F5] hover:bg-[#C6A75E] hover:text-[#141416] transition-colors font-semibold text-[10.5px] uppercase tracking-wider flex items-center justify-center gap-1.5 rounded-lg min-h-[44px]"
                >
                  <Navigation className="w-3 h-3" />
                  <span>DIRECTIONS ↗</span>
                </a>

                <a
                  href="tel:02085739323"
                  className="py-2.5 px-3 border border-[#141416] bg-white text-[#141416] hover:bg-[#FAF9F5] transition-colors font-semibold text-[10.5px] uppercase tracking-wider flex items-center justify-center gap-1.5 rounded-lg min-h-[44px]"
                >
                  <Phone className="w-3 h-3 text-[#C6A75E]" />
                  <span>020 8573 9323</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* STICKY BOTTOM QUICK WHATSAPP BAR ON MOBILE (< lg) — Zero Scroll Friction */}
        <div className="lg:hidden sticky bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-[#E7E2DA] shadow-lg z-20 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-mono text-xs tracking-[0.16em] uppercase font-bold flex items-center justify-center gap-2 transition-colors shadow-sm rounded-xl min-h-[48px]"
          >
            <MessageSquare className="w-4 h-4 fill-white text-white shrink-0" />
            <span>INQUIRE ON WHATSAPP (ONE TAP)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
