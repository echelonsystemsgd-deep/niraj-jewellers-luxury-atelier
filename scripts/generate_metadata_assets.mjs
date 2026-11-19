import fs from "fs";
import path from "path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve("./public");

// 1. Generate ICO file buffer from multiple PNG buffers
function createIco(pngBuffers) {
  // ICO header: 6 bytes
  // Reserved (2 bytes) = 0
  // Type (2 bytes) = 1 (icon)
  // Count (2 bytes) = pngBuffers.length
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
  console.log("==> Generating Niraj Jewellers Metadata & App Icon Assets...");

  // Load logo SVG
  const logoSvgPath = path.join(PUBLIC_DIR, "logo.svg");
  const logoSvg = fs.readFileSync(logoSvgPath, "utf-8");

  // 1. Generate PNG Icons of various resolutions
  const icon192Buffer = await sharp(Buffer.from(logoSvg))
    .resize(192, 192)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, "icon-192.png"), icon192Buffer);
  console.log("✓ Created public/icon-192.png");

  const icon512Buffer = await sharp(Buffer.from(logoSvg))
    .resize(512, 512)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, "icon-512.png"), icon512Buffer);
  console.log("✓ Created public/icon-512.png");

  // Apple Touch Icon (180x180)
  const appleTouchBuffer = await sharp(Buffer.from(logoSvg))
    .resize(180, 180)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, "apple-touch-icon.png"), appleTouchBuffer);
  console.log("✓ Created public/apple-touch-icon.png");

  // Microsoft Tile (150x150)
  const mstileBuffer = await sharp(Buffer.from(logoSvg))
    .resize(150, 150)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, "mstile-150x150.png"), mstileBuffer);
  console.log("✓ Created public/mstile-150x150.png");

  // Maskable Icons (Android Adaptive - with 12% safe-zone margin)
  const innerLogo = logoSvg.substring(logoSvg.indexOf('>') + 1, logoSvg.lastIndexOf('</svg>'));
  const maskableSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
      <rect width="512" height="512" fill="#09090B" />
      <g transform="translate(64, 64) scale(0.75)">
        ${innerLogo}
      </g>
    </svg>
  `;
  const iconMaskable192 = await sharp(Buffer.from(maskableSvg))
    .resize(192, 192)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, "icon-maskable-192.png"), iconMaskable192);

  const iconMaskable512 = await sharp(Buffer.from(maskableSvg))
    .resize(512, 512)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, "icon-maskable-512.png"), iconMaskable512);
  console.log("✓ Created public/icon-maskable-192.png and 512.png");

  // 2. Multi-resolution favicon.ico (16x16, 32x32, 48x48)
  const ico16 = await sharp(Buffer.from(logoSvg)).resize(16, 16).png().toBuffer();
  const ico32 = await sharp(Buffer.from(logoSvg)).resize(32, 32).png().toBuffer();
  const ico48 = await sharp(Buffer.from(logoSvg)).resize(48, 48).png().toBuffer();

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
            <TileColor>#09090B</TileColor>
        </tile>
    </msapplication>
</browserconfig>`;
  fs.writeFileSync(path.join(PUBLIC_DIR, "browserconfig.xml"), browserConfig);
  console.log("✓ Created public/browserconfig.xml");

  // 5. Static site.webmanifest for PWA fallback
  const siteWebmanifest = {
    name: "Niraj Jewellers London | Bespoke Goldsmith & Bullion",
    short_name: "Niraj Jewellers",
    description: "London's Bespoke Goldsmith Atelier & Direct Gold Wholesaler. Handcrafted 22ct/18ct bridal suites, certified diamond rings, and live bullion rates by Master Jeweller Viky.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#09090B",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  };
  fs.writeFileSync(path.join(PUBLIC_DIR, "site.webmanifest"), JSON.stringify(siteWebmanifest, null, 2));
  console.log("✓ Created public/site.webmanifest");

  // 6. Generate High-Definition Website Snapshot Open Graph Image (1200 x 630)
  // This recreates the authentic website UI snapshot with the header, hero, live ticker, and atelier credentials
  const ogSnapshotSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
    <defs>
      <!-- Luxury Gold Gradients -->
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF3D6" />
        <stop offset="35%" stop-color="#D4AF37" />
        <stop offset="70%" stop-color="#AA771C" />
        <stop offset="100%" stop-color="#85580F" />
      </linearGradient>

      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#18181B" />
        <stop offset="100%" stop-color="#0F0F12" />
      </linearGradient>

      <linearGradient id="goldBtn" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#D4AF37" />
        <stop offset="50%" stop-color="#E5C158" />
        <stop offset="100%" stop-color="#B8860B" />
      </linearGradient>

      <radialGradient id="heroGlow" cx="50%" cy="30%" r="65%">
        <stop offset="0%" stop-color="rgba(212, 175, 55, 0.16)" />
        <stop offset="50%" stop-color="rgba(212, 175, 55, 0.04)" />
        <stop offset="100%" stop-color="rgba(9, 9, 11, 0)" />
      </radialGradient>

      <radialGradient id="topAura" cx="80%" cy="15%" r="40%">
        <stop offset="0%" stop-color="rgba(212, 175, 55, 0.12)" />
        <stop offset="100%" stop-color="rgba(9, 9, 11, 0)" />
      </radialGradient>
    </defs>

    <!-- Deep Obsidian Canvas -->
    <rect width="1200" height="630" fill="#09090B" />
    <rect width="1200" height="630" fill="url(#heroGlow)" />
    <rect width="1200" height="630" fill="url(#topAura)" />

    <!-- Subtle Luxury Outer Frame -->
    <rect x="24" y="24" width="1152" height="582" rx="16" fill="none" stroke="#27272A" stroke-width="1.5" />
    <rect x="30" y="30" width="1140" height="570" rx="12" fill="none" stroke="rgba(212, 175, 55, 0.2)" stroke-width="1" />

    <!-- ================= 1. WEBSITE HEADER / NAVBAR SNAPSHOT ================= -->
    <g transform="translate(60, 52)">
      <!-- Brand Crest & Monogram -->
      <g transform="translate(0, 0)">
        <rect width="44" height="44" rx="10" fill="#141416" stroke="#D4AF37" stroke-width="1.2" />
        <text x="22" y="29" fill="url(#goldGradient)" font-family="Georgia, serif" font-weight="900" font-size="20" text-anchor="middle">NJ</text>
      </g>

      <!-- Brand Name -->
      <text x="56" y="24" fill="#FFFFFF" font-family="Georgia, serif" font-weight="800" font-size="20" letter-spacing="2">NIRAJ JEWELLERS</text>
      <text x="56" y="40" fill="#D4AF37" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="10" letter-spacing="3.5">LONDON • MASTER GOLDSMITHS</text>

      <!-- Navigation Links Mockup -->
      <g transform="translate(420, 15)" fill="#A1A1AA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500" font-size="13" letter-spacing="1">
        <text x="0" y="12" fill="#D4AF37">Collections</text>
        <text x="95" y="12">Bespoke Atelier</text>
        <text x="220" y="12">In-House Repairs</text>
        <text x="360" y="12">Live Gold Rates</text>
        <text x="490" y="12">Showroom Hub</text>
      </g>

      <!-- Showroom Live Status Badge -->
      <g transform="translate(930, 8)">
        <rect width="150" height="30" rx="15" fill="#141416" stroke="rgba(212, 175, 55, 0.4)" stroke-width="1" />
        <circle cx="16" cy="15" r="4" fill="#10B981" />
        <text x="28" y="19" fill="#E4E4E7" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="11">Open Today 11–5pm</text>
      </g>
    </g>

    <!-- Subtle Divider Line -->
    <line x1="60" y1="112" x2="1140" y2="112" stroke="#27272A" stroke-width="1" />

    <!-- ================= 2. CINEMATIC HERO SECTION SNAPSHOT ================= -->
    <g transform="translate(60, 138)">
      <!-- Tagline Pill -->
      <g transform="translate(0, 0)">
        <rect width="490" height="28" rx="14" fill="#141416" stroke="rgba(212, 175, 55, 0.35)" stroke-width="1" />
        <polygon points="18,14 21,9 26,14 21,19" fill="#D4AF37" />
        <text x="32" y="18" fill="#F3E5AB" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="10.5" letter-spacing="2.2">
          MASTER GOLDSMITHS • 136 UXBRIDGE ROAD • HAYES
        </text>
      </g>

      <!-- Main Headline -->
      <g transform="translate(0, 48)">
        <text x="0" y="44" fill="#FFFFFF" font-family="Georgia, serif" font-weight="300" font-size="44" letter-spacing="-0.5">London&apos;s Bespoke</text>
        <text x="360" y="44" fill="url(#goldGradient)" font-family="Georgia, serif" font-weight="400" font-style="italic" font-size="44">Goldsmith Atelier</text>
        <text x="0" y="94" fill="#FFFFFF" font-family="Georgia, serif" font-weight="300" font-size="44" letter-spacing="-0.5">&amp; Direct Gold Wholesaler</text>
      </g>

      <!-- Subtitle Description -->
      <g transform="translate(0, 162)">
        <text x="0" y="18" fill="#A1A1AA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="400" font-size="17" line-height="26">
          Handcrafted 22ct/18ct bridal suites, certified natural diamonds &amp; live bullion rates
        </text>
        <text x="0" y="44" fill="#A1A1AA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="400" font-size="17">
          by Master Jeweller Viky. In-house Hayes workshop pricing with no retail markups.
        </text>
      </g>

      <!-- Action Buttons -->
      <g transform="translate(0, 234)">
        <!-- Primary Gold CTA -->
        <rect width="250" height="46" rx="23" fill="url(#goldBtn)" />
        <text x="110" y="28" fill="#09090B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="13" letter-spacing="1">
          DESIGN YOUR PIECE
        </text>
        <path d="M198,24 L204,18 L198,12" stroke="#09090B" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round" />

        <!-- WhatsApp VIP Button -->
        <g transform="translate(268, 0)">
          <rect width="220" height="46" rx="23" fill="#141416" stroke="#25D366" stroke-width="1.2" />
          <circle cx="28" cy="23" r="10" fill="#25D366" />
          <path d="M25,20 C25.5,19 27,20 27.5,21 C28,22 27.5,23 27,23.5 C27.5,24.5 28.5,25.5 29.5,26 C30,25.5 31,25 32,25.5 C33,26 32,27.5 31,28 C30,28.5 28,28 26,26 C24,24 23.5,22 24,21 C24.5,20 25,20 25,20 Z" fill="#FFFFFF" />
          <text x="46" y="28" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="12.5" letter-spacing="0.5">
            WhatsApp Master Viky
          </text>
        </g>
      </g>
    </g>

    <!-- ================= 3. RIGHT HERO FEATURED SHOWCASE CARD ================= -->
    <g transform="translate(740, 142)">
      <!-- Luxury Showcase Bento Box -->
      <rect width="400" height="280" rx="16" fill="url(#cardGrad)" stroke="#27272A" stroke-width="1.5" />
      <rect x="6" y="6" width="388" height="268" rx="12" fill="none" stroke="rgba(212, 175, 55, 0.15)" stroke-width="1" />

      <!-- Card Top Badge -->
      <g transform="translate(24, 24)">
        <rect width="130" height="22" rx="11" fill="rgba(212, 175, 55, 0.12)" stroke="rgba(212, 175, 55, 0.3)" stroke-width="1" />
        <text x="65" y="15" fill="#D4AF37" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="10" letter-spacing="1.5" text-anchor="middle">
          ATELIER SPOTLIGHT
        </text>
      </g>

      <text x="24" y="80" fill="#FFFFFF" font-family="Georgia, serif" font-weight="600" font-size="22">
        22ct Indian Bridal Suites
      </text>
      <text x="24" y="104" fill="#A1A1AA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13">
        Kundan, Polki &amp; Hallmarked Solid Gold
      </text>

      <!-- Mini Spec Badges -->
      <g transform="translate(24, 126)">
        <!-- Pill 1 -->
        <rect width="165" height="28" rx="6" fill="#141416" stroke="#27272A" stroke-width="1" />
        <text x="12" y="18" fill="#E4E4E7" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">✓ London Leopard Hallmarked</text>

        <!-- Pill 2 -->
        <g transform="translate(175, 0)">
          <rect width="170" height="28" rx="6" fill="#141416" stroke="#27272A" stroke-width="1" />
          <text x="12" y="18" fill="#E4E4E7" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">✓ 100% In-House Casting</text>
        </g>
      </g>

      <!-- Master Craftsman Signature Box -->
      <g transform="translate(24, 176)">
        <rect width="352" height="78" rx="10" fill="#141416" stroke="rgba(212, 175, 55, 0.25)" stroke-width="1" />
        <circle cx="36" cy="39" r="22" fill="#27272A" stroke="#D4AF37" stroke-width="1" />
        <text x="36" y="45" fill="#FFF3D6" font-family="Georgia, serif" font-weight="bold" font-size="18" text-anchor="middle">V</text>

        <text x="70" y="32" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="13">
          Principal Jeweller: Viky
        </text>
        <text x="70" y="48" fill="#D4AF37" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500" font-size="11">
          Decades of Fine Goldsmithing in Hayes
        </text>
        <text x="70" y="64" fill="#A1A1AA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">
          Same-day ring resizing &amp; laser repairs
        </text>
      </g>
    </g>

    <!-- ================= 4. LIVE GOLD RATES MARQUEE SNAPSHOT ================= -->
    <g transform="translate(60, 485)">
      <rect width="1080" height="72" rx="12" fill="#141416" stroke="#27272A" stroke-width="1.2" />

      <!-- Left Ticker Tag -->
      <g transform="translate(24, 18)">
        <circle cx="8" cy="18" r="4.5" fill="#10B981" />
        <text x="20" y="16" fill="#D4AF37" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="12" letter-spacing="2">
          LIVE BULLION RATES
        </text>
        <text x="20" y="28" fill="#71717A" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500" font-size="10">
          LBMA London Market
        </text>
      </g>

      <line x1="200" y1="14" x2="200" y2="58" stroke="#27272A" stroke-width="1" />

      <!-- Rates Grid -->
      <g transform="translate(225, 20)">
        <!-- 24ct Pure Gold -->
        <g transform="translate(0, 0)">
          <text x="0" y="14" fill="#A1A1AA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500">24ct Pure Gold (999)</text>
          <text x="0" y="32" fill="#FFFFFF" font-family="Georgia, serif" font-weight="700" font-size="16">£68.50 <tspan fill="#71717A" font-size="11" font-family="sans-serif">/ gram</tspan></text>
        </g>

        <!-- 22ct Sovereign & Bridal -->
        <g transform="translate(220, 0)">
          <text x="0" y="14" fill="#A1A1AA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500">22ct Sovereign (916)</text>
          <text x="0" y="32" fill="#D4AF37" font-family="Georgia, serif" font-weight="700" font-size="16">£62.80 <tspan fill="#71717A" font-size="11" font-family="sans-serif">/ gram</tspan></text>
        </g>

        <!-- 18ct Fine Gold -->
        <g transform="translate(430, 0)">
          <text x="0" y="14" fill="#A1A1AA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500">18ct Fine Gold (750)</text>
          <text x="0" y="32" fill="#FFFFFF" font-family="Georgia, serif" font-weight="700" font-size="16">£51.40 <tspan fill="#71717A" font-size="11" font-family="sans-serif">/ gram</tspan></text>
        </g>

        <!-- Direct Wholesale -->
        <g transform="translate(640, 0)">
          <text x="0" y="14" fill="#10B981" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">Direct Workshop Trading</text>
          <text x="0" y="32" fill="#E4E4E7" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="13">No Middleman Markups</text>
        </g>
      </g>
    </g>

    <!-- Bottom URL Footnote -->
    <text x="1140" y="598" fill="#71717A" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500" letter-spacing="1" text-anchor="end">
      nirajjewellers.co.uk • 136 Uxbridge Road, Hayes UB4 0JH • +44 7955 565137
    </text>
  </svg>
  `;

  // Render to public/og-image.png (Lossless)
  const ogPngBuffer = await sharp(Buffer.from(ogSnapshotSvg))
    .resize(1200, 630)
    .png({ quality: 95 })
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, "og-image.png"), ogPngBuffer);
  console.log("✓ Created public/og-image.png (1200x630 lossless)");

  // Render to public/og-image.jpg (High-speed JPEG < 180KB for WhatsApp & Twitter)
  const ogJpgBuffer = await sharp(Buffer.from(ogSnapshotSvg))
    .resize(1200, 630)
    .jpeg({ quality: 90, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, "og-image.jpg"), ogJpgBuffer);
  console.log(`✓ Created public/og-image.jpg (1200x630, ${(ogJpgBuffer.length / 1024).toFixed(1)} KB)`);

  // Also duplicate as og-snapshot.jpg for explicit reference
  fs.writeFileSync(path.join(PUBLIC_DIR, "og-snapshot.jpg"), ogJpgBuffer);
  console.log("✓ Created public/og-snapshot.jpg");

  console.log("==> All metadata assets successfully generated!");
}

main().catch((err) => {
  console.error("Error generating metadata assets:", err);
  process.exit(1);
});
