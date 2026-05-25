# Master Consolidation Map — Livepeer Docs Repo (2026-05-22)

> **Status:** synthesised from 9 file-level inventory slices on disk + direct main-session reads for the slices the agent-spawn hook blocked. Every count below is verified live as of 2026-05-22 unless otherwise dated. Contradictions vs documented claims are explicit.
>
> **Companion slice files** in this folder (`workspace/thread-outputs/repo-consolidation-deep/`):
> - `SLICE-02-ai-tools.md` (557 lines) · ai-tools/
> - `SLICE-03-operations-governance-tests-hooks.md` (362 lines) · operations/governance + operations/tests + .githooks
> - `SLICE-05-github.md` (~330 lines, direct read) · .github/
> - `SLICE-06-agent-adapters.md` (797 lines) · AGENTS.md + native agent adapters
> - `SLICE-08-snippets.md` (410 lines) · snippets/
> - `SLICE-09b-checks-cross-tab.md` (529 lines) · per-tab canonical/checks.mdx + Frameworks/process/IA
> - `SLICE-10c-ORCHS-terminology-contracts-tooling.md` (728 lines) · 14 workspace/plan/active plans incl. ORCHS, TERMINOLOGY-COLLATE, CONTRACTS
> - `SLICE-11-workspace-history.md` (~partial 70%) · workspace/plan/complete + future + reports + thread-outputs + BL-001..BL-046 backlog
> - `SLICE-12-root.md` (385 lines) · repo root files
>
> **Slices not on disk** (gaps): SLICE-01 docs-guide (agent still running), SLICE-04 operations/scripts (hook-blocked × 3 → live counts captured directly here), SLICE-07 tools (agent still running), SLICE-10a CONTENT-WRITING (hook-blocked × 2), SLICE-10b _MY_PROCESS + governance plans (hook-blocked × 2).
>
> **SLICE-09 landed after first draft** (514 lines) — `SLICE-09-v2-internal-and-workspaces.md`. 3,110 files inventoried across 11 tab subtrees + v2/_workspace root. New findings folded into §5 below.

---

## 1. What this repo actually is (verified 2026-05-22)

Livepeer Docs is a self-remediating, ownerless documentation operating system built on Mintlify. Three product layers run on top of the publishing platform:

1. **A self-governing repo** with **11 active GitHub workflows** (post-2026-05-22 refactor: 6 `dispatch-{concern}.yml` + 5 `interface-governance-*`), **321 typed operations scripts** (102 dispatch + 58 integrators + 55 validators + 37 remediators + 31 generators + 25 audits + 8 interfaces), **13 published frameworks** + **18 policies** + **5 standards** + **3 decision registries** (D-NAV / D-ACT+D-GOV / D-DG), and a four-part ownerless contract per surface (canonical source · validator · repair · gate). Drift is detected, named, and either auto-repaired or filed as backlog. Routine maintenance is contributable without staff context — **for the surfaces that have completed the four-part contract**, which is 8 of 28 surfaces in the broader registry.

2. **An AI-native distribution surface** with `llms.txt` (188 entries), `sitemap-ai.xml` (181 URLs), `robots.txt`, hosted MCP at `docs.livepeer.org/mcp`, Mintlify chat assistant configured by `.mintlify/Assistant.md`, and **6 native agent adapters** (Claude, Cursor, Windsurf, Augment, Codex, Copilot) all pointing back to a single `AGENTS.md` baseline (119 lines).

3. **A contributor toolchain** — `lpd` Bash CLI as the unified entry point (13 subcommands + 5 group shorthands), 4 in-repo VS Code extensions (component picker, MDX preview, authoring tools, markdown-list), 312 governed VS Code snippets, scoped Mintlify preview that boots in seconds against a 1,128-page nav, and a `.githooks/` pipeline that enforces the cheap gates locally.

**The unique product feature:** policy, runtime configuration, and enforcement are deliberately decoupled — policy lives in `docs-guide/policies/`, runtime in `operations/governance/config/`, enforcement in `.githooks/` + `.github/workflows/`. That separation is what makes the model contributable. **The flaw:** none of these layers self-validates that it agrees with the others. Documented claims and live filesystem are out of sync on multiple surfaces.

---

## 2. Live counts vs documented claims (the drift table)

| Domain | Live count (verified 2026-05-22) | Documented claim | Source of documented claim | Drift |
| --- | --- | --- | --- | --- |
| GitHub workflows | **11 active** (6 dispatch + 5 interface) | 59 (README), 50 (synthesis from 2026-05-19) | `README.md`, prior synthesis | Counts include archived; live active is 11 |
| Archived workflows | 1 in `workflows/deprecated/` + 61 in `workflows/x-archive/` + ? in `.github/x-archive/` | 1 archive lane | `script-framework.md` | **3 archive lanes vs 1 declared** |
| Operations scripts | **321 active** + 38 archive (102 dispatch / 58 integ / 55 val / 37 rem / 31 gen / 25 aud / 8 iface) | 263 (Track A 2026-05-18) / 253 (session state) / 341 (2026-05-19 row) | various | All three documented figures wrong; live is 321 |
| Scripts with canonical `@purpose` | **327** of ~321 (100%, several legacy files in archive still have it) | "218 scripts non-compliant" | `docs-guide/features/gap-analysis.mdx` (lastVerified 2026-05-14) | **8-day-stale; actual non-compliance ~45-50 scripts max** |
| Scripts using retired `@category` | **45** | (gap report didn't enumerate) | — | Specific cleanup queue |
| Scripts using retired `@domain` | **4** | — | — | Cleanup queue |
| AI skills (local SKILL.md) | **34 active + 1 archived** | 34 (feature page) / 35 (.claude/CLAUDE.md) | feature-map.mdx + CLAUDE.md | feature page correct |
| AI skills (portable templates) | **53** | "42 templates" | `docs-guide/tooling/ai-tools.mdx` | 11 templates wrong |
| AI skills in catalog | **9** | (no claim) | `skill-catalog.json` | Only 26% of 34 skills catalogued |
| AI skills in agent-packs manifest | **1** (browser) | (no claim) | `agent-packs/skills/manifest.json` | 52 portable skills exist next to manifest, only browser registered |
| Components in registry | **132 exports** across 35 active + 24 archived = 59 files | 59 (feature page) / 117 (public overview) / 118 (framework table) | feature-map / community-help / component-framework | 4 surfaces disagree |
| v2 .mdx total | **1,128** (excl `_workspace`, `x-archived`, `x-deprecated`) | 1,028 / 1,100 / 2,999 (raw incl _workspace) | Track A / session state / SLICE-12 | All correct for different scopes; no single source declares which scope it uses |
| docs.json registered v2 routes | **688** | 541 (Track A) / 686 (SLICE-12) / 693 (2026-05-19 row) | various | Drift |
| docs.json redirects | **475** (62% legacy unprefixed paths) | (no claim) | — | redirect bloat |
| docs.json default version | **v1** (not v2) | "v2 is canonical" | README + feature-map | **visitors land on v1 by default unless Mintlify dashboard overrides** |
| llms.txt entries | 188 | (no claim) | — | — |
| sitemap-ai.xml URLs | 181 (covers 6 of 10 tabs; developers/orchestrators/delegators/internal/ai-tools ABSENT) | (no claim) | — | **19% of nav coverage; 47 days stale** |
| docs-index.json entries | 532 | (no claim) | — | Three AI artefacts, three different counts |
| AI artefacts staleness | llms.txt + sitemap-ai.xml + docs-index.json all 37–45 days stale relative to docs.json | "self-regenerating" | feature-map | P0 from README's own community-help list |
| Ownerless surfaces (formally contracted) | **8** | "ownerless governance" | feature pages, ai-features.mdx | "ownerless" is partial; 8 of 28 surfaces in wider registry |
| docs-guide files | 76+ (tracked) | 13 frameworks + 18 policies + 5 standards | feature-map | live confirmed |
| Reference library (.claude/references/) | **25 files**, ~2,860 lines, 13 categories | "26 files, 13 categories" | CLAUDE.md active threads | off by 1 |
| Per-tab _workspace files | ~3,091 across 11+ tabs | (no claim) | SLICE-09 transcript | enormous, mostly review packets following templates |
| BACKLOG items registered | **BL-001 through BL-046** | (no claim) | `workspace/plan/future/BACKLOG/master-tasks.md` | SLICE-11 captured all |
| Active plans in workspace/plan/active/ | **26** | 26 (session state) | session-state hook | match |
| LICENSE copyright | © 2023 | (no claim) | LICENSE | 3 years stale (cosmetic) |
| README v2 page claim | 1,128 v2 / 279 v1 | — | README | v1 count matches; v2 is file count not nav count |

**Pattern:** every count is documented somewhere and almost every documentation has drifted from live. The "claims drift" problem is repo-wide.

---

## 3. The decision-registry sprawl

Three locked-decision registries live in the repo. Each has its own ID prefix and they don't cross-reference:

| Registry | Path | Decisions | Last touched |
| --- | --- | --- | --- |
| Content Writing decisions | `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md` | **1 locked** (D-NAV-01) | 2026-03-23 |
| GitHub Actions decisions | `.github/workspace/decisions-log.mdx` | **18 locked** (D-ACT-01..10 + D-GOV-01..08) | header 2026-03-31; framework-canonical Status line 2026-05-22 (2-month gap unexplained) |
| Docs-guide structure decisions | `docs-guide/decisions/docs-guide-structure.md` | **13 locked** (D-DG-01..13) | 2026-05-04 |
| Unified decision index | `docs-guide/decisions/registry.md` | cross-reference index of all 3 + per-domain logs | — |

Plus per-plan decision files inside individual governance plans (SCRIPT-GOVERNANCE/decisions, COMPONENT-GOVERNANCE/decisions). At minimum 5 registries; possibly more.

**The CONTENT-WRITING gate status is the most important finding for the user's "make a new page + check it" pipeline question:** ZERO of the 5 content tabs has IA Approved. Only 3 (Gateways, About, Delegators) have Content Scan Done. The entire content writing pipeline is stuck at Phase 2 of 9. Per `tab-status.md`: "A tab is only 'open' for a phase when its gate is **explicitly unlocked by human sign-off**." No content tab has moved past gate 2.

---

## 4. The page-authoring + checks pipeline — where it lives

Asked for canonical home. The pipeline is spread across at least 50 files in 5 trees:

### 4.1 Master canonical (the 9-stage pipeline)

`workspace/plan/active/_MY_PROCESS/my-process.mdx` (389 lines, 47KB, mtime 2026-05-18) — defines 9 stages:
1. Personas, Audience & Journey
2. IA Section Structuring
3. Current Content Mapping & Gaps (3.a/3.b/3.c)
4. IA Pages Structuring & Journeys
5. Find Information & Gaps
6. Define copy voice, terminology and styles pack & write
7. Review copy against purpose, voice etc.
8. Layout & style
9. Semi-manual human review + style refinement

`_MY_PROCESS/index.md` (606 lines, 57KB, 2026-05-18) — master inventory table with usefulness scores per item per stage, gaps, contradictions, critical review.

**Sub-canonicals supporting the master:**
- `workspace/plan/active/master-checks.mdx` (882 lines) — the meta-checks framework
- `_MY_PROCESS/checks-audit.md`, `checks-audit-addendum.md`, `checks-audit-complete.md` (44KB combined)
- `_MY_PROCESS/canonical-content-copy-and-review-framework.md` (16KB)
- 4 phase subdirectories: `00_AUDIENCE-JOURNEY/`, `01_RESEARCH-and-GAP-ANALYSIS/`, `02_CONTENT-GATHERING-repo-external/`, `03_IA-STRUCTURE-per-page-mapping/`

### 4.2 Active execution (CONTENT-WRITING)

`workspace/plan/active/CONTENT-WRITING/` — 241 files. Canonical files:
- `plan-canonical.md` (997 lines)
- `content-pipeline-canonical.md` (867 lines)
- `master-status.mdx`
- `decisions/` (decision-registry.md, tab-status.md, blocking-items.md, feedback-routing-map.md)
- `Frameworks/content-pipeline-framework.md` — pageType (7), pageVariant, audience (10 tokens incl founder), persona-per-audience, purpose (15 intent-based values), industry/niche, complexity, lifecycleStage
- `Prompts/voice-rules.md` — canonical per-audience voice (referenced by `docs-guide/standards/voice-and-copy.mdx`)
- `Prompts/Prompts-By-Phase/` — phase-numbered prompt + pack-guide + phase-resources

**The CONTENT-PIPLEINE folder** (note the misspelling) under `workspace/plan/active/CONTENT-PIPLEINE/` — 22 files: 00-TRACKER.md, 01-ia-verification.md, 01b-persona-check.md, 02-content-scan.md, 02.5-research-pack.md, 03-tab-map.md, 03.5-terminology-lock.md, 04-content-audit.md, 04.5-reconsolidation.md, content/, master-status.mdx. This is the **per-tab execution output** for the pipeline against Orchestrators.

### 4.3 AI skills (the 11 lifecycle skills + 3 content pipeline skills)

`ai-tools/ai-skills/`:
- Session lifecycle: `thread`, `pm`, `research`, `design`, `build`, `iterate`, `dispatch`, `agent-brief`, `diagnose`, `close`, `propagate`
- Content pipelines: `content-pipeline-pass-a` (REVIEW/WRITE/REWRITE for content layer), `content-pipeline-pass-b` (layout + components + frontmatter), `content-pipeline-tab-map` (generates tab-level IA map)
- Authoring: `page-authoring` (canonical page authoring contract with frontmatter, pageType+purpose defaults, anti-patterns, 5-Whys pre-writing process)
- Quality: `rubric-static-review`, `docs-review-packet-generation`, `docs-review-fix-execution`, `repo-audit-orchestrator`, `docs-quality-and-freshness-audit`, `docs-coverage-and-route-integrity-audit`, `style-and-language-homogenizer-en-gb`, `docs-copy`
- **18 of 34 local skills still `status: draft` with empty test logs** per SLICE-02 — the entire lifecycle backbone has never been validated in production.

### 4.4 Per-tab quality spec (the Cat 1-9 checks)

`v2/{tab}/_workspace/canonical/checks.mdx` — exists for 5 tabs: gateways (549 lines), orchestrators (678 lines), about (735 lines), delegators (732 lines), developers1 (723 lines). Per SLICE-09b cross-tab comparison:

**Cat 1 Frontmatter (13 checks) · Cat 2 Voice & Copy (11) · Cat 3 Headings (7 + rubric) · Cat 4 Structure (10) · Cat 5 Layout/Components (10 + matrix) · Cat 6 Veracity (9 + standards) · Cat 7 Navigation/IA (9) · Cat 8 Links/Rendering · Cat 9 Process · Cat 10 Completeness (tab-specific personas)**

But:
- **gateways/checks.mdx has no Cat 10** (no completeness gate defined)
- **orchestrators/gateways checks.mdx violate their own rules** — no frontmatter (fails Cat 1.1), em-dashes throughout (fails Cat 2.12). The newer 3 tabs conform.
- **Bash-block policy contradicts:** delegators §5.35 bans bash blocks; orchestrators/gateways/about/developers1 permit them.
- **gateways canonical Frameworks.mdx/process.mdx/IA.mdx/ia-data.json are byte-identical to orchestrators** — gateways IA literally describes orchestrators pages.
- **Persona enumeration in Frameworks.mdx §1.3 is "Pending definition"** for developer/gateway/orchestrator/delegator — yet every per-tab checks.mdx invokes persona-based rules.

### 4.5 The PLANNED pipelines (not built)

Per `v2/orchestrators/_workspace/canonical/scripts/script-plan.md`:
- `process-pipeline.js` — orchestrates my-process.mdx phases 1-9; reads tab-status.md; tells operator which prompt/script to run next; updates tab-status.md. **Not built.**
- `checks-pipeline.js` — 3-tier quality validator. T1 structural blocking (Cat 1/7/8) → T2 content quality advisory (Cat 2/3/4/5) → T3 trust + governance (Cat 6/9). Invoked by process-pipeline.js at Phases 7/8/9. Outputs JSON + MD reports. **Not built.**
- 5 missing canonical files: `validate-veracity-status.js`, `validate-nav-journeys.js`, `check-purpose-rubric-sync.js`, `repair-frontmatter-taxonomy.js`, `pipeline-report.js` (lib).
- Plus the `tab-map.mdx` hallucination (the _MY_PROCESS inventory claimed it exists at score 0; it does not).

---

## 5. The five cross-cutting structural problems

### 5.1 Cron is dry-run by default (P0)

**Every** `dispatch-{concern}.yml` scheduled job has this pattern:
```yaml
FLAGS=""
if [[ "${{ inputs.dry_run }}" == "false" ]]; then FLAGS="--write --verify"; fi
node operations/scripts/dispatch/.../dispatch-{concern}-update.js $FLAGS
```
Cron triggers don't pass `inputs.dry_run` — it's empty, never "false", so FLAGS stays empty. **The daily/weekly cron is check-only theatre.** Only `workflow_dispatch` with explicit `dry_run: false` writes. Affects all 6 dispatchers. Root cause of contracts addresses 18-day staleness, llms.txt + sitemap-ai.xml 47-day staleness, and the "manual-only" classification of generate-og-images.js + generate-seo.js.

### 5.2 Claims drift from live state (P0 — repo-wide)

Every governance surface has a count or path claim that diverges from live. The drift table above lists 20+ specific instances. Two examples that affect operator workflow:
- `agent-governance-framework.mdx` lines 137 + 228 reference `validators/governance/check-agent-docs-freshness.js`; actual is `validators/governance/compliance/check-agent-docs-freshness.js`. **The validator path is wrong in the framework that consumes the validator.**
- Contracts pipeline doc references `.github/scripts/fetch-contract-addresses.js`; folder is empty; script moved to `operations/scripts/integrators/maintenance/contracts/fetch-contract-addresses.js`.

### 5.3 Multi-source-of-truth for the same concept (P1)

| Concept | Locations | Contradiction |
| --- | --- | --- |
| Voice rules | `docs-guide/standards/voice-and-copy.mdx` (canonical, lifted earlier this session) + `docs-guide/standards/voice-rules.mdx` (now retired, redirect) + `v2/resources/documentation-guide/copy-style/authoring-guide.mdx` (public) + `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` (source) | Three places, slight prose drift |
| pageType enum | `docs-guide/standards/frontmatter.mdx` (7) + `docs-guide/frameworks/page-taxonomy-framework.mdx` (12) + `CONTENT-WRITING/Frameworks/content-pipeline-framework.md` (7 primary + 7 variants) + `v2/resources/documentation-guide/copy-style/authoring-guide.mdx` (7) | Three different enumerations |
| Decision registries | 3 ID-prefix registries (D-NAV, D-ACT+D-GOV, D-DG) + per-plan registries + unified index | No automated check that they reference each other consistently |
| Pool worker vs pool node | CLAUDE.md still has "pool worker" in domain terms table; TERMINOLOGY-COLLATE locked it as "pool node" | Current session's CLAUDE.md uses the deprecated term |
| Fee cut direction | Disagrees across 3 sources (SHIP-CONTENT V-01, MASTER-STATE.md, TERMINOLOGY-COLLATE) | Domain-critical |
| Bash-block policy | delegators bans, orch/gw/about/dev1 permit | Per-tab checks.mdx contradict each other |
| Component count | feature page 59, public overview 117, framework table 118, registry 132 | 4 surfaces, no agreement |
| AI skill count | feature page 34, CLAUDE.md 35, registry 9, manifest 1, portable 53 | 5 sources, 5 different numbers |

### 5.4 Lifecycle status lies (P1)

**Additional from SLICE-09 (landed 2026-05-22 after this section first drafted):**

- **Gateways `_workspace/canonical/` is BYTE-IDENTICAL to orchestrators `_workspace/canonical/`.** `diff` returns 0 for `IA.mdx`, `Frameworks.mdx`, `process.mdx`, `ia-data.json`, and `REVIEW-REGISTRY.md`. The gateways `REVIEW-REGISTRY.md` literally opens with the line `# Orchestrators Tab Page Inventory`. **Gateways has no IA of its own — it imports orchestrators's wholesale.**
- **Three different script counts on sibling v2/internal pages:** `aims.mdx` says 58, `governance-pipeline.mdx` says 214, `report.md §13.1` (the addendum I wrote this session) says 320. Same project, same week, three numbers.
- **`v2/internal/rfp/report.mdx` StyledTable is self-contradictory** — has 2026-02-21 status grades but I appended Part 13 addendum §13.3 re-grading 5 rows. The StyledTable itself is unchanged. Two truths in one document.
- **`v2/internal/overview/governance.mdx` section-owners table uses v1 `v2/pages/01_about/` numbered paths** — that IA was removed. Stale path references in production governance.
- **`v2/internal/_workspace/ally-notes.mdx` duplicates its own content twice within the file** (lines 24-101 ≈ lines 103-180). Self-duplication.
- **`v2/internal/overview/personas.mdx` is still missing 3 of 4 personas** — only Developer has body; Gateway Operator, Orchestrator, Delegator are heading-only stubs. (This was on the deferred list from earlier in this session; not yet completed.)
- **All 7 TAB-SUMMARY.md files dated 2026-04-08** — say `definitions/ecosystem/references/strategic-alignment/deliverables/outcomes` are FAIL/empty. All 6 now populated this session (2026-05-22) but the summaries haven't been updated.
- **`v2/developers/_workspace/` has NO `canonical/` directory** — only "active" tab without one. Uses ad-hoc `developer-tab-fixes/` mirror tree + `.zip` files committed to the working tree. Outlier.
- **1,070 archived locale page snapshots** in `v2/_workspace/archive/language-pages/{es,fr}` that were never published; duplicate locale archive at `v2/_workspace/locale-page-archive/` (24 more files).
- **5 archive naming variants across 11 tabs:** `archive/` / `archived/` / `deprecated/` / `x-archived/` / `x-deprecated/`. The framework declares one (`x-archive/`).
- **7+ `.zip` files committed inside `_workspace/` directories** (developers, developers1, orchestrators). Binary content in MDX content trees.
- **20 byte-identical alias files** in `v2/internal/reports/repo-ops/` (`audit-tasks-folders--*-audit.md` paired with `{name}-audit.md`).
- **55 files repo-wide with `status: draft`** in frontmatter; 37 of them in orchestrators (`plans/`, `canonical/check/`, `x-archived/`).
- **EVERY workspace file has mtime exactly 2026-05-18** — indicates a single batch operation, possibly a workspace-wide touch. mtime cannot be trusted as a staleness signal in workspace/.

- **26 files in `ORCHS/x-deprecated/` are marked `status: current` or `published`** — files in retirement lane claiming to be live.
- **18 of 34 local SKILL.md files still `status: draft` with empty test logs** — the lifecycle backbone has never been validated in production despite being the primary scaffold.
- **`.github/AGENTS.md` carries an in-body staleness note** declaring its checkpoint-branch automation aspirational while the body describes it as active.
- **`.github/augment-instructions.md`** (206 lines, heaviest adapter) sits at active path with archived-header.
- **`ai-tools/ai-rules/.augment/`** is a phantom-retired duplicate subtree (165 lines) at the active path; invisible to freshness validator.
- **CANONICAL-TRUTH-GUIDES** marked DELETE but contains active lifecycle-design work.
- **`docs-guide/tooling/dev-tools.mdx`** was `status: draft, lastVerified: 2026-03-11` until retired this session.
- `_health-checks.json` reports contracts pipeline FAIL on 2026-05-22 — but the "FAILs" are branch-watch state changes (new dependabot branches), not pipeline failures. **The check ran; the publish gate didn't (see 5.1). So _health-checks runs at the right cadence; data files don't.**

### 5.5 Archive sprawl + orphan paths (P2)

- **3 archive lanes in `.github/`** (`workflows/deprecated/`, `workflows/x-archive/`, `.github/x-archive/`) vs 1 declared in framework
- **`.github/scripts/` empty** — directory exists, contains nothing (the contracts script moved to `operations/scripts/`)
- **`composables/pages/unclassified/`** contains all 8 canonical Tier-1 composables (governance violation in the composables tree itself)
- **662KB contract-addresses JSON parked in `snippets/composables/`** — data file in components tree (violates `snippets/guide.mdx` Rule #1)
- **Stray duplicate `v2/developers/`, `v2/developers1/`, `v2/developers2/`** — three developer trees; references mix across them
- **`workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/collated/`** symlink tree is **structurally broken** — non-audience-design symlinks point to a `context-packs/` directory that doesn't exist
- **2 PR templates side-by-side** at `.github/pull_request_template.md` (active) and `pull-request-template-v2.md` (vestigial)
- **5 empty `operations/tests/unit/components/*/`** subdirectories (just `.gitkeep`) — scaffold for >2 months despite 132 components

---

## 6. The 10 highest-leverage P0/P1 fixes

| # | Fix | Domain | P | Why it matters |
| --- | --- | --- | --- | --- |
| 1 | Invert the cron-is-dry-run default in all 6 `dispatch-{concern}.yml` OR add a separate scheduled-write job | .github/ | P0 | Root cause of 18-day contracts staleness, 47-day llms.txt + sitemap-ai.xml staleness, and the "manual-only" classification of OG-images + SEO generators. Single fix unblocks 6 stale pipelines. |
| 2 | Refresh stale `docs-guide/features/gap-analysis.mdx` "218 non-compliant scripts" — live is ~45-50 (45 with @category, 4 with @domain) | docs-guide/features/ | P0 | The community-help index promotes a >4× stale figure as the #1 mechanical PR. New contributors take an outdated task. |
| 3 | Fix `agent-governance-framework.mdx` validator-path drift (lines 137 + 228 reference wrong path — missing `/compliance/` subfolder) | docs-guide/policies/ | P0 | Operators following the framework can't find the validator. |
| 4 | Refresh contracts pipeline doc — `.github/scripts/fetch-contract-addresses.js` moved to `operations/scripts/integrators/maintenance/contracts/` | docs-guide/features/contracts-pipeline.mdx | P0 | Pipeline doc directs to an empty folder. |
| 5 | Resolve `docs.json` default version — currently v1, README claims v2 | root | P0 | Visitors land on v1 by default unless Mintlify dashboard overrides. |
| 6 | Replace hand-authored component count tables with generator-emitted blocks from `component-registry.json` (132 exports) — fixes 4-surface drift (59/117/118/132) | docs-guide/features/ui-system + framework + public component-library | P1 | Source of UI count contradiction. |
| 7 | Reconcile the 3 decision registries (D-NAV, D-ACT+D-GOV, D-DG) — wire CI check that each registry references the unified index | docs-guide/decisions + .github/workspace + CONTENT-WRITING/decisions | P1 | No automated check that the 3 systems agree. |
| 8 | Update `decisions-log.mdx` to capture D-ACT-05..10 + D-GOV-01..08 — header says 2026-03-31 but framework-canonical claims 18 locked | .github/workspace/ | P1 | Decision log lags reality by 2 months. |
| 9 | Open the CONTENT-WRITING tab gates 1-2 for at least one tab — current state: 0 of 5 tabs has IA Approved. Pipeline is stuck. | CONTENT-WRITING/decisions/tab-status.md | P1 | The page-authoring pipeline can't progress without explicit human IA approval per tab. |
| 10 | Wire generate-og-images.js + generate-seo.js into CI properly (combined with fix #1 — they're written but cron defaults to dry-run) | .github/workflows + operations/scripts/generators | P0 | Two P0 community-help items from 2026-03-30 flag. Cherry-pick contract-addresses workflow to docs-v2 (different P0 from 2026-03-31 — possibly resolved by 2026-05-22 refactor but unverified). |

---

## 7. Canonical home map (target IA per locked D-DG-01..13)

Locked decisions in `docs-guide/decisions/docs-guide-structure.md` define the target IA. Below maps every domain to its canonical home.

```
docs-guide/                         ← canonical for repo-as-infrastructure
├── index.mdx                       ← orient (currently bloated to 674 lines; needs trim to ≤150)
├── standards/                      ← T3: form rules (voice, frontmatter, naming, authoring)
├── frameworks/                     ← T2: subject models (component, script, content, github-actions, page-taxonomy)
├── policies/                       ← T1: enforced rules (ownerless, source-of-truth, quality-gates, agent-governance)
├── decisions/                      ← T0: locked precedent
│   ├── docs-guide-structure.md     ← D-DG-01..13
│   ├── registry.md                 ← unified cross-reference index
│   └── (per-domain decision logs referenced from registry)
├── contributing/                   ← T4: procedures (contributing, local-preview, git-hooks, agent-instructions, mintlify, community-help)
├── reference/                      ← T5: look-up (post D-DG-02/03 migration; not built yet)
│   ├── features/                   ← (migrating from docs-guide/features/)
│   ├── tooling/                    ← (migrating from docs-guide/tooling/)
│   ├── repo-ops/                   ← (migrating from docs-guide/repo-ops/)
│   ├── docs-library/               ← (migrating from docs-guide/docs-library/)
│   ├── external/mintlify/          ← (migrating from docs-guide/canonical/collation-data/Mintlify/)
│   └── internal-glossary.mdx
└── catalog/                        ← generated only (components, scripts, workflows, templates, ui-templates, pages)
```

**Adapters point UP to docs-guide.** Per D-DG-11: AGENTS.md, .claude/CLAUDE.md, .cursor/rules/, .windsurf/rules/, .augment/rules/, .github/AGENTS.md, .mintlify/Assistant.md all surface canonical truth for specific consumers but hold no authority. Any rule stated only in an adapter is invalid.

**Runtime configuration lives in `operations/governance/config/`** (not docs-guide). Per D-DG-05.

**Workflow architecture canonical** at `.github/workspace/framework-canonical.md` is the internal working spec; canonical published version is `docs-guide/frameworks/github-actions.mdx`. Sync state undocumented; published version likely 2 months behind 2026-05-22 refactor.

**Content writing pipeline canonical** lives in `workspace/plan/active/_MY_PROCESS/` + `CONTENT-WRITING/`. **It is NOT in docs-guide.** Per the locked D-DG IA, the content pipeline should canonicalise into `docs-guide/frameworks/content-writing.mdx` + `docs-guide/frameworks/page-taxonomy-framework.mdx`. **Today both files exist but the live framework + standards lag the workspace plan.**

**Per-tab quality specs (`v2/{tab}/_workspace/canonical/checks.mdx`)** should canonicalise into a single site-wide `docs-guide/standards/checks-framework.mdx` (or equivalent under reference/). The supplementary canonical artefacts (`Frameworks.mdx`, `process.mdx`, `IA.mdx`, `REVIEW-REGISTRY.md`, `script-plan.md`) currently sit under `v2/orchestrators/_workspace/canonical/` but describe site-wide governance. Per SLICE-09b they should canonicalise into `docs-guide/`.

---

## 8. Per-domain consolidation table

| Domain | Subtree | Live state | Canonical home (target) | Action |
| --- | --- | --- | --- | --- |
| Public docs content | `v2/{tab}/**` (excl `_workspace/`) | 1,128 .mdx; 688 nav-registered | unchanged | content pipeline still gated at Phase 2 across all tabs |
| Component library | `snippets/components/` | 132 exports, 35 active files + 24 archive | unchanged | regenerate count tables from registry; fix wrapper/displays JSDoc drift |
| Templates | `snippets/templates/` | 37 files across 14 sub-lanes | unchanged | dedupe 4 byte-identical pairs |
| Composables | `snippets/composables/` | 73 in pages/ + 8 Tier-1 + 2 governance | clean Tier-1 out of unclassified/ | move data files out of composables/; build composables catalog |
| Data integrations | `snippets/data/` | 13 sub-folders + 4 root data files | unchanged | restart cron writes (fix 5.1) |
| AI skills | `ai-tools/ai-skills/` | 34 local + 53 portable + 53 templates; 18 status: draft | canonicalise to `docs-guide/reference/ai-skills/` per D-DG-02/03 | reconcile local/portable divergence; complete catalog (currently 26%) |
| Agent adapters | `.claude/`, `.codex/`, `.cursor/`, `.windsurf/`, `.augment/`, `.mintlify/`, `.github/AGENTS.md`, `.github/copilot-instructions.md` | 7 adapters + AGENTS.md baseline | unchanged (D-DG-11) | trim CLAUDE.md (326 lines, 2.74× AGENTS.md); retire .github/augment-instructions.md; resolve phantom .augment/ subtree |
| Operations scripts | `operations/scripts/` | 321 active + 38 archive (102 dispatch) | unchanged | update gap-analysis from 218 → ~50 non-compliant; backfill the 45 with @category |
| GitHub workflows | `.github/workflows/` | 11 active + 1 deprecated + 61 x-archive + ? more in `.github/x-archive/` | unchanged | fix cron-dry-run bug (5.1); rationalise 3 archive lanes; sync framework-canonical to published |
| Hooks | `.githooks/` | 13 files: 5 active hooks + 4 docs + 4 utilities | unchanged | wire verify.sh into pre-commit OR retire as dead enforcement; document post-commit.disabled; fix script-index.md generator (only catalogues 3 of 7 hook scripts) |
| Tools | `tools/lpd`, `tools/dev/`, `tools/editor-extensions/`, `tools/lib/` | 4 VS Code extensions + lpd CLI + scoped preview + 312 snippets | unchanged | document lpd repair (works but absent from CLI reference accordion); fix script-index.md pre-2026-03-21 paths |
| Internal tab | `v2/internal/` | RFP + philosophy + 36 historical audit files | unchanged | 6 empty stubs filled this session; Part 13 addendum appended |
| Governance config | `operations/governance/config/` | 6 JSON configs (ownerless, surfaces, generated-artifacts, root-governance, approval-policy, agent-write) | unchanged (D-DG-05) | add `.schema.json` files; resolve `agent-write-governance.json` `bridge_mode: staged` vs `repo-governance-surfaces.json` `retired` |
| Tests | `operations/tests/` | 11 integration + 76 unit | unchanged | fill 5 empty unit/components/*/ subdirs OR retire them; document pipeline-smoke-test.js + pipeline-functional-tests.js |
| Content writing pipeline | `workspace/plan/active/_MY_PROCESS/` + `CONTENT-WRITING/` + `CONTENT-PIPLEINE/` | 9-stage canonical doc + 241 + 22 files | promote canonical sections to `docs-guide/frameworks/content-writing.mdx` + `frameworks/page-taxonomy-framework.mdx` | massive consolidation; broken collated/ symlinks need fix or removal |
| Per-tab quality specs | `v2/{tab}/_workspace/canonical/checks.mdx` (5 tabs) | divergent contracts + 2 violate own rules | promote to site-wide `docs-guide/standards/checks-framework.mdx` | resolve Cat 10 absence in gateways; resolve bash-block policy contradiction; reconcile persona definitions |
| Decisions (3 registries) | D-NAV / D-ACT+D-GOV / D-DG | 1 + 18 + 13 locked decisions | unified index already at `docs-guide/decisions/registry.md` | wire CI check that all 3 reference the index |
| Backlog | `workspace/plan/future/BACKLOG/master-tasks.md` | BL-001..BL-046 with priority/status/date | unchanged | each BL item should map to an action in this table; only some do |
| Workspace history | `workspace/plan/{complete,future,archive}/` + `workspace/reports/**` + `workspace/staging/` + `workspace/thread-outputs/` | very large; mostly historical audit dumps | TTL-enforce per workspace-lifecycle-policy | `tasks-retention.yml` is a stub; needs to ship before this can self-clean |
| 26 active plans | `workspace/plan/active/` | 26 plans, hundreds of files each (largest: ORCHS 122, AI-TOOLS-GOVERNANCE 68, DOCUMENTATION 50) | each plan should converge to docs-guide canonical OR archive | most plans have completed deliverables; many should promote-and-archive |
| RFP record | `v2/internal/rfp/` | 5 page record + 1,149-line audit + Part 13 addendum (this session) | unchanged | live |
| Adapter references library | `.claude/references/` | 25 files, ~2,860 lines, 13 categories | unchanged | needs freshness validator; SOURCE-MAP.md points at legacy CONTENT-WRITING/ paths that migrated to docs-guide/standards |

---

## 9. The 5 known unknowns (gaps in this audit pass)

| # | Gap | Reason | Priority for next session |
| --- | --- | --- | --- |
| 1 | docs-guide/ full file-by-file inventory | Slice 1 agent still running | low — most key files already read across other slices |
| 2 | tools/ full file-by-file inventory | Slice 7 agent still running | medium — lpd CLI subcommand list pending |
| 3 | v2/internal + per-tab _workspace inventory file on disk | Original Slice 9 stopped at 80% in transcript; relaunch running | medium — the per-tab _workspace tree is 3,091 files but mostly templates |
| 4 | CONTENT-WRITING + CONTENT-PIPLEINE full file-by-file inventory | Slice 10a hook-blocked × 2 | high — this is THE page-authoring pipeline; 241 files |
| 5 | _MY_PROCESS + 7 governance plans full file-by-file inventory | Slice 10b hook-blocked × 2 | high — _MY_PROCESS is canonical; the 7 governance plans are where each surface's truth lives |

For the 4 hook-blocked slices, the structural data is captured (file counts, canonical-file identifications, key contradictions) but the per-file detail is not in the inventory files. The synthesis above incorporates what's known.

---

## 10. What to do next

In priority order:

1. **Fix the cron-is-dry-run bug** (5.1) — single change to 6 workflow YAML files; unblocks 6 stale data pipelines.
2. **Refresh gap-analysis.mdx** with live JSDoc compliance (45 retired `@category` + 4 retired `@domain` = ~50 scripts, not 218).
3. **Fix the 3 validator-path drifts** (5.2) and the 2 stale-path references (contracts pipeline doc, governance framework).
4. **Resolve `docs.json` default version** (v1 vs v2).
5. **Replace every hand-authored count** with generator-emitted blocks (registry → feature page → community-help).
6. **Promote** the content writing pipeline canonical from `workspace/plan/active/_MY_PROCESS/` + `CONTENT-WRITING/` into `docs-guide/frameworks/content-writing.mdx` per the locked D-DG IA. **This is the work the user has been pointing at.**
7. **Promote** the per-tab `canonical/checks.mdx` into a single site-wide `docs-guide/standards/checks-framework.mdx`.
8. **Reconcile** the 3 decision registries into the unified index + CI check.
9. **Open** at least one content tab past Phase 2 — the pipeline has been gated at IA-Approved for >2 months.
10. **Cleanup** the archive sprawl (3 lanes in .github/, broken collated symlinks, phantom .augment/ subtree, ORCHS x-deprecated `status: current` files).

After items 1-10 land, the consolidation crisis described across the 9 slice files is materially resolved. The remaining work (full file-by-file inventory of CONTENT-WRITING, _MY_PROCESS, governance plans) is necessary for completeness but not for any of these 10 actions.

---

## 11. Artefacts inventory

| File | Lines | What | Mtime |
| --- | --- | --- | --- |
| `SLICE-00-MASTER.md` (this file) | ~700 | Master consolidation map | 2026-05-22 |
| `SLICE-02-ai-tools.md` | 557 | ai-tools/ deep | 2026-05-22 |
| `SLICE-03-operations-governance-tests-hooks.md` | 362 | operations/governance + tests + hooks | 2026-05-22 |
| `SLICE-05-github.md` | ~330 | .github/ (direct read) | 2026-05-22 |
| `SLICE-06-agent-adapters.md` | 797 | adapters | 2026-05-22 (rerun with 2026-05-19 addendum) |
| `SLICE-08-snippets.md` | 410 | snippets/ | 2026-05-22 |
| `SLICE-09-v2-internal-and-workspaces.md` | 514 | v2/internal + 11 tab _workspace folders (3,110 files) | 2026-05-22 |
| `SLICE-09b-checks-cross-tab.md` | 529 | per-tab checks.mdx | 2026-05-22 |
| `SLICE-10c-ORCHS-terminology-contracts-tooling.md` | 728 | 14 plans incl. ORCHS, TERMINOLOGY-COLLATE, CONTRACTS | 2026-05-22 |
| `SLICE-11-workspace-history.md` | partial 70% | workspace/plan complete/future/archive + reports + BACKLOG | 2026-05-22 |
| `SLICE-12-root.md` | 385 | root files | 2026-05-22 |

Total evidence: **~4,400 lines across 10 files**, plus this synthesis (~700 lines), plus live counts captured directly in main session.

— end of master consolidation map —
