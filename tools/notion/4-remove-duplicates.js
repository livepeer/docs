require("dotenv").config();
const { Client } = require("@notionhq/client");
const fs = require("fs");
const path = require("path");

async function removeDuplicates() {
  const reportPath = path.join(__dirname, "reports", "duplicates-report.json");

  if (!fs.existsSync(reportPath)) {
    console.error("ERROR: reports/duplicates-report.json not found!");
    console.error("Please run: node 3-check-duplicates.js first");
    process.exit(1);
  }

  const duplicates = JSON.parse(fs.readFileSync(reportPath, "utf8"));

  if (duplicates.length === 0) {
    console.log("No duplicates to remove!");
    return;
  }

  console.log(`Found ${duplicates.length} duplicate groups`);
  console.log("Strategy: Keep the FIRST entry, delete the rest\n");

  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  let deletedCount = 0;
  let errorCount = 0;

  for (const dup of duplicates) {
    const [pageName, tabGroup, sectionGroup] = dup.key.split("|||");
    console.log(
      `Processing: "${pageName}" | Tab: "${tabGroup}" | Section: "${sectionGroup}"`
    );
    console.log(`  Keeping: ${dup.pages[0].id}`);

    // Delete all except the first one
    for (let i = 1; i < dup.pages.length; i++) {
      const pageToDelete = dup.pages[i];
      try {
        await notion.pages.update({
          page_id: pageToDelete.id,
          archived: true,
        });
        console.log(`  ✓ Deleted: ${pageToDelete.id}`);
        deletedCount++;
      } catch (error) {
        console.error(
          `  ✗ Failed to delete ${pageToDelete.id}:`,
          error.message
        );
        errorCount++;
      }
    }
    console.log();
  }

  console.log(`\nDeletion complete:`);
  console.log(`  Deleted: ${deletedCount}`);
  console.log(`  Errors: ${errorCount}`);

  // Write cleanup report
  const reportsDir = path.join(__dirname, "reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const cleanupReport = {
    timestamp: new Date().toISOString(),
    duplicateGroupsProcessed: duplicates.length,
    pagesDeleted: deletedCount,
    errors: errorCount,
  };

  const cleanupReportPath = path.join(reportsDir, "notion-clean.json");
  fs.writeFileSync(cleanupReportPath, JSON.stringify(cleanupReport, null, 2));
  console.log(`\nCleanup report saved to: ${cleanupReportPath}`);
  console.log(`\nRun 'node 1-read-notion-to-csv.js' to verify the cleanup.`);
}

removeDuplicates().catch(console.error);
