#!/usr/bin/env node
/**
 * @script            og-image-policy.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests/unit, tools/scripts/snippets/lib
 * @owner             docs
 * @needs             E-R1, R-R14
 * @purpose-statement Unit tests for og-image-policy — validates route mapping, locale asset selection, fallback assignment, manifest parity, and active-tool drift guards.
 * @pipeline          manual — targeted unit coverage for OG image governance
 * @usage             node tests/unit/og-image-policy.test.js [flags]
 */

const assert = require("assert");
const fs = require("fs");
const path = require("path");
const {
  FALLBACK_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_TYPE,
  OG_IMAGE_WIDTH,
  createOgImagePolicyContext,
  getManifestAssetByPath,
  hasRasterExtension,
  isAuthoredMdxPage,
  isGitHubBlobUrl,
  inferSectionIdFromRepoPath,
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

  const tail = normalized.slice(3);
  if (["cn", "es", "fr"].some((candidate) => tail.startsWith(`${candidate}/`))) {
    return path.posix.join("v2", locale, tail.split("/").slice(1).join("/"));
  }

  return path.posix.join("v2", locale, tail);
}

function findFallbackFixture(repoRoot) {
  const candidates = [
    "docs-guide/feature-guides/architecture-map.mdx",
    "docs/resources/documentation-guide/authoring-standard.mdx",
    "v2/resources/documentation-guide/authoring-standard.mdx",
  ];

  return (
    candidates.find((candidate) => fs.existsSync(path.join(repoRoot, candidate))) ||
    candidates[0]
  );
}

function loadCheckedInManifest(repoRoot) {
  const manifestPath = path.join(
    repoRoot,
    "snippets/assets/site/og-image/manifest.json",
  );
  return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
}

function toAssetPaths(manifest) {
  return [
    manifest?.fallback?.path,
    ...(Array.isArray(manifest?.assets) ? manifest.assets.map((asset) => asset.path) : []),
  ]
    .filter(Boolean)
    .sort();
}

function findInternalHubRoute(context) {
  const internalTab =
    context.tabDefinitions.find((tabDefinition) => tabDefinition.id === "internal-hub") || null;
  const candidateRoutes = [
    ...(internalTab?.routes || []),
    "v2/internal/index",
    "v2/internal/overview/about",
  ];

  const route = candidateRoutes.find((candidate) =>
    fs.existsSync(path.join(context.repoRoot, `${candidate}.mdx`)),
  );

  if (!internalTab || !route) {
    return null;
  }

  return {
    route,
    tabDefinition: internalTab,
  };
}

function findGeneratedInternalReportFixture(repoRoot) {
  const candidates = [
    "v2/internal/reports/navigation-links/docs-navigation.md",
    "v2/internal/reports/quality-accessibility/v2-wcag-audit.md",
    "v2/internal/reports/repo-ops/audit-scripts.md",
  ];

  return (
    candidates.find((candidate) => fs.existsSync(path.join(repoRoot, candidate))) ||
    candidates[0]
  );
}

function assertNoLegacyOgMarkers(repoRoot, repoPath) {
  const content = fs.readFileSync(path.join(repoRoot, repoPath), "utf8");
  const forbiddenMarkers = [
    "social-preview-",
    "LivepeerDocsLogo.svg",
    "/snippets/assets/domain/",
  ];

  forbiddenMarkers.forEach((marker) => {
    assert.strictEqual(
      content.includes(marker),
      false,
      `${repoPath} still contains legacy OG marker "${marker}"`,
    );
  });
}

function runTests() {
  errors = [];
  const context = createOgImagePolicyContext(process.cwd());
  const checkedInManifest = loadCheckedInManifest(context.repoRoot);
  const firstTab = context.tabDefinitions.find((tabDefinition) => tabDefinition.routes.length > 0);
  const firstRoute = firstTab?.routes?.[0];
  const duplicate = findDuplicateRoute(context.tabDefinitions);
  const fallbackFixture = findFallbackFixture(context.repoRoot);
  const internalHubRoute = findInternalHubRoute(context);
  const generatedInternalReportFixture = findGeneratedInternalReportFixture(
    context.repoRoot,
  );

  console.log("OG image policy unit tests");

  runCase("Builds the expected shared asset inventory", () => {
    assert.ok(context.tabDefinitions.length >= 10);
    assert.strictEqual(
      context.manifest.assets.length,
      context.tabDefinitions.length * 4,
    );
    assert.strictEqual(
      context.manifest.fallback.path,
      "/snippets/assets/site/og-image/fallback.png",
    );
  });

  runCase("Matches the checked-in OG manifest", () => {
    assert.strictEqual(
      checkedInManifest.fallback.path,
      context.manifest.fallback.path,
    );
    assert.strictEqual(
      checkedInManifest.assets.length,
      context.manifest.assets.length,
    );
    assert.deepStrictEqual(
      toAssetPaths(checkedInManifest),
      toAssetPaths(context.manifest),
    );
  });

  runCase("Checks generated OG assets exist on disk", () => {
    toAssetPaths(checkedInManifest).forEach((assetPath) => {
      const absolutePath = path.join(context.repoRoot, assetPath.replace(/^\/+/, ""));
      assert.ok(fs.existsSync(absolutePath), `Missing generated asset: ${assetPath}`);
    });
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
    if (!duplicate) {
      assert.ok(true);
      return;
    }

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

  runCase("Keeps Internal Hub routes in strict scope", () => {
    assert.ok(internalHubRoute, "Expected docs.json to include a hidden Internal Hub tab");
    const resolved = resolveOgImageForFile(`${internalHubRoute.route}.mdx`, context);
    assert.strictEqual(resolved.strict, true);
    assert.strictEqual(resolved.sectionId, internalHubRoute.tabDefinition.id);
    assert.strictEqual(
      resolved.fields["og:image"],
      `/snippets/assets/site/og-image/en/${internalHubRoute.tabDefinition.id}.png`,
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

  runCase("Assigns generated internal reports to the fallback asset in strict scope", () => {
    const resolved = resolveOgImageForFile(generatedInternalReportFixture, context);
    assert.strictEqual(resolved.strict, true);
    assert.strictEqual(resolved.sectionId, "fallback");
    assert.strictEqual(
      resolved.fields["og:image"],
      "/snippets/assets/site/og-image/fallback.png",
    );
    assert.strictEqual(resolved.fields["og:image:alt"], FALLBACK_ALT);
  });

  runCase("Assigns non-routable x-prefixed pages to the fallback asset", () => {
    const fixture = "v2/orchestrators/operations/x-running-workloads.mdx";
    if (!fs.existsSync(path.join(context.repoRoot, fixture))) {
      assert.ok(true);
      return;
    }

    const resolved = resolveOgImageForFile(fixture, context);
    assert.strictEqual(resolved.strict, false);
    assert.strictEqual(resolved.sectionId, "fallback");
    assert.strictEqual(
      resolved.fields["og:image"],
      "/snippets/assets/site/og-image/fallback.png",
    );
  });

  runCase("Assigns non-page groups and views partials to the fallback asset", () => {
    const candidates = [
      "v2/gateways/quickstart/groups/docker/dockerSupport.mdx",
      "v2/gateways/quickstart/views/docker/dockerOnChainTab.mdx",
    ].filter((fixture) => fs.existsSync(path.join(context.repoRoot, fixture)));

    if (candidates.length === 0) {
      assert.ok(true);
      return;
    }

    candidates.forEach((fixture) => {
      const resolved = resolveOgImageForFile(fixture, context);
      assert.strictEqual(resolved.strict, false);
      assert.strictEqual(resolved.sectionId, "fallback");
      assert.strictEqual(
        resolved.fields["og:image"],
        "/snippets/assets/site/og-image/fallback.png",
      );
    });
  });

  runCase("Infers canonical sections for stable v2 paths outside docs.json scope", () => {
    const fixture = fs.existsSync(path.join(context.repoRoot, "v2/about/livepeer-overview.mdx"))
      ? "v2/about/livepeer-overview.mdx"
      : "v2/home/get-started.mdx";
    const resolved = resolveOgImageForFile(fixture, context);
    const inferredSectionId = inferSectionIdFromRepoPath(fixture);
    assert.ok(inferredSectionId);
    assert.strictEqual(resolved.strict, true);
    assert.strictEqual(resolved.sectionId, inferredSectionId);
    assert.strictEqual(
      resolved.fields["og:image"],
      `/snippets/assets/site/og-image/en/${inferredSectionId}.png`,
    );
  });

  runCase("Limits normalization to routable pages and managed report surfaces", () => {
    assert.strictEqual(
      isAuthoredMdxPage("v2/about/livepeer-overview.mdx", context),
      true,
    );
    assert.strictEqual(
      isAuthoredMdxPage("v2/x-archived/home/get-started.mdx", context),
      false,
    );
    assert.strictEqual(
      isAuthoredMdxPage("v2/community/_move_me/livepeer-hubs/livepeer-partner-hub.mdx", context),
      false,
    );
    assert.strictEqual(
      isAuthoredMdxPage("v2/gateways/quickstart/views/docker/dockerOnChainTab.mdx", context),
      false,
    );
    assert.strictEqual(
      isAuthoredMdxPage("snippets/pages/08_SHARED/FrameModePageHeader.mdx", context),
      false,
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
    assert.strictEqual(
      hasRasterExtension("/snippets/assets/site/og-image/fallback.png"),
      true,
    );
    assert.strictEqual(
      hasRasterExtension("/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg"),
      false,
    );
  });

  runCase("Keeps active OG tooling on the canonical site-level asset model", () => {
    [
      "tools/scripts/snippets/generate-seo.js",
      "tests/unit/quality.test.js",
      "tools/scripts/publish-v2-internal-reports.js",
    ].forEach((repoPath) => assertNoLegacyOgMarkers(context.repoRoot, repoPath));
  });

  return {
    passed: errors.length === 0,
    total: 11,
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
