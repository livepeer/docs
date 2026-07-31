batch: workspace/reports/contracts/20260403-063638-scoped-projection-fix
purpose: scoped contracts projection fix + blockchain validator wait fix
files:
- tools/dev/generate-mint-dev-scope.js
- operations/tests/playwright-blockchain-contracts.js
restore:
- cp workspace/reports/contracts/20260403-063638-scoped-projection-fix/files/tools/dev/generate-mint-dev-scope.js tools/dev/generate-mint-dev-scope.js
- cp workspace/reports/contracts/20260403-063638-scoped-projection-fix/files/operations/tests/playwright-blockchain-contracts.js operations/tests/playwright-blockchain-contracts.js
