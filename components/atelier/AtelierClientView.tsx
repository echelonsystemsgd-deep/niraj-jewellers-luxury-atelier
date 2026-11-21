"use client";

import React, { useState } from "react";
import { LiveGoldTicker } from "./LiveGoldTicker";
import { AtelierNavbar } from "./AtelierNavbar";
import { CinematicHero } from "./CinematicHero";
import { ProductGrid, MasterpieceItem, MASTERPIECES } from "./ProductGrid";
import { ShowroomDossierModal } from "./ShowroomDossierModal";
import { RepairsShowcase } from "./RepairsShowcase";
import { ProvenanceSection } from "./ProvenanceSection";
import { EditorialManifesto } from "./EditorialManifesto";
import { ShowroomLogistics } from "./ShowroomLogistics";
import { AgencyPitchPill } from "./AgencyPitchPill";
import Link from "next/link";
import { sound } from "@/lib/sound";
import { ArrowUp, ShieldCheck } from "lucide-react";

export function AtelierClientView() {
  const [selectedPiece, setSelectedPiece] = useState<MasterpieceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInspect3D = (pieceTitle: string) => {
    const found = MASTERPIECES.find((p) => p.title.toLowerCase().includes(pieceTitle.toLowerCase())) || MASTERPIECES[0];
    setSelectedPiece(found);
    setIsModalOpen(true);
  };

  const handleSelectPiece = (piece: MasterpieceItem) => {
    setSelectedPiece(piece);
    setIsModalOpen(true);
  };

  const handleExploreArchive = () => {
    const el = document.getElementById("archive");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenBooking = (pieceName?: string) => {
    if (pieceName) {
      const match = MASTERPIECES.find((p) => p.title.includes(pieceName)) || MASTERPIECES[0];
      setSelectedPiece(match);
    } else {
      setSelectedPiece(MASTERPIECES[0]);
    }
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF9F5] text-[#141416] flex flex-col selection:bg-[#C6A75E]/30 selection:text-[#141416] overflow-x-hidden">
      {/* 1. Live Gold Rate & Bullion Ticker */}
      <LiveGoldTicker />

      {/* 2. Atelier Navbar with Audio Toggle & Showroom CTAs */}
      <AtelierNavbar onOpenBooking={handleOpenBooking} />

      {/* 3. Main Experience */}
      <main className="flex-1">
        {/* Frame-Accurate Canvas Scrub & 1064°C Metallurgy Hero */}
        <CinematicHero
          onInspect3D={handleInspect3D}
          onExploreArchive={handleExploreArchive}
        />

        {/* Permanent Collection Archive Grid (360° Inspect & WhatsApp Pre-fill) */}
        <ProductGrid onSelectPiece={handleSelectPiece} />

        {/* 3-Step Unboxing Architecture & Provenance */}
        <ProvenanceSection onOpenBooking={() => handleOpenBooking()} />

        {/* In-House Same-Day Bench Repairs Module */}
        <RepairsShowcase />

        {/* Editorial Goldsmith Manifesto */}
        <EditorialManifesto />

        {/* Showroom Logistics & Hayes Navigation */}
        <ShowroomLogistics />
      </main>

      {/* 4. Atelier Editorial Footer */}
      <footer className="w-full bg-[#0D0C0B] text-[#A89F91] border-t border-[#2C2825] py-12 px-4 sm:px-6 lg:px-8 font-mono text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-serif text-base tracking-[0.2em] text-[#FAF9F5] uppercase">
              NIRAJ JEWELLERS LTD
            </span>
            <span className="text-[10px] text-[#7A705E] tracking-widest">
              MASTER GOLDSMITHS & BULLION DEALERS · ESTABLISHED 1984 · LONDON
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] tracking-wider uppercase">
            <Link
              href="/"
              onClick={() => sound.playTick()}
              className="hover:text-[#FAF9F5] transition-colors"
            >
              MAIN SITE
            </Link>
            <Link
              href="/collections"
              onClick={() => sound.playTick()}
              className="hover:text-[#FAF9F5] transition-colors"
            >
              54-PIECE VAULT
            </Link>
            <Link
              href="/gold-rates"
              onClick={() => sound.playTick()}
              className="hover:text-[#FAF9F5] transition-colors"
            >
              LBMA SPOT RATES
            </Link>
            <Link
              href="/contact"
              onClick={() => sound.playTick()}
              className="hover:text-[#FAF9F5] transition-colors"
            >
              CONCIERGE
            </Link>
          </div>

          <div className="text-[10px] text-[#7A705E] text-center md:text-right">
            <span>UK VAT: GB 674 7451 05 · CO REG: 05074588</span>
            <div className="mt-1">136 UXBRIDGE ROAD, HAYES, MIDDLESEX, UB4 0JH</div>
          </div>
        </div>
      </footer>

      {/* Showroom Dossier Modal (3D WebGL Configurator & WhatsApp VIP) */}
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
