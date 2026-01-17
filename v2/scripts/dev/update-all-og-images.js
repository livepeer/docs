const fs = require('fs');
const path = require('path');

const OLD_IMAGE = 'og:image: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg"';
const NEW_IMAGE = 'og:image: "/snippets/assets/domain/SHARED/LivepeerDocsHero.svg"';
const EXCLUDE_FILES = ['mission-control.mdx'];

function getAllMdxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllMdxFiles(filePath, fileList);
    } else if (file.endsWith('.mdx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

const allFiles = getAllMdxFiles('v2/pages');
let changed = 0;
let skipped = 0;
let errors = 0;

console.log(`Found ${allFiles.length} MDX files\n`);

allFiles.forEach(filePath => {
  try {
    const fileName = path.basename(filePath);
    
    // Skip excluded files
    if (EXCLUDE_FILES.includes(fileName)) {
      console.log(`⊘ ${filePath} - Excluded`);
      skipped++;
      return;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes(OLD_IMAGE)) {
      const newContent = content.replace(OLD_IMAGE, NEW_IMAGE);
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

// Write summary to file
fs.writeFileSync('og-image-update-summary.txt', `Changed: ${changed}\nSkipped: ${skipped}\nErrors: ${errors}\n`);

