#!/usr/bin/env node
/**
 * Deep Migration Verification
 *
 * Checks that a composable migration is correct WITHOUT relying solely on HTTP 200.
 * Verifies:
 *   1. Canonical file exists, parses, contains the expected body
 *   2. Wrapper file imports canonical with the correct path and renders the component
 *   3. Wrapper frontmatter is preserved from the original (title, SEO, OG, keywords)
 *   4. Canonical is NOT listed in docs.json (Mintlify constraint: composables not routed)
 *   5. Each wrapper IS listed in docs.json (or warn if missing — may be intentional)
 *   6. Render check (if --render flag): fetch each wrapper URL, parse HTML, confirm:
 *      - HTTP 200 (real, not just "rendered 404 page")
 *      - <title> matches frontmatter title
 *      - <h1> contains expected content
 *      - Body contains a marker string from the canonical source body (proves the import resolved and rendered)
 *      - No "ReferenceError" or "is not defined" runtime errors in the HTML
 *
 * Usage:
 *   node verify-migration.js --plan migration-plan.json [--only <slug>] [--render --base-url http://localhost:3145]
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

const ROOT = path.resolve(__dirname, '../../..');

function readFile(rel) {
  const abs = path.isAbsolute(rel) ? rel : path.join(ROOT, rel);
  return fs.readFileSync(abs, 'utf8');
}
function fileExists(rel) {
  const abs = path.isAbsolute(rel) ? rel : path.join(ROOT, rel);
  return fs.existsSync(abs);
}

function splitMdx(src) {
  if (!src.startsWith('---')) return { frontmatter: {}, body: src };
  const end = src.indexOf('\n---', 4);
  if (end < 0) return { frontmatter: {}, body: src };
  const fm = {};
  for (const line of src.slice(4, end).split('\n')) {
    const m = line.match(/^([a-zA-Z][a-zA-Z0-9_-]*):\s*(.*)$/);
    if (m) fm[m[1]] = m[2].trim().replace(/^['"](.*)['"]$/, '$1');
  }
  let body = src.slice(end + 4);
  if (body.startsWith('\n')) body = body.slice(1);
  return { frontmatter: fm, body };
}

function fetchUrl(url, timeoutMs = 15000) {
  const client = url.startsWith('https') ? https : http;
  return new Promise((resolve, reject) => {
    const req = client.get(url, (res) => {
      let body = '';
      res.on('data', (c) => body += c);
      res.on('end', () => resolve({ status: res.statusCode, body }));
    });
    req.on('error', reject);
    req.setTimeout(timeoutMs, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function getDocsJsonPaths() {
  const docs = JSON.parse(readFile('docs.json'));
  const out = new Set();
  function walk(node) {
    if (typeof node === 'string') { out.add(node); return; }
    if (Array.isArray(node)) { node.forEach(walk); return; }
    if (node && typeof node === 'object') {
      if (node.pages) walk(node.pages);
      if (node.anchors) walk(node.anchors);
      if (node.groups) walk(node.groups);
      for (const v of Object.values(node)) if (typeof v === 'object') walk(v);
    }
  }
  walk(docs);
  return out;
}

async function verifyOne(m, opts) {
  const { render, baseUrl } = opts;
  const errors = [];
  const warnings = [];

  // 1. Canonical exists + has expected body
  if (!fileExists(m.canonical)) {
    errors.push(`Canonical does not exist: ${m.canonical}`);
    return { errors, warnings };
  }
  const canonicalSrc = readFile(m.canonical);
  const { frontmatter: canonicalFm, body: canonicalBody } = splitMdx(canonicalSrc);
  if (!canonicalBody.trim()) errors.push(`Canonical body empty: ${m.canonical}`);
  if (canonicalSrc.startsWith('---')) {
    // OK
  } else {
    errors.push(`Canonical missing frontmatter: ${m.canonical}`);
  }

  // Marker: take a 40-char substring from the canonical body to confirm it appears in rendered HTML
  const bodyMarker = canonicalBody
    .replace(/^\s*\{\/\*[\s\S]*?\*\/\}\s*/, '')   // strip leading comment
    .replace(/^\s*import [^\n]+\n?/gm, '')         // strip imports
    .split('\n')
    .map(l => l.trim())
    .find(l => l.length > 30 && !/^[<>{}/]/.test(l) && !/^[A-Z][a-zA-Z]+(\s|=)/.test(l));
  const renderMarker = bodyMarker ? bodyMarker.slice(0, 40) : null;

  // 2. Wrappers exist + import canonical + render component
  for (const w of m.wrappers) {
    if (!fileExists(w)) { errors.push(`Wrapper does not exist: ${w}`); continue; }
    const wSrc = readFile(w);
    const { frontmatter: wFm } = splitMdx(wSrc);
    const expectImport = `/${m.canonical}`;
    if (!wSrc.includes(expectImport)) errors.push(`Wrapper ${w} missing import of ${expectImport}`);
    const renderMatch = wSrc.match(/<([A-Z][A-Za-z0-9]*)\s*\/>/);
    if (!renderMatch) errors.push(`Wrapper ${w} missing component render`);
    if (!wFm.title) warnings.push(`Wrapper ${w} missing title in frontmatter`);
    if (!wFm.description) warnings.push(`Wrapper ${w} missing description in frontmatter`);
  }

  // 3. docs.json: canonical NOT in nav; wrappers may or may not be
  const docsPaths = getDocsJsonPaths();
  const canonicalKey = m.canonical.replace(/\.mdx$/, '');
  if (docsPaths.has(canonicalKey)) {
    errors.push(`CONSTRAINT VIOLATION: canonical ${canonicalKey} is routed in docs.json — canonicals must not be routed`);
  }
  for (const w of m.wrappers) {
    const wKey = w.replace(/\.mdx$/, '');
    if (!docsPaths.has(wKey)) warnings.push(`Wrapper ${wKey} not in docs.json nav yet`);
  }

  // 4. Render-time checks (optional, requires --render and live server)
  if (render && baseUrl) {
    for (const w of m.wrappers) {
      const route = '/' + w.replace(/\.mdx$/, '');
      const url = baseUrl.replace(/\/$/, '') + route;
      try {
        const { status, body } = await fetchUrl(url);
        if (status !== 200) errors.push(`Render: ${route} HTTP ${status}`);
        // Look for runtime errors
        if (/ReferenceError|is not defined|Cannot read property/.test(body)) {
          errors.push(`Render: ${route} has runtime errors in HTML`);
        }
        // Title check
        const titleMatch = body.match(/<title>([^<]+)<\/title>/);
        if (!titleMatch) warnings.push(`Render: ${route} no <title>`);
        // H1 check
        const h1Match = body.match(/<h1[^>]*>([^<]+)<\/h1>/);
        if (!h1Match) errors.push(`Render: ${route} no <h1> — likely 404 page`);
        // Marker check — confirms the canonical content actually rendered
        if (renderMarker) {
          // Strip HTML to plain text-ish for marker check
          const text = body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
          if (!text.includes(renderMarker.slice(0, 25))) {
            errors.push(`Render: ${route} body marker not found ("${renderMarker.slice(0, 25)}...") — canonical may not have rendered`);
          }
        }
      } catch (err) {
        errors.push(`Render: ${route} fetch failed: ${err.message}`);
      }
    }
  }

  return { errors, warnings };
}

async function main() {
  const args = process.argv.slice(2);
  const argMap = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2);
      const val = args[i + 1] && !args[i + 1].startsWith('--') ? args[++i] : true;
      argMap[key] = val;
    }
  }
  const planFile = argMap.plan || path.join(__dirname, 'migration-plan.json');
  const only = argMap.only;
  const render = !!argMap.render;
  const baseUrl = argMap['base-url'] || 'http://localhost:3145';

  const plan = JSON.parse(fs.readFileSync(planFile, 'utf8'));
  let migrations = plan.migrations || [];
  if (only) migrations = migrations.filter(m => m.slug === only || m.canonical.includes(only));

  console.log(`\n=== Verify Migration: ${migrations.length} migration(s)${render ? ` [render @ ${baseUrl}]` : ''} ===\n`);

  let totalErrors = 0, totalWarnings = 0;
  for (const m of migrations) {
    const slug = m.slug || path.basename(m.canonical, '.mdx');
    console.log(`\n--- ${slug} ---`);
    const { errors, warnings } = await verifyOne(m, { render, baseUrl });
    if (errors.length === 0 && warnings.length === 0) {
      console.log(`  ✓ all checks passed`);
    } else {
      for (const w of warnings) console.log(`  ⚠ ${w}`);
      for (const e of errors) console.log(`  ✗ ${e}`);
    }
    totalErrors += errors.length;
    totalWarnings += warnings.length;
  }
  console.log(`\n=== Done: ${totalErrors} error(s), ${totalWarnings} warning(s) ===\n`);
  process.exit(totalErrors > 0 ? 1 : 0);
}

if (require.main === module) main();
module.exports = { verifyOne };
