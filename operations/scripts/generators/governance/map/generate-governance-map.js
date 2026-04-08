#!/usr/bin/env node
/**
 * @script      generate-governance-map
 * @type        generator
 * @concern     governance
 * @niche       map
 * @purpose     
 * @description Walks all GOVERNANCE.md markers, validates links, detects staleness, and generates the governance map
 * @mode        generate
 * @pipeline    manual, P4 -> GOVERNANCE.md markers, docs-guide/frameworks/*.mdx -> GOVERNANCE_MAP_LATEST.json
 * @scope       all GOVERNANCE.md markers, docs-guide/frameworks/, docs-guide/standards/, docs-guide/policies/
 * @usage       node operations/scripts/generators/governance/map/generate-governance-map.js [--write|--check|--json]
 */
'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const REPORT_PATH = path.join(REPO_ROOT, 'workspace/reports/repo-ops/GOVERNANCE_MAP_LATEST.json');

const REQUIRED_ROOT_FOLDERS = [
  'v2', 'snippets', 'operations', 'ai-tools', 'tools',
  'docs-guide', '.github', '.claude', 'workspace', '.githooks'
];

const REQUIRED_SUBFOLDERS = [
  'v2/orchestrators', 'v2/gateways', 'v2/developers', 'v2/about', 'v2/delegators',
  'operations/scripts', 'operations/governance', '.github/workflows'
];

const STALENESS_THRESHOLD_DAYS = 90;

// ── Args ────────────────────────────────
function parseArgs(argv) {
  const args = { mode: 'check', help: false };
  argv.forEach((token) => {
    if (token === '--write') { args.mode = 'write'; return; }
    if (token === '--check' || token === '--dry-run') { args.mode = 'check'; return; }
    if (token === '--json') { args.mode = 'json'; return; }
    if (token === '--help' || token === '-h') { args.help = true; return; }
  });
  return args;
}

// ── Helpers ─────────────────────────────
function findGovernanceFiles(dir, depth = 0, maxDepth = 4) {
  const results = [];
  const govPath = path.join(dir, 'GOVERNANCE.md');
  if (fs.existsSync(govPath)) {
    results.push(govPath);
  }
  if (depth >= maxDepth) return results;
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name.startsWith('node_modules')) continue;
      if (entry.name === 'x-archive' || entry.name === 'archive') continue;
      if (entry.name === '_workspace' && depth > 1) continue;
      results.push(...findGovernanceFiles(path.join(dir, entry.name), depth + 1, maxDepth));
    }
  } catch (e) { /* permission denied, skip */ }
  return results;
}

function extractLinks(content) {
  const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
  const links = [];
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    links.push({ text: match[1], href: match[2] });
  }
  return links;
}

function parseMarker(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const folder = path.relative(REPO_ROOT, path.dirname(filePath));
  const links = extractLinks(content);

  const frameworks = [];
  const standards = [];
  const validators = [];
  let owner = '';
  let status = '';

  const lines = content.split('\n');
  for (const line of lines) {
    const ownerMatch = line.match(/\*\*Owner[:\*]*\*?\*?\s*(.+)/);
    if (ownerMatch) owner = ownerMatch[1].trim();

    const statusMatch = line.match(/\*\*Status[:\*]*\*?\*?\s*(.+)/);
    if (statusMatch) status = statusMatch[1].trim();

    if (/\*\*Framework/i.test(line)) {
      const fLinks = extractLinks(line);
      frameworks.push(...fLinks.map(l => l.href));
    }
    if (/\*\*Standards?/i.test(line)) {
      const sLinks = extractLinks(line);
      standards.push(...sLinks.map(l => l.href));
    }
    if (/\*\*Validator/i.test(line)) {
      const vLinks = extractLinks(line);
      validators.push(...vLinks.map(l => l.href));
    }
  }

  return { folder: folder || '.', owner, frameworks, standards, validators, status, links };
}

function resolveLink(markerDir, href) {
  if (href.startsWith('http://') || href.startsWith('https://')) return null;
  return path.resolve(markerDir, href);
}

function parseFrontmatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) return {};
    const fm = {};
    fmMatch[1].split('\n').forEach(line => {
      const kv = line.match(/^(\w[\w-]*)\s*:\s*(.+)/);
      if (kv) fm[kv[1].trim()] = kv[2].trim().replace(/^['"]|['"]$/g, '');
    });
    return fm;
  } catch (e) { return {}; }
}

function daysSince(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return Infinity;
  return Math.floor((Date.now() - d.getTime()) / (1000 * 60 * 60 * 24));
}

// ── Core ────────────────────────────────
function generateMap() {
  const govFiles = findGovernanceFiles(REPO_ROOT);
  const markers = [];
  const brokenLinks = [];
  const staleFrameworks = [];
  const missingMarkers = [];
  const seenFrameworks = new Set();

  for (const govFile of govFiles) {
    const marker = parseMarker(govFile);
    const markerDir = path.dirname(govFile);
    const issues = [];

    for (const link of marker.links) {
      const resolved = resolveLink(markerDir, link.href);
      if (resolved === null) continue;
      if (!fs.existsSync(resolved)) {
        const broken = {
          marker: marker.folder,
          text: link.text,
          href: link.href,
          resolved: path.relative(REPO_ROOT, resolved)
        };
        brokenLinks.push(broken);
        issues.push(`Broken link: [${link.text}](${link.href})`);
      }
    }

    // Check framework staleness
    for (const fwHref of marker.frameworks) {
      const resolved = resolveLink(markerDir, fwHref);
      if (!resolved || !fs.existsSync(resolved)) continue;
      // Skip directories — only check files
      try { if (fs.statSync(resolved).isDirectory()) continue; } catch (e) { continue; }
      const relPath = path.relative(REPO_ROOT, resolved);
      if (seenFrameworks.has(relPath)) continue;
      seenFrameworks.add(relPath);

      const fm = parseFrontmatter(resolved);
      if (fm.lastVerified) {
        const days = daysSince(fm.lastVerified);
        if (days > STALENESS_THRESHOLD_DAYS) {
          staleFrameworks.push({ path: relPath, lastVerified: fm.lastVerified, daysSinceVerified: days });
        }
      } else {
        staleFrameworks.push({ path: relPath, lastVerified: null, daysSinceVerified: Infinity });
      }
    }

    markers.push({
      folder: marker.folder,
      owner: marker.owner,
      framework: marker.frameworks,
      standards: marker.standards,
      status: marker.status,
      issues
    });
  }

  // Check for missing markers
  const allRequired = [...REQUIRED_ROOT_FOLDERS, ...REQUIRED_SUBFOLDERS];
  for (const folder of allRequired) {
    const govPath = path.join(REPO_ROOT, folder, 'GOVERNANCE.md');
    if (!fs.existsSync(govPath)) {
      missingMarkers.push(folder);
    }
  }

  return {
    generated: new Date().toISOString(),
    generator: 'operations/scripts/generators/governance/map/generate-governance-map.js',
    summary: {
      totalMarkers: markers.length,
      validLinks: markers.reduce((sum, m) => sum + m.issues.filter(i => !i.startsWith('Broken')).length, 0),
      brokenLinks: brokenLinks.length,
      staleFrameworks: staleFrameworks.length,
      missingMarkers: missingMarkers.length
    },
    markers,
    staleFrameworks,
    brokenLinks,
    missingMarkers
  };
}

// ── Entry ───────────────────────────────
function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log('Usage: node operations/scripts/generators/governance/map/generate-governance-map.js [--write|--check|--json]');
    console.log('');
    console.log('  --check   Validate markers and links, exit 0 if clean (default)');
    console.log('  --write   Write JSON report to workspace/reports/repo-ops/');
    console.log('  --json    Print JSON to stdout');
    return 0;
  }

  const report = generateMap();
  const hasIssues = report.summary.brokenLinks > 0
    || report.summary.staleFrameworks > 0
    || report.summary.missingMarkers > 0;

  if (args.mode === 'json') {
    console.log(JSON.stringify(report, null, 2));
    return hasIssues ? 1 : 0;
  }

  if (args.mode === 'write') {
    const dir = path.dirname(REPORT_PATH);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2) + '\n');
    console.log(`Governance map written to ${path.relative(REPO_ROOT, REPORT_PATH)}`);
    console.log(`  Markers: ${report.summary.totalMarkers}`);
    console.log(`  Broken links: ${report.summary.brokenLinks}`);
    console.log(`  Stale frameworks: ${report.summary.staleFrameworks}`);
    console.log(`  Missing markers: ${report.summary.missingMarkers}`);
    return hasIssues ? 1 : 0;
  }

  // Default: --check
  console.log(`Governance Map Check`);
  console.log(`────────────────────`);
  console.log(`Markers found: ${report.summary.totalMarkers}`);

  if (report.missingMarkers.length > 0) {
    console.log(`\nMissing GOVERNANCE.md (${report.missingMarkers.length}):`);
    report.missingMarkers.forEach(f => console.log(`  ✗ ${f}/`));
  }

  if (report.brokenLinks.length > 0) {
    console.log(`\nBroken links (${report.brokenLinks.length}):`);
    report.brokenLinks.forEach(l => console.log(`  ✗ ${l.marker}/GOVERNANCE.md → ${l.href}`));
  }

  if (report.staleFrameworks.length > 0) {
    console.log(`\nStale frameworks (${report.staleFrameworks.length}):`);
    report.staleFrameworks.forEach(f => {
      const age = f.lastVerified ? `${f.daysSinceVerified} days since ${f.lastVerified}` : 'no lastVerified field';
      console.log(`  ⚠ ${f.path} (${age})`);
    });
  }

  if (!hasIssues) {
    console.log(`\n✓ All markers present, all links valid, all frameworks current.`);
  }

  return hasIssues ? 1 : 0;
}

process.exit(main());
