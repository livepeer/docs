# Full Script Inventory Audit

Generated: 2026-05-22T06:37:21.942Z
Mode: dry-run
Scan roots: .githooks, .github/scripts, workspace/scripts, operations/tests/unit, operations/tests/integration, operations/tests/utils, operations/tests, operations/scripts, tools/lib, tools/dev, tools/config

## Summary

Total scripts discovered: 4
By trigger category:
- Unmanaged: 0
- Orphaned: 2
- P1 - Commit gate: 0
- P2 - Push gate: 2
- P3 - PR gate: 0
- P5 - Scheduled: 0
- P6 - On-demand: 0
- Indirect - Library: 0
- Manual - CLI only: 0

Grade distribution: A 0 | B 0 | C 1 | F 3
Pipeline verification: MATCH 0 | MISMATCH 4 | MISSING 0
Classification JSON sync: In JSON 4 | Not in JSON 0 | Phantom 0
Output chain summary: 0 chains detected

## Repair

- Mode: dry-run
- Total fixes: 8
- Files modified: 0
- Needs human: 4

## Orphaned

| Path | Category | Purpose | Pipeline claimed | Pipeline actual | Pipeline verdict | Outputs | Triggers downstream? | Scope | Needs | Header completeness | Grade | Flags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| operations/scripts/dispatch/governance/dispatch-folder-allowlist.js | dispatch | Pipeline dispatcher for D-GOV-08 folder-allowlist enforcement (full lifecycle) | P2/P3 (PR via --mode pr), P5/P6 (scheduled via --mode scheduled), manual (via --mode manual) | indirect via .githooks/pre-commit | MISMATCH:phantom claim P2, P3, P5, P6 | stdout only | No | all governed folders (any folder declaring .allowlist) | D-GOV-08 (every folder is governed); D-GOV-03 (detect-repair-escalate-verify) | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/tests/integration/dispatch-concern-simulation.js | validator | Validate every dispatch-{concern}.yml workflow can be triggered locally — proves YAML wiring, job structure, script existence, and mode-flag interfaces match per-job | P3 (PR-time confidence check), manual (before merge) | manual (none) | MISMATCH:phantom claim P3 | stdout only | No | .github/workflows/dispatch-{brand,copy,discoverability,governance,health,maintenance}.yml | D-GOV-07 (local CLI equivalence); D-ACT-08 (dispatchers = workflow YAML) | 7/9 | F | invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |

## P2 - Push gate

| Path | Category | Purpose | Pipeline claimed | Pipeline actual | Pipeline verdict | Outputs | Triggers downstream? | Scope | Needs | Header completeness | Grade | Flags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| operations/tests/integration/pipeline-functional-tests.js | validator | Functional detect-repair-verify tests for foundational governance/content pipelines (D-GOV-03 proof) | P3 (PR-time gate), P5 (scheduled CI verification) | P2 (Governance Pipeline); P3 (Governance Pipeline); P5 (Governance Pipeline cron 0 7 * * *); P6 (Governance Pipeline) | MISMATCH:undeclared automation P2, P6 | stdout only | No | operations/scripts/dispatch/governance/, operations/scripts/dispatch/content/ | D-GOV-03 (every pipeline proves its detect-repair-verify cycle); D-GOV-07 (local CLI equivalence) | 7/9 | C | invalid-purpose, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/tests/integration/pipeline-smoke-test.js | validator | Universal smoke test for all pipeline dispatchers — runs each in --dry-run --mode pr, asserts clean exit, reports per-pipeline status | manual (run before any dispatcher merge) | P2 (Governance Pipeline); P3 (Governance Pipeline); P5 (Governance Pipeline cron 0 7 * * *); P6 (Governance Pipeline) | MISMATCH:undeclared automation P2, P3, P5, P6 | stdout only | No | all pipeline + meta dispatchers | D-GOV-07 (every script is locally runnable); D-GOV-03 (detect-repair-verify) | 7/9 | F | invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |

## Discrepancies

### Phantom pipeline claims

- operations/scripts/dispatch/governance/dispatch-folder-allowlist.js
- operations/tests/integration/dispatch-concern-simulation.js

### Undeclared automation

- operations/tests/integration/pipeline-functional-tests.js
- operations/tests/integration/pipeline-smoke-test.js

### Not in classification JSON

- None

### Phantom JSON entries

- None

### Header/JSON mismatches

- operations/scripts/dispatch/governance/dispatch-folder-allowlist.js
- operations/tests/integration/dispatch-concern-simulation.js
- operations/tests/integration/pipeline-functional-tests.js
- operations/tests/integration/pipeline-smoke-test.js

### Output chains

- None

## Needs Human

- operations/scripts/dispatch/governance/dispatch-folder-allowlist.js: @category, @purpose, @scope, @pipeline
- operations/tests/integration/dispatch-concern-simulation.js: @purpose, @scope, @pipeline
- operations/tests/integration/pipeline-functional-tests.js: @purpose, @pipeline
- operations/tests/integration/pipeline-smoke-test.js: @purpose, @scope, @pipeline

