#!/usr/bin/env node
/**
 * @script            vsix-parity
 * @category          validator
 * @purpose           tooling:dev-tools
 * @scope             tools/editor-extensions, operations/tests/unit
 * @owner             docs
 * @needs             E-C6, R-R29
 * @purpose-statement VSIX parity helper — verifies that a checked-in VS Code extension package matches the current governed source files before install or validation.
 * @pipeline          P1, P3
 * @usage             node tools/editor-extensions/lib/vsix-parity.js --extension tools/editor-extensions/lpd-mdx-preview [--json]
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { globSync } = require('glob');

const README_ENTRY = 'extension/readme.md';
const LICENSE_ENTRY = 'extension/LICENSE.txt';

function normalizeRelativePath(filePath) {
  return String(filePath).split(path.sep).join('/');
}

function resolveExtensionDir(extensionDir) {
  if (!extensionDir) {
    throw new Error('Missing required extension directory');
  }
  return path.resolve(extensionDir);
}

function loadPackageJson(extensionDir) {
  const packageJsonPath = path.join(extensionDir, 'package.json');
  return JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
}

function findVsixPath(extensionDir) {
  const entries = fs
    .readdirSync(extensionDir)
    .filter((entry) => entry.endsWith('.vsix'))
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }));

  if (entries.length === 0) {
    return null;
  }

  return path.join(extensionDir, entries[entries.length - 1]);
}

function expandFilesField(extensionDir, patterns) {
  const files = new Set();

  for (const pattern of patterns) {
    const matches = globSync(pattern, {
      cwd: extensionDir,
      dot: true,
      nodir: true
    });

    if (matches.length === 0 && fs.existsSync(path.join(extensionDir, pattern))) {
      files.add(normalizeRelativePath(pattern));
      continue;
    }

    matches.forEach((match) => files.add(normalizeRelativePath(match)));
  }

  return [...files].sort();
}

function toVsixEntryPath(sourceRelativePath) {
  if (sourceRelativePath === 'README.md') {
    return README_ENTRY;
  }
  if (sourceRelativePath === 'LICENSE') {
    return LICENSE_ENTRY;
  }
  return `extension/${sourceRelativePath}`;
}

function listVsixEntries(vsixPath) {
  const result = spawnSync('unzip', ['-Z1', vsixPath], {
    encoding: 'utf8',
    maxBuffer: 20 * 1024 * 1024
  });

  if (result.status !== 0) {
    throw new Error(`Failed to list VSIX contents for ${vsixPath}: ${String(result.stderr || result.stdout).trim()}`);
  }

  return String(result.stdout || '')
    .split(/\r?\n/)
    .map((entry) => entry.trim())
    .filter(Boolean)
    .filter((entry) => entry.startsWith('extension/'))
    .filter((entry) => !entry.endsWith('/'))
    .sort();
}

function readVsixEntry(vsixPath, entryPath) {
  const result = spawnSync('unzip', ['-p', vsixPath, entryPath], {
    encoding: null,
    maxBuffer: 50 * 1024 * 1024
  });

  if (result.status !== 0) {
    throw new Error(`Failed to read ${entryPath} from ${vsixPath}: ${String(result.stderr || result.stdout).trim()}`);
  }

  return Buffer.from(result.stdout || Buffer.alloc(0));
}

function compareExtensionVsix(extensionDir, options = {}) {
  const resolvedExtensionDir = resolveExtensionDir(extensionDir);
  const packageJson = loadPackageJson(resolvedExtensionDir);
  const vsixPath = options.vsixPath ? path.resolve(options.vsixPath) : findVsixPath(resolvedExtensionDir);

  if (!vsixPath) {
    return {
      extensionDir: resolvedExtensionDir,
      extensionName: packageJson.name,
      vsixPath: null,
      passed: false,
      missingVsix: true,
      sourceFiles: [],
      expectedEntries: [],
      actualEntries: [],
      missingEntries: [],
      extraEntries: [],
      mismatches: []
    };
  }

  const sourceFiles = expandFilesField(resolvedExtensionDir, packageJson.files || []);
  const expectedEntries = sourceFiles.map((sourceFile) => toVsixEntryPath(sourceFile));
  const actualEntries = listVsixEntries(vsixPath);

  const actualSet = new Set(actualEntries);
  const expectedSet = new Set(expectedEntries);

  const missingEntries = expectedEntries.filter((entry) => !actualSet.has(entry));
  const extraEntries = actualEntries.filter((entry) => !expectedSet.has(entry));
  const mismatches = [];

  for (const sourceFile of sourceFiles) {
    const sourcePath = path.join(resolvedExtensionDir, sourceFile);
    const entryPath = toVsixEntryPath(sourceFile);
    if (!actualSet.has(entryPath)) {
      continue;
    }

    const sourceContent = fs.readFileSync(sourcePath);
    const packagedContent = readVsixEntry(vsixPath, entryPath);

    if (!sourceContent.equals(packagedContent)) {
      mismatches.push({
        sourceFile,
        entryPath
      });
    }
  }

  return {
    extensionDir: resolvedExtensionDir,
    extensionName: packageJson.name,
    vsixPath,
    passed: missingEntries.length === 0 && extraEntries.length === 0 && mismatches.length === 0,
    missingVsix: false,
    sourceFiles,
    expectedEntries,
    actualEntries,
    missingEntries,
    extraEntries,
    mismatches
  };
}

function formatResult(result) {
  const lines = [];

  if (result.missingVsix) {
    lines.push(`VSIX missing for ${result.extensionName} (${result.extensionDir})`);
    return lines.join('\n');
  }

  if (result.passed) {
    lines.push(`VSIX parity OK for ${result.extensionName}`);
    lines.push(`  source: ${result.extensionDir}`);
    lines.push(`  package: ${result.vsixPath}`);
    return lines.join('\n');
  }

  lines.push(`VSIX parity failed for ${result.extensionName}`);
  lines.push(`  source: ${result.extensionDir}`);
  lines.push(`  package: ${result.vsixPath}`);

  if (result.missingEntries.length > 0) {
    lines.push(`  missing packaged entries: ${result.missingEntries.join(', ')}`);
  }
  if (result.extraEntries.length > 0) {
    lines.push(`  unexpected packaged entries: ${result.extraEntries.join(', ')}`);
  }
  if (result.mismatches.length > 0) {
    lines.push(
      `  content mismatches: ${result.mismatches.map((entry) => `${entry.sourceFile} -> ${entry.entryPath}`).join(', ')}`
    );
  }

  return lines.join('\n');
}

function parseArgs(argv) {
  const args = {
    extensionDir: null,
    json: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--json') {
      args.json = true;
      continue;
    }
    if (token === '--extension') {
      args.extensionDir = argv[index + 1] || null;
      index += 1;
      continue;
    }
    if (token.startsWith('--extension=')) {
      args.extensionDir = token.slice('--extension='.length);
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }

  if (!args.extensionDir) {
    throw new Error('Usage: node tools/editor-extensions/lib/vsix-parity.js --extension <dir> [--json]');
  }

  return args;
}

if (require.main === module) {
  try {
    const args = parseArgs(process.argv.slice(2));
    const result = compareExtensionVsix(args.extensionDir);
    if (args.json) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      console.log(formatResult(result));
    }
    process.exit(result.passed ? 0 : 1);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = {
  compareExtensionVsix,
  expandFilesField,
  findVsixPath,
  formatResult,
  listVsixEntries,
  loadPackageJson,
  parseArgs,
  readVsixEntry,
  toVsixEntryPath
};
