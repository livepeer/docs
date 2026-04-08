#!/usr/bin/env node
/**
 * @script      generate-ai-tools-registry-artifacts
 * @type        
 * @concern     
 * @niche       
 * @purpose     governance:agent-governance
 * @description Keep ai-tools/registry/ai-tools-registry.json aligned with live skill/template/export files so ownerless governance coverage stays complete.
 * @mode        read-only
 * @pipeline    manual -- bounded registry sync
 * @scope       operations/scripts, ai-tools/registry, ai-tools/ai-skills/templates, ai-tools/ai-skills, ai-tools/agent-packs/skills, tools/lib/ai/ai-tools-registry.js, operations/tests/unit/ai-tools-registry.test.js
 * @usage       node operations/scripts/generators/governance/catalogs/generate-ai-tools-registry-artifacts.js [--write|--check]
 * @policy      R-R14, R-R29
 */

'use strict';

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const REGISTRY_PATH = 'ai-tools/registry/ai-tools-registry.json';
const TEMPLATE_ROOT = 'ai-tools/ai-skills/templates';
const LOCAL_SKILLS_ROOT = 'ai-tools/ai-skills';
const EXPORT_SKILLS_ROOT = 'ai-tools/agent-packs/skills';

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function normalizeRepoPath(value) {
  return toPosix(String(value || '').trim()).replace(/^\.\//, '');
}

function readJson(repoPath) {
  return JSON.parse(fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8'));
}

function writeJson(repoPath, value) {
  fs.writeFileSync(path.join(REPO_ROOT, repoPath), `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function listTrackedFiles(root, predicate) {
  const normalizedRoot = normalizeRepoPath(root);
  const output = execSync('git ls-files --cached --others --exclude-standard', {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });

  return output
    .split('\n')
    .map((line) => normalizeRepoPath(line))
    .filter(Boolean)
    .filter((repoPath) => repoPath === normalizedRoot || repoPath.startsWith(`${normalizedRoot}/`))
    .filter((repoPath) => predicate(repoPath))
    .sort((left, right) => left.localeCompare(right));
}

function buildArtifactId(repoPath) {
  return normalizeRepoPath(repoPath)
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function buildTemplateArtifact(repoPath) {
  return {
    id: buildArtifactId(repoPath),
    path: repoPath,
    artifact_type: 'skill-template',
    category: 'ai-skills-templates',
    lifecycle_state: 'canonical-template',
    current_lane: 'templates',
    target_lane: 'templates',
    canonical_source: ['ai-tools/ai-skills/templates/*.template.md'],
    derived_outputs: ['ai-tools/agent-packs/skills/**', '~/.codex/skills/**'],
    runtime_targets: ['portable skill export', 'codex local sync'],
    validators: [
      'operations/tests/unit/skill-docs.test.js',
      'operations/tests/unit/export-portable-skills.test.js',
      'operations/tests/unit/codex-skill-sync.test.js'
    ],
    repair_commands: [
      'node operations/scripts/integrators/ai/agents/export-portable-skills.js --write',
      'node operations/scripts/integrators/ai/agents/sync-codex-skills.js'
    ],
    catalog_group: 'ai-skills/templates',
    status: 'canonical-active',
    migration_wave: 'wave-2',
    notes: 'Canonical template-first skill source for the portable/synced skill lifecycle.'
  };
}

function buildExportArtifact(repoPath) {
  return {
    id: buildArtifactId(repoPath),
    path: repoPath,
    artifact_type: 'portable-skill',
    category: 'agent-packs-skills',
    lifecycle_state: 'portable-export',
    current_lane: 'exports',
    target_lane: 'exports',
    canonical_source: ['ai-tools/ai-skills/templates/*.template.md'],
    derived_outputs: ['ai-tools/agent-packs/skills/**'],
    runtime_targets: ['Codex', 'Cursor', 'Claude', 'Windsurf'],
    validators: ['operations/tests/unit/export-portable-skills.test.js'],
    repair_commands: ['node operations/scripts/integrators/ai/agents/export-portable-skills.js --write'],
    catalog_group: 'agent-packs/skills',
    status: 'generated-active',
    migration_wave: 'wave-2',
    notes: 'Portable SKILL.md exports derived from canonical templates.'
  };
}

function buildLocalSkillArtifact(repoPath) {
  return {
    id: buildArtifactId(repoPath),
    path: repoPath,
    artifact_type: 'skill-root',
    category: 'ai-skills-local',
    lifecycle_state: 'local-synced',
    current_lane: 'local',
    target_lane: 'local',
    canonical_source: ['ai-tools/ai-skills/*/SKILL.md'],
    derived_outputs: [],
    runtime_targets: ['repo-local skill use'],
    validators: ['operations/tests/unit/skill-docs.test.js'],
    repair_commands: ['node operations/scripts/integrators/ai/agents/sync-codex-skills.js --check'],
    catalog_group: 'ai-skills/local-skills',
    status: 'canonical-active',
    migration_wave: 'wave-3',
    notes: 'Repo-local SKILL.md file for use via skill loading.'
  };
}

function collectMissingArtifacts(registry) {
  const existingPaths = new Set((registry.artifacts || []).map((artifact) => normalizeRepoPath(artifact.path)));
  const additions = [];

  listTrackedFiles(TEMPLATE_ROOT, (repoPath) => repoPath.endsWith('.template.md')).forEach((repoPath) => {
    if (!existingPaths.has(repoPath)) additions.push(buildTemplateArtifact(repoPath));
  });

  listTrackedFiles(EXPORT_SKILLS_ROOT, (repoPath) => repoPath.endsWith('/SKILL.md')).forEach((repoPath) => {
    if (!existingPaths.has(repoPath)) additions.push(buildExportArtifact(repoPath));
  });

  listTrackedFiles(LOCAL_SKILLS_ROOT, (repoPath) => /^ai-tools\/ai-skills\/[^/]+\/SKILL\.md$/.test(repoPath)).forEach((repoPath) => {
    if (!existingPaths.has(repoPath)) additions.push(buildLocalSkillArtifact(repoPath));
  });

  return additions.sort((left, right) => left.path.localeCompare(right.path));
}

function buildNextRegistry(registry) {
  const trackedTemplatePaths = new Set(
    listTrackedFiles(TEMPLATE_ROOT, (repoPath) => repoPath.endsWith('.template.md'))
  );
  const trackedExportPaths = new Set(
    listTrackedFiles(EXPORT_SKILLS_ROOT, (repoPath) => repoPath.endsWith('/SKILL.md'))
  );
  const trackedLocalSkillPaths = new Set(
    listTrackedFiles(LOCAL_SKILLS_ROOT, (repoPath) => /^ai-tools\/ai-skills\/[^/]+\/SKILL\.md$/.test(repoPath))
  );
  const additions = collectMissingArtifacts(registry);
  const removals = [];

  const keptArtifacts = (registry.artifacts || []).filter((artifact) => {
    const repoPath = normalizeRepoPath(artifact.path);
    if (repoPath.startsWith('ai-tools/ai-skills/templates/') && repoPath.endsWith('.template.md')) {
      const keep = trackedTemplatePaths.has(repoPath);
      if (!keep) removals.push(repoPath);
      return keep;
    }
    if (repoPath.startsWith('ai-tools/agent-packs/skills/') && repoPath.endsWith('/SKILL.md')) {
      const keep = trackedExportPaths.has(repoPath);
      if (!keep) removals.push(repoPath);
      return keep;
    }
    if (/^ai-tools\/ai-skills\/[^/]+\/SKILL\.md$/.test(repoPath)) {
      const keep = trackedLocalSkillPaths.has(repoPath);
      if (!keep) removals.push(repoPath);
      return keep;
    }
    return true;
  });

  if (additions.length === 0 && removals.length === 0) {
    return { registry, additions, removals };
  }

  const nextRegistry = {
    ...registry,
    artifacts: [...keptArtifacts, ...additions].sort((left, right) =>
      String(left.path || '').localeCompare(String(right.path || ''))
    )
  };

  return { registry: nextRegistry, additions, removals };
}

function parseArgs(argv) {
  const args = { mode: 'write' };
  let explicitModeCount = 0;

  argv.forEach((token) => {
    if (token === '--write') {
      args.mode = 'write';
      explicitModeCount += 1;
      return;
    }
    if (token === '--check') {
      args.mode = 'check';
      explicitModeCount += 1;
      return;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      return;
    }
    throw new Error(`Unknown argument: ${token}`);
  });

  if (explicitModeCount > 1) {
    throw new Error('Choose only one mode: --write or --check');
  }

  return args;
}

function printHelp() {
  console.log(
    [
      'Usage: node operations/scripts/generators/governance/catalogs/generate-ai-tools-registry-artifacts.js [--write|--check]',
      '',
      'Modes:',
      '  --write   Add any missing AI-tools registry artifacts discovered from the live filesystem',
      '  --check   Exit non-zero when missing artifacts would be added'
    ].join('\n')
  );
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  const currentRegistry = readJson(REGISTRY_PATH);
  const result = buildNextRegistry(currentRegistry);

  if (args.mode === 'check') {
    if (result.additions.length > 0) {
      console.error(`Registry drift detected. Missing ${result.additions.length} AI-tools registry artifact(s):`);
      result.additions.forEach((artifact) => console.error(`- ${artifact.path}`));
    }
    if (result.removals.length > 0) {
      console.error(`Registry drift detected. Non-tracked managed artifact(s) would be removed:`);
      result.removals.forEach((repoPath) => console.error(`- ${repoPath}`));
    }
    if (result.additions.length > 0 || result.removals.length > 0) process.exit(1);
    console.log('AI-tools registry artifacts are current.');
    return;
  }

  if (result.additions.length === 0 && result.removals.length === 0) {
    console.log('AI-tools registry artifacts already current.');
    return;
  }

  writeJson(REGISTRY_PATH, result.registry);
  console.log(
    `Synced ${REGISTRY_PATH}: ${result.additions.length} added, ${result.removals.length} removed`
  );
}

if (require.main === module) {
  main();
}

module.exports = {
  buildArtifactId,
  buildExportArtifact,
  buildLocalSkillArtifact,
  buildNextRegistry,
  buildTemplateArtifact,
  collectMissingArtifacts
};
