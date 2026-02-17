#!/usr/bin/env node
/**
 * Spell checking utilities using cspell
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

/**
 * Check spelling in a file
 */
function checkSpelling(filePath, configPath = null) {
  const cspellConfig = configPath || path.join(process.cwd(), 'cspell.json');
  
  try {
    // Run cspell check
    const result = execSync(
      `npx cspell --no-progress --config "${cspellConfig}" "${filePath}"`,
      { encoding: 'utf8', stdio: 'pipe' }
    );
    return { errors: [], output: result };
  } catch (error) {
    // Parse cspell output
    const output = error.stdout || error.message;
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
  parseCspellOutput
};
