#!/usr/bin/env node
/**
 * @script measure-performance
 * @summary Measure documentation system health across build, page-load, DX, and freshness domains and write baseline reports.
 * @owner docs
 * @scope tools/scripts, tests/utils, tests/unit, .githooks, docs.json, snippets/automations, style.css, tasks/reports/performance
 * @pipeline manual - diagnostic and reporting tool, run on demand only
 *
 * @usage
 *   node tools/scripts/measure-performance.js --domain all --out-dir tasks/reports/performance --format json,md --verbose
 *
 * @inputs
 *   --domain <all|build|pageload|dx|freshness> (default: all)
 *   --out-dir <path> (default: tasks/reports/performance)
 *   --format <json|md|json,md> (default: json,md)
 *   --base-url <url> (default: env PERFORMANCE_BASE_URL or https://docs.livepeer.org)
 *   --verbose (optional)
 *   --help (optional)
 *
 * @outputs
 *   - tasks/reports/performance/performance-baseline-YYYYMMDD-HHmmssZ.json
 *   - tasks/reports/performance/performance-baseline-YYYYMMDD-HHmmssZ.md
 *   - tasks/reports/performance/performance-baseline-latest.json (full baseline runs only)
 *
 * @exit-codes
 *   0 = measurement completed
 *   1 = invalid arguments or runtime failure
 *
 * @examples
 *   node tools/scripts/measure-performance.js
 *   node tools/scripts/measure-performance.js --domain freshness --format json
 *
 * @notes
 *   Read-only measurement. External network and browser-dependent checks degrade to unmeasured instead of failing the full run.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');
const https = require('https');
const { execFileSync, execSync, spawnSync } = require('child_process');

const {
  getDocsJsonRouteKeys,
  getV2DocsFiles,
  toDocsRouteKeyFromFileV2Aware
} = require('../../tests/utils/file-walker');
const { listMintIgnoredRepoPaths } = require('../../tests/utils/mintignore');
const docsNavigationTests = require('../../tests/unit/docs-navigation.test');
const scriptDocsTests = require('../../tests/unit/script-docs.test');

const DEFAULT_OUT_DIR = 'tasks/reports/performance';
const DEFAULT_BASE_URL = 'https://docs.livepeer.org';
const LATEST_JSON_NAME = 'performance-baseline-latest.json';
const PRECOMMIT_SAMPLE_PATH = 'tasks/reports/performance/.precommit-sample.txt';
const VALID_DOMAINS = new Set(['all', 'build', 'pageload', 'dx', 'freshness']);
const VALID_FORMATS = new Set(['json', 'md']);
const DOMAIN_WEIGHTS = {
  build: 0.2,
  pageload: 0.3,
  dx: 0.2,
  freshness: 0.3
};
const PAGELOAD_SAMPLE_PATHS = [
  'v2/home/primer',
  'v2/developers/portal',
  'v2/solutions/portal',
  'v2/gateways/gateways-portal',
  'v2/orchestrators/orchestrators-portal',
  'v2/lpt/token-portal',
  'v2/community/community-portal',
  'v2/about/portal',
  'v2/resources/resources-portal',
  'v2/home/mission-control'
];
const FRESHNESS_PIPELINES = [
  {
    key: 'ghost',
    file: 'snippets/automations/blog/ghostBlogData.jsx',
    workflowName: 'Update Ghost Blog Data'
  },
  {
    key: 'discord',
    file: 'snippets/automations/discord/discordAnnouncementsData.jsx',
    workflowName: ''
  },
  {
    key: 'forum',
    file: 'snippets/automations/forum/forumData.jsx',
    workflowName: 'Update Forum Data'
  },
  {
    key: 'luma',
    file: 'snippets/automations/luma/lumaEventsData.jsx',
    workflowName: ''
  },
  {
    key: 'showcase',
    file: 'snippets/automations/showcase/showcaseData.jsx',
    workflowName: 'Project Showcase Sync'
  },
  {
    key: 'youtube',
    file: 'snippets/automations/youtube/youtubeData.jsx',
    workflowName: 'Update YouTube Data'
  },
  {
    key: 'globals',
    file: 'snippets/automations/globals/globals.mdx',
    workflowName: 'Update Livepeer Release Version'
  }
];
const SCRIPT_ROOTS = ['.githooks', '.github/scripts', 'tests', 'tools/scripts', 'tasks/scripts'];
const SOURCE_TREE_SKIP_DIRS = new Set([
  '.git',
  '.cache',
  '.mintlify',
  '.mintlify-cache',
  'coverage',
  'dist',
  'build',
  '.out',
  'out'
]);
const LOCALE_PREFIX_RE = /^v2\/(es|cn|fr)\//;

let cachedGhAvailability = null;

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

const REPO_ROOT = getRepoRoot();

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function relFromRoot(absPath) {
  return toPosix(path.relative(REPO_ROOT, absPath));
}

function resolveRepoPath(repoPath) {
  if (path.isAbsolute(repoPath)) return repoPath;
  return path.join(REPO_ROOT, repoPath);
}

function round(value, decimals = 1) {
  if (!Number.isFinite(Number(value))) return null;
  const factor = 10 ** decimals;
  return Math.round(Number(value) * factor) / factor;
}

function bytesToMb(bytes) {
  return round(Number(bytes || 0) / (1024 * 1024), 1);
}

function bytesToKb(bytes) {
  return round(Number(bytes || 0) / 1024, 1);
}

function countLines(text) {
  if (!text) return 0;
  return String(text).split(/\r?\n/).length;
}

function formatTimestamp(date = new Date()) {
  const iso = date.toISOString();
  const day = iso.slice(0, 10).replace(/-/g, '');
  const time = iso.slice(11, 19).replace(/:/g, '');
  return `${day}-${time}Z`;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function fileExists(repoPath) {
  return fs.existsSync(resolveRepoPath(repoPath));
}

function readText(repoPath) {
  try {
    return fs.readFileSync(resolveRepoPath(repoPath), 'utf8');
  } catch (_error) {
    return '';
  }
}

function readJsonIfExists(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (_error) {
    return null;
  }
}

function isNodeModulesPath(relPath) {
  const normalized = toPosix(relPath).replace(/^\/+/, '');
  return normalized === 'node_modules' || normalized.startsWith('node_modules/') || normalized.includes('/node_modules/');
}

function isGitPath(relPath) {
  const normalized = toPosix(relPath).replace(/^\/+/, '');
  return normalized === '.git' || normalized.startsWith('.git/') || normalized.includes('/.git/');
}

function isCacheBuildPath(relPath) {
  const normalized = toPosix(relPath).replace(/^\/+/, '');
  if (!normalized) return false;
  if (normalized === 'tasks/reports' || normalized.startsWith('tasks/reports/')) return true;
  if (normalized === 'tests/reports' || normalized.startsWith('tests/reports/')) return true;
  const segments = normalized.split('/');
  return segments.some((segment) => SOURCE_TREE_SKIP_DIRS.has(segment));
}

function isBackupOrTempFile(relPath) {
  const name = path.basename(String(relPath || '')).toLowerCase();
  return (
    name.startsWith('tmp_') ||
    name.endsWith('.tmp') ||
    name.endsWith('.temp') ||
    name.endsWith('.disabled') ||
    name.endsWith('.bak') ||
    name.endsWith('.bak2')
  );
}

function shouldSkipRepoSizeDir(relPath) {
  return isGitPath(relPath) || isNodeModulesPath(relPath);
}

function shouldSkipSourceTreeDir(relPath) {
  const normalized = toPosix(relPath).replace(/^\/+/, '');
  if (!normalized) return false;
  if (isGitPath(normalized) || isNodeModulesPath(normalized)) return true;
  if (normalized === 'tasks/reports' || normalized.startsWith('tasks/reports/')) return true;
  if (normalized === 'tests/reports' || normalized.startsWith('tests/reports/')) return true;
  if (normalized === 'tools/notion' || normalized.startsWith('tools/notion/')) return true;
  return isCacheBuildPath(normalized);
}

function walkFiles(dirPath, options = {}, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const absPath = path.join(dirPath, entry.name);
    const relPath = relFromRoot(absPath);
    if (entry.isDirectory()) {
      if (options.skipDir && options.skipDir(relPath, entry.name)) continue;
      walkFiles(absPath, options, out);
      continue;
    }
    if (options.includeFile && !options.includeFile(relPath, entry.name)) continue;
    let stats = null;
    try {
      stats = fs.statSync(absPath);
    } catch (_error) {
      continue;
    }
    out.push({
      absPath,
      relPath,
      sizeBytes: stats.size
    });
  }
  return out;
}

function collectFileSizes(rootPath, skipDir) {
  return walkFiles(rootPath, {
    skipDir,
    includeFile: (relPath) => !isBackupOrTempFile(relPath)
  });
}

function sumBytes(entries) {
  return entries.reduce((total, entry) => total + Number(entry.sizeBytes || 0), 0);
}

function parseArgs(argv) {
  const parsed = {
    domain: 'all',
    outDir: DEFAULT_OUT_DIR,
    formats: ['json', 'md'],
    verbose: false,
    baseUrl: process.env.PERFORMANCE_BASE_URL || DEFAULT_BASE_URL,
    help: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--help' || token === '-h') {
      parsed.help = true;
      continue;
    }
    if (token === '--verbose') {
      parsed.verbose = true;
      continue;
    }
    if (token === '--domain') {
      parsed.domain = String(argv[i + 1] || parsed.domain).trim() || parsed.domain;
      i += 1;
      continue;
    }
    if (token.startsWith('--domain=')) {
      parsed.domain = token.slice('--domain='.length).trim() || parsed.domain;
      continue;
    }
    if (token === '--out-dir') {
      parsed.outDir = String(argv[i + 1] || parsed.outDir).trim() || parsed.outDir;
      i += 1;
      continue;
    }
    if (token.startsWith('--out-dir=')) {
      parsed.outDir = token.slice('--out-dir='.length).trim() || parsed.outDir;
      continue;
    }
    if (token === '--format') {
      parsed.formats = String(argv[i + 1] || '').split(',').map((item) => item.trim()).filter(Boolean);
      i += 1;
      continue;
    }
    if (token.startsWith('--format=')) {
      parsed.formats = token.slice('--format='.length).split(',').map((item) => item.trim()).filter(Boolean);
      continue;
    }
    if (token === '--base-url') {
      parsed.baseUrl = String(argv[i + 1] || parsed.baseUrl).trim() || parsed.baseUrl;
      i += 1;
      continue;
    }
    if (token.startsWith('--base-url=')) {
      parsed.baseUrl = token.slice('--base-url='.length).trim() || parsed.baseUrl;
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }

  if (!VALID_DOMAINS.has(parsed.domain)) {
    throw new Error(`Invalid --domain value: ${parsed.domain}`);
  }

  if (parsed.formats.length === 0) {
    parsed.formats = ['json', 'md'];
  }

  const invalidFormats = parsed.formats.filter((format) => !VALID_FORMATS.has(format));
  if (invalidFormats.length > 0) {
    throw new Error(`Invalid --format value(s): ${invalidFormats.join(', ')}`);
  }

  if (parsed.domain === 'all' && !parsed.formats.includes('json')) {
    parsed.formats = ['json', ...parsed.formats];
  }

  parsed.outDir = path.isAbsolute(parsed.outDir)
    ? parsed.outDir
    : path.resolve(REPO_ROOT, parsed.outDir);
  parsed.baseUrl = parsed.baseUrl.replace(/\/+$/, '');

  return parsed;
}

function printHelp() {
  console.log('Usage: node tools/scripts/measure-performance.js --domain all|build|pageload|dx|freshness --out-dir tasks/reports/performance --format json,md --verbose');
  console.log('');
  console.log('Defaults:');
  console.log('  --domain all');
  console.log('  --out-dir tasks/reports/performance');
  console.log('  --format json,md');
  console.log(`  --base-url ${DEFAULT_BASE_URL}`);
}

function logVerbose(options, message) {
  if (options.verbose) {
    console.log(`[measure-performance] ${message}`);
  }
}

function safeExcerpt(text, limit = 280) {
  const cleaned = String(text || '').replace(/\s+/g, ' ').trim();
  if (!cleaned) return '';
  if (cleaned.length <= limit) return cleaned;
  return `${cleaned.slice(0, limit - 3)}...`;
}

function runTimedCommand(command, args, options = {}) {
  const started = Date.now();
  const result = spawnSync(command, args, {
    cwd: options.cwd || REPO_ROOT,
    env: options.env || process.env,
    encoding: 'utf8',
    timeout: options.timeout || 300000,
    maxBuffer: options.maxBuffer || 50 * 1024 * 1024
  });
  const durationMs = Date.now() - started;

  return {
    command: [command, ...args].join(' '),
    time_ms: durationMs,
    exit_code: typeof result.status === 'number' ? result.status : null,
    signal: result.signal || null,
    completed: !result.error,
    error: result.error ? result.error.message : '',
    stdout_excerpt: safeExcerpt(result.stdout),
    stderr_excerpt: safeExcerpt(result.stderr)
  };
}

function runGit(args, options = {}) {
  return execFileSync('git', args, {
    cwd: options.cwd || REPO_ROOT,
    env: options.env || process.env,
    encoding: 'utf8',
    input: options.input || undefined,
    maxBuffer: options.maxBuffer || 20 * 1024 * 1024
  }).trim();
}

function discoverRunAllDryRunSupport() {
  const content = readText('tests/run-all.js');
  return /\b--dry-run\b/.test(content);
}

function measureTestSuiteStartup(options) {
  const supportsDryRun = discoverRunAllDryRunSupport();
  const commandArgs = supportsDryRun
    ? ['tests/run-all.js', '--dry-run']
    : ['tests/run-pr-checks.js', '--help'];
  const result = runTimedCommand('node', commandArgs, {
    cwd: REPO_ROOT,
    timeout: 120000
  });

  return {
    supports_dry_run: supportsDryRun,
    fallback_startup_probe: !supportsDryRun,
    ...result
  };
}

function createSyntheticBlob(content) {
  return runGit(['hash-object', '-w', '--stdin'], {
    input: content
  });
}

function measurePreCommitHook(options) {
  const hookPath = path.join(REPO_ROOT, '.githooks', 'pre-commit');
  if (!fs.existsSync(hookPath)) {
    return {
      command: 'bash .githooks/pre-commit',
      completed: false,
      exit_code: null,
      time_ms: null,
      signal: null,
      error: 'Hook file not found',
      stdout_excerpt: '',
      stderr_excerpt: ''
    };
  }

  const tempParentDir = fs.mkdtempSync(path.join(os.tmpdir(), 'measure-performance-precommit-'));
  const tempWorktreeDir = path.join(tempParentDir, 'worktree');
  const tempIndexPath = path.join(tempParentDir, 'index');

  try {
    runGit(['worktree', 'add', '--quiet', '--detach', tempWorktreeDir, 'HEAD']);
    const env = { ...process.env, GIT_INDEX_FILE: tempIndexPath };
    runGit(['read-tree', 'HEAD'], {
      cwd: tempWorktreeDir,
      env
    });
    const blobSha = createSyntheticBlob('performance measurement sample\n');
    runGit(
      ['update-index', '--add', '--cacheinfo', '100644', blobSha, PRECOMMIT_SAMPLE_PATH],
      {
        cwd: tempWorktreeDir,
        env
      }
    );
    logVerbose(options, `Running pre-commit timing probe in detached worktree ${tempWorktreeDir}`);
    return runTimedCommand('bash', ['.githooks/pre-commit'], {
      cwd: tempWorktreeDir,
      env,
      timeout: 300000
    });
  } catch (error) {
    return {
      command: 'bash .githooks/pre-commit',
      completed: false,
      exit_code: null,
      time_ms: null,
      signal: null,
      error: error.message,
      stdout_excerpt: '',
      stderr_excerpt: ''
    };
  } finally {
    try {
      runGit(['worktree', 'remove', '--force', tempWorktreeDir]);
    } catch (_error) {
      // Best-effort cleanup only.
    }
    try {
      fs.rmSync(tempParentDir, { recursive: true, force: true });
    } catch (_error) {
      // Best-effort cleanup only.
    }
  }
}

function getDocsJsonStats() {
  const docsJsonPath = resolveRepoPath('docs.json');
  const stats = fs.statSync(docsJsonPath);
  const content = fs.readFileSync(docsJsonPath, 'utf8');
  return {
    bytes: stats.size,
    lines: countLines(content)
  };
}

function getStyleCssStats() {
  const stylePath = resolveRepoPath('style.css');
  const content = fs.readFileSync(stylePath, 'utf8');
  return {
    lines: countLines(content)
  };
}

function getTotalMdxFiles() {
  return walkFiles(REPO_ROOT, {
    skipDir: (relPath) => shouldSkipSourceTreeDir(relPath),
    includeFile: (relPath) => relPath.endsWith('.mdx') && !isBackupOrTempFile(relPath)
  }).length;
}

function getEnglishV2MdxFiles() {
  const docsRouteKeys = getDocsJsonRouteKeys(REPO_ROOT);
  return getV2DocsFiles({ rootDir: REPO_ROOT, respectMintIgnore: true })
    .filter((filePath) => filePath.endsWith('.mdx'))
    .filter((filePath) => {
      const relPath = relFromRoot(filePath);
      if (LOCALE_PREFIX_RE.test(relPath)) return false;
      if (relPath.startsWith('v2/internal/')) return false;
      const routeKey = toDocsRouteKeyFromFileV2Aware(filePath, REPO_ROOT);
      return Boolean(routeKey) && docsRouteKeys.has(routeKey);
    })
    .sort((a, b) => relFromRoot(a).localeCompare(relFromRoot(b)));
}

function collectAssetBreakdown(entries) {
  const breakdown = new Map();

  entries.forEach((entry) => {
    const relativeToAssets = toPosix(path.relative(resolveRepoPath('snippets/assets'), entry.absPath));
    const topLevel = relativeToAssets.split('/')[0] || '__root__';
    breakdown.set(topLevel, (breakdown.get(topLevel) || 0) + Number(entry.sizeBytes || 0));
  });

  return [...breakdown.entries()]
    .map(([name, bytes]) => ({
      name,
      bytes,
      mb: bytesToMb(bytes)
    }))
    .sort((a, b) => b.bytes - a.bytes);
}

function measureBuildDomain(options) {
  const repoEntries = collectFileSizes(REPO_ROOT, shouldSkipRepoSizeDir);
  const repoSizeBytes = sumBytes(repoEntries);
  const assetsRoot = resolveRepoPath('snippets/assets');
  const assetEntries = collectFileSizes(assetsRoot, shouldSkipRepoSizeDir);
  const assetSizeBytes = sumBytes(assetEntries);
  const docsJsonStats = getDocsJsonStats();
  const styleStats = getStyleCssStats();
  const englishMdxFiles = getEnglishV2MdxFiles();
  const preCommitHook = measurePreCommitHook(options);
  const testSuiteStartup = measureTestSuiteStartup(options);

  return {
    domain: 'build',
    measured: true,
    repo_size_bytes: repoSizeBytes,
    repo_size_mb: bytesToMb(repoSizeBytes),
    assets_size_bytes: assetSizeBytes,
    assets_size_mb: bytesToMb(assetSizeBytes),
    assets_pct_of_repo: repoSizeBytes > 0 ? round((assetSizeBytes / repoSizeBytes) * 100, 1) : 0,
    asset_breakdown: collectAssetBreakdown(assetEntries),
    docs_json_bytes: docsJsonStats.bytes,
    docs_json_lines: docsJsonStats.lines,
    style_css_lines: styleStats.lines,
    total_mdx_files: getTotalMdxFiles(),
    en_mdx_files: englishMdxFiles.length,
    pre_commit_hook: preCommitHook,
    test_suite_startup: testSuiteStartup
  };
}

function extractImportStatements(content) {
  return String(content || '').match(/^\s*import\s.+$/gm) || [];
}

function parseExportNames(content) {
  const names = new Set();
  const defaultNames = new Set();
  let match = null;

  const addName = (value, target = names) => {
    const normalized = String(value || '').trim();
    if (/^[A-Z][A-Za-z0-9_]*$/.test(normalized)) {
      target.add(normalized);
    }
  };

  const functionRe = /\bexport\s+function\s+([A-Z][A-Za-z0-9_]*)/g;
  while ((match = functionRe.exec(content)) !== null) addName(match[1]);

  const variableRe = /\bexport\s+(?:const|let|var|class)\s+([A-Z][A-Za-z0-9_]*)/g;
  while ((match = variableRe.exec(content)) !== null) addName(match[1]);

  const exportListRe = /\bexport\s*\{\s*([^}]+)\s*\}/g;
  while ((match = exportListRe.exec(content)) !== null) {
    String(match[1] || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
      .forEach((item) => {
        const parts = item.split(/\s+as\s+/i).map((part) => part.trim()).filter(Boolean);
        addName(parts[parts.length - 1]);
      });
  }

  const defaultFunctionRe = /\bexport\s+default\s+function\s+([A-Z][A-Za-z0-9_]*)/g;
  while ((match = defaultFunctionRe.exec(content)) !== null) addName(match[1], defaultNames);

  const defaultClassRe = /\bexport\s+default\s+class\s+([A-Z][A-Za-z0-9_]*)/g;
  while ((match = defaultClassRe.exec(content)) !== null) addName(match[1], defaultNames);

  const defaultNameRe = /\bexport\s+default\s+([A-Z][A-Za-z0-9_]*)\s*;?/g;
  while ((match = defaultNameRe.exec(content)) !== null) addName(match[1], defaultNames);

  defaultNames.forEach((name) => names.add(name));

  return {
    exports: [...names].sort(),
    default_export: [...defaultNames][0] || ''
  };
}

function buildComponentCatalog() {
  const componentsRoot = resolveRepoPath('snippets/components');
  const files = walkFiles(componentsRoot, {
    skipDir: (relPath) => shouldSkipSourceTreeDir(relPath),
    includeFile: (relPath) => relPath.endsWith('.jsx')
  });
  const allComponents = new Set();
  const sourceMap = new Map();

  files.forEach((file) => {
    const content = fs.readFileSync(file.absPath, 'utf8');
    const exportInfo = parseExportNames(content);
    exportInfo.exports.forEach((name) => allComponents.add(name));

    const relPath = file.relPath;
    const noExt = relPath.replace(/\.jsx$/i, '');
    const meta = {
      rel_path: relPath,
      exports: exportInfo.exports,
      default_export: exportInfo.default_export
    };

    [relPath, `/${relPath}`, noExt, `/${noExt}`].forEach((key) => {
      sourceMap.set(key, meta);
    });
  });

  return {
    allComponents: [...allComponents].sort(),
    sourceMap
  };
}

function parseNamedImports(namedPart) {
  return String(namedPart || '')
    .replace(/^\{/, '')
    .replace(/\}$/, '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => item.split(/\s+as\s+/i)[0].trim())
    .filter((item) => /^[A-Z][A-Za-z0-9_]*$/.test(item));
}

function parseComponentImportSpec(spec, fileMeta) {
  const used = new Set();
  const normalizedSpec = String(spec || '').trim();
  if (!normalizedSpec) return [];

  const addDefault = (localName) => {
    const candidate = fileMeta.default_export || (fileMeta.exports.length === 1 ? fileMeta.exports[0] : localName);
    if (/^[A-Z][A-Za-z0-9_]*$/.test(candidate)) {
      used.add(candidate);
    }
  };

  if (normalizedSpec.includes('{')) {
    const braceIndex = normalizedSpec.indexOf('{');
    const defaultPart = normalizedSpec.slice(0, braceIndex).replace(/,$/, '').trim();
    const namedPart = normalizedSpec.slice(braceIndex);
    if (defaultPart && !defaultPart.startsWith('*')) {
      addDefault(defaultPart);
    }
    parseNamedImports(namedPart).forEach((name) => used.add(name));
    return [...used];
  }

  if (normalizedSpec.startsWith('{')) {
    parseNamedImports(normalizedSpec).forEach((name) => used.add(name));
    return [...used];
  }

  if (normalizedSpec.startsWith('*')) {
    if (fileMeta.default_export) used.add(fileMeta.default_export);
    return [...used];
  }

  addDefault(normalizedSpec);
  return [...used];
}

function parseComponentImports(content, componentCatalog) {
  const usedComponents = new Set();
  const importRe = /^\s*import\s+([\s\S]*?)\s+from\s+['"]([^'"]+)['"]\s*;?/gm;
  let match = null;

  while ((match = importRe.exec(content)) !== null) {
    const spec = String(match[1] || '').trim();
    const source = String(match[2] || '').trim();
    if (!(source.startsWith('/snippets/components/') || source.startsWith('snippets/components/'))) {
      continue;
    }
    const fileMeta = componentCatalog.sourceMap.get(source);
    if (!fileMeta) continue;
    parseComponentImportSpec(spec, fileMeta).forEach((name) => {
      if (componentCatalog.allComponents.includes(name)) {
        usedComponents.add(name);
      }
    });
  }

  return [...usedComponents];
}

function percentileNearestRank(values, percentile) {
  if (!Array.isArray(values) || values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const rank = Math.max(1, Math.ceil(percentile * sorted.length));
  return sorted[rank - 1];
}

function measureImportComplexity(files) {
  const perFile = files.map((filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    return {
      file: relFromRoot(filePath),
      count: extractImportStatements(content).length
    };
  });

  const counts = perFile.map((entry) => entry.count);
  const maxEntry = perFile.reduce((best, entry) => (entry.count > best.count ? entry : best), { file: '', count: 0 });

  return {
    max: maxEntry.count,
    avg: counts.length > 0 ? round(counts.reduce((total, count) => total + count, 0) / counts.length, 2) : 0,
    p95: percentileNearestRank(counts, 0.95),
    max_file: maxEntry.file
  };
}

function measureOrphanPages() {
  const navigationResult = docsNavigationTests.runTests({ writeReport: false });
  const rawOrphans = navigationResult.warnings
    .filter((warning) => warning.rule === 'Orphaned page')
    .map((warning) => toPosix(warning.file))
    .sort();
  const ignored = listMintIgnoredRepoPaths(rawOrphans, { rootDir: REPO_ROOT });
  const orphanPaths = rawOrphans.filter((repoPath) => !ignored.has(repoPath));

  return {
    orphan_count: orphanPaths.length,
    orphan_paths: orphanPaths,
    validator_warning_count: rawOrphans.length,
    mintignored_orphan_candidates: rawOrphans.length - orphanPaths.length,
    docs_navigation_error_count: navigationResult.errors.length
  };
}

function measureScriptHealth() {
  const selfResult = scriptDocsTests.runTests({
    files: ['tools/scripts/measure-performance.js'],
    enforceExisting: true
  });
  const repoResult = scriptDocsTests.runTests({
    enforceExisting: true
  });

  const repoFail = repoResult.errors.length;
  const repoPass = Math.max(0, repoResult.total - repoFail);
  const repoPassRate = repoResult.total > 0 ? round((repoPass / repoResult.total) * 100, 2) : 100;

  return {
    pass: repoPass,
    fail: repoFail,
    total: repoResult.total,
    pass_rate: repoPassRate,
    self_check: {
      passed: selfResult.errors.length === 0,
      fail: selfResult.errors.length,
      total: selfResult.total,
      errors: selfResult.errors.map((error) => ({
        file: error.file,
        rule: error.rule,
        message: error.message
      }))
    }
  };
}

function normalizeCheckLabel(label) {
  return String(label || '')
    .replace(/\$\{[^}]+\}/g, '')
    .replace(/[^\x20-\x7E]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\.\.\.$/, '')
    .trim()
    .toLowerCase();
}

function countPreCommitChecks() {
  const hookText = readText('.githooks/pre-commit');
  const labels = new Set();
  const labelDetails = [];

  const addLabel = (rawLabel) => {
    const normalized = normalizeCheckLabel(rawLabel);
    if (!normalized) return;
    if (!labels.has(normalized)) {
      labels.add(normalized);
      labelDetails.push(
        rawLabel
          .replace(/\$\{[^}]+\}/g, '')
          .replace(/[^\x20-\x7E]/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
      );
    }
  };

  const runNodeRe = /run_node_check\s*\\?\s*(?:\r?\n\s*)+"([^"]+)"/g;
  let match = null;
  while ((match = runNodeRe.exec(hookText)) !== null) {
    addLabel(match[1]);
  }

  hookText.split(/\r?\n/).forEach((line) => {
    if (!/\becho\b/.test(line)) return;
    const quoted = [...line.matchAll(/"([^"]+)"/g)].map((item) => item[1]);
    quoted.forEach((segment) => {
      if (segment.includes('Checking ') || segment.includes('🔍 Checking')) {
        addLabel(segment);
      }
    });
  });

  return {
    count: labels.size,
    labels: labelDetails.sort((a, b) => a.localeCompare(b))
  };
}

function classifyFileCountPaths(files) {
  const counts = {
    mdx: 0,
    jsx: 0,
    js_scripts: 0,
    json_config: 0,
    css: 0
  };

  files.forEach((file) => {
    const relPath = file.relPath;
    if (relPath.endsWith('.mdx')) counts.mdx += 1;
    if (relPath.endsWith('.jsx')) counts.jsx += 1;
    if (
      relPath.endsWith('.js') &&
      SCRIPT_ROOTS.some((root) => relPath === root || relPath.startsWith(`${root}/`))
    ) {
      counts.js_scripts += 1;
    }
    if (
      relPath.endsWith('.json') &&
      (
        relPath === 'docs.json' ||
        relPath.endsWith('package.json') ||
        relPath.endsWith('package-lock.json') ||
        relPath.includes('/config/') ||
        relPath.startsWith('tests/config/')
      )
    ) {
      counts.json_config += 1;
    }
    if (relPath.endsWith('.css')) counts.css += 1;
  });

  return counts;
}

function measureDxDomain(options) {
  const sourceFiles = walkFiles(REPO_ROOT, {
    skipDir: (relPath) => shouldSkipSourceTreeDir(relPath),
    includeFile: (relPath) => !isBackupOrTempFile(relPath)
  });
  const englishMdxFiles = getEnglishV2MdxFiles();
  const componentCatalog = buildComponentCatalog();
  const componentCounts = Object.fromEntries(componentCatalog.allComponents.map((name) => [name, 0]));

  englishMdxFiles.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const used = parseComponentImports(content, componentCatalog);
    used.forEach((componentName) => {
      componentCounts[componentName] += 1;
    });
  });

  const sortedUsage = Object.entries(componentCounts).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return a[0].localeCompare(b[0]);
  });
  const leastUsage = [...sortedUsage].sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0].localeCompare(b[0]);
  });
  const orphanMetrics = measureOrphanPages();
  const scriptHealth = measureScriptHealth();
  const preCommitChecks = countPreCommitChecks();

  return {
    domain: 'dx',
    measured: true,
    file_counts: classifyFileCountPaths(sourceFiles),
    import_complexity: measureImportComplexity(englishMdxFiles),
    component_usage: {
      total_components: componentCatalog.allComponents.length,
      used_components: Object.values(componentCounts).filter((count) => count > 0).length,
      most_used: sortedUsage[0] || ['', 0],
      least_used: leastUsage[0] || ['', 0],
      top_components: sortedUsage.slice(0, 10)
    },
    orphan_count: orphanMetrics.orphan_count,
    orphan_paths: orphanMetrics.orphan_paths,
    orphan_debug: {
      validator_warning_count: orphanMetrics.validator_warning_count,
      mintignored_orphan_candidates: orphanMetrics.mintignored_orphan_candidates,
      docs_navigation_error_count: orphanMetrics.docs_navigation_error_count
    },
    script_health: scriptHealth,
    pre_commit_check_count: preCommitChecks.count,
    pre_commit_check_labels: preCommitChecks.labels
  };
}

function canUseGh() {
  if (cachedGhAvailability !== null) return cachedGhAvailability;
  const result = spawnSync('gh', ['auth', 'status'], {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    timeout: 30000
  });
  cachedGhAvailability = result.status === 0;
  return cachedGhAvailability;
}

function fetchWorkflowRuns(workflowName) {
  if (!workflowName) {
    return {
      workflow_name: '',
      workflow_status: 'unavailable',
      workflow_conclusion: '',
      workflow_created_at: '',
      workflow_available: false,
      workflow_runs: [],
      workflow_reason: 'No GitHub workflow found in repository'
    };
  }

  if (!canUseGh()) {
    return {
      workflow_name: workflowName,
      workflow_status: 'unavailable',
      workflow_conclusion: '',
      workflow_created_at: '',
      workflow_available: false,
      workflow_runs: [],
      workflow_reason: 'gh CLI is unavailable or unauthenticated'
    };
  }

  try {
    const output = execFileSync(
      'gh',
      [
        'run',
        'list',
        '--repo',
        'livepeer/docs',
        '--workflow',
        workflowName,
        '--limit',
        '5',
        '--json',
        'status,conclusion,createdAt'
      ],
      {
        cwd: REPO_ROOT,
        encoding: 'utf8',
        maxBuffer: 10 * 1024 * 1024
      }
    ).trim();
    const runs = output ? JSON.parse(output) : [];
    const latest = runs[0] || {};
    return {
      workflow_name: workflowName,
      workflow_status: latest.status || 'unknown',
      workflow_conclusion: latest.conclusion || '',
      workflow_created_at: latest.createdAt || '',
      workflow_available: true,
      workflow_runs: runs,
      workflow_reason: ''
    };
  } catch (error) {
    return {
      workflow_name: workflowName,
      workflow_status: 'unavailable',
      workflow_conclusion: '',
      workflow_created_at: '',
      workflow_available: false,
      workflow_runs: [],
      workflow_reason: error.message
    };
  }
}

function getLastCommitIso(repoPath) {
  try {
    const output = runGit(['log', '-1', '--format=%cI', '--', repoPath]);
    return output || '';
  } catch (_error) {
    return '';
  }
}

function computeStalenessHours(lastCommitIso) {
  if (!lastCommitIso) return null;
  const timestamp = Date.parse(lastCommitIso);
  if (Number.isNaN(timestamp)) return null;
  return Math.floor((Date.now() - timestamp) / (60 * 60 * 1000));
}

function classifyStaleness(hours) {
  if (!Number.isFinite(hours)) return 'unknown';
  if (hours < 24) return 'fresh';
  if (hours <= 72) return 'warning';
  return 'stale';
}

function parseGlobalsVersion() {
  const content = readText('snippets/automations/globals/globals.mdx');
  const match = content.match(/latestVersion\s*=\s*["']([^"']+)["']/);
  return match ? match[1].trim() : '';
}

function requestJson(urlString) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlString);
    const client = url.protocol === 'https:' ? https : http;
    const req = client.request(
      url,
      {
        method: 'GET',
        headers: {
          'User-Agent': 'livepeer-docs-measure-performance'
        }
      },
      (res) => {
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => {
          if (res.statusCode && res.statusCode >= 400) {
            reject(new Error(`HTTP ${res.statusCode}`));
            return;
          }
          try {
            resolve(JSON.parse(body));
          } catch (error) {
            reject(error);
          }
        });
      }
    );
    req.setTimeout(15000, () => {
      req.destroy(new Error('Request timed out'));
    });
    req.on('error', reject);
    req.end();
  });
}

async function fetchLatestGoLivepeerRelease() {
  if (canUseGh()) {
    try {
      const output = execFileSync(
        'gh',
        ['api', 'repos/livepeer/go-livepeer/releases/latest', '--jq', '.tag_name'],
        {
          cwd: REPO_ROOT,
          encoding: 'utf8',
          maxBuffer: 5 * 1024 * 1024
        }
      ).trim();
      if (output) return output;
    } catch (_error) {
      // Fall through to HTTP fallback.
    }
  }

  try {
    const payload = await requestJson('https://api.github.com/repos/livepeer/go-livepeer/releases/latest');
    return String(payload.tag_name || '').trim();
  } catch (_error) {
    return 'unknown';
  }
}

function loadPuppeteer() {
  const searchPaths = [
    path.join(REPO_ROOT, 'tools', 'node_modules'),
    path.join(REPO_ROOT, 'tests', 'node_modules')
  ];

  for (const searchPath of searchPaths) {
    try {
      const resolved = require.resolve('puppeteer', { paths: [searchPath] });
      return {
        puppeteer: require(resolved),
        resolved
      };
    } catch (_error) {
      // Keep searching.
    }
  }

  try {
    return {
      puppeteer: require('puppeteer'),
      resolved: 'puppeteer'
    };
  } catch (error) {
    throw new Error(`Unable to resolve puppeteer: ${error.message}`);
  }
}

function checkUrlReachable(urlString) {
  return new Promise((resolve) => {
    try {
      const url = new URL(urlString);
      const client = url.protocol === 'https:' ? https : http;
      const req = client.request(
        url,
        {
          method: 'GET',
          headers: {
            'User-Agent': 'livepeer-docs-measure-performance'
          }
        },
        (res) => {
          res.resume();
          resolve({
            reachable: true,
            status_code: res.statusCode || null
          });
        }
      );
      req.setTimeout(15000, () => {
        req.destroy(new Error('Request timed out'));
      });
      req.on('error', (error) => {
        resolve({
          reachable: false,
          status_code: null,
          error: error.message
        });
      });
      req.end();
    } catch (error) {
      resolve({
        reachable: false,
        status_code: null,
        error: error.message
      });
    }
  });
}

function waitMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitForPromiseWithTimeout(promise, timeoutMs) {
  return Promise.race([promise, waitMs(timeoutMs)]);
}

async function measurePage(browser, pagePath, baseUrl) {
  const url = `${baseUrl}/${pagePath}`;
  const page = await browser.newPage();
  const session = await page.target().createCDPSession();
  const requestIds = new Set();
  const resourceTypes = new Map();
  let transferBytes = 0;
  let largestImageBytes = 0;
  let status = null;

  await session.send('Network.enable');

  session.on('Network.requestWillBeSent', (event) => {
    if (event.requestId) requestIds.add(event.requestId);
    if (event.requestId && event.type) resourceTypes.set(event.requestId, event.type);
  });

  session.on('Network.responseReceived', (event) => {
    if (event.requestId && event.type) resourceTypes.set(event.requestId, event.type);
  });

  session.on('Network.loadingFinished', (event) => {
    const bytes = Number(event.encodedDataLength || 0);
    transferBytes += bytes;
    if ((resourceTypes.get(event.requestId) || '').toLowerCase() === 'image' && bytes > largestImageBytes) {
      largestImageBytes = bytes;
    }
  });

  try {
    const response = await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 30000
    });
    status = response ? response.status() : null;
    await waitMs(2000);
    const navigationTiming = await page.evaluate(() => {
      const entry = performance.getEntriesByType('navigation')[0];
      if (!entry) return null;
      return {
        domContentLoadedEventEnd: entry.domContentLoadedEventEnd > 0 ? Math.round(entry.domContentLoadedEventEnd) : null,
        loadEventEnd: entry.loadEventEnd > 0 ? Math.round(entry.loadEventEnd) : null
      };
    });

    return {
      path: pagePath,
      url,
      measured: true,
      status_code: status,
      request_count: requestIds.size,
      transfer_size_bytes: transferBytes,
      transfer_size_kb: bytesToKb(transferBytes),
      dom_content_loaded_ms: navigationTiming ? navigationTiming.domContentLoadedEventEnd : null,
      load_event_ms: navigationTiming ? navigationTiming.loadEventEnd : null,
      largest_image_bytes: largestImageBytes,
      largest_image_kb: bytesToKb(largestImageBytes),
      reason: ''
    };
  } catch (error) {
    return {
      path: pagePath,
      url,
      measured: false,
      status_code: status,
      request_count: requestIds.size,
      transfer_size_bytes: transferBytes,
      transfer_size_kb: bytesToKb(transferBytes),
      dom_content_loaded_ms: null,
      load_event_ms: null,
      largest_image_bytes: largestImageBytes,
      largest_image_kb: bytesToKb(largestImageBytes),
      reason: error.message
    };
  } finally {
    try {
      await waitForPromiseWithTimeout(session.detach(), 2000);
    } catch (_error) {
      // Session may already be closed.
    }
    try {
      await waitForPromiseWithTimeout(page.close({ runBeforeUnload: false }), 3000);
    } catch (_error) {
      // Best-effort close only.
    }
  }
}

function summarizePageLoadPages(pages) {
  const measuredPages = pages.filter((page) => page.measured);
  if (measuredPages.length === 0) {
    return {
      measured_pages: 0,
      avg_transfer_size_kb: null,
      max_transfer_size_kb: null,
      avg_request_count: null,
      avg_dom_content_loaded_ms: null,
      avg_load_event_ms: null
    };
  }

  const average = (values) => round(values.reduce((total, value) => total + value, 0) / values.length, 2);

  return {
    measured_pages: measuredPages.length,
    avg_transfer_size_kb: average(measuredPages.map((page) => Number(page.transfer_size_kb || 0))),
    max_transfer_size_kb: round(Math.max(...measuredPages.map((page) => Number(page.transfer_size_kb || 0))), 2),
    avg_request_count: average(measuredPages.map((page) => Number(page.request_count || 0))),
    avg_dom_content_loaded_ms: average(measuredPages.map((page) => Number(page.dom_content_loaded_ms || 0))),
    avg_load_event_ms: average(measuredPages.map((page) => Number(page.load_event_ms || 0)))
  };
}

async function measurePageLoadDomain(options) {
  const domain = {
    domain: 'pageload',
    measured: false,
    base_url: options.baseUrl,
    sample_pages: PAGELOAD_SAMPLE_PATHS,
    pages: [],
    summary: {}
  };

  let browser = null;

  try {
    const puppeteerInfo = loadPuppeteer();
    const reachability = await checkUrlReachable(`${options.baseUrl}/${PAGELOAD_SAMPLE_PATHS[0]}`);
    if (!reachability.reachable) {
      domain.reason = `Live site is unreachable: ${reachability.error || 'unknown error'}`;
      domain.puppeteer = {
        resolved_from: puppeteerInfo.resolved
      };
      return domain;
    }

    browser = await puppeteerInfo.puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    for (const pagePath of PAGELOAD_SAMPLE_PATHS) {
      logVerbose(options, `Measuring page load for ${pagePath}`);
      domain.pages.push(await measurePage(browser, pagePath, options.baseUrl));
    }

    domain.measured = true;
    domain.reason = '';
    domain.puppeteer = {
      resolved_from: puppeteerInfo.resolved
    };
    domain.summary = summarizePageLoadPages(domain.pages);
    return domain;
  } catch (error) {
    domain.reason = error.message;
    return domain;
  } finally {
    if (browser) {
      try {
        await waitForPromiseWithTimeout(browser.close(), 5000);
      } catch (_error) {
        // Ignore close errors.
      }
    }
  }
}

async function measureFreshnessDomain(options) {
  const globalsVersion = parseGlobalsVersion();
  const latestRelease = await fetchLatestGoLivepeerRelease();

  const pipelines = FRESHNESS_PIPELINES.map((pipeline) => {
    const lastCommit = getLastCommitIso(pipeline.file);
    const stalenessHours = computeStalenessHours(lastCommit);
    const workflow = fetchWorkflowRuns(pipeline.workflowName);
    return {
      file: pipeline.file,
      last_commit: lastCommit || '',
      staleness_hours: stalenessHours,
      status: classifyStaleness(stalenessHours),
      ...workflow
    };
  });

  return {
    domain: 'freshness',
    measured: true,
    pipelines,
    stale_pipeline_count: pipelines.filter((pipeline) => Number.isFinite(pipeline.staleness_hours) && pipeline.staleness_hours >= 24).length,
    max_staleness_hours: pipelines.reduce((max, pipeline) => {
      if (!Number.isFinite(pipeline.staleness_hours)) return max;
      return Math.max(max, pipeline.staleness_hours);
    }, 0),
    globals_version: globalsVersion || '',
    latest_release: latestRelease || 'unknown',
    version_match: Boolean(globalsVersion) && Boolean(latestRelease) && globalsVersion === latestRelease
  };
}

function skipDomain(domainName, reason) {
  return {
    domain: domainName,
    measured: false,
    skipped: true,
    reason
  };
}

function statusForRepoSize(value) {
  if (!Number.isFinite(value)) return 'info';
  if (value < 200) return 'green';
  if (value <= 400) return 'yellow';
  return 'red';
}

function statusForAssetsPct(value) {
  if (!Number.isFinite(value)) return 'info';
  if (value < 50) return 'green';
  if (value <= 75) return 'yellow';
  return 'red';
}

function statusForDocsJsonLines(value) {
  if (!Number.isFinite(value)) return 'info';
  if (value < 1000) return 'green';
  if (value <= 2000) return 'yellow';
  return 'red';
}

function statusForPageTransferKb(value) {
  if (!Number.isFinite(value)) return 'info';
  if (value < 500) return 'green';
  if (value <= 1000) return 'yellow';
  return 'red';
}

function statusForImportMax(value) {
  if (!Number.isFinite(value)) return 'info';
  if (value < 10) return 'green';
  if (value <= 20) return 'yellow';
  return 'red';
}

function statusForImportAvg(value) {
  if (!Number.isFinite(value)) return 'info';
  if (value < 3) return 'green';
  if (value <= 6) return 'yellow';
  return 'red';
}

function statusForPipelineStaleness(value) {
  if (!Number.isFinite(value)) return 'info';
  if (value < 24) return 'green';
  if (value <= 72) return 'yellow';
  return 'red';
}

function statusForOrphans(value) {
  if (!Number.isFinite(value)) return 'info';
  if (value === 0) return 'green';
  if (value <= 5) return 'yellow';
  return 'red';
}

function statusForScriptHealth(value) {
  if (!Number.isFinite(value)) return 'info';
  if (value === 100) return 'green';
  if (value > 90) return 'yellow';
  return 'red';
}

function scoreBuildDomain(domain) {
  if (!domain.measured) return null;
  const repoSizeMb = Number(domain.repo_size_mb || 0);
  const over = Math.max(0, repoSizeMb - 200);
  return round(Math.max(0, 100 - (over / 100) * 10), 2);
}

function scorePageLoadPage(page) {
  if (!page.measured) return 0;
  const transfer = Number(page.transfer_size_kb || 0);
  const status = statusForPageTransferKb(transfer);
  if (status === 'green') return 100;
  if (status === 'yellow') return 60;
  return 20;
}

function scorePageLoadDomain(domain) {
  if (!domain.measured) return null;
  if (!Array.isArray(domain.pages) || domain.pages.length === 0) return null;
  const total = domain.pages.reduce((sum, page) => sum + scorePageLoadPage(page), 0);
  return round(total / domain.pages.length, 2);
}

function scoreDxDomain(domain) {
  if (!domain.measured) return null;
  let score = 100;
  const orphanCount = Number(domain.orphan_count || 0);
  const passRate = Number(domain.script_health?.pass_rate || 0);
  const importAvg = Number(domain.import_complexity?.avg || 0);
  const importMax = Number(domain.import_complexity?.max || 0);

  if (orphanCount > 0) {
    score -= Math.min(40, 20 + orphanCount * 2);
  }

  score -= Math.max(0, 100 - passRate);

  if (importAvg > 5) {
    score -= Math.min(20, (importAvg - 5) * 5);
  }

  if (importMax >= 10 && importMax <= 20) {
    score -= 10;
  } else if (importMax > 20) {
    score -= 20;
  }

  return round(Math.max(0, score), 2);
}

function scoreFreshnessDomain(domain) {
  if (!domain.measured) return null;
  const stalePipelines = Array.isArray(domain.pipelines)
    ? domain.pipelines.filter((pipeline) => !Number.isFinite(pipeline.staleness_hours) || pipeline.staleness_hours >= 24).length
    : 0;
  return Math.max(0, 100 - stalePipelines * 10);
}

function computeScores(domains) {
  const scores = {
    build: scoreBuildDomain(domains.build),
    pageload: scorePageLoadDomain(domains.pageload),
    dx: scoreDxDomain(domains.dx),
    freshness: scoreFreshnessDomain(domains.freshness)
  };

  const weighted = Object.entries(DOMAIN_WEIGHTS)
    .map(([domainName, weight]) => ({
      weight,
      score: scores[domainName]
    }))
    .filter((entry) => Number.isFinite(entry.score));

  if (weighted.length === 0) {
    scores.overall = null;
    return scores;
  }

  const totalWeight = weighted.reduce((sum, entry) => sum + entry.weight, 0);
  const weightedScore = weighted.reduce((sum, entry) => sum + entry.score * entry.weight, 0);
  scores.overall = round(weightedScore / totalWeight, 2);
  return scores;
}

function collectThresholdFindings(report) {
  const findings = [];

  const pushFinding = (domain, metric, value, status, details) => {
    findings.push({
      domain,
      metric,
      value,
      status,
      details
    });
  };

  if (report.domains.build?.measured) {
    pushFinding('build', 'Repo size', report.domains.build.repo_size_mb, statusForRepoSize(report.domains.build.repo_size_mb), `${report.domains.build.repo_size_mb} MB`);
    pushFinding('build', 'Assets % of repo', report.domains.build.assets_pct_of_repo, statusForAssetsPct(report.domains.build.assets_pct_of_repo), `${report.domains.build.assets_pct_of_repo}%`);
    pushFinding('build', 'docs.json lines', report.domains.build.docs_json_lines, statusForDocsJsonLines(report.domains.build.docs_json_lines), `${report.domains.build.docs_json_lines}`);
  }

  if (report.domains.pageload?.measured) {
    report.domains.pageload.pages.forEach((page) => {
      pushFinding(
        'pageload',
        `Transfer size (${page.path})`,
        page.transfer_size_kb,
        statusForPageTransferKb(Number(page.transfer_size_kb || 0)),
        `${page.transfer_size_kb} KB`
      );
    });
  }

  if (report.domains.dx?.measured) {
    pushFinding('dx', 'Import max', report.domains.dx.import_complexity.max, statusForImportMax(report.domains.dx.import_complexity.max), `${report.domains.dx.import_complexity.max}`);
    pushFinding('dx', 'Import avg', report.domains.dx.import_complexity.avg, statusForImportAvg(report.domains.dx.import_complexity.avg), `${report.domains.dx.import_complexity.avg}`);
    pushFinding('dx', 'Orphan pages', report.domains.dx.orphan_count, statusForOrphans(report.domains.dx.orphan_count), `${report.domains.dx.orphan_count}`);
    pushFinding(
      'dx',
      'Script health',
      report.domains.dx.script_health.pass_rate,
      statusForScriptHealth(report.domains.dx.script_health.pass_rate),
      `${report.domains.dx.script_health.pass_rate}%`
    );
  }

  if (report.domains.freshness?.measured) {
    report.domains.freshness.pipelines.forEach((pipeline) => {
      pushFinding(
        'freshness',
        `Pipeline staleness (${pipeline.file})`,
        pipeline.staleness_hours,
        statusForPipelineStaleness(pipeline.staleness_hours),
        Number.isFinite(pipeline.staleness_hours) ? `${pipeline.staleness_hours}h` : 'unknown'
      );
    });
  }

  return findings;
}

function getComparisonMetrics(report) {
  return {
    overall_score: report.scores?.overall,
    build_repo_size_mb: report.domains?.build?.repo_size_mb,
    build_assets_pct_of_repo: report.domains?.build?.assets_pct_of_repo,
    build_docs_json_lines: report.domains?.build?.docs_json_lines,
    build_pre_commit_time_ms: report.domains?.build?.pre_commit_hook?.time_ms,
    dx_import_avg: report.domains?.dx?.import_complexity?.avg,
    dx_import_max: report.domains?.dx?.import_complexity?.max,
    dx_orphan_count: report.domains?.dx?.orphan_count,
    dx_script_health_pass_rate: report.domains?.dx?.script_health?.pass_rate,
    pageload_avg_transfer_size_kb: report.domains?.pageload?.summary?.avg_transfer_size_kb,
    pageload_max_transfer_size_kb: report.domains?.pageload?.summary?.max_transfer_size_kb,
    freshness_stale_pipeline_count: report.domains?.freshness?.stale_pipeline_count,
    freshness_max_staleness_hours: report.domains?.freshness?.max_staleness_hours
  };
}

function buildComparison(previousReport, currentReport, comparisonSource) {
  if (!previousReport) {
    return {
      available: false,
      comparison_source: comparisonSource,
      previous_generated_at: '',
      metrics: {}
    };
  }

  const previousMetrics = getComparisonMetrics(previousReport);
  const currentMetrics = getComparisonMetrics(currentReport);
  const metrics = {};

  Object.keys(currentMetrics).forEach((key) => {
    const previousValue = previousMetrics[key];
    const currentValue = currentMetrics[key];
    if (Number.isFinite(previousValue) && Number.isFinite(currentValue)) {
      metrics[key] = {
        previous: previousValue,
        current: currentValue,
        delta: round(currentValue - previousValue, 2)
      };
    }
  });

  return {
    available: true,
    comparison_source: comparisonSource,
    previous_generated_at: previousReport.generated_at || '',
    metrics
  };
}

function formatValue(value) {
  if (value === null || typeof value === 'undefined' || value === '') return '-';
  if (typeof value === 'number') return Number.isInteger(value) ? String(value) : String(round(value, 2));
  return String(value);
}

function formatDelta(value) {
  if (!Number.isFinite(value)) return '-';
  if (value > 0) return `+${formatValue(value)}`;
  return formatValue(value);
}

function buildSummaryRows(report) {
  return [
    {
      domain: 'Build',
      measured: report.domains.build?.measured ? 'yes' : 'no',
      score: formatValue(report.scores.build),
      notes: report.domains.build?.measured ? `${report.domains.build.repo_size_mb} MB repo` : report.domains.build?.reason || 'skipped'
    },
    {
      domain: 'Page Load',
      measured: report.domains.pageload?.measured ? 'yes' : 'no',
      score: formatValue(report.scores.pageload),
      notes: report.domains.pageload?.measured ? `${report.domains.pageload.summary.avg_transfer_size_kb} KB avg transfer` : report.domains.pageload?.reason || 'skipped'
    },
    {
      domain: 'DX',
      measured: report.domains.dx?.measured ? 'yes' : 'no',
      score: formatValue(report.scores.dx),
      notes: report.domains.dx?.measured ? `${report.domains.dx.orphan_count} orphan pages` : report.domains.dx?.reason || 'skipped'
    },
    {
      domain: 'Freshness',
      measured: report.domains.freshness?.measured ? 'yes' : 'no',
      score: formatValue(report.scores.freshness),
      notes: report.domains.freshness?.measured ? `${report.domains.freshness.stale_pipeline_count} stale pipelines` : report.domains.freshness?.reason || 'skipped'
    },
    {
      domain: 'Overall',
      measured: 'weighted',
      score: formatValue(report.scores.overall),
      notes: report.score_policy
    }
  ];
}

function renderTable(headers, rows) {
  const lines = [];
  lines.push(`| ${headers.join(' | ')} |`);
  lines.push(`| ${headers.map(() => '---').join(' | ')} |`);
  rows.forEach((row) => {
    lines.push(`| ${row.map((cell) => String(cell).replace(/\|/g, '\\|')).join(' | ')} |`);
  });
  return lines.join('\n');
}

function buildMarkdown(report) {
  const lines = [];
  const findings = report.threshold_findings || [];
  const redFindings = findings.filter((finding) => finding.status === 'red');

  lines.push('# Performance Baseline');
  lines.push('');
  lines.push(`- Generated: ${report.generated_at}`);
  lines.push(`- Requested domain: ${report.requested_domain}`);
  lines.push(`- Output directory: ${report.output_dir}`);
  lines.push(`- Comparison source: ${report.comparison_source || '-'}`);
  lines.push(`- Score policy: ${report.score_policy}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(
    renderTable(
      ['Domain', 'Measured', 'Score', 'Notes'],
      buildSummaryRows(report).map((row) => [row.domain, row.measured, row.score, row.notes])
    )
  );
  lines.push('');
  lines.push('## Top Issues');
  lines.push('');
  if (redFindings.length === 0) {
    lines.push('- No red-threshold issues detected in this baseline.');
  } else {
    redFindings.forEach((finding) => {
      lines.push(`- ${finding.domain}: ${finding.metric} = ${finding.details}`);
    });
  }
  lines.push('');

  lines.push('## Build');
  lines.push('');
  if (!report.domains.build?.measured) {
    lines.push(`- Unmeasured: ${report.domains.build?.reason || 'not requested'}`);
  } else {
    lines.push(
      renderTable(
        ['Metric', 'Value', 'Status'],
        [
          ['Repo size', `${formatValue(report.domains.build.repo_size_mb)} MB`, statusForRepoSize(report.domains.build.repo_size_mb)],
          ['Assets size', `${formatValue(report.domains.build.assets_size_mb)} MB`, 'info'],
          ['Assets % of repo', `${formatValue(report.domains.build.assets_pct_of_repo)}%`, statusForAssetsPct(report.domains.build.assets_pct_of_repo)],
          ['docs.json bytes', formatValue(report.domains.build.docs_json_bytes), 'info'],
          ['docs.json lines', formatValue(report.domains.build.docs_json_lines), statusForDocsJsonLines(report.domains.build.docs_json_lines)],
          ['style.css lines', formatValue(report.domains.build.style_css_lines), 'info'],
          ['Total MDX files', formatValue(report.domains.build.total_mdx_files), 'info'],
          ['EN v2 MDX files', formatValue(report.domains.build.en_mdx_files), 'info'],
          ['Pre-commit hook time', `${formatValue(report.domains.build.pre_commit_hook.time_ms)} ms`, 'info'],
          ['Pre-commit exit', formatValue(report.domains.build.pre_commit_hook.exit_code), 'info'],
          ['Test startup time', `${formatValue(report.domains.build.test_suite_startup.time_ms)} ms`, 'info']
        ]
      )
    );
    lines.push('');
    lines.push('Asset breakdown:');
    report.domains.build.asset_breakdown.slice(0, 10).forEach((entry) => {
      lines.push(`- ${entry.name}: ${entry.mb} MB`);
    });
  }
  lines.push('');

  lines.push('## Page Load');
  lines.push('');
  if (!report.domains.pageload?.measured) {
    lines.push(`- Unmeasured: ${report.domains.pageload?.reason || 'not requested'}`);
  } else {
    lines.push(
      renderTable(
        ['Path', 'Transfer', 'Status', 'Requests', 'DOMContentLoaded', 'Load', 'Largest image', 'HTTP'],
        report.domains.pageload.pages.map((page) => [
          page.path,
          `${formatValue(page.transfer_size_kb)} KB`,
          page.measured ? statusForPageTransferKb(page.transfer_size_kb) : 'unmeasured',
          formatValue(page.request_count),
          formatValue(page.dom_content_loaded_ms),
          formatValue(page.load_event_ms),
          `${formatValue(page.largest_image_kb)} KB`,
          formatValue(page.status_code)
        ])
      )
    );
    lines.push('');
    lines.push(`- Average transfer size: ${formatValue(report.domains.pageload.summary.avg_transfer_size_kb)} KB`);
    lines.push(`- Maximum transfer size: ${formatValue(report.domains.pageload.summary.max_transfer_size_kb)} KB`);
    lines.push(`- Average request count: ${formatValue(report.domains.pageload.summary.avg_request_count)}`);
    lines.push(`- Average DOMContentLoaded: ${formatValue(report.domains.pageload.summary.avg_dom_content_loaded_ms)} ms`);
    lines.push(`- Average load event: ${formatValue(report.domains.pageload.summary.avg_load_event_ms)} ms`);
  }
  lines.push('');

  lines.push('## DX');
  lines.push('');
  if (!report.domains.dx?.measured) {
    lines.push(`- Unmeasured: ${report.domains.dx?.reason || 'not requested'}`);
  } else {
    lines.push(
      renderTable(
        ['Metric', 'Value', 'Status'],
        [
          ['Import max', formatValue(report.domains.dx.import_complexity.max), statusForImportMax(report.domains.dx.import_complexity.max)],
          ['Import avg', formatValue(report.domains.dx.import_complexity.avg), statusForImportAvg(report.domains.dx.import_complexity.avg)],
          ['Import p95', formatValue(report.domains.dx.import_complexity.p95), 'info'],
          ['Max import file', report.domains.dx.import_complexity.max_file || '-', 'info'],
          ['Orphan pages', formatValue(report.domains.dx.orphan_count), statusForOrphans(report.domains.dx.orphan_count)],
          ['Script health', `${formatValue(report.domains.dx.script_health.pass_rate)}%`, statusForScriptHealth(report.domains.dx.script_health.pass_rate)],
          ['Pre-commit checks', formatValue(report.domains.dx.pre_commit_check_count), 'info']
        ]
      )
    );
    lines.push('');
    lines.push(`- File counts: MDX ${report.domains.dx.file_counts.mdx}, JSX ${report.domains.dx.file_counts.jsx}, JS scripts ${report.domains.dx.file_counts.js_scripts}, JSON config ${report.domains.dx.file_counts.json_config}, CSS ${report.domains.dx.file_counts.css}`);
    lines.push(`- Most-used component: ${report.domains.dx.component_usage.most_used[0] || '-'} (${report.domains.dx.component_usage.most_used[1] || 0})`);
    lines.push(`- Least-used component: ${report.domains.dx.component_usage.least_used[0] || '-'} (${report.domains.dx.component_usage.least_used[1] || 0})`);
  }
  lines.push('');

  lines.push('## Freshness');
  lines.push('');
  if (!report.domains.freshness?.measured) {
    lines.push(`- Unmeasured: ${report.domains.freshness?.reason || 'not requested'}`);
  } else {
    lines.push(
      renderTable(
        ['Pipeline', 'Staleness', 'Status', 'Last commit', 'Workflow'],
        report.domains.freshness.pipelines.map((pipeline) => [
          pipeline.file,
          Number.isFinite(pipeline.staleness_hours) ? `${pipeline.staleness_hours}h` : '-',
          statusForPipelineStaleness(pipeline.staleness_hours),
          pipeline.last_commit || '-',
          pipeline.workflow_available ? `${pipeline.workflow_status}/${pipeline.workflow_conclusion || '-'}` : pipeline.workflow_status
        ])
      )
    );
    lines.push('');
    lines.push(`- globals.mdx version: ${report.domains.freshness.globals_version || '-'}`);
    lines.push(`- Latest go-livepeer release: ${report.domains.freshness.latest_release || '-'}`);
    lines.push(`- Version match: ${report.domains.freshness.version_match ? 'yes' : 'no'}`);
  }
  lines.push('');

  lines.push('## Comparison');
  lines.push('');
  if (!report.comparison?.available || Object.keys(report.comparison.metrics || {}).length === 0) {
    lines.push('- No previous baseline comparison available.');
  } else {
    lines.push(
      renderTable(
        ['Metric', 'Previous', 'Current', 'Delta'],
        Object.entries(report.comparison.metrics).map(([metric, values]) => [
          metric,
          formatValue(values.previous),
          formatValue(values.current),
          formatDelta(values.delta)
        ])
      )
    );
  }
  lines.push('');

  return `${lines.join('\n')}\n`;
}

function buildReportTemplate(requestedDomain, reason) {
  return {
    build: skipDomain('build', reason || `Domain not requested (${requestedDomain})`),
    pageload: skipDomain('pageload', reason || `Domain not requested (${requestedDomain})`),
    dx: skipDomain('dx', reason || `Domain not requested (${requestedDomain})`),
    freshness: skipDomain('freshness', reason || `Domain not requested (${requestedDomain})`)
  };
}

async function measureRequestedDomains(parsedArgs) {
  const domains = buildReportTemplate(parsedArgs.domain);

  if (parsedArgs.domain === 'all' || parsedArgs.domain === 'build') {
    domains.build = measureBuildDomain(parsedArgs);
  }

  if (parsedArgs.domain === 'all' || parsedArgs.domain === 'pageload') {
    domains.pageload = await measurePageLoadDomain(parsedArgs);
  }

  if (parsedArgs.domain === 'all' || parsedArgs.domain === 'dx') {
    domains.dx = measureDxDomain(parsedArgs);
  }

  if (parsedArgs.domain === 'all' || parsedArgs.domain === 'freshness') {
    domains.freshness = await measureFreshnessDomain(parsedArgs);
  }

  return domains;
}

function writeOutputs(report, parsedArgs) {
  ensureDir(parsedArgs.outDir);
  const timestamp = formatTimestamp(new Date(report.generated_at));
  const jsonPath = path.join(parsedArgs.outDir, `performance-baseline-${timestamp}.json`);
  const mdPath = path.join(parsedArgs.outDir, `performance-baseline-${timestamp}.md`);
  const latestJsonPath = path.join(parsedArgs.outDir, LATEST_JSON_NAME);

  const written = {
    json: '',
    md: '',
    latest_json: ''
  };

  if (parsedArgs.formats.includes('json')) {
    fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
    written.json = jsonPath;
  }

  if (parsedArgs.formats.includes('md')) {
    fs.writeFileSync(mdPath, buildMarkdown(report), 'utf8');
    written.md = mdPath;
  }

  if (parsedArgs.domain === 'all') {
    fs.writeFileSync(latestJsonPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
    written.latest_json = latestJsonPath;
  }

  return written;
}

async function main() {
  const parsedArgs = parseArgs(process.argv.slice(2));
  if (parsedArgs.help) {
    printHelp();
    return 0;
  }

  const generatedAt = new Date().toISOString();
  const comparisonSource = path.join(parsedArgs.outDir, LATEST_JSON_NAME);
  const previousReport = readJsonIfExists(comparisonSource);

  logVerbose(parsedArgs, `Starting measurement for domain ${parsedArgs.domain}`);
  const domains = await measureRequestedDomains(parsedArgs);
  const report = {
    generated_at: generatedAt,
    requested_domain: parsedArgs.domain,
    output_dir: toPosix(path.relative(REPO_ROOT, parsedArgs.outDir)),
    formats: parsedArgs.formats,
    comparison_source: fileExists(relFromRoot(comparisonSource)) ? toPosix(path.relative(REPO_ROOT, comparisonSource)) : toPosix(path.relative(REPO_ROOT, comparisonSource)),
    score_policy: 'exclude-unmeasured',
    base_url: parsedArgs.baseUrl,
    domains
  };

  report.scores = computeScores(report.domains);
  report.threshold_findings = collectThresholdFindings(report);
  report.comparison = buildComparison(previousReport, report, toPosix(path.relative(REPO_ROOT, comparisonSource)));
  report.output_files = writeOutputs(report, parsedArgs);

  console.log(`Performance measurement completed for domain "${parsedArgs.domain}".`);
  if (report.output_files.json) {
    console.log(`JSON report: ${report.output_files.json}`);
  }
  if (report.output_files.md) {
    console.log(`Markdown report: ${report.output_files.md}`);
  }
  if (report.output_files.latest_json) {
    console.log(`Latest baseline: ${report.output_files.latest_json}`);
  }
  console.log(`Overall score: ${formatValue(report.scores.overall)}`);
  return 0;
}

if (require.main === module) {
  main()
    .then((exitCode) => {
      process.exit(exitCode);
    })
    .catch((error) => {
      console.error(`measure-performance failed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = {
  measureBuildDomain,
  measurePageLoadDomain,
  measureDxDomain,
  measureFreshnessDomain,
  computeScores
};
