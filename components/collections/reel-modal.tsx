"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, MessageCircle, Volume2, VolumeX, ShieldCheck, Instagram, Sparkles, Play, Pause, ExternalLink, Film } from "lucide-react";
import { CollectionItem } from "@/data/collections-data";
import { buildWhatsAppLink, NIRAJ_DISPLAY_PHONE } from "@/lib/whatsapp";
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
    customNote: `I am enquiring about the ${item.title} (${item.metalPurity}) featured in your collection reels. Could you provide details on pricing, customisation, and viewing in your Hayes showroom?`,
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
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      {/* Background backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Container with Spring Ease */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="relative w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-4xl bg-obsidian sm:border sm:border-atelier-border sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 hover:bg-black text-white hover:text-gold-400 border border-white/20 transition-all touch-target flex items-center justify-center"
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
              {/* Instagram Reel Direct Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
              <div className="absolute inset-x-4 bottom-14 z-20 flex flex-col items-center text-center">
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 hover:bg-black border border-pink-500/40 text-pink-300 hover:text-white text-xs font-medium backdrop-blur-md transition-all shadow-xl hover:scale-105"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Watch Reel on Instagram (@nirajjewellersltd)</span>
                  <ExternalLink className="w-3 h-3 text-pink-400/80" />
                </a>
              </div>
            </div>
          )}

          {/* Social Media Stamp */}
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/10 text-white hover:text-pink-400 text-[11px] transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>@nirajjewellersltd</span>
          </a>

          {/* Hallmark Badge */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-gold-950/80 border border-gold-500/40 text-gold-300 text-[10px] uppercase font-mono tracking-wider">
            <ShieldCheck className="w-3 h-3 text-gold-400" />
            <span>{item.hallmarkText}</span>
          </div>
        </div>

        {/* Details & WhatsApp Conversion Side */}
        <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-atelier">
          <div className="space-y-4">
            {/* Category & Purity Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-gold-950/60 border border-gold-500/40 text-gold-300 text-xs font-semibold uppercase tracking-wider">
                {item.metalPurity}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-atelier-light border border-atelier-border text-platinum-muted text-xs capitalize">
                {item.category.replace("-", " ")}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white leading-snug">
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-platinum-muted leading-relaxed">
              {item.description}
            </p>

            {/* Specifications Box */}
            <div className="p-4 rounded-xl bg-obsidian/70 border border-atelier-border space-y-2 text-xs">
              <div className="font-semibold text-gold-400 uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-atelier-border">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Atelier Specifications</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-platinum-muted pt-1">
                {item.specs.weight && (
                  <div>
                    <span className="text-platinum-muted/60 block">Approx. Weight:</span>
                    <span className="text-white font-medium">{item.specs.weight}</span>
                  </div>
                )}
                {item.specs.carat && (
                  <div>
                    <span className="text-platinum-muted/60 block">Diamond Weight:</span>
                    <span className="text-white font-medium">{item.specs.carat}</span>
                  </div>
                )}
                <div>
                  <span className="text-platinum-muted/60 block">Gold Purity:</span>
                  <span className="text-white font-medium">{item.specs.metal}</span>
                </div>
                <div>
                  <span className="text-platinum-muted/60 block">Craftsmanship:</span>
                  <span className="text-white font-medium">{item.specs.craftsmanship}</span>
                </div>
              </div>
            </div>

            {/* Price Transparency Note */}
            <div className="p-3 rounded-lg bg-gold-950/20 border border-gold-900/40 text-xs text-gold-300/90">
              <span className="font-semibold text-gold-400 block mb-0.5">Direct Workshop Value:</span>
              {item.priceNote}. No retail middleman markups.
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="pt-6 space-y-3">
            <a
              href={whatsappEnquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-dark text-black font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-whatsapp/20"
            >
              <MessageCircle className="w-4 h-4 fill-black text-whatsapp" />
              <span>Enquire About This Exact Piece on WhatsApp</span>
            </a>

            <div className="flex items-center justify-between text-[11px] text-platinum-muted px-1">
              <span>Direct line to Master Jeweller Viky</span>
              <span className="font-mono text-gold-400">{NIRAJ_DISPLAY_PHONE}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
