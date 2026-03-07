#!/usr/bin/env node
/**
 * @script            audit-minimal
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tasks/scripts
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Minimal audit runner — lightweight audit for quick checks during task execution
 * @pipeline          manual — not yet in pipeline
 * @usage             node tasks/scripts/audit-minimal.js [flags]
 */

const fs = require('fs');
const path = require('path');

const DOCS_JSON_PATH = path.join(__dirname, '..', '..', '..', 'docs.json');
const REPORT_DIR = path.join(__dirname, '..', 'reports');

// Ensure report directory exists
if (!fs.existsSync(REPORT_DIR)) {
  fs.mkdirSync(REPORT_DIR, { recursive: true });
}

// Write start marker immediately
const startFile = path.join(REPORT_DIR, 'audit-minimal-start.txt');
fs.writeFileSync(startFile, `Started: ${new Date().toISOString()}\n`);

try {
  // Load docs.json
  fs.appendFileSync(startFile, 'Loading docs.json...\n');
  const docsJson = JSON.parse(fs.readFileSync(DOCS_JSON_PATH, 'utf8'));
  fs.appendFileSync(startFile, 'docs.json loaded\n');
  
  // Find v2 version
  const v2Version = docsJson.navigation?.versions?.find(v => v.version === 'v2');
  if (!v2Version) {
    throw new Error('v2 version not found');
  }
  fs.appendFileSync(startFile, 'v2 version found\n');
  
  // Extract pages (simplified)
  function extractPages(nav, pages = []) {
    if (Array.isArray(nav)) {
      nav.forEach(item => extractPages(item, pages));
    } else if (typeof nav === 'object' && nav !== null) {
      if (Array.isArray(nav.pages)) {
        nav.pages.forEach(page => {
          if (typeof page === 'string' && page.trim() && page !== ' ') {
            pages.push(page);
          } else if (typeof page === 'object' && page.pages) {
            extractPages(page.pages, pages);
          }
        });
      }
      Object.values(nav).forEach(value => {
        if (typeof value === 'object' && value !== null) {
          extractPages(value, pages);
        }
      });
    }
    return pages;
  }
  
  const allPages = extractPages(v2Version);
  const uniquePages = [...new Set(allPages)]
    .filter(page => page && page.trim() && page !== ' ')
    .map(page => page.replace(/\.mdx?$/, ''));
  
  fs.appendFileSync(startFile, `Found ${uniquePages.length} pages\n`);
  
  // Check first 10 pages
  let checked = 0;
  let missing = 0;
  let exists = 0;
  
  for (const pagePath of uniquePages.slice(0, 10)) {
    const filePath = path.join(__dirname, '..', '..', '..', `${pagePath}.mdx`);
    if (fs.existsSync(filePath)) {
      exists++;
    } else {
      missing++;
    }
    checked++;
  }
  
  fs.appendFileSync(startFile, `Checked ${checked} pages: ${exists} exist, ${missing} missing\n`);
  
  // Write summary
  const summary = {
    timestamp: new Date().toISOString(),
    totalPages: uniquePages.length,
    checked: checked,
    exists: exists,
    missing: missing
  };
  
  const summaryFile = path.join(REPORT_DIR, 'audit-minimal-summary.json');
  fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2));
  fs.appendFileSync(startFile, `Summary written to ${summaryFile}\n`);
  fs.appendFileSync(startFile, `Completed: ${new Date().toISOString()}\n`);
  
  console.log('Minimal audit completed');
  console.log(`Total pages: ${uniquePages.length}`);
  console.log(`Checked: ${checked}, Exists: ${exists}, Missing: ${missing}`);
  
} catch (error) {
  fs.appendFileSync(startFile, `ERROR: ${error.message}\n${error.stack}\n`);
  console.error('ERROR:', error);
  process.exit(1);
}
