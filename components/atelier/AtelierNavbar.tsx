"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { sound } from "@/lib/sound";
import { Volume2, VolumeX, MessageSquare, MapPin, Sparkles, X, Menu } from "lucide-react";

interface AtelierNavbarProps {
  onOpenBooking?: (pieceName?: string) => void;
}

export function AtelierNavbar({ onOpenBooking }: AtelierNavbarProps) {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsub = sound.subscribe((active) => {
      setIsSoundOn(active);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      unsub();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleSound = () => {
    sound.playTick();
    sound.toggle();
  };

  const handleNavClick = () => {
    sound.playTick();
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E7E2DA] shadow-xs"
            : "bg-[#FAF9F5] border-b border-[#E7E2DA]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          {/* Left: Brand Monogram & Seal */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              onClick={() => sound.playTick()}
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-none border border-[#141416] bg-[#141416] text-[#FAF9F5] flex items-center justify-center font-serif text-sm tracking-widest font-semibold group-hover:bg-[#C6A75E] group-hover:border-[#C6A75E] transition-colors">
                <span>NJ</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm sm:text-base tracking-[0.22em] uppercase font-semibold text-[#141416] leading-none">
                  NIRAJ JEWELLERS
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-[#7A705E] mt-1 leading-none">
                  METALLURGY ATELIER · EST. 1984
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Minimalist Architectural Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono tracking-[0.2em] uppercase text-[#57534E]">
            <a
              href="#archive"
              onClick={handleNavClick}
              className="hover:text-[#141416] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#141416] hover:after:w-full after:transition-all"
            >
              ARCHIVE
            </a>
            <a
              href="#benchwork"
              onClick={handleNavClick}
              className="hover:text-[#141416] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#141416] hover:after:w-full after:transition-all"
            >
              BENCHWORK
            </a>
            <a
              href="#repairs"
              onClick={handleNavClick}
              className="hover:text-[#141416] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#141416] hover:after:w-full after:transition-all"
            >
              SAME-DAY REPAIRS
            </a>
            <a
              href="#provenance"
              onClick={handleNavClick}
              className="hover:text-[#141416] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#141416] hover:after:w-full after:transition-all"
            >
              PROVENANCE
            </a>
            <a
              href="#showroom"
              onClick={handleNavClick}
              className="hover:text-[#141416] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#141416] hover:after:w-full after:transition-all"
            >
              HAYES SHOWROOM
            </a>
          </nav>

          {/* Right: Sound Toggle + Showroom Booking CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleToggleSound}
              type="button"
              className={`px-2.5 sm:px-3 py-1.5 sm:py-2 border text-[10px] sm:text-[11px] font-mono tracking-[0.16em] uppercase flex items-center gap-1.5 transition-colors cursor-pointer ${
                isSoundOn
                  ? "border-[#141416] bg-[#141416] text-[#FAF9F5]"
                  : "border-[#E7E2DA] bg-white text-[#7A705E] hover:border-[#141416] hover:text-[#141416]"
              }`}
              title="Toggle ambient goldsmith audio drone"
              aria-label="Toggle ambient sound"
            >
              {isSoundOn ? (
                <>
                  <Volume2 className="w-3 h-3 text-[#C6A75E]" />
                  <span className="hidden sm:inline">SOUND: ON</span>
                  <span className="flex items-end gap-0.5 h-2.5">
                    <span className="w-0.5 bg-[#C6A75E] h-1.5 animate-pulse"></span>
                    <span className="w-0.5 bg-[#C6A75E] h-2.5 animate-pulse delay-75"></span>
                    <span className="w-0.5 bg-[#C6A75E] h-2 animate-pulse delay-150"></span>
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3 h-3 text-[#A89F91]" />
                  <span className="hidden sm:inline">SOUND: OFF</span>
                </>
              )}
            </button>

            {/* Direct WhatsApp Line */}
            <a
              href="https://wa.me/447955565137?text=Hi%20Niraj%20Jewellers%20team%2C%20I%20am%20exploring%20your%203D%20Digital%20Atelier%20and%20would%20like%20to%20inquire%20with%20a%20master%20goldsmith."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playTick()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 sm:py-2 border border-[#25D366]/40 bg-[#25D366]/5 text-[#128C7E] hover:bg-[#25D366] hover:text-white transition-all text-[10px] sm:text-[11px] font-mono tracking-[0.16em] uppercase"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WHATSAPP VIP</span>
            </a>

            {/* High-Converting Showroom Booking Action */}
            <button
              onClick={() => {
                sound.playTick();
                onOpenBooking?.("Flagship Atelier Consultation");
              }}
              type="button"
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#141416] text-[#FAF9F5] hover:bg-[#C6A75E] hover:text-[#141416] transition-colors text-[10px] sm:text-[11px] font-mono tracking-[0.18em] uppercase font-semibold cursor-pointer border border-[#141416] shrink-0"
            >
              <span>[ SHOWROOM: HAYES ]</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => {
                sound.playTick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 text-[#141416] hover:bg-[#E8DEC8]/20 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF9F5] border-b border-[#E7E2DA] px-6 py-6 flex flex-col gap-4 font-mono text-xs tracking-[0.2em] uppercase text-[#141416] animate-in fade-in slide-in-from-top-2 duration-200">
            <a href="#archive" onClick={handleNavClick} className="py-2 border-b border-[#E7E2DA]/60">
              [ 01 ] THE PERMANENT ARCHIVE
            </a>
            <a href="#benchwork" onClick={handleNavClick} className="py-2 border-b border-[#E7E2DA]/60">
              [ 02 ] 3D CAD & BENCHWORK
            </a>
            <a href="#repairs" onClick={handleNavClick} className="py-2 border-b border-[#E7E2DA]/60">
              [ 03 ] SAME-DAY LASER REPAIRS
            </a>
            <a href="#provenance" onClick={handleNavClick} className="py-2 border-b border-[#E7E2DA]/60">
              [ 04 ] LONDON ASSAY PROVENANCE
            </a>
            <a href="#showroom" onClick={handleNavClick} className="py-2 border-b border-[#E7E2DA]/60">
              [ 05 ] HAYES SHOWROOM LOGISTICS
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/447955565137"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="w-full py-2.5 text-center bg-[#25D366] text-white font-semibold text-xs tracking-[0.18em]"
              >
                DIRECT WHATSAPP CONCIERGE
              </a>
              <Link
                href="/"
                onClick={handleNavClick}
                className="w-full py-2 text-center text-[#7A705E] hover:text-[#141416] text-[11px]"
              >
                RETURN TO FULL MULTI-PAGE SITE →
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
