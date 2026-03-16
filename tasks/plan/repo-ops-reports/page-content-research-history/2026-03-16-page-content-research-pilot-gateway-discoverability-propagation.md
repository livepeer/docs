# Docs Claim Propagation Report

## Scope

- Selection type: entity
- Selection value: gateway-discoverability
- Ledger version: 1

## Verified Claims

- `gw-discoverability-ai-service-registry`
  - Entity: gateway-discoverability
  - Summary: On-chain AI gateways use the `-aiServiceRegistry` flag for protocol-based orchestrator discovery, and the same flag is repeated across gateway quickstart, monitoring, and node-pipeline guidance.
  - Canonical owner: `v2/gateways/guides/advanced-operations/gateway-discoverability.mdx`
  - Source: repo-flag-reference - v2/gateways/resources/technical/configuration-flags.mdx
  - Last verified: 2026-03-16
  - Status: verified
- `gw-discoverability-manual-video-discovery`
  - Entity: gateway-discoverability
  - Summary: Application-facing gateway discovery is still fragmented across community channels and curated provider pages; the docs do not yet point to one authoritative public directory for video or dual gateways.
  - Canonical owner: `v2/gateways/guides/advanced-operations/gateway-discoverability.mdx`
  - Source: repo-faq-review - v2/gateways/resources/faq.mdx
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
| `v2/gateways/guides/advanced-operations/gateway-discoverability.mdx` | guide | canonical-owner | verify-only | `gw-discoverability-ai-service-registry, gw-discoverability-manual-video-discovery` |
| `v2/gateways/guides/monitoring-and-tooling/health-checks.mdx` | guide | dependent-page | update-now | `gw-discoverability-ai-service-registry` |
| `v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx` | guide | dependent-page | update-now | `gw-discoverability-ai-service-registry` |
| `v2/gateways/guides/node-pipelines/ai-pipelines.mdx` | guide | dependent-page | update-now | `gw-discoverability-ai-service-registry` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | dependent-page | update-now | `gw-discoverability-ai-service-registry` |
| `v2/gateways/quickstart/AI-prompt.mdx` | other | dependent-page | update-now | `gw-discoverability-ai-service-registry` |
| `v2/gateways/setup/configure/dual-configuration.mdx` | other | dependent-page | update-now | `gw-discoverability-ai-service-registry` |
| `v2/gateways/guides/operator-considerations/production-gateways.mdx` | guide | dependent-page | verify-only | `gw-discoverability-manual-video-discovery` |
| `v2/gateways/resources/faq.mdx` | reference | dependent-page | verify-only | `gw-discoverability-manual-video-discovery` |

## Unresolved Items

- `gw-discoverability-manual-video-discovery`
  - Status: needs-review
  - Canonical owner: `v2/gateways/guides/advanced-operations/gateway-discoverability.mdx`

## Validation

- Command: `node tools/scripts/docs-claim-ledger.js ...`
- Claims in scope: 2
- Queue entries: 9

