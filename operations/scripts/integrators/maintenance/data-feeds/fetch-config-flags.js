#!/usr/bin/env node
/**
 * @script            fetch-config-flags
 * @type              integrator
 * @concern           maintenance
 * @niche             data-feeds
 * @scope             operations/scripts/integrators/maintenance/data-feeds
 * @owner             docs
 * @needs             F-R1
 * @purpose-statement Fetches go-livepeer CLI flags from source code on GitHub, parses flag definitions, writes structured JSX data for SearchTable consumption.
 * @pipeline          P5-auto (scheduled, weekly)
 * @dualmode          --dry-run (fetch + preview, no write) | default (fetch + write)
 * @usage             node operations/scripts/integrators/maintenance/data-feeds/fetch-config-flags.js [--dry-run]
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const REPO = process.env.GO_LIVEPEER_REPO || 'livepeer/go-livepeer';
const BRANCH = process.env.GO_LIVEPEER_BRANCH || 'master';
const OUTPUT_PATH = path.resolve(process.cwd(), 'snippets/data/gateways/configFlagsData.jsx');

const DRY_RUN = process.argv.includes('--dry-run');

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'livepeer-docs-bot/1.0' } }, (res) => {
        // Follow redirects (GitHub raw URLs return 301/302)
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return httpsGet(res.headers.location).then(resolve).catch(reject);
        }
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve(data));
      })
      .on('error', reject);
  });
}

function escapeForJSX(str) {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
    .replace(/\n/g, ' ')
    .replace(/\r/g, '')
    .replace(/\t/g, ' ');
}

/**
 * Parse Go flag definitions from source code.
 * go-livepeer uses the standard `flag` package via a FlagSet (fs).
 * Patterns matched:
 *   cfg.X = fs.String("flagName", *cfg.X, "description")
 *   cfg.X = fs.Bool("flagName", *cfg.X, "description")
 *   cfg.X = fs.Int("flagName", *cfg.X, "description")
 *   cfg.X = fs.Float64("flagName", *cfg.X, "description")
 *   cfg.X = fs.Duration("flagName", *cfg.X, "description")
 *   Also: flag.Bool("name", false, "desc") in livepeer.go
 */
function parseFlagDefinitions(sourceCode) {
  const flags = [];

  // Match fs.Xxx("name", default, "description") — the main go-livepeer pattern
  // Description may contain escaped quotes and span significant length
  const fsRegex = /(?:fs|flag)\.(String|Bool|Int|Float64|Duration|Uint)\s*\(\s*"([^"]+)"\s*,\s*([^,]+)\s*,\s*"((?:[^"\\]|\\.)*)"\s*\)/g;

  let match;
  while ((match = fsRegex.exec(sourceCode)) !== null) {
    const type = match[1].toLowerCase();
    const name = match[2];
    const defaultVal = match[3].trim();
    const description = match[4];

    flags.push({
      Flag: `-${name}`,
      Type: type === 'float64' ? 'float' : type,
      Default: escapeForJSX(defaultVal.replace(/^\*cfg\.\w+$/, '(config default)').replace(/^"|"$/g, '')),
      Description: escapeForJSX(description),
    });
  }

  // Also match backtick-quoted descriptions: fs.String("name", default, `description`)
  const backtickRegex = /(?:fs|flag)\.(String|Bool|Int|Float64|Duration|Uint)\s*\(\s*"([^"]+)"\s*,\s*([^,]+)\s*,\s*`([^`]*)`\s*\)/g;

  while ((match = backtickRegex.exec(sourceCode)) !== null) {
    const type = match[1].toLowerCase();
    const name = match[2];
    const defaultVal = match[3].trim();
    const description = match[4];

    // Skip if already captured by the double-quote regex
    if (flags.some(f => f.Flag === `-${name}`)) continue;

    flags.push({
      Flag: `-${name}`,
      Type: type === 'float64' ? 'float' : type,
      Default: escapeForJSX(defaultVal.replace(/^\*cfg\.\w+$/, '(config default)').replace(/^"|"$/g, '')),
      Description: escapeForJSX(description),
    });
  }

  return flags;
}

/**
 * Categorise flags by name prefix.
 */
function categoriseFlags(flags) {
  const categories = {
    'Network': [],
    'Transcoding': [],
    'AI / Compute': [],
    'Orchestrator': [],
    'Gateway': [],
    'Pricing': [],
    'Payment': [],
    'Monitoring': [],
    'Security': [],
    'Storage': [],
    'General': [],
  };

  for (const flag of flags) {
    const name = flag.Flag.toLowerCase();
    if (name.includes('http') || name.includes('addr') || name.includes('port') || name.includes('rpc') || name.includes('network') || name.includes('service')) {
      flag.Category = 'Network';
    } else if (name.includes('transcode') || name.includes('nvidia') || name.includes('gpu') || name.includes('codec') || name.includes('video')) {
      flag.Category = 'Transcoding';
    } else if (name.includes('ai') || name.includes('pipeline') || name.includes('model') || name.includes('runner') || name.includes('capability')) {
      flag.Category = 'AI / Compute';
    } else if (name.includes('orch') || name.includes('reward') || name.includes('redeemer') || name.includes('block')) {
      flag.Category = 'Orchestrator';
    } else if (name.includes('gateway') || name.includes('broadcaster')) {
      flag.Category = 'Gateway';
    } else if (name.includes('price') || name.includes('pixelsperu') || name.includes('maxprice') || name.includes('fee')) {
      flag.Category = 'Pricing';
    } else if (name.includes('payment') || name.includes('ticket') || name.includes('deposit') || name.includes('pm') || name.includes('sender')) {
      flag.Category = 'Payment';
    } else if (name.includes('monitor') || name.includes('metric') || name.includes('log') || name.includes('verbose')) {
      flag.Category = 'Monitoring';
    } else if (name.includes('auth') || name.includes('secret') || name.includes('tls') || name.includes('keyfile') || name.includes('passphrase')) {
      flag.Category = 'Security';
    } else if (name.includes('data') || name.includes('objectstore') || name.includes('storage') || name.includes('ipfs')) {
      flag.Category = 'Storage';
    } else {
      flag.Category = 'General';
    }
  }

  return flags.sort((a, b) => a.Category.localeCompare(b.Category) || a.Flag.localeCompare(b.Flag));
}

function generateJSX(flags) {
  const timestamp = new Date().toISOString();

  return `/**
 * DO NOT EDIT MANUALLY — auto-generated by fetch-config-flags.js
 * Last updated: ${timestamp}
 * Source: ${REPO} (${BRANCH} branch)
 * Workflow: .github/workflows/update-config-flags.yml
 *
 * @typedef {Object} ConfigFlag
 * @property {string} Flag - CLI flag name
 * @property {string} Category - Functional category
 * @property {string} Type - Data type (string, bool, int, float, duration)
 * @property {string} Default - Default value
 * @property {string} Description - Flag description
 */
export const configFlagsData = [
${flags.map(f => `  {
    Flag: '${f.Flag}',
    Category: '${f.Category}',
    Type: '${f.Type}',
    Default: '${f.Default}',
    Description: '${f.Description}',
  }`).join(',\n')}
];

export const configFlagsMetadata = {
  lastUpdated: '${timestamp}',
  source: '${REPO}',
  branch: '${BRANCH}',
  totalFlags: ${flags.length},
  categories: ${JSON.stringify([...new Set(flags.map(f => f.Category))].sort())},
};
`;
}

async function main() {
  console.log(`Fetching go-livepeer flags from ${REPO}@${BRANCH}...`);

  // go-livepeer defines flags in:
  // - cmd/livepeer/starter/flags.go (main flags via NewLivepeerConfig)
  // - cmd/livepeer/livepeer.go (a few top-level flags: -j, -version, -v, -config)
  const files = [
    `https://raw.githubusercontent.com/${REPO}/${BRANCH}/cmd/livepeer/starter/flags.go`,
    `https://raw.githubusercontent.com/${REPO}/${BRANCH}/cmd/livepeer/livepeer.go`,
  ];

  let allFlags = [];

  for (const url of files) {
    console.log(`Fetching ${url}...`);
    try {
      const source = await httpsGet(url);
      if (source.includes('404') && source.length < 200) {
        console.log(`  Skipped (not found)`);
        continue;
      }
      const flags = parseFlagDefinitions(source);
      console.log(`  Found ${flags.length} flags`);
      allFlags = allFlags.concat(flags);
    } catch (err) {
      console.log(`  Error: ${err.message}`);
    }
  }

  // Deduplicate by flag name
  const seen = new Set();
  allFlags = allFlags.filter(f => {
    if (seen.has(f.Flag)) return false;
    seen.add(f.Flag);
    return true;
  });

  const categorised = categoriseFlags(allFlags);
  console.log(`\nTotal unique flags: ${categorised.length}`);
  console.log(`Categories: ${[...new Set(categorised.map(f => f.Category))].join(', ')}`);

  const jsxContent = generateJSX(categorised);

  if (DRY_RUN) {
    console.log('\n--- DRY RUN (preview) ---');
    console.log(jsxContent.slice(0, 800) + '...');
    console.log(`\nWould write ${jsxContent.length} bytes to ${OUTPUT_PATH}`);
  } else {
    const dir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(OUTPUT_PATH, jsxContent);
    console.log(`Wrote ${categorised.length} flags to ${OUTPUT_PATH}`);
  }
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
