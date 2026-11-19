import { Metadata } from "next";
import { SubpageNav } from "@/components/header/subpage-nav";
import { CollectionGrid } from "@/components/collections/collection-grid";
import { Footer } from "@/components/footer/footer";
import { Gem } from "lucide-react";
import { COLLECTIONS_DATA } from "@/data/collections-data";

export const metadata: Metadata = {
  title: "Atelier Collections & Bridal Suites | Niraj Jewellers Ltd London",
  description:
    "Explore handcrafted 22ct bridal suites, certified solitaire diamond engagement rings, heavy solid gold kadas, and antique Polki heirlooms by Niraj Jewellers Ltd.",
  alternates: {
    canonical: "https://www.niraj-jewellers.co.uk/collections",
  },
  openGraph: {
    title: "Atelier Collections & Bridal Suites | Niraj Jewellers Ltd London",
    description:
      "Handcrafted 22ct bridal jewellery, certified diamond engagement rings, solid gold kadas & antique Polki heirlooms. In-house workshop direct pricing.",
    url: "https://www.niraj-jewellers.co.uk/collections",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers Ltd London - Atelier Collections & Bridal Suites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Collections & Bridal Suites | Niraj Jewellers Ltd London",
    description:
      "Explore handcrafted 22ct bridal suites, certified diamond rings & antique Polki heirlooms.",
    images: ["/og-image.jpg"],
  },
};

export default function CollectionsPage() {
  const collectionsJsonLd = {
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
            name: "Atelier Collections & Bridal Suites",
            item: "https://www.niraj-jewellers.co.uk/collections",
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://www.niraj-jewellers.co.uk/collections#itemlist",
        name: "Niraj Jewellers Ltd Master Goldsmith Collections",
        numberOfItems: COLLECTIONS_DATA.length,
        itemListElement: COLLECTIONS_DATA.map((item, idx) => ({
          "@type": "Product",
          position: idx + 1,
          name: item.title,
          description: item.description,
          image: item.thumbnailUrl,
          category: item.category,
          material: item.metalPurity,
          offers: {
            "@type": "Offer",
            priceCurrency: "GBP",
            availability: "https://schema.org/InStock",
            priceSpecification: {
              "@type": "PriceSpecification",
              description: item.priceNote,
            },
            seller: {
              "@type": "JewelryStore",
              "@id": "https://www.niraj-jewellers.co.uk/#jewelrystore",
              name: "Niraj Jewellers Ltd",
            },
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-[#141416] flex flex-col">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionsJsonLd) }}
      />

      <SubpageNav currentTitle="Collections & Reels" />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Editorial Subpage Header */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/50 text-[#8C6212] text-xs uppercase tracking-widest font-bold shadow-sm">
            <Gem className="w-3.5 h-3.5 text-[#996515]" />
            <span>Master Goldsmith Portfolio</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141416] font-normal tracking-tight max-w-4xl mx-auto">
            Curated Showroom Collections &amp; Craft Reels
          </h1>
          <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal">
            Bespoke bridal heirlooms forged on Uxbridge Road
          </p>
          <p className="text-sm sm:text-base text-[#4A4A52] max-w-2xl mx-auto leading-relaxed">
            Every piece is forged in our Hayes workshop from officially hallmarked 22ct (916) gold and 950 platinum, featuring hand-selected GIA/IGI certified natural diamonds and Zambian emeralds.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs text-[#8C6212] font-semibold">
            <span>✓ London Assay Office Leopard&apos;s Head Hallmarked</span>
            <span>✓ Direct Workshop Pricing</span>
            <span>✓ Custom Sizing &amp; Fitting in Hayes</span>
          </div>
        </header>

        {/* Collection Grid Component showing all 16 items */}
        <CollectionGrid isHomepage={false} />
      </main>

      <Footer />
    </div>
  );
}
