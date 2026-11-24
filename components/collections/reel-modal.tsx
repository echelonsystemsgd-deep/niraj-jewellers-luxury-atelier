"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  X,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Gem,
  Scale,
  Instagram,
  Volume2,
  VolumeX,
  Maximize2
} from "lucide-react";
import { CollectionItem } from "@/data/collections-data";
import { buildWhatsAppLink, NIRAJ_UK_PHONE, NIRAJ_DISPLAY_PHONE, NIRAJ_LANDLINE_PHONE, NIRAJ_MOBILE_PHONE } from "@/lib/whatsapp";
import { useScrollLock } from "@/lib/use-scroll-lock";

interface ReelModalProps {
  item: CollectionItem | null;
  onClose: () => void;
}

export function ReelModal({ item, onClose }: ReelModalProps) {
  useScrollLock(!!item);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setImageLoaded(false);
    setVideoPlaying(false);
    setIsMuted(true);
  }, [item?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const isVideo = item.mediaType === "video" && Boolean(item.videoUrl);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else {
      const el = videoRef.current as HTMLVideoElement & { webkitEnterFullscreen?: () => void };
      if (typeof el.webkitEnterFullscreen === "function") {
        el.webkitEnterFullscreen();
      }
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Niraj Jewellers, I am interested in "${item.title}" (${item.metalPurity}). Is this available to inspect at your Hayes showroom?`
  );
  const whatsappEnquiryLink = `https://api.whatsapp.com/send?phone=447955565137&text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-piece-title"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col md:flex-row bg-white rounded-none overflow-hidden border border-[#D4AF37]/40 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* High-Contrast Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 hover:bg-[#141416] border border-[#E8DEC8] hover:border-[#141416] text-[#8C6212] hover:text-white transition-all shadow-md text-xs font-bold uppercase tracking-wider touch-target cursor-pointer"
          aria-label="Close piece details"
        >
          <span>CLOSE</span>
          <X className="w-4 h-4" />
        </button>

        {/* Left Column: Authentic Photography or Video on Infinite Loop */}
        <div
          ref={videoContainerRef}
          className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-auto min-h-[260px] md:min-h-[500px] bg-[#FAF8F5] flex items-center justify-center p-3 sm:p-5 border-b md:border-b-0 md:border-r border-[#E8DEC8] overflow-hidden group"
        >
          {/* Ambient Warm Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#DFBF7A]/15 via-transparent to-transparent pointer-events-none" />

          <div className="relative w-full h-full max-h-[460px] rounded-none overflow-hidden shadow-md border border-[#E8DEC8] bg-[#FAF7F2]">
            {/* Always Render High-Resolution Poster Layer (Prevents Black Flash on Mobile) */}
            {item.thumbnailUrl && (
              <Image
                src={item.thumbnailUrl}
                alt={item.title}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover object-center transition-opacity duration-500 ${
                  isVideo && videoPlaying ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setImageLoaded(true)}
                priority
              />
            )}

            {isVideo && (
              <>
                <video
                  ref={videoRef}
                  src={item.videoUrl}
                  poster={item.thumbnailUrl}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  {...({ "webkit-playsinline": "true" })}
                  controls={false}
                  onPlaying={() => setVideoPlaying(true)}
                  onLoadedData={() => setVideoPlaying(true)}
                  className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
                    videoPlaying ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                {/* Sound & Fullscreen Controls for Video */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                  <button
                    onClick={toggleSound}
                    className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center border border-white/25 backdrop-blur-md transition-all shadow-md touch-target"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#DFBF7A]" />}
                  </button>
                  <button
                    onClick={handleFullscreen}
                    className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center border border-white/25 backdrop-blur-md transition-all shadow-md touch-target"
                    aria-label="Fullscreen video inspection"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Hallmark Badge Overlay */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 shadow-sm text-xs font-semibold text-[#8C6212]">
            <ShieldCheck className="w-4 h-4 text-[#996515]" />
            <span className="truncate max-w-[180px]">{item.hallmarkText}</span>
          </div>
        </div>

        {/* Right Column: Piece Specifications & Direct Inquiry */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[55vh] md:max-h-[85vh] space-y-6">
          <div className="space-y-4">
            {/* Header tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/40 text-[#8C6212]">
                {item.metalPurity}
              </span>
              <span className="text-[11px] font-semibold text-[#5A5960] uppercase tracking-wider">
                Hayes Atelier Reference
              </span>
            </div>

            {/* Title */}
            <div>
              <h3
                id="modal-piece-title"
                className="font-serif text-2xl sm:text-3xl font-medium text-[#141416] leading-tight"
              >
                {item.title}
              </h3>
              <p className="font-vivaldi text-xl text-[#996515] mt-1">
                Handcrafted on Uxbridge Road
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#4A4A52] leading-relaxed">
              {item.description}
            </p>

            {/* Workshop Specifications Bento */}
            <div className="p-4 rounded-none bg-[#FAF8F5] border border-[#E8DEC8] space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C6212] block">
                Atelier Craft Specifications
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {item.specs.weight && (
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#996515] shrink-0" />
                    <div>
                      <span className="text-[10px] text-[#5A5960] block">Gross Weight</span>
                      <span className="font-semibold text-[#141416]">{item.specs.weight}</span>
                    </div>
                  </div>
                )}
                {item.specs.carat && (
                  <div className="flex items-center gap-2">
                    <Gem className="w-4 h-4 text-[#996515] shrink-0" />
                    <div>
                      <span className="text-[10px] text-[#5A5960] block">Gemstone Carat</span>
                      <span className="font-semibold text-[#141416]">{item.specs.carat}</span>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2 col-span-2 pt-1 border-t border-[#EFE8DA]">
                  <Sparkles className="w-4 h-4 text-[#996515] shrink-0" />
                  <div>
                    <span className="text-[10px] text-[#5A5960] block">Craftsmanship</span>
                    <span className="font-semibold text-[#141416]">{item.specs.craftsmanship}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Note Guarantee */}
            <div className="p-3 rounded-none bg-white border border-[#D4AF37]/30 flex items-center justify-between text-xs">
              <span className="text-[#5A5960]">Workshop Pricing:</span>
              <span className="font-bold text-[#8C6212]">{item.priceNote}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-2">
            <a
              href={whatsappEnquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Enquire on WhatsApp</span>
            </a>

            <div className="space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={`tel:${NIRAJ_LANDLINE_PHONE.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[#FAF8F5] hover:bg-[#F4ECE1] border border-[#E8DEC8] text-[#141416] font-semibold text-xs tracking-wider transition-colors min-h-[44px]"
                  title="Call Showroom Landline"
                >
                  <Phone className="w-3.5 h-3.5 text-[#996515]" />
                  <span>Landline: {NIRAJ_LANDLINE_PHONE}</span>
                </a>

                <a
                  href={`tel:${NIRAJ_MOBILE_PHONE.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[#FAF8F5] hover:bg-[#F4ECE1] border border-[#E8DEC8] text-[#141416] font-semibold text-xs tracking-wider transition-colors min-h-[44px]"
                  title="Call Workshop Mobile"
                >
                  <Phone className="w-3.5 h-3.5 text-[#996515]" />
                  <span>Mobile: {NIRAJ_MOBILE_PHONE}</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href="https://www.instagram.com/nirajjewellersltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] text-pink-700 font-semibold text-xs transition-colors min-h-[40px]"
                  title="Follow on Instagram"
                >
                  <Instagram className="w-4 h-4 text-pink-600 shrink-0" />
                  <span>Instagram @nirajjewellersltd</span>
                </a>

                <a
                  href="https://www.tiktok.com/@nirajjewellersltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] text-[#141416] hover:text-[#996515] font-semibold text-xs transition-colors min-h-[40px]"
                  title="Watch on TikTok"
                >
                  <svg className="w-4 h-4 fill-current text-[#141416] shrink-0" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.46 6.27 6.27 0 0 0 1.9-4.46V8.7a8.18 8.18 0 0 0 4.87 1.6V6.84a4.87 4.87 0 0 1-1-.15Z" />
                  </svg>
                  <span>TikTok @nirajjewellersltd</span>
                </a>
              </div>

              {/* Explicit Exit / Close Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 rounded-none border border-[#E8DEC8] bg-[#FAF8F5] hover:bg-[#141416] text-[#8C6212] hover:text-white font-sans text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>CLOSE &amp; RETURN TO COLLECTION</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
