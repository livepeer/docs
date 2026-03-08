#!/usr/bin/env node
/**
 * @script            check-anchor-usage
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tools/scripts/validators/structure, docs.json
 * @owner             docs
 * @needs             S-3.4
 * @purpose-statement Validates that docs.json route fragments are used only in approved documentation sections.
 * @pipeline          manual — run on demand or from enforcement workflows
 * @usage             node tools/scripts/validators/structure/check-anchor-usage.js
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../../../../');
const DOCS_JSON_PATH = path.join(REPO_ROOT, 'docs.json');
const ALLOWED_ANCHOR_SECTIONS = ['v2/resources/', 'v2/solutions/livepeer-studio/'];

function usage() {
  console.log('Usage: node tools/scripts/validators/structure/check-anchor-usage.js');
}

function parseArgs(argv) {
  const args = {
    help: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return args;
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function isDocsRouteString(value) {
  const trimmed = String(value || '').trim();
  return trimmed.startsWith('v1/') || trimmed.startsWith('v2/');
}

function collectRouteEntries(node, currentPath = 'root', results = []) {
  if (typeof node === 'string') {
    const route = node.trim();
    if (isDocsRouteString(route)) {
      results.push({
        route,
        jsonPath: currentPath
      });
    }
    return results;
  }

  if (Array.isArray(node)) {
    node.forEach((item, index) => {
      collectRouteEntries(item, `${currentPath}[${index}]`, results);
    });
    return results;
  }

  if (!node || typeof node !== 'object') {
    return results;
  }

  Object.entries(node).forEach(([key, value]) => {
    collectRouteEntries(value, `${currentPath}.${key}`, results);
  });

  return results;
}

function isAllowedAnchorRoute(route) {
  const baseRoute = String(route || '').split('#')[0].trim();

  return ALLOWED_ANCHOR_SECTIONS.some((allowedPrefix) => {
    const normalizedPrefix = String(allowedPrefix || '').replace(/\/+$/, '');
    return baseRoute === normalizedPrefix || baseRoute.startsWith(`${normalizedPrefix}/`);
  });
}

function findAnchorViolations(routeEntries) {
  return routeEntries
    .filter((entry) => entry.route.includes('#'))
    .filter((entry) => !isAllowedAnchorRoute(entry.route));
}

function loadDocsJson(docsJsonPath = DOCS_JSON_PATH) {
  if (!fs.existsSync(docsJsonPath)) {
    throw new Error(`docs.json not found: ${toPosix(path.relative(REPO_ROOT, docsJsonPath))}`);
  }

  try {
    return JSON.parse(fs.readFileSync(docsJsonPath, 'utf8'));
  } catch (error) {
    throw new Error(`Failed to parse docs.json: ${error.message}`);
  }
}

function run() {
  const docsJson = loadDocsJson();
  const routeEntries = collectRouteEntries(docsJson);
  const anchoredRoutes = routeEntries.filter((entry) => entry.route.includes('#'));
  const violations = findAnchorViolations(routeEntries);

  if (violations.length === 0) {
    console.log(
      `Anchor usage checks passed (${routeEntries.length} route entries scanned, ${anchoredRoutes.length} anchored route entr${anchoredRoutes.length === 1 ? 'y' : 'ies'} found).`
    );
    return 0;
  }

  console.error('\n❌ Disallowed docs.json anchor routes found:\n');
  violations.forEach((entry) => {
    console.error(`  ${entry.jsonPath} -> ${entry.route}`);
  });
  console.error(`\nAllowed sections: ${ALLOWED_ANCHOR_SECTIONS.join(', ')}`);
  console.error(`Found ${violations.length} violation${violations.length === 1 ? '' : 's'}.`);
  return 1;
}

if (require.main === module) {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      usage();
      process.exit(0);
    }

    process.exit(run());
  } catch (error) {
    console.error(`Anchor usage checker failed: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  ALLOWED_ANCHOR_SECTIONS,
  collectRouteEntries,
  findAnchorViolations,
  isAllowedAnchorRoute,
  isDocsRouteString,
  loadDocsJson,
  run
};
