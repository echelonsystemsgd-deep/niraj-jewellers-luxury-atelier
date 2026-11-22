// Niraj Jewellers Ltd: Official 54-Piece Atelier Collection Data
// 100% Truthful Asset Matching: Every item visually audited and verified.
// Photographs are mediaType: 'image' (no mismatched videos).
// Videos are mediaType: 'video' (with matching extracted poster frames).

export interface CollectionItem {
  id: string;
  title: string;
  category: "bridal" | "rings" | "22ct-gold" | "polki-heritage" | "featured" | string;
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
    "id": "piece-1-broad-mesh-polki-choker",
    "title": "The Imperial Broad Mesh Polki Choker & Jhumkas",
    "category": "bridal",
    "metalPurity": "22ct Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Exquisite 22ct yellow gold Kundan Polki lattice bridal choker necklace with cascading natural pearl fringe and matching bell jhumka earrings handcrafted on Hayes benches.",
    "priceNote": "Direct Workshop Consultation • Bespoke Bridal Suite",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/09f3084c-9c0e-49e0-a1dd-3d4c512907b1.jpeg",
    "tags": [
      "22ct Gold",
      "Syndicate Polki",
      "Bridal Choker",
      "Basra Pearls",
      "Matching Jhumkas"
    ],
    "specs": {
      "weight": "138.5 grams",
      "carat": "18.40ct Uncut Polki",
      "metal": "22ct Imperial Gold",
      "craftsmanship": "In-House Hayes Handcrafted"
    }
  },
  {
    "id": "piece-2-calcutta-filigree-bridal-suite",
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
    "id": "piece-3-crescent-ruby-polki-choker",
    "title": "The Royal Nizam Crimson Ruby & Syndicate Polki Choker",
    "category": "polki-heritage",
    "metalPurity": "22ct Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay 916 Certified",
    "description": "Regal 22ct gold bridal choker handcrafted with rich crimson ruby floral clusters, Syndicate uncut Polki diamonds in pure 24ct Kundan setting, and a suspended fringe of natural Basra pearls.",
    "priceNote": "High Jewellery Atelier • Bespoke Piece",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/86ae6de6-b6ee-4780-948b-ccf3f849f5cf.jpeg",
    "tags": [
      "Polki Heritage",
      "Crimson Rubies",
      "Syndicate Polki",
      "Basra Pearls",
      "22ct Gold"
    ],
    "specs": {
      "weight": "125.0 grams",
      "carat": "18.20ct Syndicate Polki & Natural Rubies",
      "metal": "22ct Imperial Gold",
      "craftsmanship": "Artisan Jadau Setting"
    }
  },
  {
    "id": "piece-4-chevron-v-collar-diamond-necklace",
    "title": "The Chevron V-Collar Diamond Gala Necklace",
    "category": "bridal",
    "metalPurity": "18ct White & Rose Gold (750)",
    "hallmarkText": "London Assay 750 Stamped",
    "description": "Multi-row graduated V-shaped natural diamond collar necklace with a signature chevron front drop, hand-set in 18ct gold.",
    "priceNote": "Atelier Haute Joaillerie • Direct Workshop Consultation",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/0bda9709-3486-4146-b08c-9f05cc25ee4d.jpg",
    "videoUrl": "/images/collections/0bda9709-3486-4146-b08c-9f05cc25ee4d.mp4",
    "tags": [
      "Diamond Collar",
      "V-Necklace",
      "18ct Gold",
      "Gala Suite"
    ],
    "specs": {
      "weight": "48.5 grams",
      "carat": "12.80ct Natural Diamonds",
      "metal": "18ct Gold",
      "craftsmanship": "Pavé & Claw Master Setting"
    }
  },
  {
    "id": "piece-5-sovereign-shared-prong-eternity-band",
    "title": "The Sovereign Shared-Prong Diamond Eternity Band",
    "category": "rings",
    "metalPurity": "950 Solid Platinum",
    "hallmarkText": "UK 950 Platinum Stamped",
    "description": "Continuous circle of shared-prong round brilliant natural diamonds set in solid 950 platinum with maximum light dispersion.",
    "priceNote": "Made to Order • Exact Finger Size",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0.jpg",
    "videoUrl": "/images/collections/259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0.mp4",
    "tags": [
      "Eternity Band",
      "Platinum",
      "Certified Diamonds",
      "Wedding Ring"
    ],
    "specs": {
      "weight": "24.6 grams",
      "carat": "2.40ct F/G VS Diamonds",
      "metal": "950 Platinum",
      "craftsmanship": "Shared-Prong Eternity Setting"
    }
  },
  {
    "id": "piece-6-crown-milgrain-beaded-diamond-band",
    "title": "The Crown Milgrain Beaded Diamond Band",
    "category": "22ct-gold",
    "metalPurity": "18ct Warm Yellow Gold (750)",
    "hallmarkText": "London Assay 750 Stamped",
    "description": "Handcrafted 18ct yellow gold band featuring dual beaded milgrain borders framing a central channel of micro-pavé diamonds.",
    "priceNote": "In-House Workshop Handcraft",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/39b5ba11-da50-4ab0-bc84-3d952b8b2a8d.jpg",
    "videoUrl": "/images/collections/39b5ba11-da50-4ab0-bc84-3d952b8b2a8d.mp4",
    "tags": [
      "18ct Gold",
      "Milgrain",
      "Pavé Band",
      "Diamond Ring"
    ],
    "specs": {
      "weight": "8.2 grams",
      "carat": "0.85ct Round Diamonds",
      "metal": "18ct Yellow Gold",
      "craftsmanship": "Milgrain Beaded Bench Finish"
    }
  },
  {
    "id": "piece-7-high-gallery-pave-solitaire-ring",
    "title": "The Koh-i-Noor Inspired Solitaire Engagement Ring",
    "category": "rings",
    "metalPurity": "18ct White Gold (750) & 950 Platinum",
    "hallmarkText": "London Assay Leopard's Head 750 / 950",
    "description": "Brilliant-cut solitaire diamond engagement ring elevated in a handcrafted high-gallery crown setting with micro-claw diamond shoulders and solid platinum prongs.",
    "priceNote": "Bespoke Engagement Ring • Custom Diamond Sizing",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/482c070d-7614-41e2-8811-d76441020509.jpg",
    "videoUrl": "/images/collections/482c070d-7614-41e2-8811-d76441020509.mov",
    "tags": [
      "Solitaire",
      "Koh-i-Noor",
      "Engagement Ring",
      "Platinum",
      "18ct White Gold",
      "Rings"
    ],
    "specs": {
      "weight": "8.4 grams solid mount",
      "carat": "2.05ct Certified Solitaire + 0.45ct Pavé",
      "metal": "18ct White Gold (750) & 950 Platinum",
      "craftsmanship": "Hand-Forged High Gallery Micro-Claw Setting"
    }
  },
  {
    "id": "piece-8-classic-18ct-gold-solitaire-ring",
    "title": "The Classic 18ct Gold Solitaire Engagement Ring",
    "category": "bridal",
    "metalPurity": "18ct Solid Yellow Gold (750)",
    "hallmarkText": "London Assay 750 Stamped",
    "description": "Timeless brilliant round solitaire diamond secured in a refined 4-prong setting on a smooth mirror-polished yellow gold knife-edge band.",
    "priceNote": "Hayes Workshop Direct Pricing",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/49013294-5782-4d47-97e4-c0f91f0afd9d.jpg",
    "videoUrl": "/images/collections/49013294-5782-4d47-97e4-c0f91f0afd9d.mp4",
    "tags": [
      "18ct Yellow Gold",
      "Solitaire",
      "Engagement Ring",
      "Classic"
    ],
    "specs": {
      "carat": "1.25ct Solitaire Diamond",
      "metal": "18ct Yellow Gold",
      "craftsmanship": "Hand-Turned Comfort Shank"
    }
  },
  {
    "id": "piece-9-riviera-lariat-diamond-suite",
    "title": "The Riviera Lariat Diamond Suite & Earrings",
    "category": "bridal",
    "metalPurity": "18ct White Gold & Platinum",
    "hallmarkText": "UK Assay Certified 750",
    "description": "Grand red-carpet bridal suite comprising a graduated natural diamond V-lariat drop necklace paired with matching brilliant diamond drop earrings.",
    "priceNote": "Bridal Commission • In-House Hayes Atelier",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/550a6d34-c1f3-45b7-a527-2a4421c4920d.jpg",
    "videoUrl": "/images/collections/550a6d34-c1f3-45b7-a527-2a4421c4920d.mp4",
    "tags": [
      "Diamond Suite",
      "Lariat Necklace",
      "Drop Earrings",
      "Haute Joaillerie"
    ],
    "specs": {
      "weight": "56.0 grams",
      "carat": "16.50ct Natural Diamonds",
      "metal": "18ct White Gold",
      "craftsmanship": "Artisan Bench Assembly"
    }
  },
  {
    "id": "piece-10-radiant-cut-solitaire-ring",
    "title": "The Radiant Cut Solitaire with Pavé Shoulders",
    "category": "bridal",
    "metalPurity": "950 Platinum",
    "hallmarkText": "London Assay 950 Stamped",
    "description": "Radiant-cut solitaire diamond ring featuring four corner claw prongs and sparkling micro-pavé natural diamonds along the shank.",
    "priceNote": "Bespoke Diamond Mount • Certified Stone",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/585f854b-a2a7-4608-83e8-29eded6d04f6.jpg",
    "videoUrl": "/images/collections/585f854b-a2a7-4608-83e8-29eded6d04f6.mov",
    "tags": [
      "Radiant Cut",
      "Platinum",
      "Pavé Shoulders",
      "Engagement Ring"
    ],
    "specs": {
      "carat": "2.05ct Radiant Diamond + 0.50ct Pavé",
      "metal": "950 Platinum",
      "craftsmanship": "Precision Bench Micro-Pavé"
    }
  },
  {
    "id": "piece-11-two-tone-solitaire-diamond-ring",
    "title": "The Two-Tone Solitaire Diamond Engagement Ring",
    "category": "rings",
    "metalPurity": "18ct Yellow Gold Band & Platinum Collet",
    "hallmarkText": "London Assay Multi-Metal 750 / 950",
    "description": "Sophisticated two-tone design with an 18ct yellow gold pavé-accented band supporting a pure platinum four-prong solitaire setting.",
    "priceNote": "Bespoke Workshop Commission",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/58ba2f9b-c4f6-4f3d-b060-dacd9a43f88b.jpg",
    "videoUrl": "/images/collections/58ba2f9b-c4f6-4f3d-b060-dacd9a43f88b.mp4",
    "tags": [
      "Two-Tone",
      "18ct Gold",
      "Platinum Collet",
      "Pavé Band"
    ],
    "specs": {
      "carat": "1.35ct Solitaire + 0.35ct Pavé",
      "metal": "18ct Gold & Platinum",
      "craftsmanship": "Dual-Metal Fusion Benchwork"
    }
  },
  {
    "id": "piece-12-hayes-lion-crest-aquamarine-pendant",
    "title": "The Hayes Lion Crest Aquamarine Pendant",
    "category": "polki-heritage",
    "metalPurity": "22ct Solid Gold (916)",
    "hallmarkText": "London Leopard's Head 916 Stamped",
    "description": "Sculpted solid 22ct yellow gold lion head pendant clutching a round faceted sky-blue gemstone in its jaws, suspended on a fine gold link chain.",
    "priceNote": "Direct Workshop Craft • London Assay Hallmarked",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/6bee2c14-fbe5-43f5-a95f-330e06bb9f89.jpg",
    "videoUrl": "/images/collections/6bee2c14-fbe5-43f5-a95f-330e06bb9f89.mp4",
    "tags": [
      "22ct Gold",
      "Lion Pendant",
      "Aquamarine",
      "Hand-Sculpted"
    ],
    "specs": {
      "weight": "18.5 grams",
      "carat": "3.20ct Natural Aquamarine",
      "metal": "22ct Yellow Gold",
      "craftsmanship": "Hand-Chased Lion Architecture"
    }
  },
  {
    "id": "piece-13-cathedral-oval-diamond-solitaire-ring",
    "title": "The Cathedral Oval Diamond Solitaire Ring",
    "category": "22ct-gold",
    "metalPurity": "18ct Yellow Gold Shank & Platinum Head",
    "hallmarkText": "UK London Assay Certified",
    "description": "Elongated oval-cut certified natural diamond elevated gracefully on high cathedral shoulders in 18ct solid yellow gold.",
    "priceNote": "Bespoke Engagement Ring",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/6cda1721-6533-465f-8580-4c317e922745-var.jpg",
    "videoUrl": "/images/collections/6cda1721-6533-465f-8580-4c317e922745-var.mp4",
    "tags": [
      "Oval Cut",
      "Cathedral Mount",
      "18ct Gold",
      "Solitaire"
    ],
    "specs": {
      "carat": "1.75ct Certified Oval Diamond",
      "metal": "18ct Yellow Gold & Platinum",
      "craftsmanship": "Hand-Turned Cathedral Mount"
    }
  },
  {
    "id": "piece-14-hidden-halo-round-brilliant-ring",
    "title": "The Hidden Halo Round Brilliant Engagement Ring",
    "category": "rings",
    "metalPurity": "950 Platinum",
    "hallmarkText": "950 Platinum London Stamped",
    "description": "Round brilliant solitaire diamond with an undercover hidden halo basket and sparkling French-cut pavé diamonds running halfway down the band.",
    "priceNote": "Bespoke Workshop Setting",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/7242ee24-7935-4e43-b60b-1d260db663da.jpg",
    "videoUrl": "/images/collections/7242ee24-7935-4e43-b60b-1d260db663da.mp4",
    "tags": [
      "Hidden Halo",
      "Platinum",
      "French Pavé",
      "Solitaire"
    ],
    "specs": {
      "carat": "1.60ct Center Diamond + 0.40ct Halo",
      "metal": "950 Platinum",
      "craftsmanship": "Micro-Pavé Hidden Gallery"
    }
  },
  {
    "id": "piece-15-pear-solitaire-crossover-pave-ring",
    "title": "The Pear Solitaire Crossover Pavé Statement Ring",
    "category": "polki-heritage",
    "metalPurity": "18ct Yellow Gold (750)",
    "hallmarkText": "London Assay 750 Certified",
    "description": "Striking pear-shaped diamond solitaire mounted between flowing crossover split-shank shoulders pavé-set with brilliant round diamonds.",
    "priceNote": "High Jewellery Cocktail Commission",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/82bd6ab1-219d-4fc1-894b-77030e289dbf.jpg",
    "videoUrl": "/images/collections/82bd6ab1-219d-4fc1-894b-77030e289dbf.mp4",
    "tags": [
      "Pear Cut",
      "Crossover Band",
      "Split Shank",
      "18ct Gold"
    ],
    "specs": {
      "carat": "1.40ct Pear Diamond + 0.60ct Pavé",
      "metal": "18ct Yellow Gold",
      "craftsmanship": "Fluid Crossover Architecture"
    }
  },
  {
    "id": "piece-16-sovereign-6-prong-solitaire-ring",
    "title": "The Sovereign 6-Prong Round Solitaire Ring",
    "category": "22ct-gold",
    "metalPurity": "18ct Solid Yellow Gold (750)",
    "hallmarkText": "UK 750 Gold Stamped",
    "description": "Iconic six-prong crown collet holding a round brilliant natural diamond on a solid polished yellow gold rounded shank.",
    "priceNote": "Direct Workshop Craft",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/86e9bedc-c2df-4ad8-81f5-a2f038596d60.jpg",
    "videoUrl": "/images/collections/86e9bedc-c2df-4ad8-81f5-a2f038596d60.mp4",
    "tags": [
      "6-Prong",
      "Round Solitaire",
      "18ct Gold",
      "Classic"
    ],
    "specs": {
      "carat": "1.50ct Round Brilliant Solitaire",
      "metal": "18ct Yellow Gold",
      "craftsmanship": "Classic 6-Prong Coronet"
    }
  },
  {
    "id": "piece-17-classic-gold-diamond-eternity-band",
    "title": "The Classic Yellow Gold Diamond Eternity Band",
    "category": "22ct-gold",
    "metalPurity": "18ct Solid Yellow Gold (750)",
    "hallmarkText": "London Assay 750 Stamped",
    "description": "Full circle eternity band of matched round brilliant natural diamonds hand-set into low-profile 18ct yellow gold shared prongs.",
    "priceNote": "Made to Order • London Hallmarked",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/8748e8f9-eb1c-44d1-ade8-df33908158ad.jpg",
    "videoUrl": "/images/collections/8748e8f9-eb1c-44d1-ade8-df33908158ad.mp4",
    "tags": [
      "Eternity Band",
      "18ct Gold",
      "Shared Prong",
      "Wedding Band"
    ],
    "specs": {
      "carat": "2.10ct Natural Round Diamonds",
      "metal": "18ct Yellow Gold",
      "craftsmanship": "Seamless 360° Stone Setting"
    }
  },
  {
    "id": "piece-18-cushion-cut-solitaire-atelier-ring",
    "title": "The Cushion Cut Solitaire Diamond Atelier Ring",
    "category": "rings",
    "metalPurity": "950 Platinum",
    "hallmarkText": "London Assay 950 Certified",
    "description": "Handcrafted cushion-cut diamond solitaire ring featuring side pavé gallery detailing and four claw prongs in solid platinum.",
    "priceNote": "Bespoke Workshop Setting",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/9134d8c9-f46e-4a55-a951-9b46f5fb82ef.jpg",
    "videoUrl": "/images/collections/9134d8c9-f46e-4a55-a951-9b46f5fb82ef.mov",
    "tags": [
      "Cushion Cut",
      "Platinum",
      "Solitaire",
      "Engagement Ring"
    ],
    "specs": {
      "carat": "1.80ct Cushion Cut Diamond",
      "metal": "950 Platinum",
      "craftsmanship": "Handmade Bench Collet"
    }
  },
  {
    "id": "piece-19-twisted-infinity-pave-diamond-ring",
    "title": "The Twisted Infinity Pavé Diamond Engagement Ring",
    "category": "rings",
    "metalPurity": "950 Platinum",
    "hallmarkText": "950 Platinum Hallmarked",
    "description": "Curving infinity crossover ribbons of pavé-set diamonds entwining toward a central brilliant solitaire diamond collet.",
    "priceNote": "Custom Commission",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/933947d1-ad53-4490-8431-206520dc747f.jpg",
    "videoUrl": "/images/collections/933947d1-ad53-4490-8431-206520dc747f.mp4",
    "tags": [
      "Infinity Band",
      "Twisted Ring",
      "Platinum",
      "Pavé"
    ],
    "specs": {
      "carat": "1.20ct Solitaire + 0.42ct Pavé",
      "metal": "950 Platinum",
      "craftsmanship": "Intertwined Ribbon Casting"
    }
  },
  {
    "id": "piece-20-traditional-bombay-screw-back-studs",
    "title": "Traditional 22ct Gold Bombay Screw-Back Studs",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Gold (916)",
    "hallmarkText": "London Leopard's Head 916 Stamped",
    "description": "Authentic 22ct gold granulated cluster stud earrings featuring traditional Indian domed Bombay screw-back posts for security and comfort.",
    "priceNote": "Direct Workshop Craft",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/9bf16584-ce9d-43a3-ac0a-5acb4af1d50b.jpg",
    "videoUrl": "/images/collections/9bf16584-ce9d-43a3-ac0a-5acb4af1d50b.mp4",
    "tags": [
      "22ct Gold",
      "Bombay Screw",
      "Stud Earrings",
      "Granulation"
    ],
    "specs": {
      "weight": "12.4 grams / pair",
      "metal": "22ct Solid Bullion Gold",
      "craftsmanship": "Hand-Granulated Filigree"
    }
  },
  {
    "id": "piece-21-cushion-halo-diamond-ring",
    "title": "The Cushion Halo Diamond Engagement Ring",
    "category": "22ct-gold",
    "metalPurity": "18ct Yellow Gold Shank & Platinum Halo",
    "hallmarkText": "London Assay 750 Stamped",
    "description": "Warm 18ct yellow gold pavé band featuring a luminous cushion-shaped micro-pavé halo encircling a certified center diamond.",
    "priceNote": "Bespoke Commission",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/a320449b-e662-4674-8ff1-7b3c58efe48f.jpg",
    "videoUrl": "/images/collections/a320449b-e662-4674-8ff1-7b3c58efe48f.mp4",
    "tags": [
      "Cushion Halo",
      "18ct Gold",
      "Micro-Pavé",
      "Engagement Ring"
    ],
    "specs": {
      "carat": "1.20ct Center + 0.55ct Halo/Pavé",
      "metal": "18ct Yellow Gold",
      "craftsmanship": "Micro-Prong Halo Mounting"
    }
  },
  {
    "id": "piece-22-platinum-pear-diamond-cluster-ring",
    "title": "The Platinum Pear Diamond Cluster Halo Ring",
    "category": "polki-heritage",
    "metalPurity": "950 Platinum",
    "hallmarkText": "950 Platinum Certified",
    "description": "Graceful pear-cut natural diamond encircled by a tight micro-pavé halo on a tapered platinum band set with matching diamonds.",
    "priceNote": "Bespoke Workshop Setting",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/c893d288-706d-43a2-bf7d-a67f0fb840c0.jpg",
    "videoUrl": "/images/collections/c893d288-706d-43a2-bf7d-a67f0fb840c0.mp4",
    "tags": [
      "Pear Diamond",
      "Cluster Halo",
      "Platinum",
      "Solitaire"
    ],
    "specs": {
      "carat": "1.30ct Pear Diamond + 0.40ct Halo",
      "metal": "950 Platinum",
      "craftsmanship": "Precision Contoured Collet"
    }
  },
  {
    "id": "piece-23-emerald-marquise-diamond-floral-pendant",
    "title": "The Zambian Emerald & Marquise Diamond Floral Pendant",
    "category": "polki-heritage",
    "metalPurity": "18ct White Gold",
    "hallmarkText": "London Assay 750 Stamped",
    "description": "Botanical high jewellery pendant featuring a central rosette of six pear-cut Zambian emeralds surrounded by radiating marquise diamond petals.",
    "priceNote": "High Jewellery Commission",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/d1b0cd96-fce0-4ef2-a3a6-20ecc8784006.jpg",
    "videoUrl": "/images/collections/d1b0cd96-fce0-4ef2-a3a6-20ecc8784006.mov",
    "tags": [
      "Emerald Pendant",
      "Marquise Diamonds",
      "Floral Motif",
      "18ct White Gold"
    ],
    "specs": {
      "weight": "14.2 grams",
      "carat": "4.80ct Emeralds + 3.20ct Diamonds",
      "metal": "18ct White Gold",
      "craftsmanship": "Artisan Cluster Claw Mount"
    }
  },
  {
    "id": "piece-24-scalloped-floral-diamond-cluster-band",
    "title": "The Scalloped Floral Diamond Cluster Band",
    "category": "22ct-gold",
    "metalPurity": "18ct Yellow Gold (750)",
    "hallmarkText": "London Assay 750 Stamped",
    "description": "Delicate half-eternity band designed with continuous scalloped florets of natural brilliant cut diamonds set in 18ct yellow gold.",
    "priceNote": "Made to Order • Exact Finger Size",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/ddae91d6-81ca-4a58-8eff-963f065d738f.jpg",
    "videoUrl": "/images/collections/ddae91d6-81ca-4a58-8eff-963f065d738f.mp4",
    "tags": [
      "Scalloped Band",
      "Floral Diamond",
      "18ct Gold",
      "Eternity Ring"
    ],
    "specs": {
      "carat": "1.15ct Natural Diamonds",
      "metal": "18ct Yellow Gold",
      "craftsmanship": "Scalloped Cluster Setting"
    }
  },
  {
    "id": "piece-25-solitaire-diamond-stud-earrings",
    "title": "Classic 4-Prong Solitaire Diamond Stud Earrings",
    "category": "polki-heritage",
    "metalPurity": "18ct Yellow Gold (750)",
    "hallmarkText": "London Assay Stamped",
    "description": "Matched pair of round brilliant natural diamonds set in classic 4-prong 18ct yellow gold basket stud mountings with secure friction backs.",
    "priceNote": "Direct Workshop Craft",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/e04a48c3-2c58-4692-bf79-43609f73bf1d.jpg",
    "videoUrl": "/images/collections/e04a48c3-2c58-4692-bf79-43609f73bf1d.mp4",
    "tags": [
      "Diamond Studs",
      "18ct Yellow Gold",
      "Solitaire",
      "Classic"
    ],
    "specs": {
      "carat": "1.50ct Total Weight (0.75ct each)",
      "metal": "18ct Yellow Gold",
      "craftsmanship": "Precision Matched Pair"
    }
  },
  {
    "id": "piece-26-pear-crossover-diamond-ring-variant",
    "title": "The Pear Solitaire Crossover Diamond Ring",
    "category": "rings",
    "metalPurity": "18ct Yellow Gold",
    "hallmarkText": "London Assay 750 Stamped",
    "description": "Fluid crossover split shank in 18ct yellow gold set with micro-pavé diamonds embracing a certified pear brilliant diamond.",
    "priceNote": "Bespoke Commission",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/e7ea0977-ac81-4aaf-b7b7-ad43406042a8.jpg",
    "videoUrl": "/images/collections/e7ea0977-ac81-4aaf-b7b7-ad43406042a8.mov",
    "tags": [
      "Pear Cut",
      "Crossover",
      "Pavé Band",
      "18ct Gold"
    ],
    "specs": {
      "carat": "1.45ct Pear Diamond + 0.55ct Pavé",
      "metal": "18ct Yellow Gold",
      "craftsmanship": "Sculptural Crossover Mount"
    }
  },
  {
    "id": "piece-27-foliate-marquise-diamond-cluster-studs",
    "title": "The Foliate Marquise Diamond Cluster Studs",
    "category": "polki-heritage",
    "metalPurity": "18ct White Gold & Platinum",
    "hallmarkText": "London Assay Certified",
    "description": "Organic leafy foliate cluster earrings set with marquise and round brilliant cut natural diamonds in 18ct white gold.",
    "priceNote": "Direct Workshop Craft",
    "mediaType": "video",
    "thumbnailUrl": "/images/collections/posters/f06dfa2e-9675-4e79-b953-e4e61bb1b393.jpg",
    "videoUrl": "/images/collections/f06dfa2e-9675-4e79-b953-e4e61bb1b393.mp4",
    "tags": [
      "Diamond Studs",
      "Foliate Cluster",
      "18ct White Gold",
      "Marquise"
    ],
    "specs": {
      "carat": "1.80ct Total Diamond Weight",
      "metal": "18ct White Gold",
      "craftsmanship": "Leaf Motif Cluster Setting"
    }
  },
  {
    "id": "piece-28-syndicate-polki-emerald-collar",
    "title": "The Syndicate Polki & Emerald Beaded Bridal Collar",
    "category": "polki-heritage",
    "metalPurity": "22ct Antique Gold & Syndicate Polki",
    "hallmarkText": "London Assay 916 Certified",
    "description": "22ct gold Jadau Polki bridal necklace with scalloped drop motifs, strung with natural green emerald bead tassels and matching ear ornament.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/12829417-6791-4c2c-8ff1-7b92d459aab4.jpeg",
    "tags": [
      "Polki Heritage",
      "Zambian Emerald",
      "22ct Gold",
      "Bridal Collar"
    ],
    "specs": {
      "weight": "128.0 grams",
      "carat": "18.50ct Polki & Emerald",
      "metal": "22ct Gold & 24ct Kundan Foil",
      "craftsmanship": "Artisan Jadau Handcraft"
    }
  },
  {
    "id": "piece-29-nizam-ruby-pearl-polki-choker",
    "title": "The Nizam Ruby Cabochon & Basra Pearl Polki Choker",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916)",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Royal 22ct gold bridal choker set with uncut syndicate Polki diamonds, deep ruby-red cabochon stones, and a dense fringe of South Sea pearls.",
    "priceNote": "High Jewellery Atelier • Bespoke Piece",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb.jpeg",
    "tags": [
      "22ct Gold",
      "Syndicate Polki",
      "Burmese Rubies",
      "South Sea Pearls"
    ],
    "specs": {
      "weight": "142.0 grams",
      "carat": "16.20ct Polki & Rubies",
      "metal": "22ct Imperial Gold",
      "craftsmanship": "In-House Hayes Handcrafted"
    }
  },
  {
    "id": "piece-30-padmavati-jadau-polki-choker",
    "title": "The Padmavati 22ct Jadau Polki Bridal Choker",
    "category": "bridal",
    "metalPurity": "22ct Gold (916 Hallmarked)",
    "hallmarkText": "UK London Assay Office 916",
    "description": "Flat-lay presentation of our signature 22ct gold bridal choker with ruby enamel highlights, geometric Jadau diamond plaques, and rich pearl cluster fringe.",
    "priceNote": "Direct Workshop Pricing • In-House Hayes Bench",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/22ct-jadau-polki-bridal-choker.jpg",
    "tags": [
      "22ct Gold",
      "Jadau Choker",
      "Bridal Suite",
      "Kundan Setting"
    ],
    "specs": {
      "weight": "135.0 grams",
      "carat": "14.80ct Uncut Polki",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Pure 24ct Kundan Foil Setting"
    }
  },
  {
    "id": "piece-31-royal-mayur-peacock-tikka",
    "title": "The Royal Mayur Peacock Motif Polki Maang Tikka",
    "category": "bridal",
    "metalPurity": "22ct Gold (916 Hallmarked)",
    "hallmarkText": "UK Hallmark Certified",
    "description": "Intricately hand-sculpted bridal hair ornament featuring open-work peacock plumage set with uncut diamonds, ruby eye accents, and pearl drop borders.",
    "priceNote": "Bridal Jewellery Suite Addition",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/53301b27-9ad6-4e9c-a621-ab6b9e795fca.jpeg",
    "tags": [
      "Maang Tikka",
      "Peacock Motif",
      "Polki",
      "Bridal Headpiece"
    ],
    "specs": {
      "weight": "36.5 grams",
      "carat": "6.50ct Polki",
      "metal": "22ct Gold",
      "craftsmanship": "Hand-Carved Gold Setting"
    }
  },
  {
    "id": "piece-32-russian-emerald-basra-pearl-choker",
    "title": "The Russian Emerald & Basra Pearl Polki Choker",
    "category": "polki-heritage",
    "metalPurity": "22ct Gold & Russian Emeralds",
    "hallmarkText": "UK Assay Certified 916",
    "description": "High-jewellery collar adorned with vivid square-cut emeralds, brilliant Polki diamonds, and a seamless rim of graduated Basra pearls.",
    "priceNote": "Viewing by Private Consultation",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/5ce947fd-b64d-4004-afc4-8ffe1a7847b8.jpeg",
    "tags": [
      "Russian Emerald",
      "Basra Pearls",
      "Polki Choker",
      "22ct Gold"
    ],
    "specs": {
      "weight": "135.0 grams",
      "carat": "16.80ct Polki",
      "metal": "22ct Gold",
      "craftsmanship": "Handcrafted in Hayes Atelier"
    }
  },
  {
    "id": "piece-33-royal-darbar-emerald-bridal-haar",
    "title": "The Royal Darbar Polki & Emerald Bridal Haar",
    "category": "bridal",
    "metalPurity": "22ct Solid Gold (916)",
    "hallmarkText": "London Assay 916 Stamped",
    "description": "Ornate heritage Polki necklace featuring layered emerald droplets on ceremonial red silk, handcrafted for grand South Asian weddings.",
    "priceNote": "Bespoke Bridal Suite Commission",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/64043268-7e68-48e4-8b74-f58fbd5ff884.jpeg",
    "tags": [
      "Darbar Haar",
      "Emerald Droplets",
      "Polki",
      "Ceremonial Suite"
    ],
    "specs": {
      "weight": "148.0 grams",
      "carat": "21.00ct Polki & Emeralds",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Master Goldsmith Hand-Set"
    }
  },
  {
    "id": "piece-34-workshop-ledger-choker-jhumkis",
    "title": "Master Goldsmith Hand-Chased 22ct Choker & Jhumkis",
    "category": "22ct-gold",
    "metalPurity": "Pure 22ct Bullion Gold (916)",
    "hallmarkText": "Official London Leopard's Head 916",
    "description": "Handcrafted at our Hayes goldsmith bench. 22ct solid gold choker with cascading micro-granulation spheres and matching hand-forged jhumki drops.",
    "priceNote": "Direct Workshop Bullion Pricing",
    "mediaType": "image",
    "thumbnailUrl": "/images/workshop/goldsmith-bench-order-book-22ct.jpg",
    "tags": [
      "22ct Solid Gold",
      "Hand-Chased",
      "Workshop Ledger",
      "Jhumkis",
      "Heirloom"
    ],
    "specs": {
      "weight": "86.4 grams",
      "metal": "Pure 22ct Bullion Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-35-chandrika-polki-ruby-bridal-passa",
    "title": "The Chandrika Polki & Ruby Bridal Passa & Tikka",
    "category": "bridal",
    "metalPurity": "22ct Gold (916 Hallmarked)",
    "hallmarkText": "916 London Assay",
    "description": "Traditional bridal headpiece featuring tiered Polki diamonds, pear-shaped ruby cabochons, and pearl drops for traditional bridal adornment.",
    "priceNote": "Custom Heirloom Commission",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/7b225dd5-6728-41fe-b993-ac228fe3782f.jpeg",
    "tags": [
      "Passa",
      "Bridal Hairpiece",
      "Polki",
      "Rubies"
    ],
    "specs": {
      "weight": "41.2 grams",
      "carat": "8.20ct Polki",
      "metal": "22ct Gold",
      "craftsmanship": "Master Goldsmith Hand-Set"
    }
  },
  {
    "id": "piece-36-workshop-velvet-tray-collection",
    "title": "The Hayes Atelier Workshop Velvet Tray Collection",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Gold (916)",
    "hallmarkText": "London Assay Office 916 Stamped",
    "description": "Handcrafted 22ct gold bridal collars, medallions, and matching maang tikkas directly on our Hayes workshop trays awaiting hallmarking.",
    "priceNote": "Direct Workshop Bullion Pricing",
    "mediaType": "image",
    "thumbnailUrl": "/images/workshop/workshop-bench-velvet-trays.jpg",
    "tags": [
      "Hayes Workshop",
      "22ct Gold",
      "Bridal Suites",
      "Wholesale Bullion"
    ],
    "specs": {
      "weight": "185.0 grams total",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Handmade on Uxbridge Road"
    }
  },
  {
    "id": "piece-37-grand-chandbali-earrings-carved-emeralds",
    "title": "Grand Chandbali Earrings with Leaf-Carved Emeralds",
    "category": "polki-heritage",
    "metalPurity": "22ct Gold (916 Hallmarked)",
    "hallmarkText": "916 Hallmarked",
    "description": "Heirloom crescent chandbali statement earrings set with carved Zambian emerald leaves and floating Polki diamond droplets on 22ct gold.",
    "priceNote": "Pair Commission • Ergonomic Balance",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/926a7777-65a9-4968-a10c-804f36dc283a.jpeg",
    "tags": [
      "Chandbali",
      "Carved Emerald",
      "Polki Earrings",
      "22ct Gold"
    ],
    "specs": {
      "weight": "52.0 grams / pair",
      "carat": "14.20ct Emeralds",
      "metal": "22ct Gold",
      "craftsmanship": "Artisan Filigree & Bezel Setting"
    }
  },
  {
    "id": "piece-38-mughal-chandbali-carved-ruby-earrings",
    "title": "The Mughal Chandbali Earrings with Carved Ruby Drops",
    "category": "polki-heritage",
    "metalPurity": "22ct Gold (916 Hallmarked)",
    "hallmarkText": "916 London Stamped",
    "description": "Historic Mughal-inspired double crescent earrings set with uncut Polki diamonds, ruby cabochons, and clustered seed pearl bunches.",
    "priceNote": "Handcrafted Heirloom Pair",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/e9b36b5b-4e22-4c94-b80d-6c530381fc7f.jpeg",
    "tags": [
      "Mughal Jewellery",
      "Chandbali",
      "Ruby Drops",
      "Seed Pearls"
    ],
    "specs": {
      "weight": "44.0 grams / pair",
      "metal": "22ct Gold",
      "craftsmanship": "Mughal Jadau Technique"
    }
  },
  {
    "id": "piece-39-imperial-kundan-carved-emerald-haar",
    "title": "The Imperial Kundan Carved Emerald Long Haar",
    "category": "polki-heritage",
    "metalPurity": "22ct Gold & Natural Emeralds",
    "hallmarkText": "London Assay 916 Stamped",
    "description": "Long V-shaped royal Kundan necklace featuring a massive rectangular emerald-cut Colombian emerald pendant with emerald drops.",
    "priceNote": "High Jewellery Commission • Private Viewing",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/f7a0e00d-b6e5-4e91-aeba-0d0db54e173c.jpeg",
    "tags": [
      "Kundan Haar",
      "Colombian Emerald",
      "Long Necklace",
      "Royal Suite"
    ],
    "specs": {
      "weight": "165.0 grams",
      "carat": "38.50ct Carved Emerald",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Pure 24ct Kundan Foil Setting"
    }
  },
  {
    "id": "piece-40-royal-darbar-scalloped-emerald-choker",
    "title": "The Royal Darbar Polki & Scalloped Emerald Choker",
    "category": "bridal",
    "metalPurity": "22ct Gold (916 Hallmarked)",
    "hallmarkText": "London Assay 916 Stamped",
    "description": "22ct yellow gold Jadau Polki scalloped bridal choker with suspended natural pearls and emerald drops handcrafted in our Hayes workshop.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/fc4f5f26-d64e-490e-87dc-23058ec58235.jpeg",
    "tags": [
      "22ct Gold",
      "Scalloped Choker",
      "Polki",
      "Emeralds"
    ],
    "specs": {
      "weight": "122.0 grams",
      "carat": "14.20ct Polki",
      "metal": "22ct Solid Gold",
      "craftsmanship": "In-House Hayes Handcrafted"
    }
  },
  {
    "id": "piece-41-maharani-three-strand-emerald-haar",
    "title": "The Maharani Three-Strand Emerald Tablet Haar",
    "category": "bridal",
    "metalPurity": "22ct Gold (916 Hallmarked)",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Regal three-strand ceremonial bridal haar featuring carved green emerald tablets, uncut Polki diamonds, and pearl clusters.",
    "priceNote": "Bespoke Bridal Suite Commission",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/fd9d0bc5-26ce-4998-92bf-50957ffc2210.jpeg",
    "tags": [
      "Three-Strand Haar",
      "Emerald Tablets",
      "Polki",
      "Maharani Suite"
    ],
    "specs": {
      "weight": "174.0 grams",
      "carat": "32.00ct Emerald Tablets",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Royal Jadau Stringing"
    }
  },
  {
    "id": "piece-42-bespoke-cad-marquise-solitaire-eye-pendant",
    "title": "Bespoke 3D CAD Marquise Solitaire Eye Pendant",
    "category": "rings",
    "metalPurity": "18ct Yellow Gold (750)",
    "hallmarkText": "London Assay 750 Stamped",
    "description": "Precision 3D CAD custom commission rendering an eye-shaped 18ct gold pendant set with natural white diamonds.",
    "priceNote": "3D CAD Prototype to Finished Gold • Custom Commission",
    "mediaType": "image",
    "thumbnailUrl": "/images/cad/bespoke-evil-eye-diamond-cad.jpg",
    "tags": [
      "3D CAD",
      "Evil Eye",
      "Diamond Pendant",
      "Custom Commission"
    ],
    "specs": {
      "carat": "1.45ct Round & Marquise Diamonds",
      "metal": "18ct Yellow Gold",
      "craftsmanship": "CAD Sculpted & Micro-Set in Hayes"
    }
  },
  {
    "id": "piece-43-bespoke-cad-sapphire-halo-medallion",
    "title": "Bespoke 3D CAD Evil Eye Sapphire & Diamond Medallion",
    "category": "rings",
    "metalPurity": "18ct Warm Yellow Gold (750)",
    "hallmarkText": "750 London Hallmarked",
    "description": "Precision 3D CAD custom commission featuring concentric halos of vivid Ceylon sapphires, canary diamonds, and micro-claw natural white diamonds.",
    "priceNote": "3D CAD Prototype to Finished Gold • Custom Commission",
    "mediaType": "image",
    "thumbnailUrl": "/images/cad/bespoke-evil-eye-sapphire-cad.jpg",
    "tags": [
      "3D CAD",
      "Evil Eye",
      "Ceylon Sapphire",
      "Custom Commission",
      "18ct Gold"
    ],
    "specs": {
      "carat": "2.10ct Sapphire & Diamond",
      "metal": "18ct Yellow Gold",
      "craftsmanship": "CAD Sculpted & Micro-Set in Hayes"
    }
  },
  {
    "id": "piece-44-syndicate-polki-collar-atelier-view",
    "title": "The Syndicate Polki Collar (Atelier Angle View)",
    "category": "polki-heritage",
    "metalPurity": "22ct Antique Gold & Uncut Syndicate Polki",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Alternative bench view of our Syndicate Polki collar with green emerald drop accents and hand-chased reverse detailing.",
    "priceNote": "Direct Workshop Consultation • In-House Hayes Atelier",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/12829417-6791-4c2c-8ff1-7b92d459aab4_1.jpeg",
    "tags": [
      "Polki Heritage",
      "Atelier Angle",
      "22ct Gold",
      "Syndicate Polki"
    ],
    "specs": {
      "weight": "128.0 grams",
      "carat": "18.50ct Polki & Emerald",
      "metal": "22ct Gold & 24ct Kundan Foil",
      "craftsmanship": "Artisan Jadau Setting"
    }
  },
  {
    "id": "piece-45-nizam-ruby-choker-atelier-view",
    "title": "The Nizam Ruby Cabochon Choker (Presentation View)",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916)",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Ceremonial presentation angle of the Nizam royal choker showcasing natural pearl fringe drape and ruby cabochon luster.",
    "priceNote": "High Jewellery Atelier • Bespoke Piece",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_1.jpeg",
    "tags": [
      "Presentation View",
      "22ct Gold",
      "Burmese Rubies",
      "South Sea Pearls"
    ],
    "specs": {
      "weight": "142.0 grams",
      "carat": "16.20ct Polki & Rubies",
      "metal": "22ct Imperial Gold",
      "craftsmanship": "In-House Hayes Handcrafted"
    }
  },
  {
    "id": "piece-46-nizam-ruby-choker-bench-macro",
    "title": "The Nizam Ruby Cabochon Choker (Bench Macro Detail)",
    "category": "bridal",
    "metalPurity": "22ct Imperial Gold (916)",
    "hallmarkText": "UK London Assay 916 Stamped",
    "description": "Close-up bench inspection of the 24ct Kundan foil setting and hand-selected natural unheated Burmese rubies.",
    "priceNote": "Direct Workshop Consultation",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_2.jpeg",
    "tags": [
      "Macro Detail",
      "Kundan Foil",
      "Burmese Rubies",
      "22ct Gold"
    ],
    "specs": {
      "weight": "142.0 grams",
      "carat": "16.20ct Polki & Rubies",
      "metal": "22ct Imperial Gold",
      "craftsmanship": "Pure 24ct Kundan Setting"
    }
  },
  {
    "id": "piece-47-chandrika-passa-workshop-angle",
    "title": "The Chandrika Bridal Passa (Workshop Macro Setting)",
    "category": "bridal",
    "metalPurity": "22ct Gold (916)",
    "hallmarkText": "916 London Assay Stamped",
    "description": "Bench macro photography documenting the intricate multi-tier fan structure and ruby cluster drops of the Chandrika bridal passa.",
    "priceNote": "Custom Heirloom Commission",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/7b225dd5-6728-41fe-b993-ac228fe3782f_1.jpeg",
    "tags": [
      "Passa",
      "Macro Setting",
      "Polki",
      "Rubies"
    ],
    "specs": {
      "weight": "41.2 grams",
      "carat": "8.20ct Polki",
      "metal": "22ct Gold",
      "craftsmanship": "Master Goldsmith Hand-Set"
    }
  },
  {
    "id": "piece-48-imperial-kundan-haar-atelier-view",
    "title": "The Imperial Kundan Carved Emerald Haar (Atelier View)",
    "category": "polki-heritage",
    "metalPurity": "22ct Gold & Natural Emeralds",
    "hallmarkText": "London Assay 916 Certified",
    "description": "Overhead atelier perspective of the grand Colombian emerald rectangular pendant and graduating Kundan Polki links.",
    "priceNote": "High Jewellery Commission",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/f7a0e00d-b6e5-4e91-aeba-0d0db54e173c_1.jpeg",
    "tags": [
      "Kundan Haar",
      "Colombian Emerald",
      "Atelier View",
      "Royal Suite"
    ],
    "specs": {
      "weight": "165.0 grams",
      "carat": "38.50ct Carved Emerald",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Pure 24ct Kundan Foil Setting"
    }
  },
  {
    "id": "piece-49-royal-darbar-choker-workshop-angle",
    "title": "The Royal Darbar Scalloped Choker (Workshop Angle)",
    "category": "bridal",
    "metalPurity": "22ct Gold (916)",
    "hallmarkText": "London Assay 916 Stamped",
    "description": "Bench angle documenting the fluid articulating hinges connecting each scalloped Kundan Polki panel with natural pearl droplets.",
    "priceNote": "Direct Workshop Consultation",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/fc4f5f26-d64e-490e-87dc-23058ec58235_1.jpeg",
    "tags": [
      "Scalloped Choker",
      "Hinged Setting",
      "Polki",
      "Pearl Droplets"
    ],
    "specs": {
      "weight": "122.0 grams",
      "carat": "14.20ct Polki",
      "metal": "22ct Solid Gold",
      "craftsmanship": "In-House Hayes Handcrafted"
    }
  },
  {
    "id": "piece-50-calcutta-filigree-collar-bench-record",
    "title": "The Calcutta Filigree Collar & Maang Tikka (Bench Pad Record)",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Bullion Gold (916)",
    "hallmarkText": "Official London Leopard's Head 916",
    "description": "High-resolution workshop record of the multi-tier filigree mesh collar and matching emerald cabochon forehead ornament on black velvet.",
    "priceNote": "Direct Workshop Bullion Pricing",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/9e9afd6e-1890-4467-9c3c-99fbdb640e4b.jpeg",
    "tags": [
      "Calcutta Filigree",
      "Maang Tikka",
      "22ct Gold",
      "Bench Pad"
    ],
    "specs": {
      "weight": "162.0 grams",
      "carat": "12.50ct Natural Emeralds",
      "metal": "22ct Antique Finish Gold",
      "craftsmanship": "Master Goldsmith Hayes Atelier"
    }
  },
  {
    "id": "piece-51-workshop-order-ledger-record",
    "title": "The Grand Heritage 22ct Gold Choker & Floral Earrings",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Gold (916)",
    "hallmarkText": "916 London Assay Stamped",
    "description": "Finished hand-chased 22ct solid gold choker paired with floral drop earrings, hand-forged on Uxbridge Road.",
    "priceNote": "Direct Workshop Bullion Pricing",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/6993a897-24d0-4f1f-b8a8-06b2c0001dcb.jpeg",
    "tags": [
      "Order Ledger",
      "Archival Commission",
      "22ct Gold",
      "Choker"
    ],
    "specs": {
      "weight": "86.4 grams",
      "metal": "Pure 22ct Bullion Gold",
      "craftsmanship": "Hand-Forged on Uxbridge Road"
    }
  },
  {
    "id": "piece-52-hayes-bench-velvet-trays-complete",
    "title": "Hayes Bench Velvet Display Trays (Complete Suite)",
    "category": "22ct-gold",
    "metalPurity": "22ct Solid Gold (916)",
    "hallmarkText": "London Assay Office 916 Stamped",
    "description": "Display tray array showcasing completed 22ct gold necklaces and accessories prepared for Assay hallmarking and private client viewing.",
    "priceNote": "Direct Workshop Bullion Pricing",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/8cca104b-0936-4db2-82d0-92750aa40c0d.jpeg",
    "tags": [
      "Display Trays",
      "22ct Gold",
      "Bridal Suites",
      "Wholesale Bullion"
    ],
    "specs": {
      "weight": "185.0 grams total",
      "metal": "22ct Solid Gold",
      "craftsmanship": "Handmade on Uxbridge Road"
    }
  },
  {
    "id": "piece-53-bespoke-3d-cad-eye-solitaire-angle",
    "title": "Bespoke 3D CAD Eye Solitaire Render (Workshop Angle)",
    "category": "rings",
    "metalPurity": "18ct White Gold (750) & 950 Platinum",
    "hallmarkText": "London Assay Office 750 / 950",
    "description": "Perspective angle CAD model demonstrating precise prong depths and gallery undercutting prior to casting in solid gold.",
    "priceNote": "3D CAD Prototype to Finished Gold • Custom Commission",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/c1093de2-6cd6-4023-be9f-a46cd4a0fbce.jpeg",
    "tags": [
      "3D CAD",
      "Prototype",
      "Evil Eye",
      "Perspective Angle"
    ],
    "specs": {
      "carat": "1.45ct Round & Marquise Diamonds",
      "metal": "18ct Yellow Gold",
      "craftsmanship": "CAD Sculpted & Micro-Set in Hayes"
    }
  },
  {
    "id": "piece-54-bespoke-3d-cad-sapphire-halo-cad-view",
    "title": "Bespoke 3D CAD Sapphire Halo Medallion (CAD View)",
    "category": "rings",
    "metalPurity": "18ct Warm Gold (750)",
    "hallmarkText": "750 London Hallmarked",
    "description": "Orthographic technical CAD view showing the micro-claw pave layout for concentric sapphire and diamond halo channels.",
    "priceNote": "3D CAD Prototype to Finished Gold • Custom Commission",
    "mediaType": "image",
    "thumbnailUrl": "/images/collections/380254d7-cebb-49d0-bf24-5b3fa2b2611f.jpeg",
    "tags": [
      "Technical CAD",
      "Sapphire Halo",
      "Micro-Claw",
      "Custom Commission"
    ],
    "specs": {
      "carat": "2.10ct Sapphire & Diamond",
      "metal": "18ct Yellow Gold",
      "craftsmanship": "CAD Sculpted & Micro-Set in Hayes"
    }
  }
];
