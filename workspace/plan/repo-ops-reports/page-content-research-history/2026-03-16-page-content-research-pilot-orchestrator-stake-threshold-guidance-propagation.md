# Docs Claim Propagation Report

## Scope

- Selection type: entity
- Selection value: orchestrator-stake-threshold-guidance
- Ledger version: 1

## Verified Claims

- `orch-active-set-threshold-guidance-repeated`
  - Entity: orchestrator-stake-threshold-guidance
  - Summary: Path-choice pages repeatedly tell operators they need enough stake to enter the active set or top 100 to receive meaningful transcoding work, but that guidance is still framed as a live competitive threshold rather than a stable repo-owned fact.
  - Canonical owner: `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
  - Source: repo-decision-guide - v2/orchestrators/guides/deployment-options/setup-navigator.mdx
  - Last verified: 2026-03-16
  - Status: needs-review

## Findings

- Severity: medium
  - File: ledger selection
  - Issue: propagation queue emitted from tracked claim records
  - User impact: downstream review can start from a deterministic file set
  - Recommended fix: expand ledger coverage for additional reusable claims

## Propagation Queue

| File | Class | Role | Action | Claims |
|---|---|---|---|---|
| `v2/orchestrators/guides/deployment-options/setup-navigator.mdx` | guide | canonical-owner | verify-only | `orch-active-set-threshold-guidance-repeated` |
| `v2/orchestrators/guides/deployment-options/find-your-path.mdx` | guide | dependent-page | verify-only | `orch-active-set-threshold-guidance-repeated` |
| `v2/orchestrators/quickstart/guide.mdx` | other | dependent-page | verify-only | `orch-active-set-threshold-guidance-repeated` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | other | dependent-page | verify-only | `orch-active-set-threshold-guidance-repeated` |

## Unresolved Items

- `orch-active-set-threshold-guidance-repeated`
  - Status: needs-review
  - Canonical owner: `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`

## Validation

- Command: `node tools/scripts/docs-claim-ledger.js ...`
- Claims in scope: 1
- Queue entries: 4

