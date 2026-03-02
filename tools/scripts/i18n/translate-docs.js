#!/usr/bin/env node
/**
 * @script translate-docs
 * @summary Translate selected v2 docs pages into configured languages and emit localized MDX files plus route-map/report artifacts.
 * @owner docs
 * @scope tools/scripts/i18n, docs.json, v2
 *
 * @usage
 *   node tools/scripts/i18n/translate-docs.js --languages es,fr,de --scope-mode prefixes --prefixes v2/about/livepeer-network --max-pages 10
 *   node tools/scripts/i18n/translate-docs.js --provider mock --dry-run --scope-mode full_v2_nav --max-pages 5
 *
 * @inputs
 *   --languages <csv>, --scope-mode <mode>, --base-ref <ref>, --prefixes <csv>, --paths-file <path>, --max-pages <n>, --provider <name>, --dry-run, --force, --allow-mock-write, --route-map <path>, --report-json <path>, --config <path>
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
 *   node tools/scripts/i18n/translate-docs.js --languages es --scope-mode paths_file --paths-file /tmp/paths.txt --route-map /tmp/route-map.json --report-json /tmp/report.json
 *   node tools/scripts/i18n/translate-docs.js --languages es,fr,zh-CN --scope-mode full_v2_nav --max-pages 1000
 *
 * @notes
 *   Mock provider writes are blocked by default; use --dry-run for mock smoke tests.
 *   Chinese input zh-CN is normalized to cn for generated route/file paths.
 */

const fs = require('fs');
const path = require('path');
const { buildRuntimeOptions, loadI18nConfig, parseCommonCliArgs } = require('./lib/config');
const { buildV2EnglishRouteInventory, collectExistingLocalizedRouteMapEntries, selectScopeItems } = require('./lib/docs-routes');
const { parseMdxFileWithFrontmatter, translateFrontmatterFields } = require('./lib/frontmatter');
const { translateMdxBody } = require('./lib/mdx-translate');
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
const { getRepoRoot, writeJson, writeTextIfChanged } = require('./lib/common');

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
      '  --provider <name>            openrouter | mock',
      '  --dry-run                    Do not write localized files',
      '  --force                      Retranslate even when source hash matches',
      '  --allow-mock-write           Allow mock provider in non-dry runs (dangerous; testing only)',
      '  --route-map <path>           Write route-map artifact JSON',
      '  --report-json <path>         Write run report JSON',
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
  const translator = createTranslator({ config, providerNameOverride: runtime.providerNameOverride });
  assertMockWriteAllowed({ translator, runtime, config, action: 'translate-docs' });

  if (runtime.scopeMode === 'paths_file' && !runtime.pathsFile) {
    throw new Error('--paths-file is required when --scope-mode paths_file is used');
  }
  if (runtime.scopeMode === 'prefixes' && (!runtime.prefixes || runtime.prefixes.length === 0)) {
    throw new Error('--prefixes is required when --scope-mode prefixes is used');
  }

  const inventory = buildV2EnglishRouteInventory(repoRoot);
  const scope = selectScopeItems({
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
  const plannedEntries = createPlannedEntries(
    scope.selected,
    runtime.languages,
    config.generatedRoot,
    config.generatedPathStyle,
    runtime
  );
  const routeMapEntries = mergeRouteMapEntries(existingLocalized, plannedEntries);
  const routeMapIndex = buildRouteMapIndex(routeMapEntries);

  const report = {
    generatedAt: new Date().toISOString(),
    repoRoot,
    configPath,
    provider: {
      name: translator.name,
      mode: translator.name
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

  for (const item of scope.selected) {
    for (const language of runtime.languages) {
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
      } catch (error) {
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
    `- provider: ${translator.name}`,
    `- translated: ${report.counts.translated}`,
    `- dry-run translated: ${report.counts.dryRunTranslated}`,
    `- skipped up-to-date: ${report.counts.skippedUpToDate}`,
    `- failures: ${report.counts.failed}`
  ];
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
