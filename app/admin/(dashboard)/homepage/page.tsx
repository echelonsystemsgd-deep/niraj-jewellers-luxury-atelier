import { Metadata } from "next";
import { LayoutGrid, Eye, Check, AlertCircle, Sparkles, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Homepage Layout & Sections | Niraj Jewellers Ltd",
  description: "Customize homepage section visibility and headlines.",
};

const SECTIONS = [
  {
    id: "hero",
    name: "1. Cinematic Hero with Royal Crest",
    description: "Main above-the-fold banner with luxury crest and direct workshop consultation CTA.",
    active: true,
  },
  {
    id: "masterpiece_slider",
    name: "2. Masterpiece Hero Slider (Top 3 Pieces)",
    description: "Interactive slider with looping video showcase and touch gesture navigation.",
    active: true,
  },
  {
    id: "motion_ribbon",
    name: "3. Infinite Motion Atelier Ribbon",
    description: "Continuous 60fps luxury marquee of 12 living pieces.",
    active: true,
  },
  {
    id: "collection_grid",
    name: "4. Curated Flagship Showroom Grid",
    description: "High-jewelry category showcase (Bridal, Rings, 22ct Gold, Polki).",
    active: true,
  },
  {
    id: "cad_journey",
    name: "5. 4-Step Goldsmith & 3D CAD Journey",
    description: "Visual bespoke process from raw gold casting to final hallmark stamping.",
    active: true,
  },
  {
    id: "repairs_bento",
    name: "6. Workshop Repairs Concierge Bento",
    description: "Same-day ring resizing, claw rebuilding, and laser gold repairs.",
    active: true,
  },
  {
    id: "wholesale_advantage",
    name: "7. Direct Bullion Sourcing Advantage",
    description: "In-house Hatton Garden & Hayes wholesale bullion pricing guarantee.",
    active: true,
  },
  {
    id: "hallmark_guide",
    name: "8. London Assay Office Hallmarking Guide",
    description: "Education on 22ct (916) vs 24ct (999) purity and UK legal marks.",
    active: true,
  },
  {
    id: "showroom_hub",
    name: "9. Flagship Hayes Showroom & Hours",
    description: "Location map, 136 Uxbridge Road directions, and live London opening hours.",
    active: true,
  },
  {
    id: "reviews_section",
    name: "10. Verified 5-Star Reviews Showcase",
    description: "Authentic Google customer testimonials and bridal stories.",
    active: true,
  },
  {
    id: "faq_section",
    name: "11. Commercial Guarantees & FAQ",
    description: "Answers to gold purity, insurance valuations, and custom commissions.",
    active: true,
  },
];

export default function AdminHomepageSectionsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#141416]">
            Homepage Structure & Flow
          </h1>
          <p className="text-xs text-[#5A5960] mt-1">
            Reorder and manage the 11 experiential sections of Niraj Jewellers Ltd.
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gold-50 border border-gold-200 text-xs font-semibold text-[#8C6212]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Order Preserved for SEO</span>
        </span>
      </div>

      <div className="space-y-3">
        {SECTIONS.map((sec, idx) => (
          <div
            key={sec.id}
            className="p-4 sm:p-5 bg-white border border-[#E8DEC8] rounded-2xl shadow-luxury-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#D4AF37] transition-all"
          >
            <div className="flex items-start sm:items-center gap-3.5">
              <span className="w-7 h-7 rounded-lg bg-[#FAF8F5] border border-[#E8DEC8] text-[#8C6212] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <div>
                <h3 className="font-serif text-sm sm:text-base font-bold text-[#141416]">
                  {sec.name}
                </h3>
                <p className="text-xs text-[#5A5960] mt-0.5 leading-relaxed">
                  {sec.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <Check className="w-3 h-3 text-emerald-600" />
                <span>Active</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
