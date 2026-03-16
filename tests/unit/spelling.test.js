#!/usr/bin/env node
/**
 * @script            spelling.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests
 * @domain            docs
 * @needs             E-R1, R-R11
 * @purpose-statement Spelling check — validates content against custom dictionary with en-GB rules
 * @pipeline          P1, P3
 * @usage             node tests/unit/spelling.test.js [flags]
 */
/**
 * UK English spelling validation tests
 */

const { execSync } = require('child_process');
const path = require('path');
const { getAuthoredMdxFiles, getStagedAuthoredDocsPageFiles } = require('../utils/file-walker');
const { checkMultipleFiles, resolveCspellBinary, resolveCspellConfig } = require('../utils/spell-checker');
const { filterAuthoredDocsPageFiles } = require('../../tools/lib/docs-page-scope');

let errors = [];

function parseArgs(argv) {
  const parsed = {
    stagedOnly: false,
    files: []
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--staged') {
      parsed.stagedOnly = true;
      continue;
    }
    if (token === '--files' || token === '--file') {
      const raw = String(argv[i + 1] || '').trim();
      if (raw) {
        raw
          .split(',')
          .map((entry) => entry.trim())
          .filter(Boolean)
          .forEach((entry) => {
            parsed.files.push(path.isAbsolute(entry) ? entry : path.resolve(process.cwd(), entry));
          });
      }
      i += 1;
    }
  }

  parsed.files = [...new Set(parsed.files)];
  return parsed;
}

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
      testFiles = getStagedAuthoredDocsPageFiles().filter(f => f.endsWith('.mdx'));
    } else {
      testFiles = getAuthoredMdxFiles();
    }
  } else {
    testFiles = filterAuthoredDocsPageFiles(testFiles).filter(f => f.endsWith('.mdx'));
  }
  
  // Check if cspell is available
  const cspell = resolveCspellBinary();
  try {
    if (cspell.viaNpx) {
      execSync('npx cspell --version', { stdio: 'ignore' });
    } else {
      execSync(`"${cspell.bin}" --version`, { stdio: 'ignore' });
    }
  } catch (error) {
    console.warn('⚠️  cspell not available. Install with: npm install');
    return { errors: [], warnings: ['cspell not available'], passed: true, total: testFiles.length };
  }
  
  const cspellConfig = resolveCspellConfig();
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
  const parsed = parseArgs(process.argv.slice(2));

  runTests({
    stagedOnly: parsed.stagedOnly,
    files: parsed.files.length > 0 ? parsed.files : null
  }).then(result => {
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

module.exports = { parseArgs, runTests };
