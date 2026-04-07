# Recovery Log

- Batch: workspace/reports/contracts/20260403-121617-contracts-doc-archive
- Purpose: archive legacy contracts planning docs into DEPRECATED using git mv
- Scope: workspace/plan/active/CONTRACTS
- Restore path: rsync -a workspace/reports/contracts/20260403-121617-contracts-doc-archive/files/workspace/plan/active/CONTRACTS/ workspace/plan/active/CONTRACTS/
- Proof gate: git diff --check + no active references to moved root paths
