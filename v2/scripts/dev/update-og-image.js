const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const NEW_OG_IMAGE = '/snippets/assets/domain/SHARED/LivepeerDocsHero.svg';
const EXCLUDE_FILES = ['mission-control.mdx'];

// Get all MDX files
const files = execSync('find v2/pages -name "*.mdx" -type f', { encoding: 'utf8' })
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

