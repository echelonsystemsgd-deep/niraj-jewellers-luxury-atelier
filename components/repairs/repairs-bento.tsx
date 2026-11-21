"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/luxury-icons";
import { REPAIR_SERVICES } from "@/data/repairs-data";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function RepairsBento() {
  return (
    <section id="repairs" className="py-20 sm:py-28 bg-[#FAF9F5] texture-ivory-paper border-t border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#996515]">
            <span>In-House Goldsmith Bench &amp; Restoration Concierge</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight">
            Repairs Completed On-Site in Hayes
          </h2>
          <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal">
            Precision benchcraft, laser soldering &amp; diamond resetting
          </p>
          <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed">
            Your precious heirlooms and wedding bands never leave 136 Uxbridge Road. All laser welding, stone setting, and ultrasonic polishing are completed on our in-house benches.
          </p>
        </div>

        {/* Bento Grid with Bench Photography & Standout WhatsApp CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {REPAIR_SERVICES.map((service) => {
            const repairWhatsApp = buildWhatsAppLink({
              intent: "repair",
              visitPurpose: service.title,
              customNote: `Hi Niraj Jewellers team, I would like to enquire about ${service.title} (${service.priceDisplay}, Turnaround: ${service.turnaround}). When is the best time to bring it in to your Hayes workshop?`,
            });

            return (
              <div
                key={service.id}
                className="bg-white p-5 sm:p-7 rounded-2xl border border-[#E8DEC8] hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
              >
                <div className="space-y-3.5 sm:space-y-4">
                  {/* Real Bench Task Visual & Turnaround/Price Bar */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-hammered-gold bg-[#FAF7F2] shrink-0">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 56px, 80px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1.5 sm:gap-2">
                      <span className="text-xs font-bold text-[#8C6212] texture-hammered-card border-hammered-gold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                        {service.priceDisplay}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                        {service.turnaround}
                      </span>
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <div className="space-y-1.5 pt-1">
                    <h3 className="font-serif text-xl font-medium text-[#141416] group-hover:text-[#996515] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A4A52] leading-relaxed">
                      {service.summary}
                    </p>
                  </div>

                  {/* Bullet Details */}
                  <ul className="space-y-2 pt-1 text-xs text-[#5A5960]">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#996515] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Standout WhatsApp Green Action Button */}
                <div className="mt-6 pt-5 border-t border-[#EFE8DA]">
                  <a
                    href={repairWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md min-h-[44px]"
                  >
                    <WhatsAppIcon className="w-4 h-4" fill="white" />
                    <span>Book Repair on WhatsApp</span>
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
