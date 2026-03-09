#!/usr/bin/env node
/**
 * @script            links-imports.test
 * @category          validator
 * @purpose           qa:link-integrity
 * @scope             tests
 * @owner             docs
 * @needs             E-R12, E-R14
 * @purpose-statement Validates MDX internal links and snippet import paths are resolvable
 * @pipeline          P1, P3
 * @usage             node tests/unit/links-imports.test.js [flags]
 */
/**
 * Broken links and imports validation
 * Checks that all internal links and imports resolve to existing files
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { getMdxFiles, getStagedDocsPageFiles, readFile } = require('../utils/file-walker');
const { extractImports } = require('../utils/mdx-parser');

let errors = [];
let warnings = [];
const GENERATED_EXTERNAL_DOCS = [
  'awesome-livepeer-readme.mdx',
  'box-additional-config.mdx',
  'gwid-readme.mdx',
  'whitepaper.mdx',
  'wiki-readme.mdx'
];
const V2_DOMAIN_DIRS = new Set([
  'home',
  'about',
  'solutions',
  'community',
  'developers',
  'gateways',
  'orchestrators',
  'lpt',
  'resources',
  'internal',
  'deprecated',
  'experimental',
  'notes'
]);

function ensureExternalDocs() {
  const repoRoot = process.cwd();
  const externalDir = path.join(repoRoot, 'snippets', 'external');
  const missingFiles = GENERATED_EXTERNAL_DOCS.filter(
    (fileName) => !fs.existsSync(path.join(externalDir, fileName))
  );

  if (missingFiles.length === 0) {
    return;
  }

  const fetchScript = path.join(repoRoot, 'tools', 'scripts', 'snippets', 'fetch-external-docs.sh');
  if (!fs.existsSync(fetchScript)) {
    warnings.push({
      file: 'tools/scripts/snippets/fetch-external-docs.sh',
      message: `Missing external-doc bootstrap script; generated imports may fail: ${missingFiles.join(', ')}`
    });
    return;
  }

  const result = spawnSync('bash', [fetchScript], {
    cwd: repoRoot,
    encoding: 'utf8',
    env: {
      ...process.env,
      LC_ALL: process.env.LC_ALL || 'C',
      LANG: process.env.LANG || 'C'
    }
  });

  if (result.status !== 0) {
    const detail = String(result.stderr || result.stdout || '')
      .trim()
      .split('\n')
      .slice(-3)
      .join(' ');
    errors.push({
      file: 'tools/scripts/snippets/fetch-external-docs.sh',
      rule: 'External docs fetch',
      message: `Failed to fetch generated external docs required for import validation.${detail ? ` ${detail}` : ''}`
    });
  }
}

function isStyleGuideExampleFile(file) {
  return file.includes('style-guide.mdx');
}

/**
 * Resolve a file path relative to the repository root
 */
function resolveFilePath(filePath, rootDir = process.cwd()) {
  if (path.isAbsolute(filePath)) {
    return path.join(rootDir, filePath);
  }
  return path.resolve(rootDir, filePath);
}

/**
 * Check if a file exists (tries multiple extensions/variations)
 */
function fileExists(filePath) {
  // Try exact path
  if (fs.existsSync(filePath)) {
    return { exists: true, path: filePath };
  }
  
  // Try with .mdx extension
  const withMdx = filePath.endsWith('.mdx') ? filePath : `${filePath}.mdx`;
  if (fs.existsSync(withMdx)) {
    return { exists: true, path: withMdx };
  }
  
  // Try as directory with index.mdx
  const dirIndex = path.join(filePath, 'index.mdx');
  if (fs.existsSync(dirIndex)) {
    return { exists: true, path: dirIndex };
  }
  
  // Try as directory with README.mdx
  const dirReadme = path.join(filePath, 'README.mdx');
  if (fs.existsSync(dirReadme)) {
    return { exists: true, path: dirReadme };
  }
  
  return { exists: false, path: null };
}

/**
 * Convert link path to file path
 */
function linkToFilePath(linkPath, currentFile) {
  const rootDir = process.cwd();
  const normalizedLinkPath = linkPath
    .split('#')[0]
    .split('?')[0]
    .trim()
    .replace(/^['"]+|['"]+$/g, '');
  
  // Skip external links
  if (normalizedLinkPath.startsWith('http://') ||
      normalizedLinkPath.startsWith('https://') ||
      normalizedLinkPath.startsWith('mailto:') ||
      normalizedLinkPath.startsWith('#') ||
      normalizedLinkPath.length === 0) {
    return null;
  }
  
  // Get repo root directory (where .git is) - same fix as getStagedFiles
  const { execSync } = require('child_process');
  let repoRoot;
  try {
    repoRoot = execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (e) {
    repoRoot = rootDir; // Fallback to rootDir if not in git repo
  }
  
  // Absolute path from root (starts with /)
  if (normalizedLinkPath.startsWith('/')) {
    // Remove leading slash and normalize trailing slash
    const repoRelativePath = normalizedLinkPath.replace(/^\//, '').replace(/\/$/, '');
    if (!repoRelativePath) {
      return null;
    }

    // Prefer repository-root absolute links when they already exist.
    const directRepoPath = path.join(repoRoot, repoRelativePath);
    if (fileExists(directRepoPath).exists) {
      return directRepoPath;
    }

    // If it already starts with v2/, treat it as a repo-relative docs path.
    if (repoRelativePath.startsWith('v2/')) {
      return path.join(repoRoot, repoRelativePath);
    }

    // Support migrated v2 domain folders, e.g. /home/... or /about/...
    const firstSegment = repoRelativePath.split('/')[0];
    if (V2_DOMAIN_DIRS.has(firstSegment)) {
      return path.join(repoRoot, 'v2', repoRelativePath);
    }

    // Fallback: treat bare absolute docs links as v2/pages-relative.
    return path.join(repoRoot, `v2/pages/${repoRelativePath}`);
  }
  
  // Relative path
  const currentDir = path.dirname(currentFile);
  const resolved = path.resolve(currentDir, normalizedLinkPath);

  // If this resolves into v2/pages/<domain>/..., remap to v2/<domain>/...
  // for migrated section folders.
  const relativePath = path.relative(rootDir, resolved);
  const normalizedRelative = relativePath.split(path.sep).join('/');
  const pagesPrefix = 'v2/pages/';
  if (normalizedRelative.startsWith(pagesPrefix)) {
    const parts = normalizedRelative.split('/');
    const maybeDomain = parts[2];
    if (V2_DOMAIN_DIRS.has(maybeDomain)) {
      const migratedPath = path.join(rootDir, 'v2', ...parts.slice(2));
      if (fileExists(migratedPath).exists) {
        return migratedPath;
      }
    }
  }

  return path.join(rootDir, relativePath);
}

function getIgnoredRanges(content) {
  const ignoredRanges = [];
  const ignoreRegexes = [
    /```[\s\S]*?```/g,
    /~~~[\s\S]*?~~~/g,
    /\{\/\*[\s\S]*?\*\/\}/g,
    /<!--[\s\S]*?-->/g
  ];

  ignoreRegexes.forEach((regex) => {
    let match;

    while ((match = regex.exec(content)) !== null) {
      ignoredRanges.push({
        start: match.index,
        end: match.index + match[0].length
      });
    }
  });

  return ignoredRanges;
}

function isIgnoredIndex(index, ignoredRanges) {
  return ignoredRanges.some((range) => index >= range.start && index < range.end);
}

function getMatchesOutsideIgnoredRanges(content, regex, ignoredRanges) {
  const matches = [];
  let match;

  regex.lastIndex = 0;
  while ((match = regex.exec(content)) !== null) {
    if (!isIgnoredIndex(match.index, ignoredRanges)) {
      matches.push(match);
    }
  }

  return matches;
}

/**
 * Check for broken internal links
 */
function checkBrokenLinks(files) {
  files.forEach(file => {
    const content = readFile(file);
    if (!content) return;
    const ignoredRanges = getIgnoredRanges(content);
    
    // Check markdown links [text](url)
    const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const markdownMatches = getMatchesOutsideIgnoredRanges(content, markdownLinkRegex, ignoredRanges);
    
    markdownMatches.forEach((match) => {
      const linkPath = match[2];
      const filePath = linkToFilePath(linkPath, file);
      
      if (!filePath) return; // External link, skip
      
      const exists = fileExists(filePath);
      if (!exists.exists) {
        errors.push({
          file,
          rule: 'Broken link',
          message: `Link to "${linkPath}" points to non-existent file`,
          link: linkPath,
          expected: filePath.replace(process.cwd() + '/', '')
        });
      }
    });
    
    // Check HTML anchor tags <a href="...">
    const anchorRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    const anchorMatches = getMatchesOutsideIgnoredRanges(content, anchorRegex, ignoredRanges);
    anchorMatches.forEach((match) => {
      const linkPath = match[1];
      const filePath = linkToFilePath(linkPath, file);
      
      if (!filePath) return; // External link, skip
      
      const exists = fileExists(filePath);
      if (!exists.exists) {
        errors.push({
          file,
          rule: 'Broken link',
          message: `Anchor link to "${linkPath}" points to non-existent file`,
          link: linkPath,
          expected: filePath.replace(process.cwd() + '/', '')
        });
      }
    });
  });
}

/**
 * Check for empty markdown and JSX links
 */
function checkEmptyLinks(files) {
  files.forEach(file => {
    const content = readFile(file);
    if (!content) return;

    const ignoredRanges = getIgnoredRanges(content);
    const emptyMarkdownLinkRegex = /\[\]\s*\(([^)]+)\)/g;
    const emptyJsxLinkRegex = /<(?:Link|a)\s+[^>]*href\s*=\s*["'][^"']+["'][^>]*>\s*<\/(?:Link|a)>/g;
    const emptySelfClosingJsxLinkRegex = /<(?:Link|a)\s+[^>]*href\s*=\s*["'][^"']+["'][^>]*\/>/g;

    getMatchesOutsideIgnoredRanges(content, emptyMarkdownLinkRegex, ignoredRanges)
      .forEach(() => {
        errors.push({
          file,
          rule: 'Empty link',
          message: 'Empty link text: [](url) — link has no visible text'
        });
      });

    getMatchesOutsideIgnoredRanges(content, emptyJsxLinkRegex, ignoredRanges)
      .forEach(() => {
        errors.push({
          file,
          rule: 'Empty link',
          message: 'Empty JSX link — element has no visible text'
        });
      });

    getMatchesOutsideIgnoredRanges(content, emptySelfClosingJsxLinkRegex, ignoredRanges)
      .forEach(() => {
        errors.push({
          file,
          rule: 'Empty link',
          message: 'Empty JSX link — element has no visible text'
        });
      });
  });
}

/**
 * Check for broken imports
 */
function checkBrokenImports(files) {
  files.forEach(file => {
    const content = readFile(file);
    if (!content) return;
    
    const imports = extractImports(content);
    
    imports.forEach(imp => {
      const importPath = imp.path;
      
      // Skip external packages (node_modules, npm packages)
      if (!importPath.startsWith('/') && !importPath.startsWith('./') && !importPath.startsWith('../')) {
        return; // Assume it's an npm package or global
      }
      
      // Resolve import path
      // Get repo root directory (where .git is) - same fix as getStagedFiles
      const { execSync } = require('child_process');
      let rootDir;
      try {
        rootDir = execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
      } catch (e) {
        rootDir = process.cwd(); // Fallback to cwd if not in git repo
      }
      
      let filePath;
      if (importPath.startsWith('/')) {
        // Absolute path from root
        filePath = path.join(rootDir, importPath);
      } else {
        // Relative path
        const currentDir = path.dirname(file);
        filePath = path.resolve(currentDir, importPath);
        // Normalize to relative from root
        const relativePath = path.relative(rootDir, filePath);
        filePath = path.join(rootDir, relativePath);
      }
      
      // Try with .jsx extension if not present
      if (!filePath.endsWith('.jsx') && !filePath.endsWith('.js') && !filePath.endsWith('.mdx')) {
        const withJsx = `${filePath}.jsx`;
        const withJs = `${filePath}.js`;
        const withMdx = `${filePath}.mdx`;
        
        if (fs.existsSync(withJsx)) {
          filePath = withJsx;
        } else if (fs.existsSync(withJs)) {
          filePath = withJs;
        } else if (fs.existsSync(withMdx)) {
          filePath = withMdx;
        }
      }
      
      // Check if file exists
      if (!fs.existsSync(filePath)) {
        errors.push({
          file,
          rule: 'Broken import',
          message: `Import from "${importPath}" points to non-existent file`,
          import: importPath,
          expected: filePath.replace(process.cwd() + '/', '')
        });
      }
    });
  });
}

/**
 * Run all link and import tests
 */
function runTests(options = {}) {
  errors = [];
  warnings = [];
  ensureExternalDocs();
  
  const { files = null, stagedOnly = false } = options;
  
  let testFiles = files;
  if (!testFiles) {
    if (stagedOnly) {
      testFiles = getStagedDocsPageFiles().filter(f => f.endsWith('.mdx'));
    } else {
      testFiles = getMdxFiles();
    }
  }

  // Style guide pages intentionally contain invalid example links/imports.
  testFiles = testFiles.filter((file) => !isStyleGuideExampleFile(file));
  
  checkBrokenLinks(testFiles);
  checkEmptyLinks(testFiles);
  checkBrokenImports(testFiles);
  
  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: testFiles.length
  };
}

// Run if called directly
if (require.main === module) {
  const args = process.argv.slice(2);
  const stagedOnly = args.includes('--staged');
  
  const result = runTests({ stagedOnly });
  
  if (result.errors.length > 0) {
    console.error('\n❌ Broken Links/Imports Errors:\n');
    result.errors.forEach(err => {
      console.error(`  ${err.file}`);
      console.error(`    ${err.rule}: ${err.message}`);
      if (err.expected) {
        console.error(`    Expected: ${err.expected}`);
      }
      console.error('');
    });
  }
  
  if (result.warnings.length > 0) {
    console.warn('\n⚠️  Link/Import Warnings:\n');
    result.warnings.forEach(warn => {
      console.warn(`  ${warn.file} - ${warn.message}`);
    });
  }
  
  if (result.passed) {
    console.log(`\n✅ All links and imports valid (${result.total} files checked)`);
    process.exit(0);
  } else {
    console.error(`\n❌ ${result.errors.length} broken link(s) or import(s) found`);
    process.exit(1);
  }
}

module.exports = { runTests };
