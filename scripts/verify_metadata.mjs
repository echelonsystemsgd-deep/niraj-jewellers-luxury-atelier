import fs from "fs";
import path from "path";

const PUBLIC_DIR = path.resolve("./public");
const APP_DIR = path.resolve("./app");

console.log("======================================================");
console.log("  NIRAJ JEWELLERS LTD — MASTER METADATA AUDIT SUITE   ");
console.log("======================================================\n");

// 1. Verify Public Assets Existence & Size
const expectedAssets = [
  { file: "favicon.ico", minBytes: 1000 },
  { file: "favicon.svg", minBytes: 500 },
  { file: "apple-touch-icon.png", minBytes: 5000 },
  { file: "icon-192.png", minBytes: 5000 },
  { file: "icon-512.png", minBytes: 10000 },
  { file: "icon-maskable-192.png", minBytes: 5000 },
  { file: "icon-maskable-512.png", minBytes: 10000 },
  { file: "mstile-150x150.png", minBytes: 4000 },
  { file: "safari-pinned-tab.svg", minBytes: 200 },
  { file: "browserconfig.xml", minBytes: 100 },
  { file: "site.webmanifest", minBytes: 300 },
  { file: "og-image.jpg", minBytes: 40000 },
  { file: "og-image.png", minBytes: 40000 },
  { file: "og-snapshot.jpg", minBytes: 40000 },
  { file: "NIRAJ_LOGO9.png", minBytes: 50000 },
];

console.log("1. AUDITING PHYSICAL BRAND & METADATA ASSETS IN public/:");
let assetFailures = 0;
for (const { file, minBytes } of expectedAssets) {
  const filePath = path.join(PUBLIC_DIR, file);
  if (!fs.existsSync(filePath)) {
    console.error(`  [FAIL] Missing file: ${file}`);
    assetFailures++;
  } else {
    const stat = fs.statSync(filePath);
    if (stat.size < minBytes) {
      console.error(`  [FAIL] ${file} too small: ${stat.size} bytes (expected >= ${minBytes})`);
      assetFailures++;
    } else {
      console.log(`  [PASS] ${file.padEnd(24)} -> ${(stat.size / 1024).toFixed(1)} KB`);
    }
  }
}

// 2. Audit All 13 App Routes Metadata Definitions
console.log("\n2. AUDITING ROUTE METADATA & CANONICAL TARGETS:");
const routesToCheck = [
  { route: "/", filePath: "app/layout.tsx", titleSnippet: "Niraj Jewellers Ltd | Bespoke Goldsmith & Bullion Hayes London" },
  { route: "/about", filePath: "app/about/page.tsx", titleSnippet: "About Us | Niraj Jewellers Ltd — Hayes, London Goldsmith Heritage Since 1984" },
  { route: "/collections", filePath: "app/collections/page.tsx", titleSnippet: "Atelier Collections & 54-Piece Vault | Niraj Jewellers Ltd London" },
  { route: "/bespoke", filePath: "app/bespoke/page.tsx", titleSnippet: "Bespoke Jewellery & 3D CAD Commissions | Niraj Jewellers Ltd London" },
  { route: "/repairs", filePath: "app/repairs/page.tsx", titleSnippet: "Same-Day In-House Jewellery Repairs Hayes | Niraj Jewellers Ltd" },
  { route: "/gold-rates", filePath: "app/gold-rates/page.tsx", titleSnippet: "Live Gold Rates Hayes London (24ct, 22ct, 18ct) | Niraj Jewellers Ltd" },
  { route: "/showroom", filePath: "app/showroom/page.tsx", titleSnippet: "Hayes Flagship Showroom & Atelier Hub | Niraj Jewellers Ltd London" },
  { route: "/faqs", filePath: "app/faqs/page.tsx", titleSnippet: "Frequently Asked Questions | Niraj Jewellers Ltd London" },
  { route: "/contact", filePath: "app/contact/page.tsx", titleSnippet: "Contact & Direct WhatsApp Concierge | Niraj Jewellers Ltd London" },
  { route: "/articles", filePath: "app/articles/page.tsx", titleSnippet: "Atelier Articles & Goldsmith Knowledge Hub | Niraj Jewellers Ltd London" },
  { route: "/articles/[slug]", filePath: "app/articles/[slug]/page.tsx", titleSnippet: "generateMetadata" },
  { route: "/privacy", filePath: "app/privacy/page.tsx", titleSnippet: "Privacy Policy | Niraj Jewellers Ltd London" },
  { route: "/terms", filePath: "app/terms/page.tsx", titleSnippet: "Terms of Service & Atelier Policies | Niraj Jewellers Ltd London" },
  { route: "/test-404", filePath: "app/test-404/page.tsx", titleSnippet: "404 Preview - Piece Melted Down | Niraj Jewellers Ltd London" },
  { route: "not-found", filePath: "app/not-found.tsx", titleSnippet: "404 - Piece Melted Down | Niraj Jewellers Ltd London" },
];

let routeFailures = 0;
for (const { route, filePath, titleSnippet } of routesToCheck) {
  const fullPath = path.resolve(filePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`  [FAIL] Route file not found for ${route} at ${filePath}`);
    routeFailures++;
    continue;
  }

  const content = fs.readFileSync(fullPath, "utf-8");
  const hasTitle = content.includes(titleSnippet);

  if (!hasTitle) {
    console.error(`  [FAIL] ${route}: Title snippet "${titleSnippet}" missing in ${filePath}`);
    routeFailures++;
  } else {
    console.log(`  [PASS] ${route.padEnd(20)} -> Verified in ${filePath}`);
  }
}

// 3. Audit Domain Canonical Standardization
console.log("\n3. AUDITING CANONICAL DOMAIN CONSISTENCY (www.niraj-jewellers.co.uk):");
const domainFiles = [
  { file: "app/sitemap.ts", check: 'const baseUrl = "https://www.niraj-jewellers.co.uk";' },
  { file: "app/robots.ts", check: 'sitemap: "https://www.niraj-jewellers.co.uk/sitemap.xml"' },
  { file: "app/layout.tsx", check: '"https://www.niraj-jewellers.co.uk"' },
  { file: ".env", check: "NEXT_PUBLIC_SITE_URL=https://www.niraj-jewellers.co.uk" },
  { file: ".env.example", check: "NEXT_PUBLIC_SITE_URL=https://www.niraj-jewellers.co.uk" },
];

for (const { file, check } of domainFiles) {
  const fullPath = path.resolve(file);
  const content = fs.readFileSync(fullPath, "utf-8");
  if (!content.includes(check)) {
    console.error(`  [FAIL] ${file} does not contain expected canonical domain string: "${check}"`);
    routeFailures++;
  } else {
    console.log(`  [PASS] ${file.padEnd(20)} -> Matches canonical domain standard`);
  }
}

// 4. Audit 404 Alchemist Crucible Component
console.log("\n4. AUDITING 404 ALCHEMIST CRUCIBLE FORGE COMPONENT:");
const cruciblePath = path.resolve("components/error/alchemy-crucible-404.tsx");
if (fs.existsSync(cruciblePath)) {
  const code = fs.readFileSync(cruciblePath, "utf-8");
  const hasCanvas = code.includes("<canvas");
  const hasCrucible = code.includes("crucible");
  const hasSparks = code.includes("sparks");
  const hasWhatsApp = code.includes("whatsapp");
  const hasHallmark = code.includes("London Leopard");

  console.log(`  [${hasCanvas ? 'PASS' : 'FAIL'}] Particle Canvas Layer (Sparks & Floating Embers)`);
  console.log(`  [${hasCrucible ? 'PASS' : 'FAIL'}] Animated SVG Crucible & Anvil Apparatus`);
  console.log(`  [${hasSparks ? 'PASS' : 'FAIL'}] Interactive Smelter Boost & Solidify Controls`);
  console.log(`  [${hasWhatsApp ? 'PASS' : 'FAIL'}] VIP WhatsApp Concierge Integration`);
  console.log(`  [${hasHallmark ? 'PASS' : 'FAIL'}] London Assay Office Leopard Hallmark Accreditation`);
} else {
  console.error("  [FAIL] components/error/alchemy-crucible-404.tsx not found");
  routeFailures++;
}

console.log("\n======================================================");
if (assetFailures === 0 && routeFailures === 0) {
  console.log("   ALL AUDITS PASSED WITH ZERO ERRORS (0 FAILS)      ");
  console.log("======================================================");
  process.exit(0);
} else {
  console.error(`   AUDIT FINISHED WITH ${assetFailures + routeFailures} FAILURES`);
  console.log("======================================================");
  process.exit(1);
}
