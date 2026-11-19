"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, MessageCircle, Volume2, VolumeX, ShieldCheck, Instagram, Sparkles, Play, Pause, ExternalLink } from "lucide-react";
import { CollectionItem } from "@/data/collections-data";
import { buildWhatsAppLink, NIRAJ_UK_PHONE, NIRAJ_DISPLAY_PHONE } from "@/lib/whatsapp";
import { useScrollLock } from "@/lib/use-scroll-lock";

interface ReelModalProps {
  item: CollectionItem | null;
  onClose: () => void;
}

export function ReelModal({ item, onClose }: ReelModalProps) {
  useScrollLock(!!item);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setHasVideoError(false);
    setIsPlaying(true);
  }, [item?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const whatsappEnquiryLink = buildWhatsAppLink({
    source: `reel_modal_${item.id}`,
    pieceTitle: item.title,
    metalPurity: item.metalPurity,
    category: item.category,
    customNote: `Hi Niraj Jewellers team, I am enquiring about the ${item.title} (${item.metalPurity}) featured in your collection showcase. Could you provide details on pricing, bespoke customization, and showroom viewing?`,
  });

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const instagramLink = item.instagramUrl || "https://www.instagram.com/nirajjewellersltd";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      {/* Background backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="relative w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-4xl bg-white sm:border sm:border-[#E8DEC8] sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#141416] hover:text-[#996515] border border-[#E8DEC8] transition-all touch-target flex items-center justify-center shadow-md"
          aria-label="Close viewer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Side (Reel / Video / Image) */}
        <div className="relative w-full md:w-1/2 h-[50vh] sm:h-[55vh] md:h-[650px] bg-black flex items-center justify-center overflow-hidden">
          {item.mediaType === "video" && item.videoUrl && !hasVideoError ? (
            <>
              <video
                ref={videoRef}
                src={item.videoUrl}
                poster={item.thumbnailUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => setHasVideoError(true)}
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
              />
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 text-xs flex items-center gap-1.5 touch-target"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <button
                  onClick={toggleAudio}
                  className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 text-xs flex items-center gap-1.5 touch-target"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span className="text-[11px] pr-1">{isMuted ? "Unmute" : "Sound"}</span>
                </button>
              </div>
            </>
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={item.thumbnailUrl}
                alt={item.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute inset-x-4 bottom-14 z-20 flex flex-col items-center text-center">
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-[#141416] hover:text-[#996515] border border-[#D4AF37]/50 text-xs font-semibold backdrop-blur-md transition-all shadow-xl hover:scale-105"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Watch Reel on Instagram (@nirajjewellersltd)</span>
                  <ExternalLink className="w-3 h-3 text-[#8C6212]" />
                </a>
              </div>
            </div>
          )}

          {/* Social Media Stamp */}
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black backdrop-blur-md border border-white/20 text-white hover:text-[#DFBF7A] text-[11px] transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>@nirajjewellersltd</span>
          </a>

          {/* Hallmark Badge */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 text-[#8C6212] text-[10px] uppercase font-bold tracking-wider shadow-sm">
            <ShieldCheck className="w-3 h-3 text-[#996515]" />
            <span>{item.hallmarkText}</span>
          </div>
        </div>

        {/* Details & WhatsApp Conversion Side */}
        <div className="w-full md:w-1/2 p-6 sm:p-7 md:p-8 flex flex-col justify-between overflow-y-auto bg-white">
          <div className="space-y-4">
            {/* Category & Purity Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/50 text-[#8C6212] text-xs font-bold uppercase tracking-wider">
                {item.metalPurity}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#F5F2EB] border border-[#E8DEC8] text-[#5A5960] text-xs capitalize font-medium">
                {item.category.replace("-", " ")}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#141416] leading-snug">
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-[#4A4A52] leading-relaxed">
              {item.description}
            </p>

            {/* Specifications Box */}
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] space-y-2 text-xs">
              <div className="font-bold text-[#8C6212] uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-[#EFE8DA]">
                <Sparkles className="w-3.5 h-3.5 text-[#996515]" />
                <span>Atelier Specifications</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[#4A4A52] pt-1">
                {item.specs.weight && (
                  <div>
                    <span className="text-[#7A7880] block text-[11px]">Approx. Weight:</span>
                    <span className="text-[#141416] font-semibold">{item.specs.weight}</span>
                  </div>
                )}
                {item.specs.carat && (
                  <div>
                    <span className="text-[#7A7880] block text-[11px]">Diamond Weight:</span>
                    <span className="text-[#141416] font-semibold">{item.specs.carat}</span>
                  </div>
                )}
                <div>
                  <span className="text-[#7A7880] block text-[11px]">Gold Purity:</span>
                  <span className="text-[#141416] font-semibold">{item.specs.metal}</span>
                </div>
                <div>
                  <span className="text-[#7A7880] block text-[11px]">Bench Origin:</span>
                  <span className="text-[#141416] font-semibold">136 Uxbridge Road</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[10px] bg-[#FAF7F2] border border-[#EFE8DA] text-[#5A5960]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[#EFE8DA] space-y-3">
            <a
              href={whatsappEnquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Enquire via WhatsApp Concierge</span>
            </a>
            <div className="text-center text-[11px] text-[#7A7880]">
              Direct Showroom Line: <span className="font-mono font-bold text-[#141416]">{NIRAJ_UK_PHONE}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
