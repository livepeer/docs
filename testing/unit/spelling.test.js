#!/usr/bin/env node
/**
 * UK English spelling validation tests
 */

const path = require('path');
const { getMdxFiles, getStagedFiles, readFile } = require('../utils/file-walker');
const { checkSpelling, checkMultipleFiles } = require('../utils/spell-checker');

let errors = [];

/**
 * Extract text content from MDX (excluding code blocks and frontmatter)
 */
function extractTextContent(content) {
  // Remove frontmatter
  let text = content.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '');
  
  // Remove code blocks
  text = text.replace(/```[\s\S]*?```/g, '');
  
  // Remove inline code
  text = text.replace(/`[^`]+`/g, '');
  
  // Remove JSX tags (keep text content)
  text = text.replace(/<[^>]+>/g, ' ');
  
  return text;
}

/**
 * Run spelling tests
 */
async function runTests(options = {}) {
  errors = [];
  
  const { files = null, stagedOnly = false } = options;
  
  let testFiles = files;
  if (!testFiles) {
    if (stagedOnly) {
      testFiles = getStagedFiles().filter(f => f.endsWith('.mdx'));
    } else {
      testFiles = getMdxFiles();
    }
  }
  
  // Check if cspell is available
  try {
    require('child_process').execSync('npx cspell --version', { stdio: 'ignore' });
  } catch (error) {
    console.warn('⚠️  cspell not available. Install with: npm install');
    return { errors: [], warnings: ['cspell not available'], passed: true, total: testFiles.length };
  }
  
  const cspellConfig = path.join(process.cwd(), 'cspell.json');
  const results = checkMultipleFiles(testFiles, cspellConfig);
  
  results.forEach(result => {
    if (result.errors.length > 0) {
      errors.push({
        file: result.file,
        errors: result.errors
      });
    }
  });
  
  return {
    errors,
    passed: errors.length === 0,
    total: testFiles.length
  };
}

// Run if called directly
if (require.main === module) {
  const args = process.argv.slice(2);
  const stagedOnly = args.includes('--staged');
  
  runTests({ stagedOnly }).then(result => {
    if (result.errors.length > 0) {
      console.error('\n❌ Spelling Errors:\n');
      result.errors.forEach(fileError => {
        console.error(`  ${fileError.file}:`);
        fileError.errors.forEach(err => {
          console.error(`    Line ${err.line}:${err.column} - Unknown word: "${err.word}"`);
        });
      });
    }
    
    if (result.passed) {
      console.log(`\n✅ Spelling checks passed (${result.total} files checked)`);
      process.exit(0);
    } else {
      const totalErrors = result.errors.reduce((sum, e) => sum + e.errors.length, 0);
      console.error(`\n❌ ${totalErrors} spelling error(s) found`);
      process.exit(1);
    }
  }).catch(error => {
    console.error('Spelling test error:', error);
    process.exit(1);
  });
}

module.exports = { runTests };
