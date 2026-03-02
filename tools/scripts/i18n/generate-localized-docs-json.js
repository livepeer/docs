#!/usr/bin/env node
/**
 * @script generate-localized-docs-json
 * @summary Add/update v2 language nodes in docs.json using English v2 as template plus route-map-driven route rewrites.
 * @owner docs
 * @scope docs.json, tools/scripts/i18n
 *
 * @usage
 *   node tools/scripts/i18n/generate-localized-docs-json.js --write --languages es,fr,zh-CN --route-map /tmp/route-map.json --report-json /tmp/docsjson-report.json
 *   node tools/scripts/i18n/generate-localized-docs-json.js --dry-run --languages es
 *
 * @inputs
 *   --languages <csv>, --route-map <path>, --provider <name>, --write, --dry-run, --allow-mock-write, --report-json <path>, --config <path>
 *
 * @outputs
 *   - Updated docs.json when --write is used
 *   - docs.json generation report JSON when --report-json is provided
 *
 * @exit-codes
 *   0 = success
 *   1 = runtime or validation failure
 *
 * @examples
 *   node tools/scripts/i18n/generate-localized-docs-json.js --write --languages es --route-map /tmp/route-map-es.json
 *   node tools/scripts/i18n/generate-localized-docs-json.js --languages es,fr,zh-CN --dry-run --report-json /tmp/docsjson-report.json
 *
 * @notes
 *   This command mutates only v2 language nodes; v1 remains unchanged.
 *   Route-map entries using legacy v2/i18n/* style are reported as compatibility warnings.
 */

const fs = require('fs');
const path = require('path');
const { parseCommonCliArgs, loadI18nConfig, buildRuntimeOptions } = require('./lib/config');
const { getRepoRoot, readJson, writeJson, writeTextIfChanged } = require('./lib/common');
const { createTranslator } = require('./lib/providers');
const { generateLocalizedDocsJson } = require('./lib/docs-json-localizer');
const { collectExistingLocalizedRouteMapEntries } = require('./lib/docs-routes');

function printHelp() {
  console.log(
    [
      'Usage: node tools/scripts/i18n/generate-localized-docs-json.js [options]',
      '',
      'Options:',
      '  --languages <csv>            Target languages (default from config)',
      '  --route-map <path>           Route-map artifact from translate-docs.js',
      '  --provider <name>            openrouter | mock',
      '  --write                      Update docs.json in place',
      '  --dry-run                    Compute report only (no write)',
      '  --allow-mock-write           Allow mock provider in write mode (dangerous; testing only)',
      '  --report-json <path>         Write docs.json generation report',
      '  --config <path>              Alternate i18n config JSON',
      '  --help, -h                   Show this help'
    ].join('\n')
  );
}

function assertMockWriteAllowed({ translator, runtime, config, cliArgs }) {
  const writeMode = Boolean(cliArgs.write && !runtime.dryRun);
  if (!writeMode) return;
  if (translator?.name !== 'mock') return;
  if (runtime.allowMockWrite) return;
  if (config?.qualityGates?.blockMockProviderWrites === false) return;
  throw new Error(
    'Refusing to write docs.json with mock provider. Use --dry-run for mock testing or pass --allow-mock-write only for deliberate fixture generation.'
  );
}

function loadRouteMapEntries(repoRoot, routeMapPath, config, runtime) {
  if (routeMapPath) {
    const abs = path.resolve(repoRoot, routeMapPath);
    const parsed = readJson(abs);
    return {
      path: abs,
      entries: Array.isArray(parsed.entries) ? parsed.entries : [],
      metadata: {
        provider: parsed.provider || null,
        runtime: parsed.runtime || null,
        scope: parsed.scope || null,
        warnings: Array.isArray(parsed.warnings) ? parsed.warnings : []
      }
    };
  }
  return {
    path: '',
    entries: collectExistingLocalizedRouteMapEntries(repoRoot, config.generatedRoot, {
      generatedPathStyle: config.generatedPathStyle,
      sourceRoot: config.sourceRoot,
      knownLanguages: runtime.languages
    }),
    metadata: {
      provider: null,
      runtime: null,
      scope: null,
      warnings: []
    }
  };
}

async function run(argv = process.argv.slice(2)) {
  const cliArgs = parseCommonCliArgs(argv);
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
  assertMockWriteAllowed({ translator, runtime, config, cliArgs });
  const docsJsonPath = path.join(repoRoot, 'docs.json');
  const docsJson = readJson(docsJsonPath);
  const routeMap = loadRouteMapEntries(repoRoot, cliArgs.routeMapPath, config, runtime);
  const result = await generateLocalizedDocsJson({
    docsJson,
    repoRoot,
    targetLanguages: runtime.languages,
    translator,
    translationRules: config.translationRules || {},
    routeMapEntries: routeMap.entries,
    routeMapMetadata: routeMap.metadata || {},
    qualityGates: config.qualityGates || {},
    reporting: config.reporting || {},
    runtime,
    languageCodeMap: config.languageCodeMap || {},
    writeMode: Boolean(cliArgs.write && !runtime.dryRun),
    allowMockWrite: runtime.allowMockWrite
  });

  const nextText = `${JSON.stringify(result.docsJson, null, 2)}\n`;
  let changed = false;
  if (cliArgs.write && !runtime.dryRun) {
    changed = writeTextIfChanged(docsJsonPath, nextText);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    repoRoot,
    configPath,
    docsJsonPath,
    routeMapPath: routeMap.path,
    dryRun: runtime.dryRun || !cliArgs.write,
    wroteDocsJson: Boolean(cliArgs.write && !runtime.dryRun && changed),
    provider: {
      name: translator.name,
      mode: translator.name
    },
    warnings: result.report.warnings || [],
    perLanguage: result.report.perLanguage
  };

  if (runtime.reportJsonPath) {
    writeJson(path.resolve(repoRoot, runtime.reportJsonPath), report);
  }

  console.log(
    [
      'i18n generate-localized-docs-json summary',
      `- languages: ${runtime.languages.join(', ')}`,
      `- provider: ${translator.name}`,
      `- route-map entries: ${routeMap.entries.length}`,
      `- write mode: ${cliArgs.write && !runtime.dryRun ? 'enabled' : 'disabled'}`,
      `- docs.json changed: ${changed ? 'yes' : 'no'}`
    ].join('\n')
  );

  return report;
}

if (require.main === module) {
  run().catch((error) => {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  });
}

module.exports = { run };
