"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Phone, X, Menu, ArrowRight, MapPin, Clock, ShieldCheck } from "lucide-react";
import { getLondonShowroomStatus, ShowroomStatus } from "@/lib/showroom-hours";

export function AtelierNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showroomStatus, setShowroomStatus] = useState<ShowroomStatus | null>(null);

  useEffect(() => {
    setShowroomStatus(getLondonShowroomStatus());
    const interval = setInterval(() => {
      setShowroomStatus(getLondonShowroomStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Background body scroll lock:
  // When mobile menu is open, freeze background scrolling cleanly without distorting scroll coordinates
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About Us", href: "/about", num: "01", desc: "40+ Years of Goldsmith Heritage" },
    { label: "Collection", href: "/collections", num: "02", desc: "Handcrafted 22ct Suites & Masterpieces" },
    { label: "Articles", href: "/articles", num: "03", desc: "Hallmark Guides, 3D CAD & Bullion Insights" },
    { label: "Showroom", href: "/showroom", num: "04", desc: "136 Uxbridge Road, Hayes Hub" },
    { label: "FAQs", href: "/faqs", num: "05", desc: "Direct Workshop Transparency & Answers" },
    { label: "Contact", href: "/contact", num: "06", desc: "Direct Workshop Lines & Showroom Details" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E7E2DA] shadow-[0_4px_24px_-4px_rgba(20,20,22,0.08)]"
            : "bg-[#FAF9F5] border-b border-[#E7E2DA]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-1.5 sm:gap-4">
          {/* Left: Official Royal Crest Logo & Brand */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-3 group focus:outline-none">
              <div className="relative w-8 h-8 sm:w-11 sm:h-11 overflow-hidden shrink-0 border border-[#D4AF37] shadow-xs p-0.5 bg-white group-hover:border-[#996515] transition-colors">
                <div className="relative w-full h-full overflow-hidden bg-white">
                  <Image
                    src="/NIRAJ_LOGO9.png"
                    alt="Niraj Jewellers Ltd Official Crest"
                    fill
                    unoptimized
                    sizes="44px"
                    className="object-contain p-0.5"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xs sm:text-base font-bold tracking-wider uppercase text-[#141416] group-hover:text-[#996515] transition-colors leading-tight whitespace-nowrap">
                  NIRAJ JEWELLERS <span className="text-[9px] sm:text-xs font-semibold text-[#996515]">LTD</span>
                </span>
                <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[#7A705E] leading-none mt-0.5 hidden sm:inline font-medium">
                  HAYES · LONDON · SINCE 1984
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Official 6 Navigation Pages (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-3.5 xl:space-x-6 text-[11px] xl:text-xs uppercase tracking-wider font-semibold whitespace-nowrap text-[#3D3C42]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}
                className="py-1 px-1 relative hover:text-[#996515] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Direct Workshop Landline & WhatsApp Concierge */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Direct Landline Phone CTA - Number displayed on both Mobile & Desktop */}
            <a
              href="tel:02085739323"
              className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-white border border-[#E7E2DA] hover:border-[#141416] text-[#141416] font-sans text-[10px] sm:text-xs font-semibold transition-all shadow-xs shrink-0"
              title="Call Workshop: 020 8573 9323"
              aria-label="Call Hayes Workshop at 020 8573 9323"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C6A75E] shrink-0" />
              <span>020 8573 9323</span>
            </a>

            {/* Direct WhatsApp Line (Hidden on mobile, compact on lg, full on xl) */}
            <a
              href="https://wa.me/447955565137?text=Hi%20Niraj%20Jewellers%20team%2C%20I%20am%20browsing%20your%20website%20and%20would%20like%20to%20inquire%20with%20a%20master%20goldsmith."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 xl:px-3.5 py-1.5 xl:py-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-[11px] xl:text-xs tracking-wide transition-all shadow-xs shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white text-white shrink-0" />
              <span className="hidden xl:inline">WhatsApp Concierge</span>
              <span className="xl:hidden">WhatsApp</span>
            </a>

            {/* Mobile Menu Hamburger (Strict 44px tap target) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-9 h-9 min-w-[36px] min-h-[36px] sm:w-11 sm:h-11 sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center text-[#141416] hover:bg-[#E8DEC8]/20 border border-[#E7E2DA] transition-colors shrink-0 rounded-none shadow-xs cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-[#141416]" />
            </button>
          </div>
        </div>
      </header>

      {/* Header Spacer for Fixed Navigation */}
      <div className="h-18 sm:h-20 shrink-0" aria-hidden="true" />

      {/* FULL-SCREEN ALL-ENCOMPASSING LUXURY MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#FAF9F5] text-[#141416] flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
        >
          {/* Top Bar inside Fullscreen Overlay */}
          <div className="border-b border-[#E8DEC8] px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between bg-[#FAF9F5] sticky top-0 z-10 shadow-xs">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="relative w-9 h-9 rounded-none overflow-hidden border border-[#D4AF37]/60 bg-white p-0.5 shadow-xs">
                <Image
                  src="/NIRAJ_LOGO9.png"
                  alt="Niraj Jewellers Ltd"
                  fill
                  unoptimized
                  sizes="36px"
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-lg font-bold tracking-wider text-[#141416] uppercase">
                  NIRAJ JEWELLERS <span className="text-xs text-[#996515]">LTD</span>
                </span>
                <span className="text-[8px] tracking-[0.2em] text-[#8C6212] font-semibold uppercase">
                  HAYES · LONDON · SINCE 1984
                </span>
              </div>
            </Link>

            {/* High-Contrast Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#D4AF37]/50 bg-white hover:bg-[#FAF7F2] text-[#996515] text-xs font-bold uppercase tracking-wider transition-colors min-h-[48px] shadow-xs cursor-pointer"
              aria-label="Close menu"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4 text-[#996515]" />
            </button>
          </div>

          {/* Middle: Official 6 Navigation Portals */}
          <div className="px-5 sm:px-8 pt-5 pb-28 flex-1 max-w-2xl mx-auto w-full space-y-4 sm:space-y-5">
            {/* Dynamic London Showroom Status Indicator */}
            <div className="pb-3 border-b border-[#E8DEC8] flex items-center justify-between text-xs text-[#57534E] font-sans">
              <span className="uppercase tracking-wider font-medium">SHOWROOM ACCESS:</span>
              {showroomStatus ? (
                showroomStatus.isOpen ? (
                  <span className="inline-flex items-center gap-1.5 text-[#128C7E] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                    <span>OPEN · WALK-INS WELCOME</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-[#996515] font-semibold text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
                    <span>CLOSED · {showroomStatus.nextEventText.toUpperCase()}</span>
                  </span>
                )
              ) : (
                <span className="inline-flex items-center gap-1.5 text-[#7A7880]">
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                  <span>136 UXBRIDGE ROAD</span>
                </span>
              )}
            </div>

            {/* Dual Phone Numbers (Landline + Mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-3 bg-white border border-[#E8DEC8] flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-[#FAF7F2] border border-[#D4AF37]/40 flex items-center justify-center text-[#996515]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold tracking-wider text-[#8C6212]">Showroom Landline</p>
                    <p className="font-sans text-xs font-semibold text-[#141416]">020 8573 9323</p>
                  </div>
                </div>
                <a
                  href="tel:02085739323"
                  className="px-3 py-1.5 bg-[#141416] text-white text-[11px] font-bold uppercase tracking-wider"
                >
                  Call
                </a>
              </div>

              <div className="p-3 bg-white border border-[#E8DEC8] flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-[#FAF7F2] border border-[#D4AF37]/40 flex items-center justify-center text-[#996515]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold tracking-wider text-[#8C6212]">Workshop Mobile</p>
                    <p className="font-sans text-xs font-semibold text-[#141416]">07955 565137</p>
                  </div>
                </div>
                <a
                  href="tel:07955565137"
                  className="px-3 py-1.5 bg-[#C6A75E] text-[#141416] text-[11px] font-bold uppercase tracking-wider"
                >
                  Call
                </a>
              </div>
            </div>

            {/* Navigation Links in Official Atelier Order */}
            <nav className="space-y-1 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                  }}
                  className="group flex items-center justify-between py-3.5 px-3.5 rounded-none hover:bg-white hover:text-[#996515] transition-all min-h-[48px] border border-transparent hover:border-[#E8DEC8]"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-xs text-[#8C6212] font-semibold">{link.num}</span>
                    <div>
                      <div className="font-serif text-lg font-medium tracking-wide text-[#141416] group-hover:text-[#996515]">
                        {link.label}
                      </div>
                      <div className="text-xs text-[#7A705E]">
                        {link.desc}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C6A75E] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom Concierge & Logistics Bar */}
          <div className="border-t border-[#E8DEC8] px-5 sm:px-8 py-5 bg-white sticky bottom-0 z-10 space-y-3">
            <a
              href="https://wa.me/447955565137?text=Hi%20Niraj%20Jewellers%20team%2C%20I%20am%20browsing%20your%20website%20and%20would%20like%20to%20inquire%20with%20a%20master%20goldsmith."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm min-h-[48px]"
            >
              <MessageSquare className="w-4 h-4 fill-white text-white" />
              <span>WhatsApp Master Goldsmith Concierge</span>
            </a>

            <div className="flex items-center justify-between text-[11px] font-sans text-[#7A705E] px-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C6A75E]" />
                <span>136 Uxbridge Road, Hayes UB4 0JH</span>
              </span>
              <span>Mon 12:00 to 17:00 | Tue to Sat 11:00 to 17:30</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
