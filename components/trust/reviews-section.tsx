"use client";

import Image from "next/image";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import { GoogleGIcon, LuxuryStarIcon } from "@/components/icons/luxury-icons";
import { REVIEWS_DATA, ReviewItem } from "@/data/reviews-data";

interface ReviewsSectionProps {
  items?: ReviewItem[];
}

export function ReviewsSection({ items }: ReviewsSectionProps) {
  const reviewsToDisplay = items && items.length > 0 ? items : REVIEWS_DATA;

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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
            <a
              href="https://share.google/UzzobueZI6BXs8GZQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full texture-hammered-card border-hammered-gold text-xs shadow-sm hover:border-[#996515] transition-all group"
              title="View Niraj Jewellers Ltd on Google"
            >
              <div className="flex items-center gap-1.5">
                <GoogleGIcon className="w-4 h-4 shrink-0" />
                <span className="font-bold text-[#141416]">Google Rating</span>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <LuxuryStarIcon key={i} className="w-3.5 h-3.5" fill="#C5A059" />
                ))}
              </div>
              <span className="font-bold text-[#141416]">4.3 / 5.0</span>
              <span className="text-[#8C6212] font-semibold">• 10 Google Reviews</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#996515] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reviewsToDisplay.slice(0, 6).map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl border border-[#E8DEC8] hover:border-[#D4AF37] transition-all flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md"
            >
              <div className="space-y-3">
                {/* Header: Stars & Google / Atelier Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <LuxuryStarIcon key={i} className="w-3.5 h-3.5" fill="#C5A059" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#7A7880]">
                    {review.source === "Google" ? (
                      <span className="inline-flex items-center gap-1 font-medium text-[#1A73E8]">
                        <GoogleGIcon className="w-3 h-3" />
                        Google
                      </span>
                    ) : (
                      <span className="font-medium text-[#8C6212]">Showroom</span>
                    )}
                    <span>•</span>
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
              <div className="pt-3.5 border-t border-[#EFE8DA] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-hammered-gold shrink-0 shadow-sm bg-[#FAF7F2] flex items-center justify-center font-serif text-xs font-bold text-[#8C6212]">
                    {review.avatarUrl ? (
                      <Image
                        src={review.avatarUrl}
                        alt={review.author}
                        fill
                        unoptimized
                        sizes="36px"
                        className="object-cover"
                      />
                    ) : (
                      <span>{getInitials(review.author)}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#141416]">{review.author}</h4>
                    <span className="text-[9.5px] sm:text-[10px] text-[#7A7880]">{review.location}</span>
                  </div>
                </div>

                {review.verified && (
                  <span className="inline-flex items-center gap-1 text-[9.5px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Link to Google Profile */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://share.google/UzzobueZI6BXs8GZQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] text-xs font-bold text-[#141416] hover:text-[#996515] transition-all shadow-sm min-h-[44px]"
          >
            <GoogleGIcon className="w-4 h-4" />
            <span>Read All 10 Reviews on Google</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#996515]" />
          </a>
        </div>
      </div>
    </section>
  );
}
