# Docs Claim Propagation Report

## Scope

- Selection type: entity
- Selection value: orchestrator-deployment-paths
- Ledger version: 1

## Verified Claims

- `orch-decision-pool-vs-solo-boundary`
  - Entity: orchestrator-deployment-paths
  - Summary: The pool path is the low-ops, no-stake worker route, while the solo orchestrator path is the stake-bearing, on-chain operator route. That distinction is repeated across quickstart, pool guidance, and persona planning material.
  - Canonical owner: `v2/orchestrators/guides/deployment-options/join-a-pool.mdx`
  - Source: repo-deployment-guide - v2/orchestrators/guides/deployment-options/join-a-pool.mdx
  - Last verified: 2026-03-16
  - Status: verified
- `orch-decision-prerequisites-apply-only-to-solo`
  - Entity: orchestrator-deployment-paths
  - Summary: ETH, LPT, public port exposure, and RPC setup are solo-orchestrator prerequisites, not universal prerequisites for every orchestrator entry path. Pool workers are an exception and need that distinction kept explicit.
  - Canonical owner: `v2/orchestrators/setup/rcs-requirements.mdx`
  - Source: repo-setup-checklist - v2/orchestrators/setup/rcs-requirements.mdx
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
| `v2/orchestrators/guides/deployment-options/join-a-pool.mdx` | guide | canonical-owner | verify-only | `orch-decision-pool-vs-solo-boundary, orch-decision-prerequisites-apply-only-to-solo` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | other | canonical-owner | verify-only | `orch-decision-pool-vs-solo-boundary, orch-decision-prerequisites-apply-only-to-solo` |
| `v2/orchestrators/portal.mdx` | other | dependent-page | update-now | `orch-decision-pool-vs-solo-boundary` |
| `v2/orchestrators/personas-and-pages.mdx` | other | dependent-page | verify-only | `orch-decision-pool-vs-solo-boundary, orch-decision-prerequisites-apply-only-to-solo` |
| `v2/orchestrators/quickstart/guide.mdx` | other | dependent-page | verify-only | `orch-decision-pool-vs-solo-boundary, orch-decision-prerequisites-apply-only-to-solo` |

## Unresolved Items

- `orch-decision-prerequisites-apply-only-to-solo`
  - Status: needs-review
  - Canonical owner: `v2/orchestrators/setup/rcs-requirements.mdx`

## Validation

- Command: `node tools/scripts/docs-claim-ledger.js ...`
- Claims in scope: 2
- Queue entries: 5

