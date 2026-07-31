# Docs Claim Propagation Report

## Scope

- Selection type: entity
- Selection value: network-role-terminology
- Ledger version: 1

## Verified Claims

- `term-gateway-routing-layer`
  - Entity: network-role-terminology
  - Summary: A gateway is the routing layer between applications and orchestrators; it selects orchestrators and returns results but does not perform the compute itself.
  - Canonical owner: `v2/gateways/resources/glossary.mdx`
  - Source: repo-glossary - v2/gateways/resources/glossary.mdx
  - Last verified: 2026-03-16
  - Status: verified
- `term-orchestrator-supply-side-operator`
  - Entity: network-role-terminology
  - Summary: An orchestrator is the supply-side compute operator in the network; it provides GPU-backed workloads while gateways aggregate demand and route jobs to it.
  - Canonical owner: `v2/orchestrators/concepts/role.mdx`
  - Source: repo-concept-page - v2/orchestrators/concepts/role.mdx
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
| `v2/orchestrators/concepts/role.mdx` | concept | canonical-owner | update-now | `term-orchestrator-supply-side-operator` |
| `v2/gateways/resources/glossary.mdx` | glossary | canonical-owner | update-now | `term-gateway-routing-layer, term-orchestrator-supply-side-operator` |
| `v2/gateways/concepts/capabilities.mdx` | concept | dependent-page | update-now | `term-gateway-routing-layer` |
| `v2/gateways/concepts/role.mdx` | concept | dependent-page | update-now | `term-gateway-routing-layer, term-orchestrator-supply-side-operator` |
| `v2/orchestrators/concepts/architecture.mdx` | concept | dependent-page | update-now | `term-gateway-routing-layer` |
| `v2/orchestrators/concepts/capabilities.mdx` | concept | dependent-page | update-now | `term-orchestrator-supply-side-operator` |

## Unresolved Items

- None

## Validation

- Command: `node tools/scripts/docs-claim-ledger.js ...`
- Claims in scope: 2
- Queue entries: 6

