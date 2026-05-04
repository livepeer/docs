# LPT / Delegators — Collation Notes

**Synthesised from**: `chatgpt-v4-delegators-audience-design.md`, `claude-web-v4-delegators-audience-design.md`
**Date**: 2026-03-23

---

## Terminology Conflicts

No definition conflicts were found. The following near-conflicts were resolved by applying decision rules:

- **Reward Cut / Fee Cut directionality**: Claude run explicitly noted the counterintuitive direction (higher value = less reaches delegators) and required directional explanation. ChatGPT run included the terms without the directional note. Canonical lock adopts Claude's directional warning — it is essential for author guidance and was not contradicted by the ChatGPT run.
- **Round**: Claude run defined it explicitly ("approximately one Arbitrum block-day; not a calendar day"). ChatGPT run listed it implicitly through context. Canonical lock adopts Claude's definition.
- **Vote Detachment**: Claude run named and defined this as a distinct term with a `[must explain]` flag. ChatGPT run covered the concept within Governance and Section 9 but did not lock it as a discrete term. Included in canonical lock — it names a Livepeer-specific behaviour with no industry-standard synonym and a genuine reader confusion risk.
- **Community Treasury vs Treasury**: Both runs used both phrasings. Merged to `Treasury` in canonical lock; "Community Treasury" noted as acceptable informal variant. No content implication.
- **Inflation terms**: Both runs excluded the composite "Inflation Model" / "Dynamic Inflation" term independently, citing `deprecated-terms.md`. Canonical lock uses component terms (Inflation Rate, Target Bonding Rate). No conflict.

---

## Excluded Personas

No archetypes were excluded where consensus ≥ 2. Two single-run archetypes are included with justification:

- **L1 Stranded** (Claude run only; consensus 1/2) — Included because: (a) Impact = 3 in the originating run; (b) the path it represents — LPT on Ethereum mainnet — creates a hard-stop blocker with no substitute section; (c) no other persona or on-demand category covers the bridge-before-bond sequence. The ChatGPT run implicitly acknowledged the bridging prerequisite in its entry blocker list but did not surface it as a distinct persona. The concern is structural, not merely informational — excluding the persona would mask the hard-stop blocker.
- **Token Participation Evaluator** (ChatGPT run only; consensus 1/2) — Included because: (a) the path it represents — pre-commitment evaluation — is a real and distinct entry state not covered by the First Bond Seeker (who already holds LPT with intent); (b) the Claude run's Section 2 ("What LPT is and why staking it matters") implicitly serves this persona; (c) excluding it would leave J1 partially unserved at the section level. Impact = 2 — included at rank 5 with lower weight; does not add sections.

---

## Excluded Sections

- **"Should I Put This LPT to Work?" / "What LPT is and why staking it matters"** (ChatGPT: S2 "Should I Put This LPT to Work?"; Claude: S2 "What LPT is and why staking it matters") — These are the same functional section, retained as canonical S2: "What bonding actually means." Both runs agreed this section is required; the naming and framing were synthesised.

- **"What Drives My Outcome?" (ChatGPT S4)** — Function absorbed into canonical S6 ("How rewards accumulate"). ChatGPT ran this as a standalone "explain" section between Orchestrator selection and the how-to-choose section. Claude folded equivalent content into the post-bonding rewards explanation. Canonical decision: merge into S6. The content is more useful after bonding (when the reader has a real position to apply it to) than during evaluation. The design flag on S6 (`[may need to split]`) preserves the option to separate if the section becomes overloaded.

- **"What Must Be Ready Before I Act?" (ChatGPT S6)** — Function absorbed into canonical S5 ("Completing the first bond"). ChatGPT separated pre-bond setup from the bond action itself. Claude merged them. Canonical decision: merge. The prerequisite checklist and the bond sequence belong in one instructional flow — splitting creates an unnecessary two-section read for a single task. Exit state for S5 confirms both conditions (prerequisites met + bond live).

- **"Submitting a governance proposal" (Claude S10)** — Single-run; 1/2 consensus. Impact = 2 in originating run. Excluded because: its job (J9) is already served by canonical S9 (Governance participation) and S10 (Treasury and protocol funding). The originating run itself flagged this section as a candidate for demotion to a sub-page within S9. The canonical structure demotes it accordingly — proposal submission is noted as sub-page content within S9 rather than a standalone top-level section. *Its function is partially served by S9 and the open item below.*

---

## Structural Disagreements

### 1. Section count: 10 (ChatGPT) vs 11 (Claude)

- ChatGPT run: 10 sections, no bridging section, outcome-drivers section as standalone.
- Claude run: 11 sections, explicit bridging section (S3), proposal submission section (S10), no standalone outcome-drivers section.
- **Canonical decision**: 10 sections. Bridging is retained (S3) because the L1 Stranded blocker is a hard-stop that requires a dedicated instruction section. Proposal submission is demoted to sub-page content within S9. Outcome drivers are merged into S6.
- **Rationale**: Retaining S3 resolves a hard technical blocker (LPT on L1 cannot be bonded until bridged); the section cannot be demoted to on-demand or cross-tab without leaving The L1 Stranded without a sequenced path. Demoting proposal submission preserves the full governance path while holding the section count to the target range — a low-volume path (Token Participation Evaluator / Governance Entrant, Impact = 2) does not warrant a top-level section when its job is already substantially covered by S9 and its proposer-bond mechanics are flagged as an open item requiring live verification.

### 2. Section position of rewards/outcome explanation

- ChatGPT run: placed "What Drives My Outcome?" at S4, before Orchestrator selection — framing it as evaluation content.
- Claude run: placed "How rewards work" at S6, after bonding — framing it as operational context for a live position.
- **Canonical decision**: post-bonding placement (S6). The design flag from ChatGPT is retained (`[may need to split]`).
- **Rationale**: The Orchestrator selection section (S4) already gives the reader the comparison criteria they need (reward call rate, commission split). Positioning a full rewards-mechanics explanation before Orchestrator selection front-loads conceptual content onto a reader who is in an evaluation state, not an operational one. Placing it after bonding (S6) means the reader has a real position to apply the numbers to, making the explanation actionable rather than abstract. The design flag preserves the option to split S6 into evaluation-level and operational-level content if detailed design reveals overload.

---

## Single-Run Flags

- **L1 Stranded persona** — included despite 1/2 consensus; see Excluded Personas section.
- **Token Participation Evaluator persona** — included despite 1/2 consensus; see Excluded Personas section.
- **Vote Detachment** — included in Terminology Lock from Claude run only; justified because it names a Livepeer-specific override mechanic with genuine reader confusion risk and no industry synonym.
- **Round** — explicit definition from Claude run only; included because the Arbitrum-block-day vs calendar-day distinction is a real source of reader error.
- **Proposer Bond** — flagged `[verify-live]` in Open Items; not included in Terminology Lock. Single-run (Claude only); value is governance-controlled and must be verified before any page cites it.

---

## Open Items (require human resolution before Phase 2)

### 1. Proposer Bond threshold — BLOCKING (for proposal-submission sub-page content only)

The Claude run flagged a Proposer Bond value (100 LPT minimum bonded balance to submit a governance proposal) cited in the glossary. This is a governance-controlled parameter.

**Resolution path**: Verify current threshold against the LivepeerGovernor contract on Arbiscan before asserting any value in S9 or sub-page proposal-submission content. Content authors must not hard-code "100 LPT." This blocks only the proposal-submission sub-page within S9 — all other sections are unaffected.

---

### 2. Active Set size — NON-BLOCKING

Both runs flagged that the glossary cites 100 Orchestrators as the Active Set size. This is governance-controlled.

**Resolution path**: Verify current Active Set size via Livepeer Explorer (explorer.livepeer.org) before any page references a specific number. The term is locked; the value is not.

---

### 3. Treasury Reward Cut Rate current value — NON-BLOCKING

Both runs flagged that the glossary cites 10% as the current Treasury Reward Cut Rate (LIP-92). This is governance-controlled.

**Resolution path**: Verify against the LIPs repo and Treasury dashboard before any page cites a specific percentage. The term is locked; the value is not.

---

### 4. Thawing Period current duration — NON-BLOCKING

Both runs flagged that thawing timing is governance-controlled. The glossary cites a value but it is not stable.

**Resolution path**: Verify current duration via Livepeer Explorer before any page cites a specific number of rounds or days. The term is locked; the value is not.

---

### 5. S6 split decision — NON-BLOCKING

Canonical S6 ("How rewards accumulate") carries a `[Design flag: may need to split]`. The section covers both the mechanics of per-round reward accumulation (J2 — pre-commitment understanding) and the operational driver analysis for an active position (J10 — ongoing monitoring context). If detailed content design reveals these are two materially different reader states, S6 should be split into S6a (reward mechanics — evaluate stage) and S6b (outcome drivers — operate stage). This would push total sections to 11, still within the 8–12 range.

**Resolution path**: Page author or IA lead makes the split/merge call during detailed content brief for S6. No external verification required.

---

## Run Quality Notes

### ChatGPT v4

**Key strength**: Entry blocker analysis was the most explicit and operationally precise of the two runs. Example: the specific sequencing constraint "reader cannot complete first activation until wallet, chain, and transaction prerequisites are in place — resolved by Section 6 before Section 7" was more granular than the equivalent in the Claude run, and directly informed the canonical blocker list.

**Key weakness**: The arriving question ("I have LPT, or I am about to get it — what is the right participation path for me right now, and what is the next safe action?") read more as a design brief summary than a real reader voice. Specificity was structural rather than motivational — it captured the design intent but not the reader's actual mental state at arrival.

---

### Claude (Web) v4

**Key strength**: Terminology lock was more precise on reader-confusion points, particularly the directional explanation for Reward Cut / Fee Cut and the explicit naming and definition of Vote Detachment. Both additions directly reduce the risk of content authors writing sections that create rather than resolve reader confusion.

**Key weakness**: Section count (11) was at the upper end of the range, partly because Section 10 (Submitting a governance proposal) was included for a low-volume persona (Impact = 2) whose path was already substantially served by adjacent sections. The originating run flagged this itself but did not act on the flag. This inflated the section count without adding canonical value.

---

### Model pairing recommendation

For a follow-on tab of similar complexity — multiple distinct participation paths, governance mechanics, and bridging/chain prerequisites — the highest-quality input would be produced by **Claude (primary) + ChatGPT cross-check on entry blockers**.

Specific reason: Claude's strength in terminology precision and reader-confusion flagging is most valuable for tabs where terminology carries non-obvious directional or behavioural implications (as Reward Cut, Vote Detachment, and Thawing Period all do here). ChatGPT's entry blocker granularity is a reliable cross-check on section ordering that Claude tends to handle more implicitly. The combination prevents both terminology underspecification (Claude risk: absent) and section-order underspecification (ChatGPT risk: present in the arriving question framing). For a tab that is primarily reference/operational rather than multi-path, a single Claude run with a structured blocker checklist would suffice.
