#!/usr/bin/env node
/**
 * Composable Extract-and-Wrap Utility
 *
 * Given a source MDX file, splits it into:
 *   1. A canonical composable at snippets/composables/pages/canonical/<canonical-rel>.mdx
 *      Contains minimal frontmatter + the FULL original body
 *   2. N wrapper MDX files at the configured wrapper paths
 *      Each wrapper preserves the SOURCE frontmatter (including SEO/OG) and
 *      has a 2-line body: import canonical + render component
 *
 * Existing wrapper paths (audience-tab originals) are CONVERTED IN PLACE: their
 * content is replaced with the wrapper boilerplate, frontmatter is preserved.
 *
 * Usage:
 *   const { migrate } = require('./extract-and-wrap.js');
 *   migrate({
 *     source: 'v2/gateways/resources/reference/go-livepeer/cli-reference.mdx',
 *     canonical: 'snippets/composables/pages/canonical/go-livepeer/cli-reference.mdx',
 *     wrappers: [
 *       'v2/gateways/resources/reference/go-livepeer/cli-reference.mdx',  // audience original (converted in place)
 *       'v2/resources/references/go-livepeer/cli-reference.mdx',          // new HUB wrapper
 *     ],
 *     componentName: 'CliReferenceCanonical',
 *     dryRun: false,
 *   });
 *
 * Or via CLI:
 *   node extract-and-wrap.js --plan migration-plan.json [--only <slug>] [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../..');

function readFileSafe(rel) {
  const abs = path.isAbsolute(rel) ? rel : path.join(ROOT, rel);
  return fs.readFileSync(abs, 'utf8');
}

function writeFileSafe(rel, content) {
  const abs = path.isAbsolute(rel) ? rel : path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content);
}

function existsRel(rel) {
  const abs = path.isAbsolute(rel) ? rel : path.join(ROOT, rel);
  return fs.existsSync(abs);
}

/**
 * Split MDX into { frontmatterRaw, frontmatter, body }.
 * frontmatterRaw is the literal YAML block between --- markers (with markers).
 * frontmatter is a parsed object of top-level scalar keys (no nested).
 * body is everything after the closing --- marker.
 */
function splitMdx(src) {
  if (!src.startsWith('---')) return { frontmatterRaw: '', frontmatter: {}, body: src };
  const end = src.indexOf('\n---', 4);
  if (end < 0) return { frontmatterRaw: '', frontmatter: {}, body: src };
  const blockEnd = end + 4; // include the closing ---
  const frontmatterRaw = src.slice(0, blockEnd);
  const block = src.slice(4, end);
  const fm = {};
  for (const line of block.split('\n')) {
    const m = line.match(/^([a-zA-Z][a-zA-Z0-9_-]*):\s*(.*)$/);
    if (!m) continue;
    fm[m[1]] = m[2].trim().replace(/^['"](.*)['"]$/, '$1');
  }
  // body starts after the closing ---\n
  let body = src.slice(blockEnd);
  if (body.startsWith('\n')) body = body.slice(1);
  return { frontmatterRaw, frontmatter: fm, body };
}

/**
 * Slug-ify a string to PascalCase for a component name.
 * e.g. "cli-reference" -> "CliReferenceCanonical"
 */
function toComponentName(slug, suffix = 'Canonical') {
  return slug
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .split('-')
    .filter(Boolean)
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join('') + suffix;
}

/**
 * Build a canonical composable file's content from the source body.
 * The canonical retains a minimal frontmatter (title, description, status, lastVerified)
 * and contains the full original body. It self-renders when imported.
 */
function buildCanonical(sourceFm, sourceBody, canonicalRelPath) {
  // Minimal frontmatter: keep semantic identity but no nav-affecting fields.
  // Mintlify constraint: canonical must NOT be routed. We don't add it to docs.json,
  // but we also keep its frontmatter slim so it can't accidentally be discovered as a page.
  const minimalFm = {
    title: sourceFm.title || sourceFm.sidebarTitle || path.basename(canonicalRelPath, '.mdx'),
    sidebarTitle: sourceFm.sidebarTitle || sourceFm.title || path.basename(canonicalRelPath, '.mdx'),
    description: sourceFm.description || '',
    pageType: sourceFm.pageType || 'reference',
    purpose: sourceFm.purpose || 'reference',
    audience: 'general',
    status: sourceFm.status || 'current',
    lastVerified: sourceFm.lastVerified || new Date().toISOString().slice(0, 10),
  };
  const fmLines = ['---'];
  for (const [k, v] of Object.entries(minimalFm)) {
    if (!v) continue;
    // Quote values to be safe with apostrophes/em-dashes/colons
    const needsQuote = /['"`:#@&*!|>%]|^\d/.test(String(v)) || String(v).includes('—');
    fmLines.push(`${k}: ${needsQuote ? `"${String(v).replace(/"/g, '\\"')}"` : v}`);
  }
  fmLines.push('---');
  fmLines.push('');
  // No leading comment marker — would break MDX import hoisting when sourceBody starts with `import` statements.
  // Canonical identity is enforced by: (1) not adding to docs.json, (2) the canonical-consumers registry.
  return fmLines.join('\n') + sourceBody;
}

/**
 * Build a wrapper file's content.
 * Wrapper preserves the SOURCE frontmatter verbatim (SEO, OG, keywords, etc.)
 * and has a 2-line body: import canonical + render component.
 */
function buildWrapper(sourceFmRaw, canonicalImportPath, componentName) {
  const importLine = `import ${componentName} from "${canonicalImportPath}"`;
  const renderLine = `<${componentName} />`;
  return [
    sourceFmRaw,
    '',
    importLine,
    '',
    renderLine,
    '',
  ].join('\n');
}

function migrate(opts) {
  const { source, canonical, wrappers, componentName, dryRun = false } = opts;
  const log = (msg) => console.log(`  ${msg}`);

  if (!existsRel(source)) {
    throw new Error(`Source not found: ${source}`);
  }
  const sourceContent = readFileSafe(source);
  const { frontmatterRaw, frontmatter, body } = splitMdx(sourceContent);

  if (!body.trim()) {
    throw new Error(`Source has empty body: ${source}`);
  }
  if (!frontmatterRaw) {
    throw new Error(`Source has no frontmatter: ${source}`);
  }

  const compName = componentName || toComponentName(path.basename(canonical, '.mdx'));
  const canonicalImport = '/' + canonical.replace(/\\/g, '/');

  // Build outputs
  const canonicalContent = buildCanonical(frontmatter, body, canonical);
  const wrapperContent = buildWrapper(frontmatterRaw, canonicalImport, compName);

  log(`source:   ${source}`);
  log(`canonical: ${canonical}  (${canonicalContent.length} bytes)`);
  log(`component: <${compName} />`);

  if (dryRun) {
    log(`[DRY-RUN] would write canonical to ${canonical}`);
    for (const w of wrappers) {
      log(`[DRY-RUN] would write wrapper to ${w} (${wrapperContent.length} bytes)`);
    }
    return { canonicalContent, wrapperContent, compName };
  }

  // Write canonical first
  writeFileSafe(canonical, canonicalContent);
  log(`✓ wrote canonical: ${canonical}`);

  // Write each wrapper (this OVERWRITES the source if it's listed in wrappers)
  for (const w of wrappers) {
    writeFileSafe(w, wrapperContent);
    log(`✓ wrote wrapper:   ${w}`);
  }

  // Verify outputs
  const canonicalCheck = readFileSafe(canonical);
  if (!canonicalCheck.includes(body.trim().slice(0, 100))) {
    throw new Error(`Verification failed: canonical does not contain expected body start`);
  }
  for (const w of wrappers) {
    const wContent = readFileSafe(w);
    if (!wContent.includes(`import ${compName}`)) {
      throw new Error(`Verification failed: wrapper ${w} missing import`);
    }
    if (!wContent.includes(`<${compName} />`)) {
      throw new Error(`Verification failed: wrapper ${w} missing render`);
    }
  }
  log(`✓ all outputs verified`);

  return { canonicalContent, wrapperContent, compName };
}

// CLI entry point
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
  const only = argMap['only'];
  const planFile = argMap['plan'] || path.join(__dirname, 'migration-plan.json');

  if (!fs.existsSync(planFile)) {
    console.error(`Plan file not found: ${planFile}`);
    process.exit(1);
  }
  const plan = JSON.parse(fs.readFileSync(planFile, 'utf8'));

  let migrations = plan.migrations || [];
  if (only) migrations = migrations.filter(m => m.slug === only || m.canonical.includes(only));

  console.log(`\n=== Extract-and-Wrap: ${migrations.length} migration(s)${dryRun ? ' [DRY-RUN]' : ''} ===\n`);

  let ok = 0, fail = 0;
  for (const m of migrations) {
    console.log(`\n--- ${m.slug || path.basename(m.canonical, '.mdx')} ---`);
    try {
      migrate({ ...m, dryRun });
      ok++;
    } catch (err) {
      console.error(`  ✗ FAILED: ${err.message}`);
      fail++;
    }
  }
  console.log(`\n=== Done: ${ok} ok, ${fail} failed ===\n`);
  process.exit(fail > 0 ? 1 : 0);
}

module.exports = { migrate, splitMdx, buildCanonical, buildWrapper, toComponentName };
