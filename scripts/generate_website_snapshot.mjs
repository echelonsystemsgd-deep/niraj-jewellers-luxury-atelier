import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import sharp from "sharp";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const tempRawPng = path.resolve("public/temp-raw-snapshot.png");
const publicOgJpg = path.resolve("public/og-image.jpg");
const publicOgPng = path.resolve("public/og-image.png");
const publicOgSnapshot = path.resolve("public/og-snapshot.jpg");
const appOgPng = path.resolve("app/opengraph-image.png");
const appTwitterPng = path.resolve("app/twitter-image.png");

async function generateSnapshots() {
  console.log("1. Capturing high-DPI live website screenshot with Chrome...");
  const args = [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--force-device-scale-factor=2",
    `--screenshot=${tempRawPng}`,
    "--window-size=1200,630",
    "--hide-scrollbars",
    "--virtual-time-budget=6000",
    "https://www.niraj-jewellers.co.uk/"
  ];

  const res = spawnSync(chromePath, args, { stdio: "inherit" });
  if (res.status !== 0 || !fs.existsSync(tempRawPng)) {
    throw new Error(`Chrome headless capture failed with code ${res.status}`);
  }

  console.log("2. Processing high-resolution snapshot with Sharp...");
  const metadata = await sharp(tempRawPng).metadata();
  console.log(`Captured raw dimensions: ${metadata.width}x${metadata.height}`);

  // Resize down to exactly 1200x630 with high-quality lanczos3 resampling
  const processedPng = await sharp(tempRawPng)
    .resize(1200, 630, {
      fit: "cover",
      position: "top",
      kernel: "lanczos3"
    })
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  const processedJpg = await sharp(tempRawPng)
    .resize(1200, 630, {
      fit: "cover",
      position: "top",
      kernel: "lanczos3"
    })
    .jpeg({
      quality: 92,
      mozjpeg: true,
      chromaSubsampling: "4:4:4"
    })
    .toBuffer();

  // Write all target files
  fs.writeFileSync(publicOgJpg, processedJpg);
  fs.writeFileSync(publicOgSnapshot, processedJpg);
  fs.writeFileSync(publicOgPng, processedPng);
  fs.writeFileSync(appOgPng, processedPng);
  fs.writeFileSync(appTwitterPng, processedPng);

  console.log(`✓ Generated ${publicOgJpg} (${(processedJpg.length / 1024).toFixed(1)} KB)`);
  console.log(`✓ Generated ${publicOgPng} (${(processedPng.length / 1024).toFixed(1)} KB)`);
  console.log(`✓ Generated ${appOgPng} (${(processedPng.length / 1024).toFixed(1)} KB)`);
  console.log(`✓ Generated ${appTwitterPng} (${(processedPng.length / 1024).toFixed(1)} KB)`);

  // Clean up temp
  if (fs.existsSync(tempRawPng)) fs.unlinkSync(tempRawPng);
  console.log("✓ Successfully completed snapshot generation!");
}

generateSnapshots().catch((err) => {
  console.error("Error generating snapshots:", err);
  process.exit(1);
});
