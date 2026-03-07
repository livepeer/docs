/**
 * @script update-og-image
 * @summary Utility script for tools/scripts/dev/update-og-image.js.
 * @owner docs
 * @scope tools/scripts
 * @pipeline manual — interactive developer tool, not suited for automated pipelines
 *
 * @usage
 *   node tools/scripts/dev/update-og-image.js
 *
 * @inputs
 *   No required CLI flags; optional flags are documented inline.
 *
 * @outputs
 *   - Console output and/or file updates based on script purpose.
 *
 * @exit-codes
 *   0 = success
 *   1 = runtime or validation failure
 *
 * @examples
 *   node tools/scripts/dev/update-og-image.js
 *
 * @notes
 *   Keep script behavior deterministic and update script indexes after changes.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const NEW_OG_IMAGE = '/snippets/assets/domain/SHARED/LivepeerDocsHero.svg';
const EXCLUDE_FILES = ['mission-control.mdx'];
const V2_DOC_ROOTS = [
  'v2/pages',
  'v2/home',
  'v2/solutions',
  'v2/about',
  'v2/community',
  'v2/developers',
  'v2/gateways',
  'v2/orchestrators',
  'v2/lpt',
  'v2/resources',
  'v2/internal',
  'v2/deprecated',
  'v2/experimental',
  'v2/notes'
].filter((root) => fs.existsSync(root));

// Get all MDX files
const files = execSync(`find ${V2_DOC_ROOTS.join(' ')} -name "*.mdx" -type f`, { encoding: 'utf8' })
  .trim()
  .split('\n');

console.log(`Found ${files.length} MDX files`);
console.log(`New og:image: ${NEW_OG_IMAGE}`);
console.log(`Excluded: ${EXCLUDE_FILES.join(', ')}\n`);

let changed = 0;
let skipped = 0;
let errors = 0;

files.forEach(filePath => {
  try {
    const fileName = path.basename(filePath);
    
    // Skip excluded files
    if (EXCLUDE_FILES.includes(fileName)) {
      console.log(`⊘ ${filePath} - Excluded`);
      skipped++;
      return;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has frontmatter with og:image
    if (!content.match(/^---\n[\s\S]*?\nog:image:/m)) {
      skipped++;
      return;
    }
    
    // Replace og:image value
    const newContent = content.replace(
      /(og:image:\s*)["'].*?["']/g,
      `$1"${NEW_OG_IMAGE}"`
    );
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✓ ${filePath}`);
      changed++;
    } else {
      skipped++;
    }
  } catch (error) {
    console.error(`✗ ${filePath}: ${error.message}`);
    errors++;
  }
});

console.log(`\n========== SUMMARY ==========`);
console.log(`Changed: ${changed}`);
console.log(`Skipped: ${skipped}`);
console.log(`Errors: ${errors}`);
console.log(`=============================`);
