"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

interface ProvenanceSectionProps {
  onOpenBooking?: () => void;
}

export function ProvenanceSection({ onOpenBooking }: ProvenanceSectionProps) {
  const stories = [
    {
      image: "/images/workshop/goldsmith-bench-order-book-22ct.jpg",
      eyebrow: "IN-HOUSE BENCHWORK",
      title: "Hand-Forged on Hayes Benches",
      description:
        "Every bespoke ring, bangle, and necklace is worked by hand on our Hayes benches, blending 42 years of traditional goldsmith technique with modern precision.",
      highlight: "In-House Master Goldsmiths",
    },
    {
      image: "/images/workshop/22ct-gold-filigree-bridal-suite.jpg",
      eyebrow: "SOLID PURITY",
      title: "Authentic 22ct Gold & London Hallmarks",
      description:
        "We pour solid, weighted gold with zero hollow shortcuts. Every piece carries the official London Assay Leopard's Head stamp guaranteeing 91.6% virgin purity.",
      highlight: "London Assay Stamped",
    },
    {
      image: "/images/workshop/workshop-bench-velvet-trays.jpg",
      eyebrow: "PERPETUAL CARE",
      title: "Archival Presentation & Lifetime Service",
      description:
        "Presented in protective velvet vaults, our creations come with lifetime ultrasonic steam cleaning, claw retention checks, and bench care whenever you visit.",
      highlight: "Lifetime Atelier Guarantee",
    },
  ];

  return (
    <section id="craftsmanship" className="w-full bg-[#FAF9F5] border-b border-[#E7E2DA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Luxury Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#8C6212] font-semibold mb-3">
            HERITAGE & CRAFTSMANSHIP
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#141416] tracking-tight font-normal mb-4">
            Forged with Purpose. Cast for Generations.
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-sans">
            Behind every piece in our vault lies decades of bench discipline, verified gold density, and an uncompromising dedication to heirloom quality.
          </p>
        </div>

        {/* 3-Card Visual Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story, idx) => (
            <article
              key={idx}
              className="bg-white overflow-hidden border border-[#E7E2DA] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] min-h-[220px] w-full bg-[#FAF8F5] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#141416]/85 backdrop-blur-xs text-[#FAF9F5] text-[11px] font-sans uppercase tracking-widest px-3 py-1 font-medium">
                    {story.eyebrow}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#141416] mb-3">
                    {story.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#57534E] leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#E7E2DA]/60 flex items-center gap-2 text-xs font-sans text-[#8C6212] font-medium">
                <CheckCircle className="w-4 h-4 text-[#8C6212] shrink-0" />
                <span>{story.highlight}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
