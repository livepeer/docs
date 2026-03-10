#!/usr/bin/env node
/**
 * @script            og-image-policy.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests/unit, tools/scripts/snippets/lib
 * @owner             docs
 * @needs             E-R1, R-R14
 * @purpose-statement Unit tests for og-image-policy — validates route mapping, locale asset selection, fallback assignment, and URL guardrails.
 * @pipeline          manual — targeted unit coverage for OG image governance
 * @usage             node tests/unit/og-image-policy.test.js [flags]
 */

const assert = require("assert");
const {
  OG_IMAGE_HEIGHT,
  OG_IMAGE_TYPE,
  OG_IMAGE_WIDTH,
  createOgImagePolicyContext,
  getManifestAssetByPath,
  hasRasterExtension,
  isGitHubBlobUrl,
  isLocalAssetPath,
  resolveOgImageForFile,
} = require("../../tools/scripts/snippets/lib/og-image-policy");

let errors = [];

function runCase(name, fn) {
  try {
    fn();
    console.log(`   OK ${name}`);
  } catch (error) {
    errors.push(`${name}: ${error.message}`);
  }
}

function runTests() {
  errors = [];
  const context = createOgImagePolicyContext(process.cwd());

  console.log("OG image policy unit tests");

  runCase("Builds the expected shared asset inventory", () => {
    assert.strictEqual(context.tabDefinitions.length, 10);
    assert.strictEqual(context.manifest.assets.length, 40);
    assert.strictEqual(
      context.manifest.fallback.path,
      "/snippets/assets/site/og-image/fallback.png",
    );
  });

  runCase("Maps English docs.json routes to canonical section assets", () => {
    const resolved = resolveOgImageForFile(
      "v2/about/livepeer-overview.mdx",
      context,
    );
    assert.strictEqual(resolved.strict, true);
    assert.strictEqual(resolved.sectionId, "about");
    assert.strictEqual(
      resolved.fields["og:image"],
      "/snippets/assets/site/og-image/en/about.png",
    );
    assert.strictEqual(
      resolved.fields["og:image:alt"],
      "Livepeer Docs social preview image for About",
    );
    assert.strictEqual(resolved.fields["og:image:type"], OG_IMAGE_TYPE);
    assert.strictEqual(resolved.fields["og:image:width"], OG_IMAGE_WIDTH);
    assert.strictEqual(resolved.fields["og:image:height"], OG_IMAGE_HEIGHT);
  });

  runCase("Keeps the first docs.json tab assignment when routes appear in multiple tabs", () => {
    const resolved = resolveOgImageForFile("v2/about/core-concepts.mdx", context);
    assert.strictEqual(resolved.strict, true);
    assert.strictEqual(resolved.sectionId, "about");
    assert.strictEqual(
      resolved.fields["og:image"],
      "/snippets/assets/site/og-image/en/about.png",
    );
  });

  runCase("Maps localized equivalents to localized section assets", () => {
    const resolved = resolveOgImageForFile(
      "v2/es/about/livepeer-overview.mdx",
      context,
    );
    assert.strictEqual(resolved.strict, true);
    assert.strictEqual(resolved.sectionId, "about");
    assert.strictEqual(
      resolved.fields["og:image"],
      "/snippets/assets/site/og-image/es/about.png",
    );
    assert.strictEqual(
      resolved.fields["og:image:alt"],
      "Livepeer Docs social preview image for Acerca de",
    );
  });

  runCase("Keeps Internal Hub routes in strict scope", () => {
    const resolved = resolveOgImageForFile("v2/internal/overview/about.mdx", context);
    assert.strictEqual(resolved.strict, true);
    assert.strictEqual(resolved.sectionId, "internal-hub");
    assert.strictEqual(
      resolved.fields["og:image"],
      "/snippets/assets/site/og-image/en/internal-hub.png",
    );
  });

  runCase("Assigns the fallback asset to non-routable authored pages", () => {
    const resolved = resolveOgImageForFile(
      "docs-guide/feature-guides/architecture-map.mdx",
      context,
    );
    assert.strictEqual(resolved.strict, false);
    assert.strictEqual(resolved.sectionId, "fallback");
    assert.strictEqual(
      resolved.fields["og:image"],
      "/snippets/assets/site/og-image/fallback.png",
    );
  });

  runCase("Indexes generated assets through the manifest", () => {
    const asset = getManifestAssetByPath(
      "/snippets/assets/site/og-image/fr/resource-hub.png",
      context,
    );
    assert.ok(asset);
    assert.strictEqual(asset.sectionId, "resource-hub");
    assert.strictEqual(asset.locale, "fr");
    assert.strictEqual(asset.width, OG_IMAGE_WIDTH);
    assert.strictEqual(asset.height, OG_IMAGE_HEIGHT);
  });

  runCase("Rejects GitHub blob URLs and accepts raster repo assets", () => {
    assert.strictEqual(
      isGitHubBlobUrl(
        "https://github.com/livepeer/docs/blob/main/snippets/assets/site/og-image/fallback.png",
      ),
      true,
    );
    assert.strictEqual(
      isLocalAssetPath("/snippets/assets/site/og-image/fallback.png"),
      true,
    );
    assert.strictEqual(hasRasterExtension("/snippets/assets/site/og-image/fallback.png"), true);
    assert.strictEqual(
      hasRasterExtension("/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg"),
      false,
    );
  });

  return {
    passed: errors.length === 0,
    total: 8,
    errors,
  };
}

if (require.main === module) {
  const result = runTests();
  if (result.passed) {
    console.log(`\nOK OG image policy tests passed (${result.total} cases)`);
    process.exit(0);
  }

  console.error(`\nFAIL ${result.errors.length} OG image policy test failure(s)`);
  result.errors.forEach((message) => console.error(`  - ${message}`));
  process.exit(1);
}

module.exports = {
  runTests,
};
