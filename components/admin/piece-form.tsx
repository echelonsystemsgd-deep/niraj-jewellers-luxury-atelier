"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  Check,
  Trash2,
  Sparkles,
  Upload,
  Plus,
  Eye,
  Smartphone,
  Monitor,
  AlertCircle,
  Gem,
} from "lucide-react";
import { updatePieceAction, createPieceAction, deletePieceAction, PiecePayload } from "@/app/admin/actions";

interface PieceFormProps {
  initialData?: PiecePayload;
  isNew?: boolean;
}

export function PieceForm({ initialData, isNew = false }: PieceFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop");
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showPreviewModal) {
        setShowPreviewModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showPreviewModal]);

  const [formData, setFormData] = useState<PiecePayload>(
    initialData || {
      id: `piece-${Date.now()}`,
      title: "",
      category: "bridal",
      metal_purity: "22ct Gold (916 Hallmarked)",
      hallmark_text: "UK London Assay Office 916",
      description: "",
      price_note: "Direct Workshop Consultation • Bespoke Suite",
      price_on_request: true,
      price_amount: null,
      media_type: "image",
      thumbnail_url: "/images/collections/09f3084c-9c0e-49e0-a1dd-3d4c512907b1.jpeg",
      video_url: "",
      gallery_images: [],
      stock_quantity: 1,
      stock_status: "available",
      is_featured: false,
      is_masterpiece_slider: false,
      is_ribbon_piece: false,
      is_published: true,
      specs: {
        weight: "",
        carat: "",
        metal: "22ct Imperial Gold",
        craftsmanship: "In-House Hayes Handcrafted",
      },
      tags: ["22ct Gold", "Hayes Workshop"],
    }
  );

  const [newTag, setNewTag] = useState("");
  const [newGalleryUrl, setNewGalleryUrl] = useState("");

  const handleChange = (
    field: keyof PiecePayload,
    value: string | number | boolean | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSpecChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      specs: { ...prev.specs, [key]: value },
    }));
  };

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tagToRemove),
    }));
  };

  const handleAddGalleryImage = () => {
    if (newGalleryUrl.trim()) {
      setFormData((prev) => ({
        ...prev,
        gallery_images: [...(prev.gallery_images || []), newGalleryUrl.trim()],
      }));
      setNewGalleryUrl("");
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      gallery_images: (prev.gallery_images || []).filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (publishLive: boolean) => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const payload: PiecePayload = {
        ...formData,
        is_published: publishLive,
      };

      if (isNew) {
        const res = await createPieceAction(payload);
        if (res.error) {
          setErrorMessage(res.error);
        } else {
          setSuccessMessage("Piece created successfully! Redirecting...");
          setTimeout(() => {
            router.push("/admin");
          }, 1200);
        }
      } else {
        const res = await updatePieceAction(payload);
        if (res.error) {
          setErrorMessage(res.error);
        } else {
          setSuccessMessage(
            publishLive
              ? "✓ Live on website! Updates published in seconds."
              : "✓ Draft revision saved privately."
          );
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to save piece.";
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (
      !confirm(
        `Are you sure you want to remove "${formData.title}" from the showroom? (It will be archived safely and can be restored anytime).`
      )
    ) {
      return;
    }

    setLoading(true);
    try {
      await deletePieceAction(formData.id);
      router.push("/admin");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to delete.";
      setErrorMessage(msg);
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full space-y-6">
      {/* 1. Header Navigation & Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="p-2.5 rounded-xl border border-[#E8DEC8] bg-white hover:bg-[#FAF8F5] text-[#141416] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="font-serif text-2xl font-bold text-[#141416]">
              {isNew ? "Add New Atelier Piece" : "Edit Piece Details"}
            </h1>
            <p className="text-xs text-[#5A5960]">
              {isNew
                ? "Create a new handcrafted showpiece for Niraj Jewellers Ltd."
                : `Editing: ${formData.title || "Untitled Piece"}`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowPreviewModal(true)}
            className="px-4 py-2.5 rounded-xl border border-[#E8DEC8] bg-white text-xs font-semibold text-[#141416] hover:border-[#996515] transition-colors flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-[#8C6212]" />
            <span>Live Preview</span>
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={() => handleSubmit(true)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#85560C] via-[#996515] to-[#85560C] text-white text-xs font-semibold tracking-wider uppercase shadow-sm hover:opacity-95 active:scale-95 transition-all flex items-center gap-1.5 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{loading ? "Publishing..." : "Publish Live"}</span>
          </button>
        </div>
      </div>

      {/* 2. Success & Error Banners */}
      {successMessage && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800 flex items-center gap-2.5 animate-fadeIn">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-medium text-red-800 flex items-center gap-2.5 animate-fadeIn">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* 3. Form Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* A. Core Info */}
          <div className="p-5 sm:p-6 bg-white border border-[#E8DEC8] rounded-2xl shadow-luxury-sm space-y-4">
            <h2 className="font-serif text-base font-bold text-[#141416] border-b border-[#E8DEC8]/60 pb-3 flex items-center gap-2">
              <Gem className="w-4 h-4 text-[#8C6212]" />
              <span>Piece Identification & Story</span>
            </h2>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
                Piece Title
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="e.g. The Nizam Ruby & Basra Pearl Polki Choker"
                className="w-full h-11 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-sm text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    handleChange("category", e.target.value as PiecePayload["category"])
                  }
                  className="w-full h-11 px-3.5 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs font-medium text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
                >
                  <option value="bridal">Bridal Suites</option>
                  <option value="22ct-gold">22ct Gold</option>
                  <option value="rings">Diamond Rings</option>
                  <option value="polki-heritage">Polki Heirlooms</option>
                  <option value="featured">Featured Masterpieces</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
                  Metal & Purity
                </label>
                <input
                  type="text"
                  value={formData.metal_purity}
                  onChange={(e) => handleChange("metal_purity", e.target.value)}
                  placeholder="e.g. 22ct Gold (916 Hallmarked)"
                  className="w-full h-11 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
                Official UK Hallmark
              </label>
              <input
                type="text"
                value={formData.hallmark_text}
                onChange={(e) => handleChange("hallmark_text", e.target.value)}
                placeholder="e.g. UK London Assay Office 916"
                className="w-full h-11 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
                Luxury Description
              </label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Describe the gemstone setting, filigree work, and goldsmith craftsmanship..."
                className="w-full p-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs leading-relaxed text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* B. Workshop Specs & Pricing */}
          <div className="p-5 sm:p-6 bg-white border border-[#E8DEC8] rounded-2xl shadow-luxury-sm space-y-4">
            <h2 className="font-serif text-base font-bold text-[#141416] border-b border-[#E8DEC8]/60 pb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8C6212]" />
              <span>Workshop Specifications & Pricing</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
                  Total Gold Weight
                </label>
                <input
                  type="text"
                  value={formData.specs.weight || ""}
                  onChange={(e) => handleSpecChange("weight", e.target.value)}
                  placeholder="e.g. 138.5 grams"
                  className="w-full h-11 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
                  Carat / Gemstone Details
                </label>
                <input
                  type="text"
                  value={formData.specs.carat || ""}
                  onChange={(e) => handleSpecChange("carat", e.target.value)}
                  placeholder="e.g. 18.40ct Uncut Polki Diamonds"
                  className="w-full h-11 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
                  Price Display Label
                </label>
                <input
                  type="text"
                  value={formData.price_note}
                  onChange={(e) => handleChange("price_note", e.target.value)}
                  placeholder="e.g. Direct Workshop Consultation or £4,250"
                  className="w-full h-11 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs font-semibold text-[#8C6212] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex items-center pt-6">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.price_on_request}
                    onChange={(e) => handleChange("price_on_request", e.target.checked)}
                    className="w-4 h-4 rounded text-[#996515] focus:ring-[#996515]"
                  />
                  <span className="text-xs font-medium text-[#4A4A52]">
                    Price on Request (Showroom Consultation)
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* C. Media & Photos Gallery */}
          <div className="p-5 sm:p-6 bg-white border border-[#E8DEC8] rounded-2xl shadow-luxury-sm space-y-4">
            <h2 className="font-serif text-base font-bold text-[#141416] border-b border-[#E8DEC8]/60 pb-3 flex items-center gap-2">
              <Upload className="w-4 h-4 text-[#8C6212]" />
              <span>Piece Photography & Video</span>
            </h2>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
                Primary Photo URL
              </label>
              <input
                type="text"
                value={formData.thumbnail_url}
                onChange={(e) => handleChange("thumbnail_url", e.target.value)}
                placeholder="/images/collections/... or https://..."
                className="w-full h-11 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
                Optional Looping Video URL (MP4 under 15MB)
              </label>
              <input
                type="text"
                value={formData.video_url || ""}
                onChange={(e) => handleChange("video_url", e.target.value)}
                placeholder="/images/collections/...mp4"
                className="w-full h-11 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
              />
            </div>

            {/* Gallery Images List */}
            <div className="pt-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-2">
                Additional Gallery Photos ({formData.gallery_images?.length || 0})
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={newGalleryUrl}
                  onChange={(e) => setNewGalleryUrl(e.target.value)}
                  placeholder="Paste additional photo URL..."
                  className="flex-1 h-10 px-3 rounded-lg border border-[#E8DEC8] bg-[#FAF8F5] text-xs"
                />
                <button
                  type="button"
                  onClick={handleAddGalleryImage}
                  className="px-3.5 h-10 rounded-lg bg-[#996515] text-white text-xs font-semibold"
                >
                  Add
                </button>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {formData.gallery_images?.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square rounded-lg border border-[#E8DEC8] overflow-hidden group bg-[#FAF8F5]"
                  >
                    <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover" />
                    <button
                      type="button"
                      onClick={() => handleRemoveGalleryImage(idx)}
                      className="absolute top-1 right-1 p-1 rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Controls, Status & Flags */}
        <div className="space-y-6">
          {/* Stock & Availability */}
          <div className="p-5 bg-white border border-[#E8DEC8] rounded-2xl shadow-luxury-sm space-y-4">
            <h3 className="font-serif text-sm font-bold text-[#141416] border-b border-[#E8DEC8]/60 pb-2">
              Showroom Inventory
            </h3>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
                Stock Status
              </label>
              <select
                value={formData.stock_status}
                onChange={(e) =>
                  handleChange(
                    "stock_status",
                    e.target.value as PiecePayload["stock_status"]
                  )
                }
                className="w-full h-11 px-3.5 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs font-semibold text-[#141416]"
              >
                <option value="available">✓ In Hayes Showroom (Available)</option>
                <option value="made-to-order">⏳ Made to Order (Bespoke)</option>
                <option value="sold">✕ Sold / In Archive</option>
                <option value="reserved">🔒 Reserved for Viewing</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
                Quantity in Vault
              </label>
              <input
                type="number"
                min="0"
                value={formData.stock_quantity}
                onChange={(e) => handleChange("stock_quantity", parseInt(e.target.value) || 0)}
                className="w-full h-11 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs font-semibold text-[#141416]"
              />
            </div>
          </div>

          {/* Homepage Feature Toggles */}
          <div className="p-5 bg-white border border-[#E8DEC8] rounded-2xl shadow-luxury-sm space-y-3">
            <h3 className="font-serif text-sm font-bold text-[#141416] border-b border-[#E8DEC8]/60 pb-2">
              Homepage Placement
            </h3>

            <label className="flex items-start gap-2.5 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={formData.is_masterpiece_slider}
                onChange={(e) => handleChange("is_masterpiece_slider", e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded text-[#996515] focus:ring-[#996515]"
              />
              <div>
                <span className="text-xs font-semibold text-[#141416] block">
                  Top 3 Masterpiece Slider
                </span>
                <span className="text-[10px] text-[#7A705E] block leading-tight">
                  Display with full looping video at the top of the homepage.
                </span>
              </div>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer pt-2">
              <input
                type="checkbox"
                checked={formData.is_ribbon_piece}
                onChange={(e) => handleChange("is_ribbon_piece", e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded text-[#996515] focus:ring-[#996515]"
              />
              <div>
                <span className="text-xs font-semibold text-[#141416] block">
                  Infinite Motion Ribbon (12 Pieces)
                </span>
                <span className="text-[10px] text-[#7A705E] block leading-tight">
                  Feature in continuous 60fps ribbon below hero slider.
                </span>
              </div>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer pt-2">
              <input
                type="checkbox"
                checked={formData.is_featured}
                onChange={(e) => handleChange("is_featured", e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded text-[#996515] focus:ring-[#996515]"
              />
              <div>
                <span className="text-xs font-semibold text-[#141416] block">
                  Flagship Collection Grid
                </span>
                <span className="text-[10px] text-[#7A705E] block leading-tight">
                  Showcase on main homepage collections grid.
                </span>
              </div>
            </label>
          </div>

          {/* Tags */}
          <div className="p-5 bg-white border border-[#E8DEC8] rounded-2xl shadow-luxury-sm space-y-3">
            <h3 className="font-serif text-sm font-bold text-[#141416] border-b border-[#E8DEC8]/60 pb-2">
              Search Tags
            </h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="New tag..."
                className="flex-1 h-9 px-3 rounded-lg border border-[#E8DEC8] bg-[#FAF8F5] text-xs"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-3 h-9 rounded-lg bg-[#996515] text-white text-xs font-medium"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E8DEC8] text-[10px] font-medium text-[#4A4A52]"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="text-[#7A705E] hover:text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Delete Danger Zone */}
          {!isNew && (
            <div className="p-5 bg-red-50/50 border border-red-200 rounded-2xl space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-red-800">
                Archive Piece
              </h3>
              <p className="text-[11px] text-red-700 leading-relaxed">
                Removes this piece from public view. The item is safely preserved in the database archive.
              </p>
              <button
                type="button"
                onClick={handleDelete}
                className="w-full py-2.5 rounded-xl border border-red-300 bg-white text-red-600 hover:bg-red-50 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Archive Piece</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 4. Live Preview Modal with Mobile / Desktop Toggle */}
      {showPreviewModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Live Visual Preview"
          onClick={() => setShowPreviewModal(false)}
        >
          <div
            className="bg-white rounded-2xl border border-[#E8DEC8] shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-[#E8DEC8] flex items-center justify-between bg-[#FAF8F5]">
              <div className="flex items-center gap-2">
                <span className="font-serif text-sm font-bold text-[#141416]">
                  Live Visual Preview
                </span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-gold-100 text-[#8C6212]">
                  Draft Preview
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Desktop preview mode"
                  onClick={() => setPreviewMode("desktop")}
                  className={`p-1.5 rounded-lg border ${previewMode === "desktop" ? "bg-[#996515] text-white border-[#996515]" : "bg-white text-[#7A705E] border-[#E8DEC8]"}`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Mobile preview mode"
                  onClick={() => setPreviewMode("mobile")}
                  className={`p-1.5 rounded-lg border ${previewMode === "mobile" ? "bg-[#996515] text-white border-[#996515]" : "bg-white text-[#7A705E] border-[#E8DEC8]"}`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Close modal"
                  onClick={() => setShowPreviewModal(false)}
                  className="text-xs text-[#7A705E] hover:text-black ml-2 font-bold px-2 py-1 rounded-md"
                >
                  ✕ Close
                </button>
              </div>
            </div>

            {/* Preview Body */}
            <div className="p-6 overflow-y-auto flex justify-center bg-[#FAF8F5]/50">
              <div
                className={`bg-white border border-[#E8DEC8] rounded-2xl overflow-hidden shadow-luxury-md transition-all ${
                  previewMode === "mobile" ? "w-[360px]" : "w-full"
                }`}
              >
                <div className="relative aspect-[4/3] bg-[#FAF8F5]">
                  <Image
                    src={formData.thumbnail_url}
                    alt={formData.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[10px] font-bold tracking-wider uppercase text-[#8C6212] border border-[#E8DEC8]">
                    {formData.category}
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-serif text-lg font-bold text-[#141416]">
                    {formData.title || "Untitled Masterpiece"}
                  </h3>
                  <p className="text-xs font-semibold text-[#8C6212]">
                    {formData.metal_purity} • {formData.hallmark_text}
                  </p>
                  <p className="text-xs text-[#5A5960] leading-relaxed">
                    {formData.description || "No description provided."}
                  </p>
                  <div className="pt-3 border-t border-[#E8DEC8] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#8C6212]">
                      {formData.price_note}
                    </span>
                    <span className="text-[11px] text-[#7A705E]">
                      Weight: {formData.specs.weight || "Workshop Weighed"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
