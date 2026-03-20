# Docs Claim Ledger PR Report

## Scope

- Selection type: files
- Selection value: v2/gateways/guides/advanced-operations/gateway-discoverability.mdx,v2/gateways/resources/glossary.mdx,v2/orchestrators/concepts/role.mdx
- Changed files: 3

## Changed Files

- `v2/gateways/guides/advanced-operations/gateway-discoverability.mdx`
- `v2/gateways/resources/glossary.mdx`
- `v2/orchestrators/concepts/role.mdx`

## Matched Entities

- `gateway-discoverability`
  - matched by: `v2/gateways/guides/advanced-operations/gateway-discoverability.mdx`
- `network-role-terminology`
  - matched by: `v2/gateways/resources/glossary.mdx`
  - matched by: `v2/orchestrators/concepts/role.mdx`
- `orchestrator-role-cluster`
  - matched by: `v2/orchestrators/concepts/role.mdx`
- `orchestrator-incentive-model`
  - matched by: `v2/orchestrators/concepts/role.mdx`
- `gateway-payment-architecture`
  - matched by: `v2/gateways/resources/glossary.mdx`

## Combined Propagation Queue

| File | Class | Role | Action | Entities | Claims |
|---|---|---|---|---|---|
| `v2/orchestrators/concepts/rcs-incentives.mdx` | concept | canonical-owner | follow-up | `orchestrator-incentive-model` | `orch-incentive-model-canonical-owner, orch-role-links-old-incentives-concept` |
| `v2/orchestrators/concepts/role.mdx` | concept | canonical-owner | follow-up | `network-role-terminology, orchestrator-incentive-model, orchestrator-role-cluster` | `orch-incentive-model-canonical-owner, orch-role-dual-compute-and-governance, orch-role-links-old-incentives-concept, term-orchestrator-supply-side-operator` |
| `v2/gateways/resources/glossary.mdx` | glossary | canonical-owner | update-now | `gateway-payment-architecture, network-role-terminology` | `gw-clearinghouse-extends-remote-signer, term-gateway-routing-layer, term-orchestrator-supply-side-operator` |
| `v2/gateways/guides/advanced-operations/gateway-discoverability.mdx` | guide | canonical-owner | verify-only | `gateway-discoverability` | `gw-discoverability-ai-service-registry, gw-discoverability-manual-video-discovery` |
| `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` | guide | canonical-owner | update-now | `gateway-payment-architecture` | `gw-clearinghouse-extends-remote-signer` |
| `v2/orchestrators/concepts/incentive-model.mdx` | concept | stale-alias | follow-up | `orchestrator-incentive-model` | `orch-incentive-model-canonical-owner` |
| `v2/gateways/concepts/capabilities.mdx` | concept | dependent-page | update-now | `network-role-terminology` | `term-gateway-routing-layer` |
| `v2/gateways/concepts/role.mdx` | concept | dependent-page | update-now | `network-role-terminology` | `term-gateway-routing-layer, term-orchestrator-supply-side-operator` |
| `v2/orchestrators/concepts/architecture.mdx` | concept | dependent-page | follow-up | `network-role-terminology, orchestrator-incentive-model, orchestrator-role-cluster` | `orch-incentive-model-canonical-owner, orch-role-dual-compute-and-governance, orch-role-links-old-incentives-concept, term-gateway-routing-layer` |
| `v2/orchestrators/concepts/capabilities.mdx` | concept | dependent-page | update-now | `network-role-terminology, orchestrator-role-cluster` | `orch-role-dual-compute-and-governance, term-orchestrator-supply-side-operator` |
| `v2/gateways/guides/advanced-operations/gateway-middleware.mdx` | guide | dependent-page | update-now | `gateway-payment-architecture` | `gw-clearinghouse-extends-remote-signer` |
| `v2/gateways/guides/monitoring-and-tooling/health-checks.mdx` | guide | dependent-page | update-now | `gateway-discoverability` | `gw-discoverability-ai-service-registry` |
| `v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx` | guide | dependent-page | update-now | `gateway-discoverability` | `gw-discoverability-ai-service-registry` |
| `v2/gateways/guides/node-pipelines/ai-pipelines.mdx` | guide | dependent-page | update-now | `gateway-discoverability` | `gw-discoverability-ai-service-registry` |
| `v2/gateways/guides/operator-considerations/production-gateways.mdx` | guide | dependent-page | verify-only | `gateway-discoverability` | `gw-discoverability-manual-video-discovery` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | dependent-page | update-now | `gateway-discoverability` | `gw-discoverability-ai-service-registry` |
| `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` | guide | dependent-page | update-now | `gateway-payment-architecture` | `gw-clearinghouse-extends-remote-signer` |
| `v2/gateways/guides/tutorials/tutorial-3-go-production.mdx` | guide | dependent-page | update-now | `gateway-payment-architecture` | `gw-clearinghouse-extends-remote-signer` |
| `v2/orchestrators/index.mdx` | index | dependent-page | follow-up | `orchestrator-incentive-model` | `orch-incentive-model-canonical-owner, orch-role-links-old-incentives-concept` |
| `v2/gateways/quickstart/AI-prompt.mdx` | other | dependent-page | update-now | `gateway-discoverability` | `gw-discoverability-ai-service-registry` |
| `v2/gateways/setup/configure/dual-configuration.mdx` | other | dependent-page | update-now | `gateway-discoverability` | `gw-discoverability-ai-service-registry` |
| `v2/orchestrators/portal.mdx` | other | dependent-page | update-now | `orchestrator-role-cluster` | `orch-role-dual-compute-and-governance` |
| `v2/gateways/resources/faq.mdx` | reference | dependent-page | verify-only | `gateway-discoverability` | `gw-discoverability-manual-video-discovery` |

## Unmatched Files

- None

## Unresolved Items

- `gw-discoverability-manual-video-discovery` (gateway-discoverability)
  - Status: needs-review
  - Canonical owner: `v2/gateways/guides/advanced-operations/gateway-discoverability.mdx`
- `orch-incentive-model-canonical-owner` (orchestrator-incentive-model)
  - Status: conflicted
  - Canonical owner: `v2/orchestrators/concepts/rcs-incentives.mdx`
- `orch-role-links-old-incentives-concept` (orchestrator-incentive-model)
  - Status: deprecated
  - Canonical owner: `v2/orchestrators/concepts/role.mdx`

