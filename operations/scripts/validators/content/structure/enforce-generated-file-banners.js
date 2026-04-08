#!/usr/bin/env node
/**
 * @script      enforce-generated-file-banners
 * @type        
 * @concern     
 * @niche       
 * @purpose     governance:index-management
 * @description Validates "do not edit" banners and i18n parity on generated MDX files. Generator dispatch split to sync-generated-files.js.
 * @mode        read-only
 * @pipeline    manual | pre-commit --staged
 * @scope       docs-guide/catalog, v2
 * @usage       node operations/scripts/validators/content/structure/enforce-generated-file-banners.js --check [--staged]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process'); // retained for getStagedFiles
const { loadI18nConfig } = require('../../../integrators/content/language-translation/lib/config');
const { parseProvenanceComment } = require('../../../integrators/content/language-translation/lib/provenance');
const {
  GENERATED_HIDDEN_MARKER,
  parseGeneratedHiddenBanner,
  hasGeneratedNote,
  removeGeneratedNotes,
  hasFrontmatterKey
} = require('../../../../../tools/lib/governance/generated-file-banners');
const {
  readManifest,
  pathMatches
} = require('../../../../../tools/lib/governance/generated-artifacts');

const REPO_ROOT = process.cwd();
const STAGED_SNAPSHOT_ENV = 'LPD_STAGED_FILES_SNAPSHOT';

// Generator dispatch commands moved to dispatch/governance/pipelines/sync-generated-files.js

function normalizeRepoPath(value) {
  return String(value || '').split(path.sep).join('/');
}

function readFileSafe(repoPath) {
  try {
    return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
  } catch (_err) {
    return '';
  }
}

function listGeneratedV2IndexFiles() {
  const root = path.join(REPO_ROOT, 'v2');
  if (!fs.existsSync(root)) return [];
  const out = ['v2/index.mdx'];
  const entries = fs.readdirSync(root, { withFileTypes: true });
  entries
    .filter((entry) => entry.isDirectory())
    .forEach((entry) => {
      const rel = normalizeRepoPath(path.join('v2', entry.name, 'index.mdx'));
      if (fs.existsSync(path.join(REPO_ROOT, rel))) out.push(rel);
    });
  return [...new Set(out)].sort();
}

function walkFiles(absRoot, out = []) {
  if (!fs.existsSync(absRoot)) return out;
  const entries = fs.readdirSync(absRoot, { withFileTypes: true });
  entries.forEach((entry) => {
    const abs = path.join(absRoot, entry.name);
    if (entry.isDirectory()) {
      walkFiles(abs, out);
      return;
    }
    out.push(normalizeRepoPath(path.relative(REPO_ROOT, abs)));
  });
  return out;
}

function getManifestManagedGeneratedFiles() {
  const manifest = readManifest(REPO_ROOT);
  const allRepoFiles = walkFiles(REPO_ROOT, []);
  return manifest.artifacts
    .filter((artifact) =>
      artifact.class !== 'ephemeral_local' &&
      artifact.path.endsWith('.mdx') &&
      artifact.path !== 'v2/index.mdx' &&
      artifact.path !== 'v2/*/index.mdx'
    )
    .flatMap((artifact) => allRepoFiles.filter((repoPath) => pathMatches(artifact.path, repoPath)))
    .filter((repoPath) => repoPath.endsWith('.mdx'));
}

function getExpectedNonI18nGeneratedFiles() {
  return [...new Set([...getManifestManagedGeneratedFiles(), ...listGeneratedV2IndexFiles()])].sort();
}

// runNodeCommand moved to dispatch/governance/pipelines/sync-generated-files.js

function getStagedFiles() {
  const snapshot = String(process.env[STAGED_SNAPSHOT_ENV] || '')
    .split(/\r?\n/)
    .map((entry) => normalizeRepoPath(entry.trim()))
    .filter(Boolean);
  if (snapshot.length > 0) {
    return [...new Set(snapshot)].sort();
  }

  const result = spawnSync('git', ['diff', '--cached', '--name-only', '--diff-filter=ACMRD'], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
  if (result.status !== 0) {
    return [];
  }

  return [...new Set(String(result.stdout || '')
    .split(/\r?\n/)
    .map((entry) => normalizeRepoPath(entry.trim()))
    .filter(Boolean))].sort();
}

function getBannerRelevantStagedFiles(stagedFiles) {
  if (!Array.isArray(stagedFiles) || stagedFiles.length === 0) {
    return [];
  }

  const expectedGenerated = new Set(getExpectedNonI18nGeneratedFiles());

  return stagedFiles.filter((repoPath) => {
    if (expectedGenerated.has(repoPath)) return true;
    return repoPath.startsWith('v2/cn/') || repoPath.startsWith('v2/es/') || repoPath.startsWith('v2/fr/');
  });
}

// runGeneratorSet moved to dispatch/governance/pipelines/sync-generated-files.js

function addViolation(violations, rule, file, message) {
  violations.push({
    rule,
    file,
    message
  });
}

function validateNonI18nGeneratedFiles(violations, files = getExpectedNonI18nGeneratedFiles()) {
  files.forEach((repoPath) => {
    const raw = readFileSafe(repoPath);
    if (!raw.trim()) {
      addViolation(violations, 'MISSING_FILE', repoPath, 'Generated file is missing or empty.');
      return;
    }

    if (!hasFrontmatterKey(raw, 'title')) {
      addViolation(violations, 'FRONTMATTER_TITLE', repoPath, 'Generated MDX must include frontmatter `title`.');
    }
    if (!hasFrontmatterKey(raw, 'description')) {
      addViolation(violations, 'FRONTMATTER_DESCRIPTION', repoPath, 'Generated MDX must include frontmatter `description`.');
    }

    const hidden = parseGeneratedHiddenBanner(raw);
    if (!hidden.found) {
      addViolation(violations, 'HIDDEN_BANNER_MISSING', repoPath, 'Missing standardized hidden generated banner.');
    } else if (hidden.marker !== GENERATED_HIDDEN_MARKER) {
      addViolation(
        violations,
        'HIDDEN_BANNER_MARKER',
        repoPath,
        `Unexpected hidden banner marker "${hidden.marker}" (expected "${GENERATED_HIDDEN_MARKER}").`
      );
    }

    if (!hasGeneratedNote(raw)) {
      addViolation(violations, 'VISIBLE_NOTE_MISSING', repoPath, 'Missing visible generated <Note> block.');
    }
  });
}

function walkMdxFiles(rootAbs, out = []) {
  if (!fs.existsSync(rootAbs)) return out;
  const entries = fs.readdirSync(rootAbs, { withFileTypes: true });
  entries.forEach((entry) => {
    const abs = path.join(rootAbs, entry.name);
    if (entry.isDirectory()) {
      walkMdxFiles(abs, out);
      return;
    }
    if (!entry.isFile()) return;
    if (!/\.mdx$/i.test(entry.name)) return;
    out.push(abs);
  });
  return out;
}

function collectLocalizedMdxFiles() {
  const { config } = loadI18nConfig({ repoRoot: REPO_ROOT });
  const root = normalizeRepoPath(config.sourceRoot || 'v2');
  const languages = Array.isArray(config.targetLanguages) ? config.targetLanguages : [];
  const files = [];

  languages.forEach((language) => {
    const abs = path.join(REPO_ROOT, root, language);
    if (!fs.existsSync(abs) || !fs.statSync(abs).isDirectory()) return;
    walkMdxFiles(abs, files);
  });

  return files
    .map((abs) => normalizeRepoPath(path.relative(REPO_ROOT, abs)))
    .sort((a, b) => a.localeCompare(b));
}

function normalizeI18nNoteParity(repoPath, sourceHasNote) {
  const fullPath = path.join(REPO_ROOT, repoPath);
  const content = fs.readFileSync(fullPath, 'utf8');
  if (!sourceHasNote && hasGeneratedNote(content)) {
    const next = removeGeneratedNotes(content);
    if (next !== content) {
      fs.writeFileSync(fullPath, next, 'utf8');
      return true;
    }
  }
  return false;
}

function validateI18nParity(writeMode, violations, warnings, localizedFiles = collectLocalizedMdxFiles()) {
  let normalizedCount = 0;

  localizedFiles.forEach((repoPath) => {
    const raw = readFileSafe(repoPath);
    if (!raw.trim()) return;

    const hiddenBanner = parseGeneratedHiddenBanner(raw);
    if (hiddenBanner.found) return;

    const provenance = parseProvenanceComment(raw);
    if (!provenance) {
      addViolation(violations, 'I18N_PROVENANCE_MISSING', repoPath, 'Missing codex-i18n provenance hidden comment.');
      return;
    }

    const sourcePath = normalizeRepoPath(provenance.sourcePath || '');
    if (!sourcePath) {
      warnings.push({
        rule: 'I18N_SOURCE_PATH_MISSING',
        file: repoPath,
        message: 'Provenance is missing sourcePath; skipping visible-note parity check.'
      });
      return;
    }

    const sourceRaw = readFileSafe(sourcePath);
    if (!sourceRaw.trim()) {
      warnings.push({
        rule: 'I18N_SOURCE_NOT_FOUND',
        file: repoPath,
        message: `Source page from provenance not found: ${sourcePath}; skipping visible-note parity check.`
      });
      return;
    }

    const sourceHasNote = hasGeneratedNote(sourceRaw);
    const localizedHasNote = hasGeneratedNote(raw);

    if (writeMode && !sourceHasNote && localizedHasNote) {
      if (normalizeI18nNoteParity(repoPath, sourceHasNote)) {
        normalizedCount += 1;
      }
    }

    const current = readFileSafe(repoPath);
    const currentHasNote = hasGeneratedNote(current);
    if (sourceHasNote && !currentHasNote) {
      addViolation(
        violations,
        'I18N_NOTE_MISSING',
        repoPath,
        `Source page includes generated <Note> but localized page is missing it (${sourcePath}).`
      );
    }
    if (!sourceHasNote && currentHasNote) {
      addViolation(
        violations,
        'I18N_NOTE_EXTRA',
        repoPath,
        `Localized page has generated <Note> but source page does not (${sourcePath}).`
      );
    }
  });

  return normalizedCount;
}

function parseArgs(argv) {
  const write = argv.includes('--write');
  const check = argv.includes('--check') || !write;
  const staged = argv.includes('--staged');
  return {
    write,
    check,
    staged
  };
}

function main(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);
  const violations = [];
  const warnings = [];
  const stagedFiles = args.staged ? getStagedFiles() : [];
  const bannerRelevantStagedFiles = args.staged ? getBannerRelevantStagedFiles(stagedFiles) : [];

  if (args.staged && bannerRelevantStagedFiles.length === 0) {
    console.log('⏭️ Generated file banner enforcement skipped in staged mode (no relevant staged files).');
    return;
  }

  // Banner validation only — generator dispatch moved to sync-generated-files.js
  const nonI18nFilesToValidate = args.staged
    ? bannerRelevantStagedFiles.filter((repoPath) => !repoPath.startsWith('v2/cn/') && !repoPath.startsWith('v2/es/') && !repoPath.startsWith('v2/fr/'))
    : getExpectedNonI18nGeneratedFiles();
  validateNonI18nGeneratedFiles(violations, nonI18nFilesToValidate);

  const localizedFilesToValidate = args.staged
    ? bannerRelevantStagedFiles.filter((repoPath) => repoPath.startsWith('v2/cn/') || repoPath.startsWith('v2/es/') || repoPath.startsWith('v2/fr/'))
    : collectLocalizedMdxFiles();
  const normalizedCount = validateI18nParity(args.write, violations, warnings, localizedFilesToValidate);

  if (args.write && normalizedCount > 0) {
    console.log(`Normalized i18n visible-note parity in ${normalizedCount} file(s).`);
  }

  if (warnings.length > 0) {
    console.warn('\n⚠️ Generated file banner warnings:');
    warnings.forEach((warning) => {
      console.warn(`  - [${warning.rule}] ${warning.file}: ${warning.message}`);
    });
  }

  if (violations.length > 0) {
    console.error('\n❌ Generated file banner enforcement failed:');
    violations.forEach((violation) => {
      console.error(`  - [${violation.rule}] ${violation.file}: ${violation.message}`);
    });
    process.exit(1);
  }

  console.log('✅ Generated file banner enforcement passed.');
}

if (require.main === module) {
  main();
}

module.exports = {
  main
};
