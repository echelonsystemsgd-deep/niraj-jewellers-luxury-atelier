"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { WhatsAppIcon, GoldsmithScalesIcon, GoldsmithLoupeIcon, HallmarkCrownIcon, WorkshopBenchIcon } from "@/components/icons/luxury-icons";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WholesaleAdvantage() {
  const differentiators = [
    {
      title: "Direct London Assay Hallmarking",
      subtitle: "UK Hallmarking Act 1973 Compliance",
      icon: HallmarkCrownIcon,
      image: "/images/workshop/22ct-gold-filigree-bridal-suite.jpg",
      imageAlt: "Official London Assay Office Leopard's head hallmark verification",
      description:
        "Every single piece sold is legally tested and struck with the official London Leopard's Head hallmark at Goldsmiths' Hall, London. Zero unverified imports.",
      proofPoint: "Official UK Assay Office Legal Guarantee",
    },
    {
      title: "Live Bullion Weight Transparency",
      subtitle: "Priced by Gram & London Fix",
      icon: GoldsmithScalesIcon,
      image: "/images/workshop/goldsmith-bench-order-book-22ct.jpg",
      imageAlt: "Live gold bullion weighing on trade certified scales",
      description:
        "We weigh every piece on trade-certified digital scales directly in front of you. Gold is priced honestly by gram weight and live London bullion fix plus an unbundled craft fee.",
      proofPoint: "Zero Hidden Margins • Weighed Before You",
    },
    {
      title: "100% In-House Benchwork",
      subtitle: "136 Uxbridge Road, Hayes",
      icon: WorkshopBenchIcon,
      image: "/images/workshop/workshop-bench-velvet-trays.jpg",
      imageAlt: "In-house master goldsmith benches at Hayes workshop",
      description:
        "Your engagement rings and wedding heirlooms never leave our workshop. All laser soldering, stone setting, and restorative polishing are conducted on-site.",
      proofPoint: "Zero Third-Party Courier Outsourcing",
    },
    {
      title: "Direct Master Goldsmith Access",
      subtitle: "Artisan-Led Consultations",
      icon: GoldsmithLoupeIcon,
      image: "/images/cad/bespoke-evil-eye-sapphire-cad.jpg",
      imageAlt: "Master goldsmith 3D CAD and diamond loupe consultation",
      description:
        "Sit down directly with the master craftsmen forging your piece. Review 3D CAD models, inspect loose GIA/IGI diamonds under 40x magnification, and refine details in real time.",
      proofPoint: "Direct Craftsman Access • No Floor Sales Pressure",
    },
  ];

  const compareWhatsApp = buildWhatsAppLink({
    intent: "wholesale",
    customNote: "Hi Niraj Jewellers team, I would like to enquire about bespoke jewellery craftsmanship and transparent gold bullion pricing at your Hayes atelier.",
  });

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#996515]">
            <span>Evidence-Led Craftsmanship</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight">
            What Sets Niraj Jewellers Apart
          </h2>
          <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal">
            Direct atelier integrity with 100% workshop transparency
          </p>
          <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed">
            Operating as both a working goldsmithing workshop and licensed gold bullion dealer on Uxbridge Road, we hold our standards to verified physical proof.
          </p>
        </div>

        {/* 4 Differentiator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF9F5] p-5 sm:p-8 rounded-2xl border border-[#E8DEC8] hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
              >
                <div>
                  {/* Top Bar with Icon & Subtitle */}
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-[#D4AF37]/50 flex items-center justify-center text-[#996515] shadow-sm">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[10.5px] sm:text-[11px] font-mono text-[#8C6212] uppercase tracking-wider font-semibold">
                      {diff.subtitle}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-lg sm:text-2xl font-medium text-[#141416] group-hover:text-[#996515] transition-colors mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A5960] leading-relaxed mb-4 sm:mb-5">
                    {diff.description}
                  </p>

                  {/* Visual Proof Preview Thumbnail */}
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#E8DEC8] bg-white group-hover:border-[#D4AF37] transition-colors mb-4">
                    <Image
                      src={diff.image}
                      alt={diff.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-2 sm:bottom-2.5 left-2.5 sm:left-3 flex items-center gap-1.5 text-white text-[10px] sm:text-[11px] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBF7A] shrink-0" />
                      <span className="truncate">{diff.proofPoint}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Proof Badge */}
                <div className="pt-3 border-t border-[#EFE8DA] flex items-center justify-between text-[11px] sm:text-xs text-[#8C6212] font-semibold">
                  <span>Verified Atelier Standard</span>
                  <span className="text-[#C5A059] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Consultation Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-[#D4AF37]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-[#141416] font-medium">
              We Weigh &amp; Test Gold Directly Before You
            </h4>
            <p className="text-xs sm:text-sm text-[#4A4A52]">
              Visit 136 Uxbridge Road for certified electronic gold purity testing and fair workshop valuations.
            </p>
          </div>

          <a
            href={compareWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 min-h-[48px]"
          >
            <WhatsAppIcon className="w-4 h-4" fill="white" />
            <span>Consult Atelier on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
