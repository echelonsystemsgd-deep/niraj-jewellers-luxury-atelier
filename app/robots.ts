import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/test-404"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "Applebot-Extended",
          "Amazonbot",
        ],
        allow: "/",
        disallow: ["/api/", "/test-404"],
      },
    ],
    sitemap: "https://nirajjewellers.co.uk/sitemap.xml",
    host: "https://nirajjewellers.co.uk",
  };
}
