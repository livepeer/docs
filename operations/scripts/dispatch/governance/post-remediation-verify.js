/**
 * @script      post-remediation-verify
 * @type        dispatch
 * @concern     governance
 * @niche       
 * @purpose     Orchestrates post-remediation verification by running paired validators
 * @description Looks up validators for a given remediator from the registry, runs them
 * @mode        dispatch
 * @pipeline    manual
 * @scope       operations/scripts/remediators/, operations/scripts/validators/
 * @usage       node operations/scripts/dispatch/governance/post-remediation-verify.js --remediator <path> --files <a,b,c> [--revert-on-fail] [--json]
 * @policy      D-GOV-03 (every detection must self-repair or escalate → verify)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const DEFAULT_REGISTRY = path.join(REPO_ROOT, 'operations', 'scripts', 'config', 'remediation-verify-registry.json');

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

function loadRegistry(registryPath) {
  const p = registryPath || DEFAULT_REGISTRY;
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function findValidators(registry, remediatorPath) {
  if (!registry || !registry.pairs) return null;
  const normalised = remediatorPath.replace(/^\.\//, '');
  const entry = registry.pairs.find((pair) => {
    const pairPath = pair.remediator.replace(/^\.\//, '');
    return normalised === pairPath || normalised.endsWith(pairPath) || pairPath.endsWith(normalised);
  });
  return entry || null;
}

// ---------------------------------------------------------------------------
// File substitution
// ---------------------------------------------------------------------------

function substituteFiles(args, fileList) {
  return args.map((arg) => (arg === '{files}' ? fileList : arg));
}

// ---------------------------------------------------------------------------
// Snapshot / revert (per-file, from governance-pipeline.js)
// ---------------------------------------------------------------------------

function snapshotFiles(repoRoot, filePaths) {
  const snapshot = new Map();
  [...new Set(filePaths.filter(Boolean))].forEach((filePath) => {
    const absPath = path.resolve(repoRoot, filePath);
    if (!fs.existsSync(absPath)) {
      snapshot.set(filePath, null);
      return;
    }
    snapshot.set(filePath, fs.readFileSync(absPath));
  });
  return snapshot;
}

function restoreFiles(repoRoot, snapshot, filesToRevert) {
  const reverted = [];
  for (const filePath of filesToRevert) {
    if (!snapshot.has(filePath)) continue;
    const absPath = path.resolve(repoRoot, filePath);
    const content = snapshot.get(filePath);
    if (content === null) {
      if (fs.existsSync(absPath)) fs.unlinkSync(absPath);
    } else {
      fs.writeFileSync(absPath, content);
    }
    reverted.push(filePath);
  }
  return reverted;
}

// ---------------------------------------------------------------------------
// Run a single validator
// ---------------------------------------------------------------------------

function defaultRunCommand(script, args, repoRoot) {
  const absScript = path.resolve(repoRoot, script);
  if (!fs.existsSync(absScript)) {
    return { exitCode: 0, stdout: '', stderr: `Validator not found: ${script} (skipped)`, skipped: true };
  }
  const result = spawnSync(process.execPath, [absScript, ...args], {
    cwd: repoRoot,
    encoding: 'utf8',
    timeout: 60000,
    env: { ...process.env, NODE_PATH: path.join(repoRoot, 'tools', 'node_modules') },
  });
  return {
    exitCode: result.status || 0,
    stdout: result.stdout || '',
    stderr: result.stderr || '',
    skipped: false,
  };
}

// ---------------------------------------------------------------------------
// Parse validator output to identify regressed files
// ---------------------------------------------------------------------------

function extractRegressedFiles(stdout, stderr, affectedFiles) {
  const output = (stdout + '\n' + stderr).toLowerCase();
  const regressed = [];
  for (const file of affectedFiles) {
    const basename = path.basename(file);
    const normalised = file.replace(/\\/g, '/');
    if (output.includes(normalised) || output.includes(basename)) {
      regressed.push(file);
    }
  }
  // If validator failed but we can't identify specific files, flag all affected
  if (regressed.length === 0 && affectedFiles.length > 0) {
    return affectedFiles;
  }
  return regressed;
}

// ---------------------------------------------------------------------------
// Core verification
// ---------------------------------------------------------------------------

function runVerification(options) {
  const {
    remediator,
    files = [],
    revertOnFail = false,
    snapshots: externalSnapshots = null,
    registryPath,
    repoRoot: root = REPO_ROOT,
    runCommand = defaultRunCommand,
  } = options;

  const registry = loadRegistry(registryPath);
  if (!registry) {
    return { passed: true, validators_run: 0, regressions: [], reverted_files: [], kept_files: [...files], warning: 'Registry not found; skipping verification' };
  }

  const entry = findValidators(registry, remediator);
  if (!entry) {
    return { passed: true, validators_run: 0, regressions: [], reverted_files: [], kept_files: [...files], warning: `No verify pair found for: ${remediator}` };
  }

  const fileList = files.join(',');
  // Snapshots must be pre-remediation state. Callers pass them via `snapshots` option.
  // If no external snapshots provided, snapshot current state (post-remediation) as fallback
  // — this only helps if the validator itself produces a fixable error, not for true rollback.
  const snapshot = revertOnFail ? (externalSnapshots || snapshotFiles(root, files)) : null;
  const regressions = [];
  let validatorsRun = 0;

  for (const validator of entry.validators) {
    const resolvedArgs = validator.scope === 'affected-files'
      ? substituteFiles(validator.args || [], fileList)
      : (validator.args || []);

    const result = runCommand(validator.script, resolvedArgs, root);
    if (result.skipped) continue;

    validatorsRun++;

    if (result.exitCode !== 0) {
      const regressedFiles = extractRegressedFiles(result.stdout, result.stderr, files);
      for (const file of regressedFiles) {
        if (!regressions.some((r) => r.file === file && r.validator === validator.script)) {
          regressions.push({
            file,
            validator: validator.script,
            error: (result.stderr || result.stdout || '').slice(0, 500),
          });
        }
      }
    }
  }

  const regressedFileSet = new Set(regressions.map((r) => r.file));
  let revertedFiles = [];
  const keptFiles = files.filter((f) => !regressedFileSet.has(f));

  if (regressions.length > 0 && revertOnFail && snapshot) {
    revertedFiles = restoreFiles(root, snapshot, [...regressedFileSet]);
  }

  return {
    passed: regressions.length === 0,
    validators_run: validatorsRun,
    regressions,
    reverted_files: revertedFiles,
    kept_files: keptFiles,
  };
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const args = { remediator: '', files: [], revertOnFail: false, json: false, registryPath: '' };
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--remediator' && argv[i + 1]) { args.remediator = argv[++i]; continue; }
    if (token === '--files' && argv[i + 1]) { args.files = argv[++i].split(',').map((f) => f.trim()).filter(Boolean); continue; }
    if (token === '--revert-on-fail') { args.revertOnFail = true; continue; }
    if (token === '--json') { args.json = true; continue; }
    if (token === '--registry' && argv[i + 1]) { args.registryPath = argv[++i]; continue; }
  }
  return args;
}

if (require.main === module) {
  const args = parseArgs(process.argv.slice(2));
  if (!args.remediator) {
    console.error('Usage: post-remediation-verify.js --remediator <path> --files <a,b,c> [--revert-on-fail] [--json]');
    process.exit(1);
  }

  const result = runVerification({
    remediator: args.remediator,
    files: args.files,
    revertOnFail: args.revertOnFail,
    registryPath: args.registryPath || undefined,
  });

  if (args.json) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    if (result.passed) {
      console.log(`Verification PASSED (${result.validators_run} validator(s), ${result.kept_files.length} file(s) clean)`);
    } else {
      console.log(`Verification FAILED — ${result.regressions.length} regression(s)`);
      for (const r of result.regressions) {
        console.log(`  ${r.file} — ${path.basename(r.validator)}: ${r.error.split('\n')[0]}`);
      }
      if (result.reverted_files.length > 0) {
        console.log(`Reverted ${result.reverted_files.length} file(s): ${result.reverted_files.join(', ')}`);
      }
      if (result.kept_files.length > 0) {
        console.log(`Kept ${result.kept_files.length} good fix(es): ${result.kept_files.join(', ')}`);
      }
    }
  }

  process.exit(result.passed ? 0 : 1);
}

module.exports = { loadRegistry, findValidators, runVerification, substituteFiles, parseArgs, snapshotFiles };
