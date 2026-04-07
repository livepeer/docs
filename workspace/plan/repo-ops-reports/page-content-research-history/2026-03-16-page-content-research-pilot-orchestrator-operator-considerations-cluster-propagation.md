# Docs Claim Propagation Report

## Scope

- Selection type: entity
- Selection value: orchestrator-operator-considerations-cluster
- Ledger version: 1

## Verified Claims

- `orch-operator-considerations-cluster-supports-decision-page`
  - Entity: orchestrator-operator-considerations-cluster
  - Summary: The hardware reference, session limits, and benchmarking guides are supporting reference and guide pages for the operator-considerations cluster; they should reinforce the business-case page rather than duplicate or compete with it.
  - Canonical owner: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
  - Source: repo-operator-considerations-review - v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx
  - Last verified: 2026-03-16
  - Status: verified
- `orch-operator-considerations-stale-route-family`
  - Entity: orchestrator-operator-considerations-cluster
  - Summary: Current operator-considerations pages still contain links to stale `feasibility-and-hardware` and `workloads-and-ai` route families, so the cluster remains vulnerable to misleading navigation even when the page content is otherwise current.
  - Canonical owner: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
  - Source: repo-route-review - v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx
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
| `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx` | guide | canonical-owner | verify-only | `orch-operator-considerations-cluster-supports-decision-page, orch-operator-considerations-stale-route-family` |
| `v2/orchestrators/guides/operator-considerations/benchmarking.mdx` | guide | dependent-page | verify-only | `orch-operator-considerations-cluster-supports-decision-page, orch-operator-considerations-stale-route-family` |
| `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx` | guide | dependent-page | verify-only | `orch-operator-considerations-cluster-supports-decision-page, orch-operator-considerations-stale-route-family` |
| `v2/orchestrators/guides/operator-considerations/session-limits.mdx` | guide | dependent-page | verify-only | `orch-operator-considerations-cluster-supports-decision-page, orch-operator-considerations-stale-route-family` |

## Unresolved Items

- `orch-operator-considerations-stale-route-family`
  - Status: needs-review
  - Canonical owner: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`

## Validation

- Command: `node tools/scripts/docs-claim-ledger.js ...`
- Claims in scope: 2
- Queue entries: 4

