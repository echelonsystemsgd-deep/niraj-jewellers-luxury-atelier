"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CollectionItem } from "@/data/collections-data";
import {
  X,
  ShieldCheck,
  MessageSquare,
  Calendar,
  Sparkles,
  CheckCircle2,
  Play,
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
  const [selectedSize, setSelectedSize] = useState<string>("Standard Indian / UK Size (Custom Adjusted in Showroom)");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Sync media tab based on whether video exists
  useEffect(() => {
    if (piece) {
      setMediaTab(piece.videoUrl ? "video" : "image");
      setIsConfirmed(false);
    }
  }, [piece]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !piece) return null;

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 1000);
  };

  const weightStr = piece.specs.weight ? ` · ${piece.specs.weight}` : "";
  const whatsappMessage = encodeURIComponent(
    `Hi Niraj Jewellers team, I am viewing "${piece.title}" (${piece.metalPurity}${weightStr}) on your digital atelier and would like to visit your Hayes showroom (136 Uxbridge Road) to inspect it in person.`
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
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
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
              <span>100% SOLID MASS</span>
            </div>
          </div>

          {/* Right: Piece Dossier & Showroom Viewing Reservation */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white overflow-y-auto max-h-[80vh] lg:max-h-none">
            {isConfirmed ? (
              <div className="flex flex-col items-center justify-center text-center py-10 my-auto animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-[#C6A75E]/20 text-[#85560C] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#C6A75E]" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.24em] text-[#7A705E] uppercase block mb-1">
                  [ ALLOCATION CONFIRMED ]
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#141416] mb-3">
                  Viewing Dossier Secured
                </h3>
                <p className="font-sans text-xs text-[#57534E] max-w-sm mb-6 leading-relaxed">
                  Your reservation for <strong>{piece.title}</strong> has been logged at our Hayes
                  workshop. Our senior master craftsman will have the piece weighed and prepared for your
                  visit.
                </p>

                <div className="w-full border border-[#E7E2DA] bg-[#FAF9F5] p-4 text-left font-mono text-xs mb-6 space-y-1 text-[#57534E]">
                  <div>SHOWROOM: 136 Uxbridge Road, Hayes, UB4 0JH</div>
                  <div>CLIENT: {fullName || "Guest Collector"}</div>
                  <div>DIRECT WORKSHOP: 020 8573 9323</div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] text-white font-mono text-xs tracking-[0.18em] uppercase font-semibold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>CONTINUE ON WHATSAPP FOR PARKING & ARRIVAL</span>
                </a>
              </div>
            ) : (
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
                  <div className="font-mono text-xs text-[#7A705E] mt-2 tracking-wider flex items-center gap-3">
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
                  <div>POLICY: Walk-ins welcome · Zero high-street retail markups</div>
                </div>

                {/* Action 1: Direct WhatsApp Line */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-mono text-xs tracking-[0.18em] uppercase font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>INQUIRE ON WHATSAPP (INSTANT GOLDSMITH)</span>
                </a>

                {/* Divider */}
                <div className="relative flex items-center justify-center">
                  <div className="w-full border-t border-[#E7E2DA]"></div>
                  <span className="bg-white px-3 font-mono text-[10px] tracking-[0.2em] uppercase text-[#7A705E]">
                    OR RESERVE SHOWROOM VIEWING
                  </span>
                </div>

                {/* Action 2: Showroom Appointment Booking Form */}
                <form onSubmit={handleSubmitBooking} className="flex flex-col gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name / Family Representative"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full border border-[#E7E2DA] bg-[#FAF9F5] p-2.5 text-xs text-[#141416] focus:outline-none focus:border-[#141416] font-sans"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="tel"
                      required
                      placeholder="UK Phone / WhatsApp"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="border border-[#E7E2DA] bg-[#FAF9F5] p-2.5 text-xs text-[#141416] focus:outline-none focus:border-[#141416] font-sans"
                    />
                    <input
                      type="date"
                      value={visitDate}
                      onChange={(e) => setVisitDate(e.target.value)}
                      className="border border-[#E7E2DA] bg-[#FAF9F5] p-2.5 text-xs text-[#141416] focus:outline-none focus:border-[#141416] font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#141416] text-[#FAF9F5] hover:bg-[#C6A75E] hover:text-[#141416] transition-colors font-mono text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-2 cursor-pointer border border-[#141416]"
                  >
                    {isSubmitting ? (
                      <span>SECURING BENCH ALLOCATION...</span>
                    ) : (
                      <>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>BOOK HAYES SHOWROOM VIEWING</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Showroom Logistics Footer */}
                <div className="text-[10px] font-mono text-[#7A705E] pt-2 border-t border-[#E7E2DA] flex items-center justify-between">
                  <span>136 UXBRIDGE ROAD, HAYES, UB4 0JH</span>
                  <span>TUE–SAT 10:30–18:00</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
