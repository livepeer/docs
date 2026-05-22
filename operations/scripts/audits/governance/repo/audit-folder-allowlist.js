#!/usr/bin/env node
/**
 * @script      audit-folder-allowlist
 * @type        audit
 * @concern     governance
 * @niche       repo
 * @purpose     Scheduled audit of folder-allowlist drift across all governed folders (D-GOV-08 layer 5)
 * @description Layer-5 fail-safe drift scanner. Reads every governed folder's .allowlist, lists actual entries, and reports drift to workspace/reports/governance/folder-allowlist/. Anything caught here represents an upstream layer (write-time hook, pre-commit, PR validator, post-merge) that failed to prevent the file from landing.
 * @mode        scan
 * @pipeline    P5 (scheduled scan) called by dispatch-folder-allowlist.js --mode scheduled
 * @scope       repo root, .github/, ai-tools/, docs-guide/, tools/config/, snippets/, workspace/ (any folder declaring .allowlist)
 * @usage       node operations/scripts/audits/governance/repo/audit-folder-allowlist.js [--json]
 * @policy      D-GOV-08 (every folder is governed; prevention at earliest layer)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const { computeDrift, findGovernedFolders } = require(path.join(REPO_ROOT, 'tools/lib/governance/folder-allowlist'));
const REPORT_DIR = path.join(REPO_ROOT, 'workspace', 'reports', 'governance', 'folder-allowlist');
const REPORT_MD = path.join(REPORT_DIR, 'audit.md');
const REPORT_JSON = path.join(REPORT_DIR, 'audit.json');

function parseArgs(argv) {
  const args = { json: false, help: false };
  for (const token of argv) {
    if (token === '--help' || token === '-h') args.help = true;
    if (token === '--json') args.json = true;
  }
  return args;
}

function renderMarkdown(results, totalDrift) {
  const lines = [];
  lines.push('# Folder-allowlist audit');
  lines.push('');
  lines.push(`Generated ${new Date().toISOString().split('T')[0]}`);
  lines.push('');
  lines.push(`**Total drift entries: ${totalDrift}**`);
  lines.push('');
  for (const r of results) {
    lines.push(`## ${r.folder}`);
    lines.push('');
    if (r.ungoverned) {
      lines.push('No `.allowlist` file declared. Folder is ungoverned.');
      lines.push('');
      continue;
    }
    lines.push(`- Permitted: ${r.permitted.length}`);
    lines.push(`- Drift: ${r.drift.length}`);
    if (r.drift.length > 0) {
      lines.push('');
      lines.push('Drift entries:');
      for (const entry of r.drift) lines.push(`- ${entry}`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log('Usage: node operations/scripts/audits/governance/repo/audit-folder-allowlist.js [--json]');
    process.exit(0);
  }

  fs.mkdirSync(REPORT_DIR, { recursive: true });

  const folders = findGovernedFolders(REPO_ROOT);
  const results = folders.map(({ rel, abs }) => ({ folder: rel, ...computeDrift(abs) }));
  const totalDrift = results.reduce((sum, r) => sum + r.drift.length, 0);

  fs.writeFileSync(REPORT_MD, renderMarkdown(results, totalDrift));
  fs.writeFileSync(REPORT_JSON, JSON.stringify({ generated: new Date().toISOString(), totalDrift, results }, null, 2));

  if (args.json) {
    console.log(JSON.stringify({ ok: totalDrift === 0, totalDrift, report_md: path.relative(REPO_ROOT, REPORT_MD), report_json: path.relative(REPO_ROOT, REPORT_JSON), results }, null, 2));
  } else {
    console.log(`audit-folder-allowlist: ${folders.length} governed folder(s), ${totalDrift} drift entries`);
    console.log(`Report: ${path.relative(REPO_ROOT, REPORT_MD)}`);
  }

  // Scheduled scans exit 0 even with findings (rolling issue carries state).
  process.exit(0);
}

main();
