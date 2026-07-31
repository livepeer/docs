# Part 6: Terminology Lock

**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## 48 locked terms

Consensus = how many of the 4 AI runs agreed on this definition.

### Core roles & architecture

| Term | Definition | Consensus |
|---|---|---|
| Orchestrator | GPU hardware operator who connects to Livepeer, receives compute jobs from gateways, earns ETH fees + LPT inflation rewards | 4/4 |
| Gateway | Demand-side node that routes AI/video jobs to orchestrators and issues payment. Not a generic API gateway. | 4/4 |
| Pool | Arrangement where operators with insufficient stake connect GPUs to a pool operator's orchestrator | 4/4 |
| Pool node | Operator contributing GPU capacity to a pool (replaces deprecated "pool worker") | 4/4 |
| O-T split | Orchestrator-transcoder separation: orchestrator handles protocol, worker handles GPU compute | 4/4 |

### Tokens & staking

| Term | Definition | Consensus |
|---|---|---|
| LPT (Livepeer Token) | ERC-20 staking/governance token. Required for video transcoding active set. NOT required for AI inference routing. | 4/4 |
| Active Set | Governance-controlled group of top-ranked orchestrators by bonded stake, eligible for video jobs in a round. AI routing doesn't use it. | 4/4 |
| Staking / Bonding | Locking LPT into BondingManager contract for video job eligibility and reward distribution | 2/4 |
| Stake weight | Total bonded LPT (self + delegated) determining active set rank, reward share, governance influence | 4/4 |
| Delegation | External LPT holders staking to an orchestrator, increasing its rank and reward share | 2/4 |
| ETH | Settlement currency for service fees on Livepeer (runs on Arbitrum). Required for gas. | 2/4 |
| Arbitrum | L2 network where Livepeer contracts are deployed. All on-chain ops happen here. | 2/4 |

### Economics

| Term | Definition | Consensus |
|---|---|---|
| Reward cut | % of LPT inflation rewards orchestrator retains before distributing to delegators. Set on-chain. | 4/4 |
| Fee cut | % of ETH service fees orchestrator retains before distributing to delegators. Independent from reward cut. | 4/4 |
| Reward call | On-chain `Reward()` tx submitted once per round to mint inflation share. Missing it = permanently lost. Active operational requirement. | 4/4 |
| Probabilistic micropayment (PM) | Lottery-based payment: gateways issue signed tickets; winners redeemed on-chain via TicketBroker for ETH | 4/4 |
| TicketBroker | On-chain contract handling PM ticket redemption and ETH payouts | 2/4 |
| BondingManager | On-chain contract managing staking, delegation, active set, reward distribution | 2/4 |
| pricePerUnit / pixelsPerUnit | CLI params setting transcoding price in wei per pixel unit. Gateways apply MaxPrice gate. | 4/4 |

### Workloads

| Term | Definition | Consensus |
|---|---|---|
| Video transcoding | Converting video to multiple renditions. Requires active set membership for routing. | 4/4 |
| AI inference | Running ML model on input to produce output. Routing is capability/price-based, NOT stake-based. | 4/4 |
| Dual mode | Single orchestrator handling both video and AI. Replaces deprecated "combined mode" and "hybrid." | 4/4 |

### Infrastructure

| Term | Definition | Consensus |
|---|---|---|
| go-livepeer | Official Go binary implementing all network roles. Different CLI flag combos = different roles. | 4/4 |
| Service URI | Publicly reachable URL registered on-chain. Without it, no routed work. | 4/4 |
| Performance score | Composite metric (latency x success rate) used by gateways for orchestrator selection | 4/4 |
| Capability advertisement | How orchestrators inform gateways of supported AI pipelines/models (on-chain or off-chain) | 4/4 |
| aiModels.json | Primary config file for AI orchestrators. High staleness risk — changes with releases. | 4/4 |
| Warm model | AI model pre-loaded in VRAM at startup, ready for inference without cold-start latency | 4/4 |
| Cold model | AI model NOT pre-loaded; must load on first request, incurring seconds-to-minutes latency | 1/4 |
| VRAM | GPU video memory. Determines model capacity and pipeline selection. | 4/4 |

### Excluded from lock

| Term | Why excluded |
|---|---|
| BYOC | Single-run only (RUN-B) — flagged as AI design question |
| Slashing | Single-run only (RUN-A) — operational concern covered at section level |
| Round | Single-run only (RUN-A) — same |
| Unbonding period | Single-run only (RUN-A) — same |
| Siphon | Glossary definition internally inconsistent — needs verification |
| Specific AI model names | Implementation-layer details, too volatile |

---

## Review questions

1. Are any definitions **wrong**? (Check against your knowledge of the protocol)
2. Any **missing terms** that should be locked?
3. Should any **excluded terms** actually be included? (e.g. "round" seems pretty fundamental)
4. Are the **verify flags** on the right terms? (governance-controlled values, CLI flags, contract names)
5. The LPT definition says "NOT required for AI inference routing" — is that definitively true?

---

## Existing research (raw — for reference)

Research collected 2026-03-23. Grouped by source file path. Covers all terminology definitions, glossaries, term conflicts, deprecated terms, and naming decisions found across the three searched directories.

---

### Source: `workspace/plan/active/CONTENT-WRITING/decisions/terminology-tracking.md`

**Purpose**: Cross-phase terminology tracking file. Collects terminology splits, new terms, and disambiguation candidates surfaced during audience design (Phase 1), content research (Phase 2.5), and veracity passes (Phase 7). Feeds the v7 audience design prompt.

**Terminology Decisions (locked)**:

| Term | Canonical form | Decision date | Authority | Notes |
|---|---|---|---|---|
| BYOC | Bring Your Own Container | 2026-03-23 | Human | Confirmed by human |
| NaaP | Network-as-a-Product | 2026-03-23 | Human (provisional) | Style guide confirmation pending |
| LIP-92 | Treasury Contribution Percentage | 2026-03-23 | Human | Non-blocking; verified |

**Open Terminology Items**:

| Term | Conflict description | Tabs affected | Priority | Owner |
|---|---|---|---|---|
| NaaP style guide form | Provisional: Network-as-a-Product. May also be Network as a Platform. Needs style guide check. | Gateways | LOW | Human |
| Unbonding period | 21 rounds in some sources, "21 hours" disputed — contact: Mehrdad/Rick | Delegators | BLOCKING | Human |
| Fee cut direction convention | v1 to v2 possible inversion of fee cut percentage direction | Orchestrators | HIGH | SME verification |

---

### Source: `workspace/plan/active/CONTENT-WRITING/decisions/tab-status.md`

**Gate definition for "Terminology Locked"**: All BLOCKING items resolved and recorded in `decision-registry.md`. Human confirms all BLOCKING items resolved.

**Current status**: Orchestrators Terminology Locked = not started (square).

**Content Pass Open gate** requires: Tab map exists + terminology locked + voice rules confirmed + feedback routing map exists.

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/prompt-guides-guards-resources/deprecated-terms.md`

(Canonical deprecated terms file. Identical content also at `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/input-pack/deprecated-terms.md`.)

**Deprecated Role Terms**:

| Old term | Status | Current term | Notes |
|---|---|---|---|
| Broadcaster | **Deprecated** | Gateway (operator) | "Broadcaster" appears in the Whitepaper and go-livepeer codebase because those predate the rename. Never use "Broadcaster" in new documentation. |
| Pool worker | **Renamed** | Pool node | Old term may still appear in older docs and community posts. Use "Pool node" in all new content. |
| Combined mode | **Deprecated, ambiguous** | (no single replacement) | "Combined mode" referred to running both video and AI workloads on one node, but was used inconsistently. Use "Dual mode" or "Dual-workload configuration" instead. |
| Hybrid | **Deprecated, informal** | Dual mode | Informal term for running both video and AI. Use "Dual mode" only. |
| Transcoder | **Partially deprecated** | Varies by context | In go-livepeer, "Transcoder" refers to the worker process in an O-T split. In general protocol descriptions, "Orchestrator" is the current preferred term. Do not use "Transcoder" as a synonym for "Orchestrator." |

**Conflicting Definitions (resolve before using)**:

| Term | Conflict | Resolution |
|---|---|---|
| pageType enum | Old 12-type set vs new 7-type set | New 7-type set is canonical. |
| purpose enum | Format-mirroring 16-value set vs intent-based 15-value set | Intent-based 15-value set is canonical. |
| audience tokens | Old 9-token set vs new 10-token set | New set is canonical: added `founder`, renamed `platform-builder` to `builder`. |
| "Network Participant" | Flagged with "..?" in livepeer-glossary.mdx — unclear if distinct from Protocol Actor | Avoid using. Use specific role labels (Orchestrator, Gateway, Delegator, Developer) instead. |
| DePIN | Appears twice in livepeer-glossary.mdx | Single definition: Decentralized Physical Infrastructure Networks. |
| RTMP | Appears twice in livepeer-glossary.mdx | Single definition: use the one from classified-by-tab.md. |

**High-Staleness Terms (verify before using)**:

| Term | Why it can change | Where to verify |
|---|---|---|
| Active set size (100) | Could change via governance | Explorer |
| Unbonding period | Set by governance | Explorer (BondingManager) |
| Target bonding rate (50%) | Set by governance | Delegator yield guide + LIPs |
| Inflation adjustment rate (0.00005% per round) | Set by governance | Delegator yield guide + LIPs |
| Treasury reward cut rate | Set by governance (LIP-92) | LIPs repo |
| AI pipeline types and model IDs | Change with releases | go-livepeer releases + AI docs |
| CLI flag names and defaults | Change between releases | CLI reference + latest tagged release |

**Draft Terms (incomplete definitions — do not use without verifying)**:

| Term | Issue |
|---|---|
| AI Video | No external reference; definition thin |
| Ephemeral Compute | Context thin |
| Inflation Model | Overlaps with Dynamic Inflation — use "Dynamic Inflation" instead |
| AI Gateway API | In active development; API shape may change |
| veLPT (Vote-Escrowed LPT) | Proposal not yet implemented — do not describe as existing |
| Active Set Election | Overlaps with Active Set — use "Active Set" unless referring specifically to the election mechanism |

---

### Source: `v2/orchestrators/_workspace/canonical/Frameworks.mdx` (Section 3.4)

**Section title**: Deprecated & Conflicted Terms
**Status**: Locked

**Deprecated role terms**:

| Old term | Current term | Notes |
|---|---|---|
| Broadcaster | Gateway (operator) | "Broadcaster" appears in Whitepaper and go-livepeer codebase because those predate the rename. Never use in new documentation. |
| Pool worker | Pool node | Old term may still appear in older docs. |
| Combined mode | (no single replacement) | Use "Dual mode" or "Dual-workload configuration" |
| Hybrid | Dual mode | Informal term. Use "Dual mode" only. |
| Transcoder | Varies by context | In go-livepeer, "Transcoder" = worker process in O-T split. Do not use as synonym for "Orchestrator." |

**Conflicting definitions (resolved)**:

| Term | Resolution |
|---|---|
| pageType enum | New 7-type set is canonical (not old 12-type) |
| purpose enum | Intent-based 15-value set is canonical |
| audience tokens | New 7-token set with `founder` added, `platform-builder` renamed to `builder` |
| "Network Participant" | Avoid — use specific role labels (Orchestrator, Gateway, Delegator, Developer) |
| DePIN | Single definition: Decentralized Physical Infrastructure Networks |

**High-staleness terms (verify before using)**:

| Term | Why it can change | Where to verify |
|---|---|---|
| Active set size (100) | Could change via governance | Explorer |
| Unbonding period | Set by governance | Explorer (BondingManager) |
| Target bonding rate (50%) | Set by governance | Delegator yield guide + LIPs |
| Inflation adjustment rate (0.00005% per round) | Set by governance | Delegator yield guide + LIPs |
| Treasury reward cut rate | Set by governance (LIP-92) | LIPs repo |
| AI pipeline types and model IDs | Change with releases | go-livepeer releases + AI docs |
| CLI flag names and defaults | Change between releases | CLI reference + latest tagged release |

---

### Source: `v2/orchestrators/_workspace/plans/quickstart-setup-writing-pack/reference/glossary.mdx`

(Identical content also at `v2/orchestrators/_workspace/plans/tutorial-writing-pack/reference/glossary.mdx`.)

Full orchestrator glossary page (MDX, human-authored, authoritative). Defines terms across 7 categories:

**Deployment** (3 axes): Node mode (Video / AI / Dual), Deployment type (Solo / Pool worker / Pool operator / O-T split / Siphon), Scale (Single GPU / Multi-GPU / Fleet).

**Node Mode** terms: Video (Badge blue), AI (Badge purple), Dual (Badge green). Dual mode note explicitly deprecates "Combined mode" and "Hybrid" as previous terminology. Canonical terminology: "dual mode" in headings, "dual-workload configuration" in explanatory prose.

**Deployment Type** terms: Solo operator, Pool worker, Pool operator, O-T split, Siphon.

**Protocol Terms** (Accordion): Active set, Round (~22 hours / 5760 L1 blocks), Reward call, Reward cut, Fee cut, Stake (self-stake), Delegated stake, Activation / deactivation, Service URI.

**Operational Terms** (Accordion): Orchestrator (process), Transcoder (process), AI worker / AI runner, Session, Segment, Capability, Warm model / cold model, Pipeline, BYOC, Pool.

**Economic Terms** (Accordion): PM ticket, Ticket redemption, pricePerUnit, pricePerGateway, autoAdjustPrice, Inflation rewards, Service fees, Earnings.

**Deprecated Terms** (Accordion): Broadcaster (deprecated), Combined mode (ambiguous - avoid), Hybrid (informal - use Dual Mode).

**Operational Mode Asymmetry section**: Gateways vs Orchestrators — off-chain viable for production on gateways (yes), not on orchestrators (no — testing only). Human review note in `v2/orchestrators/_workspace/reviews/guides/human-review.md` item #12 disputes this: "Off-chain IS viable for private orchestrators serving specific gateways."

---

### Source: `v2/orchestrators/_workspace/research/dual-mode-orchestrator-planning.md`

**Terminology conflict to resolve** (dual mode):

> The SKILL.md terminology section says the prose form is "dual-workload configuration" (NOT "dual mode" or "dual gateway type"). The gateway glossary uses `Dual` as the badge label. For orchestrators, the question is whether the page title and prose uses "Dual Mode" (matching Alison's instruction), "dual-workload" (matching SKILL.md prose rules), or some hybrid. This needs a decision before the draft.

**Q2 — Prose terminology (terminology ruling needed)**: Do we:
(a) use "Dual Mode" as the page title and badge label, but "dual-workload" in body prose (paralleling gateway convention), or
(b) use "Dual Mode" throughout (overriding the SKILL.md prose rule for this term)?

**Gateway precedent**: The glossary defines node type `Dual` (Badge: green) as "both video transcoding and AI inference on a single gateway node." The three-axis deployment model (operational mode / setup type / node type) gives us the vocabulary.

---

### Source: `v2/orchestrators/_workspace/reviews/guides/human-review.md`

**Terminology-related review findings from setup-options.mdx**:

| # | Issue | Human decision | Type |
|---|---|---|---|
| 2 | "Deployment type" / "how the infrastructure is organised" are vague | Use glossary terms. Say what the decision actually IS. | Terminology |
| 4 | "Pool worker" is invented terminology — no v1 precedent, not in protocol or community usage | Renamed to "pool node" across all pages and glossary | Terminology |
| 12 | Off-chain dismissed as "testing only" — glossary and earlier analysis framed off-chain as non-production. But off-chain IS viable for private orchestrators serving specific gateways. | Acknowledge off-chain as legitimate for private/specific-gateway deployments | Content |

**Patterns**:

| Pattern | Seen in |
|---|---|
| **Invented terminology** — terms created without checking v1/protocol/community | setup-options |
| **Off-chain dismissed** — legitimate deployment treated as testing-only | setup-options, glossary |

---

### Source: `v2/orchestrators/_workspace/canonical/review/00-review-guide.md`

Part 6 (this file) described as: "48 locked terms with definitions." Review question: "Are the definitions accurate? Any missing? Any wrong?"

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/collated/collation-notes-orchestrators.md`

**Terminology Conflicts section**:

No definition conflicts were found. The following near-conflicts were resolved by applying decision rules:

**Near-conflict 1: "Warm Model" vs "Warm Model / Cold Start" (combined entry)**
- RUN-A uses "warm model" and "cold model" as two separate lock terms
- RUN-B combines them as "Warm Model / Cold Start" as a single lock term
- RUN-C and RUN-D use "Warm Model" only
- Decision: Canonical lock retains "warm model" as one term and "cold model" as a separate term (RUN-A treatment), as the distinction between the two states is materially relevant to configuration choices. Flagged `[verify-against: go-livepeer]`.

**Near-conflict 2: "BYOC" inclusion**
- RUN-B: explicitly included in lock (24th term)
- RUN-A: excluded from lock; mentioned in Addendum as a depth question for detailed design
- RUN-C, RUN-D: not mentioned
- Decision: Single-run term (RUN-B only). Does not qualify for canonical lock under the 2-run consensus rule. Excluded. Flagged as detail design question within AI pipeline section.

**Near-conflict 3: "Staking" vs "Stake / Bonding" as explicit lock term**
- RUN-A: uses "stake weight" as a lock term; "staking" appears as action but not distinct lock entry
- RUN-B: uses "Stake / Bonding" as a combined lock entry
- RUN-C: does not include staking as separate term; uses "Active Set" and "stake weight" to cover concept
- RUN-D: includes "Staking" and "Delegation" as explicit separate lock terms
- Decision: Canonical lock retains both: "staking / bonding" (the action) and "stake weight" (the ranking variable). Two-run consensus for each.

**Near-conflict 4: "ETH" and "Arbitrum" as explicit lock terms**
- RUN-C and RUN-D: explicitly include ETH and Arbitrum
- RUN-A and RUN-B: treat these as assumed background
- Decision: ETH included as `[2-run consensus]` — its specific meaning as settlement currency (not the blockchain itself) is relevant to this audience. Arbitrum included as `[2-run consensus]` — its protocol-specific meaning (where contracts are deployed, where gas costs are incurred) is non-obvious to GPU operators arriving from proof-of-work or non-EVM contexts.

**Near-conflict 5: "BondingManager" and "TicketBroker" as lock terms**
- RUN-A: includes both as named-contract lock terms with verify flags
- RUN-B: includes both
- RUN-C and RUN-D: neither term appears
- Decision: 2-run consensus for both. Include with `[verify-against]` flags. The contract names are operationally relevant.

**Near-conflict 6: "Slashing", "round", "unbonding period" as lock terms**
- RUN-A: all three included in lock
- RUN-B, RUN-C, RUN-D: none appear
- Decision: Single-run terms. All three excluded from canonical lock as `[single-run: not included]`. Underlying operational concerns covered by section-level content requirements. Flagged as open item for human review.

**LIP-92 Handling Across Runs**:

- RUN-A: Excluded LIP-92 from TERMINOLOGY_LOCK on grounds LIP numbers are governance identifiers. Marked glossary claim as `[verify-against: https://github.com/livepeer/LIPs]`.
- RUN-B: Did not include LIP-92 as standalone lock term.
- RUN-C: Identified direct source discrepancy — "the current LIPs index shows LIP-92 = Treasury Contribution Percentage" conflicting with glossary claim that LIP-92 covers AI capability discovery.
- RUN-D: Did not explicitly mention LIP-92.
- Collation decision: RUN-C's identification is the most operationally significant finding. Canonical output does not cite LIP-92 in any term definition. Capability Advertisement term carried with verify flag; LIP-92 number explicitly excluded from all canonical content. Logged as OPEN ITEM 1 (BLOCKING for any section referencing AI capability registry by LIP number).

---

### Source: `workspace/plan/active/CONTENT-WRITING/plan-canonical.md`

**Relevant status entries**:

- "veracity to glossary feedback loop (Phase 7 of veracity-pass.md) — built"
- "Phase 11 prompts: portal-navigator-generator, faq-generator, faq-sourcing-guide, **glossary-finalizer** — DEFERRED (first tab 70%+ through Phase 6)"
- "Terminology tracking file — not yet created (needed for v7 prompt)" [note: now created at `decisions/terminology-tracking.md`]

**Structural issue**: "Glossary authority clarified (user correction): `resources/glossary.mdx` = human-made, reviewed, authoritative. `resources/compendium/glossary.mdx` = AI-generated, unverified — must be reviewed against human version before any content is trusted."

---

### Source: `v2/orchestrators/_workspace/canonical/checks.mdx` (Section 2)

**Check 2.11**: "Terminology locked and consistent — Uses terms from the locked terminology set (BYOC, NaaP, LIP-92 etc.). No deprecated or conflicted terms. Check `decisions/terminology-tracking.md`."

**Content concern categories**: Context, Quality, **Terminology**, Usefulness, Voice, Veracity.

---

### Source: `v2/resources/livepeer-glossary.mdx`

Global Livepeer glossary (status: draft). 300+ terms across all tabs. Orchestrator-relevant terms include:

- Active Set: "The top 100 orchestrators by total bonded stake that are eligible to receive work and inflationary rewards each round."
- AI Runner: "The container process that executes AI model inference jobs"
- aiModels.json: "JSON configuration file specifying available AI models"
- Broadcaster (deprecated): "Legacy term for the node that published streams and submitted video jobs for transcoding; now replaced by 'Gateway.'"
- BYOC: "Deployment pattern where users supply custom Docker containers for AI workloads"
- Capability Advertisement: "Mechanism by which orchestrators inform gateways of the AI services, pipelines, and models they can process."
- Dual Mode: not present as explicit term in global glossary (present only in compendium/glossary.mdx)
- Cold Start: "The latency incurred when an AI model must be loaded from storage into GPU memory before the first inference request, typically ranging from 5 to 90 seconds."

**Scope note**: "For protocol/video/AI/web3 terms see `v2/resources/livepeer-glossary.mdx`. For resources-section-scoped terms see `v2/resources/resources/compendium/glossary.mdx`."

---

### Source: `v2/orchestrators/resources/compendium/glossary.mdx`

AI-generated orchestrator glossary (status: draft, audience: orchestrator-operator). Searchable table with Category column. 100+ terms. Key entries include:

- Active Set: "The top 100 orchestrators by total bonded stake eligible to receive video transcoding work in the current round."
- Dual Mode: "Deployment configuration where a single orchestrator process handles both video transcoding and AI inference simultaneously."
- Cold Model / Cold Start: "Latency incurred when an AI model must be loaded from storage into GPU memory before the first request can be processed, typically adding 5 to 90 seconds of delay."
- BYOC: "Deployment pattern enabling orchestrators to run custom Docker containers for AI workloads alongside standard Livepeer pipelines."
- Pool worker not present (presumably renamed to pool node but not visible in first 100 lines).

**Authority note from plan-canonical.md**: This file is AI-generated and unverified — must be reviewed against the human-authored version (`resources/glossary.mdx`) before any content is trusted.

---

### Source: `docs-guide/docs-glossary.md`

Internal contributor reference (not publicly served). Covers component taxonomy, script taxonomy, governance and policy terms, business and ecosystem terms, voice and copy rules.

**Scope note**: "For protocol/video/AI/web3 terms see `v2/resources/livepeer-glossary.mdx`. For resources-section-scoped terms see `v2/resources/resources/compendium/glossary.mdx`."

**Relevant governance terms**:

| Term | Definition |
|---|---|
| Canonical source | The single authoritative file for a given fact or definition. |
| Source of truth | The system or document that holds the current correct state. |

**Banned Words (10)**: effectively, essentially, basically, meaningful, significant, real, various, several, obviously, clearly.

**Banned Phrases (17)**: "This section covers", "The reason is straightforward", "Understanding X is essential", "It is important to note", "As mentioned above", "among other factors", "and so on", "low but not zero", "not just", "rather than", "what it takes", "once X is stable", "it should be noted", "not preference", "depends on various", "can generate", "may produce".

---

### Source: `workspace/plan/active/CONTENT-WRITING/context-packs/orchestrators-ia-mapping.md`

**Glossary location in IA**: Two glossary files noted —
- `v2/orchestrators/resources/glossary` (pageType: glossary) — listed in Resources section of nav
- `v2/orchestrators/resources/compendium/glossary` (pageType: reference) — listed in Compendium sub-section

**IA mapping note**: "Two glossaries in nav creates confusion. Both belong in the Resources layer only."

---

### Source: `workspace/plan/active/CONTENT-WRITING/context-packs/orchestrators-collated-status.md`

**Glossary authority note**: `resources/glossary.mdx` = human-made, reviewed, authoritative. `resources/compendium/glossary.mdx` = AI-generated, unverified.

---

### Source: `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/ai-rules-guides.md`

**Pre-flight steps** (before running any phase prompt): "Pre-flight steps the human must complete before the prompt runs (terminology lock, persona source documentation, resource selection)."

"Skipping them produces output that looks correct but is built on bad foundations — AI-generated personas without source grounding, jobs derived from current nav labels, **terminology leaked from prior AI output**. This contaminates every downstream phase."

---

### Source: `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/content-pipeline-canonical.md`

**Core issue**: "Terminology and voice — AI defaults to generic language; misses audience-specific register and domain terminology."

**Content concern category**: "Terminology — does it use the right vocabulary for the audience and domain?"

**L5 Content layer**: "Voice check (register, terminology, banned phrases)."

---

### Source: `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/framework-index-canonical.md`

**Step 6**: "Industry + niche (field taxonomy — terminology + voice register)"

**Reference**: "`tasks/plan/active/TERMINOLOGY-COLLATE/` — Full terminology collation across all tabs — input to veracity library."
