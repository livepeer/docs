#!/usr/bin/env node
/**
 * @script      update-livepeer-release
 * @type        integrator
 * @concern     maintenance
 * @niche       release
 * @purpose     qa:data-refresh
 * @description Fetches or accepts the latest go-livepeer release tag and writes the canonical release data module.
 * @mode        integrate
 * @pipeline    manual
 * @scope       .github/workflows, snippets/data/globals
 * @usage       node .github/scripts/update-livepeer-release.js [--version <tag>]
 * @policy      E-R1, R-R11
 */

const DRY_RUN = process.argv.includes('--dry-run');
const fs = require('fs');
const path = require('path');

const GITHUB_API_URL = 'https://api.github.com/repos/livepeer/go-livepeer/releases/latest';
const RELEASE_PAGE_BASE_URL = 'https://github.com/livepeer/go-livepeer/releases/tag';
const DEFAULT_OUTPUT_PATH = path.resolve(
  __dirname,
  '..',
  '..',
  'snippets',
  'data',
  'globals',
  'latestRelease.jsx'
);

function parseArgs(argv) {
  const args = { version: '' };

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];

    if (value === '--version') {
      const next = argv[index + 1];
      if (!next || next.startsWith('--')) {
        throw new Error('Missing value for --version');
      }
      args.version = next.trim();
      index += 1;
      continue;
    }

    throw new Error(`Unsupported argument: ${value}`);
  }

  return args;
}

function buildLatestReleaseModule(version) {
  if (!version || version === 'null') {
    throw new Error('A non-empty release version is required');
  }

  return (
    `export const latestVersion = "${version}";\n` +
    'export const latestReleasePageUrl =\n' +
    `  "${RELEASE_PAGE_BASE_URL}/${version}";\n`
  );
}

async function fetchLatestRelease(fetcher = global.fetch) {
  if (typeof fetcher !== 'function') {
    throw new Error('Fetch is unavailable in this runtime');
  }

  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'livepeer-docs-release-updater',
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetcher(GITHUB_API_URL, { headers });
  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.status} ${response.statusText}`);
  }

  const payload = await response.json();
  const version = String(payload?.tag_name || '').trim();
  if (!version || version === 'null') {
    throw new Error('GitHub API response did not include a valid tag_name');
  }

  return version;
}

function writeLatestReleaseModule({ version, outputPath = DEFAULT_OUTPUT_PATH }) {
  const content = buildLatestReleaseModule(version);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  if (DRY_RUN) { console.log('[dry-run] Would write:', outputPath); } else { fs.writeFileSync(outputPath, content, 'utf8'); };
  return content;
}

async function main(options = {}) {
  const argv = options.argv || process.argv.slice(2);
  const outputPath = options.outputPath || DEFAULT_OUTPUT_PATH;
  const fetcher = options.fetcher || global.fetch;
  const { version: overrideVersion } = parseArgs(argv);
  const version = overrideVersion || await fetchLatestRelease(fetcher);

  writeLatestReleaseModule({ version, outputPath });
  return { version, outputPath };
}

if (require.main === module) {
  main()
    .then(({ version, outputPath }) => {
      console.log(`Updated ${path.relative(process.cwd(), outputPath)} to ${version}`);
    })
    .catch((error) => {
      console.error(error.message);
      process.exit(1);
    });
}

module.exports = {
  DEFAULT_OUTPUT_PATH,
  GITHUB_API_URL,
  RELEASE_PAGE_BASE_URL,
  buildLatestReleaseModule,
  fetchLatestRelease,
  main,
  parseArgs,
  writeLatestReleaseModule,
};
