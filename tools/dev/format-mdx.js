#!/usr/bin/env node
/**
 * @script            format-mdx
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tools/scripts, tools/vscode/authoring-tools, tests/unit
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement MDX formatter — applies the repo-owned conservative MDX formatter used by the Livepeer authoring extension.
 * @pipeline          manual
 * @usage             node tools/scripts/format-mdx.js [--check|--write] [--files a,b]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { formatMdxContent } = require('../vscode/authoring-tools/lib/authoring-core');

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', {
      cwd: process.cwd(),
      encoding: 'utf8'
    }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function parseArgs(argv) {
  const args = {
    mode: 'check',
    files: []
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--write') {
      args.mode = 'write';
      continue;
    }
    if (token === '--check') {
      args.mode = 'check';
      continue;
    }
    if (token === '--files') {
      const raw = String(argv[index + 1] || '').trim();
      if (!raw) throw new Error('Missing value for --files');
      raw
        .split(',')
        .map((entry) => entry.trim())
        .filter(Boolean)
        .forEach((entry) => args.files.push(entry));
      index += 1;
      continue;
    }
    if (token.startsWith('--files=')) {
      token
        .slice('--files='.length)
        .split(',')
        .map((entry) => entry.trim())
        .filter(Boolean)
        .forEach((entry) => args.files.push(entry));
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }

  return args;
}

function collectMdxFiles(repoRoot, explicitFiles) {
  if (explicitFiles.length > 0) {
    return explicitFiles
      .map((entry) => (path.isAbsolute(entry) ? entry : path.join(repoRoot, entry)))
      .filter((absPath) => fs.existsSync(absPath) && fs.statSync(absPath).isFile() && absPath.endsWith('.mdx'));
  }

  const results = [];
  function walk(dirAbs) {
    for (const entry of fs.readdirSync(dirAbs, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (['.git', 'node_modules', '.next', '.venv', '__pycache__'].includes(entry.name)) continue;
        walk(path.join(dirAbs, entry.name));
        continue;
      }
      if (entry.name.endsWith('.mdx')) {
        results.push(path.join(dirAbs, entry.name));
      }
    }
  }

  walk(repoRoot);
  return results.sort((left, right) => left.localeCompare(right));
}

function main() {
  const repoRoot = getRepoRoot();
  const args = parseArgs(process.argv.slice(2));
  const files = collectMdxFiles(repoRoot, args.files);
  const changed = [];

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8');
    const nextContent = formatMdxContent(content);
    if (nextContent === content) continue;

    changed.push(path.relative(repoRoot, filePath).split(path.sep).join('/'));
    if (args.mode === 'write') {
      fs.writeFileSync(filePath, nextContent, 'utf8');
    }
  }

  if (changed.length === 0) {
    console.log(`MDX formatting ${args.mode === 'write' ? 'applied' : 'checked'}: no changes needed.`);
    process.exit(0);
  }

  changed.forEach((entry) => console.log(entry));
  process.exit(args.mode === 'write' ? 0 : 1);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
