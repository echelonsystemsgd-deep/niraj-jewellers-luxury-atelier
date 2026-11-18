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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Collections & Reels", href: "#collections" },
    { label: "Bespoke Estimator", href: "#estimator" },
    { label: "In-House Repairs", href: "#repairs" },
    { label: "Live Gold Rates", href: "#gold-rates" },
    { label: "Hayes Showroom", href: "#showroom" },
  ];

  const whatsappHeroLink = buildWhatsAppLink({
    source: "navbar_vip_button",
    customNote: "Hello Viky, I would like to enquire about bespoke jewellery / gold rates.",
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-obsidian/95 backdrop-blur-md border-b border-atelier-border/80 shadow-2xl py-3"
          : "bg-gradient-to-b from-obsidian/90 via-obsidian/60 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark */}
          <Link
            href="#"
            className="group flex flex-col focus:outline-none"
            aria-label="Niraj Jewellers Home"
          >
            <span className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider text-platinum group-hover:text-gold-400 transition-colors uppercase">
              NIRAJ JEWELLERS
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-gold-500/90 font-medium uppercase -mt-0.5 sm:-mt-1 flex items-center gap-1.5">
              <span>HAYES</span>
              <span className="text-atelier-border">•</span>
              <span>LONDON</span>
              <span className="text-atelier-border">•</span>
              <span>EST. DECADES</span>
            </span>
          </Link>

          {/* Desktop Real-time Status Badge */}
          <div className="hidden lg:flex items-center">
            <ShowroomStatusBadge />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-7 text-xs uppercase tracking-widest text-platinum-muted font-medium">
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

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {onOpenBookingModal && (
              <button
                onClick={onOpenBookingModal}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-gold-600/40 text-gold-300 hover:text-white hover:border-gold-400 hover:bg-gold-500/10 text-xs tracking-wider uppercase font-medium transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>VIP Viewing</span>
              </button>
            )}

            <a
              href={whatsappHeroLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-black font-semibold text-xs tracking-wide transition-all shadow-lg hover:shadow-whatsapp/20 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-black text-whatsapp" />
              <span>WhatsApp Viky</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={whatsappHeroLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-whatsapp/20 text-whatsapp border border-whatsapp/40"
              aria-label="WhatsApp Viky"
            >
              <MessageCircle className="w-4 h-4 fill-whatsapp text-transparent" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-platinum-muted hover:text-platinum hover:bg-atelier border border-atelier-border"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[96px] bg-obsidian/98 border-b border-atelier-border backdrop-blur-xl p-5 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-4 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-platinum hover:text-gold-400 border-b border-atelier-border/50"
              >
                <span>{link.label}</span>
                <span className="text-gold-600 text-xs">→</span>
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2.5">
              {onOpenBookingModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="w-full py-3 rounded-xl border border-gold-500/50 text-gold-300 bg-gold-950/20 text-center font-medium text-sm flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>Book VIP Showroom Viewing</span>
                </button>
              )}

              <a
                href={whatsappHeroLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-whatsapp text-black font-semibold text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-black text-whatsapp" />
                <span>Message Viky on WhatsApp ({NIRAJ_DISPLAY_PHONE})</span>
              </a>

              <a
                href="tel:+447955565137"
                className="w-full py-2.5 rounded-xl border border-atelier-border text-platinum-muted hover:text-white text-center font-medium text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-platinum" />
                <span>Call Showroom: {NIRAJ_DISPLAY_PHONE}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
