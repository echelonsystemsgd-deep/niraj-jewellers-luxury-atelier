"use client";

import { useState } from "react";
import { X, ShieldCheck, FileText, Lock, Scale, Building2 } from "lucide-react";
import { NIRAJ_SHOWROOM_ADDRESS, NIRAJ_DISPLAY_PHONE, NIRAJ_EMAIL, NIRAJ_VAT_NUMBER, NIRAJ_COMPANY_REG } from "@/lib/whatsapp";
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-obsidian border border-gold-500/40 rounded-2xl shadow-2xl z-10 flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-atelier-border flex items-center justify-between bg-atelier">
          <div className="flex items-center gap-2 text-white">
            <Scale className="w-5 h-5 text-gold-400" />
            <h3 className="font-serif text-xl sm:text-2xl font-normal">
              Legal Compliance &amp; Workshop Guarantees
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-platinum-muted hover:text-white bg-obsidian border border-atelier-border transition-colors touch-target flex items-center justify-center"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-atelier-border bg-obsidian px-6 pt-3 gap-4">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`pb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors relative ${
              activeTab === "privacy"
                ? "text-gold-400"
                : "text-platinum-muted hover:text-white"
            }`}
          >
            <span>UK GDPR Privacy Policy</span>
            {activeTab === "privacy" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("terms")}
            className={`pb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors relative ${
              activeTab === "terms"
                ? "text-gold-400"
                : "text-platinum-muted hover:text-white"
            }`}
          >
            <span>Atelier Terms &amp; Hallmarking</span>
            {activeTab === "terms" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500" />
            )}
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-platinum-muted leading-relaxed">
          {activeTab === "privacy" ? (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white text-sm mb-1 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-gold-400" />
                  <span>1. Data Controller Information</span>
                </h4>
                <p>
                  This Privacy Policy outlines how <strong>Shiva Technology Ltd t/a Niraj Jewellers</strong> (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), registered in England &amp; Wales, collects and protects your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
                <p className="mt-1 font-mono text-[11px] text-platinum-muted/80">
                  Registered Address: {NIRAJ_SHOWROOM_ADDRESS} | Telephone: {NIRAJ_DISPLAY_PHONE}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white text-sm mb-1">
                  2. Personal Data We Collect
                </h4>
                <p>
                  When you configure a bespoke ring in our Estimator, book a private showroom viewing, or contact us via WhatsApp, we collect only necessary consultation data:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-0.5">
                  <li>Client Name and Contact Number (Mobile / WhatsApp)</li>
                  <li>Bespoke jewelry specifications (metal purity, stone choice, budget tier)</li>
                  <li>Showroom viewing date and purpose of visit</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white text-sm mb-1">
                  3. Purpose of Processing &amp; WhatsApp Communication
                </h4>
                <p>
                  Your information is utilized solely to prepare 3D CAD design proposals, coordinate private showroom viewings, provide wholesale bullion quotations, and communicate directly with Master Jeweller Viky. We never sell, lease, or monetize your contact details with external third-party advertisers.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white text-sm mb-1">
                  4. Your Statutory UK GDPR Rights
                </h4>
                <p>
                  Under UK data protection laws, you retain the right to request access to your consultation records, request correction of inaccurate details, or request total deletion of your communication logs at any time by messaging {NIRAJ_DISPLAY_PHONE}.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white text-sm mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                  <span>1. UK Hallmarking Act 1973 Statutory Guarantee</span>
                </h4>
                <p>
                  Under the UK Hallmarking Act 1973, all precious metal articles manufactured or retailed by Niraj Jewellers are submitted to the <strong>London Assay Office (Goldsmiths&apos; Hall)</strong> for independent fineness testing and hallmarking stamping prior to customer handover:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-0.5">
                  <li><strong>22ct Gold:</strong> 916 parts per thousand fine gold</li>
                  <li><strong>18ct Gold:</strong> 750 parts per thousand fine gold</li>
                  <li><strong>950 Platinum:</strong> 950 parts per thousand pure platinum</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white text-sm mb-1">
                  2. Bespoke Commission Deposit Structure
                </h4>
                <p>
                  Custom commissions undergo a structured workflow:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-0.5">
                  <li><strong>30% Deposit:</strong> Required upon your formal sign-off of the photorealistic 3D CAD render to initiate precious metal casting and loose diamond acquisition.</li>
                  <li><strong>70% Final Balance:</strong> Settled only upon your personal inspection, sizing verification, and showroom collection.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white text-sm mb-1">
                  3. In-House Workshop Custody Guarantee
                </h4>
                <p>
                  All diamond claw retipping, laser ring resizing, ultrasonic polishings, and battery replacements are performed exclusively inside our Hayes showroom workshop benches. Your jewellery never leaves our physical custody and is fully secured under monitored CCTV surveillance.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white text-sm mb-1">
                  4. Scrap Gold &amp; Bullion Trade-In Valuations
                </h4>
                <p>
                  Scrap gold exchange valuations are calculated transparently using calibrated trade-approved electronic scales in your presence, referenced against live London Bullion Market (LBMA) spot fixes for the day.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-atelier-border bg-atelier flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Close &amp; Return to Atelier
          </button>
        </div>
      </div>
    </div>
  );
}
