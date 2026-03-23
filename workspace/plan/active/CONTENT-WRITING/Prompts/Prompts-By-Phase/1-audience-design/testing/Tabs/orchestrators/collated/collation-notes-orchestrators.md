# Orchestrators — Collation Notes

**Synthesised from**:
- `v4-orchestrators-audience-design-agent.md` (Agent run — referred to as RUN-A)
- `CLAUDEWEB-v4-orchestrators-audience-design.md` (Claude.ai web run — referred to as RUN-B)
- `chatgpt-v4-orchestrators-audience-design.md` (ChatGPT run — referred to as RUN-C)
- `PERPLEXITY-TAB_ Orchestrators_TASK_ Execute the audience-desi.md` (Perplexity run — referred to as RUN-D)

**Date**: 2026-03-23

---

## Phase 1 Inventory Summary

### RUN-A (Agent)
- **Term count**: 30 terms; most expansive lock; includes BondingManager, TicketBroker, slashing, inflation, round, unbonding period, service URI, performance score, warm model, cold model, BYOC not included in lock but flagged
- **Arriving question**: "I have GPU hardware — how do I connect it to the Livepeer network and start earning from it?"
- **Personas**: 5 — Solo video operator (9), Solo AI operator (9), Pool node operator (7), Dual mode operator (7), Evaluating operator (6)
- **Primary persona**: Solo video transcoding operator (tie-broken over AI — rationale: video is more established; LPT blocker most significant)
- **Self-identification**: Dedicated disambiguation section (S1)
- **Entry blockers**: LPT stake, ETH for gas, VRAM capacity, publicly reachable service URI
- **Jobs**: 7
- **Section count**: 12 (S1–S12); includes S12 Governance section
- **Persona path validation**: Pool node path flagged as requiring explicit variant in S4; AI operator path requires S2 to clarify active set not required for AI

### RUN-B (Claude Web)
- **Term count**: 24 terms; includes BYOC as explicit lock term; most structured term table; includes Warm Model/Cold Start as combined entry
- **Arriving question**: "I have GPU hardware — how do I connect it to Livepeer, start earning fees, and make sure I don't miss out on jobs or rewards?"
- **Personas**: 5 — GPU-ready newcomer (9), AI inference specialist (8), Scaling operator (7), Pool worker candidate (6), Governance-aware delegator-turned-operator (4)
- **Primary persona**: GPU-ready newcomer
- **Self-identification**: Dedicated disambiguation section
- **Entry blockers**: ETH for gas, LPT for video path, capability advertisement for AI path, pool connection for pool worker
- **Jobs**: 7
- **Section count**: 12 (S1–S12); includes S11 Scale/O-T split and S12 Troubleshoot
- **Persona path validation**: Pool worker path flagged as requiring routing callout within S5; delegator-turned-operator requires cut-setting framing from operator perspective in S6

### RUN-C (ChatGPT)
- **Term count**: 21 terms in lock header; most compact; includes Orchestrator, ETH, and Arbitrum explicitly; excludes BondingManager, TicketBroker, slashing, round, unbonding period from lock
- **Arriving question**: "Given my hardware, capital, and goals, what is the right way for me to run supply on Livepeer — and what do I need to do first to start earning work reliably?"
- **Personas**: 5 — Independent operator choosing path (9), Existing video operator expanding to AI (8), Capital-constrained operator (8), Pool operator scaling (7), Live operator tuning (7)
- **Primary persona**: Independent operator choosing a viable path
- **Self-identification**: Dedicated disambiguation section
- **Entry blockers**: Path ambiguity, capital barrier (LPT), reachability barrier, operational barrier (payment mechanics)
- **Jobs**: 7
- **Section count**: 11 sections (S1–S11); includes "Operator reference" section (S11)
- **Persona path validation**: All personas unblocked; Section 9 must clearly separate "add AI" from "add scale"

### RUN-D (Perplexity)
- **Term count**: 22 terms; includes ETH, Arbitrum, Staking (explicit), Delegation (explicit); excludes BondingManager, TicketBroker, slashing, round explicitly
- **Arriving question**: "I have idle GPU hardware — can I earn money from it by connecting it to this network, and what would I actually need to do?"
- **Personas**: 5 — The GPU Operator (9), The AI Compute Provider (8), The Running Operator (7), The Pool Node Candidate (6), The Stake-First Evaluator (4)
- **Primary persona**: The GPU Operator
- **Self-identification**: Dedicated disambiguation section
- **Entry blockers**: LPT stake (video), ETH for gas (AI path), pool membership (pool node), capability advertisement (AI compute provider)
- **Jobs**: 7 (J1–J7)
- **Section count**: 12 sections (S1–S12); includes dedicated S7 "Advertising AI capabilities" and S9 "Joining as a pool node"
- **Persona path validation**: All personas unblocked; §6 flagged as potential split during detailed design; §9 pool node is evaluate+guide not instruction

---

## Terminology Conflicts

No definition conflicts were found. The following near-conflicts were resolved by applying decision rules:

**Near-conflict 1: "Warm Model" vs "Warm Model / Cold Start" (combined entry)**
- RUN-A uses "warm model" and "cold model" as two separate lock terms
- RUN-B combines them as "Warm Model / Cold Start" as a single lock term
- RUN-C and RUN-D use "Warm Model" only
- Decision: Canonical lock retains "warm model" as one term and "cold model" as a separate term (RUN-A treatment), as the distinction between the two states is materially relevant to configuration choices. Flagged `[verify-against: go-livepeer]`.

**Near-conflict 2: "BYOC" inclusion**
- RUN-B: explicitly included in lock (24th term)
- RUN-A: excluded from lock; mentioned in Addendum as a depth question for detailed design
- RUN-C: not mentioned
- RUN-D: not mentioned
- Decision: Single-run term (RUN-B only). Does not qualify for canonical lock under the 2-run consensus rule. Excluded. [single-run: not included]. The need is flagged as a detail design question within the AI pipeline section.

**Near-conflict 3: "Staking" vs "Stake / Bonding" as explicit lock term**
- RUN-A: uses "stake weight" as a lock term; "staking" appears as action but not a distinct lock entry
- RUN-B: uses "Stake / Bonding" as a combined lock entry
- RUN-C: does not include staking as a separate term; uses "Active Set" and "stake weight" to cover the concept
- RUN-D: includes "Staking" and "Delegation" as explicit separate lock terms
- Decision: The concept is universally present; the split between "staking" as an action term and "stake weight" as the ranking variable is meaningful. Canonical lock retains both: "staking / bonding" (the action) and "stake weight" (the ranking variable). Two-run consensus for each. Noted as `[2-run consensus]`.

**Near-conflict 4: "ETH" and "Arbitrum" as explicit lock terms**
- RUN-C and RUN-D: explicitly include ETH and Arbitrum in the term lock
- RUN-A and RUN-B: treat these as assumed background; do not include them as lock terms
- Decision: ETH included in canonical lock as `[2-run consensus]` — its specific meaning as *settlement currency* (not the blockchain itself) is relevant to this audience's arriving state. Arbitrum included as `[2-run consensus]` — its protocol-specific meaning (where contracts are deployed, where gas costs are incurred) is non-obvious to GPU operators arriving from proof-of-work or non-EVM contexts.

**Near-conflict 5: "BondingManager" and "TicketBroker" as lock terms**
- RUN-A: includes both as named-contract lock terms with verify flags
- RUN-B: includes both (TicketBroker in lock, BondingManager referenced in Stake/Bonding entry)
- RUN-C: neither term appears in the lock; referenced only in passing
- RUN-D: neither term appears in the lock
- Decision: 2-run consensus for both. Include as `[2-run consensus]` terms with `[verify-against]` flags. The contract names are operationally relevant (operators interact with them via reward calls and ticket redemptions).

**Near-conflict 6: "Slashing", "round", "unbonding period" as lock terms**
- RUN-A: all three included in lock
- RUN-B, RUN-C, RUN-D: none of the three appear in the lock
- Decision: Single-run terms. "Slashing" is an operationally important risk but is adequately covered within the "staking / bonding" definition context. "Round" (~22 hours) is a meaningful operational cadence term but appeared in only one lock. "Unbonding period" is governance-controlled and operationally relevant but single-run. All three excluded from canonical lock as `[single-run: not included]`. The underlying operational concerns are covered by section-level content requirements, not the terminology lock. Flagged as open item for human review.

---

## LIP-92 Handling Across Runs

This is a known v4 testing issue. Document of how each run handled LIP-92:

- **RUN-A (Agent)**: Explicitly flagged LIP-92 in Addendum. Noted that the glossary assigns LIP-92 to "AI model registry and capability discovery mechanism" but this was not verified against the LIPs repo. Excluded LIP-92 from the TERMINOLOGY_LOCK entirely on grounds that LIP numbers are governance identifiers, not conceptual terms operators must master. Marked the glossary's claim as `[verify-against: https://github.com/livepeer/LIPs]`.

- **RUN-B (Claude Web)**: Explicitly flagged LIP-92 in Addendum. Noted that the glossary assigns LIP-92 to AI capability discovery. Marked as `[verify-against: https://github.com/livepeer/LIPs]` within the Capability Advertisement term entry. Did not include LIP-92 as a standalone lock term.

- **RUN-C (ChatGPT)**: Explicitly identified the LIP-92 conflict as a direct source discrepancy in the Addendum. Stated: "the current LIPs index shows LIP-92 = Treasury Contribution Percentage" — conflicting with the glossary's claim that LIP-92 covers AI capability discovery. Excluded the specific LIP-92 mapping from the lock and treated the glossary claim as incorrect for this item. This is the most specific treatment of the issue across all four runs.

- **RUN-D (Perplexity)**: Did not explicitly mention LIP-92 by number. Included "Capability Advertisement" in the lock with `[verify-against: go-livepeer]` but did not surface the LIP number conflict.

**Collation decision**: RUN-C's identification of the conflict (LIP-92 = Treasury Contribution Percentage, not AI capability discovery) is the most operationally significant finding across all four runs. The canonical output does not cite LIP-92 in any term definition. The Capability Advertisement term is carried through with a `[verify-against: https://github.com/livepeer/LIPs]` flag, and the LIP-92 number is explicitly excluded from all canonical content. This is logged as OPEN ITEM 1 (BLOCKING for any section that references the AI capability registry by LIP number).

---

## Excluded Personas

**Archetype: Governance-aware delegator-turned-operator**
- Appeared in: RUN-B (scored Vol:1, Depth:1, Impact:2, Total:4)
- Near-equivalent in RUN-D: "The Stake-First Evaluator" (Vol:1, Depth:1, Impact:2, Total:4) — same underlying state
- Consensus score: 2 (RUN-B and RUN-D)
- Decision: Include with consensus score 2 — but as a thin persona. Their path is served entirely within existing sections (economics overview and prerequisites). No additional sections required. Included in canonical persona list at Rank 5.

No archetypes were excluded entirely. All five archetypes appearing across runs achieved consensus score ≥ 2 when grouped by arriving state rather than by name.

---

## Excluded Sections

**"Operator Reference" section (RUN-C, S11)**
- Function: Quick-lookup reference for CLI parameters, live values, and term definitions
- Appeared in: RUN-C only
- Consensus: 1
- Exclusion rationale: The collation prompt's single-run section rule requires that the job served by this section be otherwise completely unserved before it qualifies for inclusion. The reference/return-visit job (J7 — "look up exact economic and operational levers") is served by (a) the on-demand content categories across all four runs, which universally include CLI flag reference, pricing benchmarks, and governance parameters, and (b) the cross-tab route to Resource HUB. A single-run reference section is therefore not the only coverage of this job. Excluded per the single-run section rule. Its function is served by the on-demand categories and Resource HUB cross-tab route. Logged as `[single-run: not included]`.

**"Is solo operation viable for me?" section (RUN-C, S2 — dedicated viability assessment)**
- Function: Decision gate between solo and pool participation before any setup begins
- Appeared in: RUN-C explicitly (as S2 "Is solo operation viable for me?"); RUN-A covers this within S1 disambiguation and S2 concept overview; RUN-B covers within S1 disambiguation; RUN-D covers within S2 hardware evaluation
- Decision: The function of this section (helping the reader decide solo vs pool vs AI path) is served by the disambiguation section (S1) in all four runs. This is not a missing section — it is a naming/scoping variant. The canonical S1 disambiguation section is scoped to include the viability-assessment function. See Structural Disagreement 2.

**"Understand governance and treasury" section (RUN-A, S12)**
- Function: Explaining on-chain governance effects on orchestrator economics (treasury cut rate, active set size, governance votes)
- Appeared in: RUN-A only
- Consensus: 1
- Exclusion rationale: The governance/treasury job (understanding how governance affects earnings) is served within the on-demand content categories (all runs include governance vote schedule and treasury contribution rates as on-demand items) and the cross-tab route to About. A dedicated standalone governance section does not meet the single-run inclusion threshold — removing it leaves the job partially covered by on-demand categories and cross-tab routing, which qualifies as coverage under the collation rules. Excluded. Its function is partially served by on-demand categories and the About cross-tab route. [single-run: not included]

---

## Structural Disagreements

### Disagreement 1: Section count and AI pipeline section placement

**What each run said**:
- RUN-A: S5 is a dedicated "Set up AI pipelines" section placed after S4 (node setup). AI setup is entirely separate from video setup. 12 sections total.
- RUN-B: S8 "Add AI inference to your node" — placed after S7 (verify). AI is an addition to a working video node. 12 sections total.
- RUN-C: S6 "Configuring your workload" covers video, AI, and dual mode in one section; S9 "How do I add AI, dual mode, or scale-out?" handles expansion. 11 sections total.
- RUN-D: S6 "Configuring your workload" and S7 "Advertising AI capabilities" are separate. 12 sections total.

**Canonical decision**: AI pipeline configuration is a dedicated section (not merged into general workload config). Placed after the node is verified as running.

**Reasoning**: RUN-C's merged workload config section (video + AI + dual mode in one section) creates an entry-state problem: a reader on the video-only path who reads a section that also covers AI configuration will encounter content that does not apply to them, introducing confusion at a critical setup moment. The AI inference path has a materially different configuration surface (aiModels.json vs CLI flags for video, capability advertisement vs active set membership) that warrants separation. RUN-A, RUN-B, and RUN-D all produced a separate AI section — 3-run consensus for separation. Placement after verification (RUN-B treatment) is preferred over RUN-A's placement before verification because an operator should confirm their base node is working before layering in AI configuration.

---

### Disagreement 2: Disambiguation section scope — routing only vs routing + viability

**What each run said**:
- RUN-A: S1 disambiguation routes between four paths (solo video, solo AI, dual mode, pool node). Does not include viability assessment.
- RUN-B: S1 disambiguation routes between three paths (solo video, AI/dual, pool worker). Does not include viability assessment.
- RUN-C: S1 routes path; S2 "Is solo operation viable for me?" is a separate section that handles the economic go/no-go decision for the solo path specifically.
- RUN-D: S1 disambiguation routes paths; S2 "Is this worth it for your hardware?" handles the hardware-fit and income evaluation.

**Canonical decision**: Disambiguation section (S1) handles path routing only. Economics and hardware evaluation is a separate section (S2).

**Reasoning**: RUN-C and RUN-D both identified that readers who have identified their path still need to evaluate whether that path is economically and technically viable for their hardware and capital before investing setup time. Merging this into the disambiguation section would overload S1 — the disambiguation section's function is orientation (purpose: `orient`, pageType: `navigation`), not evaluation. Placing economic evaluation in S1 would require it to serve two distinct reader questions simultaneously, violating the one-section-one-question principle. The 2-run pattern (RUN-C, RUN-D) of separating these functions is adopted. RUN-A and RUN-B implicitly cover viability within their concept overview sections (S2), which aligns with this split.

---

### Disagreement 3: Pool node path — dedicated section vs routing callout vs within scaling section

**What each run said**:
- RUN-A: Pool node path handled as a variant within S4 (node setup) with a flagged need for explicit branching; no dedicated pool section
- RUN-B: Pool worker candidate path flagged as missing sub-path within S5 (install); fix is a routing callout in S5 directing to pool-specific flags; pool scaling covered in S11
- RUN-C: S9 "How do I add AI, dual mode, or scale-out architecture?" handles pool architecture as part of a scaling/expansion section; no dedicated pool-only section for the newcomer path
- RUN-D: S9 "Joining as a pool node" is a dedicated section for the pool node candidate path — purpose: evaluate+guide, not instruction. Appears early (after verification)

**Canonical decision**: Dedicated section for pool node participation — scoped as decision + architecture (not full instructions), positioned after prerequisites.

**Reasoning**: RUN-D's treatment is the most precise: a pool node candidate is fundamentally different from a solo operator expanding to a pool. The pool node candidate persona has a consensus score of 2 (moderate) and an Impact score of 2–3 across runs. Their path requires a decision about whether pool participation suits them AND the architectural knowledge to engage with a pool operator — this cannot be adequately served by a routing callout within a setup section designed for solo operators, nor by a scaling section designed for operators who already have a working solo node. RUN-D's observation that the pool node section must be evaluate+guide (not instruction) is correct: pool setup requires a specific pool operator's credentials and cannot be fully self-documented. Dedicated section adopted. Positioned after prerequisites but before solo setup to allow pool node candidates to exit cleanly without reading the solo setup section.

---

### Disagreement 4: Operations and optimisation — combined vs separate sections

**What each run said**:
- RUN-A: S9 (monitor and operate) and S11 (improve earnings and efficiency) are separate; S10 (diagnose and fix) is also separate. Three sections covering operate/optimise/troubleshoot.
- RUN-B: S9 (monitor performance and earnings) and S10 (optimise pricing, performance, and delegation) are separate; S12 (troubleshoot) is separate. Three sections.
- RUN-C: S7 (run day to day), S8 (get more work or better returns), and S12 (troubleshoot) are separate. Three sections.
- RUN-D: S10 (day-to-day operation), S11 (improving your earnings), and S12 (troubleshooting) are separate. Three sections.

**Canonical decision**: Three sections covering operate, optimise, and troubleshoot separately — unanimous across all four runs.

**Reasoning**: No disagreement exists on the separation itself. All four runs independently arrived at three distinct sections for these three lifecycle stages. This is noted here to document the unanimous consensus rather than leave it implicit.

---

## Single-Run Flags

**"Operator Reference" section** — appeared in RUN-C only. Excluded (see Excluded Sections). The return-visit lookup job is served by on-demand categories and Resource HUB cross-tab route.

**"Governance and treasury" section** — appeared in RUN-A only. Excluded (see Excluded Sections). Governance coverage is served by on-demand categories (governance vote schedule, treasury contribution rates) and About cross-tab route.

**"Slashing", "round", "unbonding period" as terminology lock terms** — appeared in RUN-A only. Excluded from canonical lock as single-run terms. The operational concerns these terms cover (risk of stake loss, reward cycle cadence, withdrawal delay) are addressed at the section-content level, not the lock level.

**"BYOC" as a lock term** — appeared in RUN-B only. Excluded from canonical lock. Flagged in Addendum of the canonical output as a detail design question for the AI pipeline section.

**Cold model as a separate lock term** — appeared in RUN-A (alongside warm model). Retained in canonical lock because the warm/cold distinction is material to AI operator configuration decisions and because "cold model" is the necessary complement to the canonical "warm model" term. Justified inclusion despite single-run status because removing it from the lock while retaining "warm model" would leave the warm/cold distinction incomplete, and the underlying concept (cold start latency affecting performance score and earnings) appears in all four runs' AI section content.

---

## Open Items (require human resolution before Phase 2)

### 1. LIP-92 identity conflict — BLOCKING

The glossary assigns LIP-92 to "AI model registry and capability discovery mechanism." RUN-C explicitly identified that the LIPs index assigns LIP-92 to "Treasury Contribution Percentage." These cannot both be correct.

**Impact**: If any Phase 2 content cites LIP-92 in the context of AI capability discovery, it may be citing the wrong LIP number. If LIP-92 is in fact the treasury cut LIP, the correct LIP number for AI capability discovery must be identified before it is cited in any content.

**Resolution path**: Human reviewer checks `https://github.com/livepeer/LIPs` directly for the LIP-92 text and the correct LIP number for AI capability registry/discovery. Update the glossary entry and canonical terminology lock accordingly. This item is BLOCKING for any section that references the AI capability registry by LIP number. It is NON-BLOCKING for sections that describe capability advertisement without citing a specific LIP number.

---

### 2. Active set size value — NON-BLOCKING

The glossary states active set size is 100. This is a governance-controlled parameter and is therefore live state. All four runs flagged this for verification (`[verify-live: explorer.livepeer.org]`).

**Impact**: Content cannot hard-code "100" without a live-check annotation. If the governance value has changed, content citing "100" will be incorrect.

**Resolution path**: Human reviewer checks current active set size at `https://explorer.livepeer.org` before any content citing this value is published. Add a live-check annotation to the value wherever it appears. NON-BLOCKING — Phase 2 can proceed using "governance-controlled number" as a placeholder; the specific number must be verified before publication.

---

### 3. Pool node term canonicalisation — NON-BLOCKING

`deprecated-terms.md` says "Pool worker" is renamed to "Pool node." The orchestrators glossary still uses "Pool Worker" as the primary entry with "Pool node" listed as "Also known as." RUN-A, RUN-B, RUN-C, and RUN-D all normalise to "Pool node" in the canonical lock. The glossary should be updated to reflect "Pool node" as the primary term before content is published using this term.

**Resolution path**: Governance team or docs lead confirms "pool node" is the single canonical term and updates the glossary primary entry accordingly. NON-BLOCKING — canonical output uses "pool node" consistently; glossary update needed before publication.

---

### 4. go-livepeer AI configuration surface — NON-BLOCKING

RUN-A, RUN-B, RUN-C, and RUN-D all flag `aiModels.json`, warm model behaviour, AI runner subprocess, and capability advertisement as high-staleness, requiring verification against the latest tagged go-livepeer release. At time of v4 testing, RUN-C identified the latest release as v0.8.10 (2026-03-10).

**Resolution path**: Phase 2 content authors for the AI pipeline section (S-AI) verify all configuration flags, aiModels.json schema, and capability advertisement behaviour against the latest tagged go-livepeer release before writing instructional content. NON-BLOCKING for section structure; BLOCKING for instructional content within the AI section.

---

### 5. Primary persona tie-break (video vs AI path) — NON-BLOCKING

RUN-A identified a scoring tie between solo video operator (9) and solo AI inference operator (9). RUN-A broke the tie in favour of video on grounds that video is the more established path and the LPT blocker is the most significant structural constraint. The other three runs did not score these as competing primaries — they used a broader "independent GPU operator" framing that subsumes both paths.

**Resolution path**: Analytics data on actual tab entry patterns (video-focused arrivals vs AI-focused arrivals) would allow an evidence-based decision. If AI inference arrivals now exceed video transcoding arrivals as the primary use case, the primary persona designation should be reconsidered and section ordering may need to change (prerequisites section may need to lead with AI path rather than video path). NON-BLOCKING — current canonical structure serves both paths; the decision affects emphasis and framing within sections rather than section structure.

---

## Run Quality Notes

### RUN-A (Agent)

**Key strength**: Most rigorous terminology lock construction. The per-term table with source authority, definition, and verify flag for all 30 terms is the most complete and traceable lock across the four runs. The explicit identification of the "Siphon" term inconsistency in the glossary (internally inconsistent definition covering two unrelated concepts) is a finding that would have been missed without this level of source scrutiny. This run's terminology lock is the best input for any tab with high glossary staleness risk or where multiple configuration surfaces need separate term treatment.

**Key weakness**: Section S12 (governance and treasury) is a single-run section that does not survive the collation rule. The run included it without adequately testing whether the job was already served elsewhere. This reflects a general tendency to err toward completeness (adding coverage) rather than toward structure economy (trusting cross-tab routing and on-demand categories to carry peripheral content). On tabs where the governance surface is genuinely central to operator decisions, this tendency would be a strength; on this tab it resulted in one section that needed exclusion.

---

### RUN-B (Claude Web)

**Key strength**: Most precise persona path validation. The per-persona identification of exactly which section must contain which piece of information (e.g., "S6 must explicitly address setting cuts from the operator's perspective, not the delegator's" for the delegator-turned-operator persona) is the most actionable path validation output. This level of specificity gives Phase 2 content authors a concrete brief for each section rather than general guidance. Most valuable for tabs where multiple personas converge on the same sections with different knowledge needs.

**Key weakness**: The BYOC term was included in the lock as the 22nd term despite appearing in only one run, without adequate justification that it meets the "distinct participation path with no substitute" bar. BYOC is an advanced deployment pattern that belongs in detailed design notes, not the audience design lock. This represents a tendency to lock terms that are more relevant to implementation than to the audience design phase.

---

### RUN-C (ChatGPT)

**Key strength**: Only run to explicitly identify and name the LIP-92 source conflict. "The current LIPs index shows LIP-92 = Treasury Contribution Percentage" — this is a specific, verifiable factual finding that none of the other three runs produced. This run also produced the most concise arriving question ("Given my hardware, capital, and goals, what is the right way for me to run supply on Livepeer — and what do I need to do first to start earning work reliably?") which most precisely captures the decision-orientation of this audience. Best at surfacing source-level conflicts in the terminology phase.

**Key weakness**: The "Operator Reference" section (S11) is a single-run section that does not survive the collation rule. The run included it with rationale ("the orchestrator audience clearly needs a dense quick-reference surface") but did not test whether the job was already served by on-demand categories and the Resource HUB cross-tab route. The section was a reflexive response to a real audience need (return-visit lookups) but should be served by the Resource HUB, not by a dedicated section within the tab's primary structure.

---

### RUN-D (Perplexity)

**Key strength**: Best conceptual framing of the pool node path. The explicit scoping of the pool node section as evaluate+guide (not instruction) — with the rationale that pool setup requires a specific pool operator's credentials and cannot be self-documented — is the most accurate treatment of this path's structural constraints across all four runs. This run also produced the most practically-oriented arriving question ("I have idle GPU hardware — can I earn money from it by connecting it to this network, and what would I actually need to do?") which most closely matches the literal language of this audience.

**Key weakness**: Did not surface the LIP-92 conflict despite including "Capability Advertisement" as a lock term with a `[verify-against: go-livepeer]` flag. The LIPs repo is a natural verification target for the capability advertisement mechanism; a more thorough source check would have caught the glossary's LIP-92 claim. This run generally trusts glossary claims at the "needs verification" level rather than probing for active source conflicts.

---

### Model Pairing Recommendation

For a follow-on tab of similar complexity — specifically, tabs that span multiple distinct participation paths with different configuration surfaces and where the glossary has known staleness or source-conflict risk (e.g., Gateways, Developers) — the recommended pairing is **RUN-A (Agent) for terminology lock construction + RUN-C (ChatGPT) for source conflict identification**.

Specific reason: RUN-A's per-term source-tracing catches configuration surface staleness and glossary reliability issues; RUN-C's explicit verification against primary sources catches factual conflicts (like LIP-92) that RUN-A's source-tracing alone would flag as "verify needed" without naming the specific discrepancy. Together they cover both the surface-level terminology lock and the deeper factual-conflict layer. RUN-B's persona path validation output is the most actionable for Phase 2 writers and should be treated as the path-validation reference; RUN-D's structural framing (particularly for decision-gated paths like pool participation) provides the strongest section-purpose reasoning.

If a single model must be chosen: **RUN-C (ChatGPT)**, because its unique identification of the LIP-92 conflict is the highest-stakes finding in this tab's collation, and any model that misses a factual conflict of that type produces a lock that cannot be fully trusted without external verification of every flag. RUN-C's ability to name specific discrepancies (not just flag them for verification) reduces the verification burden significantly.
