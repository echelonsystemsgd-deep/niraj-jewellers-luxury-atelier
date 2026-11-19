"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Menu, X, ArrowRight } from "lucide-react";
import { ShowroomStatusBadge } from "./showroom-status";
import { ScrollProgressBar } from "./scroll-progress-bar";
import { buildWhatsAppLink, NIRAJ_UK_PHONE, NIRAJ_DISPLAY_PHONE, NIRAJ_EMAIL } from "@/lib/whatsapp";
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
      label: "Collections",
      href: isHome ? "#collections" : "/collections",
      route: "/collections",
      num: "01",
      desc: "Bridal Suites, 22ct Sets & Polki",
    },
    {
      label: "Bespoke",
      href: isHome ? "#bespoke" : "/bespoke",
      route: "/bespoke",
      num: "02",
      desc: "3D CAD & Custom Commissions",
    },
    {
      label: "Repairs",
      href: isHome ? "#repairs" : "/repairs",
      route: "/repairs",
      num: "03",
      desc: "In-House Workshop & Same-Day Sizing",
    },
    {
      label: "Gold Rates",
      href: isHome ? "#gold-rates" : "/gold-rates",
      route: "/gold-rates",
      num: "04",
      desc: "Live LBMA Spot & Wholesale Bullion",
    },
    {
      label: "Articles",
      href: "/articles",
      route: "/articles",
      num: "05",
      desc: "Hallmark Guides, 3D CAD & Bullion Insights",
    },
    {
      label: "Showroom",
      href: isHome ? "#showroom" : "/showroom",
      route: "/showroom",
      num: "06",
      desc: "136 Uxbridge Road, Hayes Hub",
    },
    {
      label: "Contact",
      href: "/contact",
      route: "/contact",
      num: "07",
      desc: "Direct Workshop Lines & Consultations",
    },
  ];

  const whatsappHeroLink = buildWhatsAppLink({
    intent: "general",
    customNote: "Hi Niraj Jewellers team, I am browsing your website and would like to enquire about bespoke jewellery / showroom appointments.",
  });

  return (
    <>
      {/* 0. Metallic Gold Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 1. Main Navigation Bar with Balanced 3-Column Luxury Architecture */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-[#E8DEC8] shadow-[0_4px_24px_-4px_rgba(212,175,55,0.12)] py-2.5 sm:py-3"
            : "bg-white/90 backdrop-blur-md border-b border-[#EFE8DA] py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:gap-6">
            {/* Column 1: Left Brand Mark with Official Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/"
                className="group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none text-left"
                aria-label="Niraj Jewellers Ltd Home"
              >
                {/* Official Royal Crest Logo */}
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-lg overflow-hidden shrink-0 border border-[#D4AF37]/40 shadow-sm group-hover:border-[#996515] transition-colors bg-[#FAF7F2]">
                  <Image
                    src="/NIRAJ_LOGO9.png"
                    alt="Niraj Jewellers Ltd Official Crest"
                    fill
                    sizes="44px"
                    className="object-contain p-0.5"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-base sm:text-lg lg:text-xl font-bold tracking-wider text-[#141416] group-hover:text-[#996515] transition-colors uppercase whitespace-nowrap">
                    NIRAJ JEWELLERS <span className="text-xs font-semibold text-[#996515] tracking-normal">LTD</span>
                  </span>
                  <span className="text-[8px] sm:text-[9.5px] tracking-[0.22em] text-[#8C6212] font-semibold uppercase -mt-0.5 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                    <span>HAYES</span>
                    <span className="text-[#C5A059]">•</span>
                    <span>LONDON</span>
                    <span className="text-[#C5A059]">•</span>
                    <span>SINCE 1984</span>
                  </span>
                </div>
              </Link>
            </div>

            {/* Column 2: Center Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[11px] xl:text-xs uppercase tracking-wider font-semibold whitespace-nowrap">
              {navLinks.map((link) => {
                const isActive = !isHome && pathname.startsWith(link.route);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`py-1.5 px-0.5 relative group transition-colors ${
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

            {/* Column 3: Right Action Buttons (Direct Phone Line CTA + WhatsApp) */}
            <div className="flex items-center justify-end space-x-2 sm:space-x-3 shrink-0">
              {/* Direct Phone Number Header CTA */}
              <a
                href={`tel:${NIRAJ_UK_PHONE.replace(/\s+/g, "")}`}
                className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#FAF7F2] hover:bg-[#F4ECE1] border border-[#D4AF37]/50 text-[#141416] hover:text-[#996515] font-semibold text-xs tracking-wide transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 whitespace-nowrap group"
                aria-label={`Call direct workshop line: ${NIRAJ_DISPLAY_PHONE}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#996515] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-[11.5px] sm:text-xs text-[#141416] group-hover:text-[#996515]">{NIRAJ_UK_PHONE}</span>
              </a>

              {/* Tablet & Desktop WhatsApp Pill */}
              <a
                href={whatsappHeroLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-xs tracking-wide transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-transparent" />
                <span>WhatsApp Concierge</span>
              </a>

              {/* Mobile Phone Call Button */}
              <a
                href={`tel:${NIRAJ_UK_PHONE.replace(/\s+/g, "")}`}
                className="sm:hidden w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#F4ECE1] border border-[#D4AF37]/50 text-[#996515] flex items-center justify-center shrink-0 transition-colors shadow-sm"
                aria-label={`Call ${NIRAJ_UK_PHONE}`}
              >
                <Phone className="w-4 h-4 text-[#996515]" />
              </a>

              {/* Mobile WhatsApp icon button */}
              <a
                href={whatsappHeroLink}
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center shrink-0 transition-colors shadow-sm"
                aria-label="WhatsApp Concierge"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              </a>

              {/* Mobile / Tablet Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-[#141416] hover:text-[#996515] bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] transition-colors flex items-center justify-center shrink-0 shadow-sm"
                aria-label="Open luxury navigation menu"
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
            className="fixed inset-0 z-[100] bg-white text-[#141416] flex flex-col justify-between overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
          >
            {/* Top Bar inside Fullscreen Overlay */}
            <div className="border-b border-[#E8DEC8] px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between bg-white sticky top-0 z-10">
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
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#FAF7F2] hover:bg-[#F4ECE1] text-[#996515] text-xs font-semibold uppercase tracking-wider transition-colors"
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

              {/* Direct Phone Highlight in Mobile Menu */}
              <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#F4ECE1] flex items-center justify-center text-[#996515]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#8C6212]">Direct Atelier Line</p>
                    <p className="font-mono text-sm font-semibold text-[#141416]">{NIRAJ_UK_PHONE}</p>
                  </div>
                </div>
                <a
                  href={`tel:${NIRAJ_UK_PHONE.replace(/\s+/g, "")}`}
                  className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#996515] to-[#C5A059] text-white text-xs font-bold uppercase tracking-wider shadow-sm"
                >
                  Call Now
                </a>
              </div>

              <nav className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = !isHome && pathname.startsWith(link.route);
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex items-center justify-between py-3.5 px-3 rounded-xl transition-all ${
                        isActive
                          ? "bg-[#FAF7F2] text-[#996515] border-l-4 border-[#996515]"
                          : "text-[#141416] hover:bg-[#FAF7F2] hover:text-[#996515]"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-[#8C6212] font-semibold">{link.num}</span>
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
            <div className="border-t border-[#E8DEC8] px-5 sm:px-8 py-5 bg-[#FAF7F2] sticky bottom-0 z-10 space-y-3">
              <a
                href={whatsappHeroLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
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
