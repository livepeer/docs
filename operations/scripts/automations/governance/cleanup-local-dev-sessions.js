#!/usr/bin/env node
/**
 * @script      cleanup-local-dev-sessions
 * @type        automation
 * @category    utility
 * @concern     governance
 * @niche       dev-tools
 * @purpose     tooling:dev-tools
 * @description Local dev session cleanup — preserves Mint on port 3333 and terminates stale Playwright plus non-3333 Mint session trees
 * @domain      docs
 * @mode        execute
 * @needs       E-C6, F-C1
 * @purpose-statement Local dev session cleanup — preserves Mint on port 3333 and terminates stale Playwright plus non-3333 Mint session trees
 * @pipeline    manual — local developer automation, with optional user cron installation
 * @scope       operations/scripts/automations/governance, local user process table, local user crontab
 * @usage       node operations/scripts/automations/governance/cleanup-local-dev-sessions.js [--apply] [--install-cron] [--remove-cron] [--keep-port 3333]
 * @policy      E-C6, F-C1
 */

const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const DEFAULT_KEEP_PORT = 3333;
const DEFAULT_CRON_SCHEDULE = '*/10 * * * *';
const CRON_TAG = 'livepeer-docs-cleanup-local-dev-sessions';
const CRON_LOG_PATH = '/tmp/livepeer-docs-cleanup-local-dev-sessions.log';
const REPO_ROOT = path.resolve(__dirname, '../../../..');
const SCRIPT_PATH = path.resolve(__filename);
const NODE_BINARY = process.execPath || '/opt/homebrew/bin/node';
const PLAYWRIGHT_PATTERNS = [
  '@playwright/mcp@latest',
  'playwright-mcp',
  'ms-playwright/mcp-chrome-',
  'puppeteer_dev_chrome_profile-'
];
const MINT_PATTERNS = [
  'tools/dev/preview/mint-dev.sh',
  'generate-mint-dev-scope.js',
  '@mintlify/cli/bin/start.js dev',
  '/opt/homebrew/bin/mint dev',
  ' tools/lpd dev',
  'tools/lpd dev '
];

function parseArgs(argv) {
  const args = {
    apply: false,
    help: false,
    installCron: false,
    json: false,
    keepPort: DEFAULT_KEEP_PORT,
    removeCron: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--apply') {
      args.apply = true;
      continue;
    }
    if (token === '--install-cron') {
      args.installCron = true;
      continue;
    }
    if (token === '--remove-cron') {
      args.removeCron = true;
      continue;
    }
    if (token === '--json') {
      args.json = true;
      continue;
    }
    if (token === '--keep-port') {
      args.keepPort = Number.parseInt(argv[index + 1], 10);
      index += 1;
      continue;
    }
    if (token.startsWith('--keep-port=')) {
      args.keepPort = Number.parseInt(token.slice('--keep-port='.length), 10);
      continue;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }

  if (!Number.isInteger(args.keepPort) || args.keepPort <= 0) {
    throw new Error(`Invalid --keep-port value: ${args.keepPort}`);
  }

  return args;
}

function usage() {
  console.log([
    'Usage: node operations/scripts/automations/governance/cleanup-local-dev-sessions.js [options]',
    '',
    'Options:',
    '  --apply               Send SIGTERM, then SIGKILL to stubborn targets.',
    '  --install-cron        Install or refresh the 10-minute user crontab entry.',
    '  --remove-cron         Remove the managed user crontab entry.',
    '  --keep-port <port>    Preserve Mint session trees whose listener set includes this port.',
    '  --json                Emit machine-readable JSON output.',
    '  -h, --help            Show this help output.'
  ].join('\n'));
}

function runCommand(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd || REPO_ROOT,
    encoding: 'utf8',
    input: options.input || undefined
  });

  if (options.allowFailure) {
    return result;
  }

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(String(result.stderr || result.stdout || `${command} ${args.join(' ')} failed`).trim());
  }

  return result;
}

function getCurrentUser() {
  return process.env.USER || os.userInfo().username;
}

function parseProcessLine(line) {
  const match = line.match(/^\s*(\d+)\s+(\d+)\s+(\S+)\s+(.*)$/);
  if (!match) return null;
  return {
    pid: Number.parseInt(match[1], 10),
    ppid: Number.parseInt(match[2], 10),
    user: match[3],
    command: match[4]
  };
}

function readProcesses() {
  const result = runCommand('/bin/ps', ['-axo', 'pid=,ppid=,user=,command=']);
  return String(result.stdout || '')
    .split('\n')
    .map(parseProcessLine)
    .filter(Boolean);
}

function parseListenerLine(line) {
  const match = line.match(/^\S+\s+(\d+)\s+\S+.*TCP .*:(\d+) \(LISTEN\)$/);
  if (!match) return null;
  return {
    pid: Number.parseInt(match[1], 10),
    port: Number.parseInt(match[2], 10)
  };
}

function readListeningPorts() {
  const result = runCommand('/usr/sbin/lsof', ['-nP', '-iTCP', '-sTCP:LISTEN'], { allowFailure: true });
  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0 && !String(result.stderr || '').includes('No such file')) {
    throw new Error(String(result.stderr || result.stdout || 'lsof failed').trim());
  }

  const map = new Map();
  for (const line of String(result.stdout || '').split('\n').slice(1)) {
    const parsed = parseListenerLine(line);
    if (!parsed) continue;
    if (!map.has(parsed.pid)) {
      map.set(parsed.pid, new Set());
    }
    map.get(parsed.pid).add(parsed.port);
  }
  return map;
}

function buildChildrenMap(processes) {
  const children = new Map();
  for (const proc of processes) {
    if (!children.has(proc.ppid)) {
      children.set(proc.ppid, []);
    }
    children.get(proc.ppid).push(proc.pid);
  }
  return children;
}

function collectTree(rootPid, childrenMap) {
  const collected = new Set();
  const stack = [rootPid];

  while (stack.length > 0) {
    const pid = stack.pop();
    if (collected.has(pid)) continue;
    collected.add(pid);
    const children = childrenMap.get(pid) || [];
    for (const child of children) {
      stack.push(child);
    }
  }

  return collected;
}

function commandMatches(command, patterns) {
  return patterns.some((pattern) => command.includes(pattern));
}

function collectPortsForTree(pidSet, listenersByPid) {
  const ports = new Set();
  for (const pid of pidSet) {
    const pidPorts = listenersByPid.get(pid);
    if (!pidPorts) continue;
    for (const port of pidPorts) {
      ports.add(port);
    }
  }
  return [...ports].sort((left, right) => left - right);
}

function createProcessMaps(processes) {
  const byPid = new Map();
  for (const proc of processes) {
    byPid.set(proc.pid, proc);
  }
  return {
    byPid,
    children: buildChildrenMap(processes)
  };
}

function planCleanup(processes, listenersByPid, options = {}) {
  const keepPort = Number.isInteger(options.keepPort) ? options.keepPort : DEFAULT_KEEP_PORT;
  const currentUser = options.user || getCurrentUser();
  const { byPid, children } = createProcessMaps(processes);
  const targeted = new Map();
  const preservedMintRoots = [];

  const userProcesses = processes.filter((proc) => proc.user === currentUser);

  for (const proc of userProcesses) {
    if (!commandMatches(proc.command, PLAYWRIGHT_PATTERNS)) continue;
    const tree = collectTree(proc.pid, children);
    for (const pid of tree) {
      const matched = byPid.get(pid);
      if (!matched || matched.user !== currentUser) continue;
      targeted.set(pid, {
        pid,
        reason: 'playwright',
        command: matched.command
      });
    }
  }

  const processedMintTreePids = new Set();
  for (const proc of userProcesses) {
    if (!commandMatches(proc.command, MINT_PATTERNS)) continue;
    if (processedMintTreePids.has(proc.pid)) continue;

    const tree = collectTree(proc.pid, children);
    for (const pid of tree) {
      processedMintTreePids.add(pid);
    }
    const ports = collectPortsForTree(tree, listenersByPid);
    if (ports.includes(keepPort)) {
      preservedMintRoots.push({
        pid: proc.pid,
        ports,
        command: proc.command
      });
      continue;
    }

    for (const pid of tree) {
      const matched = byPid.get(pid);
      if (!matched || matched.user !== currentUser) continue;
      const existing = targeted.get(pid);
      if (existing && existing.reason === 'playwright') continue;
      targeted.set(pid, {
        pid,
        reason: 'mint-non-keep-port',
        command: matched.command
      });
    }
  }

  return {
    keepPort,
    kill: [...targeted.values()].sort((left, right) => left.pid - right.pid),
    preservedMintRoots
  };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isProcessAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (_error) {
    return false;
  }
}

async function applyCleanup(plan) {
  const terminated = [];
  const forced = [];

  for (const target of plan.kill) {
    try {
      process.kill(target.pid, 'SIGTERM');
      terminated.push(target.pid);
    } catch (_error) {
      // ignore disappeared processes
    }
  }

  if (terminated.length === 0) {
    return { terminated, forced };
  }

  await sleep(1500);

  for (const pid of terminated) {
    if (!isProcessAlive(pid)) continue;
    try {
      process.kill(pid, 'SIGKILL');
      forced.push(pid);
    } catch (_error) {
      // ignore disappeared processes
    }
  }

  return { terminated, forced };
}

function shellQuote(value) {
  return `'${String(value).replace(/'/g, `'\\''`)}'`;
}

function buildCronLine() {
  return `${DEFAULT_CRON_SCHEDULE} cd ${shellQuote(REPO_ROOT)} && ${shellQuote(NODE_BINARY)} ${shellQuote(SCRIPT_PATH)} --apply >> ${shellQuote(CRON_LOG_PATH)} 2>&1 # ${CRON_TAG}`;
}

function readCurrentCrontab() {
  const result = runCommand('/usr/bin/crontab', ['-l'], { allowFailure: true });
  if (result.error) {
    throw result.error;
  }
  const stderr = String(result.stderr || '').trim();
  if (result.status !== 0 && /no crontab for/i.test(stderr)) {
    return '';
  }
  if (result.status !== 0) {
    throw new Error(stderr || String(result.stdout || '').trim() || 'Unable to read current crontab');
  }
  return String(result.stdout || '');
}

function writeCrontab(content) {
  const normalized = content.trim() ? `${content.trim()}\n` : '';
  const result = runCommand('/usr/bin/crontab', ['-'], {
    allowFailure: true,
    input: normalized
  });

  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(String(result.stderr || result.stdout || 'Unable to write crontab').trim());
  }
}

function removeManagedCronLines(content) {
  return String(content || '')
    .split('\n')
    .filter((line) => {
      const trimmed = line.trim();
      if (!trimmed) return true;
      if (trimmed.includes(CRON_TAG)) return false;
      if (trimmed.includes(SCRIPT_PATH)) return false;
      return true;
    })
    .join('\n');
}

function installCronEntry() {
  const existing = readCurrentCrontab();
  const cleaned = removeManagedCronLines(existing).trim();
  const next = [cleaned, buildCronLine()].filter(Boolean).join('\n');
  writeCrontab(next);
  return buildCronLine();
}

function removeCronEntry() {
  const existing = readCurrentCrontab();
  const next = removeManagedCronLines(existing);
  writeCrontab(next);
}

function printResult(payload, json) {
  if (json) {
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  if (payload.cronInstalled) {
    console.log(`Installed cron entry: ${payload.cronInstalled}`);
  }
  if (payload.cronRemoved) {
    console.log('Removed managed cron entry.');
  }
  if (payload.keepPort) {
    console.log(`Preserving Mint session trees on port ${payload.keepPort}.`);
  }
  if (payload.preservedMintRoots && payload.preservedMintRoots.length > 0) {
    for (const root of payload.preservedMintRoots) {
      console.log(`Preserved Mint root ${root.pid} on ports ${root.ports.join(', ')}: ${root.command}`);
    }
  }
  if (payload.kill && payload.kill.length > 0) {
    for (const target of payload.kill) {
      console.log(`${payload.applied ? 'Targeted' : 'Would target'} ${target.pid} [${target.reason}]: ${target.command}`);
    }
  } else {
    console.log('No matching browser or non-3333 Mint sessions found.');
  }
  if (payload.applied) {
    console.log(`Sent SIGTERM to ${payload.terminated.length} process(es); escalated SIGKILL to ${payload.forced.length}.`);
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    return;
  }

  const payload = {
    applied: false,
    cronInstalled: '',
    cronRemoved: false,
    forced: [],
    keepPort: args.keepPort,
    kill: [],
    preservedMintRoots: [],
    terminated: []
  };

  if (args.installCron) {
    payload.cronInstalled = installCronEntry();
  }

  if (args.removeCron) {
    removeCronEntry();
    payload.cronRemoved = true;
  }

  const processes = readProcesses();
  const listenersByPid = readListeningPorts();
  const plan = planCleanup(processes, listenersByPid, { keepPort: args.keepPort });
  payload.kill = plan.kill;
  payload.preservedMintRoots = plan.preservedMintRoots;

  if (args.apply) {
    payload.applied = true;
    const result = await applyCleanup(plan);
    payload.terminated = result.terminated;
    payload.forced = result.forced;
  }

  printResult(payload, args.json);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message || error);
    process.exit(1);
  });
}

module.exports = {
  buildChildrenMap,
  collectPortsForTree,
  collectTree,
  createProcessMaps,
  parseListenerLine,
  parseProcessLine,
  planCleanup,
  removeManagedCronLines
};
