#!/usr/bin/env node
/**
 * @script      generate-component-library
 * @type        generator
 * @concern     components
 * @niche       library
 * @purpose     governance:documentation
 * @description Generates per-grouping LIBRARY.md files and a root LIBRARY.md index from
 *              component-registry.json and component-usage-map.json. Each entry includes
 *              component name, description, props, import path, usage example, and status badge.
 * @mode        generate
 * @pipeline    manual, post-registry -> component-registry.json -> snippets/components/LIBRARY.md
 * @scope       snippets/components/
 * @usage       node operations/scripts/generators/components/library/generate-component-library.js [--dry-run] [--check] [--category elements]
 * @policy      R-R10
 */

const fs = require('fs');
const path = require('path');
const { VALID_CATEGORIES } = require('../../../../../tools/lib/governance/component-governance-utils');

const REPO_ROOT = process.cwd();
const REGISTRY_PATH = path.join(REPO_ROOT, 'docs-guide', 'config', 'component-registry.json');
const USAGE_MAP_PATH = path.join(REPO_ROOT, 'docs-guide', 'config', 'component-usage-map.json');
const COMPONENTS_DIR = path.join(REPO_ROOT, 'snippets', 'components');
const SCRIPT_PATH = 'operations/scripts/generators/components/library/generate-component-library.js';

const STATUS_ICONS = {
  stable: '🟢',
  experimental: '🧪',
  deprecated: '🟠',
  broken: '🔴',
  placeholder: '⬜',
  planned: '📋'
};

const CATEGORY_PURPOSES = {
  elements: 'Smallest visual atoms — no children, no fetching, no arrangement.',
  wrappers: 'Holds, groups, or spatially arranges other components.',
  displays: 'Renders authored content into a specific visual format.',
  scaffolding: 'One-per-page structural skeleton — heroes, portals, frame-mode.',
  integrators: 'Fetches, embeds, or binds to external or third-party data.',
  config: 'Non-component configuration objects.'
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
      '  --check         Verify existing LIBRARY.md files are up-to-date, exit 1 if stale',
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

function loadJSON(filePath, label) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    if (label === 'usage-map') {
      console.warn(`Warning: ${label} not found — import counts will be omitted`);
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
  return groups;
}

function groupBySubniche(components) {
  const groups = {};
  for (const comp of components) {
    const sub = comp.subniche || 'other';
    if (!groups[sub]) groups[sub] = [];
    groups[sub].push(comp);
  }
  for (const sub of Object.keys(groups)) {
    groups[sub].sort((a, b) => a.name.localeCompare(b.name));
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

function renderParamsTable(params) {
  if (!params || params.length === 0) return 'No props documented.\n';
  const lines = [
    '| Prop | Type | Default | Description |',
    '|---|---|---|---|'
  ];
  for (const p of params) {
    const name = p.name || '?';
    const type = `\`${(p.type || 'any').replace(/\|/g, '\\|')}\``;
    const def = p.defaultValue || '—';
    const desc = (p.description || '').replace(/\n/g, ' ').trim() || '—';
    lines.push(`| \`${name}\` | ${type} | ${def} | ${desc} |`);
  }
  return lines.join('\n') + '\n';
}

function renderComponent(comp, usageLookup) {
  const icon = STATUS_ICONS[comp.status] || '⬜';
  const imports = usageLookup[comp.name] || 0;
  const desc = comp.description || '*(No description provided)*';
  const importPath = comp.file ? `/${comp.file}` : '';

  const lines = [
    `### ${icon} ${comp.name}`,
    '',
    `> ${desc}`,
    '',
    `**Import:** \`import { ${comp.name} } from "${importPath}";\``,
    `**Status:** ${comp.status || 'stable'} | **Imports:** ${imports}`,
    ''
  ];

  if (comp.params && comp.params.length > 0) {
    lines.push('#### Props');
    lines.push('');
    lines.push(renderParamsTable(comp.params));
  }

  if (comp.examples && comp.examples.length > 0) {
    lines.push('#### Usage');
    lines.push('');
    lines.push('```jsx');
    lines.push(comp.examples[0]);
    lines.push('```');
    lines.push('');
  }

  lines.push('---');
  lines.push('');

  return lines.join('\n');
}

function generateCategoryLibrary(category, components, usageLookup) {
  const now = new Date().toISOString();
  const sc = countByStatus(components);
  const subgroups = groupBySubniche(components);
  const sortedSubs = Object.keys(subgroups).sort();

  const lines = [
    '<!-- GENERATED FILE — DO NOT EDIT DIRECTLY -->',
    `<!-- Generator: ${SCRIPT_PATH} -->`,
    `<!-- Generated: ${now} -->`,
    `<!-- Regenerate: node ${SCRIPT_PATH} --category ${category} -->`,
    '',
    `# ${CATEGORY_LABELS[category] || category} Component Library`,
    '',
    CATEGORY_PURPOSES[category] || '',
    '',
    `**Components:** ${components.length} | **Stable:** ${sc.stable || 0} | **Experimental:** ${sc.experimental || 0} | **Deprecated:** ${sc.deprecated || 0}`,
    '',
    '---',
    ''
  ];

  for (const sub of sortedSubs) {
    const subComps = subgroups[sub];
    lines.push(`## ${sub}`);
    lines.push('');
    for (const comp of subComps) {
      lines.push(renderComponent(comp, usageLookup));
    }
  }

  return lines.join('\n');
}

function generateRootLibrary(groups, usageLookup, registry) {
  const now = new Date().toISOString();
  const totalCount = registry._meta ? registry._meta.componentCount : 0;

  const allComponents = [];
  for (const cat of VALID_CATEGORIES) {
    for (const comp of (groups[cat] || [])) {
      allComponents.push(comp);
    }
  }
  allComponents.sort((a, b) => (usageLookup[b.name] || 0) - (usageLookup[a.name] || 0));
  const top20 = allComponents.slice(0, 20);

  const lines = [
    '<!-- GENERATED FILE — DO NOT EDIT DIRECTLY -->',
    `<!-- Generator: ${SCRIPT_PATH} -->`,
    `<!-- Generated: ${now} -->`,
    `<!-- Regenerate: node ${SCRIPT_PATH} -->`,
    '',
    '# Component Library',
    '',
    `**Total components:** ${totalCount}`,
    '',
    '| Category | Components | Stable | Exp. | Deprecated | Library |',
    '|---|---|---|---|---|---|'
  ];

  for (const cat of VALID_CATEGORIES) {
    const comps = groups[cat] || [];
    const sc = countByStatus(comps);
    lines.push(
      `| ${CATEGORY_LABELS[cat]} | ${comps.length} | ${sc.stable || 0} | ${sc.experimental || 0} | ${sc.deprecated || 0} | [${cat}/LIBRARY.md](${cat}/LIBRARY.md) |`
    );
  }

  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Top 20 Most Used Components');
  lines.push('');
  lines.push('| # | Component | Category | Imports | Status |');
  lines.push('|---|---|---|---|---|');

  top20.forEach((comp, idx) => {
    const icon = STATUS_ICONS[comp.status] || '⬜';
    const imports = usageLookup[comp.name] || 0;
    lines.push(`| ${idx + 1} | **${comp.name}** | ${comp.category} | ${imports} | ${icon} ${comp.status} |`);
  });

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

    const content = generateCategoryLibrary(cat, comps, usageLookup);
    const outputPath = path.join(COMPONENTS_DIR, cat, 'LIBRARY.md');

    if (args.mode === 'check') {
      const existing = fs.existsSync(outputPath) ? fs.readFileSync(outputPath, 'utf8') : '';
      const strip = (s) => s.replace(/<!-- Generated: .* -->/g, '<!-- Generated: CHECK -->');
      if (strip(content) !== strip(existing)) {
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
    const rootContent = generateRootLibrary(groups, usageLookup, registry);
    const rootPath = path.join(COMPONENTS_DIR, 'LIBRARY.md');

    if (args.mode === 'check') {
      const existing = fs.existsSync(rootPath) ? fs.readFileSync(rootPath, 'utf8') : '';
      const strip = (s) => s.replace(/<!-- Generated: .* -->/g, '<!-- Generated: CHECK -->');
      if (strip(rootContent) !== strip(existing)) {
        console.log(`STALE: ${path.relative(REPO_ROOT, rootPath)}`);
        staleCount++;
      }
    } else if (args.mode === 'dry-run') {
      console.log(`Would write: ${path.relative(REPO_ROOT, rootPath)} (root library)`);
    } else {
      fs.writeFileSync(rootPath, rootContent, 'utf8');
      writtenCount++;
      console.log(`Wrote: ${path.relative(REPO_ROOT, rootPath)} (root library)`);
    }
  }

  if (args.mode === 'check' && staleCount > 0) {
    console.log(`\n${staleCount} stale LIBRARY.md file(s). Run without --check to regenerate.`);
    process.exit(1);
  }

  if (args.mode === 'write') {
    console.log(`\nDone. ${writtenCount} LIBRARY.md file(s) written.`);
  }
}

try {
  main();
} catch (err) {
  console.error(`Runtime error: ${err.message}`);
  if (process.env.DEBUG) console.error(err.stack);
  process.exit(2);
}
