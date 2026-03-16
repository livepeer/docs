#!/usr/bin/env node
/**
 * @script            repair-ownerless-language
 * @category          remediator
 * @purpose           governance:agent-governance
 * @scope             AGENTS.md, .allowlist, .github, .claude, .cursor, .windsurf, README.md, contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md, docs-guide
 * @owner             docs
 * @needs             R-R14, R-R29
 * @purpose-statement Applies deterministic wording repairs that remove human-owner dependency from governed GitHub and contributor surfaces.
 * @pipeline          manual
 * @dualmode          --check (default) | --write
 * @usage             node tools/scripts/repair-ownerless-language.js [--check|--write] [--files a,b]
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../..');
const DEFAULT_FILES = [
  'README.md',
  'AGENTS.md',
  '.allowlist',
  '.github/copilot-instructions.md',
  '.claude/CLAUDE.md',
  '.cursor/rules/repo-governance.mdc',
  '.windsurf/rules/repo-governance.md',
  'contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md',
  '.github/ISSUE_TEMPLATE/01_bug_report.yml',
  '.github/ISSUE_TEMPLATE/02_docs_page_issue.yml',
  '.github/ISSUE_TEMPLATE/03_feature_request.yml',
  '.github/ISSUE_TEMPLATE/04_content_request.yml',
  '.github/ISSUE_TEMPLATE/05_tooling_ci_issue.yml',
  '.github/ISSUE_TEMPLATE/06_question_clarification.yml',
  '.github/ISSUE_TEMPLATE/feature_internal.yml',
  '.github/ISSUE_TEMPLATE/config.yml',
  '.github/workflows/issue-auto-label.yml',
  '.github/workflows/discord-issue-intake.yml',
  '.github/workflows/openapi-reference-validation.yml',
  '.github/workflows/docs-v2-issue-indexer.yml',
  'docs-guide/catalog/templates-catalog.mdx',
  'docs-guide/features/automations.mdx',
  'docs-guide/policies/source-of-truth-policy.mdx',
  'docs-guide/policies/infrastructure-principles.mdx',
  'docs-guide/policies/ownerless-governance.mdx',
  'tests/WHEN-TESTS-RUN.md',
  'tests/utils/openapi-rolling-issue.js',
  'tests/unit/openapi-rolling-issue.test.js'
];

const REPLACEMENTS = [
  ['Action requested from maintainers', 'Requested repository outcome'],
  ['What specific action should maintainers take?', 'What exact repository outcome should happen next?'],
  ['Select maintainer scheduling priority (separate from classification severity/impact).', 'Select queue priority (separate from classification severity/impact).'],
  ['Select issue severity/impact. This is separate from priority (maintainer scheduling).', 'Select issue severity/impact. This is separate from queue priority.'],
  ['status: needs-triage', 'status: needs-routing'],
  ['Needs initial maintainer triage', 'Needs initial repository routing'],
  ['Awaiting maintainer triage', 'Awaiting repository routing'],
  ['Ask a tracked question that needs maintainer clarification.', 'Ask a tracked question that needs repository clarification.'],
  ['Get real-time support from the community and maintainers.', 'Get real-time support from the community.'],
  ['maintainer CLI', 'repo CLI'],
  ['validate local lock ownership on `codex/*`', 'validate local execution lock state on `codex/*`'],
  ['canonical ownership boundaries', 'canonical source boundaries'],
  ['policy ownership', 'policy layering'],
  ['Folder ownership is explicit and immutable.', 'Folder boundaries are explicit and immutable.'],
  ['Any new rule must declare layer ownership before implementation.', 'Any new rule must declare its primary gate layer before implementation.'],
  ['Update this document in the same PR when ownership boundaries change.', 'Update this document in the same PR when gate boundaries change.'],
  ['Internal maintainer source of truth.', 'Canonical internal navigation map.'],
  ['I provided enough detail for maintainers to reproduce and act.', 'I provided enough detail for contributors and agents to reproduce and act.'],
  ['I provided enough detail for maintainers to evaluate and implement.', 'I provided enough detail for contributors and agents to evaluate and implement.'],
  ['I provided enough detail for maintainers to evaluate and plan this content.', 'I provided enough detail for contributors and agents to evaluate and plan this content.'],
  ['I provided enough detail for maintainers to answer clearly.', 'I provided enough detail for contributors and agents to answer clearly.']
];

function usage() {
  console.log('Usage: node tools/scripts/repair-ownerless-language.js [--check|--write] [--files a,b]');
}

function parseArgs(argv) {
  const args = { mode: 'check', files: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--check') {
      args.mode = 'check';
      continue;
    }
    if (token === '--write') {
      args.mode = 'write';
      continue;
    }
    if (token === '--files' || token === '--file') {
      const raw = String(argv[i + 1] || '').trim();
      if (raw) {
        raw.split(',').map((part) => part.trim()).filter(Boolean).forEach((part) => args.files.push(part));
      }
      i += 1;
      continue;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }
  return args;
}

function applyReplacements(content) {
  let next = String(content || '');
  REPLACEMENTS.forEach(([from, to]) => {
    next = next.split(from).join(to);
  });
  return next;
}

function run(args) {
  const files = args.files.length > 0 ? args.files : DEFAULT_FILES;
  const changed = [];

  files
    .filter((repoPath) => fs.existsSync(path.join(REPO_ROOT, repoPath)))
    .forEach((repoPath) => {
      const absPath = path.join(REPO_ROOT, repoPath);
      const before = fs.readFileSync(absPath, 'utf8');
      const after = applyReplacements(before);
      if (before === after) return;
      changed.push(repoPath);
      if (args.mode === 'write') {
        fs.writeFileSync(absPath, after, 'utf8');
      }
    });

  if (changed.length === 0) {
    console.log(`No ownerless-language ${args.mode === 'write' ? 'repairs' : 'drift'} found.`);
    return 0;
  }

  console.log(`${args.mode === 'write' ? 'Applied ownerless-language repairs' : 'Ownerless-language drift found'} in ${changed.length} file(s):`);
  changed.forEach((repoPath) => console.log(`  - ${repoPath}`));
  return args.mode === 'write' ? 0 : 1;
}

if (require.main === module) {
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

  process.exit(run(args));
}

module.exports = {
  DEFAULT_FILES,
  REPLACEMENTS,
  applyReplacements,
  parseArgs,
  run
};
