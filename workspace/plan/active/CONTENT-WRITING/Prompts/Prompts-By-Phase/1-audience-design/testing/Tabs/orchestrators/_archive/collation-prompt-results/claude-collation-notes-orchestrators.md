# Orchestrators — Collation Notes

**Synthesised from**: chatgpt-v4-orchestrators-audience-design.md · CLAUDEWEB-v4-orchestrators-audience-design.md · PERPLEXITY-TAB__Orchestrators_TASK__Execute_the_audience-desi.md · v4-orchestrators-audience-design-agent.md
**Date**: 2026-03-23

---

## Terminology Conflicts

### [DEFINITION CONFLICT: Capability Advertisement — LIP-92 reference]

- **Claude Web** included LIP-92 in the terminology lock with the definition "AI model registry and capability discovery mechanism" sourced from the glossary, and marked it `[verify-against: https://github.com/livepeer/LIPs]`.
- **ChatGPT** explicitly flagged this as a source conflict in its Addendum: the LIPs index shows LIP-92 = Treasury Contribution Percentage, not AI capability discovery. ChatGPT excluded the LIP-92 mapping from the lock on this basis.
- **Perplexity** and the **agent run** did not include LIP-92 as a lock term; both covered the capability advertisement mechanism without assigning it a LIP number.

**Canonical decision**: The `Capability Advertisement` term is included in the canonical lock without reference to LIP-92. The LIP-92 definition in the glossary is flagged as a potential error requiring human resolution before content is written.

**Action required**: Verify the correct LIP number for AI capability discovery against `https://github.com/livepeer/LIPs` before any content references a LIP number for this mechanism.

---

### [DEFINITION CONFLICT: Pool Worker / Pool Node — canonical form]

All four runs applied the `deprecated-terms.md` directive and used "pool node" rather than "pool worker." However, Claude Web flagged that the existing glossary entry for "Pool Worker" lists "Pool node" as "Also known as" — suggesting both forms are still in circulation in documentation.

**Canonical decision**: "Pool node" is the canonical term per `deprecated-terms.md`. The glossary entry is an inconsistency that should be corrected.

**Action required**: Confirm "Pool node" as the single canonical form in the glossary and remove the "Pool Worker" primary entry, or confirm that "Pool Worker" is intentionally retained as a cross-reference redirect.

---

## Excluded Personas

**Delegator-turned-operator and Evaluating operator merged**: These appeared as separate personas in some runs (agent run: "Evaluating operator"; Perplexity: "Stake-First Evaluator"; Claude Web: "governance-aware delegator-turned-operator"; ChatGPT: implied within Capital-constrained persona). Their arriving states and path needs are sufficiently similar (evaluation-only; may not proceed to setup; exit at S2–S4) to merge into one canonical archetype with two sub-variants. Both sub-variants have the same structural path through the section structure.

No archetypes were fully excluded; all had consensus ≥ 2.

---

## Excluded Sections

The following sections appeared in single runs and were not carried into the canonical structure:

**Governance and treasury section** (agent run only — S12 "Understand governance and treasury"): This section covered how on-chain governance affects orchestrator economics (treasury cut rate, active set size changes, governance vote participation). Excluded because: (a) single-run; (b) governance depth belongs in the About tab per the cross-tab gate; (c) its function is partially served by S9 (day-to-day operations) referencing governance-controlled parameters and pointing outbound to About. If analytics show a meaningful proportion of return-visit orchestrator traffic is governance-related, this section should be revisited.

**Separate "Set your pricing and cuts" from "Install and configure"** — some runs combined pricing/cuts into the install section; others split them. The canonical structure keeps them separate (S5 = install/register; S6 = pricing/cuts) because pricing is a deliberate ongoing decision, not a one-time installation step. A returning operator tuning pricing should not re-read installation instructions.

---

## Structural Disagreements

### Section order: economics/concept before or after install?

- **Claude Web**, **Perplexity**, and the **agent run** placed two concept sections (what orchestrators do + how gateways select) before the install sections.
- **ChatGPT** also placed economics and selection concepts before setup but compressed them differently.
- **Canonical decision**: Concept sections (S2, S3) precede prerequisites (S4) and install (S5). Rationale: the economics and selection mechanism are decision-enabling content — a reader who doesn't understand what stake weight and MaxPrice do cannot make informed setup choices. This is consistent across all four runs in spirit even where section names differed.

### AI inference section placement

- **Claude Web** and **Perplexity**: AI configuration appears mid-sequence as part of a "configure workload" section that covers video + AI + dual mode together (one section, multiple sub-paths).
- **ChatGPT** and the **agent run**: AI configuration has a dedicated separate section that comes after the base node install.
- **Canonical decision**: Dedicated section (S7) following the base install (S5) and pricing (S6). Rationale: the AI configuration surface (aiModels.json, capability advertisement, warm model behaviour) is substantively different from video configuration. Merging them into one instruction section would create a page that attempts to serve two non-overlapping reader states simultaneously. Claude Web's own Addendum acknowledged this: "Section 8 (AI inference) is scoped tightly to configuration and activation." The canonical structure makes that scope explicit with a discrete section.

### Troubleshooting section

- **Claude Web** and **Perplexity** included dedicated troubleshooting sections.
- **ChatGPT** distributed troubleshooting guidance within the optimisation section.
- **Agent run** included a dedicated troubleshooting section.
- **Canonical decision**: Dedicated S12 troubleshooting section (3/4 consensus). The run that distributed troubleshooting into optimisation acknowledged it was a conscious trade-off; the canonical structure errs toward explicitness for return-visit operators who arrive with a specific problem.

### Pool node path — own section vs. routing callout vs. sub-path in install

- **Perplexity**: Dedicated S9 "Joining as a pool node" section (`evaluate` / `guide`).
- **Claude Web**: Pool node sub-path within S5 (install) via a routing callout.
- **ChatGPT**: Pool path addressed within disambiguation + economics sections.
- **Agent run**: Pool node path within S4 (install), flagged as candidate for split.
- **Canonical decision**: The pool node path is handled within S5 (install) via a clearly labelled sub-path or routing callout, with S4 explicitly stating the no-LPT-required condition for this path. The dedicated pool node section (Perplexity) was not adopted because pool node setup is thin enough that it does not warrant a full section — the decision and architecture content fits within S5 with a routing callout. S5 carries the design flag `[⚠ may need to split]` if pool node setup steps prove substantially longer than the solo setup steps during detailed design.

---

## Single-Run Flags

**Governance and treasury section** (agent run): Not included in canonical structure. See Excluded Sections.

**BYOC (Bring Your Own Container)** (Claude Web only): Not included in canonical lock. Claude Web's Addendum flagged it as a potential future section within the AI configuration surface. The canonical structure leaves this as a detailed design decision for S7.

**Slashing** (agent run only as lock term): Not included in canonical lock as a standalone term. The concept is covered implicitly within the staking/bonding definition (bonded stake is at risk) and within S2 (what orchestrators do and what can go wrong). If content authors determine slashing conditions require explicit coverage, it should be added to S2 body content.

**"Siphon" term** (agent run Addendum): The agent run flagged this glossary term as internally inconsistent (appears to conflate two unrelated concepts). Not included in canonical lock. Flagged for human review of the glossary entry.

**Unbonding period** (agent run only): Not included in canonical lock as a standalone term. The concept is relevant to operators who want to exit or reduce stake and should appear in S4 (prerequisites) body content as a practical note.

**AI runner as subprocess term** (agent run only): Not included in canonical lock due to high staleness risk per veracity-sources. The functional concept (subprocess that runs AI compute) is covered under the go-livepeer and aiModels.json definitions. Verify current architecture against latest tagged release before using "AI runner" in content.

---

## Open Items (require human resolution before Phase 2)

### O1 — LIP-92 definition conflict
The glossary definition of LIP-92 as the AI capability registry mechanism appears to conflict with the LIPs index (where LIP-92 = Treasury Contribution Percentage per ChatGPT's web check). This conflict is in the primary reference material. **Resolution required**: verify the correct LIP number for AI capability discovery before any content references a LIP number. See Terminology Conflicts above.

### O2 — Pool node canonical term confirmation
All runs applied "pool node" per `deprecated-terms.md`, but the glossary still lists "Pool Worker" as the primary entry. **Resolution required**: confirm whether "Pool node" is now the single canonical form across all documentation surfaces, and update the glossary entry to remove "Pool Worker" as primary or redirect it explicitly.

### O3 — S5 pool node sub-path vs. split
S5 (install, configure, and register) carries a design flag `[⚠ may need to split]` because the solo operator and pool node setup paths have different flag sets, different registration steps, and different prerequisites. Whether this should be one section with routing callouts or two separate instruction pages depends on the content length and complexity of each path. **Resolution required during detailed design**: if the pool node instruction path is more than ~40% the length of the solo path, split into two pages.

### O4 — "Running operator" volume score
The running operator persona (return visitor) was included with consensus 3/4 (the ChatGPT run did not explicitly separate return-visitor behaviour as a distinct persona). Volume was scored 3 (high) based on the reasoning that return-visit operators represent a continuous stream of reference and troubleshooting traffic. If analytics data becomes available, this assumption should be validated. A lower volume score would not affect section structure but would affect content investment priority.

### O5 — Active set size
All four runs flagged the "top 100" active set size as a governance-controlled value that must not be hard-coded in content. This is consistently marked `[verify-live: explorer.livepeer.org]`. **Resolution required at content writing time**: every content brief for sections that mention active set eligibility must include an instruction to check the live value rather than state "100."

---

## Run Quality Notes

**ChatGPT** — Strongest on structural reasoning and section framing. The "path choice first" structural principle (build around disambiguation before protocol concepts) was the most clearly articulated of the four runs. Section field quality was high. Terminology lock was the most concise, erring toward inclusion of only operationally essential terms. Identified the LIP-92 definition conflict via web check — a concrete example of value added by web access. Weakness: slightly less thorough on AI inference path depth; the AI configuration surface was less granular than the other three runs.

**Claude Web** — Strongest on terminology lock completeness and depth. The structured lock table with explicit definitions and source attributions was the most usable format. Identified the BYOC pattern and flagged it appropriately as a future design decision. Pool worker candidate path validation was the most detailed, including the specific flag (`orchSecret`, `orchAddr`) implications. Weakness: the "configure workload" section conflated video and AI configuration in a way that would create an unworkable instruction page; the agent run and ChatGPT handled this more cleanly.

**Perplexity** — Strongest on the arriving question framing and persona arriving-state specificity. The "wrong-path risks" enumeration was a useful complement to the entry blocker analysis. The dedicated pool node section was the clearest articulation of why pool participation is an evaluate/guide scenario rather than a self-service instruction path. Weakness: terminology lock contained a few terms (ETH, Arbitrum) that are too foundational to treat as Livepeer-specific locks; including them added noise without adding clarity.

**Agent run** — Strongest on lock completeness and verification discipline. The term-by-term source authority table was the most rigorous approach to lock derivation, and the explicit flagging of the "Siphon" term as inconsistent was a useful quality signal. The tie-breaking reasoning for primary persona was the most explicit. Weakness: term count (30) exceeded the other runs substantially, including some terms (unbonding period, slashing, round, BondingManager) that are better handled as body content notes than as lock terms. The governance section (S12) was a single-run addition that did not meet the inclusion threshold.

**Overall calibration note**: For future tabs, the Claude Web approach to structured lock tables with explicit definitions and source attributions produces the most directly usable Phase 2 input. The ChatGPT structural reasoning on section organisation is the most useful complement. Consider running these two approaches together as the primary pair for tabs with complex multi-path audiences.
