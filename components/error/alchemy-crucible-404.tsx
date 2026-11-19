"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import {
  Flame,
  Sparkles,
  ArrowLeft,
  RotateCcw,
  MessageCircle,
  Compass,
  ShieldCheck,
  Scale,
  Gem,
} from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
  gravity: number;
  drag: number;
}

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  maxAlpha: number;
  pulseSpeed: number;
  t: number;
}

export function AlchemyCrucible404() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isBoosting, setIsBoosting] = useState(false);
  const [isSolidified, setIsSolidified] = useState(false);
  const [temperature, setTemperature] = useState(1064); // Gold melting point in °C
  const [soundEnabled, setSoundEnabled] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  // References for dynamic particle sources
  const crucibleAngleRef = useRef(24);
  const targetAngleRef = useRef(24);
  const streamActiveRef = useRef(true);

  // Handle WhatsApp inquiry link
  const whatsappConsultLink = buildWhatsAppLink({
    source: "404_alchemist_crucible",
    visitPurpose: "Bespoke Casting Consultation",
    customNote:
      "Hello, I arrived at the 404 Alchemist Forge on your website. I am looking for a bespoke piece or collection piece to commission.",
  });

  // Boost temperature and trigger massive spark shower
  const handleBoostSmelter = useCallback(() => {
    if (isSolidified) {
      // Reheat ingot back to molten state
      setIsSolidified(false);
      setTemperature(1064);
      streamActiveRef.current = true;
      targetAngleRef.current = 28;
      return;
    }

    setIsBoosting(true);
    setTemperature(1250);
    targetAngleRef.current = 34;

    setTimeout(() => {
      setIsBoosting(false);
      setTemperature(1064);
      targetAngleRef.current = 24;
    }, 1200);
  }, [isSolidified]);

  // Toggle solid hallmarked gold vs molten gold
  const handleToggleSolidify = useCallback(() => {
    setIsSolidified((prev) => {
      const next = !prev;
      if (next) {
        setTemperature(24); // Room temperature solid ingot
        targetAngleRef.current = 0; // Return crucible upright
        streamActiveRef.current = false;
      } else {
        setTemperature(1064);
        targetAngleRef.current = 24;
        streamActiveRef.current = true;
      }
      return next;
    });
  }, []);

  // Canvas particle engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener("resize", handleResize);

    const sparks: Spark[] = [];
    const embers: Ember[] = [];

    // Palette of molten gold heat
    const sparkColors = [
      "#FFFFFF", // White hot core
      "#FFF8E7", // Diamond luminescence
      "#FFDF73", // Radiant 22ct gold
      "#FFB800", // Imperial yellow gold
      "#FF8000", // Molten orange
      "#FF4500", // High heat red-orange
    ];

    // Spawn initial embers floating in ambient atmosphere
    const cssW = canvas.offsetWidth;
    const cssH = canvas.offsetHeight;
    for (let i = 0; i < 35; i++) {
      embers.push({
        x: Math.random() * cssW,
        y: Math.random() * cssH,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.3 - Math.random() * 0.6,
        size: Math.random() * 2.5 + 0.8,
        alpha: Math.random() * 0.6 + 0.1,
        maxAlpha: Math.random() * 0.7 + 0.2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        t: Math.random() * Math.PI * 2,
      });
    }

    // Impact coordinate where the molten gold strikes the anvil
    // Centered around 50% width, ~68% height of the canvas
    const getImpactPoint = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      return {
        x: w * 0.5 + 8,
        y: h * 0.68,
      };
    };

    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      const displayW = canvas.offsetWidth;
      const displayH = canvas.offsetHeight;

      ctx.clearRect(0, 0, displayW, displayH);

      // Smooth crucible tilt lerp
      crucibleAngleRef.current +=
        (targetAngleRef.current - crucibleAngleRef.current) * 0.06;

      const impact = getImpactPoint();

      // Spawn sparks if molten stream is active
      if (streamActiveRef.current) {
        const spawnCount = isBoosting ? 14 : 4;
        for (let i = 0; i < spawnCount; i++) {
          const angle =
            Math.PI * 1.05 +
            Math.random() * Math.PI * 0.9 +
            (Math.random() - 0.5) * 0.3;
          const speed = (isBoosting ? 6.5 : 3.8) * (0.6 + Math.random() * 0.8);
          sparks.push({
            x: impact.x + (Math.random() - 0.5) * 12,
            y: impact.y + (Math.random() - 0.5) * 4,
            vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 1.5,
            vy: Math.sin(angle) * speed - 1.2,
            size: Math.random() * (isBoosting ? 2.8 : 2.0) + 0.6,
            alpha: 1.0,
            decay: 0.015 + Math.random() * 0.025,
            color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
            gravity: 0.14,
            drag: 0.985,
          });
        }
      }

      // Update & Draw Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.vx *= s.drag;
        s.vy += s.gravity;
        s.vy *= s.drag;
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= s.decay;

        if (s.alpha <= 0 || s.y > displayH + 20) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, s.alpha);
        ctx.shadowBlur = 8;
        ctx.shadowColor = s.color;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Optional micro motion streak
        ctx.strokeStyle = s.color;
        ctx.lineWidth = s.size * 0.6;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 1.8, s.y - s.vy * 1.8);
        ctx.stroke();
        ctx.restore();
      }

      // Update & Draw Embers (Slow rising ambient golden motes)
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.t += e.pulseSpeed;
        e.x += e.vx + Math.sin(e.t) * 0.35;
        e.y += e.vy;

        // Reset if drifted off screen
        if (e.y < -20) {
          e.y = displayH + 10;
          e.x = Math.random() * displayW;
        }

        const currentAlpha =
          e.maxAlpha * (0.5 + 0.5 * Math.sin(e.t * 1.5));

        ctx.save();
        ctx.globalAlpha = Math.max(0, currentAlpha);
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#D4AF37";
        ctx.fillStyle = "#FFD700";
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw Anvil Impact Heat Flare
      if (streamActiveRef.current) {
        ctx.save();
        const flareRadius = isBoosting ? 65 : 40;
        const grad = ctx.createRadialGradient(
          impact.x,
          impact.y,
          2,
          impact.x,
          impact.y,
          flareRadius
        );
        grad.addColorStop(0, "rgba(255, 255, 240, 0.95)");
        grad.addColorStop(0.2, "rgba(255, 215, 0, 0.75)");
        grad.addColorStop(0.5, "rgba(255, 120, 0, 0.35)");
        grad.addColorStop(1, "rgba(212, 175, 55, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(impact.x, impact.y, flareRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [isBoosting]);

  return (
    <div className="relative min-h-screen bg-obsidian text-platinum flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden select-none">
      {/* Background Radial Luxury Forge Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Upper warm amber heat halo */}
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px] transition-all duration-700 ${
            isBoosting
              ? "bg-amber-500/25 scale-125"
              : isSolidified
              ? "bg-gold-500/5 scale-90"
              : "bg-gold-500/15"
          }`}
        />
        {/* Ingot floor glow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-600/10 rounded-full blur-[140px]" />
        {/* Subtle geometric workshop grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(212,175,55,0.08),rgba(9,9,11,0))] pointer-events-none" />
      </div>

      {/* Main Alchemist Forge Stage Container */}
      <div className="relative max-w-4xl w-full z-10 space-y-6">
        {/* Top Atelier Telemetry Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 rounded-2xl bg-[#141416]/90 border border-gold-500/20 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-3">
            {/* Live Heat Indicator Pill */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gold-950/60 border border-gold-500/40 text-gold-300 text-xs font-mono">
              <span
                className={`w-2 h-2 rounded-full ${
                  isSolidified
                    ? "bg-blue-400"
                    : isBoosting
                    ? "bg-red-500 animate-ping"
                    : "bg-emerald-400 animate-pulse"
                }`}
              />
              <span className="font-semibold uppercase tracking-wider">
                {isSolidified
                  ? "INGOT SOLIDIFIED (ROOM TEMP)"
                  : isBoosting
                  ? "HIGH-HEAT SMELTER BOOST"
                  : "SMELTING 22CT ALLOY"}
              </span>
            </div>

            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="hidden sm:inline text-xs font-mono text-zinc-400">
              PYROMETER: <strong className="text-gold-300">{temperature}°C</strong>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <span className="hidden md:inline">
              LONDON ASSAY OFFICE • 916 GOLD
            </span>
            <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-gold-400 font-bold">
              ERROR 404
            </span>
          </div>
        </div>

        {/* ================= THE CRUCIBLE & ANVIL INTERACTIVE ARENA ================= */}
        <div className="relative w-full h-[400px] sm:h-[460px] rounded-3xl bg-gradient-to-b from-[#121215] to-[#0B0B0E] border border-gold-500/30 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.12)]">
          {/* Particle Canvas Layer for Dancing Sparks & Floating Embers */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
          />

          {/* Background Ambient Forge Glow behind Anvil */}
          <div
            className={`absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl transition-opacity duration-700 pointer-events-none ${
              isSolidified
                ? "opacity-20 bg-gold-500/10"
                : isBoosting
                ? "opacity-90 bg-amber-500/30 scale-110"
                : "opacity-60 bg-gold-500/20"
            }`}
          />

          {/* Central Animated SVG Apparatus: Crucible + Molten Stream + Anvil + Ingot */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              viewBox="0 0 600 460"
              className="w-full h-full max-w-[620px] max-h-[460px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            >
              <defs>
                {/* Molten Liquid Gold Stream Gradient */}
                <linearGradient id="moltenFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF9E6" />
                  <stop offset="25%" stopColor="#FFD700" />
                  <stop offset="65%" stopColor="#FF8C00" />
                  <stop offset="100%" stopColor="#FF4500" />
                </linearGradient>

                {/* Crucible Ceramic Gradient */}
                <linearGradient id="crucibleBody" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2A2A30" />
                  <stop offset="50%" stopColor="#18181C" />
                  <stop offset="100%" stopColor="#0E0E11" />
                </linearGradient>

                {/* Crucible Molten Interior Glow */}
                <radialGradient id="crucibleHeat" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="35%" stopColor="#FFD700" />
                  <stop offset="70%" stopColor="#FF6600" />
                  <stop offset="100%" stopColor="#CC2200" />
                </radialGradient>

                {/* Solidified 22ct Gold Mirror Surface */}
                <linearGradient id="solidGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF2D1" />
                  <stop offset="30%" stopColor="#D4AF37" />
                  <stop offset="70%" stopColor="#AA771C" />
                  <stop offset="100%" stopColor="#7A5210" />
                </linearGradient>

                {/* Heavy Anvil Metal Gradient */}
                <linearGradient id="anvilSteel" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2A2A32" />
                  <stop offset="40%" stopColor="#1E1E24" />
                  <stop offset="100%" stopColor="#121216" />
                </linearGradient>

                {/* Anvil Wooden Stand */}
                <linearGradient id="woodStand" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1B1713" />
                  <stop offset="50%" stopColor="#2D241C" />
                  <stop offset="100%" stopColor="#16130F" />
                </linearGradient>

                {/* Glow Filter for High Heat Liquid */}
                <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* ================= 1. HOLOGRAPHIC 404 GHOST IN BACKGROUND ================= */}
              <g opacity="0.12" transform="translate(300, 160)" textAnchor="middle">
                <text
                  x="0"
                  y="0"
                  fill="url(#solidGold)"
                  fontFamily="Georgia, serif"
                  fontWeight="900"
                  fontSize="130"
                  letterSpacing="12"
                >
                  404
                </text>
              </g>

              {/* ================= 2. OVERHEAD CHAIN & GANTRY APPARATUS ================= */}
              <g stroke="#3F3F46" strokeWidth="2.5" strokeLinecap="round">
                {/* Support Gantry Rails */}
                <line x1="160" y1="20" x2="440" y2="20" stroke="#52525B" strokeWidth="4" />
                <circle cx="280" cy="20" r="5" fill="#D4AF37" />
                <circle cx="320" cy="20" r="5" fill="#D4AF37" />

                {/* Hanging Chains */}
                <line x1="280" y1="20" x2="275" y2="78" strokeDasharray="3 3" />
                <line x1="320" y1="20" x2="315" y2="78" strokeDasharray="3 3" />
              </g>

              {/* ================= 3. TILTING CERAMIC CRUCIBLE & TONGS ================= */}
              {/* Animated pivot centered at (295, 95) */}
              <g
                className="transition-transform duration-700 ease-out"
                style={{
                  transformOrigin: "295px 95px",
                  transform: `rotate(${isSolidified ? 0 : isBoosting ? 32 : 24}deg)`,
                }}
              >
                {/* Iron Swivel Ring */}
                <circle
                  cx="295"
                  cy="95"
                  r="36"
                  fill="none"
                  stroke="#52525B"
                  strokeWidth="3.5"
                />
                <circle cx="295" cy="95" r="4" fill="#D4AF37" />

                {/* Crucible Ceramic Body */}
                <path
                  d="M260,70 L330,70 L320,132 C318,142 308,148 295,148 C282,148 272,142 270,132 Z"
                  fill="url(#crucibleBody)"
                  stroke="#3F3F46"
                  strokeWidth="2.5"
                />

                {/* Pouring Spout Lip */}
                <path
                  d="M328,70 L346,74 L326,86 Z"
                  fill="url(#crucibleBody)"
                  stroke="#3F3F46"
                  strokeWidth="1.5"
                />

                {/* Molten Gold Core inside Crucible */}
                {!isSolidified && (
                  <ellipse
                    cx="295"
                    cy="72"
                    rx="30"
                    ry="9"
                    fill="url(#crucibleHeat)"
                    filter="url(#goldGlow)"
                  />
                )}

                {/* Surface Liquid Gold Boiling Highlights */}
                {!isSolidified && (
                  <ellipse
                    cx="296"
                    cy="72"
                    rx="18"
                    ry="4.5"
                    fill="#FFFFFF"
                    opacity="0.75"
                  />
                )}

                {/* Exterior Reinforcement Iron Bands */}
                <path
                  d="M265,95 Q295,102 325,95"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  opacity="0.8"
                />
                <path
                  d="M268,118 Q295,124 322,118"
                  fill="none"
                  stroke="#52525B"
                  strokeWidth="1.5"
                />
              </g>

              {/* ================= 4. FLOWING VISCOUS MOLTEN STREAM ================= */}
              {!isSolidified && (
                <g filter="url(#goldGlow)">
                  {/* Thick molten stream pouring from spout (344, 98) down to anvil impact (308, 312) */}
                  <path
                    d={`M338,${isBoosting ? 104 : 96} Q328,200 308,312 Q306,200 334,${
                      isBoosting ? 100 : 92
                    } Z`}
                    fill="url(#moltenFlow)"
                    opacity="0.95"
                  />

                  {/* Hot white central energy core of the stream */}
                  <path
                    d="M336,98 Q326,200 308,312"
                    stroke="#FFFDF0"
                    strokeWidth={isBoosting ? 4.5 : 2.5}
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.9"
                  />
                </g>
              )}

              {/* ================= 5. GOLDSMITH'S ANVIL & INGOT MOLD ================= */}
              <g transform="translate(190, 275)">
                {/* Heavy Wooden Base Block */}
                <rect
                  x="55"
                  y="70"
                  width="110"
                  height="80"
                  rx="6"
                  fill="url(#woodStand)"
                  stroke="#27272A"
                  strokeWidth="2"
                />
                {/* Iron Band on Wooden Block */}
                <rect
                  x="55"
                  y="95"
                  width="110"
                  height="12"
                  fill="#1C1C22"
                  stroke="#3F3F46"
                  strokeWidth="1"
                />
                <circle cx="70" cy="101" r="2" fill="#D4AF37" />
                <circle cx="110" cy="101" r="2" fill="#D4AF37" />
                <circle cx="150" cy="101" r="2" fill="#D4AF37" />

                {/* Cast-Steel Anvil Body */}
                <path
                  d="M30,36 L65,36 L80,56 L140,56 L155,36 L190,36 C190,48 180,68 155,70 L65,70 C40,68 30,48 30,36 Z"
                  fill="url(#anvilSteel)"
                  stroke="#3F3F46"
                  strokeWidth="2"
                />

                {/* Anvil Horn (Left Piercing Point) */}
                <path
                  d="M30,36 Q0,38 8,46 L30,48 Z"
                  fill="url(#anvilSteel)"
                  stroke="#3F3F46"
                  strokeWidth="1.5"
                />

                {/* Anvil Flat Working Face Top Plate */}
                <rect
                  x="30"
                  y="30"
                  width="160"
                  height="8"
                  rx="2"
                  fill="#383842"
                  stroke="#52525B"
                  strokeWidth="1.5"
                />

                {/* London Leopard's Head Trademark Stamp on Anvil Waist */}
                <g transform="translate(110, 63) scale(0.65)">
                  <polygon
                    points="0,-8 7,-2 4,8 -4,8 -7,-2"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                  />
                  <circle cx="-2" cy="-1" r="1" fill="#D4AF37" />
                  <circle cx="2" cy="-1" r="1" fill="#D4AF37" />
                </g>

                {/* ================= RECESSED INGOT CASTING MOLD ================= */}
                <g transform="translate(90, 26)">
                  {/* Mold Cavity Rim */}
                  <rect
                    x="0"
                    y="0"
                    width="44"
                    height="12"
                    rx="2"
                    fill="#141418"
                    stroke="#52525B"
                    strokeWidth="1.2"
                  />

                  {/* Pooled Liquid or Solidified 22ct Gold Ingot */}
                  <rect
                    x="2"
                    y="2"
                    width="40"
                    height="8"
                    rx="1.5"
                    fill={isSolidified ? "url(#solidGold)" : "url(#moltenFlow)"}
                    filter={isSolidified ? undefined : "url(#goldGlow)"}
                  />

                  {/* If Solidified: Stamped Ingot Details */}
                  {isSolidified && (
                    <text
                      x="22"
                      y="8"
                      fill="#09090B"
                      fontSize="5"
                      fontFamily="monospace"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      NJ•22CT
                    </text>
                  )}
                </g>
              </g>

              {/* Status Floating Pill inside Arena */}
              <g transform="translate(300, 420)" textAnchor="middle">
                <rect
                  x="-150"
                  y="-14"
                  width="300"
                  height="26"
                  rx="13"
                  fill="#141416"
                  stroke="rgba(212, 175, 55, 0.3)"
                  strokeWidth="1"
                />
                <text
                  x="0"
                  y="4"
                  fill="#D4AF37"
                  fontFamily="-apple-system, sans-serif"
                  fontWeight="600"
                  fontSize="11"
                  letterSpacing="1.5"
                >
                  {isSolidified
                    ? "✓ 22CT INGOT SOLIDIFIED & HALLMARKED"
                    : "✦ RE-CASTING THE LOST CARAT AT 1064°C"}
                </text>
              </g>
            </svg>
          </div>

          {/* Arena Interactive Quick-Action Overlay Buttons (Top-Right) */}
          <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
            <button
              onClick={handleBoostSmelter}
              disabled={isSolidified}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border text-xs font-semibold tracking-wide transition-all shadow-lg active:scale-95 ${
                isBoosting
                  ? "bg-amber-500 text-obsidian border-amber-400 scale-105"
                  : isSolidified
                  ? "opacity-40 cursor-not-allowed bg-zinc-900 border-zinc-800 text-zinc-500"
                  : "bg-gold-950/60 hover:bg-gold-500/20 text-gold-300 border-gold-500/40 hover:text-white"
              }`}
              title="Increase furnace airflow and trigger fiery sparks"
            >
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>{isBoosting ? "Furnace Blasting!" : "Boost Smelter"}</span>
            </button>

            <button
              onClick={handleToggleSolidify}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#141416] hover:bg-zinc-800 border border-zinc-700 text-platinum hover:text-white text-xs font-semibold tracking-wide transition-all shadow-lg active:scale-95"
              title="Toggle between molten crucible pour and cold hallmarked gold ingot"
            >
              <RotateCcw className="w-3.5 h-3.5 text-gold-400" />
              <span>{isSolidified ? "Re-Melt Ingot" : "Cool to Ingot"}</span>
            </button>
          </div>
        </div>

        {/* ================= LOWER ATELIER STORY & NAVIGATION CARD ================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-atelier border border-atelier-border shadow-2xl space-y-6">
          <div className="space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-950/40 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Piece Re-Smelted Into 22ct Gold</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-tight">
              This Piece Was Melted Down for Re-Casting
            </h1>

            <p className="text-sm sm:text-base text-platinum-muted max-w-2xl leading-relaxed">
              The page, vault archive, or jewellery reference you are looking for
              has been melted in our atelier crucible. In our
              Hayes workshop, no precious metal is wasted — it is continuously
              refined into bespoke bridal suites, certified diamond rings, and
              hallmarked bullion.
            </p>
          </div>

          {/* Key Atelier Trust Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-obsidian/70 border border-zinc-800 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" />
              <div className="text-xs">
                <span className="text-white font-semibold block">
                  London Hallmarked
                </span>
                <span className="text-zinc-500">London Assay Office 916</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-obsidian/70 border border-zinc-800 flex items-center gap-3">
              <Scale className="w-5 h-5 text-gold-400 shrink-0" />
              <div className="text-xs">
                <span className="text-white font-semibold block">
                  Live LBMA Bullion
                </span>
                <span className="text-zinc-500">Daily Spot Trading</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-obsidian/70 border border-zinc-800 flex items-center gap-3">
              <Gem className="w-5 h-5 text-gold-400 shrink-0" />
              <div className="text-xs">
                <span className="text-white font-semibold block">
                  In-House Workshop
                </span>
                <span className="text-zinc-500">Same-Day Hayes Repairs</span>
              </div>
            </div>
          </div>

          {/* Action Button Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3.5">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-obsidian font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-gold-500/20 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4 text-obsidian" />
              <span>Return to Atelier Home</span>
            </Link>

            <a
              href={whatsappConsultLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-whatsapp hover:bg-whatsapp-dark text-black font-bold text-xs uppercase tracking-wide transition-all shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 fill-black text-whatsapp" />
              <span>WhatsApp Concierge</span>
            </a>

            <Link
              href="/collections"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-obsidian hover:bg-zinc-800 border border-zinc-700 hover:border-gold-500/50 text-platinum hover:text-white text-xs font-semibold tracking-wide transition-all min-h-[44px]"
            >
              <span>Explore 22ct Collections</span>
            </Link>

            <Link
              href="/gold-rates"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-obsidian hover:bg-zinc-800 border border-zinc-700 hover:border-gold-500/50 text-platinum hover:text-white text-xs font-semibold tracking-wide transition-all min-h-[44px]"
            >
              <span>Check Live Gold Rates</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
