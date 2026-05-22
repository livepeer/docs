/**
 * @script      generate-governance-map
 * @type        generator
 * @concern     governance
 * @niche       
 * @purpose     
 * @description Reads GOVERNANCE.md markers from every root folder and produces a governance map report
 * @mode        generate
 * @pipeline    manual -> GOVERNANCE.md markers, docs-guide/frameworks/*.mdx -> GOVERNANCE_MAP_LATEST.json, repo-governance-map.mdx
 * @scope       root folders, docs-guide/frameworks/, docs-guide/standards/
 * @usage       node operations/scripts/generators/governance/generate-governance-map.js [--write] [--check]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '../../../..');
const FRAMEWORKS_DIR = path.join(ROOT, 'docs-guide', 'frameworks');
const STANDARDS_DIR = path.join(ROOT, 'docs-guide', 'standards');
const OUTPUT_JSON = path.join(ROOT, 'workspace', 'reports', 'repo-ops', 'GOVERNANCE_MAP_LATEST.json');
const OUTPUT_MDX = path.join(ROOT, 'docs-guide', 'repo-ops', 'config', 'repo-governance-map.mdx');

const SKIP_DIRS = new Set(['.git', '.cache', 'node_modules']);
const STALENESS_DAYS = 90;

function getLastModified(filePath) {
  try {
    const result = execSync(`git log -1 --format="%ai" -- "${filePath}"`, { cwd: ROOT, encoding: 'utf8' }).trim();
    return result || null;
  } catch { return null; }
}

function parseGovernanceMd(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const fields = {};
    for (const line of lines) {
      const match = line.match(/^\*\*(\w[\w\s]*):\*\*\s*(.+)/);
      if (match) {
        fields[match[1].trim().toLowerCase()] = match[2].trim();
      }
    }
    return { exists: true, fields, raw: content };
  } catch { return { exists: false, fields: {}, raw: '' }; }
}

function checkFrameworkStaleness(frameworksDir) {
  const issues = [];
  try {
    const files = fs.readdirSync(frameworksDir).filter(f => f.endsWith('.mdx'));
    for (const file of files) {
      const fp = path.join(frameworksDir, file);
      const content = fs.readFileSync(fp, 'utf8');
      const match = content.match(/lastVerified:\s*(\d{4}-\d{2}-\d{2})/);
      if (match) {
        const verified = new Date(match[1]);
        const now = new Date();
        const daysSince = Math.floor((now - verified) / (1000 * 60 * 60 * 24));
        if (daysSince > STALENESS_DAYS) {
          issues.push({ file, lastVerified: match[1], daysSince, severity: 'stale' });
        }
      } else {
        issues.push({ file, lastVerified: null, daysSince: null, severity: 'missing-date' });
      }
    }
  } catch { /* dir may not exist */ }
  return issues;
}

function scanRootFolders() {
  const entries = fs.readdirSync(ROOT, { withFileTypes: true });
  const folders = entries
    .filter(e => e.isDirectory() && !SKIP_DIRS.has(e.name))
    .map(e => e.name)
    .sort();

  const results = [];
  for (const folder of folders) {
    const govPath = path.join(ROOT, folder, 'GOVERNANCE.md');
    const parsed = parseGovernanceMd(govPath);
    const lastMod = parsed.exists ? getLastModified(govPath) : null;
    results.push({
      folder,
      governed: parsed.exists,
      owner: parsed.fields.owner || null,
      framework: parsed.fields.framework || null,
      status: parsed.fields.status || null,
      lastModified: lastMod
    });
  }
  return results;
}

function countFrameworks() {
  try {
    return fs.readdirSync(FRAMEWORKS_DIR).filter(f => f.endsWith('.mdx')).length;
  } catch { return 0; }
}

function countStandards() {
  try {
    return fs.readdirSync(STANDARDS_DIR).filter(f => f.endsWith('.mdx')).length;
  } catch { return 0; }
}

function generateReport() {
  const folders = scanRootFolders();
  const stalenessIssues = checkFrameworkStaleness(FRAMEWORKS_DIR);
  const governed = folders.filter(f => f.governed);
  const ungoverned = folders.filter(f => !f.governed);

  const report = {
    generated: new Date().toISOString(),
    summary: {
      totalFolders: folders.length,
      governed: governed.length,
      ungoverned: ungoverned.length,
      coveragePercent: Math.round((governed.length / folders.length) * 100),
      frameworks: countFrameworks(),
      standards: countStandards(),
      staleFrameworks: stalenessIssues.filter(i => i.severity === 'stale').length,
      missingDates: stalenessIssues.filter(i => i.severity === 'missing-date').length
    },
    folders,
    stalenessIssues,
    ungoverned: ungoverned.map(f => f.folder)
  };

  return report;
}

function generateMdx(report) {
  const rows = report.folders.map(f => {
    const status = f.governed ? '✅' : '❌';
    const owner = f.owner || '-';
    const framework = f.framework || '-';
    return `| \`${f.folder}/\` | ${status} | ${owner} | ${framework} |`;
  }).join('\n');

  const staleRows = report.stalenessIssues.map(i => {
    return `| \`${i.file}\` | ${i.lastVerified || 'MISSING'} | ${i.daysSince ?? '-'} | ${i.severity} |`;
  }).join('\n');

  return `---
title: Governance Map
sidebarTitle: Governance Map
description: >-
  Auto-generated governance map showing which folders are governed, their frameworks,
  and staleness status. Generated by generate-governance-map.js.
consumer: [human, agent]
maintenance: generated
status: active
generator: operations/scripts/generators/governance/generate-governance-map.js
---

{/* DO NOT EDIT — Auto-generated by generate-governance-map.js */}

# Governance Map

Generated: ${report.generated}

## Coverage: ${report.summary.coveragePercent}%

| Metric | Count |
|--------|-------|
| Total root folders | ${report.summary.totalFolders} |
| Governed | ${report.summary.governed} |
| Ungoverned | ${report.summary.ungoverned} |
| Published frameworks | ${report.summary.frameworks} |
| Published standards | ${report.summary.standards} |
| Stale frameworks (>${STALENESS_DAYS} days) | ${report.summary.staleFrameworks} |

## Folder Governance Status

| Folder | Governed | Owner | Framework |
|--------|----------|-------|-----------|
${rows}

${report.stalenessIssues.length > 0 ? `## Framework Staleness

| File | Last verified | Days since | Severity |
|------|--------------|------------|----------|
${staleRows}` : '## Framework Staleness\n\nAll frameworks are current.'}

${report.ungoverned.length > 0 ? `## Ungoverned Folders\n\n${report.ungoverned.map(f => `- \`${f}/\``).join('\n')}` : '## Ungoverned Folders\n\nNone. All folders have GOVERNANCE.md markers.'}
`;
}

// --- Main ---
const args = process.argv.slice(2);
const writeMode = args.includes('--write');
const checkMode = args.includes('--check');

const report = generateReport();

if (checkMode) {
  const issues = [];
  if (report.summary.ungoverned > 0) {
    issues.push(`${report.summary.ungoverned} ungoverned folders: ${report.ungoverned.join(', ')}`);
  }
  if (report.summary.staleFrameworks > 0) {
    issues.push(`${report.summary.staleFrameworks} stale frameworks`);
  }
  if (issues.length > 0) {
    console.error('GOVERNANCE CHECK FAILED:');
    issues.forEach(i => console.error(`  - ${i}`));
    process.exit(1);
  }
  console.log(`GOVERNANCE CHECK PASSED: ${report.summary.coveragePercent}% coverage, 0 stale frameworks`);
  process.exit(0);
}

if (writeMode) {
  // Ensure output dirs exist
  const jsonDir = path.dirname(OUTPUT_JSON);
  const mdxDir = path.dirname(OUTPUT_MDX);
  if (!fs.existsSync(jsonDir)) fs.mkdirSync(jsonDir, { recursive: true });
  if (!fs.existsSync(mdxDir)) fs.mkdirSync(mdxDir, { recursive: true });

  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(report, null, 2));
  fs.writeFileSync(OUTPUT_MDX, generateMdx(report));
  console.log(`Written: ${OUTPUT_JSON}`);
  console.log(`Written: ${OUTPUT_MDX}`);
} else {
  console.log(JSON.stringify(report, null, 2));
}
