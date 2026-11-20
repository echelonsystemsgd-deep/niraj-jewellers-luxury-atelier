import Link from "next/link";
import Image from "next/image";
import { Plus, Search, Filter, Gem, Sparkles, Video, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { getCollections } from "@/lib/db";
import { quickUpdateStockAction } from "@/app/admin/actions";

interface AdminVaultPageProps {
  searchParams: Promise<{ category?: string; query?: string }>;
}

export default async function AdminVaultPage({ searchParams }: AdminVaultPageProps) {
  const params = await searchParams;
  const activeCategory = params.category || "all";
  const searchQuery = (params.query || "").toLowerCase();

  const allPieces = await getCollections();

  const filteredPieces = allPieces.filter((piece) => {
    const matchesCategory =
      activeCategory === "all" || piece.category === activeCategory;
    const matchesQuery =
      !searchQuery ||
      piece.title.toLowerCase().includes(searchQuery) ||
      piece.metalPurity.toLowerCase().includes(searchQuery) ||
      piece.tags.some((t) => t.toLowerCase().includes(searchQuery));

    return matchesCategory && matchesQuery;
  });

  const categories = [
    { id: "all", label: "All Pieces" },
    { id: "bridal", label: "Bridal Suites" },
    { id: "22ct-gold", label: "22ct Gold" },
    { id: "rings", label: "Diamond Rings" },
    { id: "polki-heritage", label: "Polki Heirlooms" },
    { id: "featured", label: "Featured" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-6">
      {/* 1. Page Header & Add Piece Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#141416]">
            Atelier Vault & Products
          </h1>
          <p className="text-xs text-[#5A5960] mt-1">
            Manage your 54 live showroom pieces, prices, weights and stock availability.
          </p>
        </div>

        <Link
          href="/admin/pieces/new"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#85560C] via-[#996515] to-[#85560C] text-white text-xs font-semibold tracking-wider uppercase shadow-sm hover:opacity-95 active:scale-95 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Piece</span>
        </Link>
      </div>

      {/* 2. Quick Inventory Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 bg-white border border-[#E8DEC8] rounded-xl">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7A705E] block">
            Total Vault Pieces
          </span>
          <span className="font-serif text-2xl font-bold text-[#141416] mt-0.5 block">
            {allPieces.length}
          </span>
        </div>
        <div className="p-3.5 bg-white border border-[#E8DEC8] rounded-xl">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 block">
            Live in Showroom
          </span>
          <span className="font-serif text-2xl font-bold text-emerald-800 mt-0.5 block">
            {allPieces.length}
          </span>
        </div>
        <div className="p-3.5 bg-white border border-[#E8DEC8] rounded-xl">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8C6212] block">
            Bridal Suites
          </span>
          <span className="font-serif text-2xl font-bold text-[#8C6212] mt-0.5 block">
            {allPieces.filter((p) => p.category === "bridal").length}
          </span>
        </div>
        <div className="p-3.5 bg-white border border-[#E8DEC8] rounded-xl">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4A4A52] block">
            22ct Gold Kadas
          </span>
          <span className="font-serif text-2xl font-bold text-[#141416] mt-0.5 block">
            {allPieces.filter((p) => p.category === "22ct-gold").length}
          </span>
        </div>
      </div>

      {/* 3. Search & Filter Bar */}
      <div className="bg-white border border-[#E8DEC8] rounded-xl p-3 sm:p-4 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Box */}
          <form className="relative flex-1">
            <Search className="w-4 h-4 text-[#7A705E] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="query"
              defaultValue={searchQuery}
              placeholder="Search by piece title, metal, or gemstone..."
              className="w-full h-11 pl-10 pr-4 rounded-lg bg-[#FAF8F5] border border-[#E8DEC8] text-xs text-[#141416] placeholder:text-[#9A98A0] focus:outline-none focus:border-[#996515] transition-colors"
            />
          </form>

          {/* Category Dropdown/Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((c) => (
              <Link
                key={c.id}
                href={`/admin?category=${c.id}${searchQuery ? `&query=${encodeURIComponent(searchQuery)}` : ""}`}
                className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeCategory === c.id
                    ? "bg-[#996515] text-white"
                    : "bg-[#FAF8F5] text-[#4A4A52] hover:bg-[#F3EDE0]"
                }`}
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPieces.map((piece) => (
          <div
            key={piece.id}
            className="bg-white border border-[#E8DEC8] rounded-2xl overflow-hidden shadow-luxury-sm hover:border-[#D4AF37] transition-all flex flex-col"
          >
            {/* Card Media Preview */}
            <div className="relative aspect-[4/3] bg-[#FAF8F5] overflow-hidden group">
              <Image
                src={piece.thumbnailUrl}
                alt={piece.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold tracking-wider uppercase text-[#8C6212] border border-[#E8DEC8]">
                  {piece.category}
                </span>
                {piece.mediaType === "video" && (
                  <span className="p-1 rounded-full bg-black/60 text-white">
                    <Video className="w-3 h-3" />
                  </span>
                )}
              </div>

              <div className="absolute top-2.5 right-2.5">
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold">
                  ✓ Live
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-serif text-base font-bold text-[#141416] line-clamp-1">
                  {piece.title}
                </h3>
                <p className="text-[11px] font-medium text-[#8C6212] mt-0.5">
                  {piece.metalPurity}
                </p>
                <p className="text-xs text-[#5A5960] line-clamp-2 mt-2 leading-relaxed">
                  {piece.description}
                </p>
              </div>

              {/* Specs & Pricing Pill */}
              <div className="pt-2 border-t border-[#E8DEC8]/60 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#7A705E]">Weight:</span>
                  <span className="font-semibold text-[#141416]">
                    {piece.specs.weight || "Workshop Weighed"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#7A705E]">Price:</span>
                  <span className="font-bold text-[#8C6212]">
                    {piece.priceNote}
                  </span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-2 flex items-center gap-2">
                <Link
                  href={`/admin/pieces/${piece.id}`}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#FAF8F5] border border-[#E8DEC8] hover:border-[#996515] text-xs font-semibold text-center text-[#141416] transition-colors"
                >
                  Edit Details & Photos
                </Link>

                <form
                  action={async () => {
                    "use server";
                    await quickUpdateStockAction(piece.id, "sold");
                  }}
                >
                  <button
                    type="submit"
                    title="Mark Sold"
                    className="py-2.5 px-3 rounded-xl bg-white border border-[#E8DEC8] hover:bg-red-50 hover:text-red-600 text-xs text-[#7A705E] transition-colors"
                  >
                    Sold
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPieces.length === 0 && (
        <div className="p-12 text-center bg-white border border-[#E8DEC8] rounded-2xl space-y-2">
          <Gem className="w-8 h-8 text-[#996515] mx-auto" />
          <h3 className="font-serif text-lg font-bold text-[#141416]">No pieces match your search</h3>
          <p className="text-xs text-[#5A5960]">Try clearing your search query or category filter.</p>
        </div>
      )}

      {/* 5. Mobile Floating Action Button (FAB) */}
      <div className="md:hidden fixed bottom-20 right-4 z-40">
        <Link
          href="/admin/pieces/new"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-[#85560C] to-[#996515] text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          aria-label="Add New Piece"
        >
          <Plus className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
