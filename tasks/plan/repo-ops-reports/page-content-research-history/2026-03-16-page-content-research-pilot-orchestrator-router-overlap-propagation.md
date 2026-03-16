# Docs Claim Propagation Report

## Scope

- Selection type: entity
- Selection value: orchestrator-path-router-overlap
- Ledger version: 1

## Verified Claims

- `orch-navigator-enterprise-contact-still-advisory`
  - Entity: orchestrator-path-router-overlap
  - Summary: Enterprise or fleet onboarding is still routed through Discord/forum-style guidance rather than a stable dedicated orchestrator onboarding path, and setup-navigator explicitly marks that as unresolved review debt.
  - Canonical owner: `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
  - Source: repo-router-review - v2/orchestrators/guides/deployment-options/setup-navigator.mdx
  - Last verified: 2026-03-16
  - Status: needs-review
- `orch-navigator-overlap-two-router-pages`
  - Entity: orchestrator-path-router-overlap
  - Summary: The orchestrator tab currently has two decision-router pages, `find-your-path.mdx` and `setup-navigator.mdx`, that both present canonical path-choice logic for pool, solo, Siphon, and fleet operators.
  - Canonical owner: `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
  - Source: repo-router-review - v2/orchestrators/guides/deployment-options/find-your-path.mdx
  - Last verified: 2026-03-16
  - Status: conflicted

## Findings

- Severity: medium
  - File: ledger selection
  - Issue: propagation queue emitted from tracked claim records
  - User impact: downstream review can start from a deterministic file set
  - Recommended fix: expand ledger coverage for additional reusable claims

## Propagation Queue

| File | Class | Role | Action | Claims |
|---|---|---|---|---|
| `v2/orchestrators/guides/deployment-options/setup-navigator.mdx` | guide | canonical-owner | verify-only | `orch-navigator-enterprise-contact-still-advisory, orch-navigator-overlap-two-router-pages` |
| `v2/orchestrators/guides/deployment-options/find-your-path.mdx` | guide | dependent-page | verify-only | `orch-navigator-enterprise-contact-still-advisory, orch-navigator-overlap-two-router-pages` |
| `v2/orchestrators/portal.mdx` | other | dependent-page | verify-only | `orch-navigator-enterprise-contact-still-advisory, orch-navigator-overlap-two-router-pages` |
| `v2/orchestrators/quickstart/guide.mdx` | other | dependent-page | verify-only | `orch-navigator-overlap-two-router-pages` |
| `v2/orchestrators/setup/guide.mdx` | other | dependent-page | verify-only | `orch-navigator-overlap-two-router-pages` |

## Unresolved Items

- `orch-navigator-enterprise-contact-still-advisory`
  - Status: needs-review
  - Canonical owner: `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
- `orch-navigator-overlap-two-router-pages`
  - Status: conflicted
  - Canonical owner: `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`

## Validation

- Command: `node tools/scripts/docs-claim-ledger.js ...`
- Claims in scope: 2
- Queue entries: 5

