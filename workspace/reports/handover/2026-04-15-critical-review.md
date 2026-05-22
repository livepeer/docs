# Critical Review — Livepeer Docs v2 Handover

**Review date:** 2026-04-15
**Reviewer:** Claude (Cowork)
**Scope:** Entire `docs-v2-dev` working branch
**Sources consulted:** `README.md`, `AGENTS.md`, `docs-guide/source-of-truth-guide.mdx`, `workspace/reports/governance/gap-report.mdx` (2026-04-08), `workspace/plan/active/master-summary.mdx` (2026-03-24), plan folder inventory, direct file verification of urgent items.

<CustomDivider />

## 1. The honest headline

This repo is not a content-authoring problem. The infrastructure is done. **The critical path is human decisions — only Alison can unblock them.** Every AI tool, agent, or script is waiting behind the same 4–5 gates. Until those gates open, no amount of OpenClaw / Claude Code / Codex time finishes this.

"Production-ready handover today" is achievable if "today" means: urgent risks cleared, decisions made, mechanical passes executed on already-drafted content, state documented for handover. It is **not** achievable if it means "all 764 v2 pages individually reviewed and rewritten to gold standard." That's weeks of mechanical work behind the decision gates — and it's mostly already in flight.

<CustomDivider />

## 2. State of the repo

**What's solid:**

- 764 published v2 MDX pages, 279 frozen v1 pages, 47 JSX components, 160 ops scripts, 47 CI workflows, 13 OpenAPI specs — structurally coherent.
- Governance layer is real and enforced: 9 pre-commit hard gates, 15 PR workflows, explicit root-allowlist policy, generated catalogs with validators.
- `docs-guide/` as internal source-of-truth is well-organised (contributing, features, tooling, frameworks, policies, repo-ops, catalog).
- Governance gap report (2026-04-08) shows **6 remaining gaps, all P1–P3**. No P0s. All are infrastructure/CI issues, not content blockers.

**What's in motion:**

- **19 active/parked plans** documented in `workspace/plan/active/`.
  - **5 complete/parked**: TOOLING, SCRIPT WORKFLOW AUDIT, SNIPPETS, SOLUTIONS-SOCIAL-DATA (credentials-risk flagged), CANONICAL-TRUTH-GUIDES (delete candidate).
  - **14 active**: CONTENT-WRITING, CONTENTI-PIPLEINE, ORCHS, ORCHESTRATOR-CONTENT-WRITING, DOCUMENTATION, SCRIPT-GOVERNANCE, TERMINOLOGY-COLLATE, AI-TOOLS-GOVERNANCE, REPO-STRUCTURE-GOV, COMPONENT-GOVERNANCE, OSS-OWNERLESS-REPO-GOVERNANCE, _Project-Management_, AUTOMATIONS-RESTRUCTURE, CONTENT-STRUCTURE-TEMPLATES.
- Verified content already drafted:
  - **Orchestrators**: 12 pages S01–S12 drafted in `CONTENTI-PIPLEINE/content/`. Proper MDX with components. Real content, not stubs.
  - **Gateways**: 13 pages S01–S13 drafted in `ORCHESTRATOR-CONTENT-WRITING/gateways/` (folder misnamed). 9,482 words. Real content with REVIEW markers.
  - **Community/solutions**: 5 pages live, pipelines built.
  - Per-tab research packs, audience design, content scans all exist.

**What's genuinely broken:**

1. **`workspace/plan/active/SOLUTIONS-SOCIAL-DATA/.env`** — still present, 19 lines, likely real credentials. Flagged 2026-03-24. Not actioned.
2. **`blocking-items.md` in CONTENT-WRITING is empty** — 13+ actual blockers live scattered across three other files. The designated blocker tracker is non-functional as a PM tool.
3. **`ORCHS/01-CORE-NEEDS-AND-STANDARDS.md` contains wrong frontmatter schema** — lists deprecated `pageType` values not in the canonical 7-type taxonomy. Any agent using it as authority produces taxonomy violations.
4. **Dual-track Orchestrators conflict**: `CONTENTI-PIPLEINE` wrote 12 fresh S01–S12 pages. `ORCHS` staged 118 existing pages for improvement. Two different approaches to the same output, no canonical choice recorded.
5. **Folder names drifted**: `ORCHESTRATOR-CONTENT-WRITING` contains Gateways content (plus Orchestrators planning docs).
6. **`veracity-pass.md` is a DRAFT prompt with zero recorded test runs**, yet is the top-of-queue execution priority across two plans.
7. **Master-summary is 3 weeks stale** (audited 2026-03-24). Some detail may have shifted; most critical findings likely still hold.
8. **REPO-STRUCTURE-GOV TTL deadline: 2026-04-21** (6 days from now). Phase 1.1 can run now (its upstream dep is complete) but hasn't been dispatched.

<CustomDivider />

## 3. The 5 critical-path blockers (unchanged since 2026-03-24)

Everything downstream waits on these. Three are pure decisions — 20–60 minutes of Alison's time each. One is a 5-minute security fix. One is a review pass.

| # | Blocker | Type | Owner | Time | Unblocks |
|---|---------|------|-------|------|----------|
| 0 | Remove `SOLUTIONS-SOCIAL-DATA/.env` | Security fix | Alison | 5 min | Safety to commit; closes risk |
| 1 | Test + approve `veracity-pass.md` prompt (3 runs + sign-off) | Review | Alison | 45–90 min | CONTENTI-PIPLEINE Phase 7; ORCHESTRATOR-CONTENT-WRITING veracity pass |
| 2 | Resolve CONTENTI-PIPLEINE vs ORCHS (pick canonical track for Orchestrators) | Decision | Alison | 30 min | Both plans; unblocks Orchestrators consolidation into `v2/` |
| 3 | Lock Orchestrators + Gateways IA in `decision-registry.md` | Decision | Alison | 45 min | All downstream phases for both tabs |
| 4 | Human review + approval of `TERMINOLOGY-COLLATE/harvest.md` (317 terms) | Review | Alison | 60–90 min | Phase 3.5 terminology lock for all 5 tabs |

**Total blocker-clearing time: ~4 hours of Alison-only work.** None of this can be delegated to an AI.

Secondary but time-boxed:

- **REPO-STRUCTURE-GOV Phase 1.1** (V-OP verification checklist) — runnable now, TTL 2026-04-21.
- **`.allowlist` commit** (human-gated trailer) for any root changes.

<CustomDivider />

## 4. Scope of what an AI/agent session *can* do today

Once blockers 0–3 are clear, these are mechanical and parallelisable:

| Batch | Target | Inputs ready | Output |
|-------|--------|--------------|--------|
| A | Orchestrators S01–S12 veracity pass | `CONTENTI-PIPLEINE/content/` pages; approved `veracity-pass.md`; locked Orchestrators IA | 12 verified pages staged for `v2/orchestrators/` consolidation |
| B | Gateways S01–S13 veracity + layout + naming audit | `ORCHESTRATOR-CONTENT-WRITING/gateways/` pages; approved prompts; locked Gateways IA | 13 verified pages staged for `v2/gateways/` consolidation |
| C | Validator sweep on staged content | `lpd test --staged`, `lint-structure`, generator `--check`s | Pass/fail report per page |
| D | Catalog regeneration after consolidation | `generate-docs-guide-*` scripts | Updated read-only catalogs |
| E | Fix incorrect frontmatter schema in `ORCHS/01-CORE-NEEDS-AND-STANDARDS.md` | Canonical 7-type taxonomy | 1 corrected reference doc |
| F | Archive stale `_Project-Management_` CLAUDE drafts | — | 2 files moved to archive |
| G | Delete `CANONICAL-TRUTH-GUIDES` stub plan folder | — | Scope-dedupe cleanup |

Each batch is independent once its decision gate clears. Batches A and B are the bulk of the "gold-standard content" work and can run in parallel if using two agent sessions.

<CustomDivider />

## 5. What "gold standard" actually means in this repo

Per the enforced standards I reviewed:

- **Prose**: covered by `copy-rules` / `prose-quality` skills and `validator-brand-check-copy-standards.yml` (currently advisory — gap P2 #8).
- **Structure**: enforced by `lint-structure.js` against `docs.json` and the 7-type page taxonomy.
- **Frontmatter**: enforced by frontmatter validator; canonical schema in `docs-guide/standards/`.
- **Voice**: NOT enforced (gap P1 #3 — 52 known violations). Manual review only.
- **Components**: registry validation (gap P2 #9 — `continue-on-error`).
- **Rendering**: browser tests non-blocking (gap P2 #10).
- **Links/MDX**: pre-commit hook blocks.

"Gold standard" in this repo is not subjective — it's "passes all enforced gates, plus voice-register review, plus veracity pass." The mechanical definition is clear. The voice and veracity components are human-gated.

<CustomDivider />

## 6. Risks specific to today's handover

1. **Credential exposure** — the `.env` file has been sitting in the plan folder for 3+ weeks. Must be removed before any commit touches that folder.
2. **Worktree state is unusual** — the working copy reported a `fatal: not a git repository` error from a worktree reattach path. Check `git status` yourself before committing anything.
3. **OpenClaw billing block** — the intended execution tool is currently failing on the Claude-CLI provider. Execution must use an alternative path (see `2026-04-15-openclaw-workflow.md`).
4. **3-week stale master-summary** — some plans may have advanced since 2026-03-24. Spot-check before acting on each plan's stated status.
5. **REPO-STRUCTURE-GOV TTL** — 6 days until 2026-04-21 deadline.
6. **No P0 governance gaps but 52 voice violations exist in published pages** — not a blocker, but relevant to "gold standard" claims.

<CustomDivider />

## 7. Bottom line

The repo is ~85% finished. The remaining 15% is:

- 4 hours of decisions only Alison can make
- 1 security fix (5 minutes)
- ~1 day of mechanical veracity + layout passes on two tabs' drafted content (A + B above)
- Catalog regeneration + validator sweeps
- Commit, gate-check, merge

If today's goal is "all blockers cleared + Orchestrators & Gateways consolidated into `v2/` + validators green + handover doc written": **achievable, tight.**

If today's goal is "all 764 pages of v2 individually re-reviewed to gold": **not in one day, and not necessary — most of v2 is already there, with 52 known voice violations to clear as a follow-up.**
