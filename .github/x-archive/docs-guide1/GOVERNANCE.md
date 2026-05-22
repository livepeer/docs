---
folder: docs-guide/
owner: "@livepeer/docs-team"
framework: docs-guide/frameworks/doc-item-model.mdx
policy: docs-guide/policies/docs-guide-structure-policy.mdx
validator: operations/scripts/validators/governance/compliance/check-docs-guide-contract.js
status: active
lastReviewed: 2026-05-04
reviewCadence: 90d
---

# docs-guide/ Governance

Internal source of truth for repository features, rules, and decisions. Self-governing: this folder governs itself, the published frameworks, policies, standards, and decisions all live here.

**Entry point:** [docs-guide/index.mdx](index.mdx)

**Authority tiers:** T0 decisions > T1 policies > T2 frameworks > T3 standards > T4 contributing > T5 reference. Declared in the mandatory `authority:` frontmatter field on every file.

**Before editing this folder:**

1. Read [docs-guide/index.mdx](index.mdx) for the audience picker and decision rules
2. Read [policies/docs-guide-structure-policy.mdx](policies/docs-guide-structure-policy.mdx) for folder rules and naming discipline
3. Read [standards/frontmatter.mdx](standards/frontmatter.mdx) for the mandatory frontmatter contract
4. Run `node operations/scripts/validators/governance/compliance/check-docs-guide-contract.js --staged` before commit

**Frontmatter contract (mandatory for every file outside `_workspace/` and `catalog/`):** `title`, `description`, `authority`, `consumer`, `maintenance`, `status`, `lastVerified`, `owner`. Conditional fields per authority tier.

Decision authority lives in [decisions/](decisions/). Locked structural decisions: D-DG-01 through D-DG-13 in [decisions/docs-guide-structure.md](decisions/docs-guide-structure.md).
