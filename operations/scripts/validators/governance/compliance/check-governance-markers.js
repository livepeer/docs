#!/usr/bin/env node
/**
 * @script      check-governance-markers
 * @type        validator
 * @concern     governance
 * @niche       compliance
 * @purpose     
 * @description Validates GOVERNANCE.md presence in all required folders and checks link integrity
 * @mode        check
 * @pipeline    pr-changed -> all GOVERNANCE.md markers -> exit-code, stdout:violations
 * @scope       v2/, snippets/, operations/, ai-tools/, tools/, docs-guide/, .github/, .claude/, workspace/, .githooks/
 * @usage       node operations/scripts/validators/governance/compliance/check-governance-markers.js [--json]
 */
'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');

const REQUIRED_FOLDERS = [
  'v2', 'snippets', 'operations', 'ai-tools', 'tools',
  'docs-guide', '.github', '.claude', 'workspace', '.githooks',
  'v2/orchestrators', 'v2/gateways', 'v2/developers', 'v2/about', 'v2/delegators',
  'operations/scripts', 'operations/governance', '.github/workflows'
];

// ── Args ────────────────────────────────
function parseArgs(argv) {
  const args = { json: false, help: false };
  argv.forEach((token) => {
    if (token === '--json') { args.json = true; return; }
    if (token === '--help' || token === '-h') { args.help = true; return; }
  });
  return args;
}

// ── Helpers ─────────────────────────────
function extractLinks(content) {
  const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
  const links = [];
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    if (match[2].startsWith('http://') || match[2].startsWith('https://')) continue;
    links.push({ text: match[1], href: match[2] });
  }
  return links;
}

// ── Core ────────────────────────────────
function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log('Usage: node operations/scripts/validators/governance/compliance/check-governance-markers.js [--json]');
    return 0;
  }

  const missingMarkers = [];
  const brokenLinks = [];

  for (const folder of REQUIRED_FOLDERS) {
    const govPath = path.join(REPO_ROOT, folder, 'GOVERNANCE.md');
    if (!fs.existsSync(govPath)) {
      missingMarkers.push(folder);
      continue;
    }

    const content = fs.readFileSync(govPath, 'utf8');
    const links = extractLinks(content);
    const govDir = path.dirname(govPath);

    for (const link of links) {
      const resolved = path.resolve(govDir, link.href);
      if (!fs.existsSync(resolved)) {
        brokenLinks.push({
          marker: folder,
          text: link.text,
          href: link.href,
          resolved: path.relative(REPO_ROOT, resolved)
        });
      }
    }
  }

  const hasIssues = missingMarkers.length > 0 || brokenLinks.length > 0;

  if (args.json) {
    console.log(JSON.stringify({
      requiredFolders: REQUIRED_FOLDERS.length,
      missingMarkers: missingMarkers.length,
      brokenLinks: brokenLinks.length,
      missingDetails: missingMarkers,
      brokenDetails: brokenLinks
    }, null, 2));
    return hasIssues ? 1 : 0;
  }

  console.log(`Governance Marker Check`);
  console.log(`───────────────────────`);
  console.log(`Required folders: ${REQUIRED_FOLDERS.length}`);

  if (missingMarkers.length > 0) {
    console.log(`\nMissing GOVERNANCE.md (${missingMarkers.length}):`);
    missingMarkers.forEach(f => console.log(`  ✗ ${f}/`));
  }

  if (brokenLinks.length > 0) {
    console.log(`\nBroken links in markers (${brokenLinks.length}):`);
    brokenLinks.forEach(l => console.log(`  ✗ ${l.marker}/GOVERNANCE.md → [${l.text}](${l.href})`));
  }

  if (!hasIssues) {
    console.log(`✓ All markers present, all links valid.`);
  }

  return hasIssues ? 1 : 0;
}

process.exit(main());
