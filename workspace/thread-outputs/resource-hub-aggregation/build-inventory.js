#!/usr/bin/env node
/**
 * One-shot inventory generator for the Resource HUB aggregation thread.
 * Walks every MDX file in the repo, parses frontmatter, classifies into
 * Reference / Compendium / Knowledge Hub / (Other-resource-shaped), and emits
 * a comprehensive markdown table.
 *
 * No deps. Throwaway script — lives under workspace/thread-outputs/.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../..');
const OUT = path.join(__dirname, '01-inventory.md');

const SKIP_DIRS = new Set([
  'node_modules', '.git', '.next', 'dist', 'build',
  'workspace', '_archive', 'archive', '.claude',
  '_workspace', 'archived', '.vscode', '.cursor',
]);

// Path prefixes excluded from the HUB inventory (relative to repo root)
const SKIP_PATH_PREFIXES = [
  'v2/developers1/',
  'v2/developers2/',
  'v2/internal/',
  'v2/solutions/',
  'v1/',                                  // legacy docs, replaced by v2
  'docs-guide1/',                         // working/draft copy of docs-guide
  'snippets/composables/pages/',          // composable fragments imported into canonical pages
  'snippets/templates/',                  // templates, not pages
];

// Path substring patterns that mark a file as non-canonical (scratch / deprecated / archive)
const SKIP_SUBSTRINGS = [
  '/x-resources/',
  '/x-deprecated/',
  '/_workspace/',
  '/.archive/',
  '.archived.',
  '/x-archive',
];

// Reference-shaped path tokens (used when frontmatter is missing/ambiguous)
const REF_PATH_RX = /\b(reference|references|glossary|compendium|knowledge[-_ ]?hub|faq|troubleshoot|changelog|contract[-_ ]?addresses?|parameter|api[-_ ]?reference|cli[-_ ]?(commands|reference|flags)|prometheus|hardware[-_ ]?(requirements|specs|spec)|configuration[-_ ]?flags|specifications?|whitepaper|exchanges|rpc|gpu[-_ ]?support|cli[-_ ]?http|protocol[-_ ]?parameter)\b/i;

function walk(dir, out = []) {
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
  catch { return out; }
  for (const e of entries) {
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue;
      if (e.name.startsWith('.') && e.name !== '.github') continue;
      walk(path.join(dir, e.name), out);
    } else if (e.isFile() && e.name.endsWith('.mdx')) {
      out.push(path.join(dir, e.name));
    }
  }
  return out;
}

function parseFrontmatter(src) {
  if (!src.startsWith('---')) return {};
  const end = src.indexOf('\n---', 4);
  if (end < 0) return {};
  const block = src.slice(4, end);
  const fm = {};
  // Capture top-level scalar keys (one line each, no nesting handled)
  for (const line of block.split('\n')) {
    const m = line.match(/^([a-zA-Z][a-zA-Z0-9_-]*):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2].trim();
    // Strip surrounding quotes
    val = val.replace(/^['"](.*)['"]$/, '$1');
    // Strip leading >- or | (multi-line block scalar markers)
    if (val === '>-' || val === '>' || val === '|') val = '<multi-line>';
    fm[key] = val;
  }
  return fm;
}

function classify(file, fm) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  const pt = (fm.pageType || '').toLowerCase().replace(/['"]/g, '');
  const pv = (fm.pageVariant || '').toLowerCase().replace(/['"]/g, '');
  const purpose = (fm.purpose || '').toLowerCase();

  // Hard frontmatter signals first
  if (pv === 'knowledge-hub') return 'Knowledge Hub';
  if (pv === 'compendium') return 'Compendium';
  if (pt === 'reference') return 'Reference';
  if (pt === 'changelog') return 'Reference';
  if (pt === 'glossary') return 'Compendium';
  if (pt === 'faq') return 'Compendium';
  if (pt === 'troubleshooting') return 'Reference';

  // Path-based fallback for pages missing frontmatter
  if (REF_PATH_RX.test(rel)) {
    if (/glossary|compendium|term/i.test(rel)) return 'Compendium (path)';
    if (/knowledge[-_ ]?hub|whitepaper|evaluating|orientation/i.test(rel)) return 'Knowledge Hub (path)';
    if (/changelog|reference|api|cli|contract|parameter|hardware|prometheus|spec|gpu|rpc|exchanges|troubleshoot/i.test(rel)) return 'Reference (path)';
    return 'Other-resource-shaped';
  }
  return null;
}

function classifySubgroup(rel, fm) {
  // Audience or domain — used for sub-grouping inside each category
  const aud = (fm.audience || '').toLowerCase();
  if (/orchestrator/i.test(rel) || aud.includes('orchestrator')) return 'orchestrator';
  if (/gateway/i.test(rel) || aud.includes('gateway')) return 'gateway';
  if (/delegator/i.test(rel) || aud.includes('delegator')) return 'delegator';
  if (/developer|builder/i.test(rel) || aud.includes('developer') || aud.includes('builder')) return 'developer';
  if (/solution|studio|streamplace|daydream/i.test(rel)) return 'solutions';
  if (/community/i.test(rel) || aud.includes('community')) return 'community';
  if (/about|home/i.test(rel)) return 'about';
  if (/docs-guide|documentation-guide/i.test(rel)) return 'contributor';
  return 'general';
}

function domainTag(rel, fm) {
  const text = rel + ' ' + (fm.keywords || '');
  if (/\bai\b|inference|model|comfystream|pytrickle|huggingface|byoc/i.test(text)) return 'ai';
  if (/video|transcod|stream|hls|rtmp|webrtc|whep|encoding|rendition|bitrate/i.test(text)) return 'video';
  if (/contract|protocol|staking|delegat|reward|inflation|lpt|treasury|governor|bonding|round/i.test(text)) return 'protocol';
  if (/cli|flag|prometheus|metric|hardware|gpu|rpc|exchange/i.test(text)) return 'tooling';
  if (/api|sdk/i.test(text)) return 'api-sdk';
  if (/changelog/i.test(text)) return 'changelog';
  if (/whitepaper|evaluating|history|101|orientation/i.test(text)) return 'education';
  return 'general';
}

const files = walk(ROOT);
const rows = [];
for (const f of files) {
  const rel0 = path.relative(ROOT, f).replace(/\\/g, '/');
  if (SKIP_PATH_PREFIXES.some(p => rel0.startsWith(p))) continue;
  if (SKIP_SUBSTRINGS.some(s => rel0.includes(s))) continue;
  if (/\bx-[a-z]/i.test(path.basename(rel0))) continue; // x-prefixed scratch files
  if (rel0.includes('/x-')) continue; // any x- folder anywhere in path
  let src;
  try { src = fs.readFileSync(f, 'utf8'); } catch { continue; }
  const fm = parseFrontmatter(src);
  const cat = classify(f, fm);
  if (!cat) continue;
  const rel = rel0;
  rows.push({
    rel,
    title: fm.title || fm.sidebarTitle || path.basename(f, '.mdx'),
    pageType: fm.pageType || '',
    pageVariant: fm.pageVariant || '',
    audience: fm.audience || '',
    status: fm.status || '',
    lastVerified: fm.lastVerified || '',
    category: cat,
    subgroup: classifySubgroup(rel, fm),
    domain: domainTag(rel, fm),
  });
}

// Sort: category → subgroup → domain → path
const CAT_ORDER = ['Reference', 'Compendium', 'Knowledge Hub', 'Reference (path)', 'Compendium (path)', 'Knowledge Hub (path)', 'Other-resource-shaped'];
rows.sort((a, b) => {
  const ca = CAT_ORDER.indexOf(a.category), cb = CAT_ORDER.indexOf(b.category);
  if (ca !== cb) return ca - cb;
  if (a.subgroup !== b.subgroup) return a.subgroup.localeCompare(b.subgroup);
  if (a.domain !== b.domain) return a.domain.localeCompare(b.domain);
  return a.rel.localeCompare(b.rel);
});

// Duplicate detection — group by normalised slug (basename minus extension, lowercased, hyphenated)
function normSlug(rel) {
  const base = path.basename(rel, '.mdx').toLowerCase();
  // Normalise common variants
  return base
    .replace(/[_\s]+/g, '-')
    .replace(/-data$/, '')
    .replace(/^x-/, '');
}
function normTitle(t) {
  return (t || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
const slugBuckets = new Map();
const titleBuckets = new Map();
for (const r of rows) {
  const slug = normSlug(r.rel);
  if (!slugBuckets.has(slug)) slugBuckets.set(slug, []);
  slugBuckets.get(slug).push(r);
  const tn = normTitle(r.title);
  if (tn) {
    if (!titleBuckets.has(tn)) titleBuckets.set(tn, []);
    titleBuckets.get(tn).push(r);
  }
}
// Consolidation candidates: same slug across 2+ different paths, OR same title across 2+ different paths
const dupesBySlug = [...slugBuckets.entries()].filter(([_, v]) => v.length > 1).sort((a,b) => b[1].length - a[1].length);
const dupesByTitle = [...titleBuckets.entries()].filter(([_, v]) => v.length > 1).sort((a,b) => b[1].length - a[1].length);

// Build summary counts
const byCat = {};
const bySubgroup = {};
const byDomain = {};
for (const r of rows) {
  byCat[r.category] = (byCat[r.category] || 0) + 1;
  const k = r.category + ' / ' + r.subgroup;
  bySubgroup[k] = (bySubgroup[k] || 0) + 1;
  const d = r.category + ' / ' + r.domain;
  byDomain[d] = (byDomain[d] || 0) + 1;
}

const lines = [];
lines.push('# Resource HUB — Comprehensive Inventory');
lines.push('');
lines.push(`Generated: ${new Date().toISOString().slice(0,10)} from \`build-inventory.js\``);
lines.push(`Total candidate pages: **${rows.length}**`);
lines.push('');
lines.push('## Classification rules');
lines.push('');
lines.push('- **Reference** — `pageType: reference` OR `pageType: changelog` OR `pageType: troubleshooting`');
lines.push('- **Compendium** — `pageVariant: compendium` OR `pageType: glossary` OR `pageType: faq`');
lines.push('- **Knowledge Hub** — `pageVariant: knowledge-hub`');
lines.push('- **(path)** suffix — frontmatter missing or ambiguous; classification inferred from path tokens');
lines.push('- **Other-resource-shaped** — path looks reference-ish but neither frontmatter nor path tokens were decisive; needs human review');
lines.push('');
lines.push('## Summary');
lines.push('');
lines.push('### By category');
lines.push('| Category | Count |');
lines.push('|---|---:|');
for (const c of CAT_ORDER) if (byCat[c]) lines.push(`| ${c} | ${byCat[c]} |`);
lines.push('');
lines.push('### By category × audience subgroup');
lines.push('| Category / Subgroup | Count |');
lines.push('|---|---:|');
for (const [k, v] of Object.entries(bySubgroup).sort()) lines.push(`| ${k} | ${v} |`);
lines.push('');
lines.push('### By category × domain');
lines.push('| Category / Domain | Count |');
lines.push('|---|---:|');
for (const [k, v] of Object.entries(byDomain).sort()) lines.push(`| ${k} | ${v} |`);
lines.push('');

// Consolidation candidates section
lines.push('## Consolidation candidates (duplicates & near-duplicates)');
lines.push('');
lines.push('Same-slug across multiple paths — strong consolidation candidates.');
lines.push('');
lines.push(`Total slug clusters with 2+ paths: **${dupesBySlug.length}**`);
lines.push('');
lines.push('| Slug | Copies | Paths | Categories |');
lines.push('|---|---:|---|---|');
for (const [slug, group] of dupesBySlug) {
  const paths = group.map(g => '`' + g.rel + '`').join('<br/>');
  const cats = [...new Set(group.map(g => g.category))].join(', ');
  lines.push(`| **${slug}** | ${group.length} | ${paths} | ${cats} |`);
}
lines.push('');
lines.push('Same-title across multiple paths (different slugs but identical titles).');
lines.push('');
const titleOnlyDupes = dupesByTitle.filter(([t, g]) => {
  const slugs = new Set(g.map(r => normSlug(r.rel)));
  return slugs.size > 1; // only show ones not already captured by slug duplication
});
lines.push(`Total title clusters not already covered by slug: **${titleOnlyDupes.length}**`);
lines.push('');
if (titleOnlyDupes.length) {
  lines.push('| Title | Copies | Paths | Categories |');
  lines.push('|---|---:|---|---|');
  for (const [tn, group] of titleOnlyDupes) {
    const paths = group.map(g => '`' + g.rel + '`').join('<br/>');
    const cats = [...new Set(group.map(g => g.category))].join(', ');
    lines.push(`| **${group[0].title}** | ${group.length} | ${paths} | ${cats} |`);
  }
  lines.push('');
}

// Detailed rows grouped by category
const grouped = {};
for (const r of rows) {
  if (!grouped[r.category]) grouped[r.category] = [];
  grouped[r.category].push(r);
}
for (const c of CAT_ORDER) {
  const group = grouped[c];
  if (!group) continue;
  lines.push(`## ${c} (${group.length})`);
  lines.push('');
  lines.push('| Path | Title | pageType | pageVariant | Subgroup | Domain | Status |');
  lines.push('|---|---|---|---|---|---|---|');
  for (const r of group) {
    const path = '`' + r.rel + '`';
    const title = (r.title || '').replace(/\|/g, '\\|').slice(0, 60);
    lines.push(`| ${path} | ${title} | ${r.pageType} | ${r.pageVariant} | ${r.subgroup} | ${r.domain} | ${r.status} |`);
  }
  lines.push('');
}

fs.writeFileSync(OUT, lines.join('\n'));
console.log(`Wrote ${OUT}`);
console.log(`Rows: ${rows.length}`);
console.log('By category:', byCat);
