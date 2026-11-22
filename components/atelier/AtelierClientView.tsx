"use client";

import React, { useState } from "react";
import { AtelierNavbar } from "./AtelierNavbar";
import { CinematicHero } from "./CinematicHero";
import { ProductGrid } from "./ProductGrid";
import { ShowroomDossierModal } from "./ShowroomDossierModal";
import { RepairsShowcase } from "./RepairsShowcase";
import { ProvenanceSection } from "./ProvenanceSection";
import { EditorialManifesto } from "./EditorialManifesto";
import { ConsultationSection } from "./ConsultationSection";
import { ShowroomLogistics } from "./ShowroomLogistics";
import { ReviewsSection } from "@/components/trust/reviews-section";
import { Footer } from "@/components/footer/footer";
import { CollectionItem, COLLECTIONS_DATA } from "@/data/collections-data";
import Link from "next/link";

export function AtelierClientView() {
  const [selectedPiece, setSelectedPiece] = useState<CollectionItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInspectPiece = (pieceId: string) => {
    const found =
      COLLECTIONS_DATA.find(
        (p) => p.id === pieceId || p.title.toLowerCase().includes(pieceId.toLowerCase())
      ) || COLLECTIONS_DATA[0];
    setSelectedPiece(found);
    setIsModalOpen(true);
  };

  const handleSelectPiece = (piece: CollectionItem) => {
    setSelectedPiece(piece);
    setIsModalOpen(true);
  };

  const handleExploreVault = () => {
    const el = document.getElementById("vault");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF9F5] text-[#141416] flex flex-col selection:bg-[#C6A75E]/30 selection:text-[#141416]">
      {/* 1. Official Atelier Header (Official Navigation Pages, Direct Phone & WhatsApp) */}
      <AtelierNavbar />

      {/* 2. Main Experience */}
      <main className="flex-1">
        {/* Real Product Video Showcase Hero (No 3D Models, Real High-Definition Reels) */}
        <CinematicHero
          onInspectPiece={handleInspectPiece}
          onExploreVault={handleExploreVault}
        />

        {/* Complete 54-Piece Atelier Vault (Categories, Search, Real Media, Zero Pricing) */}
        <ProductGrid onSelectPiece={handleSelectPiece} />

        {/* 3-Step Unboxing Architecture & Provenance */}
        <ProvenanceSection onOpenBooking={() => {}} />

        {/* In-House Same-Day Bench Repairs Showcase */}
        <RepairsShowcase />

        {/* Verified Google Reviews & Client Trust */}
        <ReviewsSection />

        {/* Editorial Goldsmith Manifesto */}
        <EditorialManifesto />

        {/* On-Site Consultation & Direct Quote Request */}
        <ConsultationSection />

        {/* Showroom Logistics & Hayes Navigation */}
        <ShowroomLogistics />
      </main>

      {/* 3. Official Mayfair Luxury Footer */}
      <Footer />

      {/* Showroom Dossier Modal (High-Resolution Video Reel / Photo & Direct WhatsApp) */}
      <ShowroomDossierModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        piece={selectedPiece}
      />
    </div>
  );
}
