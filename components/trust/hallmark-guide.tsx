"use client";

import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { HallmarkCrownIcon, GoldsmithScalesIcon } from "@/components/icons/luxury-icons";

export function HallmarkGuide() {
  const compulsoryMarks = [
    {
      num: "01",
      name: "Sponsor's Mark",
      symbol: "NJ",
      symbolType: "text",
      role: "Registered Maker / Atelier",
      description: "Identifies the unique registered initials of the craft atelier responsible for sending the piece to assay.",
    },
    {
      num: "02",
      name: "Standard Fineness Mark",
      symbol: "916",
      symbolType: "text",
      role: "Guaranteed Purity (e.g. 22ct)",
      description: "Confirms the exact metallurgical precious metal content in parts per thousand (916 = 22ct Gold, 750 = 18ct Gold).",
    },
    {
      num: "03",
      name: "Assay Office Mark",
      symbol: "🐆",
      symbolType: "emoji",
      role: "Leopard's Head (London)",
      description: "The historic symbol of the London Assay Office at Goldsmiths' Hall, testing precious metals since 1300 AD.",
    },
  ];

  const purities = [
    {
      carat: "24ct Gold",
      partsPerThousand: "999 Fine Gold",
      description: "Pure investment grade bullion. Minted gold bars, coins, and wealth preservation.",
      tag: "Pure Bullion",
    },
    {
      carat: "22ct Gold",
      partsPerThousand: "916 Hallmarked",
      description: "The revered gold standard for South Asian bridal suites, kadas, and mangalsutras. Deep golden luster.",
      tag: "Flagship Specialty",
    },
    {
      carat: "18ct Gold",
      partsPerThousand: "750 Hallmarked",
      description: "The global benchmark for fine diamond solitaires, engagement rings, and luxury watches.",
      tag: "Solitaires & Bands",
    },
    {
      carat: "950 Platinum",
      partsPerThousand: "950 Pure Platinum",
      description: "Naturally white, dense, and hypoallergenic precious metal. Holds diamond solitaires with maximum claw security.",
      tag: "Diamond Rings",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F5] texture-ivory-paper border-t border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
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

        {/* Visual 3 Compulsory UK Hallmarks Explainer (Plush Jeweller's Velvet Presentation Tray) */}
        <div className="mb-14 texture-jewellers-velvet p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-hammered-gold shadow-2xl text-white">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5">
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#FAF7F2]">
              The 3 Compulsory Marks on Every Genuine Piece
            </h3>
            <p className="text-xs sm:text-sm text-[#DFBF7A]">
              Presented on our velvet bench tray: every piece of gold over 1.0g legally requires these three distinct stamps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {compulsoryMarks.map((mark) => (
              <div
                key={mark.num}
                className="p-5 rounded-2xl bg-[#18181C]/90 border border-[#D4AF37]/50 flex flex-col justify-between space-y-3 backdrop-blur-sm shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#DFBF7A]">{mark.num}</span>
                    <span className="text-[9.5px] sm:text-[10px] uppercase font-semibold text-[#DFBF7A] bg-black/60 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/40">
                      Compulsory Mark
                    </span>
                  </div>

                  {/* Stamp Visual Motif (Hand-Hammered 22ct Gold Coin Medallion) */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl texture-hammered-gold border-2 border-white/90 flex items-center justify-center text-lg sm:text-xl font-bold font-serif text-[#141416] shadow-xl mb-3 mx-auto">
                    {mark.symbol}
                  </div>

                  <h4 className="font-serif text-sm sm:text-base font-semibold text-white text-center mb-1">
                    {mark.name}
                  </h4>
                  <p className="text-[10.5px] sm:text-[11px] font-mono font-medium text-[#DFBF7A] text-center mb-2">
                    {mark.role}
                  </p>
                  <p className="text-xs text-[#C4C2BA] text-center leading-relaxed">
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
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8DEC8] hover:border-[#D4AF37] space-y-3 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#8C6212] uppercase tracking-wider block">
                    {item.partsPerThousand}
                  </span>
                  <span className="text-[10px] font-semibold text-[#5A5960] bg-[#FAF7F2] px-2 py-0.5 rounded-full border border-[#E8DEC8]">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#141416] mt-2">
                  {item.carat}
                </h3>
                <p className="text-xs text-[#4A4A52] mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFE8DA] flex items-center gap-1.5 text-[11px] text-emerald-800 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>London Assay Office Stamped</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
