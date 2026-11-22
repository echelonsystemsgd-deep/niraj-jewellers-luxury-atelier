"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, MessageCircle, Copy, Check, Sparkles, ShieldCheck } from "lucide-react";
import { buildWhatsAppLink, NIRAJ_DISPLAY_PHONE, NIRAJ_UK_PHONE, NIRAJ_SHOWROOM_ADDRESS } from "@/lib/whatsapp";
import { useScrollLock } from "@/lib/use-scroll-lock";

export interface QuoteSummary {
  pieceType: string;
  metal: string;
  stones: string;
  budget: string;
  turnaroundDays: string;
}

export type EstimatorSummary = QuoteSummary;

interface QuoteSummaryModalProps {
  summary: QuoteSummary | null;
  onClose: () => void;
}

export function QuoteSummaryModal({ summary, onClose }: QuoteSummaryModalProps) {
  useScrollLock(!!summary);
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
    customNote: `Estimated Workshop Turnaround: ${summary.turnaroundDays}. Looking forward to discussing CAD design and direct workshop pricing with your atelier team.`,
  });

  const formattedSummaryText = `*NIRAJ JEWELLERS LTD - BESPOKE SPECIFICATIONS*
━━━━━━━━━━━━━━━━━━━━━━━
👑 Piece Type: ${summary.pieceType}
🌟 Metal Purity: ${summary.metal}
💎 Stone Selection: ${summary.stones}
💷 Estimated Budget: ${summary.budget}
⏳ Workshop Turnaround: ${summary.turnaroundDays}
${clientName ? `👤 Client: ${clientName}\n` : ""}
📍 Showroom: ${NIRAJ_SHOWROOM_ADDRESS}
📞 Workshop Line: ${NIRAJ_UK_PHONE}
━━━━━━━━━━━━━━━━━━━━━━━
Sent via Niraj Jewellers Ltd Digital Atelier`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="relative w-full max-w-lg bg-white border border-[#E8DEC8] rounded-2xl p-6 sm:p-8 shadow-2xl z-10 space-y-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#5A5960] hover:text-[#141416] bg-[#FAF7F2] border border-[#E8DEC8] transition-colors touch-target flex items-center justify-center shadow-sm"
          aria-label="Close quote summary"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/50 text-[#8C6212] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#996515]" />
            <span>Bespoke Atelier Summary</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141416]">
            Your Custom Commission Brief
          </h3>
          <p className="text-xs text-[#5A5960] max-w-sm mx-auto">
            Ready to review directly with our master goldsmiths on WhatsApp for exact 3D CAD modeling &amp; direct workshop pricing.
          </p>
        </div>

        {/* Client Name Input */}
        <div className="space-y-1.5">
          <label className="text-xs text-[#141416] block font-bold">
            Your Name (Optional for Consultation Greeting):
          </label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="e.g. Priya Sharma"
            className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] text-[#141416] text-sm focus:outline-none focus:border-[#996515] transition-colors"
          />
        </div>

        {/* Specifications Card */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] space-y-3 text-xs sm:text-sm">
          <div className="flex justify-between items-center pb-2 border-b border-[#EFE8DA]">
            <span className="text-[#5A5960]">Jewellery Design:</span>
            <span className="text-[#141416] font-bold text-right">{summary.pieceType}</span>
          </div>

          <div className="flex justify-between items-center pb-2 border-b border-[#EFE8DA]">
            <span className="text-[#5A5960]">Gold / Metal Purity:</span>
            <span className="text-[#8C6212] font-bold text-right">{summary.metal}</span>
          </div>

          <div className="flex justify-between items-center pb-2 border-b border-[#EFE8DA]">
            <span className="text-[#5A5960]">Diamond / Gemstones:</span>
            <span className="text-[#141416] font-bold text-right">{summary.stones}</span>
          </div>

          <div className="flex justify-between items-center pb-2 border-b border-[#EFE8DA]">
            <span className="text-[#5A5960]">Planned Investment:</span>
            <span className="text-[#141416] font-mono font-bold text-right">{summary.budget}</span>
          </div>

          <div className="flex justify-between items-center pt-1 text-[#8C6212]">
            <span className="font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Workshop Turnaround:
            </span>
            <span className="font-bold text-[#141416]">{summary.turnaroundDays}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          {/* 1-Tap WhatsApp Primary CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 fill-white text-transparent" />
            <span>Send Specifications to Atelier on WhatsApp</span>
          </a>

          {/* 1-Click Copy Secondary CTA */}
          <button
            onClick={handleCopy}
            className="w-full py-3 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#F4ECE1] border border-[#E8DEC8] text-[#141416] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#996515]" />
                <span>Copy Summary Text</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
