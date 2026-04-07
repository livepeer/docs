#!/usr/bin/env node
/**
 * @script            imports.test
 * @category          validator
 * @type              validator
 * @concern           content
 * @niche             health
 * @purpose           qa:import-integrity
 * @description       Compatibility wrapper for page-imports-audit.js that preserves the legacy imports.test surface while delegating to the canonical operations audit.
 * @mode              execute
 * @scope             tests/unit, operations/scripts/audits/content/health
 * @domain            docs
 * @needs             E-R12, E-R14
 * @purpose-statement Compatibility wrapper for page-imports-audit.js — preserves the legacy imports.test interface while delegating to the canonical operations audit.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/imports.test.js [--dry-run] [--scope routable-v2|repo] [--staged] [--files <paths>]
 * @policy            E-R12, E-R14
 */

const canonical = require('../../scripts/audits/content/health/page-imports-audit');

function runTests(options = {}) {
  const parsed = canonical.parseArgs([]);
  parsed.stagedOnly = options.stagedOnly === true;
  parsed.scope = options.scope || parsed.scope;
  parsed.dryRun = options.dryRun === true;
  parsed.files = Array.isArray(options.files) ? options.files.map(String) : [];

  const result = canonical.runAudit({
    parsedArgs: parsed,
    skipWriteReports: true
  });

  return {
    errors: result.findings,
    warnings: result.warnings,
    passed: result.findings.length === 0,
    total: result.fileCount,
    scope: parsed.scope,
    dryRun: parsed.dryRun
  };
}

function runCli(argv = process.argv.slice(2)) {
  return canonical.runCli(argv, { strictDefault: true });
}

if (require.main === module) {
  process.exit(runCli(process.argv.slice(2)));
}

module.exports = {
  ...canonical,
  runTests,
  runCli
};
