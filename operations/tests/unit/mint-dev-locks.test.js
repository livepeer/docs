#!/usr/bin/env node
/**
 * @script            mint-dev-locks.test
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tests/unit, tools/dev/preview/mint-dev.sh
 * @domain            docs
 * @needs             E-C6, F-C1
 * @purpose-statement Tests mint-dev lock behavior — validates concurrent dev sessions only block on conflicting ports
 * @pipeline          manual — developer tool
 * @dualmode          dual-mode (document flags)
 * @usage             node operations/tests/unit/mint-dev-locks.test.js
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn, spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const SOURCE_SCRIPT = path.join(REPO_ROOT, 'tools/dev/preview/mint-dev.sh');
const SOURCE_LPD = path.join(REPO_ROOT, 'tools/lpd');

function mkTmpDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function writeFile(absolutePath, content, options = {}) {
  fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
  fs.writeFileSync(absolutePath, content, 'utf8');
  if (options.executable) {
    fs.chmodSync(absolutePath, 0o755);
  }
}

function runGit(repoRoot, args) {
  const result = spawnSync('git', args, {
    cwd: repoRoot,
    encoding: 'utf8'
  });
  if (result.status !== 0) {
    throw new Error((result.stderr || result.stdout || `git ${args.join(' ')}`).trim());
  }
}

function createFixtureRepo() {
  const repoRoot = mkTmpDir('mint-dev-lock-repo-');
  const scriptTarget = path.join(repoRoot, 'tools/dev/preview/mint-dev.sh');
  const lpdTarget = path.join(repoRoot, 'tools/lpd');

  runGit(repoRoot, ['init']);
  writeFile(path.join(repoRoot, 'docs.json'), '{ "name": "Mint Dev Lock Fixture" }\n');
  writeFile(scriptTarget, fs.readFileSync(SOURCE_SCRIPT, 'utf8'), { executable: true });
  writeFile(lpdTarget, fs.readFileSync(SOURCE_LPD, 'utf8'), { executable: true });
  writeFile(
    path.join(repoRoot, 'tools/dev/preview/ensure-mint-watcher-patch.sh'),
    '#!/usr/bin/env bash\nexit 0\n',
    { executable: true }
  );
  writeFile(
    path.join(repoRoot, 'operations/scripts/integrators/content/data/fetching/fetch-external-docs.sh'),
    '#!/usr/bin/env bash\necho "Skipping external documentation fetch (fixture)."\nexit 0\n',
    { executable: true }
  );

  return repoRoot;
}

function createFakeMintBin() {
  const binDir = mkTmpDir('fake-mint-bin-');
  writeFile(
    path.join(binDir, 'mint'),
    `#!/usr/bin/env bash
set -euo pipefail

port=""
expect_value=0
for arg in "$@"; do
  if [ "$expect_value" = "1" ]; then
    port="$arg"
    expect_value=0
    continue
  fi

  case "$arg" in
    --port)
      expect_value=1
      ;;
    --port=*)
      port="\${arg#--port=}"
      ;;
    -p)
      expect_value=1
      ;;
    -p*)
      if [ "$arg" != "-p" ]; then
        port="\${arg#-p}"
      fi
      ;;
  esac
done

printf '%s\\n' "\${port:-unset}" > "$FAKE_MINT_SIGNAL_FILE"
echo "FAKE_MINT_PORT=\${port:-unset}"
trap 'exit 0' INT TERM
while :; do
  sleep 1
done
`,
    { executable: true }
  );
  return binDir;
}

function buildEnv(binDir, signalFile, options = {}) {
  const env = {
    ...process.env,
    PATH: `${binDir}:${process.env.PATH || ''}`,
    FAKE_MINT_SIGNAL_FILE: signalFile,
    MINT_SKIP_EXTERNAL_FETCH: '1'
  };

  delete env.CODEX_CI;
  delete env.CODEX_THREAD_ID;
  delete env.CODEX_INTERNAL_ORIGINATOR_OVERRIDE;
  delete env.CLAUDE_SESSION_ID;

  if (options.agent) {
    env.CODEX_CI = '1';
  }
  if (options.extraEnv) {
    Object.assign(env, options.extraEnv);
  }

  return env;
}

function waitForFile(filePath, timeoutMs = 5000) {
  return new Promise((resolve, reject) => {
    const startedAt = Date.now();
    const interval = setInterval(() => {
      if (fs.existsSync(filePath)) {
        clearInterval(interval);
        resolve();
        return;
      }
      if (Date.now() - startedAt >= timeoutMs) {
        clearInterval(interval);
        reject(new Error(`Timed out waiting for ${filePath}`));
      }
    }, 25);
  });
}

function waitForExit(child, timeoutMs = 5000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Timed out waiting for pid ${child.pid} to exit`)), timeoutMs);
    child.once('exit', (code, signal) => {
      clearTimeout(timer);
      resolve({ code, signal });
    });
    child.once('error', (error) => {
      clearTimeout(timer);
      reject(error);
    });
  });
}

async function terminateSession(child) {
  if (!child || child.exitCode !== null) {
    return;
  }

  try {
    process.kill(-child.pid, 'SIGTERM');
  } catch (_error) {
    try {
      child.kill('SIGTERM');
    } catch (_killError) {
      return;
    }
  }

  await waitForExit(child);
}

async function startMintSession({ repoRoot, binDir, port, signalFile, agent = false }) {
  const child = spawn('bash', ['tools/dev/preview/mint-dev.sh', '--port', String(port)], {
    cwd: repoRoot,
    env: buildEnv(binDir, signalFile, { agent }),
    detached: true,
    stdio: ['ignore', 'pipe', 'pipe']
  });

  let stdout = '';
  let stderr = '';
  child.stdout.setEncoding('utf8');
  child.stderr.setEncoding('utf8');
  child.stdout.on('data', (chunk) => {
    stdout += chunk;
  });
  child.stderr.on('data', (chunk) => {
    stderr += chunk;
  });

  await waitForFile(signalFile);
  return { child, getStdout: () => stdout, getStderr: () => stderr };
}

async function startLpdSession({ repoRoot, binDir, args, signalFile, agent = false }) {
  const child = spawn('bash', ['tools/lpd', ...args], {
    cwd: repoRoot,
    env: buildEnv(binDir, signalFile, { agent }),
    detached: true,
    stdio: ['ignore', 'pipe', 'pipe']
  });

  let stdout = '';
  let stderr = '';
  child.stdout.setEncoding('utf8');
  child.stderr.setEncoding('utf8');
  child.stdout.on('data', (chunk) => {
    stdout += chunk;
  });
  child.stderr.on('data', (chunk) => {
    stderr += chunk;
  });

  await waitForFile(signalFile);
  return { child, getStdout: () => stdout, getStderr: () => stderr };
}

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    const repoRoot = createFixtureRepo();
    const binDir = createFakeMintBin();
    const signalOne = path.join(mkTmpDir('mint-dev-lock-signal-'), '3333.txt');
    const signalTwo = path.join(mkTmpDir('mint-dev-lock-signal-'), '4444.txt');

    const first = await startMintSession({ repoRoot, binDir, port: 3333, signalFile: signalOne });
    const second = await startMintSession({ repoRoot, binDir, port: 4444, signalFile: signalTwo });

    try {
      assert.strictEqual(fs.readFileSync(signalOne, 'utf8').trim(), '3333');
      assert.strictEqual(fs.readFileSync(signalTwo, 'utf8').trim(), '4444');
    } finally {
      await terminateSession(second.child);
      await terminateSession(first.child);
    }
  });

  cases.push(async () => {
    const repoRoot = createFixtureRepo();
    const binDir = createFakeMintBin();
    const signalOne = path.join(mkTmpDir('mint-dev-lock-signal-'), '3333.txt');
    const signalTwo = path.join(mkTmpDir('mint-dev-lock-signal-'), 'conflict.txt');

    const first = await startMintSession({ repoRoot, binDir, port: 3333, signalFile: signalOne });

    try {
      const conflict = spawnSync('bash', ['tools/dev/preview/mint-dev.sh', '--port', '3333'], {
        cwd: repoRoot,
        env: buildEnv(binDir, signalTwo),
        encoding: 'utf8'
      });

      const combinedOutput = `${conflict.stderr || ''}\n${conflict.stdout || ''}`;
      assert.notStrictEqual(conflict.status, 0, 'same-port concurrent launch should fail');
      assert.match(combinedOutput, /already running for this repository on port 3333/i);
      assert.ok(!fs.existsSync(signalTwo), 'blocked session should not reach mint launch');
    } finally {
      await terminateSession(first.child);
    }
  });

  cases.push(async () => {
    const repoRoot = createFixtureRepo();
    const binDir = createFakeMintBin();
    const signalOne = path.join(mkTmpDir('mint-dev-lock-signal-'), '3333-first.txt');
    const signalTwo = path.join(mkTmpDir('mint-dev-lock-signal-'), '3333-second.txt');

    const first = await startMintSession({ repoRoot, binDir, port: 3333, signalFile: signalOne });
    await terminateSession(first.child);

    const second = await startMintSession({ repoRoot, binDir, port: 3333, signalFile: signalTwo });
    try {
      assert.strictEqual(fs.readFileSync(signalTwo, 'utf8').trim(), '3333');
    } finally {
      await terminateSession(second.child);
    }
  });

  cases.push(async () => {
    const repoRoot = createFixtureRepo();
    const binDir = createFakeMintBin();
    const signalFile = path.join(mkTmpDir('mint-dev-lock-signal-'), 'mint-3000-agent.txt');

    const blocked = spawnSync('bash', ['tools/dev/preview/mint-dev.sh', '--port', '3000'], {
      cwd: repoRoot,
      env: buildEnv(binDir, signalFile, { agent: true }),
      encoding: 'utf8'
    });

    const combinedOutput = `${blocked.stderr || ''}\n${blocked.stdout || ''}`;
    assert.notStrictEqual(blocked.status, 0, 'agent mint launcher should reject port 3000');
    assert.match(combinedOutput, /port 3000 is reserved for human-owned dev servers/i);
    assert.ok(!fs.existsSync(signalFile), 'blocked mint session should not reach the mint binary');
  });

  cases.push(async () => {
    const repoRoot = createFixtureRepo();
    const binDir = createFakeMintBin();
    const signalFile = path.join(mkTmpDir('mint-dev-lock-signal-'), 'lpd-3333-agent.txt');

    const blocked = spawnSync('bash', ['tools/lpd', 'dev', '--', '--port', '3333'], {
      cwd: repoRoot,
      env: buildEnv(binDir, signalFile, { agent: true }),
      encoding: 'utf8'
    });

    const combinedOutput = `${blocked.stderr || ''}\n${blocked.stdout || ''}`;
    assert.notStrictEqual(blocked.status, 0, 'agent lpd launcher should reject port 3333');
    assert.match(combinedOutput, /port 3333 is reserved for human-owned dev servers/i);
    assert.ok(!fs.existsSync(signalFile), 'blocked lpd session should not reach the mint binary');
  });

  cases.push(async () => {
    const repoRoot = createFixtureRepo();
    const binDir = createFakeMintBin();
    const signalFile = path.join(mkTmpDir('mint-dev-lock-signal-'), 'lpd-default-agent.txt');

    const blocked = spawnSync('bash', ['tools/lpd', 'dev'], {
      cwd: repoRoot,
      env: buildEnv(binDir, signalFile, { agent: true }),
      encoding: 'utf8'
    });

    const combinedOutput = `${blocked.stderr || ''}\n${blocked.stdout || ''}`;
    assert.notStrictEqual(blocked.status, 0, 'agent lpd launcher should reject its default port 3333');
    assert.match(combinedOutput, /Defaulting to port 3333/i);
    assert.match(combinedOutput, /port 3333 is reserved for human-owned dev servers/i);
    assert.ok(!fs.existsSync(signalFile), 'blocked default lpd session should not reach the mint binary');
  });

  cases.push(async () => {
    const repoRoot = createFixtureRepo();
    const binDir = createFakeMintBin();
    const signalFile = path.join(mkTmpDir('mint-dev-lock-signal-'), 'lpd-3333-human.txt');

    const session = await startLpdSession({
      repoRoot,
      binDir,
      args: ['dev', '--', '--port', '3333'],
      signalFile
    });

    try {
      assert.strictEqual(fs.readFileSync(signalFile, 'utf8').trim(), '3333');
    } finally {
      await terminateSession(session.child);
    }
  });

  for (let index = 0; index < cases.length; index += 1) {
    const label = `case-${index + 1}`;
    try {
      // eslint-disable-next-line no-await-in-loop
      await cases[index]();
      console.log(`   ✓ ${label}`);
    } catch (error) {
      failures.push(`${label}: ${error.message}`);
    }
  }

  return {
    passed: failures.length === 0,
    total: cases.length,
    errors: failures,
    warnings: []
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ mint-dev lock tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} mint-dev lock test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ mint-dev lock tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
