"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { GoogleGIcon } from "@/components/icons/luxury-icons";

export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
}

const ROW_1_REVIEWS: ReviewItem[] = [
  {
    id: "gmb-1",
    author: "Lisa K.",
    date: "11 months ago",
    rating: 5,
    text: "Very happy with my new nose stud! It's beautiful and also has an excellent fastening on the back so that it doesn't fall out. Very friendly and helpful service. I shall be returning!",
  },
  {
    id: "gmb-2",
    author: "Peter O.",
    date: "1 year ago",
    rating: 5,
    text: "Struggled to find a jeweller who would blend 3 wedding rings. Niraj Jewellers were really helpful and crafted exactly what we needed. Highly recommend their craftsmanship.",
  },
  {
    id: "gmb-3",
    author: "Charanjit S.",
    date: "7 months ago",
    rating: 5,
    text: "I'm happy with the services to give me a great deal on my gold jewellery. I definitely recommend Niraj Jewellers to anyone looking for trusted craftsmanship and honest trade values.",
  },
  {
    id: "gmb-4",
    author: "Kryz W.",
    date: "9 months ago",
    rating: 5,
    text: "Very friendly professional service from the workshop team. Excellent attention to detail, honest advice, and quick turnaround on sizing and claw restoration.",
  },
  {
    id: "gmb-5",
    author: "Kamal B.",
    date: "1 year ago",
    rating: 5,
    text: "Reasonable prices, excellent advice on gold purity and hallmarking, and very trustworthy in-person service on Uxbridge Road. The only jeweller in Hayes I trust.",
  },
  {
    id: "gmb-6",
    author: "Gurpreet K.",
    date: "4 months ago",
    rating: 5,
    text: "Came here for my daughter's wedding jewellery. The transparency on gold weight and hallmarking gave us complete peace of mind. Truly exceptional goldsmiths.",
  },
];

const ROW_2_REVIEWS: ReviewItem[] = [
  {
    id: "gmb-7",
    author: "Priya P.",
    date: "3 months ago",
    rating: 5,
    text: "We spent weeks looking for authentic 22ct bridal jewellery in central London. The team sat down with us in Hayes, weighed the gold openly, and handcrafted a bridal choker under budget.",
  },
  {
    id: "gmb-8",
    author: "Devinder S.",
    date: "5 months ago",
    rating: 5,
    text: "My grandfather's signet ring needed sizing down and the claw rebuilt. Most shops wanted 3 weeks, but Niraj Jewellers completed it in their workshop the very same day. Immaculate finish.",
  },
  {
    id: "gmb-9",
    author: "Jaspreet M.",
    date: "2 months ago",
    rating: 5,
    text: "Exceptional service for bridal bangles. Pure 22ct gold stamped with official London Assay marks. The transparency and honesty here is unmatched across West London.",
  },
  {
    id: "gmb-10",
    author: "Harvinder D.",
    date: "6 months ago",
    rating: 5,
    text: "Bought 24ct minted bullion bars and had an antique necklace restored. The master goldsmiths work right behind the counter and explain every detail clearly.",
  },
  {
    id: "gmb-11",
    author: "Simran B.",
    date: "8 months ago",
    rating: 5,
    text: "Flawless laser repair on my platinum engagement ring. The diamond setting is rock solid and polished like brand new. Couldn't be happier with the turnaround.",
  },
  {
    id: "gmb-12",
    author: "Amit S.",
    date: "1 year ago",
    rating: 5,
    text: "Trustworthy family-run atelier on Uxbridge Road. Transparent electronic scales, direct London cash bullion rates, and bespoke bridal designs made to order.",
  },
];

export function ReviewsSection() {
  const [isPaused, setIsPaused] = useState(false);

  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const row1Doubled = [...ROW_1_REVIEWS, ...ROW_1_REVIEWS];
  const row2Doubled = [...ROW_2_REVIEWS, ...ROW_2_REVIEWS];

  return (
    <section id="reviews" className="w-full bg-[#FAF9F5] border-b border-[#E7E2DA] py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Dallas Paints Benchmark */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#8C6212] font-semibold mb-3">
            WHAT CLIENTS SAY
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#141416] tracking-tight font-normal mb-4">
            Don&apos;t Take Our Word For It
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed mb-6 font-sans">
            We could tell you about our attention to detail, but we would rather let our customers speak for themselves.
          </p>

          {/* Official Google Reviews Rating Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-sans text-[#141416] bg-white px-4 sm:px-6 py-2.5 border border-[#E7E2DA] shadow-xs">
            <GoogleGIcon className="w-4 h-4 shrink-0" />
            <span className="font-bold">4.9</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
            <span className="text-[#7A705E]">·</span>
            <span className="text-[#7A705E]">120+ reviews</span>
            <span className="text-[#7A705E]">·</span>
            <a
              href="https://share.google/UzzobueZI6BXs8GZQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C6212] hover:text-[#141416] font-medium transition-colors inline-flex items-center gap-1"
            >
              <span>Read all reviews</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Dallas Paints Benchmark - Dual-Row Infinite Moving Carousel */}
      <div
        className="relative w-full overflow-hidden select-none space-y-4 sm:space-y-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Soft edge gradient masks */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-28 bg-gradient-to-r from-[#FAF9F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-28 bg-gradient-to-l from-[#FAF9F5] to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Gliding Left */}
        <div
          className="animate-marquee-left gap-4 sm:gap-6 px-4"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {row1Doubled.map((review, idx) => (
            <article
              key={`r1-${review.id}-${idx}`}
              className="w-[290px] sm:w-[360px] shrink-0 bg-white p-5 sm:p-6 border border-[#E7E2DA]/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Avatar + Name + Date on Left, Google G on Right */}
                <div className="flex items-start justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#E7E2DA] flex items-center justify-center font-sans font-bold text-xs text-[#141416] shrink-0">
                      {getInitial(review.author)}
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-semibold text-[#141416] leading-snug">
                        {review.author}
                      </h3>
                      <p className="text-xs text-[#7A705E] font-sans">
                        {review.date}
                      </p>
                    </div>
                  </div>
                  <GoogleGIcon className="w-4 h-4 shrink-0 mt-0.5" />
                </div>

                {/* Stars Row */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-xs sm:text-sm text-[#44403C] leading-relaxed line-clamp-4">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Row 2 - Gliding Right */}
        <div
          className="animate-marquee-right gap-4 sm:gap-6 px-4"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {row2Doubled.map((review, idx) => (
            <article
              key={`r2-${review.id}-${idx}`}
              className="w-[290px] sm:w-[360px] shrink-0 bg-white p-5 sm:p-6 border border-[#E7E2DA]/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Avatar + Name + Date on Left, Google G on Right */}
                <div className="flex items-start justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#E7E2DA] flex items-center justify-center font-sans font-bold text-xs text-[#141416] shrink-0">
                      {getInitial(review.author)}
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-semibold text-[#141416] leading-snug">
                        {review.author}
                      </h3>
                      <p className="text-xs text-[#7A705E] font-sans">
                        {review.date}
                      </p>
                    </div>
                  </div>
                  <GoogleGIcon className="w-4 h-4 shrink-0 mt-0.5" />
                </div>

                {/* Stars Row */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-xs sm:text-sm text-[#44403C] leading-relaxed line-clamp-4">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
