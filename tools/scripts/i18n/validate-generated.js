#!/usr/bin/env node
/**
 * @script validate-generated
 * @summary Validate generated localized MDX files parse cleanly and exist for successful route-map entries.
 * @owner docs
 * @scope tools/scripts/i18n, v2
 *
 * @usage
 *   node tools/scripts/i18n/validate-generated.js --languages es,fr,zh-CN --route-map /tmp/route-map.json --report-json /tmp/validate-report.json
 *   node tools/scripts/i18n/validate-generated.js --languages es --fail-on-mock-artifacts
 *
 * @inputs
 *   --languages <csv>, --route-map <path>, --report-json <path>, --fail-on-mock-artifacts, --fail-on-missing-provenance, --config <path>
 *
 * @outputs
 *   - Validation summary in stdout
 *   - Validation report JSON when --report-json is provided
 *
 * @exit-codes
 *   0 = success
 *   1 = runtime or validation failure
 *
 * @examples
 *   node tools/scripts/i18n/validate-generated.js --languages es,fr,zh-CN --fail-on-mock-artifacts
 *   node tools/scripts/i18n/validate-generated.js --route-map /tmp/route-map.json --report-json /tmp/validate.json
 *
 * @notes
 *   When --route-map is omitted, validation scans existing localized artifacts for configured languages.
 *   Missing provenance is reported and can be promoted to hard failure with --fail-on-missing-provenance.
 */

const fs = require('fs');
const path = require('path');
const { parseCommonCliArgs, loadI18nConfig, buildRuntimeOptions } = require('./lib/config');
const { getRepoRoot, readJson, writeJson } = require('./lib/common');
const { collectExistingLocalizedRouteMapEntries } = require('./lib/docs-routes');
const { parseMdxFileWithFrontmatter } = require('./lib/frontmatter');
const { parseMdx } = require('./lib/mdx-parser');
const { parseProvenanceComment, classifyLocalizedArtifactProvenance } = require('./lib/provenance');

function printHelp() {
  console.log(
    [
      'Usage: node tools/scripts/i18n/validate-generated.js [options]',
      '',
      'Options:',
      '  --languages <csv>              Languages to validate (default from config)',
      '  --route-map <path>             Validate only entries from route-map artifact',
      '  --report-json <path>           Write validation report JSON',
      '  --fail-on-mock-artifacts       Exit non-zero if generated files contain mock provenance',
      '  --fail-on-missing-provenance   Exit non-zero if generated files are missing codex-i18n provenance',
      '  --config <path>                Alternate i18n config JSON',
      '  --help, -h                     Show this help'
    ].join('\n')
  );
}

function loadEntries(repoRoot, routeMapPath, config, runtime) {
  if (routeMapPath) {
    const abs = path.resolve(repoRoot, routeMapPath);
    const parsed = readJson(abs);
    return { path: abs, entries: Array.isArray(parsed.entries) ? parsed.entries : [] };
  }
  return {
    path: '',
    entries: collectExistingLocalizedRouteMapEntries(repoRoot, config.generatedRoot, {
      generatedPathStyle: config.generatedPathStyle,
      sourceRoot: config.sourceRoot,
      knownLanguages: runtime.languages
    })
  };
}

async function run(argv = process.argv.slice(2)) {
  const cliArgs = parseCommonCliArgs(argv);
  if (cliArgs.help || argv.includes('--help') || argv.includes('-h')) {
    printHelp();
    return { help: true };
  }
  const { repoRoot, config } = loadI18nConfig({
    repoRoot: getRepoRoot(),
    configPath: cliArgs.configPath || undefined
  });
  const runtime = buildRuntimeOptions(cliArgs, config);
  const routeMap = loadEntries(repoRoot, cliArgs.routeMapPath, config, runtime);
  const languageSet = new Set(runtime.languages.length ? runtime.languages : config.targetLanguages);

  const entries = routeMap.entries.filter(
    (entry) =>
      languageSet.has(entry.language) &&
      ['translated', 'unchanged_write', 'skipped_up_to_date', 'existing'].includes(entry.status)
  );

  const report = {
    generatedAt: new Date().toISOString(),
    checked: 0,
    failures: [],
    mockArtifactsDetected: 0,
    artifactsMissingProvenance: 0,
    provenanceParseFailures: 0,
    samples: []
  };

  function pushSample(type, payload) {
    if (report.samples.length >= 20) return;
    report.samples.push({ type, ...payload });
  }

  for (const entry of entries) {
    const rel = entry.localizedFile || `${entry.localizedRoute}.mdx`;
    const abs = path.join(repoRoot, rel);
    report.checked += 1;
    try {
      const raw = fs.readFileSync(abs, 'utf8');
      const provenance = parseProvenanceComment(raw);
      const hasProvenanceMarker = raw.includes('codex-i18n:');
      if (!provenance) {
        if (hasProvenanceMarker) {
          report.provenanceParseFailures += 1;
          pushSample('provenance_parse_failure', { localizedFile: rel, language: entry.language });
        } else {
          report.artifactsMissingProvenance += 1;
          pushSample('missing_provenance', { localizedFile: rel, language: entry.language });
        }
      } else {
        const meta = classifyLocalizedArtifactProvenance(provenance);
        if (meta.artifactClass === 'translated_mock') {
          report.mockArtifactsDetected += 1;
          pushSample('mock_artifact', { localizedFile: rel, language: entry.language, provider: meta.provider });
        }
      }
      const parsed = parseMdxFileWithFrontmatter(raw);
      await parseMdx(parsed.body);
    } catch (error) {
      report.failures.push({
        localizedFile: rel,
        language: entry.language,
        sourceRoute: entry.sourceRoute,
        error: error.message
      });
    }
  }

  if (runtime.reportJsonPath) {
    writeJson(path.resolve(repoRoot, runtime.reportJsonPath), report);
  }

  console.log(
    [
      'i18n validate-generated summary',
      `- checked: ${report.checked}`,
      `- failures: ${report.failures.length}`,
      `- mock artifacts: ${report.mockArtifactsDetected}`,
      `- missing provenance: ${report.artifactsMissingProvenance}`,
      `- provenance parse failures: ${report.provenanceParseFailures}`
    ].join('\n')
  );

  if (report.failures.length > 0) {
    throw new Error(`Generated MDX validation failed for ${report.failures.length} file(s)`);
  }
  if (runtime.failOnMockArtifacts && report.mockArtifactsDetected > 0) {
    throw new Error(`Generated validation found ${report.mockArtifactsDetected} mock artifact(s)`);
  }
  if (runtime.failOnMissingProvenance && report.artifactsMissingProvenance > 0) {
    throw new Error(`Generated validation found ${report.artifactsMissingProvenance} file(s) missing provenance`);
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
