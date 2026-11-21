"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { ProductDetailViewer } from "./ProductDetailViewer";
import { MasterpieceItem } from "./ProductGrid";
import {
  X,
  ShieldCheck,
  MessageSquare,
  Calendar,
  Sparkles,
  CheckCircle2,
  Box,
  Compass,
  ArrowRight,
} from "lucide-react";

interface ShowroomDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  piece: MasterpieceItem | null;
}

export function ShowroomDossierModal({ isOpen, onClose, piece }: ShowroomDossierModalProps) {
  const [viewMode, setViewMode] = useState<"photo" | "3d">("3d");
  const [selectedAlloy, setSelectedAlloy] = useState<"22ct" | "18ct" | "platinum">("22ct");
  const [selectedSize, setSelectedSize] = useState<string>("UK P (US 7.5 · 56mm)");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Sync alloy when piece changes
  useEffect(() => {
    if (piece) {
      setSelectedAlloy(piece.defaultAlloy);
      setIsConfirmed(false);
    }
  }, [piece]);

  // Lock background scroll when open
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

  const handleClose = () => {
    sound.playTick();
    onClose();
  };

  const handleSwitchView = (mode: "photo" | "3d") => {
    sound.playTick();
    setViewMode(mode);
  };

  const handleAlloyChange = (alloy: "22ct" | "18ct" | "platinum") => {
    sound.playTick();
    setSelectedAlloy(alloy);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playTick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 1200);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Niraj Jewellers team, I am looking at "${piece.title}" (${selectedAlloy.toUpperCase()} · ${piece.weight}) on your 3D digital showroom and would like to visit your Hayes atelier (136 Uxbridge Road) to inspect it in person.`
  );
  const whatsappUrl = `https://wa.me/447955565137?text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={handleClose}
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
            <span>VAULT DOSSIER · HAYES SHOWROOM ALLOCATION</span>
          </div>
          <button
            onClick={handleClose}
            type="button"
            className="p-1.5 hover:bg-[#FAF9F5] transition-colors cursor-pointer text-[#141416]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Dual Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[550px]">
          {/* Left: Media Canvas View (3D or Photography) */}
          <div className="lg:col-span-7 bg-[#141416] flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-[#2C2825]">
            {/* Media Switcher Tabs */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase">
              <button
                type="button"
                onClick={() => handleSwitchView("3d")}
                className={`px-3 py-1.5 border transition-all cursor-pointer ${
                  viewMode === "3d"
                    ? "border-[#C6A75E] bg-[#C6A75E] text-[#141416] font-semibold"
                    : "border-white/30 bg-black/60 text-white/80 hover:text-white"
                }`}
              >
                360° 3D STUDIO
              </button>
              <button
                type="button"
                onClick={() => handleSwitchView("photo")}
                className={`px-3 py-1.5 border transition-all cursor-pointer ${
                  viewMode === "photo"
                    ? "border-[#C6A75E] bg-[#C6A75E] text-[#141416] font-semibold"
                    : "border-white/30 bg-black/60 text-white/80 hover:text-white"
                }`}
              >
                ATELIER STILL
              </button>
            </div>

            {/* Visual Canvas Display */}
            <div className="w-full h-[360px] sm:h-[460px] lg:h-full flex items-center justify-center relative">
              {viewMode === "3d" ? (
                <ProductDetailViewer alloy={selectedAlloy} className="w-full h-full" />
              ) : (
                <div className="relative w-full h-full bg-[#141416]">
                  <Image
                    src={piece.image}
                    alt={piece.title}
                    fill
                    className="object-contain p-6"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Media Bottom Status */}
            <div className="p-4 bg-[#141416] border-t border-[#2C2825] flex items-center justify-between font-mono text-[10px] text-[#A89F91] tracking-[0.18em]">
              <span className="flex items-center gap-1.5 text-[#C6A75E]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ASSAY VERIFIED: {piece.hallmark}</span>
              </span>
              <span>100% SOLID MASS · NON-HOLLOW</span>
            </div>
          </div>

          {/* Right: Configurator & Showroom Viewing Reservation */}
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
                  goldsmith workshop. Our senior master craftsman will have the piece weighed, polished,
                  and ready for your inspection.
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
              <div className="flex flex-col gap-6">
                {/* Title & Purity Badge */}
                <div>
                  <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-[#C6A75E] uppercase mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{piece.categoryLabel}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#141416] leading-tight">
                    {piece.title}
                  </h2>
                  <div className="font-mono text-xs text-[#7A705E] mt-2 tracking-wider">
                    ESTIMATED MASS: <strong className="text-[#141416]">{piece.weight}</strong>
                  </div>
                </div>

                {/* Alloy Switcher */}
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#7A705E] mb-2">
                    SELECT METALLURGICAL ALLOY:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "22ct", label: "22ct Royal Gold", sub: "91.6% Purity" },
                      { id: "18ct", label: "18ct Rose Gold", sub: "75.0% Purity" },
                      { id: "platinum", label: "950 Platinum", sub: "95.0% Pure" },
                    ].map((item) => {
                      const isActive = selectedAlloy === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleAlloyChange(item.id as "22ct" | "18ct" | "platinum")}
                          className={`p-2 border text-left transition-all cursor-pointer ${
                            isActive
                              ? "border-[#141416] bg-[#141416] text-[#FAF9F5]"
                              : "border-[#E7E2DA] bg-[#FAF9F5] text-[#141416] hover:border-[#A89F91]"
                          }`}
                        >
                          <div className="font-serif text-xs font-semibold leading-none mb-1">
                            {item.label}
                          </div>
                          <div
                            className={`font-mono text-[9px] ${
                              isActive ? "text-[#C6A75E]" : "text-[#7A705E]"
                            }`}
                          >
                            {item.sub}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Size Selector */}
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#7A705E] mb-2">
                    ESTIMATED SIZE / BORE (COMPLIMENTARY IN-HOUSE RESIZING):
                  </label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full border border-[#E7E2DA] bg-[#FAF9F5] p-2.5 font-mono text-xs text-[#141416] focus:outline-none focus:border-[#141416]"
                  >
                    <option>UK M (US 6.0 · 52mm inside circum.)</option>
                    <option>UK N (US 6.5 · 53mm inside circum.)</option>
                    <option>UK P (US 7.5 · 56mm inside circum.)</option>
                    <option>UK R (US 8.5 · 58mm inside circum.)</option>
                    <option>UK T (US 9.5 · 61mm inside circum.)</option>
                    <option>Bespoke Custom Circumference (Measured in Showroom)</option>
                  </select>
                </div>

                {/* Action 1: Direct WhatsApp Line (Primary Instant Action) */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playTick()}
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
