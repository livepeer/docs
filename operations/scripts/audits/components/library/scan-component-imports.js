#!/usr/bin/env node
/**
 * @script      scan-component-imports
 * @type        
 * @concern     
 * @niche       
 * @purpose     governance:index-management
 * @description Scans MDX imports to produce component-usage-map.json and detect @usedIn drift.
 * @mode        read-only
 * @pipeline    manual, P6, manual
 * @scope       generated-output
 * @usage       node operations/scripts/audits/components/library/scan-component-imports.js [--verify] [--since <commit>]
 */

const fs = require('fs');
const path = require('path');
const {
  buildComponentUsageSummary,
  extractExports,
  getCategoryFromPath,
  getChangedMdxFilesSince,
  getComponentFiles,
  normalizeCsvField,
  parseJSDocBlock,
  scanMDXImports
} = require('../../../../../tools/lib/governance/component-governance-utils');

const REPO_ROOT = process.cwd();
const OUTPUT_PATH = path.join(REPO_ROOT, 'docs-guide', 'config', 'component-usage-map.json');

function usage() {
  console.log(
    [
      'Usage: node operations/scripts/audits/components/library/scan-component-imports.js [options]',
      '',
      'Options:',
      '  --verify          Compare live imports with @usedIn declarations and fail on drift',
      '  --since <commit>  Only scan MDX files changed since <commit> (incremental mode)',
      '  --help, -h        Show this help message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    verify: false,
    since: null,
    help: false
  };

  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--verify') {
      args.verify = true;
    } else if (token === '--since') {
      const ref = argv[i + 1];
      if (!ref || ref.startsWith('--')) {
        throw new Error('--since requires a commit ref argument');
      }
      args.since = ref;
      i += 1;
    } else if (token === '--help' || token === '-h') {
      args.help = true;
    } else {
      throw new Error(`Unknown argument: ${token}`);
    }
  }

  return args;
}

function collectComponentInventory() {
  const inventory = [];
  getComponentFiles().forEach((file) => {
    extractExports(file.displayPath).forEach((entry) => {
      const parsed = entry.jsDocBlock ? parseJSDocBlock(entry.jsDocBlock) : null;
      inventory.push({
        name: entry.name,
        file: file.displayPath,
        category: parsed?.category || getCategoryFromPath(file.displayPath),
        declaredUsedIn: normalizeCsvField(parsed?.usedIn || '', { publishedOnly: true }),
        declaredUsedInEnglish: normalizeCsvField(parsed?.usedIn || '', {
          publishedOnly: true,
          englishOnly: true
        })
      });
    });
  });

  return inventory.sort((left, right) => {
    if (left.category !== right.category) {
      return left.category.localeCompare(right.category, 'en', { sensitivity: 'base' });
    }
    if (left.name !== right.name) {
      return left.name.localeCompare(right.name, 'en', { sensitivity: 'base' });
    }
    return left.file.localeCompare(right.file, 'en', { sensitivity: 'base' });
  });
}

function buildUsageMap(since = null) {
  const inventory = collectComponentInventory();

  const scanOptions = { publishedOnly: true };
  if (since) {
    const changedFiles = getChangedMdxFilesSince(since);
    scanOptions.files = changedFiles;
  }
  const liveImports = scanMDXImports('v2/**/*.mdx', scanOptions);

  const components = inventory.map((component) => {
    const usage = buildComponentUsageSummary(liveImports, component.name);
    const missingFromJsDoc = usage.englishCanonicalPages.filter(
      (page) => !component.declaredUsedInEnglish.includes(page)
    );
    const staleInJsDoc = component.declaredUsedInEnglish.filter(
      (page) => !usage.englishCanonicalPages.includes(page)
    );

    return {
      name: component.name,
      file: component.file,
      category: component.category,
      count: usage.count,
      pages: usage.pages,
      localeBreakdown: usage.localeBreakdown,
      englishCanonicalCount: usage.englishCanonicalCount,
      englishCanonicalPages: usage.englishCanonicalPages,
      declaredUsedIn: component.declaredUsedIn,
      declaredUsedInEnglish: component.declaredUsedInEnglish,
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

  const meta = {
    generated: new Date().toISOString(),
    generator: 'operations/scripts/audits/components/library/scan-component-imports.js',
    componentCount: inventory.length,
    canonicalUsagePolicy: 'english-only-jsdoc'
  };
  if (since) {
    meta.incremental = true;
    meta.since = since;
  }

  return {
    usageMap: {
      _meta: meta,
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

  let usageMap, drift;
  try {
    ({ usageMap, drift } = buildUsageMap(args.since));
  } catch (error) {
    console.error(`❌ ${error.message}`);
    return 1;
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(usageMap, null, 2)}\n`, 'utf8');
  console.log(`Wrote ${path.relative(REPO_ROOT, OUTPUT_PATH)}${args.since ? ` (incremental since ${args.since})` : ''}`);

  if (args.verify && drift.length > 0) {
    console.error('❌ English-canonical @usedIn drift detected:');
    drift.forEach((entry) => {
      if (entry.missingFromJsDoc.length > 0) {
        console.error(
          `- ${entry.file} :: ${entry.name} missing from @usedIn: ${entry.missingFromJsDoc.join(', ')}`
        );
      }
      if (entry.staleInJsDoc.length > 0) {
        console.error(
          `- ${entry.file} :: ${entry.name} stale @usedIn entries: ${entry.staleInJsDoc.join(', ')}`
        );
      }
    });
    return 1;
  }

  if (args.verify) {
    console.log('No English-canonical @usedIn drift detected.');
  }

  return 0;
}

if (require.main === module) {
  process.exit(run());
}

module.exports = {
  buildUsageMap,
  collectComponentInventory,
  parseArgs,
  run
};
