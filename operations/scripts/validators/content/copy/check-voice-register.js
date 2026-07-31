#!/usr/bin/env node
/**
 * @script      check-voice-register
 * @type        validator
 * @concern     brand
 * @niche       copy
 * @purpose     content:voice-compliance
 * @description Checks MDX pages with audience frontmatter for prohibited phrases from the wrong voice register
 * @mode        check
 * @pipeline    pr-changed -> v2/*.mdx with audience frontmatter -> exit-code, stdout:violations
 * @scope       v2/
 * @usage       node operations/scripts/validators/content/copy/check-voice-register.js [--json]
 */
'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const V2_DIR = path.join(REPO_ROOT, 'v2');

// Per-audience prohibited phrases (from docs-guide/standards/voice-rules.mdx)
const PROHIBITED = {
  gateway: [
    /don'?t worry,?\s*this is easy/i,
    /as a gateway operator,?\s*you will/i,
    /this document will guide you/i,
    /remember that/i,
    /keep in mind that/i,
    /the gateway simply/i,
  ],
  orchestrator: [
    /don'?t worry/i,
    /this guide will walk you through/i,
    /as an orchestrator,?\s*you/i,
    /easy to set up/i,
  ],
  developer: [
    /this tutorial will teach you/i,
    /for beginners/i,
    /simply call the api/i,
    /easy to integrate/i,
  ],
  delegator: [
    /don'?t worry about the technical details/i,
    /you don'?t need to understand/i,
    /just click/i,
    /it'?s that simple/i,
  ],
};

// Universal prohibited (all audiences)
const UNIVERSAL_PROHIBITED = [
  /this section covers/i,
  /this page (?:covers|explains|walks you through)/i,
  /understanding \w+ is essential/i,
  /it is important to note/i,
  /as mentioned above/i,
];

function parseArgs(argv) {
  const args = { json: false, help: false, files: [] };
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--json') { args.json = true; continue; }
    if (token === '--help' || token === '-h') { args.help = true; continue; }
    if (token === '--files' && argv[i + 1]) { argv[++i].split(',').map((f) => f.trim()).filter(Boolean).forEach((f) => args.files.push(f)); continue; }
    if (token.startsWith('--files=')) { token.slice('--files='.length).split(',').map((f) => f.trim()).filter(Boolean).forEach((f) => args.files.push(f)); continue; }
  }
  return args;
}

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  match[1].split('\n').forEach(line => {
    const kv = line.match(/^(\w[\w-]*)\s*:\s*(.+)/);
    if (kv) fm[kv[1].trim()] = kv[2].trim().replace(/^['"]|['"]$/g, '');
  });
  return fm;
}

function getBody(content) {
  const fmEnd = content.indexOf('---', 4);
  if (fmEnd === -1) return content;
  return content.slice(fmEnd + 3);
}

function walkMdx(dir, results = []) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('_') || entry.name.startsWith('x-') || entry.name === 'node_modules' || entry.name === 'workspace') continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) walkMdx(fullPath, results);
      else if (entry.name.endsWith('.mdx')) results.push(fullPath);
    }
  } catch (e) { /* skip */ }
  return results;
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log('Usage: node operations/scripts/validators/content/copy/check-voice-register.js [--json]');
    return 0;
  }

  const pages = args.files.length > 0 ? args.files.filter((f) => fs.existsSync(f)) : walkMdx(V2_DIR);
  const violations = [];
  let checked = 0, skipped = 0;

  for (const page of pages) {
    const content = fs.readFileSync(page, 'utf8');
    const fm = extractFrontmatter(content);
    const audience = fm.audience;

    if (!audience || !PROHIBITED[audience]) {
      skipped++;
      continue;
    }

    checked++;
    const body = getBody(content);
    const rel = path.relative(REPO_ROOT, page);
    const pageViolations = [];

    // Check audience-specific prohibited phrases
    for (const pattern of PROHIBITED[audience]) {
      const match = body.match(pattern);
      if (match) {
        pageViolations.push({ pattern: pattern.source, matched: match[0], audience });
      }
    }

    // Check universal prohibited phrases
    for (const pattern of UNIVERSAL_PROHIBITED) {
      const match = body.match(pattern);
      if (match) {
        pageViolations.push({ pattern: pattern.source, matched: match[0], audience: 'universal' });
      }
    }

    if (pageViolations.length > 0) {
      violations.push({ file: rel, audience, violations: pageViolations });
    }
  }

  const hasIssues = violations.length > 0;

  if (args.json) {
    console.log(JSON.stringify({
      totalPages: pages.length,
      checked,
      skipped,
      pagesWithViolations: violations.length,
      details: violations
    }, null, 2));
    return hasIssues ? 1 : 0;
  }

  console.log('Voice Register Check');
  console.log('--------------------');
  console.log(`Total pages: ${pages.length}, Checked: ${checked}, Skipped (no audience): ${skipped}`);

  if (violations.length === 0) {
    console.log('\nAll checked pages comply with their audience voice register.');
    return 0;
  }

  console.log(`\nViolations (${violations.length} pages):`);
  for (const v of violations) {
    console.log(`  ${v.file} (audience: ${v.audience}):`);
    for (const viol of v.violations) {
      console.log(`    ! "${viol.matched}" [${viol.audience} prohibited]`);
    }
  }

  return 1;
}

process.exit(main());
