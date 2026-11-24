"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { CollectionItem } from "@/data/collections-data";

interface AtelierVideoCardProps {
  item: CollectionItem;
  className?: string;
  priority?: boolean;
  hideMotionBadge?: boolean;
  preferImage?: boolean;
}

export function AtelierVideoCard({
  item,
  className = "",
  priority = false,
  hideMotionBadge = true,
  preferImage = false,
}: AtelierVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (preferImage) return;
    const video = videoRef.current;
    if (!video || !item.videoUrl || hasError) return;

    // Viewport IntersectionObserver to conserve battery and memory on mobile
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {
                // Autoplay may be deferred until user interaction on strict browsers
                setIsPlaying(false);
              });
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [item.videoUrl, hasError, preferImage]);

  const isVideo = !preferImage && item.mediaType === "video" && !!item.videoUrl && !hasError;

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FAF7F2] ${className}`}>
      {/* 1. Base High-Resolution Jewellery Photograph or Luxury Placeholder */}
      {item.thumbnailUrl ? (
        <Image
          src={item.thumbnailUrl}
          alt={item.title}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className={`object-cover transition-all duration-700 group-hover:scale-105 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C1A17] via-[#2A2620] to-[#141416] flex flex-col items-center justify-center p-4 text-center">
          <div className="w-12 h-12 rounded-none bg-white/5 border border-[#D4AF37]/40 flex items-center justify-center mb-2 text-[#D4AF37]">
            <span className="font-serif text-lg font-bold">NJ</span>
          </div>
          <span className="text-[10px] font-bold text-white tracking-widest uppercase">
            Showroom Piece
          </span>
          <span className="text-[9px] text-[#DFBF7A] mt-0.5">
            Bespoke Atelier
          </span>
        </div>
      )}

      {/* 2. Video motion layer: only revealed once video is actually playing frames */}
      {isVideo && (
        <video
          ref={videoRef}
          src={item.videoUrl}
          poster={item.thumbnailUrl}
          autoPlay
          loop
          muted
          playsInline
          {...({ "webkit-playsinline": "true" })}
          preload="metadata"
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:scale-105 ${
            isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      )}
    </div>
  );
}
