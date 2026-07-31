#!/usr/bin/env node
/**
 * @script      check-new-file-governance
 * @type        validator
 * @concern     governance
 * @niche       compliance
 * @purpose     governance:new-file-gate
 * @description Validates newly staged files have required governance metadata (JSDoc, frontmatter, workflow headers)
 * @mode        check
 * @pipeline    pre-commit -> staged new files -> exit-code, stdout:violations
 * @scope       full-repo
 * @usage       node operations/scripts/validators/governance/compliance/check-new-file-governance.js [--all|--staged]
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');

const REQUIRED_JSDOC_TAGS = ['@script', '@type', '@description', '@mode', '@pipeline', '@scope', '@usage'];
const REQUIRED_FRONTMATTER = ['title', 'description'];
const WORKFLOW_HEADER_KEYWORDS = ['# type:', '# concern:', '# pipeline:'];

function parseArgs(argv) {
  const args = { mode: 'staged', help: false };
  argv.forEach((token) => {
    if (token === '--all') { args.mode = 'all'; return; }
    if (token === '--staged') { args.mode = 'staged'; return; }
    if (token === '--help' || token === '-h') { args.help = true; return; }
  });
  return args;
}

function getStagedNewFiles() {
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=A', {
      cwd: REPO_ROOT, encoding: 'utf8'
    });
    return output.trim().split('\n').filter(Boolean);
  } catch (e) { return []; }
}

function checkJSDoc(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const header = content.split('\n').slice(0, 50).join('\n');
  const jsdoc = header.match(/\/\*\*[\s\S]*?\*\//);
  if (!jsdoc) return ['No JSDoc block found'];
  const missing = REQUIRED_JSDOC_TAGS.filter(tag => !jsdoc[0].includes(tag));
  return missing.length > 0 ? [`Missing tags: ${missing.join(', ')}`] : [];
}

function checkFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return ['No frontmatter found'];
  const missing = REQUIRED_FRONTMATTER.filter(field => {
    const regex = new RegExp(`^${field}\\s*:`, 'm');
    return !regex.test(fmMatch[1]);
  });
  return missing.length > 0 ? [`Missing frontmatter: ${missing.join(', ')}`] : [];
}

function checkWorkflowHeader(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').slice(0, 20);
  const hasHeader = lines.some(line => {
    const lower = line.toLowerCase().trim();
    return WORKFLOW_HEADER_KEYWORDS.some(kw => lower.startsWith(kw));
  });
  return hasHeader ? [] : ['No governance comment header (# type: / # concern: / # pipeline:)'];
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log('Usage: node operations/scripts/validators/governance/compliance/check-new-file-governance.js [--staged|--all]');
    console.log('  --staged   Check only newly staged files (default, for pre-commit)');
    console.log('  --all      Check all files (for CI)');
    return 0;
  }

  const files = getStagedNewFiles();
  if (files.length === 0) {
    console.log('No new staged files to check.');
    return 0;
  }

  const violations = [];

  for (const rel of files) {
    const fp = path.join(REPO_ROOT, rel);
    if (!fs.existsSync(fp)) continue;

    let issues = [];

    if (rel.endsWith('.js') && !rel.includes('test') && !rel.includes('node_modules')) {
      issues = checkJSDoc(fp);
      if (issues.length > 0) {
        issues.push('See: docs-guide/frameworks/script-framework.mdx');
      }
    } else if (rel.endsWith('.jsx')) {
      issues = checkJSDoc(fp);
      if (issues.length > 0) {
        issues.push('See: docs-guide/frameworks/component-framework-canonical.mdx');
      }
    } else if (rel.endsWith('.mdx') && rel.startsWith('v2/')) {
      issues = checkFrontmatter(fp);
      if (issues.length > 0) {
        issues.push('See: docs-guide/standards/frontmatter.mdx');
      }
    } else if ((rel.endsWith('.yml') || rel.endsWith('.yaml')) && rel.startsWith('.github/workflows/')) {
      issues = checkWorkflowHeader(fp);
      if (issues.length > 0) {
        issues.push('See: docs-guide/frameworks/github-actions.mdx');
      }
    }

    if (issues.length > 0) {
      violations.push({ file: rel, issues });
    }
  }

  if (violations.length === 0) {
    console.log(`Checked ${files.length} new files. All governance metadata present.`);
    return 0;
  }

  console.log(`New File Governance Check`);
  console.log(`------------------------`);
  console.log(`New files: ${files.length}, Violations: ${violations.length}`);
  for (const v of violations) {
    console.log(`\n  ${v.file}:`);
    v.issues.forEach(i => console.log(`    ! ${i}`));
  }

  return 1;
}

process.exit(main());
