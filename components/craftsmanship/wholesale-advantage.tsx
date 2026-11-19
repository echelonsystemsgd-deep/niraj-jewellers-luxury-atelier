"use client";

import { Sparkles, Check, X, ShieldCheck, Scale, Award, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WholesaleAdvantage() {
  const comparison = [
    {
      feature: "Gold Pricing Transparency",
      niraj: "Priced directly by gram weight according to live daily London gold fix + pure craft fee.",
      highStreet: "Opaque lump-sum pricing with undisclosed retail markups up to 300%.",
    },
    {
      feature: "Diamond & Gemstone Sourcing",
      niraj: "Direct wholesale sourcing from Antwerp, Mumbai, and Tel Aviv. GIA/IGI certified at wholesale margins.",
      highStreet: "Middleman broker chains and high-street boutique commission markups.",
    },
    {
      feature: "Workshop Security & Location",
      niraj: "All craftsmanship & sizing executed on-site at 136 Uxbridge Road. Never leaves our care.",
      highStreet: "Pieces frequently posted via couriers to distant trade factories.",
    },
    {
      feature: "Master Goldsmith Access",
      niraj: "Consult directly with our master goldsmiths via WhatsApp or in person at our Hayes atelier.",
      highStreet: "Commission-driven floor sales staff with no goldsmithing bench experience.",
    },
    {
      feature: "Assay Office Certification",
      niraj: "Every single piece legally hallmarked at the London Assay Office under the UK Hallmarking Act.",
      highStreet: "Varying degrees of hallmarking clarity or foreign hallmarks requiring verification.",
    },
  ];

  const compareWhatsApp = buildWhatsAppLink({
    intent: "wholesale",
    customNote: "Hi Niraj Jewellers team, I'd like to compare direct workshop wholesale pricing for 22ct/18ct gold and certified diamonds against high-street retail quotes.",
  });

  return (
    <section className="py-20 sm:py-28 bg-white border-y border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#996515]">
            <Scale className="w-3.5 h-3.5" />
            <span>The Direct Workshop Advantage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight">
            Why West London Trusts Niraj Jewellers Ltd
          </h2>
          <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal">
            Direct atelier integrity without high-street retail markups
          </p>
          <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed">
            We operate as both an authentic goldsmithing workshop and licensed gold bullion dealer. That means our clients enjoy transparent pricing and zero middleman markups.
          </p>
        </div>

        {/* Mobile Swipe Cue */}
        <div className="md:hidden flex items-center justify-end gap-1 text-[11px] text-[#8C6212] mb-2 font-semibold">
          <span>← Swipe to compare →</span>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto pb-2">
          <table className="w-full text-left border-collapse min-w-[640px] bg-white rounded-2xl overflow-hidden border border-[#E8DEC8] shadow-sm">
            <thead>
              <tr className="border-b border-[#E8DEC8] bg-[#FAF7F2]">
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-[#141416] w-1/3">
                  Craftsmanship Standard
                </th>
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-[#8C6212] bg-[#FAF2E2] w-1/3 border-x border-[#E8DEC8]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#996515]" />
                    <span>Niraj Jewellers Ltd</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-[#7A7880] w-1/3">
                  Traditional High Street Jewellers
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EFE8DA] text-xs sm:text-sm">
              {comparison.map((row, i) => (
                <tr key={i} className="hover:bg-[#FAF8F5] transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#141416]">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 bg-[#FCFAF6] border-x border-[#E8DEC8] text-[#141416] font-medium">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{row.niraj}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-[#5A5960]">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" />
                      <span>{row.highStreet}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Banner Callout below table */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FAF7F2] via-white to-[#FAF7F2] border border-[#D4AF37]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-[#141416] font-medium flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-[#996515]" />
              <span>We Weigh &amp; Test Gold in Front of You</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#4A4A52]">
              Bring any piece into 136 Uxbridge Road for a free electronic purity test and transparent valuation.
            </p>
          </div>

          <a
            href={compareWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            <span>Consult Atelier on Wholesale Pricing</span>
          </a>
        </div>
      </div>
    </section>
  );
}
