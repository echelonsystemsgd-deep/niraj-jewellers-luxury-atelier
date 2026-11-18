"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Phone, Menu, X, Sparkles, MapPin } from "lucide-react";
import { ShowroomStatusBadge } from "./showroom-status";
import { buildWhatsAppLink, NIRAJ_DISPLAY_PHONE } from "@/lib/whatsapp";

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export function Navbar({ onOpenBookingModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Collections", href: "#collections" },
    { label: "Estimator", href: "#estimator" },
    { label: "Repairs", href: "#repairs" },
    { label: "Gold Rates", href: "#gold-rates" },
    { label: "Showroom", href: "#showroom" },
    { label: "FAQs", href: "#faq" },
  ];

  const whatsappHeroLink = buildWhatsAppLink({
    source: "navbar_vip_button",
    customNote: "Hello Viky, I would like to enquire about bespoke jewellery / gold rates.",
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#09090B]/95 backdrop-blur-xl border-b border-gold-500/20 shadow-2xl py-2.5 sm:py-3"
          : "bg-[#09090B]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 lg:gap-6">
          {/* 1. Brand Mark */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none text-left"
              aria-label="Niraj Jewellers Home - Scroll to top"
            >
              {/* Luxury Monogram Crest */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-gold-400/20 via-zinc-900 to-black border border-gold-500/40 flex items-center justify-center shrink-0 shadow-sm group-hover:border-gold-400 transition-colors">
                <span className="font-serif font-bold text-xs sm:text-sm text-gold-300 tracking-tighter">NJ</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold tracking-wider text-zinc-100 group-hover:text-gold-400 transition-colors uppercase whitespace-nowrap">
                  NIRAJ JEWELLERS
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.22em] text-gold-500/90 font-medium uppercase -mt-0.5 flex items-center gap-1.5 whitespace-nowrap">
                  <span>HAYES</span>
                  <span className="text-zinc-600">•</span>
                  <span>LONDON</span>
                  <span className="text-zinc-600">•</span>
                  <span>EST. DECADES</span>
                </span>
              </div>
            </button>

            {/* Live Showroom Micro-Status for Wide Desktops */}
            <div className="hidden 2xl:flex items-center pl-2 border-l border-zinc-800">
              <ShowroomStatusBadge variant="compact" />
            </div>
          </div>

          {/* 2. Desktop Navigation Links (concise, high-legibility, perfectly spaced) */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-[11px] xl:text-xs uppercase tracking-wider text-zinc-300 font-medium whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-gold-400 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* 3. Action CTAs (ALWAYS pinned and visible without clipping) */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 shrink-0">
            {/* VIP Viewing appointment trigger */}
            {onOpenBookingModal && (
              <button
                onClick={onOpenBookingModal}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 xl:px-3.5 xl:py-2 rounded-full border border-gold-500/40 text-gold-300 hover:text-white hover:border-gold-400 hover:bg-gold-500/10 text-[11px] xl:text-xs tracking-wider uppercase font-medium transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span className="hidden xl:inline">VIP Viewing</span>
                <span className="xl:hidden">VIP</span>
              </button>
            )}

            {/* Primary Direct WhatsApp CTA */}
            <a
              href={whatsappHeroLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-black font-semibold text-xs tracking-wide transition-all shadow-md hover:shadow-whatsapp/25 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-black text-whatsapp" />
              <span className="hidden sm:inline">WhatsApp Viky</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile / Tablet Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 border border-zinc-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-gold-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bg-[#09090B]/98 border-b border-zinc-800 backdrop-blur-2xl p-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {/* Status Badge in Mobile Drawer */}
          <div className="pb-4 mb-3 border-b border-zinc-800/80 flex justify-between items-center">
            <span className="text-xs text-zinc-400">Hayes Flagship Status:</span>
            <ShowroomStatusBadge variant="compact" />
          </div>

          <nav className="flex flex-col space-y-3 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-zinc-200 hover:text-gold-400 border-b border-zinc-900"
              >
                <span>{link.label}</span>
                <span className="text-gold-500 text-xs">→</span>
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              {onOpenBookingModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="w-full py-2.5 rounded-xl border border-gold-500/50 text-gold-300 bg-gold-950/20 text-center font-medium text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>Book VIP Showroom Viewing</span>
                </button>
              )}

              <a
                href={whatsappHeroLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-whatsapp text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-black text-whatsapp" />
                <span>Message Viky on WhatsApp ({NIRAJ_DISPLAY_PHONE})</span>
              </a>

              <a
                href="tel:+447955565137"
                className="w-full py-2 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white text-center font-medium text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                <span>Call Showroom: {NIRAJ_DISPLAY_PHONE}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
