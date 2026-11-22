"use client";

import React from "react";
import Image from "next/image";

export function EditorialManifesto() {
  return (
    <section className="w-full bg-[#FAF9F5] border-b border-[#E7E2DA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Quote Card */}
        <div className="border border-[#E7E2DA] bg-white rounded-2xl p-8 sm:p-12 lg:p-16 mb-16 shadow-xs">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#8C6212] font-semibold mb-6">
              THE ATELIER PHILOSOPHY
            </p>
            <blockquote className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#141416] leading-[1.25] tracking-tight mb-8 italic">
              &ldquo;We cast for permanence, not fleeting trend. When gold carries the weight of a family
              dynasty, there is no place for hollow shortcuts.&rdquo;
            </blockquote>
            <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-sans text-[#7A705E]">
              <span className="text-[#141416] font-semibold uppercase tracking-wider">
                Niraj Jewellers Hayes Atelier
              </span>
              <span>·</span>
              <span>136 Uxbridge Road · Est. 1984</span>
            </div>
          </div>
        </div>

        {/* 2-Column Story Split: Authentic Visual & Heritage Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#E7E2DA] shadow-xs aspect-4/5 bg-[#FAF8F5]">
              <Image
                src="/images/cad/bespoke-evil-eye-diamond-cad.jpg"
                alt="Bespoke Jewellery 3D CAD Craftsmanship at Niraj Jewellers"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#141416]/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-xs uppercase tracking-widest text-[#C6A75E] font-medium mb-1">
                    Bespoke Atelier Commission
                  </p>
                  <p className="text-sm font-serif">
                    Precision 3D CAD modeling paired with hand-finished bench setting
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heritage Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#8C6212] font-semibold mb-3">
                THE HAYES LEGACY
              </p>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#141416] tracking-tight font-normal">
                Four Decades of Goldsmith Integrity
              </h3>
            </div>

            <div className="space-y-4 font-sans text-sm sm:text-base text-[#57534E] leading-relaxed">
              <p>
                Commercial fast-fashion jewellery increasingly hollows out gold shanks, relying on thin plating that wears down within months. At Niraj Jewellers, our casting chambers are configured for deliberate solid mass. Every bangle, kada, and bespoke signet is built with substantial structural integrity meant to be worn for generations.
              </p>
              <p>
                As independent bullion dealers and bench goldsmiths on Uxbridge Road since 1984, our trade is rooted in transparent honesty. Gold is weighed before you, purities are verified under official London Assay hallmarks, and custom commissions are designed collaboratively with our resident craftsmen.
              </p>
              <p className="text-[#141416] font-medium">
                Whether creating a bridal suite for your wedding day or restoring a family heirloom, you receive personal atelier attention with zero middleman markup.
              </p>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#E7E2DA]">
              <div>
                <p className="font-serif text-2xl text-[#141416]">42 Years</p>
                <p className="text-xs text-[#7A705E] font-sans">Serving Greater London</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#141416]">100% Solid</p>
                <p className="text-xs text-[#7A705E] font-sans">Zero Hollow Stamping</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#141416]">London Assay</p>
                <p className="text-xs text-[#7A705E] font-sans">Official Leopard&apos;s Head</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
