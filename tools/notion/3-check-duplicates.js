/**
 * @script            3-check-duplicates
 * @category          validator
 * @purpose           tooling:dev-tools
 * @scope             external
 * @owner             docs
 * @needs             node
 * @purpose-statement Analyzes the exported Notion snapshot for duplicate page keys and writes JSON and Markdown reports.
 * @pipeline          manual
 * @usage             node tools/notion/3-check-duplicates.js [flags]
 */

const fs = require("fs");
const path = require("path");

function checkDuplicates() {
  console.log("Checking for duplicates in Notion database...\n");

  const notionJsonPath = path.join(__dirname, "data", "notion-read.json");

  if (!fs.existsSync(notionJsonPath)) {
    console.error("ERROR: data/notion-read.json not found!");
    console.error("Please run: node 1-read-notion-to-csv.js first");
    process.exit(1);
  }

  const notionPages = JSON.parse(fs.readFileSync(notionJsonPath, "utf8"));

  console.log(`Total pages in Notion: ${notionPages.length}`);

  // Group by unique key: Page Name + Tab Group + Section Group
  const pageGroups = new Map();

  notionPages.forEach((page) => {
    const uniqueKey = `${page.pageName}|||${page.tabGroup}|||${page.sectionGroup}`;

    if (!pageGroups.has(uniqueKey)) {
      pageGroups.set(uniqueKey, []);
    }
    pageGroups.get(uniqueKey).push(page);
  });

  // Find duplicates
  const duplicates = [];
  pageGroups.forEach((pages, key) => {
    if (pages.length > 1) {
      duplicates.push({ key, pages });
    }
  });

  console.log(`\nUnique page combinations: ${pageGroups.size}`);
  console.log(`Duplicate groups found: ${duplicates.length}\n`);

  if (duplicates.length > 0) {
    // Report duplicates
    console.log("DUPLICATES FOUND:\n");
    duplicates.forEach((dup, index) => {
      const [pageName, tabGroup, sectionGroup] = dup.key.split("|||");
      console.log(
        `${
          index + 1
        }. "${pageName}" | Tab: "${tabGroup}" | Section: "${sectionGroup}"`
      );
      console.log(`   Found ${dup.pages.length} copies:`);
      dup.pages.forEach((page, i) => {
        console.log(`   ${i + 1}. ID: ${page.id} | Path: ${page.relativePath}`);
      });
      console.log();
    });
  } else {
    console.log("✓ No duplicates found!");
  }

  // Create reports directory if it doesn't exist
  const reportsDir = path.join(__dirname, "reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  // Write duplicates report as JSON
  const jsonReportPath = path.join(reportsDir, "duplicates-report.json");
  fs.writeFileSync(jsonReportPath, JSON.stringify(duplicates, null, 2));

  // Write duplicates report as Markdown
  let mdReport = `# Duplicates Report\n\n`;
  mdReport += `**Generated:** ${new Date().toISOString()}\n\n`;
  mdReport += `**Total pages in Notion:** ${notionPages.length}\n`;
  mdReport += `**Unique page combinations:** ${pageGroups.size}\n`;
  mdReport += `**Duplicate groups found:** ${duplicates.length}\n\n`;

  if (duplicates.length === 0) {
    mdReport += `✓ **No duplicates found!**\n`;
  } else {
    mdReport += `## Duplicates Found\n\n`;
    duplicates.forEach((dup, index) => {
      const [pageName, tabGroup, sectionGroup] = dup.key.split("|||");
      mdReport += `### ${index + 1}. "${pageName}"\n\n`;
      mdReport += `- **Tab Group:** "${tabGroup}"\n`;
      mdReport += `- **Section Group:** "${sectionGroup}"\n`;
      mdReport += `- **Copies found:** ${dup.pages.length}\n\n`;
      mdReport += `| # | Notion ID | Relative Path |\n`;
      mdReport += `|---|-----------|---------------|\n`;
      dup.pages.forEach((page, i) => {
        mdReport += `| ${i + 1} | \`${page.id}\` | ${
          page.relativePath || "(empty)"
        } |\n`;
      });
      mdReport += `\n`;
    });
  }

  const mdReportPath = path.join(reportsDir, "Duplicates.md");
  fs.writeFileSync(mdReportPath, mdReport);

  console.log(`\nJSON report saved to: ${jsonReportPath}`);
  console.log(`Markdown report saved to: ${mdReportPath}`);

  if (duplicates.length > 0) {
    console.log(`\nTo remove duplicates, run: node 4-remove-duplicates.js`);
  }
}

checkDuplicates();
