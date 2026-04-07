# Orchestrators — Collation Notes

**Synthesised from**: v4-orchestrators-audience-design-agent.md, CLAUDEWEB-v4-orchestrators-audience-design.md, chatgpt-v4-orchestrators-audience-design.md, PERPLEXITY-TAB_Orchestrators run
**Date**: 2026-03-23

---

## Terminology Conflicts

**No unresolvable definition conflicts requiring human decision were found.** The following near-conflicts were resolved by applying the most precise definition across runs:

- **Active set size**: Runs 2 (Claude Web) and 4 (Perplexity) mentioned "100" as the current active set size, with both immediately flagging it as governance-controlled. Run 1 (Agent) and Run 3 (ChatGPT) deliberately omitted the number and only described the concept. Canonical decision: the number is not included in the Terminology Lock definition. The concept is locked with `[verify-live: explorer.livepeer.org]`. Do not hard-code a size in content.

- **Pool node vs Pool worker**: All 4 runs correctly used "pool node" as the current term and "pool worker" as deprecated per deprecated-terms.md. Run 2 (Claude Web) noted the glossary still uses "Pool Worker" as the main entry with "Pool node" as "also known as." Canonical term: **pool node**. Flag for glossary team: the glossary entry for "Pool Worker" should be updated to make "pool node" the primary entry.

- **LIP-92**: Run 1 (Agent) noted the glossary defines LIP-92 as the "AI model registry and capability discovery mechanism" and flagged it as unverified against the LIP text. Run 3 (ChatGPT) explicitly flagged a direct conflict — its Addendum states it found evidence that LIP-92 covers "Treasury Contribution Percentage," not AI capability discovery, and excluded the specific LIP-92 mapping from its lock on those grounds. Run 4 (Perplexity) included Capability Advertisement in its lock without referencing LIP-92 by number. Run 2 (Claude Web) included LIP-92 as the verify source for Capability Advertisement without asserting the glossary's specific content.

  **[DEFINITION CONFLICT: LIP-92 — Run 3 (ChatGPT) asserts LIP-92 = Treasury Contribution Percentage, contradicting the glossary's claim that LIP-92 covers AI capability discovery / AIServiceRegistry. Requires human resolution before any content references LIP-92 by number.]** The canonical Terminology Lock includes Capability Advertisement as a concept but does not assert LIP-92's content. LIP-92 is not used as a term in the lock.

- **Staking vs Bonding**: Runs 3 and 4 used "Staking" and "Bonding" as near-synonyms with a note that "bonding" is the protocol-specific term. Run 1 and Run 2 used "staking" as the user-facing concept and "bonding" only in the BondingManager contract context. Canonical decision: the lock uses "stake" and "bond" in line with Product Context; content should introduce both terms with the note that they refer to the same action.

- **BYOC (Bring Your Own Container)**: Run 2 (Claude Web) included this as a named term in its Terminology Lock. No other run included it. Excluded from canonical lock per single-run rule — it is an implementation-layer detail, not a foundational concept for the audience design phase. Flagged in Single-Run Flags section below.

---

## Excluded Personas

**Governance-aware delegator-turned-operator**: Appeared in Run 2 (Claude Web) as "The governance-aware delegator-turned-operator" and in Run 4 (Perplexity) as "The Stake-First Evaluator" — 2-run consensus. Both runs scored this persona at Total 4 (Run 2: Vol=1, Depth=1, Impact=2; Run 4: Vol=1, Depth=1, Impact=2). Excluded from the canonical persona table because it does not represent a distinct setup path with no overlap — this persona's needs are fully served by S2 (what orchestrators earn) and S4 (prerequisites), which the primary persona structure already includes. Included in the canonical table only if Impact ≥ 3 or the path is otherwise unserved. Both runs confirmed the concern this persona raises is covered within existing sections and explicitly noted no additional section is needed for this archetype. *The concern this persona raises is covered within S2 and S4.*

**Note on persona table**: The canonical table contains 5 personas. Persona 5 (Live operator / returning operator) appeared explicitly in Run 3 (ChatGPT) and Run 4 (Perplexity). Runs 1 and 2 addressed this persona's use case via the operations and troubleshooting sections without explicitly naming a return-visit persona — their section structures serve this persona regardless. Included in canonical table at consensus score 3 (strong) with Impact=2, as the return-visit / operational reference use case is a distinct arriving state that affects section design.

---

## Excluded Sections

**Section: "Is solo operation viable for me?" (Run 3, ChatGPT — Section 2)**: Run 3 proposed a standalone section answering "Can I realistically compete independently?" with `purpose: choose` and `pageType: guide`. No other run produced an equivalent standalone section — the other three runs folded this decision into the disambiguation section (S1) or the economics/concept section (S2 in canonical). Excluded because: (a) only 1 run included it as a standalone section, and (b) its function is fully served by the canonical S1 (disambiguation — routes solo vs pool decision) and canonical S2 (economics overview — gives the reader the information to make a viability judgment). *Its function is served by S1 and S2.*

**Section: "How gateways select orchestrators" as standalone (Run 2, Claude Web — Section 3)**: Run 2 proposed a standalone section explaining gateway selection mechanics. Runs 1, 3, and 4 folded this content into either the economics concept section or the prerequisites/setup flow. The canonical S3 ("How the network pays you and routes work") incorporates gateway selection mechanics, making the standalone version redundant. Merged into S3. *Its function is served by S3.*

**Section: "Operator reference" (Run 3, ChatGPT — Section 11)**: Run 3 included an "Operator reference" section with `purpose: reference`, `pageType: reference`. No other run included a dedicated reference section as part of the canonical tab structure — the other runs routed reference needs to the Resource HUB. Excluded from canonical structure because: (a) only 1 run included it; (b) the collation prompt explicitly excludes portal/index/resources elements from the audience design scope; (c) the Resource HUB cross-tab route serves this function. The on-demand section of the Ideal Journey captures all the reference lookup needs this section was designed to serve. *Its function is served by the Resource HUB cross-tab route and the on-demand journey entries.*

**Section: "Scale your setup: O-T split and pools" (Run 2, Claude Web — Section 11)**: Run 2 proposed a standalone section for scaling architecture. Run 3 (ChatGPT) proposed two sections covering this (Sections 9 and 10). Runs 1 and 4 folded scaling and architecture into the optimisation and troubleshooting sections or addressed it within the existing section set. Canonical decision: scaling and O-T split content is accommodated within S11 (optimise) and S9 (pool node path), which together cover the full scaling decision surface without requiring a dedicated standalone section. The function of Run 2's Section 11 is split between S9 and S11 in the canonical structure. *Its function is served by S9 and S11.*

---

## Structural Disagreements

**Disagreement 1: Placement and scope of payment mechanics**

- Run 1 (Agent): Payment mechanics embedded in the concept section (S2 — "How does this network work for me?").
- Run 2 (Claude Web): Separated into its own concept section (Section 3 — "How gateways select orchestrators") after an economics section (Section 2).
- Run 3 (ChatGPT): Payment mechanics in Section 3 ("How does work reach me and how do I get paid?"), after a viability/choice section.
- Run 4 (Perplexity): Section 3 ("How the network pays you") is a standalone concept section.

**Canonical decision**: A standalone concept section covering both routing mechanics and payment flow is warranted — 3 of 4 runs produced it as a distinct section. Canonical S3 ("How the network pays you and routes work") combines gateway selection logic and payment mechanics. This is the more specific and complete version across all runs.

**Disagreement 2: Pricing and cuts — standalone section vs merged**

- Run 1 (Agent): "Set my price" is Section 6 (standalone `configure` / `guide`).
- Run 2 (Claude Web): "Set your pricing and cuts" is Section 6 (standalone `configure` / `guide`).
- Run 3 (ChatGPT): Pricing and cuts merged into "How do I stand up the first working node?" — folded into setup.
- Run 4 (Perplexity): "Configuring your workload" (Section 6) covers pricing alongside workload config.

**Canonical decision**: Pricing and cuts as a standalone `configure` / `guide` section (canonical S6) — 2 runs explicitly separated it, 2 merged it. Separated because: (a) the pricing decision is complex enough (MaxPrice interaction, reward/fee cut trade-offs, competitive benchmarking) to warrant its own reader question and exit state; (b) pricing applies to both video and AI paths and sits logically after node setup is confirmed; (c) merging it with setup instruction creates a section that serves two distinct jobs (J2: complete setup; J5: protect earnings through correct cut settings).

**Disagreement 3: AI pipeline section position**

- Run 1 (Agent): S5 — AI pipelines follow immediately after general node setup.
- Run 2 (Claude Web): Section 8 — AI inference setup is later in the structure, after verification.
- Run 3 (ChatGPT): Sections 9 and 10 — AI expansion is in the optimise tier, not the setup tier.
- Run 4 (Perplexity): Section 6 — AI configuration is merged into workload configuration alongside video setup.

**Canonical decision**: S7 — AI pipelines placed after node setup (S5), pricing (S6), and before verification (S8). Reasoning: (a) for AI-only operators, configuring AI pipelines is a prerequisite to verification — you cannot verify AI work is being received before pipelines are configured; (b) placing AI config in the optimise tier (as Run 3 did) misrepresents it as optional enhancement rather than a primary setup path for AI operators; (c) placing it after verification (as Run 2 did) requires AI-only operators to attempt verification before they are configured. S7 placed between S6 (pricing) and S8 (verify).

**Disagreement 4: Pool node — standalone section vs routing callout**

- Runs 1 and 2: Pool node path addressed via routing callouts within setup sections and persona path validation notes; no standalone section for the pool node path itself.
- Run 3 (ChatGPT): Pool architecture addressed in scale sections (9 and 10), not as a standalone evaluation section.
- Run 4 (Perplexity): Section 9 — "Joining as a pool node" as a standalone `explain` / `guide` section in the evaluate tier.

**Canonical decision**: S9 — standalone `orient` / `guide` section for the pool node path. This is a unique path with different prerequisites (no LPT), different mechanics, and a different reader question than the solo paths. The pool node candidate needs to understand the pool model and make a decision before any setup steps are relevant. `pageType: guide` per Run 4; `purpose: orient` assigned because the section's primary function is routing this persona to the correct next step (contacting a pool operator), not instructing them in a setup procedure.

**Disagreement 5: lifecycleStage for disambiguation section (S1)**

- Runs 1, 2, and 4 assigned `discover` to the disambiguation section.
- Run 3 (ChatGPT) assigned `evaluate` to the disambiguation section.

**Canonical decision**: `discover`. The reader has not yet made any decision at S1 — they are identifying which path exists for them. `discover` is the correct canonical enum value for a section where the reader is orienting themselves before evaluation begins.

---

## Single-Run Flags

**BYOC (Bring Your Own Container)** — appeared in Run 2 (Claude Web) only as a Terminology Lock term. Excluded from canonical lock per single-run rule. The concept may become relevant during detailed design if the AI section (S7) needs to cover custom container deployment. Flagged here for content author attention during S7 design.

**"Governance and treasury" section** — Run 1 (Agent) included S12 ("Understand governance and treasury") as a standalone concept section. No other run included a governance section. Excluded per single-run rule. The governance mechanics that affect orchestrators (treasury cut rate, active set size changes) are surfaced in S10 (day-to-day operations) and the on-demand items. If governance engagement is a primary use case for a meaningful operator segment, consider adding this section in a future iteration.

**"Delegator attraction" section** — Run 1 (Agent) included S7 ("Attract delegators") as a standalone `configure` / `guide` section. Run 2 (Claude Web) included reward cut / fee cut optimisation within the pricing section (Section 6) and the optimise section (Section 10). Runs 3 and 4 did not produce a standalone delegator attraction section. Canonical decision: reward cut and fee cut trade-offs are covered within S6 (pricing and cuts) — the reader question in S6 explicitly includes "what reward cut and fee cut are reasonable?" The delegation attraction angle is folded into S11 (optimise) for operators who want to grow their total bonded stake. No standalone section needed.

**"Segment" as terminology lock term** — Run 2 (Claude Web) included "Segment" in its anchoring questions as a term with network-specific meaning. Not included in any run's formal TERMINOLOGY_LOCK. Excluded from canonical lock as a single-run mention. Content authors should note that "segment" (~2-second video chunk as atomic transcoding unit) may need to be defined in body content even if it is not a lock term.

---

## Open Items (require human resolution before Phase 2)

**[OPEN-1] LIP-92 content conflict**: Run 3 (ChatGPT) explicitly asserts LIP-92 = Treasury Contribution Percentage, contradicting the glossary's claim that LIP-92 covers the AI capability discovery / AIServiceRegistry mechanism. This cannot be resolved by the collation rules. Resolution required: verify LIP-92 content against https://github.com/livepeer/LIPs before any content references LIP-92 by number. Until resolved, no content should assert LIP-92's content. The canonical document references "Capability Advertisement" as a concept without citing a LIP number.

**[OPEN-2] Pool node sub-path in S5**: All four runs noted that pool node setup is meaningfully different from solo setup but no run fully resolved whether this warrants splitting S5 into two pages or adding a routing callout within S5. The canonical structure carries a design flag but does not specify which approach to take. Human decision required during detailed design: (a) split S5 into "Solo operator setup" and "Pool node setup" as separate instruction pages, or (b) add a clearly labelled callout block within S5 directing pool node candidates to pool-specific flag instructions. Decision affects section count (splits would take the total to 13).

**[OPEN-3] Active set size**: The number of orchestrators in the active set is governance-controlled and was not hard-coded in any run. Content authors must not publish a specific number without a live-check note referencing explorer.livepeer.org. If a number needs to appear (e.g., "currently up to X orchestrators"), it must be flagged for review at every publication cycle.

**[OPEN-4] go-livepeer release version for content writing**: Run 3 (ChatGPT) confirmed via web search that the latest tagged go-livepeer release was v0.8.10 as of 2026-03-10. All CLI flag names, configuration file schemas, and AI pipeline types should be verified against this specific tagged release before content is written. The release version used for verification should be recorded in Phase 2 output.

**[OPEN-5] Glossary entry for "Pool Worker"**: The glossary still lists "Pool Worker" as the primary entry with "Pool node" as "Also known as." The canonical term is "pool node" per deprecated-terms.md. The glossary should be updated to make "pool node" the primary entry and deprecate "Pool Worker." Assign to glossary maintainer before content is written.

---

## Run Quality Notes

**Run 1 — Agent (v4-orchestrators-audience-design-agent.md)**
Strongest run for terminology rigour and verification flag coverage. Produced the most comprehensive TERMINOLOGY_LOCK (30 terms with full source derivation tables) and the most explicit treatment of why each term was included or excluded. Section structure was precise and well-annotated. The 12-section structure closely matches the canonical output. Main limitation: the AI pipeline section (S5) was positioned very early in the structure, which creates a sequencing issue for readers who are not on the AI path. The tie-break reasoning for primary persona was well-argued. Addendum flags were highly detailed and useful for collation. Recommend using this model for terminology-heavy phases.

**Run 2 — Claude Web (CLAUDEWEB-v4-orchestrators-audience-design.md)**
Strongest run for persona depth and path validation specificity. Produced the most detailed persona path validation with explicit content requirements per section. Identified the pool worker sub-path gap in S5 most clearly. Included BYOC as a term (single-run, excluded) and "Segment" in anchoring questions (not in lock). The separate gateway selection section was a valid structural choice but was merged in collation. The "delegator-turned-operator" persona was well-argued but scored too low for canonical inclusion. Recommend using this model for persona and path validation phases.

**Run 3 — ChatGPT (chatgpt-v4-orchestrators-audience-design.md)**
Most distinctive structural proposal — produced 11 sections (vs 12 in other runs) by folding AI expansion into the optimise tier rather than the setup tier. This was the only run to include a dedicated "Operator reference" section (excluded in collation). The LIP-92 conflict flag in the Addendum is the most important single fact from this run — it directly contradicts the glossary and requires human verification. The `purpose: choose` token used in Section 2 is a non-canonical enum value (should be `evaluate` or `orient`). The arriving question was the most technically oriented of the four. Recommend using this model when you want to surface structural alternatives and potential source conflicts.

**Run 4 — Perplexity (PERPLEXITY-TAB_Orchestrators run)**
Cleanest execution of the brief's sequential structure. Section table was clearly formatted with consistent field values. Good separation of concerns between evaluation sections and setup sections. The pool node section (S9) as a standalone `evaluate` / `guide` was the most explicit treatment of this path across all runs and influenced the canonical decision to include S9 as a standalone section. Arriving question was the most conversational and reader-centric. Addendum included suggested external sources. Minor issue: the arriving question placed the journey at `evaluate` rather than `discover` — resolved by the collation arriving question synthesis. Recommend using this model for well-structured, clean-output phases.
