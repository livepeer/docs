#!/usr/bin/env node
/**
 * @script      check-broken-links
 * @type        validator
 * @concern     health
 * @niche       page-rendering
 * @purpose     First-party broken-link check (replaces Mintlify integration for advisory PR checks)
 * @description Delegates to page-links-audit.js which already implements the canonical link health check across v2 pages. This script provides the canonical entry point so dispatchers can call check-broken-links by stable name.
 * @mode        check
 * @pipeline    P3 via dispatch-page-rendering.js
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/validators/content/health/check-broken-links.js [--files <paths>|--staged|--full]
 * @policy      D-GOV-03
 */

'use strict';

const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const ATOMIC = path.join(REPO_ROOT, 'operations/scripts/audits/content/health/page-links-audit.js');

if (!fs.existsSync(ATOMIC)) {
  console.log('check-broken-links: page-links-audit.js missing');
  process.exit(2);
}

// Translate dispatcher-conventional flags to page-links-audit's CLI surface.
const argv = process.argv.slice(2);
const passthrough = [];
for (let i = 0; i < argv.length; i += 1) {
  const t = argv[i];
  if (t === '--dry-run') continue; // page-links-audit is read-only; --dry-run is implicit
  if (t === '--staged') { passthrough.push('--staged'); continue; }
  if (t === '--full' || t === '--scope') { passthrough.push('--scope', 'repo'); continue; }
  if (t === '--files') { passthrough.push('--files', argv[i + 1]); i += 1; continue; }
  passthrough.push(t);
}
const result = spawnSync(process.execPath, [ATOMIC, ...passthrough], { stdio: 'inherit', cwd: REPO_ROOT });
process.exit(result.status || 0);
