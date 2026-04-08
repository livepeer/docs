#!/usr/bin/env node
/**
 * @script      generate-component-examples
 * @type        generator
 * @concern     components
 * @niche       library
 * @purpose     governance:index-management
 * @description Keeps per-file example MDX files in sync with the component registry
 * @mode        generate
 * @pipeline    manual, pr-workflow -> component-registry.json -> snippets/components/examples/*.mdx
 * @scope       snippets/components/
 * @usage       node operations/scripts/generators/components/library/generate-component-examples.js [--scaffold] [--fix-imports] [--check]
 * @policy      R-R10
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../../../..');
const REGISTRY_PATH = path.join(ROOT, 'docs-guide', 'config', 'component-registry.json');
const SNIPPETS_ROOT = path.join(ROOT, 'snippets', 'components');

const args = {
  scaffold: process.argv.includes('--scaffold'),
  fixImports: process.argv.includes('--fix-imports'),
  check: process.argv.includes('--check'),
  write: process.argv.includes('--write'),
};

// --write is shorthand for scaffold + fix-imports
if (args.write) {
  args.scaffold = true;
  args.fixImports = true;
}

// Default with no flags: check mode
if (!args.scaffold && !args.fixImports && !args.check && !args.write) {
  args.check = true;
}

// ─── Load registry ──────────────────────────────────────────────────────────

if (!fs.existsSync(REGISTRY_PATH)) {
  console.error(`❌ Registry not found: ${REGISTRY_PATH}`);
  process.exit(1);
}
const registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));

// ─── Build lookup: sourceFile → [component entries] ─────────────────────────

const ACTIVE_STATUSES = ['stable', 'experimental'];
const byFile = {};

for (const comp of registry.components) {
  // comp.file is repo-relative, e.g. "snippets/components/elements/buttons/Buttons.jsx"
  if (!byFile[comp.file]) byFile[comp.file] = [];
  byFile[comp.file].push(comp);
}

// ─── Determine expected examples file path for a source file ─────────────────

function expectedExamplesPath(sourceFile) {
  // e.g. "snippets/components/elements/buttons/Buttons.jsx"
  //   → "snippets/components/elements/examples/buttons-examples.mdx"
  const rel = path.relative(SNIPPETS_ROOT, path.join(ROOT, sourceFile));
  // rel = "elements/buttons/Buttons.jsx"
  const parts = rel.split(path.sep); // ['elements', 'buttons', 'Buttons.jsx']
  if (parts.length < 3) return null;
  const category = parts[0];
  const subniche = parts[1];
  const examplesDir = path.join(SNIPPETS_ROOT, category, 'examples');
  return path.join(examplesDir, `${subniche}-examples.mdx`);
}

// ─── Parse imports from an MDX file ─────────────────────────────────────────

function parseComponentImports(content) {
  // Returns array of { raw, from, names }
  const imports = [];
  const importRe = /^import\s+\{([^}]+)\}\s+from\s+"([^"]+)"/gm;
  let m;
  while ((m = importRe.exec(content)) !== null) {
    const raw = m[0];
    const namesRaw = m[1];
    const from = m[2];
    const names = namesRaw.split(',').map((n) => n.trim()).filter(Boolean);
    imports.push({ raw, from, names });
  }
  return imports;
}

// ─── Get valid export names for a source file ────────────────────────────────

function validExports(sourceFile) {
  const comps = byFile[sourceFile] || [];
  return new Set(comps.map((c) => c.name));
}

// ─── Generate scaffold content for a source file ────────────────────────────

function buildScaffoldContent(sourceFile, components) {
  const active = components.filter((c) => ACTIVE_STATUSES.includes(c.status));
  if (active.length === 0) return null;

  const importPath = '/' + sourceFile;
  const names = active.map((c) => c.name).join(', ');
  const title = active.map((c) => c.name).join(', ') + ' Examples';

  const sections = active.map((comp) => {
    const exampleUsages = (comp.examples || [])
      .map((ex) => `\`\`\`jsx\n${ex}\n\`\`\``)
      .join('\n\n');

    // Build a basic usage block from params if no examples
    let basicUsage = '';
    if (!comp.examples || comp.examples.length === 0) {
      const requiredParams = (comp.params || [])
        .filter((p) => p.required)
        .map((p) => `  ${p.name}="${p.defaultValue || 'example'}"`)
        .join('\n');
      basicUsage = requiredParams
        ? `<${comp.name}\n${requiredParams}\n/>`
        : `<${comp.name} />`;
    } else {
      basicUsage = comp.examples[0];
    }

    return [
      `## ${comp.name}`,
      '',
      `${comp.description}`,
      '',
      '### Basic Usage',
      '',
      basicUsage,
      '',
      exampleUsages,
    ]
      .filter((l) => l !== undefined)
      .join('\n');
  });

  const lines = [
    '---',
    `title: "${title}"`,
    `description: "Examples for ${active.map((c) => c.name).join(', ')}"`,
    '---',
    '',
    `import { ${names} } from "${importPath}";`,
    '',
    ...sections,
    '',
  ];

  return lines.join('\n');
}

// ─── Main ────────────────────────────────────────────────────────────────────

const issues = [];
let scaffolded = 0;
let fixedImports = 0;

for (const sourceFile of Object.keys(byFile)) {
  const components = byFile[sourceFile];
  const examplesPath = expectedExamplesPath(sourceFile);
  if (!examplesPath) continue;

  const examplesExists = fs.existsSync(examplesPath);
  const activeComponents = components.filter((c) => ACTIVE_STATUSES.includes(c.status));
  const validNames = validExports(sourceFile);

  if (!examplesExists) {
    if (activeComponents.length === 0) continue; // nothing stable to show

    issues.push({
      type: 'missing-examples-file',
      file: path.relative(ROOT, examplesPath),
      sourceFile,
      message: `No examples file for ${path.basename(sourceFile)} (${activeComponents.length} stable components)`,
    });

    if (args.scaffold) {
      const content = buildScaffoldContent(sourceFile, components);
      if (content) {
        const dir = path.dirname(examplesPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(examplesPath, content, 'utf8');
        console.log(`  ✅ Scaffolded: ${path.relative(ROOT, examplesPath)}`);
        scaffolded++;
      }
    }
  } else {
    // Check for stale imports
    const content = fs.readFileSync(examplesPath, 'utf8');
    const imports = parseComponentImports(content);

    for (const imp of imports) {
      // Only check imports that point to a file in snippets/components
      if (!imp.from.includes('/snippets/components/')) continue;

      // Resolve which source file this import refers to
      // imp.from is an absolute import path like /snippets/components/elements/buttons/Buttons.jsx
      const importedSourceFile = imp.from.replace(/^\//, ''); // strip leading /
      const importedValidNames = validExports(importedSourceFile);

      const staleNames = imp.names.filter((n) => !importedValidNames.has(n));
      if (staleNames.length === 0) continue;

      issues.push({
        type: 'stale-import',
        file: path.relative(ROOT, examplesPath),
        sourceFile,
        stale: staleNames,
        message: `Stale import(s) in ${path.relative(ROOT, examplesPath)}: ${staleNames.join(', ')} (removed from ${path.basename(sourceFile)})`,
      });

      if (args.fixImports) {
        const freshNames = imp.names.filter((n) => validNames.has(n));
        let newContent;
        if (freshNames.length === 0) {
          // Remove the whole import line
          newContent = content.replace(imp.raw + '\n', '').replace(imp.raw, '');
        } else {
          const newImport = `import { ${freshNames.join(', ')} } from "${imp.from}"`;
          newContent = content.replace(imp.raw, newImport);
        }
        fs.writeFileSync(examplesPath, newContent, 'utf8');
        console.log(`  🔧 Fixed imports in: ${path.relative(ROOT, examplesPath)} (removed: ${staleNames.join(', ')})`);
        fixedImports++;
      }
    }
  }
}

// ─── Report ──────────────────────────────────────────────────────────────────

const missing = issues.filter((i) => i.type === 'missing-examples-file');
const stale = issues.filter((i) => i.type === 'stale-import');

console.log(`\n════ Component Examples Check ════`);
console.log(`Source files tracked: ${Object.keys(byFile).length}`);
console.log(`Missing examples files: ${missing.length}`);
console.log(`Files with stale imports: ${stale.length}`);

if (missing.length > 0) {
  console.log(`\nMissing example files:`);
  missing.forEach((i) => console.log(`  ⚠️  ${i.message}`));
}

if (stale.length > 0) {
  console.log(`\nStale imports:`);
  stale.forEach((i) => console.log(`  ❌ ${i.message}`));
}

if (scaffolded > 0) console.log(`\n  Scaffolded: ${scaffolded} new example file(s)`);
if (fixedImports > 0) console.log(`  Fixed: ${fixedImports} file(s) with stale imports`);

if (issues.length === 0) {
  console.log(`\n  ✅ All example files present and imports are current`);
}

if (args.check && stale.length > 0) {
  process.exit(1);
}
