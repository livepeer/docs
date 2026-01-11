#!/usr/bin/env node
/**
 * Generates a documentation status table from docs.json
 * Merges with docs-status-data.json for status/priority/notes
 * Output: snippets/generated/docs-status-table.mdx
 */

const fs = require('fs')
const path = require('path')

const SCRIPT_DIR = __dirname
const PROJECT_ROOT = path.dirname(SCRIPT_DIR)
const DOCS_JSON_PATH = path.join(PROJECT_ROOT, '..', 'docs.json')
const STATUS_DATA_PATH = path.join(PROJECT_ROOT, 'docs-status-data.json')
const OUTPUT_DIR = path.join(PROJECT_ROOT, '..', 'snippets', 'generated')
const OUTPUT_PATH = path.join(OUTPUT_DIR, 'docs-status-table.mdx')

// Read docs.json
const docsJson = JSON.parse(fs.readFileSync(DOCS_JSON_PATH, 'utf8'))

// Read status data if exists, otherwise empty object
let statusData = {}
if (fs.existsSync(STATUS_DATA_PATH)) {
  statusData = JSON.parse(fs.readFileSync(STATUS_DATA_PATH, 'utf8'))
}

// Extract v2 navigation
const v2Version = docsJson.navigation.versions.find((v) => v.version === 'v2')
if (!v2Version) {
  console.error('No v2 version found in docs.json')
  process.exit(1)
}

const enLanguage = v2Version.languages.find((l) => l.language === 'en')
if (!enLanguage) {
  console.error('No English language found in v2')
  process.exit(1)
}

// Collect all pages with their tab/group hierarchy
const rows = []

function extractPages(pages, tab, group, subgroup = '') {
  for (const page of pages) {
    if (typeof page === 'string') {
      const status = statusData[page] || { status: '', priority: '', notes: '' }
      rows.push({
        tab,
        group,
        subgroup,
        page,
        ...status,
      })
    } else if (page.group && page.pages) {
      // Nested group
      extractPages(page.pages, tab, group, page.group)
    }
  }
}

function processGroups(groups, tab) {
  for (const groupObj of groups) {
    if (groupObj.pages) {
      extractPages(groupObj.pages, tab, groupObj.group)
    }
  }
}

// Process all tabs (skip hidden tabs)
for (const tabObj of enLanguage.tabs) {
  if (tabObj.hidden === true) continue
  const tabName = tabObj.tab || tabObj.dropdown || 'Unknown'

  if (tabObj.anchors) {
    for (const anchor of tabObj.anchors) {
      if (anchor.groups) {
        processGroups(anchor.groups, tabName)
      }
      if (anchor.pages) {
        extractPages(anchor.pages, tabName, anchor.anchor || '')
      }
    }
  }
}

// Generate markdown table
let output = `{/* Auto-generated from docs.json - DO NOT EDIT DIRECTLY */}
{/* To update status/priority/notes, edit v2/docs-status-data.json */}

<Note>
This table is auto-generated from \`docs.json\`. To update status, priority, or notes, edit \`v2/docs-status-data.json\` and run \`npm run generate-status\`.
</Note>

| Tab | Group | Page | Status | Priority | Notes |
|-----|-------|------|--------|----------|-------|
`

for (const row of rows) {
  const pageName = row.page.split('/').pop().replace(/-/g, ' ')
  const groupDisplay = row.subgroup
    ? `${row.group} > ${row.subgroup}`
    : row.group
  output += `| ${row.tab} | ${groupDisplay} | [${pageName}](/${row.page}) | ${row.status} | ${row.priority} | ${row.notes} |\n`
}

// Add summary
output += `\n---\n\n**Total Pages:** ${rows.length}\n`

// Ensure output directory exists
fs.mkdirSync(OUTPUT_DIR, { recursive: true })

// Write output
fs.writeFileSync(OUTPUT_PATH, output)
console.log(`✓ Generated docs status table with ${rows.length} pages`)
console.log(`  Output: ${OUTPUT_PATH}`)

// Generate template status data file if it doesn't exist
if (!fs.existsSync(STATUS_DATA_PATH)) {
  const templateData = {}
  for (const row of rows) {
    templateData[row.page] = { status: '', priority: '', notes: '' }
  }
  fs.writeFileSync(STATUS_DATA_PATH, JSON.stringify(templateData, null, 2))
  console.log(`✓ Created template status data file: ${STATUS_DATA_PATH}`)
}

// Generate Mermaid diagram - tabs vertical, groups horizontal
let mermaid = `{/* Auto-generated from docs.json - DO NOT EDIT DIRECTLY */}

\`\`\`mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#1a1a1a', 'primaryTextColor': '#fff', 'primaryBorderColor': '#2d9a67', 'lineColor': '#2d9a67', 'secondaryColor': '#0d0d0d', 'tertiaryColor': '#1a1a1a', 'background': '#0d0d0d', 'fontFamily': 'system-ui', 'fontSize': '14px' }}}%%
flowchart TB
`

let nodeId = 0
const getNodeId = () => `n${nodeId++}`

// Collect tab data for both diagram and accordions
const tabData = []

for (const tabObj of enLanguage.tabs) {
  const tabName = tabObj.tab || tabObj.dropdown || 'Unknown'
  // Skip empty/spacer tabs and hidden tabs
  if (tabName.trim() === '' || tabName === ' ') continue
  if (tabObj.hidden === true) continue

  const groups = []
  let pageCount = 0

  if (tabObj.anchors) {
    for (const anchor of tabObj.anchors) {
      if (anchor.groups) {
        for (const g of anchor.groups) {
          const pages = []
          if (g.pages) {
            for (const p of g.pages) {
              if (typeof p === 'string') {
                pages.push(p)
                pageCount++
              } else if (p.pages) {
                // Nested group
                for (const np of p.pages) {
                  if (typeof np === 'string') {
                    pages.push(np)
                    pageCount++
                  }
                }
              }
            }
          }
          groups.push({ name: g.group, pages, id: getNodeId() })
        }
      }
    }
  }

  tabData.push({ name: tabName, groups, pageCount, id: getNodeId() })
}

// Filter out Internal Hub
const publicTabs = tabData.filter((t) => t.name !== 'Internal Hub')

// Tabs row in a highlighted box at top
mermaid += `    subgraph Tabs[" "]\n`
mermaid += `        direction LR\n`
for (const tab of publicTabs) {
  mermaid += `        ${tab.id}[["${tab.name}"]]\n`
}
mermaid += `    end\n\n`

// Below each tab, its groups connected vertically
for (const tab of publicTabs) {
  if (tab.groups.length > 0) {
    // Connect tab to first group
    mermaid += `    ${tab.id} --> ${tab.groups[0].id}["${tab.groups[0].name}"]\n`
    // Connect groups vertically
    for (let i = 1; i < tab.groups.length; i++) {
      mermaid += `    ${tab.groups[i - 1].id} --> ${tab.groups[i].id}["${
        tab.groups[i].name
      }"]\n`
    }
  }
}

mermaid += `
    classDef default fill:#1a1a1a,color:#fff,stroke:#2d9a67,stroke-width:1px
    classDef tab fill:#0d0d0d,color:#2d9a67,stroke:#2d9a67,stroke-width:2px
    style Tabs fill:#0d0d0d,stroke:#2d9a67,stroke-width:2px
`

for (const tab of publicTabs) {
  mermaid += `    class ${tab.id} tab\n`
}

mermaid += `\`\`\`

---

## Page Structure by Tab

<AccordionGroup>
`

// Build accordions for each tab
for (const tab of tabData) {
  mermaid += `<Accordion title="${tab.name}" icon="folder">\n\n`

  for (const group of tab.groups) {
    mermaid += `### ${group.name}\n\n`
    if (group.pages.length > 0) {
      for (const page of group.pages) {
        const pageName = page.split('/').pop().replace(/-/g, ' ')
        mermaid += `- [${pageName}](/${page})\n`
      }
    } else {
      mermaid += `*No pages*\n`
    }
    mermaid += `\n`
  }

  mermaid += `</Accordion>\n\n`
}

mermaid += `</AccordionGroup>
`

const MERMAID_OUTPUT_PATH = path.join(OUTPUT_DIR, 'docs-structure-diagram.mdx')
fs.writeFileSync(MERMAID_OUTPUT_PATH, mermaid)
console.log(`✓ Generated docs structure diagram`)
console.log(`  Output: ${MERMAID_OUTPUT_PATH}`)
