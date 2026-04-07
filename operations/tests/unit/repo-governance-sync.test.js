#!/usr/bin/env node
/**
 * @script            repo-governance-sync.test
 * @category          validator
 * @type              validator
 * @purpose           qa:repo-health
 * @scope             operations/governance/config, operations/scripts/generators/governance/reports, operations/scripts/validators/governance/compliance, tools/lib/governance, docs-guide/repo-ops/config, workspace/reports/repo-ops
 * @owner             docs
 * @needs             R-R14, R-R16, R-R17, R-R29
 * @purpose-statement Tests the top-level repo-governance registry, generated map and status outputs, and sync validator.
 * @pipeline          manual, P3
 * @usage             node operations/tests/unit/repo-governance-sync.test.js
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const {
  readManifest,
  getApprovalCheckpointIds,
  getProductionApprovalLabels,
  getGithubWorkspaceClassificationCounts,
  getSurfaceIds,
  getActiveGovernanceReports
} = require('../../../tools/lib/governance/repo-governance');
const { readManifest: readAgentWriteManifest } = require('../../../tools/lib/governance/agent-write-governance');
const {
  SCRIPT_PATH,
  buildRepoGovernanceMapContent,
  buildStatusPayload,
  buildStatusJsonContent,
  buildStatusMarkdownContent,
  buildOwnerlessHandoverContent
} = require('../../scripts/generators/governance/reports/generate-repo-governance-status');
const validator = require('../../scripts/validators/governance/compliance/check-repo-governance-sync');

const REPO_ROOT = path.resolve(__dirname, '../../..');

function readRepoFile(repoPath) {
  return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
}

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    const manifest = readManifest(REPO_ROOT);
    assert.strictEqual(manifest.canonical_home, 'operations/governance');
    assert.strictEqual(manifest.bridge_mode, 'retired');
    assert.ok(manifest.canonical_manifests.includes('operations/governance/config/root-governance.json'));
    assert.ok(manifest.canonical_manifests.includes('operations/governance/config/ownerless-governance-surfaces.json'));
    assert.ok(manifest.canonical_manifests.includes('operations/governance/config/governance-approval-policy.json'));
    assert.ok(getSurfaceIds(manifest).includes('repo-governance-registry'));
    assert.ok(getSurfaceIds(manifest).includes('github-workspace-governance'));
  });

  cases.push(async () => {
    const manifest = readManifest(REPO_ROOT);
    const pathClassIds = manifest.path_classes.map((entry) => entry.id);
    const agentOutputIds = manifest.agent_output_classes.map((entry) => entry.id);
    assert.ok(pathClassIds.includes('governance-config'));
    assert.ok(pathClassIds.includes('workspace-local'));
    assert.ok(agentOutputIds.includes('report'));
    assert.ok(agentOutputIds.includes('scratch'));
    assert.ok(agentOutputIds.includes('forbidden'));
    assert.ok(getApprovalCheckpointIds(manifest).includes('design-lock'));
    assert.ok(getApprovalCheckpointIds(manifest).includes('legacy-retirement'));
    assert.ok(getProductionApprovalLabels(manifest).includes('approval:governance-schema'));
    assert.deepStrictEqual(manifest.legacy_bridge_inventory || [], []);
    assert.ok(manifest.github_workspace_surfaces.some((entry) => entry.path === '.github/workspace/framework-canonical.md'));
    assert.ok(manifest.active_governance_reports.includes('workspace/reports/repo-ops/REPAIR_REPORT_LATEST.md'));
  });

  cases.push(async () => {
    const manifest = readAgentWriteManifest(REPO_ROOT);
    assert.strictEqual(manifest.root_policy.undeclared_root_writes, 'forbidden');
    assert.ok(manifest.root_policy.admitted_root_surfaces.includes('ai-tools'));
    assert.ok(manifest.output_classes.some((entry) => entry.id === 'capture'));
    assert.ok(manifest.output_classes.some((entry) => entry.id === 'forbidden'));
  });

  cases.push(async () => {
    const manifest = readManifest(REPO_ROOT);
    const map = buildRepoGovernanceMapContent(manifest);
    assert.ok(map.includes('# Repo Governance Map'));
    assert.ok(map.includes('## Governed Governance Surfaces'));
    assert.ok(map.includes('## Path Classes'));
    assert.ok(map.includes('## Agent Output Classes'));
    assert.ok(map.includes('## Historical Approval Checkpoints'));
    assert.ok(map.includes('## Production Approval Policy'));
    assert.ok(map.includes('## GitHub Workspace Classification'));
    assert.ok(map.includes('## Active Governance Reports'));
  });

  cases.push(async () => {
    const manifest = readManifest(REPO_ROOT);
    const payload = buildStatusPayload(manifest);
    const json = JSON.parse(buildStatusJsonContent(manifest));
    const markdown = buildStatusMarkdownContent(manifest);
    assert.strictEqual(json.bridge_mode, 'retired');
    assert.deepStrictEqual(json.surface_ids, payload.surface_ids);
    assert.deepStrictEqual(json.approval_checkpoint_ids, payload.approval_checkpoint_ids);
    assert.deepStrictEqual(json.production_approval_labels, getProductionApprovalLabels(manifest));
    assert.deepStrictEqual(json.github_workspace_classification_counts, getGithubWorkspaceClassificationCounts(manifest));
    assert.deepStrictEqual(json.legacy_bridge_ids, []);
    assert.deepStrictEqual(json.active_governance_reports, getActiveGovernanceReports(manifest));
    assert.ok(markdown.includes('# Repo Governance Status'));
    assert.ok(markdown.includes('## Rollout States'));
    assert.ok(markdown.includes('## Historical Approval Checkpoints'));
    assert.ok(markdown.includes('## Production Approval Labels'));
    assert.ok(markdown.includes('## GitHub Workspace Classification'));
    assert.ok(markdown.includes('## Active Governance Reports'));
  });

  cases.push(async () => {
    execFileSync('node', [SCRIPT_PATH, '--check'], {
      cwd: REPO_ROOT,
      stdio: 'pipe',
      encoding: 'utf8'
    });
  });

  cases.push(async () => {
    const result = validator.run();
    assert.ok(result.passed, result.issues.map((issue) => issue.message).join('\n'));
  });

  cases.push(async () => {
    const manifest = readManifest(REPO_ROOT);
    assert.ok(fs.existsSync(path.join(REPO_ROOT, 'operations/governance/config/root-governance.json')));
    assert.ok(fs.existsSync(path.join(REPO_ROOT, 'operations/governance/config/generated-artifacts.json')));
    assert.ok(fs.existsSync(path.join(REPO_ROOT, 'operations/governance/config/agent-write-governance.json')));
    assert.ok(fs.existsSync(path.join(REPO_ROOT, 'operations/governance/config/ownerless-governance-surfaces.json')));
    assert.ok(fs.existsSync(path.join(REPO_ROOT, 'operations/governance/config/governance-approval-policy.json')));
    const currentMap = `${readRepoFile(manifest.generated_outputs.map_doc).trim()}\n`;
    const currentStatusJson = readRepoFile(manifest.generated_outputs.status_report_json);
    const currentStatusMd = `${readRepoFile(manifest.generated_outputs.status_report_md).trim()}\n`;
    const currentHandover = `${readRepoFile(manifest.generated_outputs.handover_report_md).trim()}\n`;
    assert.strictEqual(currentMap, buildRepoGovernanceMapContent(manifest));
    assert.strictEqual(currentStatusJson, buildStatusJsonContent(manifest));
    assert.strictEqual(currentStatusMd, buildStatusMarkdownContent(manifest));
    assert.strictEqual(currentHandover, buildOwnerlessHandoverContent(manifest));
  });

  for (let index = 0; index < cases.length; index += 1) {
    const name = `case-${index + 1}`;
    try {
      // eslint-disable-next-line no-await-in-loop
      await cases[index]();
      console.log(`   ✓ ${name}`);
    } catch (error) {
      failures.push(`${name}: ${error.message}`);
    }
  }

  return {
    passed: failures.length === 0,
    total: cases.length,
    errors: failures
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ repo-governance-sync tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} repo-governance-sync test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ repo-governance-sync tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
