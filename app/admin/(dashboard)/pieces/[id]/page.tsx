import { notFound } from "next/navigation";
import { getCollections } from "@/lib/db";
import { PieceForm } from "@/components/admin/piece-form";
import { PiecePayload } from "@/app/admin/actions";

interface PiecePageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminPieceDetailPage({ params }: PiecePageProps) {
  const { id } = await params;
  const pieces = await getCollections();
  const piece = pieces.find((p) => p.id === id);

  if (!piece) {
    notFound();
  }

  const payload: PiecePayload = {
    id: piece.id,
    title: piece.title,
    category: piece.category,
    metal_purity: piece.metalPurity,
    hallmark_text: piece.hallmarkText,
    description: piece.description,
    price_note: piece.priceNote,
    price_on_request: true,
    price_amount: null,
    media_type: piece.mediaType,
    thumbnail_url: piece.thumbnailUrl,
    video_url: piece.videoUrl || "",
    gallery_images: [piece.thumbnailUrl],
    stock_quantity: 1,
    stock_status: "available",
    is_featured: false,
    is_masterpiece_slider: false,
    is_ribbon_piece: false,
    is_published: true,
    specs: piece.specs,
    tags: piece.tags,
  };

  return <PieceForm initialData={payload} isNew={false} />;
}
