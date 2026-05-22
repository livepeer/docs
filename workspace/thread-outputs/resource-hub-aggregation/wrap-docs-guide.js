#!/usr/bin/env node
/**
 * Phase 4 — docs-guide wrapper builder.
 *
 * docs-guide/{path}.mdx is the canonical (stays as-is, full content).
 * Creates a thin wrapper at v2/resources/documentation-guide/{path}.mdx that:
 *   - copies the SOURCE frontmatter (preserves SEO/OG)
 *   - imports the docs-guide page and renders it as a component
 *
 * Run with --plan <path> to use a different plan file (defaults to docs-guide-wrap-plan.json).
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../..');

function read(rel) { return fs.readFileSync(path.join(ROOT, rel), 'utf8'); }
function write(rel, content) {
  const abs = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content);
}
function exists(rel) { return fs.existsSync(path.join(ROOT, rel)); }

function splitFrontmatter(src) {
  if (!src.startsWith('---')) return { fmRaw: '', body: src };
  const end = src.indexOf('\n---', 4);
  if (end < 0) return { fmRaw: '', body: src };
  return { fmRaw: src.slice(0, end + 4), body: src.slice(end + 4).replace(/^\n/, '') };
}

function toComponentName(slug, suffix = 'Source') {
  return slug.replace(/[^a-zA-Z0-9]+/g, '-').split('-').filter(Boolean)
    .map(s => s[0].toUpperCase() + s.slice(1)).join('') + suffix;
}

function wrap(sourcePath, wrapperPath, dryRun = false) {
  if (!exists(sourcePath)) throw new Error(`Source not found: ${sourcePath}`);
  const src = read(sourcePath);
  const { fmRaw } = splitFrontmatter(src);
  if (!fmRaw) throw new Error(`Source has no frontmatter: ${sourcePath}`);

  const slug = path.basename(wrapperPath, '.mdx');
  const compName = toComponentName(slug);
  const importPath = '/' + sourcePath.replace(/\\/g, '/');

  const content = [
    fmRaw,
    '',
    `import ${compName} from "${importPath}"`,
    '',
    `<${compName} />`,
    ''
  ].join('\n');

  if (dryRun) {
    console.log(`  [dry-run] ${wrapperPath} (${content.length}B)`);
    return;
  }
  write(wrapperPath, content);
  // Verify
  const check = read(wrapperPath);
  if (!check.includes(`import ${compName}`)) throw new Error(`Wrapper verify failed: ${wrapperPath}`);
  console.log(`  ✓ ${wrapperPath}`);
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const argMap = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2);
      const val = args[i + 1] && !args[i + 1].startsWith('--') ? args[++i] : true;
      argMap[key] = val;
    }
  }
  const dryRun = !!argMap['dry-run'];
  const planFile = argMap['plan'] || path.join(__dirname, 'docs-guide-wrap-plan.json');
  const plan = JSON.parse(fs.readFileSync(planFile, 'utf8'));
  console.log(`=== docs-guide wrap: ${plan.entries.length} wrapper(s)${dryRun ? ' [dry-run]' : ''} ===`);
  let ok = 0, fail = 0;
  for (const e of plan.entries) {
    try { wrap(e.source, e.wrapper, dryRun); ok++; }
    catch (err) { console.error(`  ✗ ${e.wrapper}: ${err.message}`); fail++; }
  }
  console.log(`\n${ok} ok, ${fail} failed`);
  process.exit(fail > 0 ? 1 : 0);
}

module.exports = { wrap };
