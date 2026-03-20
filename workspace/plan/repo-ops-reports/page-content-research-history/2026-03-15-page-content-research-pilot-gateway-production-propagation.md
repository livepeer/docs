# Docs Claim Propagation Report

## Scope

- Selection type: entity
- Selection value: gateway-production-gateways
- Ledger version: 1

## Verified Claims

- `gw-production-gateways-public-directory`
  - Entity: gateway-production-gateways
  - Summary: The production gateways page acts as a public operator directory, but several listed entries still rely on review markers rather than current authoritative verification.
  - Canonical owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - Source: repo-review - internal-static-review-2026-03-15
  - Last verified: 2026-03-15
  - Status: needs-review
- `gw-production-gateways-spe-examples`
  - Entity: gateway-production-gateways
  - Summary: Livepeer Cloud, LLM SPE, and Streamplace are the main gateway-facing SPE examples currently repeated across gateway comparison content, but each entry has different verification strength and should not be presented with equal certainty.
  - Canonical owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - Source: forum-milestone-report - https://forum.livepeer.org/t/spe-milestone-report/3035
  - Last verified: 2026-03-15
  - Status: verified

## Findings

- Severity: medium
  - File: ledger selection
  - Issue: propagation queue emitted from tracked claim records
  - User impact: downstream review can start from a deterministic file set
  - Recommended fix: expand ledger coverage for additional reusable claims

## Propagation Queue

| File | Role | Action | Claims |
|---|---|---|---|
| `v2/gateways/guides/deployment-details/setup-options.mdx` | dependent-page | verify-only | `gw-production-gateways-public-directory, gw-production-gateways-spe-examples` |
| `v2/gateways/guides/operator-considerations/production-gateways.mdx` | canonical-owner | verify-only | `gw-production-gateways-public-directory, gw-production-gateways-spe-examples` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | dependent-page | update-now | `gw-production-gateways-spe-examples` |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` | dependent-page | update-now | `gw-production-gateways-spe-examples` |

## Unresolved Items

- `gw-production-gateways-public-directory`
  - Status: needs-review
  - Canonical owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`

## Validation

- Command: `node tools/scripts/docs-claim-ledger.js ...`
- Claims in scope: 2
- Queue entries: 4

