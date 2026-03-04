#!/usr/bin/env node
/**
 * @script codex-commit
 * @summary Create commits through a guarded interface that supports audited human-requested no-verify overrides.
 * @owner docs
 * @scope tools/scripts
 *
 * @usage
 *   node tools/scripts/codex-commit.js --message "chore: update docs"
 *
 * @inputs
 *   --message <text> Required commit subject line.
 *   --no-verify Optional flag; only allowed with explicit human override fields.
 *   --human-override <true|false> Required when --no-verify is used.
 *   --override-note <text> Required when --no-verify is used.
 *   --reason <text> Optional reason (default: user-directed override).
 *   --dry-run Print the git command and commit body without executing.
 *   --json Emit machine-readable result output.
 *
 * @outputs
 *   - Commit on current branch
 *   - Console summary
 *
 * @exit-codes
 *   0 = commit command succeeded
 *   1 = invalid arguments or git commit failed
 *
 * @examples
 *   node tools/scripts/codex-commit.js --message "docs: update nav"
 *
 * @notes
 *   Use no-verify only for explicit human requests and include audit metadata.
 */

const { spawnSync } = require('child_process');

function parseArgs(argv) {
  const args = {
    message: '',
    noVerify: false,
    humanOverride: '',
    overrideNote: '',
    reason: 'user-directed override',
    dryRun: false,
    json: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--message') {
      args.message = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--message=')) {
      args.message = token.slice('--message='.length).trim();
      continue;
    }
    if (token === '--no-verify') {
      args.noVerify = true;
      continue;
    }
    if (token === '--human-override') {
      args.humanOverride = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--human-override=')) {
      args.humanOverride = token.slice('--human-override='.length).trim();
      continue;
    }
    if (token === '--override-note') {
      args.overrideNote = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--override-note=')) {
      args.overrideNote = token.slice('--override-note='.length).trim();
      continue;
    }
    if (token === '--reason') {
      args.reason = String(argv[i + 1] || '').trim() || args.reason;
      i += 1;
      continue;
    }
    if (token.startsWith('--reason=')) {
      args.reason = token.slice('--reason='.length).trim() || args.reason;
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

  if (!args.message) {
    throw new Error('Missing required --message <text>');
  }

  if (args.noVerify) {
    if (args.humanOverride !== 'true') {
      throw new Error('--no-verify requires --human-override true');
    }
    if (!args.overrideNote) {
      throw new Error('--no-verify requires --override-note "<explicit user instruction>"');
    }
  }

  return args;
}

function printUsage() {
  console.log('Usage: node tools/scripts/codex-commit.js --message "<text>" [--no-verify --human-override true --override-note "..."]');
}

function buildAuditBlock(args) {
  if (!args.noVerify) return '';
  return [
    '[override-audit]',
    'override_type: no-verify',
    'requested_by: human',
    `request_context: "${args.overrideNote.replace(/"/g, '\\"')}"`,
    `reason: "${args.reason.replace(/"/g, '\\"')}"`,
    `requested_at: "${new Date().toISOString()}"`
  ].join('\n');
}

function runCommit(args, bodyBlock) {
  const commitArgs = ['commit'];
  if (args.noVerify) commitArgs.push('--no-verify');
  commitArgs.push('-m', args.message);
  if (bodyBlock) {
    commitArgs.push('-m', bodyBlock);
  }

  return spawnSync('git', commitArgs, { encoding: 'utf8' });
}

function printResult(result, jsonMode) {
  if (jsonMode) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    return;
  }

  if (result.passed) {
    console.log(`✅ ${result.message}`);
  } else {
    console.error(`❌ ${result.message}`);
  }

  if (result.command) {
    console.log(`Command: ${result.command}`);
  }
}

function main() {
  try {
    const args = parseArgs(process.argv.slice(2));
    const auditBlock = buildAuditBlock(args);
    const commandPreview = `git commit${args.noVerify ? ' --no-verify' : ''} -m "${args.message}"${auditBlock ? ' -m "<override-audit>"' : ''}`;

    if (args.dryRun) {
      printResult(
        {
          passed: true,
          message: 'Dry-run completed.',
          command: commandPreview,
          overrideAudit: auditBlock || null
        },
        args.json
      );
      process.exit(0);
    }

    const res = runCommit(args, auditBlock);
    const output = `${String(res.stdout || '')}${String(res.stderr || '')}`.trim();

    if (res.status !== 0) {
      printResult(
        {
          passed: false,
          message: output || 'git commit failed',
          command: commandPreview
        },
        args.json
      );
      process.exit(1);
    }

    printResult(
      {
        passed: true,
        message: 'Commit created successfully.',
        command: commandPreview,
        overrideAudit: auditBlock || null
      },
      args.json
    );
    process.exit(0);
  } catch (error) {
    printResult(
      {
        passed: false,
        message: error.message
      },
      false
    );
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
