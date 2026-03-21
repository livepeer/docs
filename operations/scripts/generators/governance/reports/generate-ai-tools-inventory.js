#!/usr/bin/env node
/**
 * @script      generate-ai-tools-inventory
 * @type        generator
 * @concern     governance
 * @niche       reports
 * @purpose     governance:ai-tools-inventory
 * @description Generates the AI tools inventory report from the registry. Split from validate-ai-tools-registry.js.
 * @mode        generate
 * @pipeline    manual
 * @scope       ai-tools/registry
 * @usage       node operations/scripts/generators/governance/reports/generate-ai-tools-inventory.js [--output <path>]
 * @policy      R-R16
 */

const path = require('path');
const {
  validateFullRegistry,
  writeInventoryReport
} = require('../../../../../tools/lib/ai-tools-registry');

const REPO_ROOT = process.cwd();

function main() {
  const reportPath = process.argv.includes('--output')
    ? process.argv[process.argv.indexOf('--output') + 1]
    : 'ai-tools/registry/ai-tools-inventory.md';

  const validation = validateFullRegistry(REPO_ROOT);

  if (!validation.registry) {
    console.error('❌ Cannot generate inventory: registry failed to load.');
    process.exit(1);
  }

  const changed = writeInventoryReport(REPO_ROOT, validation.registry, validation, reportPath);
  console.log(
    changed
      ? `Updated generated inventory report: ${reportPath}`
      : `Generated inventory report already up to date: ${reportPath}`
  );
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = { main };
