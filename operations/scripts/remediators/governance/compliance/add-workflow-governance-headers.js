#!/usr/bin/env node
/**
 * @script      add-workflow-governance-headers
 * @type        remediator
 * @concern     governance
 * @niche       compliance
 * @purpose     
 * @description Adds governance comment headers to GitHub Actions workflow YAML files based on their governed filename pattern
 * @mode        repair
 * @pipeline    manual -> .github/workflows/*.yml -> edited workflow files
 * @scope       .github/workflows/
 * @usage       node operations/scripts/remediators/governance/compliance/add-workflow-governance-headers.js [--dry-run|--write]
 */
'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const WORKFLOWS_DIR = path.join(REPO_ROOT, '.github/workflows');

// ── Filename pattern: type-concern-verb-detail.yml ──
// Examples: validator-health-check-broken-links.yml
//           integrator-copy-update-discord-data.yml
//           generator-maintenance-generate-docs-index.yml

const TYPE_PATTERN = /^(audit|validator|generator|integrator|remediator|dispatch|interface)-/;
const CONCERN_MAP = {
  'health': 'health',
  'copy': 'copy',
  'brand': 'brand',
  'governance': 'governance',
  'maintenance': 'maintenance',
  'discoverability': 'discoverability',
};

const PIPELINE_BY_TYPE = {
  'validator': 'P3',
  'generator': 'P4',
  'integrator': 'P5-auto',
  'audit': 'P5',
  'remediator': 'P6',
  'dispatch': 'P4',
  'interface': 'P7',
};

// Override pipeline for known hard gates
const PIPELINE_OVERRIDES = {
  'validator-copy-check-content-quality-suite.yml': 'P2',
  'validator-governance-check-codex-compliance.yml': 'P2',
};

const GOVERNANCE_KEYWORDS = ['# type:', '# concern:', '# pipeline:'];

function parseArgs(argv) {
  const args = { mode: 'dry-run', help: false,
    verify: false };
  argv.forEach((token) => {
    if (token === '--write') { args.mode = 'write'; return; }
    if (token === '--dry-run') { args.mode = 'dry-run'; return; }
    if (token === '--help' || token === '-h') { args.help = true; return; }
  });
  return args;
}

function hasGovernanceHeader(content) {
  const lines = content.split('\n').slice(0, 20);
  for (const line of lines) {
    const lower = line.toLowerCase().trim();
    for (const keyword of GOVERNANCE_KEYWORDS) {
      if (lower.startsWith(keyword)) return true;
    }
  }
  return false;
}

function inferFromFilename(filename) {
  const base = filename.replace(/\.ya?ml$/, '');
  const typeMatch = base.match(TYPE_PATTERN);
  if (!typeMatch) return null;

  const type = typeMatch[1];
  const rest = base.substring(type.length + 1); // after "type-"

  // Extract concern (second segment)
  let concern = null;
  for (const [key] of Object.entries(CONCERN_MAP)) {
    if (rest.startsWith(key + '-') || rest === key) {
      concern = key;
      break;
    }
  }

  const pipeline = PIPELINE_OVERRIDES[filename] || PIPELINE_BY_TYPE[type] || 'P3';

  return { type, concern: concern || 'unknown', pipeline };
}

function buildHeader(info) {
  return [
    `# type: ${info.type}`,
    `# concern: ${info.concern}`,
    `# pipeline: ${info.pipeline}`,
    ''
  ].join('\n');
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log('Usage: node operations/scripts/remediators/governance/compliance/add-workflow-governance-headers.js [--dry-run|--write]');
    return 0;
  }

  const dryRun = args.mode === 'dry-run';
  const files = fs.readdirSync(WORKFLOWS_DIR)
    .filter(f => (f.endsWith('.yml') || f.endsWith('.yaml')) && f !== 'GOVERNANCE.md');

  let added = 0, skipped = 0, noMatch = 0;

  console.log(`Workflow Governance Header Injection ${dryRun ? '(DRY RUN)' : '(WRITE MODE)'}`);
  console.log(`─────────────────────────────────────────────`);

  for (const file of files) {
    const filePath = path.join(WORKFLOWS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');

    if (hasGovernanceHeader(content)) {
      skipped++;
      continue;
    }

    const info = inferFromFilename(file);
    if (!info) {
      noMatch++;
      console.log(`  ? ${file} — cannot infer type from filename`);
      continue;
    }

    const header = buildHeader(info);

    if (dryRun) {
      console.log(`  + ${file} → type:${info.type} concern:${info.concern} pipeline:${info.pipeline}`);
    } else {
      fs.writeFileSync(filePath, header + content);
      console.log(`  ✓ ${file} → type:${info.type} concern:${info.concern} pipeline:${info.pipeline}`);
    }
    added++;
  }

  console.log(`\n─────────────────────────────────────────────`);
  console.log(`Total: ${files.length}, Added: ${added}, Already had: ${skipped}, No match: ${noMatch}`);
  if (dryRun) console.log('Run with --write to apply.');

  return 0;
}

process.exit(main());
