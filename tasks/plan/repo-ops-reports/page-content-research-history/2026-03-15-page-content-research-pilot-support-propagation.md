# Docs Claim Propagation Report

## Scope

- Selection type: entity
- Selection value: gateway-operator-support
- Ledger version: 1

## Verified Claims

- `gw-ai-video-startup-program`
  - Entity: gateway-operator-support
  - Summary: The AI Video Startup Program is a real Livepeer builder program with an official application surface, but current cohort timing is not explicit in the public sources reviewed.
  - Canonical owner: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - Source: official-program-page - https://www.livepeer.org/dev-hub
  - Last verified: 2026-03-15
  - Status: needs-review
- `gw-community-remote-signer`
  - Entity: gateway-operator-support
  - Summary: The community remote signer endpoint exists, but current free public availability and support expectations are not backed by an authoritative source in this pass.
  - Canonical owner: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - Source: endpoint-only - https://signer.eliteencoder.net/
  - Last verified: 2026-03-15
  - Status: needs-review
- `gw-spe-funded-gateway-operators`
  - Entity: gateway-operator-support
  - Summary: Treasury-funded SPEs continue to support gateway-facing infrastructure in the Livepeer ecosystem, with Cloud, LLM, and Streamplace all appearing in current governance or milestone reporting.
  - Canonical owner: `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx`
  - Source: forum-milestone-report - https://forum.livepeer.org/t/spe-milestone-report/3035
  - Last verified: 2026-03-15
  - Status: verified
- `gw-tools-livepeer-cloud-listing`
  - Entity: gateway-operator-support
  - Summary: tools.livepeer.cloud is a real Cloud SPE output, but the docs claim that operators can request gateway listings is not verified in the sources reviewed.
  - Canonical owner: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - Source: cloud-spe-update - https://forum.livepeer.org/t/2024-end-of-year-update-livepeer-cloud-spe/2678
  - Last verified: 2026-03-15
  - Status: needs-review

## Findings

- Severity: medium
  - File: ledger selection
  - Issue: propagation queue emitted from tracked claim records
  - User impact: downstream review can start from a deterministic file set
  - Recommended fix: expand ledger coverage for additional reusable claims

## Propagation Queue

| File | Role | Action | Claims |
|---|---|---|---|
| `v2/gateways/concepts/business-model.mdx` | dependent-page | update-now | `gw-spe-funded-gateway-operators` |
| `v2/gateways/guides/deployment-details/setup-options.mdx` | dependent-page | update-now | `gw-spe-funded-gateway-operators` |
| `v2/gateways/guides/operator-considerations/production-gateways.mdx` | dependent-page | verify-only | `gw-community-remote-signer, gw-spe-funded-gateway-operators, gw-tools-livepeer-cloud-listing` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | canonical-owner | verify-only | `gw-ai-video-startup-program, gw-community-remote-signer, gw-spe-funded-gateway-operators, gw-tools-livepeer-cloud-listing` |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` | canonical-owner | verify-only | `gw-ai-video-startup-program, gw-spe-funded-gateway-operators` |

## Unresolved Items

- `gw-ai-video-startup-program`
  - Status: needs-review
  - Canonical owner: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
- `gw-community-remote-signer`
  - Status: needs-review
  - Canonical owner: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
- `gw-tools-livepeer-cloud-listing`
  - Status: needs-review
  - Canonical owner: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`

## Validation

- Command: `node tools/scripts/docs-claim-ledger.js ...`
- Claims in scope: 4
- Queue entries: 5

