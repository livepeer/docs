#!/usr/bin/env node
/**
 * @script      validate-ai-tools-registry
 * @type        validator
 * @concern     governance
 * @niche       compliance
 * @purpose     
 * @description Validate the AI-tools registry contract and coverage so ownerless governance and AI subsystem inventory stay aligned.
 * @mode        check
 * @pipeline    manual -- bounded validator CLI
 * @scope       operations/scripts, tools/lib/ai/ai-tools-registry.js, ai-tools/registry, operations/scripts/generators/governance/catalogs/generate-ai-tools-registry-artifacts.js, operations/tests/unit/ai-tools-registry.test.js, operations/governance/config/ownerless-governance-surfaces.json, docs-guide/policies/source-of-truth-policy.mdx, docs-guide/catalog/ai-tools.mdx, docs-guide/policies/audit-system-overview.mdx, docs-guide/policies/skill-pipeline-map.mdx
 * @usage       node operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js [--check] [--coverage] [--lanes] [--write-report]
 * @policy      R-R14, R-R29
 */

const {
  DEFAULT_REGISTRY_PATH,
  DEFAULT_REPORT_PATH,
  DEFAULT_SCHEMA_PATH,
  getRepoRoot,
  validateRegistry,
  writeInventoryReport
} = require('../../../../../tools/lib/ai/ai-tools-registry');

function usage() {
  process.stdout.write(
    [
      'Usage: node operations/scripts/validate-ai-tools-registry.js [options]',
      '',
      'Options:',
      '  --check                 Validate the registry contract (default action)',
      '  --coverage              Require full tracked ai-tools coverage',
      '  --lanes                 Run advisory lane-alignment checks',
      '  --write-report          Regenerate ai-tools/registry/ai-tools-inventory.md',
      '  --schema <path>         Override schema path',
      '  --registry <path>       Override registry path',
      '  --report <path>         Override generated report path',
      '  --help                  Show this help message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    check: false,
    coverage: false,
    lanes: false,
    writeReport: false,
    schemaPath: DEFAULT_SCHEMA_PATH,
    registryPath: DEFAULT_REGISTRY_PATH,
    reportPath: DEFAULT_REPORT_PATH
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    if (token === '--check') {
      args.check = true;
      continue;
    }
    if (token === '--coverage') {
      args.coverage = true;
      continue;
    }
    if (token === '--lanes') {
      args.lanes = true;
      continue;
    }
    if (token === '--write-report') {
      args.writeReport = true;
      continue;
    }
    if (token === '--schema') {
      args.schemaPath = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }
    if (token === '--registry') {
      args.registryPath = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }
    if (token === '--report') {
      args.reportPath = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (!args.check && !args.writeReport) {
    args.check = true;
  }

  return args;
}

function printIssues(label, issues, writer) {
  if (!Array.isArray(issues) || issues.length === 0) return;
  writer(`\n${label}:`);
  issues.forEach((issue) => {
    writer(`- ${issue.file}:${issue.line || 1} [${issue.rule}] ${issue.message}`);
  });
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    return;
  }

  const repoRoot = getRepoRoot();
  const validation = validateRegistry({
    repoRoot,
    schemaPath: args.schemaPath,
    registryPath: args.registryPath,
    checkCoverage: args.coverage,
    checkLanes: args.lanes
  });

  printIssues('Warnings', validation.warnings, console.warn);
  printIssues('Errors', validation.errors, console.error);

  // --write-report split to generators/governance/reports/generate-ai-tools-inventory.js

  console.log(
    `AI-tools registry check complete: ${validation.summary.totalArtifacts || 0} artifacts, ${validation.errors.length} errors, ${validation.warnings.length} warnings`
  );

  if (validation.errors.length > 0) {
    process.exit(1);
  }
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}
