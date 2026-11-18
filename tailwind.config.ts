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
          DEFAULT: "#09090B",
          50: "#18181B",
          100: "#141416",
          200: "#0D0D0E",
          900: "#09090B",
        },
        atelier: {
          DEFAULT: "#141416",
          light: "#1C1C1F",
          border: "#27272A",
          muted: "#3F3F46",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FCF9EE",
          100: "#F7F0D5",
          200: "#EEDFA8",
          300: "#E4CE7B",
          400: "#DABD4E",
          500: "#D4AF37",
          600: "#C5A059",
          700: "#996515",
          800: "#754C0E",
          900: "#4D3108",
        },
        platinum: {
          DEFAULT: "#E4E4E7",
          muted: "#A1A1AA",
          dark: "#71717A",
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
