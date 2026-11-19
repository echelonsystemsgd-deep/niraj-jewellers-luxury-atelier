"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { CollectionItem } from "@/data/collections-data";

interface AtelierVideoCardProps {
  item: CollectionItem;
  className?: string;
  priority?: boolean;
  hideMotionBadge?: boolean;
}

export function AtelierVideoCard({
  item,
  className = "",
  priority = false,
  hideMotionBadge = false,
}: AtelierVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
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
  }, [item.videoUrl, hasError]);

  if (item.mediaType === "video" && item.videoUrl && !hasError) {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-black ${className}`}>
        {/* Mobile-first video engine with strict attributes for iOS Safari & Android Chrome */}
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
          onError={() => setHasError(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Video badge */}
        {!hideMotionBadge && (
          <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[9px] font-bold uppercase tracking-wider text-white flex items-center gap-1 pointer-events-none">
            <Play className="w-2.5 h-2.5 fill-[#DFBF7A] text-[#DFBF7A]" />
            <span>Atelier Motion</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FAF7F2] ${className}`}>
      <Image
        src={item.thumbnailUrl}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={priority}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
}
