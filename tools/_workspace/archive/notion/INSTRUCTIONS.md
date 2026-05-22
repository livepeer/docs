## Updating Pages by Category and Group Table with JavaScript API

### Database Information

Database Name: "PAGES By Category and Group"

- **Database ID** from the link you provided: `2f0660222d088091a81fc6a57ee30c83`
- **UUID format**: `2f066022-2d08-8091-a81f-c6a57ee30c83` ** This is the correct
  database ID you should use in your JavaScript code. **
- **Your code should use:**
  `const databaseId = '2f0660222d088091a81fc6a57ee30c83';`

### Your code should use: const databaseId ='2f0660222d088091a81fc6a57ee30c83'

### Prerequisites

Before making API calls, ensure you have:

- A Notion integration with access to the database
- The database ID for "PAGES By Category and Group"
- The property ID or name for the "Section Group" column
- Node.js installed with the `@notionhq/client` package

### Setup and Installation

```bash
npm install @notionhq/client
```

### Initialize the Notion Client

```jsx
const { Client } = require("@notionhq/client");

// Initialize the Notion client
const notion = new Client({
  auth: "YOUR_NOTION_API_KEY_HERE",
});

// Your database ID
const databaseId = "22"; // Replace with actual database ID if different
```

### Function to Update Section Group Column

```jsx
async function updateSectionGroup(pageId, sectionGroupId) {
  try {
    const response = await notion.pages.update({
      page_id: pageId,
      properties: {
        "Section Group": {
          // Assuming Section Group is a relation property
          relation: [
            {
              id: sectionGroupId,
            },
          ],
        },
      },
    });

    console.log("Page updated successfully:", response.id);
    return response;
  } catch (error) {
    console.error("Error updating page:", error.message);
    throw error;
  }
}
```

### Function to Query and Update Multiple Pages

```jsx
async function updateMultiplePages(updates) {
  // updates is an array of objects: [{ pageId: 'xxx', sectionGroupId: 'yyy' }]

  const results = [];

  for (const update of updates) {
    try {
      const result = await updateSectionGroup(
        update.pageId,
        update.sectionGroupId,
      );
      results.push({ success: true, pageId: update.pageId, result });
    } catch (error) {
      results.push({
        success: false,
        pageId: update.pageId,
        error: error.message,
      });
    }
  }

  return results;
}
```

### Example Usage

```jsx
// Example: Update a single page
const pageIdToUpdate = "abc123def456";
const newSectionGroupId = "xyz789ghi012";

updateSectionGroup(pageIdToUpdate, newSectionGroupId)
  .then(() => console.log("Update complete"))
  .catch((error) => console.error("Update failed:", error));

// Example: Update multiple pages
const bulkUpdates = [
  { pageId: "page-id-1", sectionGroupId: "group-id-1" },
  { pageId: "page-id-2", sectionGroupId: "group-id-2" },
  { pageId: "page-id-3", sectionGroupId: "group-id-1" },
];

updateMultiplePages(bulkUpdates)
  .then((results) => console.log("Bulk update results:", results))
  .catch((error) => console.error("Bulk update failed:", error));
```

### Alternative: If Section Group is a Select Property

```jsx
async function updateSectionGroupSelect(pageId, sectionGroupName) {
  try {
    const response = await notion.pages.update({
      page_id: pageId,
      properties: {
        "Section Group": {
          select: {
            name: sectionGroupName,
          },
        },
      },
    });

    console.log("Page updated successfully:", response.id);
    return response;
  } catch (error) {
    console.error("Error updating page:", error.message);
    throw error;
  }
}
```

### Getting Database ID

## Updating Pages by Category and Group Table with JavaScript API

### Prerequisites

Before making API calls, ensure you have:

- A Notion integration with access to the database
- The database ID for "PAGES By Category and Group"
- The property ID or name for the "Section Group" column
- Node.js installed with the `@notionhq/client` package

### Setup and Installation

```bash
npm install @notionhq/client
```

### Initialize the Notion Client

```jsx
const { Client } = require("@notionhq/client");

// Initialize the Notion client
const notion = new Client({
  auth: "YOUR_NOTION_API_KEY_HERE",
});

// Your database ID
const databaseId = "22"; // Replace with actual database ID if different
```

### Function to Update Section Group Column

```jsx
async function updateSectionGroup(pageId, sectionGroupId) {
  try {
    const response = await notion.pages.update({
      page_id: pageId,
      properties: {
        "Section Group": {
          // Assuming Section Group is a relation property
          relation: [
            {
              id: sectionGroupId,
            },
          ],
        },
      },
    });

    console.log("Page updated successfully:", response.id);
    return response;
  } catch (error) {
    console.error("Error updating page:", error.message);
    throw error;
  }
}
```

### Function to Query and Update Multiple Pages

```jsx
async function updateMultiplePages(updates) {
  // updates is an array of objects: [{ pageId: 'xxx', sectionGroupId: 'yyy' }]

  const results = [];

  for (const update of updates) {
    try {
      const result = await updateSectionGroup(
        update.pageId,
        update.sectionGroupId,
      );
      results.push({ success: true, pageId: update.pageId, result });
    } catch (error) {
      results.push({
        success: false,
        pageId: update.pageId,
        error: error.message,
      });
    }
  }

  return results;
}
```

### Example Usage

```jsx
// Example: Update a single page
const pageIdToUpdate = "abc123def456";
const newSectionGroupId = "xyz789ghi012";

updateSectionGroup(pageIdToUpdate, newSectionGroupId)
  .then(() => console.log("Update complete"))
  .catch((error) => console.error("Update failed:", error));

// Example: Update multiple pages
const bulkUpdates = [
  { pageId: "page-id-1", sectionGroupId: "group-id-1" },
  { pageId: "page-id-2", sectionGroupId: "group-id-2" },
  { pageId: "page-id-3", sectionGroupId: "group-id-1" },
];

updateMultiplePages(bulkUpdates)
  .then((results) => console.log("Bulk update results:", results))
  .catch((error) => console.error("Bulk update failed:", error));
```

### Alternative: If Section Group is a Select Property

```jsx
async function updateSectionGroupSelect(pageId, sectionGroupName) {
  try {
    const response = await notion.pages.update({
      page_id: pageId,
      properties: {
        "Section Group": {
          select: {
            name: sectionGroupName,
          },
        },
      },
    });

    console.log("Page updated successfully:", response.id);
    return response;
  } catch (error) {
    console.error("Error updating page:", error.message);
    throw error;
  }
}
```

### Getting Database

```jsx
async function getDatabaseStructure(databaseId) {
  try {
    const response = await notion.databases.retrieve({
      database_id: databaseId,
    });

    console.log("Database properties:", response.properties);
    return response;
  } catch (error) {
    console.error("Error retrieving database:", error.message);
    throw error;
  }
}

// Example: Get the PAGES By Category and Group database structure
getDatabaseStructure("41")
  .then((db) => console.log("Database retrieved:", db.title))
  .catch((error) => console.error("Failed to retrieve database:", error));
```
