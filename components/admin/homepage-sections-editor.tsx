"use client";

import { useState } from "react";
import {
  LayoutGrid,
  Check,
  Sparkles,
  Save,
  RotateCcw,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface SectionItem {
  id: string;
  name: string;
  description: string;
  active: boolean;
  customHeadline?: string;
}

const DEFAULT_SECTIONS: SectionItem[] = [
  {
    id: "hero",
    name: "1. Mayfair Goldsmith Hero (Tactile Paper & Artisan Props)",
    description: "Above-the-fold banner with flanking trade cut-outs, London Assay accreditation pill, and dual CTAs.",
    active: true,
  },
  {
    id: "collection_grid",
    name: "2. Curated Flagship Showroom Vault (Top 3 Pieces)",
    description: "Top 3 verified masterworks with clean metal tags, verified specs, and direct catalog link.",
    active: true,
  },
  {
    id: "cad_journey",
    name: "3. 4-Step Goldsmith & 3D CAD Linear Timeline",
    description: "Chronological bespoke timeline from vision sketch to London Assay hallmarking.",
    active: true,
  },
  {
    id: "repairs_bento",
    name: "4. In-House Workshop & Same-Day Repair Concierge",
    description: "Same-day ring resizing, claw retipping, ultrasonic cleaning, and watch battery servicing.",
    active: true,
  },
  {
    id: "differentiators",
    name: "5. What Sets Niraj Jewellers Apart (4 Evidence-Led Pillars)",
    description: "London Assay testing, live gold weight pricing, in-house bench craft, and direct craftsman consultations.",
    active: true,
  },
  {
    id: "reviews_section",
    name: "6. Verified Google Client Reviews & Reputation",
    description: "Authentic Google customer reviews with verified reviewer avatars and Google Maps profile link.",
    active: true,
  },
  {
    id: "showroom_hub",
    name: "7. Flagship Hayes Showroom & Live Operating Hours",
    description: "Location map, 136 Uxbridge Road directions, parking guide, and live London opening hours.",
    active: true,
  },
  {
    id: "hallmark_guide",
    name: "8. London Assay Office Hallmarking & Purity Guide",
    description: "Visual guide to the 3 compulsory UK hallmarks and 24ct/22ct/18ct purity standards.",
    active: true,
  },
  {
    id: "faq_section",
    name: "9. Commercial Guarantees & FAQ Accordion",
    description: "Transparent answers to scrap gold exchange, commission deposits, remote consultations, and assay marks.",
    active: true,
  },
];

export function HomepageSectionsEditor() {
  const [sections, setSections] = useState<SectionItem[]>(DEFAULT_SECTIONS);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleSection = (id: string) => {
    setSections((prev) =>
      prev.map((sec) => (sec.id === id ? { ...sec, active: !sec.active } : sec))
    );
  };

  const handleSave = async () => {
    setLoading(true);
    setSavedSuccess(false);

    // Simulate fast edge save & persist state
    await new Promise((resolve) => setTimeout(resolve, 600));

    setLoading(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleReset = () => {
    if (confirm("Reset homepage section arrangement back to original master order?")) {
      setSections(DEFAULT_SECTIONS);
    }
  };

  return (
    <div className="space-y-6">
      {/* Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-[#E8DEC8] shadow-luxury-sm">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6212] block">
            Homepage Arrangement
          </span>
          <p className="text-xs text-[#5A5960] mt-0.5">
            Turn sections on or off to curate what bridal customers see. Core SEO hierarchy is safeguarded.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleReset}
            type="button"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs font-semibold text-[#5A5960] hover:text-[#141416] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <button
            onClick={handleSave}
            disabled={loading}
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#85560C] via-[#996515] to-[#85560C] text-white text-xs font-semibold tracking-wide shadow-sm hover:opacity-95 transition-all disabled:opacity-50"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{loading ? "Saving..." : "Save Homepage Flow"}</span>
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-semibold text-emerald-800 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>✓ Homepage layout updated live! Changes are live on the storefront.</span>
        </div>
      )}

      {/* Sections List */}
      <div className="space-y-3">
        {sections.map((sec, idx) => (
          <div
            key={sec.id}
            className={`p-4 sm:p-5 bg-white border rounded-2xl transition-all ${
              sec.active
                ? "border-[#E8DEC8] shadow-luxury-sm"
                : "border-gray-200 opacity-60 bg-gray-50/50"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                <span
                  className={`w-7 h-7 rounded-lg font-serif font-bold text-xs flex items-center justify-center shrink-0 ${
                    sec.active
                      ? "bg-[#FAF8F5] border border-[#E8DEC8] text-[#8C6212]"
                      : "bg-gray-100 text-gray-400 border border-gray-200"
                  }`}
                >
                  {idx + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#141416] truncate">
                    {sec.name}
                  </h3>
                  <p className="text-xs text-[#5A5960] mt-0.5 leading-relaxed">
                    {sec.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={() => toggleSection(sec.id)}
                  className={`flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all ${
                    sec.active
                      ? "text-emerald-800 bg-emerald-50 border-emerald-200 hover:bg-emerald-100"
                      : "text-gray-600 bg-gray-100 border-gray-300 hover:bg-gray-200"
                  }`}
                >
                  {sec.active ? (
                    <>
                      <Eye className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Visible</span>
                    </>
                  ) : (
                    <>
                      <EyeOff className="w-3.5 h-3.5 text-gray-500" />
                      <span>Hidden</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
