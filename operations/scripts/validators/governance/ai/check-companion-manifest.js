/**
 * CDA-6: AI Companion Manifest Checker
 *
 * Validates that docs-guide/catalog/ai-companion-manifest.json is consistent
 * with the component registry's aiDiscoverability fields.
 *
 * Checks:
 *   1. Every component with aiDiscoverability 'snapshot' or 'props-extracted'
 *      has at least one entry in the manifest.
 *   2. Every companionPath listed in the manifest exists on disk.
 *
 * Usage:
 *   node operations/scripts/validators/governance/ai/check-companion-manifest.js
 *   node operations/scripts/validators/governance/ai/check-companion-manifest.js --check
 *   node operations/scripts/validators/governance/ai/check-companion-manifest.js --report
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../../../..');
const REGISTRY_PATH = path.join(ROOT, 'docs-guide/component-registry.json');
const MANIFEST_PATH = path.join(ROOT, 'docs-guide/catalog/ai-companion-manifest.json');

const args = {
  check: process.argv.includes('--check'),
  report: process.argv.includes('--report'),
};

// ─── Load inputs ────────────────────────────────────────────────────────────

if (!fs.existsSync(REGISTRY_PATH)) {
  console.error(`❌ Registry not found: ${REGISTRY_PATH}`);
  process.exit(1);
}
if (!fs.existsSync(MANIFEST_PATH)) {
  console.error(`❌ Manifest not found: ${MANIFEST_PATH}`);
  process.exit(1);
}

const registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));

// ─── Build lookup sets ───────────────────────────────────────────────────────

// Components in registry that require companion files
const registryCompanionComponents = registry.components
  .filter(c => c.aiDiscoverability === 'snapshot' || c.aiDiscoverability === 'props-extracted')
  .map(c => c.name);

// Unique component names in manifest (both active and pending entries count as acknowledged)
const manifestComponentNames = new Set([
  ...(manifest.companions || []).map(c => c.sourceComponent),
  ...(manifest.pendingCompanions || []).map(c => c.sourceComponent),
]);

// ─── Run checks ─────────────────────────────────────────────────────────────

const issues = [];

// Check 1: Registry components with snapshot/props-extracted must have a manifest entry
for (const name of registryCompanionComponents) {
  if (!manifestComponentNames.has(name)) {
    issues.push({
      type: 'missing-manifest-entry',
      message: `Component '${name}' has aiDiscoverability set but no manifest entry`,
    });
  }
}

// Check 2: All companionPaths in manifest must exist on disk
for (const companion of manifest.companions || []) {
  const fullPath = path.join(ROOT, companion.companionPath);
  if (!fs.existsSync(fullPath)) {
    issues.push({
      type: 'missing-companion-file',
      message: `Companion file not found on disk: ${companion.companionPath} (sourceComponent: ${companion.sourceComponent})`,
    });
  }
}

// ─── Report ─────────────────────────────────────────────────────────────────

const companionCount = (manifest.companions || []).length;
const registryCount = registryCompanionComponents.length;

if (args.report || !args.check) {
  console.log(`\n════ CDA-6: AI Companion Manifest Check ════`);
  console.log(`Registry components requiring companions: ${registryCount}`);
  console.log(`Manifest entries: ${companionCount}`);
  console.log(`Issues found: ${issues.length}`);

  if (issues.length > 0) {
    console.log(`\nIssues:`);
    issues.forEach(issue => console.log(`  ❌ [${issue.type}] ${issue.message}`));
  } else {
    console.log(`\n  ✅ Manifest is consistent with registry`);
  }
}

if (args.check) {
  if (issues.length > 0) {
    console.error(`\n❌ Companion manifest check failed: ${issues.length} issue(s)`);
    issues.forEach(issue => console.error(`  - ${issue.message}`));
    process.exit(1);
  } else {
    console.log(`✅ Companion manifest check passed (${companionCount} entries, ${registryCount} registry components)`);
  }
}
