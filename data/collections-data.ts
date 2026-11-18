export interface CollectionItem {
  id: string;
  title: string;
  category: "bridal" | "rings" | "22ct-gold" | "polki-heritage" | "featured";
  metalPurity: string;
  hallmarkText: string;
  description: string;
  priceNote: string;
  mediaType: "video" | "image";
  thumbnailUrl: string;
  videoUrl?: string;
  tags: string[];
  specs: {
    weight?: string;
    carat?: string;
    metal: string;
    craftsmanship: string;
  };
}

export const COLLECTIONS_DATA: CollectionItem[] = [
  {
    id: "royal-rajputana-polki-choker",
    title: "The Mayur Polki & Emerald Bridal Choker",
    category: "bridal",
    metalPurity: "22ct Gold (916 Hallmarked)",
    hallmarkText: "UK London Assay Office 916",
    description: "Handcrafted 22ct gold bridal choker set with uncut syndicate Polki diamonds, Zambian emerald drops, and intricate South Asian Meenakari reverse enamelling.",
    priceNote: "Direct Workshop Consultation • Bespoke Suite",
    mediaType: "video",
    thumbnailUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-wearing-a-gold-necklace-41584-large.mp4",
    tags: ["22ct Gold", "Syndicate Polki", "Bridal Suite", "Zambian Emerald"],
    specs: {
      weight: "142.5 grams",
      carat: "18.40ct Uncut Polki",
      metal: "22ct Imperial Gold",
      craftsmanship: "In-House Hayes Handcrafted",
    },
  },
  {
    id: "solitaire-cathedral-pavé-ring",
    title: "The Regent Oval Solitaire & Hidden Halo",
    category: "rings",
    metalPurity: "950 Platinum / 18ct White Gold",
    hallmarkText: "UK Assay 950 Platinum",
    description: "Flawless 2.50ct elongated oval brilliant cut diamond mounted on an architectural cathedral pavé shank with micro-prong diamond bridge.",
    priceNote: "IGI / GIA Certified • Wholesale Diamond Sourcing",
    mediaType: "image",
    thumbnailUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    tags: ["Solitaire", "GIA Certified", "Platinum", "Oval Diamond"],
    specs: {
      carat: "2.50ct Centre (F/VS1)",
      metal: "950 Solid Platinum",
      craftsmanship: "Precision Micro-Pavé 3D CAD",
    },
  },
  {
    id: "royal-heritage-22ct-kada",
    title: "The Maharaja Carved 22ct Lion Kada",
    category: "22ct-gold",
    metalPurity: "22ct Solid Gold (916)",
    hallmarkText: "916 London Assay Stamped",
    description: "Heavy traditional solid 22ct gold kada featuring hand-chased lion terminals with bezel-set cabochon rubies. Substantial heirloom weight.",
    priceNote: "Wholesale Bullion Spot + Craft Premium",
    mediaType: "video",
    thumbnailUrl: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-jeweler-cleaning-a-gold-ring-41618-large.mp4",
    tags: ["22ct Solid Gold", "Lion Head", "Kada", "Heirloom"],
    specs: {
      weight: "86.2 grams",
      metal: "Pure 22ct Bullion Gold",
      craftsmanship: "Hand-Chased Die Forged",
    },
  },
  {
    id: "rani-haar-layered-temple-necklace",
    title: "The Padmavati 22ct Layered Rani Haar",
    category: "bridal",
    metalPurity: "22ct Yellow Gold (916)",
    hallmarkText: "Official UK Hallmark Stamped",
    description: "Grand 5-layer 22ct gold ceremonial bridal haar adorned with hand-filigree medallions, south sea pearls, and antique matte gold finish.",
    priceNote: "Bespoke Bridal Commission",
    mediaType: "image",
    thumbnailUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
    tags: ["Rani Haar", "Temple Jewellery", "22ct Gold", "South Sea Pearls"],
    specs: {
      weight: "185.0 grams",
      metal: "22ct Antique Finish Gold",
      craftsmanship: "Master Goldsmith Hayes",
    },
  },
  {
    id: "emerald-cut-three-stone-trilogy",
    title: "The Kensington Emerald-Cut Trilogy",
    category: "rings",
    metalPurity: "18ct Yellow Gold & Platinum Claws",
    hallmarkText: "750 London Hallmarked",
    description: "A commanding 3.00ct emerald-cut natural diamond flanked by tapered baguette side stones in dual-tone platinum and 18ct warm gold.",
    priceNote: "Certified Natural / Lab-Grown Available",
    mediaType: "image",
    thumbnailUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    tags: ["Emerald Cut", "Trilogy Ring", "18ct Gold", "Platinum"],
    specs: {
      carat: "3.00ct Centre + 0.80ct Sides",
      metal: "Dual 18ct Gold & Platinum",
      craftsmanship: "Hand-set by Viky",
    },
  },
  {
    id: "mumbai-curb-chain-22ct",
    title: "Solid 22ct Miami & Mumbai Heavy Curb Chain",
    category: "22ct-gold",
    metalPurity: "22ct Gold (916)",
    hallmarkText: "London Assay 916 Stamped",
    description: "Ultra-dense diamond-cut bevelled 22ct gold curb links with heavy integrated safety box clasp. Direct bullion price transparency.",
    priceNote: "Live Bullion Weight Pricing",
    mediaType: "video",
    thumbnailUrl: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-jeweler-inspecting-a-gem-41617-large.mp4",
    tags: ["Curb Chain", "22ct Gold", "Heavy Gold", "Investment"],
    specs: {
      weight: "115.8 grams",
      metal: "22ct Investment Grade",
      craftsmanship: "Precision Diamond-Cut Links",
    },
  },
  {
    id: "heritage-kundan-mangalsutra",
    title: "Contemporary Minimalist 22ct Mangalsutra",
    category: "polki-heritage",
    metalPurity: "22ct Yellow Gold & 18ct Black Spinel",
    hallmarkText: "UK Assay Certified",
    description: "Modern South Asian bridal mangalsutra featuring a brilliant solitaire diamond suspended between hand-strung 22ct gold beads and auspicious black onyx.",
    priceNote: "Daily Luxury • Custom Lengths Available",
    mediaType: "image",
    thumbnailUrl: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200&auto=format&fit=crop",
    tags: ["Mangalsutra", "Modern Bridal", "22ct Gold", "Diamond"],
    specs: {
      carat: "0.85ct Solitaire",
      metal: "22ct Yellow Gold",
      craftsmanship: "Reinforced Platinum Wire Weave",
    },
  },
  {
    id: "bespoke-bridal-jhumkas",
    title: "The Chandbali Tiered 22ct Bridal Jhumkas",
    category: "polki-heritage",
    metalPurity: "22ct Gold (916)",
    hallmarkText: "916 Hallmarked",
    description: "Multi-tiered crescent Chandbali earrings with cascading seed pearl drops and bezel-set Burmese rubies. Lightweight interior hollow-core architecture.",
    priceNote: "Pair Commission • Lightweight Ergonomics",
    mediaType: "image",
    thumbnailUrl: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop",
    tags: ["Jhumkas", "Chandbali", "22ct Gold", "Bridal Earrings"],
    specs: {
      weight: "48.6 grams / pair",
      metal: "22ct Gold",
      craftsmanship: "Artisan Filigree",
    },
  },
];
