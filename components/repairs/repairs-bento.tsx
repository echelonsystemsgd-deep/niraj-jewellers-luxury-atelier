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
    <section id="repairs" className="py-20 sm:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#996515]">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>In-House Goldsmith Bench &amp; Restoration Concierge</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight">
            Repairs Completed While You Wait in Hayes
          </h2>
          <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal">
            Precision benchcraft, laser soldering &amp; diamond resetting
          </p>
          <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed">
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
              customNote: `Hi Niraj Jewellers team, I would like to enquire about ${service.title} (Turnaround: ${service.turnaround}). When is the best time to bring it in to your Hayes workshop?`,
            });

            return (
              <div
                key={service.id}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E8DEC8] hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
              >
                <div className="space-y-4">
                  {/* Icon & Turnaround Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/50 flex items-center justify-center text-[#996515] group-hover:scale-105 transition-transform shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full shadow-sm">
                      {service.turnaround}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#141416] group-hover:text-[#996515] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A4A52] leading-relaxed">
                      {service.summary}
                    </p>
                  </div>

                  {/* Specific Details */}
                  <ul className="space-y-2 pt-2 text-xs text-[#4A4A52]">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#996515] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer action */}
                <div className="mt-6 pt-5 border-t border-[#EFE8DA] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8C6212] font-semibold">
                    {service.pricingHint}
                  </span>

                  <a
                    href={repairWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#141416] group-hover:text-[#996515] transition-colors"
                  >
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#996515] group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
