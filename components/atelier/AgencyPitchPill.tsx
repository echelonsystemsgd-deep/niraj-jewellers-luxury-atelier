"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import { Sparkles, X, ArrowUpRight, CheckCircle2, Mail, ExternalLink } from "lucide-react";

export function AgencyPitchPill() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    sound.playTick();
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Badge (Bottom-Left) */}
      <aside aria-label="Prototype attribution and pitch overview" className="fixed bottom-4 left-4 z-40">
        <button
          onClick={handleToggle}
          type="button"
          className="px-3.5 py-2 border border-[#141416] bg-[#141416]/95 backdrop-blur-md text-[#FAF9F5] hover:bg-[#C6A75E] hover:text-[#141416] transition-all text-[10px] sm:text-[11px] font-mono tracking-[0.18em] uppercase flex items-center gap-2 shadow-2xl cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C6A75E]" />
          <span>PROTOTYPE CONCEPT · MERCIAN WEALTH ↗</span>
        </button>
      </aside>

      {/* Slide-Over Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-start bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={handleToggle}
        >
          <div
            className="relative w-full max-w-md h-full bg-[#FAF9F5] border-r border-[#141416] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-[#E7E2DA] pb-4 mb-6">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.24em] text-[#C6A75E] uppercase block">
                    [ ATELIER STRATEGY BRIEF ]
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#141416]">
                    Why This Prototype Converts
                  </h3>
                </div>
                <button
                  onClick={handleToggle}
                  className="p-1.5 hover:bg-[#E8DEC8]/30 transition-colors"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5 text-[#141416]" />
                </button>
              </div>

              {/* Core Commercial Differentiators */}
              <div className="space-y-5 font-sans text-xs text-[#57534E] leading-relaxed">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#141416] mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A75E]" />
                    <span>Zero E-Commerce Cart Friction</span>
                  </h4>
                  <p>
                    £3,000 to £15,000 22ct bridal suites are never bought via anonymous credit card checkouts.
                    Replacing the cart with WhatsApp VIP and Showroom Bench Viewings guarantees high conversion.
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#141416] mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A75E]" />
                    <span>Real-Time 3D PBR WebGL & Audio</span>
                  </h4>
                  <p>
                    Interactive 3D alloy switching (22ct Gold / 18ct Rose Gold / Platinum) with procedural Web
                    Audio drone creates the quiet gravitas of a European luxury maison.
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#141416] mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A75E]" />
                    <span>Hayes Showroom Footfall Engine</span>
                  </h4>
                  <p>
                    Same-day laser repair modules and live gold bullion rates drive immediate walk-ins to 136
                    Uxbridge Road, Hayes.
                  </p>
                </div>
              </div>
            </div>

            {/* Drawer Footer & Contact */}
            <div className="mt-8 pt-6 border-t border-[#E7E2DA] flex flex-col gap-3 font-mono text-xs tracking-wider">
              <a
                href="mailto:contact@mercianwealth.com?subject=Inquiry%20regarding%20VEYRA%20Digital%20Atelier%20System"
                onClick={() => sound.playTick()}
                className="w-full py-3 bg-[#141416] text-[#FAF9F5] hover:bg-[#C6A75E] hover:text-[#141416] transition-colors flex items-center justify-center gap-2 text-[11px] uppercase"
              >
                <Mail className="w-4 h-4" />
                <span>CONSULT WITH MERCIAN WEALTH</span>
              </a>

              <div className="text-[10px] text-center text-[#7A705E]">
                © 2026 MERCIAN WEALTH · BESPOKE DIGITAL ATELIERS
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
