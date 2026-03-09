#!/usr/bin/env node
/**
 * @script            sync-v2-en-canonical
 * @category          orchestrator
 * @purpose           tooling:dev-tools
 * @scope             external
 * @owner             docs
 * @needs             node, @notionhq/client, dotenv, NOTION_API_KEY, NOTION_DATABASE_ID or NOTION_WRITABLE_DATABASE_ID
 * @purpose-statement Builds canonical v2 English page metadata and syncs Notion schema, row metadata, and optional page-body blocks to match docs.
 * @pipeline          manual
 * @usage             node tools/notion/sync-v2-en-canonical.js [flags]
 */

const fs = require("fs");
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, ".env") });
const { Client } = require("@notionhq/client");
const {
  resolveDocPath,
  toPosix
} = require("../lib/docs-index-utils");
const {
  analyzeMdxPage,
  buildUsefulnessMatrixFields
} = require("../lib/docs-usefulness/scoring");

const MAPPING_REQUIRED_MARKER = "[MAPPING_REQUIRED]";
const PAGE_INFO_START_MARKER = "AUTO-GENERATED PAGE INFO START";
const PAGE_INFO_END_MARKER = "AUTO-GENERATED PAGE INFO END";
const REVIEW_START_MARKER = "AUTO-GENERATED REVIEW SECTION START";
const REVIEW_END_MARKER = "AUTO-GENERATED REVIEW SECTION END";
const LIVE_URL_PREFIX = "https://docs.livepeer.org/";
const SIDEBAR_TITLE_PROP_NAME = "Sidebar Title";
const NAV_ORDER_PROP_NAME = "Navigation Order";
const PAGE_STATUS_PROP_NAME = "Page Status";
const LEAVE_ME_PROP_NAME = "Leave Me";
const NOT_IN_NAV_STATUS = "Not In Navigation";
const STALE_NAV_ORDER_BASE = 1000000;
const SEVERITY_RANK = {
  critical: 4,
  serious: 3,
  moderate: 2,
  minor: 1,
  unknown: 0,
  none: -1
};

function nowStamp() {
  const d = new Date();
  const yyyy = String(d.getUTCFullYear());
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  const hh = String(d.getUTCHours()).padStart(2, "0");
  const mi = String(d.getUTCMinutes()).padStart(2, "0");
  const ss = String(d.getUTCSeconds()).padStart(2, "0");
  return `${yyyy}${mm}${dd}-${hh}${mi}${ss}Z`;
}

function nowIso() {
  return new Date().toISOString();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseArgs(argv) {
  const args = {
    write: false,
    staleTabName: "Stale",
    outDir: path.join(__dirname, "reports"),
    logEvery: 25,
    contentConcurrency: 1,
    skipContentSync: false,
    rowSleepMs: 35,
    deleteSleepMs: 20,
    appendSleepMs: 20,
    skipUnchangedBody: true
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--write") {
      args.write = true;
      continue;
    }
    if (token === "--dry-run") {
      args.write = false;
      continue;
    }
    if (token === "--stale-tab-name") {
      args.staleTabName = String(argv[i + 1] || "").trim() || args.staleTabName;
      i += 1;
      continue;
    }
    if (token === "--out-dir") {
      args.outDir = path.resolve(__dirname, String(argv[i + 1] || "").trim() || "reports");
      i += 1;
      continue;
    }
    if (token === "--log-every") {
      const value = Number(argv[i + 1]);
      if (Number.isFinite(value) && value > 0) args.logEvery = Math.floor(value);
      i += 1;
      continue;
    }
    if (token === "--row-sleep-ms") {
      const value = Number(argv[i + 1]);
      if (Number.isFinite(value) && value >= 0) args.rowSleepMs = Math.floor(value);
      i += 1;
      continue;
    }
    if (token === "--content-concurrency") {
      const value = Number(argv[i + 1]);
      if (Number.isFinite(value) && value > 0) args.contentConcurrency = Math.floor(value);
      i += 1;
      continue;
    }
    if (token === "--block-delete-sleep-ms") {
      const value = Number(argv[i + 1]);
      if (Number.isFinite(value) && value >= 0) args.deleteSleepMs = Math.floor(value);
      i += 1;
      continue;
    }
    if (token === "--append-sleep-ms") {
      const value = Number(argv[i + 1]);
      if (Number.isFinite(value) && value >= 0) args.appendSleepMs = Math.floor(value);
      i += 1;
      continue;
    }
    if (token === "--no-skip-unchanged-body") {
      args.skipUnchangedBody = false;
      continue;
    }
    if (token === "--skip-content-sync") {
      args.skipContentSync = true;
      continue;
    }
  }

  return args;
}

function normalizeRoute(route) {
  let value = String(route || "").trim();
  value = value.replace(/^\/+/, "");
  value = value.replace(/\.(md|mdx)$/i, "");
  value = value.replace(/\/index$/i, "");
  value = value.replace(/\/+$/, "");
  return value;
}

function normalizeText(value) {
  return String(value || "").trim();
}

function normalizeKeyPart(value) {
  return normalizeText(value).toLowerCase();
}

function slugFromRoute(route) {
  const normalized = normalizeRoute(route);
  if (!normalized) return "";
  const parts = normalized.split("/");
  return parts[parts.length - 1] || "";
}

function placementKey(route, tabGroup, sectionGroup, subSection) {
  return [
    normalizeKeyPart(normalizeRoute(route)),
    normalizeKeyPart(tabGroup),
    normalizeKeyPart(sectionGroup),
    normalizeKeyPart(subSection)
  ].join("|||");
}

function pageNameTabKey(pageName, tabGroup) {
  return [normalizeKeyPart(pageName), normalizeKeyPart(tabGroup)].join("||");
}

function csvEscape(value) {
  const text = value == null ? "" : String(value);
  if (/[",\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function countBy(items, key) {
  return items.reduce((acc, item) => {
    const k = item[key] || "";
    acc[k] = (acc[k] || 0) + 1;
    return acc;
  }, {});
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeCsv(filePath, rows, headers) {
  const headerLine = headers.join(",");
  const body = rows
    .map((row) => headers.map((header) => csvEscape(row[header])).join(","))
    .join("\n");
  const content = `${headerLine}\n${body}${body ? "\n" : ""}`;
  fs.writeFileSync(filePath, content);
}

function readJsonSafe(filePath, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (_error) {
    return fallback;
  }
}

function dedupeOrdered(values) {
  const seen = new Set();
  const out = [];
  values.forEach((value) => {
    const v = normalizeText(value);
    if (!v) return;
    const key = normalizeKeyPart(v);
    if (seen.has(key)) return;
    seen.add(key);
    out.push(v);
  });
  return out;
}

function collectPagesFromNode(node, out) {
  if (typeof node === "string") {
    const route = normalizeRoute(node);
    if (route) out.push(route);
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((item) => collectPagesFromNode(item, out));
    return;
  }
  if (!node || typeof node !== "object") return;

  if (Array.isArray(node.pages)) {
    node.pages.forEach((item) => collectPagesFromNode(item, out));
  }

  Object.values(node).forEach((value) => collectPagesFromNode(value, out));
}

function buildCanonicalDataFromDocsJson(repoRoot) {
  const docsJsonPath = path.join(repoRoot, "docs.json");
  const docsJson = JSON.parse(fs.readFileSync(docsJsonPath, "utf8"));
  const v2 = (docsJson?.navigation?.versions || []).find(
    (versionNode) => versionNode?.version === "v2"
  );
  if (!v2) throw new Error("Could not find v2 in docs.json navigation.");
  const en = (v2.languages || []).find((langNode) => langNode?.language === "en");
  if (!en) throw new Error("Could not find language=en under v2 in docs.json.");

  const localeTargets = (v2.languages || [])
    .map((langNode) => normalizeText(langNode?.language))
    .filter((language) => language && language !== "en");

  const localeRouteSets = new Map();
  (v2.languages || []).forEach((langNode) => {
    const language = normalizeText(langNode?.language);
    if (!language) return;
    const collected = [];
    collectPagesFromNode(langNode?.tabs || [], collected);
    localeRouteSets.set(language, new Set(collected.map((route) => normalizeRoute(route))));
  });

  const seenPlacementKeys = new Set();
  const rows = [];
  const duplicatePlacements = [];
  const routePlacement = new Map();
  const routePlacementConflicts = [];
  const orderedSectionGroups = [];
  const orderedSubSections = [];

  function appendOrderValues(row) {
    if (row.sectionGroup) orderedSectionGroups.push(row.sectionGroup);
    if (row.subSection) orderedSubSections.push(row.subSection);
  }

  function appendRow(rawRoute, context) {
    let route = String(rawRoute || "").trim();
    if (!route || route === " ") return;
    route = route.replace(/^\/+/, "");
    if (!route.startsWith("v2/")) return;
    if (route.includes("/redirect")) return;
    route = normalizeRoute(route);
    if (!route) return;

    const row = {
      pageName: slugFromRoute(route),
      tabGroup: normalizeText(context.tabGroup),
      sectionGroup: normalizeText(context.sectionGroup),
      subSection: normalizeText(context.subSection),
      relativePathUrl: route,
      url: `${LIVE_URL_PREFIX}${route}`,
      navigationOrder: rows.length + 1
    };

    const key = placementKey(
      row.relativePathUrl,
      row.tabGroup,
      row.sectionGroup,
      row.subSection
    );
    if (seenPlacementKeys.has(key)) {
      duplicatePlacements.push({
        route: row.relativePathUrl,
        tabGroup: row.tabGroup,
        sectionGroup: row.sectionGroup,
        subSection: row.subSection
      });
      return;
    }

    if (!routePlacement.has(row.relativePathUrl)) {
      routePlacement.set(row.relativePathUrl, {
        tabGroup: row.tabGroup,
        sectionGroup: row.sectionGroup,
        subSection: row.subSection,
        pageName: row.pageName
      });
    } else {
      const existing = routePlacement.get(row.relativePathUrl);
      const conflict =
        normalizeKeyPart(existing.tabGroup) !== normalizeKeyPart(row.tabGroup) ||
        normalizeKeyPart(existing.sectionGroup) !== normalizeKeyPart(row.sectionGroup) ||
        normalizeKeyPart(existing.subSection) !== normalizeKeyPart(row.subSection);
      if (conflict) {
        routePlacementConflicts.push({
          route: row.relativePathUrl,
          first: existing,
          next: {
            tabGroup: row.tabGroup,
            sectionGroup: row.sectionGroup,
            subSection: row.subSection,
            pageName: row.pageName
          }
        });
      }
    }

    seenPlacementKeys.add(key);
    appendOrderValues(row);
    rows.push(row);
  }

  function walk(node, context) {
    if (typeof node === "string") {
      appendRow(node, context);
      return;
    }

    if (Array.isArray(node)) {
      node.forEach((item) => walk(item, context));
      return;
    }

    if (!node || typeof node !== "object") return;

    if (node.tab) {
      const tabContext = {
        tabGroup: normalizeText(node.tab),
        sectionGroup: "",
        subSection: ""
      };
      (node.anchors || []).forEach((anchorNode) => walk(anchorNode, tabContext));
      return;
    }

    if (node.anchor) {
      const anchorContext = {
        tabGroup: context.tabGroup,
        sectionGroup: "",
        subSection: ""
      };
      if (Array.isArray(node.groups) && node.groups.length > 0) {
        node.groups.forEach((groupNode) => walk(groupNode, anchorContext));
      }
      if (Array.isArray(node.pages) && node.pages.length > 0) {
        node.pages.forEach((pageNode) => walk(pageNode, anchorContext));
      }
      return;
    }

    if (node.group) {
      const groupName = normalizeText(node.group);
      const nextContext = { ...context };
      if (!nextContext.sectionGroup) {
        nextContext.sectionGroup = groupName;
        nextContext.subSection = "";
      } else {
        nextContext.subSection = groupName;
      }
      (node.pages || []).forEach((pageNode) => walk(pageNode, nextContext));
      return;
    }

    if (Array.isArray(node.pages)) {
      node.pages.forEach((pageNode) => walk(pageNode, context));
      return;
    }

    Object.values(node).forEach((value) => walk(value, context));
  }

  (en.tabs || []).forEach((tabNode) =>
    walk(tabNode, { tabGroup: "", sectionGroup: "", subSection: "" })
  );

  return {
    rows,
    duplicatePlacements,
    routePlacement,
    routePlacementConflicts,
    orderedSectionGroups: dedupeOrdered(orderedSectionGroups),
    orderedSubSections: dedupeOrdered(orderedSubSections),
    localeTargets,
    localeRouteSets
  };
}

function getTitle(property) {
  const title = property?.title;
  if (!Array.isArray(title) || title.length === 0) return "";
  return title.map((part) => part?.plain_text || "").join("");
}

function getSelect(property) {
  return property?.select?.name || "";
}

function getMultiSelect(property) {
  const items = property?.multi_select;
  if (!Array.isArray(items)) return [];
  return items.map((item) => item?.name || "").filter(Boolean);
}

function getUrl(property) {
  return property?.url || "";
}

function getNumber(property) {
  if (!property || typeof property.number !== "number") return null;
  return property.number;
}

function getRichText(property) {
  const items = property?.rich_text;
  if (!Array.isArray(items)) return "";
  return items.map((item) => item?.plain_text || "").join("").trim();
}

function getCheckbox(property) {
  if (!property || typeof property.checkbox !== "boolean") return false;
  return property.checkbox;
}

function toSelectProp(value) {
  const v = normalizeText(value);
  if (!v) return { select: null };
  return { select: { name: v } };
}

function toTitleProp(value) {
  return {
    title: [
      {
        type: "text",
        text: { content: normalizeText(value) }
      }
    ]
  };
}

function toRichTextProp(value) {
  const text = String(value || "").trim();
  if (!text) return { rich_text: [] };
  return {
    rich_text: [
      {
        type: "text",
        text: {
          content: text.slice(0, 1900)
        }
      }
    ]
  };
}

function toNumberProp(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return { number: null };
  return { number: value };
}

function toMultiSelectProp(values) {
  const list = Array.isArray(values) ? values : [values];
  const cleaned = dedupeOrdered(list);
  return {
    multi_select: cleaned.map((name) => ({ name }))
  };
}

function hasExactSingleStatus(list, expected) {
  const values = Array.isArray(list) ? list.map((item) => normalizeText(item)).filter(Boolean) : [];
  return values.length === 1 && normalizeKeyPart(values[0]) === normalizeKeyPart(expected);
}

function canonicalProperties(row) {
  return {
    "Page Name": toTitleProp(row.pageName),
    "Tab Group": toSelectProp(row.tabGroup),
    "Section Group": toSelectProp(row.sectionGroup),
    "Sub Section": toSelectProp(row.subSection),
    "Relative path URL": { url: row.relativePathUrl || null },
    URL: { url: row.url || null },
    [SIDEBAR_TITLE_PROP_NAME]: toRichTextProp(row.sidebarTitle),
    [NAV_ORDER_PROP_NAME]: toNumberProp(row.navigationOrder)
  };
}

function rowNeedsCanonicalUpdate(existingRow, targetRow) {
  if (!existingRow) return true;

  const pageNameDifferent = normalizeText(existingRow.pageName) !== normalizeText(targetRow.pageName);
  const tabDifferent = normalizeKeyPart(existingRow.tabGroup) !== normalizeKeyPart(targetRow.tabGroup);
  const sectionDifferent = normalizeKeyPart(existingRow.sectionGroup) !== normalizeKeyPart(targetRow.sectionGroup);
  const subDifferent = normalizeKeyPart(existingRow.subSection) !== normalizeKeyPart(targetRow.subSection);
  const pathDifferent = normalizeRoute(existingRow.relativePathUrl) !== normalizeRoute(targetRow.relativePathUrl);
  const urlDifferent = normalizeText(existingRow.url) !== normalizeText(targetRow.url);
  const sidebarTitleDifferent =
    normalizeText(existingRow.sidebarTitle) !== normalizeText(targetRow.sidebarTitle);
  const navOrderDifferent = Number(existingRow.navigationOrder || 0) !== Number(targetRow.navigationOrder || 0);

  return (
    pageNameDifferent ||
    tabDifferent ||
    sectionDifferent ||
    subDifferent ||
    pathDifferent ||
    urlDifferent ||
    sidebarTitleDifferent ||
    navOrderDifferent
  );
}

function appendMappingMarker(existingNotes, route) {
  const base = String(existingNotes || "").trim();
  if (base.includes(MAPPING_REQUIRED_MARKER)) return base;
  const suffix = `${MAPPING_REQUIRED_MARKER} Could not map section/subsection for route: ${route}`;
  if (!base) return suffix;
  return `${base}\n${suffix}`;
}

function deriveAutoStatus(routeScore) {
  const human = Number(routeScore?.humanUsefulnessScore || 0);
  const flags = new Set(routeScore?.flags || []);
  const hasIncompleteSignal =
    flags.has("empty") ||
    flags.has("incomplete") ||
    flags.has("coming_soon") ||
    flags.has("todo_marker");

  if (hasIncompleteSignal || human <= 24) return "Not Started";
  if (human <= 49) return "Needs Work";
  if (human <= 69) return "In Progress";
  if (human <= 84) return "Review Needed";

  const qualityFlags = [
    "missing_frontmatter",
    "invalid_frontmatter",
    "missing_title",
    "missing_description",
    "legacy_v2_pages_link",
    "source_conflict"
  ];
  const hasQualityFlags = qualityFlags.some((flag) => flags.has(flag));
  if (hasQualityFlags) return "Review Needed";
  return "Complete";
}

function buildRouteInfoFactory(repoRoot) {
  const cache = new Map();

  function getRouteInfo(route) {
    const normalizedRoute = normalizeRoute(route);
    if (!normalizedRoute) {
      return {
        route: "",
        fileRel: "",
        description: "",
        humanUsefulnessScore: 0,
        humanBand: "empty",
        accuracyStatus: "provisional",
        verificationPriority: "",
        flags: ["missing_route"],
        autoStatus: "Not Started",
        notesShort: ""
      };
    }

    if (cache.has(normalizedRoute)) return cache.get(normalizedRoute);

    const fileRel = resolveDocPath(normalizedRoute, repoRoot);
    if (!fileRel) {
      const fallback = {
        route: normalizedRoute,
        fileRel: "",
        description: "",
        humanUsefulnessScore: 0,
        humanBand: "placeholder_or_broken",
        accuracyStatus: "provisional",
        verificationPriority: "",
        flags: ["missing_file", "incomplete"],
        autoStatus: "Not Started",
        notesShort: ""
      };
      cache.set(normalizedRoute, fallback);
      return fallback;
    }

    const absPath = path.join(repoRoot, fileRel);
    const raw = fs.readFileSync(absPath, "utf8");
    const analysis = analyzeMdxPage({
      content: raw,
      filePath: toPosix(fileRel),
      routePath: `/${normalizedRoute}`
    });
    const matrix = buildUsefulnessMatrixFields({ analysis });

    const routeInfo = {
      route: normalizedRoute,
      fileRel: toPosix(fileRel),
      description: normalizeText(analysis?.frontmatter?.data?.description || ""),
      humanUsefulnessScore: Number(matrix.human_usefulness_score || 0),
      humanBand: normalizeText(matrix.human_band || ""),
      accuracyStatus: "provisional",
      verificationPriority: normalizeText(matrix.verification_priority || ""),
      flags: Array.isArray(analysis.flags) ? analysis.flags : [],
      autoStatus: deriveAutoStatus({
        humanUsefulnessScore: Number(matrix.human_usefulness_score || 0),
        flags: Array.isArray(analysis.flags) ? analysis.flags : []
      }),
      notesShort: normalizeText(matrix.notes_short || "")
    };

    cache.set(normalizedRoute, routeInfo);
    return routeInfo;
  }

  return {
    getRouteInfo,
    cache
  };
}

function buildSidebarTitleFactory(repoRoot) {
  const cache = new Map();

  function getSidebarTitle(route) {
    const normalizedRoute = normalizeRoute(route);
    if (!normalizedRoute) return "";
    if (cache.has(normalizedRoute)) return cache.get(normalizedRoute);

    const fallback = slugFromRoute(normalizedRoute);
    const fileRel = resolveDocPath(normalizedRoute, repoRoot);
    if (!fileRel) {
      cache.set(normalizedRoute, fallback);
      return fallback;
    }

    let resolved = fallback;
    try {
      const absPath = path.join(repoRoot, fileRel);
      const raw = fs.readFileSync(absPath, "utf8");
      const analysis = analyzeMdxPage({
        content: raw,
        filePath: toPosix(fileRel),
        routePath: `/${normalizedRoute}`
      });
      const frontmatter = analysis?.frontmatter?.data || {};
      const sidebarTitle = normalizeText(frontmatter.sidebarTitle);
      const title = normalizeText(frontmatter.title);
      resolved = sidebarTitle || title || fallback;
    } catch (_error) {
      resolved = fallback;
    }

    cache.set(normalizedRoute, resolved);
    return resolved;
  }

  return {
    getSidebarTitle,
    cache
  };
}

function toRouteFromFilePath(filePath) {
  let rel = normalizeText(filePath).replace(/\\/g, "/");
  rel = rel.replace(/^\/+/, "");
  rel = rel.replace(/^\.\//, "");
  rel = rel.replace(/\.(md|mdx)$/i, "");
  rel = rel.replace(/\/index$/i, "");
  return normalizeRoute(rel);
}

function loadLinkMissingRefsMap(repoRoot) {
  const reportPath = path.join(repoRoot, "tasks", "reports", "navigation-links", "LINK_TEST_REPORT.json");
  const report = readJsonSafe(reportPath, null);
  const map = new Map();
  if (!report || !Array.isArray(report.files)) return map;

  report.files.forEach((entry) => {
    const route = toRouteFromFilePath(entry?.file || "");
    if (!route) return;
    const refs = Array.isArray(entry?.refs) ? entry.refs : [];
    const missingCount = refs.filter((ref) => {
      const status = normalizeText(ref?.status).toLowerCase();
      return status === "missing" || status === "route-missing";
    }).length;
    map.set(route, missingCount);
  });

  return map;
}

function normalizeImpact(impact) {
  const value = normalizeText(impact).toLowerCase();
  if (!value) return "unknown";
  if (SEVERITY_RANK[value] == null) return "unknown";
  return value;
}

function isBlockingImpact(impact) {
  const key = normalizeImpact(impact);
  return (SEVERITY_RANK[key] || 0) >= SEVERITY_RANK.serious;
}

function loadWcagBlockingMap(repoRoot) {
  const reportPath = path.join(repoRoot, "tasks", "reports", "quality-accessibility", "v2-wcag-audit-report.json");
  const report = readJsonSafe(reportPath, null);
  const map = new Map();
  if (!report || !Array.isArray(report.results)) return map;

  report.results.forEach((result) => {
    const route = normalizeRoute(result?.routeKey || toRouteFromFilePath(result?.file || ""));
    if (!route) return;

    const wcagViolations = Array.isArray(result?.wcagViolations) ? result.wcagViolations : [];
    const staticFindings = Array.isArray(result?.staticFindings) ? result.staticFindings : [];

    const wcagBlocking = wcagViolations.filter((item) => isBlockingImpact(item?.impact)).length;
    const staticBlocking = staticFindings.filter(
      (item) => !item?.fixed && isBlockingImpact(item?.impact)
    ).length;

    map.set(route, wcagBlocking + staticBlocking);
  });

  return map;
}

function loadDomainStatusMap(repoRoot) {
  const reportPath = path.join(repoRoot, "tests", "reports", "domain-page-load-report.json");
  const report = readJsonSafe(reportPath, null);
  const map = new Map();
  if (!report || !Array.isArray(report.results)) return map;

  report.results.forEach((result) => {
    const route = normalizeRoute(result?.pagePath || "");
    if (!route) return;
    map.set(route, {
      status: result?.passed ? "Pass" : "Fail",
      code: result?.status || "",
      warnings: Array.isArray(result?.warnings) ? result.warnings.length : 0,
      errors: Array.isArray(result?.errors) ? result.errors.length : 0
    });
  });

  return map;
}

function baseEnglishRoute(route, localeTargets) {
  const normalized = normalizeRoute(route);
  if (!normalized.startsWith("v2/")) return normalized;
  const parts = normalized.split("/");
  const maybeLocale = parts[1] || "";
  if (localeTargets.includes(maybeLocale)) {
    const rest = parts.slice(2).join("/");
    return normalizeRoute(`v2/${rest}`);
  }
  return normalized;
}

function localizedRouteFromBase(baseRoute, locale) {
  const base = normalizeRoute(baseRoute);
  if (!base.startsWith("v2/")) return "";
  const rest = base.slice("v2/".length);
  if (!rest) return "";
  return normalizeRoute(`v2/${locale}/${rest}`);
}

function buildTranslationCoverage(route, localeTargets, localeRouteSets, repoRoot) {
  const baseRoute = baseEnglishRoute(route, localeTargets);
  const localesPresent = [];
  const localesMissing = [];

  localeTargets.forEach((locale) => {
    const localizedRoute = localizedRouteFromBase(baseRoute, locale);
    if (!localizedRoute) {
      localesMissing.push(locale);
      return;
    }

    const inLocaleNav = localeRouteSets.get(locale)?.has(localizedRoute) || false;
    const fileExists = Boolean(resolveDocPath(localizedRoute, repoRoot));

    if (inLocaleNav || fileExists) localesPresent.push(locale);
    else localesMissing.push(locale);
  });

  const translatedCount = localesPresent.length;
  const targetCount = localeTargets.length;

  let translationStatus = "not_translated";
  if (targetCount === 0) translationStatus = "not_translated";
  else if (translatedCount === targetCount) translationStatus = "fully_translated";
  else if (translatedCount > 0) translationStatus = "partially_translated";

  return {
    baseRoute,
    translationStatus,
    localesPresent,
    localesMissing,
    translatedCount,
    targetCount
  };
}

async function withRetry(fn, label) {
  let attempt = 0;
  let delay = 500;
  while (attempt < 12) {
    try {
      return await fn();
    } catch (error) {
      const code = String(error?.code || "").toLowerCase();
      const status = Number(error?.status || 0);
      const message = String(error?.message || "").toLowerCase();
      const retryAfterHeader =
        error?.headers?.["retry-after"] ??
        error?.response?.headers?.["retry-after"] ??
        null;
      const retryAfterSeconds = Number(retryAfterHeader);
      const isRateLimited =
        status === 429 ||
        code.includes("rate_limited") ||
        message.includes("rate limit");
      const retriable =
        isRateLimited ||
        status >= 500 ||
        code.includes("rate_limited") ||
        code.includes("timeout") ||
        message.includes("rate") ||
        message.includes("timeout") ||
        message.includes("temporarily");

      if (!retriable || attempt === 11) {
        throw new Error(`${label}: ${error.message}`);
      }

      let waitMs = delay;
      if (isRateLimited) {
        waitMs = Math.max(
          waitMs,
          Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0
            ? Math.floor(retryAfterSeconds * 1000)
            : 15000
        );
      }

      await sleep(waitMs);

      if (isRateLimited) {
        delay = Math.min(Math.floor(waitMs * 1.5), 120000);
      } else {
        delay = Math.min(delay * 2, 10000);
      }
      attempt += 1;
    }
  }

  throw new Error(`${label}: retry exhausted`);
}

async function fetchAllRows(notion, dataSourceId) {
  const rows = [];
  let startCursor = undefined;
  let hasMore = true;
  while (hasMore) {
    const res = await withRetry(
      () =>
        notion.dataSources.query({
          data_source_id: dataSourceId,
          start_cursor: startCursor,
          page_size: 100
        }),
      `query-data-source ${dataSourceId}`
    );
    rows.push(...res.results);
    hasMore = Boolean(res.has_more);
    startCursor = res.next_cursor || undefined;
  }
  return rows;
}

async function listAllTopLevelBlocks(notion, pageId) {
  const blocks = [];
  let startCursor = undefined;
  let hasMore = true;
  while (hasMore) {
    const res = await withRetry(
      () =>
        notion.blocks.children.list({
          block_id: pageId,
          start_cursor: startCursor,
          page_size: 100
        }),
      `list-block-children ${pageId}`
    );
    blocks.push(...res.results);
    hasMore = Boolean(res.has_more);
    startCursor = res.next_cursor || undefined;
  }
  return blocks;
}

async function mapWithConcurrency(items, concurrency, worker) {
  const safeConcurrency = Math.max(1, Math.min(Number(concurrency) || 1, items.length || 1));
  let nextIndex = 0;

  async function runWorker() {
    while (true) {
      const current = nextIndex;
      if (current >= items.length) return;
      nextIndex += 1;
      await worker(items[current], current);
    }
  }

  const workers = [];
  for (let i = 0; i < safeConcurrency; i += 1) {
    workers.push(runWorker());
  }
  await Promise.all(workers);
}

function blockPlainText(block) {
  const type = block?.type;
  if (!type) return "";
  const payload = block[type];
  const richText = payload?.rich_text;
  if (!Array.isArray(richText)) return "";
  return richText.map((item) => item?.plain_text || "").join("").trim();
}

function collectMarkerRanges(blocks, startMarker, endMarker) {
  const ranges = [];
  let startIndex = null;

  for (let i = 0; i < blocks.length; i += 1) {
    const text = blockPlainText(blocks[i]);
    if (text === startMarker && startIndex == null) {
      startIndex = i;
      continue;
    }

    if (text === endMarker) {
      if (startIndex == null) {
        ranges.push([i, i]);
      } else {
        ranges.push([startIndex, i]);
        startIndex = null;
      }
    }
  }

  if (startIndex != null) {
    ranges.push([startIndex, startIndex]);
  }

  return ranges;
}

function richText(text) {
  return [
    {
      type: "text",
      text: {
        content: String(text || "")
      }
    }
  ];
}

function paragraphBlock(text) {
  return {
    object: "block",
    type: "paragraph",
    paragraph: {
      rich_text: richText(text)
    }
  };
}

function heading2Block(text) {
  return {
    object: "block",
    type: "heading_2",
    heading_2: {
      rich_text: richText(text)
    }
  };
}

function heading3Block(text) {
  return {
    object: "block",
    type: "heading_3",
    heading_3: {
      rich_text: richText(text)
    }
  };
}

function bulletBlock(text) {
  return {
    object: "block",
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: richText(text)
    }
  };
}

function reviewerToggleBlock(reviewerName, assigned) {
  return {
    object: "block",
    type: "heading_3",
    heading_3: {
      rich_text: richText(`Review - ${reviewerName}`),
      is_toggleable: true,
      children: [
        paragraphBlock(`Assigned (checkbox): ${assigned ? "true" : "false"}`),
        paragraphBlock("Verdict: approve | needs_changes | blocked"),
        paragraphBlock("Notes:"),
        bulletBlock("(add note)")
      ]
    }
  };
}

function toDisplayValue(value, fallback = "(none)") {
  const text = normalizeText(value);
  return text || fallback;
}

function buildPageInfoBlocks({
  row,
  routeInfo,
  translation,
  linkMissingRefs,
  wcagBlocking,
  domainStatus,
  reviewerNames,
  syncedAt,
  sourceRunIds
}) {
  const blocks = [];

  blocks.push(paragraphBlock(PAGE_INFO_START_MARKER));
  blocks.push(heading2Block("Page Info"));

  blocks.push(paragraphBlock(`Page Name: ${toDisplayValue(row.pageName)}`));
  blocks.push(paragraphBlock(`Relative Path: ${toDisplayValue(row.relativePathUrl)}`));
  blocks.push(paragraphBlock(`Live URL: ${toDisplayValue(row.url)}`));
  blocks.push(paragraphBlock(`File Path: ${toDisplayValue(routeInfo.fileRel, "(missing file)")}`));

  blocks.push(heading3Block("IA Placement"));
  blocks.push(bulletBlock(`Tab Group: ${toDisplayValue(row.tabGroup)}`));
  blocks.push(bulletBlock(`Section Group: ${toDisplayValue(row.sectionGroup)}`));
  blocks.push(bulletBlock(`Sub Section: ${toDisplayValue(row.subSection)}`));

  blocks.push(heading3Block("Health Snapshot"));
  blocks.push(bulletBlock(`Page Status: Preserved (read-only)`));
  blocks.push(bulletBlock(`Usefulness Score: ${routeInfo.humanUsefulnessScore} (${toDisplayValue(routeInfo.humanBand, "unknown")})`));
  blocks.push(bulletBlock(`Accuracy Status: ${toDisplayValue(routeInfo.accuracyStatus, "provisional")}`));
  blocks.push(bulletBlock(`Verification Priority: ${toDisplayValue(routeInfo.verificationPriority, "none")}`));
  blocks.push(bulletBlock(`Link Missing Refs: ${linkMissingRefs == null ? "Not Checked" : String(linkMissingRefs)}`));
  blocks.push(bulletBlock(`WCAG Blocking Issues: ${wcagBlocking == null ? "Not Checked" : String(wcagBlocking)}`));
  blocks.push(bulletBlock(`Live Load Status: ${toDisplayValue(domainStatus?.status, "Not Checked")}`));

  blocks.push(heading3Block("Translation Coverage"));
  blocks.push(bulletBlock(`Translation Status: ${translation.translationStatus}`));
  blocks.push(bulletBlock(`Locales Present: ${translation.localesPresent.length ? translation.localesPresent.join(", ") : "(none)"}`));
  blocks.push(bulletBlock(`Locales Missing: ${translation.localesMissing.length ? translation.localesMissing.join(", ") : "(none)"}`));
  blocks.push(bulletBlock(`Total Locales Available: ${translation.translatedCount}/${translation.targetCount}`));

  blocks.push(heading3Block("Description"));
  blocks.push(paragraphBlock(toDisplayValue(routeInfo.description, "(none)")));

  blocks.push(heading3Block("Key Flags"));
  blocks.push(paragraphBlock(routeInfo.flags.length ? routeInfo.flags.join(", ") : "(none)"));

  blocks.push(heading3Block("Last Sync"));
  blocks.push(bulletBlock(`Synced At (UTC): ${syncedAt}`));
  blocks.push(bulletBlock(`Source Run IDs: ${sourceRunIds}`));

  blocks.push(paragraphBlock(PAGE_INFO_END_MARKER));

  blocks.push(paragraphBlock(REVIEW_START_MARKER));
  blocks.push(heading2Block("Review (Manual)"));
  reviewerNames.forEach((reviewerName) => {
    blocks.push(reviewerToggleBlock(reviewerName, Boolean(row.reviewerChecks?.[reviewerName])));
  });
  blocks.push(paragraphBlock(REVIEW_END_MARKER));

  return blocks;
}

async function appendBlocksInChunks(notion, pageId, blocks, chunkSize = 80, sleepMs = 80) {
  for (let i = 0; i < blocks.length; i += chunkSize) {
    const chunk = blocks.slice(i, i + chunkSize);
    await withRetry(
      () => notion.blocks.children.append({
        block_id: pageId,
        children: chunk
      }),
      `append-blocks ${pageId}`
    );
    if (sleepMs > 0) await sleep(sleepMs);
  }
}

function normalizeSignatureText(text) {
  const raw = String(text || "").trim();
  if (/^Synced At \(UTC\):/i.test(raw)) return "Synced At (UTC): <dynamic>";
  if (/^Source Run IDs:/i.test(raw)) return "Source Run IDs: <dynamic>";
  return raw;
}

function blockSignature(block) {
  const type = block?.type || "";
  const text = normalizeSignatureText(blockPlainText(block));
  const isToggle = type === "heading_3" && Boolean(block?.heading_3?.is_toggleable);
  return `${type}|${isToggle ? "toggle" : ""}|${text}`;
}

function pickLatestCompleteRange(blocks, startMarker, endMarker) {
  const ranges = collectMarkerRanges(blocks, startMarker, endMarker);
  for (let i = ranges.length - 1; i >= 0; i -= 1) {
    const [start, end] = ranges[i];
    if (start == null || end == null || end < start) continue;
    if (blockPlainText(blocks[start]) !== startMarker) continue;
    if (blockPlainText(blocks[end]) !== endMarker) continue;
    return [start, end];
  }
  return null;
}

function rangeSignature(blocks, range) {
  if (!range) return "";
  const [start, end] = range;
  const items = [];
  for (let i = start; i <= end && i < blocks.length; i += 1) {
    items.push(blockSignature(blocks[i]));
  }
  return items.join("\n");
}

function generatedSectionsSignature(blocks) {
  const pageInfoRange = pickLatestCompleteRange(blocks, PAGE_INFO_START_MARKER, PAGE_INFO_END_MARKER);
  const reviewRange = pickLatestCompleteRange(blocks, REVIEW_START_MARKER, REVIEW_END_MARKER);
  if (!pageInfoRange || !reviewRange) return "";
  return [rangeSignature(blocks, pageInfoRange), rangeSignature(blocks, reviewRange)].join("\n---\n");
}

async function upsertGeneratedSections(
  notion,
  pageId,
  newBlocks,
  { skipIfUnchanged = true, deleteSleepMs = 60, appendSleepMs = 80 } = {}
) {
  const existing = await listAllTopLevelBlocks(notion, pageId);

  if (skipIfUnchanged) {
    const existingSig = generatedSectionsSignature(existing);
    const newSig = generatedSectionsSignature(newBlocks);
    if (existingSig && newSig && existingSig === newSig) {
      return {
        deletedBlocks: 0,
        appendedBlocks: 0,
        skipped: true
      };
    }
  }

  const ranges = [
    ...collectMarkerRanges(existing, PAGE_INFO_START_MARKER, PAGE_INFO_END_MARKER),
    ...collectMarkerRanges(existing, REVIEW_START_MARKER, REVIEW_END_MARKER)
  ];

  const idsToDelete = [];
  ranges.forEach(([start, end]) => {
    for (let i = start; i <= end; i += 1) {
      const id = existing[i]?.id;
      if (id) idsToDelete.push(id);
    }
  });

  const dedupedIds = [...new Set(idsToDelete)];
  for (let i = dedupedIds.length - 1; i >= 0; i -= 1) {
    const blockId = dedupedIds[i];
    try {
      await withRetry(() => notion.blocks.delete({ block_id: blockId }), `delete-block ${blockId}`);
    } catch (error) {
      const message = String(error?.message || "").toLowerCase();
      if (!message.includes("archived")) throw error;
    }
    if (deleteSleepMs > 0) await sleep(deleteSleepMs);
  }

  await appendBlocksInChunks(notion, pageId, newBlocks, 80, appendSleepMs);
  return {
    deletedBlocks: dedupedIds.length,
    appendedBlocks: newBlocks.length,
    skipped: false
  };
}

async function resolveDataSourceIds(notion) {
  const envDataSource = normalizeText(process.env.NOTION_DATABASE_ID);
  const envDatabase = normalizeText(process.env.NOTION_WRITABLE_DATABASE_ID);

  if (envDataSource) {
    const ds = await withRetry(
      () => notion.dataSources.retrieve({ data_source_id: envDataSource }),
      `retrieve-data-source ${envDataSource}`
    );
    const resolvedDbId = envDatabase || normalizeText(ds?.parent?.database_id) || null;
    return { dataSourceId: envDataSource, databaseId: resolvedDbId, dataSource: ds };
  }

  if (envDatabase) {
    const db = await withRetry(
      () => notion.databases.retrieve({ database_id: envDatabase }),
      `retrieve-database ${envDatabase}`
    );
    const dataSourceId = db?.data_sources?.[0]?.id || "";
    if (!dataSourceId) {
      throw new Error("Could not resolve data source from NOTION_WRITABLE_DATABASE_ID.");
    }
    const ds = await withRetry(
      () => notion.dataSources.retrieve({ data_source_id: dataSourceId }),
      `retrieve-data-source ${dataSourceId}`
    );
    return { dataSourceId, databaseId: envDatabase, dataSource: ds };
  }

  throw new Error("Missing NOTION_DATABASE_ID or NOTION_WRITABLE_DATABASE_ID.");
}

function findDataSourceProperty(dataSource, propertyName) {
  const entries = Object.entries(dataSource?.properties || {});
  for (const [key, prop] of entries) {
    if (normalizeText(prop?.name) === propertyName || normalizeText(key) === propertyName) {
      return { key, prop };
    }
  }
  return null;
}

function getReviewerCheckboxNames(dataSource) {
  return Object.values(dataSource?.properties || {})
    .filter((prop) => prop?.type === "checkbox")
    .map((prop) => normalizeText(prop?.name))
    .filter((name) => normalizeKeyPart(name) !== normalizeKeyPart(LEAVE_ME_PROP_NAME))
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}

function parseExistingRows(rows, reviewerPropertyNames) {
  return rows.map((row) => {
    const p = row.properties || {};
    const relativePathUrl = normalizeRoute(getUrl(p["Relative path URL"]));

    const reviewerChecks = {};
    reviewerPropertyNames.forEach((name) => {
      reviewerChecks[name] = getCheckbox(p[name]);
    });

    return {
      id: row.id,
      object: row,
      inTrash: Boolean(row.in_trash),
      pageName: getTitle(p["Page Name"]),
      tabGroup: getSelect(p["Tab Group"]),
      sectionGroup: getSelect(p["Section Group"]),
      subSection: getSelect(p["Sub Section"]),
      pageStatusList: getMultiSelect(p[PAGE_STATUS_PROP_NAME]),
      sidebarTitle: getRichText(p[SIDEBAR_TITLE_PROP_NAME]),
      navigationOrder: getNumber(p[NAV_ORDER_PROP_NAME]),
      notes: getRichText(p["Notes"]),
      leaveMe: getCheckbox(p[LEAVE_ME_PROP_NAME]),
      relativePathUrl,
      url: getUrl(p["URL"]),
      reviewerChecks,
      key: placementKey(
        relativePathUrl,
        getSelect(p["Tab Group"]),
        getSelect(p["Section Group"]),
        getSelect(p["Sub Section"])
      ),
      pageNameTabKey: pageNameTabKey(getTitle(p["Page Name"]), getSelect(p["Tab Group"]))
    };
  });
}

function buildSelectOptions(desiredNames, existingOptions) {
  const existingByName = new Map();
  (existingOptions || []).forEach((option) => {
    const key = normalizeKeyPart(option?.name);
    if (!key) return;
    existingByName.set(key, option);
  });

  return desiredNames.map((name) => {
    const key = normalizeKeyPart(name);
    const existing = existingByName.get(key);
    const option = { name };
    if (existing?.id) option.id = existing.id;
    if (existing?.color) option.color = existing.color;
    if (existing?.description != null) option.description = existing.description;
    return option;
  });
}

function hasExactOptionOrder(existingOptions, desiredNames) {
  const existingNames = (existingOptions || [])
    .map((option) => normalizeText(option?.name))
    .filter(Boolean);

  if (existingNames.length !== desiredNames.length) return false;
  for (let i = 0; i < desiredNames.length; i += 1) {
    if (normalizeKeyPart(existingNames[i]) !== normalizeKeyPart(desiredNames[i])) return false;
  }
  return true;
}

function valueChanged(a, b) {
  return normalizeKeyPart(a) !== normalizeKeyPart(b);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!process.env.NOTION_API_KEY) {
    throw new Error("Missing NOTION_API_KEY in tools/notion/.env");
  }

  const repoRoot = path.resolve(__dirname, "..", "..");
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const { dataSourceId, databaseId, dataSource } = await resolveDataSourceIds(notion);
  if (!databaseId) {
    throw new Error("Could not resolve parent database_id for page creation.");
  }

  const runStamp = nowStamp();
  ensureDir(args.outDir);

  const canonicalData = buildCanonicalDataFromDocsJson(repoRoot);
  const sidebarTitleFactory = buildSidebarTitleFactory(repoRoot);
  const canonicalRows = canonicalData.rows.map((row) => ({
    ...row,
    sidebarTitle: sidebarTitleFactory.getSidebarTitle(row.relativePathUrl)
  }));
  const canonicalKeySet = new Set(
    canonicalRows.map((row) =>
      placementKey(row.relativePathUrl, row.tabGroup, row.sectionGroup, row.subSection)
    )
  );

  const routeInfoFactory = buildRouteInfoFactory(repoRoot);
  const getRouteInfo = routeInfoFactory.getRouteInfo;

  const linkMissingRefsMap = loadLinkMissingRefsMap(repoRoot);
  const wcagBlockingMap = loadWcagBlockingMap(repoRoot);
  const domainStatusMap = loadDomainStatusMap(repoRoot);

  const reviewerCheckboxNames = getReviewerCheckboxNames(dataSource);

  let sectionPropRef = findDataSourceProperty(dataSource, "Section Group");
  let subSectionPropRef = findDataSourceProperty(dataSource, "Sub Section");
  let pageStatusPropRef = findDataSourceProperty(dataSource, PAGE_STATUS_PROP_NAME);
  let sidebarTitlePropRef = findDataSourceProperty(dataSource, SIDEBAR_TITLE_PROP_NAME);
  let navigationOrderPropRef = findDataSourceProperty(dataSource, NAV_ORDER_PROP_NAME);
  const notesPropRef = findDataSourceProperty(dataSource, "Notes");

  if (!sectionPropRef || sectionPropRef.prop?.type !== "select") {
    throw new Error("Could not resolve `Section Group` select property in Notion data source.");
  }
  if (!subSectionPropRef || subSectionPropRef.prop?.type !== "select") {
    throw new Error("Could not resolve `Sub Section` select property in Notion data source.");
  }

  const desiredSectionGroups = canonicalData.orderedSectionGroups;
  const desiredSubSections = canonicalData.orderedSubSections;
  const desiredPageStatusOptions = dedupeOrdered([
    ...(pageStatusPropRef?.prop?.multi_select?.options || []).map((option) => option?.name || ""),
    NOT_IN_NAV_STATUS
  ]);

  const sectionSchemaNeedsUpdate = !hasExactOptionOrder(
    sectionPropRef.prop?.select?.options || [],
    desiredSectionGroups
  );
  const subSchemaNeedsUpdate = !hasExactOptionOrder(
    subSectionPropRef.prop?.select?.options || [],
    desiredSubSections
  );
  const missingSidebarTitleProp = !sidebarTitlePropRef;
  const missingNavigationOrderProp = !navigationOrderPropRef;
  const missingPageStatusProp = !pageStatusPropRef;
  const pageStatusOptionNeedsUpdate = Boolean(
    pageStatusPropRef &&
      pageStatusPropRef.prop?.type === "multi_select" &&
      !hasExactOptionOrder(pageStatusPropRef.prop?.multi_select?.options || [], desiredPageStatusOptions)
  );

  const rawExistingRows = await fetchAllRows(notion, dataSourceId);
  const existingRows = parseExistingRows(rawExistingRows, reviewerCheckboxNames).filter(
    (row) => !row.inTrash
  );
  const leaveMeProtectedCount = existingRows.filter((row) => row.leaveMe).length;

  const existingByKey = new Map();
  const existingByRoute = new Map();

  existingRows.forEach((row) => {
    if (!existingByKey.has(row.key)) existingByKey.set(row.key, []);
    existingByKey.get(row.key).push(row);

    const routeKey = normalizeRoute(row.relativePathUrl);
    if (routeKey) {
      if (!existingByRoute.has(routeKey)) existingByRoute.set(routeKey, []);
      existingByRoute.get(routeKey).push(row);
    }
  });

  const matchedIds = new Set();
  const canonicalActions = [];
  const legacyActions = [];
  const staleActions = [];
  const schemaActions = [];
  const contentActions = [];
  const errors = [];

  function nextUnmatched(candidates) {
    const list = Array.isArray(candidates) ? candidates : [];
    return list.find((candidate) => !matchedIds.has(candidate.id)) || null;
  }

  canonicalRows.forEach((row) => {
    const key = placementKey(
      row.relativePathUrl,
      row.tabGroup,
      row.sectionGroup,
      row.subSection
    );

    let matchStrategy = "key";
    let existing = nextUnmatched(existingByKey.get(key));

    if (!existing) {
      matchStrategy = "route";
      existing = nextUnmatched(existingByRoute.get(row.relativePathUrl));
    }

    if (existing) matchedIds.add(existing.id);

    const routeInfo = getRouteInfo(row.relativePathUrl);
    const needsUpdate = rowNeedsCanonicalUpdate(existing, row);

    if (!existing) {
      canonicalActions.push({
        action: "create",
        matchStrategy: "none",
        pageId: "",
        leaveMe: false,
        pageName: row.pageName,
        tabGroup: row.tabGroup,
        sectionGroup: row.sectionGroup,
        subSection: row.subSection,
        sidebarTitle: row.sidebarTitle,
        navigationOrder: row.navigationOrder,
        relativePathUrl: row.relativePathUrl,
        url: row.url,
        autoStatus: routeInfo.autoStatus,
        humanUsefulnessScore: routeInfo.humanUsefulnessScore,
        humanBand: routeInfo.humanBand,
        flags: routeInfo.flags.join("|"),
        changed: true
      });
      return;
    }

    if (existing.leaveMe) {
      canonicalActions.push({
        action: "leave-me-noop",
        matchStrategy,
        pageId: existing.id,
        leaveMe: true,
        pageName: existing.pageName,
        tabGroup: existing.tabGroup,
        sectionGroup: existing.sectionGroup,
        subSection: existing.subSection,
        sidebarTitle: existing.sidebarTitle,
        navigationOrder: existing.navigationOrder,
        relativePathUrl: existing.relativePathUrl,
        url: existing.url,
        autoStatus: routeInfo.autoStatus,
        humanUsefulnessScore: routeInfo.humanUsefulnessScore,
        humanBand: routeInfo.humanBand,
        flags: routeInfo.flags.join("|"),
        changed: false
      });
      return;
    }

    canonicalActions.push({
      action: needsUpdate ? "update" : "noop",
      matchStrategy,
      pageId: existing.id,
      leaveMe: false,
      pageName: row.pageName,
      tabGroup: row.tabGroup,
      sectionGroup: row.sectionGroup,
      subSection: row.subSection,
      sidebarTitle: row.sidebarTitle,
      navigationOrder: row.navigationOrder,
      relativePathUrl: row.relativePathUrl,
      url: row.url,
      autoStatus: routeInfo.autoStatus,
      humanUsefulnessScore: routeInfo.humanUsefulnessScore,
      humanBand: routeInfo.humanBand,
      flags: routeInfo.flags.join("|"),
      changed: needsUpdate
    });
  });

  existingRows.forEach((row) => {
    if (matchedIds.has(row.id)) return;
    if (row.leaveMe) return;
    if (!row.relativePathUrl) return;

    const route = normalizeRoute(row.relativePathUrl);
    if (canonicalData.routePlacement.has(route)) return;

    const hasLegacyPlacement = Boolean(normalizeText(row.sectionGroup) || normalizeText(row.subSection));
    if (!hasLegacyPlacement) return;

    const updatedNotes = notesPropRef
      ? appendMappingMarker(row.notes, route || "(unknown)")
      : row.notes;

    const notesChanged = notesPropRef ? normalizeText(updatedNotes) !== normalizeText(row.notes) : false;

    legacyActions.push({
      action: "clear-legacy-placement",
      pageId: row.id,
      pageName: row.pageName,
      relativePathUrl: row.relativePathUrl,
      oldSectionGroup: row.sectionGroup,
      oldSubSection: row.subSection,
      notesBefore: row.notes,
      notesAfter: updatedNotes,
      notesAdded: notesChanged,
      changed: true
    });
  });

  const staleCandidates = existingRows.filter((row) => {
    if (!row.relativePathUrl) return false;
    if (matchedIds.has(row.id)) return false;
    if (row.leaveMe) return false;
    return !canonicalKeySet.has(row.key);
  });

  staleCandidates.forEach((row, index) => {
    const navigationOrderAfter = STALE_NAV_ORDER_BASE + index + 1;
    const tabChanged = normalizeText(row.tabGroup) !== normalizeText(args.staleTabName);
    const statusChanged = !hasExactSingleStatus(row.pageStatusList, NOT_IN_NAV_STATUS);
    const navOrderChanged = Number(row.navigationOrder || 0) !== navigationOrderAfter;
    const changed = tabChanged || statusChanged || navOrderChanged;
    staleActions.push({
      action: changed ? "stale-update" : "stale-noop",
      pageId: row.id,
      pageName: row.pageName,
      oldTabGroup: row.tabGroup,
      newTabGroup: args.staleTabName,
      pageStatusBefore: (row.pageStatusList || []).join("|"),
      pageStatusAfter: NOT_IN_NAV_STATUS,
      navigationOrderBefore: row.navigationOrder,
      navigationOrderAfter,
      sectionGroup: row.sectionGroup,
      subSection: row.subSection,
      relativePathUrl: row.relativePathUrl,
      changed
    });
  });

  if (sectionSchemaNeedsUpdate) {
    schemaActions.push({
      action: "reorder-section-group-options",
      property: "Section Group",
      changed: true,
      fromCount: (sectionPropRef.prop?.select?.options || []).length,
      toCount: desiredSectionGroups.length
    });
  } else {
    schemaActions.push({
      action: "section-group-options-noop",
      property: "Section Group",
      changed: false,
      fromCount: (sectionPropRef.prop?.select?.options || []).length,
      toCount: desiredSectionGroups.length
    });
  }

  if (subSchemaNeedsUpdate) {
    schemaActions.push({
      action: "reorder-sub-section-options",
      property: "Sub Section",
      changed: true,
      fromCount: (subSectionPropRef.prop?.select?.options || []).length,
      toCount: desiredSubSections.length
    });
  } else {
    schemaActions.push({
      action: "sub-section-options-noop",
      property: "Sub Section",
      changed: false,
      fromCount: (subSectionPropRef.prop?.select?.options || []).length,
      toCount: desiredSubSections.length
    });
  }

  schemaActions.push({
    action: missingSidebarTitleProp ? "create-sidebar-title-property" : "sidebar-title-property-noop",
    property: SIDEBAR_TITLE_PROP_NAME,
    changed: missingSidebarTitleProp
  });

  schemaActions.push({
    action: missingNavigationOrderProp
      ? "create-navigation-order-property"
      : "navigation-order-property-noop",
    property: NAV_ORDER_PROP_NAME,
    changed: missingNavigationOrderProp
  });

  schemaActions.push({
    action: missingPageStatusProp ? "create-page-status-property" : "page-status-property-noop",
    property: PAGE_STATUS_PROP_NAME,
    changed: missingPageStatusProp
  });

  if (!missingPageStatusProp) {
    schemaActions.push({
      action: pageStatusOptionNeedsUpdate
        ? "ensure-page-status-not-in-navigation-option"
        : "page-status-options-noop",
      property: PAGE_STATUS_PROP_NAME,
      changed: pageStatusOptionNeedsUpdate,
      fromCount: (pageStatusPropRef.prop?.multi_select?.options || []).length,
      toCount: desiredPageStatusOptions.length
    });
  }

  if (args.write) {
    if (
      missingSidebarTitleProp ||
      missingNavigationOrderProp ||
      missingPageStatusProp ||
      pageStatusOptionNeedsUpdate
    ) {
      try {
        const properties = {};

        if (missingSidebarTitleProp) {
          properties[SIDEBAR_TITLE_PROP_NAME] = {
            rich_text: {}
          };
        }

        if (missingNavigationOrderProp) {
          properties[NAV_ORDER_PROP_NAME] = {
            number: {
              format: "number"
            }
          };
        }

        if (missingPageStatusProp) {
          properties[PAGE_STATUS_PROP_NAME] = {
            multi_select: {
              options: desiredPageStatusOptions.map((name) => ({ name }))
            }
          };
        } else if (pageStatusOptionNeedsUpdate) {
          properties[pageStatusPropRef.prop.id] = {
            name: pageStatusPropRef.prop.name,
            type: "multi_select",
            multi_select: {
              options: buildSelectOptions(
                desiredPageStatusOptions,
                pageStatusPropRef.prop?.multi_select?.options || []
              )
            }
          };
        }

        if (Object.keys(properties).length > 0) {
          await withRetry(
            () =>
              notion.dataSources.update({
                data_source_id: dataSourceId,
                properties
              }),
            "data-source-ensure-properties"
          );

          const refreshedDataSource = await withRetry(
            () => notion.dataSources.retrieve({ data_source_id: dataSourceId }),
            `retrieve-data-source ${dataSourceId}`
          );
          pageStatusPropRef = findDataSourceProperty(refreshedDataSource, PAGE_STATUS_PROP_NAME);
          sidebarTitlePropRef = findDataSourceProperty(refreshedDataSource, SIDEBAR_TITLE_PROP_NAME);
          navigationOrderPropRef = findDataSourceProperty(refreshedDataSource, NAV_ORDER_PROP_NAME);
          sectionPropRef = findDataSourceProperty(refreshedDataSource, "Section Group");
          subSectionPropRef = findDataSourceProperty(refreshedDataSource, "Sub Section");
        }
      } catch (error) {
        errors.push({
          scope: "schema",
          action: "ensure-properties",
          error: error.message
        });
      }
    }

    for (const action of canonicalActions) {
      if (!action.changed) continue;
      try {
        if (action.action === "create") {
          const row = canonicalRows.find(
            (candidate) =>
              candidate.relativePathUrl === action.relativePathUrl &&
              candidate.tabGroup === action.tabGroup &&
              candidate.sectionGroup === action.sectionGroup &&
              candidate.subSection === action.subSection
          );
          const properties = canonicalProperties(row);
          const created = await withRetry(
            () =>
              notion.pages.create({
                parent: { database_id: databaseId },
                properties
              }),
            `create ${action.relativePathUrl}`
          );
          action.pageId = created.id;
        } else if (action.action === "update") {
          const row = canonicalRows.find(
            (candidate) =>
              candidate.relativePathUrl === action.relativePathUrl &&
              candidate.tabGroup === action.tabGroup &&
              candidate.sectionGroup === action.sectionGroup &&
              candidate.subSection === action.subSection
          );
          const properties = canonicalProperties(row);
          await withRetry(
            () =>
              notion.pages.update({
                page_id: action.pageId,
                properties
              }),
            `update ${action.pageId}`
          );
        }
      } catch (error) {
        errors.push({
          scope: "canonical",
          pageId: action.pageId,
          relativePathUrl: action.relativePathUrl,
          action: action.action,
          error: error.message
        });
      }
      await sleep(120);
    }

    for (const action of legacyActions) {
      if (!action.changed) continue;
      try {
        const properties = {
          "Section Group": toSelectProp(""),
          "Sub Section": toSelectProp("")
        };
        if (notesPropRef) {
          properties.Notes = toRichTextProp(action.notesAfter);
        }

        await withRetry(
          () =>
            notion.pages.update({
              page_id: action.pageId,
              properties
            }),
          `legacy-clear ${action.pageId}`
        );
      } catch (error) {
        errors.push({
          scope: "legacy",
          pageId: action.pageId,
          relativePathUrl: action.relativePathUrl,
          action: action.action,
          error: error.message
        });
      }
      await sleep(120);
    }

    for (const action of staleActions) {
      if (!action.changed) continue;
      try {
        await withRetry(
          () =>
            notion.pages.update({
              page_id: action.pageId,
              properties: {
                "Tab Group": toSelectProp(args.staleTabName),
                [PAGE_STATUS_PROP_NAME]: toMultiSelectProp([NOT_IN_NAV_STATUS]),
                [NAV_ORDER_PROP_NAME]: toNumberProp(action.navigationOrderAfter)
              }
            }),
          `stale-update ${action.pageId}`
        );
      } catch (error) {
        errors.push({
          scope: "stale",
          pageId: action.pageId,
          relativePathUrl: action.relativePathUrl,
          action: action.action,
          error: error.message
        });
      }
      await sleep(120);
    }

    if (sectionSchemaNeedsUpdate || subSchemaNeedsUpdate) {
      try {
        const properties = {};

        if (sectionSchemaNeedsUpdate) {
          properties[sectionPropRef.prop.id] = {
            name: sectionPropRef.prop.name,
            type: "select",
            select: {
              options: buildSelectOptions(desiredSectionGroups, sectionPropRef.prop?.select?.options || [])
            }
          };
        }

        if (subSchemaNeedsUpdate) {
          properties[subSectionPropRef.prop.id] = {
            name: subSectionPropRef.prop.name,
            type: "select",
            select: {
              options: buildSelectOptions(desiredSubSections, subSectionPropRef.prop?.select?.options || [])
            }
          };
        }

        await withRetry(
          () =>
            notion.dataSources.update({
              data_source_id: dataSourceId,
              properties
            }),
          "data-source-schema-update"
        );
      } catch (error) {
        errors.push({
          scope: "schema",
          action: "update-options",
          error: error.message
        });
      }
    }

    if (args.skipContentSync) {
      console.log("[content] skipped due to --skip-content-sync");
    } else {
      const refreshedRowsRaw = await fetchAllRows(notion, dataSourceId);
      const refreshedRows = parseExistingRows(refreshedRowsRaw, reviewerCheckboxNames)
        .filter((row) => !row.inTrash)
        .filter((row) => normalizeRoute(row.relativePathUrl).startsWith("v2/"));

      const syncedAt = nowIso();
      const sourceRunIds = [
        `sync:${runStamp}`,
        `link:${linkMissingRefsMap.size > 0 ? "loaded" : "missing"}`,
        `wcag:${wcagBlockingMap.size > 0 ? "loaded" : "missing"}`,
        `domain:${domainStatusMap.size > 0 ? "loaded" : "missing"}`
      ].join(" | ");

      const totalContentRows = refreshedRows.length;
      let contentProcessed = 0;
      let contentUpdated = 0;
      let contentSkipped = 0;
      let contentFailed = 0;
      console.log(
        `[content] starting body sync for ${totalContentRows} rows (skipUnchangedBody=${args.skipUnchangedBody}, concurrency=${args.contentConcurrency})`
      );

      async function processContentRow(row) {
        try {
          if (row.leaveMe) {
            contentSkipped += 1;
            contentActions.push({
              action: "skip-page-content-leave-me",
              pageId: row.id,
              relativePathUrl: row.relativePathUrl,
              reviewerCount: reviewerCheckboxNames.length,
              deletedBlocks: 0,
              appendedBlocks: 0,
              changed: false
            });
          } else {
            const route = normalizeRoute(row.relativePathUrl);
            const routeInfo = getRouteInfo(route);
            const translation = buildTranslationCoverage(
              route,
              canonicalData.localeTargets,
              canonicalData.localeRouteSets,
              repoRoot
            );

            const blocks = buildPageInfoBlocks({
              row,
              routeInfo,
              translation,
              linkMissingRefs: linkMissingRefsMap.has(route) ? linkMissingRefsMap.get(route) : null,
              wcagBlocking: wcagBlockingMap.has(route) ? wcagBlockingMap.get(route) : null,
              domainStatus: domainStatusMap.get(route) || null,
              reviewerNames: reviewerCheckboxNames,
              syncedAt,
              sourceRunIds
            });

            const result = await upsertGeneratedSections(notion, row.id, blocks, {
              skipIfUnchanged: args.skipUnchangedBody,
              deleteSleepMs: args.deleteSleepMs,
              appendSleepMs: args.appendSleepMs
            });

            if (result.skipped) {
              contentSkipped += 1;
              contentActions.push({
                action: "skip-page-content-noop",
                pageId: row.id,
                relativePathUrl: row.relativePathUrl,
                reviewerCount: reviewerCheckboxNames.length,
                deletedBlocks: 0,
                appendedBlocks: 0,
                changed: false
              });
            } else {
              contentUpdated += 1;
              contentActions.push({
                action: "upsert-page-content",
                pageId: row.id,
                relativePathUrl: row.relativePathUrl,
                reviewerCount: reviewerCheckboxNames.length,
                deletedBlocks: result.deletedBlocks,
                appendedBlocks: result.appendedBlocks,
                changed: true
              });
            }
          }
        } catch (error) {
          contentFailed += 1;
          errors.push({
            scope: "content",
            pageId: row.id,
            relativePathUrl: row.relativePathUrl,
            action: "upsert-page-content",
            error: error.message
          });
        }

        contentProcessed += 1;
        if (contentProcessed % args.logEvery === 0 || contentProcessed === totalContentRows) {
          console.log(
            `[content] ${contentProcessed}/${totalContentRows} processed | updated:${contentUpdated} skipped:${contentSkipped} errors:${contentFailed}`
          );
        }

        if (args.rowSleepMs > 0) await sleep(args.rowSleepMs);
      }

      if (args.contentConcurrency > 1) {
        await mapWithConcurrency(refreshedRows, args.contentConcurrency, processContentRow);
      } else {
        for (const row of refreshedRows) {
          await processContentRow(row);
        }
      }
    }
  } else {
    existingRows
      .filter((row) => normalizeRoute(row.relativePathUrl).startsWith("v2/"))
      .forEach((row) => {
        if (row.leaveMe) {
          contentActions.push({
            action: "plan-skip-page-content-leave-me",
            pageId: row.id,
            relativePathUrl: row.relativePathUrl,
            reviewerCount: reviewerCheckboxNames.length,
            deletedBlocks: 0,
            appendedBlocks: 0,
            changed: false
          });
          return;
        }
        contentActions.push({
          action: "plan-upsert-page-content",
          pageId: row.id,
          relativePathUrl: row.relativePathUrl,
          reviewerCount: reviewerCheckboxNames.length,
          deletedBlocks: 0,
          appendedBlocks: 0,
          changed: true
        });
      });
  }

  const canonicalCsvPath = path.join(args.outDir, `sync-v2-en-canonical-${runStamp}.csv`);
  const legacyCsvPath = path.join(args.outDir, `sync-v2-en-legacy-${runStamp}.csv`);
  const staleCsvPath = path.join(args.outDir, `sync-v2-en-stale-${runStamp}.csv`);
  const schemaCsvPath = path.join(args.outDir, `sync-v2-en-schema-${runStamp}.csv`);
  const contentCsvPath = path.join(args.outDir, `sync-v2-en-content-${runStamp}.csv`);
  const summaryPath = path.join(args.outDir, `sync-v2-en-summary-${runStamp}.json`);

  writeCsv(canonicalCsvPath, canonicalActions, [
    "action",
    "matchStrategy",
    "pageId",
    "leaveMe",
    "pageName",
    "sidebarTitle",
    "navigationOrder",
    "tabGroup",
    "sectionGroup",
    "subSection",
    "relativePathUrl",
    "url",
    "autoStatus",
    "humanUsefulnessScore",
    "humanBand",
    "flags",
    "changed"
  ]);

  writeCsv(legacyCsvPath, legacyActions, [
    "action",
    "pageId",
    "pageName",
    "relativePathUrl",
    "oldSectionGroup",
    "oldSubSection",
    "notesAdded",
    "changed"
  ]);

  writeCsv(staleCsvPath, staleActions, [
    "action",
    "pageId",
    "pageName",
    "oldTabGroup",
    "newTabGroup",
    "pageStatusBefore",
    "pageStatusAfter",
    "navigationOrderBefore",
    "navigationOrderAfter",
    "sectionGroup",
    "subSection",
    "relativePathUrl",
    "changed"
  ]);

  writeCsv(schemaCsvPath, schemaActions, [
    "action",
    "property",
    "fromCount",
    "toCount",
    "changed"
  ]);

  writeCsv(contentCsvPath, contentActions, [
    "action",
    "pageId",
    "relativePathUrl",
    "reviewerCount",
    "deletedBlocks",
    "appendedBlocks",
    "changed"
  ]);

  const summary = {
    runStamp,
    mode: args.write ? "write" : "dry-run",
    staleTabName: args.staleTabName,
    leaveMeProtectedRows: leaveMeProtectedCount,
    reviewers: reviewerCheckboxNames,
    note:
      "Notion API does not support manual row ordering. Sort by `Navigation Order` ascending in the Notion view.",
    notionIds: {
      dataSourceId,
      databaseId
    },
    canonical: {
      rows: canonicalRows.length,
      duplicatePlacementsIgnored: canonicalData.duplicatePlacements.length,
      routePlacementConflicts: canonicalData.routePlacementConflicts.length,
      actions: countBy(canonicalActions, "action"),
      changedRows: canonicalActions.filter((action) => action.changed).length
    },
    legacyMigration: {
      candidates: legacyActions.length,
      actions: countBy(legacyActions, "action"),
      changedRows: legacyActions.filter((action) => action.changed).length,
      notesPropertyPresent: Boolean(notesPropRef)
    },
    stale: {
      candidates: staleActions.length,
      actions: countBy(staleActions, "action"),
      changedRows: staleActions.filter((action) => action.changed).length,
      notInNavigationMarked: staleActions.filter(
        (action) => normalizeKeyPart(action.pageStatusAfter) === normalizeKeyPart(NOT_IN_NAV_STATUS)
      ).length
    },
    schema: {
      sectionGroupChanged: sectionSchemaNeedsUpdate,
      subSectionChanged: subSchemaNeedsUpdate,
      desiredSectionGroupCount: desiredSectionGroups.length,
      desiredSubSectionCount: desiredSubSections.length,
      actions: countBy(schemaActions, "action")
    },
    content: {
      rowsPlanned: contentActions.length,
      actions: countBy(contentActions, "action"),
      changedRows: contentActions.filter((action) => action.changed).length,
      reviewerCheckboxCount: reviewerCheckboxNames.length
    },
    scoring: {
      routesScored: routeInfoFactory.cache.size,
      scoreBands: countBy(
        canonicalActions.map((action) => {
          const score = Number(action.humanUsefulnessScore || 0);
          if (score <= 24) return { band: "0-24" };
          if (score <= 49) return { band: "25-49" };
          if (score <= 69) return { band: "50-69" };
          if (score <= 84) return { band: "70-84" };
          return { band: "85-100" };
        }),
        "band"
      )
    },
    reportsLoaded: {
      linkMissingRefsRoutes: linkMissingRefsMap.size,
      wcagRoutes: wcagBlockingMap.size,
      domainRoutes: domainStatusMap.size
    },
    locales: {
      targetLocales: canonicalData.localeTargets,
      count: canonicalData.localeTargets.length
    },
    ordering: {
      property: NAV_ORDER_PROP_NAME,
      recommendation: "Sort Notion view by Navigation Order ascending."
    },
    outputs: {
      canonicalCsvPath,
      legacyCsvPath,
      staleCsvPath,
      schemaCsvPath,
    contentCsvPath,
    summaryPath
  },
    errors
  };

  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));

  console.log(`Run complete (${summary.mode})`);
  console.log(`  canonical rows: ${summary.canonical.rows}`);
  console.log(`  canonical actions: ${JSON.stringify(summary.canonical.actions)}`);
  console.log(`  legacy migration candidates: ${summary.legacyMigration.candidates}`);
  console.log(`  stale candidates: ${summary.stale.candidates}`);
  console.log(`  leave me protected rows: ${summary.leaveMeProtectedRows}`);
  console.log(`  schema actions: ${JSON.stringify(summary.schema.actions)}`);
  console.log(`  content rows planned: ${summary.content.rowsPlanned}`);
  console.log(`  reviewers detected (checkbox props): ${summary.reviewers.length}`);
  console.log(`  errors: ${errors.length}`);
  console.log(`  ordering hint: sort Notion by \`${NAV_ORDER_PROP_NAME}\` ascending`);
  console.log(`  summary: ${summaryPath}`);
}

main().catch((error) => {
  console.error("sync-v2-en-canonical failed:", error.message);
  process.exit(1);
});
