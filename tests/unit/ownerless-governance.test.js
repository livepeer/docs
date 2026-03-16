#!/usr/bin/env node
/**
 * @script            ownerless-governance.test
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tests/unit, tests/utils, tests/WHEN-TESTS-RUN.md, docs-guide, tools/config/ownerless-governance-surfaces.json, AGENTS.md, .allowlist, .github, .claude, .cursor, .windsurf, README.md, contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md
 * @owner             docs
 * @needs             R-R14, R-R29
 * @purpose-statement Validates the ownerless governance manifest, primary gate-layer contract, and forbidden human-owner dependency in governed policy and GitHub surfaces.
 * @pipeline          P1, P3
 * @usage             node tests/unit/ownerless-governance.test.js [--staged|--files a,b]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO_ROOT = path.resolve(__dirname, '../..');
const MANIFEST_PATH = 'tools/config/ownerless-governance-surfaces.json';
const POLICY_PATH = 'docs-guide/policies/ownerless-governance.mdx';
const REQUIRED_KEYS = [
  'id',
  'surface_globs',
  'canonical_sources',
  'derived_outputs',
  'validators',
  'repair_commands',
  'gate_layer',
  'rollout_state',
  'network_dependent',
  'ownerless_ready'
];
const GATE_LAYERS = new Set(['pre-commit', 'pr-changed', 'scheduled', 'manual']);
const ROLLOUT_STATES = new Set(['advisory', 'autofix', 'blocking', 'migrating']);
const ID_RE = /^[a-z0-9][a-z0-9-]*$/;
const DOMAIN_RE = /^[a-z0-9][a-z0-9-]*$/;
const REQUIRED_POLICY_SNIPPETS = [
  'Every governed surface must have:',
  '## Vocabulary',
  '## Gate Ownership Rules',
  '## Repair Path Rules',
  '## Rollout State Rules',
  '## OSS Contributor Loop',
  'tools/config/ownerless-governance-surfaces.json'
];
const GOVERNED_TEXT_FILES = [
  'README.md',
  'AGENTS.md',
  '.allowlist',
  '.github/copilot-instructions.md',
  '.claude/CLAUDE.md',
  '.cursor/rules/repo-governance.mdc',
  '.windsurf/rules/repo-governance.md',
  'contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md',
  '.github/workflows/issue-auto-label.yml',
  '.github/workflows/discord-issue-intake.yml',
  '.github/workflows/openapi-reference-validation.yml',
  '.github/workflows/docs-v2-issue-indexer.yml',
  '.github/ISSUE_TEMPLATE/01_bug_report.yml',
  '.github/ISSUE_TEMPLATE/02_docs_page_issue.yml',
  '.github/ISSUE_TEMPLATE/03_feature_request.yml',
  '.github/ISSUE_TEMPLATE/04_content_request.yml',
  '.github/ISSUE_TEMPLATE/05_tooling_ci_issue.yml',
  '.github/ISSUE_TEMPLATE/06_question_clarification.yml',
  '.github/ISSUE_TEMPLATE/config.yml',
  '.github/ISSUE_TEMPLATE/feature_internal.yml',
  'docs-guide/catalog/templates-catalog.mdx',
  'docs-guide/features/automations.mdx',
  'docs-guide/frameworks/component-framework.mdx',
  'docs-guide/frameworks/component-governance.mdx',
  'tests/WHEN-TESTS-RUN.md',
  'tests/utils/openapi-rolling-issue.js',
  'tests/unit/openapi-rolling-issue.test.js'
];
const FORBIDDEN_PATTERNS = [
  ['Action requested from maintainers', 'Use "Requested repository outcome" instead of maintainer-request wording.'],
  ['maintainer scheduling priority', 'Use "queue priority" instead of maintainer scheduling wording.'],
  ['status: needs-triage', 'Use "status: needs-routing" instead of "status: needs-triage".'],
  ['maintainer triage', 'Use routing language instead of maintainer triage wording.'],
  ['CODEOWNERS', 'Do not rely on the legacy GitHub review mapping file in active governance text.'],
  ['code-owner review', 'Do not require code-owner review in repo-tracked governance text.'],
  ['lock ownership', 'Use "lock holder" or "execution lock" wording instead of ownership wording.']
];

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function parseFilesArg(argv) {
  const files = [];
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--files' || token === '--file') {
      const raw = String(argv[i + 1] || '').trim();
      if (raw) {
        raw
          .split(',')
          .map((part) => part.trim())
          .filter(Boolean)
          .forEach((part) => files.push(toPosix(part)));
      }
      i += 1;
    }
  }
  return [...new Set(files)];
}

function getStagedRepoFiles() {
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=ACMR', {
      cwd: REPO_ROOT,
      encoding: 'utf8'
    });
    return output
      .split('\n')
      .map((line) => toPosix(line.trim()))
      .filter(Boolean);
  } catch (_error) {
    return [];
  }
}

function addIssue(target, file, rule, message) {
  target.push({ file, rule, message, line: 1 });
}

function readUtf8(repoPathValue) {
  return fs.readFileSync(path.join(REPO_ROOT, repoPathValue), 'utf8');
}

function exists(repoPathValue) {
  return fs.existsSync(path.join(REPO_ROOT, repoPathValue));
}

function loadManifest() {
  const raw = readUtf8(MANIFEST_PATH);
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    throw new Error(`${MANIFEST_PATH} must be a JSON array.`);
  }
  return parsed;
}

function validateManifest(entries, errors) {
  const seenIds = new Set();

  entries.forEach((entry, index) => {
    const label = `${MANIFEST_PATH}[${index}]`;

    REQUIRED_KEYS.forEach((key) => {
      if (!(key in entry)) {
        addIssue(errors, MANIFEST_PATH, 'Manifest shape', `${label} is missing required key "${key}".`);
      }
    });

    if (!ID_RE.test(String(entry.id || ''))) {
      addIssue(errors, MANIFEST_PATH, 'Manifest shape', `${label}.id must be kebab-case.`);
    } else if (seenIds.has(entry.id)) {
      addIssue(errors, MANIFEST_PATH, 'Manifest shape', `Duplicate manifest id "${entry.id}".`);
    } else {
      seenIds.add(entry.id);
    }

    ['surface_globs', 'canonical_sources', 'derived_outputs', 'validators', 'repair_commands'].forEach((key) => {
      if (!Array.isArray(entry[key])) {
        addIssue(errors, MANIFEST_PATH, 'Manifest shape', `${label}.${key} must be an array.`);
        return;
      }
      if ((key === 'surface_globs' || key === 'canonical_sources' || key === 'validators' || key === 'repair_commands') && entry[key].length === 0) {
        addIssue(errors, MANIFEST_PATH, 'Manifest shape', `${label}.${key} must not be empty.`);
      }
    });

    if (!GATE_LAYERS.has(String(entry.gate_layer || ''))) {
      addIssue(errors, MANIFEST_PATH, 'Manifest gate layer', `${label}.gate_layer must be one of ${[...GATE_LAYERS].join(', ')}.`);
    }

    if (!ROLLOUT_STATES.has(String(entry.rollout_state || ''))) {
      addIssue(errors, MANIFEST_PATH, 'Manifest rollout state', `${label}.rollout_state must be one of ${[...ROLLOUT_STATES].join(', ')}.`);
    }

    if (typeof entry.network_dependent !== 'boolean') {
      addIssue(errors, MANIFEST_PATH, 'Manifest shape', `${label}.network_dependent must be boolean.`);
    }
    if (typeof entry.ownerless_ready !== 'boolean') {
      addIssue(errors, MANIFEST_PATH, 'Manifest shape', `${label}.ownerless_ready must be boolean.`);
    }
    if (entry.ownerless_ready && !['autofix', 'blocking'].includes(String(entry.rollout_state || ''))) {
      addIssue(errors, MANIFEST_PATH, 'Manifest readiness', `${label}.ownerless_ready=true requires rollout_state "autofix" or "blocking".`);
    }

    entry.repair_commands.forEach((command, commandIndex) => {
      if (!/^node |^bash lpd |^lpd /.test(String(command || ''))) {
        addIssue(errors, MANIFEST_PATH, 'Manifest repair path', `${label}.repair_commands[${commandIndex}] must be a repo-backed command.`);
      }
    });
  });
}

function validatePolicy(errors) {
  if (!exists(POLICY_PATH)) {
    addIssue(errors, POLICY_PATH, 'Ownerless policy', 'Missing canonical ownerless governance policy document.');
    return;
  }

  const content = readUtf8(POLICY_PATH);
  REQUIRED_POLICY_SNIPPETS.forEach((snippet) => {
    if (!content.includes(snippet)) {
      addIssue(errors, POLICY_PATH, 'Ownerless policy', `Policy document must include: ${snippet}`);
    }
  });
}

function shouldInspect(file, changedSet, stagedOnly, explicitFiles) {
  if (explicitFiles.length > 0) return changedSet.has(file);
  if (!stagedOnly) return true;
  return changedSet.has(file);
}

function validateGovernedText(changedSet, stagedOnly, explicitFiles, errors, warnings) {
  const files = [...new Set([POLICY_PATH, ...GOVERNED_TEXT_FILES])].filter(exists);

  files.forEach((file) => {
    if (!shouldInspect(file, changedSet, stagedOnly, explicitFiles)) return;
    const content = readUtf8(file);

    FORBIDDEN_PATTERNS.forEach(([needle, message]) => {
      if (content.includes(needle)) {
        addIssue(errors, file, 'Ownerless language', message);
      }
    });

    const domainMatches = content.match(/(?:^|\n)\s*(?:\*|#)?\s*@domain\s+([^\n\r]+)/g) || [];
    domainMatches.forEach((line) => {
      const match = String(line).match(/@domain\s+([^\n\r]+)/);
      const value = String(match && match[1] ? match[1] : '').trim();
      if (!DOMAIN_RE.test(value)) {
        addIssue(errors, file, 'Domain token', `Invalid @domain token "${value}".`);
      }
    });

    const yamlDomainMatches = content.match(/(?:^|\n)\s*domain:\s*([^\n\r]+)/g) || [];
    yamlDomainMatches.forEach((line) => {
      const match = String(line).match(/domain:\s*([^\n\r]+)/);
      const value = String(match && match[1] ? match[1] : '').trim().replace(/^['"]|['"]$/g, '');
      if (!DOMAIN_RE.test(value)) {
        addIssue(errors, file, 'Domain token', `Invalid domain token "${value}".`);
      }
    });

    if (file === 'README.md' && !content.includes('ownerless-governance.mdx')) {
      addIssue(warnings, file, 'Ownerless pointers', 'README.md should link to docs-guide/policies/ownerless-governance.mdx.');
    }
  });
}

function runTests(options = {}) {
  const errors = [];
  const warnings = [];
  const stagedOnly = Boolean(options.stagedOnly);
  const explicitFiles = Array.isArray(options.files) ? options.files.map(toPosix) : [];
  const changedSet = new Set(explicitFiles.length > 0 ? explicitFiles : getStagedRepoFiles());

  let manifestEntries = [];
  try {
    manifestEntries = loadManifest();
  } catch (error) {
    addIssue(errors, MANIFEST_PATH, 'Manifest shape', error.message);
    return { passed: false, errors, warnings, total: 0 };
  }

  validateManifest(manifestEntries, errors);
  validatePolicy(errors);
  validateGovernedText(changedSet, stagedOnly, explicitFiles, errors, warnings);

  return {
    passed: errors.length === 0,
    errors,
    warnings,
    total: stagedOnly || explicitFiles.length > 0 ? changedSet.size : GOVERNED_TEXT_FILES.length + 1
  };
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const result = runTests({
    stagedOnly: args.includes('--staged'),
    files: parseFilesArg(args)
  });

  if (result.errors.length > 0) {
    console.error(`❌ Ownerless governance checks failed: ${result.errors.length}`);
    result.errors.forEach((issue) => {
      console.error(`  - [${issue.rule}] ${issue.file}: ${issue.message}`);
    });
  }

  if (result.warnings.length > 0) {
    console.warn(`⚠️  Ownerless governance warnings: ${result.warnings.length}`);
    result.warnings.forEach((issue) => {
      console.warn(`  - [${issue.rule}] ${issue.file}: ${issue.message}`);
    });
  }

  process.exit(result.passed ? 0 : 1);
}

module.exports = { runTests };
