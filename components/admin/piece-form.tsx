"use client";

import { useState, useEffect, useMemo } from "react";
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
  CheckCircle2,
  Layers,
  Image as ImageIcon,
  Tag,
  ShieldCheck,
  X,
} from "lucide-react";
import {
  updatePieceAction,
  createPieceAction,
  deletePieceAction,
  PiecePayload,
} from "@/app/admin/actions";

interface PieceFormProps {
  initialData?: PiecePayload;
  isNew?: boolean;
}

// ------------------------------------------------------------------------------
// PRESET OPTIONS FOR THE ATELIER TEAM
// ------------------------------------------------------------------------------

const PRESET_CATEGORIES = [
  { value: "bridal", label: "Bridal Suites" },
  { value: "22ct-gold", label: "22ct Gold & Kadas" },
  { value: "rings", label: "Diamond Rings & CAD" },
  { value: "polki-heritage", label: "Polki & Antique Heirlooms" },
  { value: "bangles-kadas", label: "Bangles & Kadas" },
  { value: "mangalsutra", label: "Sacred Mangalsutras" },
  { value: "necklaces", label: "Necklaces & Chokers" },
  { value: "coins-bullion", label: "Gold Bullion & Coins" },
  { value: "featured", label: "Featured Masterpieces" },
  { value: "custom", label: "+ Custom Category (Type your own)..." },
];

const PRESET_METALS = [
  "22ct Gold (916 Hallmarked)",
  "22ct Antique Gold & Uncut Syndicate Polki",
  "18ct White Gold (750) & 950 Platinum",
  "24ct Pure Bullion Gold (999.9)",
  "18ct Yellow Gold (750)",
  "14ct White & Rose Gold (585)",
  "custom",
];

const PRESET_HALLMARKS = [
  "UK London Assay Office 916",
  "UK Birmingham Assay Office 916",
  "UK London Assay Office 750 (18ct)",
  "UK London Assay Office 999.9 (Pure 24ct)",
  "UK Sheffield Assay Office 916",
  "custom",
];

const PRESET_PRICE_NOTES = [
  "Direct Workshop Consultation • Bespoke Suite",
  "Workshop Weighed • Live Spot Bullion Rate",
  "Direct Workshop Consultation • In-House Hayes Atelier",
  "Price on Application • High Jewellery Suite",
  "custom",
];

const PRESET_CRAFTSMANSHIP = [
  "In-House Hayes Handcrafted",
  "Hand-Forged on Uxbridge Road",
  "Master Goldsmith Bespoke CAD & Hand-Setting",
  "Traditional Indian Kundan & Jadau Benchwork",
  "custom",
];

const QUICK_TAG_PRESETS = [
  "22ct Gold",
  "London Assay",
  "In-House Hayes",
  "Bespoke Atelier",
  "Uncut Polki",
  "Zambian Emeralds",
  "Basra Pearls",
  "Bridal Suite",
  "Handcrafted",
  "Bullion Bar",
];

// Curated high-res showroom vault photos atelier team can select in 1 click
const SHOWROOM_PHOTO_PRESETS = [
  {
    title: "Imperial Polki Choker Suite",
    url: "/images/collections/09f3084c-9c0e-49e0-a1dd-3d4c512907b1.jpeg",
    category: "Bridal Choker",
  },
  {
    title: "Calcutta Filigree 22ct Bridal",
    url: "/images/workshop/22ct-gold-filigree-bridal-suite.jpg",
    category: "22ct Gold Suite",
  },
  {
    title: "Royal Nizam Crimson Ruby & Polki",
    url: "/images/collections/86ae6de6-b6ee-4780-948b-ccf3f849f5cf.jpeg",
    category: "Ruby Polki",
  },
  {
    title: "Diamond Gala Collar & Pendant",
    url: "/images/collections/posters/0bda9709-3486-4146-b08c-9f05cc25ee4d.jpg",
    category: "Diamond Gala",
  },
  {
    title: "Sovereign Shared-Prong Eternity Band",
    url: "/images/collections/posters/259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0.jpg",
    category: "Eternity Band",
  },
  {
    title: "Pavé Solitaire Engagement Ring",
    url: "/images/collections/posters/482c070d-7614-41e2-8811-d76441020509.jpg",
    category: "Solitaire Ring",
  },
  {
    title: "Solid 22ct Lion Hand-Chased Kada",
    url: "/images/collections/posters/83d2a7f8-b3a0-48e0-a8dc-9171b12b55f1.jpg",
    category: "22ct Kada",
  },
  {
    title: "Riviera Lariat Diamond Gala Suite",
    url: "/images/collections/posters/550a6d34-c1f3-45b7-a527-2a4421c4920d.jpg",
    category: "Diamond Suite",
  },
];

export function PieceForm({ initialData, isNew = false }: PieceFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop");
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showPhotoPicker, setShowPhotoPicker] = useState(false);

  // Initialize form data: for new pieces, thumbnail_url is EMPTY by default (not someone else's choker)
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
      thumbnail_url: "",
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

  // Custom states for fields when user chooses "custom"
  const isPresetCategory = PRESET_CATEGORIES.some(
    (c) => c.value === formData.category && c.value !== "custom"
  );
  const [categoryMode, setCategoryMode] = useState<string>(
    isPresetCategory ? formData.category : "custom"
  );
  const [customCategoryInput, setCustomCategoryInput] = useState<string>(
    isPresetCategory ? "" : formData.category
  );

  const isPresetMetal = PRESET_METALS.includes(formData.metal_purity);
  const [metalMode, setMetalMode] = useState<string>(isPresetMetal ? formData.metal_purity : "custom");
  const [customMetalInput, setCustomMetalInput] = useState<string>(
    isPresetMetal ? "" : formData.metal_purity
  );

  const isPresetHallmark = PRESET_HALLMARKS.includes(formData.hallmark_text);
  const [hallmarkMode, setHallmarkMode] = useState<string>(
    isPresetHallmark ? formData.hallmark_text : "custom"
  );
  const [customHallmarkInput, setCustomHallmarkInput] = useState<string>(
    isPresetHallmark ? "" : formData.hallmark_text
  );

  const isPresetPriceNote = PRESET_PRICE_NOTES.includes(formData.price_note);
  const [priceNoteMode, setPriceNoteMode] = useState<string>(
    isPresetPriceNote ? formData.price_note : "custom"
  );
  const [customPriceNoteInput, setCustomPriceNoteInput] = useState<string>(
    isPresetPriceNote ? "" : formData.price_note
  );

  const isPresetCraft = PRESET_CRAFTSMANSHIP.includes(formData.specs.craftsmanship);
  const [craftMode, setCraftMode] = useState<string>(
    isPresetCraft ? formData.specs.craftsmanship : "custom"
  );
  const [customCraftInput, setCustomCraftInput] = useState<string>(
    isPresetCraft ? "" : formData.specs.craftsmanship
  );

  const [newTag, setNewTag] = useState("");
  const [newGalleryUrl, setNewGalleryUrl] = useState("");

  // Modal ESC listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showPreviewModal) {
        setShowPreviewModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showPreviewModal]);

  // Modal background body scroll lock (iOS & Android bulletproof)
  useEffect(() => {
    if (showPreviewModal) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [showPreviewModal]);

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

  // CATEGORY HANDLING
  const handleCategorySelect = (val: string) => {
    setCategoryMode(val);
    if (val === "custom") {
      setFormData((prev) => ({ ...prev, category: customCategoryInput.trim() || "bespoke" }));
    } else {
      setFormData((prev) => ({ ...prev, category: val }));
    }
  };

  const handleCustomCategoryType = (val: string) => {
    setCustomCategoryInput(val);
    setFormData((prev) => ({
      ...prev,
      category: val.trim() || "bespoke",
    }));
  };

  // METAL PURITY HANDLING
  const handleMetalSelect = (val: string) => {
    setMetalMode(val);
    if (val === "custom") {
      setFormData((prev) => ({ ...prev, metal_purity: customMetalInput || "" }));
    } else {
      setFormData((prev) => ({ ...prev, metal_purity: val }));
    }
  };

  const handleCustomMetalType = (val: string) => {
    setCustomMetalInput(val);
    setFormData((prev) => ({ ...prev, metal_purity: val }));
  };

  // HALLMARK HANDLING
  const handleHallmarkSelect = (val: string) => {
    setHallmarkMode(val);
    if (val === "custom") {
      setFormData((prev) => ({ ...prev, hallmark_text: customHallmarkInput || "" }));
    } else {
      setFormData((prev) => ({ ...prev, hallmark_text: val }));
    }
  };

  const handleCustomHallmarkType = (val: string) => {
    setCustomHallmarkInput(val);
    setFormData((prev) => ({ ...prev, hallmark_text: val }));
  };

  // PRICE NOTE HANDLING
  const handlePriceNoteSelect = (val: string) => {
    setPriceNoteMode(val);
    if (val === "custom") {
      setFormData((prev) => ({ ...prev, price_note: customPriceNoteInput || "" }));
    } else {
      setFormData((prev) => ({ ...prev, price_note: val }));
    }
  };

  const handleCustomPriceNoteType = (val: string) => {
    setCustomPriceNoteInput(val);
    setFormData((prev) => ({ ...prev, price_note: val }));
  };

  // CRAFTSMANSHIP HANDLING
  const handleCraftSelect = (val: string) => {
    setCraftMode(val);
    if (val === "custom") {
      handleSpecChange("craftsmanship", customCraftInput || "");
    } else {
      handleSpecChange("craftsmanship", val);
    }
  };

  const handleCustomCraftType = (val: string) => {
    setCustomCraftInput(val);
    handleSpecChange("craftsmanship", val);
  };

  // TAGS HANDLING
  const handleToggleTag = (tag: string) => {
    if (formData.tags.includes(tag)) {
      setFormData((prev) => ({
        ...prev,
        tags: prev.tags.filter((t) => t !== tag),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
    }
  };

  const handleAddCustomTag = () => {
    const trimmed = newTag.trim();
    if (trimmed && !formData.tags.includes(trimmed)) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, trimmed],
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

  // GALLERY IMAGES
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

  // FORM SUBMISSION
  const handleSubmit = async (publishLive: boolean) => {
    if (!formData.title.trim()) {
      setErrorMessage("Please enter a Title for this piece.");
      return;
    }

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
          setSuccessMessage("✓ Piece successfully forged & published to live website!");
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
              ? "✓ Live on website! Updates published in < 500ms."
              : "✓ Draft revision saved privately in database."
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

  // Category display label helper
  const displayCategoryLabel = useMemo(() => {
    const match = PRESET_CATEGORIES.find((c) => c.value === formData.category);
    if (match && match.value !== "custom") return match.label;
    if (!formData.category) return "Bespoke Jewellery";
    return formData.category
      .split(/[-_ ]+/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }, [formData.category]);

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
                ? "Forge a new handcrafted showpiece for Niraj Jewellers Ltd."
                : `Editing: ${formData.title || "Untitled Piece"}`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowPreviewModal(true)}
            className="px-4 py-2.5 rounded-xl border border-[#E8DEC8] bg-white text-xs font-semibold text-[#141416] hover:border-[#996515] transition-colors flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <Eye className="w-3.5 h-3.5 text-[#8C6212]" />
            <span>Live Visual Preview</span>
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

      {/* 2. Success & Error Notifications */}
      {successMessage && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center justify-between gap-2.5 shadow-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{successMessage}</span>
          </div>
          <Link
            href="/collections"
            target="_blank"
            className="text-[11px] font-bold text-emerald-700 underline hover:text-emerald-900"
          >
            View Live Storefront →
          </Link>
        </div>
      )}

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-800 flex items-center gap-2.5 shadow-sm">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* 3. Form Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* A. Core Info & Presets */}
          <div className="p-5 sm:p-6 bg-white border border-[#E8DEC8] rounded-2xl shadow-luxury-sm space-y-4">
            <h2 className="font-serif text-base font-bold text-[#141416] border-b border-[#E8DEC8]/60 pb-3 flex items-center gap-2">
              <Gem className="w-4 h-4 text-[#8C6212]" />
              <span>Piece Identification & Story</span>
            </h2>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
                Piece Title <span className="text-red-500">*</span>
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

            {/* Category: Presets + Custom Option */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52]">
                  Category (Preset or Custom)
                </label>
                <span className="text-[10px] text-[#8C6212] font-semibold">
                  Active: {displayCategoryLabel}
                </span>
              </div>

              <select
                value={categoryMode}
                onChange={(e) => handleCategorySelect(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs font-medium text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
              >
                {PRESET_CATEGORIES.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>

              {/* Reveal text input when custom is selected */}
              {categoryMode === "custom" && (
                <div className="p-3 bg-gold-50/50 border border-[#D4AF37] rounded-xl space-y-1.5 animate-fadeIn">
                  <label className="block text-[11px] font-bold text-[#8C6212] uppercase tracking-wide">
                    Type Your Custom Category:
                  </label>
                  <input
                    type="text"
                    value={customCategoryInput}
                    onChange={(e) => handleCustomCategoryType(e.target.value)}
                    placeholder="e.g. Temple Antique Jewellery, Hathphool, Mens Kada..."
                    className="w-full h-10 px-3.5 rounded-lg border border-[#E8DEC8] bg-white text-xs font-semibold text-[#141416] focus:border-[#996515] focus:outline-none"
                  />
                  <p className="text-[10px] text-[#7A705E]">
                    This custom category will automatically create its own tab on the public website.
                  </p>
                </div>
              )}
            </div>

            {/* Metal & Purity: Presets + Custom */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52]">
                Metal & Purity (Preset or Custom)
              </label>
              <select
                value={metalMode}
                onChange={(e) => handleMetalSelect(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs font-medium text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
              >
                {PRESET_METALS.map((m) => (
                  <option key={m} value={m}>
                    {m === "custom" ? "+ Custom Metal / Purity (Type below)..." : m}
                  </option>
                ))}
              </select>

              {metalMode === "custom" && (
                <input
                  type="text"
                  value={customMetalInput}
                  onChange={(e) => handleCustomMetalType(e.target.value)}
                  placeholder="e.g. 22ct Rose Gold (916) or 950 Platinum & 24ct Accent"
                  className="w-full h-10 px-3.5 rounded-lg border border-[#D4AF37] bg-white text-xs text-[#141416] focus:outline-none animate-fadeIn"
                />
              )}
            </div>

            {/* UK Hallmark: Presets + Custom */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52]">
                Official UK Hallmark (Preset or Custom)
              </label>
              <select
                value={hallmarkMode}
                onChange={(e) => handleHallmarkSelect(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs font-medium text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
              >
                {PRESET_HALLMARKS.map((h) => (
                  <option key={h} value={h}>
                    {h === "custom" ? "+ Custom Hallmark Office..." : h}
                  </option>
                ))}
              </select>

              {hallmarkMode === "custom" && (
                <input
                  type="text"
                  value={customHallmarkInput}
                  onChange={(e) => handleCustomHallmarkType(e.target.value)}
                  placeholder="e.g. UK Edinburgh Assay Office 916"
                  className="w-full h-10 px-3.5 rounded-lg border border-[#D4AF37] bg-white text-xs text-[#141416] focus:outline-none animate-fadeIn"
                />
              )}
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
                <div className="relative">
                  <input
                    type="text"
                    value={formData.specs.weight || ""}
                    onChange={(e) => handleSpecChange("weight", e.target.value)}
                    placeholder="e.g. 138.5 grams"
                    className="w-full h-11 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                    <button
                      type="button"
                      onClick={() =>
                        handleSpecChange("weight", `${formData.specs.weight || "0"} grams`.replace(" grams grams", " grams"))
                      }
                      className="text-[9px] px-1.5 py-0.5 rounded bg-[#FAF5E8] text-[#8C6212] font-semibold hover:bg-[#E8DEC8]"
                    >
                      g
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        handleSpecChange("weight", `${formData.specs.weight || "0"} tolas`.replace(" tolas tolas", " tolas"))
                      }
                      className="text-[9px] px-1.5 py-0.5 rounded bg-[#FAF5E8] text-[#8C6212] font-semibold hover:bg-[#E8DEC8]"
                    >
                      tola
                    </button>
                  </div>
                </div>
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

            {/* Craftsmanship Specs: Presets + Custom */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52]">
                Craftsmanship & Provenance
              </label>
              <select
                value={craftMode}
                onChange={(e) => handleCraftSelect(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs font-medium text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
              >
                {PRESET_CRAFTSMANSHIP.map((c) => (
                  <option key={c} value={c}>
                    {c === "custom" ? "+ Custom Craftsmanship Description..." : c}
                  </option>
                ))}
              </select>

              {craftMode === "custom" && (
                <input
                  type="text"
                  value={customCraftInput}
                  onChange={(e) => handleCustomCraftType(e.target.value)}
                  placeholder="e.g. Hand-chased floral repoussé on solid gold"
                  className="w-full h-10 px-3.5 rounded-lg border border-[#D4AF37] bg-white text-xs text-[#141416] focus:outline-none animate-fadeIn"
                />
              )}
            </div>

            {/* Pricing Note: Presets + Custom */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52]">
                Price Display Note (Preset or Custom)
              </label>
              <select
                value={priceNoteMode}
                onChange={(e) => handlePriceNoteSelect(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs font-medium text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
              >
                {PRESET_PRICE_NOTES.map((p) => (
                  <option key={p} value={p}>
                    {p === "custom" ? "+ Custom Price (e.g. Fixed £ amount or note)..." : p}
                  </option>
                ))}
              </select>

              {priceNoteMode === "custom" && (
                <input
                  type="text"
                  value={customPriceNoteInput}
                  onChange={(e) => handleCustomPriceNoteType(e.target.value)}
                  placeholder="e.g. £4,850 (Includes VAT & Assay Hallmarking)"
                  className="w-full h-10 px-3.5 rounded-lg border border-[#D4AF37] bg-white text-xs font-semibold text-[#8C6212] focus:outline-none animate-fadeIn"
                />
              )}

              <div className="flex items-center pt-2">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.price_on_request}
                    onChange={(e) => handleChange("price_on_request", e.target.checked)}
                    className="w-4 h-4 rounded text-[#996515] focus:ring-[#996515]"
                  />
                  <span className="text-xs font-medium text-[#4A4A52]">
                    Price on Request (Showroom Consultation / Live Bullion Valuation)
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* C. Primary Photography & Vault Presets */}
          <div className="p-5 sm:p-6 bg-white border border-[#E8DEC8] rounded-2xl shadow-luxury-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#E8DEC8]/60 pb-3">
              <h2 className="font-serif text-base font-bold text-[#141416] flex items-center gap-2">
                <Upload className="w-4 h-4 text-[#8C6212]" />
                <span>Piece Photography & Video</span>
              </h2>

              <button
                type="button"
                onClick={() => setShowPhotoPicker(!showPhotoPicker)}
                className="text-xs font-bold text-[#8C6212] bg-[#FAF5E8] hover:bg-[#E8DEC8] px-3 py-1.5 rounded-xl border border-[#D4AF37]/50 transition-colors flex items-center gap-1.5"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{showPhotoPicker ? "Hide Vault Presets" : "Select from Vault Photos (Presets)"}</span>
              </button>
            </div>

            {/* Quick Showroom Photo Picker Grid */}
            {showPhotoPicker && (
              <div className="p-4 bg-[#FAF8F5] border border-[#D4AF37]/60 rounded-xl space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C6212]">
                    Quick Preset Showroom Photos (Tap to Select)
                  </span>
                  <span className="text-[10px] text-[#7A705E]">
                    8 Pre-approved high-res jewelry shots
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {SHOWROOM_PHOTO_PRESETS.map((photo, pIdx) => (
                    <button
                      key={pIdx}
                      type="button"
                      onClick={() => {
                        handleChange("thumbnail_url", photo.url);
                        setShowPhotoPicker(false);
                      }}
                      className={`group text-left p-1.5 rounded-xl border transition-all ${
                        formData.thumbnail_url === photo.url
                          ? "border-[#996515] bg-white ring-2 ring-[#996515]/20 shadow-sm"
                          : "border-[#E8DEC8] bg-white hover:border-[#996515]"
                      }`}
                    >
                      <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-[#FAF8F5] mb-1.5">
                        <Image
                          src={photo.url}
                          alt={photo.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <span className="text-[10px] font-bold text-[#141416] block truncate">
                        {photo.title}
                      </span>
                      <span className="text-[9px] text-[#8C6212] block">
                        {photo.category}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
                Primary Photo URL (Or Upload Path)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.thumbnail_url}
                  onChange={(e) => handleChange("thumbnail_url", e.target.value)}
                  placeholder="/images/collections/... or https://..."
                  className="flex-1 h-11 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
                />
                {formData.thumbnail_url && (
                  <button
                    type="button"
                    onClick={() => handleChange("thumbnail_url", "")}
                    className="px-3 h-11 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold transition-colors"
                    title="Clear photo"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* In-Form Visual Image Status Box */}
            <div className="p-3 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5]">
              {formData.thumbnail_url ? (
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-[#D4AF37] bg-white shrink-0">
                    <Image
                      src={formData.thumbnail_url}
                      alt="Thumbnail preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      <span>Photo Loaded &amp; Verified</span>
                    </span>
                    <span className="text-[11px] text-[#5A5960] truncate block mt-0.5">
                      {formData.thumbnail_url}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3 text-[#8C6212]">
                  <div className="w-14 h-14 rounded-lg border border-dashed border-[#D4AF37] bg-white/80 flex items-center justify-center shrink-0">
                    <ImageIcon className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#8C6212] block">
                      No Photo Uploaded Yet
                    </span>
                    <span className="text-[11px] text-[#7A705E] block mt-0.5">
                      Live preview will display a luxury placeholder card until an image is provided.
                    </span>
                  </div>
                </div>
              )}
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

            {/* Additional Gallery Photos */}
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
                  className="px-4 h-10 rounded-lg bg-[#996515] text-white text-xs font-semibold hover:bg-[#85560C] transition-colors"
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

        {/* Right 1 Col: Controls, Status & Quick Tags */}
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

          {/* Quick Preset Tags + Custom Tags */}
          <div className="p-5 bg-white border border-[#E8DEC8] rounded-2xl shadow-luxury-sm space-y-3">
            <h3 className="font-serif text-sm font-bold text-[#141416] border-b border-[#E8DEC8]/60 pb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#8C6212]" />
                <span>Search Tags ({formData.tags.length})</span>
              </span>
            </h3>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6212] block mb-1.5">
                Quick Toggle Presets:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_TAG_PRESETS.map((t) => {
                  const isSelected = formData.tags.includes(t);
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => handleToggleTag(t)}
                      className={`text-[10px] font-semibold px-2 py-1 rounded-lg border transition-all ${
                        isSelected
                          ? "bg-[#996515] text-white border-[#996515] shadow-xs"
                          : "bg-[#FAF8F5] text-[#5A5960] border-[#E8DEC8] hover:border-[#996515]"
                      }`}
                    >
                      {isSelected ? `✓ ${t}` : `+ ${t}`}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 border-t border-[#E8DEC8]/60">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A4A52] block mb-1.5">
                Add Custom Tag:
              </span>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddCustomTag();
                    }
                  }}
                  placeholder="e.g. Kundan, Jadau, 24ct..."
                  className="flex-1 h-9 px-3 rounded-lg border border-[#E8DEC8] bg-[#FAF8F5] text-xs"
                />
                <button
                  type="button"
                  onClick={handleAddCustomTag}
                  className="px-3 h-9 rounded-lg bg-[#996515] text-white text-xs font-semibold hover:bg-[#85560C]"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Active Tags list */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E8DEC8] text-[10px] font-medium text-[#4A4A52]"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="text-[#7A705E] hover:text-red-500 font-bold ml-0.5"
                  >
                    ×
                  </button>
                </span>
              ))}
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

      {/* 4. Live Visual Preview Modal (Desktop & Mobile Modes) */}
      {showPreviewModal && (
        <div
          className="fixed inset-0 z-[80] bg-black/75 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Live Visual Preview"
          onClick={() => setShowPreviewModal(false)}
        >
          <div
            className="bg-white rounded-2xl border border-[#E8DEC8] shadow-2xl w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3.5 sm:p-4 border-b border-[#E8DEC8] flex items-center justify-between bg-[#FAF8F5]">
              <div className="flex items-center gap-2">
                <span className="font-serif text-sm font-bold text-[#141416]">
                  Live Visual Preview
                </span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-gold-100 text-[#8C6212]">
                  Draft Preview
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  aria-label="Desktop preview mode"
                  onClick={() => setPreviewMode("desktop")}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    previewMode === "desktop"
                      ? "bg-[#996515] text-white border-[#996515]"
                      : "bg-white text-[#7A705E] border-[#E8DEC8]"
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Mobile preview mode"
                  onClick={() => setPreviewMode("mobile")}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    previewMode === "mobile"
                      ? "bg-[#996515] text-white border-[#996515]"
                      : "bg-white text-[#7A705E] border-[#E8DEC8]"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Close modal"
                  onClick={() => setShowPreviewModal(false)}
                  className="text-xs text-[#7A705E] hover:text-black ml-1.5 font-bold px-2 py-1 rounded-md"
                >
                  ✕ Close
                </button>
              </div>
            </div>

            {/* Preview Body */}
            <div className="p-3 sm:p-6 overflow-y-auto flex justify-center bg-[#FAF8F5]/50 custom-scrollbar">
              <div
                className={`bg-white border border-[#E8DEC8] rounded-2xl overflow-hidden shadow-luxury-md transition-all ${
                  previewMode === "mobile" ? "max-w-[340px] w-full" : "w-full"
                }`}
              >
                {/* Media Area: If image exists, render image; IF NO IMAGE UPLOADED, RENDER ARTISAN LUXURY PLACEHOLDER */}
                {formData.thumbnail_url ? (
                  <div className="relative aspect-[4/3] bg-[#FAF8F5]">
                    <Image
                      src={formData.thumbnail_url}
                      alt={formData.title || "Jewellery piece"}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[10px] font-bold tracking-wider uppercase text-[#8C6212] border border-[#E8DEC8] shadow-sm">
                      {displayCategoryLabel}
                    </span>
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-[#1C1A17] via-[#2A2620] to-[#141416] flex flex-col items-center justify-center text-center p-6 border-b border-[#E8DEC8]/30">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-[#D4AF37]/50 flex items-center justify-center mb-3 text-[#D4AF37] shadow-inner">
                      <Gem className="w-7 h-7 text-[#D4AF37] animate-pulse" />
                    </div>
                    <span className="font-serif text-sm font-bold tracking-wider text-white uppercase block">
                      Atelier Photography Pending
                    </span>
                    <p className="text-[11px] text-[#DFBF7A] mt-1 max-w-xs leading-relaxed">
                      Upload or select a photo in the form above to preview customer display.
                    </p>
                    <span className="mt-3 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[10px] font-bold text-[#FAF8F5] uppercase tracking-wider">
                      {displayCategoryLabel}
                    </span>
                  </div>
                )}

                <div className="p-5 space-y-3">
                  <h3 className="font-serif text-lg font-bold text-[#141416]">
                    {formData.title || "Untitled Masterpiece"}
                  </h3>
                  <p className="text-xs font-semibold text-[#8C6212]">
                    {formData.metal_purity} • {formData.hallmark_text}
                  </p>
                  <p className="text-xs text-[#5A5960] leading-relaxed">
                    {formData.description || "No description provided yet."}
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
