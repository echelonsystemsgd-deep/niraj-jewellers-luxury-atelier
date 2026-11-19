export interface FaqItem {
  id: string;
  category: "bespoke" | "hallmarks" | "repairs" | "bullion" | "visits";
  question: string;
  answer: string;
}

export const FAQS_FULL_DIRECTORY: FaqItem[] = [
  // 1. Bespoke & CAD
  {
    id: "bespoke-1",
    category: "bespoke",
    question: "How does a custom bespoke jewellery commission work?",
    answer:
      "Our bespoke journey begins with an initial consultation where you share your vision, sketches, or reference photos. Our CAD specialists engineer a photorealistic 3D model. Once you approve every prong and dimension, our master goldsmiths cast the piece in solid 22ct or 18ct gold, hand-set your gemstones, and submit the finished piece to the London Assay Office for official hallmarking.",
  },
  {
    id: "bespoke-2",
    category: "bespoke",
    question: "How long does a custom 22ct or 18ct piece take to make?",
    answer:
      "Standard bespoke commissions take 2 to 3 weeks from CAD sign-off to final hallmarked collection. For urgent wedding dates, our on-site Hayes workshop can accommodate express turnarounds of 5 to 7 working days upon consultation with our goldsmiths.",
  },
  {
    id: "bespoke-3",
    category: "bespoke",
    question: "Can I bring my own heirloom gold to melt down into a modern bridal set?",
    answer:
      "Yes. We test and weigh your ancestral 22ct or 24ct gold directly before you on trade-approved electronic scales at 136 Uxbridge Road. Old gold is refined in-house or credited against live LBMA bullion spot rates toward your new design, saving up to 35% on metal costs.",
  },
  {
    id: "bespoke-4",
    category: "bespoke",
    question: "What deposit is required, and what if I want changes to the 3D model?",
    answer:
      "Design iterations during the 3D CAD modelling phase are unlimited and completely free. We adjust prong heights, band dimensions, and stone layouts until you are 100% delighted. A 30% deposit is only taken once you approve the 3D render, with the remaining 70% settled upon collection.",
  },

  // 2. Hallmarks & Purity
  {
    id: "hallmarks-1",
    category: "hallmarks",
    question: "What is the difference between 22ct (916) and 24ct (999) gold?",
    answer:
      "24ct gold is 99.9% pure bullion. While magnificent in purity, pure 24ct is too soft for structural bridal suites or intricate daily-wear prong settings. 22ct gold contains 91.6% pure gold alloyed with copper and silver, imparting the rich warm imperial yellow tone South Asian jewellery is renowned for while providing the structural integrity required to secure diamonds and uncut Polki.",
  },
  {
    id: "hallmarks-2",
    category: "hallmarks",
    question: "Is all jewellery at Niraj Jewellers Ltd hallmarked by the London Assay Office?",
    answer:
      "Yes. In compliance with the British Hallmarking Act 1973, every single article of gold jewellery sold at Niraj Jewellers Ltd is submitted to the Goldsmiths' Company Assay Office in London for independent metallurgical assaying and struck with the official 916 (22ct) or 750 (18ct) hallmark stamp.",
  },
  {
    id: "hallmarks-3",
    category: "hallmarks",
    question: "Can I test my gold jewellery in front of me at the showroom?",
    answer:
      "Absolutely. We maintain electronic gold purity testing instruments and trade-calibrated scales at our Hayes showroom counter. We happily verify the karatage and exact gram weight of your pieces in your presence with complete transparency.",
  },

  // 3. Workshop Repairs
  {
    id: "repairs-1",
    category: "repairs",
    question: "Can ring resizing be done on the same day in Hayes?",
    answer:
      "Yes. Most standard ring resizings in 22ct gold, 18ct white/yellow/rose gold, and platinum are completed in 2 to 4 hours while you wait or have lunch nearby. All repairs are executed inside our on-site 136 Uxbridge Road workshop.",
  },
  {
    id: "repairs-2",
    category: "repairs",
    question: "Will laser welding damage delicate diamonds, emeralds, or hallmarks?",
    answer:
      "No. Unlike traditional gas torches that heat the entire ring up to 800°C, our pinpoint laser welders localize heat within a 0.2mm radius. Gemstones remain safely seated, and UK London Assay Office hallmarks are meticulously bypassed and preserved.",
  },
  {
    id: "repairs-3",
    category: "repairs",
    question: "Do you ever ship jewellery out to third-party trade workshops?",
    answer:
      "Never. 100% of repairs, welding, stone resets, and polishing take place securely inside our in-house Hayes atelier. Your precious heirloom never leaves our premises or gets risked with external couriers.",
  },

  // 4. Bullion Trading
  {
    id: "bullion-1",
    category: "bullion",
    question: "How do you calculate gold scrap and bullion buying prices?",
    answer:
      "Our valuation engine streams live London Bullion Market Association (LBMA) spot prices updated continuously. We test purity, weigh to two decimal places on government-stamped scales, and pay competitive direct wholesale trade rates with zero hidden smelting deductions.",
  },
  {
    id: "bullion-2",
    category: "bullion",
    question: "What identification is required to buy or sell gold bullion in London?",
    answer:
      "Under UK HMRC Anti-Money Laundering (AML) regulations, clients transacting bullion or high-value gold sales must provide valid government-issued photographic identification (Passport or UK Driving Licence) alongside proof of address (utility bill or bank statement dated within 3 months).",
  },

  // 5. Visits & Appointments
  {
    id: "visits-1",
    category: "visits",
    question: "Do I need to book an appointment to visit your Hayes showroom?",
    answer:
      "Walk-in visitors are always warmly welcome during our standard opening hours (Monday to Saturday, 10:30 AM to 6:00 PM; Sunday 11:30 AM to 5:00 PM; closed Tuesdays). However, for extensive bespoke bridal consultations or diamond viewing, booking in advance ensures a dedicated specialist.",
  },
  {
    id: "visits-2",
    category: "visits",
    question: "What payment methods are accepted at Niraj Jewellers Ltd?",
    answer:
      "We accept all major UK debit and credit cards (Visa, Mastercard, American Express), direct bank transfers (CHAPS / Faster Payments), and verified trade bullion exchanges. All transactions include an itemized VAT invoice and Certificate of Authenticity.",
  },
];
