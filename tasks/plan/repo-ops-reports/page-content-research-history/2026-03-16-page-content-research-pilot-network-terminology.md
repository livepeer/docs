# Page Content Research Pilot: Network Role Terminology

## Scope

- Canonical glossary anchor: `v2/gateways/resources/glossary.mdx`
- Canonical concept anchor: `v2/orchestrators/concepts/role.mdx`
- Claim family: gateway routing-layer terminology and orchestrator supply-side terminology
- Related propagation entity: `network-role-terminology`

## Verified Claims

- The gateway glossary defines the gateway as the routing layer between applications and orchestrators and explicitly states that the gateway does not perform compute.
- Orchestrator concept pages consistently define the orchestrator as the supply-side compute operator.
- Active concept pages already repeat the same demand-side/supply-side boundary in both gateway and orchestrator tabs.

## Findings

- Severity: medium
  - File: `v2/gateways/resources/glossary.mdx`
  - Issue: this is the best canonical owner for gateway-side role terminology, but many pages still carry inline “Terminology Validation” debt markers instead of inheriting terms from the glossary deterministically.
  - User impact: terminology consistency still depends on author discipline rather than a tracked propagation workflow.
  - Recommended fix: use the glossary as the canonical owner for the routing-layer definition and drive cross-page verification from the claim ledger.

- Severity: medium
  - File: `v2/orchestrators/concepts/role.mdx`
  - Issue: orchestrator role language is strong and internally coherent, but it is functioning as a second canonical source for cross-tab terminology rather than as a dependent concept page.
  - User impact: future edits can drift if glossary and concept wording evolve independently.
  - Recommended fix: keep concept depth in `role.mdx`, but use the ledger to explicitly tie it back to glossary-owned network-role terminology.

## Propagation Queue

- See `2026-03-16-page-content-research-pilot-network-terminology-propagation.md`
- Canonical owners surfaced first: `v2/orchestrators/concepts/role.mdx`, `v2/gateways/resources/glossary.mdx`
- Immediate dependent set: `v2/gateways/concepts/capabilities.mdx`, `v2/gateways/concepts/role.mdx`, `v2/orchestrators/concepts/architecture.mdx`, `v2/orchestrators/concepts/capabilities.mdx`

## Unresolved Items

- The repo has widespread explicit “Terminology Validation” TODO blocks across gateway pages. This pilot proves the claim substrate for terminology propagation, but it does not yet clear that broader authoring debt.
- `v2/orchestrators/portal.mdx` and other orientation surfaces likely need to join this terminology entity in a later tranche.

## Validation

- `node tools/scripts/docs-claim-ledger.js --ledger tasks/reports/repo-ops/page-content-claim-ledger.json --entity network-role-terminology --report-md tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-network-terminology-propagation.md --report-json tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-network-terminology-propagation.json`
