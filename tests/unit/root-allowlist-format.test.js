#!/usr/bin/env node
/**
 * @script            root-allowlist-format.test
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tests/unit, .allowlist, AGENTS.md, .claude, .cursor, .windsurf
 * @owner             docs
 * @needs             R-R14, R-R29
 * @purpose-statement Validates that .allowlist stays machine-readable, root-only, and aligned with the canonical agent root layout.
 * @pipeline          P1, P3
 * @usage             node tests/unit/root-allowlist-format.test.js
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../..');
const ALLOWLIST_PATH = path.join(REPO_ROOT, '.allowlist');
const REQUIRED_ENTRIES = ['AGENTS.md', '.claude', '.cursor', '.windsurf', '.github', '.codex'];
const FORBIDDEN_ENTRIES = [
  '.cursorrules',
  'ASSISTANT.md',
  'Assistant.md',
  '.mintlify',
  '.claude/CLAUDE.md',
  '.cursor/rules/',
  '.windsurf/rules/',
  '.github/copilot-instructions.md'
];

function addIssue(target, rule, message) {
  target.push({
    file: '.allowlist',
    rule,
    message,
    line: 1
  });
}

function parseAllowlist(errors) {
  if (!fs.existsSync(ALLOWLIST_PATH)) {
    addIssue(errors, 'Root allowlist format', '.allowlist is missing.');
    return [];
  }

  const raw = fs.readFileSync(ALLOWLIST_PATH, 'utf8');
  const entries = [];

  raw.split(/\r?\n/).forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    if (line.includes('<!--') || line.includes('-->')) {
      errors.push({
        file: '.allowlist',
        rule: 'Root allowlist format',
        message: 'HTML comments are not allowed in .allowlist.',
        line: index + 1
      });
      return;
    }

    if (trimmed.startsWith('#')) return;

    if (trimmed !== line) {
      errors.push({
        file: '.allowlist',
        rule: 'Root allowlist format',
        message: 'Non-comment entries must not have leading or trailing whitespace.',
        line: index + 1
      });
    }

    entries.push({ value: trimmed, line: index + 1 });
  });

  return entries;
}

function runTests() {
  const errors = [];
  const warnings = [];

  console.log('🧪 Root Allowlist Format Unit Tests');

  const entries = parseAllowlist(errors);
  const seen = new Set();

  entries.forEach((entry) => {
    if (entry.value.includes('/')) {
      errors.push({
        file: '.allowlist',
        rule: 'Root allowlist format',
        message: `Nested paths are not allowed: ${entry.value}`,
        line: entry.line
      });
    }

    if (seen.has(entry.value)) {
      errors.push({
        file: '.allowlist',
        rule: 'Root allowlist format',
        message: `Duplicate allowlist entry: ${entry.value}`,
        line: entry.line
      });
    } else {
      seen.add(entry.value);
    }

    if (!fs.existsSync(path.join(REPO_ROOT, entry.value))) {
      errors.push({
        file: '.allowlist',
        rule: 'Root allowlist format',
        message: `Allowlist entry does not exist at repo root: ${entry.value}`,
        line: entry.line
      });
    }
  });

  REQUIRED_ENTRIES.forEach((entry) => {
    if (!seen.has(entry)) {
      addIssue(errors, 'Root allowlist contract', `Missing required canonical root entry: ${entry}`);
    }
  });

  FORBIDDEN_ENTRIES.forEach((entry) => {
    if (seen.has(entry)) {
      addIssue(errors, 'Root allowlist contract', `Forbidden legacy or nested entry still present: ${entry}`);
    }
  });

  return {
    passed: errors.length === 0,
    total: 2,
    errors,
    warnings
  };
}

if (require.main === module) {
  const result = runTests();
  if (result.passed) {
    console.log('\n✅ Root allowlist format unit tests passed');
    process.exit(0);
  }
  console.error(`\n❌ ${result.errors.length} root allowlist format unit test failure(s)`);
  result.errors.forEach((entry) => console.error(`  - ${entry.message}`));
  process.exit(1);
}

module.exports = { runTests };
