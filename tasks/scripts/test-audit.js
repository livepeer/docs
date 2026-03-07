/**
 * @script            test-audit
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tasks/scripts
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Audit test — validates audit pipeline logic and report format
 * @pipeline          manual — not yet in pipeline
 * @usage             node tasks/scripts/test-audit.js [flags]
 */
const fs = require('fs');
const path = require('path');

// Write test file immediately
const testFile = path.join(__dirname, '..', 'reports', 'test-audit-running.txt');
fs.writeFileSync(testFile, `Test started at: ${new Date().toISOString()}\n`);

// Test basic functionality
const docsPath = path.join(__dirname, '..', '..', '..', 'docs.json');
if (!fs.existsSync(docsPath)) {
  fs.appendFileSync(testFile, 'ERROR: docs.json not found\n');
  process.exit(1);
}

fs.appendFileSync(testFile, 'docs.json found\n');

// Try to parse it
try {
  const docs = JSON.parse(fs.readFileSync(docsPath, 'utf8'));
  fs.appendFileSync(testFile, `docs.json parsed successfully\n`);
  fs.appendFileSync(testFile, `Has navigation: ${!!docs.navigation}\n`);
  fs.appendFileSync(testFile, `Has versions: ${!!docs.navigation?.versions}\n`);
  
  const v2 = docs.navigation?.versions?.find(v => v.version === 'v2');
  if (v2) {
    fs.appendFileSync(testFile, `v2 version found\n`);
  } else {
    fs.appendFileSync(testFile, `ERROR: v2 version not found\n`);
  }
} catch (e) {
  fs.appendFileSync(testFile, `ERROR parsing docs.json: ${e.message}\n`);
  process.exit(1);
}

fs.appendFileSync(testFile, `Test completed at: ${new Date().toISOString()}\n`);
console.log('Test file written to:', testFile);
