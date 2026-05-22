# SLICE-11: workspace/ history and reports inventory

**Audit date:** 2026-05-19
**Scope:** workspace/ history tree (plan/, reports/, staging/, thread-outputs/, research/, errors/, tmp/, scripts/, build/, archive/, x-archive/)
**Mode:** READ-ONLY. No mutations. Inventory only.
**Mtimes:** All files in this tree were touched 2026-05-18 19:33–20:06 — the result of a bulk repo sync/restore. mtime does NOT reflect content recency. Content-claimed dates (in-file frontmatter / body) are reported separately when present.

---

## Workspace root files

| File | Bytes | Mtime | Content claim | Notes |
|---|---|---|---|---|
| `workspace/GOVERNANCE.md` | 434 | 2026-05-18 19:33 | "Active — 26 active plans" | Points to `docs-guide/frameworks/repo-structure.mdx` + `docs-guide/policies/workspace-lifecycle-policy.mdx`. |
| `workspace/README.md` | 8542 | 2026-05-18 19:33 | n/a (governance contract) | Defines the workspace/ approved-generators table (17 generator → output paths). Folder map declared: `plan/{active,complete}`, `reports/`, `scripts/`, `errors/`. **Mismatch:** the live tree also contains `build/`, `research/`, `staging/`, `thread-outputs/`, `tmp/`, `archive/`, `x-archive/`, `plan/future/`, `plan/repo-ops-reports/` — not described in README. |
| `workspace/.allowlist` | 218 | 2026-05-22 11:19 | n/a | Repo allowlist file. |

**Finding R1 (contradiction):** README.md declares only `plan/{active,complete}`, `reports/`, `scripts/`, `errors/`. Live tree contains 7+ additional sub-roots (build, research, staging, thread-outputs, tmp, archive, x-archive, plus plan/{future,repo-ops-reports}). README is stale relative to live tree.

**Finding R2 (contradiction):** GOVERNANCE.md claims "26 active plans" but `plan/active/` directory listing shows 33 entries (incl. `.gitkeep`). Count drift.

---

## workspace/plan/ — top-level structure

```
plan/
├── active/                # 33 entries (out of slice scope — covered separately)
├── complete/              # 6 archived plans + 4 top-level handoff files
├── future/                # BACKLOG/ + USEFULNESS-SCORING/ + 3 loose plan files
└── repo-ops-reports/      # historical install-validation + page-content-research-history
```

---

## workspace/plan/complete/

| Item | Bytes | Mtime | Type |
|---|---|---|---|
| `AI-TOOLS-GOVERNANCE-audit-ai-adapters.md` | 7982 | 2026-05-18 19:33 | audit (completed) |
| `AI-TOOLS-GOVERNANCE-audit.md` | 11498 | 2026-05-18 19:33 | audit (completed) |
| `AI-TOOLS-GOVERNANCE-handoff-docs-guide-path-updates.md` | 2124 | 2026-05-18 19:33 | handoff |
| `AI-TOOLS-GOVERNANCE-plan.md` | 22579 | 2026-05-18 19:33 | execution plan (completed) |
| `audience-mapping/` | dir | 2026-05-18 19:38 | subdir (13 entries) |
| `dep-COPYWRITING FRAMEWORK/` | dir | 2026-05-18 19:37 | subdir (8 entries) — name uses spaces+UPPERCASE, violates naming rule |

**Finding C1 (governance violation):** `complete/dep-COPYWRITING FRAMEWORK/` uses spaces and uppercase. Workspace README explicitly bans uppercase + spaces in new filenames. Pre-existing legacy entry — flag for rename or archive.

---

## workspace/plan/future/

### Top-level files

| File | Bytes | Plan-type | Content claim |
|---|---|---|---|
| `optimise-performance.md` | 8254 | execution | Dated "March 1, 2026". P0/P1/P2 perf backlog. Cites Mintlify, 70.6MB GIF on mission-control, 1.8–1.9MB HTML payload. Live status not verified. |
| `page-content-research-trust-roadmap.md` | 5684 | (no frontmatter) | 6-phase claim-registry trust roadmap. Self-declares "Current Position: Phase 1". |
| `visual-explainer-workflows.mdx` | 13837 | (not read in full — large mdx) | |

### BACKLOG/

| File | Bytes | Content |
|---|---|---|
| `master-tasks.md` | 6338 | Master task list, last updated **2026-03-29**. Tab-by-tab status (ABOUT, GATEWAYS "FINALISING TONIGHT", others "Pending"). Includes BL-024..BL-031 inline (governance work). |
| `registry.md` | 19995 | Full backlog registry — **BL-001 to BL-046**. Last item dated 2026-04-09. See BL inventory below. |
| `investigation.md` | 207 | Empty — "cleared 2026-03-29". |
| `orch-validated.md` | 1450 | Empty validation tracker (S1–S12). Created 2026-03-24. No rows filled. |
| `recovery/` | dir | **58 binary/text recovery files** with hash filenames (e.g. `8b5d5ec5_*@v4`). Not human-readable plans. 1 file is `c1bd1064_checks.mdx` (30.3KB MDX text). The rest appear to be Claude Code transcript/checkpoint snapshots. |

#### Backlog item inventory (registry.md + master-tasks.md)

**Open backlog items by priority:**

| ID | Priority | Status | Source date | Topic |
|---|---|---|---|---|
| BL-002 | — | Parked | 2026-03-29 | Voice input to Claude Code |
| BL-003 | P2 | Pending | 2026-03-29 | sync-docs-paths dry-run in pre-commit |
| BL-004 | P3 | Pending | 2026-03-29 | sync-docs-paths CLI formatting |
| BL-005 | P1 | Pending | 2026-03-30 | Stale sitemap-ai.xml `contract-addresses-canonical` |
| BL-006 | P0 | Pending | 2026-03-30 | Automate generate-og-images.js + generate-seo.js in CI |
| BL-007 | P0 | Pending | 2026-03-30 | Companion file automation pipeline (contracts/glossaries) |
| BL-008 | P1 | Pending | 2026-03-30 | Register HistoricalContractTable in component-registry.json |
| BL-009 | P0 | Pending | 2026-03-30 | Mintlify CDN not propagating docs-v2 deployments |
| BL-010 | P2 | Pending | 2026-03-30 | Clean up solutions-merge worktree |
| BL-011 | P2 | Pending | 2026-03-30 | Remove dead .gitattributes LFS declarations |
| BL-012 | P3 | Pending | 2026-03-30 | git filter-repo to purge binaries from history |
| BL-013 | P1 | Pending | 2026-03-31 | PreEdit hook: block writes to auto-generated files |
| BL-014 | P1 | Pending | 2026-03-31 | Redesign `/thread` as interactive prompt workflow |
| BL-015 | N/A | **CLOSED — invalid** | 2026-03-31 | Headless-mode CI for changelog/contract pipelines |
| **BL-013** (dup id) | P1 | Pending | 2026-03-30 | gray-matter not declared as dependency |
| **BL-014** (dup id) | P2 | Pending | 2026-03-30 | Clean up fix-sync-assets worktree |
| **BL-015** (dup id) | P2 | Pending | 2026-03-31 | generate-ai-sitemap.js wordCount:0 for composable pages |
| BL-016 | P2 | Pending | 2026-03-31 | Build `/audit` skill |
| BL-017 | P2 | Pending | 2026-03-31 | Build `/verify` skill |
| BL-018 | P3 | Pending | 2026-03-31 | Build `/document` skill |
| BL-019 | P3 | Pending | 2026-03-31 | Build `/cleanup` skill |
| BL-020 | P1 | Pending | 2026-03-31 | Register contract addresses workflow on main |
| BL-021 | P2 | Pending | 2026-03-31 | Delete ContractAddressDisplay.jsx |
| BL-022 | P2 | Pending | 2026-03-31 | Render-test v1 Danger callouts |
| BL-023 | P0 | Pending | 2026-03-31 | Cherry-pick contract workflow to docs-v2 |
| BL-024 | P1 | Pending | 2026-03-31 | Add llms.txt + sitemap-ai.xml to `/propagate` audit surfaces |
| BL-025 | P2 | Pending | 2026-03-31 | Automate generate-og-images.js in CI |
| BL-026 | P2 | Pending | 2026-03-31 | Mint preview transformAlgorithm TypeError |
| BL-027 | P1 | **Closed 2026-04-05** | 2026-04-01 | Real staged-suite failures after harness repair |
| BL-028 | P1 | Pending | 2026-04-03 | CP-6 contracts browser validation hang |
| BL-029 | P2 | Pending | 2026-04-03 | Consolidate contracts catalog discovery |
| BL-030 | P1 | Pending | 2026-04-03 | Governance headers for migrated contracts pipeline |
| BL-031 | P1 | Pending | 2026-04-03 | Register migrated contracts UI components |
| BL-032 | P0 | **Closed 2026-04-05** | 2026-04-05 | Resource HUB redirect contract in docs.json |
| BL-033 | P0 | Pending | 2026-04-05 | Invalid frontmatter in blockchain-contracts.mdx |
| BL-034 | P0 | Pending | 2026-04-05 | Scoped Mint OG/runtime failures, React error #418 |
| BL-035 | P1 | **Closed 2026-04-05** | 2026-04-05 | Remove snippets/automations from script-governance roots |
| BL-036 | P1 | Pending | 2026-04-05 | Human-owned delete commit for retired snippets/automations |
| BL-037 | P1 | Pending | 2026-04-05 | Human-owned delete commit for tools/ restructures |
| BL-038 | P1 | Pending | 2026-04-05 | Refresh stale UI template generated artifacts |
| BL-039 | P1 | Pending | 2026-04-05 | Human-owned delete commit for About/Gateways/Delegators IA |
| BL-040 | P2 | Pending | 2026-04-06 | Review/retire bounded workflow-governance transitional surfaces |
| BL-041 | P1 | Pending | 2026-04-06 | Verify promoted Developers claims |
| BL-042 | P1 | Pending | 2026-04-06 | Human-owned delete commit for Developers archive moves |
| BL-043 | P1 | Pending | 2026-04-06 | Retire Delegators _workspace/TO-ADD/files |
| BL-044 | P2 | Pending | 2026-04-06 | Scoped preview redirect omissions |
| BL-045 | P2 | Pending | 2026-04-06 | page-index generation handle unstaged renames |
| BL-046 | P0 | Pending | 2026-04-09 | Rerun final validation for merge PR #876 |

**Finding B1 (governance violation):** Three BL IDs are duplicated (BL-013, BL-014, BL-015). Each pair has different content. Registry needs deduplication.

**Finding B2 (latest activity):** Newest backlog entry is BL-046 dated **2026-04-09**. That is **40 days before audit (2026-05-19)**. Backlog has not been updated in ~6 weeks despite the master tasks table claiming an updated date of 2026-03-29.

**Finding B3 (cross-ref with master-tasks.md):** master-tasks.md contains its own BL-024..BL-031 list (governance plan items) which does NOT match the BL numbering in registry.md. Two parallel BL-NNN spaces exist — high risk of confusion.

### USEFULNESS-SCORING/

| File | Bytes | Plan-type | Status |
|---|---|---|---|
| `usefulness-scoring-gap-analysis.md` | 1901 | analysis | Implementation strategy doc — cites `tools/scripts/audit-v2-usefulness.js`, OpenRouter free tier. No date in body. |
| `usefulness-scoring-implementation-strategy.md` | 3025 | analysis | Same plan, "Locked Decisions" — frontmatter `purpose`/`audience` keys. References `tools/config/usefulness-*.json` SOT files. |

**Finding F1 (potential drift):** Plan refers to `tools/scripts/audit-v2-usefulness.js` but the live approved-generators table (workspace/README.md) lists this as `audit-v2-usefulness.js` → `reports/quality-accessibility/docs-usefulness/latest/`. Path prefix `tools/scripts/` vs current convention `operations/scripts/`. Likely drift from a pre-rename plan.

