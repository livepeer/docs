/**
 * @script            codex-skill-templates
 * @category          utility
 * @purpose           governance:agent-governance
 * @scope             tools/lib, ai-tools/ai-skills/templates, tools/scripts/sync-codex-skills.js, tools/scripts/export-portable-skills.js
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Shared helper for validating, selecting, and loading canonical Codex skill templates.
 * @pipeline          indirect -- library module
 * @usage             const { discoverTemplates } = require('../lib/codex-skill-templates');
 */

const fs = require('fs');
const path = require('path');
const yaml = require('./load-js-yaml');

const TEMPLATE_SUFFIX = '.template.md';
const TEMPLATE_FILE_RE = /^\d{2}-[a-z0-9-]+\.template\.md$/;
const SKILL_NAME_RE = /^[a-z0-9][a-z0-9-]*$/;
const VERSION_RE = /^[0-9]+\.[0-9]+(?:\.[0-9]+)?$/;

const REQUIRED_FRONTMATTER_KEYS = [
  'name',
  'version',
  'description',
  'tier',
  'invoke_when',
  'primary_paths',
  'primary_commands'
];

const REQUIRED_SECTIONS = [
  'SKILL:',
  'Goal',
  'Constraints',
  'Workflow',
  'Deliverable Format',
  'Failure Modes / Fallback',
  'Validation Checklist'
];

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function parseSkillsList(raw) {
  if (!raw) return null;
  const values = String(raw)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  if (values.length === 0) return null;
  return [...new Set(values)];
}

function splitFrontmatter(content, filePath) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) {
    throw new Error(`${toPosix(filePath)}: missing or invalid YAML frontmatter`);
  }
  return {
    frontmatterRaw: match[1],
    body: content.slice(match[0].length)
  };
}

function escapeRegExp(value) {
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function requireSection(body, sectionTitle, filePath) {
  const re = new RegExp(`^${escapeRegExp(sectionTitle)}(?:\\b|\\s|:)`, 'm');
  if (!re.test(body)) {
    throw new Error(`${toPosix(filePath)}: missing required section "${sectionTitle}"`);
  }
}

function assertArrayCount(value, minCount, field, filePath) {
  if (!Array.isArray(value)) {
    throw new Error(`${toPosix(filePath)}: frontmatter "${field}" must be an array`);
  }
  if (value.length < minCount) {
    throw new Error(`${toPosix(filePath)}: frontmatter "${field}" must have at least ${minCount} entries`);
  }
}

function parseTemplateFile(filePathAbs, options = {}) {
  const repoRoot = options.repoRoot || process.cwd();
  const content = fs.readFileSync(filePathAbs, 'utf8');
  const { frontmatterRaw, body } = splitFrontmatter(content, filePathAbs);
  let frontmatter;

  try {
    frontmatter = yaml.load(frontmatterRaw);
  } catch (error) {
    throw new Error(`${toPosix(filePathAbs)}: invalid frontmatter YAML (${error.message})`);
  }

  if (!frontmatter || typeof frontmatter !== 'object' || Array.isArray(frontmatter)) {
    throw new Error(`${toPosix(filePathAbs)}: frontmatter must be a YAML object`);
  }

  for (const key of REQUIRED_FRONTMATTER_KEYS) {
    if (!(key in frontmatter)) {
      throw new Error(`${toPosix(filePathAbs)}: missing required frontmatter key "${key}"`);
    }
  }

  const name = String(frontmatter.name || '').trim();
  if (!name) {
    throw new Error(`${toPosix(filePathAbs)}: frontmatter "name" must be non-empty`);
  }
  if (!SKILL_NAME_RE.test(name)) {
    throw new Error(`${toPosix(filePathAbs)}: frontmatter "name" must match ${SKILL_NAME_RE}`);
  }

  const version = String(frontmatter.version || '').trim();
  if (!VERSION_RE.test(version)) {
    throw new Error(`${toPosix(filePathAbs)}: frontmatter "version" must match ${VERSION_RE}`);
  }

  const description = String(frontmatter.description || '').replace(/\s+/g, ' ').trim();
  if (!description) {
    throw new Error(`${toPosix(filePathAbs)}: frontmatter "description" must be non-empty`);
  }

  assertArrayCount(frontmatter.invoke_when, 1, 'invoke_when', filePathAbs);
  assertArrayCount(frontmatter.primary_paths, 1, 'primary_paths', filePathAbs);
  assertArrayCount(frontmatter.primary_commands, 1, 'primary_commands', filePathAbs);

  for (const section of REQUIRED_SECTIONS) {
    requireSection(body, section, filePathAbs);
  }

  return {
    name,
    description,
    templateStem: path.basename(filePathAbs, TEMPLATE_SUFFIX),
    templatePathAbs: filePathAbs,
    templatePathRel: toPosix(path.relative(repoRoot, filePathAbs)),
    content,
    frontmatter
  };
}

function discoverTemplates(sourceDirAbs, options = {}) {
  const repoRoot = options.repoRoot || process.cwd();

  if (!fs.existsSync(sourceDirAbs) || !fs.statSync(sourceDirAbs).isDirectory()) {
    throw new Error(`Template source directory does not exist: ${toPosix(sourceDirAbs)}`);
  }

  const entries = fs
    .readdirSync(sourceDirAbs)
    .filter((name) => name.endsWith(TEMPLATE_SUFFIX))
    .filter((name) => TEMPLATE_FILE_RE.test(name))
    .sort();

  if (entries.length === 0) {
    throw new Error(`No template files found in ${toPosix(sourceDirAbs)}`);
  }

  return entries.map((entry) => parseTemplateFile(path.join(sourceDirAbs, entry), { repoRoot }));
}

function selectTemplates(templates, selectedNames) {
  if (!selectedNames || selectedNames.length === 0) return templates;
  const byName = new Map(templates.map((template) => [template.name, template]));
  const missing = selectedNames.filter((name) => !byName.has(name));
  if (missing.length > 0) {
    throw new Error(`Unknown --skills value(s): ${missing.join(', ')}`);
  }
  return selectedNames.map((name) => byName.get(name));
}

module.exports = {
  REQUIRED_FRONTMATTER_KEYS,
  REQUIRED_SECTIONS,
  SKILL_NAME_RE,
  VERSION_RE,
  TEMPLATE_FILE_RE,
  TEMPLATE_SUFFIX,
  discoverTemplates,
  parseSkillsList,
  parseTemplateFile,
  selectTemplates,
  toPosix
};
