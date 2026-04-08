#!/usr/bin/env node
/**
 * @script      check-repo-governance-sync
 * @type        
 * @concern     
 * @niche       
 * @purpose     governance:ownerless-governance
 * @description Validates the canonical repo-governance registry, generated outputs, and referenced ownerless steady-state paths.
 * @mode        read-only
 * @pipeline    manual, pr-changed -> repo-governance registry -> exit-code, stdout:violations
 * @scope       operations/governance/config, operations/scripts/generators/governance/reports, operations/scripts/validators/governance/compliance, tools/lib/governance, docs-guide/repo-ops/config, workspace/reports/repo-ops
 * @usage       node operations/scripts/validators/governance/compliance/check-repo-governance-sync.js [--json]
 * @policy      R-R14, R-R16, R-R17, R-R29
 */

const fs = require('fs');
const path = require('path');
const { getRepoRoot, readManifest } = require('../../../../../tools/lib/governance/repo-governance');
const { readManifest: readAgentWriteManifest } = require('../../../../../tools/lib/governance/agent-write-governance');
const {
  buildExpectedOutputs
} = require('../../../generators/governance/reports/generate-repo-governance-status');

const REPO_ROOT = getRepoRoot();

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
  console.log('Usage: node operations/scripts/validators/governance/compliance/check-repo-governance-sync.js [--json]');
}

function normalizeContent(content) {
  return `${String(content || '').trim()}\n`;
}

function addIssue(issues, type, repoPath, message) {
  issues.push({ type, path: repoPath, message });
}

function checkReferencedPaths(manifest, issues) {
  manifest.canonical_manifests.forEach((repoPath) => {
    if (!fs.existsSync(path.join(REPO_ROOT, repoPath))) {
      addIssue(issues, 'missing_canonical_manifest', repoPath, `${repoPath} is missing.`);
    }
  });

  manifest.surfaces.forEach((surface) => {
    ['paths', 'canonical_sources', 'derived_outputs', 'validators', 'doc_refs'].forEach((field) => {
      (surface[field] || []).forEach((repoPath) => {
        if (!repoPath) return;
        if ((field === 'derived_outputs' || field === 'paths') && repoPath.includes('*')) return;
        const absPath = path.join(REPO_ROOT, repoPath);
        if (!fs.existsSync(absPath)) {
          addIssue(
            issues,
            'missing_reference',
            repoPath,
            `${repoPath} referenced by surface ${surface.id} (${field}) is missing.`
          );
        }
      });
    });
  });

  (manifest.github_workspace_surfaces || []).forEach((entry) => {
    const absPath = path.join(REPO_ROOT, entry.path);
    if (!fs.existsSync(absPath)) {
      addIssue(
        issues,
        'missing_github_workspace_reference',
        entry.path,
        `${entry.path} referenced by github_workspace_surfaces is missing.`
      );
    }
  });

}

function checkProductionApprovalPolicy(manifest, issues) {
  const policy = manifest.production_approval_policy || {};
  [policy.manifest, policy.pr_template, policy.validator].forEach((repoPath) => {
    if (!repoPath) return;
    if (!fs.existsSync(path.join(REPO_ROOT, repoPath))) {
      addIssue(issues, 'missing_approval_policy_reference', repoPath, `${repoPath} required by production_approval_policy is missing.`);
    }
  });
}

function checkActiveGovernanceReports(manifest, issues) {
  const retiredRuntimePattern = /tools\/config\/runtime\//;
  (manifest.active_governance_reports || []).forEach((repoPath) => {
    const absPath = path.join(REPO_ROOT, repoPath);
    if (!fs.existsSync(absPath)) {
      addIssue(issues, 'missing_active_report', repoPath, `${repoPath} declared in active_governance_reports is missing.`);
      return;
    }
    const content = fs.readFileSync(absPath, 'utf8');
    if (retiredRuntimePattern.test(content)) {
      addIssue(
        issues,
        'retired_runtime_reference',
        repoPath,
        `${repoPath} still references retired legacy runtime-governance paths.`
      );
    }
  });
}

function checkGithubWorkspaceRuntimeReferences(manifest, issues) {
  const approvedActive = new Set(
    (manifest.github_workspace_surfaces || [])
      .filter((entry) => entry.classification === 'transitional-runtime' || entry.classification === 'generated-support')
      .map((entry) => entry.path)
  );

  manifest.surfaces.forEach((surface) => {
    (surface.canonical_sources || []).forEach((repoPath) => {
      if (!repoPath.startsWith('.github/workspace/')) return;
      if (!approvedActive.has(repoPath)) {
        addIssue(
          issues,
          'unapproved_workspace_runtime_source',
          repoPath,
          `${repoPath} is referenced as an active canonical source by surface ${surface.id} but is not an approved transitional/generated-support workspace path.`
        );
      }
    });
  });
}

function run() {
  const manifest = readManifest(REPO_ROOT);
  const issues = [];
  const outputs = buildExpectedOutputs(manifest);

  Object.entries(outputs).forEach(([repoPath, expectedContent]) => {
    const absPath = path.join(REPO_ROOT, repoPath);
    if (!fs.existsSync(absPath)) {
      addIssue(issues, 'missing_output', repoPath, `${repoPath} is missing.`);
      return;
    }
    const currentContent = normalizeContent(fs.readFileSync(absPath, 'utf8'));
    if (currentContent !== expectedContent) {
      addIssue(issues, 'stale_output', repoPath, `${repoPath} is stale relative to operations/governance/config/repo-governance-surfaces.json.`);
    }
  });

  checkReferencedPaths(manifest, issues);
  checkProductionApprovalPolicy(manifest, issues);
  checkActiveGovernanceReports(manifest, issues);
  checkGithubWorkspaceRuntimeReferences(manifest, issues);
  try {
    readAgentWriteManifest(REPO_ROOT);
  } catch (error) {
    addIssue(
      issues,
      'invalid_agent_write_manifest',
      'operations/governance/config/agent-write-governance.json',
      `operations/governance/config/agent-write-governance.json is invalid: ${error.message}`
    );
  }

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
    console.log('Repo governance sync passed.');
  }
  process.exit(result.passed ? 0 : 1);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`check-repo-governance-sync failed: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  run
};
