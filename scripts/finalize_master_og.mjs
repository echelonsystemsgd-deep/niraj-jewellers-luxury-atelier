import sharp from "sharp";
import fs from "fs";
import path from "path";

async function buildMasterOg() {
  const src = "C:/Users/Deepg/.gemini/antigravity/brain/fcf04a51-0e00-472a-80e0-a9d874da59c9/test_1300.png";
  const p1Path = path.resolve("public/images/collections/posters/0bda9709-3486-4146-b08c-9f05cc25ee4d.jpg");
  const p2Path = path.resolve("public/images/collections/posters/39b5ba11-da50-4ab0-bc84-3d952b8b2a8d.jpg");
  const p3Path = path.resolve("public/images/collections/posters/259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0.jpg");

  // 1. Crop Top Header & Review Pill & Headline (height 390)
  const topHeader = await sharp(src)
    .extract({ left: 0, top: 0, width: 1200, height: 390 })
    .toBuffer();

  // 2. Format 3 jewelry tiles: 356 x 200 each, with 1px gold border
  const borderSvg = `
    <svg width="356" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="355" height="199" fill="none" stroke="#D4AF37" stroke-width="1" opacity="0.6"/>
    </svg>
  `;
  const borderBuf = Buffer.from(borderSvg);

  const tile1 = await sharp(p1Path)
    .resize(356, 200, { fit: "cover", position: "center" })
    .composite([{ input: borderBuf, top: 0, left: 0 }])
    .toBuffer();

  const tile2 = await sharp(p2Path)
    .resize(356, 200, { fit: "cover", position: "center" })
    .composite([{ input: borderBuf, top: 0, left: 0 }])
    .toBuffer();

  const tile3 = await sharp(p3Path)
    .resize(356, 200, { fit: "cover", position: "center" })
    .composite([{ input: borderBuf, top: 0, left: 0 }])
    .toBuffer();

  // Bottom row with cards & captions
  const labelsSvg = `
    <svg width="1200" height="235" xmlns="http://www.w3.org/2000/svg">
      <text x="32" y="222" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600" fill="#8C6212" letter-spacing="1.5">18CT WHITE &amp; ROSE GOLD · 48.5g</text>
      <text x="422" y="222" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600" fill="#8C6212" letter-spacing="1.5">18CT WARM YELLOW GOLD · 8.2g</text>
      <text x="812" y="222" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600" fill="#8C6212" letter-spacing="1.5">950 SOLID PLATINUM · 24.6g</text>
    </svg>
  `;
  const labelsBuf = Buffer.from(labelsSvg);

  const bottomRow = await sharp({
    create: {
      width: 1200,
      height: 240,
      channels: 4,
      background: "#FAF9F5"
    }
  })
    .composite([
      { input: tile1, top: 5, left: 32 },
      { input: tile2, top: 5, left: 422 },
      { input: tile3, top: 5, left: 812 },
      { input: labelsBuf, top: 0, left: 0 }
    ])
    .png()
    .toBuffer();

  // 3. Composite into final 1200x630
  const finalPng = await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: "#FAF9F5"
    }
  })
    .composite([
      { input: topHeader, top: 0, left: 0 },
      { input: bottomRow, top: 390, left: 0 }
    ])
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  const finalJpg = await sharp(finalPng)
    .jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toBuffer();

  // Save to all target files
  const targets = [
    path.resolve("public/og-image.jpg"),
    path.resolve("public/og-snapshot.jpg"),
    path.resolve("public/og-image.png"),
    path.resolve("app/opengraph-image.png"),
    path.resolve("app/twitter-image.png"),
  ];

  for (const t of targets) {
    if (t.endsWith(".jpg")) {
      fs.writeFileSync(t, finalJpg);
    } else {
      fs.writeFileSync(t, finalPng);
    }
    console.log(`✓ Updated ${t} (${(fs.statSync(t).size / 1024).toFixed(1)} KB)`);
  }

  // Also save preview artifact for verification
  const previewDest = "C:/Users/Deepg/.gemini/antigravity/brain/fcf04a51-0e00-472a-80e0-a9d874da59c9/final_verified_og.png";
  fs.writeFileSync(previewDest, finalPng);
  console.log("Saved preview artifact to:", previewDest);
}

buildMasterOg().catch((e) => console.error(e));
