"use client";

import { Navbar } from "@/components/header/navbar";
import { HeroSection } from "@/components/hero/hero-section";
import { GoldTicker } from "@/components/hero/gold-ticker";
import { CollectionGrid } from "@/components/collections/collection-grid";
import { BespokeEstimator } from "@/components/estimator/bespoke-estimator";
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
    <div className="relative min-h-screen bg-obsidian text-platinum flex flex-col selection:bg-gold-500 selection:text-obsidian overflow-x-hidden">
      {/* 1. Header with London Business Hours status */}
      <Navbar />

      {/* 2. Main Luxury Experience */}
      <main className="flex-1">
        {/* 1. Cinematic Hero */}
        <HeroSection />

        {/* 2. Live Indicative Gold Rate Marquee */}
        <GoldTicker />

        {/* 3. Curated Showroom Collections & Reels Modal */}
        <CollectionGrid />

        {/* 4. The 4-Step Goldsmith & 3D CAD Journey */}
        <CadJourney />

        {/* 5. Interactive Bespoke Jewellery Cost & Turnaround Estimator */}
        <BespokeEstimator />

        {/* 6. In-House Workshop & Same-Day Repair Concierge Bento Grid */}
        <RepairsBento />

        {/* 7. Direct Bullion & Wholesale Sourcing Advantage */}
        <WholesaleAdvantage />

        {/* 8. Gold Purity & London Assay Office Hallmarking Guide */}
        <HallmarkGuide />

        {/* 9. Flagship Hayes Showroom Hub & Live London Operating Hours */}
        <ShowroomHub />

        {/* 10. Verified Google 5-Star Reviews Showcase */}
        <ReviewsSection />

        {/* 11. 5 Critical Commercial Objections & Guarantees FAQ */}
        <FaqSection />
      </main>

      {/* 3. Luxury Footer */}
      <Footer />
    </div>
  );
}
