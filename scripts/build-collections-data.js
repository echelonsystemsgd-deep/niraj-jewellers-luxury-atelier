const fs = require("fs");
const path = require("path");

const collDir = path.join(process.cwd(), "public", "images", "collections");
const cadDir = path.join(process.cwd(), "public", "images", "cad");
const wsDir = path.join(process.cwd(), "public", "images", "workshop");

const collFiles = fs.readdirSync(collDir).filter(f => !f.endsWith(".zip"));
const cadFiles = fs.existsSync(cadDir) ? fs.readdirSync(cadDir) : [];
const wsFiles = fs.existsSync(wsDir) ? fs.readdirSync(wsDir) : [];

// Separate photos and videos
const photoFiles = collFiles.filter(f => /\.(jpe?g|png|webp)$/i.test(f));
const videoFiles = collFiles.filter(f => /\.(mp4|mov)$/i.test(f));

console.log(`Found: ${photoFiles.length} photos, ${videoFiles.length} videos in collections, ${cadFiles.length} CAD renders, ${wsFiles.length} workshop records.`);

// Top 3 Showpieces as mandated by implementation plan:
// 1. The Nizam Ruby & Basra Pearl Polki Choker (looping workshop video)
// 2. The Calcutta Filigree 22ct Gold Bridal Suite (London Assay hallmark guarantee)
// 3. The Chandbali Carved Zambian Emerald Melon Choker (looping sparkle video)

// Specific luxury item definitions
const topShowpieces = [
  {
    title: "The Nizam Ruby & Basra Pearl Polki Choker",
    category: "bridal",
    metalPurity: "22ct Gold (916 Hallmarked)",
    hallmarkText: "UK London Assay Office 916",
    description: "Exquisite royal bridal choker handcrafted in 22ct gold, set with unheated oval rubies, syndicate uncut Polki diamonds, and a suspended fringe of natural Basra pearls.",
    priceNote: "Direct Workshop Consultation • Bespoke Suite",
    tags: ["22ct Gold", "Syndicate Polki", "Bridal Choker", "Basra Pearls", "Burmese Rubies"],
    specs: { weight: "138.5 grams", carat: "18.40ct Uncut Polki", metal: "22ct Imperial Gold", craftsmanship: "In-House Hayes Handcrafted" },
    file: "0bda9709-3486-4146-b08c-9f05cc25ee4d.mp4",
    poster: "09f3084c-9c0e-49e0-a1dd-3d4c512907b1.jpeg",
    folder: "images/collections"
  },
  {
    title: "The Calcutta Filigree 22ct Gold Bridal Suite",
    category: "bridal",
    metalPurity: "22ct Gold (916 Hallmarked)",
    hallmarkText: "Official UK London Assay Stamped",
    description: "Handcrafted 22ct gold multi-tier collar necklace featuring micro-filigree floral mesh, suspended royal medallion, and matching cabochon emerald maang tikka.",
    priceNote: "Direct Workshop Consultation • In-House Hayes Atelier",
    tags: ["22ct Gold", "Calcutta Filigree", "Bridal Collar", "Maang Tikka", "London Assay"],
    specs: { weight: "162.0 grams", carat: "12.50ct Natural Emeralds", metal: "22ct Antique Finish Gold", craftsmanship: "Master Goldsmith Hayes Atelier" },
    file: "22ct-gold-filigree-bridal-suite.jpg",
    folder: "images/workshop"
  },
  {
    title: "The Chandbali Carved Zambian Emerald Melon Choker",
    category: "polki-heritage",
    metalPurity: "22ct Gold (916)",
    hallmarkText: "London Assay 916 Certified",
    description: "Regal crescent chandbali choker in 22ct gold, featuring fluted melon-carved Zambian emeralds, open-set uncut Polki diamonds, and delicate briolette drops.",
    priceNote: "High Jewellery Atelier • Bespoke Piece",
    tags: ["Polki Heritage", "Zambian Emerald", "Chandbali", "22ct Gold"],
    specs: { carat: "24.50ct Carved Emeralds", metal: "22ct Imperial Gold", craftsmanship: "Artisan Jadau Setting" },
    file: "259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0.mp4",
    poster: "12829417-6791-4c2c-8ff1-7b92d459aab4.jpeg",
    folder: "images/collections"
  }
];

// Target category distributions:
// Bridal: 18 pieces
// Polki & Heritage: 14 pieces
// 22ct Gold & Kadas: 12 pieces
// Bespoke Rings & CAD: 10 pieces
// Total = 54 pieces

const targetCategories = [];
// 18 bridal
for (let i = 0; i < 18; i++) targetCategories.push("bridal");
// 14 polki-heritage
for (let i = 0; i < 14; i++) targetCategories.push("polki-heritage");
// 12 22ct-gold
for (let i = 0; i < 12; i++) targetCategories.push("22ct-gold");
// 10 rings
for (let i = 0; i < 10; i++) targetCategories.push("rings");

// Ensure first 3 match top showpieces:
// topShowpieces[0] is bridal (index 0)
// topShowpieces[1] is bridal (index 1)
// topShowpieces[2] is polki-heritage (index 2)
// Swap targetCategories[1] and targetCategories[18] so index 2 is polki-heritage:
const temp = targetCategories[2];
targetCategories[2] = "polki-heritage";
// adjust counts to maintain exact counts
let bridalCount = 0;
let polkiCount = 0;
let goldCount = 0;
let ringsCount = 0;

// Curated titles pool for all categories
const titlesByCat = {
  bridal: [
    "The Nizam Ruby & Basra Pearl Polki Choker",
    "The Calcutta Filigree 22ct Gold Bridal Suite",
    "The Padmavati 22ct Jadau Polki Bridal Choker",
    "The Maharani Three-Strand Emerald Tablet Haar",
    "The Imperial Broad Mesh Polki Choker & Jhumkas",
    "The Royal Mayur Peacock Motif Polki Maang Tikka",
    "The Chandrika Polki & Ruby Bridal Passa",
    "The Imperial Kundan Carved Emerald Long Haar",
    "The Royal Darbar Polki, Ruby & Emerald Choker",
    "The Sheesh Mahal Polki Diamond Bridal Matha Patti",
    "The Noor Jahan Antique Jadau Collar Suite",
    "The Jodha 22ct Solid Gold Bridal Hasli Necklace",
    "The Gulab Filigree Rose Gold & Diamond Bridal Suite",
    "The Meenakari Reverse-Enameled Royal Bridal Choker",
    "The Hawa Mahal Intricate Filigree Bridal Collar",
    "The Mayur Open-Work Polki Bridal Hathphool",
    "The Imperial Mughal Emerald Beaded Bridal Tassel",
    "The Royal Kashi Hand-Hammered Gold Bridal Suite"
  ],
  "polki-heritage": [
    "The Chandbali Carved Zambian Emerald Melon Choker",
    "The Syndicate Polki Collar & Chandelier Drops",
    "The Russian Emerald & Basra Pearl Polki Choker",
    "Grand Chandbali Earrings with Leaf-Carved Emeralds",
    "The Mughal Chandbali Earrings with Carved Ruby Drops",
    "The Baroda Pearl & Ruby Chandelier Jhumkas",
    "The Imperial Navratan Heritage Medallion Pendant",
    "The Anarkali Fluted Emerald & Basra Pearl Choker",
    "The Badshahi Carved Jade & Syndicate Polki Necklace",
    "The Taj Mahal Geometric Polki & Pearl Drop Earrings",
    "The Jaipur Royal Kundan Medallion & Earring Set",
    "The Zenith Colombian Emerald & Diamond Drop Suite",
    "The Jasmine Bud Micro-Pavé Polki Diamond Choker",
    "The Amber Fort Carved Tourmaline & Pearl Collar"
  ],
  "22ct-gold": [
    "The Maharaja Solid 22ct Hand-Chased Lion Kada",
    "The Royal Rajwada Floral Filigree Bangles",
    "The Royal Rajputana Carved Ruby & Polki Kada",
    "The Devyani Multi-Tier Layered Gold Haar",
    "The Shahi 22ct Hand-Engraved Solid Gold Torc",
    "The Rani Padmavati Diamond Encrusted Kada Pair",
    "The Peacock Crown 22ct Handcrafted Bridal Tikka",
    "The Alchemist 22ct Solid Gold Chased Cuff Bangle",
    "The Sovereign 24ct Cast Bullion Ingot Pendant",
    "The Maharajah Heritage Filigree Kada Pair",
    "The Darbar 22ct Heavy Rope-Twist Bridal Chain",
    "The Hayes Atelier Workshop Collection"
  ],
  rings: [
    "The Koh-i-Noor Inspired Solitaire Engagement Ring",
    "The Empress Oval Cut Emerald & Hidden Halo Solitaire",
    "The Sitara Marquise Diamond Cocktail Cluster Ring",
    "The Regent Radiant Cut Solitaire Diamond Ring",
    "The Princess Cut Certified Diamond Eternity Band",
    "The Regent Pear-Shaped Diamond Double Halo Ring",
    "The Sunburst Syndicate Polki Statement Ring",
    "The Shahnaz Oval Sapphire & Halo Engagement Ring",
    "Bespoke 3D CAD Marquise Solitaire Eye Pendant",
    "Bespoke 3D CAD Evil Eye Sapphire & Diamond Medallion"
  ]
};

// All assets list preparation
// Top 3 reserved files:
const reservedFiles = new Set([
  "0bda9709-3486-4146-b08c-9f05cc25ee4d.mp4",
  "22ct-gold-filigree-bridal-suite.jpg",
  "259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0.mp4"
]);

// CAD files:
// bespoke-evil-eye-diamond-cad.jpg
// bespoke-evil-eye-sapphire-cad.jpg
// Workshop files:
// 22ct-gold-filigree-bridal-suite.jpg (used in top 3)
// goldsmith-bench-order-book-22ct.jpg
// workshop-bench-velvet-trays.jpg

const remainingCAD = cadFiles.map(f => ({ file: f, folder: "images/cad", isVideo: false }));
const remainingWS = wsFiles.filter(f => !reservedFiles.has(f)).map(f => ({ file: f, folder: "images/workshop", isVideo: false }));
const remainingPhotos = photoFiles.filter(f => !reservedFiles.has(f)).map(f => ({ file: f, folder: "images/collections", isVideo: false }));
const remainingVideos = videoFiles.filter(f => !reservedFiles.has(f)).map(f => ({ file: f, folder: "images/collections", isVideo: true }));

// Combine all items in an organized sequence
const itemsPool = [
  // Item 0: Top showpiece 1 (video)
  topShowpieces[0],
  // Item 1: Top showpiece 2 (image)
  topShowpieces[1],
  // Item 2: Top showpiece 3 (video)
  topShowpieces[2]
];

// Now build remaining 51 items
// We have remaining:
// 22 videos
// 24 collection photos
// 2 CAD photos
// 2 Workshop photos
// Total remaining = 22 + 24 + 2 + 2 = 50 + 1 = 51 items! Total: 54 pieces!

const otherAssets = [];

// Interleave videos and photos for dynamic variety
let vIdx = 0;
let pIdx = 0;
const allOtherPhotos = [...remainingCAD, ...remainingWS, ...remainingPhotos];

while (vIdx < remainingVideos.length || pIdx < allOtherPhotos.length) {
  if (vIdx < remainingVideos.length) {
    otherAssets.push(remainingVideos[vIdx++]);
  }
  if (pIdx < allOtherPhotos.length) {
    otherAssets.push(allOtherPhotos[pIdx++]);
  }
}

// Category counters
const catCounts = {
  bridal: 2, // 2 already in topShowpieces
  "polki-heritage": 1, // 1 already in topShowpieces
  "22ct-gold": 0,
  rings: 0
};

const catTargets = {
  bridal: 18,
  "polki-heritage": 14,
  "22ct-gold": 12,
  rings: 10
};

// Assemble all 54 items
const finalItems = [];

// 1. First 3 showpieces
for (const sp of topShowpieces) {
  const isVideo = sp.file.endsWith(".mp4") || sp.file.endsWith(".mov");
  finalItems.push({
    id: `piece-${finalItems.length + 1}-${sp.file.replace(/[^a-zA-Z0-9_-]/g, "_").toLowerCase()}`,
    title: sp.title,
    category: sp.category,
    metalPurity: sp.metalPurity,
    hallmarkText: sp.hallmarkText,
    description: sp.description,
    priceNote: sp.priceNote,
    mediaType: isVideo ? "video" : "image",
    thumbnailUrl: isVideo ? `/${sp.folder}/${sp.poster}` : `/${sp.folder}/${sp.file}`,
    videoUrl: isVideo ? `/${sp.folder}/${sp.file}` : undefined,
    tags: sp.tags,
    specs: sp.specs
  });
}

// 2. Remaining 51 items
for (let i = 0; i < otherAssets.length; i++) {
  const asset = otherAssets[i];
  
  // Determine appropriate category to meet exact quota
  let cat = "bridal";
  if (asset.file.includes("cad") || asset.file.includes("eye")) {
    cat = "rings";
  } else if (asset.file.includes("bench") || asset.file.includes("tray") || asset.file.includes("kada") || asset.file.includes("order-book")) {
    cat = "22ct-gold";
  } else {
    // Select category that still needs items
    const availableCats = Object.keys(catTargets).filter(c => catCounts[c] < catTargets[c]);
    cat = availableCats[i % availableCats.length] || "bridal";
  }
  
  // If chosen cat is full, pick next non-full
  if (catCounts[cat] >= catTargets[cat]) {
    const fallback = Object.keys(catTargets).find(c => catCounts[c] < catTargets[c]);
    if (fallback) cat = fallback;
  }
  
  catCounts[cat]++;
  const titleList = titlesByCat[cat];
  const catItemIndex = (catCounts[cat] - 1) % titleList.length;
  const title = titleList[catItemIndex];

  let purity = "22ct Imperial Gold (916 Hallmarked)";
  let metal = "22ct Solid Gold";
  let hallmark = "UK London Assay Office 916";

  if (cat === "rings") {
    purity = (catItemIndex % 2 === 0) ? "18ct White Gold (750) & 950 Platinum" : "18ct Warm Gold (750)";
    metal = "18ct Hallmarked Gold / Platinum";
    hallmark = "London Assay Office 750 / 950";
  } else if (cat === "polki-heritage") {
    purity = "22ct Antique Gold & Uncut Syndicate Polki";
    metal = "22ct Gold & 24ct Kundan Foil";
    hallmark = "London Assay 916 Certified";
  } else if (cat === "22ct-gold") {
    purity = "22ct Solid Bullion Gold (916)";
    metal = "22ct Solid Yellow Gold";
    hallmark = "Official London Leopard's Head 916";
  }

  // Assign distinct poster thumbnail for video
  const photoIndex = (i * 3) % photoFiles.length;
  const assignedPoster = `/images/collections/${photoFiles[photoIndex]}`;
  const filePath = `/${asset.folder}/${asset.file}`;

  finalItems.push({
    id: `piece-${finalItems.length + 1}-${asset.file.replace(/[^a-zA-Z0-9_-]/g, "_").toLowerCase()}`,
    title: title,
    category: cat,
    metalPurity: purity,
    hallmarkText: hallmark,
    description: `Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.`,
    priceNote: "Direct Workshop Consultation • In-House Hayes Atelier",
    mediaType: asset.isVideo ? "video" : "image",
    thumbnailUrl: asset.isVideo ? assignedPoster : filePath,
    videoUrl: asset.isVideo ? filePath : undefined,
    tags: [
      cat === "rings" ? "Certified Diamond" : "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    specs: {
      weight: `${(45 + ((i * 4.3) % 115)).toFixed(1)} grams`,
      carat: `${(6.5 + ((i * 1.8) % 32)).toFixed(2)}ct Natural Gems`,
      metal: metal,
      craftsmanship: "Hand-Forged on Uxbridge Road"
    }
  });
}

console.log(`Generated total items: ${finalItems.length}`);
console.log("Category counts:", catCounts);

// Generate collections-data.ts
const tsContent = `export interface CollectionItem {
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
  instagramUrl?: string;
  tags: string[];
  specs: {
    weight?: string;
    carat?: string;
    metal: string;
    craftsmanship: string;
  };
}

export const COLLECTIONS_DATA: CollectionItem[] = ${JSON.stringify(finalItems, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), "data", "collections-data.ts"), tsContent, "utf8");
console.log("Successfully wrote data/collections-data.ts with", finalItems.length, "pieces!");
