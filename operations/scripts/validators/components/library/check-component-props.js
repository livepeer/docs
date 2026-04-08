#!/usr/bin/env node
/**
 * @script      check-component-props
 * @type        validator
 * @concern     maintenance
 * @niche       library
 * @purpose     qa:repo-health
 * @description Component prop governance validator. Checks Tab/Accordion icon props, code block metadata, Card CustomCardTitle usage, inline styles, CustomDivider placement, Mermaid colour governance, and import ordering across v2 MDX pages (checks 5.18-5.20, 5.22, 5.26-5.28, 5.34).
 * @mode        check
 * @pipeline    manual
 * @scope       v2/ (all MDX files)
 * @usage       node operations/scripts/validators/components/library/check-component-props.js [--scope=full|changed] [--json] [--md] [--help]
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// --- Config -------------------------------------------------------------------

const STAGE_ID = 'component-props-audit';
const REPO_ROOT = process.cwd();
const DEFAULT_OUTPUT_DIR = 'workspace/reports/repo-ops';
const ICON_MAP_PATH = 'snippets/data/reference-maps/icon-map.jsx';
const MERMAID_COLOURS_PATH = 'snippets/components/config/MermaidColours.jsx';

// --- CLI args -----------------------------------------------------------------

function parseArgs(argv) {
  const out = { scope: 'full', outputDir: DEFAULT_OUTPUT_DIR, json: false, md: false, help: false };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--help' || token === '-h') { out.help = true; continue; }
    if (token === '--json') { out.json = true; continue; }
    if (token === '--md') { out.md = true; continue; }
    if (token === '--scope' && argv[i + 1]) { out.scope = argv[++i]; continue; }
    if (token.startsWith('--scope=')) { out.scope = token.slice('--scope='.length); continue; }
    if (token === '--output-dir' && argv[i + 1]) { out.outputDir = argv[++i]; continue; }
    if (token.startsWith('--output-dir=')) { out.outputDir = token.slice('--output-dir='.length); continue; }
  }
  if (!['changed', 'full'].includes(out.scope)) {
    console.error(`Invalid --scope: ${out.scope}`);
    process.exit(2);
  }
  return out;
}

function usage() {
  console.log(`Usage: node ${path.basename(__filename)} [--scope=full|changed] [--json] [--md] [--help]

Checks component prop governance across v2 MDX pages.

Options:
  --scope=full|changed   Scan all v2 MDX files or only git-changed files (default: full)
  --json                 Write JSON report to output dir
  --md                   Write Markdown report to output dir
  --help                 Show this help
`);
}

// --- File walking (reused from component-layout-governance.js) ----------------

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function shouldExclude(relPath) {
  const rel = toPosix(relPath);
  if (!rel.startsWith('v2/')) return true;
  if (!/\.mdx$/i.test(rel)) return true;
  if (rel.startsWith('v2/es/') || rel.startsWith('v2/fr/') || rel.startsWith('v2/cn/')) return true;
  if (rel.startsWith('v2/internal/')) return true;
  if (rel.includes('/x-')) return true;
  if (rel.includes('/_contextData_/') || rel.includes('/_context_data_/')) return true;
  if (rel.includes('/_tests-to-delete/') || rel.includes('/_move_me/')) return true;
  if (rel.includes('/_workspace/')) return true;
  if (rel.endsWith('todo.mdx') || rel.endsWith('NOTES_V2.md')) return true;
  return false;
}

function walkFiles(dirPath, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relPath = toPosix(path.relative(REPO_ROOT, fullPath));
    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      walkFiles(fullPath, out);
      continue;
    }
    if (shouldExclude(relPath)) continue;
    out.push({ absPath: fullPath, relPath });
  }
  return out;
}

function getChangedFiles() {
  try {
    const output = execSync('git diff --name-only --diff-filter=ACMR HEAD', { cwd: REPO_ROOT, encoding: 'utf8' });
    return output.split('\n').map((l) => toPosix(l.trim())).filter(Boolean).filter((l) => !shouldExclude(l))
      .map((l) => ({ relPath: l, absPath: path.join(REPO_ROOT, l) }));
  } catch (_e) { return []; }
}

// --- Issue collection ---------------------------------------------------------

function addIssue(issues, issue) {
  issues.push({
    id: issue.id,
    check: issue.check || '',
    title: issue.title,
    severity: issue.severity,
    evidence: issue.evidence,
    recommendation: issue.recommendation,
    path: issue.path || '',
    line: Number.isFinite(Number(issue.line)) ? Number(issue.line) : 0
  });
}

function summarize(issues) {
  const s = { critical: 0, high: 0, medium: 0, low: 0, info: 0, total: issues.length };
  for (const issue of issues) {
    if (Object.prototype.hasOwnProperty.call(s, issue.severity)) s[issue.severity] += 1;
  }
  return s;
}

// --- Content helpers ----------------------------------------------------------

function getLineNumber(content, charIndex) {
  let line = 1;
  for (let i = 0; i < charIndex && i < content.length; i += 1) {
    if (content[i] === '\n') line += 1;
  }
  return line;
}

function stripCodeBlocks(content) {
  return content.replace(/```[\s\S]*?```/g, (m) => '\n'.repeat((m.match(/\n/g) || []).length));
}

function stripJsxComments(content) {
  return content.replace(/\{\/\*[\s\S]*?\*\/\}/g, (m) => '\n'.repeat((m.match(/\n/g) || []).length));
}

function extractMermaidBlocks(content) {
  const blocks = [];
  const re = /```mermaid\n([\s\S]*?)```/g;
  let match;
  while ((match = re.exec(content)) !== null) {
    blocks.push({
      startLine: getLineNumber(content, match.index),
      content: match[1]
    });
  }
  return blocks;
}

// --- Data source loading ------------------------------------------------------

function loadMermaidGovHexes() {
  const filePath = path.join(REPO_ROOT, MERMAID_COLOURS_PATH);
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const hexes = new Set();
    const matches = content.match(/#[0-9A-Fa-f]{6}\b/g) || [];
    matches.forEach((h) => hexes.add(h.toLowerCase()));
    return hexes;
  } catch (_e) {
    return new Set();
  }
}

// --- Check implementations (exported for future remediator --verify) ----------

function checkTabIcons(content, filePath, issues) {
  const cleaned = stripCodeBlocks(stripJsxComments(content));
  const re = /<Tab\b([^>]*)>/g;
  let match;
  while ((match = re.exec(cleaned)) !== null) {
    const props = match[1];
    if (!/\bicon\s*=/.test(props)) {
      addIssue(issues, {
        id: 'prop-tab-missing-icon', check: '5.18',
        title: 'Tab missing icon prop',
        severity: 'medium', path: filePath,
        line: getLineNumber(cleaned, match.index),
        evidence: `<Tab${props.trim() ? ' ' + props.trim() : ''}> has no icon prop.`,
        recommendation: 'Add icon prop with a FontAwesome name matching the tab content. Consult icon-map.jsx.'
      });
    }
  }
}

function checkAccordionIcons(content, filePath, issues) {
  const cleaned = stripCodeBlocks(stripJsxComments(content));
  const re = /<Accordion\b([^>]*)>/g;
  let match;
  while ((match = re.exec(cleaned)) !== null) {
    const props = match[1];
    if (!/\bicon\s*=/.test(props)) {
      addIssue(issues, {
        id: 'prop-accordion-missing-icon', check: '5.19',
        title: 'Accordion missing icon prop',
        severity: 'medium', path: filePath,
        line: getLineNumber(cleaned, match.index),
        evidence: `<Accordion${props.trim() ? ' ' + props.trim() : ''}> has no icon prop.`,
        recommendation: 'Add icon prop with a FontAwesome name matching the accordion content. Consult icon-map.jsx.'
      });
    }
  }
}

function checkCodeBlockMetadata(content, filePath, issues) {
  const lines = content.split('\n');
  let inCodeBlock = false;
  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (/^```\w/.test(trimmed) && !inCodeBlock) {
      inCodeBlock = true;
      const infoString = trimmed.slice(3);
      const hasIcon = /\bicon\s*=/.test(infoString);
      const hasTitle = /\btitle\s*=/.test(infoString);
      if (!hasIcon || !hasTitle) {
        const missing = [];
        if (!hasIcon) missing.push('icon');
        if (!hasTitle) missing.push('title');
        addIssue(issues, {
          id: 'prop-code-block-missing-metadata', check: '5.20',
          title: 'Code block missing metadata',
          severity: 'medium', path: filePath,
          line: idx + 1,
          evidence: `Code fence missing: ${missing.join(', ')}. Info: \`${infoString.slice(0, 60)}\``,
          recommendation: 'Add icon="terminal|docker|code" and title="filename.sh" to every fenced code block.'
        });
      }
    } else if (/^```\s*$/.test(trimmed) && inCodeBlock) {
      inCodeBlock = false;
    }
  });
}

function checkCardCustomTitle(content, filePath, issues) {
  const cleaned = stripCodeBlocks(stripJsxComments(content));
  const re = /<Card\b([^>]*)>/g;
  let match;
  while ((match = re.exec(cleaned)) !== null) {
    const props = match[1];
    if (!/\bhref\s*=/.test(props)) continue;
    if (!/CustomCardTitle/i.test(props)) {
      addIssue(issues, {
        id: 'prop-card-missing-custom-title', check: '5.22',
        title: 'Navigation Card missing CustomCardTitle',
        severity: 'medium', path: filePath,
        line: getLineNumber(cleaned, match.index),
        evidence: 'Card with href uses plain title instead of CustomCardTitle with icon.',
        recommendation: 'Use title={<CustomCardTitle icon="..." title="..." />} for navigation cards.'
      });
    }
  }
}

function checkInlineStyles(content, filePath, issues) {
  const cleaned = stripCodeBlocks(stripJsxComments(content));
  const styleRe = /style\s*=\s*\{\{/g;
  let match;
  while ((match = styleRe.exec(cleaned)) !== null) {
    addIssue(issues, {
      id: 'prop-inline-style', check: '5.34',
      title: 'Inline style in MDX content',
      severity: 'medium', path: filePath,
      line: getLineNumber(cleaned, match.index),
      evidence: 'Found style={{...}} in MDX page content.',
      recommendation: 'Use CSS custom properties (var(--accent), var(--text)) or solve in a component primitive.'
    });
  }

  const hexRe = /#[0-9A-Fa-f]{6}\b/g;
  const noMermaid = cleaned.replace(/```mermaid[\s\S]*?```/g, '');
  let hexMatch;
  while ((hexMatch = hexRe.exec(noMermaid)) !== null) {
    addIssue(issues, {
      id: 'prop-hardcoded-hex', check: '5.34',
      title: 'Hardcoded hex colour in MDX content',
      severity: 'medium', path: filePath,
      line: getLineNumber(noMermaid, hexMatch.index),
      evidence: `Found hardcoded hex ${hexMatch[0]}. Use CSS custom properties instead.`,
      recommendation: 'Replace with var(--accent), var(--text), or other CSS custom properties.'
    });
  }
}

function checkCustomDividerPlacement(content, filePath, issues) {
  const cleaned = stripCodeBlocks(stripJsxComments(content));
  const lines = cleaned.split('\n');

  // Track frontmatter boundaries (two --- markers)
  let fmDashCount = 0;
  let pastFrontmatter = false;
  let foundFirstDivider = false;
  let firstH2Line = -1;
  let hasRelatedPages = false;
  let relatedPagesLine = -1;
  let lastDividerLine = -1;

  for (let i = 0; i < lines.length; i += 1) {
    const trimmed = lines[i].trim();

    // Track frontmatter: first --- opens, second --- closes
    if (trimmed === '---' && fmDashCount < 2) {
      fmDashCount += 1;
      if (fmDashCount === 2) pastFrontmatter = true;
      continue;
    }

    // Skip lines inside frontmatter
    if (!pastFrontmatter) continue;

    // Skip import lines and empty lines
    if (/^import\b/.test(trimmed) || /^"import\b/.test(trimmed)) continue;
    if (!trimmed) continue;

    // First non-empty, non-import line after frontmatter/imports
    if (!foundFirstDivider) {
      if (/^<CustomDivider/.test(trimmed)) {
        foundFirstDivider = true;
        lastDividerLine = i + 1;
        continue;
      }
      // First content element is not a CustomDivider
      addIssue(issues, {
        id: 'prop-divider-missing-opening', check: '5.26',
        title: 'Missing opening CustomDivider',
        severity: 'high', path: filePath, line: i + 1,
        evidence: `First content element is not <CustomDivider>. Found: ${trimmed.slice(0, 50)}`,
        recommendation: 'Add <CustomDivider /> as the first visual element after imports.'
      });
      foundFirstDivider = true;
    }

    if (/^## /.test(trimmed) && firstH2Line === -1) {
      firstH2Line = i + 1;
    }

    if (/^<CustomDivider/.test(trimmed)) {
      lastDividerLine = i + 1;
    }

    if (/^##\s+(related|related\s+pages)/i.test(trimmed)) {
      hasRelatedPages = true;
      relatedPagesLine = i + 1;
    }
  }

  if (hasRelatedPages && relatedPagesLine > 0) {
    let dividerBeforeRelated = false;
    for (let j = relatedPagesLine - 2; j >= Math.max(0, relatedPagesLine - 5); j -= 1) {
      if (/^<CustomDivider/.test(lines[j].trim())) { dividerBeforeRelated = true; break; }
    }
    if (!dividerBeforeRelated) {
      addIssue(issues, {
        id: 'prop-divider-missing-before-related', check: '5.26',
        title: 'Missing CustomDivider before Related Pages',
        severity: 'high', path: filePath, line: relatedPagesLine,
        evidence: 'No CustomDivider found in the 4 lines before Related Pages heading.',
        recommendation: 'Add <CustomDivider /> before the Related Pages section.'
      });
    }
  }
}

function checkMermaidColours(content, filePath, issues, governedHexes) {
  const blocks = extractMermaidBlocks(content);
  blocks.forEach((block) => {
    const hexes = block.content.match(/#[0-9A-Fa-f]{6}\b/g) || [];
    hexes.forEach((hex) => {
      if (!governedHexes.has(hex.toLowerCase())) {
        addIssue(issues, {
          id: 'prop-mermaid-ungoverned-colour', check: '5.27',
          title: 'Mermaid diagram uses ungoverned colour',
          severity: 'medium', path: filePath, line: block.startLine,
          evidence: `Hex ${hex} not found in MermaidColours.jsx governed palette.`,
          recommendation: 'Use colours from snippets/components/config/MermaidColours.jsx only.'
        });
      }
    });
  });
}

function checkImportOrdering(content, filePath, issues) {
  const lines = content.split('\n');
  const importHeaders = [];
  const expectedOrder = ['COMPONENT IMPORTS', 'DATA IMPORTS', 'MDX PAGE IMPORTS', 'MDX COMPOSABLE IMPORTS'];

  lines.forEach((line, idx) => {
    const match = line.match(/\{\/\*\s*(COMPONENT IMPORTS|DATA IMPORTS|MDX PAGE IMPORTS|MDX COMPOSABLE IMPORTS)/);
    if (match) importHeaders.push({ header: match[1], line: idx + 1 });
  });

  if (importHeaders.length >= 2) {
    for (let i = 1; i < importHeaders.length; i += 1) {
      const prevIdx = expectedOrder.indexOf(importHeaders[i - 1].header);
      const currIdx = expectedOrder.indexOf(importHeaders[i].header);
      if (prevIdx >= 0 && currIdx >= 0 && prevIdx > currIdx) {
        addIssue(issues, {
          id: 'prop-import-ordering', check: '5.28',
          title: 'Import sections out of canonical order',
          severity: 'low', path: filePath, line: importHeaders[i].line,
          evidence: `${importHeaders[i].header} appears after ${importHeaders[i - 1].header}. Expected: components, data, pages, composables.`,
          recommendation: 'Reorder import sections: COMPONENT IMPORTS, DATA IMPORTS, MDX PAGE IMPORTS, MDX COMPOSABLE IMPORTS.'
        });
      }
    }
  }
}

// --- Main analysis ------------------------------------------------------------

function analyzeFile(issues, file, governedHexes) {
  const content = fs.readFileSync(file.absPath, 'utf8');

  checkTabIcons(content, file.relPath, issues);
  checkAccordionIcons(content, file.relPath, issues);
  checkCodeBlockMetadata(content, file.relPath, issues);
  checkCardCustomTitle(content, file.relPath, issues);
  checkInlineStyles(content, file.relPath, issues);
  checkCustomDividerPlacement(content, file.relPath, issues);
  checkMermaidColours(content, file.relPath, issues, governedHexes);
  checkImportOrdering(content, file.relPath, issues);
}

// --- Reporting ----------------------------------------------------------------

function buildMarkdown(report) {
  const lines = [];
  lines.push('# Component Props Governance Audit');
  lines.push('');
  lines.push(`- Generated: ${report.generated_at}`);
  lines.push(`- Scope: ${report.scope}`);
  lines.push(`- Stage ID: ${report.stage_id}`);
  lines.push(`- Files analysed: ${report.analyzed_file_count}`);
  lines.push('');
  lines.push('## Severity Summary');
  lines.push('');
  lines.push(`- Critical: ${report.summary.critical}`);
  lines.push(`- High: ${report.summary.high}`);
  lines.push(`- Medium: ${report.summary.medium}`);
  lines.push(`- Low: ${report.summary.low}`);
  lines.push(`- Info: ${report.summary.info}`);
  lines.push(`- Total: ${report.summary.total}`);
  lines.push('');
  lines.push('## Issues');
  lines.push('');
  lines.push('| Severity | Check | Title | Path | Line | Evidence |');
  lines.push('|---|---|---|---|---|---|');
  report.issues.slice(0, 500).forEach((issue) => {
    const safe = (v) => String(v || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
    lines.push(`| ${safe(issue.severity)} | ${safe(issue.check)} | ${safe(issue.title)} | ${safe(issue.path)} | ${issue.line} | ${safe(issue.evidence).slice(0, 120)} |`);
  });
  lines.push('');
  return `${lines.join('\n')}\n`;
}

// --- Entry point --------------------------------------------------------------

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { usage(); process.exit(0); }

  const governedHexes = loadMermaidGovHexes();
  const files = args.scope === 'changed' ? getChangedFiles() : walkFiles(path.join(REPO_ROOT, 'v2'));
  const issues = [];

  files.forEach((file) => analyzeFile(issues, file, governedHexes));

  const report = {
    stage_id: STAGE_ID,
    generated_at: new Date().toISOString(),
    scope: args.scope,
    analyzed_file_count: files.length,
    issues,
    summary: summarize(issues)
  };

  if (args.json || args.md) {
    const outputDirAbs = path.resolve(REPO_ROOT, args.outputDir);
    fs.mkdirSync(outputDirAbs, { recursive: true });

    if (args.json) {
      const jsonPath = path.join(outputDirAbs, `${STAGE_ID}.json`);
      fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);
      console.log(`Wrote: ${toPosix(path.relative(REPO_ROOT, jsonPath))}`);
    }
    if (args.md) {
      const mdPath = path.join(outputDirAbs, `${STAGE_ID}.md`);
      fs.writeFileSync(mdPath, buildMarkdown(report));
      console.log(`Wrote: ${toPosix(path.relative(REPO_ROOT, mdPath))}`);
    }
  }

  // Console summary
  console.log(`\nComponent props audit: ${report.analyzed_file_count} files, ${report.summary.total} issues`);
  const byId = {};
  issues.forEach((i) => { byId[i.id] = (byId[i.id] || 0) + 1; });
  Object.entries(byId).sort((a, b) => b[1] - a[1]).forEach(([id, count]) => {
    console.log(`  ${id}: ${count}`);
  });

  process.exit(report.summary.total > 0 ? 1 : 0);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`${STAGE_ID} failed: ${error.message}`);
    process.exit(1);
  }
}

// Export check functions for future remediator --verify usage
module.exports = {
  checkTabIcons,
  checkAccordionIcons,
  checkCodeBlockMetadata,
  checkCardCustomTitle,
  checkInlineStyles,
  checkCustomDividerPlacement,
  checkMermaidColours,
  checkImportOrdering,
  analyzeFile,
  addIssue,
  summarize,
  walkFiles,
  shouldExclude,
  getChangedFiles,
  loadMermaidGovHexes
};
