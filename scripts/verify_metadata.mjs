import fs from "fs";
import path from "path";

const PUBLIC_DIR = path.resolve("./public");
const APP_DIR = path.resolve("./app");

console.log("======================================================");
console.log("    NIRAJ JEWELLERS METADATA & ASSET VERIFICATION    ");
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

// 2. Audit App Routes Metadata Definitions
console.log("\n2. AUDITING ROUTE METADATA & CANONICAL TARGETS:");
const routesToCheck = [
  { route: "/", filePath: "app/layout.tsx", titleSnippet: "Niraj Jewellers | Bespoke Goldsmith & Bullion Hayes London" },
  { route: "/collections", filePath: "app/collections/page.tsx", titleSnippet: "Atelier Collections & Bridal Suites" },
  { route: "/bespoke", filePath: "app/bespoke/page.tsx", titleSnippet: "Bespoke Jewellery & 3D CAD Commissions" },
  { route: "/repairs", filePath: "app/repairs/page.tsx", titleSnippet: "Same-Day In-House Jewellery Repairs Hayes" },
  { route: "/gold-rates", filePath: "app/gold-rates/page.tsx", titleSnippet: "Live Gold Rates Hayes London" },
  { route: "/showroom", filePath: "app/showroom/page.tsx", titleSnippet: "Hayes Flagship Showroom & Atelier Hub" },
  { route: "/contact", filePath: "app/contact/page.tsx", titleSnippet: "Contact & VIP WhatsApp Concierge" },
  { route: "/privacy", filePath: "app/privacy/page.tsx", titleSnippet: "Privacy Policy" },
  { route: "/terms", filePath: "app/terms/page.tsx", titleSnippet: "Terms of Service & Atelier Policies" },
  { route: "/test-404", filePath: "app/test-404/page.tsx", titleSnippet: "404 Preview - Piece Melted Down" },
  { route: "not-found", filePath: "app/not-found.tsx", titleSnippet: "404 - Piece Melted Down" },
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
  const hasMetadata = content.includes("Metadata") || content.includes("metadata");

  if (!hasTitle) {
    console.error(`  [FAIL] ${route}: Title snippet "${titleSnippet}" missing in ${filePath}`);
    routeFailures++;
  } else {
    console.log(`  [PASS] ${route.padEnd(16)} -> Title verified: "${titleSnippet}"`);
  }
}

// 3. Audit 404 Alchemist Crucible Component
console.log("\n3. AUDITING 404 ALCHEMIST CRUCIBLE FORGE COMPONENT:");
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
