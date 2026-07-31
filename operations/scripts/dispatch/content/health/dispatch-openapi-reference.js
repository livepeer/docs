#!/usr/bin/env node
/**
 * @script      dispatch-openapi-reference
 * @type        dispatch
 * @concern     health
 * @niche       openapi-reference
 * @purpose     Pipeline dispatcher for OpenAPI reference drift (full lifecycle)
 * @description Wraps the existing OpenAPI audit + reference regen flow. PR mode: drift check only. Scheduled: full audit + open PR if drift. Manual: regenerate reference docs from canonical spec.
 * @mode        dispatch
 * @pipeline    P3 (PR), P5/P6 (scheduled), manual
 * @scope       v2/api-reference, openapi specs
 * @usage       node operations/scripts/dispatch/content/health/dispatch-openapi-reference.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify]
 * @policy      D-GOV-03
 */
'use strict';
const fs = require('fs');
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const ATOMICS = {
  audit: path.join(REPO_ROOT, 'operations/tests/integration/openapi-reference-audit.js'),
  repair: path.join(REPO_ROOT, 'operations/scripts/remediators/content/health/repair-openapi-reference.js'),
};

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-openapi-reference.js', 'OpenAPI reference'); process.exit(0); }
  const auditCode = fs.existsSync(ATOMICS.audit) ? runAtomic(ATOMICS.audit, []).exitCode : 0;
  if (args.mode === 'pr') process.exit(auditCode);
  if (args.write && fs.existsSync(ATOMICS.repair)) {
    runAtomic(ATOMICS.repair, ['--write', '--verify']);
  }
  process.exit(auditCode);
}
main();
