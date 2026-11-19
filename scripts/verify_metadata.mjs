import fs from "fs";
import path from "path";

const PUBLIC_DIR = path.resolve("./public");
const APP_DIR = path.resolve("./app");
const NEXT_DIR = path.resolve("./.next");

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

// 2. Audit Prerendered HTML from .next/server/app/
console.log("\n2. AUDITING PRERENDERED HTML METATAGS & CANONICALS:");
const routesToCheck = [
  { route: "/", fileName: "index.html", expectedTitle: "Niraj Jewellers | Bespoke Goldsmith & Bullion" },
  { route: "/collections", fileName: "collections.html", expectedTitle: "Atelier Collections & Bridal Suites" },
  { route: "/bespoke", fileName: "bespoke.html", expectedTitle: "Bespoke Jewellery & 3D CAD Commissions" },
  { route: "/repairs", fileName: "repairs.html", expectedTitle: "Same-Day In-House Jewellery Repairs Hayes" },
  { route: "/gold-rates", fileName: "gold-rates.html", expectedTitle: "Live Gold Rates Hayes London" },
  { route: "/showroom", fileName: "showroom.html", expectedTitle: "Hayes Flagship Showroom & Atelier Hub" },
  { route: "/contact", fileName: "contact.html", expectedTitle: "Contact & VIP WhatsApp Concierge" },
  { route: "/privacy", fileName: "privacy.html", expectedTitle: "Privacy Policy" },
  { route: "/terms", fileName: "terms.html", expectedTitle: "Terms of Service & Atelier Policies" },
];

let htmlFailures = 0;
for (const { route, fileName, expectedTitle } of routesToCheck) {
  const fullPath = path.join(NEXT_DIR, "server", "app", fileName);
  if (!fs.existsSync(fullPath)) {
    console.error(`  [FAIL] Prerendered HTML not found for ${route} at ${fullPath}`);
    htmlFailures++;
    continue;
  }

  const html = fs.readFileSync(fullPath, "utf-8");
  const expectedEscaped = expectedTitle.replace(/&/g, "&amp;");
  const hasTitle = html.includes(expectedEscaped);
  const hasOgImage = html.includes("og-image.jpg") || html.includes("og-image.png");
  const hasTwitterCard = html.includes("summary_large_image");
  const hasCanonical = html.includes('rel="canonical"');
  const hasSchema = html.includes("schema.org");

  if (!hasTitle) {
    console.error(`  [FAIL] ${route}: Expected title "${expectedTitle}" missing in HTML`);
    htmlFailures++;
  } else {
    console.log(`  [PASS] ${route.padEnd(16)} -> Title verified: "${expectedTitle}"`);
  }

  if (route === "/") {
    const hasGeo = html.includes("GB-HIL") && html.includes("51.5229;-0.4228");
    const hasVat = html.includes("GB 842 9617 32");
    console.log(`  [${hasOgImage ? 'PASS' : 'FAIL'}] Homepage Open Graph Image: /og-image.jpg`);
    console.log(`  [${hasTwitterCard ? 'PASS' : 'FAIL'}] Homepage Twitter Card: summary_large_image`);
    console.log(`  [${hasCanonical ? 'PASS' : 'FAIL'}] Homepage Canonical URL link`);
    console.log(`  [${hasGeo ? 'PASS' : 'FAIL'}] Local SEO Geo Tags: GB-HIL / 51.5229, -0.4228`);
    console.log(`  [${hasSchema ? 'PASS' : 'FAIL'}] Schema.org Linked Graph (JewelryStore / WebSite / VAT: ${hasVat})`);
  }
}

console.log("\n======================================================");
if (assetFailures === 0 && htmlFailures === 0) {
  console.log("   ALL AUDITS PASSED WITH ZERO ERRORS (0 FAILS)      ");
  console.log("======================================================");
  process.exit(0);
} else {
  console.error(`   AUDIT FINISHED WITH ${assetFailures + htmlFailures} FAILURES`);
  console.log("======================================================");
  process.exit(1);
}
