#!/usr/bin/env node
/**
 * @script            install-authoring-tools-extension
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tools/scripts, tools/vscode/authoring-tools, .vscode/settings.json
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement VS Code/Cursor authoring tools installer — installs the repo-owned Livepeer authoring extension into local editor extension directories.
 * @pipeline          manual
 * @usage             node tools/scripts/install-authoring-tools-extension.js [--targets vscode,cursor] [--force]
 */

'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execSync } = require('child_process');

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
    targets: ['vscode', 'cursor'],
    force: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--force') {
      args.force = true;
      continue;
    }
    if (token === '--targets') {
      const raw = String(argv[index + 1] || '').trim();
      if (!raw) {
        throw new Error('Missing value for --targets');
      }
      args.targets = raw
        .split(',')
        .map((entry) => entry.trim().toLowerCase())
        .filter(Boolean);
      index += 1;
      continue;
    }
    if (token.startsWith('--targets=')) {
      args.targets = token
        .slice('--targets='.length)
        .split(',')
        .map((entry) => entry.trim().toLowerCase())
        .filter(Boolean);
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }

  return args;
}

function copyDir(sourceDir, targetDir) {
  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });
  fs.mkdirSync(targetDir, { recursive: true });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      copyDir(sourcePath, targetPath);
      continue;
    }

    fs.copyFileSync(sourcePath, targetPath);
  }
}

function removeDirIfExists(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  fs.rmSync(dirPath, { recursive: true, force: true });
}

function getTargetDirectories(homeDir) {
  return {
    vscode: path.join(homeDir, '.vscode', 'extensions'),
    cursor: path.join(homeDir, '.cursor', 'extensions')
  };
}

function getInstalledExtensionDir(baseDir, editor) {
  if (editor === 'cursor') {
    return path.join(baseDir, 'livepeer.livepeer-authoring-tools-0.0.1-universal');
  }
  return path.join(baseDir, 'livepeer.livepeer-authoring-tools-0.0.1');
}

function main() {
  const repoRoot = getRepoRoot();
  const args = parseArgs(process.argv.slice(2));
  const sourceDir = path.join(repoRoot, 'tools', 'vscode', 'authoring-tools');
  const homeDir = os.homedir();
  const targetDirectories = getTargetDirectories(homeDir);

  if (!fs.existsSync(path.join(sourceDir, 'package.json'))) {
    throw new Error(`Authoring extension source not found: ${sourceDir}`);
  }

  const installed = [];
  args.targets.forEach((target) => {
    const baseDir = targetDirectories[target];
    if (!baseDir) {
      throw new Error(`Unsupported target: ${target}`);
    }

    fs.mkdirSync(baseDir, { recursive: true });
    const installDir = getInstalledExtensionDir(baseDir, target);

    if (fs.existsSync(installDir)) {
      if (!args.force) {
        removeDirIfExists(installDir);
      } else {
        removeDirIfExists(installDir);
      }
    }

    copyDir(sourceDir, installDir);
    installed.push(installDir);
  });

  installed.forEach((dirPath) => {
    console.log(dirPath);
  });
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
