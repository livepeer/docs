#!/usr/bin/env node
/**
 * @script            sync-codex-skills
 * @category          automation
 * @purpose           governance:agent-governance
 * @scope             tools/scripts, ai-tools/ai-skills/templates, tests/unit/codex-skill-sync.test.js
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Codex skills sync — synchronises skill definition files and managed companion resources between canonical templates and local Codex installs. Supports --check mode.
 * @pipeline          manual — not yet in pipeline
 * @usage             node tools/scripts/sync-codex-skills.js [flags]
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const {
  discoverTemplates,
  parseSkillsList,
  selectTemplates,
  toPosix
} = require('../lib/codex-skill-templates');

const REPO_ROOT = process.cwd();
const DEFAULT_SOURCE_DIR = 'ai-tools/ai-skills/templates';
const MANIFEST_FILE = '.codex-sync-manifest.json';

const RESOURCE_BUNDLES = [
  {
    key: 'references',
    sourceSuffix: '.references',
    destDir: 'references'
  },
  {
    key: 'scripts',
    sourceSuffix: '.scripts',
    destDir: 'scripts'
  },
  {
    key: 'assets',
    sourceSuffix: '.assets',
    destDir: 'assets'
  }
];

const ACRONYMS = new Set([
  'GH',
  'MCP',
  'API',
  'CI',
  'CLI',
  'LLM',
  'PDF',
  'PR',
  'UI',
  'URL',
  'SQL',
  'SEO',
  'MDX',
  'WCAG',
  'LPD',
  'N8N'
]);
const BRANDS = new Map([
  ['openai', 'OpenAI'],
  ['openapi', 'OpenAPI'],
  ['github', 'GitHub'],
  ['mintlify', 'Mintlify'],
  ['codex', 'Codex'],
  ['cspell', 'cspell']
]);
const SMALL_WORDS = new Set(['and', 'or', 'to', 'up', 'with', 'of', 'for']);

function usage() {
  const msg = [
    'Usage: node tools/scripts/sync-codex-skills.js [options]',
    '',
    'Options:',
    '  --source-dir <path>     Canonical template directory',
    '  --dest <path>           Destination Codex skills directory',
    '  --check                 Validation-only mode (no writes; fails on drift)',
    '  --dry-run               Print planned changes without writing',
    '  --skills <a,b,c>        Optional subset by template frontmatter name',
    '  --openai-yaml           Generate/open update agents/openai.yaml (default)',
    '  --no-openai-yaml        Skip agents/openai.yaml generation',
    '  --help                  Show this message',
    '',
    'Optional companion bundle directories:',
    '  <template-stem>.references/  -> sync to skill references/',
    '  <template-stem>.scripts/     -> sync to skill scripts/',
    '  <template-stem>.assets/      -> sync to skill assets/'
  ];
  console.log(msg.join('\n'));
}

function resolveDefaultDest() {
  const codexHome = String(process.env.CODEX_HOME || '').trim();
  if (codexHome) return path.join(codexHome, 'skills');
  return path.join(os.homedir(), '.codex', 'skills');
}

function parseArgs(argv) {
  const out = {
    sourceDir: path.resolve(REPO_ROOT, DEFAULT_SOURCE_DIR),
    dest: path.resolve(resolveDefaultDest()),
    check: false,
    dryRun: false,
    skills: null,
    openaiYaml: true
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

    if (token === '--dest') {
      out.dest = path.resolve(REPO_ROOT, String(argv[i + 1] || '').trim());
      i += 1;
      continue;
    }
    if (token.startsWith('--dest=')) {
      out.dest = path.resolve(REPO_ROOT, token.slice('--dest='.length).trim());
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

    if (token === '--check') {
      out.check = true;
      continue;
    }
    if (token === '--dry-run') {
      out.dryRun = true;
      continue;
    }
    if (token === '--openai-yaml') {
      out.openaiYaml = true;
      continue;
    }
    if (token === '--no-openai-yaml') {
      out.openaiYaml = false;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return out;
}

function toDisplayName(skillName) {
  const words = skillName.split('-').filter(Boolean);
  return words
    .map((word, idx) => {
      const lower = word.toLowerCase();
      const upper = word.toUpperCase();
      if (ACRONYMS.has(upper)) return upper;
      if (BRANDS.has(lower)) return BRANDS.get(lower);
      if (idx > 0 && SMALL_WORDS.has(lower)) return lower;
      return lower.slice(0, 1).toUpperCase() + lower.slice(1);
    })
    .join(' ');
}

function toShortDescription(displayName) {
  let description = `Help with ${displayName} tasks`;

  if (description.length < 25) description = `Help with ${displayName} tasks and workflows`;
  if (description.length < 25) description = `Help with ${displayName} tasks with guidance`;

  if (description.length > 64) description = `Help with ${displayName}`;
  if (description.length > 64) description = `${displayName} helper`;
  if (description.length > 64) description = `${displayName} tools`;
  if (description.length > 64) {
    const suffix = ' helper';
    const maxNameLength = 64 - suffix.length;
    description = `${displayName.slice(0, maxNameLength).trimEnd()}${suffix}`;
  }
  if (description.length > 64) description = description.slice(0, 64).trimEnd();

  if (description.length < 25) {
    description = `${description} workflows`;
    if (description.length > 64) {
      description = description.slice(0, 64).trimEnd();
    }
  }

  return description;
}

function yamlQuote(value) {
  return JSON.stringify(String(value));
}

function buildOpenAiYaml(skillName) {
  const displayName = toDisplayName(skillName);
  const shortDescription = toShortDescription(displayName);
  const defaultPrompt = `Use $${skillName} to run this workflow with the repository guardrails.`;

  return [
    'interface:',
    `  display_name: ${yamlQuote(displayName)}`,
    `  short_description: ${yamlQuote(shortDescription)}`,
    `  default_prompt: ${yamlQuote(defaultPrompt)}`,
    ''
  ].join('\n');
}

function toBuffer(value) {
  if (Buffer.isBuffer(value)) return value;
  return Buffer.from(String(value), 'utf8');
}

function readExisting(filePathAbs) {
  if (!fs.existsSync(filePathAbs)) return null;
  return fs.readFileSync(filePathAbs);
}

function computeFileOp(expected, existing) {
  const expectedBuffer = toBuffer(expected);
  if (existing === null) return 'create';
  if (!expectedBuffer.equals(existing)) return 'update';
  return 'unchanged';
}

function formatPlannedFile(relPath, op) {
  if (op === 'create') return `create ${relPath}`;
  if (op === 'update') return `update ${relPath}`;
  return `keep   ${relPath}`;
}

function listFilesRecursive(dirAbs, relativePrefix = '') {
  const entries = fs.readdirSync(dirAbs, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
  const files = [];

  entries.forEach((entry) => {
    const entryAbs = path.join(dirAbs, entry.name);
    const entryRel = relativePrefix ? path.posix.join(relativePrefix, entry.name) : entry.name;
    if (entry.isDirectory()) {
      files.push(...listFilesRecursive(entryAbs, entryRel));
      return;
    }
    if (!entry.isFile()) {
      throw new Error(`${toPosix(entryAbs)}: unsupported resource entry type`);
    }
    files.push(entryRel);
  });

  return files;
}

function collectReferenceFiles(sourceDirAbs) {
  const entries = fs.readdirSync(sourceDirAbs, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
  const files = [];

  entries.forEach((entry) => {
    const entryAbs = path.join(sourceDirAbs, entry.name);
    if (entry.isDirectory()) {
      throw new Error(`${toPosix(entryAbs)}: references bundle must be flat; nested directories are not allowed`);
    }
    if (!entry.isFile()) {
      throw new Error(`${toPosix(entryAbs)}: unsupported reference bundle entry type`);
    }
    if (!entry.name.endsWith('.md')) {
      throw new Error(`${toPosix(entryAbs)}: references bundle files must use .md`);
    }
    files.push(entry.name);
  });

  if (files.length === 0) {
    throw new Error(`${toPosix(sourceDirAbs)}: references bundle must contain at least one markdown file`);
  }

  return files;
}

function collectResourceEntries(template) {
  const templateDir = path.dirname(template.templatePathAbs);
  const resourceEntries = [];

  RESOURCE_BUNDLES.forEach((bundle) => {
    const sourceDir = path.join(templateDir, `${template.templateStem}${bundle.sourceSuffix}`);
    if (!fs.existsSync(sourceDir)) return;
    if (!fs.statSync(sourceDir).isDirectory()) {
      throw new Error(`${toPosix(sourceDir)}: resource bundle must be a directory`);
    }

    const relativeFiles =
      bundle.key === 'references' ? collectReferenceFiles(sourceDir) : listFilesRecursive(sourceDir);

    if (relativeFiles.length === 0) {
      throw new Error(`${toPosix(sourceDir)}: resource bundle must contain at least one file`);
    }

    relativeFiles.forEach((relativeFile) => {
      const relPath = toPosix(path.posix.join(bundle.destDir, toPosix(relativeFile)));
      resourceEntries.push({
        relPath,
        absPath: path.join(sourceDir, relativeFile),
        expected: fs.readFileSync(path.join(sourceDir, relativeFile))
      });
    });
  });

  return resourceEntries.sort((a, b) => a.relPath.localeCompare(b.relPath));
}

function loadManifest(skillDir) {
  const manifestPath = path.join(skillDir, MANIFEST_FILE);
  if (!fs.existsSync(manifestPath)) {
    return {
      relPath: MANIFEST_FILE,
      managedFiles: []
    };
  }

  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  } catch (error) {
    throw new Error(`${toPosix(manifestPath)}: invalid managed manifest JSON (${error.message})`);
  }

  const managedFiles = Array.isArray(parsed.managed_files)
    ? parsed.managed_files.map((entry) => toPosix(String(entry || '').trim())).filter(Boolean)
    : [];

  return {
    relPath: MANIFEST_FILE,
    managedFiles: [...new Set(managedFiles)].sort()
  };
}

function buildManifestContent(template, managedFiles) {
  return `${JSON.stringify(
    {
      version: 1,
      skill: template.name,
      template: template.templatePathRel,
      managed_files: [...new Set(managedFiles)].sort()
    },
    null,
    2
  )}\n`;
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

function syncTemplate(template, options) {
  const skillDir = path.join(options.dest, template.name);
  const managedManifest = loadManifest(skillDir);
  const fileEntries = [];

  fileEntries.push({
    relPath: 'SKILL.md',
    expected: template.content
  });

  if (options.openaiYaml) {
    fileEntries.push({
      relPath: 'agents/openai.yaml',
      expected: buildOpenAiYaml(template.name)
    });
  }

  collectResourceEntries(template).forEach((entry) => {
    fileEntries.push({
      relPath: entry.relPath,
      expected: entry.expected
    });
  });

  const managedFiles = fileEntries.map((entry) => entry.relPath);
  fileEntries.push({
    relPath: MANIFEST_FILE,
    expected: buildManifestContent(template, managedFiles)
  });

  const fileOps = fileEntries.map((entry) => {
    const absPath = path.join(skillDir, entry.relPath);
    const existing = readExisting(absPath);
    return {
      relPath: entry.relPath,
      absPath,
      expected: entry.expected,
      op: computeFileOp(entry.expected, existing)
    };
  });

  const managedSet = new Set(managedFiles);
  const pruned = managedManifest.managedFiles
    .filter((relPath) => !managedSet.has(relPath))
    .filter((relPath) => fs.existsSync(path.join(skillDir, relPath)))
    .sort();

  const drift = fileOps.some((entry) => entry.op !== 'unchanged') || pruned.length > 0;
  const created = fileOps.some((entry) => entry.op === 'create' && entry.relPath === 'SKILL.md');
  const status = created ? 'created' : drift ? 'updated' : 'unchanged';

  if (!options.check && !options.dryRun) {
    fs.mkdirSync(skillDir, { recursive: true });

    fileOps.forEach((entry) => {
      if (entry.op === 'unchanged') return;
      fs.mkdirSync(path.dirname(entry.absPath), { recursive: true });
      fs.writeFileSync(entry.absPath, toBuffer(entry.expected));
    });

    pruned.forEach((relPath) => {
      removeFileAndEmptyParents(path.join(skillDir, relPath), skillDir);
    });
  }

  return {
    name: template.name,
    status,
    drift,
    fileOps: fileOps.map((entry) => ({
      relPath: entry.relPath,
      op: entry.op
    })),
    pruned
  };
}

function printConfig(options, templates, selected) {
  console.log(`source_dir=${toPosix(options.sourceDir)}`);
  console.log(`dest=${toPosix(options.dest)}`);
  console.log(`templates_discovered=${templates.length}`);
  console.log(`templates_selected=${selected.length}`);
  console.log(`mode=${options.check ? 'check' : options.dryRun ? 'dry-run' : 'sync'}`);
  console.log(`openai_yaml=${options.openaiYaml ? 'enabled' : 'disabled'}`);
}

function summarize(results, options) {
  const summary = {
    created: 0,
    updated: 0,
    unchanged: 0,
    failed: 0,
    drift: 0,
    pruned: 0
  };

  for (const result of results) {
    if (!result || result.failed) {
      summary.failed += 1;
      continue;
    }
    summary[result.status] += 1;
    if (result.drift) summary.drift += 1;
    summary.pruned += result.pruned.length;
  }

  console.log('---');
  console.log(`created=${summary.created}`);
  console.log(`updated=${summary.updated}`);
  console.log(`unchanged=${summary.unchanged}`);
  console.log(`failed=${summary.failed}`);
  console.log(`pruned=${summary.pruned}`);
  if (options.check) {
    console.log(`drift=${summary.drift}`);
  }
  return summary;
}

function printResultLines(results, options) {
  for (const result of results) {
    if (!result) continue;
    const label = options.check
      ? result.drift
        ? 'drift'
        : 'ok'
      : options.dryRun
      ? 'plan'
      : 'sync';
    console.log(`${label}: ${result.name}`);
    result.fileOps.forEach((entry) => {
      console.log(`  ${formatPlannedFile(entry.relPath, entry.op)}`);
    });
    result.pruned.forEach((relPath) => {
      console.log(`  prune  ${relPath}`);
    });
  }
}

function run(options) {
  const templates = discoverTemplates(options.sourceDir, { repoRoot: REPO_ROOT });
  const selected = selectTemplates(templates, options.skills);

  printConfig(options, templates, selected);

  const results = selected.map((template) => syncTemplate(template, options));
  printResultLines(results, options);
  const summary = summarize(results, options);

  if (summary.failed > 0) {
    return 1;
  }
  if (options.check && summary.drift > 0) {
    return 1;
  }
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
  MANIFEST_FILE,
  buildOpenAiYaml,
  buildManifestContent,
  collectResourceEntries,
  discoverTemplates,
  parseArgs,
  run,
  toDisplayName,
  toShortDescription
};
