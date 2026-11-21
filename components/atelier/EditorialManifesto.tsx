"use client";

import React from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { Scale, Award, Shield, Compass } from "lucide-react";

export function EditorialManifesto() {
  return (
    <section className="w-full bg-[#FAF9F5] border-b border-[#E7E2DA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Quote Banner */}
        <div className="border border-[#E7E2DA] bg-white p-8 sm:p-12 lg:p-16 mb-16 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#7A705E] block mb-4">
              [ THE ATELIER MANIFESTO ]
            </span>
            <blockquote className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#141416] leading-[1.2] tracking-tight mb-6 italic">
              &ldquo;We cast for permanence, not fleeting trend. When gold carries the weight of a family
              dynasty, there is no place for hollow mass.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 font-mono text-xs text-[#7A705E]">
              <span className="text-[#141416] font-semibold uppercase tracking-wider">
                NIRAJ JEWELLERS BENCH
              </span>
              <span>·</span>
              <span>136 UXBRIDGE ROAD · EST. 1984</span>
            </div>
          </div>
        </div>

        {/* 2-Column Split: Story & Engineering Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Manifesto Philosophy */}
          <div className="lg:col-span-6 border border-[#E7E2DA] bg-white p-8">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#C6A75E] uppercase block mb-3">
              [ PHILOSOPHY OF WEIGHT ]
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#141416] mb-4">
              Forged Solid on Hayes Benches
            </h3>
            <div className="space-y-4 font-sans text-xs sm:text-sm text-[#57534E] leading-relaxed">
              <p>
                Commercial fast-fashion jewellery hollows out gold shanks and relies on 1-micron flash
                plating. It bends under slight pressure and wears away within months.
              </p>
              <p>
                At Niraj Jewellers, our lost-wax casting chambers are configured for maximum solid density.
                Every bangle, kada, and signet ring is cast with a thick structural wall and an internal
                comfort-fit bore engineered to withstand 50+ years of continuous ceremonial and daily wear.
              </p>
              <p className="font-semibold text-[#141416]">
                When you hold a Niraj Jewellers piece in your palm, the gravity of pure 22ct gold is
                unmistakable.
              </p>
            </div>
          </div>

          {/* Right: 3 Specification Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="border border-[#E7E2DA] bg-white p-6 flex items-start gap-4 hover:border-[#141416] transition-colors">
              <div className="p-3 bg-[#FAF9F5] border border-[#E7E2DA] text-[#C6A75E] shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#7A705E] tracking-wider uppercase block mb-1">
                  [ 01 / DENSITY ]
                </span>
                <h4 className="font-serif text-lg font-semibold text-[#141416] mb-1">
                  Deliberate Solid Mass
                </h4>
                <p className="font-sans text-xs text-[#57534E] leading-relaxed">
                  21.5g to 140g+ per piece. Zero hollow stamping. Measured on trade-certified digital scales
                  calibrated directly to the grain.
                </p>
              </div>
            </div>

            <div className="border border-[#E7E2DA] bg-white p-6 flex items-start gap-4 hover:border-[#141416] transition-colors">
              <div className="p-3 bg-[#FAF9F5] border border-[#E7E2DA] text-[#C6A75E] shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#7A705E] tracking-wider uppercase block mb-1">
                  [ 02 / LAW ]
                </span>
                <h4 className="font-serif text-lg font-semibold text-[#141416] mb-1">
                  London Assay Leopard's Head
                </h4>
                <p className="font-sans text-xs text-[#57534E] leading-relaxed">
                  Every gram complies with the British Hallmarking Act 1973. Independent assay laser and punch
                  testing guarantees true 916 (22ct), 750 (18ct), or 950 (Pt).
                </p>
              </div>
            </div>

            <div className="border border-[#E7E2DA] bg-white p-6 flex items-start gap-4 hover:border-[#141416] transition-colors">
              <div className="p-3 bg-[#FAF9F5] border border-[#E7E2DA] text-[#C6A75E] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#7A705E] tracking-wider uppercase block mb-1">
                  [ 03 / HERITAGE ]
                </span>
                <h4 className="font-serif text-lg font-semibold text-[#141416] mb-1">
                  42-Year Workshop Lineage
                </h4>
                <p className="font-sans text-xs text-[#57534E] leading-relaxed">
                  Serving three generations of families across Greater London, Berkshire, Buckinghamshire, and
                  abroad since 1984.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
