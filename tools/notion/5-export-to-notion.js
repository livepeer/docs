/**
 * @script            5-export-to-notion
 * @category          automation
 * @purpose           tooling:dev-tools
 * @scope             external
 * @owner             docs
 * @needs             node, @notionhq/client, dotenv, NOTION_API_KEY, NOTION_DATABASE_ID, NOTION_WRITABLE_DATABASE_ID(optional)
 * @purpose-statement Updates existing Notion page grouping fields from the exported docs navigation snapshot.
 * @pipeline          manual
 * @usage             node tools/notion/5-export-to-notion.js [flags]
 */

require("dotenv").config();
const { Client } = require("@notionhq/client");
const fs = require("fs");
const path = require("path");

async function exportToNotion() {
  console.log("Starting export to Notion...\n");

  // Check prerequisites
  const notionJsonPath = path.join(__dirname, "data", "notion-read.json");
  const docsJsonPath = path.join(__dirname, "data", "docs-read.json");
  const duplicatesReportPath = path.join(
    __dirname,
    "reports",
    "duplicates-report.json"
  );

  if (!fs.existsSync(notionJsonPath)) {
    console.error("ERROR: data/notion-read.json not found!");
    console.error("Please run: node 1-read-notion-to-csv.js first");
    process.exit(1);
  }

  if (!fs.existsSync(docsJsonPath)) {
    console.error("ERROR: data/docs-read.json not found!");
    console.error("Please run: node 2-read-docs-to-csv.js first");
    process.exit(1);
  }

  // Check for duplicates
  if (fs.existsSync(duplicatesReportPath)) {
    const duplicates = JSON.parse(
      fs.readFileSync(duplicatesReportPath, "utf8")
    );
    if (duplicates.length > 0) {
      console.error("ERROR: Duplicates still exist in Notion database!");
      console.error(`Found ${duplicates.length} duplicate groups.`);
      console.error("Please run: node 4-remove-duplicates.js first");
      process.exit(1);
    }
  }

  const notionPages = JSON.parse(fs.readFileSync(notionJsonPath, "utf8"));
  const docsData = JSON.parse(fs.readFileSync(docsJsonPath, "utf8"));
  const { pages, sectionGroupColors } = docsData;

  console.log(`Notion database has: ${notionPages.length} pages`);
  console.log(`Docs.json has: ${pages.length} pages\n`);

  // Build map of existing pages - match by URL OR (Page Name + Tab Group) case-insensitive
  const existingByUrl = new Map();
  const existingByNameTab = new Map();
  notionPages.forEach((page) => {
    // Primary match: relativePath URL (case-insensitive)
    if (page.relativePath) {
      existingByUrl.set(page.relativePath.toLowerCase(), page.id);
    }
    // Secondary match: Page Name + Tab Group (case-insensitive)
    const nameTabKey = `${(page.pageName || "").toLowerCase()}|||${(
      page.tabGroup || ""
    ).toLowerCase()}`;
    existingByNameTab.set(nameTabKey, page.id);
  });

  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  // Use the writable database for creating/updating pages
  const databaseId =
    process.env.NOTION_WRITABLE_DATABASE_ID || process.env.NOTION_DATABASE_ID;

  let createdCount = 0;
  let updatedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  console.log("Syncing pages to Notion...\n");

  // Reverse pages array so Section Group options are created in correct order for Notion
  // (Notion shows select options in order they were created, we want reverse of docs.json order)
  const reversedPages = [...pages].reverse();

  for (const page of reversedPages) {
    try {
      // Match by URL first, then by Page Name + Tab Group (case-insensitive)
      let existingPageId = null;
      if (page.relativePath) {
        existingPageId = existingByUrl.get(page.relativePath.toLowerCase());
      }
      if (!existingPageId) {
        const nameTabKey = `${(page.pageName || "").toLowerCase()}|||${(
          page.tabGroup || ""
        ).toLowerCase()}`;
        existingPageId = existingByNameTab.get(nameTabKey);
      }

      if (existingPageId) {
        // ONLY update Section Group and Sub Section - nothing else
        const updateProperties = {
          "Section Group": page.sectionGroup
            ? {
                select: {
                  name: page.sectionGroup,
                  color: sectionGroupColors[page.sectionGroup],
                },
              }
            : { select: null },
          "Sub Section": page.subGroup
            ? { select: { name: page.subGroup } }
            : { select: null },
        };

        await notion.pages.update({
          page_id: existingPageId,
          properties: updateProperties,
        });
        updatedCount++;
        console.log(`↻ Updated: ${page.pageName}`);
      } else {
        // Page doesn't exist - skip (do NOT create new pages)
        skippedCount++;
        console.log(`⊘ Skipped (not in Notion): ${page.pageName}`);
      }
    } catch (error) {
      errorCount++;
      console.error(`✗ Failed to sync ${page.pageName}:`, error.message);
    }
  }

  console.log(`\nSync complete:`);
  console.log(`  Updated: ${updatedCount}`);
  console.log(`  Skipped (not in Notion): ${skippedCount}`);
  console.log(`  Errors: ${errorCount}`);

  // Write export report
  const reportsDir = path.join(__dirname, "reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const exportReport = {
    timestamp: new Date().toISOString(),
    totalDocsPages: pages.length,
    updated: updatedCount,
    skipped: skippedCount,
    errors: errorCount,
  };

  const reportPath = path.join(reportsDir, "notion-export.json");
  fs.writeFileSync(reportPath, JSON.stringify(exportReport, null, 2));
  console.log(`\nExport report saved to: ${reportPath}`);
}

exportToNotion().catch(console.error);
