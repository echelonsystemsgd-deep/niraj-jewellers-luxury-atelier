"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, MessageCircle, Copy, Check, Sparkles, ShieldCheck, MapPin } from "lucide-react";
import { buildWhatsAppLink, NIRAJ_DISPLAY_PHONE, NIRAJ_SHOWROOM_ADDRESS } from "@/lib/whatsapp";

export interface EstimatorSummary {
  pieceType: string;
  metal: string;
  stones: string;
  budget: string;
  turnaroundDays: string;
  customNote?: string;
  clientName?: string;
}

interface QuoteSummaryModalProps {
  summary: EstimatorSummary | null;
  onClose: () => void;
}

export function QuoteSummaryModal({ summary, onClose }: QuoteSummaryModalProps) {
  const [copied, setCopied] = useState(false);
  const [clientName, setClientName] = useState("");

  if (!summary) return null;

  const whatsappLink = buildWhatsAppLink({
    source: "bespoke_estimator_option_b",
    pieceTitle: summary.pieceType,
    metalPurity: summary.metal,
    stones: summary.stones,
    estimatedBudget: summary.budget,
    clientName: clientName || undefined,
    customNote: `Estimated Workshop Turnaround: ${summary.turnaroundDays}. Looking forward to discussing CAD design and direct workshop pricing with Viky.`,
  });

  const formattedSummaryText = `*NIRAJ JEWELLERS — BESPOKE SPECIFICATIONS*
━━━━━━━━━━━━━━━━━━━━━━━
👑 Piece Type: ${summary.pieceType}
🌟 Metal Purity: ${summary.metal}
💎 Stone Selection: ${summary.stones}
💷 Estimated Budget: ${summary.budget}
⏳ Workshop Turnaround: ${summary.turnaroundDays}
${clientName ? `👤 Client: ${clientName}\n` : ""}
📍 Showroom: ${NIRAJ_SHOWROOM_ADDRESS}
📞 Workshop Line: ${NIRAJ_DISPLAY_PHONE}
━━━━━━━━━━━━━━━━━━━━━━━
Sent via Niraj Digital Atelier`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="relative w-full max-w-lg bg-obsidian border border-gold-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 space-y-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-platinum-muted hover:text-white bg-atelier border border-atelier-border transition-colors touch-target flex items-center justify-center"
          aria-label="Close quote summary"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-950/60 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bespoke Atelier Summary</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
            Your Custom Commission Brief
          </h3>
          <p className="text-xs text-platinum-muted max-w-sm mx-auto">
            Ready to review directly with Master Jeweller Viky on WhatsApp for exact 3D CAD modeling &amp; direct workshop pricing.
          </p>
        </div>

        {/* Client Name Input for personal touch */}
        <div className="space-y-1.5">
          <label className="text-xs text-platinum-muted block font-medium">
            Your Name (Optional for Consultation Greeting):
          </label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="e.g. Priya Sharma"
            className="w-full px-4 py-2.5 rounded-xl bg-atelier border border-atelier-border text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
          />
        </div>

        {/* Specifications Card */}
        <div className="p-4 sm:p-5 rounded-xl bg-atelier border border-atelier-border space-y-3 text-xs sm:text-sm">
          <div className="flex justify-between items-center pb-2 border-b border-atelier-border">
            <span className="text-platinum-muted">Jewellery Design:</span>
            <span className="text-white font-medium text-right">{summary.pieceType}</span>
          </div>

          <div className="flex justify-between items-center pb-2 border-b border-atelier-border">
            <span className="text-platinum-muted">Gold / Metal Purity:</span>
            <span className="text-gold-300 font-medium text-right">{summary.metal}</span>
          </div>

          <div className="flex justify-between items-center pb-2 border-b border-atelier-border">
            <span className="text-platinum-muted">Diamond / Gemstones:</span>
            <span className="text-white font-medium text-right">{summary.stones}</span>
          </div>

          <div className="flex justify-between items-center pb-2 border-b border-atelier-border">
            <span className="text-platinum-muted">Planned Investment:</span>
            <span className="text-white font-mono font-medium text-right">{summary.budget}</span>
          </div>

          <div className="flex justify-between items-center pt-1 text-gold-400">
            <span className="font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Workshop Turnaround:
            </span>
            <span className="font-bold">{summary.turnaroundDays}</span>
          </div>
        </div>

        {/* Action Buttons (Option B) */}
        <div className="space-y-3 pt-2">
          {/* 1-Tap WhatsApp Primary CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-dark text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-xl hover:shadow-whatsapp/25 transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 fill-black text-whatsapp" />
            <span>Send Specifications to Viky on WhatsApp</span>
          </a>

          {/* 1-Click Copy Secondary CTA */}
          <button
            onClick={handleCopy}
            className="w-full py-3 px-4 rounded-xl bg-atelier hover:bg-atelier-light border border-atelier-border text-platinum hover:text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gold-400" />
                <span>Copy Summary to Clipboard</span>
              </>
            )}
          </button>
        </div>

        {/* Security & Workshop Guarantee */}
        <div className="flex items-center justify-center gap-2 text-[11px] text-platinum-muted/80 pt-1">
          <MapPin className="w-3.5 h-3.5 text-gold-500" />
          <span>Handcrafted on-site at 136 Uxbridge Road, Hayes UB4 0JH</span>
        </div>
      </motion.div>
    </div>
  );
}
