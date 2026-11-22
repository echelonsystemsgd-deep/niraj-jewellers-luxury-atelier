import { Metadata } from "next";
import { AtelierNavbar } from "@/components/atelier/AtelierNavbar";
import { CollectionGrid } from "@/components/collections/collection-grid";
import { Footer } from "@/components/footer/footer";
import { ShieldCheck, Sparkles, Scale } from "lucide-react";
import { COLLECTIONS_DATA } from "@/data/collections-data";
import { getCollections } from "@/lib/db";

export const metadata: Metadata = {
  title: "Atelier Collections & 54-Piece Vault | Niraj Jewellers Ltd London",
  description:
    "Explore our complete 54-piece vault of handcrafted 22ct bridal suites, certified solitaire diamond engagement rings, heavy solid gold kadas, and antique Polki heirlooms by Niraj Jewellers Ltd.",
  alternates: {
    canonical: "https://www.niraj-jewellers.co.uk/collections",
  },
  openGraph: {
    title: "Atelier Collections & 54-Piece Vault | Niraj Jewellers Ltd London",
    description:
      "Complete 54-piece masterpiece vault: handcrafted 22ct bridal jewellery, certified diamond rings, solid gold kadas, and antique Polki heirlooms. In-house Hayes workshop pricing.",
    url: "https://www.niraj-jewellers.co.uk/collections",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers Ltd London - 54-Piece Atelier Collection Vault",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Collections & 54-Piece Vault | Niraj Jewellers Ltd London",
    description:
      "Explore 54 handcrafted 22ct bridal suites, certified diamond rings, and antique Polki heirlooms.",
    images: ["/og-image.jpg"],
  },
};

export default async function CollectionsPage() {
  const collections = await getCollections();
  const allVaultItems = collections && collections.length > 0 ? collections : COLLECTIONS_DATA;

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
            name: "Atelier Collections & 54-Piece Vault",
            item: "https://www.niraj-jewellers.co.uk/collections",
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://www.niraj-jewellers.co.uk/collections#itemlist",
        name: "Niraj Jewellers Ltd Master Goldsmith 54-Piece Vault",
        numberOfItems: allVaultItems.length,
        itemListElement: allVaultItems.map((item, idx) => ({
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
    <div className="min-h-screen bg-[#FAF9F5] text-[#141416] flex flex-col selection:bg-[#C6A75E]/30 selection:text-[#141416]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionsJsonLd) }}
      />

      {/* Official Atelier Header Navigation */}
      <AtelierNavbar />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Editorial Vault Header */}
        <header className="w-full border-b border-[#E7E2DA] pb-12 sm:pb-16 pt-8 sm:pt-12 bg-[#FAF9F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-2 font-mono text-[9.5px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.24em] uppercase text-[#7A705E]">
                <span className="w-2 h-2 rounded-full bg-[#C6A75E]"></span>
                <span>[ 01 / THE COMPLETE 54-PIECE ATELIER VAULT ]</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#141416] tracking-tight leading-[1.15]">
                Complete Showroom Vault &amp; Craft Portfolio
              </h1>

              <p className="font-sans text-xs sm:text-sm md:text-base text-[#57534E] leading-relaxed max-w-2xl mx-auto">
                Every piece is visually documented from our Hayes workshop. 100% solid-cast non-hollow mass hallmarked by the UK London Assay Office.
              </p>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto font-mono text-[11px] text-[#7A705E] uppercase tracking-wider">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E7E2DA] text-[#141416] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C6A75E]" />
                  <span>London Assay 916 Stamped</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E7E2DA] text-[#141416] font-semibold">
                  <Scale className="w-3.5 h-3.5 text-[#C6A75E]" />
                  <span>Direct Workshop Bullion Value</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E7E2DA] text-[#141416] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#C6A75E]" />
                  <span>100% In-House Benchwork</span>
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Full 54-Piece Atelier Vault Grid Component */}
        <CollectionGrid items={allVaultItems} isHomepage={false} />
      </main>

      {/* Official Luxury Footer */}
      <Footer />
    </div>
  );
}
