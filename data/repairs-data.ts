export interface RepairService {
  id: string;
  title: string;
  turnaround: string;
  iconName: string;
  summary: string;
  details: string[];
  pricingHint: string;
}

export const REPAIR_SERVICES: RepairService[] = [
  {
    id: "laser-ring-resizing",
    title: "Precision Laser Ring Resizing",
    turnaround: "Same-Day (2–4 Hours) / While You Wait",
    iconName: "Maximize2",
    summary: "Seamless ring sizing for 22ct gold, 18ct white/yellow/rose gold, and platinum without weak solder joints.",
    details: [
      "Precision laser welding that preserves hallmark stamps",
      "Platinum, 18ct, and 22ct Asian high-purity gold specialization",
      "Complimentary sonic cleaning and rhodium plating with every sizing",
    ],
    pricingHint: "From £35 • Exact quote on inspection",
  },
  {
    id: "claw-retipping-stone-resetting",
    title: "Diamond Claw Retipping & Stone Resetting",
    turnaround: "24–48 Hours",
    iconName: "ShieldCheck",
    summary: "Reinforce worn prongs and reset loose or missing diamonds, rubies, and emeralds securely.",
    details: [
      "Heavy-duty laser retipping preventing diamond loss",
      "Microscope stone inspection under 40x magnification",
      "Exact GIA/IGI diamond color and clarity matching",
    ],
    pricingHint: "From £45 per claw • Free 10-point prong security check",
  },
  {
    id: "ultrasonic-restoration-polishing",
    title: "Ultrasonic Steam Restoration & Polishing",
    turnaround: "While You Wait (30 Minutes)",
    iconName: "Sparkles",
    summary: "Restore the dazzling showroom mirror shine to antique heirlooms, bridal suites, and everyday rings.",
    details: [
      "3-stage mechanical buffing to remove fine scratches",
      "80°C pressurized ultrasonic cavitation bath",
      "Bright-white rhodium electroplating for white gold",
    ],
    pricingHint: "From £25 • Included free with any repair work",
  },
  {
    id: "luxury-watch-servicing",
    title: "Watch Battery, Pressure Testing & Link Adjustments",
    turnaround: "15 Minutes While You Wait",
    iconName: "Watch",
    summary: "Swiss battery replacements, water-resistance gasket sealing, and stainless steel / gold bracelet link adjustments.",
    details: [
      "Swiss Renata silver-oxide batteries with 2-year warranty",
      "5ATM/10ATM pressure test chamber verification",
      "Precision screw-pin and friction-pin link sizing for Rolex, Omega, Cartier",
    ],
    pricingHint: "From £15 • Done in-showroom",
  },
];
