#!/usr/bin/env node
/**
 * @script            style-guide.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Style guide compliance — checks en-GB conventions, heading case, formatting rules
 * @pipeline          P1 (commit, via run-all)
 * @usage             node tests/unit/style-guide.test.js [flags]
 */
/**
 * Style guide rule validation tests
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { getMdxFiles, getJsxFiles, getStagedDocsPageFiles, readFile } = require('../utils/file-walker');
const { collectVisibleMdxLines, isEnglishV2DocPath } = require('../../tools/lib/mdx-visible-text');

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', {
      encoding: 'utf8',
      cwd: process.cwd()
    }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

const REPO_ROOT = getRepoRoot();
let errors = [];
let warnings = [];
let stagedLineMap = null;

function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function parseCsvFiles(value) {
  return String(value || '')
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function resolveInputPath(filePath) {
  const value = String(filePath || '').trim();
  if (!value) return '';
  if (path.isAbsolute(value)) {
    return path.normalize(value);
  }
  return path.resolve(REPO_ROOT, value);
}

function dedupe(values) {
  return [...new Set(values.filter(Boolean))];
}

function resolveExplicitFiles(files) {
  const resolved = dedupe(files.map(resolveInputPath));
  resolved.forEach((filePath) => {
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }
  });
  return resolved;
}

function printHelp() {
  process.stdout.write(
    [
      'Usage:',
      '  node tests/unit/style-guide.test.js [--staged] [--fix] [--file <path>] [--files <a,b>]',
      '',
      'Options:',
      '  --staged        Validate staged docs-page files only.',
      '  --fix           Strip trailing spaces and tabs from in-scope lines.',
      '  --file <path>   Validate a single file (repeatable). Accepts absolute or repo-relative paths.',
      '  --files <a,b>   Validate a comma-separated list of files.',
      '  --help          Show this help message.',
      '',
      'Default behavior:',
      '  Scans routable v2 MDX pages and snippets/components JSX files.'
    ].join('\n')
  );
  process.stdout.write('\n');
}

function parseArgs(argv) {
  const args = {
    files: [],
    fix: false,
    help: false,
    stagedOnly: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    if (token === '--staged') {
      args.stagedOnly = true;
      continue;
    }

    if (token === '--fix') {
      args.fix = true;
      continue;
    }

    if (token === '--file') {
      const value = String(argv[i + 1] || '').trim();
      if (!value) {
        throw new Error('Missing value for --file.');
      }
      args.files.push(value);
      i += 1;
      continue;
    }

    if (token.startsWith('--file=')) {
      const value = token.slice('--file='.length).trim();
      if (!value) {
        throw new Error('Missing value for --file.');
      }
      args.files.push(value);
      continue;
    }

    if (token === '--files') {
      const value = String(argv[i + 1] || '').trim();
      if (!value) {
        throw new Error('Missing value for --files.');
      }
      parseCsvFiles(value).forEach((filePath) => args.files.push(filePath));
      i += 1;
      continue;
    }

    if (token.startsWith('--files=')) {
      const value = token.slice('--files='.length).trim();
      if (!value) {
        throw new Error('Missing value for --files.');
      }
      parseCsvFiles(value).forEach((filePath) => args.files.push(filePath));
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return args;
}

function getStagedChangedLineSet(filePath) {
  const relPath = toPosix(path.relative(REPO_ROOT, filePath));
  if (!relPath) {
    return null;
  }

  try {
    const diff = execSync(`git diff --cached --unified=0 -- "${relPath}"`, {
      encoding: 'utf8',
      cwd: REPO_ROOT
    });
    const changedLines = new Set();
    const hunkRegex = /^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/;

    diff.split('\n').forEach((line) => {
      const match = line.match(hunkRegex);
      if (!match) return;

      const start = Number(match[1]);
      const count = match[2] ? Number(match[2]) : 1;
      if (!Number.isFinite(start) || !Number.isFinite(count) || count <= 0) return;

      for (let i = 0; i < count; i += 1) {
        changedLines.add(start + i);
      }
    });

    return changedLines;
  } catch (_error) {
    return null;
  }
}

function shouldCheckLine(file, line, stagedOnly) {
  if (!stagedOnly || !stagedLineMap) {
    return true;
  }

  const changedLines = stagedLineMap.get(file);
  if (!changedLines || changedLines.size === 0) {
    return false;
  }

  return changedLines.has(line);
}

function shouldCheckEmDashFile(file, explicitlyProvided = false) {
  if (!String(file || '').endsWith('.mdx')) return false;
  if (String(file).includes('style-guide.mdx')) return false;
  if (explicitlyProvided) return true;
  return isEnglishV2DocPath(file, REPO_ROOT);
}

function chooseScopedLine(file, lines, stagedOnly) {
  if (!Array.isArray(lines) || lines.length === 0) {
    return null;
  }

  if (!stagedOnly) {
    return lines[0];
  }

  const scoped = lines.find((line) => shouldCheckLine(file, line, stagedOnly));
  return scoped || lines[0];
}

function inspectTextFormatting(file, rawContent, stagedOnly = false) {
  const raw = String(rawContent || '');
  const parts = [];
  const trailingWhitespaceLines = [];
  const lineEndingObservations = [];
  const bareCrLines = [];

  let currentLine = '';
  let lineNumber = 1;
  let fixedLineCount = 0;

  function finalizeLine(newlineToken) {
    const lineInScope = shouldCheckLine(file, lineNumber, stagedOnly);
    let nextLine = currentLine;

    if (lineInScope && /[ \t]+$/.test(currentLine)) {
      trailingWhitespaceLines.push(lineNumber);
      nextLine = currentLine.replace(/[ \t]+$/, '');
      fixedLineCount += 1;
    }

    if (newlineToken === '\n') {
      lineEndingObservations.push({ line: lineNumber, type: 'lf' });
    } else if (newlineToken === '\r\n') {
      lineEndingObservations.push({ line: lineNumber, type: 'crlf' });
    } else if (newlineToken === '\r') {
      bareCrLines.push(lineNumber);
    }

    parts.push(nextLine, newlineToken);
    currentLine = '';

    if (newlineToken) {
      lineNumber += 1;
    }
  }

  for (let i = 0; i < raw.length; i += 1) {
    const char = raw[i];

    if (char === '\r') {
      if (raw[i + 1] === '\n') {
        finalizeLine('\r\n');
        i += 1;
      } else {
        finalizeLine('\r');
      }
      continue;
    }

    if (char === '\n') {
      finalizeLine('\n');
      continue;
    }

    currentLine += char;
  }

  if (currentLine.length > 0 || raw.length === 0 || !/[\r\n]$/.test(raw)) {
    finalizeLine('');
  }

  const observedLfCrlf = lineEndingObservations.map((entry) => entry.type);
  const sawLf = observedLfCrlf.includes('lf');
  const sawCrlf = observedLfCrlf.includes('crlf');

  let mixedLineEndingLine = null;
  if (sawLf && sawCrlf) {
    const mixedCandidates = [];
    let primaryType = null;

    lineEndingObservations.forEach((entry) => {
      if (!primaryType) {
        primaryType = entry.type;
        return;
      }
      if (entry.type !== primaryType) {
        mixedCandidates.push(entry.line);
      }
    });

    mixedLineEndingLine = chooseScopedLine(file, mixedCandidates, stagedOnly);
  }

  const bareCrLine = chooseScopedLine(file, bareCrLines, stagedOnly);

  return {
    bareCrLine,
    fixedContent: parts.join(''),
    fixedLineCount,
    mixedLineEndingLine,
    trailingWhitespaceLines
  };
}

function checkWhitespaceAndLineEndings(files, stagedOnly = false, fix = false) {
  let fixedFiles = 0;
  let fixedLines = 0;

  files.forEach((file) => {
    const original = readFile(file);
    if (original === null) return;

    let analysis = inspectTextFormatting(file, original, stagedOnly);

    if (fix && analysis.fixedLineCount > 0) {
      fs.writeFileSync(file, analysis.fixedContent, 'utf8');
      fixedFiles += 1;
      fixedLines += analysis.fixedLineCount;
      analysis = inspectTextFormatting(file, analysis.fixedContent, stagedOnly);
    }

    analysis.trailingWhitespaceLines.forEach((line) => {
      errors.push({
        file,
        rule: 'Trailing whitespace',
        message: 'Trailing whitespace detected - remove spaces or tabs at end of line',
        line
      });
    });

    if (analysis.mixedLineEndingLine !== null && shouldCheckLine(file, analysis.mixedLineEndingLine, stagedOnly)) {
      errors.push({
        file,
        rule: 'Line endings',
        message: 'Mixed LF and CRLF line endings detected - use one line-ending style per file',
        line: analysis.mixedLineEndingLine
      });
    }

    if (analysis.bareCrLine !== null && shouldCheckLine(file, analysis.bareCrLine, stagedOnly)) {
      errors.push({
        file,
        rule: 'Line endings',
        message: 'Bare CR line endings detected - use LF or CRLF line endings instead',
        line: analysis.bareCrLine
      });
    }
  });

  return {
    fixedFiles,
    fixedLines
  };
}

/**
 * Check for ThemeData usage (deprecated)
 */
function checkThemeData(files, stagedOnly = false) {
  files.forEach(file => {
    if (file.includes('style-guide.mdx')) return; // Skip style guide itself

    const content = readFile(file);
    if (!content) return;

    const lines = content.split('\n');
    lines.forEach((line, index) => {
      if (!line.includes('ThemeData') && !line.includes('themeStyles.jsx')) {
        return;
      }
      const lineNumber = index + 1;
      if (!shouldCheckLine(file, lineNumber, stagedOnly)) {
        return;
      }
      errors.push({
        file,
        rule: 'ThemeData usage',
        message: 'Uses deprecated ThemeData - use CSS Custom Properties instead',
        line: lineNumber
      });
    });
  });
}

/**
 * Check for hardcoded colors
 */
function checkHardcodedColors(files, stagedOnly = false) {
  const livepeerColors = ['#3CB540', '#2b9a66', '#18794E', '#181C18', '#E0E4E0', '#717571', '#A0A4A0'];

  files.forEach(file => {
    if (file.includes('style-guide.mdx')) return;

    const content = readFile(file);
    if (!content) return;

    // Skip code blocks and markdown tables
    const lines = content.split('\n');
    let inCodeBlock = false;
    let inTable = false;

    lines.forEach((line, index) => {
      if (line.trim().startsWith('```')) inCodeBlock = !inCodeBlock;
      if (line.includes('|') && line.includes('---')) inTable = true;
      if (line.trim() === '') inTable = false;

      if (!inCodeBlock && !inTable) {
        const lineNumber = index + 1;
        if (!shouldCheckLine(file, lineNumber, stagedOnly)) {
          return;
        }
        livepeerColors.forEach(color => {
          if (line.includes(color) && !line.includes('var(--') && !line.includes('CSS Custom Properties')) {
            errors.push({
              file,
              rule: 'Hardcoded colors',
              message: `Contains hardcoded theme color ${color} - use CSS Custom Properties (var(--accent), etc.)`,
              line: lineNumber
            });
          }
        });
      }
    });
  });
}

/**
 * Check for inline styles in MDX
 */
function checkInlineStylesInMdx(files, stagedOnly = false) {
  files.filter(f => f.endsWith('.mdx')).forEach(file => {
    if (file.includes('style-guide.mdx') || file.includes('component-library')) return;

    const content = readFile(file);
    if (!content) return;

    // Check for style={{}} in MDX (should use components instead)
    const styleRegex = /style\s*=\s*\{\{/g;
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      if (!shouldCheckLine(file, lineNumber, stagedOnly)) {
        return;
      }
      if (styleRegex.test(line) && !line.includes('//') && !line.includes('{/*')) {
        errors.push({
          file,
          rule: 'No inline styles in MDX',
          message: 'Inline styles in MDX files - use component primitives instead',
          line: lineNumber
        });
      }
    });
  });
}

/**
 * Check for em dash usage in English v2 docs prose.
 */
function checkEmDashes(files, stagedOnly = false, explicitlyProvided = false) {
  files
    .filter((file) => shouldCheckEmDashFile(file, explicitlyProvided))
    .forEach((file) => {
      const content = readFile(file);
      if (!content) return;

      const lines = collectVisibleMdxLines(content, {
        frontmatterFields: ['title', 'description']
      });

      lines.forEach((lineEntry) => {
        if (!lineEntry.visibleText.includes('—')) return;
        if (!shouldCheckLine(file, lineEntry.line, stagedOnly)) return;

        errors.push({
          file,
          rule: 'No em dashes',
          message: 'Em dash detected - replace — with spaced en dash ( – ) or rewrite the sentence',
          line: lineEntry.line
        });
      });
    });
}

/**
 * Check for Tailwind classes
 */
function checkTailwindClasses(files, stagedOnly = false) {
  files.filter(f => f.endsWith('.mdx')).forEach(file => {
    const content = readFile(file);
    if (!content) return;

    // Common Tailwind patterns
    const tailwindPatterns = [
      /\b(flex|grid|gap-\d+|items-center|justify-center|p-\d+|m-\d+|w-\d+|h-\d+)\b/
    ];

    const lines = content.split('\n');
    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      if (!shouldCheckLine(file, lineNumber, stagedOnly)) {
        return;
      }
      if (line.includes('className=')) {
        tailwindPatterns.forEach(pattern => {
          if (pattern.test(line)) {
            warnings.push({
              file,
              rule: 'No Tailwind classes',
              message: 'Tailwind classes detected - use component primitives instead',
              line: lineNumber
            });
          }
        });
      }
    });
  });
}

/**
 * Check import paths
 */
function checkImportPaths(files, stagedOnly = false) {
  files.forEach(file => {
    if (file.includes('style-guide.mdx')) return; // Skip style guide (it documents relative imports as examples of what NOT to do)

    const content = readFile(file);
    if (!content) return;

    const importRegex = /from\s+['"]([^'"]+)['"]/g;
    let match;

    while ((match = importRegex.exec(content)) !== null) {
      const importPath = match[1];
      const lineNumber = content.substring(0, match.index).split('\n').length;
      if (!shouldCheckLine(file, lineNumber, stagedOnly)) {
        continue;
      }

      // Check for relative imports to snippets
      if (importPath.includes('snippets') && !importPath.startsWith('/snippets')) {
        errors.push({
          file,
          rule: 'Absolute import paths',
          message: `Relative import path for snippets: ${importPath}. Use absolute path: /snippets/...`,
          line: lineNumber
        });
      }

      // Check for @mintlify/components imports
      if (importPath === '@mintlify/components') {
        warnings.push({
          file,
          rule: 'Unnecessary imports',
          message: 'Imports from @mintlify/components - these are global, no import needed',
          line: lineNumber
        });
      }

      // Check for React hook imports
      if (importPath === 'react' && content.includes('useState') || content.includes('useEffect')) {
        warnings.push({
          file,
          rule: 'Unnecessary React imports',
          message: 'Imports React hooks - hooks are global in Mintlify, no import needed',
          line: lineNumber
        });
      }
    }
  });
}

/**
 * Check file naming conventions
 */
function checkFileNaming(files) {
  files.filter(f => f.endsWith('.mdx') || f.endsWith('.jsx')).forEach(file => {
    const fileName = path.basename(file);

    // Check kebab-case for files
    if (!/^[a-z0-9]+(-[a-z0-9]+)*\.(mdx|jsx)$/.test(fileName) && !fileName.includes('index')) {
      warnings.push({
        file,
        rule: 'File naming',
        message: `File name should be kebab-case: ${fileName}`,
        line: 1
      });
    }
  });
}

/**
 * Helper to find line number
 */
function findLineNumber(content, search) {
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].includes(search)) return i + 1;
  }
  return 1;
}

/**
 * Run all style guide tests
 */
function runTests(options = {}) {
  errors = [];
  warnings = [];
  stagedLineMap = null;

  const { files = null, stagedOnly = false, fix = false } = options;
  const explicitFiles = Array.isArray(files) && files.length > 0
    ? resolveExplicitFiles(files)
    : null;
  const useStagedOnly = explicitFiles ? false : stagedOnly;
  const explicitlyProvided = Array.isArray(explicitFiles);

  let testFiles = explicitFiles;
  if (!testFiles) {
    if (useStagedOnly) {
      testFiles = getStagedDocsPageFiles(REPO_ROOT).filter(f => f.endsWith('.mdx') && !f.includes('style-guide.mdx'));
    } else {
      testFiles = [...getMdxFiles(REPO_ROOT), ...getJsxFiles(REPO_ROOT)].filter(f => !f.includes('style-guide.mdx'));
    }
  } else {
    // Filter out style-guide.mdx even if files are explicitly provided
    testFiles = testFiles.filter(f => !f.includes('style-guide.mdx'));
  }

  if (useStagedOnly) {
    stagedLineMap = new Map();
    testFiles.forEach((file) => {
      stagedLineMap.set(file, getStagedChangedLineSet(file));
    });
  }

  const fixSummary = checkWhitespaceAndLineEndings(testFiles, useStagedOnly, fix);
  checkThemeData(testFiles, useStagedOnly);
  checkHardcodedColors(testFiles, useStagedOnly);
  checkInlineStylesInMdx(testFiles, useStagedOnly);
  checkEmDashes(testFiles, useStagedOnly, explicitlyProvided);
  checkTailwindClasses(testFiles, useStagedOnly);
  checkImportPaths(testFiles, useStagedOnly);
  checkFileNaming(testFiles);

  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: testFiles.length,
    fixedFiles: fixSummary.fixedFiles,
    fixedLines: fixSummary.fixedLines
  };
}

// Run if called directly
if (require.main === module) {
  try {
    const args = parseArgs(process.argv.slice(2));

    if (args.help) {
      printHelp();
      process.exit(0);
    }

    const result = runTests({
      files: args.files,
      fix: args.fix,
      stagedOnly: args.stagedOnly
    });

    if (result.errors.length > 0) {
      console.error('\n❌ Style Guide Violations:\n');
      result.errors.forEach(err => {
        console.error(`  ${err.file}:${err.line} - ${err.message}`);
      });
    }

    if (result.warnings.length > 0) {
      console.warn('\n⚠️  Warnings:\n');
      result.warnings.forEach(warn => {
        console.warn(`  ${warn.file}:${warn.line} - ${warn.message}`);
      });
    }

    if (result.fixedFiles > 0) {
      console.log(`\n🛠️  Fixed trailing whitespace in ${result.fixedFiles} file(s), ${result.fixedLines} line(s)`);
    }

    if (result.passed) {
      console.log(`\n✅ Style guide checks passed (${result.total} files checked)`);
      process.exit(0);
    } else {
      console.error(`\n❌ ${result.errors.length} violation(s) found`);
      process.exit(1);
    }
  } catch (error) {
    console.error(`\n❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = { runTests };
