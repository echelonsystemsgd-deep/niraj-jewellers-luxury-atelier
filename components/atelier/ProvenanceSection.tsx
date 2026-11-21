"use client";

import React from "react";
import { sound } from "@/lib/sound";
import { ShieldCheck, Award, Box, Sparkles, CheckCircle } from "lucide-react";

interface ProvenanceSectionProps {
  onOpenBooking: () => void;
}

export function ProvenanceSection({ onOpenBooking }: ProvenanceSectionProps) {
  const steps = [
    {
      num: "01",
      title: "Hand-Crafted Presentation Vault",
      subtitle: "Solid Velvet-Lined Archival Case",
      description:
        "Every commissioned bridal suite or kada is delivered in a weighted presentation vault engineered to shield 22ct gold from sulfur and scratching for generations.",
      spec: "420g SOLID VAULT MASS",
    },
    {
      num: "02",
      title: "London Assay Leopard's Head Dossier",
      subtitle: "Official Carat & Purity Seal",
      description:
        "Accompanied by an official hallmark verification dossier certifying virgin bullion ingot batch purity, assay strike date, and master goldsmith inspection sign-off.",
      spec: "BRITISH HALLMARKING ACT 1973",
    },
    {
      num: "03",
      title: "Lifetime In-House Benchmark Guarantee",
      subtitle: "Perpetual Atelier Care",
      description:
        "Includes complimentary ultrasonic steam deep-cleaning, claw retention testing, and size adjustments at our Hayes workshop bench anytime you drop in.",
      spec: "PERPETUAL WORKSHOP CARE",
    },
  ];

  return (
    <section id="provenance" className="w-full bg-[#FAF9F5] border-b border-[#E7E2DA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7E2DA] pb-8 mb-12 gap-6">
          <div>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#7A705E] block mb-2">
              [ 03 / UNBOXING ARCHITECTURE & PROVENANCE ]
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141416] tracking-tight">
              The Heirloom Delivery Standard
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#57534E] max-w-md leading-relaxed">
            From the lost-wax casting tree to your personal safe, every piece is protected by rigorous
            British hallmarking and archival presentation.
          </p>
        </div>

        {/* 3-Column Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#E7E2DA]">
          {steps.map((step) => (
            <div
              key={step.num}
              className="border-r border-b border-[#E7E2DA] bg-white p-6 sm:p-8 flex flex-col justify-between hover:bg-[#FAF9F5] transition-colors"
            >
              <div>
                <div className="font-mono text-xs text-[#7A705E] mb-4 flex items-center justify-between">
                  <span>[ {step.num} ]</span>
                  <span className="text-[#C6A75E] text-[10px] tracking-wider uppercase">
                    {step.spec}
                  </span>
                </div>

                <div className="font-mono text-[10px] tracking-wider uppercase text-[#C6A75E] mb-1">
                  {step.subtitle}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#141416] mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-[#57534E] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E7E2DA] flex items-center gap-2 font-mono text-[10px] text-[#7A705E]">
                <CheckCircle className="w-3.5 h-3.5 text-[#C6A75E]" />
                <span>INCLUDED WITH EVERY COMMISSION</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-10 border border-[#141416] bg-[#141416] p-6 sm:p-8 text-[#FAF9F5] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif text-xl text-[#FAF9F5] font-semibold">
              Ready to Inspect Our Masterpieces in Person?
            </h4>
            <p className="font-sans text-xs text-[#A89F91]">
              Private consultations available in our Hayes viewing salon or direct walk-in during opening hours.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              sound.playTick();
              onOpenBooking();
            }}
            className="shrink-0 px-6 py-3 bg-[#C6A75E] text-[#141416] hover:bg-white transition-colors font-mono text-xs tracking-[0.2em] uppercase font-bold cursor-pointer"
          >
            REQUEST PRIVATE VIEWING →
          </button>
        </div>
      </div>
    </section>
  );
}
