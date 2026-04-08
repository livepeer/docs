#!/usr/bin/env node
/**
 * @script      check-workflow-headers
 * @type        
 * @concern     
 * @niche       
 * @purpose     governance:workflow-compliance
 * @description Validates that GitHub Actions workflow YAML files have governance comment headers
 * @mode        read-only
 * @pipeline    pr-changed -> .github/workflows/*.yml -> exit-code, stdout:violations
 * @scope       .github/workflows/
 * @usage       node operations/scripts/validators/governance/compliance/check-workflow-headers.js [--json]
 */
'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const WORKFLOWS_DIR = path.join(REPO_ROOT, '.github/workflows');

const GOVERNANCE_KEYWORDS = ['# type:', '# concern:', '# pipeline:', '# pattern:'];

// ── Args ────────────────────────────────
function parseArgs(argv) {
  const args = { json: false, help: false };
  argv.forEach((token) => {
    if (token === '--json') { args.json = true; return; }
    if (token === '--help' || token === '-h') { args.help = true; return; }
  });
  return args;
}

// ── Core ────────────────────────────────
function checkWorkflowHeader(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').slice(0, 20);

  let hasGovernanceHeader = false;
  for (const line of lines) {
    const lower = line.toLowerCase().trim();
    for (const keyword of GOVERNANCE_KEYWORDS) {
      if (lower.startsWith(keyword)) {
        hasGovernanceHeader = true;
        break;
      }
    }
    if (hasGovernanceHeader) break;
  }

  return hasGovernanceHeader;
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log('Usage: node operations/scripts/validators/governance/compliance/check-workflow-headers.js [--json]');
    return 0;
  }

  let files;
  try {
    files = fs.readdirSync(WORKFLOWS_DIR)
      .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
      .map(f => path.join(WORKFLOWS_DIR, f));
  } catch (e) {
    console.error('Could not read .github/workflows/');
    return 2;
  }

  const violations = [];
  for (const file of files) {
    if (!checkWorkflowHeader(file)) {
      violations.push(path.relative(REPO_ROOT, file));
    }
  }

  if (args.json) {
    console.log(JSON.stringify({
      totalWorkflows: files.length,
      violations: violations.length,
      details: violations.map(f => ({ file: f, missing: 'governance comment header' }))
    }, null, 2));
    return violations.length > 0 ? 1 : 0;
  }

  console.log(`Workflow Header Check`);
  console.log(`─────────────────────`);
  console.log(`Workflows scanned: ${files.length}`);

  if (violations.length === 0) {
    console.log(`✓ All workflows have governance headers.`);
    return 0;
  }

  console.log(`\nMissing governance headers (${violations.length}):`);
  for (const v of violations) {
    console.log(`  ✗ ${v}`);
  }

  console.log(`\nExpected header format (first 20 lines of YAML):`);
  console.log(`  # type: integrator|generator|validator|audit|remediator|dispatch|interface`);
  console.log(`  # concern: copy|health|maintenance|discoverability|governance|brand`);
  console.log(`  # pipeline: P2|P3|P4|P5|P5-auto|P6|P7|P8`);

  return 1;
}

process.exit(main());
