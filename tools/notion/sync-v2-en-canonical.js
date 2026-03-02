#!/usr/bin/env node
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

const STATUS_ORDER = {
  "Not Started": 1,
  "Needs Work": 2,
  "In Progress": 3,
  "Review Needed": 4,
  Complete: 5
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseArgs(argv) {
  const args = {
    write: false,
    staleTabName: "Stale",
    outDir: path.join(__dirname, "reports")
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

function buildCanonicalRowsFromDocsJson(repoRoot) {
  const docsJsonPath = path.join(repoRoot, "docs.json");
  const docsJson = JSON.parse(fs.readFileSync(docsJsonPath, "utf8"));
  const v2 = (docsJson?.navigation?.versions || []).find(
    (versionNode) => versionNode?.version === "v2"
  );
  if (!v2) throw new Error("Could not find v2 in docs.json navigation.");
  const en = (v2.languages || []).find((langNode) => langNode?.language === "en");
  if (!en) throw new Error("Could not find language=en under v2 in docs.json.");

  const seenKeys = new Set();
  const rows = [];
  const duplicatePlacements = [];

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
      url: `https://docs.livepeer.org/${route}`
    };
    const key = placementKey(
      row.relativePathUrl,
      row.tabGroup,
      row.sectionGroup,
      row.subSection
    );
    if (seenKeys.has(key)) {
      duplicatePlacements.push({
        route: row.relativePathUrl,
        tabGroup: row.tabGroup,
        sectionGroup: row.sectionGroup,
        subSection: row.subSection
      });
      return;
    }
    seenKeys.add(key);
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

    if (!node || typeof node !== "object") {
      return;
    }

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
      } else if (!nextContext.subSection) {
        nextContext.subSection = groupName;
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
    duplicatePlacements
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

function parseExistingRows(rows) {
  return rows.map((row) => {
    const p = row.properties || {};
    const relativePathUrl = normalizeRoute(getUrl(p["Relative path URL"]));
    return {
      id: row.id,
      object: row,
      inTrash: Boolean(row.in_trash),
      pageName: getTitle(p["Page Name"]),
      tabGroup: getSelect(p["Tab Group"]),
      sectionGroup: getSelect(p["Section Group"]),
      subSection: getSelect(p["Sub Section"]),
      pageStatusList: getMultiSelect(p["Page Status"]),
      relativePathUrl,
      url: getUrl(p["URL"]),
      key: placementKey(
        relativePathUrl,
        getSelect(p["Tab Group"]),
        getSelect(p["Section Group"]),
        getSelect(p["Sub Section"])
      )
    };
  });
}

function mapLegacyManualStatusToCanonical(statusName) {
  const value = String(statusName || "").trim().toLowerCase();
  if (!value) return "";
  if (value === "not started") return "Not Started";
  if (value === "needs work") return "Needs Work";
  if (value === "in progress") return "In Progress";
  if (value === "review needed") return "Review Needed";
  if (value === "complete") return "Complete";
  if (value === "reviewed ✅" || value === "reviewed") return "Complete";

  const needsWorkAliases = new Set([
    "minor tweaks needed",
    "reformat needed",
    "path change needed",
    "rename needed",
    "feature upgradeable",
    "merge / move",
    "re-style"
  ]);
  if (needsWorkAliases.has(value)) return "Needs Work";
  return "";
}

function strictestManualStatus(statusList) {
  const canonical = (statusList || [])
    .map((status) => mapLegacyManualStatusToCanonical(status))
    .filter(Boolean);
  if (canonical.length === 0) return "";
  canonical.sort((a, b) => STATUS_ORDER[a] - STATUS_ORDER[b]);
  return canonical[0];
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

function combineStatus(existingStatusList, autoStatus) {
  const manual = strictestManualStatus(existingStatusList);
  if (!manual) return autoStatus;
  if (!autoStatus) return manual;
  if (STATUS_ORDER[manual] < STATUS_ORDER[autoStatus]) return manual;
  return autoStatus;
}

function toSelectProp(value) {
  const v = normalizeText(value);
  if (!v) return { select: null };
  return { select: { name: v } };
}

function toStatusProp(statusName) {
  const value = normalizeText(statusName);
  if (!value) return { multi_select: [] };
  return { multi_select: [{ name: value }] };
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

function canonicalProperties(row, finalStatus) {
  return {
    "Page Name": toTitleProp(row.pageName),
    "Tab Group": toSelectProp(row.tabGroup),
    "Section Group": toSelectProp(row.sectionGroup),
    "Sub Section": toSelectProp(row.subSection),
    "Relative path URL": { url: row.relativePathUrl || null },
    URL: { url: row.url || null },
    "Page Status": toStatusProp(finalStatus)
  };
}

function normalizeStatusList(list) {
  const items = (list || []).map((x) => normalizeText(x)).filter(Boolean);
  return [...new Set(items)].sort();
}

function rowNeedsCanonicalUpdate(existingRow, targetRow, finalStatus) {
  if (!existingRow) return true;

  const pageNameDifferent = normalizeText(existingRow.pageName) !== normalizeText(targetRow.pageName);
  const tabDifferent = normalizeKeyPart(existingRow.tabGroup) !== normalizeKeyPart(targetRow.tabGroup);
  const sectionDifferent =
    normalizeKeyPart(existingRow.sectionGroup) !== normalizeKeyPart(targetRow.sectionGroup);
  const subDifferent = normalizeKeyPart(existingRow.subSection) !== normalizeKeyPart(targetRow.subSection);
  const pathDifferent =
    normalizeRoute(existingRow.relativePathUrl) !== normalizeRoute(targetRow.relativePathUrl);
  const urlDifferent = normalizeText(existingRow.url) !== normalizeText(targetRow.url);
  const statusDifferent =
    normalizeStatusList(existingRow.pageStatusList).join("|") !==
    normalizeStatusList([finalStatus]).join("|");

  return (
    pageNameDifferent ||
    tabDifferent ||
    sectionDifferent ||
    subDifferent ||
    pathDifferent ||
    urlDifferent ||
    statusDifferent
  );
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

function scoreCanonicalRoutes(repoRoot, canonicalRows) {
  const uniqueRoutes = [...new Set(canonicalRows.map((row) => row.relativePathUrl))];
  const scores = new Map();

  uniqueRoutes.forEach((route) => {
    const fileRel = resolveDocPath(route, repoRoot);
    if (!fileRel) {
      scores.set(route, {
        route,
        fileRel: "",
        humanUsefulnessScore: 0,
        flags: ["missing_file", "incomplete"],
        autoStatus: "Not Started"
      });
      return;
    }

    const absPath = path.join(repoRoot, fileRel);
    const raw = fs.readFileSync(absPath, "utf8");
    const analysis = analyzeMdxPage({
      content: raw,
      filePath: toPosix(fileRel),
      routePath: `/${route}`
    });
    const matrix = buildUsefulnessMatrixFields({ analysis });
    const humanUsefulnessScore = Number(matrix.human_usefulness_score || 0);
    const flags = analysis.flags || [];
    const autoStatus = deriveAutoStatus({
      humanUsefulnessScore,
      flags
    });

    scores.set(route, {
      route,
      fileRel: toPosix(fileRel),
      humanUsefulnessScore,
      flags,
      autoStatus
    });
  });

  return scores;
}

async function withRetry(fn, label) {
  let attempt = 0;
  let delay = 500;
  while (attempt < 5) {
    try {
      return await fn();
    } catch (error) {
      const code = String(error?.code || "").toLowerCase();
      const message = String(error?.message || "").toLowerCase();
      const retriable =
        code.includes("rate_limited") ||
        code.includes("timeout") ||
        message.includes("rate") ||
        message.includes("timeout");
      if (!retriable || attempt === 4) {
        throw new Error(`${label}: ${error.message}`);
      }
      await sleep(delay);
      delay *= 2;
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
    const res = await notion.dataSources.query({
      data_source_id: dataSourceId,
      start_cursor: startCursor,
      page_size: 100
    });
    rows.push(...res.results);
    hasMore = Boolean(res.has_more);
    startCursor = res.next_cursor || undefined;
  }
  return rows;
}

async function resolveDataSourceId(notion) {
  const envDataSource = normalizeText(process.env.NOTION_DATABASE_ID);
  const envDatabase = normalizeText(process.env.NOTION_WRITABLE_DATABASE_ID);

  if (envDataSource) {
    const ds = await notion.dataSources.retrieve({ data_source_id: envDataSource });
    const resolvedDbId =
      envDatabase || normalizeText(ds?.parent?.database_id) || null;
    return { dataSourceId: envDataSource, databaseId: resolvedDbId };
  }

  if (envDatabase) {
    const db = await notion.databases.retrieve({ database_id: envDatabase });
    const dataSourceId = db?.data_sources?.[0]?.id || "";
    if (!dataSourceId) {
      throw new Error("Could not resolve data source from NOTION_WRITABLE_DATABASE_ID.");
    }
    return { dataSourceId, databaseId: envDatabase };
  }

  throw new Error("Missing NOTION_DATABASE_ID or NOTION_WRITABLE_DATABASE_ID.");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!process.env.NOTION_API_KEY) {
    throw new Error("Missing NOTION_API_KEY in tools/notion/.env");
  }

  const repoRoot = path.resolve(__dirname, "..", "..");
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const { dataSourceId, databaseId } = await resolveDataSourceId(notion);
  if (!databaseId) {
    throw new Error("Could not resolve parent database_id for page creation.");
  }
  const runStamp = nowStamp();

  ensureDir(args.outDir);

  const canonicalBuild = buildCanonicalRowsFromDocsJson(repoRoot);
  const canonicalRows = canonicalBuild.rows;
  const canonicalKeySet = new Set(
    canonicalRows.map((row) =>
      placementKey(row.relativePathUrl, row.tabGroup, row.sectionGroup, row.subSection)
    )
  );

  const routeScores = scoreCanonicalRoutes(repoRoot, canonicalRows);

  const rawExistingRows = await fetchAllRows(notion, dataSourceId);
  const existingRows = parseExistingRows(rawExistingRows).filter((row) => !row.inTrash);

  const existingByKey = new Map();
  existingRows.forEach((row) => {
    if (!existingByKey.has(row.key)) existingByKey.set(row.key, []);
    existingByKey.get(row.key).push(row);
  });

  const matchedIds = new Set();
  const canonicalActions = [];
  const staleActions = [];
  const errors = [];

  for (const row of canonicalRows) {
    const key = placementKey(
      row.relativePathUrl,
      row.tabGroup,
      row.sectionGroup,
      row.subSection
    );
    const matches = existingByKey.get(key) || [];
    const existing = matches.find((candidate) => !matchedIds.has(candidate.id)) || null;
    if (existing) matchedIds.add(existing.id);

    const score = routeScores.get(row.relativePathUrl) || {
      humanUsefulnessScore: 0,
      flags: ["missing_score"],
      autoStatus: "Not Started"
    };
    const finalStatus = combineStatus(existing?.pageStatusList || [], score.autoStatus);
    const needsUpdate = rowNeedsCanonicalUpdate(existing, row, finalStatus);

    if (!existing) {
      canonicalActions.push({
        action: "create",
        pageId: "",
        pageName: row.pageName,
        tabGroup: row.tabGroup,
        sectionGroup: row.sectionGroup,
        subSection: row.subSection,
        relativePathUrl: row.relativePathUrl,
        url: row.url,
        autoStatus: score.autoStatus,
        finalStatus,
        humanUsefulnessScore: score.humanUsefulnessScore,
        flags: (score.flags || []).join("|"),
        changed: true
      });
      continue;
    }

    canonicalActions.push({
      action: needsUpdate ? "update" : "noop",
      pageId: existing.id,
      pageName: row.pageName,
      tabGroup: row.tabGroup,
      sectionGroup: row.sectionGroup,
      subSection: row.subSection,
      relativePathUrl: row.relativePathUrl,
      url: row.url,
      autoStatus: score.autoStatus,
      finalStatus,
      humanUsefulnessScore: score.humanUsefulnessScore,
      flags: (score.flags || []).join("|"),
      changed: needsUpdate
    });
  }

  const staleCandidates = existingRows.filter((row) => {
    if (!row.relativePathUrl) return false;
    if (matchedIds.has(row.id)) return false;
    return !canonicalKeySet.has(row.key);
  });

  staleCandidates.forEach((row) => {
    const changed = normalizeText(row.tabGroup) !== normalizeText(args.staleTabName);
    staleActions.push({
      action: changed ? "stale-update" : "stale-noop",
      pageId: row.id,
      pageName: row.pageName,
      oldTabGroup: row.tabGroup,
      newTabGroup: args.staleTabName,
      sectionGroup: row.sectionGroup,
      subSection: row.subSection,
      relativePathUrl: row.relativePathUrl,
      changed
    });
  });

  if (args.write) {
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
          const properties = canonicalProperties(row, action.finalStatus);
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
          const properties = canonicalProperties(row, action.finalStatus);
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

    for (const action of staleActions) {
      if (!action.changed) continue;
      try {
        await withRetry(
          () =>
            notion.pages.update({
              page_id: action.pageId,
              properties: {
                "Tab Group": toSelectProp(args.staleTabName)
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
  }

  const canonicalCsvPath = path.join(args.outDir, `sync-v2-en-canonical-${runStamp}.csv`);
  const staleCsvPath = path.join(args.outDir, `sync-v2-en-stale-${runStamp}.csv`);
  const summaryPath = path.join(args.outDir, `sync-v2-en-summary-${runStamp}.json`);

  writeCsv(canonicalCsvPath, canonicalActions, [
    "action",
    "pageId",
    "pageName",
    "tabGroup",
    "sectionGroup",
    "subSection",
    "relativePathUrl",
    "url",
    "autoStatus",
    "finalStatus",
    "humanUsefulnessScore",
    "flags",
    "changed"
  ]);

  writeCsv(staleCsvPath, staleActions, [
    "action",
    "pageId",
    "pageName",
    "oldTabGroup",
    "newTabGroup",
    "sectionGroup",
    "subSection",
    "relativePathUrl",
    "changed"
  ]);

  const summary = {
    runStamp,
    mode: args.write ? "write" : "dry-run",
    staleTabName: args.staleTabName,
    notionIds: {
      dataSourceId,
      databaseId
    },
    canonical: {
      rows: canonicalRows.length,
      duplicatePlacementsIgnored: canonicalBuild.duplicatePlacements.length,
      actions: countBy(canonicalActions, "action"),
      changedRows: canonicalActions.filter((action) => action.changed).length
    },
    stale: {
      candidates: staleActions.length,
      actions: countBy(staleActions, "action"),
      changedRows: staleActions.filter((action) => action.changed).length
    },
    scoring: {
      routesScored: routeScores.size,
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
    outputs: {
      canonicalCsvPath,
      staleCsvPath
    },
    errors
  };

  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));

  console.log(`Run complete (${summary.mode})`);
  console.log(`  canonical rows: ${summary.canonical.rows}`);
  console.log(`  canonical actions: ${JSON.stringify(summary.canonical.actions)}`);
  console.log(`  stale candidates: ${summary.stale.candidates}`);
  console.log(`  stale actions: ${JSON.stringify(summary.stale.actions)}`);
  console.log(`  errors: ${errors.length}`);
  console.log(`  summary: ${summaryPath}`);
}

main().catch((error) => {
  console.error("sync-v2-en-canonical failed:", error.message);
  process.exit(1);
});
