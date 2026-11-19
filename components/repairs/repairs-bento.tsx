"use client";

import { Sparkles, Maximize2, ShieldCheck, Watch, ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import { REPAIR_SERVICES } from "@/data/repairs-data";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function RepairsBento() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Maximize2":
        return Maximize2;
      case "ShieldCheck":
        return ShieldCheck;
      case "Sparkles":
        return Sparkles;
      case "Watch":
        return Watch;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="repairs" className="py-20 sm:py-28 bg-obsidian relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>In-House Goldsmith Bench &amp; Restoration Concierge</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            Repairs Completed While You Wait in Hayes
          </h2>
          <p className="text-sm sm:text-base text-platinum-muted">
            Your precious heirlooms and wedding bands never leave 136 Uxbridge Road. All laser welding, stone setting, and ultrasonic polishings are completed on our in-house benches.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {REPAIR_SERVICES.map((service) => {
            const Icon = getIcon(service.iconName);
            const repairWhatsApp = buildWhatsAppLink({
              intent: "repair",
              visitPurpose: service.title,
              customNote: `Turnaround required: ${service.turnaround}. When is the best time to bring it in to your Hayes workshop?`,
            });

            return (
              <div
                key={service.id}
                className="bg-atelier p-7 sm:p-8 rounded-2xl border border-atelier-border hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-4">
                  {/* Icon & Turnaround Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gold-950/40 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full">
                      {service.turnaround}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-white group-hover:text-gold-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-platinum-muted leading-relaxed">
                      {service.summary}
                    </p>
                  </div>

                  {/* Specific Details */}
                  <ul className="space-y-2 pt-2 text-xs text-platinum-muted/90">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer action */}
                <div className="mt-6 pt-5 border-t border-atelier-border/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-gold-400 font-medium">
                    {service.pricingHint}
                  </span>

                  <a
                    href={repairWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-gold-300 transition-colors"
                  >
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-500 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Reassurance Callout Card */}
        <div className="mt-8 p-6 rounded-2xl bg-atelier-light border border-atelier-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Strict Hayes Workshop Custody Guarantee
              </h4>
              <p className="text-xs text-platinum-muted">
                Your diamonds and family gold never leave our premises. Monitored with high-definition CCTV security.
              </p>
            </div>
          </div>

          <a
            href="tel:+447955565137"
            className="px-5 py-2.5 rounded-full bg-atelier hover:bg-atelier-border border border-atelier-border text-xs text-platinum-muted hover:text-white font-medium shrink-0 transition-colors"
          >
            Call Bench Jeweller: +44 7955 565137
          </a>
        </div>
      </div>
    </section>
  );
}
