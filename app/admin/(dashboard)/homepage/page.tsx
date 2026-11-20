import { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { HomepageSectionsEditor } from "@/components/admin/homepage-sections-editor";

export const metadata: Metadata = {
  title: "Homepage Layout & Sections | Niraj Jewellers Ltd",
  description: "Customize homepage section visibility and headlines.",
};

export default function AdminHomepageSectionsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#141416]">
            Homepage Structure & Flow
          </h1>
          <p className="text-xs text-[#5A5960] mt-1">
            Manage the 9 experiential sections of Niraj Jewellers Ltd.
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gold-50 border border-gold-200 text-xs font-semibold text-[#8C6212] self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Order Preserved for SEO</span>
        </span>
      </div>

      <HomepageSectionsEditor />
    </div>
  );
}
