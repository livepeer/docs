/**
 * @script            docs-json-localizer.test
 * @category          validator
 * @purpose           feature:translation
 * @scope             tools/scripts
 * @owner             docs
 * @needs             F-R6, F-R7
 * @purpose-statement Tests docs-json-localizer — validates locale docs.json transformation logic
 * @pipeline          manual — not yet in pipeline
 * @usage             node tools/scripts/i18n/test/docs-json-localizer.test.js [flags]
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { generateLocalizedDocsJson } = require('../lib/docs-json-localizer');

function fixtureDocsJson() {
  return {
    navigation: {
      versions: [
        {
          version: 'v1',
          languages: [
            {
              language: 'en',
              dropdowns: [
                {
                  dropdown: 'Developers',
                  anchors: [{ anchor: 'Docs', groups: [{ group: 'Start', pages: ['v1/developers/introduction'] }] }]
                }
              ]
            }
          ]
        },
        {
          version: 'v2',
          languages: [
            {
              language: 'en',
              tabs: [
                {
                  tab: 'About',
                  anchors: [
                    {
                      anchor: 'Livepeer Network',
                      groups: [
                        {
                          group: 'Pages',
                          pages: [
                            'v2/about/livepeer-network/actors',
                            'v2/about/livepeer-network/job-lifecycle',
                            ' '
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  };
}

test('generateLocalizedDocsJson clones v2 english node, translates labels, and rewrites localized routes', async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'i18n-docs-json-'));
  fs.mkdirSync(path.join(tmp, 'v2', 'es', 'about', 'livepeer-network'), { recursive: true });
  fs.writeFileSync(path.join(tmp, 'v2', 'es', 'about', 'livepeer-network', 'actors.mdx'), '# actors');
  fs.writeFileSync(path.join(tmp, 'v2', 'es', 'about', 'livepeer-network', 'job-lifecycle.mdx'), '# job');

  const translator = {
    name: 'openrouter',
    async translateStrings({ language, strings }) {
      return { strings: strings.map((s) => `${language.toUpperCase()}: ${s}`), modelUsed: 'stub-openrouter' };
    }
  };

  const routeMapEntries = [
    {
      sourceRoute: 'v2/about/livepeer-network/actors',
      localizedRoute: 'v2/es/about/livepeer-network/actors',
      localizedFile: 'v2/es/about/livepeer-network/actors.mdx',
      language: 'es',
      status: 'translated',
      provider: 'openrouter',
      artifactClass: 'translated_real'
    },
    {
      sourceRoute: 'v2/about/livepeer-network/job-lifecycle',
      localizedRoute: 'v2/es/about/livepeer-network/job-lifecycle',
      localizedFile: 'v2/es/about/livepeer-network/job-lifecycle.mdx',
      language: 'es',
      status: 'translated',
      provider: 'openrouter',
      artifactClass: 'translated_real'
    }
  ];

  const result = await generateLocalizedDocsJson({
    docsJson: fixtureDocsJson(),
    repoRoot: tmp,
    targetLanguages: ['es'],
    translator,
    translationRules: {
      translateDocsJsonLabelKeys: ['tab', 'anchor', 'group'],
      preserveBrandTerms: [],
      preserveRegexes: []
    },
    routeMapEntries,
    routeMapMetadata: {
      runtime: { scopeMode: 'full_v2_nav' },
      scope: {
        scopeMode: 'full_v2_nav',
        selectedRoutes: [
          'v2/about/livepeer-network/actors',
          'v2/about/livepeer-network/job-lifecycle'
        ]
      }
    },
    qualityGates: {
      requireLocalizedFileForRouteRewrite: true
    },
    reporting: {
      warnRouteRewriteCoverageBelowPct: 80,
      warnOnMixedLanguageLocaleUi: true
    },
    writeMode: false,
    allowMockWrite: false
  });

  const v2 = result.docsJson.navigation.versions.find((v) => v.version === 'v2');
  assert.deepEqual(
    v2.languages.map((l) => l.language),
    ['en', 'es']
  );

  const es = v2.languages.find((l) => l.language === 'es');
  assert.match(es.tabs[0].tab, /^ES:/);
  assert.doesNotMatch(es.tabs[0].tab, /^\[es\]/);
  assert.equal(es.tabs[0].anchors[0].groups[0].pages[0], 'v2/es/about/livepeer-network/actors');
  assert.equal(es.tabs[0].anchors[0].groups[0].pages[1], 'v2/es/about/livepeer-network/job-lifecycle');
  assert.equal(es.tabs[0].anchors[0].groups[0].pages[2], ' ');
  assert.equal(result.report.perLanguage[0].rewrittenRoutes, 2);
  assert.equal(result.report.perLanguage[0].fallbackRoutes, 0);
  assert.equal(result.report.perLanguage[0].routeCoverageOverallPct, 100);
  assert.equal(result.report.perLanguage[0].routeCoverageScope, 'full_v2_nav');
  assert.deepEqual(result.report.perLanguage[0].warnings, []);
  const v1 = result.docsJson.navigation.versions.find((v) => v.version === 'v1');
  assert.deepEqual(
    v1.languages.map((l) => l.language),
    ['en']
  );
  assert.equal(v1.languages[0].dropdowns[0].dropdown, 'Developers');
});

test('generateLocalizedDocsJson rejects mock provenance routes for rewrite and reports fallback diagnostics', async () => {
  const translator = {
    name: 'openrouter',
    async translateStrings({ language, strings }) {
      return { strings: strings.map((s) => `${language}:${s}`), modelUsed: 'stub' };
    }
  };

  const routeMapEntries = [
    {
      sourceRoute: 'v2/about/livepeer-network/actors',
      localizedRoute: 'v2/es/about/livepeer-network/actors',
      localizedFile: 'v2/es/about/livepeer-network/actors.mdx',
      language: 'es',
      status: 'existing',
      provider: 'mock',
      artifactClass: 'translated_mock'
    }
  ];

  const result = await generateLocalizedDocsJson({
    docsJson: fixtureDocsJson(),
    repoRoot: process.cwd(),
    targetLanguages: ['es'],
    translator,
    translationRules: {
      translateDocsJsonLabelKeys: ['tab', 'anchor', 'group'],
      preserveBrandTerms: [],
      preserveRegexes: []
    },
    routeMapEntries,
    routeMapMetadata: {
      runtime: { scopeMode: 'prefixes' },
      scope: {
        scopeMode: 'prefixes',
        selectedRoutes: [
          'v2/about/livepeer-network/actors',
          'v2/about/livepeer-network/job-lifecycle'
        ]
      }
    },
    qualityGates: {
      requireLocalizedFileForRouteRewrite: false,
      rejectMockArtifactsForRouteRewrite: true
    },
    reporting: {
      warnRouteRewriteCoverageBelowPct: 80,
      warnOnMixedLanguageLocaleUi: true
    },
    writeMode: false,
    allowMockWrite: false
  });

  const v2 = result.docsJson.navigation.versions.find((v) => v.version === 'v2');
  const es = v2.languages.find((l) => l.language === 'es');
  assert.equal(es.tabs[0].anchors[0].groups[0].pages[0], 'v2/about/livepeer-network/actors');

  const report = result.report.perLanguage[0];
  assert.equal(report.rewrittenRoutes, 0);
  assert.equal(report.fallbackRoutes, 2);
  assert.equal(report.fallbackRoutesWithinSelectedScope, 2);
  assert.equal(report.rewrittenRoutesFromMockArtifacts, 0);
  assert.equal(report.routeCoverageScope, 'partial_scope');
  assert.ok(report.topFallbackGroups.length >= 1);
  assert.match(report.topFallbackGroups[0].location, /Livepeer Network|Pages/);
  assert.ok(report.warnings.some((w) => /Partial scope run/.test(w)));
  assert.ok(report.warnings.some((w) => /mock-provenance/.test(w)));
});
