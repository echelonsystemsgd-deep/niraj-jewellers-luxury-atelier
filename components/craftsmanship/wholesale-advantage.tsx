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
      feature: "Principal Goldsmith Access",
      niraj: "Consult directly with Master Jeweller Viky via WhatsApp or in person in Hayes.",
      highStreet: "Commission-driven floor sales staff with no goldsmithing bench experience.",
    },
    {
      feature: "Assay Office Certification",
      niraj: "Every single piece legally hallmarked at the London Assay Office under the UK Hallmarking Act.",
      highStreet: "Varying degrees of hallmarking clarity or foreign hallmarks requiring verification.",
    },
  ];

  const compareWhatsApp = buildWhatsAppLink({
    source: "wholesale_advantage_table",
    customNote: "Hello Viky, I would like to enquire about wholesale gold rates and bespoke workshop pricing.",
  });

  return (
    <section className="py-20 sm:py-28 bg-atelier-light border-y border-atelier-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
            <Scale className="w-3.5 h-3.5" />
            <span>The Direct Workshop Advantage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            Why West London Trusts Niraj Jewellers
          </h2>
          <p className="text-sm sm:text-base text-platinum-muted">
            We operate as both an authentic goldsmithing workshop and licensed gold bullion dealer. That means our clients enjoy transparent pricing and zero middleman markups.
          </p>
        </div>

        {/* Mobile Swipe Cue */}
        <div className="md:hidden flex items-center justify-end gap-1 text-[11px] text-gold-400/80 mb-2 font-medium">
          <span>← Swipe to compare →</span>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto pb-2">
          <table className="w-full text-left border-collapse min-w-[640px] bg-atelier rounded-2xl overflow-hidden border border-atelier-border">
            <thead>
              <tr className="border-b border-atelier-border bg-obsidian">
                <th className="p-4 sm:p-5 text-xs font-semibold uppercase tracking-wider text-platinum-muted w-1/3">
                  Craftsmanship Standard
                </th>
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-gold-400 bg-gold-950/20 w-1/3 border-x border-gold-500/20">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <span>Niraj Jewellers Atelier</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 text-xs font-semibold uppercase tracking-wider text-platinum-muted/60 w-1/3">
                  Traditional High Street Jewellers
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-atelier-border text-xs sm:text-sm">
              {comparison.map((row, i) => (
                <tr key={i} className="hover:bg-atelier-light/50 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-white">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 bg-gold-950/10 border-x border-gold-500/10 text-platinum">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{row.niraj}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-platinum-muted">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                      <span>{row.highStreet}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Banner Callout below table */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-atelier via-gold-950/20 to-atelier border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-white font-normal flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
              <span>We Weigh &amp; Test Gold in Front of You</span>
            </h4>
            <p className="text-xs sm:text-sm text-platinum-muted">
              Bring any piece into 136 Uxbridge Road for a free electronic purity test and transparent valuation.
            </p>
          </div>

          <a
            href={compareWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-black font-semibold text-xs uppercase tracking-wide transition-all shadow-md shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-black text-whatsapp" />
            <span>Consult Viky on Wholesale Pricing</span>
          </a>
        </div>
      </div>
    </section>
  );
}
