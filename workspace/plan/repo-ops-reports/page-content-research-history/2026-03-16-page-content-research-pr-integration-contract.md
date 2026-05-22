# Research Skill PR Integration Contract

## Goal

Define the minimum deterministic contract a future PR-time research workflow should consume without turning on unattended automation yet.

## Changed File To Entity Mapping

Use repo-local mapping first, not inference-heavy routing:

| Changed path family | Entity to query first |
|---|---|
| `v2/gateways/guides/advanced-operations/gateway-discoverability.mdx` and pages repeating `-aiServiceRegistry` or manual gateway listing language | `gateway-discoverability` |
| `v2/gateways/resources/glossary.mdx`, `v2/gateways/concepts/role.mdx`, `v2/gateways/concepts/capabilities.mdx`, `v2/orchestrators/concepts/role.mdx`, `v2/orchestrators/concepts/capabilities.mdx`, `v2/orchestrators/concepts/architecture.mdx` | `network-role-terminology` |
| `v2/orchestrators/concepts/role.mdx`, `v2/orchestrators/concepts/capabilities.mdx`, `v2/orchestrators/concepts/architecture.mdx`, `v2/orchestrators/portal.mdx` | `orchestrator-role-cluster` |
| `v2/orchestrators/concepts/rcs-incentives.mdx`, `v2/orchestrators/concepts/incentive-model.mdx`, `v2/orchestrators/index.mdx`, incentives links in concept pages | `orchestrator-incentive-model` |
| `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`, `remote-signers.mdx`, `gateway-middleware.mdx`, `tutorial-3-go-production.mdx`, `v2/gateways/resources/glossary.mdx` | `gateway-payment-architecture` |

## Minimum PR Artifact Shape

Every future PR-time research artifact should emit:

1. Scope
2. Claims selected from the ledger
3. Propagation queue with:
   - `file`
   - `page_class`
   - `role`
   - `action`
   - `claim_ids`
4. Unresolved items
5. Validation command used

## Behavior Defaults

- Query the ledger first.
- If no entity matches, fall back to manual research and log the missing-entity gap.
- Never auto-edit downstream files in the PR integration phase.
- Preserve `canonical-owner` files as the first review target.
- Surface `stale-alias` items ahead of normal dependent pages when rename debt exists.

## Open Gaps Before Automation

- The mapping is still hand-curated, not generated from docs IA or frontmatter.
- Many gateway pages still carry terminology TODO markers that are not yet tied to claim entities.
- Some ecosystem/process claims remain intentionally `needs-review`, so PR artifacts would still produce advisory queues rather than pass/fail decisions.
