"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/luxury-icons";
import { ShowroomStatusBadge } from "./showroom-status";
import { ScrollProgressBar } from "./scroll-progress-bar";
import { buildWhatsAppLink, NIRAJ_UK_PHONE, NIRAJ_DISPLAY_PHONE, NIRAJ_LANDLINE_PHONE, NIRAJ_MOBILE_PHONE } from "@/lib/whatsapp";
import { useScrollLock } from "@/lib/use-scroll-lock";

interface NavbarProps {
  subpageTitle?: string;
}

export function Navbar({ subpageTitle }: NavbarProps = {}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useScrollLock(mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      label: "About Us",
      href: "/about",
      route: "/about",
      num: "01",
      desc: "40+ Years of Goldsmith Heritage",
    },
    {
      label: "Collection",
      href: "/collections",
      route: "/collections",
      num: "02",
      desc: "Handcrafted 22ct Suites & Masterpieces",
    },
    {
      label: "Articles",
      href: "/articles",
      route: "/articles",
      num: "03",
      desc: "Hallmark Guides, 3D CAD & Bullion Insights",
    },
    {
      label: "Showroom",
      href: "/showroom",
      route: "/showroom",
      num: "04",
      desc: "136 Uxbridge Road, Hayes Hub",
    },
    {
      label: "FAQs",
      href: "/faqs",
      route: "/faqs",
      num: "05",
      desc: "Direct Workshop Transparency & Answers",
    },
    {
      label: "Contact",
      href: "/contact",
      route: "/contact",
      num: "06",
      desc: "Direct Workshop Lines & Showroom Details",
    },
  ];

  const whatsappHeroLink = buildWhatsAppLink({
    intent: "general",
    customNote: "Hi Niraj Jewellers team, I am browsing your website and would like to enquire about bespoke jewellery craftsmanship and visiting your Hayes atelier.",
  });

  return (
    <>
      {/* 0. Metallic Gold Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 1. Main Navigation Bar with Balanced 3-Column Luxury Architecture */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FBF9F5]/95 backdrop-blur-xl border-b border-[#E8DEC8] shadow-[0_4px_24px_-4px_rgba(212,175,55,0.12)] py-2.5 sm:py-3"
            : "bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#EFE8DA] py-3 sm:py-3.5"
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-8">
            {/* Column 1: Left Brand Mark with Official Logo (hard-left anchored) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link
                href="/"
                className="group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none text-left"
                aria-label="Niraj Jewellers Ltd Home"
              >
                {/* Official Royal Crest Logo with Hammered Gold Accent */}
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden shrink-0 border border-hammered-gold shadow-sm group-hover:border-[#996515] transition-all texture-hammered-subtle p-0.5">
                  <div className="relative w-full h-full rounded-lg overflow-hidden bg-white/90">
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
                  <span className="font-serif text-[13px] sm:text-base lg:text-lg font-bold tracking-wider text-[#141416] group-hover:text-[#996515] transition-colors uppercase whitespace-nowrap">
                    NIRAJ JEWELLERS <span className="text-[9px] sm:text-xs font-semibold text-[#996515] tracking-normal">LTD</span>
                  </span>
                  <span className="text-[7px] sm:text-[9px] tracking-[0.16em] sm:tracking-[0.22em] text-[#8C6212] font-semibold uppercase -mt-0.5 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                    <span>HAYES</span>
                    <span className="text-[#C5A059]">•</span>
                    <span>LONDON</span>
                    <span className="text-[#C5A059]">•</span>
                    <span>SINCE 1984</span>
                  </span>
                </div>
              </Link>
            </div>

            {/* Column 2: Center Navigation Links (balanced spacing across 1024 - 1920px) */}
            <nav className="hidden lg:flex items-center space-x-3.5 xl:space-x-6 text-[10.5px] xl:text-xs uppercase tracking-wider font-semibold whitespace-nowrap">
              {navLinks.map((link) => {
                const isActive = !isHome && pathname.startsWith(link.route);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}
                    className={`py-1 px-1 relative group transition-colors ${
                      isActive ? "text-[#996515] font-bold" : "text-[#3D3C42] hover:text-[#996515]"
                    }`}
                  >
                    {link.label}
                    {isActive ? (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#996515] to-[#C5A059] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                    ) : (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-200 group-hover:w-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Column 3: Right Action Buttons */}
            <div className="flex items-center justify-end gap-2 sm:gap-3 shrink-0">
              {/* Direct Phone Number Header CTA (Shown on sm-md and xl+) */}
              <a
                href={`tel:${NIRAJ_UK_PHONE.replace(/\s+/g, "")}`}
                className="hidden sm:inline-flex lg:hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#FAF7F2] hover:bg-[#F4ECE1] border border-[#D4AF37]/50 text-[#141416] hover:text-[#996515] font-semibold text-xs tracking-wide transition-all shadow-sm hover:shadow-md whitespace-nowrap group"
                aria-label={`Call direct workshop line: ${NIRAJ_DISPLAY_PHONE}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#996515] group-hover:scale-110 transition-transform" />
                <span className="font-sans text-[11px] sm:text-xs text-[#141416] group-hover:text-[#996515] font-semibold">{NIRAJ_UK_PHONE}</span>
              </a>

              {/* Mobile Call Icon Button (Strict 44px+ tap target) */}
              <a
                href={`tel:${NIRAJ_UK_PHONE.replace(/\s+/g, "")}`}
                className="sm:hidden w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#FAF7F2] hover:bg-[#F4ECE1] border border-[#D4AF37]/60 text-[#996515] flex items-center justify-center shrink-0 transition-colors shadow-sm active:scale-95"
                aria-label={`Call direct workshop line: ${NIRAJ_DISPLAY_PHONE}`}
              >
                <Phone className="w-4 h-4 text-[#996515]" />
              </a>

              {/* Tablet & Desktop WhatsApp Pill with official Meta WhatsApp Green */}
              <a
                href={whatsappHeroLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold text-xs tracking-wide transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4" fill="white" />
                <span>WhatsApp Concierge</span>
              </a>

              {/* Mobile / Tablet Menu Toggle Button (guaranteed min 44px tap target) */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl text-[#141416] hover:text-[#996515] bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] transition-colors flex items-center justify-center shrink-0 shadow-sm"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5 text-[#996515]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Full-Screen Luxury Mobile Menu with Fluid Spring Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#FBF9F5] text-[#141416] flex flex-col justify-between overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
          >
            {/* Top Bar inside Fullscreen Overlay */}
            <div className="border-b border-[#E8DEC8] px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between bg-[#FBF9F5] sticky top-0 z-10">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#D4AF37]/50 bg-[#FAF7F2]">
                  <Image
                    src="/NIRAJ_LOGO9.png"
                    alt="Niraj Jewellers Ltd"
                    fill
                    unoptimized
                    sizes="32px"
                    className="object-contain p-0.5"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold tracking-wider text-[#141416] uppercase">
                    NIRAJ JEWELLERS <span className="text-xs text-[#996515]">LTD</span>
                  </span>
                  <span className="text-[8px] tracking-[0.2em] text-[#8C6212] font-semibold uppercase">
                    HAYES • LONDON • SINCE 1984
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#D4AF37]/40 bg-[#FAF7F2] hover:bg-[#F4ECE1] text-[#996515] text-xs font-semibold uppercase tracking-wider transition-colors min-h-[48px]"
                aria-label="Close menu"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4 text-[#996515]" />
              </button>
            </div>

            {/* Middle: Luxury Editorial Menu Items */}
            <div className="px-5 sm:px-8 py-6 flex-1 max-w-2xl mx-auto w-full space-y-6">
              <div className="pb-3 border-b border-[#EFE8DA] flex items-center justify-between text-xs text-[#5A5960]">
                <span>Showroom Status:</span>
                <ShowroomStatusBadge variant="compact" />
              </div>

              {/* Dual Direct Phone Highlights in Mobile Menu (Landline + Mobile) */}
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white border border-[#E8DEC8] flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/40 flex items-center justify-center text-[#996515]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[#8C6212]">Showroom Landline</p>
                      <p className="font-sans text-sm font-semibold text-[#141416]">{NIRAJ_LANDLINE_PHONE}</p>
                    </div>
                  </div>
                  <a
                    href={`tel:${NIRAJ_LANDLINE_PHONE.replace(/\s+/g, "")}`}
                    className="px-3.5 py-2 rounded-full bg-gradient-to-r from-[#996515] to-[#C5A059] text-white text-xs font-bold uppercase tracking-wider shadow-sm min-h-[44px] inline-flex items-center"
                    aria-label={`Call showroom landline ${NIRAJ_LANDLINE_PHONE}`}
                  >
                    Call
                  </a>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#E8DEC8] flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/40 flex items-center justify-center text-[#996515]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[#8C6212]">Workshop Mobile</p>
                      <p className="font-sans text-sm font-semibold text-[#141416]">{NIRAJ_MOBILE_PHONE}</p>
                    </div>
                  </div>
                  <a
                    href={`tel:${NIRAJ_MOBILE_PHONE.replace(/\s+/g, "")}`}
                    className="px-3.5 py-2 rounded-full bg-[#FAF7F2] hover:bg-[#F4ECE1] border border-[#D4AF37]/60 text-[#996515] text-xs font-bold uppercase tracking-wider shadow-sm min-h-[44px] inline-flex items-center"
                    aria-label={`Call workshop mobile ${NIRAJ_MOBILE_PHONE}`}
                  >
                    Call
                  </a>
                </div>
              </div>

              <nav className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = !isHome && pathname.startsWith(link.route);
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                      }}
                      className={`group flex items-center justify-between py-3.5 px-3 rounded-xl transition-all min-h-[48px] ${
                        isActive
                          ? "bg-white text-[#996515] border-l-4 border-[#996515] shadow-sm"
                          : "text-[#141416] hover:bg-white hover:text-[#996515]"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-sans text-xs text-[#8C6212] font-semibold">{link.num}</span>
                        <div>
                          <div className="font-serif text-lg font-medium tracking-wide">
                            {link.label}
                          </div>
                          <div className="text-xs text-[#6B6A72] group-hover:text-[#141416] transition-colors">
                            {link.desc}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom: Fast Contact Concierge Bar */}
            <div className="border-t border-[#E8DEC8] px-5 sm:px-8 py-5 bg-white sticky bottom-0 z-10 space-y-3">
              <a
                href={whatsappHeroLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md min-h-[48px]"
              >
                <WhatsAppIcon className="w-4 h-4" fill="white" />
                <span>Message Atelier Concierge</span>
              </a>
              <div className="flex items-center justify-center text-[10px] text-[#7A7880] tracking-wider uppercase">
                <span>136 Uxbridge Road, Hayes • London UB4 0JH</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
