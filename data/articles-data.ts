export interface ArticleContentSection {
  heading: string;
  subtext: string;
  bullets?: string[];
  table?: {
    caption?: string;
    headers: string[];
    rows: string[][];
  };
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface ArticleItem {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: "Purity & Hallmarks" | "Craftsmanship & CAD" | "Repairs & Care" | "Bullion & Investment";
  readTime: string;
  datePublished: string;
  dateModified: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  coverImage: string;
  tags: string[];
  keyTakeaways: string[];
  sections: ArticleContentSection[];
  faqs: ArticleFaq[];
}

export const ARTICLES_DATA: ArticleItem[] = [
  {
    slug: "22ct-vs-24ct-gold-hallmarking-guide",
    title: "22ct vs 24ct Gold: UK Hallmarking, Durability & Asian Bridal Jewelry Guide",
    metaTitle: "22ct vs 24ct Gold: UK Hallmarking, Durability & Asian Bridal Suits",
    metaDescription:
      "Comprehensive goldsmith guide to 22ct (916) vs 24ct (999) gold purity, London Assay Office hallmarks, tensile durability, and South Asian bridal suites by Viky.",
    excerpt:
      "Understand why 22ct (916 fineness) is the royal standard for British-Asian bridal jewellery, how UK London Assay Office hallmarks protect your investment, and why 24ct is reserved for investment bullion.",
    category: "Purity & Hallmarks",
    readTime: "6 min read",
    datePublished: "2026-08-15T09:00:00Z",
    dateModified: "2026-11-19T10:00:00Z",
    author: {
      name: "Viky",
      role: "Master Goldsmith & Atelier Director at Niraj Jewellers",
    },
    coverImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    tags: ["22ct Gold", "24ct Gold", "UK Hallmarking Act 1973", "London Assay Office", "Asian Bridal Jewellery", "Purity Guide"],
    keyTakeaways: [
      "22ct gold contains 91.6% pure gold alloyed with 8.4% copper and silver, providing the tensile strength necessary for intricate filigree and secure stone settings.",
      "24ct gold (99.9% pure) is naturally too soft for wearable jewellery and is strictly suited for minted bullion bars and collector coins.",
      "Every piece sold in the UK over 1.0 gram must carry official London Assay Office hallmarks, including the Leopard's Head, fineness mark (916), and maker's mark.",
      "Niraj Jewellers performs in-house XRF and electronic scale density testing on-site at 136 Uxbridge Road, Hayes.",
    ],
    sections: [
      {
        heading: "1. The Crucial Metallurgical Difference: Purity vs Wearability",
        subtext:
          "In high-end Indian and South Asian jewellery, purity has historically represented family prestige and wealth preservation. However, metallurgical reality dictates which alloy can withstand decades of wear:",
        bullets: [
          "24 Karat (999.9 Fineness): 100% pure elemental gold. Extremely malleable; scratches easily and deforms under modest finger pressure.",
          "22 Karat (916 Fineness): 91.67% pure gold alloyed with 5.5% copper and 2.8% fine silver. This specific alloy ratio yields the radiant warm yellow hue distinctive to heirloom Asian jewellery while elevating hardness to withstand intricate bridal suites.",
          "18 Karat (750 Fineness): 75% pure gold, favored for Western diamond solitaires and high-wear cocktail rings requiring maximum prong rigidity.",
        ],
        table: {
          caption: "Gold Carat Purity, Millesimal Fineness & Intended Use",
          headers: ["Carat Rating", "Millesimal Fineness", "Composition", "Best Applications", "Hallmark Stamp"],
          rows: [
            ["24ct", "999.0 - 999.9", "Pure Elemental Gold", "Investment Bullion, Minted Bars", "999"],
            ["22ct", "916.0", "91.6% Gold + Ag/Cu", "Bridal Suites, Chokers, Bangles, Polki", "916 (Crown)"],
            ["18ct", "750.0", "75.0% Gold + Alloys", "Diamond Solitaires, Pavé Bands", "750"],
            ["14ct / 9ct", "585.0 / 375.0", "Sub-60% Gold", "Commercial High-Street Fashion Rings", "585 / 375"],
          ],
        },
      },
      {
        heading: "2. The UK Hallmarking Act 1973: Why the Leopard's Head Protects You",
        subtext:
          "Unlike many overseas markets where gold purity is merely stamped by the manufacturer, the United Kingdom enforces some of the strictest consumer protection laws in global precious metals.",
        bullets: [
          "Independent Verification: In the UK, it is illegal for any jeweller to describe un-hallmarked gold items weighing over 1 gram as gold.",
          "The Leopard's Head: Niraj Jewellers submits all cast and bespoke jewellery directly to the London Assay Office at Goldsmiths' Hall.",
          "The 3 Compulsory Marks: Your suite will bear the Sponsor's Mark (our atelier crest), the Millesimal Fineness Mark (916), and the Assay Office Mark (London Leopard).",
        ],
        quote: {
          text: "Never purchase 22ct jewellery on faith alone. In our Hayes workshop, we demonstrate each client's hallmark through an HD jeweler's loupe before any piece leaves our workbench.",
          author: "Viky",
          role: "Master Jeweller, Niraj Jewellers Hayes",
        },
      },
      {
        heading: "3. Ancestral Gold Melting: Preserving Heirloom Value Without Losses",
        subtext:
          "Bridal couples often inherit 22ct or 24ct ancestral jewellery that feels aesthetically dated. Instead of incurring commercial high-street retail markups:",
        bullets: [
          "Calibrated Weighing: We weigh scrap or inherited gold in your direct line of sight on trade-certified Class II electronic scales.",
          "Induction Melting: Our in-house crucibles melt your gold on-site, retaining 100% of the intrinsic precious metal value towards your bespoke CAD design.",
          "Zero Third-Party Middlemen: Direct workshop execution cuts high-street broker premiums by up to 25–35%.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I wear 22ct gold every day without it bending?",
        answer:
          "Yes. Well-crafted 22ct gold bangles, chains, and wedding bands with adequate wall thickness (minimum 1.5mm to 2mm) are exceptionally durable for daily wear. Delicate micro-pavé prongs, however, are typically reinforced in 18ct or Platinum.",
      },
      {
        question: "What does the 916 hallmark mean on my jewellery?",
        answer:
          "The 916 mark indicates millesimal fineness, verifying that the piece contains 916 parts per 1,000 of pure gold (91.6%), the legal standard for 22 Karat gold under the UK Hallmarking Act 1973.",
      },
      {
        question: "Is Indian hallmark KDM gold legal in the UK?",
        answer:
          "KDM gold refers to gold soldered with cadmium, which is banned in the UK due to health and toxicity regulations. To be sold or hallmarked in the UK, jewellery must pass lead-free and cadmium-free assay testing.",
      },
    ],
  },
  {
    slug: "bespoke-3d-cad-jewellery-process",
    title: "Inside the Atelier: The 3D CAD to Casting Bespoke Jewellery Journey",
    metaTitle: "Bespoke 3D CAD Jewellery Journey: From Sketch to 22ct Gold Casting",
    metaDescription:
      "Step-by-step master goldsmith guide to bespoke jewellery design using Rhino CAD, 3D wax printing, London Assay hallmarking & gemstone setting in Hayes.",
    excerpt:
      "Discover the meticulous 4-stage bespoke journey: from initial napkin sketch to photorealistic 3D CAD modelling, lost-wax casting in 22ct gold, and hand-setting GIA diamonds at our Hayes workshop.",
    category: "Craftsmanship & CAD",
    readTime: "5 min read",
    datePublished: "2026-09-02T10:30:00Z",
    dateModified: "2026-11-19T10:00:00Z",
    author: {
      name: "Viky",
      role: "Master Goldsmith & Atelier Director at Niraj Jewellers",
    },
    coverImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    tags: ["Bespoke Jewellery", "3D CAD Modeling", "Lost-Wax Casting", "GIA Diamonds", "Handmade Jewellery London"],
    keyTakeaways: [
      "3D CAD modeling enables sub-millimeter precision and allows clients to preview photorealistic 360° renders before any metal is cast.",
      "Niraj Jewellers requires only a 30% deposit upon CAD approval, with 70% balance settled upon final in-person inspection.",
      "In-house production cuts turnaround times down to 5–7 working days, compared to 3–4 weeks for high-street jewellers.",
      "Loose GIA/IGI diamonds and uncut Polki gems are inspected under 40x digital loupes to ensure flawless stone seating.",
    ],
    sections: [
      {
        heading: "1. Stage 1: The Design Consultation & Gemstone Sourcing",
        subtext:
          "Every bespoke piece begins with an idea—whether a rough paper sketch, an Instagram reference video, or an heirloom stone needing resetting. Master Jeweller Viky analyzes stone proportions, finger ergonomics, and lifestyle durability.",
        bullets: [
          "Direct Diamond Inspection: Clients view certified loose diamonds (D–F colour, VVS/VS clarity) under digital loupes.",
          "Precious Metal Selection: Tailoring choices between 22ct Imperial Yellow Gold, 18ct White Gold, or 950 Solid Platinum.",
          "Fixed Quotation: Transparent pricing locked to current LBMA bullion and wholesale diamond rates.",
        ],
      },
      {
        heading: "2. Stage 2: Photorealistic 3D CAD Modeling & Prototyping",
        subtext:
          "Using precision CAD software (RhinoJewel & MatrixGold), our goldsmiths engineer every claw, gallery bridge, and bezel to micron accuracy.",
        bullets: [
          "360° Video Renders: You receive HD video renders via WhatsApp showing the piece from all dimensions.",
          "Free Design Iterations: We adjust prong heights, band taper, and diamond spacing until you are 100% satisfied.",
          "High-Resolution Resin Prototyping: For complex bridal sets, we 3D print an exact resin prototype for live finger fitting in our Hayes showroom.",
        ],
        quote: {
          text: "Bespoke jewellery should never be a leap of faith. 3D CAD modeling ensures you see the exact physical proportions before our casting crucibles are fired.",
          author: "Viky",
          role: "Principal Goldsmith",
        },
      },
      {
        heading: "3. Stage 3 & 4: Lost-Wax Casting, Hallmarking & Micro-Setting",
        subtext:
          "Once approved, the high-precision wax pattern is embedded in an investment crucible and cast with certified 22ct or 18ct gold.",
        bullets: [
          "Centrifugal Induction Casting: Eliminates internal porosity, ensuring maximum metal density and structural durability.",
          "London Assay Hallmarking: The raw casting is couriered to Goldsmiths' Hall for independent London Leopard assay stamping.",
          "Microscope Stone Setting: Diamonds and precious gems are hand-set under 40x stereoscopic microscopes using custom gravers.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a bespoke bridal suite take from start to finish?",
        answer:
          "Standard bespoke turnaround is 2 to 3 weeks. However, because our design benches, 3D printers, and casting equipment are entirely on-site in Hayes, urgent rush deadlines can be completed in 5 to 7 working days.",
      },
      {
        question: "Can I provide my own loose diamonds or family gemstones?",
        answer:
          "Yes. We frequently un-mount heirloom diamonds, rubies, and emeralds from vintage family pieces, verify their integrity under a microscope, and reset them into fresh 3D CAD modern mountings.",
      },
    ],
  },
  {
    slug: "same-day-laser-jewellery-repair-guide",
    title: "Why Laser Soldering Matters: Same-Day Ring Resizing & Restoration in London",
    metaTitle: "Same-Day In-House Jewellery Repairs Hayes: Laser Welding vs Torch",
    metaDescription:
      "Expert guide on same-day ring resizing, laser soldering, claw retipping, and ultrasonic restoration at Niraj Jewellers Hayes workshop. No third-party delays.",
    excerpt:
      "Learn why modern laser welding is critical for high-purity 22ct and platinum jewellery repairs, how same-day ring resizing works while you wait, and why flame torches risk damaging gemstones.",
    category: "Repairs & Care",
    readTime: "4 min read",
    datePublished: "2026-09-18T11:00:00Z",
    dateModified: "2026-11-19T10:00:00Z",
    author: {
      name: "Viky",
      role: "Master Goldsmith & Atelier Director at Niraj Jewellers",
    },
    coverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    tags: ["Ring Resizing", "Jewellery Repairs", "Laser Soldering", "Hayes Jewellers", "Same-Day Service"],
    keyTakeaways: [
      "Traditional blowtorch soldering heats the entire ring, risking thermal shock to delicate diamonds, emeralds, and pearls.",
      "Laser micro-welding focuses localized heat to a 0.2mm pinpoint, allowing stone-tight claw retipping without un-mounting gemstones.",
      "Niraj Jewellers completes ring sizing in 2–4 hours on-site at 136 Uxbridge Road, Hayes.",
      "All ring resizings include complimentary ultrasonic cleaning, scratch removal, and rhodium electroplating.",
    ],
    sections: [
      {
        heading: "1. The Risk of Traditional Torch Soldering vs Precision Laser Welding",
        subtext:
          "Most high-street jewellers do not possess on-site goldsmith benches and ship your precious heirlooms out to third-party trade repairers in Birmingham or London. Worse, many still use open oxy-gas torches:",
        table: {
          caption: "Laser Welding vs Conventional Gas Torch Repair",
          headers: ["Feature / Metric", "Precision Laser Welding (Niraj)", "Traditional Gas Torch Soldering"],
          rows: [
            ["Heat Zone Radius", "0.2mm – 0.5mm localized spot", "Entire shank & stone setting (over 800°C)"],
            ["Gemstone Safety", "Stones remain mounted safely in place", "Heat-sensitive gems must be removed"],
            ["Hallmark Preservation", "Preserves UK Leopard hallmarks intact", "Frequently erodes or burns off hallmarks"],
            ["Turnaround Time", "Same-Day (2 to 4 Hours)", "2 to 4 Weeks (third-party shipping)"],
            ["Weld Tensile Strength", "Pure parent metal alloy fusion (100%)", "Requires lower-melting solder joint (weaker)"],
          ],
        },
      },
      {
        heading: "2. Common In-House Workshop Repairs Performed Daily in Hayes",
        subtext:
          "All repair work is quoted upfront with complete financial transparency:",
        bullets: [
          "Same-Day Ring Resizing: Sizing up or down in 22ct gold, 18ct white/yellow/rose gold, and platinum.",
          "Diamond Claw Retipping: Rebuilding worn-down prongs before valuable center stones become loose or lost.",
          "Chain & Bracelet Solder: Laser repair of broken rope chains, curb links, and mangalsutras without ugly solder seams.",
          "Ultrasonic Cavitation & Rhodium Dip: 80°C pressurized cleaning that strips embedded dirt, oils, and restores showroom lustre.",
        ],
        quote: {
          text: "When you leave your engagement ring with us, it never leaves our building. You speak directly to the goldsmith doing the work, not an uninformed retail counter clerk.",
          author: "Viky",
          role: "Principal Goldsmith",
        },
      },
    ],
    faqs: [
      {
        question: "How long does a ring resize take at Niraj Jewellers?",
        answer:
          "Most standard ring resizings take between 2 to 4 hours. You can drop off your piece in our Hayes showroom in the morning and collect it polished and gleaming before 5:00 PM the same day.",
      },
      {
        question: "Will resizing my ring damage the London Assay hallmark?",
        answer:
          "No. Our precision laser welders work precisely on the bottom center of the shank, intentionally bypassing and preserving your original Assay Office hallmarks.",
      },
    ],
  },
  {
    slug: "buying-selling-gold-bullion-london",
    title: "The London Investor Guide to LBMA Gold Bullion & Scrap Valuation",
    metaTitle: "Live LBMA Gold Bullion & Scrap Gold Valuation London Hayes",
    metaDescription:
      "Guide to buying and selling physical gold bullion in London. Live LBMA spot benchmark prices, 24ct bars, sovereigns, and electronic scale scrap testing in Hayes.",
    excerpt:
      "Navigate physical gold bullion investment in London: understand live LBMA spot benchmarks, Capital Gains Tax exemptions on British gold coins, and how trade-approved electronic testing ensures fair scrap payouts.",
    category: "Bullion & Investment",
    readTime: "5 min read",
    datePublished: "2026-09-25T14:00:00Z",
    dateModified: "2026-11-19T10:00:00Z",
    author: {
      name: "Viky",
      role: "Master Goldsmith & Atelier Director at Niraj Jewellers",
    },
    coverImage: "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1200&auto=format&fit=crop",
    tags: ["Gold Bullion", "LBMA Rates", "Gold Bars 24ct", "Scrap Gold London", "Sovereigns", "Tax-Free Gold"],
    keyTakeaways: [
      "LBMA (London Bullion Market Association) sets the global benchmark spot price for physical gold twice daily.",
      "Royal Mint Sovereign and Britannia coins are classified as UK legal tender and are 100% exempt from Capital Gains Tax (CGT).",
      "Investment gold bars and sovereign coins are VAT-free across the UK under HM Revenue & Customs regulations.",
      "Niraj Jewellers pays immediate cash or bank transfer based on live LBMA market rates, tested transparently on trade-calibrated scales.",
    ],
    sections: [
      {
        heading: "1. Understanding LBMA Spot Rates vs Retail Bullion Margins",
        subtext:
          "The London Bullion Market Association (LBMA) establishes the universal gold spot fix in London. When purchasing physical gold, retail investors should always look for transparent premiums over spot:",
        bullets: [
          "Wholesale Minted Bars (1g to 1kg): PAMP Suisse, Metalor, and Baird & Co. stamped with 999.9 purity and individual serial numbers.",
          "UK Sovereign Coins: Struck in 22ct (91.67% gold) weighing 7.98 grams, prized for their liquidity and historical prestige.",
          "VAT Exemption: Investment-grade gold (bars over 99.5% purity and qualifying coins) is legally zero-rated for VAT in the UK.",
        ],
      },
      {
        heading: "2. Capital Gains Tax (CGT) Advantage of Sovereign & Britannia Gold",
        subtext:
          "One of the biggest financial advantages for UK residents investing in precious metals is the Capital Gains Tax treatment of sovereign coins:",
        bullets: [
          "Legal Tender Status: Because British Gold Sovereigns and 1oz Britannias are official UK currency, profits realized upon their sale are 100% free of UK Capital Gains Tax.",
          "Bars vs Coins: While gold bars carry lower manufacturing premiums per kilo, sovereign coins offer superior tax agility when liquidating in smaller tranches.",
        ],
        quote: {
          text: "Bullion trading should be as clear as a bank transaction. We display live indicative rates, weigh in front of you, and execute immediate settlements with zero hidden handling fees.",
          author: "Viky",
          role: "Atelier Director",
        },
      },
      {
        heading: "3. How Scrap Gold Valuation Works at 136 Uxbridge Road",
        subtext:
          "Whether liquidating broken chains, single earrings, or unwanted inherited jewelry, we guide you through our 3-step testing protocol:",
        bullets: [
          "Step 1 - Magnet & Visual Acid Test: Distinguishing genuine gold alloys from rolled gold or brass coatings.",
          "Step 2 - Trade-Approved Scales: Calibrated Class II balances display exact weight in grams and tolas.",
          "Step 3 - Instant Payout: Immediate bank transfer or cash settlement (subject to HMRC anti-money laundering ID compliance).",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to pay VAT when buying gold bullion in the UK?",
        answer:
          "No. Under UK VAT Notice 701/21, investment gold bars with purity of not less than 995 thousandths and qualifying gold coins are zero-rated for VAT.",
      },
      {
        question: "What identification is required to sell scrap gold for cash?",
        answer:
          "In compliance with UK Anti-Money Laundering (AML) laws, transactions require one valid government photo ID (Passport or UK Driving Licence) and one proof of address dated within the last 3 months.",
      },
      {
        question: "What is 1 Tola of gold in grams?",
        answer:
          "One traditional South Asian tola equals exactly 11.6638 grams. At Niraj Jewellers, our electronic scales instantly toggle between metric grams and traditional tolas for client clarity.",
      },
    ],
  },
];
