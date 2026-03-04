#!/usr/bin/env node
/**
 * @script generate-mint-dev-scope
 * @summary Build deterministic Mint dev scoped profiles (docs.json + .mintignore) for large navigation trees.
 * @owner docs
 * @scope tools/scripts/dev, docs.json, .mintignore
 *
 * @usage
 *   node tools/scripts/dev/generate-mint-dev-scope.js --versions v2 --languages en --tabs Developers
 *   node tools/scripts/dev/generate-mint-dev-scope.js --interactive --workspace-base /tmp/lpd-mint-dev
 *
 * @inputs
 *   --repo-root <path> Optional repo root (default: process.cwd()).
 *   --workspace-base <path> Optional workspace base directory (default: /tmp/lpd-mint-dev).
 *   --scope-file <path> JSON file with versions/languages/tabs/prefixes arrays.
 *   --versions <csv> Version filter(s), repeatable.
 *   --languages <csv> Language filter(s), repeatable.
 *   --tabs <csv> Tab filter(s), repeatable.
 *   --prefixes <csv> Route prefix filter(s), repeatable.
 *   --interactive Prompt for selections (TTY required).
 *   --disable-openapi Exclude api-reference routes from scoped docs.json and .mintignore.
 *   --print-only Print scoped metadata only; do not create /tmp workspace.
 *
 * @outputs
 *   - JSON payload to stdout with workspace path + scope statistics.
 *   - Scoped docs.json and .mintignore in /tmp/lpd-mint-dev/<hash>/ (unless --print-only).
 *
 * @exit-codes
 *   0 = success
 *   1 = invalid input, empty scope result, or runtime failure
 *
 * @examples
 *   node tools/scripts/dev/generate-mint-dev-scope.js --versions v2 --languages en --tabs Developers --prefixes v2/gateways
 *   node tools/scripts/dev/generate-mint-dev-scope.js --scope-file tools/config/mint-dev-scope.json --disable-openapi
 *
 * @notes
 *   The generated workspace is a symlink scaffold over repo root with scoped docs.json/.mintignore overrides.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
const readline = require('readline');

const STRUCTURAL_ARRAY_KEYS = ['versions', 'languages', 'tabs', 'anchors', 'groups', 'pages'];

function printUsage() {
  console.log(
    [
      'Usage: node tools/scripts/dev/generate-mint-dev-scope.js [options]',
      '',
      'Options:',
      '  --repo-root <path>',
      '  --workspace-base <path>',
      '  --scope-file <path>',
      '  --versions <csv>          (repeatable)',
      '  --languages <csv>         (repeatable)',
      '  --tabs <csv>              (repeatable)',
      '  --prefixes <csv>          (repeatable)',
      '  --interactive',
      '  --disable-openapi',
      '  --print-only',
      '  --help'
    ].join('\n')
  );
}

function splitCsv(value) {
  return String(value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function uniqStrings(values) {
  return [...new Set((values || []).map((entry) => String(entry || '').trim()).filter(Boolean))];
}

function normalizeRoute(value) {
  return String(value || '')
    .trim()
    .replace(/^\/+/, '')
    .replace(/\/+$/, '');
}

function normalizeForCompare(value) {
  return String(value || '').trim().toLowerCase();
}

function routeMatchesPrefix(route, prefix) {
  const normalizedRoute = normalizeRoute(route);
  const normalizedPrefix = normalizeRoute(prefix);
  if (!normalizedRoute || !normalizedPrefix) return false;
  return normalizedRoute === normalizedPrefix || normalizedRoute.startsWith(`${normalizedPrefix}/`);
}

function isLanguageSegment(value) {
  const segment = String(value || '').trim();
  return /^[a-z]{2}(?:-[A-Za-z]{2})?$/.test(segment);
}

function isLikelyRouteEntry(value) {
  const route = normalizeRoute(value);
  if (!route) return false;
  if (route.startsWith('http://') || route.startsWith('https://')) return false;
  if (route === '-') return false;
  return route.includes('/');
}

function isOpenapiRoute(route) {
  const normalized = normalizeRoute(route);
  return normalized.includes('/api-reference/') || normalized.endsWith('/api-reference');
}

function shouldKeepRouteEntry(routeValue, context) {
  const route = normalizeRoute(routeValue);
  if (!route) return false;
  if (!isLikelyRouteEntry(route)) return false;
  if (context.disableOpenapi && isOpenapiRoute(route)) return false;
  if (context.prefixes.length === 0) return true;
  return context.prefixes.some((prefix) => routeMatchesPrefix(route, prefix));
}

function deriveSectionPrefix(routeValue) {
  const route = normalizeRoute(routeValue);
  if (!route) return '';
  const segments = route.split('/').filter(Boolean);
  if (segments.length < 2) return route;
  if (/^v\d+$/.test(segments[0])) {
    if (segments.length >= 3 && isLanguageSegment(segments[1])) {
      return segments.slice(0, 3).join('/');
    }
    return segments.slice(0, 2).join('/');
  }
  return segments.slice(0, 2).join('/');
}

function collectRoutesFromPages(pages, outSet) {
  if (!Array.isArray(pages)) return;
  for (const entry of pages) {
    if (typeof entry === 'string') {
      const route = normalizeRoute(entry);
      if (isLikelyRouteEntry(route)) outSet.add(route);
      continue;
    }
    if (entry && typeof entry === 'object') {
      visitNavigationNode(entry, outSet);
    }
  }
}

function visitNavigationNode(node, outSet) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node.pages)) collectRoutesFromPages(node.pages, outSet);
  if (Array.isArray(node.groups)) node.groups.forEach((group) => visitNavigationNode(group, outSet));
  if (Array.isArray(node.anchors)) node.anchors.forEach((anchor) => visitNavigationNode(anchor, outSet));
  if (Array.isArray(node.tabs)) node.tabs.forEach((tab) => visitNavigationNode(tab, outSet));
  if (Array.isArray(node.languages)) node.languages.forEach((language) => visitNavigationNode(language, outSet));
  if (Array.isArray(node.versions)) node.versions.forEach((version) => visitNavigationNode(version, outSet));
}

function collectRoutesFromNavigation(navigation) {
  const routes = new Set();
  visitNavigationNode(navigation, routes);
  return [...routes].sort();
}

function parseArgs(argv) {
  const out = {
    repoRoot: process.cwd(),
    workspaceBase: path.join(os.tmpdir(), 'lpd-mint-dev'),
    scopeFile: '',
    versions: [],
    languages: [],
    tabs: [],
    prefixes: [],
    interactive: false,
    disableOpenapi: false,
    printOnly: false,
    help: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--help' || token === '-h') {
      out.help = true;
      continue;
    }
    if (token === '--repo-root') {
      out.repoRoot = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--repo-root=')) {
      out.repoRoot = token.slice('--repo-root='.length).trim();
      continue;
    }
    if (token === '--workspace-base') {
      out.workspaceBase = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--workspace-base=')) {
      out.workspaceBase = token.slice('--workspace-base='.length).trim();
      continue;
    }
    if (token === '--scope-file') {
      out.scopeFile = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--scope-file=')) {
      out.scopeFile = token.slice('--scope-file='.length).trim();
      continue;
    }
    if (token === '--versions' || token === '--scope-version') {
      out.versions.push(...splitCsv(argv[i + 1] || ''));
      i += 1;
      continue;
    }
    if (token.startsWith('--versions=') || token.startsWith('--scope-version=')) {
      out.versions.push(...splitCsv(token.split('=').slice(1).join('=')));
      continue;
    }
    if (token === '--languages' || token === '--scope-language') {
      out.languages.push(...splitCsv(argv[i + 1] || ''));
      i += 1;
      continue;
    }
    if (token.startsWith('--languages=') || token.startsWith('--scope-language=')) {
      out.languages.push(...splitCsv(token.split('=').slice(1).join('=')));
      continue;
    }
    if (token === '--tabs' || token === '--scope-tab') {
      out.tabs.push(...splitCsv(argv[i + 1] || ''));
      i += 1;
      continue;
    }
    if (token.startsWith('--tabs=') || token.startsWith('--scope-tab=')) {
      out.tabs.push(...splitCsv(token.split('=').slice(1).join('=')));
      continue;
    }
    if (token === '--prefixes' || token === '--scope-prefix') {
      out.prefixes.push(...splitCsv(argv[i + 1] || ''));
      i += 1;
      continue;
    }
    if (token.startsWith('--prefixes=') || token.startsWith('--scope-prefix=')) {
      out.prefixes.push(...splitCsv(token.split('=').slice(1).join('=')));
      continue;
    }
    if (token === '--interactive') {
      out.interactive = true;
      continue;
    }
    if (token === '--disable-openapi') {
      out.disableOpenapi = true;
      continue;
    }
    if (token === '--print-only') {
      out.printOnly = true;
      continue;
    }
    throw new Error(`Unknown option: ${token}`);
  }

  out.repoRoot = out.repoRoot ? path.resolve(out.repoRoot) : process.cwd();
  out.workspaceBase = out.workspaceBase ? path.resolve(out.workspaceBase) : path.join(os.tmpdir(), 'lpd-mint-dev');
  out.versions = uniqStrings(out.versions);
  out.languages = uniqStrings(out.languages);
  out.tabs = uniqStrings(out.tabs);
  out.prefixes = uniqStrings(out.prefixes.map(normalizeRoute));
  return out;
}

function loadScopeFile(scopeFile, repoRoot) {
  if (!scopeFile) {
    return {
      versions: [],
      languages: [],
      tabs: [],
      prefixes: [],
      disableOpenapi: false
    };
  }

  const absolutePath = path.isAbsolute(scopeFile) ? scopeFile : path.join(repoRoot, scopeFile);
  const payload = JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
  return {
    versions: uniqStrings(payload.versions || payload.scope_versions || []),
    languages: uniqStrings(payload.languages || payload.scope_languages || []),
    tabs: uniqStrings(payload.tabs || payload.scope_tabs || []),
    prefixes: uniqStrings((payload.prefixes || payload.scope_prefixes || []).map(normalizeRoute)),
    disableOpenapi: Boolean(payload.disableOpenapi || payload.disable_openapi)
  };
}

function collectOptionsFromNavigation(navigation) {
  const versions = new Set();
  const tabsByVersionLanguage = new Map();
  const languagesByVersion = new Map();

  const versionEntries = Array.isArray(navigation && navigation.versions) ? navigation.versions : [];
  for (const versionEntry of versionEntries) {
    const versionName = String(versionEntry && versionEntry.version ? versionEntry.version : '').trim();
    if (!versionName) continue;
    versions.add(versionName);
    const versionKey = normalizeForCompare(versionName);
    if (!languagesByVersion.has(versionKey)) languagesByVersion.set(versionKey, new Set());

    const languageEntries = Array.isArray(versionEntry.languages) ? versionEntry.languages : [];
    for (const languageEntry of languageEntries) {
      const languageName = String(languageEntry && languageEntry.language ? languageEntry.language : '').trim();
      if (!languageName) continue;
      languagesByVersion.get(versionKey).add(languageName);

      const tabs = Array.isArray(languageEntry.tabs) ? languageEntry.tabs : [];
      const tabMapKey = `${versionKey}::${normalizeForCompare(languageName)}`;
      if (!tabsByVersionLanguage.has(tabMapKey)) tabsByVersionLanguage.set(tabMapKey, new Set());

      for (const tabEntry of tabs) {
        const tabName = String(tabEntry && tabEntry.tab ? tabEntry.tab : '').trim();
        if (!tabName) continue;
        tabsByVersionLanguage.get(tabMapKey).add(tabName);
      }
    }
  }

  return {
    versions: [...versions].sort(),
    tabsByVersionLanguage,
    languagesByVersion
  };
}

function resolveSelectionInput(rawInput, options) {
  const input = String(rawInput || '').trim();
  if (!input) return [];

  const byIndex = new Map();
  const byValue = new Map();
  options.forEach((option, index) => {
    byIndex.set(String(index + 1), option);
    byValue.set(normalizeForCompare(option), option);
  });

  const tokens = splitCsv(input);
  const out = [];
  for (const token of tokens) {
    if (byIndex.has(token)) {
      out.push(byIndex.get(token));
      continue;
    }
    const normalized = normalizeForCompare(token);
    if (byValue.has(normalized)) {
      out.push(byValue.get(normalized));
      continue;
    }
    throw new Error(`Invalid selection token: ${token}`);
  }
  return uniqStrings(out);
}

function matchesSelection(value, selectedSet) {
  if (!selectedSet || selectedSet.size === 0) return true;
  return selectedSet.has(normalizeForCompare(value));
}

function pruneNavigationNode(node, context) {
  if (!node || typeof node !== 'object') return null;
  if (Array.isArray(node)) {
    const items = node.map((entry) => pruneNavigationNode(entry, context)).filter(Boolean);
    return items.length > 0 ? items : null;
  }

  const out = { ...node };

  if (Array.isArray(node.versions)) {
    out.versions = node.versions
      .filter((entry) => matchesSelection(entry && entry.version, context.versionSet))
      .map((entry) => pruneNavigationNode(entry, context))
      .filter(Boolean);
  }

  if (Array.isArray(node.languages)) {
    out.languages = node.languages
      .filter((entry) => matchesSelection(entry && entry.language, context.languageSet))
      .map((entry) => pruneNavigationNode(entry, context))
      .filter(Boolean);
  }

  if (Array.isArray(node.tabs)) {
    out.tabs = node.tabs
      .filter((entry) => matchesSelection(entry && entry.tab, context.tabSet))
      .map((entry) => pruneNavigationNode(entry, context))
      .filter(Boolean);
  }

  if (Array.isArray(node.anchors)) {
    out.anchors = node.anchors
      .map((entry) => pruneNavigationNode(entry, context))
      .filter(Boolean);
  }

  if (Array.isArray(node.groups)) {
    out.groups = node.groups
      .map((entry) => pruneNavigationNode(entry, context))
      .filter(Boolean);
  }

  if (Array.isArray(node.pages)) {
    const scopedPages = [];
    for (const entry of node.pages) {
      if (typeof entry === 'string') {
        if (shouldKeepRouteEntry(entry, context)) {
          scopedPages.push(normalizeRoute(entry));
        }
        continue;
      }
      if (!entry || typeof entry !== 'object') continue;
      const pruned = pruneNavigationNode(entry, context);
      if (pruned) scopedPages.push(pruned);
    }
    out.pages = scopedPages;
  }

  const hasStructuralArrays = STRUCTURAL_ARRAY_KEYS.some((key) => Array.isArray(node[key]));
  if (!hasStructuralArrays) return out;

  const hasAnyContent = STRUCTURAL_ARRAY_KEYS.some((key) => {
    return !Array.isArray(out[key]) || out[key].length > 0;
  });

  if (!hasAnyContent) return null;
  return out;
}

function buildScopedNavigation(navigation, selection) {
  const context = {
    versionSet: new Set(selection.versions.map(normalizeForCompare)),
    languageSet: new Set(selection.languages.map(normalizeForCompare)),
    tabSet: new Set(selection.tabs.map(normalizeForCompare)),
    prefixes: selection.prefixes.map(normalizeRoute).filter(Boolean),
    disableOpenapi: Boolean(selection.disableOpenapi)
  };
  return pruneNavigationNode(navigation, context);
}

function buildScopedMintignore(baseContent, scopedMetadata) {
  const lines = String(baseContent || '').split('\n');
  const appendSet = new Set();
  const append = (line) => {
    const value = String(line || '').trim();
    if (!value || appendSet.has(value)) return;
    appendSet.add(value);
  };

  if (scopedMetadata.excludedVersions.length > 0 || scopedMetadata.excludedLanguagePaths.length > 0) {
    append('# LPD scoped profile (generated): excluded versions/languages');
  }
  scopedMetadata.excludedVersions.forEach((version) => append(`/${version}/**`));
  scopedMetadata.excludedLanguagePaths.forEach((entry) => append(entry));

  if (scopedMetadata.excludedSectionPrefixes.length > 0) {
    append('# LPD scoped profile (generated): excluded section prefixes');
    scopedMetadata.excludedSectionPrefixes.forEach((prefix) => append(`/${prefix}/**`));
  }

  if (scopedMetadata.disableOpenapi) {
    append('# LPD scoped profile (generated): OpenAPI routes excluded');
    append('/v2/**/api-reference/**');
    append('/v2/**/api-reference.mdx');
  }

  if (appendSet.size === 0) {
    return lines.join('\n').replace(/\n*$/, '\n');
  }

  const merged = [...lines];
  if (merged.length === 0 || merged[merged.length - 1].trim() !== '') merged.push('');
  merged.push(...appendSet);
  return merged.join('\n').replace(/\n*$/, '\n');
}

function buildScopedMetadata(selection, optionData, allRoutes, scopedRoutes) {
  const availableVersions = optionData.versions;
  const selectedVersionSet = new Set(selection.versions.map(normalizeForCompare));
  const selectedLanguageSet = new Set(selection.languages.map(normalizeForCompare));

  const excludedVersions = availableVersions
    .filter((version) => selectedVersionSet.size > 0 && !selectedVersionSet.has(normalizeForCompare(version)))
    .map((version) => normalizeRoute(version));

  const excludedLanguagePaths = [];
  for (const version of availableVersions) {
    if (selectedVersionSet.size > 0 && !selectedVersionSet.has(normalizeForCompare(version))) continue;
    const langSet = optionData.languagesByVersion.get(normalizeForCompare(version));
    if (!langSet || langSet.size === 0) continue;
    for (const language of langSet) {
      const langNorm = normalizeForCompare(language);
      if (selectedLanguageSet.size === 0 || selectedLanguageSet.has(langNorm)) continue;
      if (langNorm === 'en') continue;
      excludedLanguagePaths.push(`/${normalizeRoute(version)}/${normalizeRoute(language)}/**`);
    }
  }

  const allSections = new Set(allRoutes.map(deriveSectionPrefix).filter(Boolean));
  const selectedSections = new Set(
    (selection.prefixes.length > 0 ? selection.prefixes : scopedRoutes).map(deriveSectionPrefix).filter(Boolean)
  );
  const excludedSectionPrefixes = [...allSections]
    .filter((section) => selectedSections.size > 0 && !selectedSections.has(section))
    .sort();

  return {
    excludedVersions: uniqStrings(excludedVersions),
    excludedLanguagePaths: uniqStrings(excludedLanguagePaths),
    excludedSectionPrefixes,
    disableOpenapi: Boolean(selection.disableOpenapi)
  };
}

function ensureWorkspaceScaffold(repoRoot, workspaceDir) {
  fs.mkdirSync(workspaceDir, { recursive: true });
  const overrideNames = new Set(['docs.json', '.mintignore', '.lpd-scope.json']);
  const repoEntries = fs.readdirSync(repoRoot, { withFileTypes: true });
  const repoNames = new Set(repoEntries.map((entry) => entry.name));

  for (const entry of repoEntries) {
    const name = entry.name;
    if (name === 'docs.json' || name === '.mintignore') continue;
    const source = path.join(repoRoot, name);
    const target = path.join(workspaceDir, name);
    fs.rmSync(target, { recursive: true, force: true });
    const symlinkType = entry.isDirectory() ? 'dir' : 'file';
    fs.symlinkSync(source, target, symlinkType);
  }

  for (const name of fs.readdirSync(workspaceDir)) {
    if (overrideNames.has(name)) continue;
    if (!repoNames.has(name)) {
      fs.rmSync(path.join(workspaceDir, name), { recursive: true, force: true });
    }
  }
}

function createWorkspaceHash(repoRoot, selection, docsStat, mintignoreStat) {
  const payload = {
    repoRoot: fs.realpathSync(repoRoot),
    selection,
    docsMtimeMs: docsStat.mtimeMs,
    mintignoreMtimeMs: mintignoreStat ? mintignoreStat.mtimeMs : 0
  };
  return crypto.createHash('sha1').update(JSON.stringify(payload)).digest('hex').slice(0, 16);
}

async function promptSelectMany(rl, label, options, defaultSelection, allowAllByEmpty) {
  const defaults = uniqStrings(defaultSelection);
  const defaultLabel = defaults.length > 0 ? defaults.join(', ') : allowAllByEmpty ? 'all' : 'none';
  const promptLine = `Select ${label} (comma values or indices; Enter=${defaultLabel}): `;

  for (;;) {
    console.error(`\n${label}:`);
    options.forEach((option, index) => {
      console.error(`  ${index + 1}. ${option}`);
    });
    const answer = await new Promise((resolve) => rl.question(promptLine, resolve));
    const trimmed = String(answer || '').trim();
    if (!trimmed) {
      return allowAllByEmpty && defaults.length === 0 ? [] : defaults;
    }
    if (trimmed === '*') {
      return [];
    }
    try {
      return resolveSelectionInput(trimmed, options);
    } catch (error) {
      console.error(`Invalid selection: ${error.message}`);
    }
  }
}

function availableTabs(optionData, selectedVersions, selectedLanguages) {
  const versionSet = new Set(selectedVersions.map(normalizeForCompare));
  const languageSet = new Set(selectedLanguages.map(normalizeForCompare));
  const out = new Set();

  for (const [key, tabSet] of optionData.tabsByVersionLanguage.entries()) {
    const [versionKey, languageKey] = key.split('::');
    if (versionSet.size > 0 && !versionSet.has(versionKey)) continue;
    if (languageSet.size > 0 && !languageSet.has(languageKey)) continue;
    tabSet.forEach((tab) => out.add(tab));
  }
  return [...out].sort();
}

async function promptForSelection(initialSelection, optionData, allRoutes) {
  if (!process.stdin.isTTY) {
    throw new Error('--interactive requires a TTY terminal');
  }

  const rl = readline.createInterface({ input: process.stdin, output: process.stderr });
  try {
    const versions = await promptSelectMany(rl, 'versions', optionData.versions, initialSelection.versions, true);

    const languageOptions = (() => {
      if (versions.length === 0) {
        const all = new Set();
        for (const languageSet of optionData.languagesByVersion.values()) {
          languageSet.forEach((language) => all.add(language));
        }
        return [...all].sort();
      }
      const selected = new Set();
      versions.forEach((version) => {
        const languageSet = optionData.languagesByVersion.get(normalizeForCompare(version));
        if (!languageSet) return;
        languageSet.forEach((language) => selected.add(language));
      });
      return [...selected].sort();
    })();

    const languages = await promptSelectMany(rl, 'languages', languageOptions, initialSelection.languages, true);
    const tabOptions = availableTabs(optionData, versions, languages);
    const tabs = await promptSelectMany(rl, 'tabs', tabOptions, initialSelection.tabs, true);

    const prefixOptions = uniqStrings(allRoutes.map(deriveSectionPrefix).filter(Boolean));
    const prefixes = await promptSelectMany(
      rl,
      'route prefixes (optional; use * or Enter for all)',
      prefixOptions,
      initialSelection.prefixes,
      true
    );

    const disableOpenapiAnswer = await new Promise((resolve) =>
      rl.question(`Disable OpenAPI routes? [y/N] (${initialSelection.disableOpenapi ? 'current: yes' : 'current: no'}): `, resolve)
    );
    const disableOpenapi = /^(y|yes)$/i.test(String(disableOpenapiAnswer || '').trim())
      ? true
      : initialSelection.disableOpenapi && !String(disableOpenapiAnswer || '').trim();

    return {
      versions,
      languages,
      tabs,
      prefixes,
      disableOpenapi
    };
  } finally {
    rl.close();
  }
}

async function createScopedProfile(args) {
  const docsPath = path.join(args.repoRoot, 'docs.json');
  const mintignorePath = path.join(args.repoRoot, '.mintignore');
  if (!fs.existsSync(docsPath)) throw new Error(`docs.json not found at ${docsPath}`);

  const docs = JSON.parse(fs.readFileSync(docsPath, 'utf8'));
  if (!docs || typeof docs !== 'object' || !docs.navigation) {
    throw new Error('docs.json is missing required "navigation" object');
  }

  const optionData = collectOptionsFromNavigation(docs.navigation);
  const allRoutes = collectRoutesFromNavigation(docs.navigation);
  const fromScopeFile = loadScopeFile(args.scopeFile, args.repoRoot);

  let selection = {
    versions: uniqStrings([...fromScopeFile.versions, ...args.versions]),
    languages: uniqStrings([...fromScopeFile.languages, ...args.languages]),
    tabs: uniqStrings([...fromScopeFile.tabs, ...args.tabs]),
    prefixes: uniqStrings([...fromScopeFile.prefixes, ...args.prefixes].map(normalizeRoute)),
    disableOpenapi: Boolean(fromScopeFile.disableOpenapi || args.disableOpenapi)
  };

  if (args.interactive) {
    selection = await promptForSelection(selection, optionData, allRoutes);
  }

  const scopedNavigation = buildScopedNavigation(docs.navigation, selection);
  if (!scopedNavigation) {
    throw new Error('Scoped profile removed all navigation nodes. Relax version/language/tab/prefix filters.');
  }

  const scopedDocs = { ...docs, navigation: scopedNavigation };
  const scopedRoutes = collectRoutesFromNavigation(scopedDocs.navigation);
  if (scopedRoutes.length === 0) {
    throw new Error('Scoped profile resolved to zero routes. Relax version/language/tab/prefix filters.');
  }

  const mintignoreBase = fs.existsSync(mintignorePath) ? fs.readFileSync(mintignorePath, 'utf8') : '';
  const metadata = buildScopedMetadata(selection, optionData, allRoutes, scopedRoutes);
  const scopedMintignore = buildScopedMintignore(mintignoreBase, metadata);

  const docsStat = fs.statSync(docsPath);
  const mintignoreStat = fs.existsSync(mintignorePath) ? fs.statSync(mintignorePath) : null;
  const scopeHash = createWorkspaceHash(args.repoRoot, selection, docsStat, mintignoreStat);
  const workspaceDir = path.join(args.workspaceBase, scopeHash);

  if (!args.printOnly) {
    ensureWorkspaceScaffold(args.repoRoot, workspaceDir);
    fs.writeFileSync(path.join(workspaceDir, 'docs.json'), `${JSON.stringify(scopedDocs, null, 2)}\n`, 'utf8');
    fs.writeFileSync(path.join(workspaceDir, '.mintignore'), scopedMintignore, 'utf8');
    fs.writeFileSync(
      path.join(workspaceDir, '.lpd-scope.json'),
      `${JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          sourceRepoRoot: args.repoRoot,
          selection,
          routeCounts: {
            original: allRoutes.length,
            scoped: scopedRoutes.length
          }
        },
        null,
        2
      )}\n`,
      'utf8'
    );
  }

  return {
    workspaceDir,
    scopeHash,
    selection,
    routeCounts: {
      original: allRoutes.length,
      scoped: scopedRoutes.length
    },
    disabledOpenapi: Boolean(selection.disableOpenapi)
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printUsage();
    return;
  }
  const result = await createScopedProfile(args);
  process.stdout.write(`${JSON.stringify(result)}\n`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  });
}

module.exports = {
  parseArgs,
  loadScopeFile,
  collectRoutesFromNavigation,
  collectOptionsFromNavigation,
  deriveSectionPrefix,
  buildScopedNavigation,
  buildScopedMintignore,
  buildScopedMetadata,
  createScopedProfile
};
