"use client";

import { Navbar } from "./navbar";

interface SubpageNavProps {
  currentTitle: string;
}

/**
 * SubpageNav forwards directly to the Unified Master Navbar,
 * displaying breadcrumbs, the active page gold indicator, and full navigation.
 */
export function SubpageNav({ currentTitle }: SubpageNavProps) {
  return <Navbar subpageTitle={currentTitle} />;
}
