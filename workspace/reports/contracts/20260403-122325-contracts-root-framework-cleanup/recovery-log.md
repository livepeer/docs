# Recovery Log

- Batch: workspace/reports/contracts/20260403-122325-contracts-root-framework-cleanup
- Purpose: move non-framework root contracts docs out of root so root carries only canonical framework surfaces
- Scope: workspace/plan/active/CONTRACTS root and references
- Restore path: rsync -a workspace/reports/contracts/20260403-122325-contracts-root-framework-cleanup/files/workspace/plan/active/CONTRACTS/ workspace/plan/active/CONTRACTS/
- Proof gate: git diff --check + root file inventory reduced to framework directories only
