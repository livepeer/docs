#!/usr/bin/env node
/**
 * @script translate-docs
 * @summary Translate selected v2 docs pages into configured languages and emit localized MDX files plus route-map/report artifacts.
 * @owner docs
 * @scope tools/scripts/i18n, docs.json, v2
 *
 * @usage
 *   node tools/scripts/i18n/translate-docs.js --languages es,fr,de --scope-mode prefixes --prefixes v2/about/livepeer-network --max-pages 10 --max-concurrency 5
 *   node tools/scripts/i18n/translate-docs.js --provider mock --dry-run --scope-mode full_v2_nav --max-pages 5 --max-concurrency 5
 *
 * @inputs
 *   --languages <csv>, --scope-mode <mode>, --base-ref <ref>, --prefixes <csv>, --paths-file <path>, --max-pages <n>, --max-concurrency <n>, --provider <name>, --dry-run, --force, --allow-mock-write, --route-map <path>, --report-json <path>, --config <path>, --cleanup-only, --rewrite-links, --rewrite-scope <mode>
 *
 * @outputs
 *   - Localized MD/MDX files under v2/<lang>/...
 *   - Route map JSON artifact when --route-map is provided
 *   - Run report JSON artifact when --report-json is provided
 *
 * @exit-codes
 *   0 = success
 *   1 = runtime or validation failure
 *
 * @examples
 *   node tools/scripts/i18n/translate-docs.js --languages es --scope-mode paths_file --paths-file /tmp/paths.txt --route-map /tmp/route-map.json --report-json /tmp/report.json --max-concurrency 5
 *   node tools/scripts/i18n/translate-docs.js --languages es,fr,zh-CN --scope-mode full_v2_nav --max-pages 1000 --max-concurrency 5
 *
 * @notes
 *   Mock provider writes are blocked by default; use --dry-run for mock smoke tests.
 *   Chinese input zh-CN is normalized to cn for generated route/file paths.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { buildRuntimeOptions, loadI18nConfig, parseCommonCliArgs } = require('./lib/config');
const { buildV2EnglishRouteInventory, collectExistingLocalizedRouteMapEntries, selectScopeItems } = require('./lib/docs-routes');
const { parseMdxFileWithFrontmatter, translateFrontmatterFields } = require('./lib/frontmatter');
const { rewriteInternalLinksInBody, rewriteInternalLinksInJsx, translateMdxBody } = require('./lib/mdx-translate');
const { repoFileRelToLocalizedFileRel, normalizeRouteKey } = require('./lib/path-utils');
const {
  buildProvenanceComment,
  classifyLocalizedArtifactProvenance,
  injectOrReplaceProvenanceComment,
  parseProvenanceComment,
  sha256
} = require('./lib/provenance');
const { hasGeneratedNote, removeGeneratedNotes } = require('../../lib/generated-file-banners');
const { createTranslator } = require('./lib/providers');
const { getRepoRoot, normalizeRepoRel, writeJson, writeTextIfChanged } = require('./lib/common');

function printHelp() {
  console.log(
    [
      'Usage: node tools/scripts/i18n/translate-docs.js [options]',
      '',
      'Options:',
      '  --languages <csv>            Target languages (default from tools/i18n/config.json)',
      '  --scope-mode <mode>          changed_since_ref | prefixes | paths_file | full_v2_nav',
      '  --base-ref <ref>             Base ref for changed_since_ref mode',
      '  --prefixes <csv>             Repo prefixes for prefixes mode',
      '  --paths-file <path>          File containing explicit routes/files (paths_file mode)',
      '  --max-pages <n>              Max selected pages to process',
      '  --max-concurrency <n>        Max concurrent source files to translate (capped at 5)',
      '  --provider <name>            openrouter | mock',
      '  --dry-run                    Do not write localized files',
      '  --force                      Retranslate even when source hash matches',
      '  --allow-mock-write           Allow mock provider in non-dry runs (dangerous; testing only)',
      '  --route-map <path>           Write route-map artifact JSON',
      '  --report-json <path>         Write run report JSON',
      '  --cleanup-only               Skip translation and only run cleanup/link rewrite',
      '  --rewrite-links              Rewrite internal links for localized files (default true in cleanup-only)',
      '  --rewrite-scope <mode>       all | moved (default all for cleanup-only)',
      '  --config <path>              Alternate i18n config JSON',
      '  --help, -h                   Show this help'
    ].join('\n')
  );
}

function isMockWriteBlocked({ translator, runtime, config }) {
  if (translator?.name !== 'mock') return false;
  if (runtime.dryRun) return false;
  if (runtime.allowMockWrite) return false;
  if (config?.qualityGates?.blockMockProviderWrites === false) return false;
  return true;
}

function assertMockWriteAllowed({ translator, runtime, config, action }) {
  if (!isMockWriteBlocked({ translator, runtime, config })) return;
  throw new Error(
    [
      `Refusing to run ${action} with mock provider in write mode.`,
      'The mock provider prefixes content (for smoke tests) and can contaminate localized MDX/docs.json.',
      'Use --dry-run for mock provider smoke tests, or pass --allow-mock-write only for deliberate fixture generation.'
    ].join(' ')
  );
}

function artifactClassForProvider(providerName) {
  return String(providerName || '').trim().toLowerCase() === 'mock' ? 'translated_mock' : 'translated_real';
}

function requestedLanguageForEffective(runtime, effectiveLanguage) {
  const hit = (runtime.languageAliasesApplied || []).find((entry) => entry.effectiveLanguage === effectiveLanguage);
  return hit?.requestedLanguage || effectiveLanguage;
}

function buildRouteMapIndex(entries) {
  const index = new Map();
  for (const entry of entries) {
    const sourceRoute = normalizeRouteKey(entry.sourceRoute);
    const language = String(entry.effectiveLanguage || entry.language || '').trim();
    const localizedRoute = normalizeRouteKey(entry.localizedRoute);
    if (!sourceRoute || !language || !localizedRoute) continue;
    if (!index.has(sourceRoute)) index.set(sourceRoute, new Map());
    index.get(sourceRoute).set(language, localizedRoute);
  }
  return index;
}

function normalizeFileKey(value) {
  return normalizeRepoRel(String(value || '').replace(/\\/g, '/'));
}

function normalizeMaxConcurrency(value, fallback = 5) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return Math.min(parsed, fallback);
}

function chunkArray(items, size) {
  if (!Array.isArray(items) || items.length === 0) return [];
  const normalized = normalizeMaxConcurrency(size);
  const batches = [];
  for (let i = 0; i < items.length; i += normalized) {
    batches.push(items.slice(i, i + normalized));
  }
  return batches;
}

function isQuarantinedLocalizedFile(localizedFile) {
  const normalized = normalizeFileKey(localizedFile);
  return /^v2\/[^/]+\/group\/x-orphaned\//.test(normalized);
}

function resolveSolutionsEquivalent(localizedFile) {
  const normalized = normalizeFileKey(localizedFile);
  if (!normalized.includes('/platforms/')) return '';
  let next = normalized.replace('/platforms/', '/solutions/');
  if (next.endsWith('/ecosystem-products.mdx')) {
    next = next.replace('/ecosystem-products.mdx', '/solution-providers.mdx');
  }
  if (next.endsWith('/ecosystem-products.md')) {
    next = next.replace('/ecosystem-products.md', '/solution-providers.md');
  }
  return next;
}

function resolveOrphanQuarantinePath(localizedFile, language) {
  const normalized = normalizeFileKey(localizedFile);
  if (!normalized.startsWith('v2/')) return '';
  const parts = normalized.split('/');
  const lang = parts[1] || String(language || '').trim();
  const suffix = parts.slice(2).join('/');
  if (!lang || !suffix) return '';
  return `v2/${lang}/group/x-orphaned/${suffix}`;
}

function resolveQuarantineBasePath(localizedFile, language) {
  const normalized = normalizeFileKey(localizedFile);
  if (isQuarantinedLocalizedFile(normalized)) return normalized;
  return resolveOrphanQuarantinePath(normalized, language);
}

function moveLocalizedToQuarantine({ repoRoot, localizedFile, language, reason }) {
  const normalized = normalizeFileKey(localizedFile);
  const absPath = path.join(repoRoot, normalized);
  if (!fs.existsSync(absPath)) {
    return { movedTo: '', warning: `${reason} (missing file): ${localizedFile}` };
  }
  const basePath = resolveQuarantineBasePath(normalized, language);
  if (!basePath) {
    return { movedTo: '', warning: `${reason} (invalid quarantine path): ${localizedFile}` };
  }
  const raw = fs.readFileSync(absPath, 'utf8');
  const hash = sha256(`${normalized}:${raw}`).slice(0, 8);
  let target = basePath;
  const targetAbs = path.join(repoRoot, target);
  const hadCollision = fs.existsSync(targetAbs);
  fs.mkdirSync(path.dirname(targetAbs), { recursive: true });
  const forceFlag = hadCollision ? '-f ' : '';
  execSync(`git -C ${JSON.stringify(repoRoot)} mv ${forceFlag}${JSON.stringify(normalized)} ${JSON.stringify(target)}`, {
    stdio: 'ignore'
  });
  const collisionNote = hadCollision ? ` (replaced existing ${hash})` : '';
  return { movedTo: target, warning: `${reason}: ${localizedFile} -> ${target}${collisionNote}` };
}

function findRenameTarget(repoRoot, sourcePath) {
  if (!sourcePath) return '';
  try {
    const output = execSync(
      `git -C ${JSON.stringify(repoRoot)} log --follow --name-status --diff-filter=R -- ${JSON.stringify(sourcePath)}`,
      { encoding: 'utf8' }
    );
    for (const line of output.split('\n')) {
      if (!line.startsWith('R')) continue;
      const parts = line.split('\t');
      if (parts.length >= 3) {
        return normalizeRepoRel(parts[2]);
      }
    }
  } catch (_err) {
    return '';
  }
  return '';
}

const STATIC_RENAME_MAP = new Map(
  [
    [
      'v2/gateways/run-a-gateway/quickstart/get-AI-to-setup-the-gateway.mdx',
      'v2/gateways/quickstart/AI-prompt.mdx'
    ],
    [
      'v2/gateways/run-a-gateway/quickstart/quickstart-a-gateway.mdx',
      'v2/gateways/quickstart/gateway-setup.mdx'
    ],
    [
      'v2/gateways/references/artibtrum-exchanges.mdx',
      'v2/gateways/references/arbitrum-exchanges.mdx'
    ],
    [
      'v2/developers/livepeer-real-time-video/video-streaming-on-livepeer/README.mdx',
      'v2/developers/quickstart/video/video-streaming.mdx'
    ]
  ].map(([from, to]) => [normalizeRepoRel(from), normalizeRepoRel(to)])
);

function findRenameTargetFromMap(sourcePath) {
  if (!sourcePath) return '';
  const normalized = normalizeRepoRel(sourcePath);
  return STATIC_RENAME_MAP.get(normalized) || '';
}

const renameSearchIndexCache = new Map();

function buildFilenameIndex(repoRoot, rootAbs) {
  const index = new Map();
  function walk(dirAbs) {
    let entries = [];
    try {
      entries = fs.readdirSync(dirAbs, { withFileTypes: true });
    } catch (_err) {
      return;
    }
    for (const entry of entries) {
      const childAbs = path.join(dirAbs, entry.name);
      if (entry.isDirectory()) {
        walk(childAbs);
        continue;
      }
      if (!/\.(md|mdx)$/i.test(entry.name)) continue;
      const rel = normalizeRepoRel(path.relative(repoRoot, childAbs));
      if (!index.has(entry.name)) index.set(entry.name, []);
      index.get(entry.name).push(rel);
    }
  }
  if (fs.existsSync(rootAbs)) {
    walk(rootAbs);
  }
  return index;
}

function getFilenameIndex(repoRoot, rootAbs) {
  const cacheKey = `${repoRoot}::${rootAbs}`;
  const cached = renameSearchIndexCache.get(cacheKey);
  if (cached) return cached;
  const index = buildFilenameIndex(repoRoot, rootAbs);
  renameSearchIndexCache.set(cacheKey, index);
  return index;
}

function pickUniqueCandidate(candidates) {
  if (!Array.isArray(candidates) || candidates.length !== 1) return '';
  return candidates[0];
}

function filterCandidatesBySameRoot(candidates, normalized) {
  if (!Array.isArray(candidates) || candidates.length === 0) return candidates;
  if (normalized.startsWith('docs-guide/')) {
    return candidates.filter((candidate) => candidate.startsWith('docs-guide/'));
  }
  if (normalized.startsWith('v2/')) {
    const root = normalized.split('/').slice(0, 2).join('/');
    return candidates.filter((candidate) => candidate.startsWith(`${root}/`));
  }
  return candidates;
}

function findRenameTargetBySearch(repoRoot, sourcePath) {
  if (!sourcePath) return '';
  const normalized = normalizeRepoRel(sourcePath);
  const baseName = path.basename(normalized);
  const altExt =
    baseName.endsWith('.mdx')
      ? baseName.replace(/\.mdx$/i, '.md')
      : baseName.endsWith('.md')
        ? baseName.replace(/\.md$/i, '.mdx')
        : '';
  const withoutGatewayPrefix = baseName.startsWith('gateway-') ? baseName.replace(/^gateway-/, '') : '';

  const roots = [];
  if (normalized.startsWith('docs-guide/')) {
    roots.push('docs-guide');
  } else if (normalized.startsWith('v2/')) {
    const parts = normalized.split('/');
    roots.push(parts.slice(0, 2).join('/'));
  } else {
    roots.push('v2');
    roots.push('docs-guide');
  }

  for (const rootRel of roots) {
    const rootAbs = path.join(repoRoot, rootRel);
    const index = getFilenameIndex(repoRoot, rootAbs);
    const candidates = [];
    for (const name of [baseName, altExt].filter(Boolean)) {
      const hits = index.get(name) || [];
      candidates.push(...hits);
    }
    if (withoutGatewayPrefix) {
      const hits = index.get(withoutGatewayPrefix) || [];
      candidates.push(...hits);
      if (altExt && withoutGatewayPrefix.endsWith('.mdx')) {
        const altGateway = withoutGatewayPrefix.replace(/\.mdx$/i, '.md');
        candidates.push(...(index.get(altGateway) || []));
      } else if (altExt && withoutGatewayPrefix.endsWith('.md')) {
        const altGateway = withoutGatewayPrefix.replace(/\.md$/i, '.mdx');
        candidates.push(...(index.get(altGateway) || []));
      }
    }
    const uniquePreferred = pickUniqueCandidate(
      [...new Set(filterCandidatesBySameRoot(candidates, normalized))]
    );
    if (uniquePreferred) return uniquePreferred;
    const unique = pickUniqueCandidate([...new Set(candidates)]);
    if (unique) return unique;
  }
  return '';
}

function readLocalizedProvenance(repoRoot, localizedFile) {
  const absPath = path.join(repoRoot, localizedFile);
  try {
    const raw = fs.readFileSync(absPath, 'utf8');
    return parseProvenanceComment(raw);
  } catch (_err) {
    return null;
  }
}

function cleanupLocalizedOrphans({ repoRoot, existingLocalizedEntries, runtime, config }) {
  const deletedFiles = new Set();
  const movedFiles = new Set();
  const movedTargets = new Map();
  const warnings = [];

  if (runtime.dryRun) {
    return { deletedFiles, movedFiles, warnings };
  }

  for (const entry of existingLocalizedEntries || []) {
    const localizedFile = normalizeFileKey(entry.localizedFile || '');
    if (!localizedFile) continue;
    if (isQuarantinedLocalizedFile(localizedFile)) continue;

    const provenance = readLocalizedProvenance(repoRoot, localizedFile);
    const sourcePath = normalizeRepoRel(String(provenance?.sourcePath || '').trim());
    if (!sourcePath) {
      warnings.push(`orphan cleanup skipped (missing provenance sourcePath): ${localizedFile}`);
      continue;
    }

    const sourceAbs = path.join(repoRoot, sourcePath);
    if (fs.existsSync(sourceAbs)) continue;

    const absPath = path.join(repoRoot, localizedFile);
    if (!fs.existsSync(absPath)) continue;

    if (localizedFile.includes('/platforms/')) {
      const equivalent = resolveSolutionsEquivalent(localizedFile);
      if (equivalent) {
        const equivalentAbs = path.join(repoRoot, equivalent);
        if (fs.existsSync(equivalentAbs)) {
          const { movedTo, warning } = moveLocalizedToQuarantine({
            repoRoot,
            localizedFile,
            language: entry.language,
            reason: 'orphan cleanup moved to quarantine (solutions equivalent exists)'
          });
          if (movedTo) {
            movedFiles.add(localizedFile);
            movedTargets.set(localizedFile, movedTo);
          }
          if (warning) warnings.push(warning);
          continue;
        }
        warnings.push(`platform orphan missing solutions equivalent: ${localizedFile} -> ${equivalent}`);
      }
    }

    let renameTarget = findRenameTargetFromMap(sourcePath);
    if (!renameTarget) renameTarget = findRenameTarget(repoRoot, sourcePath);
    if (renameTarget) {
      const targetAbs = path.join(repoRoot, renameTarget);
      if (fs.existsSync(targetAbs)) {
        const targetLocalized = repoFileRelToLocalizedFileRel(
          renameTarget,
          entry.language,
          config.generatedRoot,
          config.generatedPathStyle
        );
        const targetLocalizedAbs = path.join(repoRoot, targetLocalized);
        if (normalizeFileKey(targetLocalized) === localizedFile) {
          continue;
        }
        try {
          if (fs.existsSync(targetLocalizedAbs)) {
            const { movedTo, warning } = moveLocalizedToQuarantine({
              repoRoot,
              localizedFile,
              language: entry.language,
              reason: `orphan cleanup moved to quarantine (rename target exists: ${targetLocalized})`
            });
            if (movedTo) {
              movedFiles.add(localizedFile);
              movedTargets.set(localizedFile, movedTo);
            }
            if (warning) warnings.push(warning);
          } else {
            fs.mkdirSync(path.dirname(targetLocalizedAbs), { recursive: true });
            fs.renameSync(absPath, targetLocalizedAbs);
            movedFiles.add(localizedFile);
            movedTargets.set(localizedFile, targetLocalized);
            continue;
          }
        } catch (error) {
          warnings.push(`orphan cleanup skipped (missing file): ${localizedFile} (${error.message})`);
          continue;
        }
      }
    }

    if (!renameTarget) {
      const searchTarget = findRenameTargetBySearch(repoRoot, sourcePath);
      if (searchTarget) {
        const targetAbs = path.join(repoRoot, searchTarget);
        if (fs.existsSync(targetAbs)) {
          const targetLocalized = repoFileRelToLocalizedFileRel(
            searchTarget,
            entry.language,
            config.generatedRoot,
            config.generatedPathStyle
          );
          const targetLocalizedAbs = path.join(repoRoot, targetLocalized);
          if (normalizeFileKey(targetLocalized) === localizedFile) {
            continue;
          }
          try {
            if (fs.existsSync(targetLocalizedAbs)) {
              const { movedTo, warning } = moveLocalizedToQuarantine({
                repoRoot,
                localizedFile,
                language: entry.language,
                reason: `orphan cleanup moved to quarantine (rename target exists: ${targetLocalized})`
              });
              if (movedTo) {
                movedFiles.add(localizedFile);
                movedTargets.set(localizedFile, movedTo);
              }
              if (warning) warnings.push(warning);
            } else {
              fs.mkdirSync(path.dirname(targetLocalizedAbs), { recursive: true });
              fs.renameSync(absPath, targetLocalizedAbs);
              movedFiles.add(localizedFile);
              movedTargets.set(localizedFile, targetLocalized);
              continue;
            }
          } catch (error) {
            warnings.push(`orphan cleanup skipped (missing file): ${localizedFile} (${error.message})`);
            continue;
          }
        }
      }
    }

    const orphanPath = resolveOrphanQuarantinePath(localizedFile, entry.language);
    if (!orphanPath) {
      warnings.push(`orphan cleanup skipped (invalid path): ${localizedFile}`);
      continue;
    }
    const orphanAbs = path.join(repoRoot, orphanPath);
    if (fs.existsSync(orphanAbs)) {
      warnings.push(`orphan cleanup skipped (target exists): ${localizedFile} -> ${orphanPath}`);
      continue;
    }
    try {
      fs.mkdirSync(path.dirname(orphanAbs), { recursive: true });
      fs.renameSync(absPath, orphanAbs);
      movedFiles.add(localizedFile);
    } catch (error) {
      warnings.push(`orphan cleanup skipped (missing file): ${localizedFile} (${error.message})`);
    }
  }

  return { deletedFiles, movedFiles, movedTargets, warnings };
}

function collectQuarantinedLocalizedFiles(repoRoot, language) {
  const quarantined = [];
  const rootRel = normalizeRepoRel(path.join('v2', language, 'group', 'x-orphaned'));
  const rootAbs = path.join(repoRoot, rootRel);
  function walk(dirAbs) {
    let entries = [];
    try {
      entries = fs.readdirSync(dirAbs, { withFileTypes: true });
    } catch (_err) {
      return;
    }
    for (const entry of entries) {
      const childAbs = path.join(dirAbs, entry.name);
      if (entry.isDirectory()) {
        walk(childAbs);
        continue;
      }
      if (!/\.(md|mdx)$/i.test(entry.name)) continue;
      const rel = normalizeRepoRel(path.relative(repoRoot, childAbs));
      quarantined.push(rel);
    }
  }
  if (fs.existsSync(rootAbs)) walk(rootAbs);
  return quarantined;
}

function deriveSourcePathFromQuarantine(localizedFile, language) {
  const normalized = normalizeRepoRel(localizedFile);
  const prefix = `v2/${language}/group/x-orphaned/`;
  if (!normalized.startsWith(prefix)) return '';
  const remainder = normalized.slice(prefix.length);
  if (remainder.startsWith('docs-guide/') || remainder.startsWith('contribute/')) {
    return remainder;
  }
  return `v2/${remainder}`;
}

function recoverQuarantinedLocalizedFiles({ repoRoot, runtime, config }) {
  const deletedFiles = new Set();
  const movedFiles = new Set();
  const movedTargets = new Map();
  const warnings = [];

  if (runtime.dryRun) {
    return { deletedFiles, movedFiles, movedTargets, warnings };
  }

  for (const language of runtime.languages || []) {
    const quarantinedFiles = collectQuarantinedLocalizedFiles(repoRoot, language);
    for (const localizedFile of quarantinedFiles) {
      const provenance = readLocalizedProvenance(repoRoot, localizedFile);
      let sourcePath = normalizeRepoRel(String(provenance?.sourcePath || '').trim());
      if (!sourcePath) {
        sourcePath = normalizeRepoRel(deriveSourcePathFromQuarantine(localizedFile, language));
        if (sourcePath) {
          warnings.push(`quarantine used derived sourcePath: ${localizedFile} -> ${sourcePath}`);
        } else {
          warnings.push(`quarantine skipped (missing provenance sourcePath): ${localizedFile}`);
          continue;
        }
      }
      const absPath = path.join(repoRoot, localizedFile);
      if (!fs.existsSync(absPath)) continue;

      const sourceAbs = path.join(repoRoot, sourcePath);
      if (localizedFile.includes('/platforms/')) {
        const equivalent = resolveSolutionsEquivalent(localizedFile);
        if (equivalent) {
          const equivalentAbs = path.join(repoRoot, equivalent);
          if (fs.existsSync(equivalentAbs)) {
            const { movedTo, warning } = moveLocalizedToQuarantine({
              repoRoot,
              localizedFile,
              language,
              reason: 'quarantine moved to quarantine (solutions equivalent exists)'
            });
            if (movedTo) {
              movedFiles.add(localizedFile);
              movedTargets.set(localizedFile, movedTo);
            }
            if (warning) warnings.push(warning);
            continue;
          }
          warnings.push(`quarantine platform orphan missing solutions equivalent: ${localizedFile} -> ${equivalent}`);
        }
      }

      let renameTarget = '';
      if (fs.existsSync(sourceAbs)) {
        renameTarget = sourcePath;
      }
      if (!renameTarget) renameTarget = findRenameTargetFromMap(sourcePath);
      if (!renameTarget) renameTarget = findRenameTarget(repoRoot, sourcePath);
      if (!renameTarget) renameTarget = findRenameTargetBySearch(repoRoot, sourcePath);
      if (!renameTarget) {
        warnings.push(`quarantine skipped (no rename target): ${localizedFile}`);
        continue;
      }
      const targetAbs = path.join(repoRoot, renameTarget);
      if (!fs.existsSync(targetAbs)) {
        warnings.push(`quarantine skipped (rename target missing): ${localizedFile} -> ${renameTarget}`);
        continue;
      }
      const targetLocalized = repoFileRelToLocalizedFileRel(
        renameTarget,
        language,
        config.generatedRoot,
        config.generatedPathStyle
      );
      const targetLocalizedAbs = path.join(repoRoot, targetLocalized);
      if (normalizeFileKey(targetLocalized) === normalizeFileKey(localizedFile)) continue;
      try {
        if (fs.existsSync(targetLocalizedAbs)) {
          const { movedTo, warning } = moveLocalizedToQuarantine({
            repoRoot,
            localizedFile,
            language,
            reason: `quarantine moved to quarantine (rename target exists: ${targetLocalized})`
          });
          if (movedTo) {
            movedFiles.add(localizedFile);
            movedTargets.set(localizedFile, movedTo);
          }
          if (warning) warnings.push(warning);
        } else {
          fs.mkdirSync(path.dirname(targetLocalizedAbs), { recursive: true });
          fs.renameSync(absPath, targetLocalizedAbs);
          movedFiles.add(localizedFile);
          movedTargets.set(localizedFile, targetLocalized);
        }
      } catch (error) {
        warnings.push(`quarantine skipped (missing file): ${localizedFile} (${error.message})`);
      }
    }
  }

  return { deletedFiles, movedFiles, movedTargets, warnings };
}

function buildLocalizedRouteMapBySourceRoute({ repoRoot, config, runtime }) {
  const entries = collectExistingLocalizedRouteMapEntries(repoRoot, config.generatedRoot, {
    generatedPathStyle: config.generatedPathStyle,
    sourceRoot: config.sourceRoot,
    knownLanguages: runtime.languages
  });
  const routeMapBySourceRoute = new Map();
  for (const entry of entries || []) {
    const localizedFile = normalizeFileKey(entry.localizedFile || '');
    if (!localizedFile) continue;
    if (isQuarantinedLocalizedFile(localizedFile)) continue;

    const absPath = path.join(repoRoot, localizedFile);
    if (!fs.existsSync(absPath)) continue;

    let provenance = null;
    try {
      provenance = parseProvenanceComment(fs.readFileSync(absPath, 'utf8'));
    } catch (_err) {
      provenance = null;
    }
    const sourceRouteRaw = String(provenance?.sourceRoute || entry.sourceRoute || '').trim();
    const sourceRoute = normalizeRouteKey(sourceRouteRaw);
    if (!sourceRoute) continue;
    const localizedRoute = normalizeRouteKey(entry.localizedRoute || localizedFile);
    if (!localizedRoute) continue;
    const language = String(entry.language || '').trim();
    if (!language) continue;

    if (!routeMapBySourceRoute.has(sourceRoute)) {
      routeMapBySourceRoute.set(sourceRoute, new Map());
    }
    routeMapBySourceRoute.get(sourceRoute).set(language, localizedRoute);
  }
  return routeMapBySourceRoute;
}

function rewriteLocalizedLinks({ repoRoot, config, runtime, scope = 'all', movedTargets }) {
  const results = {
    rewrittenFiles: 0,
    rewrittenLinks: 0,
    fallbackLinks: 0,
    warnings: []
  };

  const routeMapBySourceRoute = buildLocalizedRouteMapBySourceRoute({ repoRoot, config, runtime });
  const entries = collectExistingLocalizedRouteMapEntries(repoRoot, config.generatedRoot, {
    generatedPathStyle: config.generatedPathStyle,
    sourceRoot: config.sourceRoot,
    knownLanguages: runtime.languages
  });

  const targetSet =
    scope === 'moved' && movedTargets
      ? new Set([...movedTargets.values()].map((value) => normalizeFileKey(value)))
      : null;

  for (const entry of entries || []) {
    const localizedFile = normalizeFileKey(entry.localizedFile || '');
    if (!localizedFile) continue;
    if (isQuarantinedLocalizedFile(localizedFile)) continue;
    if (targetSet && !targetSet.has(localizedFile)) continue;

    const absPath = path.join(repoRoot, localizedFile);
    if (!fs.existsSync(absPath)) continue;

    const raw = fs.readFileSync(absPath, 'utf8');
    const provenance = parseProvenanceComment(raw);
    const sourceRouteRaw = String(provenance?.sourceRoute || entry.sourceRoute || '').trim();
    const sourceRoute = normalizeRouteKey(sourceRouteRaw);
    if (!sourceRoute) {
      results.warnings.push(`missing provenance sourceRoute: ${localizedFile}`);
      continue;
    }
    const sourceLocalizedRoute = normalizeRouteKey(entry.localizedRoute || localizedFile);
    const language = String(entry.language || '').trim();

    const parsed = parseMdxFileWithFrontmatter(raw);
    let nextBody = parsed.body;
    const routeContext = {
      sourceRoute,
      language,
      sourceLocalizedRoute,
      routeMapBySourceRoute
    };

    const markdownResult = rewriteInternalLinksInBody(nextBody, routeContext);
    nextBody = markdownResult.body;
    const jsxResult = rewriteInternalLinksInJsx(nextBody, routeContext);
    nextBody = jsxResult.body;

    const totalRewrites = markdownResult.rewrittenCount + jsxResult.rewrittenCount;
    const totalFallbacks = markdownResult.fallbackCount + jsxResult.fallbackCount;
    results.fallbackLinks += totalFallbacks;

    if (totalRewrites === 0) continue;

    results.rewrittenLinks += totalRewrites;
    let nextContent = parsed.stringify(nextBody, parsed.data);
    if (provenance) {
      nextContent = injectOrReplaceProvenanceComment(nextContent, buildProvenanceComment(provenance));
    }
    const changed = writeTextIfChanged(absPath, nextContent);
    if (changed) results.rewrittenFiles += 1;
  }

  return results;
}

function createPlannedEntries(selectedItems, languages, generatedRoot, generatedPathStyle, runtime) {
  const entries = [];
  for (const item of selectedItems) {
    for (const language of languages) {
      const localizedFile = repoFileRelToLocalizedFileRel(item.fileRel, language, generatedRoot, generatedPathStyle);
      entries.push({
        sourceRoute: item.route,
        sourceFile: item.fileRel,
        language,
        requestedLanguage: requestedLanguageForEffective(runtime || {}, language),
        effectiveLanguage: language,
        localizedRoute: normalizeRouteKey(localizedFile),
        localizedFile,
        localizedRouteStyle: generatedPathStyle || '',
        status: 'planned'
      });
    }
  }
  return entries;
}

function mergeRouteMapEntries(existingEntries, plannedEntries) {
  const byKey = new Map();
  const makeKey = (entry) => `${normalizeRouteKey(entry.sourceRoute)}::${entry.language}`;
  for (const entry of existingEntries) byKey.set(makeKey(entry), { ...entry });
  for (const entry of plannedEntries) byKey.set(makeKey(entry), { ...byKey.get(makeKey(entry)), ...entry });
  return [...byKey.values()];
}

function updateRouteMapEntry(routeMapEntries, replacement) {
  const key = `${normalizeRouteKey(replacement.sourceRoute)}::${replacement.language}`;
  const index = routeMapEntries.findIndex(
    (entry) => `${normalizeRouteKey(entry.sourceRoute)}::${entry.language}` === key
  );
  if (index >= 0) routeMapEntries[index] = { ...routeMapEntries[index], ...replacement };
  else routeMapEntries.push({ ...replacement });
}

function parseArgs(argv) {
  return parseCommonCliArgs(argv);
}

async function processOneTranslation({
  repoRoot,
  config,
  translator,
  item,
  language,
  routeMapIndex,
  runtime
}) {
  const sourceContent = fs.readFileSync(item.fileAbs, 'utf8');
  const sourceHash = sha256(sourceContent);
  const requestedLanguage = requestedLanguageForEffective(runtime, language);
  const localizedFileRel = repoFileRelToLocalizedFileRel(
    item.fileRel,
    language,
    config.generatedRoot,
    config.generatedPathStyle
  );
  const localizedRoute = normalizeRouteKey(localizedFileRel);
  const localizedAbs = path.join(repoRoot, localizedFileRel);

  if (!runtime.force && fs.existsSync(localizedAbs)) {
    const existing = fs.readFileSync(localizedAbs, 'utf8');
    const provenance = parseProvenanceComment(existing);
    const provenanceMeta = classifyLocalizedArtifactProvenance(provenance);
    if (provenance?.sourceHash === sourceHash) {
      return {
        routeMapEntry: {
          sourceRoute: item.route,
          sourceFile: item.fileRel,
          language,
          requestedLanguage,
          effectiveLanguage: language,
          localizedRoute,
          localizedFile: localizedFileRel,
          localizedRouteStyle: config.generatedPathStyle || '',
          status: 'skipped_up_to_date',
          sourceHash,
          provider: provenanceMeta.provider || translator.name,
          modelUsed: provenance.model || '',
          provenanceKind: provenanceMeta.provenanceKind || '',
          artifactClass: provenanceMeta.artifactClass || 'existing_unknown',
          updatedAt: provenance.generatedAt || ''
        },
        report: {
          changed: false,
          translatedSegments: 0,
          translatedFrontmatterFields: 0,
          linkRewrites: 0,
          linkFallbacks: 0,
          modelUsed: provenance.model || ''
        }
      };
    }
  }

  const parsed = parseMdxFileWithFrontmatter(sourceContent);
  const frontmatterResult = await translateFrontmatterFields({
    data: parsed.data,
    language,
    translator,
    rules: config.translationRules,
    translateKeywords: Boolean(config.translationRules?.translateKeywords)
  });

  const bodyResult = await translateMdxBody({
    body: parsed.body,
    language,
    translator,
    rules: config.translationRules,
    routeContext: {
      sourceRoute: item.route,
      language,
      sourceLocalizedRoute: localizedRoute,
      routeMapBySourceRoute: routeMapIndex
    }
  });

  let rendered = parsed.stringify(bodyResult.body, frontmatterResult.data);
  if (!hasGeneratedNote(sourceContent)) {
    rendered = removeGeneratedNotes(rendered);
  }
  const provenanceComment = buildProvenanceComment({
    sourcePath: item.fileRel,
    sourceRoute: item.route,
    sourceHash,
    language,
    provider: translator.name,
    model: bodyResult.modelUsed || frontmatterResult.modelUsed || '',
    generatedAt: new Date().toISOString()
  });
  const withProvenance = injectOrReplaceProvenanceComment(rendered, provenanceComment);

  let changed = false;
  if (!runtime.dryRun) {
    changed = writeTextIfChanged(localizedAbs, withProvenance);
  }

  return {
    routeMapEntry: {
      sourceRoute: item.route,
      sourceFile: item.fileRel,
      language,
      requestedLanguage,
      effectiveLanguage: language,
      localizedRoute,
      localizedFile: localizedFileRel,
      localizedRouteStyle: config.generatedPathStyle || '',
      status: runtime.dryRun ? 'translated_dry_run' : changed ? 'translated' : 'unchanged_write',
      sourceHash,
      provider: translator.name,
      modelUsed: bodyResult.modelUsed || frontmatterResult.modelUsed || '',
      provenanceKind: 'codex-i18n',
      artifactClass: artifactClassForProvider(translator.name),
      updatedAt: new Date().toISOString()
    },
    report: {
      changed,
      translatedSegments: bodyResult.translatedSegments,
      translatedFrontmatterFields: frontmatterResult.translatedCount,
      linkRewrites: bodyResult.linkRewrite.rewrittenCount,
      linkFallbacks: bodyResult.linkRewrite.fallbackCount,
      modelUsed: bodyResult.modelUsed || frontmatterResult.modelUsed || ''
    }
  };
}

async function run(argv = process.argv.slice(2)) {
  const cliArgs = parseArgs(argv);
  if (cliArgs.help || argv.includes('--help') || argv.includes('-h')) {
    printHelp();
    return { help: true };
  }
  const { repoRoot, configPath, config } = loadI18nConfig({
    repoRoot: getRepoRoot(),
    configPath: cliArgs.configPath || undefined
  });
  const runtime = buildRuntimeOptions(cliArgs, config);
  const cleanupOnly = Boolean(runtime.cleanupOnly);
  const rewriteLinksEnabled = cleanupOnly ? runtime.rewriteLinks !== false : runtime.rewriteLinks === true;
  const rewriteScope = (runtime.rewriteScope || (cleanupOnly ? 'all' : '')).toLowerCase();
  const translator = cleanupOnly ? null : createTranslator({ config, providerNameOverride: runtime.providerNameOverride });
  if (!cleanupOnly) {
    assertMockWriteAllowed({ translator, runtime, config, action: 'translate-docs' });
  }

  if (runtime.scopeMode === 'paths_file' && !runtime.pathsFile) {
    throw new Error('--paths-file is required when --scope-mode paths_file is used');
  }
  if (runtime.scopeMode === 'prefixes' && (!runtime.prefixes || runtime.prefixes.length === 0)) {
    throw new Error('--prefixes is required when --scope-mode prefixes is used');
  }

  const inventory = cleanupOnly ? { items: [], unresolved: [] } : buildV2EnglishRouteInventory(repoRoot);
  const validSourceRoutes = new Set((inventory.items || []).map((item) => normalizeRouteKey(item.route)));
  const scope = cleanupOnly
    ? { selected: [], totalCandidateCount: 0, truncated: false }
    : selectScopeItems({
        repoRoot,
        inventory,
        scopeMode: runtime.scopeMode,
        baseRef: runtime.baseRef,
        prefixes: runtime.prefixes,
        pathsFile: runtime.pathsFile,
        maxPages: runtime.maxPages
      });

  const existingLocalized = collectExistingLocalizedRouteMapEntries(repoRoot, config.generatedRoot, {
    generatedPathStyle: config.generatedPathStyle,
    sourceRoot: config.sourceRoot,
    knownLanguages: runtime.languages
  });
  const plannedEntries = cleanupOnly
    ? []
    : createPlannedEntries(scope.selected, runtime.languages, config.generatedRoot, config.generatedPathStyle, runtime);
  const routeMapEntries = cleanupOnly ? existingLocalized : mergeRouteMapEntries(existingLocalized, plannedEntries);
  const routeMapIndex = buildRouteMapIndex(routeMapEntries);

  const report = {
    generatedAt: new Date().toISOString(),
    repoRoot,
    configPath,
    provider: {
      name: translator ? translator.name : 'cleanup-only',
      mode: translator ? translator.name : 'cleanup-only'
    },
    runtime,
    scope: {
      scopeMode: runtime.scopeMode,
      selectedPages: scope.selected.length,
      selectedRoutes: scope.selected.map((item) => item.route),
      totalCandidateCount: scope.totalCandidateCount,
      truncated: scope.truncated,
      unresolvedV2Routes: inventory.unresolved.length
    },
    counts: {
      translated: 0,
      skippedUpToDate: 0,
      failed: 0,
      dryRunTranslated: 0,
      changedWrites: 0,
      successfulPageLanguagePairs: 0
    },
    pages: [],
    failures: [],
    warnings: []
  };

  if (runtime.scopeMode !== 'full_v2_nav') {
    report.warnings.push(
      `Partial scope run (${runtime.scopeMode}) may produce mixed-language locale UI until more routes are localized.`
    );
  }

  if (!cleanupOnly) {
    const tasks = [];
    for (const item of scope.selected) {
      for (const language of runtime.languages) {
        tasks.push({ item, language });
      }
    }

    const batches = chunkArray(tasks, runtime.maxConcurrency);
    for (const batch of batches) {
      const outcomes = await Promise.all(
        batch.map(async ({ item, language }) => {
          try {
            const result = await processOneTranslation({
              repoRoot,
              config,
              translator,
              item,
              language,
              routeMapIndex,
              runtime
            });
            return { ok: true, item, language, result };
          } catch (error) {
            return { ok: false, item, language, error };
          }
        })
      );

      for (const outcome of outcomes) {
        if (outcome.ok) {
          const { item, language, result } = outcome;
          updateRouteMapEntry(routeMapEntries, result.routeMapEntry);

          const status = result.routeMapEntry.status;
          if (status === 'translated') report.counts.translated += 1;
          if (status === 'translated_dry_run') report.counts.dryRunTranslated += 1;
          if (status === 'skipped_up_to_date') report.counts.skippedUpToDate += 1;
          if (result.report.changed) report.counts.changedWrites += 1;
          report.counts.successfulPageLanguagePairs += 1;

          report.pages.push({
            sourceRoute: item.route,
            sourceFile: item.fileRel,
            language,
            requestedLanguage: requestedLanguageForEffective(runtime, language),
            effectiveLanguage: language,
            localizedRoute: result.routeMapEntry.localizedRoute,
            localizedFile: result.routeMapEntry.localizedFile,
            status,
            translatedSegments: result.report.translatedSegments,
            translatedFrontmatterFields: result.report.translatedFrontmatterFields,
            linkRewrites: result.report.linkRewrites,
            linkFallbacks: result.report.linkFallbacks,
            modelUsed: result.report.modelUsed
          });
        } else {
          const { item, language, error } = outcome;
          report.counts.failed += 1;
          const failure = {
            sourceRoute: item.route,
            sourceFile: item.fileRel,
            language,
            error: error.message
          };
          report.failures.push(failure);
          updateRouteMapEntry(routeMapEntries, {
            sourceRoute: item.route,
            sourceFile: item.fileRel,
            language,
            requestedLanguage: requestedLanguageForEffective(runtime, language),
            effectiveLanguage: language,
            localizedRoute: normalizeRouteKey(
              repoFileRelToLocalizedFileRel(item.fileRel, language, config.generatedRoot, config.generatedPathStyle)
            ),
            localizedFile: repoFileRelToLocalizedFileRel(item.fileRel, language, config.generatedRoot, config.generatedPathStyle),
            localizedRouteStyle: config.generatedPathStyle || '',
            status: 'failed',
            provider: translator.name,
            provenanceKind: '',
            artifactClass: 'failed'
          });
        }
      }
    }
  }

  const cleanup = cleanupLocalizedOrphans({
    repoRoot,
    existingLocalizedEntries: existingLocalized,
    runtime,
    config
  });
  const quarantineRecovery = recoverQuarantinedLocalizedFiles({
    repoRoot,
    runtime,
    config
  });

  const deletedFiles = new Set([...cleanup.deletedFiles, ...quarantineRecovery.deletedFiles]);
  const movedFiles = new Set([...cleanup.movedFiles, ...quarantineRecovery.movedFiles]);
  const movedTargets = new Map([
    ...(cleanup.movedTargets || []),
    ...(quarantineRecovery.movedTargets || [])
  ]);
  const cleanupWarnings = [...cleanup.warnings, ...quarantineRecovery.warnings];

  if (deletedFiles.size > 0 || movedFiles.size > 0) {
    const deleted = deletedFiles;
    const moved = movedFiles;
    for (let i = routeMapEntries.length - 1; i >= 0; i -= 1) {
      const entryFile = normalizeFileKey(routeMapEntries[i].localizedFile || '');
      if (entryFile && (deleted.has(entryFile) || moved.has(entryFile))) {
        routeMapEntries.splice(i, 1);
      }
    }
  }

  report.cleanup = {
    deletedCount: deletedFiles.size,
    movedCount: movedFiles.size,
    deletedFiles: [...deletedFiles],
    movedFiles: [...movedFiles],
    movedTargets: Object.fromEntries(movedTargets || []),
    warnings: cleanupWarnings
  };
  if (cleanupWarnings.length > 0) {
    report.warnings.push(...cleanupWarnings.map((warning) => `cleanup: ${warning}`));
  }

  if (rewriteLinksEnabled) {
    const rewriteResult = rewriteLocalizedLinks({
      repoRoot,
      config,
      runtime,
      scope: rewriteScope === 'moved' ? 'moved' : 'all',
      movedTargets
    });
    report.linkRewrite = {
      rewrittenFiles: rewriteResult.rewrittenFiles,
      rewrittenLinks: rewriteResult.rewrittenLinks,
      fallbackLinks: rewriteResult.fallbackLinks,
      warnings: rewriteResult.warnings
    };
    if (rewriteResult.warnings.length > 0) {
      report.warnings.push(...rewriteResult.warnings.map((warning) => `link-rewrite: ${warning}`));
    }
  }

  if (runtime.routeMapPath) {
    const routeMapPath = path.resolve(repoRoot, runtime.routeMapPath);
    writeJson(routeMapPath, {
      generatedAt: new Date().toISOString(),
      dryRun: runtime.dryRun,
      provider: report.provider,
      runtime: {
        languages: runtime.languages,
        requestedLanguages: runtime.requestedLanguages,
        languageAliasesApplied: runtime.languageAliasesApplied,
        generatedPathStyle: config.generatedPathStyle || '',
        generatedRoot: config.generatedRoot,
        scopeMode: runtime.scopeMode,
        baseRef: runtime.baseRef,
        prefixes: runtime.prefixes,
        pathsFile: runtime.pathsFile,
        maxPages: runtime.maxPages,
        dryRun: runtime.dryRun,
        force: runtime.force
      },
      scope: {
        scopeMode: runtime.scopeMode,
        selectedPages: scope.selected.length,
        selectedRoutes: scope.selected.map((item) => item.route),
        totalCandidateCount: scope.totalCandidateCount,
        truncated: scope.truncated
      },
      warnings: report.warnings,
      entries: routeMapEntries
    });
    report.routeMapPath = routeMapPath;
  }

  if (runtime.reportJsonPath) {
    const reportPath = path.resolve(repoRoot, runtime.reportJsonPath);
    writeJson(reportPath, report);
    report.reportJsonPath = reportPath;
  }

  const summary = [
    `i18n translate-docs summary`,
    `- scope pages: ${report.scope.selectedPages}${report.scope.truncated ? ' (truncated)' : ''}`,
    `- languages: ${runtime.languages.join(', ')}`,
    `- provider: ${report.provider.name}`,
    `- translated: ${report.counts.translated}`,
    `- dry-run translated: ${report.counts.dryRunTranslated}`,
    `- skipped up-to-date: ${report.counts.skippedUpToDate}`,
    `- failures: ${report.counts.failed}`,
    `- cleanup deleted: ${report.cleanup.deletedCount}`,
    `- cleanup moved: ${report.cleanup.movedCount}`
  ];
  if (report.linkRewrite) {
    summary.push(`- link rewrite files: ${report.linkRewrite.rewrittenFiles}`);
    summary.push(`- link rewrites: ${report.linkRewrite.rewrittenLinks}`);
  }
  if (report.warnings.length > 0) {
    summary.push(`- warnings: ${report.warnings.length}`);
  }
  console.log(summary.join('\n'));

  if (report.counts.failed > 0 && config.qualityGates?.failOnAnyTranslationError) {
    const error = new Error(`Translation failed for ${report.counts.failed} page-language pair(s)`);
    error.report = report;
    throw error;
  }

  return report;
}

if (require.main === module) {
  run().catch((error) => {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  });
}

module.exports = { run };
