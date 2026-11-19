import { Metadata } from "next";
import { SubpageNav } from "@/components/header/subpage-nav";
import { GoldTicker } from "@/components/hero/gold-ticker";
import { WholesaleAdvantage } from "@/components/craftsmanship/wholesale-advantage";
import { Footer } from "@/components/footer/footer";
import { Coins, Scale, TrendingUp, ShieldCheck, MessageCircle, AlertCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Live Gold Rates Hayes London (24ct, 22ct, 18ct)",
  description:
    "Real-time LBMA gold prices per gram, tola & sovereign. Direct wholesale bullion trading, investment bars & instant scrap gold valuation in Hayes.",
  alternates: {
    canonical: "https://nirajjewellers.co.uk/gold-rates",
  },
  openGraph: {
    title: "Live Gold Rates Hayes London (24ct, 22ct, 18ct) | Niraj Jewellers",
    description:
      "Real-time LBMA gold rates per gram, tola & ounce. Wholesale bullion trading & instant scrap valuation at 136 Uxbridge Road, Hayes.",
    url: "https://nirajjewellers.co.uk/gold-rates",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers London - Live Gold Rates & Wholesale Bullion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Gold Rates Hayes London | Niraj Jewellers",
    description:
      "Real-time LBMA gold prices per gram, tola & sovereign. Direct wholesale bullion trading in Hayes.",
    images: ["/og-image.jpg"],
  },
};

export default function GoldRatesPage() {
  const whatsappBullionLink = buildWhatsAppLink({
    source: "gold_rates_page",
    visitPurpose: "Gold Bullion / Scrap Trade-In Consultation",
    customNote: "Hello Viky, I would like to lock in live gold bullion rates or get a scrap trade-in valuation.",
  });

  return (
    <div className="min-h-screen bg-obsidian text-platinum flex flex-col">
      <SubpageNav currentTitle="Live Gold Bullion Portal" />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Editorial Subpage Header */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-950/40 border border-gold-500/30 text-gold-300 text-xs uppercase tracking-widest font-mono">
            <Coins className="w-3.5 h-3.5 text-gold-400" />
            <span>LBMA London Spot Fixing</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight max-w-4xl mx-auto">
            Live Gold Rates &amp; Wholesale Bullion
          </h1>
          <p className="text-sm sm:text-base text-platinum-muted max-w-2xl mx-auto leading-relaxed">
            Direct workshop bullion pricing with no retail markups. We trade officially hallmarked 24ct investment bars, 22ct bullion, and offer live trade-in valuations weighed in front of you on calibrated trade scales at 136 Uxbridge Road.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href={whatsappBullionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-black font-semibold text-xs tracking-wide transition-all shadow-lg hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-black text-whatsapp" />
              <span>Lock In Live Spot Rate on WhatsApp</span>
            </a>
          </div>
        </header>

        {/* Live Gold Ticker Bar */}
        <GoldTicker />

        {/* Wholesale Bullion Advantage */}
        <WholesaleAdvantage />

        {/* Scrap Trade-in Reassurance Card */}
        <section className="py-16 bg-atelier border-t border-atelier-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-obsidian border border-gold-500/30 space-y-4">
              <div className="flex items-center gap-3 text-gold-300 font-serif text-xl sm:text-2xl font-medium">
                <Scale className="w-6 h-6 text-gold-400 shrink-0" />
                <span>Trade-In Your Scrap Gold Directly Against Bespoke Creations</span>
              </div>
              <p className="text-xs sm:text-sm text-platinum-muted leading-relaxed">
                Bring in broken chains, old sovereign coins, or outdated family jewellery. We test your metal purity and weigh your gold directly in front of you on certified, trade-approved electronic scales at 136 Uxbridge Road. Old gold can either be melted down to forge your bespoke wedding suite or credited at live bullion spot rates with zero middleman deductions.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-gold-400 font-mono">
                <span>✓ 100% Calibrated Balance</span>
                <span>✓ Direct LBMA Value Credit</span>
                <span>✓ London Assay Verified</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
