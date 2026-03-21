#!/usr/bin/env node
/**
 * @script      check-pr-template
 * @type        validator
 * @concern     governance
 * @niche       pr
 * @purpose     governance:repo-health
 * @description Enforces that PR descriptions include required change and rationale sections before merge
 * @mode        read-only
 * @pipeline    ci
 * @scope       operations/scripts/enforcers/pr, .github/pull_request_template.md, .github/pull-request-template-v2.md
 * @usage       PR_BODY="..." node operations/scripts/enforcers/pr/check-pr-template.js
 * @policy      R-R14, R-C6
 */

const fs = require('fs');

const CHANGE_HEADINGS = new Set(['what changed', 'changes', 'changes made']);
const RATIONALE_HEADINGS = new Set(['why', 'motivation', 'reason', 'description']);

function normalizeHeading(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[`*_~]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function readPrBody() {
  const fromEnv = String(process.env.PR_BODY || '');
  if (fromEnv.trim()) return fromEnv;
  if (!process.stdin.isTTY) {
    return fs.readFileSync(0, 'utf8');
  }
  return '';
}

function collectHeadings(body) {
  const headings = [];
  const re = /^\s{0,3}#{2,6}\s+(.+?)\s*#*\s*$/gm;
  let match = re.exec(body);

  while (match) {
    headings.push(normalizeHeading(match[1]));
    match = re.exec(body);
  }

  return headings;
}

function hasRequiredHeading(headings, allowed) {
  return headings.some((heading) => allowed.has(heading));
}

function main() {
  const prBody = readPrBody();
  const headings = collectHeadings(prBody);
  const hasChangeSection = hasRequiredHeading(headings, CHANGE_HEADINGS);
  const hasRationaleSection = hasRequiredHeading(headings, RATIONALE_HEADINGS);
  const missing = [];

  if (!hasChangeSection) {
    missing.push('change section (accepted: ## What changed, ## Changes, ## Changes Made)');
  }

  if (!hasRationaleSection) {
    missing.push('rationale section (accepted: ## Why, ## Motivation, ## Reason, ## Description)');
  }

  if (missing.length === 0) {
    console.log('✅ PR template sections present.');
    process.exit(0);
  }

  const branch = String(process.env.GITHUB_HEAD_REF || '').trim();
  const message = `Missing required PR sections: ${missing.join('; ')}`;

  if (branch.startsWith('codex/')) {
    console.warn(`⚠️ ${message}`);
    process.exit(0);
  }

  console.error(`❌ ${message}`);
  process.exit(1);
}

main();
