"use client";

import Image from "next/image";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import { GoogleGIcon, LuxuryStarIcon } from "@/components/icons/luxury-icons";
import { REVIEWS_DATA } from "@/data/reviews-data";

export function ReviewsSection() {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F5] texture-ivory-paper border-t border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#996515]">
            <LuxuryStarIcon className="w-3.5 h-3.5" fill="#996515" />
            <span>Verified Client Reputation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight">
            Loved Across London &amp; Middlesex
          </h2>
          <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal">
            Five-star bespoke craftsmanship &amp; showroom honesty
          </p>
          <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed">
            Read authentic experiences from bridal couples, gold bullion investors, and repair clients who visit our Hayes atelier.
          </p>

          {/* Official Google Reviews Trust Banner (Hammered Gold Plaque) */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-full texture-hammered-card border-hammered-gold text-xs shadow-sm">
            <div className="flex items-center gap-1.5">
              <GoogleGIcon className="w-4 h-4 shrink-0" />
              <span className="font-bold text-[#141416]">Google Reviews</span>
            </div>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <LuxuryStarIcon key={i} className="w-3.5 h-3.5" fill="#C5A059" />
              ))}
            </div>
            <span className="font-bold text-[#141416]">5.0 / 5.0</span>
            <span className="text-[#8C6212] font-semibold hidden sm:inline">• 140+ London Clients Verified</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {REVIEWS_DATA.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white p-5 sm:p-8 rounded-2xl border border-[#E8DEC8] hover:border-[#D4AF37] transition-all flex flex-col justify-between space-y-3.5 sm:space-y-4 shadow-sm hover:shadow-md"
            >
              <div className="space-y-3 sm:space-y-3.5">
                {/* Header: Stars & Google Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <LuxuryStarIcon key={i} className="w-3.5 h-3.5" fill="#C5A059" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#7A7880]">
                    <GoogleGIcon className="w-3.5 h-3.5" />
                    <span>{review.date}</span>
                  </div>
                </div>

                <div className="text-[11px] sm:text-xs font-bold text-[#8C6212] font-mono">
                  {review.service}
                </div>

                <p className="text-xs sm:text-sm text-[#4A4A52] leading-relaxed italic">
                  &quot;{review.text}&quot;
                </p>
              </div>

              {/* Reviewer Profile Row with Verified Profile Photo Avatar */}
              <div className="pt-3.5 sm:pt-4 border-t border-[#EFE8DA] flex items-center justify-between">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-hammered-gold shrink-0 shadow-sm">
                    <Image
                      src={review.avatarUrl || "/images/avatars/avatar-1.svg"}
                      alt={review.author}
                      fill
                      unoptimized
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#141416]">{review.author}</h4>
                    <span className="text-[9.5px] sm:text-[10px] text-[#7A7880]">{review.location}</span>
                  </div>
                </div>

                {review.verified && (
                  <span className="inline-flex items-center gap-1 text-[9.5px] sm:text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Link to Google Maps Location */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com/?q=Niraj+Jewellers+136+Uxbridge+Road+Hayes+UB4+0JH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] text-xs font-bold text-[#141416] hover:text-[#996515] transition-all shadow-sm min-h-[44px]"
          >
            <GoogleGIcon className="w-4 h-4" />
            <span>View 136 Uxbridge Road Location &amp; Reviews on Google</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#996515]" />
          </a>
        </div>
      </div>
    </section>
  );
}
