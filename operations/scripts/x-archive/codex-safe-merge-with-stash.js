#!/usr/bin/env node
/**
 * @script            codex-safe-merge-with-stash
 * @category          utility
 * @purpose           governance:agent-governance
 * @scope             tools/scripts, tools/scripts/codex
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Deprecated compatibility shim — blocks stash-based Codex merge flow and directs users to task-finalize, lock-release, and task-cleanup
 * @pipeline          manual — developer tool
 * @usage             node tools/scripts/codex-safe-merge-with-stash.js [flags]
 */

function parseArgs(argv) {
  const args = {
    target: '',
    json: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--target') {
      args.target = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--target=')) {
      args.target = token.slice('--target='.length).trim();
      continue;
    }
    if (token === '--json') {
      args.json = true;
      continue;
    }
    if (token === '--dry-run') {
      continue;
    }
    if (token === '--stash-untracked' || token === '--no-stash-untracked') {
      continue;
    }
    if (token === '--help' || token === '-h') {
      usage();
      process.exit(0);
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return args;
}

function usage() {
  console.log('Usage: node tools/scripts/codex-safe-merge-with-stash.js --target <branch-or-ref> [--json]');
}

function buildResult(target) {
  const suffix = target ? ` for target ${target}` : '';
  return {
    passed: false,
    target,
    message: `stash-based Codex merge flow is disabled${suffix}`,
    recovery: [
      'Do not use git stash for Codex task isolation in this repository.',
      'Use the Codex lifecycle instead:',
      '  1. node tools/scripts/codex/task-finalize.js --branch codex/<id>-<slug>',
      '  2. Merge the branch into docs-v2',
      '  3. node tools/scripts/codex/lock-release.js --branch codex/<id>-<slug>',
      '  4. node tools/scripts/codex/task-cleanup.js --branch codex/<id>-<slug> --apply'
    ]
  };
}

function printResult(result, jsonMode) {
  if (jsonMode) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    return;
  }

  console.error(`❌ ${result.message}`);
  result.recovery.forEach((line) => console.error(line.startsWith('  ') ? line : `  - ${line}`));
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.target) {
    throw new Error('Missing required --target <branch-or-ref>');
  }

  const result = buildResult(args.target);
  printResult(result, args.json);
  process.exit(1);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = { buildResult, parseArgs };
