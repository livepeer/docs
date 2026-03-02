#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

require("dotenv").config({ path: path.join(__dirname, ".env") });
const { Client } = require("@notionhq/client");

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

function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function csvEscape(value) {
  const text = value == null ? "" : String(value);
  if (/[",\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
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
  if (!Array.isArray(items) || items.length === 0) return "";
  return items.map((item) => item?.name || "").filter(Boolean).join("|");
}

function getRichText(property) {
  const items = property?.rich_text;
  if (!Array.isArray(items) || items.length === 0) return "";
  return items.map((item) => item?.plain_text || "").join("");
}

function getUrl(property) {
  return property?.url || "";
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

async function resolveDataSourceId(notion) {
  const envDataSource = String(process.env.NOTION_DATABASE_ID || "").trim();
  const envDatabase = String(process.env.NOTION_WRITABLE_DATABASE_ID || "").trim();

  if (envDataSource) {
    try {
      await notion.dataSources.retrieve({ data_source_id: envDataSource });
      return {
        dataSourceId: envDataSource,
        databaseId: envDatabase || null,
        source: "NOTION_DATABASE_ID"
      };
    } catch (_error) {
      // Fall through to database-based resolution.
    }
  }

  if (envDatabase) {
    const db = await notion.databases.retrieve({ database_id: envDatabase });
    const firstDataSource = db?.data_sources?.[0]?.id || null;
    if (!firstDataSource) {
      throw new Error("Could not resolve data source ID from NOTION_WRITABLE_DATABASE_ID.");
    }
    return {
      dataSourceId: firstDataSource,
      databaseId: envDatabase,
      source: "NOTION_WRITABLE_DATABASE_ID"
    };
  }

  throw new Error("Missing Notion IDs. Set NOTION_DATABASE_ID (data source) and/or NOTION_WRITABLE_DATABASE_ID.");
}

async function main() {
  if (!process.env.NOTION_API_KEY) {
    throw new Error("Missing NOTION_API_KEY in notion/.env");
  }

  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const ids = await resolveDataSourceId(notion);

  const stamp = nowStamp();
  const backupsRoot = path.join(__dirname, "backups");
  const backupDir = path.join(backupsRoot, stamp);
  ensureDir(backupDir);

  const rows = [];
  let startCursor = undefined;
  let hasMore = true;

  while (hasMore) {
    const res = await notion.dataSources.query({
      data_source_id: ids.dataSourceId,
      start_cursor: startCursor,
      page_size: 100
    });
    rows.push(...res.results);
    hasMore = Boolean(res.has_more);
    startCursor = res.next_cursor || undefined;
  }

  const dataSourceMeta = await notion.dataSources.retrieve({ data_source_id: ids.dataSourceId });

  let databaseMeta = null;
  if (ids.databaseId) {
    try {
      databaseMeta = await notion.databases.retrieve({ database_id: ids.databaseId });
    } catch (_error) {
      databaseMeta = null;
    }
  }

  const normalizedRows = rows.map((row) => {
    const p = row.properties || {};
    return {
      id: row.id,
      inTrash: Boolean(row.in_trash),
      pageName: getTitle(p["Page Name"]),
      tabGroup: getSelect(p["Tab Group"]),
      sectionGroup: getSelect(p["Section Group"]),
      subSection: getSelect(p["Sub Section"]),
      pageStatus: getMultiSelect(p["Page Status"]),
      notes: getRichText(p["Notes"]),
      relativePathUrl: getUrl(p["Relative path URL"]),
      url: getUrl(p["URL"])
    };
  });

  const csvHeader = [
    "ID",
    "In Trash",
    "Page Name",
    "Tab Group",
    "Section Group",
    "Sub Section",
    "Page Status",
    "Notes",
    "Relative path URL",
    "URL"
  ].join(",");
  const csvBody = normalizedRows
    .map((r) =>
      [
        r.id,
        r.inTrash ? "true" : "false",
        r.pageName,
        r.tabGroup,
        r.sectionGroup,
        r.subSection,
        r.pageStatus,
        r.notes,
        r.relativePathUrl,
        r.url
      ]
        .map(csvEscape)
        .join(",")
    )
    .join("\n");
  const csvContent = `${csvHeader}\n${csvBody}${csvBody ? "\n" : ""}`;

  const rawPath = path.join(backupDir, "rows-raw.json");
  const normalizedJsonPath = path.join(backupDir, "rows-normalized.json");
  const csvPath = path.join(backupDir, "rows-normalized.csv");
  const dataSourceMetaPath = path.join(backupDir, "data-source-metadata.json");
  const dbMetaPath = path.join(backupDir, "database-metadata.json");
  const manifestPath = path.join(backupDir, "backup-manifest.json");

  fs.writeFileSync(rawPath, JSON.stringify(rows, null, 2));
  fs.writeFileSync(normalizedJsonPath, JSON.stringify(normalizedRows, null, 2));
  fs.writeFileSync(csvPath, csvContent);
  fs.writeFileSync(dataSourceMetaPath, JSON.stringify(dataSourceMeta, null, 2));
  if (databaseMeta) {
    fs.writeFileSync(dbMetaPath, JSON.stringify(databaseMeta, null, 2));
  }

  const manifest = {
    backupTimestampUtc: new Date().toISOString(),
    backupFolder: backupDir,
    idResolutionSource: ids.source,
    notionIds: {
      dataSourceId: ids.dataSourceId,
      databaseId: ids.databaseId
    },
    rowCounts: {
      totalRows: rows.length,
      normalizedRows: normalizedRows.length
    },
    files: [
      { path: rawPath, sha256: sha256(fs.readFileSync(rawPath, "utf8")) },
      { path: normalizedJsonPath, sha256: sha256(fs.readFileSync(normalizedJsonPath, "utf8")) },
      { path: csvPath, sha256: sha256(fs.readFileSync(csvPath, "utf8")) },
      { path: dataSourceMetaPath, sha256: sha256(fs.readFileSync(dataSourceMetaPath, "utf8")) },
      databaseMeta
        ? { path: dbMetaPath, sha256: sha256(fs.readFileSync(dbMetaPath, "utf8")) }
        : null
    ].filter(Boolean),
    schemaSummary: {
      propertyNames: Object.keys(dataSourceMeta?.properties || {}),
      propertyCount: Object.keys(dataSourceMeta?.properties || {}).length
    }
  };

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log("Backup complete:");
  console.log(`  folder: ${backupDir}`);
  console.log(`  rows: ${rows.length}`);
  console.log(`  manifest: ${manifestPath}`);
}

main().catch((error) => {
  console.error("backup-notion-table failed:", error.message);
  process.exit(1);
});
