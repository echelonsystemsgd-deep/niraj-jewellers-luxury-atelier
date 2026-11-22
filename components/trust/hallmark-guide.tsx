"use client";

import Image from "next/image";
import { LondonLeopardIcon } from "@/components/icons/luxury-icons";
import { CheckCircle2 } from "lucide-react";

export function HallmarkGuide() {
  const compulsoryMarks = [
    {
      num: "1",
      name: "Sponsor's Mark",
      role: "Atelier Identity",
      symbol: "NJ",
      description: "Unique registered initials of Niraj Jewellers Ltd registered with the Assay Office.",
      punchShape: "shield",
    },
    {
      num: "2",
      name: "Standard Mark",
      role: "Purity Guarantee",
      symbol: "916",
      description: "Indicates the precious metal purity (e.g. 916 = 22 carat solid gold, 750 = 18 carat gold).",
      punchShape: "oval",
    },
    {
      num: "3",
      name: "Assay Office Mark",
      role: "Official Origin",
      symbol: "Leopard",
      description: "The iconic Leopard's Head mark certifies independent testing at the London Assay Office.",
      punchShape: "crest",
    },
  ];

  const purities = [
    {
      carat: "22 Carat Solid Gold",
      partsPerThousand: "916 Purity",
      description: "Our signature bridal standard. 91.6% pure virgin gold alloyed with copper and silver for enduring richness.",
      badge: "Signature Standard",
    },
    {
      carat: "24 Carat Pure Bullion",
      partsPerThousand: "999.9 Purity",
      description: "Minted investment bullion bars and Dhanteras coins with zero alloys. 99.99% pure investment gold.",
      badge: "Investment Grade",
    },
    {
      carat: "18 Carat Gold & Platinum",
      partsPerThousand: "750 / 950 Purity",
      description: "Engineered specifically for diamond solitaires, tension settings, and micro-pavé claws requiring extreme tensile strength.",
      badge: "Solitaire Standard",
    },
    {
      carat: "950 Solid Platinum",
      partsPerThousand: "950 Purity",
      description: "Naturally white, hypoallergenic, and denser than 18ct gold. Holds diamonds securely with zero wear.",
      badge: "950 Stamped",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#8C6212] block mb-2 font-semibold">
            UK HALLMARKING ACT COMPLIANCE &amp; PURITY EDUCATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141416] font-normal tracking-tight mb-4">
            Certified Gold Standards You Can Trust
          </h2>
          <p className="font-serif italic text-xl text-[#8C6212] mb-3">
            London Leopard stamped at Goldsmiths&apos; Hall.
          </p>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-sans">
            Under the UK Hallmarking Act 1973, all precious metal jewellery sold by Niraj Jewellers Ltd is tested and officially stamped by the London Assay Office. We inspect every mark under 40x digital microscopes before pieces enter our vault.
          </p>
        </div>

        {/* Visual Dual-Pane: Authentic Workshop Verification Photo + 3 Compulsory Marks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left: Authentic Workshop Imagery */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full border border-[#EAE6DF] overflow-hidden bg-[#F5F2EB] group rounded-2xl shadow-xs">
            <Image
              src="/images/workshop/goldsmith-bench-order-book-22ct.jpg"
              alt="London Assay Office Hallmarking inspection bench at Niraj Jewellers"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <span className="font-sans text-xs uppercase tracking-widest text-white/80 block mb-1 font-semibold">
                AUTHENTIC BENCH INSPECTION
              </span>
              <p className="font-serif text-lg leading-snug">
                London Assay 916 Stamped &amp; Density Verified
              </p>
              <p className="text-xs text-white/80 mt-1 font-sans">
                Every bespoke piece is certified under UK statutory legislation before client delivery.
              </p>
            </div>
          </div>

          {/* Right: The 3 Compulsory Marks Hairline Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#EAE6DF] border border-[#EAE6DF] rounded-2xl overflow-hidden shadow-xs">
            {compulsoryMarks.map((mark) => (
              <div
                key={mark.num}
                className="bg-white p-6 flex flex-col justify-between hover:bg-[#FAF8F5] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 font-sans">
                    <span className="text-xs text-[#78716C] uppercase font-semibold">
                      Punch {mark.num}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#8C6212] bg-[#FAF8F5] px-2 py-0.5 border border-[#EAE6DF] font-semibold">
                      Compulsory
                    </span>
                  </div>

                  {/* Visual Stamp Mark Motif */}
                  <div className="flex items-center justify-center my-6">
                    {mark.punchShape === "shield" && (
                      <div className="w-16 h-16 bg-[#FAF8F5] border border-[#996515] flex items-center justify-center rounded-sm">
                        <span className="font-serif text-xl font-bold tracking-widest text-[#8C6212]">
                          {mark.symbol}
                        </span>
                      </div>
                    )}

                    {mark.punchShape === "oval" && (
                      <div className="w-20 h-14 rounded-full bg-[#FAF8F5] border border-[#996515] flex items-center justify-center">
                        <span className="font-serif text-xl font-bold tracking-widest text-[#8C6212]">
                          {mark.symbol}
                        </span>
                      </div>
                    )}

                    {mark.punchShape === "crest" && (
                      <div className="w-16 h-16 bg-[#FAF8F5] border border-[#996515] flex items-center justify-center text-[#8C6212] rounded-sm">
                        <LondonLeopardIcon className="w-9 h-9 fill-current text-[#8C6212]" />
                      </div>
                    )}
                  </div>

                  <h4 className="font-serif text-lg font-normal text-[#141416] text-center mb-1">
                    {mark.name}
                  </h4>
                  <p className="text-xs font-sans text-[#8C6212] text-center mb-3 font-semibold">
                    {mark.role}
                  </p>
                  <p className="text-xs text-[#57534E] text-center leading-relaxed font-sans">
                    {mark.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Purity Standards Hairline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#EAE6DF] border border-[#EAE6DF] rounded-2xl overflow-hidden shadow-xs">
          {purities.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white flex flex-col justify-between hover:bg-[#FAF8F5] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2 font-sans">
                  <span className="text-xs font-bold text-[#8C6212] uppercase tracking-wider">
                    {item.partsPerThousand}
                  </span>
                  <span className="text-[10px] text-[#78716C] bg-[#FAF8F5] px-2 py-0.5 border border-[#EAE6DF] font-medium">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#141416] font-normal mt-2">
                  {item.carat}
                </h3>
                <p className="text-xs text-[#57534E] mt-2 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE6DF] flex items-center gap-1.5 text-xs text-[#141416] font-sans font-medium">
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
