/**
 * @script            post-remediation-verify.test
 * @type              validator
 * @concern           governance
 * @niche             verification
 * @purpose           Tests the post-remediation verification orchestrator
 * @description       10 test cases covering registry loading, file substitution, per-file
 *                    revert, graceful fallthrough, and multi-validator regression collection.
 * @mode              check
 * @scope             operations/scripts/dispatch/governance/post-remediation-verify.js
 * @usage             node operations/tests/unit/post-remediation-verify.test.js
 * @policy            D-GOV-03
 */

'use strict';

const assert = require('assert');
const { describe, it } = require('node:test');
const path = require('path');
const fs = require('fs');
const os = require('os');

const {
  loadRegistry,
  findValidators,
  runVerification,
  substituteFiles,
} = require('../../scripts/dispatch/governance/post-remediation-verify.js');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function tmpDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'prv-test-'));
}

function writeFile(dir, relPath, content) {
  const full = path.join(dir, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
  return relPath;
}

function writeRegistry(dir, pairs) {
  const registryPath = path.join(dir, 'registry.json');
  fs.writeFileSync(registryPath, JSON.stringify({ _meta: {}, pairs }, null, 2));
  return registryPath;
}

function mockRunCommand(exitCode, stdout, stderr) {
  return (_script, _args, _root) => ({ exitCode, stdout: stdout || '', stderr: stderr || '', skipped: false });
}

function mockRunCommandPerFile(fileExitMap) {
  return (script, args, _root) => {
    const filesArg = args.find((a) => a.includes(',') || a.includes('.mdx') || a.includes('.js'));
    for (const [filePattern, exitCode] of Object.entries(fileExitMap)) {
      if (filesArg && filesArg.includes(filePattern)) {
        return { exitCode, stdout: exitCode !== 0 ? `FAIL: ${filePattern}` : '', stderr: '', skipped: false };
      }
    }
    return { exitCode: 0, stdout: '', stderr: '', skipped: false };
  };
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('post-remediation-verify', () => {

  it('1. Registry loads correctly', () => {
    const registry = loadRegistry(path.resolve('operations/scripts/config/remediation-verify-registry.json'));
    assert.ok(registry, 'Registry should load');
    assert.ok(Array.isArray(registry.pairs), 'pairs should be an array');
    assert.ok(registry.pairs.length >= 27, `Expected >= 27 pairs, got ${registry.pairs.length}`);
  });

  it('2. {files} substitution works', () => {
    const result = substituteFiles(['--files', '{files}', '--json'], 'a.mdx,b.mdx');
    assert.deepStrictEqual(result, ['--files', 'a.mdx,b.mdx', '--json']);
  });

  it('3. All validators pass → { passed: true, kept_files: [all] }', () => {
    const dir = tmpDir();
    const f1 = writeFile(dir, 'a.mdx', 'content a');
    const f2 = writeFile(dir, 'b.mdx', 'content b');
    const registryPath = writeRegistry(dir, [{
      remediator: 'remediators/test-fix.js',
      validators: [{ script: 'validators/check.js', args: ['--files', '{files}'], scope: 'affected-files' }],
      revert_on_regression: true,
    }]);

    const result = runVerification({
      remediator: 'remediators/test-fix.js',
      files: [f1, f2],
      revertOnFail: true,
      registryPath,
      repoRoot: dir,
      runCommand: mockRunCommand(0),
    });

    assert.strictEqual(result.passed, true);
    assert.strictEqual(result.kept_files.length, 2);
    assert.strictEqual(result.reverted_files.length, 0);
    fs.rmSync(dir, { recursive: true });
  });

  it('4. One validator fails on 1 of 3 files → reverts only that file', () => {
    const dir = tmpDir();
    const f1 = writeFile(dir, 'good1.mdx', 'original-good1');
    const f2 = writeFile(dir, 'bad.mdx', 'original-bad');
    const f3 = writeFile(dir, 'good2.mdx', 'original-good2');

    // Simulate remediator having modified files
    fs.writeFileSync(path.join(dir, 'good1.mdx'), 'fixed-good1');
    fs.writeFileSync(path.join(dir, 'bad.mdx'), 'broken-by-fix');
    fs.writeFileSync(path.join(dir, 'good2.mdx'), 'fixed-good2');

    // But snapshot was taken BEFORE the fix (simulate by writing registry with original content)
    // We need to snapshot before modification — let's set up properly
    const dir2 = tmpDir();
    writeFile(dir2, 'good1.mdx', 'original-good1');
    writeFile(dir2, 'bad.mdx', 'original-bad');
    writeFile(dir2, 'good2.mdx', 'original-good2');
    const registryPath = writeRegistry(dir2, [{
      remediator: 'remediators/test-fix.js',
      validators: [{ script: 'validators/check.js', args: ['--files', '{files}'], scope: 'affected-files' }],
      revert_on_regression: true,
    }]);

    // Now modify files in dir2 (simulating post-remediation state)
    fs.writeFileSync(path.join(dir2, 'good1.mdx'), 'fixed-good1');
    fs.writeFileSync(path.join(dir2, 'bad.mdx'), 'broken-by-fix');
    fs.writeFileSync(path.join(dir2, 'good2.mdx'), 'fixed-good2');

    // Validator returns non-zero and mentions bad.mdx in output
    const result = runVerification({
      remediator: 'remediators/test-fix.js',
      files: ['good1.mdx', 'bad.mdx', 'good2.mdx'],
      revertOnFail: true,
      registryPath,
      repoRoot: dir2,
      runCommand: (_s, _a, _r) => ({
        exitCode: 1,
        stdout: 'FAIL: bad.mdx has regression',
        stderr: '',
        skipped: false,
      }),
    });

    assert.strictEqual(result.passed, false);
    assert.strictEqual(result.regressions.length, 1);
    assert.strictEqual(result.regressions[0].file, 'bad.mdx');
    assert.ok(result.reverted_files.includes('bad.mdx'), 'bad.mdx should be reverted');
    assert.ok(result.kept_files.includes('good1.mdx'), 'good1.mdx should be kept');
    assert.ok(result.kept_files.includes('good2.mdx'), 'good2.mdx should be kept');

    fs.rmSync(dir, { recursive: true });
    fs.rmSync(dir2, { recursive: true });
  });

  it('5. --revert-on-fail restores only regressed file snapshots', () => {
    const dir = tmpDir();
    // Write original content (pre-remediation state)
    writeFile(dir, 'file-a.mdx', 'snapshot-a');
    writeFile(dir, 'file-b.mdx', 'snapshot-b');

    // Take snapshot BEFORE remediation (this is what the remediator caller does)
    const { snapshotFiles } = require('../../scripts/dispatch/governance/post-remediation-verify.js');
    const preRepairSnapshot = snapshotFiles(dir, ['file-a.mdx', 'file-b.mdx']);

    const registryPath = writeRegistry(dir, [{
      remediator: 'rem.js',
      validators: [{ script: 'val.js', args: ['--files', '{files}'], scope: 'affected-files' }],
      revert_on_regression: true,
    }]);

    // Modify both (simulating remediation writes)
    fs.writeFileSync(path.join(dir, 'file-a.mdx'), 'modified-a');
    fs.writeFileSync(path.join(dir, 'file-b.mdx'), 'modified-b');

    const result = runVerification({
      remediator: 'rem.js',
      files: ['file-a.mdx', 'file-b.mdx'],
      revertOnFail: true,
      snapshots: preRepairSnapshot,
      registryPath,
      repoRoot: dir,
      runCommand: () => ({ exitCode: 1, stdout: 'Error in file-a.mdx', stderr: '', skipped: false }),
    });

    // file-a should be reverted to pre-repair snapshot, file-b keeps its fix
    assert.strictEqual(fs.readFileSync(path.join(dir, 'file-a.mdx'), 'utf8'), 'snapshot-a');
    assert.strictEqual(fs.readFileSync(path.join(dir, 'file-b.mdx'), 'utf8'), 'modified-b');

    fs.rmSync(dir, { recursive: true });
  });

  it('6. Unknown remediator → graceful pass (exit 0)', () => {
    const dir = tmpDir();
    const registryPath = writeRegistry(dir, []);

    const result = runVerification({
      remediator: 'nonexistent/script.js',
      files: ['a.mdx'],
      registryPath,
      repoRoot: dir,
      runCommand: mockRunCommand(0),
    });

    assert.strictEqual(result.passed, true);
    assert.ok(result.warning, 'Should have a warning');
    fs.rmSync(dir, { recursive: true });
  });

  it('7. Missing registry → clear warning', () => {
    const result = runVerification({
      remediator: 'anything.js',
      files: ['a.mdx'],
      registryPath: '/nonexistent/path/registry.json',
      runCommand: mockRunCommand(0),
    });

    assert.strictEqual(result.passed, true);
    assert.ok(result.warning.includes('Registry not found'));
  });

  it('8. Full-scope validator runs without file substitution', () => {
    const dir = tmpDir();
    const registryPath = writeRegistry(dir, [{
      remediator: 'rem.js',
      validators: [{ script: 'val.js', args: ['--check'], scope: 'full' }],
      revert_on_regression: true,
    }]);

    let capturedArgs;
    const result = runVerification({
      remediator: 'rem.js',
      files: ['a.mdx', 'b.mdx'],
      registryPath,
      repoRoot: dir,
      runCommand: (_s, args, _r) => { capturedArgs = args; return { exitCode: 0, stdout: '', stderr: '', skipped: false }; },
    });

    assert.deepStrictEqual(capturedArgs, ['--check']);
    assert.strictEqual(result.passed, true);
    fs.rmSync(dir, { recursive: true });
  });

  it('9. Multiple validators: regressions from both collected', () => {
    const dir = tmpDir();
    writeFile(dir, 'a.mdx', 'original');
    writeFile(dir, 'b.mdx', 'original');
    const registryPath = writeRegistry(dir, [{
      remediator: 'rem.js',
      validators: [
        { script: 'val1.js', args: ['--files', '{files}'], scope: 'affected-files' },
        { script: 'val2.js', args: ['--files', '{files}'], scope: 'affected-files' },
      ],
      revert_on_regression: true,
    }]);

    fs.writeFileSync(path.join(dir, 'a.mdx'), 'modified');
    fs.writeFileSync(path.join(dir, 'b.mdx'), 'modified');

    let callCount = 0;
    const result = runVerification({
      remediator: 'rem.js',
      files: ['a.mdx', 'b.mdx'],
      revertOnFail: true,
      registryPath,
      repoRoot: dir,
      runCommand: (script) => {
        callCount++;
        if (script === 'val1.js') return { exitCode: 1, stdout: 'Error in a.mdx', stderr: '', skipped: false };
        if (script === 'val2.js') return { exitCode: 1, stdout: 'Error in b.mdx', stderr: '', skipped: false };
        return { exitCode: 0, stdout: '', stderr: '', skipped: false };
      },
    });

    assert.strictEqual(callCount, 2, 'Both validators should run');
    assert.strictEqual(result.passed, false);
    assert.ok(result.regressions.some((r) => r.file === 'a.mdx'));
    assert.ok(result.regressions.some((r) => r.file === 'b.mdx'));
    assert.strictEqual(result.reverted_files.length, 2);
    assert.strictEqual(result.kept_files.length, 0);

    fs.rmSync(dir, { recursive: true });
  });

  it('10. JSON output includes reverted_files and kept_files', () => {
    const dir = tmpDir();
    writeFile(dir, 'keep.mdx', 'orig');
    writeFile(dir, 'revert.mdx', 'orig');
    const registryPath = writeRegistry(dir, [{
      remediator: 'rem.js',
      validators: [{ script: 'val.js', args: ['--files', '{files}'], scope: 'affected-files' }],
      revert_on_regression: true,
    }]);

    fs.writeFileSync(path.join(dir, 'keep.mdx'), 'fixed');
    fs.writeFileSync(path.join(dir, 'revert.mdx'), 'broken');

    const result = runVerification({
      remediator: 'rem.js',
      files: ['keep.mdx', 'revert.mdx'],
      revertOnFail: true,
      registryPath,
      repoRoot: dir,
      runCommand: () => ({ exitCode: 1, stdout: 'FAIL: revert.mdx', stderr: '', skipped: false }),
    });

    assert.ok(Array.isArray(result.reverted_files));
    assert.ok(Array.isArray(result.kept_files));
    assert.ok(result.reverted_files.includes('revert.mdx'));
    assert.ok(result.kept_files.includes('keep.mdx'));
    assert.ok('regressions' in result);
    assert.ok('validators_run' in result);
    assert.ok('passed' in result);

    fs.rmSync(dir, { recursive: true });
  });
});
