import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Niraj Jewellers | Bespoke Goldsmith & Bullion London",
    short_name: "Niraj Jewellers",
    description: "London's Bespoke Goldsmith Atelier & Direct Gold Wholesaler. Handcrafted 22ct/18ct bridal suites, certified diamond rings, and live bullion rates by Master Jeweller Viky.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#09090B",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
