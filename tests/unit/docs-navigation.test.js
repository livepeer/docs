#!/usr/bin/env node
/**
 * @script docs-navigation.test
 * @summary Validate docs.json page-entry syntax in check-only mode by default, with optional report writing and approved remaps.
 * @owner docs
 * @scope tests, docs.json
 *
 * @usage
 *   ./lpd tests unit docs-navigation.test
 *   ./lpd tests unit docs-navigation.test -- --write-report
 *   ./lpd tests unit docs-navigation.test -- --strict-missing
 *   ./lpd tests unit docs-navigation.test -- --write-remaps
 *
 * @inputs
 *   --strict-missing Treat unresolved routes as test errors instead of warnings.
 *   --write-report Write navigation report artifacts to tasks/reports/navigation-links.
 *   --no-write-report Force check-only mode without writing report artifacts.
 *   --write-remaps Prompt for per-route approval and write accepted remaps to docs.json.
 *   --remap-threshold <0-1> Minimum score for non-canonical remap suggestions (default: 0.85).
 *
 * @outputs
 *   - tasks/reports/navigation-links/navigation-report.md (when --write-report or --write-remaps is used)
 *   - tasks/reports/navigation-links/navigation-report.json (when --write-report or --write-remaps is used)
 *   - docs.json (only when --write-remaps is used and user approves entries)
 *   - Console summary of syntax and route-resolution status.
 *
 * @exit-codes
 *   0 = checks passed (or only missing-route warnings in non-strict mode)
  *   1 = syntax violations found, docs.json parse failed, or strict missing-route failures
 *
 * @examples
 *   ./lpd tests unit docs-navigation.test
 *   ./lpd tests unit docs-navigation.test -- --write-report
 *   ./lpd tests unit docs-navigation.test -- --strict-missing
 *   ./lpd tests unit docs-navigation.test -- --write-remaps
 *
 * @notes
 *   Report files are check-only by default; write them explicitly with --write-report. Remaps require explicit per-entry approval.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');

const REPORT_MD_REL = 'tasks/reports/navigation-links/navigation-report.md';
const REPORT_JSON_REL = 'tasks/reports/navigation-links/navigation-report.json';
const DEFAULT_REMAP_THRESHOLD = 0.85;
const RESOURCE_HUB_REDIRECT_ROUTE = 'v2/resources/redirect';
const RESOURCE_HUB_PORTAL_ROUTE = 'v2/resources/resources-portal';
const LEGACY_RESOURCE_HUB_ROUTE = 'v2/pages/07_resources/redirect';

let errors = [];
let warnings = [];

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function parseArgs(argv) {
  const args = {
    strictMissing: false,
    writeRemaps: false,
    writeReport: false,
    remapThreshold: DEFAULT_REMAP_THRESHOLD
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--strict-missing') {
      args.strictMissing = true;
      continue;
    }
    if (token === '--write-remaps') {
      args.writeRemaps = true;
      continue;
    }
    if (token === '--write-report') {
      args.writeReport = true;
      continue;
    }
    if (token === '--no-write-report') {
      args.writeReport = false;
      continue;
    }
    if (token === '--remap-threshold') {
      const parsed = Number(argv[i + 1]);
      if (Number.isFinite(parsed) && parsed >= 0 && parsed <= 1) {
        args.remapThreshold = parsed;
        i += 1;
      }
    }
  }

  return args;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function walkDocsFiles(dirPath, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkDocsFiles(fullPath, out);
    } else if (/\.(md|mdx)$/i.test(entry.name)) {
      out.push(fullPath);
    }
  }
  return out;
}

function collectExistingRoutes(repoRoot) {
  const roots = [path.join(repoRoot, 'v1'), path.join(repoRoot, 'v2', 'pages'), path.join(repoRoot, 'v2')];
  const routeSet = new Set();

  roots.forEach((rootPath) => {
    const files = walkDocsFiles(rootPath);
    files.forEach((filePath) => {
      const relPath = toPosix(path.relative(repoRoot, filePath));
      const withoutExt = relPath.replace(/\.(md|mdx)$/i, '');
      routeSet.add(withoutExt);

      if (withoutExt.endsWith('/index')) {
        routeSet.add(withoutExt.replace(/\/index$/i, ''));
      }
      if (withoutExt.endsWith('/README')) {
        routeSet.add(withoutExt.replace(/\/README$/i, ''));
      }
    });
  });

  return [...routeSet];
}

function collectPageEntries(node, pointer, out = []) {
  if (Array.isArray(node)) {
    node.forEach((item, index) => collectPageEntries(item, `${pointer}[${index}]`, out));
    return out;
  }

  if (!node || typeof node !== 'object') {
    return out;
  }

  if (Array.isArray(node.pages)) {
    node.pages.forEach((entry, index) => {
      const entryPointer = `${pointer}.pages[${index}]`;
      if (typeof entry === 'string') {
        out.push({ value: entry, pointer: entryPointer });
        return;
      }
      collectPageEntries(entry, entryPointer, out);
    });
  }

  Object.entries(node).forEach(([key, value]) => {
    if (key === 'pages') return;
    collectPageEntries(value, `${pointer}.${key}`, out);
  });

  return out;
}

function collectObjectNodes(node, pointer, out = []) {
  if (Array.isArray(node)) {
    node.forEach((item, index) => collectObjectNodes(item, `${pointer}[${index}]`, out));
    return out;
  }

  if (!node || typeof node !== 'object') return out;
  out.push({ node, pointer });

  Object.entries(node).forEach(([key, value]) => {
    collectObjectNodes(value, `${pointer}.${key}`, out);
  });

  return out;
}

function normalizeRoute(rawValue) {
  let value = String(rawValue || '').trim();
  value = value.replace(/^\/+/, '');
  value = value.replace(/\.(md|mdx)$/i, '');
  value = value.replace(/\/+$/, '');
  return value;
}

function resolveRouteToFile(repoRoot, route) {
  const normalized = normalizeRoute(route);
  if (!normalized) return null;

  const candidates = [
    `${normalized}.mdx`,
    `${normalized}.md`,
    `${normalized}/index.mdx`,
    `${normalized}/index.md`,
    `${normalized}/README.mdx`,
    `${normalized}/README.md`
  ];

  for (const candidate of candidates) {
    const abs = path.join(repoRoot, candidate);
    if (fs.existsSync(abs)) return toPosix(candidate);
  }
  return null;
}

function resolveRouteViaRedirects(repoRoot, docsJson, rawRoute) {
  const normalized = normalizeRoute(rawRoute);
  if (!normalized) return null;
  const redirects = Array.isArray(docsJson?.redirects) ? docsJson.redirects : [];
  for (const redirect of redirects) {
    if (!redirect || typeof redirect !== 'object') continue;
    if (normalizeRoute(redirect.source) !== normalized) continue;
    const resolved = resolveRouteToFile(repoRoot, redirect.destination);
    if (resolved) return resolved;
  }
  return null;
}

function resolveRouteViaCanonicalMap(repoRoot, rawRoute) {
  const normalized = normalizeRoute(rawRoute);
  if (!normalized) return null;

  for (const candidate of getCanonicalMap(normalized)) {
    const resolved = resolveRouteToFile(repoRoot, candidate);
    if (resolved) return resolved;
  }
  return null;
}

function resolveRouteWithAliases(repoRoot, docsJson, rawRoute) {
  const direct = resolveRouteToFile(repoRoot, rawRoute);
  if (direct) return direct;

  const viaRedirect = resolveRouteViaRedirects(repoRoot, docsJson, rawRoute);
  if (viaRedirect) return viaRedirect;

  return resolveRouteViaCanonicalMap(repoRoot, rawRoute);
}

function countSharedPrefix(aSegments, bSegments) {
  const max = Math.min(aSegments.length, bSegments.length);
  let count = 0;
  for (let i = 0; i < max; i += 1) {
    if (aSegments[i] !== bSegments[i]) break;
    count += 1;
  }
  return count;
}

function scoreRouteSimilarity(sourceRoute, candidateRoute) {
  const a = normalizeRoute(sourceRoute).split('/').filter(Boolean);
  const b = normalizeRoute(candidateRoute).split('/').filter(Boolean);
  if (a.length === 0 || b.length === 0) return 0;

  const prefix = countSharedPrefix(a, b);
  const maxLen = Math.max(a.length, b.length);
  const aSet = new Set(a);
  const overlap = b.filter((segment) => aSet.has(segment)).length;

  const prefixScore = prefix / maxLen;
  const overlapScore = overlap / maxLen;
  return Number((0.7 * prefixScore + 0.3 * overlapScore).toFixed(4));
}

function getCanonicalMap(normalizedRoute) {
  const route = normalizeRoute(normalizedRoute);
  const map = {
    'v2/pages/03_developers/building-on-livepeer/index': ['v2/pages/03_developers/developer-portal'],
    'v2/resources/redirect': ['v2/resources/resources-portal'],
    'v2/pages/08_help/redirect': ['v2/pages/08_help/README', 'v2/resources/resources-portal'],
    'v2/pages/08_help/README': ['v2/resources/resources-portal'],
    'v2/pages/010_streamplace/introduction/streamplace-funding-model': [
      'v2/pages/010_streamplace/introduction/streamplace-funding-model'
    ],
    'v2/resources/changelog/migration-guides': ['v2/resources/changelog/migration-guide'],
    'v2/pages/04_gateways/run-a-gateway/quickstart-a-gateway': [
      'v2/pages/04_gateways/quickstart/gateway-setup'
    ],
    'v2/pages/04_gateways/run-a-gateway/get-AI-to-setup-the-gateway': [
      'v2/pages/04_gateways/quickstart/AI-prompt'
    ],
    'v2/pages/04_gateways/using-gateways/gateway-providers/streamplace': [
      'v2/pages/010_streamplace/overview'
    ],
    'v2/pages/04_gateways/run-a-gateway/test/test-gateway': [
      'v2/pages/04_gateways/quickstart/gateway-setup'
    ],
    'v2/pages/04_gateways/run-a-gateway/test/publish-content': [
      'v2/pages/04_gateways/quickstart/gateway-setup'
    ],
    'v2/pages/04_gateways/run-a-gateway/test/playback-content': [
      'v2/pages/04_gateways/quickstart/gateway-setup'
    ],
    'v2/pages/04_gateways/references/video-flags': ['v2/pages/04_gateways/references/configuration-flags'],
    'v2/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/data-centres-and-large-scale-hardware-providers': [
      'v2/orchestrators/setting-up-an-orchestrator/data-centres-and-large-scale-hardware-providers'
    ],
    'v2/pages/02_community/livepeer-community/media-kit': ['v2/resources/media-kit'],
    'v2/pages/01_about/livepeer-network/actors': ['v2/about/livepeer-network/actors'],
    'v2/pages/03_developers/ai-inference-on-livepeer/livepeer-ai/livepeer-ai-content-directory': [
      'v2/developers/ai-inference-on-livepeer/livepeer-ai/livepeer-ai-content-directory'
    ],
    'v2/resources/concepts/livepeer-core-concepts': ['v2/about/core-concepts'],
    'v2/resources/concepts/livepeer-actors': ['v2/about/livepeer-network/actors'],
    'v2/resources/ai-inference-on-livepeer/livepeer-ai/livepeer-ai-content-directory': [
      'v2/pages/03_developers/ai-inference-on-livepeer/livepeer-ai/livepeer-ai-content-directory'
    ],
    'v2/pages/00_home/changelog/changelog': ['v2/resources/changelog/changelog'],
    'v2/pages/00_home/changelog/migration-guide': ['v2/resources/changelog/migration-guide']
  };

  return map[route] || [];
}

function suggestRemaps(missingRoute, knownRoutes) {
  const normalized = normalizeRoute(missingRoute);
  const knownSet = new Set(knownRoutes.map((route) => normalizeRoute(route)));
  const suggestions = [];
  const seen = new Set();

  function addSuggestion(route, reason, score = null) {
    const normalizedRoute = normalizeRoute(route);
    if (!normalizedRoute || seen.has(normalizedRoute)) return;
    if (!knownSet.has(normalizedRoute)) return;
    seen.add(normalizedRoute);
    suggestions.push({
      route: normalizedRoute,
      reason,
      score
    });
  }

  getCanonicalMap(normalized).forEach((candidate) => {
    addSuggestion(candidate, 'canonical remap rule', 1);
  });

  const deDuplicatedSegment = normalized.replace(
    '/setting-up-an-orchestrator/setting-up-an-orchestrator/',
    '/setting-up-an-orchestrator/'
  );
  if (deDuplicatedSegment !== normalized) {
    addSuggestion(deDuplicatedSegment, 'removed duplicated path segment', 0.92);
  }

  const quickstartRewrite = normalized
    .replace(
      '/run-a-gateway/quickstart-a-gateway',
      '/quickstart/gateway-setup'
    )
    .replace(
      '/run-a-gateway/get-AI-to-setup-the-gateway',
      '/quickstart/AI-prompt'
    )
    .replace(
      '/run-a-gateway/quickstart/quickstart-a-gateway',
      '/quickstart/gateway-setup'
    )
    .replace(
      '/run-a-gateway/quickstart/get-AI-to-setup-the-gateway',
      '/quickstart/AI-prompt'
    )
    .replace('/changelog/migration-guides', '/changelog/migration-guide')
    .replace('/streamplace-funding', '/streamplace-funding-model')
    .replace('/references/video-flags', '/references/configuration-flags');
  if (quickstartRewrite !== normalized) {
    addSuggestion(quickstartRewrite, 'normalized known route naming pattern', 0.88);
  }

  const leaf = normalized.split('/').filter(Boolean).pop() || '';
  const genericLeafs = new Set(['index', 'README', 'redirect']);
  if (leaf && !genericLeafs.has(leaf)) {
    knownRoutes
      .filter((route) => normalizeRoute(route).endsWith(`/${leaf}`))
      .slice(0, 5)
      .forEach((route) => {
        addSuggestion(route, 'same leaf segment match', 0.65);
      });
  }

  const scored = knownRoutes
    .map((route) => ({
      route: normalizeRoute(route),
      score: scoreRouteSimilarity(normalized, route)
    }))
    .filter((item) => item.score >= 0.45)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  scored.forEach((item) => {
    addSuggestion(item.route, 'high path similarity', item.score);
  });

  return suggestions.slice(0, 5);
}

function getHighConfidenceSuggestion(suggestions, threshold) {
  if (!Array.isArray(suggestions) || suggestions.length === 0) return null;

  const canonical = suggestions.find((item) => item.reason === 'canonical remap rule');
  if (canonical) return canonical;

  return suggestions.find((item) => typeof item.score === 'number' && item.score >= threshold) || null;
}

function pointerToTokens(pointer) {
  const tokens = [];
  const regex = /([^[.\]]+)|\[(\d+)\]/g;
  let match;
  while ((match = regex.exec(pointer)) !== null) {
    if (match[1] !== undefined) {
      tokens.push(match[1]);
    } else {
      tokens.push(Number(match[2]));
    }
  }
  return tokens;
}

function setByPointer(root, pointer, value) {
  const tokens = pointerToTokens(pointer);
  if (tokens.length === 0) {
    throw new Error(`Invalid pointer "${pointer}"`);
  }

  let node = root;
  for (let i = 0; i < tokens.length - 1; i += 1) {
    const key = tokens[i];
    if (node == null || !(key in node)) {
      throw new Error(`Pointer segment "${key}" not found for "${pointer}"`);
    }
    node = node[key];
  }

  const finalKey = tokens[tokens.length - 1];
  if (node == null || !(finalKey in node)) {
    throw new Error(`Pointer target "${finalKey}" not found for "${pointer}"`);
  }
  node[finalKey] = value;
}

function promptQuestion(rl, question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(String(answer || '').trim()));
  });
}

async function applyApprovedRemaps(baseResult, options = {}) {
  const threshold = Number.isFinite(options.remapThreshold) ? options.remapThreshold : DEFAULT_REMAP_THRESHOLD;
  const docsJson = JSON.parse(JSON.stringify(baseResult.docsJson || {}));
  const candidates = (baseResult.missingRoutes || [])
    .map((issue) => ({
      issue,
      suggestion: getHighConfidenceSuggestion(issue.suggestions, threshold)
    }))
    .filter((item) => item.suggestion);

  if (candidates.length === 0) {
    return {
      considered: 0,
      applied: [],
      skipped: [],
      docsJson
    };
  }

  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    throw new Error(
      '--write-remaps requires an interactive terminal (TTY). Use a real interactive terminal (no pipe/redirection): ./lpd tests unit docs-navigation.test -- --write-remaps'
    );
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const applied = [];
  const skipped = [];

  console.log('\n🧩 Interactive Remap Approval');
  console.log(`Candidates requiring approval: ${candidates.length}`);
  console.log(`Confidence threshold: ${threshold}`);

  for (let index = 0; index < candidates.length; index += 1) {
    const { issue, suggestion } = candidates[index];
    const score = typeof suggestion.score === 'number' ? suggestion.score : 'n/a';
    console.log(`\n[${index + 1}/${candidates.length}] ${issue.pointer}`);
    console.log(`  Current:   ${issue.value}`);
    console.log(`  Suggested: ${suggestion.route}`);
    console.log(`  Reason:    ${suggestion.reason} (score: ${score})`);

    const answer = (await promptQuestion(rl, '  Apply this remap? [y/N]: ')).toLowerCase();
    const approved = answer === 'y' || answer === 'yes';
    if (!approved) {
      skipped.push({
        pointer: issue.pointer,
        from: issue.value,
        to: suggestion.route,
        reason: suggestion.reason
      });
      continue;
    }

    try {
      setByPointer(docsJson, issue.pointer, suggestion.route);
      applied.push({
        pointer: issue.pointer,
        from: issue.value,
        to: suggestion.route,
        reason: suggestion.reason
      });
    } catch (error) {
      skipped.push({
        pointer: issue.pointer,
        from: issue.value,
        to: suggestion.route,
        reason: `failed to apply: ${error.message}`
      });
    }
  }

  rl.close();

  return {
    considered: candidates.length,
    applied,
    skipped,
    docsJson
  };
}

function buildReportData({ generatedAt, totalEntries, syntaxErrors, missingRoutes, missingWithSuggestions }) {
  const lines = [];
  lines.push('# Docs Navigation Route Report');
  lines.push('');
  lines.push(`- Generated at (UTC): ${generatedAt}`);
  lines.push(`- Entries scanned: ${totalEntries}`);
  lines.push(`- Syntax errors: ${syntaxErrors.length}`);
  lines.push(`- Missing routes: ${missingRoutes.length}`);
  lines.push(`- Missing routes with suggestions: ${missingWithSuggestions}`);
  lines.push('');
  lines.push('## Syntax Errors');
  if (syntaxErrors.length === 0) {
    lines.push('');
    lines.push('- None');
  } else {
    syntaxErrors.forEach((issue) => {
      lines.push('');
      lines.push(`- ${issue.rule}: \`${issue.value}\``);
      lines.push(`  - Pointer: \`${issue.pointer}\``);
    });
  }

  lines.push('');
  lines.push('## Missing Routes');
  if (missingRoutes.length === 0) {
    lines.push('');
    lines.push('- None');
  } else {
    missingRoutes.forEach((issue) => {
      lines.push('');
      lines.push(`- \`${issue.value}\` (normalized: \`${issue.normalized}\`)`);
      lines.push(`  - Pointer: \`${issue.pointer}\``);
      if (issue.suggestions.length > 0) {
        lines.push('  - Suggested remaps:');
        issue.suggestions.forEach((suggestion) => {
          const scoreDisplay = typeof suggestion.score === 'number' ? ` [score=${suggestion.score}]` : '';
          lines.push(`    - \`${suggestion.route}\` (${suggestion.reason}${scoreDisplay})`);
        });
      } else {
        lines.push('  - Suggested remaps: none');
      }
    });
  }

  return {
    generatedAt,
    totalEntries,
    syntaxErrors,
    missingRoutes,
    missingWithSuggestions,
    markdown: `${lines.join('\n')}\n`
  };
}

function writeReport(repoRoot, reportData, shouldWrite = false) {
  const reportMdAbs = path.join(repoRoot, REPORT_MD_REL);
  const reportJsonAbs = path.join(repoRoot, REPORT_JSON_REL);
  let reportWritten = false;
  if (shouldWrite) {
    const jsonReport = {
      generatedAt: reportData.generatedAt,
      totalEntries: reportData.totalEntries,
      syntaxErrors: reportData.syntaxErrors,
      missingRoutes: reportData.missingRoutes,
      missingWithSuggestions: reportData.missingWithSuggestions
    };
    ensureDir(path.dirname(reportMdAbs));
    ensureDir(path.dirname(reportJsonAbs));
    fs.writeFileSync(reportJsonAbs, `${JSON.stringify(jsonReport, null, 2)}\n`, 'utf8');
    fs.writeFileSync(reportMdAbs, reportData.markdown, 'utf8');
    reportWritten = true;
  }

  return {
    reportMdAbs,
    reportJsonAbs,
    reportWritten
  };
}

function runTests(options = {}) {
  errors = [];
  warnings = [];

  const strictMissing = Boolean(options.strictMissing);
  const shouldWriteReport = Boolean(options.writeReport);
  const repoRoot = getRepoRoot();
  const docsJsonPath = path.join(repoRoot, 'docs.json');
  const knownRoutes = collectExistingRoutes(repoRoot);

  if (!fs.existsSync(docsJsonPath)) {
    errors.push({
      file: 'docs.json',
      rule: 'Docs config',
      message: 'docs.json not found at repository root'
    });
    return {
      errors,
      warnings,
      passed: false,
      total: 0,
      docsJsonPath,
      reportWritten: false,
      reportPathMd: path.join(repoRoot, REPORT_MD_REL),
      reportPathJson: path.join(repoRoot, REPORT_JSON_REL)
    };
  }

  let docsJson;
  try {
    docsJson = JSON.parse(fs.readFileSync(docsJsonPath, 'utf8'));
  } catch (error) {
    errors.push({
      file: 'docs.json',
      rule: 'JSON parse',
      message: `Failed to parse docs.json: ${error.message}`
    });
    return {
      errors,
      warnings,
      passed: false,
      total: 0,
      docsJsonPath,
      reportWritten: false,
      reportPathMd: path.join(repoRoot, REPORT_MD_REL),
      reportPathJson: path.join(repoRoot, REPORT_JSON_REL)
    };
  }

  const entries = collectPageEntries(docsJson.navigation || docsJson, 'navigation');
  const syntaxErrors = [];
  const missingRoutes = [];

  entries.forEach(({ value, pointer }) => {
    const raw = String(value);
    const trimmed = raw.trim();
    const normalized = normalizeRoute(raw);

    if (normalized === LEGACY_RESOURCE_HUB_ROUTE) {
      errors.push({
        file: 'docs.json',
        rule: 'Legacy Resource HUB route',
        message: `Legacy route "${LEGACY_RESOURCE_HUB_ROUTE}" is not allowed; use "${RESOURCE_HUB_REDIRECT_ROUTE}"`,
        pointer
      });
    }

    if (!trimmed) {
      if (raw === ' ') return;
      const issue = { file: 'docs.json', rule: 'Blank pages entry', value: raw, pointer };
      errors.push({ ...issue, message: 'pages entry must not be blank or whitespace-only' });
      syntaxErrors.push(issue);
      return;
    }

    if (/\.mdx$/i.test(trimmed)) {
      const issue = { file: 'docs.json', rule: 'MDX suffix entry', value: raw, pointer };
      errors.push({ ...issue, message: 'pages entries must not include a .mdx suffix' });
      syntaxErrors.push(issue);
    }

    if (/\/$/.test(trimmed)) {
      const issue = { file: 'docs.json', rule: 'Trailing slash entry', value: raw, pointer };
      errors.push({ ...issue, message: 'pages entries must not end with a trailing slash' });
      syntaxErrors.push(issue);
    }

    const resolved = resolveRouteWithAliases(repoRoot, docsJson, raw);
    if (!resolved) {
      const suggestions = suggestRemaps(raw, knownRoutes);
      const issue = {
        file: 'docs.json',
        rule: 'Missing route',
        value: raw,
        normalized: normalizeRoute(raw),
        pointer,
        suggestions
      };
      missingRoutes.push(issue);
      const topSuggestion = suggestions[0] ? ` Top suggestion: "${suggestions[0].route}".` : '';
      warnings.push({
        file: 'docs.json',
        rule: 'Missing route',
        message: `No file found for "${raw}".${topSuggestion}`,
        pointer
      });
    }
  });

  const objectNodes = collectObjectNodes(docsJson.navigation || docsJson, 'navigation');
  objectNodes
    .filter(({ node }) => node && node.anchor === 'Resource HUB')
    .forEach(({ node, pointer }) => {
      const pages = Array.isArray(node.pages) ? node.pages : [];
      const isCanonical =
        pages.length === 1 && normalizeRoute(pages[0]) === RESOURCE_HUB_REDIRECT_ROUTE;
      if (!isCanonical) {
        errors.push({
          file: 'docs.json',
          rule: 'Resource HUB anchor target',
          message: `anchor "Resource HUB" must target exactly ["${RESOURCE_HUB_REDIRECT_ROUTE}"]`,
          pointer
        });
      }
    });

  objectNodes
    .filter(({ node }) => node && node.tab === 'Resource HUB')
    .forEach(({ node, pointer }) => {
      const firstRoute = node?.anchors?.[0]?.groups?.[0]?.pages?.[0];
      if (normalizeRoute(firstRoute) !== RESOURCE_HUB_REDIRECT_ROUTE) {
        errors.push({
          file: 'docs.json',
          rule: 'Resource HUB tab first route',
          message: `Resource HUB tab first routable page must be "${RESOURCE_HUB_REDIRECT_ROUTE}"`,
          pointer: `${pointer}.anchors[0].groups[0].pages[0]`
        });
      }
    });

  const redirects = Array.isArray(docsJson.redirects) ? docsJson.redirects : [];
  const hasCanonicalRedirect = redirects.some(
    (redirect) =>
      redirect &&
      redirect.source === `/${RESOURCE_HUB_REDIRECT_ROUTE}` &&
      redirect.destination === `/${RESOURCE_HUB_PORTAL_ROUTE}`
  );
  if (!hasCanonicalRedirect) {
    errors.push({
      file: 'docs.json',
      rule: 'Resource HUB redirect',
      message: `Missing redirect "/${RESOURCE_HUB_REDIRECT_ROUTE}" -> "/${RESOURCE_HUB_PORTAL_ROUTE}"`,
      pointer: 'redirects'
    });
  }

  redirects.forEach((redirect, index) => {
    if (redirect && redirect.source === '/v2/pages/07_resources/redirect') {
      errors.push({
        file: 'docs.json',
        rule: 'Legacy Resource HUB redirect source',
        message: 'Legacy redirect source "/v2/pages/07_resources/redirect" must be removed',
        pointer: `redirects[${index}]`
      });
    }
  });

  const missingWithSuggestions = missingRoutes.filter((item) => item.suggestions.length > 0).length;
  const reportData = buildReportData({
    generatedAt: new Date().toISOString(),
    totalEntries: entries.length,
    syntaxErrors,
    missingRoutes,
    missingWithSuggestions
  });
  const report = writeReport(repoRoot, reportData, shouldWriteReport);

  if (strictMissing) {
    missingRoutes.forEach((issue) => {
      errors.push({
        file: 'docs.json',
        rule: 'Missing route',
        message: `No file found for "${issue.value}"`,
        pointer: issue.pointer
      });
    });
  }

  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: entries.length,
    docsJsonPath,
    docsJson,
    missingRoutes,
    syntaxErrors,
    reportWritten: report.reportWritten,
    reportPathMd: report.reportMdAbs,
    reportPathJson: report.reportJsonAbs
  };
}

if (require.main === module) {
  (async () => {
    const args = parseArgs(process.argv.slice(2));
    const writeReport = args.writeRemaps ? true : args.writeReport;
    let result = runTests({ strictMissing: args.strictMissing, writeReport });

    if (args.writeRemaps) {
      const remapResult = await applyApprovedRemaps(result, { remapThreshold: args.remapThreshold });
      if (remapResult.applied.length > 0) {
        fs.writeFileSync(result.docsJsonPath, `${JSON.stringify(remapResult.docsJson, null, 2)}\n`, 'utf8');
        console.log(`\n✍️ Applied remaps: ${remapResult.applied.length}/${remapResult.considered}`);
      } else {
        console.log(`\n✍️ Applied remaps: 0/${remapResult.considered}`);
      }
      console.log(`⏭️  Skipped remaps: ${remapResult.skipped.length}`);
      result = runTests({ strictMissing: args.strictMissing, writeReport: true });
    }

    if (result.errors.length > 0) {
      console.error('\n❌ Docs Navigation Errors:\n');
      result.errors.forEach((err) => {
        const pointer = err.pointer ? ` (${err.pointer})` : '';
        console.error(`  ${err.file}${pointer} - ${err.message}`);
      });
    }

    if (result.warnings.length > 0) {
      console.warn('\n⚠️  Docs Navigation Warnings:\n');
      result.warnings.forEach((warn) => {
        const pointer = warn.pointer ? ` (${warn.pointer})` : '';
        console.warn(`  ${warn.file}${pointer} - ${warn.message}`);
      });
    }

    console.log(`\n📝 Navigation reports:`);
    console.log(`  - ${result.reportPathMd}`);
    console.log(`  - ${result.reportPathJson}`);
    console.log(`  - write mode: ${result.reportWritten ? 'enabled' : 'disabled (check-only)'}`);

    if (result.passed) {
      console.log(`✅ Docs navigation checks passed (${result.total} entries scanned)`);
      process.exit(0);
    }

    console.error(`❌ ${result.errors.length} docs navigation error(s) found`);
    process.exit(1);
  })().catch((error) => {
    console.error(`❌ Docs navigation script failed: ${error.message}`);
    process.exit(1);
  });
}

module.exports = { runTests, REPORT_MD_REL, REPORT_JSON_REL };
