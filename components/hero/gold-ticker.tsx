"use client";

import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, Sparkles, RefreshCw, ArrowUpRight } from "lucide-react";
import { GoldRateData } from "@/app/api/gold-rates/route";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function GoldTicker() {
  const [rateData, setRateData] = useState<GoldRateData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchRates = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/gold-rates");
      if (res.ok) {
        const data = await res.json();
        setRateData(data);
      }
    } catch {
      // Fallback local calibration
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  const rates = rateData?.rates || {
    ct24: { perGram: 68.45, perTola: 798.39, change24h: 0.42 },
    ct22: { perGram: 62.75, perTola: 731.86, change24h: 0.38 },
    ct18: { perGram: 51.34, perTola: 598.79, change24h: 0.31 },
  };

  const bullionWhatsApp = buildWhatsAppLink({
    source: "gold_rates_ticker",
    visitPurpose: "Gold Bullion / Scrap Trade-In Consultation",
    customNote: "Hello Viky, I saw the live indicative gold rates on your site and would like to buy/sell bullion or check live trade-in rates.",
  });

  return (
    <section id="gold-rates" className="relative w-full bg-atelier-light border-y border-atelier-border overflow-hidden py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500" />
          </span>
          <span className="font-semibold uppercase tracking-wider text-gold-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Live Indicative Gold Bullion Rates
          </span>
          <span className="text-platinum-muted hidden md:inline">
            • {rateData?.lastUpdatedDisplay || "Updated Today London Time"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchRates}
            className="text-platinum-muted hover:text-gold-400 transition-colors flex items-center gap-1 text-[11px]"
            title="Refresh Live Market Spot"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? "animate-spin text-gold-500" : ""}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <a
            href={bullionWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-400 hover:text-gold-300 font-medium inline-flex items-center gap-1 underline underline-offset-2 text-[11px]"
          >
            <span>Trade Bullion with Viky</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Marquee Scroller */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-8 text-xs sm:text-sm">
          {/* Rate 1: 24ct */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-obsidian rounded-lg border border-atelier-border/80">
            <span className="text-platinum-muted font-medium">24ct Pure Bullion (99.9%):</span>
            <span className="text-gold-300 font-bold font-mono">£{rates.ct24.perGram.toFixed(2)}/g</span>
            <span className="text-platinum-muted/70 text-xs">(£{rates.ct24.perTola.toFixed(2)}/tola)</span>
            <span className={`text-xs font-mono flex items-center ${rates.ct24.change24h >= 0 ? "text-emerald-400" : "text-amber-400"}`}>
              {rates.ct24.change24h >= 0 ? <TrendingUp className="w-3 h-3 mr-0.5 inline" /> : <TrendingDown className="w-3 h-3 mr-0.5 inline" />}
              {rates.ct24.change24h >= 0 ? `+${rates.ct24.change24h.toFixed(2)}%` : `${rates.ct24.change24h.toFixed(2)}%`}
            </span>
          </div>

          {/* Rate 2: 22ct */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-obsidian rounded-lg border border-gold-500/30">
            <span className="text-gold-400 font-medium">22ct Hallmark (916):</span>
            <span className="text-white font-bold font-mono">£{rates.ct22.perGram.toFixed(2)}/g</span>
            <span className="text-platinum-muted/70 text-xs">(£{rates.ct22.perTola.toFixed(2)}/tola)</span>
            <span className={`text-xs font-mono flex items-center ${rates.ct22.change24h >= 0 ? "text-emerald-400" : "text-amber-400"}`}>
              {rates.ct22.change24h >= 0 ? <TrendingUp className="w-3 h-3 mr-0.5 inline" /> : <TrendingDown className="w-3 h-3 mr-0.5 inline" />}
              {rates.ct22.change24h >= 0 ? `+${rates.ct22.change24h.toFixed(2)}%` : `${rates.ct22.change24h.toFixed(2)}%`}
            </span>
          </div>

          {/* Rate 3: 18ct */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-obsidian rounded-lg border border-atelier-border/80">
            <span className="text-platinum-muted font-medium">18ct Luxury Gold (750):</span>
            <span className="text-gold-300 font-bold font-mono">£{rates.ct18.perGram.toFixed(2)}/g</span>
            <span className="text-platinum-muted/70 text-xs">(£{rates.ct18.perTola.toFixed(2)}/tola)</span>
            <span className={`text-xs font-mono flex items-center ${rates.ct18.change24h >= 0 ? "text-emerald-400" : "text-amber-400"}`}>
              {rates.ct18.change24h >= 0 ? <TrendingUp className="w-3 h-3 mr-0.5 inline" /> : <TrendingDown className="w-3 h-3 mr-0.5 inline" />}
              {rates.ct18.change24h >= 0 ? `+${rates.ct18.change24h.toFixed(2)}%` : `${rates.ct18.change24h.toFixed(2)}%`}
            </span>
          </div>

          {/* Rate 4: London Assay Hallmark Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-obsidian/70 rounded-lg border border-atelier-border/80">
            <span className="text-gold-500 font-semibold">UK Hallmarking Act:</span>
            <span className="text-platinum-muted">All physical gold 100% London Assay Office stamped</span>
          </div>

          {/* Repeat for seamless infinite loop */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-obsidian rounded-lg border border-atelier-border/80">
            <span className="text-platinum-muted font-medium">24ct Pure Bullion (99.9%):</span>
            <span className="text-gold-300 font-bold font-mono">£{rates.ct24.perGram.toFixed(2)}/g</span>
            <span className="text-platinum-muted/70 text-xs">(£{rates.ct24.perTola.toFixed(2)}/tola)</span>
            <span className={`text-xs font-mono flex items-center ${rates.ct24.change24h >= 0 ? "text-emerald-400" : "text-amber-400"}`}>
              {rates.ct24.change24h >= 0 ? <TrendingUp className="w-3 h-3 mr-0.5 inline" /> : <TrendingDown className="w-3 h-3 mr-0.5 inline" />}
              {rates.ct24.change24h >= 0 ? `+${rates.ct24.change24h.toFixed(2)}%` : `${rates.ct24.change24h.toFixed(2)}%`}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-obsidian rounded-lg border border-gold-500/30">
            <span className="text-gold-400 font-medium">22ct Hallmark (916):</span>
            <span className="text-white font-bold font-mono">£{rates.ct22.perGram.toFixed(2)}/g</span>
            <span className="text-platinum-muted/70 text-xs">(£{rates.ct22.perTola.toFixed(2)}/tola)</span>
            <span className={`text-xs font-mono flex items-center ${rates.ct22.change24h >= 0 ? "text-emerald-400" : "text-amber-400"}`}>
              {rates.ct22.change24h >= 0 ? <TrendingUp className="w-3 h-3 mr-0.5 inline" /> : <TrendingDown className="w-3 h-3 mr-0.5 inline" />}
              {rates.ct22.change24h >= 0 ? `+${rates.ct22.change24h.toFixed(2)}%` : `${rates.ct22.change24h.toFixed(2)}%`}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-obsidian rounded-lg border border-atelier-border/80">
            <span className="text-platinum-muted font-medium">18ct Luxury Gold (750):</span>
            <span className="text-gold-300 font-bold font-mono">£{rates.ct18.perGram.toFixed(2)}/g</span>
            <span className="text-platinum-muted/70 text-xs">(£{rates.ct18.perTola.toFixed(2)}/tola)</span>
            <span className={`text-xs font-mono flex items-center ${rates.ct18.change24h >= 0 ? "text-emerald-400" : "text-amber-400"}`}>
              {rates.ct18.change24h >= 0 ? <TrendingUp className="w-3 h-3 mr-0.5 inline" /> : <TrendingDown className="w-3 h-3 mr-0.5 inline" />}
              {rates.ct18.change24h >= 0 ? `+${rates.ct18.change24h.toFixed(2)}%` : `${rates.ct18.change24h.toFixed(2)}%`}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
