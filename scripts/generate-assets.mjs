import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const logoPath = path.join(root, "public", "images", "logo-ucla.png");
const appDir = path.join(root, "app");
const imagesDir = path.join(root, "public", "images");

const white = { r: 255, g: 255, b: 255, alpha: 1 };

async function squareIcon(size, output) {
  const logo = await sharp(logoPath)
    .resize({ height: Math.round(size * 0.9), fit: "inside" })
    .toBuffer();

  await sharp({
    create: { width: size, height: size, channels: 4, background: white },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png({ compressionLevel: 9, palette: true, colours: 192 })
    .toFile(output);
}

async function ogImage() {
  const background = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M60 0H0V60" fill="none" stroke="#f4efe3" stroke-opacity="0.06" stroke-width="1"/>
        </pattern>
        <radialGradient id="crimson" cx="0.86" cy="0" r="0.75">
          <stop offset="0" stop-color="#d0212c" stop-opacity="0.4"/>
          <stop offset="1" stop-color="#d0212c" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="gold" cx="0.05" cy="1" r="0.8">
          <stop offset="0" stop-color="#e8b64b" stop-opacity="0.18"/>
          <stop offset="1" stop-color="#e8b64b" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="630" fill="#06070b"/>
      <rect width="1200" height="630" fill="url(#grid)"/>
      <rect width="1200" height="630" fill="url(#crimson)"/>
      <rect width="1200" height="630" fill="url(#gold)"/>
      <text x="72" y="250" font-family="Georgia, 'Times New Roman', serif" font-size="92" fill="#f5f2e9">Sintaxis</text>
      <text x="72" y="348" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="92" fill="#f4d38a">Humana</text>
      <rect x="74" y="386" width="92" height="4" fill="#d0212c"/>
      <text x="74" y="446" font-family="Arial, Helvetica, sans-serif" font-size="20" letter-spacing="4" fill="#b9b5aa">PORTAFOLIO ACADÉMICO</text>
      <text x="74" y="486" font-family="Arial, Helvetica, sans-serif" font-size="20" letter-spacing="4" fill="#b9b5aa">INGENIERÍA EN INFORMÁTICA</text>
      <text x="74" y="548" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#8b887f">Universidad Centroccidental Lisandro Alvarado</text>
      <text x="74" y="584" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#8b887f">Decanato de Ciencias y Tecnología (DCyT)</text>
      <text x="74" y="606" font-family="Arial, Helvetica, sans-serif" font-size="16" letter-spacing="3" fill="#e8b64b">UCLA · DCyT · 2026</text>
    </svg>
  `);

  const card = Buffer.from(`
    <svg width="400" height="500" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="398" height="498" rx="4" fill="#ffffff" stroke="#e8b64b" stroke-width="2"/>
    </svg>
  `);

  const logo = await sharp(logoPath)
    .resize({ height: 440, fit: "inside" })
    .toBuffer();
  const logoMeta = await sharp(logo).metadata();
  const logoWidth = logoMeta.width ?? 363;

  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: "#06070b" },
  })
    .composite([
      { input: background, top: 0, left: 0 },
      { input: card, top: 65, left: 750 },
      {
        input: logo,
        top: 95,
        left: Math.round(750 + (400 - logoWidth) / 2),
      },
    ])
    .png()
    .toFile(path.join(imagesDir, "og-image.png"));
}

await mkdir(appDir, { recursive: true });
await mkdir(imagesDir, { recursive: true });

await squareIcon(512, path.join(appDir, "icon.png"));
await squareIcon(180, path.join(appDir, "apple-icon.png"));
await ogImage();

console.log("Assets generados: app/icon.png, app/apple-icon.png, public/images/og-image.png");
