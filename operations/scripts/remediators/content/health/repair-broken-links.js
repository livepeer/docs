#!/usr/bin/env node
/**
 * @script      repair-broken-links
 * @type        remediator
 * @concern     health
 * @niche       page-rendering
 * @purpose     Repair broken internal links by recomputing canonical paths from docs.json
 * @description Pairs with check-broken-links. Reads page-links-audit findings, attempts canonical path rewrites for internal v2/ links that match a moved/renamed page registered in docs.json. External link repairs (redirect resolution) are not in scope here.
 * @mode        repair
 * @pipeline    P6 / manual via dispatch-page-rendering.js
 * @scope       v2 MDX pages (internal links only)
 * @usage       node operations/scripts/remediators/content/health/repair-broken-links.js [--dry-run|--write] [--files <paths>|--staged]
 * @policy      D-GOV-03 (paired remediator)
 */

'use strict';

const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const ATOMIC = path.join(REPO_ROOT, 'operations/scripts/remediators/content/repair/repair-page-links.js');

if (!fs.existsSync(ATOMIC)) {
  console.log('repair-broken-links: repair-page-links.js missing');
  process.exit(2);
}

// Translate dispatcher-conventional flags to repair-page-links's CLI surface.
const argv = process.argv.slice(2);
const passthrough = [];
for (let i = 0; i < argv.length; i += 1) {
  const t = argv[i];
  if (t === '--staged') {
    try {
      const { execSync } = require('child_process');
      const staged = execSync('git diff --cached --name-only --diff-filter=ACMRT', { encoding: 'utf8', cwd: REPO_ROOT })
        .split('\n').filter((f) => f.startsWith('v2/') && f.endsWith('.mdx')).join(',');
      if (staged) { passthrough.push('--files', staged); }
      else { console.log('repair-broken-links: no staged v2 MDX files.'); process.exit(0); }
    } catch { process.exit(0); }
    continue;
  }
  passthrough.push(t);
}
const result = spawnSync(process.execPath, [ATOMIC, ...passthrough], { stdio: 'inherit', cwd: REPO_ROOT });
process.exit(result.status || 0);
