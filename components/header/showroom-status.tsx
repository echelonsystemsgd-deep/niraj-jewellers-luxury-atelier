"use client";

import { useEffect, useState } from "react";
import { getLondonShowroomStatus, ShowroomStatus } from "@/lib/showroom-hours";
import { Clock } from "lucide-react";

export function ShowroomStatusBadge() {
  const [status, setStatus] = useState<ShowroomStatus | null>(null);

  useEffect(() => {
    // Initial calculation
    setStatus(getLondonShowroomStatus());

    // Update every minute
    const interval = setInterval(() => {
      setStatus(getLondonShowroomStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!status) {
    return (
      <div className="flex items-center gap-2 text-xs text-platinum-muted bg-atelier px-3 py-1.5 rounded-full border border-atelier-border">
        <Clock className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
        <span>Loading London Showroom Status...</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
        status.isOpen
          ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-400"
          : "bg-amber-950/30 border-amber-500/30 text-amber-300"
      }`}
      title="136 Uxbridge Road, Hayes UB4 0JH Operating Hours"
    >
      <span className="relative flex h-2 w-2">
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
      <span className="font-semibold">{status.statusBadge}</span>
      <span className="hidden sm:inline text-platinum-muted/80">•</span>
      <span className="hidden sm:inline text-platinum-muted">{status.nextEventText}</span>
    </div>
  );
}
