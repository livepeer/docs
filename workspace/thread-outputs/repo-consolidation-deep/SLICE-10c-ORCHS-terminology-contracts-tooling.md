# SLICE 10c — ORCHS / Terminology / Contracts / Tooling Inventory

**Generated:** 2026-05-19
**Scope:** Exhaustive READ-ONLY file-level inventory across 14 plan folders under `workspace/plan/active/`
**Total files (actual on disk):** 269

| Folder | Files (stated) | Files (actual) | Drift |
|---|---|---|---|
| ORCHS/ | 122 | 122 | 0 |
| ORCHESTRATOR-CONTENT-WRITING/ | 18 | 18 | 0 |
| TERMINOLOGY-COLLATE/ | 34 | 34 | 0 |
| CONTRACTS/ | 28 | 30 | +2 |
| CONTRACTS-CHANGELOG-PIPELINE/ | 2 | 2 | 0 |
| CONTENT-STRUCTURE-TEMPLATES/ | 4 | 4 | 0 |
| SHIP-CONTENT/ | 1 | 1 | 0 |
| SNIPPETS/ | 3 | 3 | 0 |
| SOLUTIONS-SOCIAL-DATA/ | 2 | 3 | +1 (`_workspace/research/socials-research.md`). `.env` gitignored per `.gitignore:24`, not currently present in folder. |
| SCRIPT WORKFLOW AUDIT/ | 10 | 10 | 0 |
| TOOLING/ | 6 | 6 | 0 |
| CANONICAL-TRUTH-GUIDES/ | 2 | 2 | 0 |
| FULL-CLEANUP/ | 1 | 1 | 0 |
| FUCK_CLAUDE/ | 11 | 23 | +12 |

**Note on filesystem mtimes:** All `.mdx`/`.md` files inside ORCHS, CONTRACTS, CONTRACTS-CHANGELOG-PIPELINE, CONTENT-STRUCTURE-TEMPLATES, SHIP-CONTENT, SNIPPETS, SOLUTIONS-SOCIAL-DATA, SCRIPT WORKFLOW AUDIT, TOOLING, CANONICAL-TRUTH-GUIDES, FULL-CLEANUP, ORCHESTRATOR-CONTENT-WRITING, TERMINOLOGY-COLLATE carry mtime 2026-05-18 due to a bulk timestamp event (cf. CLAUDE.md `FUCK_CLAUDE/CANONICAL-DIAGNOSTIC.md` — bulk timestamp resets are one of 12 confirmed root causes). FUCK_CLAUDE/ has more recent activity. Trust **frontmatter / content-claimed dates** over mtime where present.

---

## Section 1 — ORCHS/ (122 files)

### Folder tree

```
ORCHS/
├── 01-CORE-NEEDS-AND-STANDARDS.md
├── 02-CRITICAL-ANALYSIS.md
├── 03-AUTONOMOUS-PRODUCTION-OPTIONS.md
├── index.mdx
├── master-status.mdx
├── navigator.mdx
├── portal.mdx
├── concepts/                  (5 active + 6 x-deprecated)
├── guides/
│   ├── advanced-operations/   (3 active + 1 dep)
│   ├── ai-and-job-workloads/  (9)
│   ├── config-and-optimisation/ (4)
│   ├── deployment-details/    (6 active + 12 x-deprecated)
│   ├── monitoring-and-tooling/ (4)
│   ├── operator-considerations/ (4 active + 3 x-deprecated)
│   ├── payments-and-pricing/  (2)
│   ├── roadmap-and-funding/   (2)
│   ├── staking-and-rewards/   (4)
│   └── tutorials/             (8 active + 3 stubs + 3 x-deprecated)
├── quickstart/                (5)
├── resources/                 (8 + technical/5 + compendium/1)
└── setup/                     (8 active + 5 x-deprecated)
```


### ORCHS/ root strategic docs (3 files)

| File | mtime | Content-date | Status | Summary |
|---|---|---|---|---|
| `01-CORE-NEEDS-AND-STANDARDS.md` | 2026-05-18 | (none — reference doc) | Active reference | Voice register, banned word list, 45-term terminology lock (15 listed: Orchestrator, Active set, Reward call, Fee cut, Reward cut, Gateway, Service URI, Performance score, aiModels.json, Warm model, Cold model, O-T split, Pool, Probabilistic micropayment, go-livepeer). Frontmatter spec. References `docs-guide/_workspace/02_Design-Specification/...` (LIKELY MOVED — see contradictions). |
| `02-CRITICAL-ANALYSIS.md` | 2026-05-18 | **2026-03-23** | Active analysis | 118 files analysed (73 published + 45 _workspace/composable). 11 P0 blockers, 28 P1, 35+ P2, 4 stub pages, 18 with unresolved TODO/REVIEW. Voice scores: setup 9.1 (strongest), resources 6.5 (weakest). |
| `03-AUTONOMOUS-PRODUCTION-OPTIONS.md` | 2026-05-18 | (none) | Active plan | 3 production options (Assembly Line, Parallel Tracks, Scorecard Loop). Recommendation: hybrid B+C. 73 pages, 3-week calendar. Mentions 118 files copied to /ORCHS/. |

### ORCHS/ — landing & navigator pages (4 files)

#### ORCHS/ landing & navigators

| File | Status | lastVerified | Notes |
|---|---|---|---|
| `index.mdx` | (generated) | — | Auto-generated TOC. References `advanced-sources.md`, `ai-sources.md`, etc. but those files **do NOT exist** in ORCHS — drift from v2/orchestrators/ live (broken sidecar refs in TOC). |
| `master-status.mdx` | Active | (lastAudited 2026-03-24) | 118-file count discrepancy (118 vs 84 vs 72 in ORCHESTRATOR-CONTENT-WRITING). Tracks 11 P0 / 28 P1 / 35+ P2 / 4 stubs / 18 TODO. No production approach selected. Notes ORCHS vs CONTENTI-PIPLEINE relationship is unresolved. |
| `navigator.mdx` | current | 2026-03-16 | Find-your-path router. |
| `portal.mdx` | current | 2026-03-16 | Landing. Heavy JSX imports (Portal scaffolding). 12+ TODO items in header. |

### ORCHS/concepts (5 active + 6 x-deprecated)

| File | Status | lastVerified | Notes |
|---|---|---|---|
| `architecture.mdx` | (no status) | — | Heavy keyword set: ServiceRegistry, AIServiceRegistry, BondingManager, TicketBroker. Per 02-analysis: P0 AIServiceRegistry status uncertain. |
| `capabilities.mdx` | (no status) | — | Voice 8.5/10. |
| `incentive-model.mdx` | (no status) | — | Voice 6.5/10 — weakest concept page. P0: TODO line 274 for reward-call gas. |
| `role.mdx` | (no status) | — | Voice 7/10. Mental models page. |
| `composable/orchestratorRole.mdx` | (no status) | — | Diagram-only. P0 in analysis. |
| x-deprecated/dep-architecture.mdx | current | 2026-03-13 | Older version. |
| x-deprecated/dep-capabilities.mdx | current | 2026-03-13 | Older. |
| x-deprecated/dep-incentive-model.mdx | current | 2026-03-13 | Older — title "Orchestrator Economics and Incentives". |
| x-deprecated/dep-role.mdx | current | 2026-03-13 | Older. |
| x-deprecated/dep-workloads.mdx | current | — | Workloads concept (deprecated, no equivalent active). |
| x-deprecated/rs-workloads.mdx | current | — | Job Types — alternate workloads doc (deprecated). |

**Contradiction:** Deprecated files marked `status: current` despite being in `x-deprecated/` folders. Should be `status: deprecated` or similar.

### ORCHS/guides/advanced-operations (3 active + 1 dep)

| File | Status | lastVerified |
|---|---|---|
| `dep-guide.mdx` | draft | 2026-03-12 (overview, prefix `dep-` but not in x-deprecated/) |
| `gateway-orchestrator-interface.mdx` | draft | 2026-03-16 |
| `gateway-relationships.mdx` | published | 2026-03-13 |
| `pool-operators.mdx` | published | 2026-03-13 |
| `scale-operations.mdx` | published | 2026-03-13 |

### ORCHS/guides/ai-and-job-workloads (9)

| File | Status | lastVerified |
|---|---|---|
| `ai-inference-operations.mdx` | published | 2026-03-13 |
| `audio-and-vision-pipelines.mdx` | draft | 2026-03-16 |
| `diffusion-pipeline-setup.mdx` | published | 2026-03-13 |
| `llm-pipeline-setup.mdx` | draft | 2026-03-16 |
| `model-demand-reference.mdx` | published | 2026-03-13 |
| `model-hosting.mdx` | draft | 2026-03-16 |
| `realtime-ai-setup.mdx` (title "Cascade Setup") | published | 2026-03-13 |
| `video-transcoding-operations.mdx` | published | 2026-03-13 |
| `workload-options.mdx` | published | 2026-03-13 |

### ORCHS/guides/config-and-optimisation (4)

| File | Status | lastVerified |
|---|---|---|
| `ai-model-management.mdx` | draft | 2026-03-16 |
| `capacity-planning.mdx` | draft | 2026-03-16 |
| `pricing-strategy.mdx` | draft | 2026-03-16 |
| `reward-call-tuning.mdx` | current | 2026-03-16 |

### ORCHS/guides/deployment-details (6 active + 12 x-deprecated)

Active:
| File | Status | lastVerified |
|---|---|---|
| `dual-mode-configuration.mdx` | draft | 2026-03-16 |
| `join-a-pool.mdx` | (no status) | — (older version, dropped per CONTENTI-PIPLEINE 04.5) |
| `new-join-a-pool.mdx` | current | 2026-03-15 |
| `orchestrator-transcoder-setup.mdx` | current | 2026-03-15 |
| `setup-options.mdx` | current | 2026-03-17 |
| `siphon-setup.mdx` | current | 2026-03-15 |

x-deprecated/ (12): benchmarking, dep-2-benchmarking, dep-2-requirements, dep-2-session-limits, dep-3-setup-options, dep-benchmarking, dep-orchestrator-transcoder-setup, dep-requirements, dep-session-limits, dep-setup-navigator, dep-setup-options, dep-siphon-setup, dep4-setup-options, session-limits. All `status: current` or `published` (contradicts deprecation).

### ORCHS/guides/monitoring-and-tooling (4) — all `published`, lastVerified 2026-03-13

`explorer-operations.mdx`, `metrics-and-alerting.mdx`, `operator-toolbox.mdx`, `troubleshooting.mdx`.

### ORCHS/guides/operator-considerations (4 active + 3 x-deprecated)

Active (all current, lastVerified 2026-03-15): `business-case.mdx`, `operator-impact.mdx`, `operator-rationale.mdx` (title "Operating Rationale"), `requirements.mdx`.

x-deprecated: `dep-business-case.mdx` (draft), `dep-operator-rationale.mdx` (published 2026-03-13), `dep-protocol-influence.mdx` (draft).

### ORCHS/guides/payments-and-pricing (2)

| File | Status | lastVerified |
|---|---|---|
| `payment-receipts.mdx` | draft | 2026-03-16 |
| `payments.mdx` | published | 2026-03-13 |

### ORCHS/guides/roadmap-and-funding (2) — BOTH STUB

| File | Status | lastVerified | Notes |
|---|---|---|---|
| `funding-and-support.mdx` | draft | 2026-03-16 | **P0 STUB** |
| `orchestrator-profiles.mdx` | draft | 2026-03-16 | **P0 STUB** |

### ORCHS/guides/staking-and-rewards (4) — all `published`, lastVerified 2026-03-13

`delegate-operations.mdx`, `earning-model.mdx`, `network-participation.mdx`, `reward-mechanics.mdx`.

### ORCHS/guides/tutorials (7 active + 3 stubs + 3 x-deprecated)

Active (all `current`, lastVerified 2026-03-16):
- `add-ai-to-video-node.mdx`, `ai-earning-quickstart.mdx`, `byoc-cpu-smoke-test.mdx`, `byoc-cpu-tutorial.mdx` (no frontmatter status), `full-ai-pipeline-tutorial.mdx`, `realtime-ai-tutorial.mdx`, `zero-to-first-reward.mdx`.

Stubs in `gateway-tutorial-composable-pages/stubs/` (3): `tutorial-byoc-cpu-pipeline.mdx`, `tutorial-go-production.mdx`, `tutorial-offchain-transcoding-test.mdx` — all `status: stub`.

x-deprecated (3): `imported-tutorial-1-byoc-cpu-pipeline.mdx`, `imported-tutorial-2-offchain-transcoding-test.mdx`, `imported-tutorial-3-go-production.mdx` — all `draft`, same topics as stubs (duplication).

### ORCHS/quickstart (5)

| File | Status | lastVerified |
|---|---|---|
| `AI-prompt-start.mdx` | review | 2026-03-16 |
| `dep-x-setup-paths.mdx` | current | — (deprecated by name but not in x-deprecated/) |
| `guide.mdx` | current | 2026-03-16 |
| `tutorial.mdx` | current | 2026-03-16 |
| `video-transcoding.mdx` | current | 2026-03-16 |

### ORCHS/resources (8 + 1 compendium + 5 technical)

| File | Status | lastVerified | Notes |
|---|---|---|---|
| `arbitrum-exchanges.mdx` | review | 2026-03-13 | |
| `arbitrum-rpc.mdx` | review | 2026-03-13 | |
| `community-guides.mdx` | review | 2026-03-13 | |
| `community-pools.mdx` | review | 2026-03-17 | **P0 STUB** |
| `faq.mdx` | review | 2026-03-17 | REVIEW comment in body line 183. |
| `glossary.mdx` | current | 2026-03-16 | Orchestrator-tab glossary. Contradicts compendium/glossary.mdx. |
| `gpu-support.mdx` | review | 2026-03-13 | |
| `x-guides.mdx` | review | 2026-03-10 | |
| `x-help.mdx` | draft | 2026-03-17 | audience: developer (wrong for orch tab). |
| `x-payments.mdx` | review | 2026-03-17 | |
| `compendium/glossary.mdx` | draft | 2026-03 | audience: orchestrator-OPERATOR (token diff). Machine-generated, 127-line SearchTable. |
| `technical/cli-flags.mdx` | review | 2026-03-17 | |
| `technical/x-changelog.mdx` | draft | 2026-03-17 | audience: developer. |
| `technical/x-contract-addresses.mdx` | draft | 2026-03-11 | **P0 STUB**, title typo "Adresses", audience: developer. |
| `technical/x-support-status.mdx` | draft | 2026-03-12 | |
| `technical/x-troubleshooting.mdx` | draft | 2026-03-11 | audience: developer. |

### ORCHS/setup (8 active + 5 x-deprecated)

Active:
| File | Status | lastVerified |
|---|---|---|
| `configure.mdx` | current | 2026-03-16 |
| `connect-and-activate.mdx` | current | 2026-03-16 |
| `guide.mdx` | current | 2026-03-16 |
| `r-monitor.mdx` | current | 2026-03-13 |
| `rcs-requirements.mdx` | current | 2026-03-16 |
| `rs-install.mdx` | current | 2026-03-16 |
| `s-guide.mdx` | (no status) | — duplicate of x-deprecated/dep-s-guide |
| `test.mdx` | current | 2026-03-16 |
| `x-test.mdx` | draft | 2026-03-11 — audience: developer (wrong) |

x-deprecated (5): `dep-activate.mdx`, `dep-config.mdx`, `dep-s-guide.mdx`, `r-configure.mdx`, plus parent `x-test.mdx` listed as deprecated.

**ORCHS status summary:**
- Total `current`: ~28 (mostly setup + tutorials)
- Total `published` (older): ~17 (guides/* — older content)
- Total `draft`: ~13
- Total `review`: ~11
- Total `stub`/no status: ~6
- Total in `x-deprecated/`: 26 (12 deployment-details + 6 concepts + 5 setup + 3 operator-considerations + 3 tutorials — but `status: current/published`)
- Total `audience: developer` (mis-tagged): 5 (x-help, x-changelog, x-contract-addresses, x-troubleshooting, x-test)


---

## Section 2 — ORCHESTRATOR-CONTENT-WRITING/ (18 files)

**Key finding:** Folder name says ORCHESTRATOR but PRIMARY OUTPUT is 13 Gateways pages. MASTER-STATE.md + EXECUTION-PLAN.md cover Orchestrators. Folder houses content for TWO different tabs under one mislabelled name.

| File | mtime | Content-date | Status | Summary |
|---|---|---|---|---|
| `EXECUTION-PLAN.md` | 2026-05-18 | 2026-03-23 | Active plan | 30-min sprint plan for Orchestrators tab. 5 parallel agents, then content audit, then content writing batches. Output: tab-map, research-pack-v2, terminology lock, content scan. |
| `MASTER-STATE.md` | 2026-05-18 | 2026-03-23 | Active state doc | 6-part Orchestrators canonical reference. D-NAV-01 LOCKED. Term locks: BYOC=Bring Your Own Container, NaaP=Network-as-a-Product, LIP-92=Treasury Contribution Percentage. 12-section IA (S1-S12). 84 active .mdx (72 in nav, 12 not in nav). 5 personas, 7 JTBD. Fee cut direction conflict HIGH (v1=95% kept vs v2=5% kept). Glossary authority: human resources/glossary.mdx = AUTHORITATIVE; compendium/glossary.mdx = AI-generated, unverified. |
| `gateways-COMPLETION-STATUS.md` | 2026-05-18 | 2026-03-23 | Status report | 13/13 pages complete, 9,482 words, ~48 veracity REVIEW markers. Phases done: IA, structure audit, content audit, voice rules, content pass. PENDING: naming audit, full veracity, schema migration, layout pass, universal pages, cross-tab. |
| `gateways-IA.md` | 2026-05-18 | (2026-03-23 from status) | LOCKED for writing | 13-section IA (S1-S13). 13 not 12 because S4/S5 are parallel quickstarts, S9 dual mode has distinct OS constraint. Content source mapping per section. |
| `master-status.mdx` | 2026-05-18 | (lastAudited 2026-03-24) | Active | Detailed audit. Notes folder-name mismatch. 13 .md pages need MDX layout pass to become valid .mdx. IA lock not in decision-registry.md (per CLAUDE.md: decisions not in registry do not exist). |

### Gateway section pages S01-S13 (13 files in `gateways/`)

All files dated 2026-05-18 mtime. Content written 2026-03-23.

| File | Words | Frontmatter complete | Veracity markers |
|---|---|---|---|
| S01-gateway-path-finder.md | 789 | YES (`pageType: navigation`, `purpose: orient`, `audience: gateway`, `status: draft`) | 0 |
| S02-what-a-gateway-does.md | 848 | YES | 2 |
| S03-payments-and-funding.md | 817 | YES | 4 |
| S04-on-chain-quickstart.md | 674 | **NO — only H1, no frontmatter** | 8 |
| S05-off-chain-quickstart.md | 785 | **NO** | 5 |
| S06-pricing-and-cost-control.md | 606 | **NO** | 5 |
| S07-orchestrator-selection.md | 631 | **NO** | 4 |
| S08-ai-pipeline-routing.md | 612 | **NO** | 4 |
| S09-dual-mode.md | 495 | **NO** | 3 |
| S10-payment-operations.md | 624 | YES | 4 |
| S11-production-operations.md | 737 | YES | 3 |
| S12-troubleshooting.md | 1044 | YES | 2 |
| S13-naap-platform.md | 838 | YES | 4 |

**Drift:** S04-S09 (6 of 13 pages) have NO frontmatter — only H1. status-doc says "13/13 complete" but frontmatter is missing on half.

**REVIEW marker drift:** REVIEW comments use both `{/_ REVIEW: ... _/}` (MDX comment style with underscores — broken MDX syntax in plain .md) and standard markers. The status doc claims ~48 markers; my count from frontmatter-shown files matches that ballpark.


---

## Section 3 — TERMINOLOGY-COLLATE/ (34 files)

**Purpose:** Cross-tab terminology consolidation. Feeds CONTENT-WRITING terminology-lock phase. All files dated 2026-03-20 (research/harvest/categories/scan-summary/scan-results/consolidated/) or 2026-03-21 (per-tab/gateways, per-tab/orchestrators). mtime 2026-05-18 (bulk reset).

**Status:** Scan phase complete. Gated on human review of `harvest.md` (317 terms). All downstream tasks (Task 3 categorisation, Task 6 merge, Task 7 per-tab finalisation) blocked.

### Root files (5)

| File | Date | Status | Summary |
|---|---|---|---|
| `master-status.mdx` | 2026-03-24 (lastAudited) | Active | Full audit. 9-tab scan done, 317+ terms harvested, 126 of 176 known terms have NO definition. Plan gated on human review. |
| `research.md` | 2026-03-20 | Draft | Task 1. 47+ files inventoried across 8 source groups. Includes `v2/resources/livepeer-glossary.mdx` (~80 terms, stub/brainstorm), `v2/gateways/resources/glossary.mdx` (~15 terms, current 2026-03-14). |
| `harvest.md` | 2026-03-20 | Draft | Task 2. 317+ terms A-Z. Format: Term \| Source(s) \| Draft Definition \| Domain Guess \| Notes. **HUMAN REVIEW GATE** before Task 3 categorisation. |
| `categories.md` | 2026-03-20 | Draft | Task 3. **CANONICAL TAGGING TAXONOMY**: 7 domains, 35 sub-categories. (Domains: livepeer, video, ai, web3, economic, technical, operational.) Per-domain term tables (13 legacy domains × 25-45 terms each). Cross-domain notes table flagging shared terms (on-chain/off-chain, Segment, Developer, Pipeline). |
| `scan-summary.md` | 2026-03-20 | Draft | Per-tab term counts (Home ~100, About 104, Solutions ~140, Developers 189, Gateways 94, Orchestrators ~150, LPT ~120, Community ~115, Resources ~115). ~450-550 unique after dedup. Top universal terms (in 7+ tabs): Orchestrator, Gateway, Delegator, LPT, Transcoding, Staking, ETH, GPU, Inference, Arbitrum, Treasury, AI pipeline, RTMP, HLS, Model, Segment. |

### Classification files (2)

| File | Date | Status | Summary |
|---|---|---|---|
| `classified-by-tab.md` | 2026-03-20 | Draft | Per-tab term coverage matrix with definitions and source URLs. Reproduces scan-summary table with definition column. Cross-tab universal terms tagged. |
| `classified-by-tag.md` | 2026-03-20 | Draft | By the 7-domain × 35-subcategory taxonomy. Each entry: Term \| Definition \| Source URL \| Also tagged \| Pages. **This is the working source-of-truth glossary.** |

### Per-tab glossaries (9 files in `per-tab/`)

| File | Date | Term count | Lines |
|---|---|---|---|
| glossary-home.md | 2026-03-20 | 63 | 635 |
| glossary-about.md | 2026-03-20 | 65 | 656 |
| glossary-solutions.md | 2026-03-20 | 76 | 768 |
| glossary-developers.md | 2026-03-20 | 83 | 844 |
| glossary-gateways.md | **2026-03-21** | 75 | 759 |
| glossary-orchestrators.md | **2026-03-21** | 123 | 1234 |
| glossary-lpt.md | 2026-03-20 | 98 | 1004 |
| glossary-community.md | 2026-03-20 | 101 | 1023 |
| glossary-resources.md | 2026-03-20 | 103 | 1073 |

**Note:** glossary-orchestrators.md has 123 terms (largest). Per-tab indexing says: home (63), about (58 — but file says 65), solutions (74 — file says 76), developers (73 — file says 83), gateways (65 — file says 75), orchestrators (115 — file says 123), lpt (94 — file says 98), community (97 — file says 101), resources (98 — file says 103). **DRIFT** between glossary-index.md and the actual per-tab term counts (consistent +3 to +10 inflation).

### Scan results (14 files in `scan-results/`)

Agent extractions per tab (9 files): `agent-{about,community,developers,gateways,home,lpt,orchestrators,resources,solutions}.md` — small (65-115 lines). Each lists ~80-200 terms with brief context.

| Tab | Pages scanned | Terms found |
|---|---|---|
| About | 33 | 104 |
| Developers | 44 | 189 |
| Gateways | **275** | 94 (note: page count anomaly — gateways tab has 275 scanned pages??) |
| Orchestrators | 87 | ~150 |
| Solutions | 113 | ~140 |
| LPT | (all) | ~120 |
| Community | (all) | ~115 |
| Home | 18 | ~100 |
| Resources | (all) | ~115 |

Definition files (4): `definitions-ai.md`, `definitions-livepeer.md`, `definitions-video.md`, `definitions-web3-economic-technical-ops.md` (3 lines — stub).

`pages-lookup.md` (395 lines) — term-to-pages reverse index.

### Consolidated (4 files)

| File | Date | Term count | Notes |
|---|---|---|---|
| glossary-index.md | 2026-03-20 | 480 estimated unique | Index only, no defs. Maps to per-tab. Reports 737 source entries deduplicated to ~480. |
| glossary-a-m.md | 2026-03-20 | (A-M slice) | Definitions A-M. |
| glossary-n-z.md | 2026-03-20 | (N-Z slice) | Definitions N-Z. |
| veracity-sources.md | 2026-03-20 | (not term file) | Source registry. Veracity tier system (primary, acceptable, not-permitted). Staleness risk classification. |

### Terminology drift summary

1. **Per-tab term-count drift:** glossary-index.md reports (e.g.) orchestrators=115, but glossary-orchestrators.md file header says 123.
2. **Gateways page-scan anomaly:** 275 MDX in v2/gateways/ scanned — implausibly large (Gateways tab is much smaller than 275 pages).
3. **Definition coverage gap:** 126 of 176 script-known terms have NO definition.
4. **HUMAN GATE BLOCKING:** harvest.md must be reviewed before Task 3 (categorisation refinement), Task 6 (merge), Task 7 (per-tab finalisation). No movement.


---

## Section 4 — CONTRACTS/ (30 files — 2 more than stated)

**Purpose:** Recovery and rearchitecture of the Livepeer contracts page + pipeline after a regression cycle (March-April 2026). Treats the chat-recovered original thread (`ab1baa21--ab1baa21.md`) as primary authority. Current files treated as evidence only, not target-state truth.

### CURRENT-STATE/ (10 files)

| File | mtime | Content-date | Status | Summary |
|---|---|---|---|---|
| `REQUIREMENT-LEDGER.md` | 2026-05-18 | (no date in header) | Active | Maps requirement IDs to phases (0-5), owners, target surfaces, proof sources, pass conditions, final status. All 13 requirement-groups still `pending`. IDs: AUTH-EX (4), SYS (12), SCH (9), CPT (32), BCP (10), PIPE (30), OVR (13), COM (24), MINT (8), CHATI (6), REC (10). |
| `REQUIREMENTS.mdx` | 2026-05-18 | — | Active authority | Authority-only target-state. **Authority precedence:** (1) recovered-thread-chat ab1baa21, (2) design-docs (DEPRECATED/contract-pipeline-architecture.md + DEPRECATED/contracts-pipeline-requirements/-2026-04-01.md + Canonical/livepeer-contracts-pipeline.mdx), (3) session-log evidence, (4) git-checkpoint reflog (79f9dc5d3 e69a10f09 3b97a99b2 6d4e4e401), (5) constraint-doc. **Excluded as authority:** FUCKUP.log (post-mortem), current regressed page files, ACTUAL-CONTRACTS.MDX recovery artifacts, contracts-pipeline-final.mdx scaffold. Original requirements broken into SYS-001..SYS-012, SCH-001..SCH-009, CPT-001..CPT-032, BCP-001..BCP-010, PIPE-001..PIPE-030, etc. |
| `REQUIREMENTS-AUDIT.md` | 2026-05-18 | — | Active audit | Scores current repo state. Workflow=mostly correct, pipeline=mostly correct, generated outputs=partial, contracts page=partial, blockchain page=partial, page-owned data=**incorrect**, Mintlify safety=**incorrect**. |
| `UNVERIFIABLE-GAPS.md` | 2026-05-18 | — | Active | 5 gaps marked `blocked-unverifiable`: LOST-001 (contracts-page copy literals), LOST-002 (layout polish numerics), LOST-003 (blockchain fact lines), LOST-004 (render-history PASS), LOST-005 (line-level edit authorship). |
| `UX-AUDIT.md` | 2026-05-18 | **2026-04-03** | Active audit | Mintlify/UX architecture audit. Sources: Mintlify docs + repo governance + Mintlify constraints reference + working repo patterns. |
| `VISUAL-CHECKPOINTS.md` | 2026-05-18 | — | Active | Authority-backed measurable visual assertions for non-regression proof. |
| `automation-integrations-update-contract-addresses-current-state.mdx` | 2026-05-18 | 2026-04-03 (lastVerified) | working | Exact current workflow documentation. audience: internal. |
| `contracts-current-state-vs-requirements-audit.md` | 2026-05-18 | — | Active | Differential audit table. workflow=match/partial/mismatch per requirement-ID group. Workflow & pipeline mostly match, page surfaces mostly partial/mismatch. |
| `contracts-pipeline-current-state-walkthrough.md` | 2026-05-18 | — | Active | Step-by-step what the repo does today (cron → workflow → CLI → pipeline → outputs). Main cron `0 2 * * *`, shadow `30 2 * * *`. |
| `livepeer-contracts-pipeline-current-state.mdx` | 2026-05-18 | 2026-04-03 (lastVerified) | working | Mintlify reference page for current pipeline implementation. |

### Canonical/ (4 files)

All `lastVerified: '2026-04-03'`, mostly `status: draft`.

| File | Audience | Lines | Summary |
|---|---|---|---|
| `livepeer-contracts-pipeline.mdx` | builder | 73 | Concise current-state summary of pipeline. |
| `automation-integrations-update-contract-addresses.mdx` | internal | 270 | Current-state dispatcher reference. |
| `workflow-data.mdx` | internal | 524 | Reference for contracts data path, ownership boundaries, rationale. Includes Mintlify safety. |
| `workflow-scripts.mdx` | internal | 368 | End-to-end script workflow (mermaid diagram). |

### DEPRECATED/ (16 files)

| File | Content-date | Lines | Notes |
|---|---|---|---|
| `ACTUAL-CONTRACTS.MDX` | 2026-04-02 | 472 | Recovery artifact. **Excluded as authority (AUTH-EX-003).** |
| `ACTUAL-CONTRACTS copy.MDX` | 2026-04-02 21:13:57 +1100 | 393 | Duplicate. Excluded as authority. |
| `contract-pipeline-architecture.md` | — | 197 | Four-layer proof system architecture. **Cited as design-doc authority in REQUIREMENTS.** Despite being in DEPRECATED/, REQUIREMENTS treats it as source. |
| `contract-pipeline-recommendation.md` | 2026-04-01 | 287 | Recommendation awaiting decision. Audience: Security Committee, Rick, Rich. |
| `contract-set-full.md` | — | 40 | Group breakdown of contracts by discovery method. Casual tone ("Correct. Let me check..."). |
| `contracts-canonical-architecture-research-2026-04-01.md` | 2026-04-01 | 444 | Primary-source research. |
| `contracts-explorer-link-audit-2026-03-31.md` | 2026-03-31 | 147 | Explorer link audit on `livepeer-contract-addresses.mdx`. |
| `contracts-phase2-follow-up-flags-2026-04-01.md` | 2026-04-01 | 41 | Deferred tasks for after schema stabilises. |
| `contracts-pipeline-audit-2026-03-31.md` | 2026-03-31 | 186 | Original pipeline audit. "Data integrity > presentation." |
| `contracts-pipeline-final.mdx` | — | 146 | Draft/scaffold. **Excluded as authority (AUTH-EX-004).** Contains note "scammer" in comment. |
| `contracts-pipeline-requirements-2026-04-01.md` | 2026-04-01 | 149 | Non-negotiable requirements. Cited as design-doc authority. |
| `contracts-primary-source-replacement-architecture-2026-04-01.md` | 2026-04-01 | 554 | Research brief on controller state as truth. |
| `contracts-rearchitecture-research-2026-04-01.md` | 2026-04-01 | 417 | Research brief on replacement pipeline. |
| `contracts-requirements-2026-04-01.md` | 2026-04-01 | 177 | Acceptance bar. Cited as design-doc authority. |
| `contracts-source-of-truth-and-evidence-2026-03-31.md` | 2026-03-31 | 116 | Truth hierarchy. Controllers: Arbitrum=0xD8E8..., Ethereum=0xf96d... |
| `livepeer-contracts-pipeline-copy-updates.mdx` | 2026-04-01 (lastVerified) | 376 | `status: placeholder`. Cited as design-doc authority. |

**Contradiction:** Files in DEPRECATED/ are treated as **active design-doc authority** in REQUIREMENTS.mdx. The folder name suggests they should not be used but they are explicitly referenced as governing sources. This is a tagging contradiction.


---

## Section 5 — CONTRACTS-CHANGELOG-PIPELINE/ (2 files)

| File | mtime | Content-date | Status | Summary |
|---|---|---|---|---|
| `architecture.md` | 2026-05-18 | **2026-03-28** | DESIGN — awaiting approval | Owner: Alison. **Note: header says work folder is `workspace/plan/active/CHANGELOG-PIPELINE/`, but file lives in `CONTRACTS-CHANGELOG-PIPELINE/` — drift.** Three changelog categories: (1) Solutions release-based, 5 active products (daydream, embody, frameworks, livepeer-studio, streamplace); (2) Livepeer code changelog (release-based, partial); (3) Contract changelogs (commit-based from governor-scripts). Design goal: config-driven pipeline. Mermaid architecture: Config layer (product-social-config.json + contract-addresses-supplement.json) → Pipeline layer (generate-changelog.js + fetch-contract-addresses.js + 2 yml workflows) → Data layer (contractAddressesData.jsx) → Display layer (5 solutions + 5 resources changelogs). |
| `seo-aeo-anti-scam-plan.md` | 2026-05-18 | — | Plan | Canonical page: `v2/about/resources/contract-addresses-canonical.mdx` — Alison co-designing. Pipeline running: `snippets/data/contract-addresses/contractAddressesData.jsx`. Goal: dominate SEO + AEO for contract-address queries. Mintlify surfaces auto-generated: sitemap.xml, robots.txt, llms.txt, llms-full.txt, meta tags, MCP server, .md URL suffix. Does NOT do: JSON-LD schema.org, FAQ schema, per-page canonical override. |

**Contradiction with CONTRACTS/:** This plan describes a contracts changelog as one of three categories. CONTRACTS/ plan treats the contracts page as a separate authority-recovery exercise. No cross-link between the two plans. Both reference `contractAddressesData.jsx` but architecture.md doesn't reference any CONTRACTS/ files; CONTRACTS/ doesn't reference architecture.md.


---

## Section 6 — CONTENT-STRUCTURE-TEMPLATES/ (4 files)

| File | mtime | Content-date | Status | Summary |
|---|---|---|---|---|
| `master-status.mdx` | 2026-05-18 | 2026-03-24 (lastAudited) | Active | 5-phase plan. Phase 0: consolidate existing. Phase 1: content types + sections. Phase 2: page structure. Phase 3: composable section blocks. Phase 4: rebuild templates. Phase 5: codify. Sits between CONTENT-WRITING Steps 10-11. Pre-research done, blocked on Google Doc export. |
| `pre-research.md` | 2026-05-18 | — | Draft | AI assessment of existing repo state. 35+ files identified. 5 open questions for Alison: Google Doc export, relationship to CONTENT-WRITING plan, template canonical location, composable section format, scope of "composable." **Identifies: 12 pageTypes, 12+ page templates, 113 components in registry. Two parallel template sets (snippets/templates/pages/ vs v2/templates/pages/) — alignment unverified. SNIPPETS plan deleted v2/templates/ on 2026-03-21; research.md NOT updated.** |
| `research.md` | 2026-05-18 | 2026-03-19 | Reference | Ranked inventory across 7 groups (Page Templates, Taxonomy/Frameworks, Layout/Component Contracts, Naming/Copy, Related Plans, Tooling, Design Spec docs). |
| `resources.md` | 2026-05-18 | 2026-03-20 | Reference (stub) | 26 lines. Reference file inventory. **External Resources: Google Doc "Design Governance Framework Report" status INACCESSIBLE.** |

**Contradiction:** `research.md` notes two parallel template sets but `v2/templates/` was already deleted by SNIPPETS plan as of 2026-03-21. Research doc not updated.


---

## Section 7 — SHIP-CONTENT/ (1 file)

| File | mtime | Content-date | Status | Summary |
|---|---|---|---|---|
| `decisions.md` | 2026-05-18 | 2026-03-29 (last updated) | Active | Decision log. 12 OPEN decisions (D-01..D-12) across Orchestrators (7), Gateways (2), Developers (1), About (1), Delegators (1). Defaults proposed but no human picks recorded. 1 RESOLVED: D-NAV-01 (locked 2026-03-23 by human). **Verification queue (4 items):** V-01 fee cut direction (HIGH), V-02 active set size 100 (MEDIUM), V-03 AI routing active-set independence (HIGH), V-04 LIP-92 identity (MEDIUM). |

---

## Section 8 — SNIPPETS/ (3 files)

| File | mtime | Content-date | Status | Summary |
|---|---|---|---|---|
| `master-status.mdx` | 2026-05-18 | 2026-03-24 (lastAudited) | COMPLETE | 5-phase plan all done. Removed preview pipeline. Deleted v2/templates/ (21 files). Fixed catalog table. Source naming fixes. Config/test cleanup. **Icon map extended 30→78 icons, 11 sections, with iconMapPageTypeDefaults export.** |
| `template-audit.md` | 2026-05-18 | 2026-03-21 | Findings complete | v2/templates/ was a generated output folder (preview routes) — moved/removed. Source-side `snippets/templates/` has internal structural problems. |
| `template-plan.md` | 2026-05-18 | 2026-03-21 | Ready to execute (now complete) | Phase 1: strip preview pipeline. Decision: drop preview pages entirely (Option B). Stale path reference: `tests/run-all.js` → `operations/tests/run-all.js`. |

---

## Section 9 — SOLUTIONS-SOCIAL-DATA/ (3 files — NOT including .env)

**Note:** `.env` confirmed gitignored at `.gitignore:24`. Per scope rules, NOT read.

| File | mtime | Content-date | Status | Summary |
|---|---|---|---|---|
| `master-status.mdx` | 2026-05-18 | 2026-03-24 (lastAudited) | COMPLETE | All 4 phases done. 5 product community pages: daydream, embody, frameworks, livepeer-studio, streamplace. Pipeline extensions: fetch-youtube-data.js multi-channel, fetch-discord-announcements.js, fetch-rss-blog-data.js, fetch-github-discussions.js, fetch-github-releases.js, 3 workflows. |
| `plan.md` | 2026-05-18 | 2026-03-21 (created), 2026-03-23 (updated) | Phase 4 COMPLETE | Reverse-engineers `trending-topics.mdx` data pipelines (5 sections: Videos YouTube, Forum Discourse, Discord n8n, X/Twitter iframe, Blogs Ghost CMS). Architecture: External API → GitHub Actions → JSX data file → React component → MDX page. |
| `_workspace/research/socials-research.md` | 2026-05-18 | 2026-03-21 | Complete | 249 lines. Master reference table for product social channels. |

---

## Section 10 — SCRIPT WORKFLOW AUDIT/ (10 files)

**Note:** Folder name contains a space — requires quoting.

| File | mtime | Content-date | Status | Summary |
|---|---|---|---|---|
| `master-status.mdx` | 2026-05-18 | 2026-03-24 (lastAudited) | Complete (PARK) | Read-only audit. Fed SCRIPT-GOVERNANCE, AUTOMATIONS-RESTRUCTURE, COMPONENT-GOVERNANCE. Findings: governance 3-5x larger than content it governs. **154 scripts, 44 workflows, 21 JSON configs for ~2,259 content pages. 25+ validators declared CI tiers with zero wiring. 7 GHA workflows broken post-restructure.** |
| `architecture-streamlining-report.md` | 2026-05-18 | 2026-03-23 | Read-only review | 45KB. **132 active scripts**, 43 GHA workflows, 6-type taxonomy, 4 concerns, 27+ niches, 5-layer system, ~200 MDX docs. Governance:content = 2:1. Path fragility = #1 weakness. 15 auto-commit workflows. 43→22 workflow consolidation recommended. |
| `docs-platform-streamlining-report.md` | 2026-05-18 | 2026-03-23 | Read-only review | 50KB. Mintlify under-leveraged. Custom llms.txt + AI sitemap + companion files when Mintlify auto-provides them. 7/44 GHA workflows broken. 25 validators have zero CI wiring. **17 active workspace plans** for one docs repo. **Content production has not started** — zero pages through pipeline. |
| `audits/00-concern-index.md` | 2026-05-18 | 2026-03-23 | Audit | Concern index for SCRIPT-GOVERNANCE 3-tier model `<type>/<concern>/<niche>`. |
| `audits/01-components-audit.md` | 2026-05-18 | 2026-03-23 | Audit | Component library scripts/workflows/gates. |
| `audits/02-content-audit.md` | 2026-05-18 | 2026-03-23 | Audit | Content authoring, quality, SEO, glossary, veracity, style. |
| `audits/03-governance-audit.md` | 2026-05-18 | 2026-03-23 | Audit | Scripts about scripts, catalogs, registries, repo structure, agent surfaces, repair pipelines. |
| `audits/04-ai-audit.md` | 2026-05-18 | 2026-03-23 | Audit | AI discoverability, LLM files, AI sitemap, companion JSONs, agent skills, codex isolation, cross-agent packaging. |
| `audits/05-data-pipelines-audit.md` | 2026-05-18 | 2026-03-23 | Audit | External data ingestion pipelines (cross-cutting `content/data` concern). |
| `audits/06-codex-safety-audit.md` | 2026-05-18 | 2026-03-23 | Audit | AI agent safety, Codex session isolation, human-in-the-loop, agent governance. |

---

## Section 11 — TOOLING/ (6 files)

**Purpose:** `lpd` CLI Bash tool (2,148 lines, v0.2.0) audit + remediation. Plan complete; new auto-remediation pipeline being designed.

| File | mtime | Content-date | Status | Summary |
|---|---|---|---|---|
| `master-status.mdx` | 2026-05-18 | 2026-03-24 (lastAudited) | Complete (PARK) | Core work done. Layer 1 validator created (`validate-lpd-paths.js`). Layers 2-3 deferred. |
| `lpd-audit.md` | 2026-05-18 | 2026-03-21 | Complete | 11 stale `tools/scripts/` references fixed → `operations/scripts/<type>/<concern>/<niche>/`. Deprecated locale docs archived (`v2/cn/`, `v2/fr/`, `v2/es/`). |
| `lpd-command-reference.md` | 2026-05-18 | — | Reference | Manual reference document, v0.2.0. Discovery, setup, dev, testing, content operations, hooks, script runner commands. |
| `lpd-dev-remediation-research.md` | 2026-05-18 | **2026-04-15** | Research complete | Phase research for new `lpd dev` auto-remediation pipeline. Next: co-design architecture. |
| `scripts/lpd-dev-auto-remediation-design.md` | 2026-05-18 | 2026-04-15 | Design awaiting approval | Architecture design. Depends on spelling-terminology-research.md. |
| `scripts/spelling-terminology-research.md` | 2026-05-18 | 2026-04-15 | Research | Capitalisation rules for proper nouns + domain terms for spelling checker. Current spelling infrastructure state and gaps. |

---

## Section 12 — CANONICAL-TRUTH-GUIDES/ (2 files)

| File | mtime | Content-date | Status | Summary |
|---|---|---|---|---|
| `master-status.mdx` | 2026-05-18 | 2026-03-24 | **Recommended DELETE** | "Purpose undefined." Audit recommends deleting and merging into DOCUMENTATION. Scope overlaps with DOCUMENTATION + REPO-STRUCTURE-GOV + OSS-OWNERLESS-REPO-GOVERNANCE + SCRIPT-GOVERNANCE. |
| `Workflow-Alignment-Skills/lifecycle-design.md` | 2026-05-18 | — | Active | Thread lifecycle pipeline design. 10 phases: research → audit → design → implement → test → iterate → test → verify → document → cleanup. Skill mapping per phase. **NOT mentioned in master-status.** Indicates plan has scope creep — was supposed to be deleted but kept growing. |

**Contradiction:** master-status.mdx says folder should be deleted, but `Workflow-Alignment-Skills/lifecycle-design.md` was added without updating master-status. CLAUDE.md "Active threads" table mentions Workflow Alignment Skills as Done.

---

## Section 13 — FULL-CLEANUP/ (1 file)

| File | mtime | Content-date | Status | Summary |
|---|---|---|---|---|
| `reconciliation-handoff.md` | 2026-05-18 | 2026-03-28 | Phase -1 complete, ready for Phase 0 | docs-v2-dev ↔ origin/docs-v2 reconciliation. **994 commits ahead, 784 behind, 7,040 files differ, 3,889 MDX differ.** Strategy: "Ours-first cherry-pick" — docs-v2-dev structure wins. **2,486 files removed from git tracking via gitignore** (_dep-docs 525, i18n 24, _workspace 1,937). 86 x-deprecated consolidated into _workspace. Rollback anchor: 3a996563b0d6737646cbb7e51a6c2393257ccc82. 18 backlog items B001-B018 (P1: B010 v1 default, B012 gateways 277 deprecated, B014 orchestrators active stream, B017 17 broken nav, B018 270 orphan MDX). |

---

## Section 14 — FUCK_CLAUDE/ (23 files — 12 more than stated)

**Per CLAUDE.md:** Canonical diagnostic + 12 confirmed root causes of VS Code Claude Code extension breakage. Active patches die on extension update — re-run `patch-extension.sh` after any update.

### Top-level docs (11)

| File | mtime | Content-date | Lines | Summary |
|---|---|---|---|---|
| `CANONICAL-DIAGNOSTIC.md` | 2026-05-18 | 2026-03-29 | 290 | **Single source of truth.** Supersedes prior. Extension v2.1.86 active, v2.1.84 patched dead. Architecture: model.cache (172/93 Claude Code) vs state.cache (104/79). state.vscdb SQLite ItemTable. 3 providers: claude-code:/ (93), vscode-chat:// (24), openai-codex:// (1). Local jsonl: 94 files / 1.2 GB primary workspace; 560 files / 2.9 GB all projects. |
| `COMMUNITY-RESEARCH-2026-03-29.md` | 2026-05-18 | 2026-03-29 | 220 | 82 open `data-loss` issues. Community workarounds. Third-party tools. Anthropic engagement status (none meaningful). |
| `claude-session-map.md` | 2026-05-18 | — | 407 | Full session map across all observer/primary projects. 150+ observer-sessions logged. |
| `claude-vscode-error-investigation-summary.md` | 2026-05-18 | 2026-03-27 | 31 | Initial investigation summary. |
| `completion-report-2026-03-27.md` | 2026-05-18 | 2026-03-27 | 111 | Recovery work. Claude Code crashed ~02:13, wiped sessions. 3rd+ occurrence. 120 min recovery. 83 jsonl intact. Multiple DB-level fixes. Sessions restored but messages fail to load due to deserializeWebviewPanel + fetchSessions bugs. **14 zombie Claude processes causing 5-10 min response times.** 11,617 messages extracted across 20 sessions. |
| `corrections-report.md` | 2026-05-18 | 2026-03-27 | 58 | No fixes applied — lists drift between claims. E.g., reported 74 JSONL vs actual 83. |
| `session-damage-report-2026-03-29.md` | 2026-05-18 | 2026-03-29 | 125 | Latest damage report (v2.1.86). |
| `session-loss-diagnosis-2026-03-27.md` | 2026-05-18 | 2026-03-27 | 186 | Report #2. Session 224cfe73 / extension v2.1.84. |
| `session-loss-diagnosis.md` | 2026-05-18 | 2026-03-27 | 153 | Report #1. (Produced by Opus 4.6.) |
| `session-recovery-report.md` | 2026-05-18 | 2026-03-27 | 87 | Recovery PARTIALLY MET. Sessions visible, messages don't load. |
| `verification-report.md` | 2026-05-18 | 2026-03-27 | 52 | Verification of claims against local evidence. No `sessions-index.json` exists. |

### Scripts (12)

| File | Type | Lines | Purpose |
|---|---|---|---|
| `backup-vscode-state.sh` | Bash | 59 | Snapshot state.vscdb + model.cache before VS Code or on cron. Last 48 backups. |
| `fix-title-overwrite.sh` | Bash | 60 | Detect+fix #32150 title-eviction bug (last-prompt overwriting custom-title in JSONL). Runs every 2 min via launchd. |
| `fix-titles.sh` | Bash | 106 | Fix UUID-only labels in model.cache from JSONL custom-title entries. CLOSE VS CODE BEFORE RUNNING. |
| `full-repair.sh` | Bash | 62 | Complete pipeline: backup → recover dropped → fix titles → sort → report. `--dry-run` available. |
| `list-sessions.sh` | Bash | 17 | List Claude Code sessions with titles. No VS Code dependency. |
| `patch-extension.sh` | Bash | 108 | Apply buffer size fix to active Claude Code extension. v2.1.86 has 2 UUID-adjacent buffers. **Patches die on extension update.** |
| `reap-zombie-claude.sh` | Bash | 152 | Kill orphan Claude binaries + MCP node children. Extension never kills spawned processes. |
| `recover-dropped-sessions.sh` | Bash | 138 | Find sessions on disk missing from sidebar, inject into state.vscdb. |
| `restore-vscode-state.sh` | Bash | 71 | Restore from backup. CLOSE VS CODE. |
| `sort-sessions.sh` | Bash | 86 | Re-sort model.cache by created date (newest first). CLOSE VS CODE. |
| `com.alison.claude-backup.plist` | launchd | 39 | 30-min snapshots. |
| `com.alison.claude-reaper.plist` | launchd | 43 | Zombie reaper. |


---

## Section 15 — Contradictions & Drift (Top 10)

### 1. Orchestrators file-count discrepancy: 122 vs 118 vs 84 vs 72

- ORCHS/ folder: 122 actual files on disk
- ORCHS/03-AUTONOMOUS-PRODUCTION-OPTIONS.md: claims "118 files copied"
- ORCHS/02-CRITICAL-ANALYSIS.md: "73 published + 45 _workspace/composable = 118"
- ORCHESTRATOR-CONTENT-WRITING/MASTER-STATE.md: "84 active .mdx files, 72 in docs.json nav"
- ORCHS/master-status.mdx: "118 in ORCHS, but 84 vs 72 elsewhere — discrepancy unexplained"
- ORCHESTRATOR-CONTENT-WRITING/master-status.mdx: notes the discrepancy but doesn't resolve it

**Root cause:** ORCHS includes `x-deprecated/` (26 files), composable stubs (3 files), and dep-* duplicates. Live nav has 72 only. No single doc reconciles these.

### 2. Two parallel work tracks for orchestrators tab — both produce content; no decision on canonical

- **ORCHS/**: 122 working copies of live `v2/orchestrators/` files for improvement. Pre-execution; no content written.
- **CONTENTI-PIPLEINE/** (referenced in master-status but not in scope of this audit) and **ORCHESTRATOR-CONTENT-WRITING/MASTER-STATE.md**: 84 v2 pages, 5 personas, 7 JTBD, 12-section IA (S1-S12).
- **ORCHESTRATOR-CONTENT-WRITING/gateways/**: 13 fully written gateway pages (9,482 words), not orchestrators content.

**Drift:** Folder named ORCHESTRATOR-CONTENT-WRITING contains Gateways content. ORCHS folder has Orchestrator content. MASTER-STATE.md (in ORCH-CONTENT-WRITING) describes the Orchestrators tab. EXECUTION-PLAN.md is for Orchestrators. **The folder name does not reflect contents.**

### 3. Terminology drift — Pool Worker vs Pool Node vs Pool Operator

- TERMINOLOGY-COLLATE/categories.md (LOCKED 2026-03-20): `Pool node` = preferred, `Pool worker` = DEPRECATED
- ORCHESTRATOR-CONTENT-WRITING/MASTER-STATE.md: "Pool node term — Glossary still says 'Pool Worker' as primary. Must be updated"
- ORCHS/01-CORE-NEEDS-AND-STANDARDS.md: terminology lock has "Pool: Arrangement where operators connect GPU capacity to pool operator's orchestrator" — does NOT have Pool node, Pool worker, or Pool operator
- CLAUDE.md Domain Terms table: "pool worker | Must be defined at first use on every page"

**Verdict:** CLAUDE.md uses the deprecated term that TERMINOLOGY-COLLATE flagged for replacement.

### 4. Fee cut direction is unresolved

- ORCHESTRATOR-CONTENT-WRITING/MASTER-STATE.md: "Fee cut direction convention v1→v2 possible percentage inversion — HIGH PRIORITY"
- SHIP-CONTENT/decisions.md: V-01 fee cut direction "HIGH — blocks all S3, S7, S11 content"
- TERMINOLOGY-COLLATE/categories.md: Defines `Fee Cut` as "Percentage of ETH service fees kept by orchestrator before distributing to delegators" (% kept)
- CLAUDE.md Domain Terms: "reward cut / fee cut" — no direction specified

**Verdict:** SHIP-CONTENT default is "% kept by orchestrator" but flagged as needing SME verification. TERMINOLOGY-COLLATE has already locked it to "% kept" but the lock has not propagated to other plans.

### 5. CONTRACTS authority paradox — DEPRECATED files cited as design-doc authority

- REQUIREMENTS.mdx Authority precedence: design-doc class includes:
  - `DEPRECATED/contract-pipeline-architecture.md`
  - `DEPRECATED/contracts-pipeline-requirements-2026-04-01.md`
  - `DEPRECATED/contracts-requirements-2026-04-01.md`
  - `Canonical/livepeer-contracts-pipeline.mdx`
- The folder name DEPRECATED/ implies these should not be used, but REQUIREMENTS explicitly cites them as governing authority.

**Verdict:** The folder structure (DEPRECATED/Canonical/CURRENT-STATE) does not reflect the actual authority hierarchy in REQUIREMENTS.mdx.

### 6. x-deprecated files marked `status: current`

In ORCHS/:
- `concepts/x-deprecated/dep-architecture.mdx` → status: current
- `guides/deployment-details/x-deprecated/benchmarking.mdx` → status: current
- `guides/deployment-details/x-deprecated/dep-2-requirements.mdx` → status: current
- (and ~20 more x-deprecated files marked `current` or `published`)

**Verdict:** Folder placement (x-deprecated/) and frontmatter status do not agree.

### 7. CANONICAL-TRUTH-GUIDES marked DELETE but contains active work

- master-status.mdx: "Recommended DELETE — merge into DOCUMENTATION"
- master-status.mdx contains: "Content of notes.md (complete): 'need to update all docs and scripts with the combined new frameworks...'"
- But the folder contains a 40+ line `Workflow-Alignment-Skills/lifecycle-design.md` design document NOT acknowledged in master-status
- CLAUDE.md Active threads table shows "Workflow Alignment Skills | `/thread` v1.4 | Done" — confirming the work happened

**Verdict:** Plan officially recommended for deletion but received substantial new content. Status is out of date.

### 8. Plan-folder name mismatch / wrong-tab content

- `ORCHESTRATOR-CONTENT-WRITING/` houses 13 Gateways pages (S01-S13)
- `CANONICAL-TRUTH-GUIDES/` is recommended for deletion but contains lifecycle-design
- `CONTRACTS-CHANGELOG-PIPELINE/architecture.md` header says work folder is `CHANGELOG-PIPELINE/` but lives in `CONTRACTS-CHANGELOG-PIPELINE/`
- `SCRIPT WORKFLOW AUDIT/` has a space in folder name requiring quoting
- `CONTENTI-PIPLEINE/` (misspelled, referenced but not in this scope)

### 9. Terminology-collate per-tab term-count drift

- glossary-index.md states: orchestrators 115 unique
- glossary-orchestrators.md file header states: 123 terms
- (Similar +3 to +10 drift on all 9 per-tab glossaries)
- scan-summary.md gateways: 275 MDX scanned (implausibly large — Gateways tab is much smaller)

### 10. ORCHS IA contradicts ORCHESTRATOR-CONTENT-WRITING IA

- ORCHS sections: concepts (5), quickstart (5), setup (8), guides/{advanced-operations, ai-and-job-workloads, config-and-optimisation, deployment-details, monitoring-and-tooling, operator-considerations, payments-and-pricing, roadmap-and-funding, staking-and-rewards, tutorials}, resources (10+technical+compendium). **10 nav sub-sections under guides.**
- ORCHESTRATOR-CONTENT-WRITING/MASTER-STATE.md IA: 12 sections (S1-S12). Single-level: Which path / Viable / Work routing / Prerequisites / Get running / Pool / Pricing / AI pipelines / Verify / Monitor / Optimise / Diagnose.
- These structures do NOT match. One is folder-based (existing live structure); the other is question-based (proposed IA). No reconciliation document.

---

## Section 16 — Stale Plans

| Plan | Stale signal | Action |
|---|---|---|
| ORCHS/ | Plan from 2026-03-23; no execution started (per master-status); 11 P0 blockers still outstanding 2 months later | Decide approach (Option A/B/C hybrid) or close |
| CANONICAL-TRUTH-GUIDES/ | master-status recommends DELETE | Delete or properly merge into DOCUMENTATION |
| SCRIPT WORKFLOW AUDIT/ | All complete, marked PARK | Keep as reference, do not consume working capacity |
| TOOLING/ | Core complete; layers 2-3 deferred indefinitely | Close or schedule |
| SNIPPETS/ | All 5 phases complete (2026-03-21) | Close |
| SOLUTIONS-SOCIAL-DATA/ | All 4 phases complete (2026-03-23) | Close |
| CONTENT-STRUCTURE-TEMPLATES/ | Gated on Google Doc inaccessible since 2026-03-19 | Resolve gate or close |
| TERMINOLOGY-COLLATE/ | Gated on human review of harvest.md since 2026-03-20 (2+ months) | Resolve gate or close |
| FUCK_CLAUDE/ | Active; ongoing patches die on extension updates | Keep active; live debt |
| SHIP-CONTENT/decisions.md | Last update 2026-03-29; 12 OPEN decisions, no human picks recorded | Decide or close decisions |

---

## Section 17 — Orphan Files

| File | Problem |
|---|---|
| `ORCHS/index.mdx` | References `advanced-sources.md`, `ai-sources.md`, etc. — these files do NOT exist in ORCHS. The auto-generated TOC is broken. |
| `ORCHS/guides/advanced-operations/dep-guide.mdx` | Has `dep-` prefix indicating deprecation but is NOT in `x-deprecated/` folder |
| `ORCHS/quickstart/dep-x-setup-paths.mdx` | Same — `dep-` prefix outside x-deprecated/ |
| `ORCHS/setup/x-test.mdx` | `audience: developer` on orchestrator-tab page |
| `ORCHS/resources/x-help.mdx`, `x-changelog.mdx`, `x-contract-addresses.mdx`, `x-troubleshooting.mdx` | All `audience: developer` |
| `ORCHESTRATOR-CONTENT-WRITING/gateways/S04-S09.md` | 6 of 13 pages missing frontmatter (only H1) |
| `ORCHS/guides/tutorials/byoc-cpu-tutorial.mdx` | Has `title:` but no `status` field |
| `CANONICAL-TRUTH-GUIDES/notes.md` | Cited in master-status but does NOT exist in folder (only `master-status.mdx` and `Workflow-Alignment-Skills/lifecycle-design.md` exist) |
| `CONTRACTS/DEPRECATED/FUCKUP.log` | Cited in REQUIREMENTS.mdx AUTH-EX-001 as excluded source, but does NOT exist in DEPRECATED/ folder |

---

## Section 18 — Consolidation Matrix

| Plan | Status | Live? | Owns canonical for | Should be |
|---|---|---|---|---|
| ORCHS/ | Pre-execution, gated on approach decision | Working copies only | Orchestrators tab content (proposed) | Decide Option C+B hybrid or close. Merge with ORCHESTRATOR-CONTENT-WRITING. |
| ORCHESTRATOR-CONTENT-WRITING/ | 13 gateway pages written; orchestrator IA defined; phase status complete | Plain .md only (not .mdx) | Gateways tab IA + content (S01-S13); Orchestrators IA (in MASTER-STATE.md) | Split: rename folder for Gateways, move orchestrator artifacts to ORCHS. |
| TERMINOLOGY-COLLATE/ | Scan + harvest complete; gated on human review | None | Cross-tab glossary (480+ terms) | Resolve harvest review gate. Output should feed all content writing. |
| CONTRACTS/ | Authority recovery in progress; phases pending | snippets/composables/pages/canonical/livepeer-contract-addresses.mdx + v2/about/livepeer-protocol/blockchain-contracts.mdx | Contracts page + Blockchain page + pipeline | Complete Phase 0-5 closure. Reconcile with CONTRACTS-CHANGELOG-PIPELINE. |
| CONTRACTS-CHANGELOG-PIPELINE/ | DESIGN awaiting approval | None | Solutions + Code + Contract changelogs (unified pipeline) | Wait for approval. Cross-link with CONTRACTS plan. |
| CONTENT-STRUCTURE-TEMPLATES/ | Pre-research; gated on Google Doc | None | Page templates + composable sections | Resolve Google Doc gate or close. Some overlap with SNIPPETS work (done). |
| SHIP-CONTENT/ | Decision log open | None | Cross-tab decisions ledger | Decide D-01..D-12 or escalate. |
| SNIPPETS/ | Complete 2026-03-21 | snippets/templates/ + .vscode/templates.code-snippets + icon-map | Snippet sources + icon map | Close. |
| SOLUTIONS-SOCIAL-DATA/ | Complete 2026-03-23 | 5 product community pages + 5 fetcher scripts + 3 workflows | Solutions community pages + social data pipeline | Close. |
| SCRIPT WORKFLOW AUDIT/ | Complete, PARK | None | Read-only architecture audit | Reference only. |
| TOOLING/ | Core complete; new lpd-dev pipeline being designed | lpd CLI + validate-lpd-paths.js | lpd CLI maintenance | Decide on lpd-dev auto-remediation. |
| CANONICAL-TRUTH-GUIDES/ | Recommended DELETE; but contains active lifecycle-design | None | Workflow alignment skills | Resolve: either delete and move lifecycle-design to ai-tools/, or rename folder. |
| FULL-CLEANUP/ | Phase -1 done; Phase 0 ready | docs-v2-dev branch state | docs-v2-dev ↔ docs-v2 reconciliation | Execute reconciliation strategy. |
| FUCK_CLAUDE/ | Active debt management | VS Code extension patches + launchd | VS Code Claude Code session integrity | Keep active. Re-run patches after every extension update. |

---

## Section 19 — Summary Counts

| Plan | Stated files | Actual files | Status |
|---|---|---|---|
| ORCHS/ | 122 | 122 | Match |
| ORCHESTRATOR-CONTENT-WRITING/ | 18 | 18 | Match |
| TERMINOLOGY-COLLATE/ | 34 | 34 | Match |
| CONTRACTS/ | 28 | 30 | +2 (DEPRECATED contains both "ACTUAL-CONTRACTS.MDX" and "ACTUAL-CONTRACTS copy.MDX"; not counted in stated 28) |
| CONTRACTS-CHANGELOG-PIPELINE/ | 2 | 2 | Match |
| CONTENT-STRUCTURE-TEMPLATES/ | 4 | 4 | Match |
| SHIP-CONTENT/ | 1 | 1 | Match |
| SNIPPETS/ | 3 | 3 | Match |
| SOLUTIONS-SOCIAL-DATA/ | 2 | 3 | +1 (`_workspace/research/socials-research.md` — not counted in stated 2). `.env` gitignored, not read. |
| SCRIPT WORKFLOW AUDIT/ | 10 | 10 | Match |
| TOOLING/ | 6 | 6 | Match |
| CANONICAL-TRUTH-GUIDES/ | 2 | 2 | Match |
| FULL-CLEANUP/ | 1 | 1 | Match |
| FUCK_CLAUDE/ | 11 | 23 | +12 (scripts/ folder has 12 files: 10 .sh + 2 .plist) |

**Grand total: 269 files inventoried.**

