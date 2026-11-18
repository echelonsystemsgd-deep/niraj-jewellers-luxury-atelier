"use client";

import { useState } from "react";
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
import { VipBookingModal } from "@/components/showroom/vip-booking-modal";
import { MobileDock } from "@/components/mobile/mobile-dock";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-obsidian text-platinum flex flex-col selection:bg-gold-500 selection:text-obsidian overflow-x-hidden">
      {/* 1. Header with London Business Hours status */}
      <Navbar onOpenBookingModal={() => setBookingModalOpen(true)} />

      {/* 2. Main Luxury Experience */}
      <main className="flex-1">
        {/* Cinematic Hero */}
        <HeroSection onOpenBookingModal={() => setBookingModalOpen(true)} />

        {/* Live Indicative Gold Rate Marquee */}
        <GoldTicker />

        {/* Curated Showroom Collections & Reels Modal */}
        <CollectionGrid />

        {/* Interactive Bespoke Jewellery Cost & Turnaround Estimator */}
        <BespokeEstimator />

        {/* 4-Step Goldsmith & CAD Journey */}
        <CadJourney />

        {/* Wholesale Bullion & Diamond Sourcing Advantage */}
        <WholesaleAdvantage />

        {/* In-House Workshop & Repair Concierge Bento Grid */}
        <RepairsBento />

        {/* Gold Purity & London Assay Office Hallmarking Guide */}
        <HallmarkGuide />

        {/* Verified Google 5-Star Reviews Showcase */}
        <ReviewsSection />

        {/* 5 Critical Commercial Objections & Guarantees FAQ */}
        <FaqSection />

        {/* Flagship Hayes Showroom Hub & Interactive Hours */}
        <ShowroomHub onOpenBookingModal={() => setBookingModalOpen(true)} />
      </main>

      {/* 3. Luxury Footer */}
      <Footer />

      {/* 4. Mobile Sticky Action Dock (Call, WhatsApp, Maps) */}
      <MobileDock />

      {/* 5. VIP Private Viewing Modal */}
      <VipBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
