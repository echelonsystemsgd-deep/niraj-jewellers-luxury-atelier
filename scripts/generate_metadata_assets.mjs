import fs from "fs";
import path from "path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve("./public");

// 1. Generate ICO file buffer from multiple PNG buffers
function createIco(pngBuffers) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngBuffers.length, 4);

  let offset = 6 + pngBuffers.length * 16;
  const directoryEntries = [];

  for (const { buffer, size } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color palette (0 = no palette)
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // image size in bytes
    entry.writeUInt32LE(offset, 12); // image offset

    directoryEntries.push(entry);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...directoryEntries, ...pngBuffers.map((p) => p.buffer)]);
}

async function main() {
  console.log("==> Generating Niraj Jewellers Ltd White & Gold Maison Metadata & App Icons...");

  // Load official high-resolution logo
  const logoPath = path.join(PUBLIC_DIR, "NIRAJ_LOGO9.png");
  if (!fs.existsSync(logoPath)) {
    throw new Error("NIRAJ_LOGO9.png not found in public/");
  }

  // 1. Generate Standard App Icons on Pristine White Canvas
  // 192x192 PNG
  const icon192Buffer = await sharp(logoPath)
    .resize(176, 176, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .extend({
      top: 8,
      bottom: 8,
      left: 8,
      right: 8,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, "icon-192.png"), icon192Buffer);
  console.log("✓ Created public/icon-192.png (192x192)");

  // 512x512 PNG
  const icon512Buffer = await sharp(logoPath)
    .resize(472, 472, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .extend({
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, "icon-512.png"), icon512Buffer);
  console.log("✓ Created public/icon-512.png (512x512)");

  // Apple Touch Icon (180x180)
  const appleTouchBuffer = await sharp(logoPath)
    .resize(164, 164, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .extend({
      top: 8,
      bottom: 8,
      left: 8,
      right: 8,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, "apple-touch-icon.png"), appleTouchBuffer);
  console.log("✓ Created public/apple-touch-icon.png (180x180)");

  // Microsoft Tile (150x150)
  const mstileBuffer = await sharp(logoPath)
    .resize(136, 136, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .extend({
      top: 7,
      bottom: 7,
      left: 7,
      right: 7,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, "mstile-150x150.png"), mstileBuffer);
  console.log("✓ Created public/mstile-150x150.png (150x150)");

  // Maskable Icons (Android Adaptive - with 20% safe-zone margin on pure white)
  const iconMaskable192 = await sharp(logoPath)
    .resize(140, 140, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .extend({
      top: 26,
      bottom: 26,
      left: 26,
      right: 26,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, "icon-maskable-192.png"), iconMaskable192);

  const iconMaskable512 = await sharp(logoPath)
    .resize(360, 360, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .extend({
      top: 76,
      bottom: 76,
      left: 76,
      right: 76,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, "icon-maskable-512.png"), iconMaskable512);
  console.log("✓ Created public/icon-maskable-192.png and 512.png");

  // 2. Multi-resolution favicon.ico (16x16, 32x32, 48x48)
  const ico16 = await sharp(logoPath).resize(16, 16, { fit: "contain" }).png().toBuffer();
  const ico32 = await sharp(logoPath).resize(32, 32, { fit: "contain" }).png().toBuffer();
  const ico48 = await sharp(logoPath).resize(48, 48, { fit: "contain" }).png().toBuffer();

  const icoBuffer = createIco([
    { buffer: ico16, size: 16 },
    { buffer: ico32, size: 32 },
    { buffer: ico48, size: 48 },
  ]);
  fs.writeFileSync(path.join(PUBLIC_DIR, "favicon.ico"), icoBuffer);
  console.log("✓ Created public/favicon.ico (16, 32, 48px)");

  // 3. Safari Pinned Tab SVG (Monochrome path with gold fill attribute in HTML)
  const safariSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
      <!-- NJ Monogram Silhouette -->
      <path fill="#000000" d="M174,330 L174,200 L202,200 L266,303 L266,200 L292,200 L292,330 L264,330 L200,227 L200,330 Z M302,200 L328,200 L328,297 C328,333 304,347 270,347 C242,347 224,335 218,317 L242,309 C246,319 256,325 270,325 C288,325 302,315 302,293 Z" />
      <polygon fill="#000000" points="256,132 278,152 256,180 234,152" />
    </svg>
  `;
  fs.writeFileSync(path.join(PUBLIC_DIR, "safari-pinned-tab.svg"), safariSvg.trim());
  console.log("✓ Created public/safari-pinned-tab.svg");

  // 4. browserconfig.xml for Windows Start Tiles
  const browserConfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="/mstile-150x150.png"/>
            <TileColor>#FFFFFF</TileColor>
        </tile>
    </msapplication>
</browserconfig>`;
  fs.writeFileSync(path.join(PUBLIC_DIR, "browserconfig.xml"), browserConfig);
  console.log("✓ Created public/browserconfig.xml");

  // 5. Static site.webmanifest for PWA fallback
  const siteWebmanifest = {
    name: "Niraj Jewellers Ltd | Bespoke Goldsmith & Bullion London",
    short_name: "Niraj Jewellers Ltd",
    description:
      "London's Bespoke Goldsmith Atelier & Direct Gold Wholesaler Since 1984. Handcrafted 22ct/18ct bridal suites, certified diamond rings, and live bullion rates by Niraj Jewellers Ltd.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#FFFFFF",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
  fs.writeFileSync(path.join(PUBLIC_DIR, "site.webmanifest"), JSON.stringify(siteWebmanifest, null, 2));
  console.log("✓ Created public/site.webmanifest");

  // 6. Generate White & Gold Flagship Atelier Master OpenGraph Image (1200 x 630)
  // Prepare embedded base64 of official gold logo
  const logoBase64 = fs.readFileSync(logoPath).toString("base64");

  const ogWhiteGoldSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
    <defs>
      <!-- Luxury Gold Gradients -->
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#C5A059" />
        <stop offset="40%" stop-color="#946A14" />
        <stop offset="70%" stop-color="#B8860B" />
        <stop offset="100%" stop-color="#855F0E" />
      </linearGradient>

      <linearGradient id="goldBtn" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#D4AF37" />
        <stop offset="50%" stop-color="#E5C158" />
        <stop offset="100%" stop-color="#C5A059" />
      </linearGradient>

      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="100%" stop-color="#F8F6F0" />
      </linearGradient>

      <radialGradient id="silkGlow" cx="50%" cy="25%" r="70%">
        <stop offset="0%" stop-color="rgba(197, 160, 89, 0.15)" />
        <stop offset="50%" stop-color="rgba(234, 219, 200, 0.3)" />
        <stop offset="100%" stop-color="#FAF9F6" />
      </radialGradient>
    </defs>

    <!-- Pristine Alabaster Silk Canvas -->
    <rect width="1200" height="630" fill="#FAF9F6" />
    <rect width="1200" height="630" fill="url(#silkGlow)" />

    <!-- Subtle Luxury Outer Frames -->
    <rect x="24" y="24" width="1152" height="582" rx="16" fill="none" stroke="#EADBC8" stroke-width="1.5" />
    <rect x="30" y="30" width="1140" height="570" rx="12" fill="none" stroke="rgba(197, 160, 89, 0.3)" stroke-width="1" />

    <!-- ================= 1. HEADER / NAVBAR ROW ================= -->
    <g transform="translate(60, 50)">
      <!-- Official Emblem Logo Image -->
      <image href="data:image/png;base64,${logoBase64}" x="0" y="0" width="56" height="56" />

      <!-- Brand Title & Heritage Subtitle -->
      <g transform="translate(68, 12)">
        <text x="0" y="16" fill="#141416" font-family="Georgia, serif" font-weight="800" font-size="22" letter-spacing="2">NIRAJ JEWELLERS LTD</text>
        <text x="0" y="34" fill="#946A14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="10" letter-spacing="4">HAYES • LONDON • SINCE 1984 • 42 YEARS OF EXCELLENCE</text>
      </g>

      <!-- Navigation Badges -->
      <g transform="translate(620, 16)" fill="#5C5C66" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="12" letter-spacing="1">
        <text x="0" y="12" fill="#946A14">54-Piece Vault</text>
        <text x="120" y="12">Bespoke CAD</text>
        <text x="235" y="12">In-House Repairs</text>
        <text x="370" y="12">LBMA Bullion</text>
      </g>

      <!-- Live Showroom Hours Badge -->
      <g transform="translate(930, 8)">
        <rect width="150" height="32" rx="16" fill="#FFFFFF" stroke="#EADBC8" stroke-width="1.2" />
        <circle cx="16" cy="16" r="4" fill="#10B981" />
        <text x="28" y="20" fill="#141416" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="11">Open Today 11–5pm</text>
      </g>
    </g>

    <line x1="60" y1="120" x2="1140" y2="120" stroke="#EADBC8" stroke-width="1" />

    <!-- ================= 2. CINEMATIC HERO SECTION ================= -->
    <g transform="translate(60, 145)">
      <!-- Eyebrow Pill -->
      <g transform="translate(0, 0)">
        <rect width="530" height="28" rx="14" fill="#FFFFFF" stroke="#EADBC8" stroke-width="1.2" />
        <polygon points="16,14 20,9 24,14 20,19" fill="#C5A059" />
        <text x="32" y="18" fill="#855F0E" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="10.5" letter-spacing="2">
          MASTER GOLDSMITHS • 136 UXBRIDGE ROAD • HAYES UB4 0JH
        </text>
      </g>

      <!-- Main Headline -->
      <g transform="translate(0, 48)">
        <text x="0" y="44" fill="#141416" font-family="Georgia, serif" font-weight="300" font-size="44" letter-spacing="-0.5">London&apos;s Bespoke</text>
        <text x="360" y="44" fill="url(#goldGradient)" font-family="Georgia, serif" font-weight="400" font-style="italic" font-size="44">Goldsmith Atelier</text>
        <text x="0" y="94" fill="#141416" font-family="Georgia, serif" font-weight="300" font-size="44" letter-spacing="-0.5">&amp; Direct Gold Wholesaler</text>
      </g>

      <!-- Subtitle Description -->
      <g transform="translate(0, 162)">
        <text x="0" y="18" fill="#4A4A52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="400" font-size="17" line-height="26">
          Handcrafted 22ct/18ct bridal suites, certified natural diamonds &amp; live bullion rates
        </text>
        <text x="0" y="44" fill="#4A4A52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="400" font-size="17">
          since 1984. Complete 54-piece showroom collection on Uxbridge Road, Hayes.
        </text>
      </g>

      <!-- Action Buttons -->
      <g transform="translate(0, 234)">
        <!-- Primary Gold CTA -->
        <rect width="260" height="46" rx="23" fill="url(#goldBtn)" />
        <text x="115" y="28" fill="#141416" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="12.5" letter-spacing="1">
          EXPLORE 54-PIECE VAULT
        </text>
        <path d="M216,24 L222,18 L216,12" stroke="#141416" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Direct Workshop Line Button -->
        <g transform="translate(278, 0)">
          <rect width="230" height="46" rx="23" fill="#FFFFFF" stroke="#25D366" stroke-width="1.5" />
          <circle cx="28" cy="23" r="10" fill="#25D366" />
          <path d="M25,20 C25.5,19 27,20 27.5,21 C28,22 27.5,23 27,23.5 C27.5,24.5 28.5,25.5 29.5,26 C30,25.5 31,25 32,25.5 C33,26 32,27.5 31,28 C30,28.5 28,28 26,26 C24,24 23.5,22 24,21 C24.5,20 25,20 25,20 Z" fill="#FFFFFF" />
          <text x="46" y="28" fill="#141416" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="12.5">
            WhatsApp: 07955 565137
          </text>
        </g>
      </g>
    </g>

    <!-- ================= 3. RIGHT HERO FEATURED SHOWCASE BENTO ================= -->
    <g transform="translate(740, 145)">
      <rect width="400" height="280" rx="16" fill="url(#cardGrad)" stroke="#EADBC8" stroke-width="1.5" />
      <rect x="6" y="6" width="388" height="268" rx="12" fill="none" stroke="rgba(197, 160, 89, 0.2)" stroke-width="1" />

      <!-- Card Top Badge -->
      <g transform="translate(24, 24)">
        <rect width="170" height="22" rx="11" fill="rgba(197, 160, 89, 0.15)" stroke="rgba(197, 160, 89, 0.4)" stroke-width="1" />
        <text x="85" y="15" fill="#855F0E" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="10" letter-spacing="1.5" text-anchor="middle">
          42 YEARS OF HERITAGE
        </text>
      </g>

      <text x="24" y="80" fill="#141416" font-family="Georgia, serif" font-weight="600" font-size="22">
        22ct Indian Bridal Suites
      </text>
      <text x="24" y="104" fill="#5C5C66" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13">
        Syndicate Polki, Kundan &amp; Hallmarked Gold
      </text>

      <!-- Mini Badges -->
      <g transform="translate(24, 126)">
        <rect width="165" height="28" rx="6" fill="#FAF9F6" stroke="#EADBC8" stroke-width="1" />
        <text x="12" y="18" fill="#141416" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">✓ London Leopard Hallmarked</text>

        <g transform="translate(175, 0)">
          <rect width="170" height="28" rx="6" fill="#FAF9F6" stroke="#EADBC8" stroke-width="1" />
          <text x="12" y="18" fill="#141416" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">✓ In-House 3D CAD Prototyping</text>
        </g>
      </g>

      <!-- Master Craftsman Signature Box -->
      <g transform="translate(24, 176)">
        <rect width="352" height="78" rx="10" fill="#FAF9F6" stroke="#EADBC8" stroke-width="1" />
        <circle cx="36" cy="39" r="22" fill="#FFFFFF" stroke="#C5A059" stroke-width="1.5" />
        <text x="36" y="45" fill="#855F0E" font-family="Georgia, serif" font-weight="bold" font-size="18" text-anchor="middle">NJ</text>

        <text x="70" y="32" fill="#141416" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="13">
          Principal Goldsmith: Viky &amp; Atelier Team
        </text>
        <text x="70" y="48" fill="#946A14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="11">
          Four Decades of Fine Jewellery on Uxbridge Road
        </text>
        <text x="70" y="64" fill="#5C5C66" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">
          Same-day ring resizing &amp; laser restorations
        </text>
      </g>
    </g>

    <!-- ================= 4. LIVE GOLD RATES MARQUEE ================= -->
    <g transform="translate(60, 485)">
      <rect width="1080" height="72" rx="12" fill="#FFFFFF" stroke="#EADBC8" stroke-width="1.5" />

      <!-- Left Ticker Tag -->
      <g transform="translate(24, 18)">
        <circle cx="8" cy="18" r="4.5" fill="#10B981" />
        <text x="20" y="16" fill="#855F0E" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="12" letter-spacing="2">
          LIVE BULLION RATES
        </text>
        <text x="20" y="28" fill="#7A7880" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500" font-size="10">
          LBMA London Spot Market
        </text>
      </g>

      <line x1="210" y1="14" x2="210" y2="58" stroke="#EADBC8" stroke-width="1" />

      <!-- Rates Grid -->
      <g transform="translate(235, 20)">
        <g transform="translate(0, 0)">
          <text x="0" y="14" fill="#5C5C66" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500">24ct Pure Gold (999)</text>
          <text x="0" y="32" fill="#141416" font-family="Georgia, serif" font-weight="700" font-size="16">£68.50 <tspan fill="#7A7880" font-size="11" font-family="sans-serif">/ gram</tspan></text>
        </g>

        <g transform="translate(210, 0)">
          <text x="0" y="14" fill="#5C5C66" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500">22ct Sovereign (916)</text>
          <text x="0" y="32" fill="#855F0E" font-family="Georgia, serif" font-weight="700" font-size="16">£62.80 <tspan fill="#7A7880" font-size="11" font-family="sans-serif">/ gram</tspan></text>
        </g>

        <g transform="translate(420, 0)">
          <text x="0" y="14" fill="#5C5C66" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500">18ct Fine Gold (750)</text>
          <text x="0" y="32" fill="#141416" font-family="Georgia, serif" font-weight="700" font-size="16">£51.40 <tspan fill="#7A7880" font-size="11" font-family="sans-serif">/ gram</tspan></text>
        </g>

        <g transform="translate(630, 0)">
          <text x="0" y="14" fill="#10B981" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">Direct Workshop Trading</text>
          <text x="0" y="32" fill="#141416" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="13">No Middleman Markups</text>
        </g>
      </g>
    </g>

    <!-- Bottom URL Footnote -->
    <text x="1140" y="598" fill="#7A7880" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500" letter-spacing="1" text-anchor="end">
      www.niraj-jewellers.co.uk • 136 Uxbridge Road, Hayes UB4 0JH • 07955 565137
    </text>
  </svg>
  `;

  // Render to public/og-image.png (Lossless)
  const ogPngBuffer = await sharp(Buffer.from(ogWhiteGoldSvg))
    .resize(1200, 630)
    .png({ quality: 95 })
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, "og-image.png"), ogPngBuffer);
  console.log("✓ Created public/og-image.png (1200x630 lossless White & Gold)");

  // Render to public/og-image.jpg (High-speed JPEG < 180KB for WhatsApp & Twitter)
  const ogJpgBuffer = await sharp(Buffer.from(ogWhiteGoldSvg))
    .resize(1200, 630)
    .jpeg({ quality: 90, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, "og-image.jpg"), ogJpgBuffer);
  console.log(`✓ Created public/og-image.jpg (1200x630, ${(ogJpgBuffer.length / 1024).toFixed(1)} KB)`);

  // Also duplicate as og-snapshot.jpg
  fs.writeFileSync(path.join(PUBLIC_DIR, "og-snapshot.jpg"), ogJpgBuffer);
  console.log("✓ Created public/og-snapshot.jpg");

  console.log("==> All metadata assets successfully generated!");
}

main().catch((err) => {
  console.error("Error generating metadata assets:", err);
  process.exit(1);
});
