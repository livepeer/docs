# Docs Claim Propagation Report

## Scope

- Selection type: entity
- Selection value: orchestrator-role-cluster
- Ledger version: 1

## Verified Claims

- `orch-role-dual-compute-and-governance`
  - Entity: orchestrator-role-cluster
  - Summary: Current orchestrator concept content consistently frames the orchestrator as both a general-purpose compute provider and an economic/governance actor, not just a GPU worker.
  - Canonical owner: `v2/orchestrators/concepts/role.mdx`
  - Source: repo-concept-cluster - v2/orchestrators/concepts/role.mdx
  - Last verified: 2026-03-16
  - Status: verified

## Findings

- Severity: medium
  - File: ledger selection
  - Issue: propagation queue emitted from tracked claim records
  - User impact: downstream review can start from a deterministic file set
  - Recommended fix: expand ledger coverage for additional reusable claims

## Propagation Queue

| File | Class | Role | Action | Claims |
|---|---|---|---|---|
| `v2/orchestrators/concepts/role.mdx` | concept | canonical-owner | update-now | `orch-role-dual-compute-and-governance` |
| `v2/orchestrators/concepts/architecture.mdx` | concept | dependent-page | update-now | `orch-role-dual-compute-and-governance` |
| `v2/orchestrators/concepts/capabilities.mdx` | concept | dependent-page | update-now | `orch-role-dual-compute-and-governance` |
| `v2/orchestrators/portal.mdx` | other | dependent-page | update-now | `orch-role-dual-compute-and-governance` |

## Unresolved Items

- None

## Validation

- Command: `node tools/scripts/docs-claim-ledger.js ...`
- Claims in scope: 1
- Queue entries: 4

