# Health: Design Overview

> Canonical doc for this concern. Updated as we progress. Single source of truth.

**Concern:** Health
**Definition:** Site integrity: links, rendering, structure, freshness, accessibility. If this breaks and nobody notices, users get a degraded experience.

**Categories covered:**

- Link integrity
- Frontmatter and structural validity
- Copy and style quality
- Rendering and runtime integrity
- Freshness and API contract health

**Related docs:**

- [Outcomes Requirements](.github/workspace/outcomes.md)
- [Actions + Pipeline Framework](.github/workspace/framework-canonical.md)
- [Pipeline Review Process](.github/workspace/phase2/pipeline-review-process.md)
- [Product Capabilities + Aims](.github/workspace/phase2/locked-pipelines.md)
- `.github/workspace/phase2/pipeline-design/health.md`
- `.github/workspace/actions-library/auditors/health/content-health.mdx`
- `.github/workspace/actions-library/validators/health/broken-links.mdx`

**Process docs:** `./process-docs/`

- `research.md` - documents that define what this concern needs to cover
- `audit.md` - what exists today, pipeline-by-pipeline findings
- `related/` - raw agent outputs, supporting data

---

## 1. Research

_What documents in the repo define health requirements? What policies exist? What standards are written down?_

**Status:** Complete

**Source documents to read:** `process-docs/research.md`

---

## 2. Requirements

_What rules must be enforced for health? Organised by category. Derived from research._

**Status:** Locked for the current repo-root contract.

| Category | Canonical repo-root owner | Current state |
|---|---|---|
| Frontmatter taxonomy | `tools/lib/docs/frontmatter-taxonomy.js` + `operations/tests/unit/frontmatter-taxonomy.test.js` | Active |
| Frontmatter structure | `operations/scripts/validators/content/structure/lint-structure.js` | Active, with status/alias checks remaining advisory |
| Docs-index consumption | `operations/scripts/generators/content/catalogs/generate-docs-index.js` and downstream consumers | Active |
| Spelling | `operations/tests/unit/spelling.test.js` | Active |
| Style and em-dash enforcement | `operations/tests/unit/style-guide.test.js` + `operations/scripts/dispatch/governance/pre-tool-guard.js` | Active |
| Internal link health | `operations/scripts/audits/content/health/page-links-audit.js` | Active |
| PR broken-links workflow | `.github/workflows/broken-links.yml` | Advisory PR surface, not the canonical repo-root auditor |

---

## 3. Design

_What pipelines serve the requirements? What's the target architecture? What ships now vs what's backlog?_

**Status:** Implemented for the current repo-root path.

**Design must include:**
- Target enforcement pipeline per category
- What's active now (ship/fix immediately)
- What's deferred/backlog (designed but not built yet)
- What's turned off initially (P3 advisory until baseline clean, then promote to P2)

### Current design decisions

- This concern keeps the existing repo-root commands. No new scripts were introduced in the gateway/frontmatter alignment pass.
- `page-links-audit.js` is the canonical internal-link owner for repo-root audits and remediation. The PR `broken-links` workflow remains advisory.
- `spelling.test.js` already checks MDX/JSX prop text. `style-guide.test.js` and `pre-tool-guard.js` now do the same for em-dash enforcement.
- Frontmatter alias cleanup for `pageType`, `purpose`, `audience`, and `status` is enforced as advisory repo-wide after cleanup. This pass does not promote alias cleanup to a hard gate.
- The repo-root governance audit runtime must resolve dependencies from `operations/` for `operations/scripts/**` entrypoints instead of relying on unrelated package-local installs.

---

## 4. Audit

_What exists today? What's working, broken, missing? Covers scripts, workflows, docs, and config._

**Status:** Complete for the gateway/frontmatter alignment pass.

See `process-docs/audit.md` for findings.

---

## 5. Implementation Plan

_What to fix/build, in order._

**Status:** Blocked on design.

---

## 6. Implementation Log

_Fixes applied, in progress. Updated as work happens._

| Date | What was done | Files changed |
|---|---|---|
| 2026-04-06 | Repaired repo-root frontmatter/governance runtime ownership, aligned checker documentation with existing repo-root entrypoints, and completed gateway frontmatter/link/style remediation using existing scripts only. | `operations/package.json`, `operations/scripts/validators/governance/pr/audit-script-inventory.js`, `tools/lib/docs/frontmatter-taxonomy.js`, `operations/tests/unit/frontmatter-taxonomy.test.js`, `operations/scripts/automations/content/language-translation/lib/frontmatter.js`, `operations/scripts/validators/content/structure/lint-structure.js`, `operations/tests/unit/style-guide.test.js`, `operations/scripts/dispatch/governance/pre-tool-guard.js`, `v2/gateways/**`, `.github/workspace/**` |

---

## 7. Test Results

_Dry-run outputs per pipeline._

**Status:** In progress.

Current checkpoint:

- `node operations/tests/unit/frontmatter-taxonomy.test.js` passes
- strict `page-links-audit.js` on authored gateways reports `0` missing refs
- `spelling.test.js` passes on authored gateways
- `quality.test.js` is down to advisory debt plus one freshly added frontmatter parse issue resolved during the pass
- representative `lint-structure.js` runs show no blocking taxonomy issues on current gateway pages after the targeted fixes

---

## 8. Documentation Status

_Are ALL canonical docs current with this concern? Repo-wide._

| Surface | Doc | Current? | Notes |
|---|---|---|---|
| Health concern design | `.github/workspace/design/health/design-overview.md` | Yes | Updated to reflect current repo-root owners and advisory boundaries. |
| Health pipeline design | `.github/workspace/phase2/pipeline-design/health.md` | Yes | Updated to reflect canonical repo-root scripts vs advisory workflows. |
| Content-health workflow doc | `.github/workspace/actions-library/auditors/health/content-health.mdx` | Yes | Notes canonical repo-root quality/frontmatter owners. |
| Broken-links workflow doc | `.github/workspace/actions-library/validators/health/broken-links.mdx` | Yes | Notes workflow is advisory and repo-root `page-links-audit.js` is canonical. |

---

## 9. Branch Status

### docs-v2-dev

### docs-v2

---

## 10. Backlog and Recommendations

_Captured during work. Not actioned until design is approved._
