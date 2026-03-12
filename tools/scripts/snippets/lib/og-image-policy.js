#!/usr/bin/env node
/**
 * @script            og-image-policy
 * @category          utility
 * @purpose           feature:seo
 * @scope             tools/scripts, snippets/assets/site/og-image, docs.json
 * @owner             docs
 * @needs             E-R1, R-R14
 * @purpose-statement OG image policy helper — resolves authored MDX pages to canonical section or fallback social images and metadata.
 * @pipeline          indirect — library module imported by generators and validators
 * @usage             node tools/scripts/snippets/lib/og-image-policy.js [flags]
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;
const OG_IMAGE_TYPE = "image/png";
const OG_IMAGE_DIR = "snippets/assets/site/og-image";
const FALLBACK_FILENAME = "fallback.png";
const FALLBACK_ALT = "Livepeer Docs social preview image";
const AUTHORED_MDX_ROOTS = [
  "v2",
  "docs",
  "docs-guide",
  "contribute",
  "snippets/pages",
];
const NON_PAGE_SEGMENT_PREFIXES = ["_", "x-"];
const NON_PAGE_SEGMENT_NAMES = new Set(["groups", "views"]);
const SUPPORTED_LOCALES = ["en", "es", "fr", "cn"];
const RASTER_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const LOCAL_ASSET_ROOTS = ["/snippets/assets/"];

const LOCALIZED_TAB_LABELS = {
  en: {
    home: "Home",
    about: "About",
    solutions: "Solutions",
    developers: "Developers",
    gateways: "Gateways",
    "gpu-nodes": "GPU Nodes",
    "lp-token": "LP Token",
    community: "Community",
    "resource-hub": "Resource HUB",
    "internal-hub": "Internal Hub",
  },
  es: {
    home: "Inicio",
    about: "Acerca de",
    solutions: "Soluciones",
    developers: "Desarrolladores",
    gateways: "Pasarelas",
    "gpu-nodes": "Nodos GPU",
    "lp-token": "Token LPT",
    community: "Comunidad",
    "resource-hub": "Centro de recursos",
    "internal-hub": "Centro interno",
  },
  fr: {
    home: "Accueil",
    about: "A propos",
    solutions: "Solutions",
    developers: "Developpeurs",
    gateways: "Passerelles",
    "gpu-nodes": "Noeuds GPU",
    "lp-token": "Jeton LPT",
    community: "Communaute",
    "resource-hub": "Centre de ressources",
    "internal-hub": "Centre interne",
  },
  cn: {
    home: "首页",
    about: "关于",
    solutions: "解决方案",
    developers: "开发者",
    gateways: "网关",
    "gpu-nodes": "GPU 节点",
    "lp-token": "LPT 代币",
    community: "社区",
    "resource-hub": "资源中心",
    "internal-hub": "内部中心",
  },
};

const CANONICAL_SECTION_DEFINITIONS = [
  {
    id: "home",
    englishLabel: "Home",
  },
  {
    id: "about",
    englishLabel: "About",
  },
  {
    id: "solutions",
    englishLabel: "Solutions",
  },
  {
    id: "developers",
    englishLabel: "Developers",
  },
  {
    id: "gateways",
    englishLabel: "Gateways",
  },
  {
    id: "gpu-nodes",
    englishLabel: "GPU Nodes",
  },
  {
    id: "lp-token",
    englishLabel: "LP Token",
  },
  {
    id: "community",
    englishLabel: "Community",
  },
  {
    id: "resource-hub",
    englishLabel: "Resource HUB",
  },
  {
    id: "internal-hub",
    englishLabel: "Internal Hub",
  },
];

const CANONICAL_SECTION_ALIAS_TO_ID = {
  home: "home",
  about: "about",
  platforms: "solutions",
  solutions: "solutions",
  developers: "developers",
  gateways: "gateways",
  orchestrators: "gpu-nodes",
  "orchestrators-final": "gpu-nodes",
  "gpu-nodes": "gpu-nodes",
  "gpu-nodes-final": "gpu-nodes",
  lpt: "lp-token",
  "lp-token": "lp-token",
  community: "community",
  resources: "resource-hub",
  "resource-hub": "resource-hub",
  internal: "internal-hub",
  "internal-hub": "internal-hub",
};

function toPosix(value) {
  return String(value || "").split(path.sep).join("/");
}

function getRepoRoot(startDir = process.cwd()) {
  try {
    return execSync("git rev-parse --show-toplevel", {
      cwd: startDir,
      encoding: "utf8",
    }).trim();
  } catch (_error) {
    return startDir;
  }
}

function normalizeRouteKey(rawValue) {
  let value = toPosix(rawValue).trim();
  value = value.replace(/^\/+/, "");
  value = value.replace(/\.(md|mdx)$/i, "");
  value = value.replace(/\/index$/i, "");
  value = value.replace(/\/README$/i, "");
  value = value.replace(/\/+$/, "");
  return value;
}

function slugifyLabel(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function canonicalizeSectionId(rawValue) {
  const normalized = slugifyLabel(rawValue);
  return CANONICAL_SECTION_ALIAS_TO_ID[normalized] || null;
}

function ensureLocale(locale) {
  return SUPPORTED_LOCALES.includes(locale) ? locale : "en";
}

function parseLocaleAwareRoute(repoPath) {
  const normalized = normalizeRouteKey(repoPath);
  const parts = normalized.split("/").filter(Boolean);

  if (parts[0] !== "v2") {
    return {
      locale: "en",
      sourceRoute: normalized,
    };
  }

  if (parts[1] === "languages" && SUPPORTED_LOCALES.includes(parts[2])) {
    return {
      locale: parts[2],
      sourceRoute: normalizeRouteKey(path.posix.join("v2", ...parts.slice(3))),
    };
  }

  if (SUPPORTED_LOCALES.includes(parts[1])) {
    return {
      locale: parts[1],
      sourceRoute: normalizeRouteKey(path.posix.join("v2", ...parts.slice(2))),
    };
  }

  return {
    locale: "en",
    sourceRoute: normalized,
  };
}

function getLocaleFromRepoPath(repoPath) {
  return parseLocaleAwareRoute(repoPath).locale;
}

function toSourceRouteKey(repoPath) {
  return parseLocaleAwareRoute(repoPath).sourceRoute;
}

function collectPageEntries(node, out = []) {
  if (typeof node === "string") {
    const value = String(node || "").trim();
    if (value && value !== " ") {
      out.push(value);
    }
    return out;
  }

  if (Array.isArray(node)) {
    node.forEach((item) => collectPageEntries(item, out));
    return out;
  }

  if (!node || typeof node !== "object") {
    return out;
  }

  if (Array.isArray(node.pages)) {
    node.pages.forEach((item) => collectPageEntries(item, out));
  }

  Object.values(node).forEach((value) => collectPageEntries(value, out));
  return out;
}

function buildEnglishTabDefinitions(repoRoot) {
  const docsJsonPath = path.join(repoRoot, "docs.json");
  const docsJson = JSON.parse(fs.readFileSync(docsJsonPath, "utf8"));
  const versions = Array.isArray(docsJson?.navigation?.versions)
    ? docsJson.navigation.versions
    : [];
  const v2 = versions.find((versionNode) => versionNode?.version === "v2");
  const languages = Array.isArray(v2?.languages) ? v2.languages : [];
  const languageNode =
    languages.find((node) => node?.language === "en") || languages[0] || null;
  const tabs = Array.isArray(languageNode?.tabs) ? languageNode.tabs : [];

  const routeBuckets = new Map();

  tabs.forEach((tabNode) => {
    const englishLabel = String(tabNode?.tab || "").trim();
    const canonicalId = canonicalizeSectionId(englishLabel);
    if (!canonicalId) {
      return;
    }

    const routes = [...new Set(collectPageEntries(tabNode))]
      .map(normalizeRouteKey)
      .filter((route) => route.startsWith("v2/"));

    if (!routeBuckets.has(canonicalId)) {
      routeBuckets.set(canonicalId, []);
    }
    routeBuckets.get(canonicalId).push(...routes);
  });

  return CANONICAL_SECTION_DEFINITIONS.map((section, index) => ({
    id: section.id,
    order: index,
    englishLabel: section.englishLabel,
    routes: [...new Set(routeBuckets.get(section.id) || [])],
  }));
}

function buildDocsRouteMap(tabDefinitions) {
  const routeMap = new Map();

  tabDefinitions.forEach((tabDefinition) => {
    tabDefinition.routes.forEach((route) => {
      if (!routeMap.has(route)) {
        routeMap.set(route, tabDefinition);
      }
    });
  });

  return routeMap;
}

function getLocalizedTabLabel(sectionId, locale, englishLabel = "") {
  const normalizedLocale = ensureLocale(locale);
  return (
    LOCALIZED_TAB_LABELS[normalizedLocale]?.[sectionId] ||
    LOCALIZED_TAB_LABELS.en?.[sectionId] ||
    englishLabel ||
    sectionId
  );
}

function buildFallbackAssetEntry() {
  return {
    kind: "fallback",
    locale: "all",
    sectionId: "fallback",
    label: "Livepeer Docs",
    path: path.posix.join("/", OG_IMAGE_DIR, FALLBACK_FILENAME),
    type: OG_IMAGE_TYPE,
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    alt: FALLBACK_ALT,
  };
}

function buildManifestFromTabs(tabDefinitions) {
  const fallback = buildFallbackAssetEntry();
  const assets = [];

  tabDefinitions.forEach((tabDefinition) => {
    SUPPORTED_LOCALES.forEach((locale) => {
      const label = getLocalizedTabLabel(
        tabDefinition.id,
        locale,
        tabDefinition.englishLabel,
      );
      assets.push({
        kind: "section",
        locale,
        sectionId: tabDefinition.id,
        label,
        englishLabel: tabDefinition.englishLabel,
        order: tabDefinition.order,
        path: path.posix.join("/", OG_IMAGE_DIR, locale, `${tabDefinition.id}.png`),
        type: OG_IMAGE_TYPE,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: `Livepeer Docs social preview image for ${label}`,
      });
    });
  });

  return {
    version: 1,
    outputDir: `/${OG_IMAGE_DIR}`,
    type: OG_IMAGE_TYPE,
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    fallback,
    assets,
  };
}

function createAssetPathIndex(manifest) {
  const index = new Map();
  if (manifest?.fallback?.path) {
    index.set(manifest.fallback.path, manifest.fallback);
  }
  (manifest?.assets || []).forEach((asset) => {
    if (asset?.path) {
      index.set(asset.path, asset);
    }
  });
  return index;
}

function createOgImagePolicyContext(repoRoot = getRepoRoot()) {
  const tabDefinitions = buildEnglishTabDefinitions(repoRoot);
  const routeMap = buildDocsRouteMap(tabDefinitions);
  const manifest = buildManifestFromTabs(tabDefinitions);
  const assetPathIndex = createAssetPathIndex(manifest);

  return {
    repoRoot,
    tabDefinitions,
    routeMap,
    manifest,
    assetPathIndex,
  };
}

function getSectionAssetEntry(context, sectionId, locale) {
  const normalizedLocale = ensureLocale(locale);
  return (
    context.manifest.assets.find(
      (asset) =>
        asset.kind === "section" &&
        asset.sectionId === sectionId &&
        asset.locale === normalizedLocale,
    ) || null
  );
}

function hasDisallowedNonPageSegment(repoPath) {
  const normalized = normalizeRouteKey(repoPath);
  const segments = normalized.split("/").filter(Boolean);
  return segments.some(
    (segment) =>
      NON_PAGE_SEGMENT_NAMES.has(segment) ||
      NON_PAGE_SEGMENT_PREFIXES.some((prefix) => segment.startsWith(prefix)),
  );
}

function inferSectionIdFromRepoPath(repoPath) {
  const normalized = normalizeRouteKey(repoPath);
  if (!normalized.startsWith("v2/")) {
    return null;
  }

  const sourceRoute = toSourceRouteKey(normalized);
  const parts = sourceRoute.split("/").filter(Boolean);
  if (parts.length < 2 || parts[0] !== "v2") {
    return null;
  }

  return canonicalizeSectionId(parts[1]);
}

function getSectionDefinitionById(context, sectionId) {
  if (!sectionId) {
    return null;
  }
  return context.tabDefinitions.find((tabDefinition) => tabDefinition.id === sectionId) || null;
}

function getSectionDefinitionForRepoPath(repoPath, context) {
  const sourceRoute = toSourceRouteKey(repoPath);
  const routeMatch = context.routeMap.get(sourceRoute);
  if (routeMatch) {
    return routeMatch;
  }

  const inferredSectionId = inferSectionIdFromRepoPath(repoPath);
  if (!inferredSectionId) {
    return null;
  }

  return getSectionDefinitionById(context, inferredSectionId);
}

function isAuthoredMdxPage(repoPath, context = null) {
  const normalized = toPosix(repoPath);
  if (!normalized.endsWith(".mdx")) return false;

  if (isGeneratedInternalReportPath(normalized)) {
    return true;
  }

  if (normalized.startsWith("v2/")) {
    if (hasDisallowedNonPageSegment(normalized)) {
      return false;
    }
    const policyContext = context || createOgImagePolicyContext(getRepoRoot());
    return Boolean(getSectionDefinitionForRepoPath(normalized, policyContext));
  }

  if (normalized.startsWith("docs-guide/") || normalized.startsWith("contribute/")) {
    return !hasDisallowedNonPageSegment(normalized);
  }

  if (normalized.startsWith("docs/")) {
    return !normalized.startsWith("docs/internal/") && !hasDisallowedNonPageSegment(normalized);
  }

  if (normalized.startsWith("snippets/pages/")) {
    return false;
  }

  return AUTHORED_MDX_ROOTS.some(
    (rootPath) =>
      normalized === rootPath || normalized.startsWith(`${rootPath}/`),
  );
}

function isGeneratedInternalReportPath(repoPath) {
  const normalized = normalizeRouteKey(repoPath);
  return (
    normalized.startsWith("v2/internal/reports/") ||
    normalized.startsWith("docs/internal/reports/")
  );
}

function walkMdxFiles(dirPath, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const childPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkMdxFiles(childPath, out);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".mdx")) {
      out.push(childPath);
    }
  }
  return out;
}

function collectAuthoredMdxFiles(repoRoot = getRepoRoot(), context = null) {
  const files = [];
  AUTHORED_MDX_ROOTS.forEach((rootPath) => {
    walkMdxFiles(path.join(repoRoot, rootPath), files);
  });

  return files
    .filter((filePath) =>
      isAuthoredMdxPage(toPosix(path.relative(repoRoot, filePath)), context),
    )
    .sort((left, right) => toPosix(left).localeCompare(toPosix(right)));
}

function resolveOgImageForFile(filePath, context = createOgImagePolicyContext()) {
  const absolutePath = path.isAbsolute(filePath)
    ? filePath
    : path.join(context.repoRoot, filePath);
  const repoPath = toPosix(path.relative(context.repoRoot, absolutePath));
  const locale = getLocaleFromRepoPath(repoPath);
  const sourceRoute = toSourceRouteKey(repoPath);
  const tabDefinition = getSectionDefinitionForRepoPath(repoPath, context);
  const generatedInternalReport = isGeneratedInternalReportPath(repoPath);
  const nonPagePath = hasDisallowedNonPageSegment(repoPath);
  const asset =
    generatedInternalReport
      ? context.manifest.fallback
      : nonPagePath
      ? context.manifest.fallback
      : tabDefinition && repoPath.startsWith("v2/")
      ? getSectionAssetEntry(context, tabDefinition.id, locale)
      : context.manifest.fallback;

  return {
    filePath: absolutePath,
    repoPath,
    locale,
    sourceRoute,
    strict: generatedInternalReport || (!nonPagePath && Boolean(tabDefinition)),
    sectionId:
      generatedInternalReport || nonPagePath
        ? "fallback"
        : tabDefinition?.id || "fallback",
    asset,
    fields: {
      "og:image": asset.path,
      "og:image:alt": asset.alt,
      "og:image:type": asset.type,
      "og:image:width": asset.width,
      "og:image:height": asset.height,
    },
  };
}

function isExternalUrl(value) {
  return /^https?:\/\//i.test(String(value || "").trim());
}

function isGitHubBlobUrl(value) {
  return /^https?:\/\/github\.com\/.+\/blob\/.+/i.test(String(value || "").trim());
}

function isLocalAssetPath(value) {
  const normalized = String(value || "").trim();
  return LOCAL_ASSET_ROOTS.some((rootPath) => normalized.startsWith(rootPath));
}

function hasRasterExtension(value) {
  const extension = path.extname(String(value || "").split("?")[0]).toLowerCase();
  return RASTER_EXTENSIONS.has(extension);
}

function toAbsoluteAssetPath(repoRoot, rootedPath) {
  const relativePath = String(rootedPath || "").replace(/^\/+/, "");
  return path.join(repoRoot, relativePath);
}

function getManifestAssetByPath(value, context = createOgImagePolicyContext()) {
  return context.assetPathIndex.get(String(value || "").trim()) || null;
}

module.exports = {
  AUTHORED_MDX_ROOTS,
  FALLBACK_ALT,
  LOCALIZED_TAB_LABELS,
  OG_IMAGE_DIR,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_TYPE,
  OG_IMAGE_WIDTH,
  RASTER_EXTENSIONS,
  SUPPORTED_LOCALES,
  buildDocsRouteMap,
  buildEnglishTabDefinitions,
  buildManifestFromTabs,
  collectAuthoredMdxFiles,
  createAssetPathIndex,
  createOgImagePolicyContext,
  getLocaleFromRepoPath,
  getLocalizedTabLabel,
  getManifestAssetByPath,
  getRepoRoot,
  getSectionDefinitionForRepoPath,
  getSectionAssetEntry,
  hasRasterExtension,
  hasDisallowedNonPageSegment,
  inferSectionIdFromRepoPath,
  isAuthoredMdxPage,
  isExternalUrl,
  isGeneratedInternalReportPath,
  isGitHubBlobUrl,
  isLocalAssetPath,
  normalizeRouteKey,
  resolveOgImageForFile,
  slugifyLabel,
  toAbsoluteAssetPath,
  toPosix,
  toSourceRouteKey,
};
