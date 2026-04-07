---
title: V2 Folders Cleanup & Governance Subplan
status: active
parent: REPO-STRUCTURE-GOV/plan.md
created: 2026-03-21
---

# V2 Folders Cleanup & Governance Subplan

## Current State (post 2026-03-21 pass)

### _workspace/ — normalized

All `_workspace/` directories exist across sections. Non-standard subdir names renamed:
- `_archive/` → `archive/`, `_contextData/` → `context-data/`, `_contextData_/` → `context-data/`
- `_move_me/` → `staging/`, `x-archived/` → `archive/`, `x-deprecated/` → `deprecated/`

Policy (`v2-folder-governance.mdx`) updated with full approved subdir list.

### Section inventory

| Section | _workspace/ | Loose files / non-standard dirs | Notes |
|---------|-------------|--------------------------------|-------|
| `v2/about/` | ✓ | `todo.txt` (in _workspace ✓), contract addresses + zip | zip file in _workspace is unusual |
| `v2/community/` | ✓ | Staging content in `_workspace/staging/` | staging/ needs review/action |
| `v2/developers/` | ✓ | Large archive/ (31 items) | Archive size warrants review |
| `v2/gateways/` | ✓ | `concepts-restructure.md`, `personas.md`, `plan.md` loose in _workspace root | Should be in notes/ or plans/ |
| `v2/home/` | ✓ | Appears clean | |
| `v2/internal/` | ✓ | `ally-notes.mdx`, `marketing-posts.md`, `marketing-posts-v2.md` in _workspace (moved) | |
| `v2/lpt/` | ✓ | Appears clean | |
| `v2/orchestrators/` | ✓ | Appears clean | |
| `v2/resources/` | ✓ | Appears clean | |
| `v2/solutions/` | ✓ | Appears clean | |
| `v2/_workspace/` | N/A | `restructure.mdx`, `references/`, `research/`, `community-tab-04…` loose at root | Loose files need subfolder placement |
| `v2/internal/` | ✓ | `layout-components-scripts-styling/` just moved to _workspace | |

### Special cases — no decision yet

| Folder | Issue | Status |
|--------|-------|--------|
| `v2/cn/`, `v2/es/`, `v2/fr/` | i18n mirror trees — don't follow content section rules | No governance doc yet |
| `v2/templates/` | Shared MDX templates — not a content section | Decision needed: stay here or move to `snippets/templates/`? |
| `v2/internal/` | Looser rules acceptable — has its own content structure | Needs own policy or governance addendum |

---

## Problems to Solve

### 1. No enforcement for loose files at section root

The contract says `v2/<section>/` may only contain: nav-registered files, `_workspace/`, and section-root files (`index.mdx`, `portal.mdx`, `navigator.mdx`). But there is no pre-commit enforcement. A developer can drop a `todo.txt` or `notes.md` at `v2/gateways/` without the hook blocking it.

**2C.7 is open:** Design a pre-commit gate that blocks new files at `v2/<section>/*.{md,mdx,txt}` unless the filename appears in `docs.json` nav entries.

### 2. Loose files inside _workspace/ root (not in approved subdirs)

Several `_workspace/` dirs have files sitting directly at root (not in a subfolder):
- `v2/_workspace/`: `restructure.mdx`, `community-tab-04-context-and-recalibration.md`
- `v2/gateways/_workspace/`: `concepts-restructure.md`, `personas.md`, `plan.md`
- `v2/community/_workspace/`: `community-tab-02-audience-and-purpose.md`, `community-tab-05-final-ia-and-pages.md`

Policy says loose files in `_workspace/` root are temporary (30-day TTL). These are likely stale.

### 3. Large archive/ in developers/ _workspace

`v2/developers/_workspace/archive/` has 31 items. These are old pages from a previous restructure. No review has been done. Some may be candidates for permanent deletion (with human approval).

### 4. i18n trees have no governance

`v2/cn/`, `v2/es/`, `v2/fr/` are translation mirror trees. They mirror the English structure but may be stale, incomplete, or have their own non-standard folders. No governance policy exists for them.

### 5. v2/templates/ placement is unresolved

`v2/templates/` contains shared MDX page templates used by content authors. It is not a content section. It may be better placed at `snippets/templates/` to align with where shared components live.

### 6. v2/internal/ has no policy

`v2/internal/` holds internal-only pages (reports, RFPs, review artifacts). It has its own structure and looser rules. But there is no documented policy for what belongs there and what does not.

---

## Recommendations

### R1 — Design pre-commit gate for loose section-root files (2C.7)

Block new `*.md`, `*.mdx`, `*.txt` files committed directly to `v2/<section>/` unless the path is registered in `docs.json`. Implementation options:
- Option A: Grep docs.json for the staged path; fail if not found
- Option B: Maintain an explicit allowlist of permitted section-root filenames (index.mdx, portal.mdx, navigator.mdx)

Option B is simpler and more explicit. Recommend Option B.

### R2 — Triage loose files in _workspace/ roots

For each loose file in `_workspace/` root (not in a subfolder):
- If it's active planning material → move to `notes/` or `plans/`
- If it's stale (>30 days with no edits) → delete with human approval
- If it's research → move to `research/`

### R3 — Review and thin developers/_workspace/archive/

31 archived pages from a previous restructure. Review for:
- Files with zero refs anywhere in v2/ → candidate for deletion
- Files that were superseded by published pages → document and delete
- Files that are still useful reference → keep in archive/

### R4 — Write i18n governance addendum

Short doc (can be a section in `v2-folder-governance.mdx` or a separate `v2-i18n-governance.mdx`) covering:
- i18n trees are mirrors — they do not have independent `_workspace/` or `x-deprecated/` dirs
- All i18n content is governed by its English counterpart's lifecycle
- Stale translations follow the same deprecation path as English pages

### R5 — Decide v2/templates/ placement

Two options:
- Keep at `v2/templates/` — current location, easy to find for content authors
- Move to `snippets/templates/` — aligns with where shared MDX components live

Recommend decision by the person who owns content authoring workflow.

### R6 — Write v2/internal/ policy

`v2/internal/` should have a policy addendum in `v2-folder-governance.mdx` documenting:
- What types of content belong (reports, RFPs, internal audits)
- What does NOT belong (publishable content stubs, planning notes)
- How internal/ _workspace/ subdirs are governed (same TTL rules as other sections)

---

## Tasks

> All tasks require explicit go-ahead before execution.

- [ ] **V2.1** Design pre-commit gate for loose section-root files — spec Option B, get hook design review (R1)
- [ ] **V2.2** Implement gate once spec is approved (R1)
- [ ] **V2.3** Triage loose files in v2/_workspace/ root → move to notes/ or plans/ (R2)
- [ ] **V2.4** Triage loose files in v2/gateways/_workspace/ root (R2)
- [ ] **V2.5** Triage loose files in v2/community/_workspace/ root (R2)
- [ ] **V2.6** Review v2/developers/_workspace/archive/ — identify deletion candidates (R3) — needs human approval per file
- [ ] **V2.7** Write i18n governance addendum (R4)
- [ ] **V2.8** Decide v2/templates/ placement (R5) — human decision required
- [ ] **V2.9** Write v2/internal/ policy addendum (R6)

---

## Open Questions (need human decision)

1. Should the pre-commit gate (V2.1/V2.2) be built now, or deferred until after content sections are cleaner?
2. Should `v2/templates/` stay or move to `snippets/templates/`?
3. Should i18n trees (`v2/cn/`, `v2/es/`, `v2/fr/`) have `_workspace/` dirs or explicitly not?
4. Is `v2/internal/` governed by the same `_workspace/` TTL rules as content sections?
5. Who reviews the developers/ archive for deletion — docs team or the developer who archived it?
