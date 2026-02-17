#!/usr/bin/env node

/**
 * Enhanced script to test all v2 pages using browser MCP tools
 * Collects MDX errors, browser console errors, warnings, and checks for broken links
 */

const fs = require('fs');
const path = require('path');

const DOCS_JSON_PATH = path.join(__dirname, '..', 'docs.json');
const BASE_URL = 'http://localhost:3000';

/**
 * Recursively extract all page paths from navigation structure
 */
function extractPages(nav, pages = []) {
  if (Array.isArray(nav)) {
    nav.forEach(item => extractPages(item, pages));
  } else if (typeof nav === 'object' && nav !== null) {
    // Check for pages array
    if (Array.isArray(nav.pages)) {
      nav.pages.forEach(page => {
        if (typeof page === 'string' && page.trim() && page !== ' ') {
          pages.push(page);
        } else if (typeof page === 'object' && page.pages) {
          extractPages(page.pages, pages);
        }
      });
    }
    
    // Recursively check all properties
    Object.values(nav).forEach(value => {
      if (typeof value === 'object' && value !== null) {
        extractPages(value, pages);
      }
    });
  }
  return pages;
}

/**
 * Get all v2 pages from docs.json
 */
function getV2Pages() {
  const docsJson = JSON.parse(fs.readFileSync(DOCS_JSON_PATH, 'utf8'));
  
  // Find v2 version
  const v2Version = docsJson.navigation?.versions?.find(v => v.version === 'v2');
  if (!v2Version) {
    throw new Error('v2 version not found in docs.json');
  }
  
  // Extract all pages
  const allPages = extractPages(v2Version);
  
  // Remove duplicates and filter out invalid pages
  const uniquePages = [...new Set(allPages)]
    .filter(page => page && page.trim() && page !== ' ')
    .map(page => page.replace(/\.mdx?$/, '')); // Remove .mdx extension if present
  
  return uniquePages;
}

/**
 * Convert page path to URL
 */
function pageToUrl(pagePath) {
  // Remove v2/pages/ prefix and convert to URL
  let url = pagePath.replace(/^v2\/pages\//, '');
  
  // Handle index pages (ending with /)
  if (url.endsWith('/')) {
    url = url.slice(0, -1);
  }
  
  return `${BASE_URL}/${url}`;
}

/**
 * Main function - exports page list for use with browser tools
 */
function main() {
  console.log('🔍 Extracting v2 pages from docs.json...');
  const pages = getV2Pages();
  console.log(`📄 Found ${pages.length} pages to test\n`);
  
  // Create pages with URLs
  const pagesWithUrls = pages.map(pagePath => ({
    path: pagePath,
    url: pageToUrl(pagePath)
  }));
  
  // Save to JSON for use by browser testing
  const pagesFile = path.join(__dirname, '..', 'docs', 'PLAN', 'report', 'pages-to-test.json');
  const reportDir = path.dirname(pagesFile);
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  
  fs.writeFileSync(pagesFile, JSON.stringify(pagesWithUrls, null, 2));
  console.log(`📝 Pages list saved to: ${pagesFile}`);
  console.log(`\nTotal pages: ${pages.length}`);
  console.log(`\nExample pages:`);
  pagesWithUrls.slice(0, 5).forEach(p => {
    console.log(`  - ${p.path} -> ${p.url}`);
  });
  
  return pagesWithUrls;
}

if (require.main === module) {
  main();
}

module.exports = { getV2Pages, pageToUrl, extractPages };
