# Archive And Deletion Approval Queue

Date: 2026-05-18

No deletion is approved by this file. It is the review queue required before governed deletion, archive moves, route redirects, or `.allowlist` changes.

## Requires Human Deletion Approval

| Candidate | Reason | Precondition | Approval requirement |
| --- | --- | --- | --- |
| `docs-guide/canonical/frontmatter.md` | D-DG-04 identifies it as a 48-byte stub; canonical spec is `docs-guide/standards/frontmatter.mdx`. | Confirm no active import/link depends on it; add redirect or reference update if routed. | Human deletion commit with required deletion trailer. |
| `docs-guide/policies/script-governance.mdx` | D-DG-08 marks it duplicate authority for `docs-guide/frameworks/script-framework.mdx`. | Propagate all references; add redirect if routed. | Human deletion commit with required deletion trailer. |
| `docs-guide/frameworks/component-governance.mdx` | D-DG-08 marks it duplicate authority for `component-framework-canonical.mdx`. | Propagate all references; add redirect if routed. | Human deletion commit with required deletion trailer. |
| `.DS_Store` files | OS metadata should not be tracked. | Confirm `.gitignore` coverage. | Human deletion commit if tracked. |
| `*.bak` files listed in gap analysis | Backup artifacts reduce trust in source tree. | Confirm live source exists and backup is not canonical evidence. | Human deletion commit with required deletion trailer. |

## Requires Archive Move Approval

| Candidate | Target | Reason | Precondition |
| --- | --- | --- | --- |
| `docs-guide/_workspace/02_Design-Specification/**` | `workspace/plan/archive/2026-Q1-design-spec/` | D-DG-13 says these are historical design specs. | Confirm no active docs-guide links depend on these paths. |
| `docs-guide/_workspace/03_Component-Governance-Framework/**` | `workspace/plan/active/COMPONENT-GOVERNANCE/legacy/` | D-DG-13 says these belong with component governance legacy evidence. | Confirm component framework has absorbed current claims. |
| `docs-guide/canonical/**/dep-files/**` | `docs-guide/_workspace/archive/dep-files/` | D-DG-04 says dependency files are evidence, not canonical docs. | Confirm active Mintlify references are preserved. |
| `docs-guide/features/visual-explainer-workflows.mdx` | `docs-guide/_workspace/archive/` if not promoted | Pilot-only external workflow. | Decide whether this remains active contributor tooling. |
| `v2/internal/reports/repo-ops/audit-tasks-folders--*.md` | Internal report archive or generated report replacement | Many pages are legacy aliases. | Confirm generator ownership and docs.json route impact. |
| Section-local `v2/**/_workspace/reviews/**` | Section archive or concise summary | Evidence packets are not permanent docs. | Confirm summaries have been consumed. |

## Requires Route/Redirect Approval

| Candidate move | Required route action |
| --- | --- |
| `docs-guide/features/*` to `docs-guide/reference/features/*` | Add redirects for every old feature route and update `docs.json`. |
| `docs-guide/tooling/*` to `docs-guide/reference/tooling/*` | Add redirects and update public resource docs links. |
| `docs-guide/repo-ops/*` to `docs-guide/reference/repo-ops/*` | Add redirects and update generated governance maps if they link old paths. |
| `docs-guide/docs-library/*` to `docs-guide/reference/docs-library/*` | Add redirects and update source-of-truth guide links. |
| `docs-guide/source-of-truth-guide.mdx` and `docs-guide/policies/governance-index.mdx` merged into `docs-guide/index.mdx` | Redirect both old routes to `docs-guide/index`. |

## Review Order

1. Review `source-of-truth-matrix.md`.
2. Approve the docs-guide IA proposal and route map.
3. Run link/reference scans for each candidate group.
4. Execute archive moves before deletions.
5. Execute deletions only in a separate human-owned deletion commit.
