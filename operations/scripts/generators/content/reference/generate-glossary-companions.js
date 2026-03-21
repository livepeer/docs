#!/usr/bin/env node
/**
 * @script      generate-glossary-companions
 * @type        generator
 * @concern     content
 * @niche       reference
 * @purpose     tooling:dev-tools
 * @description Companion JSON generator — extracts SearchTable itemsList data from glossary MDX pages
 *              and writes adjacent [page-slug]-data.json files for crawler/AI agent indexing.
 *              Satisfies the @aiDiscoverability tier-2 mechanism on all glossary pages.
 * @mode        generate
 * @pipeline    CI: generate-ai-companions.yml (push→main), check-ai-companions.yml (PR gate) | manual
 * @scope       tools/scripts
 * @usage       node tools/scripts/generators/content/reference/generate-glossary-companions.js [--dry-run] [--check]
 * @flags
 *   --dry-run   Print what would be written without writing any files
 *   --check     Verify all expected companion JSONs exist and are up-to-date; exit 1 if any are missing or stale
 * @policy      E-C6, F-C1
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
const DRY_RUN = process.argv.includes('--dry-run');
const CHECK_MODE = process.argv.includes('--check');
const VERBOSE = process.argv.includes('--verbose');

// Marker that signals a page has a tier-2 companion requirement
const DISCOVERABILITY_MARKER = '@aiDiscoverability tier-2';

// --- File discovery ----------------------------------------------------------

/**
 * Recursively find all .mdx files under a directory,
 * skipping _workspace, x-archived, x-deprecated, node_modules.
 */
function findMdxFiles(dir) {
  const skipDirs = new Set(['_workspace', 'x-archived', 'x-deprecated', 'node_modules', '.git']);
  const results = [];

  function walk(current) {
    let entries;
    try {
      entries = fs.readdirSync(current, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (!skipDirs.has(entry.name)) walk(path.join(current, entry.name));
      } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
        results.push(path.join(current, entry.name));
      }
    }
  }

  walk(dir);
  return results;
}

// --- MDX parsing -------------------------------------------------------------

/**
 * Extract the SearchTable itemsList array from MDX file content.
 * Supports multi-line arrays. Returns the raw JS array string or null.
 */
function extractItemsList(content) {
  // Find the start of itemsList={[
  const startMarker = 'itemsList={[';
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) return null;

  // Walk from the opening [ to find the matching ]
  let depth = 0;
  let i = startIdx + startMarker.length - 1; // position of first [
  const start = i;

  while (i < content.length) {
    const ch = content[i];
    if (ch === '[') depth++;
    else if (ch === ']') {
      depth--;
      if (depth === 0) {
        // Found the matching ]. Extract content between outer brackets.
        return content.slice(start + 1, i);
      }
    } else if (ch === '"') {
      // Skip string contents to avoid counting brackets inside strings
      i++;
      while (i < content.length) {
        if (content[i] === '\\') {
          i += 2; // skip escaped char
          continue;
        }
        if (content[i] === '"') break;
        i++;
      }
    } else if (content[i] === "'") {
      // Skip single-quoted string contents
      i++;
      while (i < content.length) {
        if (content[i] === '\\') {
          i += 2;
          continue;
        }
        if (content[i] === "'") break;
        i++;
      }
    } else if (ch === '{') {
      // Skip template literals or inner objects (counted by depth already if [ ])
    }
    i++;
  }

  return null;
}

/**
 * Parse a JS object-literal array string into a JS array.
 * Uses Function constructor to safely evaluate without global scope pollution.
 */
function parseItemsArray(arrayStr) {
  try {
    // eslint-disable-next-line no-new-func
    return new Function(`"use strict"; return [${arrayStr}]`)();
  } catch (err) {
    return null;
  }
}

// --- Normalization -----------------------------------------------------------

/**
 * Derive tags from a Category string like "livepeer:role" → ["livepeer", "role"].
 * Also handles "livepeer:product, web3:token" multi-value strings.
 */
function tagsFromCategory(category) {
  if (!category) return [];
  return category
    .split(',')
    .map((s) => s.trim())
    .flatMap((s) => s.split(':'))
    .filter(Boolean);
}

/**
 * Normalise a raw itemsList item to companion JSON term format.
 */
function normalizeItem(item) {
  const term = item.Term || item.term || '';
  const definition = item.Definition || item.definition || '';
  const category = item.Category || item.category || '';

  // Tabs field is present only on the consolidated glossary
  const rawTabs = item.Tabs || item.tabs || '';
  const tabs = rawTabs
    ? rawTabs
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)
    : [];

  const tags = tagsFromCategory(category);

  const result = { term, definition, category };
  if (tabs.length > 0) result.tabs = tabs;
  if (tags.length > 0) result.tags = tags;

  return result;
}

// --- Companion path ----------------------------------------------------------

/**
 * Derive the companion JSON path for a given MDX file.
 * Convention: [page-slug]-data.json adjacent to the MDX file.
 * e.g. v2/home/resources/compendium/glossary.mdx → …/glossary-data.json
 */
function companionPath(mdxPath) {
  const dir = path.dirname(mdxPath);
  const slug = path.basename(mdxPath, '.mdx');
  return path.join(dir, `${slug}-data.json`);
}

// --- Staleness check ---------------------------------------------------------

/**
 * Return true if the existing companion JSON matches the freshly-generated one.
 */
function isUpToDate(existingPath, newContent) {
  if (!fs.existsSync(existingPath)) return false;
  try {
    const existing = fs.readFileSync(existingPath, 'utf8');
    // Normalize whitespace for comparison
    return JSON.stringify(JSON.parse(existing)) === JSON.stringify(JSON.parse(newContent));
  } catch {
    return false;
  }
}

// --- Main --------------------------------------------------------------------

function main() {
  const v2Dir = path.join(REPO_ROOT, 'v2');
  const allMdx = findMdxFiles(v2Dir);

  const tier2Files = allMdx.filter((f) => {
    const content = fs.readFileSync(f, 'utf8');
    return content.includes(DISCOVERABILITY_MARKER);
  });

  if (tier2Files.length === 0) {
    console.log('No tier-2 @aiDiscoverability pages found.');
    process.exit(0);
  }

  console.log(`Found ${tier2Files.length} tier-2 page(s).\n`);

  let written = 0;
  let skipped = 0;
  let errors = 0;
  let missing = 0;

  for (const mdxFile of tier2Files) {
    const rel = path.relative(REPO_ROOT, mdxFile);
    const content = fs.readFileSync(mdxFile, 'utf8');

    const rawArray = extractItemsList(content);
    if (!rawArray) {
      console.warn(`  [WARN] No itemsList found in: ${rel}`);
      errors++;
      continue;
    }

    const items = parseItemsArray(rawArray);
    if (!items || !Array.isArray(items)) {
      console.warn(`  [ERROR] Failed to parse itemsList in: ${rel}`);
      errors++;
      continue;
    }

    const terms = items.map(normalizeItem).filter((t) => t.term);

    const companion = companionPath(mdxFile);
    const companionRel = path.relative(REPO_ROOT, companion);

    const output = JSON.stringify({ terms }, null, 2) + '\n';

    if (CHECK_MODE) {
      if (!isUpToDate(companion, output)) {
        console.error(`  [MISSING/STALE] ${companionRel}`);
        missing++;
      } else {
        if (VERBOSE) console.log(`  [OK] ${companionRel}`);
        skipped++;
      }
      continue;
    }

    if (DRY_RUN) {
      console.log(`  [DRY-RUN] Would write ${terms.length} terms → ${companionRel}`);
      skipped++;
      continue;
    }

    if (isUpToDate(companion, output)) {
      if (VERBOSE) console.log(`  [UP-TO-DATE] ${companionRel}`);
      skipped++;
      continue;
    }

    fs.writeFileSync(companion, output, 'utf8');
    console.log(`  [WROTE] ${terms.length} terms → ${companionRel}`);
    written++;
  }

  console.log(`\nDone. Written: ${written}  Up-to-date: ${skipped}  Errors: ${errors}`);

  if (CHECK_MODE && missing > 0) {
    console.error(`\n[FAIL] ${missing} companion JSON file(s) are missing or stale. Run generate-glossary-companions.js to fix.`);
    process.exit(1);
  }
}

main();
