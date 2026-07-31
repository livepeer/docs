# Part 5: Section Structure (S1-S12)

**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## 12 proposed sections

| # | Section | Reader question | purpose | pageType | lifecycleStage |
|---|---|---|---|---|---|
| S1 | Which path is mine? | "I have GPU hardware — am I solo, AI-focused, or pool node? Do I need LPT?" | `orient` | `navigation` | `discover` |
| S2 | Is this viable for my hardware? | "Will my GPU and capital qualify for meaningful income?" | `evaluate` | `concept` | `evaluate` |
| S3 | How does work reach me? | "What determines whether gateways send me jobs? How do fees and rewards arrive?" | `explain` | `concept` | `evaluate` |
| S4 | Prerequisites | "What hardware, tokens, wallet, network access do I need before I install?" | `learn` | `concept` | `setup` |
| S5 | Get your node running | "How do I install, configure, register, and confirm my node is live?" | `start` | `instruction` | `setup` |
| S6 | Join as a pool node | "I don't have enough stake — how does pool participation work?" | `orient` | `guide` | `evaluate` |
| S7 | Set pricing and cuts | "What should I charge? What reward/fee cut should I set?" | `configure` | `guide` | `setup` |
| S8 | Set up AI pipelines | "How do I configure AI inference, choose pipelines, advertise capabilities?" | `build` | `instruction` | `build` |
| S9 | Verify your node | "How do I confirm I'm discoverable, priced right, and receiving work?" | `verify` | `instruction` | `setup` |
| S10 | Monitor and operate | "What should I watch? What routine tasks must I do?" | `operate` | `guide` | `operate` |
| S11 | Optimise earnings | "I want more work, better margins — what levers do I have?" | `optimise` | `guide` | `optimise` |
| S12 | Diagnose and fix | "My node stopped getting work / reward call failed — what do I do?" | `troubleshoot` | `guide` | `troubleshoot` |

---

## Entry and exit states per section

| # | Entry state | Exit state |
|---|---|---|
| S1 | Arrived at tab; has GPU; doesn't know which path | Identified path (solo/AI/pool); navigated to correct start |
| S2 | Identified candidate path from S1 | Go/no-go decision made; hardware fits, income model understood |
| S3 | Decided to proceed; doesn't understand routing/payments | Can describe two income streams, video vs AI routing, what cuts affect |
| S4 | Chosen path; hasn't acquired LPT/ETH/confirmed hardware | Hardware confirmed, wallet funded, LPT staked (if needed), URI reachable |
| S5 | Prerequisites confirmed; go-livepeer not installed | Running, registered node; service URI reachable; reward calling configured |
| S6 | Identified as pool candidate from S1 | Decision made on pool vs solo vs AI-first; knows how to engage pool operator |
| S7 | Node installed; no pricing/cut strategy | Pricing set with justification; cuts set with trade-off understood |
| S8 | go-livepeer running; AI not configured | aiModels.json configured; capabilities advertised; first AI job processed |
| S9 | Set up and configured; not confirmed receiving work | Discoverable, priced within thresholds, first job received |
| S10 | Live and receiving work; no monitoring workflow | Monitoring routine in place; knows routine tasks and cadence |
| S11 | Operating with monitoring; wants to improve | Identified key variable, made targeted adjustment |
| S12 | In production but experiencing a problem | Root cause diagnosed from checklist; fix applied or queued |

---

## Design flags

- **S5**: May need to split — serves both solo and pool node operators
- **S8**: May need to split — AI config surface substantially larger than video
- **S8**: BYOC path not covered — custom Docker containers may warrant own page

---

## Review questions

1. **Too many sections?** 12 is at the upper boundary. Could any be merged?
2. **Wrong order?** Should S6 (pool) come earlier? Should S3 (payments) come later?
3. **S1 as navigation page** — is a disambiguation page really needed, or is it over-engineered?
4. **S2 and S3 separate?** Could "is this viable" and "how does payment work" be one section?
5. **S6 placement** — pool node section is between setup (S5) and pricing (S7). Should it be earlier, with S2?
6. **S8 as separate section** — should AI setup be part of S5 (general setup) with a branch?
7. **Missing anything?** Upgrades? Multi-GPU? Scaling? Migration from v1?

---

## Existing research (raw — for reference)

Research collected 2026-03-23. Grouped by source file path. Covers all section structure, IA, tab structure, page grouping, navigation design, and section vocabulary content found across the three searched directories.

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/collated/canonical-orchestrators-audience-design.md`

**Status**: CANONICAL — ready for Phase 2 input. Synthesised from 4 AI runs (Claude agent, Claude web, ChatGPT, Perplexity).

**Ideal Section Structure (12 sections)**:

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1 — Which path is mine? | "I have GPU hardware — am I a solo operator, an AI-focused operator, or a pool node? Do I need to buy LPT?" | J2 | `orient` | `navigation` | Arrived at the tab; has GPU hardware; does not yet know which setup path applies or whether LPT is required | Has identified which of three paths applies (solo video/dual, AI-focused, pool node) and has navigated to the correct starting section | `discover` |
| S2 — Is this viable for my hardware and situation? | "Will my GPU and capital actually qualify for meaningful income on this network — and what would I need to invest?" | J1 | `evaluate` | `concept` | Has identified their candidate path from S1; has not yet assessed hardware requirements or economic fit | Has made a go/no-go decision: hardware meets path requirements, income model is understood, participation cost (LPT stake or pool arrangement) is assessed | `evaluate` |
| S3 — How does work reach me and how do I get paid? | "What determines whether gateways send me jobs, and how do fees and inflation rewards actually arrive?" | J1 | `explain` | `concept` | Has decided to proceed; does not yet understand routing mechanics, probabilistic micropayments, or how reward calls work | Can describe the two income streams (inflation rewards and service fees), how video routing (stake weight) differs from AI routing (capability advertisement), and what reward cut and fee cut affect — sufficient to make configuration decisions later | `evaluate` |
| S4 — Prerequisites: what must be in place before setup | "What hardware, tokens, wallet, and network access do I need to have ready before I install anything?" | J3 | `learn` | `concept` | Has decided which path to take; has not yet acquired LPT, ETH, or confirmed hardware/network prerequisites | Has confirmed: hardware meets path requirements, ETH wallet is funded for gas, LPT is acquired and staked (solo video path) or pool arrangement is confirmed (pool node path), service URI is publicly reachable | `setup` |
| S5 — Get your node running | "How do I install go-livepeer, configure my flags, register on-chain, and confirm my node is live?" | J4 | `start` | `instruction` | Prerequisites from S4 confirmed; go-livepeer not yet installed | Has a running, registered go-livepeer node; service URI is reachable; reward calling is configured or automated; node is confirmed reachable from the network | `setup` |
| S6 — Join as a pool node | "I don't have enough stake to go solo — how does pool participation work and how do I connect?" | J2 | `orient` | `guide` | Identified via S1 as pool node candidate; no setup started | Has decided whether pool participation suits their situation; if proceeding: understands the connection architecture, how fees are split, and has the information needed to engage with a pool operator | `evaluate` |
| S7 — Set your pricing and cuts | "What should I charge for transcoding and AI inference, and what reward cut and fee cut should I set?" | J4, J5 | `configure` | `guide` | Node installed and running (S5 complete); no deliberate pricing or cut strategy set yet | Has set pricePerUnit (and AI pricing) to a value they can justify against network benchmarks; has set reward cut and fee cut with a clear understanding of the trade-off between personal earnings and delegator attractiveness | `setup` |
| S8 — Set up AI pipelines | "How do I configure AI inference, choose which pipelines to support, and advertise my capabilities to gateways?" | J6 | `build` | `instruction` | go-livepeer installed and running (S5 complete); AI configuration not yet started; VRAM capacity confirmed for target pipelines | Has aiModels.json configured with at least one pipeline; warm model behaviour understood; capabilities advertised; at least one AI inference request successfully processed | `build` |
| S9 — Verify your node is working end to end | "How do I confirm my node is discoverable, correctly priced, and actually receiving the work it should get?" | J4 | `verify` | `instruction` | Node set up and configured; not yet confirmed receiving work through the full routing path | Has confirmed node is discoverable, priced within gateway MaxPrice thresholds, performance score is tracking, reward calls are succeeding, and first job has been received | `setup` |
| S10 — Monitor and operate day-to-day | "What should I watch, what alerts matter, and what routine tasks must I do to keep earning?" | J7 | `operate` | `guide` | Node live and receiving work; no monitoring or operations workflow yet in place | Has a monitoring routine in place (metrics, reward call status, performance score, session volume); knows the routine operational tasks and their cadence | `operate` |
| S11 — Optimise earnings and performance | "I'm running but I want more work, better margins, or better AI throughput — what levers do I have?" | J5, J7 | `optimise` | `guide` | Node operating in production with monitoring in place; wants to increase earnings or efficiency | Has identified the variable most affecting earnings or job volume (pricing, stake position, cut settings, AI model warmth, VRAM allocation) and made a targeted adjustment with a framework for future decisions | `optimise` |
| S12 — Diagnose and fix problems | "My node stopped receiving work / a reward call failed / performance score dropped — what do I do?" | J5 | `troubleshoot` | `guide` | Node in production but experiencing a specific problem (no jobs, failed reward call, AI inference errors, performance drop) | Has diagnosed the root cause from a structured checklist (pricing gate, active set rank, service URI reachability, performance score, capability advertisement, software version) and applied or queued the appropriate fix | `troubleshoot` |

**Section count justification**: 12 sections. Within the 8–12 target range at the upper boundary. The tab covers two workload types (video transcoding and AI inference) with materially different configuration surfaces — S8 (AI pipelines) cannot be folded into S5 (node setup) without creating an unworkable mixed-instruction page for operators who are on the video-only path. The pool node path (S6) requires a dedicated section rather than a callout because pool node candidates have a distinct decision gate that cannot be resolved within a setup section designed for solo operators.

**Design flags carried through**:
- S5 `[Design flag: may need to split]` — S5 serves both solo operators and pool node operators; if both paths are included in a single instruction page, the section load may be unworkable. S6 (pool node section) partially resolves this by routing pool node candidates out early.
- S8 `[Design flag: may need to split]` — the AI configuration section (aiModels.json, warm models, capability advertisement, BYOC) may be substantially longer than the video configuration surface.
- S8 `[Design flag: BYOC path not covered]` — BYOC (custom Docker containers for non-standard AI models) is a distinct setup path that may warrant its own page within the AI section.

**Cross-tab decision D-NAV-01**: S1 is a shared navigation file (not per-persona). All paths on this tab reference this single file as their entry point. pageType: navigation is locked.

**Gap notes carried through for Phase 2 content briefs**:
1. S3: Add explicit statement that active set membership is NOT required for AI inference routing.
2. S4: Separate LPT acquisition instructions from general prerequisites; clearly mark LPT section as "solo video path only."
3. S4: Make explicit that pool node operators do not need LPT.
4. S7: Address cut settings from the operator's perspective (what to set and why) — not from the delegator's perspective (what the cut means to delegators).
5. S12: Structure as three distinct diagnostic paths: low work volume, operational errors (reward calls, ticket redemptions), and performance score degradation.

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/2-structure-audit/testing/orchestrators/orchestrators-tab-map.md`

**Status**: DRAFT — awaiting checkpoint. Generated 2026-03-23.

**Ideal → Canonical Mapping**:

| Ideal section (from Phase 1) | Canonical position | Match | Position type | Notes |
|---|---|---|---|---|
| S1 — Which path is mine? | Position 1 — root: `navigator` | exact | linear | `navigator.mdx` exists and serves routing function. `pageType: landing` is old schema — should be `navigation`. |
| S2 — What orchestrators do and what they earn | Position 2 — concepts: `role` + `incentive-model` | partial | linear | Split across two pages. Business case / go-no-go framing appears more fully in `guides/operator-considerations/operator-rationale` which is in the on-demand Guides section — structural concern (obligatory discovery content placed in on-demand position). |
| S3 — How the network pays you and routes work | Position 2 — concepts: `capabilities` + `architecture` | partial | linear | Tripartite S3 job (routing factors + payment flow + reward call mechanics) split across three concept pages. |
| S4 — Prerequisites and hardware | Position 4 — setup: `rcs-requirements` | partial | linear | `pageType: how_to` is old schema — should be `instruction`. LPT acquisition path not confirmed present. |
| S5 — Get your node running | Position 4 — setup: `rs-install` + `connect-and-activate` + `configure` | partial | linear | Pool node sub-path within setup not confirmed — `join-a-pool` is in Guides (on-demand), not Setup (linear). |
| S6 — Set your pricing and cuts | Position 5 — guides: `config-and-optimisation/pricing-strategy` | partial | on-demand | `status: draft` and `pageType: how_to` (old schema). Published in nav despite draft status. |
| S7 — Add AI inference pipelines | Position 5 — guides: `ai-and-job-workloads/` sub-group (9 pages) | exact | on-demand | 9-page sub-group effectively implements the S8 split design flag. |
| S8 — Verify your node is live | Position 4 — setup: `test` | exact | linear | |
| S9 — Join as a pool node | Position 5 — guides: `deployment-details/join-a-pool` + `new-join-a-pool` | partial | on-demand | Two pages exist for pool joining with duplicate titles. |
| S10 — Monitor and operate day-to-day | Position 5 — guides: `monitoring-and-tooling/` sub-group (4 pages) | exact | on-demand | |
| S11 — Optimise earnings and performance | Position 5 — guides: `config-and-optimisation/` sub-group (4 pages) | partial | on-demand | `pricing-strategy` has `status: draft`. |
| S12 — Troubleshoot common problems | Position 6 — resources: `faq` + guides: `troubleshooting` | partial | on-demand | Dual location acceptable if cross-linked. |

**P0 gaps**:
- `lifecycleStage` field absent globally — every page in the tab is missing this required frontmatter field.
- Old-schema `pageType` values on published pages — `landing`, `overview`, `quickstart`, `how_to`, `glossary` on at least 12 confirmed pages.
- Structural defect in `operator-rationale.mdx` — garbled characters before the frontmatter delimiter.
- Draft pages published in live nav — `pricing-strategy`, `funding-and-support`, `x-contract-addresses`, `compendium/glossary`.
- LPT acquisition path in prerequisites (S4) — unconfirmed.

**P1 gaps**:
- Pool node sub-path routing from Setup (S5) — pool node candidates following the linear path reach solo setup only.
- Business case / go-no-go content in on-demand position — `guides/operator-considerations/operator-rationale` is in Guides not Concepts.
- `x-contract-addresses` audience mismatch — `audience: developer` on an Orchestrators tab page.

**P2 gaps**:
- No `resources/knowledge-hub/` sub-section.
- Non-canonical `status` values — `published` and `review` used across multiple pages.
- Compendium glossary duplication — two glossary pages in the same tab.
- Cross-tab CTAs — all four outbound handoffs unconfirmed.
- Unlisted/orphan files in live folders.

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/derive-ia/08a-ia-per-tab.md`

**Status**: Locked.

**Task 8a-1: Standard Section Vocabulary — Canonical Section Names per pageType**:

| Position | Folder/File | Canonical name | pageType | pageVariant | Notes |
|---|---|---|---|---|---|
| 1 — root | `portal.mdx` | portal | `navigation` | `portal` | Tab entry point with hero |
| 1 — root | `navigator.mdx` | navigator | `navigation` | `landing` | Secondary nav/routing page |
| 2 — concepts | `concepts/` | concepts | `concept` | `overview` for entry page | Orientation + architecture |
| 3 — quickstart | `quickstart/` or `quickstart.mdx` | quickstart | `instruction` | `quickstart` | Fastest path to first success |
| 4 — setup | `setup/` | setup | `instruction` | `setup` | Full installation + configuration procedures |
| 5 — guides | `guides/` | guides | `guide` | `overview` for entry page | Practical understanding; operational phase |
| 5a — tutorials | `guides/tutorials/` | tutorials | `tutorial` | (none) | Tab-specific tutorials live inside `guides/`, not `resources/` |
| 6 — resources | `resources/` | resources | — | — | Container section — two sub-sections below |
| 6a | `resources/reference/` | reference | `reference` | `overview`, `specification`, `compendium`, `changelog` | Structured lookup — specs, FAQ, glossary, troubleshooting |
| 6b | `resources/knowledge-hub/` | knowledge-hub | `resource` | `knowledge-hub` | Curated external/public content |

**Rules**:
- `resources/` is the single position-6 container — `reference/` and `knowledge-hub/` are sub-sections within it.
- Positions 1–3 are LINEAR for first-time readers; positions 4–6 are ON-DEMAND.
- `tutorials/` is a subgroup within `guides/` for tab-specific tutorials.
- `portal.mdx` and `navigator.mdx` are publishable section root files.

**Orchestrators — Folder Divergence**:

| Item | Status | Notes |
|---|---|---|
| `concepts/` | Canonical | |
| `guides/` | Canonical | |
| `quickstart/` | Canonical | |
| `setup/` | Canonical | |
| `resources/` | Canonical | |
| `portal.mdx` | Canonical | |
| `navigator.mdx` | Canonical | |
| `index.mdx` | Canonical | |
| `_workspace/` | Canonical | |
| `x-archived/` | Permitted lane | |
| `resources/reference/` | Sub-section missing | Reference content flat in `resources/` |
| `resources/knowledge-hub/` | Sub-section missing | No knowledge-hub content currently |

**Orchestrators — `guides/` Section Groups**:

| Subgroup | Primary pageType | lifecycleStage | Reader's question | Page count (est.) |
|---|---|---|---|---|
| `operator-considerations/` | `guide` | `evaluate` | Is running an orchestrator right for me? | 4 |
| `deployment-details/` | `guide` + `instruction` | `setup` | How do I choose my deployment setup? | 6 |
| `ai-and-job-workloads/` | `guide` + `instruction` | `build` | How do I set up and run AI pipelines and manage workloads? | 9 |
| `config-and-optimisation/` | `guide` | `operate` + `optimise` | How do I tune my node for performance? | varies |
| `monitoring-and-tooling/` | `guide` | `operate` | How do I monitor my node? | varies |
| `staking-and-rewards/` | `guide` | `operate` + `optimise` | How does staking work and how do I maximise earnings? | varies |
| `payments-and-pricing/` | `guide` | `operate` | How do payments work for orchestrators? | varies |
| `advanced-operations/` | `guide` | `optimise` | Advanced node operations and hardening | varies |
| `roadmap-and-funding/` | `guide` + `resource` | `operate` | What's coming and what funding exists? | varies |
| `tutorials/` | `tutorial` | `setup` + `build` | Tab-specific tutorials | varies |

**Per-Page Field Combinations (Orchestrators)**:

| Context | pageType | audience | lifecycleStage |
|---|---|---|---|
| Orchestrators portal/navigator | `navigation` | `orchestrator` | `discover` |
| Orchestrators concepts | `concept` | `orchestrator` | `evaluate` |
| Orchestrators quickstart | `instruction` + `quickstart` | `orchestrator` | `setup` |
| Orchestrators setup | `instruction` + `setup` | `orchestrator` | `setup` |
| Orchestrators guides (ai-workloads, config, monitoring, staking, payments, advanced) | `guide` | `orchestrator` | `operate` or `build` |
| Orchestrators tutorials | `tutorial` | `orchestrator` | `build` |
| Orchestrators resources/reference | `reference` | `orchestrator` | any (on-demand) |
| Orchestrators resources/knowledge-hub | `resource` | `orchestrator` | any (on-demand) |

---

### Source: `workspace/plan/active/CONTENT-WRITING/context-packs/orchestrators-collated-status.md`

**Status**: Generated 2026-03-23. Full read of all 83 live MDX files mapped against the 12-section canonical IA.

**Summary**: 83 live MDX pages exist (excluding _workspace, x-archived, x-deprecated). Every IA section has existing content — no section starts from zero. Key problems: duplicates, scattered placement, inconsistent frontmatter, unverified content quality.

**IA Section → Existing Content Map**:

**S1 — Which path is mine?**: Content exists. `dep-x-setup-paths.mdx` is the closest match. Needs: verify the 4-path model matches IA's 3-path model (IA has solo/AI/pool; existing page has solo/pool worker/pool operator/enterprise). Decision needed: reconcile path count.

**S2 — Is this viable?**: 4 pages across operator-considerations/. Need to verify: do these collectively answer "will my GPU and capital qualify?"

**S3 — How does work reach me?**: 6 pages of content. Likely over-split — IA wants one concept page covering routing + payments + rewards.

**S4 — Prerequisites**: Content scattered across setup/ and resources/. The checklist page is the anchor.

**S5 — Get your node running**: Most complete section — 10 pages. Has a duplicate guide (setup/guide.mdx vs setup/s-guide.mdx). Likely needs consolidation, not new writing.

**S6 — Join as a pool node**: Has content but has a duplicate (two "Join a Pool" pages). Need to verify which is current.

**S7 — Set pricing and cuts**: Content across two folders. Need to verify coverage of "set pricePerUnit to a justified value; set reward cut and fee cut."

**S8 — Set up AI pipelines**: Largest section — 11 pages. IA flagged this may need to split. It already IS split across many pages.

**S9 — Verify node**: Partial coverage. Overlaps with S5 verification steps. May not need a standalone section.

**S10 — Monitor and operate**: 4 pages. Good coverage area.

**S11 — Optimise earnings**: Content but thin. Capacity planning + pricing strategy. May need more on stake positioning and delegation attraction.

**S12 — Diagnose and fix**: 2 real pages + 1 placeholder. IA requires three diagnostic paths.

**Duplicates Found**:
1. setup/guide.mdx vs setup/s-guide.mdx — both are setup overviews with checklists
2. guides/deployment-details/join-a-pool.mdx vs guides/deployment-details/new-join-a-pool.mdx — same title
3. guides/monitoring-and-tooling/troubleshooting.mdx vs resources/technical/x-troubleshooting.mdx — same topic

**Decisions Needed**: Path model mismatch (3 vs 4 paths), duplicate resolution, concepts folder disposition, tutorials placement, advanced operations scope, ~12 placeholder pages.

**What's Actually Needed**: NOT "write 12 sections from scratch." It's: (1) Consolidate duplicates, (2) Verify content accuracy, (3) Fill gaps (S11 thin, S12 needs diagnostic paths), (4) Reorganise to match IA, (5) Clean up placeholders and frontmatter, (6) Cross-check terminology.

---

### Source: `workspace/plan/active/CONTENT-WRITING/context-packs/orchestrators-ia-mapping.md`

**Status**: Generated 2026-03-23. Maps all 72 nav pages against the confirmed 12-section IA.

**Coverage verdicts per section**:

| Section | Coverage | Key finding |
|---|---|---|
| S1 — Which path is mine? | PARTIALLY COVERED | No page uses pageType: `navigation` as required. LPT-required vs. not-required distinction not the stated focus of any page. |
| S2 — Is this viable? | PARTIALLY COVERED | No single page synthesises hardware fit + income mechanics + participation cost into one unified go/no-go evaluation. Content split across Operator Considerations, Staking and Earning, and Workloads. |
| S3 — How does work reach me? | PARTIALLY COVERED | Content fragmented across 4+ pages. No single concept page synthesises routing + payment + rewards. Critical gap: no page explicitly states active set NOT required for AI inference routing. |
| S4 — Prerequisites | PARTIALLY COVERED | LPT acquisition path not structured as "solo video path only." Pool node and AI-only operators not explicitly exempted from LPT requirement. |
| S5 — Get your node running | YES — best-covered section | Core setup sequence complete. Gap: no explicit gate routing pool node candidates away. |
| S6 — Join as a pool node | PARTIALLY COVERED | Two pages with identical "Join a Pool" title creates reader confusion. Three-way decision gate (pool vs solo vs AI-first) not explicitly surfaced. |
| S7 — Set pricing and cuts | PARTIALLY COVERED | pricing-strategy.mdx covers pricing half. Reward cut/fee cut setting from operator's perspective not consolidated in any single page. |
| S8 — Set up AI pipelines | YES — most content in the tab | 17 pages assessed. Gap: capability advertisement instruction may not exist as standalone actionable step. Navigation fragmentation — reader faces 10+ pages without a master instruction page. |
| S9 — Verify node | YES | setup/test.mdx is a strong match. Gap: AI capabilities verification (confirm gateways can see advertised capabilities). |
| S10 — Monitor and operate | PARTIALLY COVERED | No single page defines the day-to-day operational workflow as a sequenced routine. setup/r-monitor.mdx is in Setup (S5 territory) but serves S10 operations — structural placement conflict. |
| S11 — Optimise earnings | PARTIALLY COVERED | No triage entry framing. Performance score improvement page may not exist. |
| S12 — Diagnose and fix | PARTIALLY COVERED | troubleshooting.mdx likely presents general symptom list, not three discrete diagnostic paths as required by IA. |

**Pages with no section home**: concepts/role, concepts/architecture, concepts/capabilities, network-participation, gateway-orchestrator-interface, scale-operations, funding-and-support, orchestrator-profiles, community-guides, glossary (x2), x-contract-addresses, tutorials (cross-section: zero-to-first-reward, byoc-cpu-smoke-test, ai-earning-quickstart).

**Summary table — all 72 nav pages mapped to S1-S12**: Full matrix with Y/P/— verdicts showing which pages serve which sections.

---

### Source: `workspace/plan/active/CONTENT-WRITING/context-packs/orchestrators-ia-prereq.md`

**Status**: Generated 2026-03-23.

**Section 1 — Folder & File Tree**: Complete annotated tree of all live `.mdx` files in `v2/orchestrators/` with frontmatter titles and pageTypes.

**Section 2 — Navigation Tree**: Full docs.json orchestrators tab navigation structure showing all 72 nav entries across Start Here, Concepts, Quickstart, Setup, Guides (with 9 sub-groups), and Resources (with Technical Reference and Compendium sub-groups).

**Section 3 — Discrepancy Notes**:
- 17 orphan files (live .mdx files with no docs.json entry)
- 0 missing files (all nav entries have corresponding .mdx files)
- 11 live files missing `pageType` in frontmatter
- Note: concepts/ files (architecture, capabilities, incentive-model, role) have no `pageType` despite having title values

---

### Source: `workspace/plan/active/CONTENT-WRITING/context-packs/orchestrators-tree-nav.md`

**Status**: Generated 2026-03-23.

**Table 1 — All Files on Disk**: 284 total files (including _workspace, archives, binaries). Full inventory with frontmatter title, pageType, and category (nav file, orphan, deprecated, workspace, archived).

**Table 2 — All Pages in docs.json**: 72 nav entries with display titles and section group assignments.

**Table 3 — Discrepancy Summary**: No nav entries with missing files. 13+ orphan .mdx files outside _workspace not in nav (composable/orchestratorRole.mdx, .md research files, stubs, x-prefixed placeholders, s-guide.mdx, x-test.mdx).

---

### Source: `v2/orchestrators/_workspace/canonical/IA.mdx`

**IA table (90 pages)**: Full mapping of all planned orchestrator pages with filename, sidebarTitle, sectionGroup, and description. Section groups:

| sectionGroup | Page count |
|---|---|
| Start Here | 2 (portal, navigator) |
| Concepts | 4 (role, capabilities, architecture, incentive-model) |
| Quickstart | 4 (guide, video-transcoding, tutorial, AI-prompt-start) |
| Setup | 7 (guide, rcs-requirements, rs-install, configure, connect-and-activate, test, r-monitor) |
| Operator Considerations | 4 (operator-rationale, business-case, operator-impact, requirements) |
| Deployment Details | 6 (setup-options, siphon-setup, dual-mode-configuration, orchestrator-transcoder-setup, join-a-pool, new-join-a-pool) |
| Workloads and AI | 9 (workload-options, video-transcoding-operations, ai-inference-operations, diffusion-pipeline-setup, llm-pipeline-setup, realtime-ai-setup, audio-and-vision-pipelines, model-demand-reference, model-hosting) |
| Staking and Earning | 6 (earning-model, reward-mechanics, payment-receipts, payments, delegate-operations, network-participation) |
| Config and Optimisation | 4 (pricing-strategy, capacity-planning, ai-model-management, reward-call-tuning) |
| Monitoring and Tools | 4 (operator-toolbox, explorer-operations, metrics-and-alerting, troubleshooting) |
| Advanced Operations | 4 (gateway-relationships, gateway-orchestrator-interface, pool-operators, scale-operations) |
| Roadmap and Funding | 2 (funding-and-support, orchestrator-profiles) |
| Tutorials | 6 (byoc-cpu-smoke-test, zero-to-first-reward, ai-earning-quickstart, add-ai-to-video-node, full-ai-pipeline-tutorial, realtime-ai-tutorial) |
| Resources | 4 (faq, glossary, community-guides, community-pools) |
| Technical Reference | 5 (cli-flags, x-contract-addresses, gpu-support, arbitrum-rpc, arbitrum-exchanges) |
| Compendium | 1 (glossary) |

**In-repo tree**: Full `<Tree>` component showing the actual folder structure with all live files, workspace files, deprecated files, and archives.

---

### Source: `v2/orchestrators/_workspace/canonical/Frameworks.mdx`

**Lifecycle Stage (canonical enum)**:

| Value | Reader position |
|---|---|
| `discover` | First encounter with a concept or tool |
| `evaluate` | Assessing viability or comparing options |
| `setup` | Implementing for the first time |
| `build` | Constructing or extending something beyond initial setup |
| `operate` | Managing a live system day-to-day |
| `troubleshoot` | Diagnosing and fixing problems |
| `optimise` | Improving a running system on specific metrics |

**pageType (7 primary types)**:

| pageType | What it is | Variants |
|---|---|---|
| `navigation` | Pure routing pages — portals, tab roots | portal |
| `concept` | Explains how something works; builds mental model | overview |
| `tutorial` | End-to-end guided learning exercise | overview |
| `guide` | Opinionated guidance for a specific outcome | overview |
| `instruction` | Step-by-step procedure for a specific task | overview, quickstart, troubleshooting |
| `reference` | Structured lookup — specification, compendium | overview, specification, compendium, changelog |
| `resource` | Curated discovery — external tools, directories, showcases | overview, knowledge-hub |

**Section Naming Rubric**: 5 dimensions x 5 points: Precision, Depth, Stability, Clarity, Conciseness. Every heading must score >= 20/25. No generic descriptors as headings (Types, Profiles, Modes, Overview, Basics, Details, Information, Getting Started). No literal contrast labels (X vs Y). Domain-anchor rule: heading includes the domain noun when needed to be interpretable in isolation.

**Page Structure Rules**: One purpose, one audience, one job per page. Purpose statement test: "This page lets the [AUDIENCE] [concrete action]." PREV_PAGE / NEXT_PAGE adjacency correct. No dead ends. Prerequisites stated or linked. Information type per section matches permitted types for the page's purpose.

---

### Source: `v2/orchestrators/_workspace/canonical/checks.mdx`

**Per-Page Quality Checks — section structure relevant items**:

Check 4.1: One purpose, one audience, one job per page.
Check 4.2: Purpose statement test — "This page lets the [AUDIENCE] [concrete action]."
Check 4.3: PREV_PAGE / NEXT_PAGE adjacency correct.
Check 4.9: Every section has an entry page that orients the reader.
Check 4.10: At least 3 cross-tab links where audience journeys intersect.

**Component matrix by pageType**:

| pageType | Required sections |
|---|---|
| `navigation` | Portal/routing |
| `concept` | Overview |
| `tutorial` | Prerequisites, Steps, Next Steps |
| `guide` | Overview, Steps or H2 |
| `instruction` | Prerequisites, Steps |
| `reference` | Reference |
| `resource` | Overview or H2 |

---

### Source: `v2/orchestrators/_workspace/canonical/research/per-page-needs.mdx`

**Per-Page Content Needs**: What each page must deliver, derived from the canonical audience design. Organised by nav section group in docs.json order. Each page mapped to an audience need with journey stage, entry state, exit state, and checklist of required content.

Key section-structure-relevant entries:

**navigator.mdx**: Maps to S1 disambiguation. Required: decision tree (hardware + capital + goals -> recommended path), make visible AI-only and pool paths do NOT require LPT, route capital-constrained readers to pool or AI-first path, link each path outcome to specific next page.

**setup/guide.mdx**: Required: ordered step list (prerequisites -> install -> configure -> connect -> verify -> monitor), which steps are path-dependent, time and cost expectations.

**setup/rcs-requirements.mdx**: Maps to S4. Required: hardware requirements BY PATH, LPT acquisition (solo video path ONLY — make explicit), ETH for gas, service URI, explicitly state pool and AI-only operators do NOT need LPT.

**setup/test.mdx**: Maps to S9. Required: Explorer check, video transcoding test, AI inference test, performance score tracking, pricing gate check, reward call check.

---

### Source: `v2/orchestrators/_workspace/canonical/review/07-path-validation.md`

**Persona paths through sections**:

| Persona | Enters | Exits | Blocked? | Knowledge gap |
|---|---|---|---|---|
| Independent GPU operator | S1 | S9 (initial); returns S10-S11 | No | S4 must cover LPT acquisition path. S3 must clarify reward calls are active requirement. |
| AI inference specialist | S1 | S8 or S9 | No | S3 must state active set NOT required for AI. S4 must distinguish AI vs video prerequisites. S8 must address VRAM planning before pipeline selection. |
| Capital-constrained (pool) | S1 → S6 | S6 | No | S4 must clarify LPT NOT required for pool nodes. S6 must give enough context for pool vs solo vs AI-first decision. |
| Running operator (return) | S10, S11, or S12 directly | Same section | No | S12 must distinguish low demand vs low selection vs low margin as separate diagnostic paths. |
| Delegator-turned-operator | S2 | S4 or S5 | No | S2 must surface cost-of-operation comparison. S7 must address cuts from operator perspective. |

**Entry blockers**:

| Blocker | Affects | Must be addressed before |
|---|---|---|
| LPT stake | Solo video path only | S5 (setup) |
| ETH for gas | All on-chain paths | S5 (setup) |
| Publicly reachable service URI | All paths | S5 (setup) |
| VRAM capacity | AI inference path | S8 (AI setup) |
| Pool membership arrangement | Pool node path | S6 |
| Capability advertisement | AI path | S9 (verify) |

---

### Source: `v2/orchestrators/_workspace/plans/dep-IA.mdx`

**Status**: Deprecated workspace plan. Earlier IA iteration.

**Routing Guides per section** (earlier structural proposal):

Navigator Guide sections: (1) Should you run an orchestrator? (2) Pool vs Solo (with enterprise callout) → Pool Joiner Path / Solo Operator Path. (3) Workload types (Video vs AI). (4) Costs, Stake & Viability → Earnings, Staking LPT, Rewards. (5) Delegates, Running Pools.

Quickstart Guide sections: (1) This quickstart gets solo operators up and running. (2) Redirects: Pool → Join a Pool; AI workloads → AI quickstart; Enterprise → Fleet Ops. (3) Default quickstart scope. (4) First Job. (5) First Earnings. (6) Smoke Test.

Setup Guide sections: (1) This guide sets up orchestrator on go-livepeer. Redirect pool, redirect siphon. (2) Setup overview with cards. (3) Activation checks: Connect, Publish, Verify.

Operations → Advanced Operations: groups for setups-and-workloads, ai-pipelines, staking-and-rewards, delegates-and-governance, monitoring-and-optimising, more-guides.

**Missing pages to create**: Feasibility, AI-Models, Realtime vs Batch, Smoke Test, Fleet Ops, Gateways, Support Status, Advanced Operations Guide.

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/derive-ia/orchestrators-ia-map.md`

**Status**: DRAFT — awaiting checkpoint. Generated 2026-03-21.

**Section Shape (6-section ideal)**:

| Section | Job | Audience entry state | Audience exit state | lifecycleStage |
|---|---|---|---|---|
| Landing | Route personas to the right path (solo/pool/AI/enterprise) | Knows nothing about tab structure | Directed to correct starting point | discover |
| Concepts | Answer "what is this and why does it matter?" | Curious but uncommitted | Understands role, capabilities, incentives, governance | discover / evaluate |
| Get Started | Deliver first working outcome for each path | Has decided to proceed | Has a running node OR has joined a pool | setup |
| Setup | Cover full installation and activation sequence | Following up from Get Started OR came from Concepts | Installed, configured, connected, activated, tested | setup |
| Guides | Serve operational jobs grouped by what operator needs next | Already running a node | Pricing set, AI configured, payments understood, monitoring in place | operate / optimise |
| Resources | Reference material, glossary, FAQ, community paths | Any stage | Found the fact, term, or path needed | any |

**Gap Analysis (P0 items)**:
- Pricing configuration guide — no page explaining how to set `-pricePerUnit`, `-pricePerGateway`, `autoAdjustPrice`, or competitive AI pricing.
- `guides/payments-and-pricing/` section — directory exists, 0 files.
- Pool worker path — "join a pool" buried; Persona B has no visible entry point from tab landing.
- Glossary — 0 bytes.

**Gap Analysis (P1 items)**:
- Guide section ordering — Staking & Rewards before Workloads & AI inverts the learning sequence.
- `guides/roadmap-and-funding/` section — directory exists, 0 files.
- Reward calling configuration not migrated from v1.
- Realtime AI vs batch AI distinction not explained before AI quickstart.

---

### Source: `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/01_03-IA-Structure-and-Purpose/index.md`

**The 6-Position Structural Pattern** (every persona tab follows this order — order is fixed):

| Position | Purpose Type | Journey Phase | Reader State | Reader's Question |
|---|---|---|---|---|
| 1 | landing | Entry | Just arrived at a tab | "Where do I go?" |
| 2 | concepts | Discovery (stages 1–2) | Orienting, evaluating | "What is this, how does it work, and should I care?" |
| 3 | Get started / quickstart | Activation (stages 3–4) | Ready to try | "Get me to first success." |
| 4 | operational / how-to | Operational (stages 5+) | Active, needs specific task done | "How do I do this one thing?" |
| 5 | guides / tools / advanced | Operational / deepening | Active, needs to understand a system | "How does this work in practice?" |
| 6 | reference | Any (on-demand lookup) | Looking something up | "What's the exact detail / answer / spec?" |

**Positions 1–3 are LINEAR** — the reader progresses through them in order on first visit. **Positions 4–6 are ON-DEMAND** — the reader jumps to them from anywhere.

**Purpose Type Definitions**:
- `landing`: Route the reader. Value proposition + navigation cards. No prose explanation, code blocks, steps, or prerequisites.
- `overview`: Orient the reader. What this is, why it matters, core concepts, journey routing. No step-by-step procedures.
- `quickstart`: Activate the reader. Goal → prerequisites → steps → verification → next steps. The single most important page type.
- `how_to`: Get a specific task done. Assumes reader already has context. Steps are numbered, action + result per step.
- `guide`: Help reader understand and use a system in practice. Not step-by-step — "here's this thing, here's how it works, here's how to use it effectively."
- `reference`: Precise authoritative data for readers who know what they need. Stable page structure. Scannable.

---

### Source: `workspace/plan/active/CONTENT-WRITING/decisions/tab-status.md`

**Tab status for Orchestrators**: IA Approved: not started. Terminology Locked: not started. Content Scan Done: in progress. Structure Approved: not started. Content Pass Open: not started. Veracity Done: not started. Layout Done: not started.

**Gate Definitions**:
- IA Approved: Canonical audience design output reviewed and approved. Human sign-off required.
- Structure Approved: `v2/[tab]/_workspace/tab-map.md` approved + persona journey smoke-test passed. Human approves IA audit output.
- Content Pass Open: Tab map exists + terminology locked + voice rules confirmed + feedback routing map exists.

---

### Source: `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md`

**Locked decision D-NAV-01**: `pageType: navigation` disambiguation page is a locked cross-tab pattern — one file per tab, shared entry point for all paths, all downstream sections reference it. Decided by Human, 2026-03-23. Unblocks Phase 2.5 content research packs and Phase 6 WRITE mode page briefs for S1. S1 on the Orchestrators tab is the confirmed instance.

---

### Source: `docs-guide/frameworks/page-taxonomy-framework.mdx`

**Frontmatter schema (earlier 12-type version)**:
- pageType: [landing, overview, tutorial, quickstart, how_to, concept, reference, faq, troubleshooting, changelog, glossary, guide]
- audience: [developer, gateway-operator, orchestrator, delegator, platform-builder, community, internal, general, everyone]
- purpose: orient, explain, choose, start, build, configure, operate, troubleshoot, optimize, integrate, verify, compare, reference, learn, update
- complexity: beginner, intermediate, advanced
- lifecycleStage: discover, evaluate, setup, build, operate, troubleshoot, optimise

**Rules**: pageType guides structural fit. purpose guides the title's job. audience guides terminology and specificity.

---

### Source: `v2/orchestrators/_workspace/canonical/review/00-review-guide.md`

**Review structure**: 7 parts to review in order:

| # | File | What it is | Review question |
|---|---|---|---|
| 1 | 01-arriving-question.md | The single question driving the whole tab | Does this match why real orchestrators come to the docs? |
| 2 | 02-personas.md | 5 ranked personas with entry vectors | Are these the right people? Right priority order? |
| 3 | 03-jobs.md | 7 jobs to be done | Are these what orchestrators actually need to accomplish? |
| 4 | 04-journey.md | Linear journey + on-demand lookups + cross-tab links | Does this sequence match how someone actually goes from zero to running? |
| 5 | 05-section-structure.md | 12 sections (S1-S12) with purpose, pageType, entry/exit states | Is this the right structure? Too many sections? Wrong order? |
| 6 | 06-terminology.md | 48 locked terms with definitions | Are the definitions accurate? Any missing? Any wrong? |
| 7 | 07-path-validation.md | Each persona's path through the sections + gap notes | Do the paths make sense? Are the gaps real? |

---

### Source: `v2/orchestrators/_workspace/plans/plan.md`

**Section order locked**: Operator Considerations → Deployment Details → Workloads & AI → Staking & Earning → Config & Optimisation → Monitoring & Tools → Advanced Operations → Roadmap & Funding → Tutorials.

**Job Stories (7)**:

| # | Situation | Motivation | Outcome |
|---|---|---|---|
| J1 | GPU sitting idle | Earn crypto from compute | Offset hardware costs |
| J2 | Already run video, AI demand growing | Add AI to existing node | Earn from both without second machine |
| J3 | Have significant LPT | Maximise yield | Compound position via rewards + delegation |
| J4 | Company needs GPU compute under SLAs | Operate commercial infrastructure | Earn service fees from products |
| J5 | Want to influence open compute | Operate with governance weight | Vote on protocol decisions |
| J6 | Have 24GB+ GPU, limited LPT | Earn from AI without active set | Start earning immediately via capability |
| J7 | Something broke | Diagnose and fix quickly | Minimise missed rewards and lost jobs |

**Key sequencing decisions**: "Dual mode is the default production configuration. Most active operators run both video and AI." Navigator routes by job story situation, not by persona or section sequence.

---

### Source: `v2/orchestrators/_workspace/research/orchestrator-tab-review-v3.md`

**Critique 3 — The Section Order Assumes a Linear Journey**:

Non-linear paths per job story:
- J6 (AI-first, low LPT): skips Staking entirely → Considerations → Deployment → Workloads → Payments → Monitor
- J2 (adding AI to video): starts at Workloads, not Considerations
- J3 (LPT maximiser): cares about Staking before Workloads
- J4 (commercial): needs Payments and Pricing BEFORE Deployment

Recommendation: "The section order is fine as a default reading order, but the Navigator must route by job story, not by section sequence."

**Critique 7 — Customer Journey Has No 'Aha Moment' Design**:

| Moment | What happens | Should happen |
|---|---|---|
| First visit | Operator lands on portal | Job-story routing: "What's your situation?" |
| Worth-it check | Operator evaluates ROI | Interactive calculator or quick decision matrix |
| First setup | Operator installs and configures | Quickstart that gets to first job in 30 mins |
| First earning | Operator sees first reward/fee | Verification page should confirm "You're earning" |
| First problem | Something breaks | Error-specific routing from health checks |

---

### Source: `v2/orchestrators/_workspace/plans/product-thinking-review.md`

**Customer Journey Map (J1: GPU owner wanting earnings)**:

| Stage | Touchpoint | Thinking | Feeling | Friction | Opportunity |
|---|---|---|---|---|---|
| Evaluation | operator-rationale | "Is this worth my 4090's time?" | Calculating | Page is 439 lines, dense | Scannable decision matrix at top |
| Path Selection | setup-options | "Pool or solo? Video or AI or both?" | Uncertain | Binary framing (video OR AI) | Hybrid-first framing |
| Hardware Check | requirements | "Does my hardware qualify?" | Anxious | Page exists but not linked from rationale | Direct CTA from rationale |
| Setup | Quickstart + Setup section | "Walk me through it" | Focused | Setup is in different nav section | Cross-ref setup steps |
| First Workload | job-types → video or AI setup | "What do I run first?" | Engaged | 6 pages in Workloads, unclear sequencing | "Start with X, then add Y" guidance |
| Staking | earnings, rewards-and-fees | "How do I actually get paid?" | Motivated | Must read 2 pages + payments in different section | "Earning" umbrella section |
| First Earning | Explorer, CLI | "Is it working?" | Excited/anxious | No "verify you're earning" checkpoint page | Earning verification in monitoring |
| Ongoing Ops | monitoring, troubleshooting | "Something broke" | Frustrated | Troubleshooting is comprehensive but long | Symptom-based quick-nav |

**Critical Moments**: Aha = seeing first reward call succeed on Explorer. Churn trigger = "No jobs" after setup. Advocacy trigger = sharing first month's earnings.

---

### Source: `v2/orchestrators/_workspace/research/L0-hybrid-operator-product-exercise.md`

**Customer Journey Map — Hybrid Operator ("Sam", ML engineer with RTX 4090)**:

| Stage | Doing | Thinking | Feeling | Friction | Opportunity |
|---|---|---|---|---|---|
| Awareness | "Livepeer pays for GPU time?" | "Is this legit? How much can I earn?" | Curious, sceptical | No "hybrid earner" messaging | Portal hero should lead with hybrid earning |
| Evaluation | Reading economics, checking Explorer | "Can my 4090 do this? Video AND AI?" | Calculating, comparing | Current page doesn't model hybrid earnings | Decision matrix should default to hybrid |
| Decision | Choosing a path | "Do I do video first or AI first?" | Confused by the fork | Binary choice when reality is hybrid | Navigator should route to hybrid quickstart |
| Setup | Installing, configuring | "Which flags do I need for both?" | Focused | Must stitch video + AI guides manually | Single hybrid setup sequence |
| First Earnings | Checking for jobs | "Is it working? Am I earning?" | Anxious | Separate verification for video and AI | Unified hybrid health check |
| Optimisation | Adjusting prices, loading models | "How do I earn more from both?" | Engaged | No hybrid-specific tuning guide | Hybrid tuning page or section |
| Scaling | Considering expansion | "Should I split video and AI?" | Planning | No "when to split hybrid" guidance | Clear split criteria |

**Staged Action Sequence**: Phase 1 (Mental Model Shift) — rename/reframe navigator so "Both" is the first option. Phase 2 (Hybrid Content) — create hybrid-setup.mdx. Phase 3 (Hybrid Tooling) — hybrid health check in troubleshooting; "When to split" criteria.

---

### Source: `v2/orchestrators/_workspace/research/dual-mode-orchestrator-planning.md`

**10 pre-draft questions (section-structure relevant)**:
- Q5: Should the Dual Mode page cover the "existing video operator upgrading" path, or only fresh dual-mode setup?
- Q8: Does the Dual Mode page assume the navigator already routes there, or does it need self-contained decision logic?
- Q9: Two key sub-journeys: (a) new operator starting fresh with dual mode, (b) existing video operator adding AI. Separated via Tabs or AccordionGroup?

---

### Source: `v2/orchestrators/_workspace/plans/dep-personas-and-pages.mdx`

**Persona Journey Map — structural pattern (position order is fixed)**:

| Position | Purpose Type | Job at This Position |
|---|---|---|
| 1 | `landing` (portal) | Route them. |
| 2 | `overview` | Orient them. |
| 3 | `tutorial` (quickstart) | Activate them. |
| 4 | `how_to` (operational guides) | Enable them. |
| 5 | `concept` (deeper understanding) | Deepen them. |
| 6 | `reference` (technical detail) | Support them. |
| 7 | `faq` / `troubleshooting` | Rescue them. |
| 8 | `glossary` | Define terms. |

**Orchestrator Journey (10-stage)**:

| Stage | What They're Doing | Questions |
|---|---|---|
| 1. Discovery | Understanding the opportunity | What is an orchestrator? How do they earn? Hardware needed? |
| 2. Evaluation | Deciding whether to run one | GPU requirements? LPT stake? ETH for gas? Costs vs earnings? |
| 3. Installation | Getting go-livepeer running | Download, install, configure. Docker or bare metal? |
| 4. On-Chain Registration | Joining the network | Stake LPT? Register? Set reward/fee cut? Minimum stake? |
| 5. AI Setup (if running AI) | Configuring GPU pipelines | Which AI models? Pipeline config? GPU memory management? |
| 6. First Success | Processing first job | Verify receiving jobs? First earnings? |
| 7. Optimisation | Maximising earnings | Pricing strategy. Profitable pipelines? Multi-GPU? |
| 8. Advanced Operations | Scaling and securing | Remote signers. Clearinghouses. Multiple nodes. Monitoring. |
| 9. Governance | Protocol governance | Voting rounds? Stake-weighted voting? |
| 10. Troubleshooting | Something broke | Not receiving jobs. GPU errors. Earnings not showing. |

**Self-identification problem**: "People don't arrive at docs thinking 'I'm a Gateway Operator.' They arrive thinking 'I'm a developer' or 'I want to build something.'" Mapping: "I want to earn with my GPUs" → Orchestrator.

---

### Source: `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/02_04-IA-Journey-Derived-IA/index.md` (via review/04-journey.md reference)

**Journey 6: ORCHESTRATOR / GPU COMPUTE PROVIDER**: ~9 pages derived from journey stages (Portal, What is an Orchestrator, Requirements & Economics, Quickstart, Join a Pool, AI Configuration, Model Curation, Earnings & Optimisation, Troubleshooting). Plus reference pages. Previous (repo-contaminated) blueprint: 177 pages. Journey-derived blueprint: ~96 pages total across all tabs.

---

### Source: `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/02_02.-Personas-Journey-Alignment/index.md` (via review/04-journey.md reference)

**5 orchestrator personas with journey-stage arrival points**:

| Persona | Journey stage at arrival |
|---|---|
| A: Solo Miner (1–4 consumer GPUs) | Pos 2–3 |
| B: Pool Worker (single GPU, lacks LPT) | Pos 3 |
| C: Pro Operator (4–20 GPUs, devops) | Pos 4–5 |
| D: Enterprise (100+ GPUs, commercial) | Pos 2–3 |
| E: AI Native (24GB+ VRAM, no crypto background) | Pos 3 |

---

### Source: `docs-guide/frameworks/content-system.mdx` (via review/04-journey.md reference)

**Content Layers model**:
- Layer 1 (Product and Positioning): value proposition and context framing; user journey entry points; concise decision-oriented summaries.
- Layer 2 (Operational How-to): setup, runbooks, migration/checklist pages; practical workflows with expected outcomes.
- Layer 3 (Deep Reference): APIs, schema/spec docs, command matrices; troubleshooting and edge-case documentation.

---

### Source: `v2/orchestrators/_workspace/drafts/docs-section-planning-playbook.md`

**Step 2d — Customer Journey Map (canonical process)**: Map primary job story through 7 stages (Awareness → Evaluation → Decision → Setup → First Value → Optimisation → Scaling). Document: touchpoint, thinking, feeling, friction, opportunity per stage. Identify critical moments: aha, churn trigger, advocacy trigger.
