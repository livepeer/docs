/**
 * @script            2-read-docs-to-csv
 * @category          generator
 * @purpose           tooling:dev-tools
 * @scope             external
 * @owner             docs
 * @needs             node
 * @purpose-statement Parses docs.json v2 navigation and writes CSV/JSON exports with section-group metadata for Notion sync.
 * @pipeline          manual
 * @usage             node tools/notion/2-read-docs-to-csv.js [flags]
 */

const fs = require("fs");
const path = require("path");

function readDocsToCSV() {
  console.log("Starting docs.json export...");

  const docsJsonPath = path.join(__dirname, "../docs.json");
  console.log(`Reading docs.json from: ${docsJsonPath}`);

  const docsJson = JSON.parse(fs.readFileSync(docsJsonPath, "utf8"));
  console.log("docs.json loaded successfully");

  const pages = [];
  const sectionGroupColors = new Map();

  function processItem(
    item,
    tabGroup = "",
    sectionGroup = "",
    subGroup = "",
    depth = 0
  ) {
    // Handle string pages (direct page paths)
    if (typeof item === "string") {
      const pageName = path.basename(item, ".mdx");
      const relativePath = item;
      const pageStatus = "Active";
      const notes = "";

      // ONLY INCLUDE V2 PAGES
      // EXCLUDE redirect pages (these are navigation hacks, not real content)
      if (
        relativePath &&
        relativePath.startsWith("v2/") &&
        !relativePath.includes("/redirect")
      ) {
        pages.push({
          pageName,
          tabGroup,
          sectionGroup,
          subGroup,
          pageStatus,
          notes,
          relativePath,
        });
      }
      return;
    }

    // Handle arrays
    if (Array.isArray(item)) {
      item.forEach((subItem) =>
        processItem(subItem, tabGroup, sectionGroup, subGroup, depth)
      );
      return;
    }

    // Handle groups
    if (item.group) {
      // depth 0 = top-level group under anchor (Section Group)
      // depth 1+ = nested group (Sub Group)
      if (depth === 0) {
        // This is a Section Group (top-level)
        const newSectionGroup = item.group;
        if (!sectionGroupColors.has(newSectionGroup)) {
          sectionGroupColors.set(
            newSectionGroup,
            getColorForIndex(sectionGroupColors.size)
          );
        }
        item.pages?.forEach((page) =>
          processItem(page, tabGroup, newSectionGroup, "", depth + 1)
        );
      } else {
        // This is a Sub Group (nested)
        const newSubGroup = item.group;
        item.pages?.forEach((page) =>
          processItem(page, tabGroup, sectionGroup, newSubGroup, depth + 1)
        );
      }
      return;
    }

    // Handle tabs
    if (item.tab) {
      const newTabGroup = item.tab;
      item.anchors?.forEach((anchor) =>
        processItem(anchor, newTabGroup, sectionGroup)
      );
    }

    // Handle anchors
    if (item.anchor) {
      // If anchor has groups, process groups (which will handle pages)
      // Groups under anchors are depth 0 (Section Groups)
      if (item.groups && item.groups.length > 0) {
        item.groups.forEach((group) => processItem(group, tabGroup, "", "", 0));
      } else {
        // Only process pages directly if there are no groups
        item.pages?.forEach((page) => processItem(page, tabGroup, "", "", 0));
      }
    }
  }

  // Navigate through the nested structure
  if (docsJson.navigation?.versions) {
    docsJson.navigation.versions.forEach((version) => {
      if (version.languages) {
        version.languages.forEach((language) => {
          if (language.tabs) {
            language.tabs.forEach((tab) => processItem(tab));
          }
        });
      }
    });
  }

  console.log(`Found ${pages.length} pages`);
  console.log(`Assigned colors to ${sectionGroupColors.size} section groups`);

  // Create data directory if it doesn't exist
  const dataDir = path.join(__dirname, "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Write to CSV
  const csvHeader =
    "Page Name,Tab Group,Section Group,Sub Group,Page Status,Notes,Relative Path URL\n";
  const csvRows = pages.map(
    (p) =>
      `"${p.pageName}","${p.tabGroup}","${p.sectionGroup}","${p.subGroup}","${p.pageStatus}","${p.notes}","${p.relativePath}"`
  );
  const csvContent = csvHeader + csvRows.join("\n");

  const csvPath = path.join(dataDir, "docs-read.csv");
  fs.writeFileSync(csvPath, csvContent);
  console.log(`CSV exported to: ${csvPath}`);

  // Write JSON with colors
  const jsonPath = path.join(dataDir, "docs-read.json");
  const jsonData = {
    pages,
    sectionGroupColors: Object.fromEntries(sectionGroupColors),
  };
  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));
  console.log(`JSON exported to: ${jsonPath}`);
}

function getColorForIndex(index) {
  const colors = [
    "blue",
    "brown",
    "default",
    "gray",
    "green",
    "orange",
    "pink",
    "purple",
    "red",
    "yellow",
  ];
  return colors[index % colors.length];
}

readDocsToCSV();
