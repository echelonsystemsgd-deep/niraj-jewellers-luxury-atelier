"use client";

import { ShieldCheck, Award, FileText, CheckCircle2 } from "lucide-react";

export function HallmarkGuide() {
  const purities = [
    {
      carat: "24ct Gold",
      partsPerThousand: "999 Fine Gold",
      description: "Pure investment grade bullion. Ideal for minted gold bars, coins, and wealth preservation.",
      colorClass: "border-gold-400 bg-gold-950/20",
    },
    {
      carat: "22ct Gold",
      partsPerThousand: "916 Hallmarked",
      description: "The revered gold standard for South Asian bridal suites, kadas, and mangalsutras. Rich warm golden luster with structural durability.",
      colorClass: "border-gold-500 bg-gold-950/30",
    },
    {
      carat: "18ct Gold",
      partsPerThousand: "750 Hallmarked",
      description: "The global benchmark for fine diamond engagement rings, solitaires, and luxury watches. Available in White, Yellow, and Rose Gold.",
      colorClass: "border-amber-600/50 bg-atelier",
    },
    {
      carat: "950 Platinum",
      partsPerThousand: "950 Pure Platinum",
      description: "Naturally white, dense, and hypoallergenic precious metal. Holds diamond solitaires with maximum claw security.",
      colorClass: "border-zinc-500 bg-atelier",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-atelier-light border-y border-atelier-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>UK Hallmarking Act Compliance &amp; Purity Education</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            Certified Gold Standards You Can Trust
          </h2>
          <p className="text-sm sm:text-base text-platinum-muted">
            Under the UK Hallmarking Act 1973, all precious metal jewellery sold by Niraj Jewellers is tested and stamped by the London Assay Office.
          </p>
        </div>

        {/* 4 Purity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {purities.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border ${item.colorClass} space-y-3 flex flex-col justify-between`}
            >
              <div>
                <span className="text-xs font-mono font-bold text-gold-400 uppercase tracking-wider block">
                  {item.partsPerThousand}
                </span>
                <h3 className="font-serif text-2xl font-medium text-white mt-1">
                  {item.carat}
                </h3>
                <p className="text-xs text-platinum-muted mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-atelier-border/80 flex items-center gap-1.5 text-[11px] text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>London Assay Office Stamped</span>
              </div>
            </div>
          ))}
        </div>

        {/* Hallmarks Anatomy Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-atelier border border-atelier-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gold-400 font-semibold text-sm">
              <Award className="w-4 h-4" />
              <span>Official UK Compulsory Hallmarks Explained</span>
            </div>
            <p className="text-xs text-platinum-muted max-w-2xl leading-relaxed">
              Every genuine piece features 3 compulsory marks: the <strong>Sponsor&apos;s Mark</strong> (identifying the maker), the <strong>Standard Mark</strong> (confirming fineness e.g. 916 or 750), and the <strong>Assay Office Mark</strong> (the iconic Leopard&apos;s Head for London).
            </p>
          </div>

          <div className="px-5 py-3 rounded-xl bg-obsidian border border-gold-500/30 text-center shrink-0">
            <span className="text-[10px] text-platinum-muted uppercase tracking-wider block">Assay Location</span>
            <span className="font-serif text-base font-bold text-gold-300">Goldsmiths&apos; Hall, London</span>
          </div>
        </div>
      </div>
    </section>
  );
}
