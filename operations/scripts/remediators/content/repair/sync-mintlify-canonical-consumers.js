#!/usr/bin/env node
/**
 * @script      sync-mintlify-canonical-consumers
 * @type        remediator
 * @concern     health
 * @niche       repair
 * @purpose     
 * @description Repair registered Mintlify consumer surfaces by applying exact path rewrites from the canonical sync registry without broad repo-wide content mutation.
 * @mode        repair
 * @pipeline    manual
 * @scope       docs-guide/canonical/collation-data/Mintlify, docs-guide/contributing, AGENTS.md, .github, .claude, ai-tools, snippets, workspace/plan/active
 * @usage       node operations/scripts/remediators/content/repair/sync-mintlify-canonical-consumers.js [--staged] [--check|--write] [--stage] [--json]
 * @policy      R-R14, R-R18
 */

const sync = require('../../../config/mintlify-canonical-sync');

function parseArgs(argv) {
  const args = {
    mode: 'check',
    stagedOnly: false,
    stage: false,
    verify: false,
    json: false
  };
  let explicitModeCount = 0;

  argv.forEach((token) => {
    if (token === '--check') {
      args.mode = 'check';
      explicitModeCount += 1;
    } else if (token === '--write') {
      args.mode = 'write';
      explicitModeCount += 1;
    } else if (token === '--staged') args.stagedOnly = true;
    else if (token === '--stage') args.stage = true;
    else if (token === '--json') args.json = true;
    else if (token === '--help' || token === '-h') args.help = true;
    else throw new Error(`Unknown argument: ${token}`);
  });

  if (explicitModeCount > 1) throw new Error('Choose only one mode: --check or --write');
  if (args.stage && args.mode !== 'write') throw new Error('--stage requires --write');
  return args;
}

function run(options = {}) {
  return sync.runSyncRepair({
    repoRoot: options.repoRoot || sync.getRepoRoot(),
    stagedOnly: Boolean(options.stagedOnly),
    write: Boolean(options.write),
    stage: Boolean(options.stage)
  });
}

function usage() {
  console.log(
    'Usage: node operations/scripts/remediators/content/repair/sync-mintlify-canonical-consumers.js [--staged] [--check|--write] [--stage] [--json]'
  );
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    process.exit(0);
  }

  const result = run({ stagedOnly: args.stagedOnly, write: args.mode === 'write', stage: args.stage });
  if (args.json) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } else if (result.skipped) {
    console.log('Mintlify canonical sync remediator skipped: no staged Mintlify-governance changes.');
  } else if (args.mode === 'write') {
    console.log(`Applied Mintlify canonical consumer sync across ${result.changedCount} file(s).`);
    result.changedFiles.forEach((repoPath) => console.log(`  ${repoPath}`));
    result.commandRuns.forEach((commandRun) => console.log(`  generator: ${commandRun.command}`));
  } else {
    console.log(`Planned Mintlify canonical consumer sync across ${result.changedCount} file(s).`);
    result.rewrites.forEach((rewrite) => console.log(`  ${rewrite.path} (${rewrite.replacements} replacements)`));
  }
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`sync-mintlify-canonical-consumers failed: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  parseArgs,
  run
};
