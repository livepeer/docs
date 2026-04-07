#!/usr/bin/env node
/**
 * @script            check-root-governance-sync
 * @category          validator
 * @type              validator
 * @purpose           governance:root-management
 * @scope             operations/scripts/validators/governance, operations/scripts/generators/governance/root, operations/governance/config, tools/config/runtime, tools/lib/governance, docs-guide/repo-ops/config, .allowlist
 * @owner             docs
 * @needs             R-R14, R-R16, R-R17
 * @purpose-statement Validates that root-governance generated outputs, required documentation references, and public root artifact declarations stay aligned with the canonical manifest.
 * @pipeline          manual, ci
 * @usage             node operations/scripts/validators/governance/compliance/check-root-governance-sync.js [--json]
 */

const fs = require('fs');
const path = require('path');
const {
  getRepoRoot,
  readManifest,
  getRequiredPublicArtifacts
} = require('../../../../../tools/lib/governance/root-governance');
const { getFirstArtifactByPath } = require('../../../../../tools/lib/governance/generated-artifacts');
const {
  buildExpectedOutputs
} = require('../../../generators/governance/root/generate-root-governance-artifacts');

const REPO_ROOT = getRepoRoot();

function normalizeContent(content) {
  return `${String(content || '').trim()}\n`;
}

function parseArgs(argv) {
  const args = { json: false, help: false };
  argv.forEach((token) => {
    if (token === '--json') {
      args.json = true;
      return;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      return;
    }
    throw new Error(`Unknown argument: ${token}`);
  });
  return args;
}

function usage() {
  console.log('Usage: node operations/scripts/validators/governance/compliance/check-root-governance-sync.js [--json]');
}

function run() {
  const manifest = readManifest(REPO_ROOT);
  const outputs = buildExpectedOutputs(manifest);
  const issues = [];

  Object.entries(outputs).forEach(([repoPath, expectedContent]) => {
    const absPath = path.join(REPO_ROOT, repoPath);
    if (!fs.existsSync(absPath)) {
      issues.push({
        type: 'missing_output',
        path: repoPath,
        message: `${repoPath} is missing.`
      });
      return;
    }

    const currentContent = normalizeContent(fs.readFileSync(absPath, 'utf8'));
    if (currentContent !== expectedContent) {
      issues.push({
        type: 'stale_output',
        path: repoPath,
        message: `${repoPath} is stale relative to operations/governance/config/root-governance.json.`
      });
    }
  });

  getRequiredPublicArtifacts(manifest).forEach((entry) => {
    const artifact = getFirstArtifactByPath(entry.path);
    if (!artifact) {
      issues.push({
        type: 'missing_generated_artifact_manifest',
        path: entry.path,
        message: `${entry.path} is missing from operations/governance/config/generated-artifacts.json.`
      });
      return;
    }
    if (artifact.class !== 'committed_authoritative') {
      issues.push({
        type: 'invalid_generated_artifact_class',
        path: entry.path,
        message: `${entry.path} must be classified as committed_authoritative in operations/governance/config/generated-artifacts.json.`
      });
    }
  });

  manifest.entries.forEach((entry) => {
    (entry.doc_refs || []).forEach((docRef) => {
      const absPath = path.join(REPO_ROOT, docRef);
      if (!fs.existsSync(absPath)) {
        issues.push({
          type: 'missing_doc_ref',
          path: docRef,
          message: `Document reference ${docRef} declared by ${entry.path} is missing.`
        });
      }
    });
  });

  return {
    passed: issues.length === 0,
    issues
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    process.exit(0);
  }
  const result = run();
  if (args.json) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } else if (result.issues.length > 0) {
    result.issues.forEach((issue) => console.error(issue.message));
  } else {
    console.log('Root governance sync passed.');
  }
  process.exit(result.passed ? 0 : 1);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`check-root-governance-sync failed: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  run
};
