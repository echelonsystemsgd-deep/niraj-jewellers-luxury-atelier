"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { sound } from "@/lib/sound";
import { Flame, ShieldCheck, Eye, ArrowDown, Sparkles } from "lucide-react";

interface CinematicHeroProps {
  onInspect3D: (pieceName: string) => void;
  onExploreArchive: () => void;
}

type Alloy = "22ct" | "18ct" | "platinum";

interface AlloyData {
  name: string;
  purity: string;
  hallmark: string;
  density: string;
  colorHex: string;
  accentHex: string;
  benchNote: string;
}

const ALLOY_INFO: Record<Alloy, AlloyData> = {
  "22ct": {
    name: "22ct Royal Gold",
    purity: "91.6% Fine Gold (916 Hallmarked)",
    hallmark: "London Assay Leopard's Head · 916",
    density: "19.32 g/cm³ solid cast non-hollow mass",
    colorHex: "#D4AF37",
    accentHex: "#F5C344",
    benchNote: "Deep saturated imperial warmth; traditional lost-wax cast for South Asian bridal prestige.",
  },
  "18ct": {
    name: "18ct Rose Gold",
    purity: "75.0% Fine Gold (750 Hallmarked)",
    hallmark: "London Assay Leopard's Head · 750",
    density: "15.58 g/cm³ bonded copper alloy",
    colorHex: "#C58F78",
    accentHex: "#E5A992",
    benchNote: "Warm coppery champagne tone; optimized for modern solitaire claws and diamond contrast.",
  },
  platinum: {
    name: "950 Pure Platinum",
    purity: "95.0% Pure Platinum (950 Hallmarked)",
    hallmark: "London Assay Orb & Cross · 950",
    density: "21.45 g/cm³ high-density noble metal",
    colorHex: "#D8DEE4",
    accentHex: "#F0F4F8",
    benchNote: "Immense physical gravitas; unyielding tensile strength for lifetime tension settings.",
  },
};

export function CinematicHero({ onInspect3D, onExploreArchive }: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [progress, setProgress] = useState(0);
  const [activeAlloy, setActiveAlloy] = useState<Alloy>("22ct");
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const totalFrames = 72;

  // Draw procedural frame representing the goldsmith benchwork & molten gold forge
  const drawFrame = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number, frameIdx: number, alloy: Alloy) => {
      ctx.clearRect(0, 0, width, height);

      const t = frameIdx / totalFrames; // 0 to 1
      const cx = width / 2;
      const cy = height / 2;

      // 1. Subterranean Crucible Backdrop
      const bgGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, width * 0.7);
      bgGrad.addColorStop(0, "#1F1C18");
      bgGrad.addColorStop(0.6, "#141416");
      bgGrad.addColorStop(1, "#0D0C0B");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Anvil & Architectural Bench Grid Lines
      ctx.strokeStyle = "rgba(232, 222, 200, 0.08)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 3. Goldsmith Bench Ring / Pendant in active scrub rotation
      const baseRadius = Math.min(width, height) * 0.28;
      const angle = t * Math.PI * 2;
      const alloyMeta = ALLOY_INFO[alloy];

      ctx.save();
      ctx.translate(cx, cy);

      // Outer Glow from 1064°C annealing
      const glowGrad = ctx.createRadialGradient(0, 0, baseRadius * 0.4, 0, 0, baseRadius * 1.5);
      glowGrad.addColorStop(0, `${alloyMeta.colorHex}44`);
      glowGrad.addColorStop(0.5, `${alloyMeta.colorHex}15`);
      glowGrad.addColorStop(1, "transparent");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 1.6, 0, Math.PI * 2);
      ctx.fill();

      // Rotating Solid Ring Band (Cast Metallurgy)
      ctx.rotate(angle);

      // Shadow
      ctx.shadowColor = alloyMeta.accentHex;
      ctx.shadowBlur = 15;

      // Heavy Cast Ring Body
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius, 0, Math.PI * 2);
      ctx.lineWidth = 32;
      ctx.strokeStyle = alloyMeta.colorHex;
      ctx.stroke();

      // Inner Highlight Rim
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius - 14, 0, Math.PI * 2);
      ctx.lineWidth = 2;
      ctx.strokeStyle = alloyMeta.accentHex;
      ctx.stroke();

      // Outer Hallmark Chisel Facets
      ctx.shadowBlur = 0;
      for (let i = 0; i < 12; i++) {
        const facetAngle = (i / 12) * Math.PI * 2;
        const fx = Math.cos(facetAngle) * baseRadius;
        const fy = Math.sin(facetAngle) * baseRadius;
        ctx.fillStyle = "#FAF9F5";
        ctx.beginPath();
        ctx.arc(fx, fy, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Centerpiece: Cabochon Royal Stone / Intaglio Seal
      const gemGrad = ctx.createRadialGradient(-10, -10, 5, 0, 0, 45);
      gemGrad.addColorStop(0, "#C71E42");
      gemGrad.addColorStop(0.7, "#881337");
      gemGrad.addColorStop(1, "#380614");
      ctx.fillStyle = gemGrad;
      ctx.beginPath();
      ctx.arc(0, 0, 42, 0, Math.PI * 2);
      ctx.fill();

      // Gem Specular Highlight
      ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
      ctx.beginPath();
      ctx.ellipse(-14, -14, 12, 6, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // 4. Molten Benchwork Sparks (72 dynamic procedural particles)
      const particleSeed = Math.floor(frameIdx * 3);
      for (let p = 0; p < 24; p++) {
        const pAngle = ((p * 15 + particleSeed * 7) % 360) * (Math.PI / 180);
        const pDist = baseRadius * (0.8 + ((p * 17 + frameIdx * 3) % 70) / 100);
        const px = cx + Math.cos(pAngle) * pDist;
        const py = cy + Math.sin(pAngle) * pDist;
        const pSize = 1 + (p % 3);

        ctx.fillStyle = p % 2 === 0 ? alloyMeta.accentHex : "#FFF";
        ctx.beginPath();
        ctx.arc(px, py, pSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Architectural Framing Brackets
      ctx.strokeStyle = "#C6A75E";
      ctx.lineWidth = 1;
      const bracketLen = 16;
      const m = 24;

      // Top-Left
      ctx.beginPath();
      ctx.moveTo(m, m + bracketLen);
      ctx.lineTo(m, m);
      ctx.lineTo(m + bracketLen, m);
      ctx.stroke();

      // Top-Right
      ctx.beginPath();
      ctx.moveTo(width - m - bracketLen, m);
      ctx.lineTo(width - m, m);
      ctx.lineTo(width - m, m + bracketLen);
      ctx.stroke();

      // Bottom-Left
      ctx.beginPath();
      ctx.moveTo(m, height - m - bracketLen);
      ctx.lineTo(m, height - m);
      ctx.lineTo(m + bracketLen, height - m);
      ctx.stroke();

      // Bottom-Right
      ctx.beginPath();
      ctx.moveTo(width - m - bracketLen, height - m);
      ctx.lineTo(width - m, height - m);
      ctx.lineTo(width - m, height - m - bracketLen);
      ctx.stroke();
    },
    [totalFrames]
  );

  // Sync with scroll and high-DPI canvas
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const clamped = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);

      const frame = Math.min(Math.max(Math.floor(clamped * (totalFrames - 1)) + 1, 1), totalFrames);
      setProgress(Math.round(clamped * 100));
      setCurrentFrame(frame);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalFrames]);

  // Redraw canvas whenever frame or alloy changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = Math.min(canvas.parentElement?.clientWidth || 500, 560);

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;

    ctx.scale(dpr, dpr);
    drawFrame(ctx, size, size, currentFrame, activeAlloy);
  }, [currentFrame, activeAlloy, drawFrame]);

  const handleAlloyChange = (alloy: Alloy) => {
    sound.playTick();
    setActiveAlloy(alloy);
  };

  const handleScrubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setCurrentFrame(val);
    setProgress(Math.round(((val - 1) / (totalFrames - 1)) * 100));
  };

  return (
    <section ref={containerRef} className="relative w-full bg-[#FAF9F5] border-b border-[#E7E2DA]">
      {/* Sticky Hero Track Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        {/* Top Header Badge */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E7E2DA] bg-white text-[#7A705E] font-mono text-[10px] sm:text-[11px] tracking-[0.24em] uppercase mb-4">
            <Sparkles className="w-3 h-3 text-[#C6A75E]" />
            <span>MAYFAIR VAULT · BESPOKE BENCHWORK · HAYES</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141416] tracking-tight leading-[1.1] mb-4">
            Forged in Silence. <br />
            <span className="font-light italic text-[#7A705E]">Permanent Metallurgy.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#57534E] font-sans max-w-xl font-normal leading-relaxed">
            Ultra-pure 22ct Royal Gold, syndicate Polki bridal suites, and solid-mass lost-wax castings.
            Crafted at our Hayes benchmark since 1984 under the London Assay standard.
          </p>
        </div>

        {/* Center Interactive Frame Scrub Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Metallurgical Specs & Alloy Switcher */}
          <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col gap-6">
            <div className="border border-[#E7E2DA] bg-white p-5">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#7A705E] block mb-3">
                [ 01 / ALLOY MATRIX ]
              </span>
              <div className="flex flex-col gap-2">
                {(["22ct", "18ct", "platinum"] as Alloy[]).map((alloy) => {
                  const meta = ALLOY_INFO[alloy];
                  const isActive = activeAlloy === alloy;
                  return (
                    <button
                      key={alloy}
                      type="button"
                      onClick={() => handleAlloyChange(alloy)}
                      className={`text-left p-3 border transition-all cursor-pointer ${
                        isActive
                          ? "border-[#141416] bg-[#141416] text-[#FAF9F5]"
                          : "border-[#E7E2DA] bg-white text-[#141416] hover:border-[#A89F91]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-sm font-semibold tracking-wide">
                          {meta.name}
                        </span>
                        <span
                          className="w-3 h-3 rounded-full border border-black/20"
                          style={{ backgroundColor: meta.colorHex }}
                        />
                      </div>
                      <span
                        className={`text-[10px] font-mono tracking-wider block mt-1 ${
                          isActive ? "text-[#C6A75E]" : "text-[#7A705E]"
                        }`}
                      >
                        {meta.purity}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Metallurgy Card */}
            <div className="border border-[#E7E2DA] bg-white p-5 font-mono text-xs">
              <span className="text-[10px] text-[#7A705E] tracking-[0.2em] uppercase block mb-2">
                [ ASSAY VERIFICATION ]
              </span>
              <div className="flex items-center gap-2 text-[#141416] font-semibold mb-1">
                <ShieldCheck className="w-4 h-4 text-[#C6A75E]" />
                <span className="text-[11px]">{ALLOY_INFO[activeAlloy].hallmark}</span>
              </div>
              <p className="text-[11px] text-[#7A705E] font-sans mt-2 leading-relaxed">
                {ALLOY_INFO[activeAlloy].benchNote}
              </p>
              <div className="mt-3 pt-3 border-t border-[#E7E2DA] text-[10px] text-[#A89F91]">
                DENSITY: {ALLOY_INFO[activeAlloy].density}
              </div>
            </div>
          </div>

          {/* Center Column: The 72-Frame Canvas Wheel & Hotspots */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center">
            {/* Top Micro-HUD */}
            <div className="w-full flex items-center justify-between font-mono text-[11px] tracking-[0.2em] text-[#7A705E] px-2 mb-2">
              <span>BENCH FRAME [ {String(currentFrame).padStart(2, "0")} / 72 ]</span>
              <span className="text-[#C6A75E] flex items-center gap-1">
                <Flame className="w-3 h-3" /> 1064°C FORGE
              </span>
            </div>

            {/* Canvas Vitrine with Relative Hotspot Pins */}
            <div className="relative border border-[#141416] bg-[#141416] shadow-2xl p-2 max-w-full">
              <canvas
                ref={canvasRef}
                className="block mx-auto cursor-grab active:cursor-grabbing touch-none"
              />

              {/* Interactive Hotspot 1: Solitaire Bezel */}
              <button
                type="button"
                onClick={() => {
                  sound.playTick();
                  setActiveHotspot(activeHotspot === 1 ? null : 1);
                }}
                className="absolute top-[32%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#141416]/80 border border-[#FAF9F5] text-[#FAF9F5] flex items-center justify-center text-[10px] font-mono hover:scale-110 transition-transform cursor-pointer"
                title="Inspect Royal Cabochon Bezel"
              >
                +
              </button>
              {activeHotspot === 1 && (
                <div className="absolute top-[20%] left-[52%] bg-white/95 backdrop-blur-md border border-[#141416] p-3 text-[10px] font-mono text-[#141416] shadow-xl w-48 z-20">
                  <strong className="block text-[#C6A75E] uppercase mb-1">
                    [ ROYAL CABOCHON BEZEL ]
                  </strong>
                  Microscope-seated tension setting; lost-wax cast with 0 hollow cavities.
                </div>
              )}

              {/* Interactive Hotspot 2: Solid Cast Shank */}
              <button
                type="button"
                onClick={() => {
                  sound.playTick();
                  setActiveHotspot(activeHotspot === 2 ? null : 2);
                }}
                className="absolute bottom-[28%] right-[32%] w-6 h-6 rounded-full bg-[#141416]/80 border border-[#C6A75E] text-[#C6A75E] flex items-center justify-center text-[10px] font-mono hover:scale-110 transition-transform cursor-pointer"
                title="Inspect 22ct Cast Mass"
              >
                +
              </button>
              {activeHotspot === 2 && (
                <div className="absolute bottom-[36%] right-[36%] bg-white/95 backdrop-blur-md border border-[#141416] p-3 text-[10px] font-mono text-[#141416] shadow-xl w-48 z-20">
                  <strong className="block text-[#C6A75E] uppercase mb-1">
                    [ SOLID CAST SHANK ]
                  </strong>
                  38.5g solid 916 gold mass. Parabolic comfort-fit interior bore.
                </div>
              )}
            </div>

            {/* Bottom Scrub Track Control */}
            <div className="w-full mt-4 flex flex-col gap-2">
              <input
                type="range"
                min="1"
                max={totalFrames}
                value={currentFrame}
                onChange={handleScrubChange}
                className="w-full accent-[#C6A75E] cursor-ew-resize h-1.5 bg-[#E7E2DA] rounded-none"
                aria-label="Scrub bench sequence"
              />
              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-[#7A705E]">
                <span>SCRUB PROGRESS: {progress}%</span>
                <span>SCROLL WHEEL OR DRAG SLIDER</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Actions */}
          <div className="lg:col-span-3 order-3 flex flex-col gap-4">
            <div className="border border-[#E7E2DA] bg-white p-6 flex flex-col gap-4">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#7A705E]">
                [ 02 / INSPECT & RESERVE ]
              </span>
              <h2 className="font-serif text-xl font-semibold text-[#141416] leading-snug">
                22ct Imperial Bridal Masterwork
              </h2>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Examine full 360° PBR reflectance, light dispersion, and British hallmarking before
                scheduling an in-person bench viewing at our Hayes showroom.
              </p>

              <button
                type="button"
                onClick={() => {
                  sound.playTick();
                  onInspect3D("22ct Imperial Bridal Masterwork");
                }}
                className="w-full py-3 bg-[#141416] text-[#FAF9F5] hover:bg-[#C6A75E] hover:text-[#141416] transition-colors text-xs font-mono tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-2 cursor-pointer border border-[#141416]"
              >
                <Eye className="w-4 h-4" />
                <span>INSPECT 3D PIECE ⊙</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playTick();
                  onExploreArchive();
                }}
                className="w-full py-3 bg-white text-[#141416] border border-[#E7E2DA] hover:border-[#141416] transition-colors text-xs font-mono tracking-[0.2em] uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>EXPLORE ARCHIVE</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Walk-in Reassurance */}
            <div className="p-4 border border-[#E7E2DA] bg-[#FAF9F5] font-mono text-[11px] text-[#7A705E] flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#C6A75E] shrink-0 mt-0.5" />
              <span>
                No appointment strictly required. Drop into our Hayes workshop anytime during
                operating hours.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
