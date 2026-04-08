#!/usr/bin/env node
/**
 * @script            audit-styles
 * @category          validator
 * @purpose           qa:style-governance
 * @scope             v2-content,snippets-components
 * @owner             docs
 * @needs             R-STYLE-GOV
 * @purpose-statement Scans MDX pages and JSX components for style governance violations. Reports inline styles, legacy tokens, hardcoded hex, literal spacing, mermaid hardcoded inits, and focus removal.
 * @pipeline          P1 (pre-commit, staged), P3 (PR checks), P5 (weekly audit)
 * @dualmode          --dry-run (report only) | --json (structured output)
 * @usage             node tools/scripts/validators/styles/audit-styles.js --dry-run
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..', '..');
const REPORT_DIR = path.join(REPO_ROOT, 'workspace', 'reports', 'styles');

/* ============================================
   CONFIGURATION
   ============================================ */

const EXCLUDE_PATTERNS = [
  '_workspace', 'archive', 'language-pages', 'x-deprecated',
  'x-archived', 'node_modules', '.claude', '_dep-docs',
  'tasks/context_data', 'x-resources', 'internal/assets/transcripts',
  'internal/rfp'
];

const LEGACY_ALIASES = [
  '--accent', '--accent-dark', '--hero-text', '--text',
  '--muted-text', '--background', '--card-background',
  '--border', '--button-text', '--arbitrum',
  '--background-highlight', '--page-header-description-color'
];

const CATEGORIES = {
  INLINE_STYLE_MDX: {
    id: 'inline-style-mdx',
    severity: 'high',
    description: 'Inline style={{}} in MDX causes layout shift (Mintlify warning)',
    remediation: 'Use Tailwind classes or component primitives',
  },
  LEGACY_TOKEN: {
    id: 'legacy-token',
    severity: 'medium',
    description: 'Legacy CSS alias used instead of --lp-* token',
    remediation: 'Replace with --lp-color-* equivalent',
  },
  HARDCODED_HEX_MDX: {
    id: 'hardcoded-hex-mdx',
    severity: 'medium',
    description: 'Hardcoded hex colour in MDX (outside code blocks)',
    remediation: 'Use var(--lp-color-*) CSS custom property',
  },
  LITERAL_SPACING: {
    id: 'literal-spacing',
    severity: 'low',
    description: 'Literal spacing value instead of --lp-spacing-* token',
    remediation: 'Use var(--lp-spacing-*) token',
  },
  MERMAID_HARDCODED: {
    id: 'mermaid-hardcoded',
    severity: 'medium',
    description: 'Mermaid init directive with hardcoded colours',
    remediation: 'Use standard init from MermaidColours.jsx',
  },
  OUTLINE_REMOVAL: {
    id: 'outline-removal',
    severity: 'high',
    description: 'Focus outline removed — WCAG 2.4.7 violation',
    remediation: 'Remove outline:none. Use :focus-visible in CSS if custom styling needed',
  },
};

/* ============================================
   FILE DISCOVERY
   ============================================ */

function shouldExclude(filePath) {
  const relative = path.relative(REPO_ROOT, filePath);
  return EXCLUDE_PATTERNS.some(p => relative.includes(p));
}

function walkDir(dir, ext) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDir(fullPath, ext));
    } else if (entry.name.endsWith(ext) && !shouldExclude(fullPath)) {
      results.push(fullPath);
    }
  }
  return results;
}

function getMdxFiles() {
  return walkDir(path.join(REPO_ROOT, 'v2'), '.mdx');
}

function getJsxFiles() {
  return walkDir(path.join(REPO_ROOT, 'snippets', 'components'), '.jsx');
}

function getStagedFiles() {
  const { execSync } = require('child_process');
  try {
    const output = execSync('git diff --cached --name-only', { cwd: REPO_ROOT, encoding: 'utf8' });
    return output.trim().split('\n').filter(Boolean).map(f => path.join(REPO_ROOT, f));
  } catch {
    return [];
  }
}

/* ============================================
   CONTEXT-AWARE SCANNING
   ============================================ */

function isInsideCodeBlock(content, matchIndex) {
  const before = content.slice(0, matchIndex);
  const fenceCount = (before.match(/```/g) || []).length;
  return fenceCount % 2 === 1;
}

function isInsideInlineCode(content, matchIndex) {
  const lineStart = content.lastIndexOf('\n', matchIndex) + 1;
  const lineEnd = content.indexOf('\n', matchIndex);
  const line = content.slice(lineStart, lineEnd === -1 ? content.length : lineEnd);
  const posInLine = matchIndex - lineStart;
  const backticksBefore = (line.slice(0, posInLine).match(/`/g) || []).length;
  return backticksBefore % 2 === 1;
}

function getLineNumber(content, index) {
  return content.slice(0, index).split('\n').length;
}

/* ============================================
   SCANNERS
   ============================================ */

function isOnComponent(content, matchIndex) {
  // Check the current line first
  const lineStart = content.lastIndexOf('\n', matchIndex) + 1;
  const before = content.slice(lineStart, matchIndex);
  // PascalCase components use style prop merging — acceptable
  const tagMatch = before.match(/<([A-Z]\w*)[^>]*$/);
  if (tagMatch) return true;
  // iframe/img need direct style props for dimensions — acceptable
  const htmlMatch = before.match(/<(iframe|img)[^>]*$/);
  if (htmlMatch) return true;
  // Multi-line: check if we're inside an unclosed tag from a previous line
  // Scan backwards from matchIndex to find the most recent unclosed < tag
  const preceding = content.slice(Math.max(0, matchIndex - 500), matchIndex);
  const lastOpen = preceding.lastIndexOf('<');
  if (lastOpen >= 0) {
    const tagSlice = preceding.slice(lastOpen);
    // If there's no > between the < and our match, we're inside that tag
    if (!tagSlice.includes('>')) {
      const multiTagMatch = tagSlice.match(/^<([A-Z]\w*|iframe|img)/);
      if (multiTagMatch) return true;
    }
  }
  return false;
}

function isInsideJsxComment(content, matchIndex) {
  const before = content.slice(0, matchIndex);
  const opens = (before.match(/\{\/\*/g) || []).length;
  const closes = (before.match(/\*\/\}/g) || []).length;
  return opens > closes;
}

function scanInlineStylesMdx(filePath, content) {
  const violations = [];
  const regex = /style=\{\{/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (isInsideCodeBlock(content, match.index)) continue;
    if (isInsideInlineCode(content, match.index)) continue;
    if (isInsideJsxComment(content, match.index)) continue;
    // Skip style props on components — that's the correct pattern (prop merging)
    if (isOnComponent(content, match.index)) continue;
    violations.push({
      category: CATEGORIES.INLINE_STYLE_MDX,
      file: path.relative(REPO_ROOT, filePath),
      line: getLineNumber(content, match.index),
      snippet: content.slice(match.index, match.index + 60).replace(/\n/g, '\\n'),
    });
  }
  return violations;
}

function scanLegacyTokens(filePath, content) {
  const violations = [];
  for (const alias of LEGACY_ALIASES) {
    const regex = new RegExp(`var\\(${alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`, 'g');
    let match;
    while ((match = regex.exec(content)) !== null) {
      if (isInsideCodeBlock(content, match.index)) continue;
      violations.push({
        category: CATEGORIES.LEGACY_TOKEN,
        file: path.relative(REPO_ROOT, filePath),
        line: getLineNumber(content, match.index),
        snippet: match[0],
        alias: alias,
      });
    }
  }
  return violations;
}

function isInsideMermaidBlock(content, matchIndex) {
  // Check if we're between ```mermaid and the next ```
  const before = content.slice(0, matchIndex);
  const mermaidOpens = (before.match(/```mermaid/g) || []).length;
  const allFences = (before.match(/```/g) || []).length;
  // If inside any code block and a mermaid block has been opened, we're in mermaid
  if (allFences % 2 === 1 && mermaidOpens > 0) {
    // Count mermaid opens vs closes (a close is any ``` after a ```mermaid)
    let inMermaid = false;
    let fenceCount = 0;
    const fenceRegex = /```(mermaid)?/g;
    let m;
    while ((m = fenceRegex.exec(before)) !== null) {
      if (m[1] === 'mermaid') {
        inMermaid = true;
      } else if (inMermaid) {
        inMermaid = false;
      }
    }
    return inMermaid;
  }
  return false;
}

function scanHardcodedHexMdx(filePath, content) {
  const violations = [];
  // Require at least one hex letter (a-f) to exclude issue/PR numbers like #207, #3822
  const regex = /#(?=[0-9a-fA-F]*[a-fA-F])[0-9a-fA-F]{3,8}\b/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (isInsideCodeBlock(content, match.index)) continue;
    if (isInsideInlineCode(content, match.index)) continue;
    if (isInsideMermaidBlock(content, match.index)) continue;
    if (isInsideJsxComment(content, match.index)) continue;
    // Skip frontmatter
    const frontmatterEnd = content.indexOf('---', 3);
    if (frontmatterEnd > 0 && match.index < frontmatterEnd + 3) continue;
    // Skip colour swatch displays (e.g. <Color.Item value="#hex" />)
    const lineStart2 = content.lastIndexOf('\n', match.index) + 1;
    const hexLine = content.slice(lineStart2, content.indexOf('\n', match.index));
    if (hexLine.includes('Color.Item') || hexLine.includes('value=')) continue;
    // Skip mermaid hex in JSX chart props (chart={`%%{init:...`})
    if (hexLine.includes('chart={') || hexLine.includes('themeVariables') || hexLine.includes('%%{init:')) continue;
    // Skip classDef and style directives in mermaid (classDef default fill:#hex)
    if (hexLine.includes('classDef') || hexLine.match(/^\s*style\s+\w/)) continue;
    violations.push({
      category: CATEGORIES.HARDCODED_HEX_MDX,
      file: path.relative(REPO_ROOT, filePath),
      line: getLineNumber(content, match.index),
      snippet: match[0],
    });
  }
  return violations;
}

function scanLiteralSpacing(filePath, content) {
  const violations = [];
  // Only flag values that have a spacing token equivalent (0.25-2rem)
  const spacingValues = ['0.25rem', '0.5rem', '0.75rem', '1rem', '1.5rem', '2rem'];
  const regex = /["'](\d+\.?\d*)(rem|px|em)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (isInsideCodeBlock(content, match.index)) continue;
    const value = match[1] + match[2];
    // Only flag values that have a spacing token AND are used for layout (not font/UI sizing)
    if (!spacingValues.includes(value)) continue;
    // Skip font-related properties
    const lineStart = content.lastIndexOf('\n', match.index) + 1;
    const lineBefore = content.slice(lineStart, match.index);
    if (/fontSize|lineHeight|fontWeight|fontFamily|letterSpacing|borderRadius|borderWidth|maxHeight|maxWidth|minHeight|minWidth|width|height/i.test(lineBefore)) continue;
    violations.push({
      category: CATEGORIES.LITERAL_SPACING,
      file: path.relative(REPO_ROOT, filePath),
      line: getLineNumber(content, match.index),
      snippet: match[0],
      value: value,
    });
  }
  return violations;
}

// Accepted mermaid init signatures — standard LP green + dark-mode variant
const MERMAID_ACCEPTED_SIGNATURES = [
  // Standard LP green (from MermaidColours.jsx)
  "'primaryColor': '#18794E', 'primaryTextColor': '#fff', 'primaryBorderColor': '#3CB540'",
  // Dark-mode variant (dark backgrounds with LP green accents)
  "'primaryColor': '#1a1a1a', 'primaryTextColor': '#fff', 'primaryBorderColor': '#2d9a67'",
  // Alt dark variant
  "'primaryColor': '#1a1a1a', 'primaryTextColor': '#fff', 'primaryBorderColor': '#3CB540'",
];

function scanMermaidHardcoded(filePath, content) {
  const violations = [];
  const regex = /%%\{init:.*?themeVariables.*?%%/gs;
  let match;
  while ((match = regex.exec(content)) !== null) {
    // Skip if matches any accepted signature
    if (MERMAID_ACCEPTED_SIGNATURES.some(sig => match[0].includes(sig))) continue;
    violations.push({
      category: CATEGORIES.MERMAID_HARDCODED,
      file: path.relative(REPO_ROOT, filePath),
      line: getLineNumber(content, match.index),
      snippet: match[0].slice(0, 80) + (match[0].length > 80 ? '...' : ''),
    });
  }
  return violations;
}

function scanOutlineRemoval(filePath, content) {
  const violations = [];
  const regex = /outline:\s*["']?none["']?|outline:\s*0(?![.\d])/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (isInsideCodeBlock(content, match.index)) continue;
    violations.push({
      category: CATEGORIES.OUTLINE_REMOVAL,
      file: path.relative(REPO_ROOT, filePath),
      line: getLineNumber(content, match.index),
      snippet: match[0],
    });
  }
  return violations;
}

/* ============================================
   ORCHESTRATOR
   ============================================ */

function runAudit(options = {}) {
  const { staged, files: explicitFiles, categories: filterCategories } = options;

  let mdxFiles, jsxFiles;

  if (staged) {
    const stagedPaths = getStagedFiles();
    mdxFiles = stagedPaths.filter(f => f.endsWith('.mdx') && f.includes('/v2/') && !shouldExclude(f));
    jsxFiles = stagedPaths.filter(f => f.endsWith('.jsx') && f.includes('snippets/components') && !shouldExclude(f));
  } else if (explicitFiles && explicitFiles.length > 0) {
    mdxFiles = explicitFiles.filter(f => f.endsWith('.mdx'));
    jsxFiles = explicitFiles.filter(f => f.endsWith('.jsx'));
  } else {
    mdxFiles = getMdxFiles();
    jsxFiles = getJsxFiles();
  }

  const allViolations = [];

  // Scan MDX files
  for (const file of mdxFiles) {
    const content = fs.readFileSync(file, 'utf8');
    allViolations.push(...scanInlineStylesMdx(file, content));
    allViolations.push(...scanHardcodedHexMdx(file, content));
    allViolations.push(...scanMermaidHardcoded(file, content));
  }

  // Scan JSX files
  for (const file of jsxFiles) {
    const content = fs.readFileSync(file, 'utf8');
    allViolations.push(...scanLegacyTokens(file, content));
    allViolations.push(...scanLiteralSpacing(file, content));
    allViolations.push(...scanOutlineRemoval(file, content));
  }

  // Filter by category if requested
  const filtered = filterCategories
    ? allViolations.filter(v => filterCategories.includes(v.category.id))
    : allViolations;

  return {
    timestamp: new Date().toISOString(),
    mode: staged ? 'staged' : 'full',
    mdxFilesScanned: mdxFiles.length,
    jsxFilesScanned: jsxFiles.length,
    totalViolations: filtered.length,
    bySeverity: {
      high: filtered.filter(v => v.category.severity === 'high').length,
      medium: filtered.filter(v => v.category.severity === 'medium').length,
      low: filtered.filter(v => v.category.severity === 'low').length,
    },
    byCategory: Object.fromEntries(
      Object.values(CATEGORIES).map(cat => [
        cat.id,
        filtered.filter(v => v.category.id === cat.id).length,
      ])
    ),
    violations: filtered,
  };
}

/* ============================================
   OUTPUT
   ============================================ */

function printSummary(report) {
  console.log('\n📊 Styles Governance Audit');
  console.log('═'.repeat(50));
  console.log(`Mode: ${report.mode}`);
  console.log(`MDX files scanned: ${report.mdxFilesScanned}`);
  console.log(`JSX files scanned: ${report.jsxFilesScanned}`);
  console.log(`Total violations: ${report.totalViolations}`);
  console.log();
  console.log('By severity:');
  console.log(`  🔴 High:   ${report.bySeverity.high}`);
  console.log(`  🟡 Medium: ${report.bySeverity.medium}`);
  console.log(`  🔵 Low:    ${report.bySeverity.low}`);
  console.log();
  console.log('By category:');
  for (const [catId, count] of Object.entries(report.byCategory)) {
    if (count > 0) {
      const cat = Object.values(CATEGORIES).find(c => c.id === catId);
      console.log(`  ${count.toString().padStart(5)} × ${catId} — ${cat ? cat.description : ''}`);
    }
  }
  console.log();
}

function printViolations(report, verbose) {
  if (!verbose) return;
  const grouped = {};
  for (const v of report.violations) {
    const key = v.file;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(v);
  }
  for (const [file, violations] of Object.entries(grouped)) {
    console.log(`\n📄 ${file}`);
    for (const v of violations) {
      console.log(`  L${v.line}: [${v.category.id}] ${v.snippet}`);
    }
  }
}

function writeJsonReport(report) {
  if (!fs.existsSync(REPORT_DIR)) {
    fs.mkdirSync(REPORT_DIR, { recursive: true });
  }
  const reportPath = path.join(REPORT_DIR, 'styles-audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`📝 JSON report written to: ${path.relative(REPO_ROOT, reportPath)}`);
}

/* ============================================
   CLI
   ============================================ */

function parseArgs(argv) {
  const args = {
    mode: 'dry-run',
    staged: false,
    verbose: false,
    json: false,
    category: null,
    files: [],
    help: false,
    exitCode: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--help' || token === '-h') args.help = true;
    else if (token === '--dry-run') args.mode = 'dry-run';
    else if (token === '--staged') args.staged = true;
    else if (token === '--verbose' || token === '-v') args.verbose = true;
    else if (token === '--json') args.json = true;
    else if (token === '--exit-code') args.exitCode = true;
    else if (token === '--category' && argv[i + 1]) { args.category = argv[++i].split(','); }
    else if (token === '--files' && argv[i + 1]) { args.files = argv[++i].split(',').map(f => path.resolve(REPO_ROOT, f)); }
  }
  return args;
}

function printHelp() {
  console.log([
    'Usage:',
    '  node tools/scripts/validators/styles/audit-styles.js [options]',
    '',
    'Options:',
    '  --dry-run      Report violations without modifying files (default)',
    '  --staged       Scan only staged files (for pre-commit hook)',
    '  --verbose, -v  Print per-file violation details',
    '  --json         Write structured JSON report to tasks/reports/styles/',
    '  --exit-code    Exit with code 1 if high-severity violations found',
    '  --category X   Filter to specific categories (comma-separated)',
    '  --files X      Scan specific files (comma-separated)',
    '  --help, -h     Show this help',
    '',
    'Categories:',
    ...Object.values(CATEGORIES).map(c => `  ${c.id.padEnd(22)} [${c.severity}] ${c.description}`),
    '',
    'Pipeline stages:',
    '  P1 (pre-commit): --staged --exit-code (blocks commit on high severity)',
    '  P3 (PR check):   --json --exit-code (blocks PR merge)',
    '  P5 (weekly):     --json --verbose (full report for review)',
    '  P6 (on-demand):  --verbose (human-driven investigation)',
  ].join('\n'));
}

/* ============================================
   MAIN
   ============================================ */

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    printHelp();
    process.exit(0);
  }

  const report = runAudit({
    staged: args.staged,
    files: args.files,
    categories: args.category,
  });

  printSummary(report);

  if (args.verbose) {
    printViolations(report, true);
  }

  if (args.json) {
    writeJsonReport(report);
  }

  if (args.exitCode && report.bySeverity.high > 0) {
    console.log(`\n❌ ${report.bySeverity.high} high-severity violations found. Commit blocked.`);
    process.exit(1);
  }

  if (report.totalViolations === 0) {
    console.log('✅ No style governance violations found.');
  }
}

main();
