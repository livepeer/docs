#!/usr/bin/env node
/**
 * @script            codex/task-finalize
 * @category          enforcer
 * @purpose           governance:agent-governance
 * @scope             tools/scripts/codex, tools/scripts/validate-codex-task-contract.js, tools/scripts/verify-pay-orc-gate-finalize.sh
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Codex task finaliser — enforces task completion requirements before closing
 * @pipeline          manual — interactive developer tool, not suited for automated pipelines
 * @usage             node tools/scripts/codex/task-finalize.js [flags]
 */

const { spawnSync } = require('child_process');
const path = require('path');

const REPO_ROOT = getRepoRoot();

function getRepoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

function run(command, args) {
  const result = spawnSync(command, args, { cwd: REPO_ROOT, encoding: 'utf8' });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  return result.status === 0;
}

function parseArgs(argv) {
  const args = {
    branch: '',
    contractPath: '.codex/task-contract.yaml',
    baseRef: '',
    profile: ''
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--branch') {
      args.branch = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--branch=')) {
      args.branch = token.slice('--branch='.length).trim();
      continue;
    }
    if (token === '--contract') {
      args.contractPath = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--contract=')) {
      args.contractPath = token.slice('--contract='.length).trim();
      continue;
    }
    if (token === '--base-ref') {
      args.baseRef = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--base-ref=')) {
      args.baseRef = token.slice('--base-ref='.length).trim();
      continue;
    }
    if (token === '--profile') {
      args.profile = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--profile=')) {
      args.profile = token.slice('--profile='.length).trim();
      continue;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return args;
}

function usage() {
  console.log('Usage: node tools/scripts/codex/task-finalize.js [--branch <name>] [--contract <path>] [--base-ref <branch>] [--profile pay-orc-gate]');
}

function detectBranch(explicitBranch) {
  if (explicitBranch) return explicitBranch;
  const fromEnv = String(process.env.GITHUB_HEAD_REF || '').trim();
  if (fromEnv) return fromEnv;
  const result = spawnSync('git', ['rev-parse', '--abbrev-ref', 'HEAD'], { cwd: REPO_ROOT, encoding: 'utf8' });
  return result.status === 0 ? String(result.stdout || '').trim() : '';
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    process.exit(0);
  }

  const branch = detectBranch(args.branch);
  if (!branch) {
    throw new Error('Unable to detect branch; pass --branch explicitly');
  }

  const contractCheckArgs = ['tools/scripts/validate-codex-task-contract.js', '--branch', branch, '--contract', args.contractPath];
  if (args.baseRef) {
    contractCheckArgs.push('--base-ref', args.baseRef);
  }

  console.log('🔍 Running contract scope check...');
  if (!run('node', contractCheckArgs)) {
    throw new Error('Contract scope check failed');
  }

  console.log('🔍 Running local lock check...');
  if (!run('node', ['tools/scripts/codex/validate-locks.js', '--branch', branch])) {
    throw new Error('Local lock check failed');
  }

  if (args.profile) {
    if (args.profile === 'pay-orc-gate') {
      console.log('🔍 Running finalize profile: pay-orc-gate...');
      if (!run('bash', ['tools/scripts/verify-pay-orc-gate-finalize.sh'])) {
        throw new Error('Finalize profile pay-orc-gate failed');
      }
    } else {
      throw new Error(`Unknown finalize profile: ${args.profile}`);
    }
  }

  console.log('✅ Codex task finalize checks passed');
  console.log('ℹ️  Next step: node tools/scripts/codex/lock-release.js');
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}
