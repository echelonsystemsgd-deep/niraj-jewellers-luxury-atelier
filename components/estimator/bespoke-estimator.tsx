"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Clock, CheckCircle2, Sliders } from "lucide-react";
import { QuoteSummaryModal, EstimatorSummary } from "./quote-summary-modal";

export function BespokeEstimator() {
  const [selectedType, setSelectedType] = useState("Royal Bridal Necklace Suite");
  const [selectedMetal, setSelectedMetal] = useState("22ct Imperial Gold (916 Hallmarked)");
  const [selectedStones, setSelectedStones] = useState("Syndicate Polki & Zambian Emeralds");
  const [budgetIndex, setBudgetIndex] = useState(2);
  const [summaryModalOpen, setSummaryModalOpen] = useState(false);

  const pieceTypes = [
    { id: "bridal-necklace", label: "Royal Bridal Necklace Suite", turnaround: "14–21 Working Days" },
    { id: "engagement-ring", label: "Bespoke Solitaire Engagement Ring", turnaround: "7–10 Working Days" },
    { id: "solid-kada", label: "Heavy 22ct Solid Gold Kada / Bangles", turnaround: "5–7 Working Days" },
    { id: "mangalsutra", label: "Contemporary Diamond Mangalsutra", turnaround: "7–10 Working Days" },
    { id: "men-chain", label: "Heavy Diamond-Cut Curb Chain / Pendant", turnaround: "5–8 Working Days" },
  ];

  const metals = [
    { id: "22ct-yellow", label: "22ct Imperial Gold (916 Hallmarked)", desc: "Traditional South Asian gold standard" },
    { id: "18ct-white", label: "18ct Fine White Gold (750 Hallmarked)", desc: "Contemporary bridal & solitaire pairing" },
    { id: "18ct-yellow", label: "18ct Warm Yellow Gold (750 Hallmarked)", desc: "Modern western luxury finish" },
    { id: "platinum-950", label: "950 Solid Pure Platinum", desc: "Hypoallergenic heavy luxury density" },
  ];

  const stones = [
    { id: "syndicate-polki", label: "Syndicate Polki & Zambian Emeralds", desc: "Traditional uncut royal diamonds" },
    { id: "natural-diamond", label: "GIA Certified Natural Diamonds (D-F, VVS/VS)", desc: "Mined heirloom brilliance" },
    { id: "lab-diamond", label: "IGI Certified Lab-Grown Diamonds", desc: "Wholesale budget efficiency" },
    { id: "plain-metal", label: "Solid Hallmarked Gold (No Stones)", desc: "Pure precious metal investment" },
  ];

  const budgetTiers = [
    "£1,000 – £2,500",
    "£2,500 – £5,000",
    "£5,000 – £10,000",
    "£10,000 – £20,000",
    "£20,000+ (High Atelier Suite)",
  ];

  const activeTurnaround =
    pieceTypes.find((p) => p.label === selectedType)?.turnaround || "10–14 Working Days";

  const sliderPercentage = (budgetIndex / (budgetTiers.length - 1)) * 100;

  const currentSummary: EstimatorSummary = {
    pieceType: selectedType,
    metal: selectedMetal,
    stones: selectedStones,
    budget: budgetTiers[budgetIndex],
    turnaroundDays: activeTurnaround,
  };

  const handleReview = () => {
    setSummaryModalOpen(true);
  };

  return (
    <section id="estimator" className="py-20 sm:py-28 bg-atelier-light border-y border-atelier-border relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Bespoke Commission Estimator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            Configure Your Custom Commission
          </h2>
          <p className="text-sm sm:text-base text-platinum-muted">
            Select your metal purity, stone preferences, and investment level. We calculate the exact workshop turnaround and compile a direct WhatsApp consultation brief for our workshop team.
          </p>
        </div>

        {/* 3-Step Grid Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Step 1 & Step 2 */}
          <div className="lg:col-span-2 space-y-8 bg-atelier p-6 sm:p-8 rounded-2xl border border-atelier-border shadow-xl">
            {/* Step 1: Jewellery Type */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                  Step 1: Select Piece Architecture
                </span>
                <span className="text-[11px] text-platinum-muted">5 Design Styles</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {pieceTypes.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedType(item.label)}
                    className={`p-3.5 rounded-xl text-left border transition-all text-xs flex flex-col justify-between touch-target ${
                      selectedType === item.label
                        ? "bg-gold-950/40 border-gold-500 text-white shadow-sm"
                        : "bg-obsidian border-atelier-border text-platinum-muted hover:border-gold-600/50 hover:text-white"
                    }`}
                  >
                    <span className="font-medium text-sm leading-snug">{item.label}</span>
                    <span className="text-[11px] text-gold-400/80 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.turnaround}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Metal Preference */}
            <div className="space-y-3 pt-4 border-t border-atelier-border">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block">
                Step 2: Choose Gold &amp; Precious Metal Purity
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {metals.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedMetal(item.label)}
                    className={`p-3.5 rounded-xl text-left border transition-all text-xs flex flex-col justify-between touch-target ${
                      selectedMetal === item.label
                        ? "bg-gold-950/40 border-gold-500 text-white shadow-sm"
                        : "bg-obsidian border-atelier-border text-platinum-muted hover:border-gold-600/50 hover:text-white"
                    }`}
                  >
                    <span className="font-medium text-sm leading-snug">{item.label}</span>
                    <span className="text-[11px] text-platinum-muted mt-1">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Stones Specification */}
            <div className="space-y-3 pt-4 border-t border-atelier-border">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block">
                Step 3: Diamond &amp; Gemstone Specification
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {stones.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedStones(item.label)}
                    className={`p-3.5 rounded-xl text-left border transition-all text-xs flex flex-col justify-between touch-target ${
                      selectedStones === item.label
                        ? "bg-gold-950/40 border-gold-500 text-white shadow-sm"
                        : "bg-obsidian border-atelier-border text-platinum-muted hover:border-gold-600/50 hover:text-white"
                    }`}
                  >
                    <span className="font-medium text-sm leading-snug">{item.label}</span>
                    <span className="text-[11px] text-platinum-muted mt-1">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Budget Range */}
            <div className="space-y-4 pt-4 border-t border-atelier-border">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                  Step 4: Indicative Budget Tier
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-gold-300 bg-gold-950/70 px-3 py-1 rounded-full border border-gold-500/40 shadow-sm transition-all duration-200">
                  {budgetTiers[budgetIndex]}
                </span>
              </div>

              {/* Ultra-Smooth Custom Luxury Slider */}
              <div className="relative py-2">
                <input
                  type="range"
                  aria-label="Indicative Budget Tier Selector"
                  min="0"
                  max={budgetTiers.length - 1}
                  step="1"
                  value={budgetIndex}
                  onChange={(e) => setBudgetIndex(parseInt(e.target.value, 10))}
                  style={{
                    background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${sliderPercentage}%, #27272A ${sliderPercentage}%, #18181B 100%)`,
                  }}
                  className="luxury-slider"
                />

                {/* Step node markers along track */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-1 pointer-events-none">
                  {budgetTiers.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx <= budgetIndex
                          ? "bg-gold-400 shadow-[0_0_8px_rgba(212,175,55,0.8)] scale-110"
                          : "bg-zinc-700/80"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Clickable Quick-Select Budget Tier Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
                {budgetTiers.map((tier, idx) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setBudgetIndex(idx)}
                    className={`px-2 py-2 rounded-xl text-[11px] font-medium transition-all text-center border ${
                      budgetIndex === idx
                        ? "bg-gold-500/20 border-gold-400 text-gold-300 font-bold shadow-md shadow-gold-500/10 scale-[1.02]"
                        : "bg-obsidian/70 border-atelier-border text-platinum-muted hover:text-white hover:border-zinc-700"
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>

              <div className="flex justify-between text-[11px] text-platinum-muted pt-1">
                <span>Entry Luxury (£1k)</span>
                <span className="hidden sm:inline">Bridal Suites (£5k-£10k)</span>
                <span>Imperial High Atelier (£20k+)</span>
              </div>
            </div>
          </div>

          {/* Right Summary Card & Direct Review Action */}
          <div className="space-y-6">
            <div className="bg-atelier p-6 sm:p-8 rounded-2xl border border-gold-500/40 shadow-2xl relative overflow-hidden space-y-6">
              {/* Gold Shimmer border glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-2 border-b border-atelier-border pb-4">
                <span className="text-[11px] text-gold-400 font-semibold uppercase tracking-wider block">
                  Commission Overview
                </span>
                <h3 className="font-serif text-2xl font-light text-white leading-snug">
                  {selectedType}
                </h3>
              </div>

              {/* Dynamic Highlights */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2 text-platinum-muted">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Metal:</strong> {selectedMetal}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-platinum-muted">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Gems:</strong> {selectedStones}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-platinum-muted">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Budget:</strong> {budgetTiers[budgetIndex]}
                  </span>
                </div>
              </div>

              {/* Calculated Turnaround Box */}
              <div className="p-4 rounded-xl bg-obsidian border border-atelier-border space-y-1">
                <span className="text-[11px] text-platinum-muted uppercase tracking-wider block">
                  Estimated Workshop Delivery
                </span>
                <div className="text-lg font-bold text-gold-300 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span>{activeTurnaround}</span>
                </div>
                <p className="text-[11px] text-platinum-muted/80 pt-1">
                  Includes 3D CAD render review, casting in Hayes workshop, and official London Assay Office hallmarking.
                </p>
              </div>

              {/* Review & Launch Button */}
              <button
                onClick={handleReview}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-obsidian font-bold text-sm uppercase tracking-wider shadow-lg shadow-gold-500/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Review &amp; Enquire on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-obsidian" />
              </button>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-platinum-muted flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Direct workshop pricing • Zero middleman retail fees</span>
                </span>
              </div>
            </div>

            {/* Workshop Reassurance Card */}
            <div className="p-5 rounded-xl bg-white border border-[#E8DEC8] text-xs text-[#4A4A52] space-y-2 shadow-sm">
              <span className="text-[#8C6212] font-bold block uppercase tracking-wider">
                Our Master Goldsmith Guarantee:
              </span>
              <p className="leading-relaxed italic">
                &quot;Every piece leaves our hands stamped with official UK assay hallmarks. Bring in your sketches or Instagram references; we will craft it right here on Uxbridge Road to your exact millimeter specifications.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Option B Modal */}
      <QuoteSummaryModal
        summary={summaryModalOpen ? currentSummary : null}
        onClose={() => setSummaryModalOpen(false)}
      />
    </section>
  );
}
