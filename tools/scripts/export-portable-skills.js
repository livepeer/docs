#!/usr/bin/env node
/**
 * @script            export-portable-skills
 * @category          generator
 * @purpose           governance:agent-governance
 * @scope             tools/scripts, ai-tools/ai-skills/templates, ai-tools/agent-packs, tools/lib/codex-skill-templates.js, tests/unit/export-portable-skills.test.js
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Portable skills exporter — copies canonical template skills into cross-agent pack folders and validates drift.
 * @pipeline          manual — not yet in pipeline
 * @dualmode          --write (generator) | --check (validator)
 * @usage             node tools/scripts/export-portable-skills.js --write|--check [--skills name[,name...]]
 */

const fs = require('fs');
const path = require('path');
const {
  RESOURCE_BUNDLES,
  collectResourceEntries,
  discoverTemplates,
  parseSkillsList,
  selectTemplates,
  toPosix
} = require('../lib/codex-skill-templates');

const REPO_ROOT = process.cwd();
const DEFAULT_SOURCE_DIR = 'ai-tools/ai-skills/templates';
const DEFAULT_OUTPUT_DIR = 'ai-tools/agent-packs/skills';
const SUPPORTED_AGENTS = ['codex', 'cursor', 'claude', 'windsurf'];

function usage() {
  const msg = [
    'Usage: node tools/scripts/export-portable-skills.js [options]',
    '',
    'Options:',
    '  --source-dir <path>     Canonical template directory',
    '  --output-dir <path>     Destination directory for portable skill packs',
    '  --skills <a,b,c>        Optional subset by template frontmatter name',
    '  --write                 Write/update pack outputs',
    '  --check                 Validation-only mode (no writes; fails on drift)',
    '  --help                  Show this message',
    '',
    'Optional companion bundle directories:',
    ...RESOURCE_BUNDLES.map((bundle) => {
      const source = `<template-stem>${bundle.sourceSuffix}/`;
      return `  ${source.padEnd(28, ' ')} -> export to pack ${bundle.destDir}/`;
    })
  ];
  console.log(msg.join('\n'));
}

function parseArgs(argv) {
  const out = {
    sourceDir: path.resolve(REPO_ROOT, DEFAULT_SOURCE_DIR),
    outputDir: path.resolve(REPO_ROOT, DEFAULT_OUTPUT_DIR),
    skills: null,
    write: false,
    check: false,
    help: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--help' || token === '-h') {
      out.help = true;
      continue;
    }
    if (token === '--source-dir') {
      out.sourceDir = path.resolve(REPO_ROOT, String(argv[i + 1] || '').trim());
      i += 1;
      continue;
    }
    if (token.startsWith('--source-dir=')) {
      out.sourceDir = path.resolve(REPO_ROOT, token.slice('--source-dir='.length).trim());
      continue;
    }
    if (token === '--output-dir') {
      out.outputDir = path.resolve(REPO_ROOT, String(argv[i + 1] || '').trim());
      i += 1;
      continue;
    }
    if (token.startsWith('--output-dir=')) {
      out.outputDir = path.resolve(REPO_ROOT, token.slice('--output-dir='.length).trim());
      continue;
    }
    if (token === '--skills') {
      out.skills = parseSkillsList(argv[i + 1] || '');
      i += 1;
      continue;
    }
    if (token.startsWith('--skills=')) {
      out.skills = parseSkillsList(token.slice('--skills='.length));
      continue;
    }
    if (token === '--write') {
      out.write = true;
      continue;
    }
    if (token === '--check') {
      out.check = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (!out.help && !out.write && !out.check) {
    out.write = true;
  }

  if (out.write && out.check) {
    throw new Error('Choose only one mode: --write or --check');
  }

  return out;
}

function readExisting(filePathAbs) {
  if (!fs.existsSync(filePathAbs)) return null;
  return fs.readFileSync(filePathAbs);
}

function computeFileOp(expected, existing) {
  const expectedBuffer = Buffer.isBuffer(expected) ? expected : Buffer.from(String(expected), 'utf8');
  if (existing === null) return 'create';
  if (!expectedBuffer.equals(existing)) return 'update';
  return 'unchanged';
}

function repoOrAbs(filePathAbs) {
  const relative = path.relative(REPO_ROOT, filePathAbs);
  if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) {
    return toPosix(filePathAbs);
  }
  return toPosix(relative);
}

function formatPlannedFile(relPath, op) {
  if (op === 'create') return `create ${relPath}`;
  if (op === 'update') return `update ${relPath}`;
  return `keep   ${relPath}`;
}

function listOutputFiles(dirAbs, relativePrefix = '') {
  if (!fs.existsSync(dirAbs) || !fs.statSync(dirAbs).isDirectory()) return [];

  const entries = fs.readdirSync(dirAbs, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
  const files = [];

  entries.forEach((entry) => {
    const entryAbs = path.join(dirAbs, entry.name);
    const entryRel = relativePrefix ? path.posix.join(relativePrefix, entry.name) : entry.name;
    if (entry.isDirectory()) {
      files.push(...listOutputFiles(entryAbs, entryRel));
      return;
    }
    if (!entry.isFile()) {
      throw new Error(`${repoOrAbs(entryAbs)}: unsupported portable-skill output entry type`);
    }
    files.push(toPosix(entryRel));
  });

  return files;
}

function removeFileAndEmptyParents(filePathAbs, skillDir) {
  if (fs.existsSync(filePathAbs)) {
    fs.rmSync(filePathAbs, { force: true });
  }

  let currentDir = path.dirname(filePathAbs);
  const root = path.resolve(skillDir);

  while (currentDir.startsWith(root) && currentDir !== root) {
    if (!fs.existsSync(currentDir)) {
      currentDir = path.dirname(currentDir);
      continue;
    }
    if (fs.readdirSync(currentDir).length > 0) break;
    fs.rmdirSync(currentDir);
    currentDir = path.dirname(currentDir);
  }
}

function buildManifestEntries(templates, options) {
  return templates.map((template) => ({
    name: template.name,
    description: template.description,
    source_template: template.templatePathRel,
    pack_path: repoOrAbs(path.join(options.outputDir, template.name, 'SKILL.md')),
    supported_agents: SUPPORTED_AGENTS
  }));
}

function normalizeManifestForCompare(raw) {
  let parsed;
  try {
    parsed = JSON.parse(String(raw || ''));
  } catch (_error) {
    return null;
  }

  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    return null;
  }

  const clone = {
    source_dir: parsed.source_dir || '',
    skills: Array.isArray(parsed.skills) ? parsed.skills : []
  };

  return JSON.stringify(clone, null, 2);
}

function buildManifestContent(templates, options, existingRaw) {
  const basePayload = {
    source_dir: repoOrAbs(options.sourceDir),
    skills: buildManifestEntries(templates, options)
  };

  const existingComparable = normalizeManifestForCompare(existingRaw);
  const expectedComparable = JSON.stringify(basePayload, null, 2);

  if (existingRaw !== null && existingComparable === expectedComparable) {
    return {
      content: existingRaw,
      comparableChanged: false
    };
  }

  return {
    content: `${JSON.stringify(
      {
        generated_at: new Date().toISOString(),
        ...basePayload
      },
      null,
      2
    )}\n`,
    comparableChanged: true
  };
}

function planSkillOutputs(templates, options) {
  return templates.map((template) => {
    const skillDir = path.join(options.outputDir, template.name);
    const expectedFiles = [
      {
        relPath: 'SKILL.md',
        expected: template.content
      },
      ...collectResourceEntries(template).map((entry) => ({
        relPath: entry.relPath,
        expected: entry.expected
      }))
    ];

    const fileOps = expectedFiles.map((entry) => {
      const absPath = path.join(skillDir, entry.relPath);
      const existing = readExisting(absPath);
      return {
        relPath: entry.relPath,
        absPath,
        expected: entry.expected,
        op: computeFileOp(entry.expected, existing)
      };
    });

    const expectedSet = new Set(expectedFiles.map((entry) => entry.relPath));
    const staleFiles = listOutputFiles(skillDir).filter((relPath) => !expectedSet.has(relPath)).sort();
    const drift = fileOps.some((entry) => entry.op !== 'unchanged') || staleFiles.length > 0;
    const created = fileOps.some((entry) => entry.relPath === 'SKILL.md' && entry.op === 'create');

    return {
      name: template.name,
      dirPath: skillDir,
      relDirPath: repoOrAbs(skillDir),
      status: created ? 'created' : drift ? 'updated' : 'unchanged',
      drift,
      fileOps,
      staleFiles
    };
  });
}

function listStaleSkillDirs(options, selectedNames) {
  if (options.skills && options.skills.length > 0) return [];
  if (!fs.existsSync(options.outputDir) || !fs.statSync(options.outputDir).isDirectory()) return [];

  return fs
    .readdirSync(options.outputDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !selectedNames.has(name))
    .map((name) => ({
      name,
      path: path.join(options.outputDir, name),
      relPath: repoOrAbs(path.join(options.outputDir, name))
    }));
}

function printConfig(options, templates, selected) {
  console.log(`source_dir=${repoOrAbs(options.sourceDir)}`);
  console.log(`output_dir=${repoOrAbs(options.outputDir)}`);
  console.log(`templates_discovered=${templates.length}`);
  console.log(`templates_selected=${selected.length}`);
  console.log(`mode=${options.check ? 'check' : 'write'}`);
}

function printResultLines(skillPlans, manifestPlan, staleDirs, options) {
  skillPlans.forEach((plan) => {
    const label = options.check ? (plan.drift ? 'drift' : 'ok') : 'write';
    console.log(`${label}: ${plan.name}`);
    plan.fileOps.forEach((entry) => {
      console.log(`  ${formatPlannedFile(toPosix(path.posix.join(plan.name, entry.relPath)), entry.op)}`);
    });
    plan.staleFiles.forEach((relPath) => {
      console.log(`  remove ${toPosix(path.posix.join(plan.name, relPath))}`);
    });
  });

  const manifestLabel = options.check ? (manifestPlan.op === 'unchanged' ? 'ok' : 'drift') : 'write';
  console.log(`${manifestLabel}: manifest`);
  console.log(`  ${formatPlannedFile(manifestPlan.relPath, manifestPlan.op)}`);

  staleDirs.forEach((entry) => {
    const staleLabel = options.check ? 'drift' : 'write';
    console.log(`${staleLabel}: stale`);
    console.log(`  remove ${entry.relPath}`);
  });
}

function summarize(skillPlans, manifestPlan, staleDirs, options) {
  const summary = {
    created: 0,
    updated: 0,
    unchanged: 0,
    removed: staleDirs.length,
    drift: 0
  };

  skillPlans.forEach((plan) => {
    summary[plan.status] += 1;
  });

  if (manifestPlan.op === 'create') summary.created += 1;
  if (manifestPlan.op === 'update') summary.updated += 1;
  if (manifestPlan.op === 'unchanged') summary.unchanged += 1;

  if (options.check) {
    summary.drift =
      skillPlans.filter((plan) => plan.drift).length +
      (manifestPlan.op !== 'unchanged' ? 1 : 0) +
      staleDirs.length;
  }

  console.log('---');
  console.log(`created=${summary.created}`);
  console.log(`updated=${summary.updated}`);
  console.log(`unchanged=${summary.unchanged}`);
  console.log(`removed=${summary.removed}`);
  if (options.check) {
    console.log(`drift=${summary.drift}`);
  }

  return summary;
}

function writeOutputs(skillPlans, manifestPlan, staleDirs) {
  fs.mkdirSync(path.dirname(manifestPlan.path), { recursive: true });

  skillPlans.forEach((plan) => {
    fs.mkdirSync(plan.dirPath, { recursive: true });
    plan.fileOps.forEach((entry) => {
      if (entry.op === 'unchanged') return;
      fs.mkdirSync(path.dirname(entry.absPath), { recursive: true });
      fs.writeFileSync(entry.absPath, entry.expected);
    });
    plan.staleFiles.forEach((relPath) => {
      removeFileAndEmptyParents(path.join(plan.dirPath, relPath), plan.dirPath);
    });
  });

  if (manifestPlan.op !== 'unchanged') {
    fs.writeFileSync(manifestPlan.path, manifestPlan.expected, 'utf8');
  }

  staleDirs.forEach((entry) => {
    fs.rmSync(entry.path, { recursive: true, force: true });
  });
}

function run(options) {
  const templates = discoverTemplates(options.sourceDir, { repoRoot: REPO_ROOT });
  const selected = selectTemplates(templates, options.skills);
  const selectedNames = new Set(selected.map((template) => template.name));

  const skillPlans = planSkillOutputs(selected, options);
  const staleDirs = listStaleSkillDirs(options, selectedNames);
  const manifestPath = path.join(options.outputDir, 'manifest.json');
  const existingManifest = readExisting(manifestPath);
  const manifestOutput = buildManifestContent(selected, options, existingManifest);
  const manifestPlan = {
    path: manifestPath,
    relPath: repoOrAbs(manifestPath),
    expected: manifestOutput.content,
    op: computeFileOp(manifestOutput.content, existingManifest)
  };

  printConfig(options, templates, selected);
  printResultLines(skillPlans, manifestPlan, staleDirs, options);

  if (!options.check) {
    writeOutputs(skillPlans, manifestPlan, staleDirs);
  }

  const summary = summarize(skillPlans, manifestPlan, staleDirs, options);
  if (options.check && summary.drift > 0) return 1;
  return 0;
}

function main() {
  let options;
  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(`❌ ${error.message}`);
    usage();
    process.exit(1);
  }

  if (options.help) {
    usage();
    process.exit(0);
  }

  try {
    process.exit(run(options));
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  SUPPORTED_AGENTS,
  buildManifestEntries,
  parseArgs,
  run
};
