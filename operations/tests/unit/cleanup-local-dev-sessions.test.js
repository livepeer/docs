#!/usr/bin/env node
/**
 * @script            cleanup-local-dev-sessions.test
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tests/unit, operations/scripts/integrators/governance/cleanup-local-dev-sessions.js
 * @domain            docs
 * @needs             E-C6, F-C1
 * @purpose-statement Tests cleanup-local-dev-sessions.js — preserves Mint on 3333 while targeting non-3333 Mint and Playwright process trees
 * @pipeline          manual — developer tool
 * @dualmode          dual-mode (document flags)
 * @usage             node operations/tests/unit/cleanup-local-dev-sessions.test.js
 */

const assert = require('assert');

const {
  planCleanup,
  removeManagedCronLines
} = require('../../scripts/integrators/governance/cleanup-local-dev-sessions.js');

function createListeners(entries) {
  const map = new Map();
  for (const [pid, ...ports] of entries) {
    map.set(pid, new Set(ports));
  }
  return map;
}

function runTests() {
  const user = 'alisonhaire';
  const processes = [
    { pid: 100, ppid: 1, user, command: 'npm exec @playwright/mcp@latest' },
    { pid: 101, ppid: 100, user, command: 'node /tmp/node_modules/.bin/playwright-mcp' },
    { pid: 102, ppid: 101, user, command: '/Applications/Google Chrome --user-data-dir=/Users/alisonhaire/Library/Caches/ms-playwright/mcp-chrome-abc about:blank' },
    { pid: 200, ppid: 1, user, command: 'bash tools/lpd dev --scoped --scope-tab About -- --port 3333' },
    { pid: 201, ppid: 200, user, command: 'bash /repo/tools/dev/preview/mint-dev.sh' },
    { pid: 202, ppid: 201, user, command: 'node /repo/tools/dev/preview/generate-mint-dev-scope.js --port 3333' },
    { pid: 203, ppid: 202, user, command: 'node /opt/homebrew/bin/mint dev --port 3333' },
    { pid: 204, ppid: 203, user, command: 'node --no-deprecation /opt/homebrew/lib/node_modules/mint/node_modules/@mintlify/cli/bin/start.js dev --port 3333' },
    { pid: 300, ppid: 1, user, command: 'bash tools/lpd dev --scoped --scope-tab About -- --port 3335' },
    { pid: 301, ppid: 300, user, command: 'bash /repo/tools/dev/preview/mint-dev.sh --port 3335' },
    { pid: 302, ppid: 301, user, command: 'node /repo/tools/dev/preview/generate-mint-dev-scope.js --port 3335' },
    { pid: 303, ppid: 302, user, command: 'node /opt/homebrew/bin/mint dev --port 3335' },
    { pid: 304, ppid: 303, user, command: 'node --no-deprecation /opt/homebrew/lib/node_modules/mint/node_modules/@mintlify/cli/bin/start.js dev --port 3335' }
  ];
  const listeners = createListeners([
    [204, 3333],
    [304, 3335]
  ]);

  const plan = planCleanup(processes, listeners, { keepPort: 3333, user });
  const targetedPids = plan.kill.map((entry) => entry.pid);

  assert.deepStrictEqual(
    targetedPids,
    [100, 101, 102, 300, 301, 302, 303, 304],
    'should target the Playwright tree and only the non-3333 Mint tree'
  );
  assert.strictEqual(plan.preservedMintRoots.length, 1, 'should preserve the Mint tree bound to port 3333');
  assert.deepStrictEqual(plan.preservedMintRoots[0].ports, [3333], 'should record the preserved listener port');

  const cleaned = removeManagedCronLines([
    'MAILTO=""',
    "*/10 * * * * cd '/repo' && '/opt/homebrew/bin/node' '/repo/operations/scripts/integrators/governance/cleanup-local-dev-sessions.js' --apply >> '/tmp/livepeer-docs-cleanup-local-dev-sessions.log' 2>&1 # livepeer-docs-cleanup-local-dev-sessions",
    '* * * * * /usr/bin/true'
  ].join('\n'));

  assert.strictEqual(
    cleaned,
    ['MAILTO=""', '* * * * * /usr/bin/true'].join('\n'),
    'should remove only the managed cleanup cron line'
  );

  console.log('cleanup-local-dev-sessions.test.js: all assertions passed');
}

try {
  runTests();
} catch (error) {
  console.error(error.stack || error.message || String(error));
  process.exit(1);
}
