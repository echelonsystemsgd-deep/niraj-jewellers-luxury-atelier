"use client";

import Image from "next/image";
import { Sparkles, PenTool, Cpu, Flame, ShieldCheck, Check } from "lucide-react";

export function CadJourney() {
  const steps = [
    {
      step: "01",
      icon: PenTool,
      title: "Consultation & Vision Sketch",
      duration: "Day 1",
      image: "/images/workshop/workshop-bench-velvet-trays.jpg",
      imageAlt: "Hayes atelier client consultation trays and bridal suites",
      caption: "Consultation & Trays",
      description:
        "Meet with Viky at our Hayes showroom or via WhatsApp. Share your aesthetic vision, ring size, metal preference (22ct/18ct/Platinum), and gemstone specifications.",
      features: ["Complimentary design consultation", "Photo & video reference review", "Transparent gold weight estimate"],
    },
    {
      step: "02",
      icon: Cpu,
      title: "3D CAD Modeling & Diamond Selection",
      duration: "Days 2–4",
      image: "/images/cad/bespoke-evil-eye-sapphire-cad.jpg",
      imageAlt: "3D CAD render of custom Evil Eye sapphire and diamond medallion",
      caption: "Photorealistic 3D CAD",
      description:
        "We generate a photorealistic 3D CAD render and resin prototype of your piece. Inspect loose GIA/IGI natural or lab diamonds under 40x magnification.",
      features: ["360° photorealistic digital render", "Millimeter-precise finger fitting", "Loose diamond loupe inspection"],
    },
    {
      step: "03",
      icon: Flame,
      title: "Hand-Forged in Hayes Workshop",
      duration: "Days 5–10",
      image: "/images/workshop/goldsmith-bench-order-book-22ct.jpg",
      imageAlt: "Hand-chased 22ct gold choker on Hayes workshop bench with order ledger",
      caption: "Hayes Goldsmith Bench",
      description:
        "Cast in fine precious metal and hand-finished on our Uxbridge Road jeweler benches. Master goldsmiths set diamonds, apply antique Meenakari, and hand-polish.",
      features: ["All work completed on-site", "Laser claw reinforcement", "Ultrasonic mirror finish"],
    },
    {
      step: "04",
      icon: ShieldCheck,
      title: "Assay Hallmarking & Collection",
      duration: "Days 11–14",
      image: "/images/workshop/22ct-gold-filigree-bridal-suite.jpg",
      imageAlt: "Handcrafted 22ct gold filigree bridal suite ready for London Assay hallmarking",
      caption: "Finished & Hallmarked",
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
            Experience the meticulous 4-step creation process. Every bespoke piece is designed, sculpted, and finished in our West London atelier on Uxbridge Road.
          </p>
        </div>

        {/* 4-Step Interactive Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-atelier p-5 sm:p-6 rounded-2xl border border-atelier-border hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-gold-500/10"
              >
                <div>
                  {/* Step Real Visual Preview */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-5 border border-white/10 bg-black/40 group-hover:border-gold-500/40 transition-colors">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/85 backdrop-blur-sm border border-gold-500/30 text-[10px] font-mono text-gold-300">
                      {item.caption}
                    </div>
                  </div>

                  {/* Step number badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-gold-500/80 group-hover:text-gold-400 transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-medium text-platinum-muted/80 bg-obsidian px-2.5 py-1 rounded-full border border-atelier-border">
                      {item.duration}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="w-9 h-9 rounded-lg bg-gold-950/40 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-1">
                      <Icon className="w-4 h-4" />
                    </div>

                    <h3 className="font-serif text-base sm:text-lg font-medium text-white group-hover:text-gold-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-platinum-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Micro Features */}
                <ul className="mt-5 pt-4 border-t border-atelier-border/80 space-y-2 text-[11px] text-platinum-muted/90">
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
