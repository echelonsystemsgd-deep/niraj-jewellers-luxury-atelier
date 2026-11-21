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
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.body.style.touchAction = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen || !piece) return null;

  const weightStr = piece.specs.weight ? ` · ${piece.specs.weight}` : "";
  const whatsappMessage = encodeURIComponent(
    `Hi Niraj Jewellers team, I am viewing "${piece.title}" (${piece.metalPurity}${weightStr}) on your website and would like to inquire with your master goldsmith about visiting your Hayes showroom to inspect it.`
  );
  const whatsappUrl = `https://wa.me/447955565137?text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl bg-[#FAF9F5] border border-[#141416] shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Hairline Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#E7E2DA] bg-white font-mono text-xs tracking-[0.2em] uppercase text-[#141416]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C6A75E]"></span>
            <span>SHOWROOM VAULT DOSSIER · HAYES ATELIER</span>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 hover:bg-[#FAF9F5] transition-colors cursor-pointer text-[#141416]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Dual Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          {/* Left: Authentic Media Reel / Photo */}
          <div className="lg:col-span-7 bg-[#0E0D0C] flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-[#2C2825]">
            {/* Media Selector Tabs (if video exists) */}
            {piece.videoUrl && (
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase">
                <button
                  type="button"
                  onClick={() => setMediaTab("video")}
                  className={`px-3 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 ${
                    mediaTab === "video"
                      ? "border-[#C6A75E] bg-[#C6A75E] text-[#141416] font-semibold"
                      : "border-white/30 bg-black/60 text-white/80 hover:text-white"
                  }`}
                >
                  <Film className="w-3 h-3" />
                  <span>1080P REEL</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMediaTab("image")}
                  className={`px-3 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 ${
                    mediaTab === "image"
                      ? "border-[#C6A75E] bg-[#C6A75E] text-[#141416] font-semibold"
                      : "border-white/30 bg-black/60 text-white/80 hover:text-white"
                  }`}
                >
                  <Camera className="w-3 h-3" />
                  <span>STILL FRAME</span>
                </button>
              </div>
            )}

            {/* Visual Display */}
            <div className="w-full h-[360px] sm:h-[460px] lg:h-full flex items-center justify-center relative bg-[#0E0D0C]">
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
                <div className="relative w-full h-full p-6">
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
            <div className="p-4 bg-[#141416] border-t border-[#2C2825] flex items-center justify-between font-mono text-[10px] text-[#A89F91] tracking-[0.18em]">
              <span className="flex items-center gap-1.5 text-[#C6A75E]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{piece.hallmarkText || "London Assay Leopard's Head Hallmarked"}</span>
              </span>
              <span>100% SOLID PRECIOUS METAL</span>
            </div>
          </div>

          {/* Right: Piece Dossier & Direct Conversion (WhatsApp + Showroom Walk-in) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white overflow-y-auto max-h-[80vh] lg:max-h-none">
            <div className="flex flex-col gap-5">
              {/* Title & Metadata */}
              <div>
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-[#C6A75E] uppercase mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{piece.category.toUpperCase()}</span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-[#141416] leading-tight">
                  {piece.title}
                </h2>
                <div className="font-mono text-xs text-[#7A705E] mt-2 tracking-wider flex flex-wrap items-center gap-3">
                  {piece.specs.weight && (
                    <span>CERTIFIED MASS: <strong className="text-[#141416]">{piece.specs.weight}</strong></span>
                  )}
                  <span>{piece.metalPurity}</span>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-xs text-[#57534E] leading-relaxed">
                {piece.description}
              </p>

              {/* Specification Badges */}
              <div className="border border-[#E7E2DA] bg-[#FAF9F5] p-3 text-[11px] font-mono space-y-1.5 text-[#57534E]">
                <div>CRAFTSMANSHIP: {piece.specs.craftsmanship || "In-House Hayes Benchwork"}</div>
                <div>AUTHENTICITY: London Assay Office Hallmarked</div>
                <div>POLICY: No appointment required · Walk-ins welcome anytime</div>
              </div>

              {/* PRIMARY HIGH-CONVERTING ACTION: Direct WhatsApp Line */}
              <div className="space-y-2 pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-mono text-xs tracking-[0.18em] uppercase font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-white" />
                  <span>INQUIRE ON WHATSAPP (INSTANT GOLDSMITH)</span>
                </a>
                <p className="text-[10px] font-mono text-[#7A705E] text-center">
                  Chat directly with our master goldsmith on WhatsApp for live pricing, customization, and advice.
                </p>
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center my-1">
                <div className="w-full border-t border-[#E7E2DA]"></div>
                <span className="bg-white px-3 font-mono text-[10px] tracking-[0.2em] uppercase text-[#7A705E]">
                  OR VISIT IN PERSON
                </span>
              </div>

              {/* SECONDARY ACTION: Showroom Walk-In Guidance */}
              <div className="border border-[#141416] bg-[#FAF9F5] p-4 font-mono text-xs space-y-3">
                <div className="flex items-start gap-2.5 text-[#141416]">
                  <MapPin className="w-4 h-4 text-[#C6A75E] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold uppercase tracking-wider text-[11px]">HAYES FLAGSHIP SHOWROOM</div>
                    <div className="font-sans text-xs text-[#57534E] mt-0.5">
                      136 Uxbridge Road, Hayes, Middlesex, UB4 0JH
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-[#7A705E]">
                  <Clock className="w-3.5 h-3.5 text-[#C6A75E] shrink-0" />
                  <span>Mon: 12:00–17:00 | Tue–Sat: 11:00–17:00 (Walk-Ins Welcome)</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="https://maps.google.com/?q=136+Uxbridge+Road+Hayes+UB4+0JH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-[#141416] text-[#FAF9F5] hover:bg-[#C6A75E] hover:text-[#141416] transition-colors font-semibold text-[10.5px] uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>DIRECTIONS ↗</span>
                  </a>

                  <a
                    href="tel:02085739323"
                    className="py-2.5 px-3 border border-[#141416] bg-white text-[#141416] hover:bg-[#FAF9F5] transition-colors font-semibold text-[10.5px] uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3 h-3 text-[#C6A75E]" />
                    <span>CALL 020 8573 9323</span>
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
