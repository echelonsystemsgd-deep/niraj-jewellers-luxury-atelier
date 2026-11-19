"use client";

import { Star, ShieldCheck, MessageSquare, ArrowUpRight } from "lucide-react";
import { REVIEWS_DATA } from "@/data/reviews-data";

export function ReviewsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#996515]">
            <Star className="w-3.5 h-3.5 fill-[#996515] text-[#996515]" />
            <span>Verified Client Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight">
            Loved Across London &amp; Middlesex
          </h2>
          <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal">
            Five-star bespoke craftsmanship since 1984
          </p>
          <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed">
            Read what our bridal couples, gold bullion investors, and repair clients say about their experience with Niraj Jewellers Ltd.
          </p>

          {/* Average Rating Banner */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-[#E8DEC8] text-xs shadow-sm">
            <div className="flex items-center gap-1 text-[#996515]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
              ))}
            </div>
            <span className="font-bold text-[#141416]">5.0 / 5.0</span>
            <span className="text-[#5A5960]">• Verified In-Store Google Testimonials</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS_DATA.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E8DEC8] hover:border-[#D4AF37] transition-all flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md"
            >
              <div className="space-y-3">
                {/* Stars & Service */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-[#C5A059]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#7A7880] font-medium">{review.date}</span>
                </div>

                <div className="text-xs font-bold text-[#8C6212] font-mono">
                  {review.service}
                </div>

                <p className="text-xs sm:text-sm text-[#4A4A52] leading-relaxed italic">
                  &quot;{review.text}&quot;
                </p>
              </div>

              {/* Author & Verified Badge */}
              <div className="pt-4 border-t border-[#EFE8DA] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#141416]">{review.author}</h4>
                  <span className="text-[10px] text-[#7A7880]">{review.location}</span>
                </div>
                {review.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Row for past clients to review */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com/?q=Niraj+Jewellers+136+Uxbridge+Road+Hayes+UB4+0JH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] text-xs font-bold text-[#141416] hover:text-[#996515] transition-all shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#996515]" />
            <span>Are you a past client? Leave a Review on Google</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#996515]" />
          </a>
        </div>
      </div>
    </section>
  );
}
