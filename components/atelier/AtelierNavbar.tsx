"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Phone, X, Menu } from "lucide-react";

export function AtelierNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About Us", href: "/about" },
    { label: "Collection", href: "/collections" },
    { label: "Articles", href: "/articles" },
    { label: "Showroom", href: "/showroom" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ];

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
          {/* Left: Official Royal Crest Logo & Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none">
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden shrink-0 border border-[#D4AF37] shadow-xs p-0.5 bg-white group-hover:border-[#996515] transition-colors">
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-white">
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
                <span className="font-serif text-sm sm:text-base font-bold tracking-wider uppercase text-[#141416] group-hover:text-[#996515] transition-colors leading-tight">
                  NIRAJ JEWELLERS <span className="text-[10px] sm:text-xs font-semibold text-[#996515]">LTD</span>
                </span>
                <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[#7A705E] leading-none mt-0.5">
                  HAYES · LONDON · SINCE 1984
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Viky's 6 Official Navigation Pages (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-wider font-semibold whitespace-nowrap text-[#3D3C42]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-1 px-1 relative hover:text-[#996515] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Direct Workshop Phone & WhatsApp Concierge */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Direct Phone CTA (Hidden on tiny screens) */}
            <a
              href="tel:02085739323"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E7E2DA] hover:border-[#141416] text-[#141416] font-mono text-[11px] font-semibold transition-all shadow-xs"
              title="Call Workshop: 020 8573 9323"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6A75E]" />
              <span>020 8573 9323</span>
            </a>

            {/* Direct WhatsApp Line */}
            <a
              href="https://wa.me/447955565137?text=Hi%20Niraj%20Jewellers%20team%2C%20I%20am%20browsing%20your%20website%20and%20would%20like%20to%20inquire%20with%20a%20master%20goldsmith."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-xs tracking-wide transition-all shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp Concierge</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile Menu Hamburger (Strict 44px tap target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center text-[#141416] hover:bg-[#E8DEC8]/20 border border-[#E7E2DA] transition-colors shrink-0 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#141416]" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF9F5] border-b border-[#E7E2DA] px-6 py-6 flex flex-col gap-3 font-mono text-xs tracking-[0.18em] uppercase text-[#141416] animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link, idx) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#E7E2DA]/60 flex items-center justify-between"
              >
                <span>[ 0{idx + 1} ] {link.label}</span>
                <span className="text-[#C6A75E]">→</span>
              </Link>
            ))}

            <div className="pt-3 flex flex-col gap-2">
              <a
                href="tel:02085739323"
                className="w-full py-3 text-center bg-white border border-[#E7E2DA] text-[#141416] font-bold text-xs tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A75E]" />
                <span>CALL WORKSHOP: 020 8573 9323</span>
              </a>

              <a
                href="https://wa.me/447955565137"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center bg-[#25D366] text-white font-semibold text-xs tracking-wider flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WHATSAPP MASTER GOLDSMITH</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
