"use client";

import Image from "next/image";

export function CadJourney() {
  const steps = [
    {
      num: 1,
      title: "1. Consultation & Vision Sketch",
      image: "/images/workshop/workshop-bench-velvet-trays.jpg",
      imageAlt: "Hayes atelier client consultation trays and bridal suites",
      caption: "Hayes Showroom Consultation",
      description:
        "Meet directly with our master goldsmiths in Hayes or on WhatsApp to explore precious metal purities, finger dimensions, and initial design sketches.",
    },
    {
      num: 2,
      title: "2. 3D CAD Modeling & Gemstone Selection",
      image: "/images/cad/bespoke-evil-eye-sapphire-cad.jpg",
      imageAlt: "3D CAD render of custom Evil Eye sapphire and diamond medallion",
      caption: "Photorealistic 3D CAD",
      description:
        "We generate a photorealistic 3D digital model and resin prototype, allowing loupe inspection of certified GIA/IGI diamonds before casting.",
    },
    {
      num: 3,
      title: "3. Hand-Forged in Hayes Workshop",
      image: "/images/workshop/goldsmith-bench-order-book-22ct.jpg",
      imageAlt: "Hand-chased 22ct gold choker on Hayes workshop bench with order ledger",
      caption: "In-House Goldsmith Bench",
      description:
        "Master goldsmiths cast in fine 22ct or 18ct precious metal, hand-set each gemstone, apply antique filigree finishes, and hand-polish on site.",
    },
    {
      num: 4,
      title: "4. London Assay Hallmarking & Collection",
      image: "/images/collections/64043268-7e68-48e4-8b74-f58fbd5ff884.jpeg",
      imageAlt: "Handcrafted 22ct gold royal heirloom ready for London Assay hallmarking",
      caption: "London Assay Stamped",
      description:
        "Sent directly to Goldsmiths' Hall for compulsory UK hallmark stamping, then presented in a velvet suite with full valuation documentation.",
    },
  ];

  return (
    <section id="bespoke" className="py-20 sm:py-28 bg-[#FAF9F5] texture-ivory-paper border-t border-[#E8DEC8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#996515]">
            <span>The Bespoke Goldsmith Timeline</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight">
            From Raw Bullion to Royal Heirloom
          </h2>
          <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal">
            Bespoke artistry forged with micron precision
          </p>
          <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed">
            Every bespoke commission is designed, sculpted, and finished in our West London atelier on Uxbridge Road.
          </p>
        </div>

        {/* Linear Step Timeline Architecture */}
        <div className="relative">
          {/* Subtle Horizontal Connecting Rule for Desktop */}
          <div
            className="hidden lg:block absolute top-[110px] left-[12%] right-[12%] h-[1.5px] bg-gradient-to-r from-[#DFBF7A]/40 via-[#996515]/60 to-[#DFBF7A]/40 z-0"
            aria-hidden="true"
          />

          {/* Vertical Connecting Spine for Mobile */}
          <div
            className="md:hidden absolute top-6 bottom-6 left-3.5 w-[2px] bg-gradient-to-b from-[#DFBF7A] via-[#996515] to-[#DFBF7A] z-0"
            aria-hidden="true"
          />

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((item) => (
              <div
                key={item.num}
                className="relative pl-8 md:pl-0 flex flex-col"
              >
                {/* Mobile Chronological Node Marker (Hammered Gold Finish) */}
                <div
                  className="md:hidden absolute left-0 top-5 w-7 h-7 rounded-full texture-hammered-gold border border-white flex items-center justify-center text-[10px] font-bold text-[#141416] shadow-md z-20"
                  aria-hidden="true"
                >
                  {item.num}
                </div>

                <div className="bg-white rounded-2xl border border-[#E8DEC8] hover:border-[#D4AF37] p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 flex flex-col justify-between group h-full">
                  <div>
                    {/* Step Image */}
                    <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden mb-4 sm:mb-5 border border-[#E8DEC8] bg-[#FAF7F2] group-hover:border-[#D4AF37] transition-colors">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-sm border border-[#D4AF37]/40 text-[10px] font-mono font-semibold text-[#DFBF7A]">
                        {item.caption}
                      </div>
                    </div>

                    {/* Title with Step Number Prepend (No Day Pills, No Redundant Icons) */}
                    <h3 className="font-serif text-base sm:text-lg font-medium text-[#141416] group-hover:text-[#996515] transition-colors mb-2">
                      {item.title}
                    </h3>

                    {/* Single Clean Craft Description Sentence */}
                    <p className="text-xs sm:text-[13px] text-[#5A5960] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Timeline Progress Pill */}
                  <div className="mt-4 sm:mt-6 pt-3 border-t border-[#EFE8DA] flex items-center justify-between text-[11px] text-[#8C6212] font-semibold">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full texture-hammered-card border-hammered-gold text-[10px]">
                      Step 0{item.num} of 04
                    </span>
                    <span className="text-[#C5A059] group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
