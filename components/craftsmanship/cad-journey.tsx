"use client";

import { Sparkles, PenTool, Cpu, Flame, ShieldCheck, Check } from "lucide-react";

export function CadJourney() {
  const steps = [
    {
      step: "01",
      icon: PenTool,
      title: "Consultation & Vision Sketch",
      duration: "Day 1",
      description:
        "Meet with Viky at our Hayes showroom or via WhatsApp. Share your aesthetic vision, ring size, metal preference (22ct/18ct/Platinum), and gemstone specifications.",
      features: ["Complimentary design consultation", "Photo & video reference review", "Transparent gold weight estimate"],
    },
    {
      step: "02",
      icon: Cpu,
      title: "3D CAD Modeling & Diamond Selection",
      duration: "Days 2–4",
      description:
        "We generate a photorealistic 3D CAD render and resin prototype of your piece. Inspect loose GIA/IGI natural or lab diamonds under 40x magnification.",
      features: ["360° photorealistic digital render", "Millimeter-precise finger fitting", "Loose diamond loupe inspection"],
    },
    {
      step: "03",
      icon: Flame,
      title: "Hand-Forged in Hayes Workshop",
      duration: "Days 5–10",
      description:
        "Cast in fine precious metal and hand-finished on our Uxbridge Road jeweler benches. Master goldsmiths set diamonds, apply antique Meenakari, and hand-polish.",
      features: ["All work completed on-site", "Laser claw reinforcement", "Ultrasonic mirror finish"],
    },
    {
      step: "04",
      icon: ShieldCheck,
      title: "Assay Hallmarking & Collection",
      duration: "Days 11–14",
      description:
        "Sent directly to the London Assay Office for official UK hallmark stamping. Collected in a velvet luxury presentation suite with full insurance documentation.",
      features: ["Official UK Assay hallmark guarantee", "Complimentary 1st ring sizing", "Lifetime cleaning & inspection"],
    },
  ];

  return (
    <section id="bespoke" className="py-20 sm:py-28 bg-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Bespoke Goldsmith Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            From Raw Bullion to Royal Heirloom
          </h2>
          <p className="text-sm sm:text-base text-platinum-muted">
            Experience the meticulous 4-step creation process. Every bespoke piece is designed, sculpted, and finished in our West London atelier.
          </p>
        </div>

        {/* 4-Step Interactive Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-atelier p-6 sm:p-7 rounded-2xl border border-atelier-border hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-2xl font-bold text-gold-500/80 group-hover:text-gold-400 transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-medium text-platinum-muted/80 bg-obsidian px-2.5 py-1 rounded-full border border-atelier-border">
                    {item.duration}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-950/40 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-2">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-lg font-medium text-white group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-platinum-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Micro Features */}
                <ul className="mt-6 pt-4 border-t border-atelier-border/80 space-y-2 text-[11px] text-platinum-muted/90">
                  {item.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
