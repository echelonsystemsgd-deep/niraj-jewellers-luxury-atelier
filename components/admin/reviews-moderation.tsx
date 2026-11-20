"use client";

import { useState } from "react";
import { Star, CheckCircle2, XCircle, ShieldCheck, ExternalLink, AlertTriangle } from "lucide-react";
import { toggleReviewAction } from "@/app/admin/actions";
import { ReviewItem } from "@/data/reviews-data";

interface ReviewsModerationProps {
  initialReviews: ReviewItem[];
}

export function ReviewsModeration({ initialReviews }: ReviewsModerationProps) {
  const [reviews, setReviews] = useState<ReviewItem[]>(initialReviews);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleToggle = async (id: string, currentVerified: boolean) => {
    setLoadingId(id);
    const newStatus = !currentVerified;

    try {
      await toggleReviewAction(id, newStatus, newStatus);
      setReviews((prev) =>
        prev.map((r) => (r.id === id ? { ...r, verified: newStatus } : r))
      );
    } catch (err) {
      console.error("Failed to toggle review:", err);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="space-y-4">
      {/* Policy Banner */}
      <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-2xl flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-900 leading-relaxed">
          <p className="font-bold">Strict Testimonial Authenticity Protocol</p>
          <p className="mt-0.5 text-amber-800">
            In accordance with atelier trust guidelines, no Google review or client feedback is displayed on the public website until personally confirmed genuine by the owner.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((r) => (
          <div
            key={r.id}
            className={`p-5 rounded-2xl border transition-all bg-white flex flex-col justify-between space-y-4 shadow-luxury-sm ${
              r.verified
                ? "border-emerald-200 bg-white"
                : "border-[#E8DEC8] opacity-90"
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-serif text-base font-bold text-[#141416]">
                    {r.author}
                  </h3>
                  <span className="text-[11px] text-[#7A705E] block">
                    {r.location} • {r.date}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
              </div>

              <div className="text-xs font-semibold text-[#8C6212] bg-[#FAF8F5] px-2.5 py-1 rounded-md inline-block">
                {r.service}
              </div>

              <p className="text-xs text-[#5A5960] leading-relaxed italic">
                &ldquo;{r.text}&rdquo;
              </p>
            </div>

            <div className="pt-3 border-t border-[#E8DEC8]/60 flex items-center justify-between">
              <span
                className={`text-[11px] font-bold inline-flex items-center gap-1 px-2.5 py-1 rounded-full ${
                  r.verified
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-amber-50 text-amber-800 border border-amber-200"
                }`}
              >
                {r.verified ? "✓ Confirmed Genuine" : "⏳ Pending Confirmation"}
              </span>

              <button
                type="button"
                disabled={loadingId === r.id}
                onClick={() => handleToggle(r.id, r.verified)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                  r.verified
                    ? "border-red-200 text-red-600 hover:bg-red-50"
                    : "border-emerald-300 bg-emerald-600 text-white hover:bg-emerald-700"
                }`}
              >
                {loadingId === r.id
                  ? "Updating..."
                  : r.verified
                  ? "Hide Review"
                  : "Confirm & Publish"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
