"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, MapPin, ShieldCheck, ArrowUp, Mail, ExternalLink, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/luxury-icons";
import {
  NIRAJ_DISPLAY_PHONE,
  NIRAJ_UK_PHONE,
  NIRAJ_LANDLINE_PHONE,
  NIRAJ_MOBILE_PHONE,
  NIRAJ_SHOWROOM_ADDRESS,
  NIRAJ_EMAIL,
  NIRAJ_VAT_NUMBER,
  NIRAJ_COMPANY_REG,
  buildWhatsAppLink,
} from "@/lib/whatsapp";
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
    customNote: "Hi Niraj Jewellers team, I am contacting Niraj Jewellers Ltd from your website footer.",
  });

  return (
    <>
      <footer className="bg-[#FAF8F5] border-t border-[#E8DEC8] pt-16 pb-28 md:pb-16 text-[#4A4A52] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E8DEC8]">
            {/* Brand Col */}
            <div className="lg:col-span-2 space-y-4">
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-3.5 text-left focus:outline-none"
                aria-label="Scroll back to top"
              >
                {/* Official Crest Logo */}
                <div className="relative w-12 h-12 rounded-xl bg-white border border-[#D4AF37]/50 flex items-center justify-center shrink-0 shadow-sm group-hover:border-[#996515] transition-colors overflow-hidden">
                  <Image
                    src="/NIRAJ_LOGO9.png"
                    alt="Niraj Jewellers Ltd Crest"
                    fill
                    unoptimized
                    sizes="48px"
                    className="object-contain p-0.5"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold tracking-wider text-[#141416] uppercase group-hover:text-[#996515] transition-colors">
                    NIRAJ JEWELLERS <span className="text-sm font-semibold text-[#996515]">LTD</span>
                  </span>
                  <span className="text-[10px] tracking-[0.25em] text-[#8C6212] font-semibold uppercase block">
                    HAYES • LONDON • SINCE 1984
                  </span>
                </div>
              </button>
              <p className="text-xs leading-relaxed max-w-sm text-[#5A5960]">
                London&apos;s trusted bespoke goldsmith atelier and direct bullion dealer. Handcrafted 22ct Asian bridal suites, certified diamond rings, and in-house workshop repairs.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/nirajjewellersltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] text-[#141416] hover:text-[#996515] transition-colors shadow-sm"
                  aria-label="Instagram @nirajjewellersltd"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                </a>

                <a
                  href="https://www.tiktok.com/@nirajjewellersltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] text-[#141416] hover:text-[#996515] transition-colors shadow-sm"
                  aria-label="TikTok Atelier @nirajjewellersltd"
                  title="TikTok @nirajjewellersltd"
                >
                  <svg className="w-4 h-4 fill-current text-[#141416]" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.46 6.27 6.27 0 0 0 1.9-4.46V8.7a8.18 8.18 0 0 0 4.87 1.6V6.84a4.87 4.87 0 0 1-1-.15Z" />
                  </svg>
                </a>

                <a
                  href="https://www.tiktok.com/@nirajjewellersuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] text-[#141416] hover:text-[#996515] transition-colors shadow-sm"
                  aria-label="TikTok UK @nirajjewellersuk"
                  title="TikTok @nirajjewellersuk"
                >
                  <svg className="w-4 h-4 fill-current text-[#141416]" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.46 6.27 6.27 0 0 0 1.9-4.46V8.7a8.18 8.18 0 0 0 4.87 1.6V6.84a4.87 4.87 0 0 1-1-.15Z" />
                  </svg>
                </a>

                <a
                  href={whatsappFooterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#25D366]/50 text-[#128C7E] hover:text-[#075E54] transition-colors shadow-sm"
                  aria-label="WhatsApp Concierge"
                >
                  <WhatsAppIcon className="w-4 h-4" fill="#25D366" />
                </a>
              </div>
            </div>

            {/* Navigation Portals */}
            <div className="space-y-3">
              <h4 className="font-bold text-[#141416] uppercase tracking-wider text-xs">
                Explore Atelier
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/about" className="hover:text-[#996515] transition-colors">
                    About Us (Since 1984)
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="hover:text-[#996515] transition-colors">
                    Curated Collection
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="hover:text-[#996515] transition-colors">
                    Articles &amp; Goldsmith Guides
                  </Link>
                </li>
                <li>
                  <Link href="/showroom" className="hover:text-[#996515] transition-colors">
                    Hayes Flagship Showroom
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-[#996515] transition-colors">
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#996515] transition-colors">
                    Direct Atelier Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* In-House Services */}
            <div className="space-y-3">
              <h4 className="font-bold text-[#141416] uppercase tracking-wider text-xs">
                Workshop Services
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/repairs" className="hover:text-[#996515] transition-colors">
                    Same-Day Ring Resizing
                  </Link>
                </li>
                <li>
                  <Link href="/repairs" className="hover:text-[#996515] transition-colors">
                    Diamond Claw Retipping
                  </Link>
                </li>
                <li>
                  <Link href="/repairs" className="hover:text-[#996515] transition-colors">
                    Ultrasonic Steam Restoration
                  </Link>
                </li>
                <li>
                  <Link href="/repairs" className="hover:text-[#996515] transition-colors">
                    Luxury Watch Battery &amp; Sizing
                  </Link>
                </li>
                <li>
                  <a href="/#faq" className="hover:text-[#996515] transition-colors">
                    Client FAQs &amp; Scale Testing
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Hours */}
            <div className="space-y-3">
              <h4 className="font-bold text-[#141416] uppercase tracking-wider text-xs">
                Showroom Direct
              </h4>
              <div className="space-y-2.5 text-xs">
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#996515] shrink-0 mt-0.5" />
                  <span>{NIRAJ_SHOWROOM_ADDRESS}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#996515] shrink-0" />
                  <span className="text-[#7A7880] text-[11px]">Landline:</span>
                  <a href={`tel:${NIRAJ_LANDLINE_PHONE.replace(/\s+/g, "")}`} className="hover:text-[#996515] font-mono font-semibold text-[#141416]">
                    {NIRAJ_LANDLINE_PHONE}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#996515] shrink-0" />
                  <span className="text-[#7A7880] text-[11px]">Mobile:</span>
                  <a href={`tel:${NIRAJ_MOBILE_PHONE.replace(/\s+/g, "")}`} className="hover:text-[#996515] font-mono font-semibold text-[#141416]">
                    {NIRAJ_MOBILE_PHONE}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#996515] shrink-0" />
                  <a href={`mailto:${NIRAJ_EMAIL}`} className="hover:text-[#996515] font-mono truncate">
                    {NIRAJ_EMAIL}
                  </a>
                </p>
                <p className="text-[11px] text-[#7A7880] pt-1">
                  Mon: 12:00–17:00 | Tue–Sat: 11:00–17:00
                </p>
              </div>
            </div>
          </div>

          {/* Legal Compliance & Assurance Row */}
          <div className="py-6 border-b border-[#E8DEC8] flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/privacy"
                className="text-[#5A5960] hover:text-[#996515] transition-colors underline underline-offset-4"
              >
                Privacy Policy (UK GDPR)
              </Link>
              <Link
                href="/terms"
                className="text-[#5A5960] hover:text-[#996515] transition-colors underline underline-offset-4"
              >
                Atelier Terms &amp; Hallmarking Guarantee
              </Link>
              <a
                href="/#faq"
                className="text-[#5A5960] hover:text-[#996515] transition-colors"
              >
                Client FAQs
              </a>
              <Link
                href="/contact"
                className="text-[#5A5960] hover:text-[#996515] transition-colors"
              >
                Contact Atelier Team
              </Link>
            </div>

            <div className="flex items-center gap-2 text-[#8C6212] text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#996515]" />
              <span>London Assay Office (Goldsmiths&apos; Hall) Stamped</span>
            </div>
          </div>

          {/* Agency Attribution Row (Mercian Wealth Automation) */}
          <div className="py-5 border-b border-[#E8DEC8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs bg-white/70 px-4 rounded-xl mt-4">
            <div className="flex items-center gap-2 text-[#5A5960]">
              <Sparkles className="w-3.5 h-3.5 text-[#996515]" />
              <span>Digital Architecture &amp; Luxury Engineering:</span>
            </div>
            <a
              href="https://mercianwealth.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FAF7F2] hover:bg-[#F4ECE1] border border-[#D4AF37]/50 text-[#141416] hover:text-[#996515] font-semibold text-xs transition-all shadow-sm group"
            >
              <span>Designed &amp; Built by <strong className="font-bold text-[#8C6212] group-hover:underline">Mercian Wealth Automation</strong></span>
              <ExternalLink className="w-3.5 h-3.5 text-[#996515] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Bottom Bar: Copyright & Compliance */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#7A7880]">
            <div className="flex flex-wrap items-center gap-3 text-center md:text-left">
              <span>© {new Date().getFullYear()} Niraj Jewellers Ltd.</span>
              <span className="hidden sm:inline">•</span>
              <span>{NIRAJ_COMPANY_REG}</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-[#8C6212] font-semibold">VAT Reg No: {NIRAJ_VAT_NUMBER}</span>
              <span className="hidden sm:inline">•</span>
              <span>136 Uxbridge Road, Hayes UB4 0JH</span>
              <span className="hidden sm:inline">•</span>
              <Link
                href="/admin"
                rel="nofollow"
                className="text-[#9A98A0] hover:text-[#996515] transition-colors"
              >
                Staff Login
              </Link>
            </div>

            <button
              onClick={scrollToTop}
              className="hidden sm:flex items-center gap-1.5 text-[#141416] hover:text-[#996515] transition-colors shrink-0 font-medium mr-14 md:mr-16"
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
