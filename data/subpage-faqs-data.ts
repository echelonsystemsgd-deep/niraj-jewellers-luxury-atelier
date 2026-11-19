export interface SubpageFaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const BESPOKE_FAQS: SubpageFaqItem[] = [
  {
    category: "Commission Process",
    question: "How long does a custom 22ct or 18ct bespoke piece take to make?",
    answer:
      "Standard bespoke pieces take 2 to 3 weeks from approved 3D CAD design to final hallmarked collection. For urgent wedding dates, our on-site Hayes workshop can accommodate rush turnarounds of 5 to 7 working days upon consultation with Master Jeweller Viky.",
  },
  {
    category: "Payment & Security",
    question: "What deposit is required for a bespoke 3D CAD commission?",
    answer:
      "We require an initial deposit of 30% only after you have reviewed and formally approved the photorealistic 3D CAD video render. The remaining 70% balance is settled upon your in-person inspection and London Assay Office hallmarking sign-off in our Hayes showroom.",
  },
  {
    category: "Ancestral Gold",
    question: "Can I bring my own heirloom gold to melt down into a modern bridal set?",
    answer:
      "Yes. We test and weigh your ancestral 22ct or 24ct gold directly in front of you on trade-approved electronic scales at 136 Uxbridge Road. Old gold is refined in-house or credited against live LBMA bullion spot rates toward your custom design, saving up to 35% on metal costs.",
  },
  {
    category: "CAD Guarantee",
    question: "What if I want changes to the design after seeing the 3D model?",
    answer:
      "Design iterations are unlimited and completely free during the 3D CAD modelling phase. We adjust prong heights, band dimensions, and stone layouts until you are 100% delighted before any gold is cast.",
  },
];

export const REPAIRS_FAQS: SubpageFaqItem[] = [
  {
    category: "Turnaround Time",
    question: "Can ring resizing be done on the same day in Hayes?",
    answer:
      "Yes. Most standard ring resizings in 22ct gold, 18ct white/yellow/rose gold, and platinum are completed in 2 to 4 hours while you wait or have lunch nearby. All repairs are executed on-site at 136 Uxbridge Road by Master Jeweller Viky.",
  },
  {
    category: "Safety & Gemstones",
    question: "Will laser welding damage delicate diamonds, emeralds, or London hallmarks?",
    answer:
      "No. Unlike traditional gas torches that heat the entire ring up to 800°C, our pinpoint laser welders localize heat within a 0.2mm radius. Gemstones remain safely seated, and UK London Assay Office hallmarks are meticulously bypassed and preserved.",
  },
  {
    category: "Pricing & Quotes",
    question: "How much does jewellery repair cost at Niraj Jewellers?",
    answer:
      "Laser ring resizing starts from £35, diamond claw retipping from £45 per claw, and ultrasonic cleaning with rhodium replating from £25. We provide a transparent, fixed written quote immediately upon examining your piece under the microscope.",
  },
  {
    category: "Off-Site Risk",
    question: "Do you ship repaired jewellery out to third-party workshops?",
    answer:
      "Never. 100% of repairs, welding, stone resets, and polishing take place securely inside our in-house Hayes atelier. Your precious heirloom never leaves our premises or gets risked with external couriers.",
  },
];

export const GOLD_RATES_FAQS: SubpageFaqItem[] = [
  {
    category: "Bullion Pricing",
    question: "How often are your gold rates updated?",
    answer:
      "Our bullion rates are synchronized with the London Bullion Market Association (LBMA) spot fixes and live market movements. Indicative rates per gram, tola (11.66g), and ounce are refreshed continuously throughout London trading hours.",
  },
  {
    category: "Tax & Compliance",
    question: "Are investment gold bars and British Sovereign coins exempt from VAT and Capital Gains Tax?",
    answer:
      "Yes. All investment-grade gold bars (99.5%+ fineness) and official gold coins are 100% VAT-free under UK HMRC rules. Furthermore, British Gold Sovereigns and Britannias are UK legal tender, making all realized profit 100% free of UK Capital Gains Tax (CGT).",
  },
  {
    category: "Scrap Gold Cash",
    question: "What documents do I need to sell scrap gold for immediate cash or bank transfer?",
    answer:
      "Under UK Anti-Money Laundering legislation, sellers must present one valid government photo ID (Passport or UK Driving Licence) and one proof of address (utility bill or bank statement) issued within the last 3 months.",
  },
  {
    category: "Tola Measurement",
    question: "How many grams are in 1 Tola of gold?",
    answer:
      "One traditional South Asian tola equals exactly 11.6638 grams. Our trade-approved digital scales instantly toggle between metric grams, troy ounces, and tolas for your total clarity.",
  },
];
