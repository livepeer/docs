# Project State — Content Writing Pipeline
> Last updated: 2026-04-06
> This file must be read at the start of every AI session and updated after every agent batch.

---

## Running Agents (currently in flight)

| Agent | Purpose | Output path |
|---|---|---|
| — | About v1 full content read | context-packs/about-v1-content.md |

---

## Completed — Outputs Available

| Output file | Notes | Unblocks |
|---|---|---|
| Delegators canonical IA rebuild | `v2/delegators/**` now follows the canonical portal/concepts/delegation/guides/resources model; the live Delegators routes were rebuilt, glossary/reference surfaces normalized, and the preview/generator dependencies repaired to support the new IA | Unblocks focused review of the live Delegators tab and a human-owned cleanup commit for any tracked shadow-source removals |
| Gateway single-click deployment path migration | `v2/gateways/setup/install/community-projects.mdx` was moved to `v2/gateways/guides/deployment-details/gwid-single-click-deploy.mdx`; docs.json, scoped navigation mirrors, active gateway cross-links, redirects, and generated page indexes now point at the new canonical route | Unblocks staging/review of the gateway deployment-details move without leaving broken active links on the old route |
| Production governance cutover | `operations/governance/**` and `operations/config/**` now operate as the production control plane; governance-sensitive PRs require explicit approval labels plus PR-body evidence; active/current governance reports and docs were cleaned to the steady-state architecture; and the ownerless handover report was generated | Unblocks production review of the governance model without relying on bridge-era behavior or undocumented approval process |
| About, Gateways, and Delegators IA route alignment | The v2 About, Gateways, and Delegators folder trees now match their approved `docs.json` contracts, repo-wide path consumers were updated, and route-derived public artifacts were regenerated to the new canonical paths | Unblocks human review and a focused human-owned deletion commit for the IA migrations without carrying stale path references |
| Tools governance consolidation | `tools/config`, `tools/dev`, and `tools/lib` now use governed namespace contracts; workflow-owned and legacy tool surfaces were relocated or removed; and maintained script indexes/registries were regenerated to the live paths | Unblocks a final human-owned deletion commit and future `tools/` maintenance on explicit folder contracts instead of ad hoc sprawl |
| Contracts docs-v2 migration PR | Isolated `docs-v2` branch `codex/20260403-contracts-docs-v2-migration` pushed and opened as PR #857 with contracts pipeline, generated data, composables, and importer routes migrated from the working source surface | Unblocks review and merge of the contracts surface onto `docs-v2` without touching `Docs-v2-dev` |
| Snippets root governance consolidation | `snippets/guide.mdx` is the canonical manual framework, `snippets/snippets-registry.mdx` is generated from the live tree, `framework-canonical.mdx` is archived, `snippets/automations` is no longer a script-governance root, `snippets/automations/globals/` is retired and deleted in the working tree, and `lpd test --staged` is green for the current worktree | Unblocks future snippets folder governance without maintaining multiple drifting root files or carrying the old closeout debt |
| VS Code Claude extension fix toolkit | Canonical diagnostic, 7 scripts, extension patched, cron backup, community research. `workspace/plan/active/FUCK_CLAUDE/` | Unblocks stable VS Code workflow — re-run `patch-extension.sh` after updates |
| Contracts canonical documentation cleanup | Contracts planning root normalized into `Canonical/`, `CURRENT-STATE/`, and `DEPRECATED/`; canonical workflow references synced to current script behavior | Unblocks contracts planning/navigation by keeping only current framework docs at root and preserving live script references |
| Contracts surface redesign merge | Canonical contracts reference and verifier split is merged into local `docs-v2-dev`; shared contracts view-model and catalog-config derivation now back the About contracts surfaces | Unblocks local review of the contracts redesign and future pipeline consolidation work |
| Mint parse hygiene remediation | Canonical templates are MDX-safe, routed/composable MDX contract enforced, globals.jsx is the single source of truth for gateway release data, and Mint boots cleanly without parse warnings | Unblocks reliable `mint dev` / `lpd dev` and prevents routed-page import regressions |
| resources-restructure (Gateways + Orchestrators) | reference/ and knowledge-hub/ sub-sections created. All files moved. docs.json updated. 15 redirects added. No content changed. | Unblocks IA audit accuracy (folder tree now matches pipeline spec) |
| context-packs/orchestrators-ia-prereq.md | Folder tree + nav tree + discrepancies | Human IA review (Orchestrators) |
| context-packs/gateways-ia-prereq.md | Folder tree + nav tree + discrepancies | Human IA review (Gateways) |
| context-packs/developers-ia-prereq.md | Folder tree + nav tree + discrepancies | Human IA review (Developers) |
| context-packs/about-ia-prereq.md | Folder tree + nav tree + discrepancies | Human IA review (About) |
| context-packs/delegators-ia-prereq.md | Folder tree + nav tree + discrepancies | Human IA review (Delegators) |
| context-packs/orchestrators-ia-mapping.md | IA section decisions mapped | Human review + lock (Orchestrators) |
| context-packs/gateways-full-content.md | 536 files, 3.67MB | Phase 1b persona emergence (Gateways) |
| context-packs/gateways-content-scan.md | Phase 2 — Gateways complete | Phase 3 (Gateways) |
| context-packs/orchestrators-full-content.md | 4636 lines, full v2/orchestrators/ tree incl. _workspace/x-archived/ | Phase 1b persona iteration check (Orchestrators) — all v1+v2 content now available |
| context-packs/orchestrators-content-scan.md | Phase 2 — Orchestrators complete | Phase 3 IA Audit (Orchestrators) — after human content scan review |
| context-packs/orchestrators-v1-content.md | | Phase 1b (Orchestrators) |
| context-packs/gateways-v1-content.md | | Phase 1b (Gateways) |
| context-packs/developers-full-content.md | 112 files, 534KB | Phase 1b (Developers) |
| context-packs/about-full-content.md | v2 full content read complete | Phase 1b (About) |
| context-packs/delegators-full-content.md | v2/delegators/ path | Phase 1b (Delegators) |
| Staged test harness repair | `bash tools/lpd test --staged` now bootstraps split repo dependency roots and reaches real validator failures instead of module crashes | Unblocks isolated remediation of staged repo debt |
| context-packs/developers-v1-content.md | | Phase 1b (Developers) |
| context-packs/delegators-v1-content.md | 6 files — 3 misrouted Studio docs flagged | Phase 1b (Delegators) |
| context-packs/developers-content-scan.md | Phase 2 — Developers complete | Phase 3 (Developers) after Phase 0 decisions |
| context-packs/about-content-scan.md | Phase 2 — About complete | Phase 3 (About) after Phase 0 decisions |
| context-packs/delegators-content-scan.md | Phase 2 — Delegators complete | Phase 3 (Delegators) after Phase 0 decisions |
| READ-EVERY-TIME/PROJECT-MANAGEMENT-CANONICAL.md | Rule 2.13 added | — |
| READ-EVERY-TIME/DEPENDENCY-TREE.md | | — |
| READ-EVERY-TIME/ai-rules-guides.md | Rule 2.13 added | — |
| decisions/decision-registry.md | D-NAV-01 logged | — |
| decisions/blocking-items.md | | — |
| decisions/tab-status.md | Updated | — |
| decisions/feedback-routing-map.md | | — |
| decisions/cross-tab-journeys.md | | — |
| decisions/terminology-tracking.md | | — |
| prompt-testing-protocol.md | | — |
| plan-canonical.md | Progress tracker updated | — |
| Frameworks/veracity.md | LOCKED 2026-03-23 | Veracity pass |
| Frameworks/veracity-library.md | 45 sources | Veracity pass |
| Prompts/Prompts-By-Phase/7-veracity-pass/veracity-pass.md | DRAFT — awaiting test runs | — |
| Prompts/Prompts-By-Phase/7-veracity-pass/pack-guide.md | | — |
| Prompts/Prompts-By-Phase/2-content-scan/content-scan.md | | — |
| Prompts/Prompts-By-Phase/3-content-pass/content-pass.md | AUDIT mode built | — |
| Prompts/Prompts-By-Phase/2-structure-audit/structure-audit.md | Position violation check added | — |

---

## Stopped / Failed (previous session — files do NOT exist on disk)

| Output file | Failure reason |
|---|---|
| — | — |

> All previously stopped agents have either completed or been relaunched (see Running above).

---

## Queued (waiting on dependencies)

| Task | Waiting on | Tab |
|---|---|---|
| Phase 1b persona iteration check | Human IA review + lock remaining (full content ✅) | Orchestrators |
| Phase 1b persona iteration check | Human IA review + full content both complete | Gateways |
| Phase 1b persona iteration check | Human IA review complete (full content ✅) | Developers |
| Phase 1b persona iteration check | Human IA review complete (full content ✅) | About |
| Phase 1b persona iteration check | Human IA review complete (full content ✅) | Delegators |
| Phase 2.5 IA-mapped research packs | IA locked per tab | All tabs |
| Phase 3 IA Audit | Content scan approved + Phase 0 decisions | Developers, About, Delegators |
| Phase 3 IA Audit | Human content scan review + Phase 0 decisions | Orchestrators |
| About v1 full content read | Agent in flight | About |

---

## Blocked (human decision needed)

| Decision | Tab | Blocks |
|---|---|---|
| Rewards placement (before or after operator selection?) | Delegators | Phase 3 |
| S6 split (real-time/custom compute) | Developers | Phase 3 |
| About multi-audience token | About | Phase 6+ |
| NaaP terminology lock | Gateways | Phase 3.5 |
| Human review + lock IA — PRIORITY 1 | Orchestrators | All downstream Orchestrators phases |
| Human review + lock IA — PRIORITY 2 | Gateways | All downstream Gateways phases |
| structure-audit.md fix (linear/on-demand/supporting/orphan categorisation) | All tabs | Phase 2 structure audit |
| File corruption in `operator-rationale.mdx` — garbage chars before frontmatter | Orchestrators | Phase 3 parsing |

---

## Watcher Flags

| Flag | Thread | Issue | Date |
|---|---|---|---|
| LIMBO | Contracts & Changelogs | Changelog migration half-done — old files deleted but unstaged, architecture.md references paths that may not exist on disk | 2026-03-29 |
| REAL-DEBT | Contracts Surface Redesign | CP-6 contracts browser validation can hang on the newest `docs-v2-dev` base even when the scoped preview serves the canonical and verifier routes | 2026-04-03 |
| REAL-DEBT | Contracts Surface Migration to docs-v2 | New contracts pipeline helper modules lack canonical script-governance headers, and the regenerated component registry still does not surface all migrated contracts UI components | 2026-04-03 |
| REVIEW | Contracts Local Render Recovery | The contracts routes were render-verified locally on port `3350`, but `snippets/composables/pages/canonical/livepeer-contract-addresses.mdx` now contains an uncommitted workflow-verification accordion rewrite and `.github/workspace/phase2/pipeline-review-process.md` remains unrelated untracked work | 2026-04-03 |
| REVIEW | Snippets Assets `/site` Migration Verification | Full verification runbook executed in a disposable clone. Asset/path probes are green, but completion is blocked by `docs.json` Resource HUB redirect drift, invalid frontmatter in `v2/about/livepeer-protocol/blockchain-contracts.mdx`, and scoped runtime failures (`React #418`, `undefined.mintlify.app` OG URLs, request-abort surfaces) on the representative routes | 2026-04-05 |
| REVIEW | Tools Governance Consolidation | The `tools/` restructure is validated but still uncommitted. The worktree contains tracked deletions that require a human-owned commit with `--trailer "allow-deletions=true"`, and unrelated root-governance/snippets work remains in the same tree and should be staged separately | 2026-04-05 |
| REVIEW | About/Gateways/Delegators IA Route Alignment | The path migrations are implemented and targeted route validators are green, but the worktree still needs a human-owned deletion commit for the tracked moves and `lpd test --staged` remains blocked by staged style/copy debt plus unrelated UI template artifact drift | 2026-04-05 |
| REVIEW | Production Governance Cutover | The production governance model is implemented and validated, but `.github/workspace/framework-canonical.md` and `.github/workspace/decisions-log.mdx` remain intentionally transitional workflow-governance inputs under bounded review cadence rather than final retired surfaces | 2026-04-06 |
| REVIEW | Developers Tab Restructure and Content Promotion | The Developers IA/nav/content restructure is implemented and locally validated, but promoted product/external claims still need a primary-source verification pass and the tracked archive moves require a human-owned deletion commit with `--trailer "allow-deletions=true"` | 2026-04-06 |
| REVIEW | Delegators Canonical IA Rebuild | The live Delegators routes are rebuilt and validated, but `_workspace/TO-ADD/files/**` remains as tracked shadow source content and scoped preview did not prove the legacy redirect routes even though `docs.json` contains the redirect entries | 2026-04-06 |

---

## Tab Priority Order

1. Orchestrators
2. Gateways
3. Developers
4. About
5. Delegators
