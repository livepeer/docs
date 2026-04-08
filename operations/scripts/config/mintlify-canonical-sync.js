#!/usr/bin/env node
/**
 * @script      mintlify-canonical-sync
 * @type        
 * @concern     
 * @niche       
 * @purpose     governance:agent-governance
 * @description Shared Mintlify canonical sync library — validates archived-source cleanup, consumer references, and deterministic rewrite plans for the canonical Mintlify governance surface.
 * @mode        read-only
 * @pipeline    manual -- library module
 * @scope       docs-guide/canonical/collation-data/Mintlify, operations/scripts/validators/governance, operations/scripts/remediators/content/repair
 * @usage       const sync = require('./mintlify-canonical-sync');
 * @policy      R-R14, R-R18
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const REGISTRY_PATH = 'docs-guide/canonical/collation-data/Mintlify/mintlify-canonical-consumers.json';
const TEXT_EXTENSIONS = new Set([
  '.css',
  '.js',
  '.json',
  '.jsx',
  '.md',
  '.mdc',
  '.mdx',
  '.txt',
  '.ts',
  '.tsx',
  '.yaml',
  '.yml'
]);
const SKIP_DIRS = new Set(['.git', 'node_modules']);
const SKIP_PATH_PREFIXES = [
  'v2/_workspace/archive/language-pages/',
  'workspace/plan/active/_Project-Management_/'
];
const REPO_ROOT = getRepoRoot();

function getRepoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function normalizeRepoPath(value) {
  return toPosix(String(value || '').trim()).replace(/^\/+/, '');
}

function normalizeWrapperPath(publicWrapper) {
  if (!publicWrapper) return '';
  if (typeof publicWrapper === 'string') return normalizeRepoPath(publicWrapper);
  return normalizeRepoPath(publicWrapper.path);
}

function normalizeWrapperRoute(publicWrapper) {
  if (!publicWrapper || typeof publicWrapper === 'string') return '';
  return String(publicWrapper.route || '').trim();
}

function readJsonFile(repoRoot, repoPath) {
  return JSON.parse(fs.readFileSync(path.join(repoRoot, repoPath), 'utf8'));
}

function loadRegistry(repoRoot = REPO_ROOT) {
  const registry = readJsonFile(repoRoot, REGISTRY_PATH);
  return {
    ...registry,
    canonicalSource: normalizeRepoPath(registry.canonicalSource),
    publicWrapper: {
      path: normalizeWrapperPath(registry.publicWrapper),
      route: normalizeWrapperRoute(registry.publicWrapper)
    },
    indexPath: normalizeRepoPath(registry.indexPath),
    archivedRoot: normalizeRepoPath(registry.archivedRoot),
    scanRoots: Array.isArray(registry.scanRoots) ? registry.scanRoots.map(normalizeRepoPath) : [],
    globalForbiddenRefs: Array.isArray(registry.globalForbiddenRefs) ? registry.globalForbiddenRefs.map(String) : [],
    movedSources: Array.isArray(registry.movedSources) ? registry.movedSources.map(normalizeRepoPath) : [],
    retainedSources: Array.isArray(registry.retainedSources)
      ? registry.retainedSources.map((entry) => ({
          path: normalizeRepoPath(entry.path),
          reason: String(entry.reason || '')
        }))
      : [],
    consumers: Array.isArray(registry.consumers)
      ? registry.consumers.map((consumer) => ({
          ...consumer,
          path: normalizeRepoPath(consumer.path),
          requiredRefs: Array.isArray(consumer.requiredRefs) ? consumer.requiredRefs.map(String) : [],
          forbiddenRefs: Array.isArray(consumer.forbiddenRefs) ? consumer.forbiddenRefs.map(String) : [],
          touchOnCanonicalChange: Boolean(consumer.touchOnCanonicalChange),
          replacementPairs: Array.isArray(consumer.replacementPairs)
            ? consumer.replacementPairs
                .filter((pair) => pair && typeof pair.from === 'string' && typeof pair.to === 'string')
                .map((pair) => ({ from: pair.from, to: pair.to }))
            : []
        }))
      : []
  };
}

function getArchivedPath(archivedRoot, sourcePath) {
  return normalizeRepoPath(path.posix.join(archivedRoot, sourcePath));
}

function getMovedSourceRecords(registry, repoRoot = REPO_ROOT) {
  return registry.movedSources.map((sourcePath) => {
    const targetPath = getArchivedPath(registry.archivedRoot, sourcePath);
    return {
      sourcePath,
      targetPath,
      sourceAbs: path.join(repoRoot, sourcePath),
      targetAbs: path.join(repoRoot, targetPath)
    };
  });
}

function readRepoText(repoRoot, repoPath) {
  return fs.readFileSync(path.join(repoRoot, repoPath), 'utf8');
}

function writeRepoText(repoRoot, repoPath, text) {
  fs.writeFileSync(path.join(repoRoot, repoPath), text, 'utf8');
}

function isTextFile(repoPath) {
  return TEXT_EXTENSIONS.has(path.extname(repoPath).toLowerCase());
}

function walkPath(repoRoot, repoPath, out) {
  const absolutePath = path.join(repoRoot, repoPath);
  if (!fs.existsSync(absolutePath)) return;

  const stat = fs.statSync(absolutePath);
  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(absolutePath, { withFileTypes: true })) {
      if (SKIP_DIRS.has(entry.name)) continue;
      walkPath(repoRoot, normalizeRepoPath(path.posix.join(repoPath, entry.name)), out);
    }
    return;
  }

  if (isTextFile(repoPath)) out.add(normalizeRepoPath(repoPath));
}

function collectScanFiles(repoRoot, registry) {
  const files = new Set();
  const roots = new Set([
    ...registry.scanRoots,
    registry.canonicalSource,
    registry.indexPath,
    registry.publicWrapper.path,
    ...registry.consumers.map((consumer) => consumer.path)
  ]);

  roots.forEach((repoPath) => {
    if (!repoPath) return;
    walkPath(repoRoot, repoPath, files);
  });

  files.delete(REGISTRY_PATH);
  return [...files]
    .filter((repoPath) => !SKIP_PATH_PREFIXES.some((prefix) => repoPath.startsWith(prefix)))
    .sort((left, right) => left.localeCompare(right));
}

function collectRepairFiles(repoRoot, registry) {
  const files = new Set([registry.canonicalSource, registry.indexPath, registry.publicWrapper.path]);

  registry.consumers.forEach((consumer) => {
    if (!consumer.path) return;
    if (!consumer.autofix || consumer.autofix === 'none') return;
    if (consumer.mode === 'generated' && consumer.autofix !== 'paths-only') return;
    files.add(consumer.path);
  });

  return [...files]
    .map(normalizeRepoPath)
    .filter(Boolean)
    .filter((repoPath) => !SKIP_PATH_PREFIXES.some((prefix) => repoPath.startsWith(prefix)))
    .filter((repoPath) => fs.existsSync(path.join(repoRoot, repoPath)))
    .filter((repoPath) => isTextFile(repoPath))
    .sort((left, right) => left.localeCompare(right));
}

function getStagedFiles(repoRoot = REPO_ROOT) {
  const result = spawnSync('git', ['diff', '--cached', '--name-only', '--diff-filter=ACMRD'], {
    cwd: repoRoot,
    encoding: 'utf8'
  });
  if (result.status !== 0) return [];
  return String(result.stdout || '')
    .split(/\r?\n/)
    .map((line) => normalizeRepoPath(line))
    .filter(Boolean);
}

function getRelevantTrackedPaths(registry) {
  const tracked = new Set([
    REGISTRY_PATH,
    registry.indexPath,
    registry.canonicalSource,
    registry.publicWrapper.path,
    ...registry.consumers.map((consumer) => consumer.path)
  ]);

  getMovedSourceRecords(registry).forEach((record) => {
    tracked.add(record.sourcePath);
    tracked.add(record.targetPath);
  });

  return tracked;
}

function hasRelevantStagedChanges(registry, repoRoot = REPO_ROOT) {
  const staged = getStagedFiles(repoRoot);
  if (staged.length === 0) return false;
  const tracked = getRelevantTrackedPaths(registry);
  return staged.some((repoPath) => tracked.has(repoPath));
}

function getGitTimestamp(repoPath, repoRoot = REPO_ROOT) {
  const result = spawnSync('git', ['log', '-1', '--format=%ct', '--', repoPath], {
    cwd: repoRoot,
    encoding: 'utf8'
  });
  if (result.status !== 0) return null;
  const value = Number(String(result.stdout || '').trim());
  return Number.isFinite(value) ? value : null;
}

function hasWorkingTreeChange(repoPath, repoRoot = REPO_ROOT) {
  const commands = [
    ['diff', '--quiet', '--', repoPath],
    ['diff', '--cached', '--quiet', '--', repoPath]
  ];

  return commands.some((args) => {
    const result = spawnSync('git', args, {
      cwd: repoRoot,
      encoding: 'utf8'
    });
    return result.status === 1;
  });
}

function buildExpectedRemainingSources(registry) {
  return [...new Set([registry.canonicalSource, registry.indexPath, registry.publicWrapper.path, ...registry.retainedSources.map((entry) => entry.path)])].sort(
    (left, right) => left.localeCompare(right)
  );
}

function extractRemainingSourcePaths(indexText) {
  const heading = '## Remaining SOURCES after Clean';
  const start = indexText.indexOf(heading);
  if (start === -1) return [];
  const section = indexText.slice(start + heading.length);
  const lines = section.split(/\r?\n/);
  const paths = [];

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;
    if (line.startsWith('## ')) break;
    const match = line.match(/^- `([^`]+)`/);
    if (match) paths.push(normalizeRepoPath(match[1]));
  }

  return paths.sort((left, right) => left.localeCompare(right));
}

function buildGlobalForbiddenTokens(registry, repoRoot = REPO_ROOT) {
  const tokens = new Set(registry.globalForbiddenRefs);
  getMovedSourceRecords(registry, repoRoot).forEach((record) => {
    tokens.add(record.sourcePath);
    tokens.add(record.sourceAbs);
  });
  return [...tokens].filter(Boolean);
}

function stripArchivedTargets(text, registry, repoRoot = REPO_ROOT) {
  let stripped = String(text || '');
  getMovedSourceRecords(registry, repoRoot).forEach((record) => {
    stripped = stripped.split(record.targetPath).join('');
    stripped = stripped.split(record.targetAbs).join('');
  });
  return stripped;
}

function hasLegacyTokenOutsideArchive(text, token, registry, repoRoot = REPO_ROOT) {
  if (!token) return false;
  const raw = String(text || '');
  if (!raw.includes(token)) return false;
  return stripArchivedTargets(raw, registry, repoRoot).includes(token);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replacePairSafely(text, pair) {
  if (!pair.from || pair.from === pair.to || !text.includes(pair.from)) return text;

  if (pair.to.endsWith(pair.from)) {
    const guardPrefix = pair.to.slice(0, pair.to.length - pair.from.length);
    if (guardPrefix) {
      const pattern = new RegExp(`(?<!${escapeRegExp(guardPrefix)})${escapeRegExp(pair.from)}`, 'g');
      return text.replace(pattern, pair.to);
    }
  }

  return text.split(pair.from).join(pair.to);
}

function applyReplacementPairs(text, pairs) {
  const orderedPairs = [...pairs].sort((left, right) => right.from.length - left.from.length);
  let updated = text;
  let applied = 0;

  for (const pair of orderedPairs) {
    const replaced = replacePairSafely(updated, pair);
    if (replaced === updated) continue;
    updated = replaced;
    applied += 1;
  }

  return { updated, applied };
}

function collapseArchivedPrefixDuplication(text, registry, repoRoot = REPO_ROOT) {
  const relativePrefix = `${registry.archivedRoot}/`;
  const absolutePrefix = `${toPosix(path.join(repoRoot, registry.archivedRoot))}/`;
  let updated = text;

  while (updated.includes(`${relativePrefix}${relativePrefix}`)) {
    updated = updated.split(`${relativePrefix}${relativePrefix}`).join(relativePrefix);
  }

  while (updated.includes(`${absolutePrefix}${absolutePrefix}`)) {
    updated = updated.split(`${absolutePrefix}${absolutePrefix}`).join(absolutePrefix);
  }

  return updated;
}

function buildGlobalReplacementPairs(registry, repoRoot = REPO_ROOT) {
  return getMovedSourceRecords(registry, repoRoot).flatMap((record) => [
    { from: record.sourcePath, to: record.targetPath },
    { from: record.sourceAbs, to: record.targetAbs }
  ]);
}

function collectFilePairs(registry, repoRoot, repoPath) {
  const consumer = registry.consumers.find((entry) => entry.path === repoPath);
  const pairs = [...buildGlobalReplacementPairs(registry, repoRoot)];
  if (!consumer) return pairs;
  return [...consumer.replacementPairs, ...pairs];
}

function runSyncCheck({ repoRoot = REPO_ROOT, stagedOnly = false } = {}) {
  const registry = loadRegistry(repoRoot);
  const relevantChangeDetected = hasRelevantStagedChanges(registry, repoRoot);

  if (stagedOnly && !relevantChangeDetected) {
    return {
      passed: true,
      skipped: true,
      findings: [],
      summary: {
        checkedConsumers: 0,
        errors: 0,
        warnings: 0
      }
    };
  }

  const findings = [];
  const canonicalTimestamp = getGitTimestamp(registry.canonicalSource, repoRoot);

  getMovedSourceRecords(registry, repoRoot).forEach((record) => {
    if (fs.existsSync(path.join(repoRoot, record.sourcePath))) {
      findings.push({
        severity: 'error',
        path: record.sourcePath,
        rule: 'moved-source-live',
        message: `Expected moved source to be archived under ${record.targetPath}, but the old path still exists.`
      });
    }

    if (!fs.existsSync(path.join(repoRoot, record.targetPath))) {
      findings.push({
        severity: 'error',
        path: record.targetPath,
        rule: 'archived-source-missing',
        message: `Archived Mintlify source is missing at ${record.targetPath}.`
      });
    }
  });

  registry.consumers.forEach((consumer) => {
    const absolutePath = path.join(repoRoot, consumer.path);
    if (!fs.existsSync(absolutePath)) {
      findings.push({
        severity: 'error',
        path: consumer.path,
        rule: 'consumer-missing',
        message: 'Registered Mintlify consumer file is missing.'
      });
      return;
    }

    const text = fs.readFileSync(absolutePath, 'utf8');

    consumer.requiredRefs.forEach((token) => {
      if (!token) return;
      if (!text.includes(token)) {
        findings.push({
          severity: 'error',
          path: consumer.path,
          rule: 'required-ref-missing',
          message: `Missing required Mintlify reference: ${token}`
        });
      }
    });

    consumer.forbiddenRefs.forEach((token) => {
      if (!token) return;
      if (hasLegacyTokenOutsideArchive(text, token, registry, repoRoot)) {
        findings.push({
          severity: 'error',
          path: consumer.path,
          rule: 'forbidden-ref-present',
          message: `Found forbidden legacy Mintlify reference: ${token}`
        });
      }
    });

    if (consumer.touchOnCanonicalChange && canonicalTimestamp) {
      if (hasWorkingTreeChange(consumer.path, repoRoot)) {
        return;
      }

      const consumerTimestamp = getGitTimestamp(consumer.path, repoRoot);
      if (consumerTimestamp && consumerTimestamp < canonicalTimestamp) {
        findings.push({
          severity: 'error',
          path: consumer.path,
          rule: 'consumer-stale-vs-canonical',
          message: `Consumer was last touched before ${registry.canonicalSource}; update it in the same change.`
        });
      }
    }
  });

  const forbiddenTokens = buildGlobalForbiddenTokens(registry, repoRoot);
  collectScanFiles(repoRoot, registry)
    .filter(
      (repoPath) =>
        repoPath !== REGISTRY_PATH &&
        !repoPath.startsWith(`${registry.archivedRoot}/`)
    )
    .forEach((repoPath) => {
      const text = readRepoText(repoRoot, repoPath);
      forbiddenTokens.forEach((token) => {
        if (!token) return;
        if (hasLegacyTokenOutsideArchive(text, token, registry, repoRoot)) {
          findings.push({
            severity: 'error',
            path: repoPath,
            rule: 'legacy-ref-outside-archive',
            message: `Legacy Mintlify token remains outside ${registry.archivedRoot}: ${token}`
          });
        }
      });
    });

  const expectedPaths = buildExpectedRemainingSources(registry);
  const actualPaths = extractRemainingSourcePaths(readRepoText(repoRoot, registry.indexPath));
  const actualSet = new Set(actualPaths);
  expectedPaths.forEach((repoPath) => {
    if (!actualSet.has(repoPath)) {
      findings.push({
        severity: 'error',
        path: registry.indexPath,
        rule: 'remaining-sources-missing',
        message: `Missing retained-source entry in Remaining SOURCES after Clean: ${repoPath}`
      });
    }
  });

  actualPaths.forEach((repoPath) => {
    if (!expectedPaths.includes(repoPath)) {
      findings.push({
        severity: 'error',
        path: registry.indexPath,
        rule: 'remaining-sources-extra',
        message: `Unexpected retained-source entry in Remaining SOURCES after Clean: ${repoPath}`
      });
    }
  });

  const errors = findings.filter((finding) => finding.severity === 'error').length;
  const warnings = findings.filter((finding) => finding.severity === 'warning').length;

  return {
    passed: errors === 0,
    skipped: false,
    findings,
    summary: {
      checkedConsumers: registry.consumers.length,
      errors,
      warnings
    }
  };
}

function runSyncRepair({ repoRoot = REPO_ROOT, stagedOnly = false, write = false, stage = false } = {}) {
  const registry = loadRegistry(repoRoot);
  const relevantChangeDetected = hasRelevantStagedChanges(registry, repoRoot);

  if (stagedOnly && !relevantChangeDetected) {
    return {
      skipped: true,
      changedFiles: [],
      changedCount: 0,
      commandRuns: []
    };
  }

  const files = collectRepairFiles(repoRoot, registry).filter(
    (repoPath) => repoPath !== REGISTRY_PATH && !repoPath.startsWith(`${registry.archivedRoot}/`)
  );

  const changedFiles = [];
  const rewrites = [];

  files.forEach((repoPath) => {
    if (!fs.existsSync(path.join(repoRoot, repoPath))) return;
    const original = readRepoText(repoRoot, repoPath);
    const { updated, applied } = applyReplacementPairs(original, collectFilePairs(registry, repoRoot, repoPath));
    const normalized = collapseArchivedPrefixDuplication(updated, registry, repoRoot);
    if (applied === 0 && normalized === original) return;
    rewrites.push({ path: repoPath, replacements: applied });
    if (write) {
      writeRepoText(repoRoot, repoPath, normalized);
      changedFiles.push(repoPath);
    }
  });

  const commandRuns = [];
  if (write) {
    const commands = [...new Set(registry.consumers.map((consumer) => consumer.autofixCommand).filter(Boolean))];
    commands.forEach((command) => {
      const result = spawnSync('bash', ['-lc', command], { cwd: repoRoot, encoding: 'utf8' });
      commandRuns.push({
        command,
        status: result.status,
        stdout: String(result.stdout || '').trim(),
        stderr: String(result.stderr || '').trim()
      });
      if (result.status !== 0) {
        throw new Error(`Mintlify sync autofix command failed: ${command}\n${result.stderr || result.stdout}`);
      }
    });
  }

  if (write && stage && changedFiles.length > 0) {
    spawnSync('git', ['add', '--', ...changedFiles], { cwd: repoRoot, encoding: 'utf8' });
  }

  return {
    skipped: false,
    changedFiles,
    changedCount: rewrites.length,
    rewrites,
    commandRuns
  };
}

module.exports = {
  REGISTRY_PATH,
  REPO_ROOT,
  applyReplacementPairs,
  buildExpectedRemainingSources,
  buildGlobalForbiddenTokens,
  buildGlobalReplacementPairs,
  collectFilePairs,
  collectRepairFiles,
  collectScanFiles,
  extractRemainingSourcePaths,
  getArchivedPath,
  getMovedSourceRecords,
  getRelevantTrackedPaths,
  getRepoRoot,
  getStagedFiles,
  hasRelevantStagedChanges,
  hasLegacyTokenOutsideArchive,
  hasWorkingTreeChange,
  loadRegistry,
  normalizeRepoPath,
  readRepoText,
  runSyncCheck,
  runSyncRepair
};
