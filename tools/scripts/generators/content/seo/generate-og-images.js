#!/usr/bin/env node
/**
 * @script            generate-og-images
 * @category          generator
 * @purpose           seo:og-image-assets
 * @scope             tools/scripts, snippets/assets/site/og-image
 * @owner             docs
 * @needs             E-R1, R-R14
 * @purpose-statement Generate canonical site-level Open Graph image assets and manifest for fallback and section-level social previews.
 * @pipeline          manual — run when OG assets, section labels, or branding change
 * @usage             node tools/scripts/snippets/generate-og-images.js [--dry-run] [--only <locale:section-id|fallback>]
 */

const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const {
  OG_IMAGE_DIR,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  createOgImagePolicyContext,
  getRepoRoot,
  toAbsoluteAssetPath,
  toPosix,
} = require("./lib/og-image-policy");

function parseArgs(argv) {
  const args = {
    dryRun: false,
    only: "",
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--dry-run") {
      args.dryRun = true;
      continue;
    }
    if (token === "--only") {
      args.only = String(argv[index + 1] || "").trim();
      index += 1;
      continue;
    }
    if (token.startsWith("--only=")) {
      args.only = token.slice("--only=".length).trim();
    }
  }

  return args;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function svgToDataUrl(filePath) {
  const svg = fs.readFileSync(filePath, "utf8");
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function buildMarkup(asset, logoDataUrl) {
  const title = escapeHtml(asset.label);
  const eyebrow =
    asset.kind === "fallback"
      ? "Canonical fallback social preview"
      : `Section social preview - ${escapeHtml(asset.locale.toUpperCase())}`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <style>
      :root {
        color-scheme: dark;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        width: ${OG_IMAGE_WIDTH}px;
        height: ${OG_IMAGE_HEIGHT}px;
        overflow: hidden;
        font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
        background:
          radial-gradient(circle at top left, rgba(60, 181, 64, 0.30), transparent 36%),
          radial-gradient(circle at bottom right, rgba(24, 121, 78, 0.68), transparent 42%),
          linear-gradient(135deg, #0d1712 0%, #0f2517 52%, #143a22 100%);
        color: #f4fff6;
      }

      .frame {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 56px 64px 58px;
      }

      .frame::before,
      .frame::after {
        content: "";
        position: absolute;
        border-radius: 999px;
        opacity: 0.26;
        filter: blur(10px);
      }

      .frame::before {
        width: 300px;
        height: 300px;
        right: -80px;
        top: -80px;
        background: rgba(60, 181, 64, 0.55);
      }

      .frame::after {
        width: 260px;
        height: 260px;
        left: -60px;
        bottom: -90px;
        background: rgba(117, 255, 163, 0.22);
      }

      .stack {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .brand {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        padding: 0 0 36px;
      }

      .logo-wrap {
        display: inline-flex;
        align-items: center;
        min-height: 108px;
      }

      .logo {
        width: 440px;
        max-width: 100%;
        height: auto;
        display: block;
      }

      .eyebrow {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 12px 18px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 999px;
        background: rgba(8, 16, 11, 0.28);
        color: rgba(244, 255, 246, 0.84);
        font-size: 18px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        white-space: nowrap;
      }

      .content {
        margin-top: auto;
        padding: 42px 44px 38px;
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 32px;
        background:
          linear-gradient(180deg, rgba(8, 17, 12, 0.40) 0%, rgba(8, 17, 12, 0.64) 100%);
        box-shadow:
          0 36px 60px rgba(0, 0, 0, 0.24),
          inset 0 1px 0 rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(14px);
      }

      .title {
        margin: 0;
        max-width: 980px;
        font-size: 76px;
        line-height: 1.02;
        font-weight: 820;
        letter-spacing: -0.04em;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-wrap: balance;
      }

      .meta {
        margin-top: 18px;
        display: flex;
        align-items: center;
        gap: 16px;
        color: rgba(244, 255, 246, 0.82);
        font-size: 22px;
      }

      .meta::before {
        content: "";
        width: 48px;
        height: 2px;
        border-radius: 999px;
        background: rgba(117, 255, 163, 0.9);
      }
    </style>
  </head>
  <body>
    <div class="frame">
      <div class="stack">
        <div class="brand">
          <div class="logo-wrap">
            <img class="logo" src="${logoDataUrl}" alt="" />
          </div>
          <div class="eyebrow">${eyebrow}</div>
        </div>
        <div class="content">
          <h1 class="title">${title}</h1>
          <div class="meta">Open Graph preview asset</div>
        </div>
      </div>
    </div>
  </body>
</html>`;
}

async function renderAsset(page, asset, outputPath, logoDataUrl) {
  const html = buildMarkup(asset, logoDataUrl);
  await page.setViewport({
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    deviceScaleFactor: 1,
  });
  await page.setContent(html, { waitUntil: "load" });
  await page.screenshot({
    path: outputPath,
    type: "png",
    omitBackground: false,
  });
}

function filterAssets(assets, only) {
  if (!only) return assets;
  if (only === "fallback") {
    return assets.filter((asset) => asset.kind === "fallback");
  }
  const [localeToken, sectionToken] = only.split(":");
  return assets.filter(
    (asset) =>
      asset.kind === "section" &&
      asset.locale === localeToken &&
      asset.sectionId === sectionToken,
  );
}

function writeManifest(repoRoot, manifest) {
  const manifestPath = path.join(repoRoot, OG_IMAGE_DIR, "manifest.json");
  ensureDir(path.dirname(manifestPath));
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  return manifestPath;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const repoRoot = getRepoRoot();
  const context = createOgImagePolicyContext(repoRoot);
  const allAssets = [context.manifest.fallback, ...context.manifest.assets];
  const selectedAssets = filterAssets(allAssets, args.only);

  if (selectedAssets.length === 0) {
    console.error("No OG image assets matched the requested scope.");
    process.exit(1);
  }

  console.log("Livepeer OG Image Generator\n");
  console.log(`Assets: ${selectedAssets.length}`);
  console.log(`Output: /${OG_IMAGE_DIR}`);
  console.log(`Mode: ${args.dryRun ? "dry-run" : "write"}\n`);

  if (args.dryRun) {
    selectedAssets.forEach((asset) => {
      console.log(`- ${asset.path} (${asset.kind}:${asset.locale}:${asset.sectionId})`);
    });
    process.exit(0);
  }

  const logoPath = path.join(repoRoot, "snippets/assets/site/logo/light.svg");
  const logoDataUrl = svgToDataUrl(logoPath);
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    for (const asset of selectedAssets) {
      const outputPath = toAbsoluteAssetPath(repoRoot, asset.path);
      ensureDir(path.dirname(outputPath));
      await renderAsset(page, asset, outputPath, logoDataUrl);
      console.log(`OK ${toPosix(path.relative(repoRoot, outputPath))}`);
    }
  } finally {
    await page.close();
    await browser.close();
  }

  const manifestPath = writeManifest(repoRoot, context.manifest);
  console.log(`OK ${toPosix(path.relative(repoRoot, manifestPath))}`);
  console.log("\nOG image assets generated successfully.");
}

main().catch((error) => {
  console.error(`Failed to generate OG image assets: ${error.message}`);
  process.exit(1);
});
