"use client";

import Image from "next/image";
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
    <section className="py-16 sm:py-20 bg-white border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#996515] block mb-2">
            [ 01 / UK HALLMARKING ACT COMPLIANCE &amp; PURITY EDUCATION ]
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141416] font-normal tracking-tight mb-4">
            Certified Gold Standards You Can Trust
          </h2>
          <p className="font-serif italic text-xl text-[#8C6212] mb-3">
            London Leopard stamped at Goldsmiths&apos; Hall.
          </p>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            Under the UK Hallmarking Act 1973, all precious metal jewellery sold by Niraj Jewellers Ltd is tested and officially stamped by the London Assay Office. We inspect every mark under 40x digital microscopes before pieces enter our vault.
          </p>
        </div>

        {/* Visual Dual-Pane: Authentic Workshop Verification Photo + 3 Compulsory Marks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left: Authentic Workshop Imagery */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full border border-[#EAE6DF] overflow-hidden bg-[#F5F2EB] group">
            <Image
              src="/images/workshop/goldsmith-bench-order-book-22ct.jpg"
              alt="London Assay Office Hallmarking inspection bench at Niraj Jewellers"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/80 block mb-1">
                AUTHENTIC BENCH INSPECTION
              </span>
              <p className="font-serif text-lg leading-snug">
                London Assay 916 Stamped &amp; Density Verified
              </p>
              <p className="text-xs text-white/80 mt-1">
                Every bespoke piece is certified under UK statutory legislation before client delivery.
              </p>
            </div>
          </div>

          {/* Right: The 3 Compulsory Marks Hairline Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#EAE6DF] border border-[#EAE6DF]">
            {compulsoryMarks.map((mark) => (
              <div
                key={mark.num}
                className="bg-white p-6 flex flex-col justify-between hover:bg-[#FAF8F5] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-[#78716C] uppercase">
                      PUNCH {mark.num}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#996515] bg-[#FAF8F5] px-2 py-0.5 border border-[#EAE6DF]">
                      Compulsory
                    </span>
                  </div>

                  {/* Visual Stamp Mark Motif */}
                  <div className="flex items-center justify-center my-6">
                    {mark.punchShape === "shield" && (
                      <div className="w-16 h-16 bg-[#FAF8F5] border border-[#996515] flex items-center justify-center">
                        <span className="font-serif text-xl font-bold tracking-widest text-[#8C6212]">
                          {mark.symbol}
                        </span>
                      </div>
                    )}

                    {mark.punchShape === "oval" && (
                      <div className="w-20 h-14 rounded-full bg-[#FAF8F5] border border-[#996515] flex items-center justify-center">
                        <span className="font-mono text-xl font-bold tracking-widest text-[#8C6212]">
                          {mark.symbol}
                        </span>
                      </div>
                    )}

                    {mark.punchShape === "crest" && (
                      <div className="w-16 h-16 bg-[#FAF8F5] border border-[#996515] flex items-center justify-center text-[#8C6212]">
                        <LondonLeopardIcon className="w-9 h-9 fill-current text-[#8C6212]" />
                      </div>
                    )}
                  </div>

                  <h4 className="font-serif text-lg font-normal text-[#141416] text-center mb-1">
                    {mark.name}
                  </h4>
                  <p className="text-[11px] font-mono text-[#8C6212] text-center mb-3">
                    {mark.role}
                  </p>
                  <p className="text-xs text-[#57534E] text-center leading-relaxed">
                    {mark.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Purity Standards Hairline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#EAE6DF] border border-[#EAE6DF]">
          {purities.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white flex flex-col justify-between hover:bg-[#FAF8F5] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#8C6212] uppercase tracking-wider">
                    {item.partsPerThousand}
                  </span>
                  <span className="text-[10px] font-mono text-[#78716C] bg-[#FAF8F5] px-2 py-0.5 border border-[#EAE6DF]">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#141416] font-normal mt-2">
                  {item.carat}
                </h3>
                <p className="text-xs text-[#57534E] mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE6DF] flex items-center gap-1.5 text-[11px] text-[#141416] font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#996515] shrink-0" />
                <span>London Assay Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
