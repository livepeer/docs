# Resource Hub — Audience Design

**Tab**: Resource Hub
**Audience**: `community` (see Phase 0 reasoning — Resource Hub is cross-audience; `community` is the closest canonical token, with qualification)
**TERMINOLOGY_LOCK**: see Phase 0
**Generated**: 2026-03-23
**Filename**: v5-resource-hub-audience-design-2026-03-23.md
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

### Step 0.1 — AUDIENCE Derivation

The Audience Definitions table assigns `community` as the canonical token for the Community tab. The Resource Hub does not have its own audience token in the table. The Site Ownership Map states:

> Resource HUB | Cross-cutting reference material — changelog, glossaries, documentation guide, reference indexes | All tabs (reference depth)

The ownership description explicitly assigns the Resource Hub to cross-cutting reference use, not to a single role audience. Every tab routes to it for reference depth, and the Community tab routes directly to it. The tab description confirms this: it serves readers who want deeper background, research materials, or curated external resources beyond the core how-to content.

Reasoning: The Resource Hub has no primary operator role — it serves the full spectrum of network participants who have already found their role tab but need reference depth. The closest canonical token in the Audience Definitions table is `community` (ecosystem participation — contributors, governance discourse, newcomers, researchers), because the Resource Hub similarly serves no single role but instead acts as a cross-ecosystem resource layer. However, the actual visitor population is broader than `community` alone — it includes `orchestrator`, `delegator`, `developer`, `gateway`, and `founder` readers who have arrived from their role tabs seeking deeper reference.

**AUDIENCE**: `community` *(with qualification: Resource Hub serves all audience tokens at the reference and evaluate lifecycle stages — see Addendum)*

---

### Step 0.2 — TERMINOLOGY_LOCK

**Authority basis**: Product Context block + `veracity-sources.md` as primary authority. Per-tab glossary used as cross-check only.

**Deprecated terms check** (against `deprecated-terms.md`):
- "Broadcaster" appears in the glossary with status `current` and a note that it is the legacy term replaced by Gateway. The deprecated-terms.md file confirms: "Broadcaster" is deprecated; current term is "Gateway (operator)." The glossary entry appropriately labels it as deprecated in its content. No terminology error, but it must not be used as a current term.
- "Pool worker" — glossary uses "Worker" (current), not "Pool worker" (renamed to "Pool node"). The glossary entry for Worker is acceptable.
- "Combined mode / Hybrid" — not present in glossary under those labels. No issue.
- "Transcoder" — not used as synonym for Orchestrator in the glossary. No issue.

**Definition conflict check** (heading vs body mismatches):

Checking each glossary entry for heading/body semantic conflicts:

1. **Livepeer Network** — Heading: "Livepeer Network." Body: "The live, operational decentralized system of orchestrators, workers, gateways, and broadcasters performing video transcoding and AI inference jobs." The body uses "broadcasters" — a deprecated term (per deprecated-terms.md, "Broadcaster" is deprecated; current term is "Gateway"). This is not a heading/body definition conflict per the Phase 0 rule (which requires a semantic mismatch between the heading term and the definition body's core concept), but it does introduce a deprecated term into the definition. Flagged in Addendum.

2. **On-chain Treasury** — Body states it "was established by LIP-89 and LIP-92." This is a specific external artifact reference (LIP numbers). Per the source verification rule, this requires `[verify-against: https://github.com/livepeer/LIPs]`.

3. **Treasury** — Heading: "Treasury." Body references "Treasury Reward Cut Rate" — a governance-controlled value. Flagged `[verify-live: https://github.com/livepeer/LIPs]` for the rate itself.

4. **Governor** — Body states it uses "BondingVotes for stake snapshots." References a specific contract name. `[verify-against: https://github.com/livepeer/protocol]`.

5. **BondingVotes** — Body: "enables the LivepeerGovernor to read historical stake balances at proposal creation time." Specific contract interaction claim. `[verify-against: https://github.com/livepeer/protocol]`.

6. **LPT** — Body: "LPT is deployed to Ethereum mainnet and bridged to Arbitrum via the L2LPTGateway." References a specific contract name (L2LPTGateway). `[verify-against: https://github.com/livepeer/arbitrum-lpt-bridge]`.

7. **Merkle Mine** — Body: "Livepeer's 2018 mainnet launch." This is a factual date claim in the glossary with no primary source reference in the glossary itself. Whitepaper is the appropriate primary source. `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]`.

8. **Round** — Body: "Each Livepeer round corresponds to approximately one day of blocks on Arbitrum." This is a governance-influenced timing claim. `[verify-live: https://explorer.livepeer.org]`.

9. **Active Set** — Body: "top 100 orchestrators." Active set size (100) is listed in deprecated-terms.md as a high-staleness term that could change via governance. `[verify-live: https://explorer.livepeer.org]`.

10. **SPE** — Body references LIP-89 implicitly via On-chain Treasury. No direct LIP reference in the SPE entry itself — no flag required for this entry.

11. **Stake-for-Access (SFA)** — Heading uses the abbreviation "SFA." Body does not explicitly use the abbreviation but correctly expands the concept. No heading/body semantic conflict.

12. **NaaP (Network as a Platform)**: The glossary provided does NOT contain a "NaaP" or "Network as a Platform" entry. However, `veracity-sources.md` explicitly notes the NaaP design lives in Notion and the livepeer/naap repo. The deprecated-terms.md file's conflicting definitions table notes the `purpose enum` and `pageType enum` conflicts. No NaaP definition conflict found in the glossary-resources.md file to flag.

**No DEFINITION CONFLICT (heading/body semantic mismatch) found** in the glossary entries reviewed. All heading terms match the core concept their bodies define. No BLOCKED TERM exclusions required.

**TERMINOLOGY_LOCK generation** — surfacing 10–20 terms central to this tab's audience:

The Resource Hub serves readers seeking reference depth on the network. The terms most central to a cross-audience reference reader are those that recur across role tabs and carry network-specific meanings:

| Term | Definition (from Product Context + authority sources) | Verify flags |
|---|---|---|
| LPT (Livepeer Token) | ERC-20 governance and staking token used for orchestrator selection, delegation, reward distribution, and protocol security | `[verify-against: https://github.com/livepeer/arbitrum-lpt-bridge]` for L2LPTGateway claim |
| Orchestrator | GPU hardware operator who connects machines to the network, bonds LPT stake, and earns fees by processing AI inference and video transcoding jobs | — |
| Gateway | Demand-side actor routing AI or video jobs into the network; pays orchestrators per job via probabilistic micropayments | — |
| Delegator | LPT token holder who stakes tokens to an orchestrator to earn a share of rewards; participates in on-chain governance | — |
| Active Set | The group of top-staked orchestrators eligible to receive work each round — size is governance-controlled | `[verify-live: https://explorer.livepeer.org]` |
| Round | A discrete time interval in which staking rewards are calculated and protocol state updated; approximately one day of Arbitrum blocks | `[verify-live: https://explorer.livepeer.org]` |
| Staking / Stake | Locking LPT in the Livepeer protocol via bonding; determines reward share and work allocation probability | — |
| Delegation | LPT holders staking tokens toward an orchestrator they trust, sharing in rewards without running infrastructure | — |
| Inflation | Dynamic issuance of new LPT each round, distributed to orchestrators and delegators; rate adjusts toward a 50% target bonding rate | `[verify-live: https://github.com/livepeer/LIPs]` for current rate |
| Reward Cut | Percentage of inflationary LPT rewards an orchestrator retains before distributing the remainder to delegators | — |
| Fee Cut | Percentage of ETH job fees an orchestrator retains before distributing remainder to delegators | — |
| Payment Ticket | Signed off-chain data structure representing a probabilistic payment from a gateway to an orchestrator, redeemable for ETH via the TicketBroker contract | — |
| Transcoding | Digital-to-digital conversion of video from one encoding to another — changing format, resolution, bitrate, or codec | — |
| Pipeline | Configured end-to-end AI processing workflow defining data flow from input through model inference to output; identified by pipeline type + model ID | — |
| LIP (Livepeer Improvement Proposal) | Formal governance record for protocol changes; immutable once Final | `[verify-against: https://github.com/livepeer/LIPs]` |
| On-chain Treasury | Protocol-governed smart contract pool of LPT funded by a portion of each round's inflation, allocated through community-approved proposals | `[verify-against: https://github.com/livepeer/LIPs]` for LIP-89 and LIP-92 claims |
| SPE (Special Purpose Entity) | Treasury-funded team with defined scope, budget, and accountability structure, approved by governance vote | — |
| Governance | On-chain system of rules for protocol decision-making via LIP proposals, stake-weighted voting, and treasury allocation | — |
| DePIN | Decentralized Physical Infrastructure Networks — infrastructure model where physical hardware is contributed to a decentralised network for shared use | — |
| Arbitrum | Layer-2 Optimistic Rollup settling to Ethereum; the chain on which Livepeer's protocol contracts are deployed | — |

Note: Terms were capped at 20. The Resource Hub spans all network domains (protocol, video, AI, governance, economics), but the 20 terms above cover the cross-cutting reference layer that a reader arriving at this tab is most likely to need. Per-domain technical terms (Bitrate, Codec, Rendition, ControlNet, SDXL, TensorRT, etc.) are included in the glossary but are not part of the core TERMINOLOGY_LOCK — they are standard industry terms that do not carry network-specific meanings requiring anchoring here. See Addendum.

> **TERMINOLOGY_LOCK**: `LPT, Orchestrator, Gateway, Delegator, Active Set, Round, Staking, Delegation, Inflation, Reward Cut, Fee Cut, Payment Ticket, Transcoding, Pipeline, LIP, On-chain Treasury, SPE, Governance, DePIN, Arbitrum`

---

### Step 0.3 — Anchoring Questions

**1. What does this audience call themselves?**

The Resource Hub has no single self-identified audience. Visitors arrive labelling themselves by what they're doing before they arrive, not by a Resource Hub role:
- A researcher or writer calls themselves a "researcher," "analyst," or "writer."
- A protocol participant who followed a link calls themselves by their role (node operator, token holder, developer).
- A new arrival doing due diligence calls themselves someone "looking into Livepeer" or "doing research."
- A community contributor calls themselves a "contributor" or "community member."

The unifying self-label is: **"someone who needs to look something up"** — they arrived with a specific question, not to start a role journey. The act of visiting the Resource Hub is inherently a reference-seeking act, not an onboarding act.

**2. What are the 3–5 actions that define their core job?**

In their own language:
1. Look up a term or concept they encountered elsewhere in the docs or in a forum discussion
2. Find the source or authoritative document behind a claim (whitepaper, LIP, research paper)
3. Check what changed — find the changelog or release history for a specific component
4. Find community resources, tools, or external projects they can use
5. Get a clear picture of how different parts of the network connect — the conceptual overview before diving into role-specific content

**3. Terms in the TERMINOLOGY_LOCK with network-specific meanings that differ from industry default:**

| Term | Industry default meaning | Livepeer-specific meaning | Confusion risk |
|---|---|---|---|
| Gateway | Network device routing traffic between different networks (IT default); or API access management layer (web dev default) | A business or developer routing AI or video jobs into the Livepeer network and paying orchestrators per job — a demand-side economic actor, not an infrastructure routing device | High — "gateway" in IT and "gateway" in Livepeer describe completely different roles |
| Orchestrator | A workflow automation tool (e.g., Airflow, Kubernetes orchestrator) | A GPU hardware operator who bonds LPT stake and earns fees processing AI/video jobs — a supply-side compute provider | High — software engineers will map this to DevOps tools |
| Round | An abstract period (e.g. a competition round, negotiation round) | A specific on-chain time interval tied to Arbitrum block count, during which protocol rewards are calculated and claimed | Medium — context makes the network-specific meaning clear, but the triggering of reward calls per round is non-obvious |
| Delegation | In general: handing off authority or tasks | In Livepeer: the specific on-chain act of staking LPT toward an orchestrator to earn proportional reward share | Medium — delegation in corporate and political contexts is analogous, but the on-chain mechanics are distinct |
| Active Set | Not a standard industry term | The governance-controlled group of top-staked orchestrators eligible to receive work in a given round — membership is dynamic and competitive | Low (term is Livepeer-specific; no confusion with an industry default) |
| Pipeline | In DevOps: a CI/CD sequence of build steps; in data engineering: an ETL flow | In Livepeer AI: a specific pipeline type + model ID pairing that defines an end-to-end AI processing workflow an orchestrator advertises | Medium — DevOps readers will reach for the wrong mental model |
| Inflation | Economic concept of rising prices; in crypto: token issuance rate | In Livepeer: specifically the dynamic per-round minting of new LPT, governed by a target bonding rate, distributed to active participants | Low (crypto context makes this clear) |

---

## Arriving Question

> "I've seen a term / seen a claim / been pointed to a resource — where do I find the authoritative source, the definition, or the background material?"

*This is the canonical arriving question for the Resource Hub. It covers the three dominant arrival scenarios: (a) term lookup after encountering an unfamiliar concept, (b) source verification after reading a claim in role-tab docs or community discussion, (c) curated resource discovery for deeper research. All three resolve to the same underlying need: finding reliable, well-sourced reference material.*

---

## Personas

### Persona reasoning

The Resource Hub tab description states it serves readers who "want deeper background, research materials, or curated external resources beyond the core how-to content." The Site Ownership Map confirms it routes from Community and all role tabs. The arriving population is therefore characterised not by a single role, but by the situation that brings them here.

Distinct arriving states:

**P1 — The Cross-Tab Reference Seeker**: Already inside another tab (Orchestrators, Delegators, Developers, Gateways) and hit a term or concept they don't know. Arrived via an in-tab link or a "see Resource Hub" callout. Knows their role; doesn't know this specific term or concept.

**P2 — The Protocol Researcher**: Not yet committed to a role. Evaluating the network academically or professionally — analyst, journalist, potential investor, academic researcher, or due-diligence reviewer. Arrived via web search, a whitepaper link, or an external article. Wants to read primary sources.

**P3 — The Governance and Ecosystem Participant**: Knows the network, participates in Community tab or forum. Arrived looking for LIPs, governance records, treasury data, or SPE-related documentation. Familiar with Livepeer terminology; wants depth and primary sources on specific governance mechanics.

**P4 — The New Arrival Doing Orientation**: Has heard of Livepeer, landed on the docs site, doesn't know where to start. May have arrived via Home or About. Wants to understand what this is before committing to a role tab. Resource Hub is a secondary stop — they need orientation before they need reference depth.

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | Cross-tab reference seeker | In-tab link / "see Resource Hub" CTA from a role tab | Knowledge of their role; unknown specific term or concept | A clear definition with a trustworthy source they can cite or apply immediately | 3 | 3 | 3 | 9 |
| 2 | Protocol researcher | Web search ("Livepeer whitepaper," "Livepeer LIP," "Livepeer tokenomics") / external article link | General awareness of Livepeer; no deep protocol knowledge | Access to primary sources (whitepaper, LIPs, research) and enough orientation to know where each one fits | 2 | 3 | 3 | 8 |
| 3 | Governance and ecosystem participant | Community tab CTA / forum link / direct bookmark | Established Livepeer knowledge; specific governance or ecosystem question | Specific LIP text, treasury data, governance record, or curated ecosystem link | 2 | 2 | 3 | 7 |
| 4 | New arrival doing orientation | Home or About → Resource Hub CTA / web search | Near-zero Livepeer knowledge | Enough of a mental model to know which role tab to visit next | 2 | 1 | 2 | 5 |

*Volume assumptions: P1 is the most common because every role tab has content that links here for reference depth — this is the tab's primary design intent. P2 is moderate — Livepeer attracts genuine protocol research interest. P3 is moderate — governance-active participants are a real cohort but smaller than P1. P4 is moderate in raw numbers (many newcomers arrive) but the Resource Hub is a poor first stop for them; most will be routed away quickly. Depth for P4 is 1 because the Resource Hub is not designed as an orientation path — it hosts reference material, not onboarding content.*

**Primary persona**: Cross-tab reference seeker — this persona drives the section structure. All other personas are accommodated within that structure but do not add sections unless their path is otherwise blocked.

**Self-identification check**: Visitors self-identify as "someone with a question" rather than by a network role. The label does not route cleanly to a single persona — it could describe P1 (looking up a term), P2 (finding a primary source), P3 (locating a specific governance record), or P4 (figuring out what Livepeer is). However, the arriving action is the same for all: arriving with a specific question and needing to find the right resource. The disambiguation need is not about choosing a setup path — it is about routing to the right content type (glossary vs primary sources vs governance records vs curated links). A routing/disambiguation section as the tab's first content section is appropriate.

**Entry blocker check**: No hard-stop on-chain blockers (no wallet required, no staking required to read documentation). The structural barrier is navigational: if a reader cannot quickly identify where their question type is answered, they will leave. The S1 (disambiguation) section must precede all other sections.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I encounter an unfamiliar term in another Livepeer tab or in a community forum post | find a clear, authoritative definition with its source | understand what I'm reading and apply the term correctly in my own work or communication |
| J2 | I need to verify a factual claim I read in the docs (a parameter value, a contract address, a LIP number) | locate the primary source that owns that fact | confirm the claim is accurate before relying on it in a decision or in content I publish |
| J3 | I am evaluating Livepeer from the outside (as an analyst, researcher, investor, or due-diligence reviewer) | find the foundational documents — whitepaper, LIPs, research papers — in one organised place | assess the protocol's design and economics without having to search across multiple external repos |
| J4 | I want to follow a specific governance proposal or understand a recent protocol change | find the LIP text, treasury proposal record, or governance outcome | know exactly what changed, why, and what the current on-chain state is |
| J5 | I am building something on top of Livepeer (a tool, integration, or community resource) and want to know what already exists | find a curated index of community tools, SDKs, external resources, and ecosystem projects | avoid rebuilding what already exists and connect with relevant existing work |
| J6 | I need to cite or reference Livepeer documentation in external writing (a report, a blog post, an academic paper) | find the correct canonical source for any claim and understand the version or date it reflects | make accurate, citable references that will hold up to scrutiny |
| J7 | I have just finished reading the protocol overview and want to go deeper on one specific mechanism (e.g., probabilistic micropayments, inflation curve, slashing conditions) | find extended background reading or the original specification document for that mechanism | build a complete mental model of the mechanism before implementing something that depends on it |

---

## Ideal Journey

**Linear** (discovery through to active reference use):

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Arriving with a question | discover | Reaching the tab from another tab or external source; scanning for where their question type is answered |
| 2 | Identifying which resource type applies | discover | Deciding whether they need the glossary, a primary source document, a governance record, or a curated external resource |
| 3 | Locating the specific entry or document | evaluate | Finding the specific term, LIP, paper, or resource that answers their question |
| 4 | Verifying the claim or definition against its source | evaluate | Cross-checking what they found against the authoritative source, noting any verify-live or verify-against flags |
| 5 | Returning to their original context | build / operate | Going back to their role tab, forum discussion, or external work with a confirmed answer |
| 6 | Bookmarking for repeat lookup | operate | Saving the glossary, changelog, or curated links index for future reference visits |

**On-demand** (information this audience returns for after completing the linear journey):

- Current canonical definitions of network-specific terms (especially those flagged as high-staleness)
- The full LIP index — to check whether a specific proposal exists, its status, and a summary
- Current protocol parameter values (active set size, unbonding period, inflation rate, treasury reward cut rate)
- The changelog or release history for go-livepeer
- Curated external links for AI frameworks (HuggingFace, ComfyUI, TensorRT) and video standards (HLS, RTMP, WebRTC)
- The contract address registry for deployed Livepeer protocol contracts
- A list of current SPEs, their scope, and their funding status
- Research papers or independent analyses of the Livepeer network and tokenomics

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Community → Resource Hub | Community tab routes participants here for reference depth on governance records, LIPs, and ecosystem tools |
| Inbound | Orchestrators → Resource Hub | Orchestrators tab routes here for CLI reference, contract addresses, LIP context on protocol rules |
| Inbound | Delegators → Resource Hub | Delegators tab routes here for tokenomics depth, inflation mechanics, governance participation records |
| Inbound | Gateways → Resource Hub | Gateways tab routes here for payment mechanics depth, contract reference, capability discovery specs |
| Inbound | Developers → Resource Hub | Developers tab routes here for SDK changelog, API reference, protocol specification depth |
| Inbound | About → Resource Hub | About tab routes here for whitepaper, LIPs, and primary source documents on protocol architecture |
| Outbound | Resource Hub → About | When a reader needs the full protocol architecture narrative rather than a term definition |
| Outbound | Resource Hub → Orchestrators | When glossary lookup reveals the reader should be in the Orchestrators tab for their use case |
| Outbound | Resource Hub → Delegators | When governance or staking research reveals the reader is actually a potential delegator |
| Outbound | Resource Hub → Community | When ecosystem and contribution resource discovery leads to active participation paths |

---

## Ideal Section Structure

*Note on universal elements excluded per Phase 2C rules: portal/landing page, section-level index pages, and the Resources/compendium section (FAQ, glossary, changelog) are not designed here — they are structural constants added after content is written. This means the main glossary, FAQ, and changelog pages themselves are universal elements. The sections below are the content sections that sit within or alongside those structural elements and that this audience specifically needs.*

*Note on section count and scope: The Resource Hub is unusual in that a significant portion of its content IS the universal elements (glossary, changelog, index). The sections designed below focus on content that goes beyond bare lookup — the navigational orientation, the curated collections, and the context-setting pieces that make the reference material usable. A section count of 8–10 is appropriate here; fewer than 8 would leave multiple reader paths without served content.*

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1 — What kind of resource am I looking for? | "I've arrived at the Resource Hub — which section covers what I need?" | J1, J2, J3, J4, J5 | `orient` | `navigation` | Has arrived with a specific question from another tab, a search, or an external link; does not yet know the structure of this tab | Has identified which section (glossary, primary sources, governance records, or curated external resources) answers their question, and navigated to it | `discover` |
| S2 — Network Glossary | "What does this term mean — specifically in the context of Livepeer?" | J1 | `reference` | `reference` | Encountered an unfamiliar or network-specific term in role-tab docs, a forum post, or an external article | Has a clear authoritative definition and, where applicable, a verify-against or verify-live flag that routes them to the primary source | `evaluate` |
| S3 — Protocol Primary Sources | "Where is the original specification or whitepaper for this mechanism?" | J2, J3, J7 | `reference` | `resource` | Knows enough to want the source document, not the summary; may be doing due diligence, research, or deep implementation work | Has located the correct primary source document (whitepaper, LIP, contract repo) and knows its authority tier and staleness risk | `evaluate` |
| S4 — How to Read Livepeer Sources | "I found a primary source document — how do I know if it's current and authoritative?" | J2, J6 | `explain` | `concept` | Has access to primary source documents but cannot distinguish authority levels, staleness risk, or which source type applies to which claim | Can apply the source authority framework: knows which source type to use for each claim type (on-chain, code, governance), recognises staleness flags, and can assess whether a document reflects current deployed state | `evaluate` |
| S5 — Governance Records Index | "What LIPs exist, and where can I read the text of a specific proposal?" | J4, J6 | `reference` | `resource` | Knows about governance or has been pointed to a specific LIP number; needs the full index and individual LIP documents | Has located the specific LIP or governance record needed; has identified its status (Draft, Final, Withdrawn) and the on-chain outcome if applicable | `evaluate` |
| S6 — Protocol Parameter Reference | "What are the current live values for governance-controlled parameters?" | J2, J4 | `reference` | `reference` | Has a specific parameter question (unbonding period, active set size, inflation rate, treasury reward cut) and needs the current on-chain value | Has retrieved the current value with the correct source (Explorer, Arbiscan, or BondingManager read) and the governance record that set it | `operate` |
| S7 — Contract Address Registry | "What is the contract address for BondingManager / TicketBroker / Minter / Controller on Arbitrum?" | J2, J5 | `reference` | `reference` | Building an integration, verifying a transaction, or auditing a claim that references a specific deployed contract | Has the canonical Arbitrum contract address cross-referenced against Arbiscan and the governor-scripts addresses file | `build` |
| S8 — Changelog and Release Index | "What changed in the latest go-livepeer release, and does it affect me?" | J4, J2 | `update` | `reference` | Running or building on Livepeer; has heard about a release or noticed unexpected behaviour; needs to know what changed | Has identified the specific change relevant to their situation, knows which release introduced it, and can determine whether action is required | `operate` |
| S9 — Curated External Resources | "What external tools, research, frameworks, and community projects exist for working with Livepeer?" | J5, J3 | `reference` | `resource` | Wants to discover the broader ecosystem — tools, SDKs, research papers, community projects — without having to search multiple sources | Has a curated, source-verified list of external resources, understands the trust level of each (primary, acceptable, community), and can identify which ones are relevant to their use case | `evaluate` |
| S10 — Documentation Guide | "How is this documentation site structured, and where do I go for [specific topic]?" | J1, J3 | `orient` | `navigation` | Confused about the docs structure — doesn't know which tab owns which content type, or which tab they should be in for their goal | Has identified the correct tab for their goal and has a mental model of the docs site's audience-by-tab structure; can self-route to the right place | `discover` |

**Section load check**:

- S3 (Protocol Primary Sources) accumulates both a curated resource role (listing and annotating primary source documents) and a light orientation role (explaining the authority tier framework). There is a risk it becomes overloaded with source authority guidance. The source authority explanation is separated into S4 (How to Read Livepeer Sources) precisely to prevent this overload. If S3 and S4 are later merged, flag for splitting.
- S1 (disambiguation) and S10 (Documentation Guide) both perform orientation work. S1 orients the reader within the Resource Hub (which section answers my question). S10 orients the reader within the full docs site (which tab answers my question). These are distinct scopes and should not be merged. However, if a reader's question is "which tab should I be in," they may not distinguish S1 from S10 on arrival. Consider whether S10 content should be incorporated into S1 as a secondary routing layer. Flagged: [Section S10] is carrying similar orientation work to S1 at a different scope level — if both sections exist, ensure S1 explicitly routes to S10 for whole-docs orientation questions. Do not merge during detailed design without validating the P4 persona path.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| Cross-tab reference seeker (P1) | S1 (orientation — which section?), then S2 (glossary) or S7 (contract addresses) or S8 (changelog) depending on their specific question | S2, S6, S7, or S8 depending on question type | None — S1 routes cleanly to S2 through S8 | None — P1 arrives knowing their role; S2–S8 provide definitions and sources without requiring prior tab knowledge | None |
| Protocol researcher (P2) | S1 (orientation), then S3 (primary sources) + S4 (how to read sources) | S3 or S9 (curated external resources for research papers and analyses) | None — S3 provides the whitepaper, LIPs, and repo links; S4 explains authority tiers | Risk: P2 may not know enough about Livepeer's governance structure to interpret a LIP without context. S4 (how to read sources) mitigates this by explaining authority levels. If P2 has zero context, S10 (docs guide) routes them to About for foundational understanding | None — S10 provides the "where do I start" routing for P2 arriving cold |
| Governance and ecosystem participant (P3) | S5 (governance records index) directly, or S1 if arriving at tab root | S5, S6, or S9 | None — S5 provides LIP index and governance records | Risk: P3 may want treasury balance and current SPE funding status, which requires on-chain data (Explorer). S6 (parameter reference) partially covers this. S5 should link to the Explorer treasury dashboard. If the on-chain treasury data is not surfaced in S6, P3 has a knowledge gap | S6 should include treasury data (balance, recent proposals, funding outcomes) not just protocol parameters. Flag: S6 may need to cover both parameter values AND treasury state to fully serve P3. Consider splitting S6 into Parameter Reference and Treasury Reference during detailed design. [⚠ Design flag: may need to split] |
| New arrival doing orientation (P4) | S1 (orientation) or S10 (docs guide) | S10 — exits to About or a role tab | None — S1 and S10 both route to appropriate tabs | Risk: P4 may read S2 (glossary) and hit Livepeer-specific terms that assume protocol context they don't have. S2 should include see-also links to About for foundational concepts | None — P4's path is served by S1 + S10. They should not need to read S2–S9 before self-routing. |

**Gap resolution**: S6 carries a potential split need flagged in the P3 validation row. During detailed design, evaluate whether Protocol Parameter Reference and Treasury / Governance State Reference should be two distinct pages. Flagged in Addendum.

---

## Quality Gates

- [x] Arriving question is specific — not a topic, an actual question the reader would ask? YES: "I've seen a term / seen a claim / been pointed to a resource — where do I find the authoritative source, the definition, or the background material?"
- [x] At least 3 distinct personas, each with a different arriving state and entry vector? YES: 4 personas defined with distinct entry vectors and arriving states.
- [x] Self-identification check done — disambiguation section added if required? YES: S1 added as first content section with `purpose: orient`, `pageType: navigation`, `lifecycleStage: discover`.
- [x] Entry blockers identified — sections that resolve blockers placed before sections that require them? YES: No hard on-chain blockers. Navigational blocker resolved by S1 as first section.
- [x] At least 5 jobs, first-principles, not derived from current nav structure? YES: 7 jobs defined from first principles.
- [x] Every section has a reader question, job, entry state, and exit state? YES: all 10 sections have all four fields.
- [x] No exit state uses "understands" — all are concrete actions or decisions? YES: all exit states describe a completed action or a decision made.
- [x] Cross-tab gate applied — decision-enabling content included for this audience; CROSS-TAB rows only where the audience does not need the content? YES: The Resource Hub is the cross-tab reference destination, not a consumer of other tabs' content. Outbound routes are navigational aids, not content substitutes.
- [x] Persona path validation complete — every persona has an unblocked path through the structure? YES: all 4 personas have complete, unblocked paths. One potential split flagged for S6 during detailed design.
- [x] All enum values are from the canonical lists — no invented tokens? YES: `purpose` (orient, reference, explain, update), `pageType` (navigation, reference, resource, concept), `lifecycleStage` (discover, evaluate, build, operate) — all from canonical enums.
- [x] No governance-controlled numeric values hard-coded — all flagged `[verify-live: {source}]`? YES: Active set size and Round timing are flagged verify-live in the TERMINOLOGY_LOCK; the section text does not hard-code values.
- [x] Disambiguation section (S1) has `lifecycleStage: discover` — not `evaluate` or any other value? YES: S1 has `lifecycleStage: discover`.
- [x] Phase 0 definition conflicts flagged — any glossary heading/body mismatch marked `[DEFINITION CONFLICT]` or `[BLOCKED TERM]`? YES: No heading/body semantic mismatches found. Deprecated term usage in "Livepeer Network" definition body flagged in Addendum. Verify-against and verify-live flags applied to all glossary entries with external artifact references.

**All gates pass. Output is final.**

---

## Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary as cross-check only?
- [x] Phase 0: Any glossary term with a heading/body expansion mismatch flagged as `[DEFINITION CONFLICT]` or `[BLOCKED TERM]`?
- [x] Phase 0: No governance-controlled numeric values hard-coded — all flagged `[verify-live: {source}]`?
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas described with motivation and entry vector — not just role labels?
- [x] Self-identification check done — disambiguation section added if required?
- [x] Entry blockers identified and resolved by section order?
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"?
- [x] Cross-tab gate applied — decision-enabling content included; CROSS-TAB rows only where audience does not need the content?
- [x] Persona path validation done — every persona has an unblocked path?
- [x] All enum values are canonical — no invented tokens? (`purpose` 15, `pageType` 7, `lifecycleStage` 7)
- [x] Disambiguation section (S1) has `lifecycleStage: discover`?

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.1]**: The Audience Definitions table does not assign a canonical audience token to the Resource Hub. The closest match is `community` given the cross-ecosystem reference role, but the actual visitor population is all audience tokens at the reference/evaluate lifecycle stage. This is a genuine gap in the prompt's audience framework for a cross-cutting reference tab. Assumption made: `community` used as the canonical AUDIENCE token with a qualification note; all 7 audience tokens treated as secondary visitors in the persona design. Suggest: the framework may benefit from a reserved token such as `cross-audience` or `reference` for tabs that serve all role audiences at the reference lifecycle stage.

- **[Phase 0 / Step 0.2 — deprecated term in glossary body]**: The "Livepeer Network" glossary entry body uses the term "broadcasters" (the deprecated term for Gateway operators, per deprecated-terms.md). This is not a heading/body definition conflict (the heading correctly says "Livepeer Network"), but the body embeds a deprecated role term. The entry is technically `current` status in the glossary but contains stale terminology. Flagged here for correction during glossary authoring: replace "broadcasters" with "gateways" in the Livepeer Network definition.

- **[Phase 0 / Step 0.2 — verify-against flags applied]**: The following glossary entries reference specific external artifacts and have been flagged with verify-against per the source verification rule: On-chain Treasury (LIP-89, LIP-92 claim → `[verify-against: https://github.com/livepeer/LIPs]`); Governor/BondingVotes contract interactions (`[verify-against: https://github.com/livepeer/protocol]`); LPT L2LPTGateway claim (`[verify-against: https://github.com/livepeer/arbitrum-lpt-bridge]`); Merkle Mine 2018 date claim (`[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]`); Round timing claim (`[verify-live: https://explorer.livepeer.org]`); Active Set size claim (`[verify-live: https://explorer.livepeer.org]`).

- **[Phase 0 / Step 0.2 — TERMINOLOGY_LOCK scope]**: The Resource Hub glossary contains 103 terms spanning all network domains (video encoding, AI frameworks, web3 concepts, protocol mechanics, tooling). The TERMINOLOGY_LOCK was constrained to 20 terms covering the network-specific reference layer. Generic industry terms (Bitrate, Codec, HLS, RTMP, ControlNet, SDXL, TensorRT, WebRTC, etc.) are included in the full glossary and are appropriate for the tab's content but do not require anchoring in the TERMINOLOGY_LOCK because they carry their standard industry meanings without network-specific redefinition. Exceeding 20 was not necessary because these terms are defined by their originating standards bodies, not by the Livepeer protocol.

- **[Phase 2C / Section S6]**: The Protocol Parameter Reference section may need to be split during detailed design into two pages: (a) Protocol Parameter Reference (active set size, unbonding period, inflation parameters, reward/fee cuts — governance-controlled on-chain values) and (b) Treasury and Governance State Reference (current treasury balance, active SPEs, recent proposal outcomes). The P3 persona (Governance and ecosystem participant) needs both, but combining them into a single page may create a section with two distinct reader states (someone checking a protocol parameter vs someone checking governance outcomes). Flagged as [Section S6] carrying Protocol Parameter reference AND Treasury/Governance state reference — may need to split into two pages during detailed design.

- **[Phase 2C / S1 vs S10 overlap]**: S1 (disambiguation — which section of the Resource Hub?) and S10 (documentation guide — which tab of the whole docs site?) serve similar orientation purposes at different scopes. During detailed design, ensure S1 explicitly routes readers to S10 for whole-site orientation questions. If the tab is small enough, S10 content could be incorporated into S1 as a "looking for something in another tab?" callout, reducing the section count to 9. Flagged for human decision at detailed design stage.

- **[Phase 1 / Persona scoring assumption]**: In the absence of analytics data, persona volume scores were estimated from the tab's structural position in the site: every role tab routes to Resource Hub for reference depth (supporting P1 as the highest-volume persona), web search terms for "Livepeer whitepaper" and "Livepeer tokenomics" are likely entry vectors (supporting P2 as moderate volume), and the governance forum is an established active community (supporting P3 as moderate volume). These assumptions should be validated against actual analytics when available.

- **[Phase 2C / Universal elements clarification]**: The prompt instructs that the main glossary, changelog, and resources compendium are "universal elements" added after content is written and should not be designed here. This created a design tension for the Resource Hub specifically, because these elements ARE the primary content of the Resource Hub by definition. Resolution: the sections designed (S2–S9) are the *framing and context layers* that make those universal elements navigable and trustworthy — not the raw lookup tables themselves. The actual glossary lookup table, changelog table, and LIP index are universal elements; the sections designed here are the conceptual and navigational scaffolding around them.

- **[Web access / suggested sources]**: No web access was available during this run. Based on the veracity-sources.md content, the following sources are already registered and sufficient for the Resource Hub's reference scope. No missing critical sources identified from available information. If web access were available, the following searches would be recommended to surface potentially new sources: recent Dune Analytics dashboards for Livepeer (to check for updated on-chain analytics tools not in the registry), recent Messari reports on Livepeer (to check for updated research), and the livepeer/naap GitHub repo (to verify NaaP specification status, since veracity-sources.md notes NaaP design work moves from Notion to the naap repo). Suggested source candidate: `[SUGGESTED SOURCE: livepeer/naap repo — https://github.com/livepeer/naap — NaaP (Network as a Platform) specification and architecture, post-Notion publication — suggested tier: primary (once content is published)]`
