"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Star } from "lucide-react";
import { GoogleGIcon } from "@/components/icons/luxury-icons";
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
    <section id="reviews" className="w-full bg-[#FAF9F5] border-b border-[#E7E2DA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7E2DA] pb-8 mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#7A705E] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#C6A75E]"></span>
              <span>[ 04 / CLIENT REPUTATION &amp; GOOGLE REVIEWS ]</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141416] tracking-tight">
              Loved Across London &amp; Middlesex
            </h2>
          </div>

          {/* Official Google Reviews Trust Badge */}
          <a
            href="https://share.google/UzzobueZI6BXs8GZQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-4 py-2.5 border border-[#E7E2DA] bg-white hover:border-[#141416] transition-colors shadow-xs group"
          >
            <div className="flex items-center gap-2">
              <GoogleGIcon className="w-4 h-4 shrink-0" />
              <span className="font-mono text-xs font-semibold text-[#141416]">Google Reviews</span>
            </div>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#C6A75E] text-[#C6A75E]" />
              ))}
            </div>
            <span className="font-mono text-xs font-bold text-[#141416]">4.3 / 5.0</span>
            <span className="font-mono text-[11px] text-[#7A705E]">(10 Reviews)</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#7A705E] group-hover:text-[#141416] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 3-Column Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E7E2DA]">
          {reviewsToDisplay.slice(0, 6).map((review) => (
            <article
              key={review.id}
              className="border-r border-b border-[#E7E2DA] bg-white p-6 sm:p-7 flex flex-col justify-between hover:bg-[#FAF9F5] transition-colors"
            >
              <div className="space-y-4">
                {/* Header: Stars & Google Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C6A75E] text-[#C6A75E]" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#7A705E]">
                    {review.source === "Google" ? (
                      <span className="inline-flex items-center gap-1 font-semibold text-[#1A73E8]">
                        <GoogleGIcon className="w-3 h-3" />
                        Google Verified
                      </span>
                    ) : (
                      <span className="font-semibold text-[#C6A75E]">Hayes Showroom</span>
                    )}
                    <span>·</span>
                    <span>{review.date}</span>
                  </div>
                </div>

                {/* Service Tag */}
                <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#C6A75E] font-semibold">
                  [ {review.service} ]
                </div>

                {/* Testimonial Quote */}
                <p className="font-sans text-xs sm:text-sm text-[#57534E] leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Profile Row */}
              <div className="mt-6 pt-4 border-t border-[#E7E2DA] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#E7E2DA] shrink-0 bg-[#FAF9F5] flex items-center justify-center font-mono text-xs font-bold text-[#141416]">
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
                    <h4 className="font-serif text-xs font-bold text-[#141416]">{review.author}</h4>
                    <span className="font-mono text-[10px] text-[#7A705E]">{review.location}</span>
                  </div>
                </div>

                {review.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#0F6848] bg-[#0F6848]/10 px-2 py-0.5">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Read More on Google */}
        <div className="mt-10 text-center">
          <a
            href="https://share.google/UzzobueZI6BXs8GZQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#141416] bg-white hover:bg-[#141416] text-[#141416] hover:text-[#FAF9F5] font-mono text-xs tracking-[0.16em] uppercase font-bold transition-all shadow-xs"
          >
            <GoogleGIcon className="w-4 h-4" />
            <span>Read All 10 Reviews on Google Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
