#!/usr/bin/env node
/**
 * @script      audit-glossary-gaps
 * @type        audit
 * @concern     content
 * @niche       reference
 * @purpose     tooling:dev-tools
 * @description Glossary gap auditor — scans v2 MDX pages for terminology candidates not
 *              yet present in any glossary companion JSON, and emits a gap report for
 *              human review. Does NOT write definitions. Flags gaps only.
 *              Builds on generate-glossary-companions.js — reads existing companion JSONs
 *              as the known-term baseline.
 * @mode        audit
 * @pipeline    manual | post-PR | cron
 * @scope       tools/scripts
 * @usage       node tools/scripts/audits/content/reference/audit-glossary-gaps.js [flags]
 * @flags
 *   --output <path>   Write JSON report to file (default: workspace/reports/_local/glossary-gap-report.json)
 *   --md              Also write a markdown summary (glossary-gap-report.md in same dir)
 *   --min-count <n>   Minimum occurrences before flagging a candidate (default: 2)
 *   --verbose         Print candidates to stdout as they are found
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

// Parse flags
const args = process.argv.slice(2);
const outputFlagIdx = args.indexOf('--output');
const minCountFlagIdx = args.indexOf('--min-count');

const OUTPUT_PATH = outputFlagIdx !== -1
  ? path.resolve(args[outputFlagIdx + 1])
  : path.join(REPO_ROOT, 'workspace', 'reports', '_local', 'glossary-gap-report.json');
const WRITE_MD = args.includes('--md');
const VERBOSE = args.includes('--verbose');
const MIN_COUNT = minCountFlagIdx !== -1 ? parseInt(args[minCountFlagIdx + 1], 10) : 2;

const SKIP_DIRS = new Set(['_workspace', 'x-archived', 'x-deprecated', 'node_modules', '.git']);
// Skip localization copies and internal non-user-facing folders
const SKIP_LOCALE_PREFIXES = ['v2/cn', 'v2/es', 'v2/fr', 'v2/internal'];

// --- Known-term baseline: load all companion JSONs ---------------------------

function loadKnownTerms() {
  const v2Dir = path.join(REPO_ROOT, 'v2');
  const known = new Set();

  function walk(dir) {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch { return; }

    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (!SKIP_DIRS.has(entry.name)) walk(path.join(dir, entry.name));
      } else if (entry.isFile() && entry.name.endsWith('-data.json')) {
        try {
          const raw = JSON.parse(fs.readFileSync(path.join(dir, entry.name), 'utf8'));
          if (Array.isArray(raw.terms)) {
            for (const t of raw.terms) {
              if (t.term) known.add(normaliseKey(t.term));
            }
          }
        } catch { /* malformed companion — skip */ }
      }
    }
  }

  walk(v2Dir);
  return known;
}

function normaliseKey(term) {
  // Lowercase + strip parenthetical acronym expansions for matching
  return term.replace(/\s*\(.*?\)/g, '').trim().toLowerCase();
}

// --- MDX scanning -----------------------------------------------------------

/**
 * Term patterns to detect candidates in MDX prose.
 * Ordered from most-specific to least-specific.
 * Each produces { term, type } matches.
 */
const TERM_PATTERNS = [
  // Acronyms: 2-5 uppercase letters (standalone, not inside code spans)
  { re: /\b([A-Z]{2,5})\b/g, type: 'acronym' },
  // CamelCase (at least two capitalised words fused)
  { re: /\b([A-Z][a-z]+(?:[A-Z][a-z]+)+)\b/g, type: 'camelcase' },
  // Livepeer-capitalised terms: word starting with uppercase that isn't sentence-start
  // (must follow a lowercase letter, space, or be inside backticks)
  { re: /`([A-Z][a-zA-Z]+(?:\s[A-Z][a-zA-Z]+)*)`/g, type: 'code-term' },
  // Hyphenated technical terms: word-word
  { re: /\b([a-z]+-[a-z]+(?:-[a-z]+)?)\b/g, type: 'hyphenated' },
];

// Terms to skip — too generic or markdown/MDX syntax artefacts
const STOPWORDS = new Set([
  'the', 'and', 'for', 'are', 'that', 'this', 'with', 'from', 'have', 'been',
  'not', 'but', 'what', 'how', 'when', 'where', 'who', 'why', 'can', 'will',
  'all', 'any', 'each', 'more', 'also', 'its', 'into', 'your', 'you', 'our',
  'they', 'their', 'then', 'than', 'use', 'used', 'using', 'see', 'set', 'get',
  // MDX / markdown artefacts
  'import', 'export', 'const', 'props', 'return', 'true', 'false', 'null',
  'jsx', 'mdx', 'html', 'css', 'api', 'url', 'uri', 'http', 'https', 'id', 'ids',
  // Too-generic two-letter acronyms
  'ai', 'ml', 'ui', 'ux', 'io', 'ip', 'os', 'db', 'vm', 'ci', 'cd', 'pr',
  // Common doc prose
  'note', 'tip', 'info', 'warn', 'todo', 'tbd', 'coming', 'soon',
  'pre', 'post', 'sub', 'non', 'co', 'de', 'up', 'out', 'in', 'on',
  // Mintlify / MDX component names — not glossary terms
  'accordion', 'accordiongroup', 'cardgroup', 'codegroup', 'callout', 'tooltip',
  'tablerow', 'tablecell', 'tableheader', 'tabletd', 'tableth',
  'customdivider', 'styledstep', 'styledsteps', 'styledtable',
  'responsefield', 'displaycard', 'linkarrow', 'borderedbox',
  'codeblocktabs', 'dynamictable', 'searchtable', 'scrollablediagram',
  'showcasecards', 'mathinline', 'markdownembed', 'coingeckoexchanges',
  'cardcarousel', 'focusablescrollregions', 'scrollbox', 'downloadbutton',
  'customcodeblock', 'centeredcontainer', 'mathblock', 'doubleiconlink',
  'customcardtitle', 'customcallout', 'styledcard', 'linkbutton',
  // Social / hosting platforms — not Livepeer glossary terms
  'github', 'gitlab', 'youtube', 'twitter', 'discord', 'telegram',
  // Navigation / path slug patterns — not glossary terms
  'run-a-gateway', 'run-an-orchestrator', 'api-reference', 'component-library',
  'documentation-guide', 'docs-guide', 'livepeer-studio', 'livepeer-protocol',
  'repo-ops', 'audit-tasks-folders', 'live-video-to', 'ai-and-job',
  'get-all', 'get-started', 'roadmap-and-funding', 'config-and-optimisation',
  // Icon names (Mintlify uses hyphenated icon identifiers) — common ones
  'book-open', 'chart-line', 'circle-question', 'circle-check', 'circle-info',
  'arrow-right', 'arrow-left', 'check-circle', 'caret-right', 'caret-down',
]);

/**
 * Strip frontmatter and MDX comment blocks from file content before scanning.
 */
function stripNonProse(content) {
  // Remove frontmatter
  let text = content.replace(/^---[\s\S]*?---\n/, '');
  // Remove MDX block comments {/* ... */}
  text = text.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  // Remove JSX expression blocks
  text = text.replace(/\{[^}]+\}/g, '');
  // Remove import/export lines
  text = text.replace(/^(import|export)\s+.+$/gm, '');
  // Remove code blocks
  text = text.replace(/```[\s\S]*?```/g, '');
  // Remove inline code
  text = text.replace(/`[^`]+`/g, '');
  // Remove JSX attribute values — these are prop strings like icon="book-open", href="/v2/..."
  // They contain path slugs and icon names that are not prose terminology
  text = text.replace(/\b\w+=["'][^"']*["']/g, '');
  // Remove bare URL-path-like strings (slash-prefixed paths that ended up in prose)
  text = text.replace(/\/v2\/[a-z0-9/_-]+/g, '');
  return text;
}

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
 * Scan a single MDX file and return candidate terms with occurrence counts.
 * Returns Map<term, { count, type, pages: Set<string> }>
 */
function scanFile(filePath, relPath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const prose = stripNonProse(content);
  const found = new Map();

  for (const { re, type } of TERM_PATTERNS) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(prose)) !== null) {
      const term = m[1];
      if (!term || term.length < 2) continue;
      const key = normaliseKey(term);
      if (STOPWORDS.has(key) || STOPWORDS.has(term.toLowerCase())) continue;
      if (key.length < 2) continue;

      if (!found.has(key)) {
        found.set(key, { displayTerm: term, count: 0, type, pages: new Set() });
      }
      const entry = found.get(key);
      entry.count++;
      entry.pages.add(relPath);
    }
  }

  return found;
}

// --- Main -------------------------------------------------------------------

function main() {
  console.log('Loading known terms from companion JSONs...');
  const knownTerms = loadKnownTerms();
  console.log(`  Known: ${knownTerms.size} terms\n`);

  const v2Dir = path.join(REPO_ROOT, 'v2');
  const allMdx = findMdxFiles(v2Dir).filter((f) => {
    const rel = path.relative(REPO_ROOT, f);
    return !SKIP_LOCALE_PREFIXES.some((prefix) => rel.startsWith(prefix));
  });
  console.log(`Scanning ${allMdx.length} MDX files for term candidates (locale copies excluded)...\n`);

  // Global accumulator: term key → { displayTerm, count, type, pages }
  const global = new Map();

  for (const filePath of allMdx) {
    const rel = path.relative(REPO_ROOT, filePath);
    const found = scanFile(filePath, rel);
    for (const [key, entry] of found) {
      if (!global.has(key)) {
        global.set(key, { displayTerm: entry.displayTerm, count: 0, type: entry.type, pages: new Set() });
      }
      const g = global.get(key);
      g.count += entry.count;
      for (const p of entry.pages) g.pages.add(p);
    }
  }

  // Filter: candidates with count >= MIN_COUNT AND not in known terms
  const candidates = [];
  for (const [key, entry] of global) {
    if (entry.count < MIN_COUNT) continue;
    if (knownTerms.has(key)) continue;
    candidates.push({
      term: entry.displayTerm,
      key,
      count: entry.count,
      type: entry.type,
      pages: [...entry.pages].sort(),
    });
  }

  // Sort by count descending
  candidates.sort((a, b) => b.count - a.count);

  console.log(`Found ${candidates.length} gap candidates (min occurrences: ${MIN_COUNT}).\n`);

  if (VERBOSE) {
    for (const c of candidates.slice(0, 30)) {
      console.log(`  [${c.count}x] ${c.term} (${c.type}) — ${c.pages.slice(0, 2).join(', ')}`);
    }
    if (candidates.length > 30) console.log(`  ... and ${candidates.length - 30} more`);
  }

  // Build report
  const report = {
    generated: new Date().toISOString().slice(0, 10),
    knownTermCount: knownTerms.size,
    scannedFiles: allMdx.length,
    minCount: MIN_COUNT,
    gapCount: candidates.length,
    candidates,
  };

  // Ensure output directory exists
  const outDir = path.dirname(OUTPUT_PATH);
  fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(report, null, 2) + '\n', 'utf8');
  console.log(`\nJSON report written: ${path.relative(REPO_ROOT, OUTPUT_PATH)}`);

  if (WRITE_MD) {
    const mdPath = OUTPUT_PATH.replace(/\.json$/, '.md');
    const lines = [
      `# Glossary Gap Report`,
      ``,
      `Generated: ${report.generated}`,
      `Known terms: ${report.knownTermCount} | Files scanned: ${report.scannedFiles} | Min occurrences: ${report.minCount}`,
      ``,
      `**${report.gapCount} gap candidates** — terms appearing in docs but not in any glossary.`,
      ``,
      `> This is a flagging report only. No definitions are auto-written. Review candidates and add to the relevant per-tab glossary MD source files.`,
      ``,
      `## Top Candidates`,
      ``,
      `| Term | Type | Occurrences | Example Pages |`,
      `|---|---|---|---|`,
    ];
    for (const c of candidates.slice(0, 50)) {
      const examplePages = c.pages.slice(0, 2).join(', ');
      lines.push(`| \`${c.term}\` | ${c.type} | ${c.count} | ${examplePages} |`);
    }
    if (candidates.length > 50) {
      lines.push(``, `_...and ${candidates.length - 50} more — see full JSON report._`);
    }
    lines.push(``, `## Full Candidate List`, ``);
    for (const c of candidates) {
      lines.push(`- **${c.term}** (${c.type}, ${c.count}×) — ${c.pages.slice(0, 3).join(', ')}`);
    }
    fs.writeFileSync(mdPath, lines.join('\n') + '\n', 'utf8');
    console.log(`Markdown report written: ${path.relative(REPO_ROOT, mdPath)}`);
  }

  console.log(`\nReview the report and add missing terms to the appropriate per-tab glossary source files.`);
  console.log(`Regenerate companion JSONs after updating: node tools/scripts/generators/content/reference/generate-glossary-companions.js`);
}

main();
