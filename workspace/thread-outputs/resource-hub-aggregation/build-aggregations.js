#!/usr/bin/env node
/**
 * Build the 3 HUB aggregation pages:
 *   - v2/resources/faq.mdx (from 4 audience FAQs)
 *   - v2/resources/guides.mdx (from 3 audience guide indexes)
 *   - v2/resources/troubleshooting.mdx (from 2 audience troubleshooting pages)
 *
 * Aggregation = hand-organized concatenation of audience source content into
 * one canonical HUB page. Audience sources remain unchanged in their tabs.
 *
 * Per the rule: composables are for pure duplicates; aggregations are
 * hand-authored canonicals that combine content from multiple sources.
 * This script mechanically assembles content authored elsewhere — it does
 * not produce new prose. The HUB pages are the canonical aggregation.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../..');

function read(rel) { return fs.readFileSync(path.join(ROOT, rel), 'utf8'); }
function write(rel, content) {
  const abs = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content);
}

function splitMdx(src) {
  if (!src.startsWith('---')) return { frontmatter: '', body: src };
  const end = src.indexOf('\n---', 4);
  if (end < 0) return { frontmatter: '', body: src };
  return { frontmatter: src.slice(0, end + 4), body: src.slice(end + 4).replace(/^\n/, '') };
}

/**
 * Extract <Accordion ... title="X" ...> ... </Accordion> blocks from source MDX.
 * Returns array of { title, body, raw }.
 */
function extractAccordions(src) {
  const accordions = [];
  // Match each Accordion block, capturing title and inner content
  const re = /<Accordion\s+title=(?:"([^"]+)"|\{`([^`]+)`\})([^>]*)>([\s\S]*?)<\/Accordion>/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const title = m[1] || m[2] || '(untitled)';
    const attrs = m[3] || '';
    const body = m[4];
    accordions.push({ title, attrs, body, raw: m[0] });
  }
  return accordions;
}

/**
 * Extract the body content of an MDX file, removing top-level <AccordionGroup>
 * wrappers but preserving the inner Accordion content.
 */
function extractMainContent(src) {
  const { body } = splitMdx(src);
  // Strip imports
  let content = body.replace(/^import [^\n]+\n/gm, '');
  // Strip leading whitespace
  content = content.trimStart();
  return content;
}

/**
 * Extract all `import { X } from '/path'` statements from a source MDX.
 * Returns the import lines verbatim.
 */
function extractImports(src) {
  const { body } = splitMdx(src);
  const lines = body.split('\n');
  return lines.filter(l => /^import\s+/.test(l.trim())).map(l => l.trim());
}

/**
 * Merge multiple imports lists, deduping by the rendered string.
 * Normalises quote style for dedup.
 */
function mergeImports(allLists) {
  const seen = new Set();
  const out = [];
  for (const list of allLists) {
    for (const line of list) {
      const norm = line.replace(/["']/g, '"');
      if (seen.has(norm)) continue;
      seen.add(norm);
      out.push(line);
    }
  }
  return out;
}

// =============================================================
// AGGREGATION 1: HUB FAQ
// =============================================================
function buildFaq() {
  const sources = [
    { path: 'v2/about/resources/faq.mdx',                       label: 'About Livepeer',     audience: 'general' },
    { path: 'v2/community/resources/faq.mdx',                   label: 'Community',          audience: 'community' },
    { path: 'v2/gateways/resources/reference/faq.mdx',          label: 'Gateways',           audience: 'gateway' },
    { path: 'v2/orchestrators/resources/reference/faq.mdx',     label: 'Orchestrators',     audience: 'orchestrator' },
  ];

  const sections = sources.map(s => {
    const src = read(s.path);
    const accordions = extractAccordions(src);
    const imports = extractImports(src);
    return { ...s, accordions, imports };
  });
  const allImports = mergeImports(sections.map(s => s.imports));

  const totalQs = sections.reduce((sum, s) => sum + s.accordions.length, 0);

  const lines = [];
  lines.push('---');
  lines.push('title: "Livepeer FAQ"');
  lines.push('sidebarTitle: "FAQ"');
  lines.push('description: >-');
  lines.push('  Comprehensive Livepeer FAQ — every question from every audience, in one place.');
  lines.push('  Covers Livepeer protocol fundamentals, gateway and orchestrator operations, community,');
  lines.push('  and ecosystem questions. Aggregated from the audience-specific FAQs in the About,');
  lines.push('  Community, Gateways, and Orchestrators tabs.');
  lines.push('keywords:');
  lines.push('  - livepeer');
  lines.push('  - faq');
  lines.push('  - frequently asked questions');
  lines.push('  - gateway faq');
  lines.push('  - orchestrator faq');
  lines.push('  - community faq');
  lines.push('  - help');
  lines.push('pageType: reference');
  lines.push('pageVariant: compendium');
  lines.push('purpose: reference');
  lines.push('audience: everyone');
  lines.push('lifecycleStage: troubleshoot');
  lines.push('complexity: beginner');
  lines.push('status: draft');
  lines.push('lastVerified: "2026-05-19"');
  lines.push('---');
  lines.push('');
  if (allImports.length) {
    for (const imp of allImports) lines.push(imp);
    lines.push('');
  }
  lines.push('# Livepeer FAQ');
  lines.push('');
  lines.push(`This page aggregates every Livepeer FAQ across the documentation — **${totalQs} questions** drawn from the About, Community, Gateways, and Orchestrators tabs. Sources remain available in their original audience tabs for context.`);
  lines.push('');
  lines.push('## Sources');
  lines.push('');
  lines.push('| Section | Source | Audience |');
  lines.push('|---|---|---|');
  for (const s of sections) {
    lines.push(`| ${s.label} (${s.accordions.length} Qs) | [/${s.path.replace('.mdx', '')}](/${s.path.replace('.mdx', '')}) | ${s.audience} |`);
  }
  lines.push('');

  for (const s of sections) {
    if (s.accordions.length === 0) continue;
    lines.push(`## ${s.label} (${s.accordions.length} questions)`);
    lines.push('');
    lines.push('<AccordionGroup>');
    for (const a of s.accordions) {
      // Preserve the original Accordion block verbatim
      lines.push('  ' + a.raw.split('\n').join('\n  '));
    }
    lines.push('</AccordionGroup>');
    lines.push('');
  }

  return lines.join('\n');
}

// =============================================================
// AGGREGATION 2: HUB Guides
// =============================================================
function buildGuides() {
  const sources = [
    { path: 'v2/community/resources/guides.mdx',                       label: 'Community guides',           audience: 'community' },
    { path: 'v2/gateways/resources/knowledge-hub/guides.mdx',          label: 'Gateway guides',              audience: 'gateway' },
    { path: 'v2/orchestrators/resources/knowledge-hub/community-guides.mdx', label: 'Orchestrator guides',  audience: 'orchestrator' },
  ];
  const allImports = mergeImports(sources.map(s => extractImports(read(s.path))));

  const lines = [];
  lines.push('---');
  lines.push('title: "Livepeer Guides Index"');
  lines.push('sidebarTitle: "Guides"');
  lines.push('description: >-');
  lines.push('  Curated index of every guide across the Livepeer documentation — community walkthroughs,');
  lines.push('  gateway operator guides, and orchestrator pool tutorials. Aggregated from each audience');
  lines.push('  tab into a single browsable HUB index.');
  lines.push('keywords:');
  lines.push('  - livepeer');
  lines.push('  - guides');
  lines.push('  - tutorials');
  lines.push('  - community');
  lines.push('  - gateway guides');
  lines.push('  - orchestrator guides');
  lines.push('pageType: reference');
  lines.push('pageVariant: compendium');
  lines.push('purpose: orient');
  lines.push('audience: everyone');
  lines.push('lifecycleStage: discover');
  lines.push('complexity: beginner');
  lines.push('status: draft');
  lines.push('lastVerified: "2026-05-19"');
  lines.push('---');
  lines.push('');
  if (allImports.length) {
    for (const imp of allImports) lines.push(imp);
    lines.push('');
  }
  lines.push('# Livepeer Guides Index');
  lines.push('');
  lines.push('This page is the canonical index of every guide across the documentation. Each section below mirrors a guide collection maintained in an audience-specific tab; the source page remains available there with full audience context.');
  lines.push('');
  lines.push('## Source collections');
  lines.push('');
  lines.push('| Collection | Source page | Audience |');
  lines.push('|---|---|---|');
  for (const s of sources) {
    lines.push(`| ${s.label} | [/${s.path.replace('.mdx', '')}](/${s.path.replace('.mdx', '')}) | ${s.audience} |`);
  }
  lines.push('');

  for (const s of sources) {
    const src = read(s.path);
    const content = extractMainContent(src);
    lines.push(`## ${s.label}`);
    lines.push('');
    lines.push(`Source: [/${s.path.replace('.mdx', '')}](/${s.path.replace('.mdx', '')})`);
    lines.push('');
    lines.push(content);
    lines.push('');
  }

  return lines.join('\n');
}

// =============================================================
// AGGREGATION 3: HUB Troubleshooting
// =============================================================
function buildTroubleshooting() {
  const sources = [
    { path: 'v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx',      label: 'Gateway troubleshooting',      audience: 'gateway' },
    { path: 'v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx', label: 'Orchestrator troubleshooting', audience: 'orchestrator' },
  ];
  const allImports = mergeImports(sources.map(s => extractImports(read(s.path))));

  const lines = [];
  lines.push('---');
  lines.push('title: "Livepeer Troubleshooting Index"');
  lines.push('sidebarTitle: "Troubleshooting"');
  lines.push('description: >-');
  lines.push('  Aggregated troubleshooting reference across gateway and orchestrator operations.');
  lines.push('  Combines audience-specific troubleshooting pages into a single browsable HUB resource.');
  lines.push('keywords:');
  lines.push('  - livepeer');
  lines.push('  - troubleshooting');
  lines.push('  - debugging');
  lines.push('  - error reference');
  lines.push('  - gateway troubleshooting');
  lines.push('  - orchestrator troubleshooting');
  lines.push('pageType: reference');
  lines.push('purpose: troubleshoot');
  lines.push('audience: everyone');
  lines.push('lifecycleStage: troubleshoot');
  lines.push('complexity: intermediate');
  lines.push('status: draft');
  lines.push('lastVerified: "2026-05-19"');
  lines.push('---');
  lines.push('');
  if (allImports.length) {
    for (const imp of allImports) lines.push(imp);
    lines.push('');
  }
  lines.push('# Livepeer Troubleshooting Index');
  lines.push('');
  lines.push('Aggregated troubleshooting reference across audience-specific operational pages. Each section is mirrored from an audience tab; the original page remains available there with full operational context.');
  lines.push('');
  lines.push('## Source pages');
  lines.push('');
  lines.push('| Section | Source page | Audience |');
  lines.push('|---|---|---|');
  for (const s of sources) {
    lines.push(`| ${s.label} | [/${s.path.replace('.mdx', '')}](/${s.path.replace('.mdx', '')}) | ${s.audience} |`);
  }
  lines.push('');

  for (const s of sources) {
    const src = read(s.path);
    const content = extractMainContent(src);
    lines.push(`## ${s.label}`);
    lines.push('');
    lines.push(`Source: [/${s.path.replace('.mdx', '')}](/${s.path.replace('.mdx', '')})`);
    lines.push('');
    lines.push(content);
    lines.push('');
  }

  return lines.join('\n');
}

// =============================================================
// EXECUTE
// =============================================================
if (require.main === module) {
  const faqContent = buildFaq();
  write('v2/resources/faq.mdx', faqContent);
  console.log(`✓ Wrote v2/resources/faq.mdx (${faqContent.length} bytes)`);

  const guidesContent = buildGuides();
  write('v2/resources/guides.mdx', guidesContent);
  console.log(`✓ Wrote v2/resources/guides.mdx (${guidesContent.length} bytes)`);

  const troubleshootingContent = buildTroubleshooting();
  write('v2/resources/troubleshooting.mdx', troubleshootingContent);
  console.log(`✓ Wrote v2/resources/troubleshooting.mdx (${troubleshootingContent.length} bytes)`);
}
