import { Metadata } from "next";
import { getReviews } from "@/lib/db";
import { REVIEWS_DATA } from "@/data/reviews-data";
import { ReviewsModeration } from "@/components/admin/reviews-moderation";

export const metadata: Metadata = {
  title: "Client Testimonials & Stories | Niraj Jewellers Ltd",
  description: "Verify and moderate authentic customer testimonials.",
};

export default async function AdminReviewsPage() {
  // Start with reviews seeded as unconfirmed as mandated by the brief
  const unconfirmedReviews = REVIEWS_DATA.map((r) => ({
    ...r,
    verified: false,
  }));

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#141416]">
          Customer Stories & Reviews Moderation
        </h1>
        <p className="text-xs text-[#5A5960] mt-1">
          Verify real client experiences before showcasing them on the London storefront.
        </p>
      </div>

      <ReviewsModeration initialReviews={unconfirmedReviews} />
    </div>
  );
}
