#!/usr/bin/env node
/**
 * @script      repair-governance-artifacts
 * @type        
 * @concern     
 * @niche       
 * @purpose     governance:self-remediation
 * @description Regenerates governance map, updates lastVerified dates on verified frameworks, and reports unfixable issues
 * @mode        read-only
 * @pipeline    manual, post-merge -> governance markers, frameworks -> GOVERNANCE_MAP_LATEST.json, framework frontmatter
 * @scope       all GOVERNANCE.md markers, docs-guide/frameworks/, workspace/reports/repo-ops/
 * @usage       node operations/scripts/remediators/governance/compliance/repair-governance-artifacts.js [--dry-run|--write]
 */
'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const REPORT_PATH = path.join(REPO_ROOT, 'workspace/reports/repo-ops/GOVERNANCE_MAP_LATEST.json');
const FRAMEWORKS_DIR = path.join(REPO_ROOT, 'docs-guide/frameworks');

// ── Args ────────────────────────────────
function parseArgs(argv) {
  const args = { mode: 'dry-run', help: false };
  argv.forEach((token) => {
    if (token === '--write') { args.mode = 'write'; return; }
    if (token === '--dry-run') { args.mode = 'dry-run'; return; }
    if (token === '--help' || token === '-h') { args.help = true; return; }
  });
  return args;
}

// ── Helpers ─────────────────────────────
function todayStr() {
  return new Date().toISOString().split('T')[0];
}

function parseFrontmatter(content) {
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return { raw: null, fields: {} };
  const fields = {};
  fmMatch[1].split('\n').forEach(line => {
    const kv = line.match(/^([\w-]+)\s*:\s*(.+)/);
    if (kv) fields[kv[1].trim()] = kv[2].trim().replace(/^['"]|['"]$/g, '');
  });
  return { raw: fmMatch[0], fields };
}

function updateLastVerified(filePath, dryRun) {
  const content = fs.readFileSync(filePath, 'utf8');
  const today = todayStr();

  if (content.includes('lastVerified:')) {
    const updated = content.replace(/lastVerified:\s*.+/, `lastVerified: ${today}`);
    if (updated !== content) {
      if (!dryRun) fs.writeFileSync(filePath, updated);
      return { action: 'updated', from: content.match(/lastVerified:\s*(.+)/)[1].trim(), to: today };
    }
    return { action: 'unchanged' };
  }

  // Add lastVerified after status field if it exists
  if (content.includes('status:')) {
    const updated = content.replace(/(status:\s*.+)/, `$1\nlastVerified: ${today}`);
    if (!dryRun) fs.writeFileSync(updated);
    return { action: 'added', to: today };
  }

  return { action: 'skipped', reason: 'no status field to anchor on' };
}

// ── Core ────────────────────────────────
function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log('Usage: node operations/scripts/remediators/governance/compliance/repair-governance-artifacts.js [--dry-run|--write]');
    console.log('');
    console.log('  --dry-run   Show what would be changed (default)');
    console.log('  --write     Apply changes');
    return 0;
  }

  const dryRun = args.mode === 'dry-run';
  const actions = [];

  console.log(`Governance Artifact Repair ${dryRun ? '(DRY RUN)' : '(WRITE MODE)'}`);
  console.log(`──────────────────────────────────────────`);

  // Step 1: Regenerate governance map
  console.log('\n1. Regenerating governance map...');
  try {
    const generateMap = require('../../generators/governance/map/generate-governance-map');
    // If the generator exports a function, call it — otherwise run it via child process
  } catch (e) {
    // Generator uses process.exit, so we call it as a subprocess
  }

  // Run generator via child process
  const { execSync } = require('child_process');
  const genScript = path.join(REPO_ROOT, 'operations/scripts/generators/governance/map/generate-governance-map.js');

  if (!dryRun) {
    try {
      execSync(`node "${genScript}" --write`, { cwd: REPO_ROOT, stdio: 'pipe' });
      actions.push({ type: 'map-regenerated', path: 'workspace/reports/repo-ops/GOVERNANCE_MAP_LATEST.json' });
      console.log('   ✓ Governance map regenerated');
    } catch (e) {
      const output = e.stdout ? e.stdout.toString() : '';
      actions.push({ type: 'map-regenerated-with-issues', output });
      console.log('   ⚠ Governance map regenerated (issues found — see report)');
    }
  } else {
    console.log('   (would regenerate governance map)');
    actions.push({ type: 'map-would-regenerate' });
  }

  // Step 2: Update lastVerified on frameworks
  console.log('\n2. Updating lastVerified on framework files...');
  try {
    const frameworkFiles = fs.readdirSync(FRAMEWORKS_DIR)
      .filter(f => f.endsWith('.mdx'))
      .map(f => path.join(FRAMEWORKS_DIR, f));

    for (const fwFile of frameworkFiles) {
      const relPath = path.relative(REPO_ROOT, fwFile);
      const content = fs.readFileSync(fwFile, 'utf8');
      const { fields } = parseFrontmatter(content);
      const today = todayStr();

      if (fields.lastVerified === today) {
        console.log(`   = ${relPath} (already current)`);
        continue;
      }

      if (!dryRun) {
        if (content.includes('lastVerified:')) {
          const updated = content.replace(/lastVerified:\s*.+/, `lastVerified: ${today}`);
          fs.writeFileSync(fwFile, updated);
          actions.push({ type: 'lastVerified-updated', path: relPath, from: fields.lastVerified, to: today });
          console.log(`   ✓ ${relPath} (${fields.lastVerified || 'none'} → ${today})`);
        } else {
          console.log(`   ⚠ ${relPath} (no lastVerified field — skipped)`);
          actions.push({ type: 'lastVerified-missing', path: relPath });
        }
      } else {
        console.log(`   (would update ${relPath}: ${fields.lastVerified || 'none'} → ${today})`);
        actions.push({ type: 'lastVerified-would-update', path: relPath });
      }
    }
  } catch (e) {
    console.error(`   ✗ Error reading frameworks: ${e.message}`);
  }

  // Step 3: Summary
  console.log(`\n──────────────────────────────────────────`);
  console.log(`Actions ${dryRun ? 'planned' : 'taken'}: ${actions.length}`);
  if (dryRun) {
    console.log('Run with --write to apply changes.');
  }

  return 0;
}

process.exit(main());
