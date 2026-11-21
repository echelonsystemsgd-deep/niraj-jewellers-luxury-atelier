export interface RepairService {
  id: string;
  title: string;
  turnaround: string;
  priceDisplay: string;
  pricingHint: string;
  image: string;
  imageAlt: string;
  summary: string;
  details: string[];
}

export const REPAIR_SERVICES: RepairService[] = [
  {
    id: "laser-ring-resizing",
    title: "Precision Laser Ring Resizing",
    turnaround: "Same-Day (2–4 Hours)",
    priceDisplay: "From £35 / ring",
    pricingHint: "From £35 / ring • Exact quote on inspection",
    image: "/images/collections/posters/482c070d-7614-41e2-8811-d76441020509.jpg",
    imageAlt: "Goldsmith bench precision ring sizing in Hayes",
    summary: "Seamless ring sizing for 22ct gold, 18ct white/yellow/rose gold, and platinum with laser welding that preserves hallmark stamps.",
    details: [
      "Precision laser welding preserving official hallmarks",
      "Specializing in high-purity 22ct Asian gold & platinum",
      "Complimentary polish and clean included",
    ],
  },
  {
    id: "claw-retipping-stone-resetting",
    title: "Diamond Claw Retipping & Stone Resetting",
    turnaround: "24–48 Hours",
    priceDisplay: "From £45 / claw",
    pricingHint: "From £45 / claw • Exact quote on inspection",
    image: "/images/collections/posters/585f854b-a2a7-4608-83e8-29eded6d04f6.jpg",
    imageAlt: "Microscope stone resetting and claw retipping bench",
    summary: "Reinforce worn claws and securely reset loose or missing diamonds, rubies, and emeralds under high magnification.",
    details: [
      "Heavy-duty laser retipping preventing gemstone loss",
      "Microscope inspection under 40x magnification",
      "GIA/IGI color and clarity matched stones",
    ],
  },
  {
    id: "ultrasonic-restoration-polishing",
    title: "Ultrasonic Steam Restoration & Polishing",
    turnaround: "While You Wait (30 Mins)",
    priceDisplay: "From £25 / piece",
    pricingHint: "Complimentary with repair / £25 standalone",
    image: "/images/collections/fc4f5f26-d64e-490e-87dc-23058ec58235.jpeg",
    imageAlt: "Ultrasonic cleaning and mirror polish restoration",
    summary: "Restore showroom mirror lustre to bridal suites, vintage heirlooms, and daily jewelry with ultrasonic steam cavitation.",
    details: [
      "3-stage mechanical buffing removing hairline scratches",
      "Pressurized ultrasonic cavitation bath",
      "Rhodium electroplating available for white gold",
    ],
  },
  {
    id: "luxury-watch-servicing",
    title: "Watch Battery, Pressure Testing & Link Sizing",
    turnaround: "15 Minutes While You Wait",
    priceDisplay: "From £15 / watch",
    pricingHint: "From £15 / watch • Completed while you wait",
    image: "/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb.jpeg",
    imageAlt: "Watch battery replacement and link adjustments",
    summary: "Swiss silver-oxide battery replacements, water-resistance gasket testing, and bracelet link removal for luxury timepieces.",
    details: [
      "Swiss Renata silver-oxide batteries with 2-year warranty",
      "Chamber pressure testing verification",
      "Precision friction and screw-pin bracelet sizing",
    ],
  },
];
