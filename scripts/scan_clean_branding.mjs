import fs from "fs";
import path from "path";

const dirs = ["app", "components", "data", "lib", "public"];
const forbidden = [
  "vercel",
  "nextjs",
  "next.js",
  "create next app",
  "shadcn",
  "aceternity",
  "magicui",
  "tailwind ui",
  "unsplash",
  "mixkit",
  "shiva",
  "viky"
];

let found = 0;
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (item !== "node_modules" && item !== ".next") walk(full);
    } else if (/\.(tsx|ts|js|mjs|json|html|css)$/.test(item)) {
      const content = fs.readFileSync(full, "utf-8");
      const lines = content.split("\n");
      lines.forEach((line, idx) => {
        const lower = line.toLowerCase();
        for (const word of forbidden) {
          // Exempt standard package imports like @vercel/og or next/link
          if (word === "vercel" && (line.includes("@vercel/og") || line.includes("va.vercel-scripts.com"))) continue;
          if (word === "next.js" && (line.includes("next/font") || line.includes("next/image") || line.includes("next/link"))) continue;
          if (lower.includes(word)) {
            console.log(`[${word.toUpperCase()}] ${full}:${idx + 1} -> ${line.trim()}`);
            found++;
          }
        }
      });
    }
  }
}

for (const d of dirs) walk(d);
console.log(`\nScan completed: ${found} matches found.`);
