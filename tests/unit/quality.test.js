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
const fs = require('fs');
const { getV2DocsFiles, readFile } = require('../utils/file-walker');
const { extractFrontmatter } = require('../utils/mdx-parser');
const {
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  createOgImagePolicyContext,
  getManifestAssetByPath,
  hasRasterExtension,
  isExternalUrl,
  isGitHubBlobUrl,
  isLocalAssetPath,
  resolveOgImageForFile,
  toAbsoluteAssetPath,
} = require('../../tools/scripts/snippets/lib/og-image-policy');

const ENFORCE_OG_IMAGE = process.env.ENFORCE_OG_IMAGE === '1';
const VALID_PAGE_TYPES = ['quickstart', 'tutorial', 'reference', 'conceptual', 'portal', 'api', 'guide', 'overview', 'index'];
const VALID_AUDIENCES = ['developer', 'orchestrator', 'gateway', 'delegator', 'community', 'all'];
const VALID_STATUSES = ['draft', 'published', 'review', 'deprecated'];
const ogContext = createOgImagePolicyContext(process.cwd());
const assetValidationCache = new Map();

let errors = [];
let warnings = [];
let advice = [];

function report(severity, file, message, rule = 'Frontmatter') {
  const issue = { file, rule, message };
  if (severity === 'error') {
    errors.push(issue);
    return;
  }
  if (severity === 'advice' || severity === 'advisory') {
    advice.push(issue);
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

function getDefaultStrictFiles(stagedOnly) {
  return getV2DocsFiles({ stagedOnly }).filter((filePath) => {
    if (!filePath.endsWith('.mdx')) {
      return false;
    }
    try {
      return resolveOgImageForFile(filePath, ogContext).strict;
    } catch (_error) {
      return false;
    }
  });
}

function ensureLocalAsset(assetPath) {
  if (assetValidationCache.has(assetPath)) {
    return assetValidationCache.get(assetPath);
  }

  const absolutePath = toAbsoluteAssetPath(ogContext.repoRoot, assetPath);
  const result = {
    exists: fs.existsSync(absolutePath),
    absolutePath,
  };
  assetValidationCache.set(assetPath, result);
  return result;
}

function normalizeFrontmatterValue(value) {
  if (value === null || value === undefined) return '';
  return String(value).trim();
}

function checkOgPolicy(files) {
  files.forEach((file) => {
    const content = readFile(file);
    if (!content) return;

    const frontmatter = extractFrontmatter(content);
    if (!frontmatter.exists || !frontmatter.data) return;

    const assignment = resolveOgImageForFile(file, ogContext);
    const data = frontmatter.data;
    const ogImage = normalizeFrontmatterValue(data['og:image'] || data.ogImage);
    const ogAlt = normalizeFrontmatterValue(data['og:image:alt'] || data.ogImageAlt);
    const ogType = normalizeFrontmatterValue(data['og:image:type'] || data.ogImageType);
    const ogWidth = normalizeFrontmatterValue(data['og:image:width'] || data.ogImageWidth);
    const ogHeight = normalizeFrontmatterValue(data['og:image:height'] || data.ogImageHeight);
    const expected = assignment.fields;
    const manifestAsset = getManifestAssetByPath(ogImage, ogContext);

    if (assignment.strict || ENFORCE_OG_IMAGE) {
      if (!ogImage) {
        report('error', file, 'Missing og:image in frontmatter', 'OG image');
        return;
      }

      if (isGitHubBlobUrl(ogImage)) {
        report('error', file, 'GitHub blob URLs are not valid og:image assets', 'OG image');
      }

      if (isExternalUrl(ogImage)) {
        report('error', file, 'External og:image URLs are not allowed; use a local repo asset', 'OG image');
      }

      if (!isLocalAssetPath(ogImage)) {
        report('error', file, `og:image must point to a repo asset path. Received "${ogImage}"`, 'OG image');
      }

      if (!hasRasterExtension(ogImage)) {
        report('error', file, `og:image must use a raster extension (.png/.jpg/.jpeg/.webp). Received "${ogImage}"`, 'OG image');
      }

      if (ogImage !== expected['og:image']) {
        report('error', file, `Expected canonical og:image ${expected['og:image']} but found ${ogImage}`, 'OG image');
      }

      if (!ogAlt) {
        report('error', file, 'Missing og:image:alt in frontmatter', 'OG image');
      } else if (ogAlt !== expected['og:image:alt']) {
        report('error', file, `Expected canonical og:image:alt "${expected['og:image:alt']}"`, 'OG image');
      }

      if (ogType !== String(expected['og:image:type'])) {
        report('error', file, `Expected canonical og:image:type ${expected['og:image:type']}`, 'OG image');
      }

      if (ogWidth !== String(expected['og:image:width'])) {
        report('error', file, `Expected canonical og:image:width ${expected['og:image:width']}`, 'OG image');
      }

      if (ogHeight !== String(expected['og:image:height'])) {
        report('error', file, `Expected canonical og:image:height ${expected['og:image:height']}`, 'OG image');
      }
    }

    if (ogImage && isLocalAssetPath(ogImage)) {
      const localAsset = ensureLocalAsset(ogImage);
      if (!localAsset.exists) {
        report('error', file, `og:image asset does not exist: ${ogImage}`, 'OG image');
      }
    }

    if (manifestAsset) {
      if (ogWidth && Number(ogWidth) !== manifestAsset.width) {
        report('advice', file, `Generated asset metadata recommends width ${manifestAsset.width}`, 'OG image');
      }
      if (ogHeight && Number(ogHeight) !== manifestAsset.height) {
        report('advice', file, `Generated asset metadata recommends height ${manifestAsset.height}`, 'OG image');
      }
      return;
    }

    if (ogImage && hasRasterExtension(ogImage)) {
      if (!ogType) {
        report('advice', file, 'Prefer adding og:image:type for custom raster assets', 'OG image');
      }
      if (!ogWidth || !ogHeight) {
        report('advice', file, `Prefer adding og:image:width and og:image:height (${OG_IMAGE_WIDTH}x${OG_IMAGE_HEIGHT} recommended)`, 'OG image');
      } else if (
        Number(ogWidth) !== OG_IMAGE_WIDTH ||
        Number(ogHeight) !== OG_IMAGE_HEIGHT
      ) {
        report('advice', file, `Recommended social image size is ${OG_IMAGE_WIDTH}x${OG_IMAGE_HEIGHT}`, 'OG image');
      }
    }
  });
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

/**
 * Run all quality tests
 */
function runTests(options = {}) {
  errors = [];
  warnings = [];
  advice = [];
  
  const { files = null, stagedOnly = false } = options;
  
  let testFiles = files;
  if (!testFiles) {
    testFiles = getDefaultStrictFiles(stagedOnly);
  }
  
  checkImageAltText(testFiles);
  checkFrontmatter(testFiles);
  checkInternalLinks(testFiles);
  checkOgPolicy(testFiles);
  
  return {
    errors,
    warnings,
    advice,
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

  if (result.advice.length > 0) {
    console.log('\nℹ️  Quality Check Advice:\n');
    result.advice.forEach((note) => {
      console.log(`  ${note.file} - ${note.message}`);
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
