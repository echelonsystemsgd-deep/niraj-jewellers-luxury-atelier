"use client";

import { Navbar } from "@/components/header/navbar";
import { HeroSection } from "@/components/hero/hero-section";
import { CollectionGrid } from "@/components/collections/collection-grid";
import { CadJourney } from "@/components/craftsmanship/cad-journey";
import { RepairsBento } from "@/components/repairs/repairs-bento";
import { WholesaleAdvantage } from "@/components/craftsmanship/wholesale-advantage";
import { ReviewsSection } from "@/components/trust/reviews-section";
import { ShowroomHub } from "@/components/showroom/showroom-hub";
import { HallmarkGuide } from "@/components/trust/hallmark-guide";
import { FaqSection } from "@/components/faq/faq-section";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F5] text-[#141416] flex flex-col selection:bg-[#E8DEC8] selection:text-[#8C6212] overflow-x-hidden">
      {/* 1. Header with left-anchored brand mark & uncrowded responsive navigation */}
      <Navbar />

      {/* 2. Main Luxury Experience */}
      <main className="flex-1">
        {/* 1. Mayfair Goldsmith Hero with artisan framing & verified London Assay accreditation */}
        <HeroSection />

        {/* 2. Curated Flagship Showroom Collections Showcase (Top 3 Verified Masterworks) */}
        <CollectionGrid isHomepage={true} />

        {/* 3. The 4-Step Goldsmith & 3D CAD Linear Timeline */}
        <CadJourney />

        {/* 4. In-House Workshop & Same-Day Repair Concierge with authentic bench photography */}
        <RepairsBento />

        {/* 5. What Sets Niraj Jewellers Apart (4 Evidence-Led Differentiators) */}
        <WholesaleAdvantage />

        {/* 6. Verified Google Client Reviews & Reputation (Under differentiators) */}
        <ReviewsSection />

        {/* 7. Flagship Hayes Showroom Hub & Live London Operating Hours */}
        <ShowroomHub />

        {/* 8. Gold Purity & London Assay Office Hallmarking Guide (Directly above FAQ) */}
        <HallmarkGuide />

        {/* 9. 5 Critical Commercial Objections & Guarantees FAQ */}
        <FaqSection />
      </main>

      {/* 3. Luxury Footer */}
      <Footer />
    </div>
  );
}
