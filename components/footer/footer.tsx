"use client";

import { useState } from "react";
import Link from "next/link";
import { Instagram, Phone, MapPin, MessageCircle, ShieldCheck, ArrowUp, Scale } from "lucide-react";
import { NIRAJ_DISPLAY_PHONE, NIRAJ_SHOWROOM_ADDRESS, buildWhatsAppLink } from "@/lib/whatsapp";
import { LegalModal, LegalTab } from "@/components/legal/legal-modal";

export function Footer() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>("privacy");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openLegal = (tab: LegalTab) => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  const whatsappFooterLink = buildWhatsAppLink({
    source: "footer_contact",
    customNote: "Hello Viky, I am contacting Niraj Jewellers from your website footer.",
  });

  return (
    <>
      <footer className="bg-obsidian border-t border-atelier-border pt-16 pb-28 md:pb-16 text-platinum-muted text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-atelier-border">
            {/* Brand Col */}
            <div className="lg:col-span-2 space-y-4">
              <button
                onClick={scrollToTop}
                className="text-left focus:outline-none group"
                aria-label="Scroll back to top"
              >
                <span className="font-serif text-2xl font-bold tracking-wider text-white uppercase group-hover:text-gold-400 transition-colors">
                  NIRAJ JEWELLERS
                </span>
                <span className="text-[10px] tracking-[0.25em] text-gold-500 font-medium uppercase block">
                  HAYES • LONDON • EST. DECADES
                </span>
              </button>
              <p className="text-xs leading-relaxed max-w-sm">
                London&apos;s trusted bespoke goldsmith atelier and direct bullion dealer. Handcrafted 22ct Asian bridal suites, certified diamond rings, and in-house workshop repairs.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/nirajjewellersltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-atelier hover:bg-atelier-light border border-atelier-border text-platinum hover:text-white transition-colors"
                  aria-label="Instagram @nirajjewellersltd"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                </a>

                <a
                  href="https://www.tiktok.com/@nirajjewellersltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-atelier hover:bg-atelier-light border border-atelier-border text-platinum hover:text-white transition-colors"
                  aria-label="TikTok @nirajjewellersltd"
                >
                  <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.46 6.27 6.27 0 0 0 1.9-4.46V8.7a8.18 8.18 0 0 0 4.87 1.6V6.84a4.87 4.87 0 0 1-1-.15Z" />
                  </svg>
                </a>

                <a
                  href={whatsappFooterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-atelier hover:bg-atelier-light border border-atelier-border text-platinum hover:text-white transition-colors"
                  aria-label="WhatsApp Viky"
                >
                  <MessageCircle className="w-4 h-4 text-whatsapp" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white uppercase tracking-wider text-xs">
                Atelier Collections
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#collections" className="hover:text-gold-400 transition-colors">
                    Bespoke Bridal Suites
                  </a>
                </li>
                <li>
                  <a href="#collections" className="hover:text-gold-400 transition-colors">
                    Solitaire Engagement Rings
                  </a>
                </li>
                <li>
                  <a href="#collections" className="hover:text-gold-400 transition-colors">
                    Solid 22ct Gold Kadas
                  </a>
                </li>
                <li>
                  <a href="#collections" className="hover:text-gold-400 transition-colors">
                    Polki &amp; Heritage Sets
                  </a>
                </li>
                <li>
                  <a href="#gold-rates" className="hover:text-gold-400 transition-colors">
                    24ct Investment Bullion
                  </a>
                </li>
              </ul>
            </div>

            {/* Services & Workshop */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white uppercase tracking-wider text-xs">
                In-House Services
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#repairs" className="hover:text-gold-400 transition-colors">
                    Same-Day Ring Resizing
                  </a>
                </li>
                <li>
                  <a href="#repairs" className="hover:text-gold-400 transition-colors">
                    Diamond Claw Retipping
                  </a>
                </li>
                <li>
                  <a href="#repairs" className="hover:text-gold-400 transition-colors">
                    Ultrasonic Polishing
                  </a>
                </li>
                <li>
                  <a href="#repairs" className="hover:text-gold-400 transition-colors">
                    Watch Battery &amp; Sizing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-gold-400 transition-colors">
                    Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Hours */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white uppercase tracking-wider text-xs">
                Showroom Contact
              </h4>
              <div className="space-y-2 text-xs">
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                  <span>{NIRAJ_SHOWROOM_ADDRESS}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <a href="tel:+447955565137" className="hover:text-white font-mono">
                    {NIRAJ_DISPLAY_PHONE}
                  </a>
                </p>
                <p className="text-[11px] text-platinum-muted pt-1">
                  Mon: 12:00–17:00 | Tue–Sat: 11:00–17:00
                </p>
              </div>
            </div>
          </div>

          {/* Legal Compliance Row */}
          <div className="py-6 border-b border-atelier-border/60 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/privacy"
                className="text-platinum hover:text-gold-400 transition-colors underline underline-offset-4"
              >
                Privacy Policy (UK GDPR)
              </Link>
              <Link
                href="/terms"
                className="text-platinum hover:text-gold-400 transition-colors underline underline-offset-4"
              >
                Atelier Terms &amp; Hallmarking Guarantee
              </Link>
              <a
                href="#faq"
                className="text-platinum hover:text-gold-400 transition-colors"
              >
                Client FAQs
              </a>
            </div>

            <div className="flex items-center gap-2 text-gold-400 text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>London Assay Office (Goldsmiths&apos; Hall) Stamped</span>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Compliance */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-platinum-muted/80">
            <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
              <span>© {new Date().getFullYear()} Niraj Jewellers (Shiva Technology Ltd). All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span>136 Uxbridge Road, Hayes UB4 0JH</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-platinum hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Legal Dialog Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        initialTab={legalTab}
        onClose={() => setLegalModalOpen(false)}
      />
    </>
  );
}
