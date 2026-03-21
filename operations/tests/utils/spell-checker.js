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
 * @usage             node tests/utils/spell-checker.js [flags]
 */
/**
 * Spell checking utilities using cspell
 */

const { execSync, execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');

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
    path.join(repoRoot, 'tools', 'config', 'cspell.json')
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  return path.join(repoRoot, 'tools', 'config', 'cspell.json');
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

/**
 * Check spelling in a file
 */
function checkSpelling(filePath, configPath = null) {
  const cspellConfig = resolveCspellConfig(configPath);
  const cspell = resolveCspellBinary();
  
  try {
    let result;
    if (cspell.viaNpx) {
      result = execSync(
        `npx cspell --no-progress --config "${cspellConfig}" "${filePath}"`,
        { encoding: 'utf8', stdio: 'pipe' }
      );
    } else {
      result = execFileSync(
        cspell.bin,
        ['--no-progress', '--config', cspellConfig, filePath],
        { encoding: 'utf8', stdio: 'pipe' }
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

/**
 * Check multiple files
 */
function checkMultipleFiles(filePaths, configPath = null) {
  const results = [];
  
  for (const filePath of filePaths) {
    if (fs.existsSync(filePath)) {
      const result = checkSpelling(filePath, configPath);
      results.push({
        file: filePath,
        ...result
      });
    }
  }
  
  return results;
}

module.exports = {
  checkSpelling,
  checkMultipleFiles,
  parseCspellOutput,
  resolveCspellBinary,
  resolveCspellConfig
};
