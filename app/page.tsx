"use client";

import { Navbar } from "@/components/header/navbar";
import { HeroSection } from "@/components/hero/hero-section";
import { CollectionGrid } from "@/components/collections/collection-grid";
import { CadJourney } from "@/components/craftsmanship/cad-journey";
import { WholesaleAdvantage } from "@/components/craftsmanship/wholesale-advantage";
import { RepairsBento } from "@/components/repairs/repairs-bento";
import { HallmarkGuide } from "@/components/trust/hallmark-guide";
import { ReviewsSection } from "@/components/trust/reviews-section";
import { FaqSection } from "@/components/faq/faq-section";
import { ShowroomHub } from "@/components/showroom/showroom-hub";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-[#141416] flex flex-col selection:bg-gold-200 selection:text-gold-900 overflow-x-hidden">
      {/* 1. Header with London Business Hours status & Direct Phone CTA */}
      <Navbar />

      {/* 2. Main Luxury Experience */}
      <main className="flex-1">
        {/* 1. Cinematic Hero with Vivaldi Flourish */}
        <HeroSection />

        {/* 2. Curated Flagship Showroom Collections: Top 3 Masterpieces & Video Preview */}
        <CollectionGrid isHomepage={true} />

        {/* 3. The 4-Step Goldsmith & 3D CAD Journey */}
        <CadJourney />

        {/* 4. In-House Workshop & Same-Day Repair Concierge Bento Grid */}
        <RepairsBento />

        {/* 5. Direct Bullion & Wholesale Sourcing Advantage */}
        <WholesaleAdvantage />

        {/* 6. Gold Purity & London Assay Office Hallmarking Guide */}
        <HallmarkGuide />

        {/* 7. Flagship Hayes Showroom Hub & Live London Operating Hours */}
        <ShowroomHub />

        {/* 8. Verified Google 5-Star Reviews Showcase */}
        <ReviewsSection />

        {/* 9. 5 Critical Commercial Objections & Guarantees FAQ */}
        <FaqSection />
      </main>

      {/* 3. Luxury Footer with Mercian Wealth Automation Attribution */}
      <Footer />
    </div>
  );
}
