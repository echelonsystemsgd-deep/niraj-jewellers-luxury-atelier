"use client";

import { useState } from "react";
import Link from "next/link";
import { Instagram, Phone, MapPin, MessageCircle, ShieldCheck, ArrowUp, Scale, Mail } from "lucide-react";
import { NIRAJ_DISPLAY_PHONE, NIRAJ_SHOWROOM_ADDRESS, NIRAJ_EMAIL, NIRAJ_VAT_NUMBER, NIRAJ_COMPANY_REG, buildWhatsAppLink } from "@/lib/whatsapp";
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
                className="group flex items-center gap-3 text-left focus:outline-none"
                aria-label="Scroll back to top"
              >
                {/* Luxury Monogram Crest */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400/20 via-zinc-900 to-black border border-gold-500/40 flex items-center justify-center shrink-0 shadow-sm group-hover:border-gold-400 transition-colors">
                  <span className="font-serif font-bold text-base text-gold-300 tracking-tighter">NJ</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold tracking-wider text-white uppercase group-hover:text-gold-400 transition-colors">
                    NIRAJ JEWELLERS
                  </span>
                  <span className="text-[10px] tracking-[0.25em] text-gold-500 font-medium uppercase block">
                    HAYES • LONDON • EST. DECADES
                  </span>
                </div>
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
                Atelier Portals
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/collections" className="hover:text-gold-400 transition-colors">
                    Curated Collections &amp; Reels
                  </Link>
                </li>
                <li>
                  <Link href="/bespoke" className="hover:text-gold-400 transition-colors">
                    Bespoke Atelier &amp; 3D CAD
                  </Link>
                </li>
                <li>
                  <Link href="/repairs" className="hover:text-gold-400 transition-colors">
                    In-House Goldsmith Repairs
                  </Link>
                </li>
                <li>
                  <Link href="/gold-rates" className="hover:text-gold-400 transition-colors">
                    Live Gold Bullion Rates
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="hover:text-gold-400 transition-colors">
                    Articles &amp; Goldsmith Guides
                  </Link>
                </li>
                <li>
                  <Link href="/showroom" className="hover:text-gold-400 transition-colors">
                    Hayes Flagship Showroom
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gold-400 transition-colors">
                    Direct VIP Consultation
                  </Link>
                </li>
              </ul>
            </div>

            {/* In-House Services */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white uppercase tracking-wider text-xs">
                Workshop Services
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/repairs" className="hover:text-gold-400 transition-colors">
                    Same-Day Ring Resizing
                  </Link>
                </li>
                <li>
                  <Link href="/repairs" className="hover:text-gold-400 transition-colors">
                    Diamond Claw Retipping
                  </Link>
                </li>
                <li>
                  <Link href="/repairs" className="hover:text-gold-400 transition-colors">
                    Ultrasonic Steam Restoration
                  </Link>
                </li>
                <li>
                  <Link href="/repairs" className="hover:text-gold-400 transition-colors">
                    Luxury Watch Battery &amp; Sizing
                  </Link>
                </li>
                <li>
                  <a href="/#faq" className="hover:text-gold-400 transition-colors">
                    Client FAQs &amp; Scale Testing
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Hours */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white uppercase tracking-wider text-xs">
                Showroom Direct
              </h4>
              <div className="space-y-2.5 text-xs">
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
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <a href={`mailto:${NIRAJ_EMAIL}`} className="hover:text-white font-mono truncate">
                    {NIRAJ_EMAIL}
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
                href="/#faq"
                className="text-platinum hover:text-gold-400 transition-colors"
              >
                Client FAQs
              </a>
              <Link
                href="/contact"
                className="text-platinum hover:text-gold-400 transition-colors"
              >
                Contact Viky
              </Link>
            </div>

            <div className="flex items-center gap-2 text-gold-400 text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>London Assay Office (Goldsmiths&apos; Hall) Stamped</span>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Compliance */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-platinum-muted/80">
            <div className="flex flex-wrap items-center gap-3 text-center md:text-left">
              <span>© {new Date().getFullYear()} Niraj Jewellers (Shiva Technology Ltd).</span>
              <span className="hidden sm:inline">•</span>
              <span>Co. Reg: {NIRAJ_COMPANY_REG}</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-gold-400/90 font-medium">VAT Reg No: {NIRAJ_VAT_NUMBER}</span>
              <span className="hidden sm:inline">•</span>
              <span>136 Uxbridge Road, Hayes UB4 0JH</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-platinum hover:text-white transition-colors shrink-0"
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
