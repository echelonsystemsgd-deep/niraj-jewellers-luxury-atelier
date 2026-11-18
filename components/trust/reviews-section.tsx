"use client";

import { Star, ShieldCheck, MessageSquare, ArrowUpRight } from "lucide-react";
import { REVIEWS_DATA } from "@/data/reviews-data";

export function ReviewsSection() {
  return (
    <section className="py-20 sm:py-28 bg-obsidian relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
            <Star className="w-3.5 h-3.5 fill-gold-400" />
            <span>Verified Client Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            Loved Across London &amp; Middlesex
          </h2>
          <p className="text-sm sm:text-base text-platinum-muted">
            Read what our bridal couples, gold bullion investors, and repair clients say about their experience with Master Jeweller Viky.
          </p>

          {/* Average Rating Banner */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-atelier border border-atelier-border text-xs">
            <div className="flex items-center gap-1 text-gold-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-400" />
              ))}
            </div>
            <span className="font-bold text-white">5.0 / 5.0</span>
            <span className="text-platinum-muted">• Verified In-Store Google Testimonials</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS_DATA.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-atelier p-6 sm:p-7 rounded-2xl border border-atelier-border hover:border-gold-500/30 transition-all flex flex-col justify-between space-y-4 shadow-lg"
            >
              <div className="space-y-3">
                {/* Stars & Service */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-gold-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-platinum-muted/80">{review.date}</span>
                </div>

                <div className="text-xs font-semibold text-gold-400/90 font-mono">
                  {review.service}
                </div>

                <p className="text-xs sm:text-sm text-platinum-muted leading-relaxed italic">
                  &quot;{review.text}&quot;
                </p>
              </div>

              {/* Author & Verified Badge */}
              <div className="pt-4 border-t border-atelier-border/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">{review.author}</h4>
                  <span className="text-[10px] text-platinum-muted">{review.location}</span>
                </div>
                {review.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-atelier hover:bg-atelier-light border border-atelier-border text-xs text-platinum hover:text-white transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 text-gold-400" />
            <span>Are you a past client? Leave a Review on Google</span>
            <ArrowUpRight className="w-3 h-3 text-platinum-muted" />
          </a>
        </div>
      </div>
    </section>
  );
}
