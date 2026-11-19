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
  instagramUrl?: string;
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
    "id": "piece-1-0bda9709-3486-4146-b08c-9f05cc25ee4d_mp4",
    "title": "The Nizam Ruby & Basra Pearl Polki Choker",
    "category": "bridal",
    "metalPurity": "22ct Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Exquisite royal bridal choker handcrafted in 22ct gold, set with unheated oval rubies, syndicate uncut Polki diamonds, and a suspended fringe of natural Basra pearls.",
    "priceNote": "Direct Workshop Consultation • Bespoke Suite",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/09f3084c-9c0e-49e0-a1dd-3d4c512907b1.jpeg",
    "videoUrl": "/images/collections/0bda9709-3486-4146-b08c-9f05cc25ee4d.mp4",
    "tags": [
      "22ct Gold",
      "Syndicate Polki",
      "Bridal Choker",
      "Basra Pearls",
      "Burmese Rubies"
    ],
    "specs": {
      "weight": "138.5 grams",
      "carat": "18.40ct Uncut Polki",
      "metal": "22ct Imperial Gold",
      "craftsmanship": "In-House Hayes Handcrafted"
    }
  },
  {
    "id": "piece-2-22ct-gold-filigree-bridal-suite_jpg",
    "title": "The Calcutta Filigree 22ct Gold Bridal Suite",
    "category": "bridal",
    "metalPurity": "22ct Gold (916 Hallmarked)",
    "hallmarkText": "Official UK London Assay Stamped",
    "description": "Handcrafted 22ct gold multi-tier collar necklace featuring micro-filigree floral mesh, suspended royal medallion, and matching cabochon emerald maang tikka.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/workshop/22ct-gold-filigree-bridal-suite.jpg",
    "tags": [
      "22ct Gold",
      "Calcutta Filigree",
      "Bridal Collar",
      "Maang Tikka",
      "London Assay"
    ],
    "specs": {
      "weight": "162.0 grams",
      "carat": "12.50ct Natural Emeralds",
      "metal": "22ct Antique Finish Gold",
      "craftsmanship": "Master Goldsmith Hayes Atelier"
    }
  },
  {
    "id": "piece-3-259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0_mp4",
    "title": "The Chandbali Carved Zambian Emerald Melon Choker",
    "category": "polki-heritage",
    "metalPurity": "22ct Gold (916)",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Regal crescent chandbali choker in 22ct gold, featuring fluted melon-carved Zambian emeralds, open-set uncut Polki diamonds, and delicate briolette drops.",
    "priceNote": "High Jewellery Atelier • Bespoke Piece",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/12829417-6791-4c2c-8ff1-7b92d459aab4.jpeg",
    "videoUrl": "/images/collections/259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0.mp4",
    "tags": [
      "Polki Heritage",
      "Zambian Emerald",
      "Chandbali",
      "22ct Gold"
    ],
    "specs": {
      "carat": "24.50ct Carved Emeralds",
      "metal": "22ct Imperial Gold",
      "craftsmanship": "Artisan Jadau Setting"
    }
  },
  {
    "id": "piece-4-39b5ba11-da50-4ab0-bc84-3d952b8b2a8d_mp4",
    "title": "The Padmavati 22ct Jadau Polki Bridal Choker",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/09f3084c-9c0e-49e0-a1dd-3d4c512907b1.jpeg",
    "videoUrl": "/images/collections/39b5ba11-da50-4ab0-bc84-3d952b8b2a8d.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "45.0 grams",
      "carat": "6.50ct Natural Gems",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-5-bespoke-evil-eye-diamond-cad_jpg",
    "title": "The Koh-i-Noor Inspired Solitaire Engagement Ring",
    "category": "rings",
    "metalPurity": "18ct White Gold (750) & 950 Platinum",
    "hallmarkText": "London Assay Office 750 / 950",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/cad/bespoke-evil-eye-diamond-cad.jpg",
    "tags": [
      "Certified Diamond",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "49.3 grams",
      "carat": "8.30ct Natural Gems",
      "metal": "18ct Hallmarked Gold / Platinum",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-6-482c070d-7614-41e2-8811-d76441020509_mov",
    "title": "The Maharaja Solid 22ct Hand-Chased Lion Kada",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Bullion Gold (916)",
    "hallmarkText": "Official London Leopard's Head 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/22ct-jadau-polki-bridal-choker.jpg",
    "videoUrl": "/images/collections/482c070d-7614-41e2-8811-d76441020509.mov",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "53.6 grams",
      "carat": "10.10ct Natural Gems",
      "metal": "22ct Solid Yellow Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-7-bespoke-evil-eye-sapphire-cad_jpg",
    "title": "The Empress Oval Cut Emerald & Hidden Halo Solitaire",
    "category": "rings",
    "metalPurity": "18ct Warm Gold (750)",
    "hallmarkText": "London Assay Office 750 / 950",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/cad/bespoke-evil-eye-sapphire-cad.jpg",
    "tags": [
      "Certified Diamond",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "57.9 grams",
      "carat": "11.90ct Natural Gems",
      "metal": "18ct Hallmarked Gold / Platinum",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-8-49013294-5782-4d47-97e4-c0f91f0afd9d_mp4",
    "title": "The Maharani Three-Strand Emerald Tablet Haar",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/7b225dd5-6728-41fe-b993-ac228fe3782f.jpeg",
    "videoUrl": "/images/collections/49013294-5782-4d47-97e4-c0f91f0afd9d.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "62.2 grams",
      "carat": "13.70ct Natural Gems",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-9-goldsmith-bench-order-book-22ct_jpg",
    "title": "The Royal Rajwada Floral Filigree Bangles",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Bullion Gold (916)",
    "hallmarkText": "Official London Leopard's Head 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/workshop/goldsmith-bench-order-book-22ct.jpg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "66.5 grams",
      "carat": "15.50ct Natural Gems",
      "metal": "22ct Solid Yellow Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-10-550a6d34-c1f3-45b7-a527-2a4421c4920d_mp4",
    "title": "The Royal Rajputana Carved Ruby & Polki Kada",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Bullion Gold (916)",
    "hallmarkText": "Official London Leopard's Head 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/c1093de2-6cd6-4023-be9f-a46cd4a0fbce.jpeg",
    "videoUrl": "/images/collections/550a6d34-c1f3-45b7-a527-2a4421c4920d.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "70.8 grams",
      "carat": "17.30ct Natural Gems",
      "metal": "22ct Solid Yellow Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-11-workshop-bench-velvet-trays_jpg",
    "title": "The Devyani Multi-Tier Layered Gold Haar",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Bullion Gold (916)",
    "hallmarkText": "Official London Leopard's Head 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/workshop/workshop-bench-velvet-trays.jpg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "75.1 grams",
      "carat": "19.10ct Natural Gems",
      "metal": "22ct Solid Yellow Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-12-585f854b-a2a7-4608-83e8-29eded6d04f6_mov",
    "title": "The Imperial Broad Mesh Polki Choker & Jhumkas",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/fd9d0bc5-26ce-4998-92bf-50957ffc2210.jpeg",
    "videoUrl": "/images/collections/585f854b-a2a7-4608-83e8-29eded6d04f6.mov",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "79.4 grams",
      "carat": "20.90ct Natural Gems",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-13-09f3084c-9c0e-49e0-a1dd-3d4c512907b1_jpeg",
    "title": "The Syndicate Polki Collar & Chandelier Drops",
    "category": "polki-heritage",
    "metalPurity": "22ct Antique Gold & Uncut Syndicate Polki",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/09f3084c-9c0e-49e0-a1dd-3d4c512907b1.jpeg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "83.7 grams",
      "carat": "22.70ct Natural Gems",
      "metal": "22ct Gold & 24ct Kundan Foil",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-14-58ba2f9b-c4f6-4f3d-b060-dacd9a43f88b_mp4",
    "title": "The Shahi 22ct Hand-Engraved Solid Gold Torc",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Bullion Gold (916)",
    "hallmarkText": "Official London Leopard's Head 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_2.jpeg",
    "videoUrl": "/images/collections/58ba2f9b-c4f6-4f3d-b060-dacd9a43f88b.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "88.0 grams",
      "carat": "24.50ct Natural Gems",
      "metal": "22ct Solid Yellow Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-15-12829417-6791-4c2c-8ff1-7b92d459aab4_jpeg",
    "title": "The Sitara Marquise Diamond Cocktail Cluster Ring",
    "category": "rings",
    "metalPurity": "18ct White Gold (750) & 950 Platinum",
    "hallmarkText": "London Assay Office 750 / 950",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/12829417-6791-4c2c-8ff1-7b92d459aab4.jpeg",
    "tags": [
      "Certified Diamond",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "92.3 grams",
      "carat": "26.30ct Natural Gems",
      "metal": "18ct Hallmarked Gold / Platinum",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-16-6bee2c14-fbe5-43f5-a95f-330e06bb9f89_mp4",
    "title": "The Royal Mayur Peacock Motif Polki Maang Tikka",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/6993a897-24d0-4f1f-b8a8-06b2c0001dcb.jpeg",
    "videoUrl": "/images/collections/6bee2c14-fbe5-43f5-a95f-330e06bb9f89.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "96.6 grams",
      "carat": "28.10ct Natural Gems",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-17-12829417-6791-4c2c-8ff1-7b92d459aab4_1_jpeg",
    "title": "The Russian Emerald & Basra Pearl Polki Choker",
    "category": "polki-heritage",
    "metalPurity": "22ct Antique Gold & Uncut Syndicate Polki",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/12829417-6791-4c2c-8ff1-7b92d459aab4_1.jpeg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "100.9 grams",
      "carat": "29.90ct Natural Gems",
      "metal": "22ct Gold & 24ct Kundan Foil",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-18-6cda1721-6533-465f-8580-4c317e922745-var_mp4",
    "title": "The Rani Padmavati Diamond Encrusted Kada Pair",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Bullion Gold (916)",
    "hallmarkText": "Official London Leopard's Head 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/9e9afd6e-1890-4467-9c3c-99fbdb640e4b.jpeg",
    "videoUrl": "/images/collections/6cda1721-6533-465f-8580-4c317e922745-var.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "105.2 grams",
      "carat": "31.70ct Natural Gems",
      "metal": "22ct Solid Yellow Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-19-1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_jpeg",
    "title": "The Regent Radiant Cut Solitaire Diamond Ring",
    "category": "rings",
    "metalPurity": "18ct Warm Gold (750)",
    "hallmarkText": "London Assay Office 750 / 950",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb.jpeg",
    "tags": [
      "Certified Diamond",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "109.5 grams",
      "carat": "33.50ct Natural Gems",
      "metal": "18ct Hallmarked Gold / Platinum",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-20-7242ee24-7935-4e43-b60b-1d260db663da_mp4",
    "title": "The Chandrika Polki & Ruby Bridal Passa",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/fc4f5f26-d64e-490e-87dc-23058ec58235_1.jpeg",
    "videoUrl": "/images/collections/7242ee24-7935-4e43-b60b-1d260db663da.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "113.8 grams",
      "carat": "35.30ct Natural Gems",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-21-1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_1_jpeg",
    "title": "Grand Chandbali Earrings with Leaf-Carved Emeralds",
    "category": "polki-heritage",
    "metalPurity": "22ct Antique Gold & Uncut Syndicate Polki",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_1.jpeg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "118.1 grams",
      "carat": "37.10ct Natural Gems",
      "metal": "22ct Gold & 24ct Kundan Foil",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-22-82bd6ab1-219d-4fc1-894b-77030e289dbf_mp4",
    "title": "The Peacock Crown 22ct Handcrafted Bridal Tikka",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Bullion Gold (916)",
    "hallmarkText": "Official London Leopard's Head 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_1.jpeg",
    "videoUrl": "/images/collections/82bd6ab1-219d-4fc1-894b-77030e289dbf.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "122.4 grams",
      "carat": "6.90ct Natural Gems",
      "metal": "22ct Solid Yellow Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-23-1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_2_jpeg",
    "title": "The Princess Cut Certified Diamond Eternity Band",
    "category": "rings",
    "metalPurity": "18ct White Gold (750) & 950 Platinum",
    "hallmarkText": "London Assay Office 750 / 950",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_2.jpeg",
    "tags": [
      "Certified Diamond",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "126.7 grams",
      "carat": "8.70ct Natural Gems",
      "metal": "18ct Hallmarked Gold / Platinum",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-24-86e9bedc-c2df-4ad8-81f5-a2f038596d60_mp4",
    "title": "The Imperial Kundan Carved Emerald Long Haar",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/64043268-7e68-48e4-8b74-f58fbd5ff884.jpeg",
    "videoUrl": "/images/collections/86e9bedc-c2df-4ad8-81f5-a2f038596d60.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "131.0 grams",
      "carat": "10.50ct Natural Gems",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-25-22ct-jadau-polki-bridal-choker_jpg",
    "title": "The Mughal Chandbali Earrings with Carved Ruby Drops",
    "category": "polki-heritage",
    "metalPurity": "22ct Antique Gold & Uncut Syndicate Polki",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/22ct-jadau-polki-bridal-choker.jpg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "135.3 grams",
      "carat": "12.30ct Natural Gems",
      "metal": "22ct Gold & 24ct Kundan Foil",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-26-8748e8f9-eb1c-44d1-ade8-df33908158ad_mp4",
    "title": "The Alchemist 22ct Solid Gold Chased Cuff Bangle",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Bullion Gold (916)",
    "hallmarkText": "Official London Leopard's Head 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/926a7777-65a9-4968-a10c-804f36dc283a.jpeg",
    "videoUrl": "/images/collections/8748e8f9-eb1c-44d1-ade8-df33908158ad.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "139.6 grams",
      "carat": "14.10ct Natural Gems",
      "metal": "22ct Solid Yellow Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-27-380254d7-cebb-49d0-bf24-5b3fa2b2611f_jpeg",
    "title": "The Regent Pear-Shaped Diamond Double Halo Ring",
    "category": "rings",
    "metalPurity": "18ct Warm Gold (750)",
    "hallmarkText": "London Assay Office 750 / 950",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/380254d7-cebb-49d0-bf24-5b3fa2b2611f.jpeg",
    "tags": [
      "Certified Diamond",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "143.9 grams",
      "carat": "15.90ct Natural Gems",
      "metal": "18ct Hallmarked Gold / Platinum",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-28-9134d8c9-f46e-4a55-a951-9b46f5fb82ef_mov",
    "title": "The Royal Darbar Polki, Ruby & Emerald Choker",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/fc4f5f26-d64e-490e-87dc-23058ec58235.jpeg",
    "videoUrl": "/images/collections/9134d8c9-f46e-4a55-a951-9b46f5fb82ef.mov",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "148.2 grams",
      "carat": "17.70ct Natural Gems",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-29-53301b27-9ad6-4e9c-a621-ab6b9e795fca_jpeg",
    "title": "The Baroda Pearl & Ruby Chandelier Jhumkas",
    "category": "polki-heritage",
    "metalPurity": "22ct Antique Gold & Uncut Syndicate Polki",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/53301b27-9ad6-4e9c-a621-ab6b9e795fca.jpeg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "152.5 grams",
      "carat": "19.50ct Natural Gems",
      "metal": "22ct Gold & 24ct Kundan Foil",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-30-933947d1-ad53-4490-8431-206520dc747f_mp4",
    "title": "The Sovereign 24ct Cast Bullion Ingot Pendant",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Bullion Gold (916)",
    "hallmarkText": "Official London Leopard's Head 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb.jpeg",
    "videoUrl": "/images/collections/933947d1-ad53-4490-8431-206520dc747f.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "156.8 grams",
      "carat": "21.30ct Natural Gems",
      "metal": "22ct Solid Yellow Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-31-5ce947fd-b64d-4004-afc4-8ffe1a7847b8_jpeg",
    "title": "The Sunburst Syndicate Polki Statement Ring",
    "category": "rings",
    "metalPurity": "18ct White Gold (750) & 950 Platinum",
    "hallmarkText": "London Assay Office 750 / 950",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/5ce947fd-b64d-4004-afc4-8ffe1a7847b8.jpeg",
    "tags": [
      "Certified Diamond",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "46.1 grams",
      "carat": "23.10ct Natural Gems",
      "metal": "18ct Hallmarked Gold / Platinum",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-32-9bf16584-ce9d-43a3-ac0a-5acb4af1d50b_mp4",
    "title": "The Sheesh Mahal Polki Diamond Bridal Matha Patti",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/5ce947fd-b64d-4004-afc4-8ffe1a7847b8.jpeg",
    "videoUrl": "/images/collections/9bf16584-ce9d-43a3-ac0a-5acb4af1d50b.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "50.4 grams",
      "carat": "24.90ct Natural Gems",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-33-64043268-7e68-48e4-8b74-f58fbd5ff884_jpeg",
    "title": "The Imperial Navratan Heritage Medallion Pendant",
    "category": "polki-heritage",
    "metalPurity": "22ct Antique Gold & Uncut Syndicate Polki",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/64043268-7e68-48e4-8b74-f58fbd5ff884.jpeg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "54.7 grams",
      "carat": "26.70ct Natural Gems",
      "metal": "22ct Gold & 24ct Kundan Foil",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-34-a320449b-e662-4674-8ff1-7b3c58efe48f_mp4",
    "title": "The Maharajah Heritage Filigree Kada Pair",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Bullion Gold (916)",
    "hallmarkText": "Official London Leopard's Head 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/8cca104b-0936-4db2-82d0-92750aa40c0d.jpeg",
    "videoUrl": "/images/collections/a320449b-e662-4674-8ff1-7b3c58efe48f.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "59.0 grams",
      "carat": "28.50ct Natural Gems",
      "metal": "22ct Solid Yellow Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-35-6993a897-24d0-4f1f-b8a8-06b2c0001dcb_jpeg",
    "title": "The Shahnaz Oval Sapphire & Halo Engagement Ring",
    "category": "rings",
    "metalPurity": "18ct Warm Gold (750)",
    "hallmarkText": "London Assay Office 750 / 950",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/6993a897-24d0-4f1f-b8a8-06b2c0001dcb.jpeg",
    "tags": [
      "Certified Diamond",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "63.3 grams",
      "carat": "30.30ct Natural Gems",
      "metal": "18ct Hallmarked Gold / Platinum",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-36-c893d288-706d-43a2-bf7d-a67f0fb840c0_mp4",
    "title": "The Noor Jahan Antique Jadau Collar Suite",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/f7a0e00d-b6e5-4e91-aeba-0d0db54e173c_1.jpeg",
    "videoUrl": "/images/collections/c893d288-706d-43a2-bf7d-a67f0fb840c0.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "67.6 grams",
      "carat": "32.10ct Natural Gems",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-37-7b225dd5-6728-41fe-b993-ac228fe3782f_jpeg",
    "title": "The Anarkali Fluted Emerald & Basra Pearl Choker",
    "category": "polki-heritage",
    "metalPurity": "22ct Antique Gold & Uncut Syndicate Polki",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/7b225dd5-6728-41fe-b993-ac228fe3782f.jpeg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "71.9 grams",
      "carat": "33.90ct Natural Gems",
      "metal": "22ct Gold & 24ct Kundan Foil",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-38-d1b0cd96-fce0-4ef2-a3a6-20ecc8784006_mov",
    "title": "The Darbar 22ct Heavy Rope-Twist Bridal Chain",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Bullion Gold (916)",
    "hallmarkText": "Official London Leopard's Head 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/12829417-6791-4c2c-8ff1-7b92d459aab4_1.jpeg",
    "videoUrl": "/images/collections/d1b0cd96-fce0-4ef2-a3a6-20ecc8784006.mov",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "76.2 grams",
      "carat": "35.70ct Natural Gems",
      "metal": "22ct Solid Yellow Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-39-7b225dd5-6728-41fe-b993-ac228fe3782f_1_jpeg",
    "title": "Bespoke 3D CAD Marquise Solitaire Eye Pendant",
    "category": "rings",
    "metalPurity": "18ct White Gold (750) & 950 Platinum",
    "hallmarkText": "London Assay Office 750 / 950",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/7b225dd5-6728-41fe-b993-ac228fe3782f_1.jpeg",
    "tags": [
      "Certified Diamond",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "80.5 grams",
      "carat": "37.50ct Natural Gems",
      "metal": "18ct Hallmarked Gold / Platinum",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-40-ddae91d6-81ca-4a58-8eff-963f065d738f_mp4",
    "title": "The Jodha 22ct Solid Gold Bridal Hasli Necklace",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/53301b27-9ad6-4e9c-a621-ab6b9e795fca.jpeg",
    "videoUrl": "/images/collections/ddae91d6-81ca-4a58-8eff-963f065d738f.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "84.8 grams",
      "carat": "7.30ct Natural Gems",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-41-86ae6de6-b6ee-4780-948b-ccf3f849f5cf_jpeg",
    "title": "The Badshahi Carved Jade & Syndicate Polki Necklace",
    "category": "polki-heritage",
    "metalPurity": "22ct Antique Gold & Uncut Syndicate Polki",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/86ae6de6-b6ee-4780-948b-ccf3f849f5cf.jpeg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "89.1 grams",
      "carat": "9.10ct Natural Gems",
      "metal": "22ct Gold & 24ct Kundan Foil",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-42-e04a48c3-2c58-4692-bf79-43609f73bf1d_mp4",
    "title": "The Hayes Atelier Workshop Collection",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Bullion Gold (916)",
    "hallmarkText": "Official London Leopard's Head 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/86ae6de6-b6ee-4780-948b-ccf3f849f5cf.jpeg",
    "videoUrl": "/images/collections/e04a48c3-2c58-4692-bf79-43609f73bf1d.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "93.4 grams",
      "carat": "10.90ct Natural Gems",
      "metal": "22ct Solid Yellow Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-43-8cca104b-0936-4db2-82d0-92750aa40c0d_jpeg",
    "title": "The Gulab Filigree Rose Gold & Diamond Bridal Suite",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/8cca104b-0936-4db2-82d0-92750aa40c0d.jpeg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "97.7 grams",
      "carat": "12.70ct Natural Gems",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-44-e7ea0977-ac81-4aaf-b7b7-ad43406042a8_mov",
    "title": "The Taj Mahal Geometric Polki & Pearl Drop Earrings",
    "category": "polki-heritage",
    "metalPurity": "22ct Antique Gold & Uncut Syndicate Polki",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/f7a0e00d-b6e5-4e91-aeba-0d0db54e173c.jpeg",
    "videoUrl": "/images/collections/e7ea0977-ac81-4aaf-b7b7-ad43406042a8.mov",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "102.0 grams",
      "carat": "14.50ct Natural Gems",
      "metal": "22ct Gold & 24ct Kundan Foil",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-45-926a7777-65a9-4968-a10c-804f36dc283a_jpeg",
    "title": "Bespoke 3D CAD Evil Eye Sapphire & Diamond Medallion",
    "category": "rings",
    "metalPurity": "18ct Warm Gold (750)",
    "hallmarkText": "London Assay Office 750 / 950",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/926a7777-65a9-4968-a10c-804f36dc283a.jpeg",
    "tags": [
      "Certified Diamond",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "106.3 grams",
      "carat": "16.30ct Natural Gems",
      "metal": "18ct Hallmarked Gold / Platinum",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-46-f06dfa2e-9675-4e79-b953-e4e61bb1b393_mp4",
    "title": "The Meenakari Reverse-Enameled Royal Bridal Choker",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/12829417-6791-4c2c-8ff1-7b92d459aab4.jpeg",
    "videoUrl": "/images/collections/f06dfa2e-9675-4e79-b953-e4e61bb1b393.mp4",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "110.6 grams",
      "carat": "18.10ct Natural Gems",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-47-9e9afd6e-1890-4467-9c3c-99fbdb640e4b_jpeg",
    "title": "The Jaipur Royal Kundan Medallion & Earring Set",
    "category": "polki-heritage",
    "metalPurity": "22ct Antique Gold & Uncut Syndicate Polki",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/9e9afd6e-1890-4467-9c3c-99fbdb640e4b.jpeg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "114.9 grams",
      "carat": "19.90ct Natural Gems",
      "metal": "22ct Gold & 24ct Kundan Foil",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-48-c1093de2-6cd6-4023-be9f-a46cd4a0fbce_jpeg",
    "title": "The Hawa Mahal Intricate Filigree Bridal Collar",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/c1093de2-6cd6-4023-be9f-a46cd4a0fbce.jpeg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "119.2 grams",
      "carat": "21.70ct Natural Gems",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-49-e9b36b5b-4e22-4c94-b80d-6c530381fc7f_jpeg",
    "title": "The Zenith Colombian Emerald & Diamond Drop Suite",
    "category": "polki-heritage",
    "metalPurity": "22ct Antique Gold & Uncut Syndicate Polki",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/e9b36b5b-4e22-4c94-b80d-6c530381fc7f.jpeg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "123.5 grams",
      "carat": "23.50ct Natural Gems",
      "metal": "22ct Gold & 24ct Kundan Foil",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-50-f7a0e00d-b6e5-4e91-aeba-0d0db54e173c_jpeg",
    "title": "The Mayur Open-Work Polki Bridal Hathphool",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/f7a0e00d-b6e5-4e91-aeba-0d0db54e173c.jpeg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "127.8 grams",
      "carat": "25.30ct Natural Gems",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-51-f7a0e00d-b6e5-4e91-aeba-0d0db54e173c_1_jpeg",
    "title": "The Jasmine Bud Micro-Pavé Polki Diamond Choker",
    "category": "polki-heritage",
    "metalPurity": "22ct Antique Gold & Uncut Syndicate Polki",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/f7a0e00d-b6e5-4e91-aeba-0d0db54e173c_1.jpeg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "132.1 grams",
      "carat": "27.10ct Natural Gems",
      "metal": "22ct Gold & 24ct Kundan Foil",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-52-fc4f5f26-d64e-490e-87dc-23058ec58235_jpeg",
    "title": "The Imperial Mughal Emerald Beaded Bridal Tassel",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/fc4f5f26-d64e-490e-87dc-23058ec58235.jpeg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "136.4 grams",
      "carat": "28.90ct Natural Gems",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-53-fc4f5f26-d64e-490e-87dc-23058ec58235_1_jpeg",
    "title": "The Amber Fort Carved Tourmaline & Pearl Collar",
    "category": "polki-heritage",
    "metalPurity": "22ct Antique Gold & Uncut Syndicate Polki",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/fc4f5f26-d64e-490e-87dc-23058ec58235_1.jpeg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "140.7 grams",
      "carat": "30.70ct Natural Gems",
      "metal": "22ct Gold & 24ct Kundan Foil",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-54-fd9d0bc5-26ce-4998-92bf-50957ffc2210_jpeg",
    "title": "The Royal Kashi Hand-Hammered Gold Bridal Suite",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/fd9d0bc5-26ce-4998-92bf-50957ffc2210.jpeg",
    "tags": [
      "22ct Gold",
      "London Assay",
      "In-House Hayes",
      "Bespoke Atelier"
    ],
    "specs": {
      "weight": "145.0 grams",
      "carat": "32.50ct Natural Gems",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  }
];
