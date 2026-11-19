"use client";

import { useState } from "react";
import { SubpageNav } from "@/components/header/subpage-nav";
import { ShowroomHub } from "@/components/showroom/showroom-hub";
import { ReviewsSection } from "@/components/trust/reviews-section";
import { VipBookingModal } from "@/components/showroom/vip-booking-modal";
import { Footer } from "@/components/footer/footer";
import { MapPin, Sparkles } from "lucide-react";

export function ShowroomClientView() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian text-platinum flex flex-col">
      <SubpageNav currentTitle="Hayes Flagship Showroom" />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Editorial Subpage Header */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-950/40 border border-gold-500/30 text-gold-300 text-xs uppercase tracking-widest font-mono">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>136 Uxbridge Road, Hayes UB4 0JH</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight max-w-4xl mx-auto">
            The Hayes Flagship Showroom &amp; Atelier
          </h1>
          <p className="text-sm sm:text-base text-platinum-muted max-w-2xl mx-auto leading-relaxed">
            Step directly into our working atelier. Inspect certified loose diamonds under digital microscopes, try on bridal suites, and speak face-to-face with Master Jeweller Viky.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              onClick={() => setBookingModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold-500/50 bg-gold-950/20 hover:bg-gold-500/20 text-gold-300 hover:text-white font-medium text-xs tracking-wider uppercase transition-all shadow-lg hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Book a Private VIP Consultation</span>
            </button>
          </div>
        </header>

        {/* Showroom Hub Component */}
        <ShowroomHub onOpenBookingModal={() => setBookingModalOpen(true)} />

        {/* Verified Reviews Section */}
        <ReviewsSection />
      </main>

      <Footer />

      {/* Booking Modal */}
      <VipBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
