#!/usr/bin/env node
/**
 * @script      check-mintlify-canonical-sync
 * @type        
 * @concern     
 * @niche       
 * @purpose     governance:agent-governance
 * @description Enforce the Mintlify canonical-sync contract so archived legacy sources stay moved, registered consumers stay updated, and retained-source logs match the registry.
 * @mode        read-only
 * @pipeline    manual, ci
 * @scope       docs-guide/canonical/collation-data/Mintlify, docs-guide/contributing, AGENTS.md, .github, .claude, ai-tools, snippets, v2/resources/documentation-guide, workspace/plan/active
 * @usage       node operations/scripts/validators/governance/compliance/check-mintlify-canonical-sync.js [--staged] [--json]
 * @policy      R-R14, R-R18
 */

const sync = require('../../../config/mintlify-canonical-sync');

function parseArgs(argv) {
  const args = {
    stagedOnly: false,
    json: false
  };

  argv.forEach((token) => {
    if (token === '--staged') args.stagedOnly = true;
    else if (token === '--json') args.json = true;
    else if (token === '--help' || token === '-h') args.help = true;
    else throw new Error(`Unknown argument: ${token}`);
  });

  return args;
}

function formatFinding(finding) {
  return `${finding.path} [${finding.rule}] ${finding.message}`;
}

function run(options = {}) {
  return sync.runSyncCheck({
    repoRoot: options.repoRoot || sync.getRepoRoot(),
    stagedOnly: Boolean(options.stagedOnly)
  });
}

function usage() {
  console.log(
    'Usage: node operations/scripts/validators/governance/compliance/check-mintlify-canonical-sync.js [--staged] [--json]'
  );
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    process.exit(0);
  }

  const result = run({ stagedOnly: args.stagedOnly });
  if (args.json) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } else if (result.skipped) {
    console.log('Mintlify canonical sync check skipped: no staged Mintlify-governance changes.');
  } else if (result.findings.length === 0) {
    console.log('Mintlify canonical sync check passed.');
  } else {
    result.findings.forEach((finding) => {
      const printer = finding.severity === 'warning' ? console.warn : console.error;
      printer(`${finding.severity.toUpperCase()} ${formatFinding(finding)}`);
    });
  }

  process.exit(result.passed ? 0 : 1);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`check-mintlify-canonical-sync failed: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  formatFinding,
  parseArgs,
  run
};
