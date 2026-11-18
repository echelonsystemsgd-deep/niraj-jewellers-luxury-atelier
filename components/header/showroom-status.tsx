"use client";

import { useEffect, useState } from "react";
import { getLondonShowroomStatus, ShowroomStatus } from "@/lib/showroom-hours";
import { Clock } from "lucide-react";

interface ShowroomStatusBadgeProps {
  variant?: "full" | "compact";
  className?: string;
}

export function ShowroomStatusBadge({ variant = "full", className = "" }: ShowroomStatusBadgeProps) {
  const [status, setStatus] = useState<ShowroomStatus | null>(null);

  useEffect(() => {
    setStatus(getLondonShowroomStatus());
    const interval = setInterval(() => {
      setStatus(getLondonShowroomStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!status) {
    return (
      <div className={`flex items-center gap-1.5 text-[11px] text-platinum-muted bg-atelier/80 px-2.5 py-1 rounded-full border border-atelier-border ${className}`}>
        <Clock className="w-3 h-3 text-gold-500 animate-pulse" />
        <span>London Showroom</span>
      </div>
    );
  }

  const isCompact = variant === "compact";

  return (
    <div
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-medium border transition-colors ${
        status.isOpen
          ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-400"
          : "bg-amber-950/30 border-amber-500/30 text-amber-300"
      } ${className}`}
      title="136 Uxbridge Road, Hayes UB4 0JH • Mon: 12-5pm, Tue-Sat: 11-5pm"
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            status.isOpen ? "bg-emerald-400" : "bg-amber-400"
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            status.isOpen ? "bg-emerald-500" : "bg-amber-500"
          }`}
        />
      </span>
      {isCompact ? (
        <span className="whitespace-nowrap font-medium">
          {status.isOpen ? "Open Today" : "Showroom Closed"}
          <span className="text-zinc-500 mx-1.5">•</span>
          <span className="text-zinc-300">{status.nextEventText.split("(")[0].trim()}</span>
        </span>
      ) : (
        <>
          <span className="font-semibold">{status.statusBadge}</span>
          <span className="hidden sm:inline text-platinum-muted/80">•</span>
          <span className="hidden sm:inline text-platinum-muted">{status.nextEventText}</span>
        </>
      )}
    </div>
  );
}
