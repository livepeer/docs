#!/usr/bin/env node
/**
 * @script      regression-bisect
 * @type        
 * @concern     
 * @niche       
 * @purpose     Finds the exact commit that introduced a console error on a given route
 * @description Uses git bisect with an automated Puppeteer test to binary-search
 * @mode        read-only
 * @pipeline    manual diagnostic tool
 * @scope       single route
 * @usage       node operations/scripts/validators/content/structure/regression-bisect.js --route /v2/path --error "ReferenceError" [--good abc123] [--bad HEAD]
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync, spawnSync } = require('child_process');

let puppeteer;
try {
  puppeteer = require('puppeteer');
} catch (_) {
  puppeteer = require(path.join(process.cwd(), 'tools', 'node_modules', 'puppeteer'));
}

const REPO_ROOT = (() => {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8', cwd: process.cwd() }).trim();
  } catch (_) {
    return process.cwd();
  }
})();

const BASELINE_PATH = path.join(REPO_ROOT, 'operations', 'tests', 'baselines', 'console-baseline.json');
const SERVER_MANAGER_PATH = path.join(REPO_ROOT, '.githooks', 'server-manager.js');
const PAGE_TIMEOUT_MS = 30000;
const RENDER_SETTLE_MS = 1500;

const NOISE_PATTERNS = [
  /require is not defined/i,
  /puppeteer/i,
  /fs has already been declared/i,
  /unexpected token 'export'/i,
  /identifier '[^']*' has already been declared/i,
  /appendchild/i,
  /failed to execute/i,
  /\b403\b/,
  /\b500\b/,
  /favicon/i
];

function parseArgs(argv) {
  const args = { route: '', error: '', good: '', bad: 'HEAD', help: false };

  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--help' || token === '-h') { args.help = true; continue; }
    if (token === '--route') { args.route = String(argv[++i] || '').trim(); continue; }
    if (token.startsWith('--route=')) { args.route = token.slice(8).trim(); continue; }
    if (token === '--error') { args.error = String(argv[++i] || '').trim(); continue; }
    if (token.startsWith('--error=')) { args.error = token.slice(8).trim(); continue; }
    if (token === '--good') { args.good = String(argv[++i] || '').trim(); continue; }
    if (token.startsWith('--good=')) { args.good = token.slice(7).trim(); continue; }
    if (token === '--bad') { args.bad = String(argv[++i] || '').trim(); continue; }
    if (token.startsWith('--bad=')) { args.bad = token.slice(6).trim(); continue; }
  }

  if (!args.route.startsWith('/')) args.route = `/${args.route}`;
  return args;
}

function isNoise(text) {
  return NOISE_PATTERNS.some((p) => p.test(text));
}

async function ensureServer() {
  let serverManager;
  try {
    const resolved = require.resolve(SERVER_MANAGER_PATH);
    if (require.cache[resolved]) delete require.cache[resolved];
    serverManager = require(SERVER_MANAGER_PATH);
  } catch (_) {
    throw new Error('Cannot load server-manager. Ensure .githooks/server-manager.js exists.');
  }

  const running = await serverManager.isServerRunning({ probePath: '/v2/home/mission-control' });
  if (running) return serverManager.getServerUrl();

  console.log('Starting Mintlify dev server...');
  await serverManager.ensureServerRunning({ probePath: '/v2/home/mission-control' });
  return serverManager.getServerUrl();
}

async function checkRouteForError(route, errorPattern, baseUrl) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const errors = [];
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    page.on('console', (msg) => {
      if (String(msg.type()).toLowerCase() === 'error') {
        const text = msg.text();
        if (!isNoise(text)) errors.push(text);
      }
    });

    page.on('pageerror', (err) => {
      if (!isNoise(err.message)) errors.push(err.message);
    });

    await page.goto(`${baseUrl}${route}`, {
      waitUntil: 'networkidle2',
      timeout: PAGE_TIMEOUT_MS
    });

    await new Promise((resolve) => setTimeout(resolve, RENDER_SETTLE_MS));
    await page.close();
  } catch (err) {
    errors.push(`Navigation error: ${err.message}`);
  } finally {
    await browser.close();
  }

  const regex = new RegExp(errorPattern, 'i');
  return errors.some((e) => regex.test(e));
}

function getBaselineCommit() {
  try {
    const baseline = JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf8'));
    return baseline._meta?.commit || null;
  } catch (_) {
    return null;
  }
}

async function main(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);

  if (args.help || !args.route || !args.error) {
    console.log([
      'Usage: node regression-bisect.js --route /v2/path --error "pattern" [--good commit] [--bad commit]',
      '',
      'Options:',
      '  --route <route>    The v2 route to test (e.g., /v2/gateways/setup/prepare)',
      '  --error <pattern>  Regex pattern to match in console errors (e.g., "ReferenceError")',
      '  --good <commit>    Known-good commit (default: baseline commit)',
      '  --bad <commit>     Known-bad commit (default: HEAD)',
      '  --help, -h         Show this message',
      '',
      'The tool uses git bisect to find the first commit where the error pattern',
      'appears in the browser console for the given route.'
    ].join('\n'));
    return args.help ? 0 : 1;
  }

  const goodCommit = args.good || getBaselineCommit();
  if (!goodCommit) {
    console.error('No --good commit provided and no baseline found. Generate a baseline first:');
    console.error('  node operations/scripts/validators/content/structure/sweep-console-errors.js');
    return 1;
  }

  console.log(`Route:   ${args.route}`);
  console.log(`Error:   ${args.error}`);
  console.log(`Good:    ${goodCommit}`);
  console.log(`Bad:     ${args.bad}`);
  console.log('');

  // Ensure server is running
  const baseUrl = await ensureServer();
  console.log(`Server:  ${baseUrl}`);
  console.log('');

  // Verify the error exists at the bad commit
  console.log(`Verifying error exists at ${args.bad}...`);
  const hasErrorAtBad = await checkRouteForError(args.route, args.error, baseUrl);
  if (!hasErrorAtBad) {
    console.log(`Error pattern "${args.error}" NOT found at ${args.bad}. Nothing to bisect.`);
    return 0;
  }
  console.log('Confirmed: error present at bad commit.');

  // Write a temporary bisect test script
  const testScript = path.join(os.tmpdir(), `bisect-test-${Date.now()}.js`);
  const testContent = `#!/usr/bin/env node
// Auto-generated bisect test script
const path = require('path');
let puppeteer;
try { puppeteer = require('puppeteer'); }
catch (_) { puppeteer = require(path.join('${REPO_ROOT}', 'tools', 'node_modules', 'puppeteer')); }

const NOISE = ${JSON.stringify(NOISE_PATTERNS.map((p) => p.source))};

async function test() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const errors = [];
  try {
    const page = await browser.newPage();
    page.on('console', (msg) => {
      if (String(msg.type()).toLowerCase() === 'error') {
        const text = msg.text();
        const noisy = NOISE.some((p) => new RegExp(p, 'i').test(text));
        if (!noisy) errors.push(text);
      }
    });
    page.on('pageerror', (err) => {
      const noisy = NOISE.some((p) => new RegExp(p, 'i').test(err.message));
      if (!noisy) errors.push(err.message);
    });
    await page.goto('${baseUrl}${args.route}', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 1500));
    await page.close();
  } finally { await browser.close(); }

  const regex = /${args.error}/i;
  const found = errors.some((e) => regex.test(e));
  // git bisect: exit 0 = bad (error present), exit 1 = good (error absent)
  // Actually git bisect run convention: exit 0 = good, exit 1-124 = bad, 125 = skip
  // We want: error present = bad commit = exit 1, error absent = good commit = exit 0
  process.exit(found ? 1 : 0);
}

test().catch(() => process.exit(125));
`;

  fs.writeFileSync(testScript, testContent);
  fs.chmodSync(testScript, '755');

  console.log('\nStarting git bisect...');

  try {
    // Start bisect
    execSync(`git bisect start ${args.bad} ${goodCommit}`, { cwd: REPO_ROOT, stdio: 'pipe' });

    // Run bisect
    const result = spawnSync('git', ['bisect', 'run', 'node', testScript], {
      cwd: REPO_ROOT,
      stdio: 'pipe',
      timeout: 600000 // 10 minutes max
    });

    const output = (result.stdout || '').toString() + '\n' + (result.stderr || '').toString();
    console.log(output);

    // Extract the first bad commit
    const match = output.match(/([0-9a-f]{40}) is the first bad commit/);
    if (match) {
      const badCommit = match[1];
      console.log('\n=== FIRST BAD COMMIT ===');
      const commitInfo = execSync(`git show --stat ${badCommit}`, { cwd: REPO_ROOT, encoding: 'utf8' });
      console.log(commitInfo);
    }
  } finally {
    // Always reset bisect and clean up
    try { execSync('git bisect reset', { cwd: REPO_ROOT, stdio: 'pipe' }); } catch (_) {}
    try { fs.unlinkSync(testScript); } catch (_) {}
  }

  return 0;
}

if (require.main === module) {
  main().then((code) => process.exit(code));
}
