#!/usr/bin/env node
/**
 * @script      repair-script-inventory
 * @type        remediator
 * @concern     governance
 * @niche       scripts
 * @purpose     
 * @description Repairs script headers and classification data. Thin wrapper that runs audit-script-inventory with --fix. Split from audit-script-inventory.js.
 * @mode        repair
 * @pipeline    manual
 * @scope       operations/scripts
 * @usage       node operations/scripts/remediators/governance/scripts/repair-script-inventory.js [--dry-run] [--staged-only] [--files <path,...>] [--json] [--md] [--output <dir>]
 */

// Post-remediation verification support (D-GOV-03)
const VERIFY_MODE = process.argv.includes('--verify');
const { spawnSync } = require('child_process');
const REPO_ROOT = process.cwd();
const AUDIT_SCRIPT = 'operations/scripts/validators/governance/pr/audit-script-inventory.js';

function main() {
  const passthrough = process.argv.slice(2);

  // Always add --fix; strip it if user passed it redundantly
  const args = passthrough.filter(a => a !== '--fix');
  args.unshift('--fix');

  const result = spawnSync('node', [
    AUDIT_SCRIPT,
    ...args
  ], {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    stdio: 'inherit'
  });

  process.exit(result.status || 0);
}

if (require.main === module) {
  main();
}

module.exports = { main };
