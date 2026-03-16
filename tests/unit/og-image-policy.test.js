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
const fs = require("fs");
const path = require("path");
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

function findDuplicateRoute(tabDefinitions) {
  const seen = new Map();

  for (const tabDefinition of tabDefinitions) {
    for (const route of tabDefinition.routes) {
      if (seen.has(route)) {
        return {
          route,
          first: seen.get(route),
          second: tabDefinition,
        };
      }
      seen.set(route, tabDefinition);
    }
  }

  return null;
}

function getLocalizedPath(route, locale) {
  const normalized = String(route || "").replace(/^\/+/, "");
  if (!normalized.startsWith("v2/")) {
    return normalized;
  }
  return path.posix.join("v2", "languages", locale, normalized.slice(3));
}

function findFallbackFixture(repoRoot) {
  const candidates = [
    "docs-guide/features/architecture-map.mdx",
    "docs/resources/documentation-guide/authoring-standard.mdx",
    "v2/resources/documentation-guide/authoring-standard.mdx",
  ];

  return (
    candidates.find((candidate) => fs.existsSync(path.join(repoRoot, candidate))) ||
    candidates[0]
  );
}

function runTests() {
  errors = [];
  const context = createOgImagePolicyContext(process.cwd());
  const firstTab = context.tabDefinitions[0];
  const firstRoute = firstTab?.routes?.[0];
  const duplicate = findDuplicateRoute(context.tabDefinitions);
  const fallbackFixture = findFallbackFixture(context.repoRoot);

  console.log("OG image policy unit tests");

  runCase("Builds the expected shared asset inventory", () => {
    assert.ok(context.tabDefinitions.length > 0);
    assert.strictEqual(
      context.manifest.assets.length,
      context.tabDefinitions.length * 4,
    );
    assert.strictEqual(
      context.manifest.fallback.path,
      "/snippets/assets/site/og-image/fallback.png",
    );
  });

  runCase("Maps docs.json routes to canonical section assets", () => {
    assert.ok(firstTab);
    assert.ok(firstRoute);
    const resolved = resolveOgImageForFile(`${firstRoute}.mdx`, context);
    assert.strictEqual(resolved.strict, true);
    assert.strictEqual(resolved.sectionId, firstTab.id);
    assert.strictEqual(
      resolved.fields["og:image"],
      `/snippets/assets/site/og-image/en/${firstTab.id}.png`,
    );
    assert.strictEqual(resolved.fields["og:image:type"], OG_IMAGE_TYPE);
    assert.strictEqual(resolved.fields["og:image:width"], OG_IMAGE_WIDTH);
    assert.strictEqual(resolved.fields["og:image:height"], OG_IMAGE_HEIGHT);
  });

  runCase("Keeps the first docs.json tab assignment when routes appear in multiple tabs", () => {
    assert.ok(duplicate, "Expected at least one duplicated route in docs.json");
    const resolved = resolveOgImageForFile(`${duplicate.route}.mdx`, context);
    assert.strictEqual(resolved.strict, true);
    assert.strictEqual(resolved.sectionId, duplicate.first.id);
  });

  runCase("Maps localized equivalents to localized section assets", () => {
    assert.ok(firstTab);
    assert.ok(firstRoute);
    const localizedRoute = getLocalizedPath(firstRoute, "es");
    const resolved = resolveOgImageForFile(`${localizedRoute}.mdx`, context);
    assert.strictEqual(resolved.strict, true);
    assert.strictEqual(resolved.sectionId, firstTab.id);
    assert.strictEqual(
      resolved.fields["og:image"],
      `/snippets/assets/site/og-image/es/${firstTab.id}.png`,
    );
  });

  runCase("Assigns the fallback asset to non-routable authored pages", () => {
    const resolved = resolveOgImageForFile(fallbackFixture, context);
    assert.strictEqual(resolved.strict, false);
    assert.strictEqual(resolved.sectionId, "fallback");
    assert.strictEqual(
      resolved.fields["og:image"],
      "/snippets/assets/site/og-image/fallback.png",
    );
  });

  runCase("Indexes generated assets through the manifest", () => {
    const asset = context.manifest.assets[0];
    assert.ok(asset);
    const indexedAsset = getManifestAssetByPath(asset.path, context);
    assert.ok(indexedAsset);
    assert.strictEqual(indexedAsset.path, asset.path);
    assert.strictEqual(indexedAsset.width, OG_IMAGE_WIDTH);
    assert.strictEqual(indexedAsset.height, OG_IMAGE_HEIGHT);
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
    total: 7,
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
