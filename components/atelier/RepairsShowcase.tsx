"use client";

import React from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { ShieldCheck, MessageSquare } from "lucide-react";

export function RepairsShowcase() {
  const repairServices = [
    {
      title: "Ring Resizing & Bore Adjustment",
      price: "From £35 / ring",
      speed: "2 to 4 Hours · While You Wait",
      description:
        "Micro-pulse laser welding joins 22ct gold, 18ct white gold, and dense platinum without heating gemstones. Exact sizing bore calibrated under microscope magnification.",
      badge: "Same-Day Speed",
      image: "/images/collections/posters/482c070d-7614-41e2-8811-d76441020509.jpg",
    },
    {
      title: "Diamond Claw Retipping & Setting",
      price: "From £25 / claw",
      speed: "In-House Microscope Inspection",
      description:
        "Strengthening worn prongs and loose diamond claws on vintage bridal suites and solitaire rings. Precision metal buildup prevents precious stone loss.",
      badge: "Lifetime Security",
      image: "/images/collections/posters/585f854b-a2a7-4608-83e8-29eded6d04f6.jpg",
    },
    {
      title: "Ultrasonic Steam Cleaning & Carat Testing",
      price: "Free Check · £20 Deep Steam",
      speed: "Complimentary Walk-In Valuation",
      description:
        "Deep multi-stage ultrasonic cavitation cleans built-up grease and oxidation, followed by high-pressure steam blast and digital density verification on trade-approved scales.",
      badge: "Trade-Verified",
      image: "/images/workshop/workshop-bench-velvet-trays.jpg",
    },
  ];

  return (
    <section id="repairs" className="w-full bg-[#FAF9F5] border-b border-[#E7E2DA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7E2DA] pb-8 mb-12 gap-6">
          <div>
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-[#8C6212] font-semibold mb-2">
              In-House Workshop Repairs
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141416] tracking-tight">
              Same-Day Workshop Repairs
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#57534E] max-w-md leading-relaxed">
            We operate fully equipped goldsmith benches right behind our Hayes showroom counters. Walk-ins welcome with zero courier turnaround delays.
          </p>
        </div>

        {/* 3-Column Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#E7E2DA]">
          {repairServices.map((service, index) => (
            <div
              key={index}
              className="border-r border-b border-[#E7E2DA] bg-white p-6 sm:p-8 flex flex-col justify-between hover:bg-[#FAF9F5] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between font-sans text-xs text-[#7A705E] mb-4">
                  <span className="text-[11px] text-[#A89F91]">Service 0{index + 1}</span>
                  <span className="text-[#8C6212] text-xs uppercase tracking-wider font-semibold">
                    {service.badge}
                  </span>
                </div>

                {/* Service Benchmark Visual */}
                <div className="relative aspect-video w-full mb-6 overflow-hidden bg-[#F6F3ED] border border-[#E7E2DA]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Refined Price / Object Badge (Clean Sans-Serif per Captain feedback) */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-[#141416] text-[#FAF9F5] font-sans text-xs font-semibold tracking-wide">
                    {service.price}
                  </span>
                  <span className="font-sans text-xs text-[#78716C]">
                    {service.speed}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-normal text-[#141416] mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="font-sans text-xs text-[#57534E] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom WhatsApp Inquiry */}
              <div className="mt-6 pt-4 border-t border-[#E7E2DA] flex items-center justify-between font-sans text-xs">
                <span className="text-[#78716C] text-xs">Drop-in Bench</span>
                <a
                  href={`https://wa.me/447955565137?text=Hi%20Niraj%20Jewellers%2C%20I%20would%20like%20a%20repair%20quote%20for%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playTick()}
                  className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#1ebd5a] font-semibold uppercase tracking-wider transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Quote on WhatsApp ↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent WhatsApp Green Action Banner */}
        <div className="mt-10 p-6 sm:p-8 border border-[#E7E2DA] bg-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#FAF9F5] border border-[#E7E2DA] text-[#8C6212] shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#996515]" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-normal text-[#141416]">
                All Repairs Completed On-Premises at 136 Uxbridge Road
              </h4>
              <p className="font-sans text-xs text-[#57534E] mt-1 leading-relaxed">
                Your precious gold and diamonds never leave our workshop. Walk in during opening hours or send photos for an instant quote.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/447955565137?text=Hi%20Niraj%20Jewellers%2C%20I%20need%20a%20same-day%20repair%20quote%20for%20my%20jewellery."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playTick()}
              className="flex-1 sm:flex-none px-6 py-3.5 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-sans text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.99] cursor-pointer min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 fill-white text-white shrink-0" />
              <span>WhatsApp Bench for Same-Day Quote</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
