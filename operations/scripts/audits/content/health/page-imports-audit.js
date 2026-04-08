#!/usr/bin/env node
/**
 * @script      page-imports-audit
 * @type        
 * @concern     
 * @niche       
 * @purpose     qa:import-integrity
 * @description Audit page-reachable import health from canonical operations scripts, with stable outputs under operations/reports/health/page-imports.
 * @mode        read-only
 * @pipeline    manual
 * @scope       operations/scripts, operations/reports/health/page-imports, v2 page import graph
 * @usage       node operations/scripts/audits/content/health/page-imports-audit.js [--staged|--scope routable-v2|repo|--files <paths>|--tab <tab>] [--strict] [--output-dir <dir>]
 * @policy      E-R12, E-R14
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');
const { validateSnippetImports } = require('../../../../../tools/editor-extensions/authoring-tools/lib/authoring-core');
const {
  getDocsJsonGroupFiles,
  getDocsJsonTabFiles,
  getMdxFiles,
  getStagedDocsPageFiles,
  getStagedFiles
} = require('../../../../tests/utils/file-walker');

const GENERATED_EXTERNAL_DOCS = [
  'awesome-livepeer-readme.mdx',
  'box-additional-config.mdx',
  'gwid-readme.mdx',
  'whitepaper.mdx',
  'wiki-readme.mdx'
];
const SCOPE_VALUES = new Set(['routable-v2', 'repo']);
const PAGE_EXTENSIONS = new Set(['.mdx']);
const IMPORTABLE_EXTENSIONS = ['.mdx', '.md', '.jsx', '.js', '.tsx', '.ts', '.json'];
const INDEX_CANDIDATES = ['index.mdx', 'index.md', 'README.mdx', 'README.md'];
const FORBIDDEN_IMPORTS = new Set(['react', 'react-dom']);
const DEFAULT_OUTPUT_DIR_NAME = 'page-imports';
const IMPORT_RE = /^\s*import\s+([\s\S]*?)\s+from\s+['"]([^'"]+)['"];?/gm;
const SIDE_EFFECT_IMPORT_RE = /^\s*import\s+['"]([^'"]+)['"];?/gm;
const EXPORT_FROM_RE = /^\s*export\s+(?:\*|\{[\s\S]*?\})\s+from\s+['"]([^'"]+)['"];?/gm;
const DYNAMIC_IMPORT_RE = /import\(\s*['"]([^'"]+)['"]\s*\)/g;

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

const REPO_ROOT = getRepoRoot();
const DEFAULT_REPORT_DIR = path.join(REPO_ROOT, 'operations', 'reports', 'health', 'page-imports');
const DEFAULT_REPORT = path.join(DEFAULT_REPORT_DIR, 'page-imports-audit.md');
const DEFAULT_REPORT_JSON = path.join(DEFAULT_REPORT_DIR, 'page-imports-audit.json');

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function relFromRoot(filePath) {
  return toPosix(path.relative(REPO_ROOT, filePath));
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function positionForIndex(content, index) {
  const slice = String(content || '').slice(0, index);
  const lines = slice.split('\n');
  return {
    line: lines.length,
    column: lines[lines.length - 1].length + 1
  };
}

function createFinding(partial) {
  return {
    findingType: partial.findingType || 'unknown',
    severity: partial.severity || 'error',
    file: partial.file || '',
    line: Number(partial.line || 1),
    column: Number(partial.column || 1),
    sourceType: partial.sourceType || '',
    rawValue: partial.rawValue || '',
    resolvedTarget: partial.resolvedTarget || '',
    status: partial.status || 'error',
    suggestedFix: partial.suggestedFix || '',
    autoFixable: Boolean(partial.autoFixable),
    repairConfidence: Number.isFinite(partial.repairConfidence) ? partial.repairConfidence : null,
    message: partial.message || '',
    statement: partial.statement || '',
    binding: partial.binding || '',
    importSource: partial.importSource || ''
  };
}

function parseArgs(argv) {
  const args = {
    stagedOnly: false,
    dryRun: false,
    strict: false,
    scope: 'routable-v2',
    tab: '',
    anchor: '',
    group: '',
    files: [],
    outputDir: DEFAULT_REPORT_DIR,
    report: DEFAULT_REPORT,
    reportJson: DEFAULT_REPORT_JSON,
    json: false
  };
  let reportExplicit = false;
  let reportJsonExplicit = false;
  let outputDirExplicit = false;

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--staged') {
      args.stagedOnly = true;
      continue;
    }
    if (token === '--dry-run') {
      args.dryRun = true;
      continue;
    }
    if (token === '--strict') {
      args.strict = true;
      continue;
    }
    if (token === '--json') {
      args.json = true;
      continue;
    }
    if (token === '--scope') {
      args.scope = String(argv[index + 1] || '').trim().toLowerCase();
      index += 1;
      continue;
    }
    if (token === '--tab') {
      args.tab = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }
    if (token === '--anchor') {
      args.anchor = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }
    if (token === '--group') {
      args.group = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }
    if (token === '--files' || token === '--file') {
      const raw = String(argv[index + 1] || '').trim();
      if (raw) {
        raw
          .split(',')
          .map((entry) => entry.trim())
          .filter(Boolean)
          .forEach((entry) => args.files.push(entry));
      }
      index += 1;
      continue;
    }
    if (token === '--output-dir') {
      args.outputDir = path.resolve(REPO_ROOT, argv[index + 1] || '');
      outputDirExplicit = true;
      index += 1;
      continue;
    }
    if (token.startsWith('--output-dir=')) {
      args.outputDir = path.resolve(REPO_ROOT, token.slice('--output-dir='.length) || '');
      outputDirExplicit = true;
      continue;
    }
    if (token === '--report') {
      args.report = path.resolve(REPO_ROOT, argv[index + 1] || '');
      reportExplicit = true;
      index += 1;
      continue;
    }
    if (token === '--report-json') {
      args.reportJson = path.resolve(REPO_ROOT, argv[index + 1] || '');
      reportJsonExplicit = true;
      index += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (!SCOPE_VALUES.has(args.scope)) {
    throw new Error(`Invalid --scope value "${args.scope}". Use routable-v2|repo.`);
  }

  if (args.group && !args.tab) {
    throw new Error('The --group option requires --tab.');
  }

  if (args.anchor && !args.tab) {
    throw new Error('The --anchor option requires --tab.');
  }

  args.files = [...new Set(args.files)];

  if (outputDirExplicit) {
    if (!reportExplicit) {
      args.report = path.join(args.outputDir, 'page-imports-audit.md');
    }
    if (!reportJsonExplicit) {
      args.reportJson = path.join(args.outputDir, 'page-imports-audit.json');
    }
  }

  if (reportExplicit && !reportJsonExplicit) {
    const parsed = path.parse(args.report);
    args.reportJson = path.join(parsed.dir, `${parsed.name}.json`);
  }

  return args;
}

function collectRepoMdxFiles() {
  const result = spawnSync('git', ['ls-files', '--', '*.mdx'], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
  if (result.status !== 0) {
    return [];
  }

  return String(result.stdout || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => path.resolve(REPO_ROOT, line))
    .filter((filePath) => fs.existsSync(filePath));
}

function walkMdxFiles(targetPath, out = []) {
  if (!fs.existsSync(targetPath)) return out;
  const stat = fs.statSync(targetPath);
  if (stat.isFile()) {
    if (targetPath.endsWith('.mdx')) out.push(path.resolve(targetPath));
    return out;
  }

  fs.readdirSync(targetPath, { withFileTypes: true }).forEach((entry) => {
    const child = path.join(targetPath, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules') return;
      walkMdxFiles(child, out);
      return;
    }
    if (child.endsWith('.mdx')) out.push(path.resolve(child));
  });
  return out;
}

function resolveEntryFiles(args) {
  let files = [];

  if (args.files.length > 0) {
    files = args.files.flatMap((entry) => {
      const absPath = path.isAbsolute(entry) ? path.resolve(entry) : path.resolve(REPO_ROOT, entry);
      return walkMdxFiles(absPath, []);
    });
  } else if (args.tab) {
    files = args.group
      ? getDocsJsonGroupFiles({ tab: args.tab, anchor: args.anchor, group: args.group, rootDir: REPO_ROOT })
      : getDocsJsonTabFiles(args.tab, REPO_ROOT);
  } else if (args.stagedOnly) {
    files = args.scope === 'repo'
      ? getStagedFiles(REPO_ROOT).filter((filePath) => filePath.endsWith('.mdx'))
      : getStagedDocsPageFiles(REPO_ROOT).filter((filePath) => filePath.endsWith('.mdx'));
  } else if (args.scope === 'repo') {
    files = collectRepoMdxFiles();
  } else {
    files = getMdxFiles(REPO_ROOT);
  }

  return [...new Set(files.map((filePath) => path.resolve(filePath)))]
    .filter((filePath) => PAGE_EXTENSIONS.has(path.extname(filePath).toLowerCase()))
    .sort((left, right) => relFromRoot(left).localeCompare(relFromRoot(right)));
}

function ensureExternalDocs(findings, warnings) {
  const externalDir = path.join(REPO_ROOT, 'snippets', 'composables', 'pages', 'shared');
  const missingFiles = GENERATED_EXTERNAL_DOCS.filter(
    (fileName) => !fs.existsSync(path.join(externalDir, fileName))
  );

  if (missingFiles.length === 0) {
    return;
  }

  const fetchScript = path.join(
    REPO_ROOT,
    'operations',
    'scripts',
    'automations',
    'content',
    'data',
    'fetching',
    'fetch-external-docs.sh'
  );
  if (!fs.existsSync(fetchScript)) {
    warnings.push(
      createFinding({
        findingType: 'missing-external-doc-bootstrap',
        severity: 'warning',
        file: relFromRoot(fetchScript),
        sourceType: 'bootstrap',
        status: 'warning',
        message: `Missing external-doc bootstrap script; generated imports may fail: ${missingFiles.join(', ')}`
      })
    );
    return;
  }

  const result = spawnSync('bash', [fetchScript], {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    env: {
      ...process.env,
      LC_ALL: process.env.LC_ALL || 'C',
      LANG: process.env.LANG || 'C'
    }
  });

  if (result.status !== 0) {
    const detail = String(result.stderr || result.stdout || '').trim().split('\n').slice(-3).join(' ');
    findings.push(
      createFinding({
        findingType: 'external-doc-fetch-failed',
        severity: 'error',
        file: relFromRoot(fetchScript),
        sourceType: 'bootstrap',
        status: 'error',
        message: `Failed to fetch generated external docs required for import validation.${detail ? ` ${detail}` : ''}`
      })
    );
  }
}

function extractImports(content) {
  const imports = [];

  function collect(regex, kind, mapper) {
    let match;
    regex.lastIndex = 0;
    while ((match = regex.exec(content)) !== null) {
      const position = positionForIndex(content, match.index);
      imports.push({
        kind,
        line: position.line,
        column: position.column,
        index: match.index,
        ...mapper(match)
      });
    }
  }

  collect(IMPORT_RE, 'import', (match) => ({
    clause: String(match[1] || '').trim(),
    path: String(match[2] || '').trim(),
    statement: String(match[0] || '').trim()
  }));
  collect(SIDE_EFFECT_IMPORT_RE, 'side-effect-import', (match) => ({
    clause: '',
    path: String(match[1] || '').trim(),
    statement: String(match[0] || '').trim()
  }));
  collect(EXPORT_FROM_RE, 'export-from', (match) => ({
    clause: '',
    path: String(match[1] || '').trim(),
    statement: String(match[0] || '').trim()
  }));
  collect(DYNAMIC_IMPORT_RE, 'dynamic-import', (match) => ({
    clause: '',
    path: String(match[1] || '').trim(),
    statement: String(match[0] || '').trim()
  }));

  return imports.sort((left, right) => left.index - right.index);
}

function resolveImportTarget(importPath, currentFile) {
  const normalized = String(importPath || '').trim();
  if (!normalized) return null;

  const basePath = normalized.startsWith('/')
    ? path.join(REPO_ROOT, normalized.replace(/^\/+/, ''))
    : path.resolve(path.dirname(currentFile), normalized);

  const ext = path.extname(basePath).toLowerCase();
  const candidates = [];

  if (ext && IMPORTABLE_EXTENSIONS.includes(ext)) {
    candidates.push(basePath);
  } else {
    candidates.push(basePath);
    IMPORTABLE_EXTENSIONS.forEach((candidateExt) => candidates.push(`${basePath}${candidateExt}`));
    INDEX_CANDIDATES.forEach((indexName) => candidates.push(path.join(basePath, indexName)));
    const leaf = path.basename(basePath);
    if (leaf) {
      IMPORTABLE_EXTENSIONS.forEach((candidateExt) => {
        candidates.push(path.join(basePath, `${leaf}${candidateExt}`));
      });
    }
  }

  const unique = [...new Set(candidates.map((candidate) => path.resolve(candidate)))];
  return unique.find((candidate) => fs.existsSync(candidate)) || null;
}

function getSingleIdentifierBinding(importRecord) {
  const clause = String(importRecord?.clause || '').trim();
  if (!clause) return '';
  if (/^[A-Za-z_$][\w$]*$/.test(clause)) return clause;
  const namespaceMatch = clause.match(/^\*\s+as\s+([A-Za-z_$][\w$]*)$/);
  if (namespaceMatch) return namespaceMatch[1];
  return '';
}

function isIdentifierUsedOutsideImport(content, importRecord, identifier) {
  if (!identifier) return true;
  const before = content.slice(0, importRecord.index);
  const after = content.slice(importRecord.index + importRecord.statement.length);
  const body = `${before}\n${after}`;
  return new RegExp(`\\b${identifier.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`).test(body);
}

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (_error) {
    return null;
  }
}

function renderMarkdown(report) {
  const lines = [];
  lines.push('# Page Imports Audit');
  lines.push('');
  lines.push('## Summary');
  lines.push(`- Entry pages: ${report.summary.entryCount}`);
  lines.push(`- Files analyzed: ${report.summary.fileCount}`);
  lines.push(`- Findings: ${report.summary.errorCount}`);
  lines.push(`- Warnings: ${report.summary.warningCount}`);
  lines.push(`- Repo scope: ${report.summary.scope}`);
  lines.push('');
  lines.push('## Findings');
  if (report.findings.length === 0) {
    lines.push('- None');
  } else {
    report.findings.forEach((finding) => {
      lines.push(`- ${finding.file}:${finding.line} [${finding.findingType}] ${finding.message}`);
      if (finding.rawValue) lines.push(`  - raw: ${finding.rawValue}`);
      if (finding.resolvedTarget) lines.push(`  - resolved: ${finding.resolvedTarget}`);
      if (finding.suggestedFix) lines.push(`  - suggested fix: ${finding.suggestedFix}`);
    });
  }
  lines.push('');
  return `${lines.join('\n')}\n`;
}

function buildJsonReport({ args, entryFiles, scannedFiles, findings, warnings }) {
  return {
    generatedAt: new Date().toISOString(),
    summary: {
      entryCount: entryFiles.length,
      fileCount: scannedFiles.length,
      errorCount: findings.length,
      warningCount: warnings.length,
      scope: args.scope,
      stagedOnly: args.stagedOnly
    },
    entryFiles: entryFiles.map((filePath) => relFromRoot(filePath)),
    scannedFiles: scannedFiles.map((filePath) => relFromRoot(filePath)),
    findings,
    warnings
  };
}

function runAudit(options = {}) {
  const args = options.parsedArgs || parseArgs(options.argv || process.argv.slice(2));
  const findings = [];
  const warnings = [];

  ensureExternalDocs(findings, warnings);

  const entryFiles = options.entryFiles || resolveEntryFiles(args);
  const scannedFiles = [];
  const queue = [...entryFiles];
  const seen = new Set();

  while (queue.length > 0) {
    const filePath = path.resolve(queue.shift());
    const key = relFromRoot(filePath);
    if (seen.has(key)) continue;
    seen.add(key);
    scannedFiles.push(filePath);

    const content = readFileSafe(filePath);
    if (content === null) {
      findings.push(
        createFinding({
          findingType: 'file-read-error',
          severity: 'error',
          file: relFromRoot(filePath),
          sourceType: 'file',
          status: 'error',
          message: 'Unable to read file content for import analysis.'
        })
      );
      continue;
    }

    if (filePath.endsWith('.mdx')) {
      validateSnippetImports(content, filePath).forEach((finding) => {
        findings.push(
          createFinding({
            findingType: 'snippet-import-missing',
            severity: 'error',
            file: relFromRoot(filePath),
            line: finding.line || 1,
            sourceType: 'snippet-import',
            rawValue: finding.importValue || '',
            status: 'error',
            message: finding.message,
            importSource: finding.importValue || ''
          })
        );
      });
    }

    extractImports(content).forEach((importRecord) => {
      const importPath = String(importRecord.path || '').trim();
      if (!importPath) return;

      if (FORBIDDEN_IMPORTS.has(importPath)) {
        const binding = getSingleIdentifierBinding(importRecord);
        const unusedSingleBinding = binding ? !isIdentifierUsedOutsideImport(content, importRecord, binding) : false;
        findings.push(
          createFinding({
            findingType: 'forbidden-import',
            severity: 'error',
            file: relFromRoot(filePath),
            line: importRecord.line,
            column: importRecord.column,
            sourceType: importRecord.kind,
            rawValue: importPath,
            status: 'error',
            suggestedFix: unusedSingleBinding ? 'Remove unused React runtime import.' : '',
            autoFixable: unusedSingleBinding,
            repairConfidence: unusedSingleBinding ? 1 : null,
            message: `Import from "${importPath}" is forbidden on page-reachable Mintlify surfaces.`,
            statement: importRecord.statement,
            binding,
            importSource: importPath
          })
        );
        return;
      }

      if (!importPath.startsWith('/') && !importPath.startsWith('./') && !importPath.startsWith('../')) {
        return;
      }

      const resolvedTarget = resolveImportTarget(importPath, filePath);
      if (!resolvedTarget) {
        findings.push(
          createFinding({
            findingType: 'missing-import',
            severity: 'error',
            file: relFromRoot(filePath),
            line: importRecord.line,
            column: importRecord.column,
            sourceType: importRecord.kind,
            rawValue: importPath,
            resolvedTarget: relFromRoot(path.resolve(path.dirname(filePath), importPath)),
            status: 'error',
            message: `Import from "${importPath}" points to a non-existent file.`,
            statement: importRecord.statement,
            importSource: importPath
          })
        );
        return;
      }

      const ext = path.extname(resolvedTarget).toLowerCase();
      if (IMPORTABLE_EXTENSIONS.includes(ext) && !seen.has(relFromRoot(resolvedTarget))) {
        queue.push(resolvedTarget);
      }
    });
  }

  const jsonReport = buildJsonReport({
    args,
    entryFiles,
    scannedFiles,
    findings,
    warnings
  });
  const markdownReport = renderMarkdown(jsonReport);

  if (!options.skipWriteReports) {
    ensureDir(path.dirname(args.report));
    fs.writeFileSync(args.report, markdownReport, 'utf8');
    ensureDir(path.dirname(args.reportJson));
    fs.writeFileSync(args.reportJson, `${JSON.stringify(jsonReport, null, 2)}\n`, 'utf8');
  }

  const exitCode = args.strict && findings.length > 0 ? 1 : 0;
  return {
    exitCode,
    args,
    entryFiles,
    scannedFiles,
    findings,
    warnings,
    markdownReport,
    jsonReport,
    reportPath: args.report,
    reportJsonPath: args.reportJson,
    fileCount: scannedFiles.length
  };
}

function runCli(argv = process.argv.slice(2), options = {}) {
  const parsed = parseArgs(argv);
  const result = runAudit({
    parsedArgs: {
      ...parsed,
      strict: options.strictDefault === true ? true : parsed.strict
    }
  });

  if (parsed.dryRun) {
    console.log('\nℹ️  Dry run: page-imports-audit is read-only; no files were modified.');
  }

  console.log(`📝 Report written: ${relFromRoot(result.reportPath)}`);
  console.log(`🧾 JSON report written: ${relFromRoot(result.reportJsonPath)}`);

  if (result.findings.length === 0) {
    console.log(`\n✅ All page imports valid (${result.fileCount} files checked)`);
  } else {
    console.error('\n❌ Page Import Findings:\n');
    result.findings.forEach((finding) => {
      console.error(`  ${finding.file}:${finding.line}`);
      console.error(`    ${finding.findingType}: ${finding.message}`);
      if (finding.resolvedTarget) console.error(`    Expected: ${finding.resolvedTarget}`);
      if (finding.suggestedFix) console.error(`    Suggested fix: ${finding.suggestedFix}`);
      console.error('');
    });
  }

  return options.strictDefault === true || parsed.strict
    ? (result.findings.length > 0 ? 1 : 0)
    : result.exitCode;
}

if (require.main === module) {
  process.exit(runCli(process.argv.slice(2)));
}

module.exports = {
  DEFAULT_OUTPUT_DIR_NAME,
  DEFAULT_REPORT_DIR,
  DEFAULT_REPORT,
  DEFAULT_REPORT_JSON,
  FORBIDDEN_IMPORTS,
  buildJsonReport,
  extractImports,
  parseArgs,
  resolveEntryFiles,
  resolveImportTarget,
  runAudit,
  runCli
};
