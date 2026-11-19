"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-8 right-4 sm:right-6 z-40 p-3 rounded-full bg-obsidian/90 backdrop-blur-xl border border-gold-500/40 text-gold-300 hover:text-white hover:bg-gold-500/20 shadow-2xl shadow-black/80 transition-colors group flex items-center justify-center touch-target"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 text-gold-400" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
