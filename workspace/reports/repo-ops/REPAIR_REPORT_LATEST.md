# Governance Repair Report

- Date: 2026-05-22T06:37:20.247Z
- Mode: fix
- Verification: FAIL (rolled back at stage REPAIR)

## Pre Repair

- Total scripts: 4
- Grade A/B/C/F: 0/0/1/3
- Pipeline mismatches: 4
- Not in JSON: 0
- Phantom JSON: 0

## Repairs Applied

- Total fixes: 8
- JSON phantoms removed: 0
- JSON entries added: 0
- JSON entries updated: 4
- Header category added: 0
- Header purpose added: 0
- Header domain added: 4
- Header script added: 0
- Header usage added: 0
- Header scope added: 0
- Header needs added: 0
- Header purpose-statement added: 0
- Header pipeline corrected: 0
- Indexes regenerated: true

### Files Modified

- .githooks/script-index.md
- .github/script-index.md
- docs-guide/catalog/scripts-catalog.mdx
- docs-guide/indexes/scripts-index.mdx
- operations/scripts/dispatch/governance/dispatch-folder-allowlist.js
- operations/scripts/script-index.md
- operations/tests/integration/dispatch-concern-simulation.js
- operations/tests/integration/pipeline-functional-tests.js
- operations/tests/integration/pipeline-smoke-test.js
- operations/tests/script-index.md
- tools/config/registry/script-index.md
- tools/config/registry/script-registry.json
- tools/dev/script-index.md
- tools/lib/script-index.md
- workspace/scripts/script-index.md

## Post Repair

- Total scripts: 4
- Grade A/B/C/F: 0/0/1/3
- Pipeline mismatches: 4
- Not in JSON: 0
- Phantom JSON: 0

## Needs Human

- operations/scripts/dispatch/governance/dispatch-folder-allowlist.js: @category, @purpose, @scope, @pipeline
- operations/tests/integration/dispatch-concern-simulation.js: @purpose, @scope, @pipeline
- operations/tests/integration/pipeline-functional-tests.js: @purpose, @pipeline
- operations/tests/integration/pipeline-smoke-test.js: @purpose, @scope, @pipeline

## Warnings

- REPAIR ROLLED BACK: verification failed at stage REPAIR

## Improvement

- Grade A delta: +0
- Grade F delta: +0
- Fixes applied: 8
- Remaining human items: 4

