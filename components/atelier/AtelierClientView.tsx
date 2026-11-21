"use client";

import React, { useState } from "react";
import { AtelierNavbar } from "./AtelierNavbar";
import { CinematicHero } from "./CinematicHero";
import { ProductGrid } from "./ProductGrid";
import { ShowroomDossierModal } from "./ShowroomDossierModal";
import { RepairsShowcase } from "./RepairsShowcase";
import { ProvenanceSection } from "./ProvenanceSection";
import { EditorialManifesto } from "./EditorialManifesto";
import { ShowroomLogistics } from "./ShowroomLogistics";
import { AgencyPitchPill } from "./AgencyPitchPill";
import { CollectionItem, COLLECTIONS_DATA } from "@/data/collections-data";
import Link from "next/link";

export function AtelierClientView() {
  const [selectedPiece, setSelectedPiece] = useState<CollectionItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInspectPiece = (pieceTitle: string) => {
    const found =
      COLLECTIONS_DATA.find((p) => p.title.toLowerCase().includes(pieceTitle.toLowerCase())) ||
      COLLECTIONS_DATA[0];
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

  const handleOpenBooking = (pieceName?: string) => {
    if (pieceName) {
      const match =
        COLLECTIONS_DATA.find((p) => p.title.toLowerCase().includes(pieceName.toLowerCase())) ||
        COLLECTIONS_DATA[0];
      setSelectedPiece(match);
    } else {
      setSelectedPiece(COLLECTIONS_DATA[0]);
    }
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF9F5] text-[#141416] flex flex-col selection:bg-[#C6A75E]/30 selection:text-[#141416] overflow-x-hidden">
      {/* 1. Atelier Header (Quiet Luxury, No Sound Toggle) */}
      <AtelierNavbar onOpenBooking={handleOpenBooking} />

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
        <ProvenanceSection onOpenBooking={() => handleOpenBooking()} />

        {/* In-House Same-Day Bench Repairs Showcase */}
        <RepairsShowcase />

        {/* Editorial Goldsmith Manifesto */}
        <EditorialManifesto />

        {/* Showroom Logistics & Hayes Navigation */}
        <ShowroomLogistics />
      </main>

      {/* 3. Atelier Editorial Footer */}
      <footer className="w-full bg-[#0D0C0B] text-[#A89F91] border-t border-[#2C2825] py-12 px-4 sm:px-6 lg:px-8 font-mono text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-serif text-base tracking-[0.2em] text-[#FAF9F5] uppercase">
              NIRAJ JEWELLERS LTD
            </span>
            <span className="text-[10px] text-[#7A705E] tracking-widest">
              MASTER GOLDSMITHS & PRECIOUS METAL ATELIER · ESTABLISHED 1984 · LONDON
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] tracking-wider uppercase">
            <Link href="/" className="hover:text-[#FAF9F5] transition-colors">
              MAIN SITE
            </Link>
            <Link href="/collections" className="hover:text-[#FAF9F5] transition-colors">
              COLLECTIONS
            </Link>
            <Link href="/repairs" className="hover:text-[#FAF9F5] transition-colors">
              BENCH REPAIRS
            </Link>
            <Link href="/contact" className="hover:text-[#FAF9F5] transition-colors">
              CONCIERGE
            </Link>
          </div>

          <div className="text-[10px] text-[#7A705E] text-center md:text-right">
            <span>UK VAT: GB 674 7451 05 · CO REG: 05074588</span>
            <div className="mt-1">136 UXBRIDGE ROAD, HAYES, MIDDLESEX, UB4 0JH</div>
          </div>
        </div>
      </footer>

      {/* Showroom Dossier Modal (High-Resolution Video Reel / Photo & VIP Booking) */}
      <ShowroomDossierModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        piece={selectedPiece}
      />

      {/* Agency Pitch Pill & Presentation Drawer */}
      <AgencyPitchPill />
    </div>
  );
}
