# Docs Claim Propagation Report

## Scope

- Selection type: entity
- Selection value: orchestrator-incentive-model
- Ledger version: 1

## Verified Claims

- `orch-incentive-model-canonical-owner`
  - Entity: orchestrator-incentive-model
  - Summary: The incentives and economics concept is still owned by `rcs-incentives.mdx` in the current worktree, but repo planning material already treats `incentive-model` as the target canonical concept name.
  - Canonical owner: `v2/orchestrators/concepts/rcs-incentives.mdx`
  - Source: repo-ia-review - v2/orchestrators/orchestrator-tab-review.md
  - Last verified: 2026-03-15
  - Status: conflicted
  - Stale aliases: `v2/orchestrators/concepts/incentive-model.mdx`
- `orch-role-links-old-incentives-concept`
  - Entity: orchestrator-incentive-model
  - Summary: Active orchestrator concept pages still link to `rcs-incentives`, showing that rename propagation has not happened yet.
  - Canonical owner: `v2/orchestrators/concepts/role.mdx`
  - Source: repo-static-link - v2/orchestrators/concepts/role.mdx
  - Last verified: 2026-03-15
  - Status: deprecated
  - Stale aliases: `v2/orchestrators/concepts/rcs-incentives.mdx`

## Findings

- Severity: medium
  - File: ledger selection
  - Issue: propagation queue emitted from tracked claim records
  - User impact: downstream review can start from a deterministic file set
  - Recommended fix: expand ledger coverage for additional reusable claims

## Propagation Queue

| File | Role | Action | Claims |
|---|---|---|---|
| `v2/orchestrators/concepts/architecture.mdx` | dependent-page | follow-up | `orch-incentive-model-canonical-owner, orch-role-links-old-incentives-concept` |
| `v2/orchestrators/concepts/incentive-model.mdx` | stale-alias | follow-up | `orch-incentive-model-canonical-owner` |
| `v2/orchestrators/concepts/rcs-incentives.mdx` | canonical-owner | follow-up | `orch-incentive-model-canonical-owner, orch-role-links-old-incentives-concept` |
| `v2/orchestrators/concepts/role.mdx` | canonical-owner | follow-up | `orch-incentive-model-canonical-owner, orch-role-links-old-incentives-concept` |
| `v2/orchestrators/index.mdx` | dependent-page | follow-up | `orch-incentive-model-canonical-owner, orch-role-links-old-incentives-concept` |

## Unresolved Items

- `orch-incentive-model-canonical-owner`
  - Status: conflicted
  - Canonical owner: `v2/orchestrators/concepts/rcs-incentives.mdx`
- `orch-role-links-old-incentives-concept`
  - Status: deprecated
  - Canonical owner: `v2/orchestrators/concepts/role.mdx`

## Validation

- Command: `node tools/scripts/docs-claim-ledger.js ...`
- Claims in scope: 2
- Queue entries: 5

