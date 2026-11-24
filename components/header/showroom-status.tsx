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
      <div className={`flex items-center gap-1.5 text-[11px] text-[#5A5960] bg-[#FAF7F2] px-2.5 py-1 border border-[#E8DEC8] ${className}`}>
        <Clock className="w-3 h-3 text-[#996515] animate-pulse" />
        <span>London Showroom</span>
      </div>
    );
  }

  const isCompact = variant === "compact";

  return (
    <div
      className={`inline-flex items-center gap-2 px-2.5 py-1 text-[11px] font-medium border transition-colors ${
        status.isOpen
          ? "bg-emerald-50 border-emerald-300/80 text-emerald-800 shadow-sm"
          : "bg-amber-50 border-amber-300/80 text-amber-800 shadow-sm"
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
            status.isOpen ? "bg-emerald-600" : "bg-amber-600"
          }`}
        />
      </span>
      {isCompact ? (
        <span className="whitespace-nowrap font-medium">
          {status.isOpen ? "Open Today" : "Showroom Closed"}
          <span className="text-[#A19FA8] mx-1.5">•</span>
          <span className="text-[#2C2A30] font-semibold">{status.nextEventText.split("(")[0].trim()}</span>
        </span>
      ) : (
        <>
          <span className="font-semibold">{status.statusBadge}</span>
          <span className="hidden sm:inline text-[#A19FA8]">•</span>
          <span className="hidden sm:inline text-[#4A4A52]">{status.nextEventText}</span>
        </>
      )}
    </div>
  );
}
