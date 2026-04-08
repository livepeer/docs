/**
 * @script            generate-action-pages
 * @type              generator
 * @concern           governance
 * @niche             actions-library
 * @purpose           infrastructure:documentation
 * @description       Reads actions-audit.json and generates one MDX page per workflow
 *                    in the actions-library directory, organised by type/concern.
 *                    Also generates the catalog-index.mdx.
 * @mode              generate
 * @scope             .github/workspace/actions-library/
 * @usage             node .github/workspace/generate-action-pages.js [--dry-run]
 * @policy            DO NOT EDIT generated pages directly. Edit audit data or template.
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "../../..");
const LIBRARY_PATH = path.resolve(__dirname);
const AUDIT_PATH = path.join(LIBRARY_PATH, "actions-audit.json");
const DRY_RUN = process.argv.includes("--dry-run");

const TYPE_FOLDERS = {
  integrator: "integrators",
  generator: "generators",
  validator: "validators",
  audit: "auditors",
  remediator: "remediators",
  dispatch: "dispatchers",
  interface: "interfaces",
  placeholder: "placeholders",
};

const PIPELINE_LABELS = {
  P2: "P2 (hard gate, blocks merge)",
  P3: "P3 (soft gate, advisory)",
  P4: "P4 (post-merge, auto-commit)",
  P5: "P5 (scheduled, read-only)",
  "P5-auto": "P5-auto (scheduled + auto-commit)",
  P6: "P6 (self-heal)",
  manual: "Manual (workflow_dispatch)",
  "event-driven": "Event-driven (repository_dispatch / issues)",
};

function slugFromFile(file) {
  return file.replace(/\.ya?ml$/, "");
}

function generatePage(workflow) {
  const slug = slugFromFile(workflow.file);
  const newName = workflow.new_name || workflow.file;
  const pipelineLabel = PIPELINE_LABELS[workflow.pipeline_tag] || workflow.pipeline_tag;
  const scripts = (workflow.scripts || []).length
    ? workflow.scripts.map((s) => `- \`${s}\``).join("\n")
    : "None (inline only)";
  const bugs = (workflow.bugs || []).length
    ? workflow.bugs.map((b) => `- ${b}`).join("\n")
    : "None identified.";
  const flags = workflow.review_flags || "";

  return `---
title: '${workflow.name}'
sidebarTitle: '${workflow.name.replace(/^(Update |Generate |Check |Verify |Docs CI - )/, "")}'
description: '${workflow.name}'
pageType: reference
purpose: reference
audience: internal
status: ${workflow.status}
lastVerified: '2026-04-01'
keywords:
  - livepeer
  - github-actions
  - ${workflow.type}
  - ${workflow.concern}
  - ${slug}
---

import { CustomDivider } from '/snippets/components/elements/spacing/Divider.jsx'

## Classification

| Field | Value |
|---|---|
| **Current file** | \`.github/workflows/${workflow.file}\` |
| **New name** | \`${newName}\` |
| **Type** | \`${workflow.type}\` |
| **Concern** | \`${workflow.concern}\` |
| **Pipeline tag** | ${pipelineLabel} |
| **Status** | ${workflow.status} |

<CustomDivider />

## Purpose

{/* TODO: Write purpose paragraph from workflow and script inspection */}

<CustomDivider />

## Pipeline

{/* TODO: Add Mermaid diagram tracing triggers, scripts, data files, consuming pages */}

\`\`\`mermaid
graph LR
    TRIGGER["${workflow.triggers.join(", ")}"] --> WF["${slug}"]
    WF --> OUTPUT["output"]
\`\`\`

<CustomDivider />

## Triggers

| Trigger | Details |
|---|---|
${workflow.triggers.map((t) => `| \`${t}\` | See workflow file |`).join("\n")}

<CustomDivider />

## Dependencies

**Scripts:**
${scripts}

<CustomDivider />

## Known Issues

${bugs}
${flags ? `\n**Review flags:** ${flags}` : ""}

<CustomDivider />

## Governance Notes

| Field | Value |
|---|---|
| **Permissions** | ${workflow.has_permissions ? "Declared" : "Missing"} |
| **Concurrency** | ${workflow.has_concurrency ? "Yes" : "No"} |
| **Auto-commit** | ${workflow.has_auto_commit ? "Yes" : "No"} |
| **Inline script** | ${workflow.has_inline_script ? "Yes (extraction candidate)" : "No"} |
`;
}

function generateCatalog(workflows) {
  const active = workflows.filter((w) => w.status !== "placeholder" && w.new_name !== "DELETE");
  const byType = {};
  active.forEach((w) => {
    const t = w.type;
    if (!byType[t]) byType[t] = [];
    byType[t].push(w);
  });

  let md = `---
title: 'Actions Library Catalog'
sidebarTitle: 'Catalog'
description: 'Index of all GitHub Actions workflows with classification, naming, and status.'
pageType: reference
purpose: reference
audience: internal
lastVerified: '2026-04-01'
---

# Actions Library Catalog

> Generated from \`actions-audit.json\`. Do not edit directly.
> Run \`node .github/workspace/generate-action-pages.js\` to regenerate.

`;

  const typeOrder = ["integrator", "generator", "validator", "audit", "remediator", "interface", "dispatch"];
  typeOrder.forEach((type) => {
    const group = byType[type];
    if (!group || group.length === 0) return;
    const folder = TYPE_FOLDERS[type];

    md += `## ${type.charAt(0).toUpperCase() + type.slice(1)}s (${group.length})\n\n`;
    md += `| Current name | New name | Concern | Pipeline | Status |\n`;
    md += `|---|---|---|---|---|\n`;

    group.sort((a, b) => a.file.localeCompare(b.file));
    group.forEach((w) => {
      const slug = slugFromFile(w.file);
      const link = `[${w.file}](${folder}/${w.concern}/${slug}.mdx)`;
      md += `| ${link} | \`${w.new_name || "TBD"}\` | ${w.concern} | ${w.pipeline_tag} | ${w.status} |\n`;
    });
    md += `\n`;
  });

  return md;
}

// Main
const data = JSON.parse(fs.readFileSync(AUDIT_PATH, "utf8"));
const workflows = data.workflows;

let generated = 0;
let skipped = 0;

workflows.forEach((w) => {
  if (w.new_name === "DELETE" || w.status === "placeholder") {
    skipped++;
    return;
  }

  const typeFolder = TYPE_FOLDERS[w.type];
  if (!typeFolder) {
    console.log(`  SKIP: Unknown type '${w.type}' for ${w.file}`);
    skipped++;
    return;
  }

  const dirPath = path.join(LIBRARY_PATH, typeFolder, w.concern);
  const filePath = path.join(dirPath, slugFromFile(w.file) + ".mdx");

  // Skip the gold standard page (hand-written)
  if (w.file === "update-contract-addresses.yml") {
    console.log(`  SKIP: ${w.file} (gold standard, hand-written)`);
    skipped++;
    return;
  }

  const content = generatePage(w);

  if (DRY_RUN) {
    console.log(`  DRY-RUN: Would write ${filePath}`);
    generated++;
    return;
  }

  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(filePath, content);
  generated++;
});

// Generate catalog
const catalogContent = generateCatalog(workflows);
const catalogPath = path.join(LIBRARY_PATH, "catalog-index.mdx");

if (DRY_RUN) {
  console.log(`  DRY-RUN: Would write ${catalogPath}`);
} else {
  fs.writeFileSync(catalogPath, catalogContent);
}

console.log(`\nDone. Generated: ${generated}, Skipped: ${skipped}, Catalog: 1`);
if (DRY_RUN) console.log("(dry-run mode, no files written)");
