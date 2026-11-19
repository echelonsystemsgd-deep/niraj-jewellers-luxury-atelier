"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-gold-600 via-gold-400 to-amber-300 origin-left z-[70] pointer-events-none shadow-[0_0_12px_rgba(212,175,55,0.8)]"
      aria-hidden="true"
    />
  );
}
