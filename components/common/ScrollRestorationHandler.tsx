"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Universal Scroll Restoration Handler
 * Guarantees that whenever the user navigates between pages on mobile, tablet, or desktop,
 * the viewport instantly and reliably resets to the top (scrollY: 0),
 * preventing the user from landing halfway down any destination page.
 */
export function ScrollRestorationHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Instantly reset scroll coordinates
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}
