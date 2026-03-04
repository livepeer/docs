#!/usr/bin/env node
/**
 * @script codex-safe-merge-with-stash
 * @summary Safely execute an explicit merge request by stashing local changes, merging a target ref, and restoring the stash.
 * @owner docs
 * @scope tools/scripts
 *
 * @usage
 *   node tools/scripts/codex-safe-merge-with-stash.js --target docs-v2
 *
 * @inputs
 *   --target <branch-or-ref> Required merge target.
 *   --stash-untracked Whether to stash untracked files (default: true).
 *   --dry-run Print planned git commands without mutating state.
 *   --json Emit machine-readable result output.
 *
 * @outputs
 *   - Console summary
 *   - Optional JSON result object
 *
 * @exit-codes
 *   0 = merge flow completed successfully
 *   1 = invalid arguments or merge/stash failure
 *
 * @examples
 *   node tools/scripts/codex-safe-merge-with-stash.js --target origin/docs-v2
 *
 * @notes
 *   Designed for explicit human-requested merge operations in multi-agent workflows. No force-push or auto conflict resolution.
 */

const { spawnSync } = require('child_process');

function parseArgs(argv) {
  const args = {
    target: '',
    stashUntracked: true,
    dryRun: false,
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
    if (token === '--stash-untracked') {
      args.stashUntracked = true;
      continue;
    }
    if (token === '--no-stash-untracked') {
      args.stashUntracked = false;
      continue;
    }
    if (token === '--dry-run') {
      args.dryRun = true;
      continue;
    }
    if (token === '--json') {
      args.json = true;
      continue;
    }
    if (token === '--help' || token === '-h') {
      printUsage();
      process.exit(0);
    }
    throw new Error(`Unknown argument: ${token}`);
  }

  if (!args.target) {
    throw new Error('Missing required --target <branch-or-ref>');
  }

  return args;
}

function printUsage() {
  console.log('Usage: node tools/scripts/codex-safe-merge-with-stash.js --target <branch-or-ref> [--dry-run] [--json]');
}

function runGit(args, options = {}) {
  const res = spawnSync('git', args, {
    encoding: 'utf8',
    ...options
  });
  return {
    status: res.status,
    stdout: String(res.stdout || ''),
    stderr: String(res.stderr || ''),
    ok: res.status === 0
  };
}

function runGitOrThrow(args, options = {}) {
  const res = runGit(args, options);
  if (!res.ok) {
    const detail = (res.stderr || res.stdout).trim() || `git ${args.join(' ')} failed`;
    throw new Error(detail);
  }
  return res.stdout.trim();
}

function hasOriginRemote() {
  const res = runGit(['remote', 'get-url', 'origin']);
  return res.ok;
}

function getStashRefByMessage(marker) {
  const list = runGitOrThrow(['stash', 'list', '--format=%gd|%s']);
  if (!list) return '';
  const line = list
    .split('\n')
    .map((entry) => entry.trim())
    .find((entry) => entry.includes(marker));
  if (!line) return '';
  return line.split('|')[0].trim();
}

function getGitStatusPorcelain() {
  return runGitOrThrow(['status', '--porcelain']);
}

function printResult(result, jsonMode) {
  if (jsonMode) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    return;
  }

  const statusIcon = result.passed ? '✅' : '❌';
  console.log(`${statusIcon} ${result.message}`);
  if (result.actions && result.actions.length > 0) {
    result.actions.forEach((action) => console.log(`  - ${action}`));
  }
  if (result.recovery && result.recovery.length > 0) {
    console.log('Recovery steps:');
    result.recovery.forEach((line) => console.log(`  - ${line}`));
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const actions = [];
  const recovery = [];

  try {
    const branch = runGitOrThrow(['rev-parse', '--abbrev-ref', 'HEAD']);
    const dirty = getGitStatusPorcelain().trim().length > 0;
    const marker = `codex-safe-merge:${new Date().toISOString()}:${args.target}`;
    let stashRef = '';

    if (args.dryRun) {
      actions.push(`would evaluate dirty tree on branch ${branch}`);
      if (dirty) {
        actions.push(
          `would run git stash push ${args.stashUntracked ? '-u ' : ''}-m "${marker}"`
        );
      }
      if (hasOriginRemote()) {
        actions.push(`would run git fetch origin ${args.target}`);
      }
      actions.push(`would run git merge --no-edit ${args.target}`);
      if (dirty) {
        actions.push('would run git stash pop <stash-ref> after successful merge');
      }

      printResult(
        {
          passed: true,
          message: 'Dry-run completed.',
          branch,
          target: args.target,
          dirty,
          actions,
          recovery
        },
        args.json
      );
      process.exit(0);
    }

    if (dirty) {
      const stashArgs = ['stash', 'push'];
      if (args.stashUntracked) stashArgs.push('-u');
      stashArgs.push('-m', marker);
      runGitOrThrow(stashArgs);
      stashRef = getStashRefByMessage(marker);
      actions.push(`stashed local changes as ${stashRef || marker}`);
    }

    if (hasOriginRemote()) {
      const fetchRes = runGit(['fetch', 'origin', args.target]);
      if (!fetchRes.ok) {
        actions.push(`fetch skipped/failed for target ${args.target}; proceeding with local refs`);
      } else {
        actions.push(`fetched target from origin: ${args.target}`);
      }
    }

    const mergeRes = runGit(['merge', '--no-edit', args.target]);
    if (!mergeRes.ok) {
      actions.push(`merge failed for target ${args.target}`);
      recovery.push('Resolve or abort merge explicitly (for example: git merge --abort).');
      if (stashRef) {
        recovery.push(`Stashed changes are preserved in ${stashRef}. Apply later with: git stash pop ${stashRef}`);
      }

      printResult(
        {
          passed: false,
          message: `Merge failed for target ${args.target}.`,
          branch,
          target: args.target,
          dirty,
          stashRef,
          actions,
          recovery
        },
        args.json
      );
      process.exit(1);
    }

    actions.push(`merged target ${args.target} into ${branch}`);

    if (stashRef) {
      const popRes = runGit(['stash', 'pop', stashRef]);
      if (!popRes.ok) {
        actions.push(`stash pop failed for ${stashRef}`);
        recovery.push('Resolve stash-pop conflicts and stage resolved files manually.');
        recovery.push(`If needed, stash remains available as ${stashRef}.`);

        printResult(
          {
            passed: false,
            message: 'Merge succeeded but stash pop reported conflicts.',
            branch,
            target: args.target,
            dirty,
            stashRef,
            actions,
            recovery
          },
          args.json
        );
        process.exit(1);
      }
      actions.push(`restored stashed changes from ${stashRef}`);
    }

    printResult(
      {
        passed: true,
        message: `Safe merge completed for target ${args.target}.`,
        branch,
        target: args.target,
        dirty,
        stashRef,
        actions,
        recovery
      },
      args.json
    );
    process.exit(0);
  } catch (error) {
    printResult(
      {
        passed: false,
        message: error.message,
        actions,
        recovery
      },
      args.json
    );
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
