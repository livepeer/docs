#!/usr/bin/env node
// Validates the docs structure: every nav entry has a page, and every internal
// link/anchor target exists. Exits non-zero on any failure (CI-friendly).
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const docs = JSON.parse(fs.readFileSync(path.join(root, 'docs.json'), 'utf8'));

let failures = 0;
const fail = (msg) => { console.error(`✗ ${msg}`); failures++; };

// 1) Every page referenced in navigation exists (groups and/or tabs>groups)
const groups = docs.navigation.groups
  ?? docs.navigation.tabs?.flatMap((t) => t.groups)
  ?? [];
let navCount = 0;
for (const g of groups) {
  for (const p of g.pages) {
    navCount++;
    if (!fs.existsSync(path.join(root, `${p}.mdx`))) fail(`nav page missing: ${p}`);
  }
}

// 2) Every internal link in every MDX file resolves to a page
const mdxFiles = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name.startsWith('.')) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith('.mdx')) mdxFiles.push(full);
  }
})(root);

const pages = new Set(mdxFiles.map((f) => path.relative(root, f).replace(/\.mdx$/, '')));
let linkCount = 0;
for (const f of mdxFiles) {
  const text = fs.readFileSync(f, 'utf8');
  const rel = path.relative(root, f);
  for (const m of text.matchAll(/(?:href="|\]\()(\/[a-z][^"#)\s]*)/g)) {
    const href = m[1].replace(/\/$/, '');
    if (!href.startsWith('/network')) continue; // external or non-docs path
    linkCount++;
    const key = href.replace(/^\//, '');
    const target = key === 'network' ? 'network/index' : key;
    if (!pages.has(target)) fail(`broken link in ${rel}: ${m[1]}`);
  }
}

// 3) Redirect sources shouldn't shadow real pages
for (const r of docs.redirects ?? []) {
  const key = r.source.replace(/^\//, '');
  if (key && pages.has(key)) fail(`redirect source shadows a page: ${r.source}`);
}

if (failures) {
  console.error(`\n${failures} failure(s)`);
  process.exit(1);
}
console.log(`✓ ${navCount} nav pages present, ${linkCount} internal links resolve, ${pages.size} pages total`);
