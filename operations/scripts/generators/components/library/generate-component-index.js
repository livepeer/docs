#!/usr/bin/env node
/**
 * @script      generate-component-index
 * @type        generator
 * @concern     components
 * @niche       library
 * @purpose     governance:index-management
 * @description Generates per-grouping INDEX.md quick-reference tables from component-registry.json
 *              and component-usage-map.json. Lists all components with name, file, status,
 *              description, and import count. Distinct from LIBRARY.md (full documentation).
 * @mode        generate
 * @pipeline    manual, post-registry -> component-registry.json -> snippets/components/INDEX.md
 * @scope       snippets/components/
 * @usage       node operations/scripts/generators/components/library/generate-component-index.js [--dry-run] [--check] [--category elements]
 * @policy      R-R10
 */

const fs = require('fs');
const path = require('path');
const { VALID_CATEGORIES } = require('../../../../../tools/lib/governance/component-governance-utils');

const REPO_ROOT = process.cwd();
const REGISTRY_PATH = path.join(REPO_ROOT, 'docs-guide', 'config', 'component-registry.json');
const USAGE_MAP_PATH = path.join(REPO_ROOT, 'docs-guide', 'config', 'component-usage-map.json');
const COMPONENTS_DIR = path.join(REPO_ROOT, 'snippets', 'components');
const SCRIPT_PATH = 'operations/scripts/generators/components/library/generate-component-index.js';

const STATUS_ICONS = {
  stable: '🟢',
  experimental: '🧪',
  deprecated: '🟠',
  broken: '🔴',
  placeholder: '⬜',
  planned: '📋'
};

const CATEGORY_LABELS = {
  elements: 'Elements',
  wrappers: 'Wrappers',
  displays: 'Displays',
  scaffolding: 'Scaffolding',
  integrators: 'Integrators',
  config: 'Config'
};

function printHelp() {
  console.log(
    [
      'Usage:',
      `  node ${SCRIPT_PATH} [options]`,
      '',
      'Options:',
      '  --dry-run       Print what would be written without writing',
      '  --check         Verify existing INDEX.md files are up-to-date, exit 1 if stale',
      '  --category <n>  Generate only for a specific category',
      '  --help, -h      Show this help message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = { mode: 'write', category: null, help: false };
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--help' || token === '-h') args.help = true;
    else if (token === '--dry-run') args.mode = 'dry-run';
    else if (token === '--check') args.mode = 'check';
    else if (token === '--category' && argv[i + 1]) { args.category = argv[++i]; }
    else { console.error(`Unknown argument: ${token}`); process.exit(2); }
  }
  return args;
}

function truncate(text, max) {
  if (!text) return '*(undocumented)*';
  const clean = text.replace(/\n/g, ' ').trim();
  return clean.length > max ? clean.slice(0, max) + '...' : clean;
}

function loadJSON(filePath, label) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    if (label === 'usage-map') {
      console.warn(`Warning: ${label} not found at ${filePath} — import counts will be omitted`);
      return null;
    }
    console.error(`Error: Cannot read ${label} at ${filePath}: ${err.message}`);
    process.exit(2);
  }
}

function buildUsageLookup(usageMap) {
  const lookup = {};
  if (!usageMap || !usageMap.components) return lookup;
  for (const entry of usageMap.components) {
    lookup[entry.name] = entry.englishCanonicalCount || entry.count || 0;
  }
  return lookup;
}

function groupByCategory(components) {
  const groups = {};
  for (const cat of VALID_CATEGORIES) groups[cat] = [];
  for (const comp of components) {
    const cat = comp.category || 'config';
    if (groups[cat]) groups[cat].push(comp);
  }
  for (const cat of Object.keys(groups)) {
    groups[cat].sort((a, b) => a.name.localeCompare(b.name));
  }
  return groups;
}

function countByStatus(components) {
  const counts = {};
  for (const comp of components) {
    const s = comp.status || 'stable';
    counts[s] = (counts[s] || 0) + 1;
  }
  return counts;
}

function generateCategoryIndex(category, components, usageLookup) {
  const now = new Date().toISOString();
  const statusCounts = countByStatus(components);
  const hasUsage = Object.keys(usageLookup).length > 0;

  const lines = [
    '<!-- GENERATED FILE — DO NOT EDIT DIRECTLY -->',
    `<!-- Generator: ${SCRIPT_PATH} -->`,
    `<!-- Generated: ${now} -->`,
    `<!-- Components: ${components.length} | Category: ${category} -->`,
    '',
    `# ${CATEGORY_LABELS[category] || category} — Component Index`,
    '',
    'Quick-reference table. For full documentation see [LIBRARY.md](LIBRARY.md).',
    '',
  ];

  const headerCols = ['#', 'Component', 'File', 'Subcategory', 'Status'];
  if (hasUsage) headerCols.push('Imports');
  headerCols.push('Description');

  lines.push(`| ${headerCols.join(' | ')} |`);
  lines.push(`|${headerCols.map(() => '---').join('|')}|`);

  components.forEach((comp, idx) => {
    const icon = STATUS_ICONS[comp.status] || '⬜';
    const desc = truncate(comp.description, 80);
    const file = path.basename(comp.file || '');
    const sub = comp.subniche || '';
    const imports = usageLookup[comp.name] || 0;

    const cols = [
      String(idx + 1),
      `**${comp.name}**`,
      `\`${file}\``,
      sub,
      `${icon} ${comp.status || 'stable'}`
    ];
    if (hasUsage) cols.push(String(imports));
    cols.push(desc);

    lines.push(`| ${cols.join(' | ')} |`);
  });

  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('**Status key:** 🟢 stable · 🧪 experimental · 🟠 deprecated · 🔴 broken · ⬜ placeholder · 📋 planned');
  lines.push('');

  const parts = [`**Total:** ${components.length} components`];
  if (statusCounts.stable) parts.push(`**Stable:** ${statusCounts.stable}`);
  if (statusCounts.experimental) parts.push(`**Experimental:** ${statusCounts.experimental}`);
  if (statusCounts.deprecated) parts.push(`**Deprecated:** ${statusCounts.deprecated}`);
  lines.push(parts.join(' | '));
  lines.push('');

  return lines.join('\n');
}

function generateRootIndex(groups, usageLookup) {
  const now = new Date().toISOString();
  let totalCount = 0;

  const lines = [
    '<!-- GENERATED FILE — DO NOT EDIT DIRECTLY -->',
    `<!-- Generator: ${SCRIPT_PATH} -->`,
    `<!-- Generated: ${now} -->`,
    '',
    '# Component Index',
    '',
    '| Category | Components | Stable | Exp. | Deprecated | Broken | Index |',
    '|---|---|---|---|---|---|---|'
  ];

  for (const cat of VALID_CATEGORIES) {
    const comps = groups[cat] || [];
    totalCount += comps.length;
    const sc = countByStatus(comps);
    lines.push(
      `| ${CATEGORY_LABELS[cat] || cat} | ${comps.length} | ${sc.stable || 0} | ${sc.experimental || 0} | ${sc.deprecated || 0} | ${sc.broken || 0} | [INDEX.md](${cat}/INDEX.md) |`
    );
  }

  lines.push('');
  lines.push(`**Total components:** ${totalCount}`);
  lines.push(`**Generated:** ${now}`);
  lines.push('');

  return lines.join('\n');
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { printHelp(); process.exit(0); }

  const registry = loadJSON(REGISTRY_PATH, 'component-registry');
  const usageMap = loadJSON(USAGE_MAP_PATH, 'usage-map');
  const usageLookup = buildUsageLookup(usageMap);
  const groups = groupByCategory(registry.components || []);

  const categoriesToProcess = args.category
    ? [args.category]
    : VALID_CATEGORIES;

  let staleCount = 0;
  let writtenCount = 0;

  for (const cat of categoriesToProcess) {
    const comps = groups[cat] || [];
    if (comps.length === 0 && cat !== 'config') continue;

    const content = generateCategoryIndex(cat, comps, usageLookup);
    const outputPath = path.join(COMPONENTS_DIR, cat, 'INDEX.md');

    if (args.mode === 'check') {
      const existing = fs.existsSync(outputPath) ? fs.readFileSync(outputPath, 'utf8') : '';
      const contentNoDate = content.replace(/<!-- Generated: .* -->/, '<!-- Generated: CHECK -->');
      const existingNoDate = existing.replace(/<!-- Generated: .* -->/, '<!-- Generated: CHECK -->');
      if (contentNoDate !== existingNoDate) {
        console.log(`STALE: ${path.relative(REPO_ROOT, outputPath)}`);
        staleCount++;
      }
    } else if (args.mode === 'dry-run') {
      console.log(`Would write: ${path.relative(REPO_ROOT, outputPath)} (${comps.length} components)`);
    } else {
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, content, 'utf8');
      writtenCount++;
      console.log(`Wrote: ${path.relative(REPO_ROOT, outputPath)} (${comps.length} components)`);
    }
  }

  if (!args.category) {
    const rootContent = generateRootIndex(groups, usageLookup);
    const rootPath = path.join(COMPONENTS_DIR, 'INDEX.md');

    if (args.mode === 'check') {
      const existing = fs.existsSync(rootPath) ? fs.readFileSync(rootPath, 'utf8') : '';
      const contentNoDate = rootContent.replace(/<!-- Generated: .* -->/g, '<!-- Generated: CHECK -->');
      const existingNoDate = existing.replace(/<!-- Generated: .* -->/g, '<!-- Generated: CHECK -->');
      if (contentNoDate !== existingNoDate) {
        console.log(`STALE: ${path.relative(REPO_ROOT, rootPath)}`);
        staleCount++;
      }
    } else if (args.mode === 'dry-run') {
      console.log(`Would write: ${path.relative(REPO_ROOT, rootPath)} (root index)`);
    } else {
      fs.writeFileSync(rootPath, rootContent, 'utf8');
      writtenCount++;
      console.log(`Wrote: ${path.relative(REPO_ROOT, rootPath)} (root index)`);
    }
  }

  if (args.mode === 'check' && staleCount > 0) {
    console.log(`\n${staleCount} stale INDEX.md file(s). Run without --check to regenerate.`);
    process.exit(1);
  }

  if (args.mode === 'write') {
    console.log(`\nDone. ${writtenCount} INDEX.md file(s) written.`);
  }
}

try {
  main();
} catch (err) {
  console.error(`Runtime error: ${err.message}`);
  if (process.env.DEBUG) console.error(err.stack);
  process.exit(2);
}
