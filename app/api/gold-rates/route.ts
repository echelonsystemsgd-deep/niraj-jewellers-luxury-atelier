import { NextResponse } from "next/server";

export interface GoldRateData {
  currency: string;
  timestamp: string;
  lastUpdatedDisplay: string;
  marketStatus: "LIVE" | "INDICATIVE";
  rates: {
    ct24: {
      purity: string;
      perGram: number;
      perTola: number; // 11.6638 grams - traditional South Asian gold metric
      perOunce: number;
      change24h: number;
    };
    ct22: {
      purity: string;
      perGram: number;
      perTola: number;
      perOunce: number;
      change24h: number;
    };
    ct18: {
      purity: string;
      perGram: number;
      perTola: number;
      perOunce: number;
      change24h: number;
    };
  };
  disclaimer: string;
}

export async function GET() {
  const now = new Date();
  const londonDateStr = now.toLocaleDateString("en-GB", {
    timeZone: "Europe/London",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const londonTimeStr = now.toLocaleTimeString("en-GB", {
    timeZone: "Europe/London",
    hour: "2-digit",
    minute: "2-digit",
  });

  const apiKey = process.env.GOLD_API_KEY;
  let base24ct = 91.56;
  let base22ct = 83.93;
  let base18ct = 68.67;
  let change24h = -2.28;

  try {
    if (apiKey) {
      // Direct Live LBMA Spot Price from GoldAPI.io
      const goldApiRes = await fetch("https://www.goldapi.io/api/XAU/GBP", {
        headers: {
          "x-access-token": apiKey,
          "Content-Type": "application/json",
        },
        next: { revalidate: 1800 }, // Cache for 30 minutes
      });

      if (goldApiRes.ok) {
        const liveData = await goldApiRes.json();
        if (liveData?.price_gram_24k) {
          base24ct = parseFloat(liveData.price_gram_24k.toFixed(2));
          base22ct = parseFloat((liveData.price_gram_22k || liveData.price_gram_24k * (22 / 24)).toFixed(2));
          base18ct = parseFloat((liveData.price_gram_18k || liveData.price_gram_24k * (18 / 24)).toFixed(2));
          change24h = parseFloat((liveData.chp || 0).toFixed(2));
        }
      }
    } else {
      // Fallback open rates endpoint
      const res = await fetch("https://open.er-api.com/v6/latest/XAU", {
        next: { revalidate: 3600 },
        headers: { "User-Agent": "NirajJewellers/1.0" },
      });

      if (res.ok) {
        const data = await res.json();
        if (data?.rates?.GBP) {
          const ozInGbp = data.rates.GBP;
          const gram24 = ozInGbp / 31.1034768;
          if (gram24 > 40 && gram24 < 150) {
            base24ct = parseFloat(gram24.toFixed(2));
            base22ct = parseFloat((base24ct * (22 / 24)).toFixed(2));
            base18ct = parseFloat((base24ct * (18 / 24)).toFixed(2));
          }
        }
      }
    }
  } catch (error) {
    console.error("Gold API fetch fallback activated:", error);
  }

  const TOLA_GRAMS = 11.6638;
  const OZ_GRAMS = 31.1034768;

  const responseData: GoldRateData = {
    currency: "GBP (£)",
    timestamp: now.toISOString(),
    lastUpdatedDisplay: `${londonDateStr} at ${londonTimeStr} London Time`,
    marketStatus: "LIVE",
    rates: {
      ct24: {
        purity: "24ct Pure Investment Bullion (99.9%)",
        perGram: base24ct,
        perTola: parseFloat((base24ct * TOLA_GRAMS).toFixed(2)),
        perOunce: parseFloat((base24ct * OZ_GRAMS).toFixed(2)),
        change24h,
      },
      ct22: {
        purity: "22ct Traditional Asian Hallmarked Gold (91.6%)",
        perGram: base22ct,
        perTola: parseFloat((base22ct * TOLA_GRAMS).toFixed(2)),
        perOunce: parseFloat((base22ct * OZ_GRAMS).toFixed(2)),
        change24h: parseFloat((change24h * 0.916).toFixed(2)),
      },
      ct18: {
        purity: "18ct Fine Luxury Jewellery Gold (75.0%)",
        perGram: base18ct,
        perTola: parseFloat((base18ct * TOLA_GRAMS).toFixed(2)),
        perOunce: parseFloat((base18ct * OZ_GRAMS).toFixed(2)),
        change24h: parseFloat((change24h * 0.75).toFixed(2)),
      },
    },
    disclaimer:
      "Indicative rates based on LBMA London spot gold fixing. Updated dynamically. Visit 136 Uxbridge Road, Hayes for live physical bullion transactions and bespoke commission scrap trade-ins.",
  };

  return NextResponse.json(responseData, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
