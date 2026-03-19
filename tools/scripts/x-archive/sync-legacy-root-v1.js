#!/usr/bin/env node
/**
 * @script            sync-legacy-root-v1
 * @category          generator
 * @purpose           governance:index-management
 * @scope             full-repo
 * @domain            docs
 * @needs             E-C1, R-R14
 * @purpose-statement Legacy root redirect synchronizer — bootstraps root-level legacy-to-v1 mappings, rewrites managed docs.json redirects, installs root catch-all fallbacks, and removes legacy generated fallback pages
 * @pipeline          manual — on-demand maintainer sync tool
 * @usage             node tools/scripts/redirects/sync-legacy-root-v1.js [--bootstrap-manifest] [--write] [--repo-root <path>] [--manifest <path>] [--docs-json <path>]
 */

const fs = require('fs');
const path = require('path');

const { resolveDocPath, toPosix } = require('../../lib/docs-index-utils');
const { parseGeneratedHiddenBanner } = require('../../lib/generated-file-banners');

const SCRIPT_REL = 'tools/scripts/redirects/sync-legacy-root-v1.js';
const DEFAULT_DOCS_JSON_REL = 'docs.json';
const DEFAULT_MANIFEST_REL = 'tools/data/redirects/legacy-root-to-v1.json';
const GENERATED_MARKER = 'legacy-root-v1-compat-route';
const MANAGED_ROOT_SEGMENTS = ['ai', 'developers', 'gateways', 'orchestrators'];
const MANAGED_ROOT_SET = new Set(MANAGED_ROOT_SEGMENTS);
const ROOT_FALLBACK_REDIRECTS = Object.freeze(
  MANAGED_ROOT_SEGMENTS.flatMap((segment) => ([
    { source: `/${segment}`, destination: '/' },
    { source: `/${segment}/:slug*`, destination: '/' }
  ]))
);

const ROOT_EXACT_MAP = Object.freeze({
  '/ai/api-reference/overview': '/v1/ai/api-reference/overview',
  '/ai/builders/gateways': '/v1/ai/builders/gateways',
  '/developers/developer-guide': '/v1/developers/guides/overview',

  '/gateways/references/contract-addresses': '/v1/references/contract-addresses',
  '/gateways/run-a-gateway/install/docker-install': '/v1/gateways/guides/docker-install',
  '/gateways/run-a-gateway/install/linux-install': '/v1/gateways/guides/linux-install',
  '/gateways/run-a-gateway/install/windows-install': '/v1/gateways/guides/windows-install',
  '/gateways/run-a-gateway/requirements/on-chain setup/fund-gateway': '/v1/gateways/guides/fund-gateway',
  '/gateways/run-a-gateway/requirements/on-chain%20setup/fund-gateway': '/v1/gateways/guides/fund-gateway',
  '/gateways/run-a-gateway/requirements/on-chain setup/on-chain': '/v1/gateways/guides/fund-gateway',
  '/gateways/run-a-gateway/requirements/on-chain%20setup/on-chain': '/v1/gateways/guides/fund-gateway',
  '/gateways/run-a-gateway/test/playback-content': '/v1/gateways/guides/playback-content',
  '/gateways/run-a-gateway/test/publish-content': '/v1/gateways/guides/publish-content',
  '/gateways/run-a-gateway/transcoding': '/v1/gateways/guides/transcoding-options',

  '/orchestrators/advanced/earnings': '/v1/orchestrators/guides/configure-reward-calling',
  '/orchestrators/guides/feasibility/benchmarking': '/v1/orchestrators/guides/benchmark-transcoding',
  '/orchestrators/guides/feasibility/session-limits': '/v1/orchestrators/guides/set-session-limits',
  '/orchestrators/guides/staking/earnings': '/v1/orchestrators/guides/configure-reward-calling',
  '/orchestrators/guides/staking/governance': '/v1/orchestrators/guides/vote',
  '/orchestrators/guides/staking/payments': '/v1/orchestrators/guides/configure-reward-calling',
  '/orchestrators/guides/staking/rewards-and-fees': '/v1/orchestrators/guides/configure-reward-calling',
  '/orchestrators/resources/cli-flags': '/v1/references/go-livepeer/cli-reference',
  '/orchestrators/setting-up-an-orchestrator/connect-to-arbitrum': '/v1/orchestrators/guides/connect-to-arbitrum',
  '/orchestrators/setting-up-an-orchestrator/hardware-requirements': '/v1/references/go-livepeer/hardware-requirements',
  '/orchestrators/setting-up-an-orchestrator/install-go-livepeer': '/v1/orchestrators/guides/install-go-livepeer',
  '/orchestrators/setup/install-go-livepeer': '/v1/orchestrators/guides/install-go-livepeer'
});

function parseArgs(argv) {
  const args = {
    write: false,
    bootstrapManifest: false,
    repoRoot: process.cwd(),
    docsJson: DEFAULT_DOCS_JSON_REL,
    manifest: DEFAULT_MANIFEST_REL
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--write') {
      args.write = true;
      continue;
    }
    if (token === '--bootstrap-manifest') {
      args.bootstrapManifest = true;
      continue;
    }
    if (token === '--repo-root') {
      args.repoRoot = path.resolve(argv[index + 1] || args.repoRoot);
      index += 1;
      continue;
    }
    if (token === '--docs-json') {
      args.docsJson = argv[index + 1] || args.docsJson;
      index += 1;
      continue;
    }
    if (token === '--manifest') {
      args.manifest = argv[index + 1] || args.manifest;
      index += 1;
      continue;
    }
    if (token === '--help' || token === '-h') {
      printUsage();
      process.exit(0);
    }
  }

  args.docsJsonPath = path.resolve(args.repoRoot, args.docsJson);
  args.manifestPath = path.resolve(args.repoRoot, args.manifest);
  return args;
}

function printUsage() {
  console.log(
    [
      `Usage: node ${SCRIPT_REL} [flags]`,
      '',
      'Flags:',
      '  --write               Apply manifest and docs.json changes, and remove legacy generated fallback pages.',
      '  --bootstrap-manifest  Build manifest from the current root-level docs.json redirect sources.',
      '  --repo-root <path>    Override repo root for fixture testing.',
      '  --docs-json <path>    Override docs.json path relative to repo root.',
      '  --manifest <path>     Override manifest path relative to repo root.'
    ].join('\n')
  );
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readJsonFile(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJsonFile(filePath, value) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function walkMdxFiles(dirPath, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkMdxFiles(fullPath, out);
    } else if (/\.(md|mdx)$/i.test(entry.name)) {
      out.push(fullPath);
    }
  }
  return out;
}

function normalizeRoute(rawValue) {
  let value = String(rawValue || '').trim();
  if (!value.startsWith('/')) value = `/${value}`;
  value = value.replace(/\/+$/, '');
  return value || '/';
}

function isManagedRootSource(rawValue) {
  const value = normalizeRoute(rawValue);
  if (!value.startsWith('/')) return false;
  if (value === '/') return false;
  if (value.startsWith('/v1/') || value.startsWith('/v2/')) return false;
  if (isManagedRootCatchAllSource(value)) return false;
  if (value.includes('*')) return false;
  const first = value.slice(1).split('/')[0];
  return MANAGED_ROOT_SET.has(first);
}

function isManagedRootCatchAllSource(rawValue) {
  const value = normalizeRoute(rawValue);
  return ROOT_FALLBACK_REDIRECTS.some((entry) => entry.source === value);
}

function destinationExists(repoRoot, route) {
  return Boolean(resolveDocPath(route, repoRoot));
}

function resolveSameNameV1Route(repoRoot, prefix, slug) {
  const candidate = `${prefix}/${slug}`;
  if (destinationExists(repoRoot, candidate)) return candidate;
  return '';
}

function matchesAny(source, patterns) {
  return patterns.some((pattern) => pattern.test(source));
}

function mapGatewayRoute(source, repoRoot) {
  if (ROOT_EXACT_MAP[source]) return ROOT_EXACT_MAP[source];

  if (source.startsWith('/gateways/references/api-reference/AI-API/')) {
    const slug = source.split('/').filter(Boolean).pop();
    return resolveSameNameV1Route(repoRoot, '/v1/ai/api-reference', slug) || '/v1/ai/api-reference/overview';
  }

  if (source.startsWith('/gateways/references/api-reference/AI-Worker/')) {
    return '/v1/ai/orchestrators/ai-worker';
  }

  if (source.startsWith('/gateways/references/api-reference/CLI-HTTP/')) {
    return '/v1/references/go-livepeer/cli-reference';
  }

  if (source.startsWith('/gateways/references/go-livepeer/')) {
    const slug = source.split('/').filter(Boolean).pop();
    return resolveSameNameV1Route(repoRoot, '/v1/references/go-livepeer', slug) || '/v1/references/go-livepeer/cli-reference';
  }

  if (source.startsWith('/gateways/references/')) {
    return '/v1/references/go-livepeer/cli-reference';
  }

  if (source.startsWith('/gateways/run-a-gateway/')) {
    return '/v1/gateways/quick-start';
  }

  return '/v1/gateways/guides/gateway-overview';
}

function isAiWorkloadRoute(source) {
  return matchesAny(source, [
    /\/advanced\/ai-pipelines$/,
    /\/concepts\/ai-workloads$/,
    /\/guides\/ai-workloads\//,
    /\/batch-ai-/,
    /\/realtime-ai-/,
    /\/model-vram-reference$/,
    /\/x-ai$/,
    /\/x-batch-ai$/,
    /\/x-realtime-ai$/
  ]);
}

function mapOrchestratorRoute(source) {
  if (ROOT_EXACT_MAP[source]) return ROOT_EXACT_MAP[source];

  if (isAiWorkloadRoute(source)) {
    return '/v1/ai/orchestrators/get-started';
  }

  if (/\/gateway-introspection$/.test(source)) {
    return '/v1/orchestrators/guides/gateway-introspection';
  }

  if (/\/(?:prometheus-metrics|metrics)$/.test(source)) {
    return '/v1/orchestrators/guides/monitor-metrics';
  }

  if (/\/governance$|\/vote$/.test(source)) {
    return '/v1/orchestrators/guides/vote';
  }

  if (/\/benchmark(?:ing|-transcoding)$/.test(source)) {
    return '/v1/orchestrators/guides/benchmark-transcoding';
  }

  if (/\/session-limits$/.test(source)) {
    return '/v1/orchestrators/guides/set-session-limits';
  }

  if (/\/(earnings|payments|rewards-and-fees)$/.test(source)) {
    return '/v1/orchestrators/guides/configure-reward-calling';
  }

  if (/\/(hardware-requirements|hardware|feasibility-economics)$/.test(source)) {
    return '/v1/references/go-livepeer/hardware-requirements';
  }

  if (/\/(cli-flags|tooling)$/.test(source)) {
    return '/v1/references/go-livepeer/cli-reference';
  }

  if (/\/getting-delegates$/.test(source)) {
    return '/v1/orchestrators/guides/get-started';
  }

  if (
    source.startsWith('/orchestrators/get-started/')
    || source.startsWith('/orchestrators/setting-up-an-orchestrator/')
    || source.startsWith('/orchestrators/setup/')
    || source === '/orchestrators/tools-and-guides/guides'
    || /\/(join-a-pool|setup-paths)$/.test(source)
  ) {
    return '/v1/orchestrators/guides/get-started';
  }

  return '/v1/orchestrators/introduction';
}

function mapSourceToV1(source, repoRoot) {
  const normalized = normalizeRoute(source);

  if (ROOT_EXACT_MAP[normalized]) {
    return ROOT_EXACT_MAP[normalized];
  }

  if (normalized.startsWith('/gateways/')) {
    return mapGatewayRoute(normalized, repoRoot);
  }

  if (normalized.startsWith('/orchestrators/')) {
    return mapOrchestratorRoute(normalized);
  }

  if (normalized.startsWith('/ai/')) {
    throwIfUnknown(
      normalized,
      ['/ai/api-reference/overview', '/ai/builders/gateways'],
      'AI'
    );
  }

  if (normalized.startsWith('/developers/')) {
    throwIfUnknown(normalized, ['/developers/developer-guide'], 'developers');
  }

  throw new Error(`Unsupported managed root redirect source: ${normalized}`);
}

function throwIfUnknown(source, supportedSources, label) {
  if (!supportedSources.includes(source)) {
    throw new Error(`Unsupported ${label} root redirect source: ${source}`);
  }
  return ROOT_EXACT_MAP[source];
}

function collectManagedRootRedirectSources(docsJson) {
  const redirects = Array.isArray(docsJson?.redirects) ? docsJson.redirects : [];
  return redirects
    .map((entry) => normalizeRoute(entry && entry.source))
    .filter((source, index, values) => isManagedRootSource(source) && values.indexOf(source) === index)
    .sort((left, right) => left.localeCompare(right));
}

function buildManifestFromDocsJson(repoRoot, docsJson) {
  const sources = collectManagedRootRedirectSources(docsJson);
  if (sources.length === 0) {
    throw new Error('No managed root-level redirect sources found in docs.json.');
  }

  return sources.map((source) => {
    const destination = mapSourceToV1(source, repoRoot);
    if (!destination.startsWith('/v1/')) {
      throw new Error(`Mapped destination must stay inside /v1/: ${source} -> ${destination}`);
    }
    if (!destinationExists(repoRoot, destination)) {
      throw new Error(`Mapped destination does not resolve to a v1 page: ${source} -> ${destination}`);
    }
    return { source, destination };
  });
}

function validateManifest(repoRoot, manifest) {
  if (!Array.isArray(manifest)) {
    throw new Error('Manifest must be a JSON array.');
  }

  const seenSources = new Set();
  const seenDestinations = new Set();

  manifest.forEach((entry, index) => {
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
      throw new Error(`manifest[${index}] must be an object.`);
    }

    const source = normalizeRoute(entry.source);
    const destination = normalizeRoute(entry.destination);

    if (!isManagedRootSource(source)) {
      throw new Error(`manifest[${index}].source must be a managed root-level route: ${source}`);
    }
    if (!destination.startsWith('/v1/')) {
      throw new Error(`manifest[${index}].destination must begin with /v1/: ${destination}`);
    }
    if (source === destination) {
      throw new Error(`manifest[${index}] contains a self-redirect: ${source}`);
    }
    if (seenSources.has(source)) {
      throw new Error(`Duplicate manifest source: ${source}`);
    }

    seenSources.add(source);
    seenDestinations.add(destination);

    if (!destinationExists(repoRoot, destination)) {
      throw new Error(`Manifest destination does not resolve to an existing v1 doc: ${destination}`);
    }
  });

  return {
    sources: seenSources,
    destinations: seenDestinations
  };
}

function readManifest(manifestPath) {
  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Manifest not found: ${manifestPath}`);
  }
  return readJsonFile(manifestPath);
}

function getCompatibilityPageRel(source) {
  const normalized = normalizeRoute(source);
  return `${normalized.replace(/^\//, '')}.mdx`;
}

function isManagedGeneratedPage(rawContent) {
  const parsed = parseGeneratedHiddenBanner(String(rawContent || ''));
  return parsed.found && parsed.marker === GENERATED_MARKER;
}

function removeEmptyParentDirs(absPath, repoRoot) {
  let current = path.dirname(absPath);
  const root = path.resolve(repoRoot);

  while (current.startsWith(root) && current !== root) {
    const entries = fs.existsSync(current) ? fs.readdirSync(current) : [];
    if (entries.length > 0) break;
    fs.rmdirSync(current);
    current = path.dirname(current);
  }
}

function collectManagedGeneratedPages(repoRoot) {
  const pages = [];
  MANAGED_ROOT_SEGMENTS.forEach((segment) => {
    const rootDir = path.join(repoRoot, segment);
    walkMdxFiles(rootDir).forEach((absPath) => {
      const raw = fs.readFileSync(absPath, 'utf8');
      if (!isManagedGeneratedPage(raw)) return;
      pages.push(toPosix(path.relative(repoRoot, absPath)));
    });
  });
  return pages.sort((left, right) => left.localeCompare(right));
}

function cleanupLegacyFallbackPages(repoRoot, write) {
  const deleted = collectManagedGeneratedPages(repoRoot);
  if (write) {
    deleted.forEach((relPath) => {
      const absPath = path.join(repoRoot, relPath);
      fs.rmSync(absPath, { force: true });
      removeEmptyParentDirs(absPath, repoRoot);
    });
  }
  return { deleted };
}

function syncDocsJsonRedirects(docsJson, manifest) {
  const redirects = Array.isArray(docsJson?.redirects) ? docsJson.redirects : [];
  const unmanaged = redirects.filter(
    (entry) => !isManagedRootSource(entry && entry.source) && !isManagedRootCatchAllSource(entry && entry.source)
  );
  const managed = manifest.map((entry) => ({
    source: entry.source,
    destination: entry.destination
  }));
  const catchAll = ROOT_FALLBACK_REDIRECTS.map((entry) => ({ ...entry }));
  const nextRedirects = [...managed, ...unmanaged, ...catchAll];

  return {
    changed: JSON.stringify(redirects) !== JSON.stringify(nextRedirects),
    redirects: nextRedirects
  };
}

function applySync(args) {
  if (!fs.existsSync(args.docsJsonPath)) {
    throw new Error(`docs.json not found: ${args.docsJsonPath}`);
  }

  const docsJson = readJsonFile(args.docsJsonPath);
  const bootstrapManifest = args.bootstrapManifest
    ? buildManifestFromDocsJson(args.repoRoot, docsJson)
    : null;
  const manifest = bootstrapManifest || readManifest(args.manifestPath);
  validateManifest(args.repoRoot, manifest);

  const manifestChanged = bootstrapManifest
    ? !fs.existsSync(args.manifestPath) || fs.readFileSync(args.manifestPath, 'utf8') !== `${JSON.stringify(bootstrapManifest, null, 2)}\n`
    : false;

  const redirectSync = syncDocsJsonRedirects(docsJson, manifest);
  const cleanupSync = cleanupLegacyFallbackPages(args.repoRoot, args.write);

  if (args.write) {
    if (bootstrapManifest && manifestChanged) {
      writeJsonFile(args.manifestPath, bootstrapManifest);
    }
    if (redirectSync.changed) {
      docsJson.redirects = redirectSync.redirects;
      writeJsonFile(args.docsJsonPath, docsJson);
    }
  }

  const hasPendingChanges = Boolean(
    manifestChanged
    || redirectSync.changed
    || cleanupSync.deleted.length
  );

  return {
    manifest,
    manifestChanged,
    redirectChanged: redirectSync.changed,
    cleanupSync,
    hasPendingChanges
  };
}

function printSummary(result, write) {
  console.log(`Manifest entries: ${result.manifest.length}`);
  console.log(`docs.json root redirect block: ${result.redirectChanged ? (write ? 'updated' : 'out of sync') : 'in sync'}`);
  console.log(`root catch-all redirects enforced: ${ROOT_FALLBACK_REDIRECTS.length}`);
  console.log(`legacy fallback pages ${write ? 'removed' : 'pending removal'}=${result.cleanupSync.deleted.length}`);
}

function main(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);
  const result = applySync(args);
  printSummary(result, args.write);

  if (!args.write && result.hasPendingChanges) {
    process.exit(1);
  }
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  GENERATED_MARKER,
  DEFAULT_DOCS_JSON_REL,
  DEFAULT_MANIFEST_REL,
  MANAGED_ROOT_SEGMENTS,
  ROOT_FALLBACK_REDIRECTS,
  ROOT_EXACT_MAP,
  applySync,
  buildManifestFromDocsJson,
  cleanupLegacyFallbackPages,
  collectManagedGeneratedPages,
  collectManagedRootRedirectSources,
  getCompatibilityPageRel,
  isManagedRootCatchAllSource,
  isManagedGeneratedPage,
  isManagedRootSource,
  mapSourceToV1,
  normalizeRoute,
  parseArgs,
  syncDocsJsonRedirects,
  validateManifest
};
