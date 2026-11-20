import { Metadata } from "next";
import { MediaManager } from "@/components/admin/media-manager";

export const metadata: Metadata = {
  title: "Media Vault & Photos | Niraj Jewellers Ltd",
  description: "Upload and compress jewelry photos and videos.",
};

export default function AdminMediaPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#141416]">
          Media Library & Phone Uploads
        </h1>
        <p className="text-xs text-[#5A5960] mt-1">
          High-definition jewelry photos auto-converted to WebP for lightning-fast customer browsing.
        </p>
      </div>

      <MediaManager />
    </div>
  );
}
