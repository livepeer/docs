#!/usr/bin/env node
/**
 * @script      audit-icon-usage
 * @type        
 * @concern     
 * @niche       
 * @purpose     tooling:dev-tools
 * @description Icon usage auditor — scans v2 and docs-guide MDX pages for icon prop
 * @mode        read-only
 * @pipeline    manual | post-PR | cron
 * @scope       operations/scripts/audits/content/reference
 * @usage       node operations/scripts/audits/content/reference/audit-icon-usage.js [flags]
 */

const fs = require('fs');
const path = require('path');

// --- Config ------------------------------------------------------------------

function getRepoRoot() {
  let dir = __dirname;
  while (dir !== path.dirname(dir)) {
    if (fs.existsSync(path.join(dir, 'docs.json')) || fs.existsSync(path.join(dir, 'mint.json'))) {
      return dir;
    }
    dir = path.dirname(dir);
  }
  throw new Error('Could not find repo root (no docs.json or mint.json found)');
}

const REPO_ROOT = getRepoRoot();

const args = process.argv.slice(2);
const outputFlagIdx = args.indexOf('--output');
const minCountFlagIdx = args.indexOf('--min-count');

const OUTPUT_PATH = outputFlagIdx !== -1
  ? path.resolve(args[outputFlagIdx + 1])
  : path.join(REPO_ROOT, 'workspace', 'reports', '_local', 'icon-usage-report.json');
const WRITE_MD = args.includes('--md');
const VERBOSE = args.includes('--verbose');
const UNMAPPED_ONLY = args.includes('--unmapped-only');
const MIN_COUNT = minCountFlagIdx !== -1 ? parseInt(args[minCountFlagIdx + 1], 10) : 1;

const SKIP_DIRS = new Set(['_workspace', 'x-archived', 'x-deprecated', 'node_modules', '.git']);
const SKIP_LOCALE_PREFIXES = ['v2/cn', 'v2/es', 'v2/fr', 'v2/internal'];

// --- Load canonical icon map -------------------------------------------------

/**
 * Extract all icon values defined in icon-map.jsx by parsing the JS exports
 * without executing the module. Splits on section boundaries and extracts
 * icon/label pairs from entries arrays.
 */
function loadMappedIcons() {
  const iconMapPath = path.join(REPO_ROOT, 'snippets', 'data', 'reference-maps', 'icon-map.jsx');
  let content;
  try {
    content = fs.readFileSync(iconMapPath, 'utf8');
  } catch {
    console.warn(`Warning: could not read icon-map.jsx at ${iconMapPath}. All icons will appear unmapped.`);
    return new Map();
  }

  const mapped = new Map(); // icon → { section, sectionTitle, label }

  // Split into top-level section objects by finding `id:` fields at the section level.
  // Each section block starts after a `{` that contains `id:`.
  // Strategy: split on lines that start a new section object (id: 'xxx' pattern).
  const sectionRe = /\{\s*\n\s*id:\s*['"]([^'"]+)['"],\s*\n\s*title:\s*['"]([^'"]+)['"]/g;
  let sectionMatch;
  const sectionBoundaries = [];

  while ((sectionMatch = sectionRe.exec(content)) !== null) {
    sectionBoundaries.push({
      start: sectionMatch.index,
      id: sectionMatch[1],
      title: sectionMatch[2],
    });
  }

  for (let i = 0; i < sectionBoundaries.length; i++) {
    const { id: sectionId, title: sectionTitle, start } = sectionBoundaries[i];
    const end = i + 1 < sectionBoundaries.length ? sectionBoundaries[i + 1].start : content.length;
    const block = content.slice(start, end);

    // Find entries array and extract icon/label pairs
    const entriesIdx = block.indexOf('entries:');
    if (entriesIdx === -1) continue;
    const entriesBlock = block.slice(entriesIdx);

    // Match icon: 'value' ... label: 'value' pairs within entry objects
    const entryRe = /icon:\s*['"]([a-zA-Z0-9_-]+)['"][^}]*?label:\s*['"]([^'"]+)['"]/g;
    let m;
    while ((m = entryRe.exec(entriesBlock)) !== null) {
      mapped.set(m[1], { section: sectionId, sectionTitle, label: m[2] });
    }
  }

  return mapped;
}

// --- MDX scanning -----------------------------------------------------------

/**
 * Find all MDX files under a directory, skipping non-publishable dirs.
 */
function findMdxFiles(dir) {
  const results = [];
  function walk(current) {
    let entries;
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (!SKIP_DIRS.has(entry.name)) walk(path.join(current, entry.name));
      } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
        results.push(path.join(current, entry.name));
      }
    }
  }
  walk(dir);
  return results;
}

/**
 * Scan a single MDX file and return all icon values used with occurrence counts.
 * Returns Map<iconName, { count, pages: Set<string> }>
 */
function scanFile(filePath, relPath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const found = new Map();

  // Match: icon="value", icon='value', icon={`value`}, icon={"value"}
  // Covers JSX attribute patterns used in Card, Accordion, Tab, etc.
  const re = /\bicon=["'{`]+([a-zA-Z0-9_-]+)["'}`]+/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const icon = m[1].trim();
    if (!icon || icon.length < 2 || icon.includes('${')) continue;

    if (!found.has(icon)) {
      found.set(icon, { count: 0, pages: new Set() });
    }
    const entry = found.get(icon);
    entry.count++;
    entry.pages.add(relPath);
  }

  return found;
}

// --- Main -------------------------------------------------------------------

function main() {
  console.log('Loading canonical icon map...');
  const mappedIcons = loadMappedIcons();
  console.log(`  Mapped: ${mappedIcons.size} icons in canonical map\n`);

  const scanDirs = [
    path.join(REPO_ROOT, 'v2'),
    path.join(REPO_ROOT, 'docs-guide'),
  ];

  let allMdx = [];
  for (const dir of scanDirs) {
    allMdx = allMdx.concat(findMdxFiles(dir));
  }

  allMdx = allMdx.filter((f) => {
    const rel = path.relative(REPO_ROOT, f);
    return !SKIP_LOCALE_PREFIXES.some((prefix) => rel.startsWith(prefix));
  });

  console.log(`Scanning ${allMdx.length} MDX files for icon usage...\n`);

  // Global accumulator
  const global = new Map();

  for (const filePath of allMdx) {
    const rel = path.relative(REPO_ROOT, filePath);
    const found = scanFile(filePath, rel);
    for (const [icon, entry] of found) {
      if (!global.has(icon)) {
        global.set(icon, { count: 0, pages: new Set() });
      }
      const g = global.get(icon);
      g.count += entry.count;
      for (const p of entry.pages) g.pages.add(p);
    }
  }

  // Build icon list with mapped/unmapped flag
  const iconList = [];
  for (const [icon, entry] of global) {
    if (entry.count < MIN_COUNT) continue;
    const mapEntry = mappedIcons.get(icon);
    iconList.push({
      icon,
      count: entry.count,
      mapped: !!mapEntry,
      section: mapEntry ? mapEntry.section : null,
      sectionTitle: mapEntry ? mapEntry.sectionTitle : null,
      label: mapEntry ? mapEntry.label : null,
      pageCount: entry.pages.size,
      topPages: [...entry.pages].sort().slice(0, 3),
    });
  }

  // Sort by count descending
  iconList.sort((a, b) => b.count - a.count);

  const unmapped = iconList.filter((e) => !e.mapped);
  const mapped = iconList.filter((e) => e.mapped);

  console.log(`Total unique icons: ${iconList.length}`);
  console.log(`  Mapped: ${mapped.length}`);
  console.log(`  Unmapped: ${unmapped.length}\n`);

  if (VERBOSE) {
    console.log('Top 30 unmapped icons:');
    for (const e of unmapped.slice(0, 30)) {
      console.log(`  [${e.count}x, ${e.pageCount} pages] ${e.icon}`);
    }
    if (unmapped.length > 30) console.log(`  ... and ${unmapped.length - 30} more`);
    console.log('');
  }

  // Build report
  const displayList = UNMAPPED_ONLY ? unmapped : iconList;

  const report = {
    generated: new Date().toISOString().slice(0, 10),
    scannedFiles: allMdx.length,
    canonicalMapSize: mappedIcons.size,
    minCount: MIN_COUNT,
    totalUnique: iconList.length,
    mappedCount: mapped.length,
    unmappedCount: unmapped.length,
    icons: displayList,
  };

  const outDir = path.dirname(OUTPUT_PATH);
  fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(report, null, 2) + '\n', 'utf8');
  console.log(`JSON report written: ${path.relative(REPO_ROOT, OUTPUT_PATH)}`);

  if (WRITE_MD) {
    const mdPath = OUTPUT_PATH.replace(/\.json$/, '.md');
    const lines = [
      `# Icon Usage Report`,
      ``,
      `Generated: ${report.generated}`,
      `Files scanned: ${report.scannedFiles} | Canonical map: ${report.canonicalMapSize} icons | Min count: ${report.minCount}`,
      ``,
      `**${report.totalUnique} unique icons** — ${report.mappedCount} mapped, **${report.unmappedCount} unmapped**.`,
      ``,
      `> This is a flagging report only. No files are modified. Review unmapped icons and add to the canonical map in \`snippets/data/reference-maps/icon-map.jsx\`.`,
      ``,
      `## Unmapped Icons (${unmapped.length})`,
      ``,
      `Icons used in docs but not in the canonical map.`,
      ``,
      `| Icon | Count | Pages | Example |`,
      `|---|---|---|---|`,
    ];

    for (const e of unmapped) {
      lines.push(`| \`${e.icon}\` | ${e.count} | ${e.pageCount} | ${e.topPages[0] || ''} |`);
    }

    lines.push(``, `## Mapped Icons (${mapped.length})`, ``);
    lines.push(`Icons confirmed in the canonical map.`, ``);
    lines.push(`| Icon | Count | Section | Label |`);
    lines.push(`|---|---|---|---|`);
    for (const e of mapped) {
      lines.push(`| \`${e.icon}\` | ${e.count} | ${e.sectionTitle || e.section} | ${e.label || ''} |`);
    }

    fs.writeFileSync(mdPath, lines.join('\n') + '\n', 'utf8');
    console.log(`Markdown report written: ${path.relative(REPO_ROOT, mdPath)}`);
  }

  console.log(`\nReview unmapped icons and add to: snippets/data/reference-maps/icon-map.jsx`);
  console.log(`Regenerate this report after updating the map: node operations/scripts/audits/content/reference/audit-icon-usage.js`);
}

main();
