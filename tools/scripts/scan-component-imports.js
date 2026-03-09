#!/usr/bin/env node
/**
 * @script           scan-component-imports
 * @category         generator
 * @purpose          governance:index-management
 * @scope            full-repo
 * @owner            docs
 * @needs            R-R10
 * @purpose-statement Scans MDX imports to produce component-usage-map.json and detect @usedIn drift.
 * @pipeline         P6 (on-demand)
 * @usage            node tools/scripts/scan-component-imports.js [--verify]
 */

const fs = require('fs');
const path = require('path');
const {
  extractExports,
  getComponentFiles,
  parseJSDocBlock,
  scanMDXImports
} = require('../lib/component-governance-utils');
const { buildRegistry } = require('./generate-component-registry');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const OUTPUT_PATH = path.join(REPO_ROOT, 'docs-guide', 'component-usage-map.json');
const REGISTRY_PATH = path.join(REPO_ROOT, 'docs-guide', 'component-registry.json');

function isPublishedDocsPath(filePath) {
  return !/^v2(?:\/(?:cn|es|fr))?\/x-(archived|deprecated|experimental|notes)\//.test(
    String(filePath || '').trim()
  );
}

function usage() {
  console.log(
    [
      'Usage: node tools/scripts/scan-component-imports.js [options]',
      '',
      'Options:',
      '  --verify      Compare live imports with @usedIn declarations and fail on drift',
      '  --help, -h    Show this help message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    verify: false,
    help: false
  };

  argv.forEach((token) => {
    if (token === '--verify') {
      args.verify = true;
      return;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      return;
    }
    throw new Error(`Unknown argument: ${token}`);
  });

  return args;
}

function sortStrings(values) {
  return [...new Set(values)].sort((left, right) =>
    left.localeCompare(right, 'en', { sensitivity: 'base' })
  );
}

function readRegistry() {
  if (fs.existsSync(REGISTRY_PATH)) {
    return JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
  }

  return buildRegistry().registry;
}

function collectDeclaredUsage() {
  const usage = new Map();

  getComponentFiles().forEach((file) => {
    extractExports(file.displayPath).forEach((entry) => {
      if (!entry.jsDocBlock) return;
      const parsed = parseJSDocBlock(entry.jsDocBlock);
      usage.set(
        entry.name,
        sortStrings(
          String(parsed.usedIn || '')
            .split(',')
            .map((value) => value.trim())
            .filter((value) => value && value.toLowerCase() !== 'none' && isPublishedDocsPath(value))
        )
      );
    });
  });

  return usage;
}

function buildUsageMap() {
  const registry = readRegistry();
  const liveImports = scanMDXImports('v2/**/*.mdx');
  const declaredUsage = collectDeclaredUsage();

  const components = registry.components.map((component) => {
    const actual = liveImports.get(component.name) || {
      pages: [],
      count: 0,
      localeBreakdown: { en: 0, es: 0, fr: 0, cn: 0, other: 0 }
    };
    const actualPages = sortStrings(actual.pages);
    const declaredPages = declaredUsage.get(component.name) || [];
    const missingFromJsDoc = actualPages.filter((page) => !declaredPages.includes(page));
    const staleInJsDoc = declaredPages.filter((page) => !actualPages.includes(page));

    return {
      name: component.name,
      file: component.file,
      category: component.category,
      count: actual.count,
      pages: actualPages,
      localeBreakdown: actual.localeBreakdown,
      declaredUsedIn: declaredPages,
      drift: {
        missingFromJsDoc,
        staleInJsDoc
      }
    };
  });

  const orphaned = components
    .filter((component) => component.pages.length === 0)
    .map((component) => ({
      name: component.name,
      file: component.file,
      category: component.category
    }));

  const mostImported = [...components]
    .sort((left, right) => {
      if (right.count !== left.count) return right.count - left.count;
      return left.name.localeCompare(right.name, 'en', { sensitivity: 'base' });
    })
    .slice(0, 25)
    .map((component, index) => ({
      rank: index + 1,
      name: component.name,
      category: component.category,
      count: component.count
    }));

  const drift = components
    .filter((component) => component.drift.missingFromJsDoc.length || component.drift.staleInJsDoc.length)
    .map((component) => ({
      name: component.name,
      file: component.file,
      missingFromJsDoc: component.drift.missingFromJsDoc,
      staleInJsDoc: component.drift.staleInJsDoc
    }));

  return {
    usageMap: {
      _meta: {
        generated: new Date().toISOString(),
        generator: 'tools/scripts/scan-component-imports.js',
        componentCount: components.length
      },
      components,
      orphaned,
      mostImported
    },
    drift
  };
}

function run(argv = process.argv.slice(2)) {
  let args;
  try {
    args = parseArgs(argv);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    usage();
    return 1;
  }

  if (args.help) {
    usage();
    return 0;
  }

  const { usageMap, drift } = buildUsageMap();
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(usageMap, null, 2)}\n`, 'utf8');
  console.log(`Wrote ${path.relative(REPO_ROOT, OUTPUT_PATH)}`);

  if (args.verify && drift.length > 0) {
    console.error('❌ @usedIn drift detected:');
    drift.forEach((entry) => {
      if (entry.missingFromJsDoc.length > 0) {
        console.error(`- ${entry.file} :: ${entry.name} missing from @usedIn: ${entry.missingFromJsDoc.join(', ')}`);
      }
      if (entry.staleInJsDoc.length > 0) {
        console.error(`- ${entry.file} :: ${entry.name} stale @usedIn entries: ${entry.staleInJsDoc.join(', ')}`);
      }
    });
    return 1;
  }

  if (args.verify) {
    console.log('No @usedIn drift detected.');
  }

  return 0;
}

if (require.main === module) {
  process.exit(run());
}

module.exports = {
  buildUsageMap,
  parseArgs,
  run
};
