#!/usr/bin/env node
/**
 * One-time fix: updates @usage paths to current locations and cleans @pipeline duplicates.
 * @script      fix-usage-paths
 * @type        remediator
 * @description fix usage paths
 * @mode        edit
 * @scope       operations/scripts/remediators/governance/scaffold
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO = process.cwd();
const raw = execSync(
  "find tools/scripts .githooks tools/dev -type f \\( -name '*.js' -o -name '*.sh' -o -name '*.py' \\) | grep -v node_modules | grep -v x-archive | grep -v '/test/' | grep -v '/lib/' | grep -v '.test.'",
  { encoding: 'utf8' }
);
const allFiles = raw.trim().split('\n').filter(Boolean);

let fixed = 0;
for (const f of allFiles) {
  const ext = path.extname(f);
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  // Fix @usage to use correct current path
  if (ext === '.js') {
    const n = content.replace(/(\*\s*@usage\s+)node\s+\S+/, '$1node ' + f);
    if (n !== content) { content = n; changed = true; }
  }
  if (ext === '.sh') {
    const n = content.replace(/(#\s*@usage\s+)bash\s+\S+/, '$1bash ' + f);
    if (n !== content) { content = n; changed = true; }
  }
  if (ext === '.py') {
    const n = content.replace(/(#\s*@usage\s+)python3?\s+\S+/, '$1python3 ' + f);
    if (n !== content) { content = n; changed = true; }
  }

  // Fix @pipeline duplicates like 'manual, manual'
  const p = content.replace(/@pipeline\s+manual,\s*manual/g, '@pipeline    manual');
  if (p !== content) { content = p; changed = true; }

  if (changed) {
    fs.writeFileSync(f, content);
    console.log('  ✓ ' + f);
    fixed++;
  }
}
console.log('\nFixed ' + fixed + ' files');
