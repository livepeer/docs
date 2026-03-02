require("dotenv").config();
const { Client } = require("@notionhq/client");
const fs = require("fs");

async function readNotionToCSV() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;

  console.log("Fetching all pages from Notion database...");

  const allPages = [];
  let hasMore = true;
  let startCursor = undefined;

  while (hasMore) {
    const response = await notion.databases.query({
      database_id: databaseId,
      start_cursor: startCursor,
    });

    response.results.forEach((page) => {
      const pageName =
        page.properties["Page Name"]?.title?.[0]?.plain_text || "";
      const tabGroup = page.properties["Tab Group"]?.select?.name || "";
      const sectionGroup = page.properties["Section Group"]?.select?.name || "";
      const subGroup = page.properties["Sub Section"]?.select?.name || "";
      const pageStatus =
        page.properties["Page Status"]?.multi_select?.[0]?.plain_text || "";
      const notes = page.properties["Notes"]?.rich_text?.[0]?.plain_text || "";
      const relativePath = page.properties["Relative path URL"]?.url || "";

      // ONLY INCLUDE V2 PAGES
      if (relativePath && relativePath.startsWith("v2/")) {
        allPages.push({
          id: page.id,
          pageName,
          tabGroup,
          sectionGroup,
          subGroup,
          pageStatus,
          notes,
          relativePath,
        });
      }
    });

    hasMore = response.has_more;
    startCursor = response.next_cursor;
    console.log(`Fetched ${allPages.length} pages...`);
  }

  console.log(`\nTotal pages fetched: ${allPages.length}`);

  // Write to CSV
  const csvHeader =
    "ID,Page Name,Tab Group,Section Group,Sub Group,Page Status,Notes,Relative Path URL\n";
  const csvRows = allPages.map(
    (p) =>
      `"${p.id}","${p.pageName}","${p.tabGroup}","${p.sectionGroup}","${p.subGroup}","${p.pageStatus}","${p.notes}","${p.relativePath}"`
  );
  const csvContent = csvHeader + csvRows.join("\n");

  // Create data directory if it doesn't exist
  const dataDir = __dirname + "/data";
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const outputPath = dataDir + "/notion-read.csv";
  fs.writeFileSync(outputPath, csvContent);
  console.log(`\nCSV exported to: ${outputPath}`);

  // Also write JSON for easier processing
  const jsonPath = dataDir + "/notion-read.json";
  fs.writeFileSync(jsonPath, JSON.stringify(allPages, null, 2));
  console.log(`JSON exported to: ${jsonPath}`);
}

readNotionToCSV().catch(console.error);
