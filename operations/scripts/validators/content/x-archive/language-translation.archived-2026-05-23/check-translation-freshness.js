#!/usr/bin/env node
/**
 * @script      check-translation-freshness
 * @type        validator
 * @concern     integrations
 * @niche       language-translation
 * @purpose     content:translation-staleness
 * @description Compares modification dates of source pages to translations, flags stale translations
 * @mode        check
 * @pipeline    manual, cron -> v2/, v2/es/, v2/fr/, v2/cn/ -> exit-code, stdout:stale-translations
 * @scope       v2/
 * @usage       node operations/scripts/validators/content/language-translation/check-translation-freshness.js [--json]
 */
'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const V2_DIR = path.join(REPO_ROOT, 'v2');
const LANGUAGES = ['es', 'fr', 'cn'];

function parseArgs(argv) {
  const args = { json: false, help: false };
  argv.forEach((token) => {
    if (token === '--json') { args.json = true; return; }
    if (token === '--help' || token === '-h') { args.help = true; return; }
  });
  return args;
}

function walkMdx(dir, results = []) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('_') || entry.name === 'node_modules') continue;
      // Skip language directories at the top level
      if (LANGUAGES.includes(entry.name) && path.dirname(path.join(dir, entry.name)) === V2_DIR) continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) walkMdx(fullPath, results);
      else if (entry.name.endsWith('.mdx')) results.push(fullPath);
    }
  } catch (e) { /* skip */ }
  return results;
}

function getMtime(filePath) {
  try { return fs.statSync(filePath).mtime; } catch (e) { return null; }
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log('Usage: node operations/scripts/validators/content/language-translation/check-translation-freshness.js [--json]');
    return 0;
  }

  const sourcePages = walkMdx(V2_DIR);
  const stale = [];
  const missing = [];

  for (const sourcePath of sourcePages) {
    const rel = path.relative(V2_DIR, sourcePath);
    const sourceMtime = getMtime(sourcePath);
    if (!sourceMtime) continue;

    for (const lang of LANGUAGES) {
      const transPath = path.join(V2_DIR, lang, rel);
      const transMtime = getMtime(transPath);

      if (!transMtime) {
        // Translation does not exist; only flag if the language dir exists at all
        const langDir = path.join(V2_DIR, lang);
        if (fs.existsSync(langDir)) {
          missing.push({ source: rel, language: lang });
        }
        continue;
      }

      if (sourceMtime > transMtime) {
        const daysBehind = Math.floor((sourceMtime - transMtime) / (1000 * 60 * 60 * 24));
        stale.push({
          source: rel,
          language: lang,
          sourceMtime: sourceMtime.toISOString().split('T')[0],
          translationMtime: transMtime.toISOString().split('T')[0],
          daysBehind
        });
      }
    }
  }

  const hasIssues = stale.length > 0;

  if (args.json) {
    console.log(JSON.stringify({
      sourcePages: sourcePages.length,
      languages: LANGUAGES,
      staleTranslations: stale.length,
      missingTranslations: missing.length,
      staleDetails: stale.slice(0, 50),
      missingDetails: missing.slice(0, 20)
    }, null, 2));
    return hasIssues ? 1 : 0;
  }

  console.log('Translation Freshness Check');
  console.log('---------------------------');
  console.log(`Source pages: ${sourcePages.length}`);
  console.log(`Languages: ${LANGUAGES.join(', ')}`);

  if (stale.length > 0) {
    console.log(`\nStale translations (${stale.length}):`);
    stale.slice(0, 20).forEach(s =>
      console.log(`  ! ${s.language}/${s.source} (${s.daysBehind} days behind)`)
    );
    if (stale.length > 20) console.log(`  ... and ${stale.length - 20} more`);
  }

  if (!hasIssues) {
    console.log('\nAll translations are current.');
  }

  return hasIssues ? 1 : 0;
}

process.exit(main());
