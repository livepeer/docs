#!/usr/bin/env node
/**
 * @script            run-audit-now
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tasks/scripts
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Quick audit launcher — runs audit-orchestrator with default settings for immediate results
 * @pipeline          manual — not yet in pipeline
 * @usage             node tasks/scripts/run-audit-now.js [flags]
 */

// Quick audit runner that writes to files immediately
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPORT_DIR = path.join(__dirname, '..', 'reports');
const SCRIPT_PATH = path.join(__dirname, 'audit-all-pages.js');

// Write start marker
const startFile = path.join(REPORT_DIR, 'audit-running.txt');
fs.writeFileSync(startFile, `Audit started at: ${new Date().toISOString()}\n`);

// Run the audit
try {
  console.log('Starting comprehensive audit...');
  execSync(`node "${SCRIPT_PATH}"`, { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..', '..', '..'),
    env: { ...process.env, MINT_BASE_URL: process.env.MINT_BASE_URL || 'http://localhost:3000' }
  });
  fs.appendFileSync(startFile, `Audit completed at: ${new Date().toISOString()}\n`);
} catch (error) {
  fs.appendFileSync(startFile, `Audit failed: ${error.message}\n`);
  process.exit(1);
}
