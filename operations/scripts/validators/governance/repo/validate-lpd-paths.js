#!/usr/bin/env node
/**
 * @script      validate-lpd-paths
 * @type        validator
 * @concern     governance
 * @niche       repo
 * @purpose     governance:repo-health
 * @description Validates that every script path referenced in `lpd` exists on disk. Parses the lpd bash CLI for node and script_path invocations and checks each file against the filesystem. Exits non-zero if any path is missing.
 * @mode        read-only
 * @pipeline    manual, ci
 * @scope       lpd (repo root bash CLI)
 * @usage       node operations/scripts/validators/governance/repo/validate-lpd-paths.js [--json]
 * @policy      R-R14
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const LPD_FILE = 'tools/lpd';

function getRepoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

function parseArgs(argv) {
  return {
    json: argv.includes('--json'),
    help: argv.includes('--help') || argv.includes('-h')
  };
}

/**
 * Extract all script paths referenced in the lpd bash file.
 *
 * Two patterns are matched:
 *   1. `node operations/...` or `node tools/...` — bare relative paths after a `node` invocation.
 *      Covers: run_cli_step node ..., cmd=(node ...), direct `node ...` calls.
 *   2. `script_path="$VAR/relative/path"` — variable assignments using $REPO_ROOT or similar.
 *      Covers: launcher script assignments such as `local script_path="$REPO_ROOT/tools/dev/preview/mint-dev.sh"`.
 *
 * @param {string} content - full text of the lpd file
 * @returns {string[]} sorted list of unique relative paths
 */
function extractPaths(content) {
  const refs = new Set();

  // Pattern 1: node <relative-path> where path starts with operations/ or tools/
  // Terminates at whitespace, ), ", or end of string.
  // Matches: plain calls, run_cli_step prefixes, cmd=(...) array syntax.
  const nodeRe = /\bnode\s+((?:operations|tools)\/[^\s"')]+\.js)/g;
  let m;
  while ((m = nodeRe.exec(content)) !== null) {
    refs.add(m[1]);
  }

  // Pattern 2: script_path="$VAR/relative/path" or script_path='$VAR/relative/path'
  // Captures the path after the variable reference.
  // Only match uppercase env var names (e.g. $REPO_ROOT) — not lowercase shell variables
  // like $script_path which are dynamic values, not static paths.
  const scriptPathRe = /script_path=["']\$[A-Z_]+\/([a-z][^"']+)["']/g;
  while ((m = scriptPathRe.exec(content)) !== null) {
    refs.add(m[1]);
  }

  return Array.from(refs).sort();
}

function main() {
  const REPO_ROOT = getRepoRoot();
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log(
      'Usage: node operations/scripts/validators/governance/repo/validate-lpd-paths.js [--json]\n\n' +
      'Reads `lpd` at the repo root, extracts all referenced script paths, and verifies each exists on disk.\n' +
      'Exit 0 = all paths found. Exit 1 = one or more paths missing.'
    );
    process.exit(0);
  }

  const lpdAbs = path.join(REPO_ROOT, LPD_FILE);

  if (!fs.existsSync(lpdAbs)) {
    const msg = `lpd not found at repo root: ${lpdAbs}`;
    if (args.json) {
      console.log(JSON.stringify({ status: 'error', message: msg, total: 0, found: 0, missing: 0, missingPaths: [], foundPaths: [] }));
    } else {
      console.error(`ERROR: ${msg}`);
    }
    process.exit(1);
  }

  const content = fs.readFileSync(lpdAbs, 'utf8');
  const refs = extractPaths(content);

  const missing = [];
  const found = [];

  for (const ref of refs) {
    const abs = path.join(REPO_ROOT, ref);
    if (fs.existsSync(abs)) {
      found.push(ref);
    } else {
      missing.push(ref);
    }
  }

  if (args.json) {
    console.log(JSON.stringify({
      status: missing.length > 0 ? 'fail' : 'pass',
      total: refs.length,
      found: found.length,
      missing: missing.length,
      missingPaths: missing,
      foundPaths: found
    }, null, 2));
    process.exit(missing.length > 0 ? 1 : 0);
  }

  console.log(`\nValidating lpd path references — ${refs.length} path(s) found in lpd\n`);

  if (missing.length > 0) {
    console.error(`FAIL — ${missing.length} missing path(s):\n`);
    for (const p of missing) {
      console.error(`  ✗ ${p}`);
    }
    if (found.length > 0) {
      console.log(`\nOK   — ${found.length} path(s) verified`);
    }
    process.exit(1);
  }

  console.log(`PASS — all ${found.length} path(s) verified`);
  process.exit(0);
}

main();
