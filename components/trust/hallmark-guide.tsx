"use client";

import { ShieldCheck, CheckCircle2, Award, Scale } from "lucide-react";
import { LondonLeopardIcon } from "@/components/icons/luxury-icons";

export function HallmarkGuide() {
  const compulsoryMarks = [
    {
      num: "01",
      name: "Sponsor's Mark",
      punchShape: "shield",
      symbol: "NJ",
      role: "Registered Maker / Atelier",
      description:
        "Identifies the unique registered initials of Niraj Jewellers, legally held with the London Assay Office since 1984.",
    },
    {
      num: "02",
      name: "Standard Fineness Mark",
      punchShape: "oval",
      symbol: "916",
      role: "Guaranteed Purity (22ct / 91.6%)",
      description:
        "Confirms the exact precious metal purity in parts per thousand (916 = 22ct Gold, 750 = 18ct Gold, 999 = 24ct Bullion).",
    },
    {
      num: "03",
      name: "Assay Office Mark",
      punchShape: "crest",
      symbol: "leopard",
      role: "London Leopard's Head",
      description:
        "The historic emblem of the London Assay Office at Goldsmiths' Hall, testing and certifying UK precious metals since 1300 AD.",
    },
  ];

  const purities = [
    {
      carat: "24ct Pure Bullion",
      partsPerThousand: "999.9 Fine Gold",
      description: "Highest purity investment grade bullion bars, legal tender sovereign coins, and wealth preservation portfolios.",
      tag: "Pure Investment Bullion",
      badge: "999.9 Fine",
    },
    {
      carat: "22ct Imperial Gold",
      partsPerThousand: "916 Hallmarked",
      description: "The revered benchmark for bespoke Asian bridal suites, heavy kadas, and sacred mangalsutras. Rich, deep yellow luster.",
      tag: "Flagship Specialty",
      badge: "916 Stamped",
    },
    {
      carat: "18ct Fine Gold",
      partsPerThousand: "750 Hallmarked",
      description: "The global benchmark for certified diamond solitaire rings, pavé bands, and fine jewelry. Optimum durability and strength.",
      tag: "Solitaires & Bands",
      badge: "750 Stamped",
    },
    {
      carat: "950 Pure Platinum",
      partsPerThousand: "950 Platinum",
      description: "Naturally white, dense, and hypoallergenic precious metal. Holds diamond solitaires with exceptional claw security.",
      tag: "Bridal Platinum",
      badge: "950 Stamped",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F5] texture-ivory-paper border-t border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#996515]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>UK Hallmarking Act Compliance &amp; Purity Education</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight">
            Certified Gold Standards You Can Trust
          </h2>
          <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal">
            Leopard&apos;s Head stamped at Goldsmiths&apos; Hall
          </p>
          <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed">
            Under the UK Hallmarking Act 1973, all precious metal jewellery sold by Niraj Jewellers Ltd is tested and officially stamped by the London Assay Office.
          </p>
        </div>

        {/* Visual 3 Compulsory UK Hallmarks Explainer (Clean Mayfair Ivory & Gold Atelier Card Layout) */}
        <div className="mb-14 bg-white rounded-3xl border border-[#E8DEC8] p-6 sm:p-10 shadow-sm relative overflow-hidden">
          {/* Subtle Ambient Gold Hairline Glow */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#DFBF7A] to-transparent" />

          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/40 text-xs font-bold text-[#8C6212] uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#996515]" />
              <span>Statutory British Standard</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#141416]">
              The 3 Compulsory Marks on Every Genuine Piece
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5960] leading-relaxed">
              Every precious metal piece sold legally requires these three distinct punches struck by an independent UK Assay Office.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {compulsoryMarks.map((mark) => (
              <div
                key={mark.num}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DEC8] hover:border-[#D4AF37] flex flex-col justify-between space-y-4 transition-all duration-300 hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#8C6212] bg-white px-2.5 py-0.5 rounded-full border border-[#E8DEC8]">
                      Step {mark.num}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-[#8C6212] bg-[#F4ECE1] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30">
                      Compulsory Mark
                    </span>
                  </div>

                  {/* Refined Punch Stamp Motif */}
                  <div className="flex items-center justify-center my-4">
                    {mark.punchShape === "shield" && (
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-b from-[#F4ECE1] to-[#FAF7F2] border-2 border-[#D4AF37] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                        <span className="font-serif text-2xl font-bold tracking-wider text-[#8C6212]">
                          {mark.symbol}
                        </span>
                      </div>
                    )}

                    {mark.punchShape === "oval" && (
                      <div className="relative w-24 h-16 rounded-full bg-gradient-to-b from-[#F4ECE1] to-[#FAF7F2] border-2 border-[#D4AF37] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                        <span className="font-mono text-2xl font-bold tracking-wider text-[#8C6212]">
                          {mark.symbol}
                        </span>
                      </div>
                    )}

                    {mark.punchShape === "crest" && (
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-b from-[#F4ECE1] to-[#FAF7F2] border-2 border-[#D4AF37] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform text-[#8C6212]">
                        <LondonLeopardIcon className="w-10 h-10 fill-current text-[#8C6212]" />
                      </div>
                    )}
                  </div>

                  <h4 className="font-serif text-lg font-medium text-[#141416] text-center mb-1 group-hover:text-[#996515] transition-colors">
                    {mark.name}
                  </h4>
                  <p className="text-xs font-mono font-semibold text-[#8C6212] text-center mb-2.5">
                    {mark.role}
                  </p>
                  <p className="text-xs text-[#5A5960] text-center leading-relaxed">
                    {mark.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Purity Standards Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {purities.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8DEC8] hover:border-[#D4AF37] space-y-3 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#8C6212] uppercase tracking-wider block">
                    {item.partsPerThousand}
                  </span>
                  <span className="text-[10px] font-semibold text-[#5A5960] bg-[#FAF7F2] px-2 py-0.5 rounded-full border border-[#E8DEC8]">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#141416] mt-2 group-hover:text-[#996515] transition-colors">
                  {item.carat}
                </h3>
                <p className="text-xs text-[#5A5960] mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFE8DA] flex items-center gap-1.5 text-[11px] text-emerald-800 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>London Assay Office Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
