#!/usr/bin/env node
/**
 * @script      repair-openapi-reference
 * @type        remediator
 * @concern     health
 * @niche       openapi-reference
 * @purpose     Regenerate OpenAPI reference docs from canonical spec source, open PR on drift
 * @description Pairs with openapi-reference-audit. On detected drift between live API spec and committed reference docs, invokes generate-api-docs.sh against each tracked spec to regenerate the v2 API reference pages. PR is opened by the workflow layer after successful regen.
 * @mode        repair
 * @pipeline    P6 / manual via dispatch-openapi-reference.js
 * @scope       v2/gateways/.../api-reference/, ai/worker/api/openapi.yaml
 * @usage       node operations/scripts/remediators/content/health/repair-openapi-reference.js [--dry-run|--write]
 * @policy      D-GOV-03 (paired remediator)
 */

'use strict';

const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const GEN_SCRIPT = path.join(REPO_ROOT, 'operations/scripts/generators/content/reference/generate-api-docs.sh');

// Canonical OpenAPI specs to regenerate from (per existing workflow config).
const SPECS = [
  { spec: 'ai/worker/api/openapi.yaml', output: 'v2/gateways/guides-references/api-reference/AI-API', name: 'AI API' },
];

function parseArgs(argv) {
  const args = { write: false };
  for (const t of argv) if (t === '--write') args.write = true;
  return args;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(GEN_SCRIPT)) {
    console.log('repair-openapi-reference: generate-api-docs.sh missing. Phase 3.X: ensure OpenAPI tooling installed in CI runner.');
    process.exit(0);
  }
  let regenerated = 0;
  for (const { spec, output, name } of SPECS) {
    const specAbs = path.join(REPO_ROOT, spec);
    if (!fs.existsSync(specAbs)) {
      console.log(`repair-openapi-reference: spec missing ${spec} (skip)`);
      continue;
    }
    console.log(`${args.write ? 'regenerating' : 'would regenerate'} ${name} from ${spec} -> ${output}`);
    if (args.write) {
      const result = spawnSync('bash', [GEN_SCRIPT, spec, output, name], { stdio: 'inherit', cwd: REPO_ROOT });
      if (result.status === 0) regenerated += 1;
    }
  }
  console.log(`\nrepair-openapi-reference: ${args.write ? 'regenerated' : 'previewed'} ${args.write ? regenerated : SPECS.length} reference doc set(s).`);
  process.exit(0);
}

main();
