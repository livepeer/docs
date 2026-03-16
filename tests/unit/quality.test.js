#!/usr/bin/env node
/**
 * @script            quality.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Content quality checks — validates frontmatter completeness, thin content detection, placeholder flagging
 * @pipeline          P1, P3
 * @usage             node tests/unit/quality.test.js [flags]
 */
/**
 * Quality checks: alt text, links, frontmatter, SEO
 */

const path = require('path');
const { getAuthoredMdxFiles, getStagedAuthoredDocsPageFiles, readFile } = require('../utils/file-walker');
const { extractFrontmatter } = require('../utils/mdx-parser');
const { filterAuthoredDocsPageFiles } = require('../../tools/lib/docs-page-scope');
const taxonomy = require('../../tools/lib/frontmatter-taxonomy');
const { loadAudienceNormalization, audienceTokensFromRaw } = require('../../tools/lib/docs-usefulness/rubric-loader');

const ENFORCE_OG_IMAGE = process.env.ENFORCE_OG_IMAGE === '1';
const AUDIENCE_NORMALIZATION = loadAudienceNormalization();
const VALID_AUDIENCES = AUDIENCE_NORMALIZATION.canonical_audiences || [];

let errors = [];
let warnings = [];

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

function normaliseAudienceValue(rawAudience) {
  const tokens = audienceTokensFromRaw(rawAudience, AUDIENCE_NORMALIZATION);
  if (tokens.length === 0) {
    return {
      valid: false,
      canonical: '',
      advisory: '',
      candidates: []
    };
  }

  const precedence = AUDIENCE_NORMALIZATION.deterministic_precedence || VALID_AUDIENCES;
  const canonical = precedence.find((candidate) => tokens.includes(candidate)) || tokens[0];
  const rawValues = Array.isArray(rawAudience)
    ? rawAudience.map((entry) => String(entry || '').trim()).filter(Boolean)
    : [String(rawAudience || '').trim()].filter(Boolean);
  const rawScalar = rawValues.join(', ');
  const isSingleCanonicalScalar =
    rawValues.length === 1 &&
    VALID_AUDIENCES.includes(rawValues[0].toLowerCase()) &&
    !/[;,|]/.test(rawValues[0]);

  if (tokens.length > 1) {
    return {
      valid: true,
      canonical,
      advisory: `Audience resolves to multiple values (${tokens.join(', ')}). Use one canonical audience value, ideally "${canonical}".`,
      candidates: tokens
    };
  }

  if (!isSingleCanonicalScalar || rawValues[0].toLowerCase() !== canonical) {
    return {
      valid: true,
      canonical,
      advisory: `Normalise audience "${rawScalar}" to "${canonical}".`,
      candidates: tokens
    };
  }

  return {
    valid: true,
    canonical,
    advisory: '',
    candidates: tokens
  };
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
    } else {
      const pageTypeResult = taxonomy.normalizePageType(data.pageType);
      if (!pageTypeResult.valid) {
        report('advisory', file, `Invalid pageType: "${data.pageType}". Valid: ${taxonomy.describeCanonicalPageTypes()}`);
      } else if (pageTypeResult.deprecatedAlias) {
        report('advisory', file, taxonomy.getPageTypeAdvisory(data.pageType));
      }
    }

    if (!data.purpose) {
      report('advisory', file, 'Missing purpose field (recommended for journey and review routing)');
    } else {
      const purposeResult = taxonomy.normalizePurpose(data.purpose);
      if (!purposeResult.valid) {
        report('warning', file, `Invalid purpose: "${data.purpose}". Valid: ${taxonomy.describeCanonicalPurposes()}`);
      } else {
        if (purposeResult.deprecatedAlias) {
          report('advisory', file, taxonomy.getPurposeAdvisory(data.purpose));
        }

        const pageTypeResult = taxonomy.normalizePageType(data.pageType);
        if (
          pageTypeResult.valid &&
          !taxonomy.isAllowedPageTypePurpose(data.pageType, data.purpose)
        ) {
          report(
            'warning',
            file,
            `Disallowed pageType + purpose combination: "${pageTypeResult.canonical}" + "${purposeResult.canonical}". Allowed: ${taxonomy.describeAllowedPurposesForPageType(data.pageType)}`
          );
        }
      }
    }

    if (!data.audience) {
      report('advisory', file, 'Missing audience field (recommended for audit framework)');
    } else {
      const audienceResult = normaliseAudienceValue(data.audience);
      if (!audienceResult.valid) {
        report('advisory', file, `Invalid audience: "${data.audience}". Valid: ${VALID_AUDIENCES.join(', ')}`);
      } else if (audienceResult.advisory) {
        report('advisory', file, audienceResult.advisory);
      }
    }

    if (!data.status) {
      report('advisory', file, 'Missing status field (recommended for audit framework)');
    } else {
      const statusResult = taxonomy.normalizeStatus(data.status);
      if (!statusResult.valid) {
        report('advisory', file, `Invalid status: "${data.status}". Valid: ${taxonomy.describeCanonicalPageStatuses()}`);
      }
    }

    const statusRequiresLastVerified = taxonomy.statusRequiresLastVerified(data.status);
    if (!data.lastVerified) {
      report(
        statusRequiresLastVerified ? 'warning' : 'advisory',
        file,
        statusRequiresLastVerified
          ? `Missing lastVerified field (required for status "${data.status}")`
          : 'Missing lastVerified field (recommended for audit framework)'
      );
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

/**
 * Run all quality tests
 */
function runTests(options = {}) {
  errors = [];
  warnings = [];
  
  const { files = null, stagedOnly = false } = options;
  
  let testFiles = files;
  if (!testFiles) {
    if (stagedOnly) {
      testFiles = getStagedAuthoredDocsPageFiles().filter(f => f.endsWith('.mdx'));
    } else {
      testFiles = getAuthoredMdxFiles();
    }
  } else {
    testFiles = filterAuthoredDocsPageFiles(testFiles).filter(f => f.endsWith('.mdx'));
  }
  
  checkImageAltText(testFiles);
  checkFrontmatter(testFiles);
  checkInternalLinks(testFiles);
  
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
