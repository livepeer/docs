/**
 * @script            config
 * @category          utility
 * @purpose           feature:translation
 * @scope             tools/scripts
 * @owner             docs
 * @needs             F-R6, F-R7
 * @purpose-statement i18n configuration — language codes, locale paths, translation settings
 * @pipeline          indirect — library module imported by other scripts, not invoked directly
 * @usage             node tools/scripts/i18n/lib/config.js [flags]
 */
const fs = require('fs');
const path = require('path');
const { getRepoRoot, parseCsv, readJson } = require('./common');

const DEFAULT_CONFIG_REPO_REL = 'tools/i18n/config.json';

function loadI18nConfig(options = {}) {
  const repoRoot = options.repoRoot || getRepoRoot();
  const configPath = options.configPath
    ? path.resolve(repoRoot, options.configPath)
    : path.join(repoRoot, DEFAULT_CONFIG_REPO_REL);

  if (!fs.existsSync(configPath)) {
    throw new Error(`i18n config not found: ${configPath}`);
  }

  const config = readJson(configPath);
  validateI18nConfig(config, { configPath });
  return { repoRoot, configPath, config };
}

function validateI18nConfig(config, context = {}) {
  const configPath = context.configPath || DEFAULT_CONFIG_REPO_REL;
  if (!config || typeof config !== 'object') {
    throw new Error(`Invalid i18n config at ${configPath}: expected object`);
  }

  const requiredStringKeys = ['sourceLanguage', 'sourceRoot', 'generatedRoot'];
  for (const key of requiredStringKeys) {
    if (typeof config[key] !== 'string' || !config[key].trim()) {
      throw new Error(`Invalid i18n config at ${configPath}: missing "${key}"`);
    }
  }

  if (!Array.isArray(config.targetLanguages) || config.targetLanguages.length === 0) {
    throw new Error(`Invalid i18n config at ${configPath}: targetLanguages must be a non-empty array`);
  }

  if (config.languageCodeMap != null && (typeof config.languageCodeMap !== 'object' || Array.isArray(config.languageCodeMap))) {
    throw new Error(`Invalid i18n config at ${configPath}: languageCodeMap must be an object when provided`);
  }

  if (config.generatedPathStyle != null) {
    const style = String(config.generatedPathStyle || '').trim();
    if (!['v2_i18n_legacy', 'v2_language_prefix'].includes(style)) {
      throw new Error(
        `Invalid i18n config at ${configPath}: generatedPathStyle must be "v2_i18n_legacy" or "v2_language_prefix"`
      );
    }
  }

  if (!config.provider || typeof config.provider !== 'object') {
    throw new Error(`Invalid i18n config at ${configPath}: missing provider`);
  }

  const models = config.provider.modelCandidates;
  if (!Array.isArray(models) || models.length === 0 || models.some((m) => !String(m || '').trim())) {
    throw new Error(`Invalid i18n config at ${configPath}: provider.modelCandidates must be a non-empty array`);
  }
}

function normalizeLanguageCode(language, config = {}) {
  const raw = String(language || '').trim();
  if (!raw) return '';
  const map = config.languageCodeMap || {};
  if (typeof map[raw] === 'string' && map[raw].trim()) return map[raw].trim();
  const lowerMap = new Map(Object.entries(map).map(([k, v]) => [String(k).toLowerCase(), String(v).trim()]));
  return lowerMap.get(raw.toLowerCase()) || raw;
}

function normalizeLanguageList(languages, config = {}) {
  const out = [];
  const seen = new Set();
  const aliasesApplied = [];
  for (const value of languages || []) {
    const requestedLanguage = String(value || '').trim();
    if (!requestedLanguage) continue;
    const effectiveLanguage = normalizeLanguageCode(requestedLanguage, config);
    if (!effectiveLanguage) continue;
    if (requestedLanguage !== effectiveLanguage) {
      aliasesApplied.push({ requestedLanguage, effectiveLanguage });
    }
    if (seen.has(effectiveLanguage)) continue;
    seen.add(effectiveLanguage);
    out.push(effectiveLanguage);
  }
  return { languages: out, aliasesApplied };
}

function buildRuntimeOptions(cliArgs = {}, config = {}) {
  const defaults = config.scopeDefaults || {};
  const requestedLanguages =
    cliArgs.languages && cliArgs.languages.length ? [...cliArgs.languages] : [...(config.targetLanguages || [])];
  const normalizedLanguages = normalizeLanguageList(requestedLanguages, config);
  const runtime = {
    requestedLanguages,
    languages: normalizedLanguages.languages,
    languageAliasesApplied: normalizedLanguages.aliasesApplied,
    scopeMode: cliArgs.scopeMode || defaults.defaultMode || 'changed_since_ref',
    baseRef: cliArgs.baseRef || defaults.defaultBaseRef || 'docs-v2',
    prefixes: cliArgs.prefixes || [],
    pathsFile: cliArgs.pathsFile || '',
    maxPages: Number.isFinite(cliArgs.maxPages) ? cliArgs.maxPages : Number(defaults.maxPagesPerRun) || 50,
    dryRun: Boolean(cliArgs.dryRun),
    force: Boolean(cliArgs.force),
    routeMapPath: cliArgs.routeMapPath || '',
    reportJsonPath: cliArgs.reportJsonPath || '',
    configPath: cliArgs.configPath || '',
    providerNameOverride: cliArgs.providerName || '',
    allowMockWrite: Boolean(cliArgs.allowMockWrite),
    failOnMockArtifacts: Boolean(cliArgs.failOnMockArtifacts),
    failOnMissingProvenance: Boolean(cliArgs.failOnMissingProvenance),
    cleanupOnly: Boolean(cliArgs.cleanupOnly),
    rewriteLinks: typeof cliArgs.rewriteLinks === 'boolean' ? cliArgs.rewriteLinks : null,
    rewriteScope: cliArgs.rewriteScope || '',
    help: Boolean(cliArgs.help)
  };
  return runtime;
}

function parseCommonCliArgs(argv) {
  const args = {
    languages: [],
    prefixes: [],
    dryRun: false,
    force: false,
    maxPages: null,
    scopeMode: '',
    baseRef: '',
    pathsFile: '',
    routeMapPath: '',
    reportJsonPath: '',
    configPath: '',
    providerName: '',
    write: false,
    allowMockWrite: false,
    failOnMockArtifacts: false,
    failOnMissingProvenance: false,
    cleanupOnly: false,
    rewriteLinks: null,
    rewriteScope: '',
    help: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    const next = argv[i + 1];
    switch (token) {
      case '--languages':
        args.languages = parseCsv(next);
        i += 1;
        break;
      case '--prefixes':
        args.prefixes = parseCsv(next);
        i += 1;
        break;
      case '--scope-mode':
        args.scopeMode = String(next || '').trim();
        i += 1;
        break;
      case '--base-ref':
        args.baseRef = String(next || '').trim();
        i += 1;
        break;
      case '--paths-file':
        args.pathsFile = String(next || '').trim();
        i += 1;
        break;
      case '--max-pages': {
        const parsed = Number(next);
        if (Number.isFinite(parsed) && parsed > 0) args.maxPages = parsed;
        i += 1;
        break;
      }
      case '--route-map':
        args.routeMapPath = String(next || '').trim();
        i += 1;
        break;
      case '--report-json':
        args.reportJsonPath = String(next || '').trim();
        i += 1;
        break;
      case '--config':
        args.configPath = String(next || '').trim();
        i += 1;
        break;
      case '--provider':
        args.providerName = String(next || '').trim();
        i += 1;
        break;
      case '--dry-run':
        args.dryRun = true;
        break;
      case '--force':
      case '--force-retranslate':
        args.force = true;
        break;
      case '--write':
        args.write = true;
        break;
      case '--allow-mock-write':
        args.allowMockWrite = true;
        break;
      case '--cleanup-only':
        args.cleanupOnly = true;
        break;
      case '--rewrite-links':
        args.rewriteLinks = true;
        break;
      case '--no-rewrite-links':
        args.rewriteLinks = false;
        break;
      case '--rewrite-scope':
        args.rewriteScope = String(next || '').trim();
        i += 1;
        break;
      case '--fail-on-mock-artifacts':
        args.failOnMockArtifacts = true;
        break;
      case '--fail-on-missing-provenance':
        args.failOnMissingProvenance = true;
        break;
      case '--help':
      case '-h':
        args.help = true;
        break;
      default:
        break;
    }
  }

  return args;
}

module.exports = {
  DEFAULT_CONFIG_REPO_REL,
  buildRuntimeOptions,
  loadI18nConfig,
  normalizeLanguageCode,
  normalizeLanguageList,
  parseCommonCliArgs,
  validateI18nConfig
};
