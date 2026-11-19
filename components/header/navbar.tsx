"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Menu, X, MapPin, Mail, ArrowRight } from "lucide-react";
import { ShowroomStatusBadge } from "./showroom-status";
import { ScrollProgressBar } from "./scroll-progress-bar";
import { buildWhatsAppLink, NIRAJ_DISPLAY_PHONE, NIRAJ_EMAIL } from "@/lib/whatsapp";
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
      desc: "WhatsApp, Phone & Email Direct Lines",
    },
  ];

  const whatsappHeroLink = buildWhatsAppLink({
    intent: "general",
    customNote: "Hi Viky, I am browsing your website and would like to enquire about bespoke jewellery / gold rates.",
  });

  return (
    <>
      {/* 0. Metallic Gold Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 1. Main Navigation Bar with Balanced 3-Column Symmetry */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#09090B]/95 backdrop-blur-xl border-b border-gold-500/20 shadow-2xl py-2.5 sm:py-3"
            : "bg-[#09090B]/90 backdrop-blur-md border-b border-white/[0.08] py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Column 1: Left Brand Mark (Equal balance with right column) */}
            <div className="flex items-center gap-3 shrink-0 lg:w-[240px] min-w-0">
              <Link
                href="/"
                className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none text-left"
                aria-label="Niraj Jewellers Home"
              >
                {/* Luxury Monogram Crest */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-gold-400/20 via-zinc-900 to-black border border-gold-500/40 flex items-center justify-center shrink-0 shadow-sm group-hover:border-gold-400 transition-colors">
                  <span className="font-serif font-bold text-xs sm:text-sm text-gold-300 tracking-tighter">NJ</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-serif text-base sm:text-lg lg:text-xl font-bold tracking-wider text-zinc-100 group-hover:text-gold-400 transition-colors uppercase whitespace-nowrap">
                    NIRAJ JEWELLERS
                  </span>
                  <span className="text-[8px] sm:text-[9px] tracking-[0.2em] text-gold-500/90 font-medium uppercase -mt-0.5 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                    <span>HAYES</span>
                    <span className="text-zinc-600">•</span>
                    <span>LONDON</span>
                    <span className="text-zinc-600">•</span>
                    <span>EST. DECADES</span>
                  </span>
                </div>
              </Link>
            </div>

            {/* Column 2: Center Navigation Links (Mathematically Centered & Symmetrical) */}
            <nav className="hidden lg:flex items-center justify-center space-x-5 xl:space-x-7 text-[11px] xl:text-xs uppercase tracking-wider font-medium whitespace-nowrap flex-1">
              {navLinks.map((link) => {
                const isActive = !isHome && pathname.startsWith(link.route);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`py-1.5 px-0.5 relative group transition-colors ${
                      isActive ? "text-gold-300 font-bold" : "text-zinc-300 hover:text-gold-400"
                    }`}
                  >
                    {link.label}
                    {isActive ? (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-amber-300 rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                    ) : (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500/70 transition-all duration-200 group-hover:w-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Column 3: Right Action Buttons (lg:w-[240px] for True Symmetry with Left Column) */}
            <div className="flex items-center justify-end space-x-2 sm:space-x-3 shrink-0 lg:w-[240px]">
              {/* Tablet & Desktop WhatsApp Pill */}
              <a
                href={whatsappHeroLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-black font-semibold text-xs tracking-wide transition-all shadow-md hover:shadow-whatsapp/25 transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-black text-whatsapp" />
                <span>WhatsApp Viky</span>
              </a>

              {/* Mobile compact WhatsApp icon button */}
              <a
                href={whatsappHeroLink}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden w-9 h-9 rounded-full bg-whatsapp/20 hover:bg-whatsapp/30 border border-whatsapp/50 text-whatsapp flex items-center justify-center shrink-0 transition-colors"
                aria-label="WhatsApp Viky"
              >
                <MessageCircle className="w-4 h-4 fill-whatsapp text-transparent" />
              </a>

              {/* Mobile / Tablet Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-platinum hover:text-white bg-atelier border border-atelier-border hover:border-gold-500/50 transition-colors flex items-center justify-center shrink-0 shadow-sm"
                aria-label="Open luxury navigation menu"
              >
                <Menu className="w-5 h-5 text-gold-400" />
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
            className="fixed inset-0 z-[100] bg-[#09090B] text-zinc-200 flex flex-col justify-between overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
          >
            {/* Top Bar inside Fullscreen Overlay */}
            <div className="border-b border-zinc-800/80 px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between bg-[#09090B] sticky top-0 z-10">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400/20 via-zinc-900 to-black border border-gold-500/40 flex items-center justify-center">
                  <span className="font-serif font-bold text-xs text-gold-300">NJ</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold tracking-wider text-white uppercase">
                    NIRAJ JEWELLERS
                  </span>
                  <span className="text-[8px] tracking-[0.2em] text-gold-500 font-medium uppercase">
                    HAYES • LONDON
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-500/40 bg-zinc-900/80 hover:bg-zinc-800 text-gold-300 text-xs font-medium uppercase tracking-wider transition-colors"
                aria-label="Close menu"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4 text-gold-400" />
              </button>
            </div>

            {/* Middle: Luxury Editorial Menu Items */}
            <div className="px-5 sm:px-8 py-6 flex-1 max-w-2xl mx-auto w-full space-y-6">
              <div className="pb-3 border-b border-zinc-900 flex items-center justify-between text-xs text-zinc-400">
                <span>Showroom Status:</span>
                <ShowroomStatusBadge variant="compact" />
              </div>

              <nav className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = !isHome && pathname.startsWith(link.route);
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex items-center justify-between py-3.5 border-b border-zinc-900/80 transition-colors ${
                        isActive ? "border-gold-500/50 bg-gold-950/10 px-2 rounded-lg" : "hover:border-gold-500/40"
                      }`}
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-gold-500/80">{link.num}</span>
                        <div>
                          <span className={`font-serif text-2xl sm:text-3xl transition-colors block ${
                            isActive ? "text-gold-300 font-semibold" : "text-zinc-100 group-hover:text-gold-300"
                          }`}>
                            {link.label}
                          </span>
                          <span className="text-[11px] text-zinc-500 block -mt-0.5">
                            {link.desc}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                    </Link>
                  );
                })}

                <Link
                  href={isHome ? "#faq" : "/#faq"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between py-3.5 border-b border-zinc-900/80 hover:border-gold-500/40 transition-colors"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-gold-500/80">08</span>
                    <div>
                      <span className="font-serif text-2xl sm:text-3xl text-zinc-100 group-hover:text-gold-300 transition-colors block">
                        Client FAQs
                      </span>
                      <span className="text-[11px] text-zinc-500 block -mt-0.5">
                        Trade-In Gold Scales &amp; Hallmarking Guarantees
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                </Link>
              </nav>

              {/* Action Button inside Menu */}
              <div className="pt-4">
                <a
                  href={whatsappHeroLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-dark text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-black text-whatsapp" />
                  <span>Message Viky on WhatsApp ({NIRAJ_DISPLAY_PHONE})</span>
                </a>
              </div>
            </div>

            {/* Bottom Bar: Verified Contact Channels & Address */}
            <div className="border-t border-zinc-800/80 bg-zinc-950/90 px-5 sm:px-8 py-5 text-xs text-zinc-400 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={`tel:+${NIRAJ_DISPLAY_PHONE.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>{NIRAJ_DISPLAY_PHONE}</span>
                </a>

                <a
                  href={`mailto:${NIRAJ_EMAIL}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span className="truncate">{NIRAJ_EMAIL}</span>
                </a>

                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span className="truncate">136 Uxbridge Road, Hayes</span>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-900 text-[10px] text-zinc-500 flex justify-between items-center">
                <span>Niraj Jewellers London</span>
                <span>Mon: 12–5pm | Tue–Sat: 11–5pm</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
