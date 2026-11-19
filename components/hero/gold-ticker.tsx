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
    intent: "wholesale",
    customNote: "Hi Niraj Jewellers team, I am checking your gold rates and would like to ask about bullion availability (bars/sovereigns) and your current scrap trade-in rates.",
  });

  return (
    <section id="gold-rates" className="relative w-full bg-[#FAF7F2] border-y border-[#E8DEC8] overflow-hidden py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#996515]" />
          </span>
          <span className="font-bold uppercase tracking-wider text-[#8C6212] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Indicative Gold Bullion Rates
          </span>
          <span className="text-[#5A5960] hidden md:inline">
            • {rateData?.lastUpdatedDisplay || "Updated Today London Time"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchRates}
            className="text-[#5A5960] hover:text-[#996515] transition-colors flex items-center gap-1 text-[11px] font-medium"
            title="Refresh Market Spot"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? "animate-spin text-[#996515]" : ""}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <a
            href={bullionWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#996515] hover:text-[#78510C] font-semibold inline-flex items-center gap-1 underline underline-offset-2 text-[11px]"
          >
            <span>Trade Bullion with Atelier Concierge</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Marquee Scroller */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-8 text-xs sm:text-sm">
          {/* Rate 1: 24ct */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-lg border border-[#E8DEC8] shadow-sm">
            <span className="text-[#4A4A52] font-semibold">24ct Pure Bullion (99.9%):</span>
            <span className="text-[#8C6212] font-bold font-mono">£{rates.ct24.perGram.toFixed(2)}/g</span>
            <span className="text-[#7A7880] text-xs">(£{rates.ct24.perTola.toFixed(2)}/tola)</span>
            <span className={`text-xs font-mono font-bold flex items-center ${rates.ct24.change24h >= 0 ? "text-emerald-700" : "text-amber-700"}`}>
              {rates.ct24.change24h >= 0 ? <TrendingUp className="w-3 h-3 mr-0.5 inline" /> : <TrendingDown className="w-3 h-3 mr-0.5 inline" />}
              {rates.ct24.change24h >= 0 ? `+${rates.ct24.change24h.toFixed(2)}%` : `${rates.ct24.change24h.toFixed(2)}%`}
            </span>
          </div>

          {/* Rate 2: 22ct */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-lg border border-[#D4AF37]/50 shadow-sm">
            <span className="text-[#8C6212] font-bold">22ct Hallmark (916):</span>
            <span className="text-[#141416] font-bold font-mono">£{rates.ct22.perGram.toFixed(2)}/g</span>
            <span className="text-[#7A7880] text-xs">(£{rates.ct22.perTola.toFixed(2)}/tola)</span>
            <span className={`text-xs font-mono font-bold flex items-center ${rates.ct22.change24h >= 0 ? "text-emerald-700" : "text-amber-700"}`}>
              {rates.ct22.change24h >= 0 ? <TrendingUp className="w-3 h-3 mr-0.5 inline" /> : <TrendingDown className="w-3 h-3 mr-0.5 inline" />}
              {rates.ct22.change24h >= 0 ? `+${rates.ct22.change24h.toFixed(2)}%` : `${rates.ct22.change24h.toFixed(2)}%`}
            </span>
          </div>

          {/* Rate 3: 18ct */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-lg border border-[#E8DEC8] shadow-sm">
            <span className="text-[#4A4A52] font-semibold">18ct Fine Gold (750):</span>
            <span className="text-[#8C6212] font-bold font-mono">£{rates.ct18.perGram.toFixed(2)}/g</span>
            <span className="text-[#7A7880] text-xs">(£{rates.ct18.perTola.toFixed(2)}/tola)</span>
            <span className={`text-xs font-mono font-bold flex items-center ${rates.ct18.change24h >= 0 ? "text-emerald-700" : "text-amber-700"}`}>
              {rates.ct18.change24h >= 0 ? <TrendingUp className="w-3 h-3 mr-0.5 inline" /> : <TrendingDown className="w-3 h-3 mr-0.5 inline" />}
              {rates.ct18.change24h >= 0 ? `+${rates.ct18.change24h.toFixed(2)}%` : `${rates.ct18.change24h.toFixed(2)}%`}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
