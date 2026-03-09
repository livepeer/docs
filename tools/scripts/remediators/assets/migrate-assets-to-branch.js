#!/usr/bin/env node
/**
 * @script           migrate-assets-to-branch
 * @category         remediator
 * @purpose          governance:repo-health
 * @scope            full-repo
 * @owner            docs
 * @needs            R-R14
 * @purpose-statement Reads the media-audit manifest and migrates flagged assets to the
 *                   docs-v2-assets branch, then rewrites MDX/JSX references to raw
 *                   GitHub URLs. Repair-lifecycle script: run after audit-media-assets.js
 *                   flags violations.
 * @pipeline         manual
 * @dualmode         --dry-run (show what would change) | --write (execute migration)
 * @usage            node tools/scripts/remediators/assets/migrate-assets-to-branch.js \
 *                     --manifest tasks/reports/media-audit/media-audit-manifest.json \
 *                     --target migrate_r2,migrate_cloudinary \
 *                     --dry-run
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const auditMediaAssets = require('../../audit-media-assets');

const REPO_ROOT = process.cwd();
const DEFAULT_TARGETS = ['migrate_r2', 'migrate_cloudinary'];
const DEFAULT_MANIFEST_PATH = auditMediaAssets.DEFAULT_MANIFEST_PATH;
const DEFAULT_ASSETS_BRANCH = 'docs-v2-assets';
const DEFAULT_ASSETS_BRANCH_REF = `origin/${DEFAULT_ASSETS_BRANCH}`;
const RAW_GITHUB_BASE = `https://raw.githubusercontent.com/livepeer/docs/${DEFAULT_ASSETS_BRANCH}`;
const LOG_DIR = 'tasks/reports/media-audit';

function printHelp() {
  console.log(
    [
      'Usage:',
      '  node tools/scripts/remediators/assets/migrate-assets-to-branch.js [options]',
      '',
      'Options:',
      `  --manifest <path>   Path to manifest (default: ${DEFAULT_MANIFEST_PATH})`,
      `  --target <list>     Comma-separated migration_target values (default: ${DEFAULT_TARGETS.join(',')})`,
      '  --dry-run           Show planned changes without executing (default).',
      '  --write             Execute copy, ref rewrite, test, and delete phases.',
      '  --skip-copy         Skip copying files to docs-v2-assets.',
      '  --skip-refs         Skip MDX/JSX reference rewrites.',
      '  --file <path>       Restrict processing to a single repo-relative asset path.',
      '  --help              Show this help output.',
      '',
      'Notes:',
      '  - GIF references are rewritten to raw GitHub URLs in-place; they are not transcoded to video.',
      '  - Bare filename-only references are treated as ambiguous and skipped for manual review.'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    manifestPath: DEFAULT_MANIFEST_PATH,
    targets: [...DEFAULT_TARGETS],
    mode: 'dry-run',
    skipCopy: false,
    skipRefs: false,
    file: '',
    help: false
  };

  let explicitModeCount = 0;

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    if (token === '--dry-run') {
      args.mode = 'dry-run';
      explicitModeCount += 1;
      continue;
    }
    if (token === '--write') {
      args.mode = 'write';
      explicitModeCount += 1;
      continue;
    }
    if (token === '--skip-copy') {
      args.skipCopy = true;
      continue;
    }
    if (token === '--skip-refs') {
      args.skipRefs = true;
      continue;
    }
    if (token === '--manifest') {
      args.manifestPath = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--manifest=')) {
      args.manifestPath = token.slice('--manifest='.length).trim();
      continue;
    }
    if (token === '--target') {
      args.targets = parseCsvList(argv[i + 1] || '');
      i += 1;
      continue;
    }
    if (token.startsWith('--target=')) {
      args.targets = parseCsvList(token.slice('--target='.length));
      continue;
    }
    if (token === '--file') {
      args.file = normalizeOptionalRepoPath(argv[i + 1] || '');
      i += 1;
      continue;
    }
    if (token.startsWith('--file=')) {
      args.file = normalizeOptionalRepoPath(token.slice('--file='.length));
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (explicitModeCount > 1) {
    throw new Error('Choose only one mode: --dry-run or --write');
  }
  if (!args.manifestPath) {
    throw new Error('Missing --manifest value');
  }
  if (!Array.isArray(args.targets) || args.targets.length === 0) {
    throw new Error('At least one --target value is required');
  }

  args.manifestPath = auditMediaAssets.normalizeRepoPath(args.manifestPath);
  return args;
}

function parseCsvList(raw) {
  return [...new Set(
    String(raw || '')
      .split(',')
      .map((entry) => String(entry || '').trim())
      .filter(Boolean)
  )];
}

function normalizeOptionalRepoPath(value) {
  const trimmed = String(value || '').trim();
  return trimmed ? auditMediaAssets.normalizeRepoPath(trimmed) : '';
}

function absoluteRepoPath(repoPath) {
  return path.join(REPO_ROOT, auditMediaAssets.normalizeRepoPath(repoPath));
}

function ensureDirForFile(repoPath) {
  fs.mkdirSync(path.dirname(absoluteRepoPath(repoPath)), { recursive: true });
}

function readJson(repoPath) {
  return JSON.parse(fs.readFileSync(absoluteRepoPath(repoPath), 'utf8'));
}

function writeJson(repoPath, value) {
  ensureDirForFile(repoPath);
  fs.writeFileSync(absoluteRepoPath(repoPath), `${JSON.stringify(value, null, 2)}\n`);
}

function writeText(repoPath, value) {
  ensureDirForFile(repoPath);
  fs.writeFileSync(absoluteRepoPath(repoPath), value);
}

function runCommand(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd || REPO_ROOT,
    encoding: options.encoding === 'buffer' ? null : 'utf8',
    stdio: options.stdio || ['ignore', 'pipe', 'pipe']
  });

  const stdout = options.encoding === 'buffer' ? result.stdout : String(result.stdout || '');
  const stderr = options.encoding === 'buffer' ? result.stderr : String(result.stderr || '');

  if (result.status !== 0 && !options.allowFailure) {
    const detail = String(stderr || stdout || `exit ${result.status}`).trim();
    throw new Error(`Command failed: ${command} ${args.join(' ')}\n${detail}`);
  }

  return {
    status: result.status,
    stdout,
    stderr
  };
}

function runGit(args, options = {}) {
  return runCommand('git', args, options);
}

function hasCachedChanges(cwd) {
  const result = spawnSync('git', ['diff', '--cached', '--quiet'], {
    cwd,
    stdio: 'ignore'
  });
  return result.status === 1;
}

function buildCanonicalAssetUrl(assetPath) {
  return `${RAW_GITHUB_BASE}/${encodeURI(auditMediaAssets.normalizeRepoPath(assetPath))}`;
}

function buildRawUrlRegex(assetPath) {
  return auditMediaAssets.buildRawGitHubRegex(assetPath, "[^/\"'\\s)]+");
}

function buildDirectTokens(sourcePath, assetPath) {
  const assetTokens = auditMediaAssets.buildTokenSet(assetPath);
  const relative = path.posix.relative(
    path.posix.dirname(auditMediaAssets.normalizeRepoPath(sourcePath)),
    auditMediaAssets.normalizeRepoPath(assetPath)
  );

  const tokens = [...assetTokens];
  if (relative) {
    const normalizedRelative = relative.startsWith('.') ? relative : `./${relative}`;
    if (normalizedRelative.includes('/')) {
      tokens.push(normalizedRelative, encodeURI(normalizedRelative));
    }
  }

  return [...new Set(tokens.filter(Boolean))].sort((a, b) => b.length - a.length);
}

function buildBasenameTokens(assetPath) {
  const basename = path.basename(auditMediaAssets.normalizeRepoPath(assetPath));
  return [...new Set([basename, encodeURI(basename)].filter(Boolean))];
}

function buildQuotedTokenRegex(token) {
  return new RegExp('(["\\\'`])' + auditMediaAssets.escapeRegExp(token) + '\\1', 'g');
}

function buildMarkdownTokenRegex(token) {
  return new RegExp('\\(' + auditMediaAssets.escapeRegExp(token) + '(?=[)\\s#?])', 'g');
}

function buildYamlTokenRegex(token) {
  return new RegExp('(:\\s*)' + auditMediaAssets.escapeRegExp(token) + '(?=\\s*$)', 'gm');
}

function tokenHasStructuredMatch(content, token) {
  return (
    buildQuotedTokenRegex(token).test(content) ||
    buildMarkdownTokenRegex(token).test(content) ||
    buildYamlTokenRegex(token).test(content)
  );
}

function replaceStructuredToken(content, token, replacement) {
  let next = content;
  next = next.replace(buildQuotedTokenRegex(token), (_match, quote) => `${quote}${replacement}${quote}`);
  next = next.replace(buildMarkdownTokenRegex(token), `(${replacement}`);
  next = next.replace(buildYamlTokenRegex(token), `$1${replacement}`);
  return next;
}

function replaceRawUrls(content, assetPath, canonicalUrl) {
  const rawUrlRegex = buildRawUrlRegex(assetPath);
  const globalRawUrlRegex = new RegExp(rawUrlRegex.source, 'g');
  return content.replace(globalRawUrlRegex, canonicalUrl);
}

function analyzeSourceReference(sourcePath, assetPath, content) {
  const canonicalUrl = buildCanonicalAssetUrl(assetPath);
  const directTokens = buildDirectTokens(sourcePath, assetPath);
  const basenameTokens = buildBasenameTokens(assetPath);
  const rawRewritten = replaceRawUrls(content, assetPath, canonicalUrl);
  const rawNeedsRewrite = rawRewritten !== content;
  const directTokenMatches = directTokens.filter((token) => tokenHasStructuredMatch(content, token));
  const basenameMatches = basenameTokens.filter((token) => tokenHasStructuredMatch(content, token));
  const ambiguousBasenameOnly = !rawNeedsRewrite && directTokenMatches.length === 0 && basenameMatches.length > 0;
  const staleManifestReference =
    !rawNeedsRewrite &&
    directTokenMatches.length === 0 &&
    basenameMatches.length === 0 &&
    !content.includes(canonicalUrl);

  return {
    canonicalUrl,
    directTokenMatches,
    ambiguousBasenameOnly,
    staleManifestReference,
    needsRewrite: rawNeedsRewrite || directTokenMatches.length > 0
  };
}

function rewriteSourceReference(sourcePath, assetPath, content) {
  const canonicalUrl = buildCanonicalAssetUrl(assetPath);
  let next = replaceRawUrls(content, assetPath, canonicalUrl);
  const directTokens = buildDirectTokens(sourcePath, assetPath);
  directTokens.forEach((token) => {
    next = replaceStructuredToken(next, token, canonicalUrl);
  });

  return {
    canonicalUrl,
    content: next,
    changed: next !== content
  };
}

function ensureAssetsBranchExists() {
  const remote = runGit(['ls-remote', '--heads', 'origin', DEFAULT_ASSETS_BRANCH], { allowFailure: true });
  if (remote.status !== 0 || !String(remote.stdout || '').trim()) {
    throw new Error(`Remote branch does not exist: ${DEFAULT_ASSETS_BRANCH}`);
  }
  auditMediaAssets.ensureGitRef(DEFAULT_ASSETS_BRANCH_REF);
}

function loadAssetsBranchPathSet() {
  return new Set(auditMediaAssets.parseLsTree(DEFAULT_ASSETS_BRANCH_REF).map((entry) => entry.path));
}

function loadManifest(options) {
  if (!fs.existsSync(absoluteRepoPath(options.manifestPath))) {
    throw new Error(`Manifest not found: ${options.manifestPath}`);
  }

  const manifest = readJson(options.manifestPath);
  const assets = Array.isArray(manifest && manifest.assets) ? manifest.assets : [];

  return assets
    .filter((asset) => asset && typeof asset === 'object')
    .filter((asset) => options.targets.includes(String(asset.migration_target || '').trim()))
    .filter((asset) => !options.file || auditMediaAssets.normalizeRepoPath(asset.path) === options.file)
    .map((asset) => ({
      ...asset,
      path: auditMediaAssets.normalizeRepoPath(asset.path),
      mdx_references: Array.isArray(asset.mdx_references)
        ? asset.mdx_references.map((entry) => auditMediaAssets.normalizeRepoPath(entry))
        : []
    }));
}

function buildStatusEntries(selectedAssets, assetsBranchPaths) {
  const sourceContents = new Map();
  const statusEntries = selectedAssets.map((asset) => {
    const copyNeeded = !assetsBranchPaths.has(asset.path);
    const needsRewriteFiles = [];
    const ambiguousFiles = [];
    const staleManifestFiles = [];

    asset.mdx_references.forEach((sourcePath) => {
      if (!sourceContents.has(sourcePath)) {
        if (fs.existsSync(absoluteRepoPath(sourcePath))) {
          sourceContents.set(sourcePath, fs.readFileSync(absoluteRepoPath(sourcePath), 'utf8'));
        } else {
          sourceContents.set(sourcePath, '');
        }
      }

      const content = sourceContents.get(sourcePath);
      if (!content) {
        staleManifestFiles.push(sourcePath);
        return;
      }

      const analysis = analyzeSourceReference(sourcePath, asset.path, content);
      if (analysis.ambiguousBasenameOnly) {
        ambiguousFiles.push(sourcePath);
        return;
      }
      if (analysis.needsRewrite) {
        needsRewriteFiles.push(sourcePath);
        return;
      }
      if (analysis.staleManifestReference) {
        staleManifestFiles.push(sourcePath);
      }
    });

    const refsNeeded = needsRewriteFiles.length > 0 || ambiguousFiles.length > 0;
    let status = 'DONE';
    if (copyNeeded && refsNeeded) status = 'PENDING_BOTH';
    else if (copyNeeded) status = 'PENDING_COPY';
    else if (refsNeeded) status = 'PENDING_REFS';

    return {
      asset,
      copyNeeded,
      refsNeeded,
      status,
      needsRewriteFiles,
      ambiguousFiles: [...new Set(ambiguousFiles)].sort(),
      staleManifestFiles: [...new Set(staleManifestFiles)].sort()
    };
  });

  return {
    statusEntries,
    sourceContents
  };
}

function formatTableRow(cells, widths) {
  return cells.map((cell, index) => String(cell).padEnd(widths[index], ' ')).join(' | ');
}

function printStatusTable(statusEntries) {
  const headers = ['File', 'Copy', 'Refs', 'Status'];
  const rows = statusEntries.map((entry) => [
    entry.asset.path,
    entry.copyNeeded ? 'needed' : 'done',
    entry.refsNeeded ? 'needed' : 'done',
    entry.status
  ]);
  const widths = headers.map((header, index) =>
    Math.max(header.length, ...rows.map((row) => String(row[index]).length))
  );

  console.log(formatTableRow(headers, widths));
  console.log(widths.map((width) => '-'.repeat(width)).join('-|-'));
  rows.forEach((row) => console.log(formatTableRow(row, widths)));

  const ambiguousRows = statusEntries.filter((entry) => entry.ambiguousFiles.length > 0);
  if (ambiguousRows.length > 0) {
    console.log('\nAmbiguous basename-only references:');
    ambiguousRows.forEach((entry) => {
      console.log(`- ${entry.asset.path}: ${entry.ambiguousFiles.join(', ')}`);
    });
  }
}

function buildTimestamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

function buildLogPath(timestamp) {
  return `${LOG_DIR}/migrate-assets-log-${timestamp}.json`;
}

function initializeLog(options, selectedAssets, statusEntries, logPath) {
  return {
    generated_at: new Date().toISOString(),
    mode: options.mode,
    manifest_path: options.manifestPath,
    log_path: logPath,
    targets: options.targets,
    file: options.file || null,
    skip_copy: options.skipCopy,
    skip_refs: options.skipRefs,
    summary: {
      selected_assets: selectedAssets.length,
      pending_copy: statusEntries.filter((entry) => entry.copyNeeded).length,
      pending_refs: statusEntries.filter((entry) => entry.refsNeeded).length,
      done: statusEntries.filter((entry) => entry.status === 'DONE').length
    },
    assets: statusEntries.map((entry) => ({
      path: entry.asset.path,
      migration_target: entry.asset.migration_target,
      status_before: entry.status,
      copy: {
        needed: entry.copyNeeded,
        skipped: false,
        verified: false,
        error: ''
      },
      refs: {
        needed: entry.refsNeeded,
        skipped: false,
        rewritten_files: [],
        ambiguous_files: entry.ambiguousFiles,
        stale_manifest_files: entry.staleManifestFiles,
        committed: false,
        error: ''
      },
      delete: {
        attempted: false,
        committed: false,
        error: ''
      }
    }))
  };
}

function logEntry(log, assetPath) {
  return log.assets.find((entry) => entry.path === assetPath);
}

function fetchAssetsBranch() {
  runGit(['fetch', 'origin', DEFAULT_ASSETS_BRANCH]);
}

function verifyAssetsOnBranch(paths) {
  const verified = new Set();
  paths.forEach((repoPath) => {
    const result = runGit(['ls-tree', '-r', '--name-only', DEFAULT_ASSETS_BRANCH_REF, '--', repoPath], {
      allowFailure: true
    });
    if (result.status === 0 && String(result.stdout || '').trim()) {
      verified.add(repoPath);
    }
  });
  return verified;
}

function copyAssetsToBranch(statusEntries, log) {
  const pending = statusEntries.filter((entry) => entry.copyNeeded);
  if (pending.length === 0) {
    return new Set();
  }

  const worktreeDir = fs.mkdtempSync(path.join(os.tmpdir(), 'migrate-assets-branch-'));
  const stagedPaths = [];

  try {
    runGit(['worktree', 'add', '--detach', worktreeDir, DEFAULT_ASSETS_BRANCH_REF]);

    pending.forEach((entry) => {
      const sourceAbs = absoluteRepoPath(entry.asset.path);
      const assetLog = logEntry(log, entry.asset.path);

      if (!fs.existsSync(sourceAbs)) {
        assetLog.copy.error = `Source asset missing: ${entry.asset.path}`;
        return;
      }

      const destAbs = path.join(worktreeDir, entry.asset.path);
      fs.mkdirSync(path.dirname(destAbs), { recursive: true });
      fs.copyFileSync(sourceAbs, destAbs);
      runGit(['add', entry.asset.path], { cwd: worktreeDir });
      stagedPaths.push(entry.asset.path);
    });

    if (stagedPaths.length > 0 && hasCachedChanges(worktreeDir)) {
      runGit(['commit', '-m', `chore(assets): migrate ${stagedPaths.length} assets from docs-v2 [migrate-assets-to-branch]`], {
        cwd: worktreeDir
      });
      runGit(['push', 'origin', `HEAD:refs/heads/${DEFAULT_ASSETS_BRANCH}`], { cwd: worktreeDir });
    }
  } finally {
    runGit(['worktree', 'remove', '--force', worktreeDir], { allowFailure: true });
    fs.rmSync(worktreeDir, { recursive: true, force: true });
  }

  fetchAssetsBranch();
  const verified = verifyAssetsOnBranch(stagedPaths);
  pending.forEach((entry) => {
    const assetLog = logEntry(log, entry.asset.path);
    assetLog.copy.verified = verified.has(entry.asset.path);
    if (!assetLog.copy.verified && !assetLog.copy.error) {
      assetLog.copy.error = `Verification failed on ${DEFAULT_ASSETS_BRANCH_REF}`;
    }
  });

  return verified;
}

function writeUpdatedSources(sourceContents, modifiedFiles) {
  [...modifiedFiles].sort().forEach((repoPath) => {
    writeText(repoPath, sourceContents.get(repoPath));
  });
}

function rewriteReferences(statusEntries, sourceContents, verifiedCopies, options, log) {
  const modifiedFiles = new Set();
  const eligibleAssets = statusEntries.filter((entry) => {
    if (!entry.refsNeeded) return false;
    if (options.skipCopy) return true;
    if (!entry.copyNeeded) return true;
    return verifiedCopies.has(entry.asset.path);
  });

  eligibleAssets.forEach((entry) => {
    const assetLog = logEntry(log, entry.asset.path);
    entry.asset.mdx_references.forEach((sourcePath) => {
      const currentContent = sourceContents.get(sourcePath);
      if (!currentContent) {
        return;
      }

      const analysis = analyzeSourceReference(sourcePath, entry.asset.path, currentContent);
      if (analysis.ambiguousBasenameOnly) {
        if (!assetLog.refs.ambiguous_files.includes(sourcePath)) {
          assetLog.refs.ambiguous_files.push(sourcePath);
        }
        return;
      }
      if (!analysis.needsRewrite) {
        return;
      }

      const rewritten = rewriteSourceReference(sourcePath, entry.asset.path, currentContent);
      if (!rewritten.changed) {
        assetLog.refs.error = `Expected rewrite but no change was applied in ${sourcePath}`;
        return;
      }

      sourceContents.set(sourcePath, rewritten.content);
      modifiedFiles.add(sourcePath);
      assetLog.refs.rewritten_files.push(sourcePath);
    });
  });

  if (modifiedFiles.size === 0) {
    return {
      modifiedFiles,
      testsPassed: true,
      committed: false
    };
  }

  writeUpdatedSources(sourceContents, modifiedFiles);

  const testResult = runCommand('npm', ['test'], {
    cwd: path.join(REPO_ROOT, 'tests'),
    allowFailure: true
  });

  if (testResult.status !== 0) {
    const detail = String(testResult.stderr || testResult.stdout || 'npm test failed').trim();
    eligibleAssets.forEach((entry) => {
      const assetLog = logEntry(log, entry.asset.path);
      if (!assetLog.refs.error) {
        assetLog.refs.error = `Tests failed after ref rewrite: ${detail}`;
      }
    });
    return {
      modifiedFiles,
      testsPassed: false,
      committed: false,
      error: detail
    };
  }

  runGit(['add', ...[...modifiedFiles].sort()]);
  if (hasCachedChanges(REPO_ROOT)) {
    runGit(['commit', '-m', 'chore(assets): rewrite MDX/JSX references to docs-v2-assets URLs [migrate-assets-to-branch]']);
    eligibleAssets.forEach((entry) => {
      logEntry(log, entry.asset.path).refs.committed = true;
    });
    return {
      modifiedFiles,
      testsPassed: true,
      committed: true
    };
  }

  return {
    modifiedFiles,
    testsPassed: true,
    committed: false
  };
}

function deleteMigratedAssets(statusEntries, verifiedCopies, options, log) {
  const deletable = statusEntries.filter((entry) => {
    const assetLog = logEntry(log, entry.asset.path);
    const copyReady = options.skipCopy || !entry.copyNeeded || verifiedCopies.has(entry.asset.path);
    const refsReady =
      options.skipRefs ||
      (
        assetLog.refs.ambiguous_files.length === 0 &&
        (!entry.refsNeeded || assetLog.refs.committed)
      );
    return copyReady && refsReady;
  });

  const existingPaths = deletable
    .map((entry) => entry.asset.path)
    .filter((repoPath) => fs.existsSync(absoluteRepoPath(repoPath)));

  if (existingPaths.length === 0) {
    return [];
  }

  runGit(['rm', '--', ...existingPaths]);
  if (hasCachedChanges(REPO_ROOT)) {
    runGit(['commit', '-m', 'chore(assets): remove migrated assets from docs-v2 working tree [migrate-assets-to-branch]']);
    existingPaths.forEach((repoPath) => {
      const assetLog = logEntry(log, repoPath);
      assetLog.delete.attempted = true;
      assetLog.delete.committed = true;
    });
  }

  return existingPaths;
}

function runDryRun(options, statusEntries, logPath, log) {
  printStatusTable(statusEntries);
  writeJson(logPath, log);
  console.log(`\nWrote ${logPath}`);
}

function runWrite(options, statusEntries, sourceContents, logPath, log) {
  try {
    const verifiedCopies = options.skipCopy
      ? new Set(statusEntries.map((entry) => entry.asset.path))
      : copyAssetsToBranch(statusEntries, log);

    if (options.skipCopy) {
      statusEntries.forEach((entry) => {
        logEntry(log, entry.asset.path).copy.skipped = true;
      });
    }

    if (!options.skipRefs) {
      const rewriteResult = rewriteReferences(statusEntries, sourceContents, verifiedCopies, options, log);
      if (!rewriteResult.testsPassed) {
        throw new Error(`Reference rewrite tests failed. See ${logPath} for details.`);
      }
    } else {
      statusEntries.forEach((entry) => {
        if (entry.refsNeeded) {
          logEntry(log, entry.asset.path).refs.skipped = true;
        }
      });
    }

    deleteMigratedAssets(statusEntries, verifiedCopies, options, log);
  } finally {
    writeJson(logPath, log);
    console.log(`Wrote ${logPath}`);
  }
}

function main(argv = process.argv.slice(2)) {
  const options = parseArgs(argv);
  if (options.help) {
    printHelp();
    return;
  }

  ensureAssetsBranchExists();
  const selectedAssets = loadManifest(options);
  const assetsBranchPaths = loadAssetsBranchPathSet();
  const timestamp = buildTimestamp();
  const logPath = buildLogPath(timestamp);
  const { statusEntries, sourceContents } = buildStatusEntries(selectedAssets, assetsBranchPaths);
  const log = initializeLog(options, selectedAssets, statusEntries, logPath);

  if (selectedAssets.length === 0) {
    writeJson(logPath, log);
    console.log('No manifest entries matched the requested targets/file filter.');
    console.log(`Wrote ${logPath}`);
    return;
  }

  if (options.mode === 'dry-run') {
    runDryRun(options, statusEntries, logPath, log);
    return;
  }

  runWrite(options, statusEntries, sourceContents, logPath, log);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`migrate-assets-to-branch failed: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  analyzeSourceReference,
  buildCanonicalAssetUrl,
  buildDirectTokens,
  parseArgs,
  rewriteSourceReference,
  runMain: main
};
