# Docs Claim Propagation Report

## Scope

- Selection type: entity
- Selection value: orchestrator-business-case
- Ledger version: 1

## Verified Claims

- `orch-business-case-feasibility-page-is-canonical`
  - Entity: orchestrator-business-case
  - Summary: The repo's current business-case surface for orchestrators is `feasibility-economics.mdx`, which owns the worth-it question, cost categories, and decision matrix before setup work begins.
  - Canonical owner: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
  - Source: repo-operator-considerations-review - v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx
  - Last verified: 2026-03-16
  - Status: verified
- `orch-business-case-market-sensitive-thresholds`
  - Entity: orchestrator-business-case
  - Summary: Reward profitability thresholds, active-set/top-100 guidance, and early-2026 viability notes are market-sensitive framing that should remain warnings, not durable facts, unless actively reverified.
  - Canonical owner: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
  - Source: repo-operator-considerations-review - v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx
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
| `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx` | guide | canonical-owner | verify-only | `orch-business-case-feasibility-page-is-canonical, orch-business-case-market-sensitive-thresholds` |
| `v2/orchestrators/guides/operator-considerations/benchmarking.mdx` | guide | dependent-page | update-now | `orch-business-case-feasibility-page-is-canonical` |
| `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx` | guide | dependent-page | update-now | `orch-business-case-feasibility-page-is-canonical` |
| `v2/orchestrators/guides/operator-considerations/session-limits.mdx` | guide | dependent-page | update-now | `orch-business-case-feasibility-page-is-canonical` |
| `v2/orchestrators/guides/deployment-options/setup-navigator.mdx` | guide | dependent-page | verify-only | `orch-business-case-feasibility-page-is-canonical, orch-business-case-market-sensitive-thresholds` |
| `v2/orchestrators/quickstart/guide.mdx` | other | dependent-page | verify-only | `orch-business-case-market-sensitive-thresholds` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | other | dependent-page | verify-only | `orch-business-case-feasibility-page-is-canonical, orch-business-case-market-sensitive-thresholds` |

## Unresolved Items

- `orch-business-case-market-sensitive-thresholds`
  - Status: needs-review
  - Canonical owner: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`

## Validation

- Command: `node tools/scripts/docs-claim-ledger.js ...`
- Claims in scope: 2
- Queue entries: 7

