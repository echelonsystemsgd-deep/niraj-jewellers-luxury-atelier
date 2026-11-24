"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Scale, Building2, CheckCircle2 } from "lucide-react";
import { NIRAJ_SHOWROOM_ADDRESS, NIRAJ_DISPLAY_PHONE, NIRAJ_UK_PHONE, NIRAJ_VAT_NUMBER, NIRAJ_COMPANY_REG } from "@/lib/whatsapp";
import { useScrollLock } from "@/lib/use-scroll-lock";

export type LegalTab = "privacy" | "terms";

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
}

export function LegalModal({ isOpen, initialTab = "privacy", onClose }: LegalModalProps) {
  useScrollLock(isOpen);
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="relative w-full max-w-3xl max-h-[85vh] bg-white border border-[#E8DEC8] rounded-none overflow-hidden shadow-2xl z-10 flex flex-col"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#E8DEC8] flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-2 text-[#141416]">
            <Scale className="w-5 h-5 text-[#996515]" />
            <h3 className="font-serif text-xl sm:text-2xl font-normal">
              Legal Compliance &amp; Workshop Guarantees
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#5A5960] hover:text-[#141416] bg-white border border-[#E8DEC8] transition-colors touch-target flex items-center justify-center shadow-sm"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#E8DEC8] bg-[#FAF7F2] px-6 pt-3 gap-4">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`pb-3 text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors relative ${
              activeTab === "privacy"
                ? "text-[#8C6212]"
                : "text-[#5A5960] hover:text-[#141416]"
            }`}
          >
            <span>UK GDPR Privacy Policy</span>
            {activeTab === "privacy" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#996515]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("terms")}
            className={`pb-3 text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors relative ${
              activeTab === "terms"
                ? "text-[#8C6212]"
                : "text-[#5A5960] hover:text-[#141416]"
            }`}
          >
            <span>Atelier Terms &amp; Hallmarking</span>
            {activeTab === "terms" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#996515]" />
            )}
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-[#4A4A52] leading-relaxed">
          {activeTab === "privacy" ? (
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-[#141416] text-sm mb-1 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#996515]" />
                  <span>1. Data Controller Information</span>
                </h4>
                <p>
                  This Privacy Policy outlines how <strong>Niraj Jewellers Ltd</strong> (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), registered in England &amp; Wales, collects and protects your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
                <p className="mt-1 font-mono text-[11px] text-[#7A7880]">
                  Registered Address: {NIRAJ_SHOWROOM_ADDRESS} | Telephone: {NIRAJ_UK_PHONE}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#141416] text-sm mb-1">
                  2. Personal Data We Collect
                </h4>
                <p>
                  When you configure a bespoke ring in our Estimator, book a private showroom viewing, or contact us via WhatsApp, we collect only necessary consultation data:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Client name and contact telephone / WhatsApp handle</li>
                  <li>Bespoke commission specifications (metal purity, finger size, gemstone preferences)</li>
                  <li>Voluntarily submitted design sketch images or Instagram reference links</li>
                  <li>Anonymized Google Analytics traffic metrics to monitor site performance</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#141416] text-sm mb-1">
                  3. Purpose of Processing &amp; WhatsApp Communication
                </h4>
                <p>
                  Your information is utilized solely to prepare 3D CAD design proposals, coordinate private showroom viewings, provide wholesale bullion quotations, and communicate directly with our master goldsmiths. We never sell, lease, or monetize your contact details with external third-party advertisers.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#141416] text-sm mb-1">
                  4. Your Statutory UK GDPR Rights
                </h4>
                <p>
                  Under UK data protection laws, you retain the right to request access to your consultation records, request correction of inaccurate details, or request total deletion of your communication logs at any time by messaging {NIRAJ_UK_PHONE}.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-[#141416] text-sm mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#996515]" />
                  <span>1. UK Hallmarking Act 1973 Guarantee</span>
                </h4>
                <p>
                  Every precious metal jewellery piece sold by Niraj Jewellers Ltd complies strictly with the <strong>UK Hallmarking Act 1973</strong>. Every article of gold weighing over 1 gram is independently assayed and stamped by the London Assay Office at Goldsmiths&apos; Hall.
                </p>
                <div className="p-3 bg-[#FAF7F2] rounded-none border border-[#E8DEC8] mt-2 space-y-1">
                  <span className="font-bold text-[#8C6212] block">Official UK Compulsory Marks Applied:</span>
                  <p className="text-[11px]">
                    1. Sponsor&apos;s Mark • 2. Millesimal Fineness Mark (916 for 22ct / 750 for 18ct / 950 for Platinum) • 3. Assay Office Mark (London Leopard&apos;s Head)
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#141416] text-sm mb-1">
                  2. Bespoke Commissioning Terms &amp; Deposit Structure
                </h4>
                <p>
                  To protect both client and workshop during high-purity precious metal casting:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>A 30% production deposit is required only after you have reviewed and formally approved the photorealistic 3D CAD design render.</li>
                  <li>The remaining 70% balance is settled upon in-person inspection and collection at 136 Uxbridge Road.</li>
                  <li>All bespoke commissions include 1 complimentary ring re-sizing within 60 days of collection.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#141416] text-sm mb-1">
                  3. Live Bullion Trading &amp; Anti-Money Laundering (AML) Compliance
                </h4>
                <p>
                  As an authorized physical gold bullion trader and precious metal dealer:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Live bullion transactions adhere to prevailing London Bullion Market Association (LBMA) spot prices at execution time.</li>
                  <li>In accordance with UK HMRC Anti-Money Laundering Regulations, high-value transactions require valid government-issued photographic ID (Passport or UK Driving License) and proof of address.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#141416] text-sm mb-1">
                  4. In-House Workshop Repairs &amp; Same-Day Service
                </h4>
                <p>
                  All repairs, laser solders, claw retippings, and gemstone resettings are performed on-site at our Hayes workshop. We take complete responsibility for your items while under our care.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[#E8DEC8] bg-[#FAF7F2] flex items-center justify-between text-xs">
          <span className="text-[#5A5960] text-[11px]">
            London Assay Office Regulated • UK Hallmarking Act 1973
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#141416] hover:bg-[#996515] text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
