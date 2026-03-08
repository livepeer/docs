#!/usr/bin/env node
/**
 * @script            quality.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Content quality checks — validates frontmatter completeness, thin content detection, placeholder flagging
 * @pipeline          P1 (commit, via run-all)
 * @usage             node tests/unit/quality.test.js [flags]
 */
/**
 * Quality checks: alt text, links, frontmatter, SEO, duplicate headings
 */

const path = require('path');
const { createRequire } = require('module');
const { getMdxFiles, getStagedDocsPageFiles, readFile } = require('../utils/file-walker');
const { extractFrontmatter } = require('../utils/mdx-parser');

const ENFORCE_OG_IMAGE = process.env.ENFORCE_OG_IMAGE === '1';
const VALID_PAGE_TYPES = ['quickstart', 'tutorial', 'reference', 'conceptual', 'portal', 'api', 'guide', 'overview', 'index'];
const VALID_AUDIENCES = ['developer', 'orchestrator', 'gateway', 'delegator', 'community', 'all'];
const VALID_STATUSES = ['draft', 'published', 'review', 'deprecated'];
const REPO_ROOT = path.resolve(__dirname, '..', '..');
const TOOLS_REQUIRE = createRequire(path.resolve(REPO_ROOT, 'tools/package.json'));
const NAVIGATION_VALIDATOR_NAME = 'quality.test.js';

let errors = [];
let warnings = [];
let parserModules = null;

function report(severity, file, message, rule = 'Frontmatter') {
  const issue = { file, rule, message };
  if (severity === 'error') {
    errors.push(issue);
    return;
  }
  warnings.push(issue);
}

function collectFilesFromArgs(args) {
  const files = [];

  for (let i = 0; i < args.length; i += 1) {
    const token = args[i];
    if (token === '--files' || token === '--file') {
      const raw = String(args[i + 1] || '').trim();
      if (raw) {
        raw
          .split(',')
          .map((part) => part.trim())
          .filter(Boolean)
          .forEach((part) => {
            files.push(path.isAbsolute(part) ? part : path.resolve(part));
          });
      }
      i += 1;
    }
  }

  return [...new Set(files)];
}

function loadParserModules() {
  if (!parserModules) {
    parserModules = {
      unified: TOOLS_REQUIRE('unified').unified,
      remarkParse: TOOLS_REQUIRE('remark-parse').default,
      remarkGfm: TOOLS_REQUIRE('remark-gfm').default,
      remarkMdx: TOOLS_REQUIRE('remark-mdx').default
    };
  }

  return parserModules;
}

function normalizeWhitespace(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function countLineBreaks(value) {
  const matches = String(value || '').match(/\r?\n/g);
  return matches ? matches.length : 0;
}

function stripLeadingFrontmatter(content) {
  const raw = String(content || '');
  const withoutBom = raw.startsWith('\uFEFF') ? raw.slice(1) : raw;
  const frontmatterMatch = withoutBom.match(/^---[ \t]*\r?\n[\s\S]*?\r?\n---[ \t]*(?:\r?\n|$)/);

  if (!frontmatterMatch) {
    return { body: withoutBom, lineOffset: 0 };
  }

  return {
    body: withoutBom.slice(frontmatterMatch[0].length),
    lineOffset: countLineBreaks(frontmatterMatch[0])
  };
}

function collectNodeText(node, parts) {
  if (!node || typeof node !== 'object') {
    return;
  }

  if ((node.type === 'text' || node.type === 'inlineCode') && typeof node.value === 'string') {
    parts.push(node.value);
    return;
  }

  if (Array.isArray(node.children)) {
    node.children.forEach((child) => collectNodeText(child, parts));
  }
}

function extractHeadingText(node) {
  const parts = [];
  collectNodeText(node, parts);
  return normalizeWhitespace(parts.join(' '));
}

function visitNodes(node, visitor) {
  if (!node || typeof node !== 'object') {
    return;
  }

  visitor(node);

  if (Array.isArray(node.children)) {
    node.children.forEach((child) => visitNodes(child, visitor));
  }
}

function findDuplicateHeadingGroups(content, modules) {
  const { unified, remarkParse, remarkGfm, remarkMdx } = modules;
  const { body, lineOffset } = stripLeadingFrontmatter(content);
  const tree = unified().use(remarkParse).use(remarkGfm).use(remarkMdx).parse(body);
  const groups = new Map();

  visitNodes(tree, (node) => {
    if (node.type !== 'heading') {
      return;
    }

    const depth = Number(node.depth);
    if (![2, 3, 4].includes(depth)) {
      return;
    }

    const text = extractHeadingText(node);
    if (!text) {
      return;
    }

    const line = Number(node.position?.start?.line || 1) + lineOffset;
    const key = `${depth}::${text}`;
    const group = groups.get(key) || {
      depth,
      text,
      firstLine: line,
      lines: []
    };

    group.lines.push(line);
    group.firstLine = Math.min(group.firstLine, line);
    groups.set(key, group);
  });

  return [...groups.values()]
    .filter((group) => group.lines.length > 1)
    .sort((left, right) => left.depth - right.depth || left.firstLine - right.firstLine || left.text.localeCompare(right.text));
}

function buildDuplicateHeadingMessage(group) {
  return `Duplicate H${group.depth} heading "${group.text}" appears ${group.lines.length} times on this page (lines ${group.lines.join(', ')}).`;
}

/**
 * Check for image alt text
 */
function checkImageAltText(files) {
  files.forEach(file => {
    const content = readFile(file);
    if (!content) return;
    
    // Check for img tags without alt
    const imgRegex = /<img[^>]*>/gi;
    const matches = content.match(imgRegex) || [];
    
    matches.forEach(match => {
      if (!match.includes('alt=') && !match.includes("alt='") && !match.includes('alt="')) {
        errors.push({
          file,
          rule: 'Image alt text',
          message: 'Image tag missing alt attribute',
          tag: match
        });
      }
    });
    
    // Check for Image component usage (should have alt prop)
    const imageComponentRegex = /<Image[^>]*>/gi;
    const imageMatches = content.match(imageComponentRegex) || [];
    
    imageMatches.forEach(match => {
      if (!match.includes('alt=') && !match.includes("alt='") && !match.includes('alt="')) {
        warnings.push({
          file,
          rule: 'Image component alt text',
          message: 'Image component should have alt prop',
          tag: match
        });
      }
    });
  });
}

/**
 * Check frontmatter completeness
 */
function checkFrontmatter(files) {
  files.forEach(file => {
    const content = readFile(file);
    if (!content) return;
    
    const frontmatter = extractFrontmatter(content);
    
    if (!frontmatter.exists) {
      report('warning', file, 'Missing frontmatter (recommended: title, description)');
      return;
    }
    
    if (!frontmatter.data) {
      report('error', file, `Invalid frontmatter: ${frontmatter.error || 'parse error'}`);
      return;
    }

    const data = frontmatter.data;

    if (!data.title) {
      report('warning', file, 'Missing title in frontmatter');
    }

    if (!data.description) {
      report('warning', file, 'Missing description in frontmatter (important for SEO)');
    }

    if (ENFORCE_OG_IMAGE && !data['og:image'] && !data.ogImage) {
      report('error', file, 'Missing og:image in frontmatter');
    }

    if (!data.pageType) {
      report('advisory', file, 'Missing pageType field (recommended for audit framework)');
    } else if (!VALID_PAGE_TYPES.includes(data.pageType)) {
      report('advisory', file, `Invalid pageType: "${data.pageType}". Valid: ${VALID_PAGE_TYPES.join(', ')}`);
    }

    if (!data.audience) {
      report('advisory', file, 'Missing audience field (recommended for audit framework)');
    } else if (!VALID_AUDIENCES.includes(data.audience)) {
      report('advisory', file, `Invalid audience: "${data.audience}". Valid: ${VALID_AUDIENCES.join(', ')}`);
    }

    if (!data.status) {
      report('advisory', file, 'Missing status field (recommended for audit framework)');
    } else if (!VALID_STATUSES.includes(data.status)) {
      report('advisory', file, `Invalid status: "${data.status}". Valid: ${VALID_STATUSES.join(', ')}`);
    }

    if (!data.lastVerified) {
      report('advisory', file, 'Missing lastVerified field (recommended for audit framework)');
    } else if (Number.isNaN(Date.parse(data.lastVerified))) {
      report('advisory', file, `Invalid lastVerified date: "${data.lastVerified}"`);
    }

    if (data.title && String(data.title).length > 60) {
      report(
        'warning',
        file,
        `Title may be truncated in search: ${String(data.title).length} chars (recommended max 60)`
      );
    }
  });
}

/**
 * Check for broken internal links (basic)
 */
function checkInternalLinks(files) {
  files.forEach(file => {
    const content = readFile(file);
    if (!content) return;
    
    // Check for markdown links
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    
    while ((match = linkRegex.exec(content)) !== null) {
      const linkPath = match[2];
      
      // Skip external links
      if (linkPath.startsWith('http') || linkPath.startsWith('mailto:')) {
        continue;
      }
      
      // Check for common issues
      if (linkPath.includes('..')) {
        warnings.push({
          file,
          rule: 'Link validation',
          message: `Relative link path: ${linkPath} (consider using absolute path)`,
          link: linkPath
        });
      }
    }
  });
}

function checkDuplicateHeadings(files, options = {}) {
  const { blocking = false } = options;
  const parser = loadParserModules();

  files.forEach((file) => {
    const content = readFile(file);
    if (!content) return;

    try {
      const findings = findDuplicateHeadingGroups(content, parser);
      const target = blocking ? errors : warnings;

      findings.forEach((group) => {
        target.push({
          file,
          rule: 'Duplicate headings',
          line: group.firstLine,
          message: buildDuplicateHeadingMessage(group)
        });
      });
    } catch (_error) {
      // Duplicate-heading enforcement is best-effort here; malformed MDX is handled by mdx.test.js.
    }
  });
}

/**
 * Run all quality tests
 */
function runTests(options = {}) {
  errors = [];
  warnings = [];
  
  const { files = null, stagedOnly = false } = options;
  const explicitlyScoped = Array.isArray(files) && files.length > 0;
  
  let testFiles = files;
  if (!testFiles) {
    if (stagedOnly) {
      testFiles = getStagedDocsPageFiles(null, { validatorName: NAVIGATION_VALIDATOR_NAME }).filter(f => f.endsWith('.mdx'));
    } else {
      testFiles = getMdxFiles(null, { validatorName: NAVIGATION_VALIDATOR_NAME });
    }
  }
  
  checkImageAltText(testFiles);
  checkFrontmatter(testFiles);
  checkInternalLinks(testFiles);
  checkDuplicateHeadings(testFiles, { blocking: stagedOnly || explicitlyScoped });
  
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
  const files = collectFilesFromArgs(args);
  
  const result = runTests({ stagedOnly, files: files.length > 0 ? files : null });
  
  if (result.errors.length > 0) {
    console.error('\n❌ Quality Check Errors:\n');
    result.errors.forEach(err => {
      console.error(`  ${err.file} - ${err.message}`);
    });
  }
  
  if (result.warnings.length > 0) {
    console.warn('\n⚠️  Quality Check Warnings:\n');
    result.warnings.forEach(warn => {
      console.warn(`  ${warn.file} - ${warn.message}`);
    });
  }
  
  if (result.passed) {
    console.log(`\n✅ Quality checks passed (${result.total} files checked)`);
    process.exit(0);
  } else {
    console.error(`\n❌ ${result.errors.length} error(s) found`);
    process.exit(1);
  }
}

module.exports = { runTests };
