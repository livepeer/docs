#!/usr/bin/env node
/**
 * @script      generate-root-governance-artifacts
 * @type        
 * @concern     
 * @niche       
 * @purpose     governance:root-management
 * @description Generates root-governance projections from the canonical manifest, including .allowlist, the generated root map, and sync reports.
 * @mode        read-only
 * @pipeline    manual, P3
 * @scope       operations/scripts, operations/governance/config, tools/config/runtime, tools/lib/governance, docs-guide/repo-ops/config, workspace/reports/repo-ops, .allowlist
 * @usage       node operations/scripts/generators/governance/root/generate-root-governance-artifacts.js [--write|--check]
 * @policy      R-R14, R-R16, R-R17
 */

const fs = require('fs');
const path = require('path');
const {
  buildGeneratedFrontmatterLines,
  buildGeneratedHiddenBannerLines,
  buildGeneratedNoteLines
} = require('../../../../../tools/lib/governance/generated-file-banners');
const {
  getRepoRoot,
  getActiveEntries,
  getAllowlistEntries,
  getForbiddenEntries,
  getLocalCompatibilityEntries,
  getRequiredPublicArtifacts,
  readManifest,
  collectCurrentRootEntries,
  getTemporaryExceptionEntries
} = require('../../../../../tools/lib/governance/root-governance');

const REPO_ROOT = getRepoRoot();
const SCRIPT_PATH = 'operations/scripts/generators/governance/root/generate-root-governance-artifacts.js';
const MAP_TITLE = 'Root Governance Map';

function parseArgs(argv) {
  const args = { mode: 'write', help: false };
  let explicitModes = 0;

  argv.forEach((token) => {
    if (token === '--write') {
      args.mode = 'write';
      explicitModes += 1;
      return;
    }
    if (token === '--check') {
      args.mode = 'check';
      explicitModes += 1;
      return;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      return;
    }
    throw new Error(`Unknown argument: ${token}`);
  });

  if (explicitModes > 1) {
    throw new Error('Choose only one mode: --write or --check');
  }

  return args;
}

function printHelp() {
  console.log(
    [
      'Usage:',
      `  node ${SCRIPT_PATH} [--write|--check]`,
      '',
      'Modes:',
      '  --write    Generate .allowlist, the root-governance map, and sync reports.',
      '  --check    Fail when any generated root-governance output is stale.'
    ].join('\n')
  );
}

function normalizeContent(content) {
  return `${String(content || '').trim()}\n`;
}

function readRepoFile(repoPath) {
  return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
}

function formatMaybeCode(value) {
  const normalized = String(value || '').trim();
  return normalized ? `\`${normalized}\`` : 'n/a';
}

function formatDocRefs(docRefs) {
  return (docRefs || []).map((docRef) => `\`${docRef}\``).join('<br/>');
}

function toTable(headers, rows) {
  const lines = [`| ${headers.join(' | ')} |`, `| ${headers.map(() => '---').join(' | ')} |`];
  rows.forEach((row) => {
    lines.push(`| ${row.join(' | ')} |`);
  });
  return lines.join('\n');
}

function buildAllowlistContent(manifest = readManifest()) {
  const entries = getAllowlistEntries(manifest);
  return normalizeContent(
    [
      '# Generated from operations/governance/config/root-governance.json',
      '# Do not edit manually. Regenerate with:',
      `# node ${SCRIPT_PATH} --write`,
      '',
      ...entries
    ].join('\n')
  );
}

function buildRootInventoryRows(entries) {
  return entries.map((entry) => [
    formatMaybeCode(entry.path),
    entry.entry_type,
    entry.class,
    entry.owner,
    entry.root_basis,
    entry.lifecycle,
    formatMaybeCode(entry.generator || ''),
    formatDocRefs(entry.doc_refs),
    String(entry.notes || '').replace(/\|/g, '\\|')
  ]);
}

function buildPlacementRows(manifest) {
  return (manifest.placement_matrix || []).map((entry) => [
    formatMaybeCode(entry.surface),
    formatMaybeCode((entry.allowed_paths || []).join(', ')),
    String(entry.notes || '').replace(/\|/g, '\\|')
  ]);
}

function buildForbiddenRows(manifest) {
  return (manifest.forbidden_root_artifacts || []).map((entry) => [
    formatMaybeCode(entry.path),
    String(entry.reason || '').replace(/\|/g, '\\|')
  ]);
}

function buildPublicArtifactRows(manifest) {
  return getRequiredPublicArtifacts(manifest).map((entry) => [
    formatMaybeCode(entry.path),
    formatMaybeCode(entry.public_contract && entry.public_contract.url_path),
    String((entry.public_contract && entry.public_contract.purpose) || '').replace(/\|/g, '\\|'),
    formatMaybeCode(entry.generator || '')
  ]);
}

function buildLocalCompatibilityRows(manifest) {
  return (manifest.local_compatibility || []).map((entry) => [
    formatMaybeCode(entry.path),
    formatMaybeCode(entry.tracking_policy),
    String(entry.notes || '').replace(/\|/g, '\\|')
  ]);
}

function buildExceptionRows(manifest) {
  return getTemporaryExceptionEntries(manifest).map((entry) => [
    formatMaybeCode(entry.path),
    entry.class,
    entry.lifecycle,
    String(entry.notes || '').replace(/\|/g, '\\|')
  ]);
}

function buildRootGovernanceMapContent(manifest = readManifest()) {
  const activeEntries = getActiveEntries(manifest);
  const frontmatter = buildGeneratedFrontmatterLines({
    title: MAP_TITLE,
    sidebarTitle: 'Root Governance Map',
    description: 'Generated live inventory and taxonomy map for the governed repo root.',
    consumer: ['human', 'agent'],
    maintenance: 'generated',
    status: 'active',
    generator: SCRIPT_PATH,
    keywords: ['livepeer', 'root governance', 'allowlist', 'repo root', 'taxonomy', 'governance map'],
    keywordsStyle: 'multiline'
  });
  const banner = buildGeneratedHiddenBannerLines({
    script: SCRIPT_PATH,
    purpose: 'Generated root inventory, placement matrix, and forbidden-root contract from the canonical root-governance manifest.',
    runWhen: 'Root-governance manifest, docs, validator, or root inventory expectations change.',
    runCommand: `node ${SCRIPT_PATH} --write`
  });
  const note = buildGeneratedNoteLines({
    script: SCRIPT_PATH,
    purpose: 'Keep the live root inventory and placement matrix aligned with the canonical root-governance manifest.',
    runWhen: 'Root-governance manifest, docs, validator, or root inventory expectations change.',
    runCommand: `node ${SCRIPT_PATH} --write`
  });

  const sections = [
    ...frontmatter,
    '',
    ...banner,
    '',
    ...note,
    '',
    '# Root Governance Map',
    '',
    'This page is generated from `operations/governance/config/root-governance.json` and is the live reference for what may exist at repo root.',
    '',
    '## Governed Root Inventory',
    '',
    `Active governed root entries: ${activeEntries.length}.`,
    '',
    toTable(
      ['Path', 'Type', 'Class', 'Owner', 'Root basis', 'Lifecycle', 'Generator', 'Doc refs', 'Notes'],
      buildRootInventoryRows(activeEntries)
    ),
    '',
    '## Placement Matrix',
    '',
    toTable(['Surface', 'Allowed paths', 'Notes'], buildPlacementRows(manifest)),
    '',
    '## AI-First Public Root Artifacts',
    '',
    toTable(['Artifact', 'Public URL', 'Purpose', 'Generator'], buildPublicArtifactRows(manifest)),
    '',
    '## Forbidden Root Artifacts',
    '',
    toTable(['Path', 'Reason'], buildForbiddenRows(manifest)),
    '',
    '## Local Compatibility Entries',
    '',
    toTable(['Path', 'Tracking policy', 'Notes'], buildLocalCompatibilityRows(manifest)),
    '',
    '## Temporary Exceptions',
    ''
  ];

  const exceptionRows = buildExceptionRows(manifest);
  if (exceptionRows.length === 0) {
    sections.push('No temporary root exceptions are active.');
  } else {
    sections.push(toTable(['Path', 'Class', 'Lifecycle', 'Notes'], exceptionRows));
  }

  return normalizeContent(sections.join('\n'));
}

function buildSyncPayload(manifest = readManifest()) {
  const currentRootEntries = collectCurrentRootEntries(REPO_ROOT);
  const governedEntries = getAllowlistEntries(manifest);
  const localCompatibility = getLocalCompatibilityEntries(manifest);
  const forbiddenEntries = getForbiddenEntries(manifest);
  const currentSet = new Set(currentRootEntries);
  const governedSet = new Set(governedEntries);
  const localSet = new Set(localCompatibility);

  const unexpectedEntries = currentRootEntries.filter((entry) => !governedSet.has(entry) && !localSet.has(entry));
  const missingGovernedEntries = governedEntries.filter((entry) => !currentSet.has(entry));
  const forbiddenPresent = currentRootEntries.filter((entry) => forbiddenEntries.includes(entry));

  return {
    version: manifest.version,
    manifest_path: 'operations/governance/config/root-governance.json',
    generated_outputs: manifest.generated_outputs,
    counts: {
      governed_root_entries: governedEntries.length,
      current_root_entries: currentRootEntries.length,
      unexpected_entries: unexpectedEntries.length,
      missing_governed_entries: missingGovernedEntries.length,
      forbidden_present: forbiddenPresent.length
    },
    governed_root_entries: governedEntries,
    current_root_entries: currentRootEntries,
    unexpected_entries: unexpectedEntries,
    missing_governed_entries: missingGovernedEntries,
    forbidden_entries: forbiddenEntries,
    forbidden_present: forbiddenPresent,
    local_compatibility_entries: localCompatibility,
    temporary_exceptions: getTemporaryExceptionEntries(manifest).map((entry) => entry.path)
  };
}

function buildSyncReportJson(manifest = readManifest()) {
  return `${JSON.stringify(buildSyncPayload(manifest), null, 2)}\n`;
}

function buildSyncReportMarkdown(manifest = readManifest()) {
  const payload = buildSyncPayload(manifest);
  const sections = [
    '# Root Governance Sync Report',
    '',
    `Manifest: \`${payload.manifest_path}\``,
    '',
    `Governed root entries: ${payload.counts.governed_root_entries}`,
    `Current root entries: ${payload.counts.current_root_entries}`,
    `Unexpected entries: ${payload.counts.unexpected_entries}`,
    `Missing governed entries: ${payload.counts.missing_governed_entries}`,
    `Forbidden entries present: ${payload.counts.forbidden_present}`,
    '',
    '## Unexpected Root Entries',
    ''
  ];

  sections.push(
    payload.unexpected_entries.length
      ? payload.unexpected_entries.map((entry) => `- \`${entry}\``).join('\n')
      : 'None.'
  );
  sections.push('', '## Missing Governed Entries', '');
  sections.push(
    payload.missing_governed_entries.length
      ? payload.missing_governed_entries.map((entry) => `- \`${entry}\``).join('\n')
      : 'None.'
  );
  sections.push('', '## Forbidden Entries Present', '');
  sections.push(
    payload.forbidden_present.length
      ? payload.forbidden_present.map((entry) => `- \`${entry}\``).join('\n')
      : 'None.'
  );
  sections.push('', '## Local Compatibility Entries', '');
  sections.push(
    payload.local_compatibility_entries.length
      ? payload.local_compatibility_entries.map((entry) => `- \`${entry}\``).join('\n')
      : 'None.'
  );

  return normalizeContent(sections.join('\n'));
}

function buildExpectedOutputs(manifest = readManifest()) {
  return {
    [manifest.generated_outputs.allowlist]: buildAllowlistContent(manifest),
    [manifest.generated_outputs.map_doc]: buildRootGovernanceMapContent(manifest),
    [manifest.generated_outputs.sync_report_json]: buildSyncReportJson(manifest),
    [manifest.generated_outputs.sync_report_md]: buildSyncReportMarkdown(manifest)
  };
}

function ensureParentDir(repoPath) {
  fs.mkdirSync(path.dirname(path.join(REPO_ROOT, repoPath)), { recursive: true });
}

function writeOutputs(outputs) {
  Object.entries(outputs).forEach(([repoPath, content]) => {
    ensureParentDir(repoPath);
    fs.writeFileSync(path.join(REPO_ROOT, repoPath), content, 'utf8');
  });
}

function checkOutputs(outputs) {
  const stale = [];
  Object.entries(outputs).forEach(([repoPath, expectedContent]) => {
    const absPath = path.join(REPO_ROOT, repoPath);
    if (!fs.existsSync(absPath)) {
      stale.push(`${repoPath} is missing.`);
      return;
    }
    const currentContent = normalizeContent(readRepoFile(repoPath));
    if (currentContent !== expectedContent) {
      stale.push(`${repoPath} is stale.`);
    }
  });
  return stale;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    process.exit(0);
  }

  const manifest = readManifest(REPO_ROOT);
  const outputs = buildExpectedOutputs(manifest);
  if (args.mode === 'write') {
    writeOutputs(outputs);
    console.log('Wrote root governance artifacts.');
    process.exit(0);
  }

  const stale = checkOutputs(outputs);
  if (stale.length > 0) {
    stale.forEach((entry) => console.error(entry));
    console.error(`Run: node ${SCRIPT_PATH} --write`);
    process.exit(1);
  }

  console.log('Root governance artifacts are up to date.');
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`generate-root-governance-artifacts failed: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  MAP_TITLE,
  SCRIPT_PATH,
  buildAllowlistContent,
  buildRootGovernanceMapContent,
  buildSyncPayload,
  buildSyncReportJson,
  buildSyncReportMarkdown,
  buildExpectedOutputs
};
