# Part 7: Persona Path Validation & Gap Notes

**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## Can each persona get through the sections?

| Persona | Enters | Exits | Blocked? | Knowledge gap |
|---|---|---|---|---|
| Independent GPU operator | S1 | S9 (initial); returns S10-S11 | No | S4 must cover LPT *acquisition* path, not just define LPT. S3 must clarify reward calls are active requirement. |
| AI inference specialist | S1 | S8 or S9 | No | S3 must state active set NOT required for AI. S4 must distinguish AI vs video prerequisites. S8 must address VRAM planning before pipeline selection. |
| Capital-constrained (pool) | S1 → S6 | S6 | No | S4 must clarify LPT NOT required for pool nodes. S6 must give enough context for pool vs solo vs AI-first decision. |
| Running operator (return) | S10, S11, or S12 directly | Same section | No | S12 must distinguish low demand vs low selection vs low margin as separate diagnostic paths. |
| Delegator-turned-operator | S2 | S4 or S5 | No | S2 must surface cost-of-operation comparison (operator earnings vs continued delegation). S7 must address cuts from operator perspective, not delegator's. |

**Result**: All personas have unblocked paths. No missing sections.

---

## 5 gap notes for content briefs

These are specific content requirements identified during audience design:

1. **S3**: Add explicit statement that active set membership is NOT required for AI inference routing
2. **S4**: Separate LPT acquisition instructions from general prerequisites; mark LPT section as "solo video path only"
3. **S4**: Make explicit that pool node operators do NOT need LPT
4. **S7**: Address cut settings from the *operator's* perspective (what to set and why) — not from the delegator's perspective
5. **S12**: Structure as three distinct diagnostic paths: low work volume, operational errors (reward calls, ticket redemptions), and performance score degradation

---

## Entry blockers (things that stop someone mid-journey)

| Blocker | Affects | Must be addressed before |
|---|---|---|
| LPT stake | Solo video path only | S5 (setup) |
| ETH for gas | All on-chain paths | S5 (setup) |
| Publicly reachable service URI | All paths | S5 (setup) — node registration |
| VRAM capacity | AI inference path | S8 (AI setup) — model selection |
| Pool membership arrangement | Pool node path | S6 — not self-serviceable from docs |
| Capability advertisement | AI path | S9 (verify) — gateways must see capabilities |

---

## Review questions

1. Do the persona paths actually work in practice?
2. Are the 5 gap notes the right priorities, or are there bigger gaps?
3. Are the entry blockers complete? Anything else that stops people?
4. Is the pool membership blocker ("not self-serviceable from docs") a real problem? Should the docs address it differently?

---

## Existing research (raw — for reference)

Research collected 2026-03-23. Grouped by source file path. Covers all path validation, persona path, entry blocker, gap analysis, coverage validation, and related content found across workspace/plan/active/CONTENT-WRITING/, v2/orchestrators/_workspace/, and docs-guide/.

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/collated/canonical-orchestrators-audience-design.md`

**Status**: CANONICAL — ready for Phase 2 input. Synthesised from 4 AI runs (Claude agent, Claude web, ChatGPT, Perplexity).

**Entry blockers**:
- **LPT stake** (solo video transcoding path): Hard-stop blocker for active set eligibility. A reader who discovers mid-setup that they need significant bonded stake will stall. The section explaining LPT acquisition and staking must appear before the solo video setup section. The pool node path and AI-only path bypass this blocker — the disambiguation section must make this visible before either path begins.
- **ETH for gas** (all on-chain paths): All reward calls, ticket redemptions, and activation transactions cost ETH gas on Arbitrum. Must be addressed in prerequisites before setup instructions begin.
- **Publicly reachable service URI** (all paths): A node without a reachable service URI cannot receive routed work. Network and firewall configuration must be resolved before the node is registered on-chain.
- **VRAM capacity** (AI inference path): AI pipelines require minimum VRAM to load models. Affects which pipelines an operator can configure and must be addressed in AI setup before model selection.
- **Pool membership arrangement** (pool node path): A pool node candidate must find and arrange a connection with a pool operator before any setup makes sense. This is not self-serviceable from the documentation alone.
- **Capability advertisement** (AI path): An AI operator who configures models but does not understand capability advertisement cannot verify that gateways will route AI work to them. Must be covered before verification section.

Section order consequence: Disambiguation → path viability assessment → payment mechanics → prerequisites → solo node setup OR pool node section → AI pipeline setup → verification → operations → optimisation → troubleshooting.

**Persona Path Validation**:

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| Independent GPU operator (solo video/dual) | S1 (disambiguation) | S9 (verify) for initial goal; returns to S10–S11 for ongoing operations | None — prerequisite sections (S2, S3, S4) precede setup (S5, S7, S9) | S4 must explicitly cover LPT acquisition path (not just definition) — an operator who arrives with no LPT must understand how to obtain and stake it, not just what LPT is; S3 must clarify that reward calls are an active requirement (not passive payout) | None |
| AI inference specialist | S1 (disambiguation) | S9 (verify) or S8 (AI configuration) | None — S8 (AI pipeline setup) is a dedicated section | S3 must clarify that active set membership is not required for AI inference routing — an AI-only operator who reads S3 without this clarification may incorrectly conclude they need LPT stake before they can participate; S4 must distinguish AI prerequisites from video prerequisites; S8 must address VRAM capacity planning before pipeline selection | None |
| Capital-constrained operator (pool node path) | S1 (disambiguation) → S6 (pool node section) | S6 — pool node candidates exit after making their decision | None — S6 is a dedicated section positioned before S5 (solo setup) so pool candidates exit cleanly | S4 must make clear that LPT is not required for pool node operators — if S4 reads as "everyone needs LPT," pool node candidates may incorrectly abandon the tab; S6 must resolve the "enough stake?" question with sufficient context to make the pool vs solo vs AI-first decision, not just say "join a pool" | None |
| Running operator (return visit) | Enters directly at S10 (operations), S11 (optimise), or S12 (troubleshoot) | S10, S11, or S12 | None — on-demand and operational sections serve this persona without needing prior sections | S12 (troubleshoot) must distinguish low demand, low selection, and low margin as separate diagnostic paths so this persona can navigate directly to the relevant root cause | None |
| Delegator-turned-operator | S2 (viability assessment) — can skip S1 as they already know LPT | S4 (prerequisites) or S5 (setup) | None | S2 must surface the cost-of-operation framing (hardware cost, operational overhead, ETH for gas, comparison of solo operator earnings vs. continued delegation) — this persona needs that comparison to make their decision; S7 must address setting cuts from the operator's perspective, not the delegator's, as this persona may conflate the two roles | None |

**All personas have unblocked paths through the canonical section structure. No missing sections.**

**Gap notes carried through for Phase 2 content briefs**:
1. S3: Add explicit statement that active set membership is NOT required for AI inference routing.
2. S4: Separate LPT acquisition instructions from general prerequisites; clearly mark LPT section as "solo video path only."
3. S4: Make explicit that pool node operators do not need LPT.
4. S7: Address cut settings from the operator's perspective (what to set and why) — not from the delegator's perspective (what the cut means to delegators).
5. S12: Structure as three distinct diagnostic paths: low work volume, operational errors (reward calls, ticket redemptions), and performance score degradation.

**Checkpoint**:
- [x] Entry blockers: union of all runs — none dropped?
- [x] All personas unblocked?

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/collated/collation-notes-orchestrators.md`

**Status**: Collation notes for the canonical output. Synthesised from RUN-A (Agent), RUN-B (Claude Web), RUN-C (ChatGPT), RUN-D (Perplexity).

**Per-run path validation and blocker findings**:

**RUN-A (Agent)**:
- Entry blockers: LPT stake, ETH for gas, VRAM capacity, publicly reachable service URI
- Persona path validation: Pool node path flagged as requiring explicit variant in S4; AI operator path requires S2 to clarify active set not required for AI

**RUN-B (Claude Web)**:
- Entry blockers: ETH for gas, LPT for video path, capability advertisement for AI path, pool connection for pool worker
- Persona path validation: Pool worker path flagged as requiring routing callout within S5; delegator-turned-operator requires cut-setting framing from operator perspective in S6

**RUN-C (ChatGPT)**:
- Entry blockers: Path ambiguity, capital barrier (LPT), reachability barrier, operational barrier (payment mechanics)
- Persona path validation: All personas unblocked; Section 9 must clearly separate "add AI" from "add scale"

**RUN-D (Perplexity)**:
- Entry blockers: LPT stake (video), ETH for gas (AI path), pool membership (pool node), capability advertisement (AI compute provider)
- Persona path validation: All personas unblocked; S6 flagged as potential split during detailed design; S9 pool node is evaluate+guide not instruction

**Run quality notes (path validation specific)**:

RUN-B key strength: "Most precise persona path validation. The per-persona identification of exactly which section must contain which piece of information (e.g., 'S6 must explicitly address setting cuts from the operator's perspective, not the delegator's' for the delegator-turned-operator persona) is the most actionable path validation output. This level of specificity gives Phase 2 content authors a concrete brief for each section rather than general guidance."

**Open Items (blocking/non-blocking for path validation)**:

1. **LIP-92 identity conflict — BLOCKING**: The glossary assigns LIP-92 to "AI model registry and capability discovery mechanism." RUN-C explicitly identified that the LIPs index assigns LIP-92 to "Treasury Contribution Percentage." These cannot both be correct. Impact: If any Phase 2 content cites LIP-92 in the context of AI capability discovery, it may be citing the wrong LIP number.
2. **Active set size value — NON-BLOCKING**: The glossary states active set size is 100. This is a governance-controlled parameter and is therefore live state. Content cannot hard-code "100" without a live-check annotation.
3. **Pool node term canonicalisation — NON-BLOCKING**: `deprecated-terms.md` says "Pool worker" is renamed to "Pool node." The orchestrators glossary still uses "Pool Worker" as the primary entry.
4. **go-livepeer AI configuration surface — NON-BLOCKING for structure; BLOCKING for AI instructional content**: aiModels.json, warm model behaviour, AI runner subprocess, and capability advertisement flagged as high-staleness.
5. **Primary persona tie-break (video vs AI path) — NON-BLOCKING**: RUN-A identified a scoring tie between solo video operator (9) and solo AI inference operator (9). Current canonical structure serves both paths.

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/validation-check.md`

**Status**: Phase 1 Check B — Canonical Design Alignment Validation for Orchestrators tab.

**Check 2 — Obligatory Content in Correct Positions**:

- **LPT stake requirement** (solo video path blocker): Addressed in S2 (viability assessment, linear) and S4 (prerequisites, linear). Both appear before S5 (setup). PASS.
- **ETH for gas** (all on-chain paths): Addressed in S4 (prerequisites, linear) before S5 (setup). PASS.
- **Publicly reachable service URI**: Addressed in S4 (prerequisites, linear) before S5. PASS.
- **VRAM capacity** (AI inference path): Addressed in S2 (viability) and S4 (prerequisites). Both linear. PASS.
- **Pool membership arrangement** (pool node path): Addressed in S6 (pool node section) before solo setup instructions. Pool node candidates exit at S6; they are not forced to read S5 solo setup. PASS.
- **Capability advertisement** (AI path): Addressed in S8 (AI pipeline setup). S8 is on-demand, but this is correct — capability advertisement is a build-phase concern for operators who have already confirmed the AI path in S1–S2. PASS.

**Check 4 — Personas: Complete Entry Question, Knowledge Gap, JTBD**:

| Persona | Entry question present? | Knowledge gap documented? | JTBD clear? |
|---|---|---|---|
| Independent GPU operator (solo video/dual) | Yes — path identification via S1 | Yes — S4 must cover LPT acquisition path, S3 must clarify reward calls are active requirement | Yes — J1–J4, J7 |
| AI inference specialist | Yes — AI path via S1 | Yes — S3 must clarify active set not required for AI inference; S4 must distinguish AI prerequisites | Yes — J1, J2, J6 |
| Capital-constrained operator (pool node path) | Yes — S1 routes to S6 | Yes — S4 must explicitly state pool node operators do not need LPT | Yes — J1, J2 |
| Running operator (return visit) | Yes — enters S10, S11, or S12 directly | Yes — S12 must distinguish diagnostic paths (low demand vs low selection vs low margin) | Yes — J5, J7 |
| Delegator-turned-operator | Yes — S2 viability assessment | Yes — S2 must surface cost-of-operation framing; S7 must address cuts from operator perspective | Yes — J1, J6 |

**Gap notes for Phase 2 content briefs** (from canonical output):
1. S3: Add explicit statement that active set membership is NOT required for AI inference routing
2. S4: Separate LPT acquisition from general prerequisites; mark LPT section as "solo video path only"
3. S4: Explicitly state pool node operators do not need LPT
4. S7: Address cut settings from operator perspective (what to set and why)
5. S12: Structure as three distinct diagnostic paths

All 5 gap notes are documented. No persona has a missing section.

**Outstanding Items (Non-Blocking for Check B, Blocking for Phase 2)**:
1. LIP-92 identity conflict — BLOCKING for Phase 2 content that references the AI capability registry by LIP number.
2. BYOC path coverage — HIGH for Phase 2 AI pipeline section.
3. Active set size — NON-BLOCKING but must be verified against Explorer before publication.
4. Pool node term — NON-BLOCKING but glossary update required.

**APPROVED FOR PHASE 2 — Orchestrators tab**

---

### Source: `workspace/plan/active/CONTENT-WRITING/context-packs/orchestrators-collated-status.md`

**Status**: Full read of all 83 live MDX files mapped against the 12-section canonical IA.

**Summary**: 83 live MDX pages exist. Every IA section has existing content — no section starts from zero. Key problems: duplicates, scattered placement, inconsistent frontmatter, unverified content quality. 3 stubs, ~12 placeholder/draft pages.

**Coverage verdicts per section**:

S1 (Which path is mine?): Content exists. `dep-x-setup-paths.mdx` is the closest match. Decision needed: reconcile 4-path model (existing) vs 3-path model (IA).

S2 (Is this viable?): 4 pages across operator-considerations/. Need to verify: do these collectively answer "will my GPU and capital qualify?"

S3 (How does work reach me?): 6 pages. Likely over-split — IA wants one concept page covering routing + payments + rewards.

S4 (Prerequisites): Prerequisite content scattered across setup/ and resources/. Checklist page is the anchor.

S5 (Get node running): Most complete section — 10 pages. Has a duplicate guide. Quickstart provides fast-track. Needs consolidation, not new writing.

S6 (Join pool): Has content but has a duplicate (two "Join a Pool" pages). Need to verify which is current.

S7 (Set pricing and cuts): Content across two folders. Need to verify coverage.

S8 (AI pipelines): Largest section — 11 pages. IA flagged this may need to split.

S9 (Verify node): Partial coverage. Overlaps with S5 verification steps.

S10 (Monitor and operate): 4 pages. Good coverage area.

S11 (Optimise earnings): Content but thin. May need more on stake positioning and delegation attraction.

S12 (Diagnose and fix): 2 real pages + 1 placeholder. IA requires three diagnostic paths.

**Duplicates Found**:
1. setup/guide.mdx vs setup/s-guide.mdx — both are setup overviews with checklists
2. guides/deployment-details/join-a-pool.mdx vs guides/deployment-details/new-join-a-pool.mdx — same title
3. guides/monitoring-and-tooling/troubleshooting.mdx vs resources/technical/x-troubleshooting.mdx — same topic

**Decisions Needed Before Proceeding**:
1. Path model mismatch: IA has 3 paths (solo/AI/pool). Existing page has 4 paths (solo/pool worker/pool operator/enterprise). Which is correct?
2. Duplicate resolution: Which of each duplicate pair is canonical?
3. Concepts folder: Keep as standalone conceptual section, or fold content into IA sections S2/S3?
4. Tutorials: Keep as separate section, or integrate into relevant IA sections (S5, S8)?
5. Advanced operations: Keep or defer?
6. ~12 placeholder pages (x- prefix, status: draft with no content): Drop or fill?

**What's Actually Needed to Finish**: The work is NOT "write 12 sections from scratch." It's: (1) Consolidate — merge duplicates, (2) Verify — read each page for accuracy, (3) Fill gaps — S11 is thin, S12 needs diagnostic paths, (4) Reorganise, (5) Clean up, (6) Cross-check terminology.

---

### Source: `workspace/plan/active/CONTENT-WRITING/context-packs/orchestrators-ia-mapping.md`

**Status**: Nav pages assessed against confirmed IA (12 sections, S1-S12). Source: 72 nav pages, 13 orphans.

**S1 — Which path is mine? — PARTIALLY COVERED**:
- No page uses pageType: `navigation` as required. navigator.mdx uses `landing`.
- The LPT-required vs. not-required distinction across paths is not the stated focus of any existing page.
- S1 requires a single shared navigation file that all paths reference as their entry point.
- setup-options.mdx would not be read at the S1 stage by a first-time visitor.

**S2 — Is this viable? — PARTIALLY COVERED**:
- No single page synthesises hardware fit + income mechanics + participation cost into one unified go/no-go evaluation concept page.
- Relevant content split across Operator Considerations, Staking and Earning, and Workloads.
- operator-impact.mdx does not belong in S2 at all.
- The "delegator-turned-operator" persona requires S2 to surface cost-of-operation comparison. No existing page does this.
- Gap note: S2 must surface participation cost in terms the capital-constrained operator can act on.

**S3 — How does work reach me? — PARTIALLY COVERED**:
- No page explicitly states that active set membership is NOT required for AI inference routing.
- S3 content fragmented across 4+ pages. No single concept page synthesises all of this.
- gateway-relationships.mdx addresses the S3 question directly but is in Advanced Operations — reader at evaluate stage will not find it there.

**S4 — Prerequisites — PARTIALLY COVERED**:
- S4 must explicitly separate LPT acquisition as "solo video path only" and make explicit that pool node and AI-only operators do NOT need LPT. No existing page structures prerequisites this way.
- The LPT acquisition path (how to get LPT procedurally) is not covered by any existing page. arbitrum-exchanges.mdx is a reference list; it does not walk through the process.
- connect-and-activate.mdx belongs in S4 prerequisite territory more than S5 installation territory.

**S5 — Get node running — YES (best-covered section)**:
- Core setup sequence (install → configure → connect-activate) is complete and sequenced.
- S5 split flag: pool node candidates must be routed out to S6 before reaching S5. No existing page explicitly gates pool node candidates away.
- quickstart/tutorial.mdx is a thin redirector with no instructional value.
- quickstart/guide.mdx and setup/guide.mdx partially duplicate the overview function.

**S6 — Join as pool node — PARTIALLY COVERED**:
- Critical structural problem: two pages in nav with identical display title "Join a Pool" (join-a-pool.mdx and new-join-a-pool.mdx).
- IA requires S6 to include three-way decision gate: pool vs. solo vs. AI-first (no stake required for AI). No existing page surfaces this.
- S6 must be explicitly scoped to capital-constrained-operator persona with "you don't need LPT for this path" and "you don't need LPT for AI-only path either" statements.

**S7 — Set pricing and cuts — PARTIALLY COVERED**:
- Gap note 4: S7 must address cut settings from the operator's perspective (what to set and why for own earnings). No existing page does this.
- Reward cut/fee cut guidance split between reward-mechanics.mdx, delegate-operations.mdx, and connect-and-activate.mdx — none owns the S7 configuration-guide framing.
- pricing-strategy.mdx covers the pricing half well but does not address cuts at all.

**S8 — Set up AI pipelines — YES (most content; capability advertisement instruction gap)**:
- S8 may need to split — the AI configuration section is substantially longer than video.
- BYOC path not fully covered — byoc-cpu-smoke-test.mdx is a smoke test only.
- Capability advertisement "here is how to complete the configuration step" instruction may not exist as a standalone actionable step.
- 10+ pages without a clear master instruction page that sequences them.

**S9 — Verify node — YES (setup/test.mdx is a strong match; AI capabilities verification gap)**:
- No explicit "confirm your AI capabilities are advertised and gateways can see them" verification step for AI operators.
- faq.mdx serving dual S9/S12 purposes splits its utility.

**S10 — Monitor and operate — PARTIALLY COVERED**:
- No single page defines the day-to-day operational workflow as a sequenced routine.
- Ticket redemption monitoring covered in payment-receipts.mdx but that page is status: draft.
- Software update procedures may not be addressed in any S10 page.
- setup/r-monitor.mdx positioned in Setup section but content serves S10 — structural placement conflict.

**S11 — Optimise earnings — PARTIALLY COVERED**:
- S11 requires a triage entry framing: "you have low earnings or few jobs — is it pricing, stake, performance score, or AI capability advertisement?" No existing page serves this.
- Performance score improvement page may not exist.

**S12 — Diagnose and fix — PARTIALLY COVERED**:
- S12 must be structured as three distinct diagnostic paths: (1) low work volume, (2) operational errors, (3) performance score degradation. No evidence troubleshooting.mdx is structured this way.
- faq.mdx titled "FAQ and Troubleshooting" splits its function across S9 and S12.

**Pages with no section home (15 pages)**:
concepts/role, concepts/architecture, concepts/capabilities, network-participation, gateway-orchestrator-interface, scale-operations, funding-and-support, orchestrator-profiles, community-guides, glossary (x2), x-contract-addresses, zero-to-first-reward, byoc-cpu-smoke-test, ai-earning-quickstart.

**72-page × 12-section summary matrix**: (Y = YES, P = PARTIALLY, — = no mapping). Available in full in the source file.

---

### Source: `workspace/plan/active/CONTENT-WRITING/context-packs/orchestrators-content-scan.md`

**Status**: DRAFT — awaiting human review. 72 pages in docs.json navigation.

**Summary**: Total pages: 72. Empty: 0. Stubs (<100 words): 2 (funding-and-support, orchestrator-profiles). Draft: 13. Current: 33. Published: 18. Review: 7. Pages with deprecated pageType values: 24. Pages with incomplete frontmatter: 72 (all pages missing lifecycleStage).

**Frontmatter issues (path-validation relevant)**:
- portal.mdx: `pageType: landing` deprecated (→ `navigation`); `purpose: landing` deprecated (→ `orient`); `lifecycleStage` missing
- navigator.mdx: `pageType: landing` deprecated (→ `navigation`); `purpose: orientation` deprecated (→ `orient`); `lifecycleStage` missing
- All 72 pages missing `lifecycleStage` — the field that maps pages to journey stages is absent from every page in the tab

---

### Source: `v2/orchestrators/_workspace/canonical/research/per-page-needs.mdx`

**Status**: Per-page content needs derived from canonical audience design.

**Entry blocker resolution on navigator.mdx**:
- [ ] Make visible that AI-only path does NOT require LPT stake (entry blocker resolution)
- [ ] Make visible that pool node path does NOT require LPT stake
- [ ] Route capital-constrained readers to pool or AI-first path before they hit the LPT wall

**Prerequisites page (rcs-requirements.mdx) exit state**:
- Exit state: All blockers resolved - hardware confirmed, wallet funded, tokens acquired, network configured
- [ ] LPT acquisition and staking (solo video path ONLY - make this explicit)
- [ ] ETH for gas on Arbitrum (all on-chain paths)
- [ ] Explicitly state: pool node operators do NOT need LPT
- [ ] Explicitly state: AI-only operators do NOT need LPT for job routing

**Troubleshooting page (troubleshooting.mdx)**:
- [ ] Diagnostic path 1: LOW WORK VOLUME (pricing gate, active set rank, capability advertisement, performance score)
- [ ] Diagnostic path 2: OPERATIONAL ERRORS (reward call failures, ticket redemption issues, service URI unreachable)
- [ ] Diagnostic path 3: PERFORMANCE DEGRADATION (GPU issues, VRAM pressure, cold start latency, network issues)

---

### Source: `v2/orchestrators/_workspace/plans/product-thinking-review.md`

**Status**: Product thinking review of orchestrator tab.

**Job story gap analysis**:

J1 ("GPU sitting idle, want to earn"): Gap: No unified "start here" page within guides. operator-rationale is evaluation, not action.

J2 ("Already run video, see AI demand growing"): **Gap: No "add AI to existing video node" bridge content. Both AI pages assume fresh setup. No VRAM coexistence guidance.**

J3 ("Have significant LPT, want to maximise yield"): Gap: No "LPT yield optimisation" framing. Content is mechanistic (how rewards work) not strategic (how to maximise).

J4 ("Company needs GPU compute under SLAs"): Gap: No end-to-end commercial operator journey. Pages exist but aren't connected into a path.

J5 ("Want to influence protocol direction"): Gap: None significant. Well covered.

J6 ("Have 24GB+ GPU, limited LPT, want AI inference"): Gap: The AI setup pages don't explicitly say "you don't need LPT for this." The low-barrier AI path isn't prominently surfaced.

J7 ("Something broke"): Gap: No quick-reference error lookup. Must scroll a long page.

**Opportunity scores (top gaps)**:

| Score | Opportunity | Status |
|---|---|---|
| 56 | O3 — Hybrid operator path (adding AI to video) | No content exists |
| 54 | O1 — Worth-it evaluation (ROI/decision matrix) | |
| 45 | O2 — Path selection (job-story navigator) | |

**Content status summary**: 73% of guide pages are complete. Critical gaps are pricing-strategy and payment-flow (both P0), plus the hybrid bridge content (P0).

**Critical moment (churn trigger)**: "No jobs" after setup. Operator doesn't know if the problem is pricing, capability, or connectivity. troubleshooting helps but the gap is "why am I not being selected?"

**Missing operational guides identified**:
- "Running the AI Service day-to-day" — NOT COVERED ANYWHERE
- "Running the Transcoder day-to-day" — NOT COVERED ANYWHERE
- "Gateway + Orchestrator: Running Both" — CRITICAL GAP

**Missing AI config guides**:
- aiModels.json deep reference — PARTIALLY COVERED but fragmented across 4 pages

**Priority of new gaps**:

| Priority | Gap | Location | Rationale |
|---|---|---|---|
| P0 | Gateway + Orchestrator combined operations guide | Advanced Operations | Many operators run both. No guide exists. |
| P1 | aiModels.json field reference | Workloads or Resources | THE config file for AI operators. Currently fragmented. |
| P1 | Day-to-day operations content for AI service | ai-inference-operations or ai-model-management | "Set it up" is covered; "run it day-to-day" is not. |
| P2 | NVIDIA driver patch guide | Resources > Technical | Referenced in multiple pages, documented nowhere. |
| P2 | Day-to-day operations content for video transcoding | video-transcoding-operations | Same gap as AI but less acute. |

**Blocker analysis (what blocks activation speed)**:

| Blocker | Time cost | Can it be deferred? |
|---|---|---|
| Installing go-livepeer | 5-15 mins (Docker pull) | No |
| NVIDIA driver setup | 0 mins (if already installed) or 30+ mins | No - GPU required |

---

### Source: `v2/orchestrators/_workspace/plans/plan.md`

**Status**: Orchestrator tab plan.

**Part 4: Gap Analysis — Content that needs writing (by priority)**:

| Priority | Page | Section | Source material | Effort |
|---|---|---|---|---|
| P0 | pricing-strategy | Config & Optimisation | v1 set-pricing.mdx, gateway pricing-strategy | Medium |
| P0 | payment-receipt | Staking & Earning | gateway payment-guide (receiver perspective) | Medium |
| P0 | capacity-planning | Config & Optimisation | Absorb from deprecated benchmarking + session-limits | Medium |
| P1 | llm-pipeline-setup | Workloads & AI | Extract from batch-ai-setup (Ollama sections) | Small |
| P1 | ai-model-management | Config & Optimisation | Extract operational content from ai-workloads-guide | Medium |
| P1 | combined-gateway-orchestrator | Advanced Operations | New content - architecture, ports, self-routing | Medium |
| P1 | audio-and-vision-pipelines | Workloads & AI | Extract from batch-ai-setup | Small |
| P2 | reward-call-tuning | Config & Optimisation | Extract from rewards-and-fees + gas economics | Small |
| P2 | zero-to-first-reward tutorial | Tutorials | Synthesise from setup pages | Large |
| P2 | ai-earning-quickstart tutorial | Tutorials | Synthesise from AI setup pages | Large |
| P2 | add-ai-to-video-node tutorial | Tutorials | From dual-workload-setup + ai-workloads-guide | Medium |
| P3 | full-ai-pipeline-tutorial | Tutorials | New | Large |
| P3 | realtime-ai-tutorial | Tutorials | From realtime-ai-setup + gateway routing | Large |
| P3 | byoc-cpu-smoke-test | Tutorials | Adapt byoc-cpu-tutorial.mdx | Small |
| P3 | funding-and-support | Roadmap & Funding | SPE documentation, treasury process | Medium |
| P3 | operator-showcase | Roadmap & Funding | Operator profiles, Explorer data | Medium |

**Content that needs updating (by priority)**:

| Priority | Page | What to update |
|---|---|---|
| P0 | operator-rationale | Add scannable summary at top, earnings estimation section |
| P0 | ai-workloads-guide | Add "Already running video?" bridge accordion, add J6 low-LPT callout |
| P1 | setup-options | Update "combined mode" → "dual mode" terminology |
| P1 | job-types / workload-landscape | Add demand/earnings context, rename |
| P1 | model-vram-reference | Add demand data, rename to model-demand-reference |
| P1 | earnings | Add strategic "how to earn more" framing, rename to earning-model |
| P2 | troubleshooting | Add symptom quick-nav index at top |

**Structural changes needed**:
- Merge Staking & Rewards + Payments & Pricing → "Staking & Earning"
- Create Config & Optimisation section
- Resolve Dep/New subgroups
- Resolve new-join-a-pool vs join-a-pool — pick one, deprecate other
- Split batch-ai-setup → extract LLM + audio/vision into separate pages

---

### Source: `v2/orchestrators/_workspace/plans/dep-personas-and-pages.mdx`

**Status**: Persona and page mapping.

**Persona entry blockers (summary matrix)**:

| Persona | Entry blocker |
|---|---|
| A: Solo Miner (1–4 consumer GPUs) | LPT stake |
| B: Pool Worker (single GPU, lacks LPT) | Pool clarity |
| C: Pro Operator (4–20 GPUs, devops) | AI config |
| D: Enterprise (100+ GPUs, commercial) | Economics |
| E: AI Native (24GB+ VRAM, no crypto) | Quickstart path |

**Activation test**: "Tester goes from zero to a registered orchestrator that processes at least one job and shows earnings in the Explorer."

**Self-identification problem**: "People don't arrive at docs thinking 'I'm a Gateway Operator.' They arrive thinking 'I'm a developer' or 'I want to build something.'" Mapping: "I want to earn with my GPUs" → Orchestrator (GPU Nodes tab).

---

### Source: `v2/orchestrators/_workspace/research/orchestrator-tab-review.md`

**Status**: First orchestrator tab review.

**Persona coverage assessment**:

Persona A (Solo GPU Operator): Coverage is good — setup, quickstart, join-a-pool.
Persona B (Pool Worker): Coverage is good — join-a-pool, siphon-setup.
Persona C (Pro Operator): Coverage is strong. The AI workloads section is well-structured.
Persona D (Enterprise): Coverage is limited. large-scale-operations exists but no enterprise-specific evaluation path.
Persona E (AI Native): Coverage is strong for setup. Missing: how AI earnings work differently from video earnings.

**Content gaps (Priority 3)**:
7. Add reward calling guide — migrate from v1 configure-reward-calling.mdx
8. Populate roadmap-and-funding — at minimum SPE/grant opportunities
9. Review 7 draft pages — promote to current or remove from nav

---

### Source: `v2/orchestrators/_workspace/research/orchestrator-tab-review-v2.md`

**Status**: Second orchestrator tab review.

**Per-persona gap fill assessment**:

Persona A (Solo GPU Operator): Gap filled — operator-rationale covers decision matrix, cost breakdown, flowchart.
Persona B (Pool Worker): Gap filled — community-pools should show which pools are active and how to evaluate.
Persona C (Pro Operator): Before: Good coverage via AI workloads. After: Same + business-case page. Gap filled: Commercial orchestrator framing, AI-specific earnings.
Persona D (Enterprise): Gap filled: Full commercial orchestrator journey from business case through pricing to fleet operations.
Persona E (AI Native): Before: Strong setup coverage, weak on earnings. After: earnings page distinguishes AI vs video earnings + pricing-strategy covers AI-specific pricing. Gap filled: AI earnings model clearly differentiated.

---

### Source: `v2/orchestrators/_workspace/research/orchestrator-tab-review-v3.md`

**Status**: Product thinking critique.

**P1: Content gaps (highest-impact missing content)**:
4. Build the glossary. Zero bytes. Every other section references terms not defined. This blocks comprehension across all pages.

---

### Source: `v2/orchestrators/_workspace/research/dual-mode-orchestrator-planning.md`

**Status**: Pre-draft planning for dual mode page.

**Confirmed gap**: "The `AI-prompt-start` page is a confirmed gap — the 'add AI to existing video node' bridge does not yet exist."

**Content accuracy flags**:
- Minimum VRAM for dual-mode: confirmed 16GB as "official docs suggest" but Cloud SPE Ollama guide shows 8GB+ viable for LLM. Unverified for transcoding + AI simultaneously.
- GPU contention between video and AI on a single card: not yet documented anywhere in official sources.
- `-reward=false` flag for split O+T setups confirmed from v1 docs but may have changed — needs review.
- `AI-prompt-start` page referenced in `ai-workloads-overview.mdx` does not yet exist — listed as Phase 1 gap.

**Persona coverage**: The page needs to serve primarily Persona A (Solo GPU Operator), Persona C (Infrastructure Engineer), and Persona E (AI Compute Specialist). Persona B (Pool Worker) is out of scope.

---

### Source: `v2/orchestrators/_workspace/reviews/guides/operator-considerations/review.md`

**Status**: Non-canonical review artifact.

**Persona coverage**:
- Persona A: `operator-rationale` covers decision matrix, cost breakdown, decision flowchart.
- Persona B: `operator-rationale` routes lower-commitment operators toward `join-a-pool`.
- Persona C: `operator-rationale` plus `business-case` cover transition from inflation-first thinking to fee-driven commercial operation.
- Persona D: all three pages support a full commercial and strategic evaluation.
- Persona E: `operator-rationale` plus `business-case` cover the video-versus-AI decision and capability selection concerns.

**Gaps addressed**: operator-rationale opened with self-referential copy (rewritten). business-case had only a stub placeholder (rewritten from scratch). protocol-influence was a stub (expanded). Visual decision aid added. Community and forum links added across all three pages.

---

### Source: `v2/orchestrators/_workspace/research/Orchestrators_new/brief-10-ai-pipelines-output.md`

**Status**: Content brief for AI pipelines page.

**Known outdated content**:
- Pipeline list: was 3 pipelines, now 10 including audio-to-text, image-to-text, segment-anything-2, text-to-speech, upscale, llm, live-video-to-video.
- aiModels.json schema: old format missing `url`, `token`, `capacity`, `optimization_flags`, `currency`, `pixels_per_unit`.
- No LLM pipeline coverage (added 2025).
- No Cascade / live-video-to-video coverage (added Q4 2024).
- No remote worker / BYOC setup documentation.
- warm model guidance: was "one warm model per pipeline" — now "one warm model per GPU".
- AI runner image: `-aiRunnerImage` flag was deprecated; replaced with `-aiRunnerImageOverrides`.

---

### Source: `v2/orchestrators/_workspace/research/Orchestrators_new/05-setup-paths.md`

**Status**: Content brief for setup-paths.mdx.

**Expected gaps (likely needs to be written from scratch)**:
- Clear one-line description of each path in operator language (not Foundation marketing language)
- Concrete LPT and hardware figures per path

---

### Source: `docs-guide/_workspace/02_Design-Specification/01_PRD-Docs/index.md`

**Status**: Product Requirements Document for docs.

**Orchestrator activation test**: P4 — "An orchestrator can go from zero to a running, earning node." Result: **PARTIAL** — documentation exists but gaps in AI setup and remote signing.

**Goal G4**: "More and better orchestrators — GPU operators running diverse, reliable, well-staked nodes with wide AI model coverage." Supply quality determines whether the network can fulfil demand.

---

### Source: `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/02_02.-Personas-Journey-Alignment/index.md`

**Status**: Persona journey alignment.

**Orchestrator persona known gaps**:
- Stage 5 — AI setup quickstart documentation is fragmented
- Stage 8 — Remote signer documentation requires SME confirmation (PRs #3791, #3822)

**Orchestrator activation test**: "Tester goes from zero to a registered orchestrator that processes at least one job and shows earnings in the Explorer."

---

### Source: `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/01_01.-Audience-&-Persona-Mapping-&-Definitions/index.md`

**Status**: Audience and persona mapping.

**Orchestrator dual role reality**: "Per Shtuka Research: orchestrators function as LPT Delegates who vote in the DAO and receive LPT issuance proportional to their delegated stake. Compute fee income and delegator attraction are connected — delegators evaluate both fee-sharing rates and operational competence. Critical data gaps exist around cost benchmarking (score 2/5), demand forecasting (score 1/5), and treasury strategy (score 0/5)."

**Pain point**: "Docs treat them as 'GPU runners' when they're actually multi-function participants. AI model selection alone is a complex decision that affects earnings, and it's not well-documented."

---

### Source: `v2/orchestrators/_workspace/canonical/review/05-section-structure.md`

**12 sections with entry/exit states and lifecycle stages**:

| # | Section | lifecycleStage | Entry state | Exit state |
|---|---|---|---|---|
| S1 | Which path is mine? | `discover` | Arrived at tab; has GPU; doesn't know which path | Identified path; navigated to correct start |
| S2 | Is this viable? | `evaluate` | Identified candidate path | Go/no-go decision made |
| S3 | How does work reach me? | `evaluate` | Decided to proceed | Can describe income streams, routing, cuts |
| S4 | Prerequisites | `setup` | Chosen path | Hardware confirmed, wallet funded, LPT staked (if needed) |
| S5 | Get your node running | `setup` | Prerequisites confirmed | Running, registered node |
| S6 | Join as a pool node | `evaluate` | Identified as pool candidate | Decision made on pool vs solo vs AI-first |
| S7 | Set pricing and cuts | `setup` | Node installed | Pricing set with justification |
| S8 | Set up AI pipelines | `build` | go-livepeer running; AI not configured | aiModels.json configured; capabilities advertised |
| S9 | Verify your node | `setup` | Set up and configured | Discoverable, priced, first job received |
| S10 | Monitor and operate | `operate` | Live and receiving work | Monitoring routine in place |
| S11 | Optimise earnings | `optimise` | Operating with monitoring | Identified key variable, made targeted adjustment |
| S12 | Diagnose and fix | `troubleshoot` | In production but experiencing a problem | Root cause diagnosed, fix applied or queued |
