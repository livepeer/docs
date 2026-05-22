# Validator Instrumentation Batch

Purpose: Preserve targeted contracts Playwright validators after wait/error-location fixes and before rerun.

Files:
- operations/tests/playwright-blockchain-contracts.js
- operations/tests/playwright-contract-addresses.js

Restore:
- copy files from files/... back to repo paths

Planned proof gates:
- git diff --check
- targeted CP-6 / CP-7 reruns against one fresh scoped base URL
