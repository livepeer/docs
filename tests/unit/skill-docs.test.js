#!/usr/bin/env node
/**
 * @script            skill-docs.test
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tests/unit, ai-tools/ai-skills, tools/lib/codex-skill-templates.js
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Validates governed skill documentation frontmatter, references, and contract integrity for canonical templates and local skill files.
 * @pipeline          P1, P3
 * @usage             node tests/unit/skill-docs.test.js [--staged] [--files path[,path]]
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const yaml = require('../../tools/lib/load-js-yaml');

const REPO_ROOT = path.resolve(__dirname, '../..');
const SKILLS_ROOT = 'ai-tools/ai-skills';
const TEMPLATE_ROOT = 'ai-tools/ai-skills/templates';
const CONTRACT_PATH = 'ai-tools/ai-skills/skill-spec-contract.md';
const NAME_RE = /^[a-z0-9][a-z0-9-]*$/;
const VERSION_RE = /^[0-9]+\.[0-9]+(?:\.[0-9]+)?$/;
const REQUIRED_CONTRACT_SECTIONS = [
  { heading: '## Purpose', rule: 'Skill contract sections' },
  { heading: '## Layer Map', rule: 'Skill contract sections' },
  { heading: '## Invocation', rule: 'Skill contract sections' },
  { heading: '## Canonical Field Contract', rule: 'Skill contract sections' },
  { heading: '## Validation Rules', rule: 'Skill contract sections' }
];
const CONTRACT_TABLE_RE = /\|\s*Layer\s*\|\s*File\s*\|\s*Purpose\s*\|/i;

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function normalizeRepoPath(filePath) {
  const normalized = toPosix(filePath).trim();
  if (!normalized) return '';
  if (path.isAbsolute(normalized)) {
    return toPosix(path.relative(REPO_ROOT, normalized));
  }
  return normalized.replace(/^\.\//, '');
}

function wordCount(text) {
  return String(text || '')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;
}

function escapeRegExp(value) {
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function runGit(args) {
  try {
    return execSync(`git ${args}`, {
      cwd: REPO_ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim();
  } catch (_error) {
    return '';
  }
}

function fileExists(repoPath) {
  const absPath = path.join(REPO_ROOT, repoPath);
  return fs.existsSync(absPath) && fs.statSync(absPath).isFile();
}

function isGovernedTemplatePath(repoPath) {
  return /^ai-tools\/ai-skills\/templates\/[^/]+\.template\.md$/.test(normalizeRepoPath(repoPath));
}

function isGovernedLocalSkillPath(repoPath) {
  return /^ai-tools\/ai-skills\/[^/]+\/SKILL\.md$/.test(normalizeRepoPath(repoPath));
}

function isGovernedArtifactPath(repoPath) {
  const normalized = normalizeRepoPath(repoPath);
  return isGovernedTemplatePath(normalized) || isGovernedLocalSkillPath(normalized);
}

function isGovernedSuiteInput(repoPath) {
  const normalized = normalizeRepoPath(repoPath);
  return normalized === CONTRACT_PATH || isGovernedArtifactPath(normalized);
}

function walkMarkdownFiles(dirPath, out = []) {
  const absDir = path.join(REPO_ROOT, dirPath);
  if (!fs.existsSync(absDir)) return out;
  const entries = fs.readdirSync(absDir, { withFileTypes: true });
  for (const entry of entries) {
    const repoPath = toPosix(path.join(dirPath, entry.name));
    if (entry.isDirectory()) {
      walkMarkdownFiles(repoPath, out);
      continue;
    }
    if (repoPath.endsWith('.md')) out.push(repoPath);
  }
  return out;
}

function collectAllGovernedArtifacts() {
  const files = [];

  const templateDir = path.join(REPO_ROOT, TEMPLATE_ROOT);
  if (fs.existsSync(templateDir)) {
    fs.readdirSync(templateDir)
      .filter((name) => name.endsWith('.template.md'))
      .sort()
      .forEach((name) => files.push(toPosix(path.join(TEMPLATE_ROOT, name))));
  }

  const skillsDir = path.join(REPO_ROOT, SKILLS_ROOT);
  if (fs.existsSync(skillsDir)) {
    fs.readdirSync(skillsDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .forEach((entry) => {
        const skillPath = toPosix(path.join(SKILLS_ROOT, entry.name, 'SKILL.md'));
        if (fileExists(skillPath)) files.push(skillPath);
      });
  }

  return [...new Set(files)].sort();
}

function collectAllSkillMarkdown() {
  return new Set(walkMarkdownFiles(SKILLS_ROOT));
}

function splitFrontmatter(content, repoPath) {
  const match = String(content || '').match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) {
    throw new Error(`${repoPath}: missing or invalid YAML frontmatter`);
  }
  return {
    frontmatterRaw: match[1],
    body: content.slice(match[0].length)
  };
}

function parseGovernedArtifact(repoPath) {
  const content = fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
  const { frontmatterRaw, body } = splitFrontmatter(content, repoPath);
  const frontmatter = yaml.load(frontmatterRaw);
  if (!frontmatter || typeof frontmatter !== 'object' || Array.isArray(frontmatter)) {
    throw new Error(`${repoPath}: frontmatter must be a YAML object`);
  }
  return { content, body, frontmatter };
}

function normalizeInvokeWhen(values) {
  if (!Array.isArray(values)) return [];
  return [...new Set(values
    .map((value) => String(value || '').replace(/\s+/g, ' ').trim().toLowerCase())
    .filter(Boolean))]
    .sort();
}

function validateFrontmatter(repoPath, frontmatter, options = {}) {
  const errors = [];
  const warnings = [];
  const requiredKeys = ['name', 'version', 'description', 'invoke_when'];
  const isTemplate = Boolean(options.isTemplate);

  requiredKeys.forEach((key) => {
    if (!(key in frontmatter)) {
      errors.push({
        file: repoPath,
        rule: 'Skill frontmatter',
        message: `Missing required frontmatter field "${key}".`,
        line: 1
      });
    }
  });

  const name = String(frontmatter.name || '').trim();
  if (name && !NAME_RE.test(name)) {
    errors.push({
      file: repoPath,
      rule: 'Skill name format',
      message: `Invalid skill name "${name}". Expected ${NAME_RE}.`,
      line: 1
    });
  }

  const version = String(frontmatter.version || '').trim();
  if (version && !VERSION_RE.test(version)) {
    errors.push({
      file: repoPath,
      rule: 'Skill version format',
      message: `Invalid version "${version}". Expected ${VERSION_RE}.`,
      line: 1
    });
  }

  const description = String(frontmatter.description || '').replace(/\s+/g, ' ').trim();
  if (description) {
    const count = wordCount(description);
    if (count < 20) {
      errors.push({
        file: repoPath,
        rule: 'Skill description length',
        message: `Description is too short (${count} words). Minimum is 20 words.`,
        line: 1
      });
    } else if (count > 100) {
      warnings.push({
        file: repoPath,
        rule: 'Skill description length',
        message: `Description is broad (${count} words). Consider splitting or tightening the skill.`,
        line: 1
      });
    }
  }

  const invokeWhen = Array.isArray(frontmatter.invoke_when)
    ? frontmatter.invoke_when.map((value) => String(value || '').trim()).filter(Boolean)
    : [];
  if (!Array.isArray(frontmatter.invoke_when) || invokeWhen.length === 0) {
    errors.push({
      file: repoPath,
      rule: 'Skill invoke_when',
      message: 'invoke_when must be a non-empty array of trigger phrases.',
      line: 1
    });
  }

  if (isTemplate) {
    ['tier', 'primary_paths', 'primary_commands'].forEach((key) => {
      if (!(key in frontmatter)) {
        errors.push({
          file: repoPath,
          rule: 'Template operational metadata',
          message: `Template is missing required operational field "${key}".`,
          line: 1
        });
      }
    });
  }

  return { errors, warnings, invokeWhen: normalizeInvokeWhen(frontmatter.invoke_when) };
}

function resolveGovernedPath(sourcePath, rawRef) {
  const normalized = String(rawRef || '').replace(/^`|`$/g, '').trim();
  if (!normalized) return '';
  if (normalized.startsWith('ai-tools/ai-skills/')) return normalizeRepoPath(normalized);
  if (!normalized.startsWith('./') && !normalized.startsWith('../')) return '';
  return normalizeRepoPath(path.join(path.dirname(sourcePath), normalized));
}

function collectGovernedReferences(repoPath, content) {
  const refs = new Set();
  const patterns = [
    /`((?:\.{1,2}\/|ai-tools\/ai-skills\/)[^`\n]+\.md)`/g,
    /\b(?:load|read|open|use|see|reference|references)\s+`?((?:\.{1,2}\/|ai-tools\/ai-skills\/)[^`\s)]+\.md)`?/gi
  ];

  patterns.forEach((pattern) => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const resolved = resolveGovernedPath(repoPath, match[1]);
      if (!resolved) continue;
      if (!resolved.startsWith(`${SKILLS_ROOT}/`)) continue;
      refs.add(resolved);
    }
  });

  return [...refs].sort();
}

function validateReferences(repoPath, references, availableMarkdown) {
  const errors = [];
  const artifactRefs = [];

  references.forEach((referencePath) => {
    if (!availableMarkdown.has(referencePath)) {
      errors.push({
        file: repoPath,
        rule: 'Skill governed references',
        message: `Referenced governed markdown path does not exist: ${referencePath}`,
        line: 1
      });
      return;
    }

    if (referencePath === repoPath) {
      errors.push({
        file: repoPath,
        rule: 'Skill self-reference',
        message: 'Governed skill artifact references itself.',
        line: 1
      });
      return;
    }

    if (isGovernedArtifactPath(referencePath)) artifactRefs.push(referencePath);
  });

  return { errors, artifactRefs };
}

function canonicalizeCycle(cycle) {
  return [...new Set(cycle.slice(0, -1))].sort().join(' | ');
}

function detectCycles(graph) {
  const seen = new Set();
  const onStack = new Set();
  const stack = [];
  const cycles = [];
  const cycleKeys = new Set();

  function visit(node) {
    seen.add(node);
    onStack.add(node);
    stack.push(node);

    const nextNodes = graph.get(node) || [];
    nextNodes.forEach((nextNode) => {
      if (!graph.has(nextNode)) return;
      if (!seen.has(nextNode)) {
        visit(nextNode);
        return;
      }
      if (!onStack.has(nextNode)) return;
      const start = stack.indexOf(nextNode);
      if (start === -1) return;
      const cycle = stack.slice(start).concat(nextNode);
      const key = canonicalizeCycle(cycle);
      if (cycleKeys.has(key)) return;
      cycleKeys.add(key);
      cycles.push(cycle);
    });

    stack.pop();
    onStack.delete(node);
  }

  [...graph.keys()].forEach((node) => {
    if (!seen.has(node)) visit(node);
  });

  return cycles;
}

function analyzeDiffForVersion(diffText) {
  let contentChanged = false;
  let versionChanged = false;

  String(diffText || '')
    .split('\n')
    .forEach((line) => {
      if (!/^[+-]/.test(line) || /^(?:\+\+\+|---)/.test(line)) return;
      const body = line.slice(1).trim();
      if (!body) return;
      if (/^version:\s*/.test(body)) {
        versionChanged = true;
        return;
      }
      contentChanged = true;
    });

  return { contentChanged, versionChanged };
}

function isTracked(repoPath) {
  return Boolean(runGit(`ls-files --error-unmatch -- "${repoPath}"`));
}

function shouldWarnVersionBump(repoPath, options = {}) {
  if (!isTracked(repoPath)) return false;

  const diffArgs = options.stagedOnly
    ? [`diff --cached --unified=0 -- "${repoPath}"`]
    : [`diff --cached --unified=0 -- "${repoPath}"`, `diff --unified=0 -- "${repoPath}"`];

  let contentChanged = false;
  let versionChanged = false;
  diffArgs.forEach((args) => {
    const analysis = analyzeDiffForVersion(runGit(args));
    contentChanged = contentChanged || analysis.contentChanged;
    versionChanged = versionChanged || analysis.versionChanged;
  });

  return contentChanged && !versionChanged;
}

function collectDuplicateInvokeWhen(records, scopedSet = null) {
  const groups = new Map();
  records.forEach((record) => {
    if (!record.invokeKey) return;
    if (!groups.has(record.invokeKey)) groups.set(record.invokeKey, []);
    groups.get(record.invokeKey).push(record.file);
  });

  const warnings = [];
  groups.forEach((files, invokeKey) => {
    if (files.length < 2) return;
    const names = new Set(records
      .filter((record) => record.invokeKey === invokeKey)
      .map((record) => record.name)
      .filter(Boolean));
    if (names.size === 1) return;
    const targets = scopedSet ? files.filter((file) => scopedSet.has(file)) : files;
    targets.forEach((file) => {
      warnings.push({
        file,
        rule: 'Skill invoke_when duplication',
        message: `invoke_when duplicates another governed skill exactly: ${files.join(', ')}`,
        line: 1
      });
    });
  });

  return warnings;
}

function collectFilesFromArgs(args) {
  const files = [];
  for (let index = 0; index < args.length; index += 1) {
    const token = args[index];
    if (token === '--files' || token === '--file') {
      String(args[index + 1] || '')
        .split(',')
        .map((value) => normalizeRepoPath(value))
        .filter(Boolean)
        .forEach((value) => files.push(value));
      index += 1;
      continue;
    }
    if (token.startsWith('--files=')) {
      token
        .slice('--files='.length)
        .split(',')
        .map((value) => normalizeRepoPath(value))
        .filter(Boolean)
        .forEach((value) => files.push(value));
    }
  }
  return [...new Set(files)];
}

function getStagedSuiteInputs() {
  const output = runGit('diff --cached --name-only --diff-filter=ACMR');
  if (!output) return [];
  return output
    .split('\n')
    .map((line) => normalizeRepoPath(line))
    .filter(Boolean)
    .filter(isGovernedSuiteInput);
}

function validateContractDocument() {
  const errors = [];

  if (!fileExists(CONTRACT_PATH)) {
    return [{
      file: CONTRACT_PATH,
      rule: 'Skill contract sections',
      message: 'Central skill contract file is missing.',
      line: 1
    }];
  }

  const content = fs.readFileSync(path.join(REPO_ROOT, CONTRACT_PATH), 'utf8');
  REQUIRED_CONTRACT_SECTIONS.forEach(({ heading, rule }) => {
    const pattern = new RegExp(`^${escapeRegExp(heading)}$`, 'm');
    if (!pattern.test(content)) {
      errors.push({
        file: CONTRACT_PATH,
        rule,
        message: `Missing required section "${heading}".`,
        line: 1
      });
    }
  });

  if (!CONTRACT_TABLE_RE.test(content)) {
    errors.push({
      file: CONTRACT_PATH,
      rule: 'Skill contract sections',
      message: 'Layer Map table must include the columns Layer, File, and Purpose.',
      line: 1
    });
  }

  if (!/skill-docs/i.test(content)) {
    errors.push({
      file: CONTRACT_PATH,
      rule: 'Skill contract invocation',
      message: 'Invocation section must mention the skill-docs workflow explicitly.',
      line: 1
    });
  }

  return errors;
}

function runInternalUnitChecks() {
  const errors = [];

  function runCase(name, fn) {
    try {
      fn();
    } catch (error) {
      errors.push({
        file: 'tests/unit/skill-docs.test.js',
        rule: 'Internal unit coverage',
        message: `${name}: ${error.message}`,
        line: 1
      });
    }
  }

  runCase('short description failure', () => {
    const result = validateFrontmatter('tmp.md', {
      name: 'alpha-skill',
      version: '1.0',
      description: 'too short description',
      invoke_when: ['trigger']
    });
    assert(result.errors.some((entry) => entry.rule === 'Skill description length'));
  });

  runCase('overlong description warning', () => {
    const longDescription = Array.from({ length: 101 }, (_, index) => `word${index + 1}`).join(' ');
    const result = validateFrontmatter('tmp.md', {
      name: 'alpha-skill',
      version: '1.0',
      description: longDescription,
      invoke_when: ['trigger']
    });
    assert(result.warnings.some((entry) => entry.rule === 'Skill description length'));
  });

  runCase('empty invoke_when failure', () => {
    const result = validateFrontmatter('tmp.md', {
      name: 'alpha-skill',
      version: '1.0',
      description: 'This description has enough words to satisfy the validator requirement for the unit test.',
      invoke_when: []
    });
    assert(result.errors.some((entry) => entry.rule === 'Skill invoke_when'));
  });

  runCase('invalid semver failure', () => {
    const result = validateFrontmatter('tmp.md', {
      name: 'alpha-skill',
      version: 'version-one',
      description: 'This description has enough words to satisfy the validator requirement for the unit test.',
      invoke_when: ['trigger']
    });
    assert(result.errors.some((entry) => entry.rule === 'Skill version format'));
  });

  runCase('missing referenced file failure', () => {
    const result = validateReferences(
      'ai-tools/ai-skills/sample/SKILL.md',
      ['ai-tools/ai-skills/missing.md'],
      new Set()
    );
    assert(result.errors.some((entry) => entry.rule === 'Skill governed references'));
  });

  runCase('self-loop failure', () => {
    const result = validateReferences(
      'ai-tools/ai-skills/sample/SKILL.md',
      ['ai-tools/ai-skills/sample/SKILL.md'],
      new Set(['ai-tools/ai-skills/sample/SKILL.md'])
    );
    assert(result.errors.some((entry) => entry.rule === 'Skill self-reference'));
  });

  runCase('cycle detection failure', () => {
    const cycles = detectCycles(new Map([
      ['ai-tools/ai-skills/a/SKILL.md', ['ai-tools/ai-skills/b/SKILL.md']],
      ['ai-tools/ai-skills/b/SKILL.md', ['ai-tools/ai-skills/a/SKILL.md']]
    ]));
    assert.strictEqual(cycles.length, 1);
  });

  runCase('duplicate trigger-set warning', () => {
    const warnings = collectDuplicateInvokeWhen([
      { file: 'a', invokeKey: 'one|two' },
      { file: 'b', invokeKey: 'one|two' }
    ]);
    assert.strictEqual(warnings.length, 2);
  });

  runCase('version-bump heuristic', () => {
    const analysis = analyzeDiffForVersion([
      '@@ -1,3 +1,3 @@',
      '-description: old words',
      '+description: new words'
    ].join('\n'));
    assert.strictEqual(analysis.contentChanged, true);
    assert.strictEqual(analysis.versionChanged, false);
  });

  return errors;
}

function runTests(options = {}) {
  const stagedOnly = Boolean(options.stagedOnly);
  const explicitFiles = Array.isArray(options.files)
    ? options.files.map((value) => normalizeRepoPath(value)).filter(Boolean)
    : [];
  const targetInputs = explicitFiles.length > 0
    ? explicitFiles.filter(isGovernedSuiteInput)
    : stagedOnly
      ? getStagedSuiteInputs()
      : [];
  const targetedArtifacts = new Set(targetInputs.filter(isGovernedArtifactPath));
  const fullMode = explicitFiles.length === 0 && !stagedOnly;
  const shouldValidateContract = fullMode || targetInputs.includes(CONTRACT_PATH) || targetedArtifacts.size > 0;
  const errors = [...runInternalUnitChecks(), ...(shouldValidateContract ? validateContractDocument() : [])];
  const warnings = [];
  const allArtifacts = collectAllGovernedArtifacts();
  const allSkillMarkdown = collectAllSkillMarkdown();
  const graph = new Map();
  const invokeRecords = [];

  allArtifacts.forEach((repoPath) => {
    let parsed;
    try {
      parsed = parseGovernedArtifact(repoPath);
    } catch (error) {
      if (fullMode || targetedArtifacts.has(repoPath)) {
        errors.push({
          file: repoPath,
          rule: 'Skill frontmatter',
          message: error.message,
          line: 1
        });
      }
      return;
    }

    graph.set(repoPath, []);

    const frontmatterResult = validateFrontmatter(repoPath, parsed.frontmatter, {
      isTemplate: isGovernedTemplatePath(repoPath)
    });
    if (fullMode || targetedArtifacts.has(repoPath)) {
      errors.push(...frontmatterResult.errors);
      warnings.push(...frontmatterResult.warnings);
    }

    invokeRecords.push({
      file: repoPath,
      name: String(parsed.frontmatter.name || '').trim(),
      invokeKey: frontmatterResult.invokeWhen.join('|')
    });

    const references = collectGovernedReferences(repoPath, parsed.content);
    const referenceResult = validateReferences(repoPath, references, allSkillMarkdown);
    if (fullMode || targetedArtifacts.has(repoPath)) {
      errors.push(...referenceResult.errors);
    }
    graph.set(repoPath, referenceResult.artifactRefs);

    if ((fullMode || targetedArtifacts.has(repoPath)) && shouldWarnVersionBump(repoPath, { stagedOnly })) {
      warnings.push({
        file: repoPath,
        rule: 'Skill version bump heuristic',
        message: 'File content changed without a matching version field diff.',
        line: 1
      });
    }
  });

  const cycles = detectCycles(graph);
  cycles.forEach((cycle) => {
    const participants = cycle.slice(0, -1);
    const intersectsScope = fullMode || participants.some((repoPath) => targetedArtifacts.has(repoPath));
    if (!intersectsScope) return;
    const file = fullMode
      ? participants[0]
      : participants.find((repoPath) => targetedArtifacts.has(repoPath)) || participants[0];
    errors.push({
      file,
      rule: 'Skill circular references',
      message: `Circular governed skill reference detected: ${cycle.join(' -> ')}`,
      line: 1
    });
  });

  warnings.push(...collectDuplicateInvokeWhen(invokeRecords, fullMode ? null : targetedArtifacts));

  const total = fullMode
    ? allArtifacts.length + 1
    : targetInputs.length;

  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total
  };
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const result = runTests({
    stagedOnly: args.includes('--staged'),
    files: collectFilesFromArgs(args)
  });

  if (result.total === 0) {
    console.log('🧪 Skill Documentation Tests');
    if (result.errors.length === 0) {
      console.log('No governed skill documentation files matched the requested scope.');
      process.exit(0);
    }
  }

  console.log('🧪 Skill Documentation Tests');
  result.errors.forEach((entry) => {
    console.error(`${entry.file}:${entry.line} [${entry.rule}] ${entry.message}`);
  });
  result.warnings.forEach((entry) => {
    console.warn(`${entry.file}:${entry.line} [${entry.rule}] ${entry.message}`);
  });

  if (result.errors.length === 0) {
    console.log(`\n✅ Skill documentation checks passed (${result.total} targets checked)`);
  } else {
    console.error(`\n❌ Skill documentation checks failed (${result.errors.length} errors)`);
  }
  process.exit(result.errors.length > 0 ? 1 : 0);
}

module.exports = {
  analyzeDiffForVersion,
  collectGovernedReferences,
  detectCycles,
  normalizeInvokeWhen,
  runTests,
  validateFrontmatter
};
