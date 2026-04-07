# Validation Batch

Purpose: Preserve current scoped Mint generator and validator state before targeted validation / any further mutation.

Files:
- tools/dev/generate-mint-dev-scope.js
- operations/tests/playwright-blockchain-contracts.js
- operations/tests/unit/lpd-scoped-mint-dev.test.js

Restore:
- copy files from files/... back to repo paths

Planned proof gates:
- git diff --check
- node operations/tests/unit/lpd-scoped-mint-dev.test.js
- targeted contracts validator launch and route probes
