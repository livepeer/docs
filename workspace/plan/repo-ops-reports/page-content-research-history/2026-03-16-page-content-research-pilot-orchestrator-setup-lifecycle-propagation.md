# Docs Claim Propagation Report

## Scope

- Selection type: entity
- Selection value: orchestrator-setup-lifecycle
- Ledger version: 1

## Verified Claims

- `orch-activation-verification-monitoring-loop`
  - Entity: orchestrator-setup-lifecycle
  - Summary: Activation, verification, and monitoring pages together define the canonical post-install lifecycle: activate on-chain, verify active status and service URI, then confirm jobs and reward calls through logs, Explorer, and metrics.
  - Canonical owner: `v2/orchestrators/setup/activate.mdx`
  - Source: repo-setup-flow - v2/orchestrators/setup/activate.mdx
  - Last verified: 2026-03-16
  - Status: verified
- `orch-explorer-status-and-service-uri-crosscheck`
  - Entity: orchestrator-setup-lifecycle
  - Summary: Explorer status, active-set membership, and service URI matching are treated as the main on-chain verification surfaces across activate and verify pages.
  - Canonical owner: `v2/orchestrators/setup/test.mdx`
  - Source: repo-verification-guide - v2/orchestrators/setup/test.mdx
  - Last verified: 2026-03-16
  - Status: verified
- `orch-round-and-reward-timing-guidance`
  - Entity: orchestrator-setup-lifecycle
  - Summary: The setup flow repeatedly tells operators that activation, active-set status, and reward observation are round-bound and commonly framed as roughly 24-hour timing, but some of that language still depends on review-sensitive timing assumptions.
  - Canonical owner: `v2/orchestrators/setup/activate.mdx`
  - Source: repo-setup-flow - v2/orchestrators/setup/activate.mdx
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
| `v2/orchestrators/setup/activate.mdx` | other | canonical-owner | verify-only | `orch-activation-verification-monitoring-loop, orch-explorer-status-and-service-uri-crosscheck, orch-round-and-reward-timing-guidance` |
| `v2/orchestrators/setup/test.mdx` | other | canonical-owner | verify-only | `orch-activation-verification-monitoring-loop, orch-explorer-status-and-service-uri-crosscheck, orch-round-and-reward-timing-guidance` |
| `v2/orchestrators/setup/guide.mdx` | other | dependent-page | update-now | `orch-activation-verification-monitoring-loop` |
| `v2/orchestrators/setup/r-monitor.mdx` | other | dependent-page | verify-only | `orch-activation-verification-monitoring-loop, orch-explorer-status-and-service-uri-crosscheck, orch-round-and-reward-timing-guidance` |

## Unresolved Items

- `orch-round-and-reward-timing-guidance`
  - Status: needs-review
  - Canonical owner: `v2/orchestrators/setup/activate.mdx`

## Validation

- Command: `node tools/scripts/docs-claim-ledger.js ...`
- Claims in scope: 3
- Queue entries: 4

