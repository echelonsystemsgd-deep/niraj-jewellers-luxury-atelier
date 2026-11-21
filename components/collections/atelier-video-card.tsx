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

  if (!preferImage && item.mediaType === "video" && item.videoUrl && !hasError) {
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
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FAF7F2] ${className}`}>
      <Image
        src={item.thumbnailUrl}
        alt={item.title}
        fill
        unoptimized
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={priority}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
}
