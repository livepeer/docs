#!/usr/bin/env node
/**
 * @script            docs-fact-registry
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tools/scripts, tasks/research/claims, tests/unit/docs-fact-registry.test.js
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Docs fact registry validator — validates repo-native research claim registries and provides normalized claim-family data for the manual research runner.
 * @pipeline          manual — experimental research system
 * @usage             node tools/scripts/docs-fact-registry.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const DEFAULT_REGISTRY = 'tasks/research/claims';
const VALID_STATUSES = new Set([
  'verified',
  'conflicted',
  'time-sensitive',
  'unverified',
  'historical-only',
  'deprecated'
]);
const VALID_FRESHNESS = new Set([
  'stable',
  'review-on-change',
  'review-periodic',
  'volatile'
]);
const VALID_EVIDENCE_TYPES = new Set([
  'official-page',
  'repo-file',
  'repo-discord-signal',
  'github-repo',
  'github-issue',
  'github-pr',
  'github-release',
  'forum-topic'
]);

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function repoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

function usage() {
  console.log(
    [
      'Usage: node tools/scripts/docs-fact-registry.js [options]',
      '',
      'Options:',
      '  --registry <path>       Registry file or directory (default: tasks/research/claims)',
      '  --validate              Validate only',
      '  --domain <name>         Print normalized claim families for a single domain',
      '  --report-json <path>    Write normalized output to json',
      '  --quiet                 Suppress success logs',
      '  --help                  Show help'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const out = {
    registry: DEFAULT_REGISTRY,
    validate: false,
    domain: '',
    reportJson: '',
    quiet: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--help' || token === '-h') {
      out.help = true;
      continue;
    }
    if (token === '--registry') {
      out.registry = String(argv[i + 1] || '').trim() || out.registry;
      i += 1;
      continue;
    }
    if (token.startsWith('--registry=')) {
      out.registry = token.slice('--registry='.length).trim() || out.registry;
      continue;
    }
    if (token === '--validate') {
      out.validate = true;
      continue;
    }
    if (token === '--domain') {
      out.domain = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--domain=')) {
      out.domain = token.slice('--domain='.length).trim();
      continue;
    }
    if (token === '--report-json') {
      out.reportJson = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--report-json=')) {
      out.reportJson = token.slice('--report-json='.length).trim();
      continue;
    }
    if (token === '--quiet') {
      out.quiet = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (!out.validate && !out.domain && !out.reportJson) {
    out.validate = true;
  }

  return out;
}

function assertString(value, field) {
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`${field} must be a non-empty string`);
  }
  return value.trim();
}

function assertDate(value, field) {
  const normalized = assertString(value, field);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(normalized) || Number.isNaN(Date.parse(normalized))) {
    throw new Error(`${field} must be an ISO date (YYYY-MM-DD)`);
  }
  return normalized;
}

function normalizeStringArray(value, field) {
  if (!Array.isArray(value)) {
    throw new Error(`${field} must be an array`);
  }
  return [...new Set(value.map((entry) => assertString(entry, `${field}[]`)))].sort();
}

function readJson(absPath) {
  if (!fs.existsSync(absPath)) {
    throw new Error(`Registry not found: ${toPosix(path.relative(repoRoot(), absPath))}`);
  }
  try {
    return JSON.parse(fs.readFileSync(absPath, 'utf8'));
  } catch (error) {
    throw new Error(`Invalid registry JSON at ${toPosix(path.relative(repoRoot(), absPath))}: ${error.message}`);
  }
}

function listRegistryFiles(absPath) {
  if (!fs.existsSync(absPath)) {
    throw new Error(`Registry path not found: ${toPosix(path.relative(repoRoot(), absPath))}`);
  }
  const stat = fs.statSync(absPath);
  if (stat.isFile()) {
    return [absPath];
  }
  return fs
    .readdirSync(absPath)
    .filter((entry) => entry.endsWith('.json'))
    .map((entry) => path.join(absPath, entry))
    .sort();
}

function normalizeEvidenceRefs(value, field) {
  if (value == null) return [];
  if (!Array.isArray(value)) {
    throw new Error(`${field} must be an array`);
  }

  return value.map((entry, index) => {
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
      throw new Error(`${field}[${index}] must be an object`);
    }
    const type = assertString(entry.type, `${field}[${index}].type`);
    if (!VALID_EVIDENCE_TYPES.has(type)) {
      throw new Error(`${field}[${index}].type must be one of: ${Array.from(VALID_EVIDENCE_TYPES).join(', ')}`);
    }

    const normalized = {
      type,
      ref: assertString(entry.ref, `${field}[${index}].ref`)
    };

    if (entry.match_any != null) {
      normalized.match_any = normalizeStringArray(entry.match_any, `${field}[${index}].match_any`);
    } else {
      normalized.match_any = [];
    }

    return normalized;
  });
}

function normalizeClaimFamily(entry, fileLabel, index, seenClaimIds) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
    throw new Error(`${fileLabel} claim_families[${index}] must be an object`);
  }

  const claimId = assertString(entry.claim_id, `${fileLabel} claim_families[${index}].claim_id`);
  if (seenClaimIds.has(claimId)) {
    throw new Error(`Duplicate claim_id across registries: ${claimId}`);
  }
  seenClaimIds.add(claimId);

  const status = assertString(entry.status, `${fileLabel} claim_families[${index}].status`);
  if (!VALID_STATUSES.has(status)) {
    throw new Error(`${fileLabel} claim_families[${index}].status must be one of: ${Array.from(VALID_STATUSES).join(', ')}`);
  }

  const freshnessClass = assertString(
    entry.freshness_class,
    `${fileLabel} claim_families[${index}].freshness_class`
  );
  if (!VALID_FRESHNESS.has(freshnessClass)) {
    throw new Error(
      `${fileLabel} claim_families[${index}].freshness_class must be one of: ${Array.from(VALID_FRESHNESS).join(', ')}`
    );
  }

  return {
    claim_id: claimId,
    claim_family: assertString(entry.claim_family, `${fileLabel} claim_families[${index}].claim_family`),
    entity: assertString(entry.entity, `${fileLabel} claim_families[${index}].entity`),
    claim_summary: assertString(entry.claim_summary, `${fileLabel} claim_families[${index}].claim_summary`),
    canonical_owner: toPosix(
      assertString(entry.canonical_owner, `${fileLabel} claim_families[${index}].canonical_owner`)
    ),
    source_type: assertString(entry.source_type, `${fileLabel} claim_families[${index}].source_type`),
    source_ref: assertString(entry.source_ref, `${fileLabel} claim_families[${index}].source_ref`),
    evidence_date: assertDate(entry.evidence_date, `${fileLabel} claim_families[${index}].evidence_date`),
    status,
    freshness_class: freshnessClass,
    dependent_pages: normalizeStringArray(
      entry.dependent_pages || [],
      `${fileLabel} claim_families[${index}].dependent_pages`
    ).map(toPosix),
    related_claims: normalizeStringArray(
      entry.related_claims || [],
      `${fileLabel} claim_families[${index}].related_claims`
    ),
    last_reviewed_by: assertString(
      entry.last_reviewed_by,
      `${fileLabel} claim_families[${index}].last_reviewed_by`
    ),
    notes: assertString(entry.notes || 'n/a', `${fileLabel} claim_families[${index}].notes`),
    match_terms: normalizeStringArray(
      entry.match_terms || [],
      `${fileLabel} claim_families[${index}].match_terms`
    ),
    comparison_patterns: normalizeStringArray(
      entry.comparison_patterns || [],
      `${fileLabel} claim_families[${index}].comparison_patterns`
    ),
    evidence_refs: normalizeEvidenceRefs(
      entry.evidence_refs || [],
      `${fileLabel} claim_families[${index}].evidence_refs`
    )
  };
}

function normalizeRegistryFile(raw, fileLabel, seenClaimIds) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    throw new Error(`${fileLabel} must be a JSON object`);
  }
  const version = Number(raw.version);
  if (!Number.isInteger(version) || version <= 0) {
    throw new Error(`${fileLabel} version must be a positive integer`);
  }
  const domain = assertString(raw.domain, `${fileLabel}.domain`);
  if (!Array.isArray(raw.claim_families) || raw.claim_families.length === 0) {
    throw new Error(`${fileLabel}.claim_families must be a non-empty array`);
  }

  const claimFamilies = raw.claim_families.map((entry, index) =>
    normalizeClaimFamily(entry, fileLabel, index, seenClaimIds)
  );
  claimFamilies.sort((a, b) => a.claim_id.localeCompare(b.claim_id));

  return {
    version,
    domain,
    claim_families: claimFamilies
  };
}

function loadRegistry(args = {}) {
  const registryPath = path.resolve(repoRoot(), args.registry || DEFAULT_REGISTRY);
  const files = listRegistryFiles(registryPath);
  const seenClaimIds = new Set();
  const registries = files.map((file) =>
    normalizeRegistryFile(readJson(file), toPosix(path.relative(repoRoot(), file)), seenClaimIds)
  );
  registries.sort((a, b) => a.domain.localeCompare(b.domain));
  return registries;
}

function flattenClaimFamilies(registries) {
  return registries
    .flatMap((entry) => entry.claim_families.map((family) => ({ ...family, domain: entry.domain })))
    .sort((a, b) => a.claim_id.localeCompare(b.claim_id));
}

function buildReport(registries, domain) {
  const filtered = domain ? registries.filter((entry) => entry.domain === domain) : registries;
  if (domain && filtered.length === 0) {
    throw new Error(`Domain not found in registry set: ${domain}`);
  }

  return {
    domains: filtered.map((entry) => ({
      domain: entry.domain,
      claim_count: entry.claim_families.length
    })),
    claim_families: flattenClaimFamilies(filtered)
  };
}

function writeJson(absPath, value) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function run(args) {
  const registries = loadRegistry(args);
  const report = buildReport(registries, args.domain);

  if (args.reportJson) {
    writeJson(path.resolve(repoRoot(), args.reportJson), report);
  }

  if (!args.quiet) {
    const domainLabel = args.domain ? ` (${args.domain})` : '';
    console.log(
      `✅ docs-fact-registry: valid${domainLabel} with ${report.claim_families.length} claim family/families`
    );
  }
  return 0;
}

function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(`❌ ${error.message}`);
    usage();
    process.exit(1);
  }

  if (args.help) {
    usage();
    process.exit(0);
  }

  try {
    process.exit(run(args));
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  VALID_EVIDENCE_TYPES,
  VALID_FRESHNESS,
  VALID_STATUSES,
  buildReport,
  flattenClaimFamilies,
  loadRegistry,
  normalizeRegistryFile,
  parseArgs,
  run
};
