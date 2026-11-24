import { Metadata } from "next";
import { AtelierNavbar } from "@/components/atelier/AtelierNavbar";
import { GoldTicker } from "@/components/hero/gold-ticker";
import { WholesaleAdvantage } from "@/components/craftsmanship/wholesale-advantage";
import { SubpageFaq } from "@/components/faq/subpage-faq";
import { GOLD_RATES_FAQS } from "@/data/subpage-faqs-data";
import { Footer } from "@/components/footer/footer";
import { Coins, Scale, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Live Gold Rates Hayes London (24ct, 22ct, 18ct) | Niraj Jewellers Ltd",
  description:
    "Real-time LBMA gold prices per gram, tola & sovereign. Direct wholesale bullion trading, investment bars & instant scrap gold valuation in Hayes.",
  alternates: {
    canonical: "https://www.niraj-jewellers.co.uk/gold-rates",
  },
  openGraph: {
    title: "Live Gold Rates Hayes London (24ct, 22ct, 18ct) | Niraj Jewellers Ltd",
    description:
      "Real-time LBMA gold rates per gram, tola & ounce. Wholesale bullion trading & instant scrap valuation at 136 Uxbridge Road, Hayes.",
    url: "https://www.niraj-jewellers.co.uk/gold-rates",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers Ltd London - Live Gold Rates & Wholesale Bullion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Gold Rates Hayes London | Niraj Jewellers Ltd",
    description:
      "Real-time LBMA gold prices per gram, tola & sovereign. Direct wholesale bullion trading in Hayes.",
    images: ["/og-image.jpg"],
  },
};

export default function GoldRatesPage() {
  const whatsappBullionLink = buildWhatsAppLink({
    intent: "wholesale",
    customNote: "Hi Niraj Jewellers team, I would like to lock in live gold bullion rates or discuss scrap gold trade-in value at your Hayes showroom.",
  });

  const goldRatesJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.niraj-jewellers.co.uk",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Live Gold Bullion Rates",
            item: "https://www.niraj-jewellers.co.uk/gold-rates",
          },
        ],
      },
      {
        "@type": "FinancialProduct",
        "@id": "https://www.niraj-jewellers.co.uk/gold-rates#bullion",
        name: "Physical Gold Bullion Trading (24ct & 22ct)",
        description:
          "London Bullion Market Association (LBMA) spot-indexed physical gold bars (1g to 1kg) and British Sovereign gold coins.",
        category: "Precious Metals Investment",
        provider: {
          "@type": "JewelryStore",
          "@id": "https://www.niraj-jewellers.co.uk/#jewelrystore",
          name: "Niraj Jewellers Ltd",
        },
        feesAndCommissionsSpecification: "Zero retail showroom markups; transparent wholesale spot spread.",
      },
      {
        "@type": "Service",
        "@id": "https://www.niraj-jewellers.co.uk/gold-rates#scrap-valuation",
        name: "Instant Scrap Gold & Jewellery Cash Valuation",
        description:
          "Immediate trade-in valuation weighed in front of clients on calibrated, trade-approved Class II electronic balances at 136 Uxbridge Road.",
        provider: {
          "@type": "JewelryStore",
          "@id": "https://www.niraj-jewellers.co.uk/#jewelrystore",
          name: "Niraj Jewellers Ltd",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-[#141416] flex flex-col">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(goldRatesJsonLd) }}
      />

      <AtelierNavbar />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Editorial Subpage Header */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/50 text-[#8C6212] text-xs uppercase tracking-widest font-bold shadow-sm">
            <Coins className="w-3.5 h-3.5 text-[#996515]" />
            <span>LBMA London Spot Fixing</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141416] font-normal tracking-tight max-w-4xl mx-auto">
            Live Gold Rates &amp; Wholesale Bullion
          </h1>
          <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal">
            Physical bullion trading at direct wholesale spot
          </p>
          <p className="text-sm sm:text-base text-[#4A4A52] max-w-2xl mx-auto leading-relaxed">
            Direct workshop bullion pricing with no retail markups. We trade officially hallmarked 24ct investment bars, 22ct bullion, and offer live trade-in valuations weighed in front of you on calibrated trade scales at 136 Uxbridge Road.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href={whatsappBullionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Lock In Live Spot Rate on WhatsApp</span>
            </a>
          </div>
        </header>

        {/* Live Gold Ticker Bar */}
        <GoldTicker />

        {/* Wholesale Bullion Advantage */}
        <WholesaleAdvantage />

        {/* Scrap Trade-in Reassurance Card */}
        <section className="py-16 bg-[#FAF8F5] border-t border-[#E8DEC8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-none bg-white border border-[#D4AF37]/40 space-y-4 shadow-sm">
              <div className="flex items-center gap-3 text-[#141416] font-serif text-xl sm:text-2xl font-medium">
                <Scale className="w-6 h-6 text-[#996515] shrink-0" />
                <span>Trade-In Your Scrap Gold Directly Against Bespoke Creations</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A4A52] leading-relaxed">
                Bring in broken chains, old sovereign coins, or outdated family jewellery. We test your metal purity and weigh your gold directly in front of you on certified, trade-approved electronic scales at 136 Uxbridge Road. Old gold can either be melted down to forge your bespoke wedding suite or credited at live bullion spot rates with zero middleman deductions.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#8C6212] font-semibold">
                <span>✓ 100% Calibrated Balance</span>
                <span>✓ Direct LBMA Value Credit</span>
                <span>✓ London Assay Verified</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contextual Subpage FAQ for Bullion & Scrap */}
        <SubpageFaq
          title="Gold Bullion &amp; Scrap Trade-In FAQs"
          subtitle="Clear answers on live LBMA rates, HMRC VAT exemption, Capital Gains Tax on British Sovereigns, and tola conversions."
          items={GOLD_RATES_FAQS}
          pageSlug="gold-rates"
        />
      </main>

      <Footer />
    </div>
  );
}
