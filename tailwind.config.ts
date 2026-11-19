import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        obsidian: {
          DEFAULT: "#FFFFFF",
          50: "#FAF8F5",
          100: "#F5F2EB",
          200: "#ECE7DA",
          900: "#141416",
        },
        atelier: {
          DEFAULT: "#FFFFFF",
          light: "#FAF8F5",
          border: "#E8DEC8",
          muted: "#7A705E",
        },
        gold: {
          DEFAULT: "#996515",
          50: "#FAF7EE",
          100: "#F4ECDB",
          200: "#E6D5B4",
          300: "#C5A059",
          400: "#996515",
          500: "#85560C",
          600: "#6B4407",
          700: "#523304",
          800: "#382302",
          900: "#241601",
        },
        platinum: {
          DEFAULT: "#141416",
          muted: "#4A4A52",
          dark: "#7A7880",
        },
        champagne: {
          50: "#FDFCF9",
          100: "#FAF7F0",
          200: "#F3EDE0",
          300: "#E8DEC8",
          400: "#D4AF37",
          500: "#C5A059",
          600: "#996515",
        },
        emerald: {
          status: "#10B981",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#128C7E",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        vivaldi: ["var(--font-vivaldi)", "cursive"],
      },
      boxShadow: {
        "luxury-sm": "0 2px 8px -2px rgba(184, 134, 11, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
        "luxury-md": "0 8px 24px -4px rgba(184, 134, 11, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)",
        "luxury-lg": "0 16px 36px -6px rgba(184, 134, 11, 0.16), 0 4px 12px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        marquee: "marquee var(--duration, 35s) linear infinite",
        "marquee-reverse": "marquee-reverse var(--duration, 35s) linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0%)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
