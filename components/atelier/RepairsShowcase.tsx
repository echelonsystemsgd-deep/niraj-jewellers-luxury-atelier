"use client";

import React from "react";
import Image from "next/image";
import { sound } from "@/lib/sound";
import { Zap, ShieldCheck, Sparkles, Phone, ArrowRight } from "lucide-react";

export function RepairsShowcase() {
  const repairServices = [
    {
      num: "01",
      title: "Precision Laser Ring Resizing",
      speed: "2–4 Hours · While You Wait",
      description:
        "Micro-pulse laser welding joins 22ct gold, 18ct white gold, and dense platinum without heating gemstones. Exact sizing bore calibrated under microscope magnification.",
      badge: "SAME-DAY SPEED",
      image: "/images/workshop/laser-welding-bench.jpg",
    },
    {
      num: "02",
      title: "Diamond Claw Retipping & Resetting",
      speed: "In-House Microscope Inspection",
      description:
        "Strengthening worn prongs and loose diamond claws on vintage bridal suites and solitaire rings. Precision metal buildup prevents stone loss.",
      badge: "LIFETIME SECURITY",
      image: "/images/workshop/claw-retipping-microscope.jpg",
    },
    {
      num: "03",
      title: "Ultrasonic Steam Restoration & Carat Testing",
      speed: "Complimentary Walk-In Valuation",
      description:
        "Deep multi-stage ultrasonic cavitation cleans built-up grease and oxidation, followed by high-pressure steam blast and digital density verification on trade-approved scales.",
      badge: "TRADE-VERIFIED",
      image: "/images/workshop/trade-certified-carat-scale.jpg",
    },
  ];

  return (
    <section id="repairs" className="w-full bg-[#FAF9F5] border-b border-[#E7E2DA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7E2DA] pb-8 mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#7A705E] mb-2">
              <Zap className="w-3 h-3 text-[#C6A75E]" />
              <span>[ IN-HOUSE HAYES BENCHWORK ]</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141416] tracking-tight">
              Same-Day Workshop Repairs
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#57534E] max-w-md leading-relaxed">
            We operate fully equipped goldsmith benches right behind our Hayes showroom counters.
            Walk-ins welcome with zero turnaround courier delays.
          </p>
        </div>

        {/* 3-Column Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#E7E2DA]">
          {repairServices.map((service) => (
            <div
              key={service.num}
              className="border-r border-b border-[#E7E2DA] bg-white p-6 sm:p-8 flex flex-col justify-between hover:bg-[#FAF9F5] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#7A705E] mb-4">
                  <span>[ {service.num} ]</span>
                  <span className="text-[#C6A75E] text-[10px] tracking-wider uppercase font-semibold">
                    {service.badge}
                  </span>
                </div>

                {/* Service Benchmark Visual */}
                <div className="relative aspect-video w-full mb-6 overflow-hidden bg-[#F6F3ED] border border-[#E7E2DA]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div className="font-mono text-[10px] tracking-wider uppercase text-[#C6A75E] mb-1">
                  {service.speed}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#141416] mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-xs text-[#57534E] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E7E2DA] flex items-center justify-between font-mono text-[11px]">
                <span className="text-[#141416] font-semibold">DROP-IN BENCH</span>
                <a
                  href="https://wa.me/447955565137?text=Hi%20Niraj%20Jewellers%2C%20I%20need%20a%20same-day%20repair%20quote%20for%20my%20jewellery."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playTick()}
                  className="text-[#C6A75E] hover:text-[#141416] transition-colors underline underline-offset-4"
                >
                  GET QUOTE ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-10 p-6 border border-[#E7E2DA] bg-white flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#141416]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C6A75E] shrink-0" />
            <span>
              All repairs completed on premises at 136 Uxbridge Road. Your jewellery never leaves our
              secure vault.
            </span>
          </div>

          <a
            href="tel:02085739323"
            onClick={() => sound.playTick()}
            className="shrink-0 px-4 py-2 border border-[#141416] bg-[#141416] text-[#FAF9F5] hover:bg-[#C6A75E] hover:text-[#141416] transition-colors flex items-center gap-2 text-[11px] tracking-wider uppercase"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>CALL WORKSHOP: 020 8573 9323</span>
          </a>
        </div>
      </div>
    </section>
  );
}
