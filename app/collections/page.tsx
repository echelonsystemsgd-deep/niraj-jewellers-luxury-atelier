import { Metadata } from "next";
import { SubpageNav } from "@/components/header/subpage-nav";
import { CollectionGrid } from "@/components/collections/collection-grid";
import { Footer } from "@/components/footer/footer";
import { Sparkles, Shield, Award, Gem } from "lucide-react";

export const metadata: Metadata = {
  title: "Atelier Collections | Niraj Jewellers London",
  description: "Explore handcrafted 22ct bridal suites, certified solitaire diamond engagement rings, heavy solid gold kadas, and antique Polki heirlooms by Master Jeweller Viky.",
};

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-obsidian text-platinum flex flex-col">
      <SubpageNav currentTitle="Collections & Reels" />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Editorial Subpage Header */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-950/40 border border-gold-500/30 text-gold-300 text-xs uppercase tracking-widest font-mono">
            <Gem className="w-3.5 h-3.5 text-gold-400" />
            <span>Master Goldsmith Portfolio</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight max-w-4xl mx-auto">
            Curated Showroom Collections &amp; Craft Reels
          </h1>
          <p className="text-sm sm:text-base text-platinum-muted max-w-2xl mx-auto leading-relaxed">
            Every piece is forged in our Hayes workshop from officially hallmarked 22ct (916) gold and 950 platinum, featuring hand-selected GIA/IGI certified natural diamonds and Zambian emeralds.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs text-gold-400/90 font-medium">
            <span>✓ London Assay Office Leopard&apos;s Head Hallmarked</span>
            <span>✓ Direct Workshop Pricing</span>
            <span>✓ Custom Sizing &amp; Fitting in Hayes</span>
          </div>
        </header>

        {/* Collection Grid Component */}
        <CollectionGrid />
      </main>

      <Footer />
    </div>
  );
}
