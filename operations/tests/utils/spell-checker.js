#!/usr/bin/env node
/**
 * @script            spell-checker
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Spell checker utility — checks text against custom dictionary with en-GB locale support
 * @pipeline          indirect — library module
 * @dualmode          dual-mode (document flags)
 * @usage             node operations/tests/utils/spell-checker.js [flags]
 */
/**
 * Spell checking utilities using cspell
 */

const { execSync, execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function resolveCspellConfig(configPath = null) {
  if (configPath && fs.existsSync(configPath)) {
    return configPath;
  }

  const repoRoot = getRepoRoot();
  const candidates = [
    path.join(process.cwd(), 'cspell.json'),
    path.join(repoRoot, 'cspell.json'),
    path.join(repoRoot, 'tools', 'config', 'quality', 'cspell.json')
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  return path.join(repoRoot, 'tools', 'config', 'quality', 'cspell.json');
}

function resolveCspellBinary() {
  if (process.env.CSPELL_BIN) {
    return { bin: process.env.CSPELL_BIN, viaNpx: false };
  }

  const repoRoot = getRepoRoot();
  const candidates = [
    path.join(repoRoot, 'tools', 'node_modules', '.bin', 'cspell'),
    path.join(repoRoot, 'tests', 'node_modules', '.bin', 'cspell')
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return { bin: candidate, viaNpx: false };
    }
  }

  return { bin: 'npx', viaNpx: true };
}

function extractMdxSpellcheckText(content) {
  let text = content;

  text = text.replace(/^---\s*\n[\s\S]*?\n---\s*\n?/, '');
  text = text.replace(/```[\s\S]*?```/g, '\n');
  text = text.replace(/\{\/\*[\s\S]*?\*\/\}/g, '\n');
  text = text.replace(/<!--[\s\S]*?-->/g, '\n');
  text = text.replace(/^\s*(import|export)\s+.*$/gm, '\n');
  text = text.replace(/`[^`]*`/g, ' ');
  text = text.replace(/<[^>]+>/g, ' ');
  text = text.replace(/\{[^}\n]*\}/g, ' ');

  return text;
}

/**
 * Check spelling in a file
 */
function checkSpelling(filePath, configPath = null) {
  const cspellConfig = resolveCspellConfig(configPath);
  const cspell = resolveCspellBinary();
  const isMdx = filePath.endsWith('.mdx');
  const args = ['cspell', 'lint', '--no-progress', '--config', cspellConfig];
  const input = isMdx ? extractMdxSpellcheckText(fs.readFileSync(filePath, 'utf8')) : null;

  if (isMdx) {
    args.push(`stdin://${filePath}`);
  } else {
    args.push(filePath);
  }
  
  try {
    let result;
    if (cspell.viaNpx) {
      result = execFileSync('npx', args, { encoding: 'utf8', input, stdio: 'pipe' });
    } else {
      result = execFileSync(
        cspell.bin,
        args.slice(1),
        { encoding: 'utf8', input, stdio: 'pipe' }
      );
    }
    return { errors: [], output: result };
  } catch (error) {
    // Parse cspell output
    const output = error.stdout || error.stderr || error.message;
    const errors = parseCspellOutput(output, filePath);
    return { errors, output };
  }
}

/**
 * Parse cspell output to extract errors
 */
function parseCspellOutput(output, filePath) {
  const errors = [];
  const lines = output.split('\n');
  
  for (const line of lines) {
    // cspell output format: filePath:line:col - Unknown word: "word"
    const match = line.match(/:(\d+):(\d+)\s*-\s*Unknown word:\s*"([^"]+)"/);
    if (match) {
      errors.push({
        line: parseInt(match[1]),
        column: parseInt(match[2]),
        word: match[3],
        file: filePath
      });
    }
  }
  
  return errors;
}

function parseCspellOutputByFile(output, fileMap = new Map()) {
  const byFile = new Map();
  const lines = output.split('\n');

  for (const line of lines) {
    const match = line.match(/^(.+?):(\d+):(\d+)\s*-\s*Unknown word:\s*"([^"]+)"/);
    if (!match) {
      continue;
    }

    const reportedFile = match[1];
    const file = fileMap.get(reportedFile) || reportedFile;
    if (!byFile.has(file)) {
      byFile.set(file, []);
    }
    byFile.get(file).push({
      line: parseInt(match[2]),
      column: parseInt(match[3]),
      word: match[4],
      file
    });
  }

  return byFile;
}

function runCspellBatch(filePaths, configPath = null) {
  const cspellConfig = resolveCspellConfig(configPath);
  const cspell = resolveCspellBinary();
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'livepeer-spell-'));
  const fileMap = new Map();
  const tempFiles = [];

  try {
    filePaths.forEach((filePath, index) => {
      const relative = path.relative(getRepoRoot(), filePath).replace(/\.\./g, '__');
      const tempFile = path.join(tempRoot, `${String(index).padStart(4, '0')}-${relative}`);
      fs.mkdirSync(path.dirname(tempFile), { recursive: true });
      const content = filePath.endsWith('.mdx')
        ? extractMdxSpellcheckText(fs.readFileSync(filePath, 'utf8'))
        : fs.readFileSync(filePath, 'utf8');
      fs.writeFileSync(tempFile, content);
      fileMap.set(tempFile, filePath);
      tempFiles.push(tempFile);
    });

    const listPath = path.join(tempRoot, 'files.txt');
    fs.writeFileSync(listPath, `${tempFiles.join('\n')}\n`);

    const args = ['cspell', 'lint', '--no-progress', '--config', cspellConfig, '--file-list', listPath];
    let output = '';
    try {
      if (cspell.viaNpx) {
        output = execFileSync('npx', args, { encoding: 'utf8', stdio: 'pipe' });
      } else {
        output = execFileSync(cspell.bin, args.slice(1), { encoding: 'utf8', stdio: 'pipe' });
      }
    } catch (error) {
      output = error.stdout || error.stderr || error.message;
    }

    return parseCspellOutputByFile(output, fileMap);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
}

/**
 * Check multiple files
 */
function checkMultipleFiles(filePaths, configPath = null) {
  const existingFiles = filePaths.filter((filePath) => fs.existsSync(filePath));
  const errorsByFile = runCspellBatch(existingFiles, configPath);

  return existingFiles.map((filePath) => ({
    file: filePath,
    errors: errorsByFile.get(filePath) || [],
    output: ''
  }));
}

module.exports = {
  checkSpelling,
  checkMultipleFiles,
  parseCspellOutput,
  parseCspellOutputByFile,
  resolveCspellBinary,
  resolveCspellConfig
};
