import React from "react";

export function WhatsAppIcon({ className = "w-4 h-4", fill = "currentColor" }: { className?: string; fill?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.71 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  );
}

export function GoogleGIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function LuxuryStarIcon({ className = "w-4 h-4", fill = "#C5A059" }: { className?: string; fill?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function GoldsmithScalesIcon({ className = "w-5 h-5", stroke = "currentColor" }: { className?: string; stroke?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v18" />
      <path d="M4 7h16" />
      <path d="M6 7l-3 7h6l-3-7z" />
      <path d="M18 7l-3 7h6l-3-7z" />
      <path d="M4 21h16" />
    </svg>
  );
}

export function GoldsmithLoupeIcon({ className = "w-5 h-5", stroke = "currentColor" }: { className?: string; stroke?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-5-5" />
      <path d="M11 8a3 3 0 00-3 3" />
    </svg>
  );
}

export function HallmarkCrownIcon({ className = "w-5 h-5", stroke = "currentColor" }: { className?: string; stroke?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 18h18v2H3z" />
      <path d="M4 18l2-11 5 6 5-6 2 11" />
      <circle cx="6" cy="7" r="1" />
      <circle cx="12" cy="7" r="1" />
      <circle cx="18" cy="7" r="1" />
    </svg>
  );
}

export function WorkshopBenchIcon({ className = "w-5 h-5", stroke = "currentColor" }: { className?: string; stroke?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9h18v4H3z" />
      <path d="M5 13v8" />
      <path d="M19 13v8" />
      <path d="M8 9V5a2 2 0 012-2h4a2 2 0 012 2v4" />
      <circle cx="12" cy="17" r="1.5" />
    </svg>
  );
}

export function LondonLeopardIcon({ className = "w-6 h-6", classNameInner = "text-[#DFBF7A]" }: { className?: string; classNameInner?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Historic London Assay Leopard's Head Crest Silhouette */}
      <path d="M12 2C8.5 2 6 4.5 5 7.5c-.8 2.4-.2 5 .8 7 .8 1.6 2.2 3.2 4.2 4.5.6.4 1.2.7 2 .9.8-.2 1.4-.5 2-.9 2-1.3 3.4-2.9 4.2-4.5 1-2 1.6-4.6.8-7-1-3-3.5-5.5-7-5.5zm-4.2 5.2c.4-.6 1.1-.9 1.8-.7.4.1.7.4.9.8.2.5 0 1.1-.4 1.4-.6.5-1.5.3-1.9-.3-.3-.4-.3-.9-.4-1.2zm8.4 0c-.1.3-.1.8-.4 1.2-.4.6-1.3.8-1.9.3-.4-.3-.6-.9-.4-1.4.2-.4.5-.7.9-.8.7-.2 1.4.1 1.8.7zM12 17.5c-1.2 0-2.2-.4-3-.9.4-.8 1.4-1.4 3-1.4s2.6.6 3 1.4c-.8.5-1.8.9-3 .9zm-1.8-3.7c-.5-.2-1-.7-1-1.3 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .6-.5 1.1-1 1.3h-1zm3.6 0c-.5-.2-1-.7-1-1.3 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .6-.5 1.1-1 1.3h-1z" />
    </svg>
  );
}
