# Docs Guide IA Proposal

Date: 2026-05-18

This proposal implements the locked docs-guide structure decisions without moving routes in this pass. `docs.json` changes are a separate checkpoint because a wrong route removes pages from navigation.

## Target IA

```text
docs-guide/
  index.mdx
  standards/
  frameworks/
  policies/
  decisions/
  contributing/
  reference/
    features/
    tooling/
    repo-ops/
      config/
      maps/
      secrets/
    docs-library/
      pipelines/
    external/
      mintlify/
  catalog/
  _workspace/
    drafts/
    archive/
```

Allowed top-level folders after migration: `standards/`, `frameworks/`, `policies/`, `decisions/`, `contributing/`, `reference/`, `catalog/`, `_workspace/`.

## Old To New Path Map

| Current path | Target path | Route handling |
| --- | --- | --- |
| `docs-guide/features/*` | `docs-guide/reference/features/*` | Redirect old route to new route. |
| `docs-guide/tooling/*` | `docs-guide/reference/tooling/*` | Redirect old route to new route. |
| `docs-guide/tooling/reference-maps/*` | `docs-guide/reference/tooling/reference-maps/*` | Redirect old route to new route. |
| `docs-guide/repo-ops/config/*` | `docs-guide/reference/repo-ops/config/*` | Redirect old route to new route. |
| `docs-guide/repo-ops/maps/*` | `docs-guide/reference/repo-ops/maps/*` | Redirect old route to new route. |
| `docs-guide/repo-ops/secrets/*` | `docs-guide/reference/repo-ops/secrets/*` | Redirect old route to new route. |
| `docs-guide/docs-library/*` | `docs-guide/reference/docs-library/*` | Redirect old route to new route. |
| `docs-guide/docs-library/pipelines/*` | `docs-guide/reference/docs-library/pipelines/*` | Redirect old route to new route. |
| `docs-guide/canonical/collation-data/Mintlify/index.md` | `docs-guide/reference/external/mintlify/index.md` | Redirect if routed or referenced. |
| `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md` | `docs-guide/reference/external/mintlify/mintlify-repo-best-practices.md` | Redirect if routed or referenced. |
| `docs-guide/canonical/collation-data/Mintlify/mintlify-canonical-consumers.json` | `docs-guide/reference/external/mintlify/mintlify-canonical-consumers.json` or `operations/governance/config/` | Decide during JSON registry move review. |
| `docs-guide/canonical/frontmatter.md` | deleted | Queue governed deletion; canonical target is `docs-guide/standards/frontmatter.mdx`. |
| `docs-guide/source-of-truth-guide.mdx` | merged into `docs-guide/index.mdx` | Redirect old route to `docs-guide/index`. |
| `docs-guide/policies/governance-index.mdx` | merged into `docs-guide/index.mdx` | Redirect old route to `docs-guide/index`. |
| `docs-guide/config/*.json` | `operations/governance/config/` plus pointer page | Move only after consumers are updated. |
| `docs-guide/_workspace/02_Design-Specification/**` | `workspace/plan/archive/2026-Q1-design-spec/` | Governed move; not public route. |
| `docs-guide/_workspace/03_Component-Governance-Framework/**` | `workspace/plan/active/COMPONENT-GOVERNANCE/legacy/` | Governed move; not public route. |

## Navigation Impact

Current `docs.json` references 58 `docs-guide/` pages. The migration should reduce visible navigation load by replacing the current separate `Features`, `Tooling`, `Repo Ops`, and `Docs Library` group spread with a single `Reference` group under Internal Hub > Docs Guide.

Recommended nav groups after migration:

| Group | Pages |
| --- | --- |
| Start | `docs-guide/index` |
| Standards | active standards only |
| Frameworks | active frameworks only, excluding duplicate retirement targets |
| Policies | active policies only, excluding merged `governance-index` |
| Decisions | decision registry and locked decision logs |
| Reference | feature maps, tooling, repo-ops maps, docs-library pipelines, external Mintlify reference |
| Catalog | generated catalogs only |
| Contributing | contributor-facing procedures |

Human checkpoint required before editing `docs.json`:

1. Review this old-to-new path map.
2. Confirm public route compatibility for old docs-guide links.
3. Approve redirect entries for moved docs-guide paths.
4. Confirm whether `docs-guide/reference/features/visual-explainer-workflows.mdx` is active reference or archived pilot.

## Generated Index Impact

Generated docs-guide catalogs remain read-only and should not move by hand. After IA migration:

- Re-run `generate-docs-guide-indexes.js --check`, then `--write`, then `--check`.
- Re-run pages and components index checks.
- Re-run generated file banner checks if generated docs are touched.
- Update source-of-truth references that currently name `docs-guide/features`, `docs-guide/tooling`, `docs-guide/repo-ops`, or `docs-guide/docs-library`.

## Approval Gates

| Gate | Required before |
| --- | --- |
| Matrix review | Any path move, route edit, or deletion queue execution |
| `docs.json` route approval | Any navigation or redirect mutation |
| Generated artifact review | Catalog regeneration commits |
| Deletion approval | Removing `canonical/frontmatter.md`, duplicate authority docs, or workspace/archive evidence |
| Validator acceptance | Enabling `check-docs-guide-reference-freshness.js` in CI |
