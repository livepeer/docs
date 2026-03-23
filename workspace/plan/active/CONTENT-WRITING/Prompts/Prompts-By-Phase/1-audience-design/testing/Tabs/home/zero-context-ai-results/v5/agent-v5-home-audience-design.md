# Home — Audience Design

**Tab**: Home
**Audience**: multi-audience (all role tokens at `discover` lifecycleStage — see Phase 0)
**TERMINOLOGY_LOCK**: see Phase 0 Anchors
**Generated**: v5-home-audience-design-2026-03-23.md
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

### Step 0.1 — AUDIENCE

> **AUDIENCE**: `multi-audience` — Home serves all incoming reader types simultaneously. Unlike role-specific tabs, Home is the entry point to the entire site. Its audience is every person who arrives before they have identified which tab is theirs. It does not have a single canonical audience token.
>
> Note: The Audience Definitions table does not assign a single token to Home (unlike About, which explicitly carries the note "A single audience token cannot fully describe About's primary audience"). The same principle applies here — Home's primary task is routing each arriving reader to the correct role tab. The personas derived in Phase 1 are therefore entry archetypes defined by what the reader knows at arrival, not by which protocol role they will eventually occupy.

---

### Step 0.2 — TERMINOLOGY_LOCK

The following terms are central to what Home must communicate to all arriving audience types. They are derived from the Product Context block and cross-checked against `veracity-sources.md` as the authority. The per-tab glossary is used as a cross-check only. Draft terms, deprecated terms, and terms with unresolved definition conflicts are excluded or flagged below.

---

**TERMINOLOGY_LOCK**:

`Livepeer, decentralised compute network, Arbitrum, LPT (Livepeer Token), orchestrator, gateway, delegator, developer/builder, video transcoding, AI inference, staking, delegation, governance, job, probabilistic micropayments, reward, treasury, permissionless, trustless, smart contract, Layer-2, GPU operator`

---

**Term-by-term derivation and cross-check:**

1. **Livepeer** — Derived from Product Context: a decentralised AI and video transcoding compute network running on Arbitrum. No glossary conflict. No external artifact reference in the glossary for this term. Confirmed.

2. **Decentralised compute network** — Derived from Product Context directly. Glossary has "Decentralization" (plain concept). No conflict.

3. **Arbitrum** — Product Context: "running on Arbitrum (Ethereum L2)." Glossary confirms: "A Layer 2 Optimistic Rollup settling to Ethereum." Glossary definition adds "Optimistic Rollup" — that is a technical detail not contradicted by Product Context. Acceptable.
   `[verify-against: https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction]`

4. **LPT (Livepeer Token)** — Product Context: "Used for staking (required for orchestrators to enter the active job pool), delegation, and on-chain governance. Earned via inflation rewards and job fees." Glossary: "ERC-20 governance and staking token used for orchestrator selection, delegation, reward distribution, and network security." No substantive conflict — glossary adds "ERC-20" which is a technical fact, not disputed.
   `[verify-against: https://arbiscan.io/accounts/label/livepeer]` (for ERC-20 contract address and type)

5. **Orchestrator** — Product Context: "GPU hardware operators who connect their machines to the network and earn fees by processing AI inference and video transcoding jobs. Must hold and stake a meaningful amount of LPT to compete for jobs independently. Can participate as a pool worker (now: pool node) rather than operating solo." Glossary: "Supply-side operator contributing GPU resources, receiving jobs, performing transcoding or AI inference, and earning rewards." No substantive conflict. "Pool worker" is deprecated — current term per `deprecated-terms.md` is "pool node."

6. **Gateway** — Product Context: "the demand side. Businesses and developers who route AI or video jobs into the network, paying orchestrators per job." Glossary: "Node that submits jobs, routes work to orchestrators, manages payment flows, and provides a protocol interface for applications" — context note: "they replaced the older 'Broadcaster' role." "Broadcaster" is confirmed deprecated in `deprecated-terms.md`. No conflict on current definition.

7. **Delegator** — Product Context: "LPT token holders who stake their tokens to orchestrators they trust, earning a share of the orchestrator's rewards. Participate in on-chain governance via their stake weight." Glossary aligns. No conflict.

8. **Developer/builder** — Product Context: "build applications and pipelines using Livepeer's compute capacity, typically via gateway APIs or SDKs." Two Audience Definitions tokens here (`developer` and `builder`) with distinct nuances; for Home purposes, both are grouped as "those who build with Livepeer." No terminology conflict at this level of abstraction.

9. **Video transcoding** — Product Context: "live and on-demand video encoding." Glossary "Transcoding": "Direct digital-to-digital conversion of video from one encoding format or bitrate to another for adaptive multi-rendition delivery." No conflict. Note: "Transcoder" as a role term is partially deprecated per `deprecated-terms.md` — but "video transcoding" as a work type remains current.

10. **AI inference** — Product Context: "running ML models — primarily image/video generation pipelines." Glossary "Inference": "Running a trained model on new input data to produce predictions or generated outputs." No conflict.

11. **Staking** — Product Context and glossary align: locking LPT to participate in network security, governance, and earn inflationary rewards. Governance-controlled parameters (active set size, unbonding period, target bonding rate) are NOT hard-coded here.
    `[verify-live: https://explorer.livepeer.org]` (active set size, unbonding period)

12. **Delegation** — Derived from Product Context (delegators stake to orchestrators they trust). Closely related to staking but distinct: delegation is the act of a token holder allocating stake to an orchestrator. Not separately in glossary as a headword but described under Delegator. No conflict.

13. **Governance** — Glossary: "System of rules and processes for protocol decision-making including on-chain voting via LPT stake weight." Product Context confirms governance via stake weight. Cross-check: `[verify-against: https://github.com/livepeer/wiki/wiki/Governance]`

14. **Job** — Glossary: "A unit of work submitted to the Livepeer network specifying stream ID, transcoding options or AI pipeline, and price." Product Context supports this (orchestrators "earn fees by processing AI inference and video transcoding jobs"). The specific job lifecycle details in the glossary reference the Whitepaper architecture.
    `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]`

15. **Probabilistic micropayments** — Glossary: "Lottery-based payment model where only winning tickets are redeemed on-chain, amortizing transaction costs across many small payments." Product Context does not explicitly name this scheme but refers to "paying orchestrators per job." Streamflow spec introduced this.
    `[verify-against: https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md]`
    External glossary reference: `https://livepeer.org/docs/video-developers/core-concepts/payments` — treat as lead source only; verify against Streamflow spec.

16. **Reward** — Glossary: "Combination of inflationary LPT and ETH fees earned by orchestrators and delegators each protocol round." Product Context supports (earned via inflation rewards and job fees). Note: reward distribution parameters (fee cut, share) are governance-controlled.
    `[verify-live: https://explorer.livepeer.org]`

17. **Treasury** — Glossary: "Pool of LPT held on-chain for funding public goods and ecosystem development, governed by token holder votes." Context adds: "funded by a percentage of per-round inflationary LPT (Treasury Reward Cut Rate); allocations approved via the LivepeerGovernor contract."
    Treasury Reward Cut Rate is governance-controlled: `[verify-live: https://github.com/livepeer/LIPs]` (LIP-92 referenced in `deprecated-terms.md`).
    `[verify-against: https://github.com/livepeer/protocol]` (for LivepeerGovernor contract source)
    `[verify-against: https://arbiscan.io/accounts/label/livepeer]` (for deployed contract address)
    `[verify-live: https://explorer.livepeer.org/treasury]` (for current treasury balance and proposals)

18. **Permissionless** — Glossary: "Property where anyone can participate without requiring approval from a central authority." No conflict with Product Context. Generic web3 term with no Livepeer-specific deviation.

19. **Trustless** — Glossary: "System property where participants interact using cryptographic proofs rather than requiring trust in any third party." Standard web3 concept, no Livepeer-specific deviation.

20. **Smart contract** — Glossary: "Self-executing program on a blockchain that automatically enforces agreement terms without intermediaries." Standard concept. Livepeer deploys on Arbitrum.
    `[verify-against: https://github.com/livepeer/protocol]`

21. **Layer-2** — Glossary: "A separate blockchain extending a Layer 1 by handling transactions off-chain while inheriting the security guarantees of the base chain." Consistent with Product Context (Arbitrum = Ethereum L2).

22. **GPU operator** — Glossary: "An orchestrator operator contributing GPU resources for transcoding or AI inference on the Livepeer network." Consistent with Product Context. Note: this is an informal descriptive label, not a separate protocol role — it describes a class of Orchestrators. Included because it is the self-identification label this reader type uses.

---

**Terms from glossary excluded or flagged:**

- **AI Video** — `deprecated-terms.md` flags as draft term with thin definition and no external reference. Excluded from TERMINOLOGY_LOCK until verified.

- **BYOC (Bring Your Own Compute / Bring Your Own Container)** —
  `[DEFINITION CONFLICT: BYOC — heading says "Bring Your Own Compute / Bring Your Own Container" (presenting both expansions simultaneously, where Compute ≠ Container is a substantive semantic difference), body definition reads "Bring-Your-Own-Container — deployment pattern where users supply custom Docker containers" — the heading introduces both expansions but the body asserts only Container. Do not assert either expansion as the sole canonical form until resolved against a primary source. Suggested primary source: go-livepeer repo latest tagged release for actual flag/feature naming.]`
  `[BLOCKED TERM: BYOC — excluded from TERMINOLOGY_LOCK pending human resolution of definition conflict]`

- **Confluent Upgrade / Confluence Upgrade** —
  `[DEFINITION CONFLICT: Confluent Upgrade — heading reads "Confluent Upgrade" but body reads "Confluence upgrade" (also called Confluence)" — "Confluent" and "Confluence" are distinct words. The LIPs repo is the canonical source for formal upgrade names. Do not assert either form until verified against the LIPs repo.]`
  `[BLOCKED TERM: Confluent/Confluence Upgrade — excluded from TERMINOLOGY_LOCK pending human resolution of definition conflict]`
  `[verify-against: https://github.com/livepeer/LIPs]` (for canonical upgrade name — LIP-73 referenced in body)

- **Delta Upgrade** — Glossary says "Planned future Livepeer protocol phase focused on full decentralization with Truebit-based verification." The roadmap wiki is listed as primary for upgrade phase completion status with note "Medium staleness — Delta completion status may be outdated." Do not assert as completed or pending without verification.
  `[verify-against: https://github.com/livepeer/wiki/wiki/Roadmap]`
  Retained as a conceptual reference term but not locked as a hard fact about current state.

- **Cascade** — Glossary: "Strategic vision for Livepeer to become the leading platform for real-time AI video pipelines." Context adds "A named protocol upgrade and roadmap phase introducing AI subnet capabilities." Roadmap wiki is the primary source.
  `[verify-against: https://github.com/livepeer/wiki/wiki/Roadmap]`
  Retained as directional context only; not asserted as current live state.

- **veLPT (Vote-Escrowed LPT)** — `deprecated-terms.md` explicitly notes: "Proposal not yet implemented — do not describe as existing." Excluded.

- **Inflation Model** — `deprecated-terms.md` flags: "Overlaps with Dynamic Inflation — use 'Dynamic Inflation' instead." Not used.

- **"Network Participant"** — `deprecated-terms.md` flags as unclear/conflicted. Not used; role-specific labels preferred.

- **Streamflow, Snowmelt, Tributary** — Historical upgrade names. Relevant to About tab depth; for Home they are background context not needed for routing. Not included in TERMINOLOGY_LOCK.

- **ComfyUI, ComfyStream, Daydream** — Product and tool names. Relevant to Developers/Solutions tabs. Not core to Home's routing function. Not included.

- **Avatar, NPC, Digital Twin, SLAM, World Model, Synthetic Data** — Application-layer AI use case terms. Out of scope for Home's orientation/routing purpose. Not included.

- **Frame Rate, VOD, Real-time, Latency, Style Transfer, Upscaling** — Technical media/AI terms. Belong in role-specific tabs. Not included in Home TERMINOLOGY_LOCK.

- **SPE (Special Purpose Entity)** — Governance depth term. Belongs in About/Community tabs. Not needed for Home's routing function.

- **Proof of Utility** — Glossary present. Relevant for protocol depth (About tab). Home can reference it as a concept but the definition is not core to routing. Not included in TERMINOLOGY_LOCK.

- **Compute Marketplace / Marketplace** — Two separate glossary entries with very similar definitions. For Home, the concept is adequately covered by "decentralised compute network." Not locked separately; flagged as potential duplicate in Addendum.

---

> **TERMINOLOGY_LOCK (final)**: `Livepeer, decentralised compute network, Arbitrum, LPT (Livepeer Token), orchestrator, gateway, delegator, developer, builder, video transcoding, AI inference, staking, delegation, governance, job, probabilistic micropayments, reward, treasury, permissionless, trustless, smart contract, Layer-2, GPU operator`

---

### Step 0.3 — Anchoring Questions

**1. What does this audience call themselves?**

Home receives every visitor before they have self-identified within Livepeer's terminology. The arriving audience members call themselves things like:
- "a GPU miner / GPU rental operator" (future orchestrators)
- "a streaming infrastructure engineer" or "a video platform developer" (future gateways or builders)
- "a DeFi investor / yield farmer" (future delegators)
- "a crypto researcher / blockchain developer" (future protocol contributors)
- "an AI developer / ML engineer" (future AI pipeline builders)
- "a complete newcomer — I heard about Livepeer from a friend / article / Discord"

None of these labels are Livepeer-native. The Home tab must meet readers in their own language before Livepeer's role taxonomy is introduced.

**2. What are the 3–5 actions that define their core job on this tab?**

The actions that define what this audience does on the Home tab (in their own language):
1. Work out what Livepeer actually is and whether it is relevant to them
2. Figure out which part of this documentation site applies to their situation
3. Understand how Livepeer fits into what they already know (blockchain, video streaming, AI, GPU compute, token investing)
4. Decide whether to keep reading or leave
5. Navigate to the section that matches their role or goal

**3. Terms in the TERMINOLOGY_LOCK with a network-specific meaning that differs from the industry default:**

| Term | Industry default meaning | Livepeer-specific deviation |
|---|---|---|
| **Orchestrator** | A system that coordinates containerised workloads (e.g. Kubernetes); or a service mesh component | In Livepeer: a GPU hardware operator who stakes LPT and earns fees by processing compute jobs — a human participant role, not a software component |
| **Gateway** | A network router or API gateway — a software component routing traffic between systems | In Livepeer: the demand-side operator role — a business or developer who routes jobs into the network and manages payments to orchestrators |
| **Job** | Generically: any unit of scheduled work | In Livepeer: a specific protocol artifact with a defined lifecycle — submission, orchestrator selection, execution, verification, payment settlement |
| **Delegator** | In general use: one who assigns tasks to another | In Livepeer: a token holder who stakes LPT to an orchestrator without running infrastructure, earning rewards and participating in governance |
| **Staking** | Broadly: locking cryptocurrency to earn yield | In Livepeer: specifically locking LPT to signal trust in an orchestrator; also determines that orchestrator's eligibility for and share of the work pool and governance weight |
| **Transcoding** | Standard industry term for video format conversion | In Livepeer: one of two compute types the network processes, alongside AI inference — it carries the additional meaning of being the primary original workload type |
| **Reward** | Generically: any financial return | In Livepeer: has a specific two-component structure — inflationary LPT (per round) and ETH job fees (from winning micropayment tickets) |

**Gate check**: AUDIENCE derived, TERMINOLOGY_LOCK generated, all three anchoring questions answered. Proceeding to Phase 1.

---

## Arriving Question

> "I've heard of Livepeer — is this for me, and if so, where do I start?"

This arriving question captures the state of virtually every visitor to the Home tab: they have some prior signal (a mention, a search result, a referral) but have not yet formed a picture of what Livepeer is, whether it is relevant to their situation, or which part of the documentation is theirs. The question contains both a viability check ("is this for me?") and a navigation intent ("where do I start?") — which reflects the dual function of the Home tab.

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | The Evaluating Builder | Search result ("livepeer API", "decentralised video API", "AI inference API"), external article, or referral from developer community | Knows they need video or AI infrastructure; has evaluated AWS/GCP equivalents; has not used decentralised compute before | Has confirmed Livepeer solves their use case and has landed on the Developers or Solutions tab | 3 | 3 | 3 | 9 |
| 2 | The Curious GPU Operator | Discord referral, Reddit/crypto forum post, "GPU monetisation" search, YouTube video | Runs GPU hardware (mining rig, gaming PC, data-centre GPU); has heard they can earn fees; knows nothing about Livepeer's protocol | Has confirmed the role fits (orchestrator vs pool node decision deferred to Orchestrators tab) and has navigated there | 3 | 3 | 3 | 9 |
| 3 | The Token Investor / Delegator-to-Be | CoinGecko/CMC listing, crypto news article, DeFi yield search, referral from tokenomics discussion | Holds or is evaluating LPT as an investment; wants to understand what the token does and how staking works | Has confirmed what LPT is for and has navigated to the Delegators tab | 3 | 2 | 3 | 8 |
| 4 | The Protocol Researcher | Academic paper citation, whitepaper link, Twitter/X thread, "decentralised AI network" search | Technically sophisticated; studying decentralised compute, DePIN, or on-chain AI; no intent to participate immediately | Has formed an accurate conceptual model of how Livepeer works and has navigated to About for depth | 2 | 2 | 2 | 6 |
| 5 | The Complete Newcomer | Word-of-mouth, social media mention, general "what is Livepeer" search | No prior knowledge of Livepeer, blockchain, or the compute network space; orienting from zero | Has a basic accurate picture of what Livepeer is and has identified one section to explore further | 3 | 1 | 2 | 6 |
| 6 | The Community / Ecosystem Contributor | Foundation blog post, governance forum link, community Discord, grant announcement | Interested in contributing to the ecosystem — writing, governance, tooling, or community work; not primarily a technical operator | Has found the Community or governance entry point and navigated there | 1 | 1 | 2 | 4 |

**Note on scoring assumptions**: In the absence of analytics data, volume is estimated from the Product Context block. Video/AI infrastructure builders and GPU compute operators represent the most commercially active entry points for a compute network product. Token/delegation interest is common given LPT's listing on exchanges. Researchers are a meaningful but smaller population. Complete newcomers are high volume but have thin dedicated content (they are served by the orientation function of the page, not a dedicated deep path). Community contributors are relatively low volume at the Home entry point.

**Tie-breaking note (Rank 1 and 2 tied at 9)**: Rank 1 (Evaluating Builder) is placed first because their tab routing decision has the highest commercial impact for the network and because the solutions/developer path has the most content depth to support them. Rank 2 (GPU Operator) is placed second — both drive the section structure equally and neither can be subordinated to the other.

---

**Primary persona**: The Evaluating Builder — this persona drives the primary value proposition framing of the Home tab. All other personas are accommodated within the structure but do not add sections unless their path is otherwise blocked.

**However**: The Evaluating Builder and the Curious GPU Operator are tied on score and represent completely different participation paths with different entry states, vocabulary, and routing destinations. Both must receive unblocked paths. The Home tab must route cleanly to both.

**Self-identification check**: What label does this audience use to self-identify?

Arriving visitors span: "developer", "GPU operator / miner", "investor / token holder", "researcher", "complete newcomer", "community contributor". These labels do not map cleanly to a single protocol role. A visitor calling themselves a "developer" could be a `builder` (Solutions), a `developer` (Developers), or a `gateway` operator (Gateways). A visitor calling themselves a "GPU operator" is almost certainly heading toward `orchestrator` but needs to understand whether they qualify to run solo or should join a pool.

**Decision**: A dedicated disambiguation section is required as the first content section. There are more than two meaningfully different paths (6 distinct personas across 5 destination tabs), and a reader cannot identify their correct path without reading content. The S1 section routes the reader to the correct tab by helping them identify which role or goal matches their situation.

**Entry blockers**:

- **The Evaluating Builder**: No hard-stop blocker for reading docs, but they need to understand what Livepeer does before they can evaluate it. The value proposition must precede routing. No on-chain funding required to evaluate.
- **The Curious GPU Operator**: No hard-stop blocker at Home. They need enough conceptual clarity to know they belong on the Orchestrators tab. The disambiguation section resolves this.
- **The Token Investor / Delegator-to-Be**: No hard-stop blocker at Home. They need confirmation that LPT is a staking/governance token (not just a speculative asset) and a clear route to the Delegators tab.
- **The Protocol Researcher**: No hard-stop blocker. They need enough depth signal to confirm the About tab is where they should go.
- **The Complete Newcomer**: The only blocker is vocabulary — if the Home tab leads with network jargon before establishing what Livepeer is, newcomers will leave. The platform explanation must precede role descriptions.
- **The Community Contributor**: No hard-stop blocker. They need to see that a community/governance path exists.

**Section ordering implication**: The value proposition / "what is Livepeer" section must appear before the disambiguation/routing section, because readers cannot self-identify a role before they understand what the network does.

**Gate**: 6 personas, all distinct, all with different arriving states and entry vectors. Minimum 3 met. Proceeding to Phase 2A.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I arrive having heard about Livepeer but knowing nothing concrete about it | understand what Livepeer actually does in one clear reading | decide in under two minutes whether it is relevant to my situation and worth reading further |
| J2 | I know I need video or AI compute infrastructure and am comparing Livepeer against cloud alternatives | confirm that Livepeer handles my specific workload type (live video transcoding, VOD, or AI inference) and understand the pricing/trust model | make a go/no-go decision and navigate to the technical section that proves it |
| J3 | I run GPU hardware and want to earn fees from it on a decentralised network | confirm that Livepeer accepts GPU compute supply, understand roughly what operating an orchestrator involves, and identify where to start | navigate to the Orchestrators tab with enough context to evaluate whether I can participate solo or need to join a pool |
| J4 | I hold LPT or am researching it as a token investment | understand what LPT does in the protocol (staking, governance, rewards) beyond "utility token" generalities | navigate to the Delegators tab to understand the mechanics, or confirm the token has real protocol utility |
| J5 | I am technically sophisticated and want to understand how Livepeer's protocol works at an architectural level | find the route to protocol-depth content (network architecture, tokenomics, governance model) | determine whether Livepeer's design is sound and relevant to my research or integration work |
| J6 | I want to contribute to the Livepeer ecosystem (writing, governance, tooling, events) but I am not an operator or developer | identify that a community/contributor path exists and find where it starts | navigate to the Community tab without having to determine which technical path applies to me |
| J7 | I am returning to the docs after being away for a while and want to know what has changed | quickly identify whether there has been a significant protocol upgrade or product change since my last visit | decide whether I need to re-read any section or update my configuration |

**Gate**: 7 jobs. All first-principles — not derived from any current nav structure. Cover arrival jobs (J1, J2, J3, J4), active evaluation (J5), edge cases (J6, J7). Gate passed. Proceeding to Phase 2B.

---

## Ideal Journey

**Linear:**

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | First contact — forming a picture | `discover` | Reading the Home tab for the first time; has no prior knowledge of Livepeer's structure; trying to answer "what is this?" |
| 2 | Role identification — finding their path | `discover` | Using the orientation/disambiguation content to match their own situation to one of the network's participation paths |
| 3 | Value proposition validation | `evaluate` | Reading just enough about the participation path they've identified to confirm it can deliver what they need |
| 4 | Entry to the role tab | `setup` | Following the correct routing link to their role-specific tab; Home's job is done at this point |

Note: The Home tab's linear journey is intentionally short. Its goal is not to complete any reader's journey — it is to start it correctly. The tab should not attempt to replace the role tabs. Readers who stay too long on Home have not been routed.

**On-demand:**

- Current network participation data (how many orchestrators, total stake, treasury size) — for researchers and investors checking live network health
- Plain-language explanation of what LPT is and why it has value — for token researchers and newcomers
- Quick confirmation that a specific workload type (live transcoding, VOD, AI inference) is supported — for builders and gateway operators checking fit
- Routing links to all role tabs — for returning visitors or anyone who needs to navigate between sections
- What changed since last visit — for returning users checking for protocol or product updates
- Explanation of Livepeer's decentralisation model vs a cloud provider — for builders evaluating vendor risk
- How Livepeer differs from other decentralised compute networks — for researchers doing comparative analysis

**Cross-tab:**

| Direction | From / To | Why |
|---|---|---|
| Inbound | External (search, social, referral) → Home | Home is the first page most new visitors hit; it has no inbound tab because it is the top-level entry point |
| Outbound | Home → About | Readers who need protocol architecture depth, tokenomics, actor definitions — typically researchers and technically sophisticated builders |
| Outbound | Home → Solutions | Founders and builders evaluating Livepeer for a product — need to understand the product offering before the protocol |
| Outbound | Home → Developers | Builders who already know what they want to build and are ready for technical integration depth |
| Outbound | Home → Gateways | Developers or businesses who want to route jobs into the network and operate gateway infrastructure |
| Outbound | Home → Orchestrators | GPU hardware operators wanting to provide compute supply to the network |
| Outbound | Home → Delegators | LPT token holders wanting to stake and participate in governance |
| Outbound | Home → Community | Ecosystem contributors, governance participants, newcomers looking for community entry |
| Outbound | Home → Resource HUB | Readers wanting reference material, changelog, or cross-cutting index content |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1 — Which path is mine? | "I'm on the Livepeer docs — which section is actually for me?" | J1 | `orient` | `navigation` | Has arrived at the site; has no Livepeer-specific role identity; may or may not know what Livepeer is | Has identified which participation path (and therefore which tab) applies to their situation | `discover` |
| S2 — What is Livepeer? | "What does Livepeer actually do and why does it exist?" | J1 | `explain` | `concept` | Has arrived with a signal (mention, search, referral) but no concrete understanding of the platform | Has formed an accurate one-sentence understanding of what Livepeer does and can articulate it to themselves | `discover` |
| S3 — What kind of work does Livepeer process? | "Does Livepeer handle my type of workload — live video, on-demand video, or AI inference?" | J2 | `explain` | `concept` | Knows what Livepeer is at a high level; needs to confirm workload-type fit before proceeding | Has confirmed whether their workload type (video transcoding or AI inference) is supported; has a routing signal toward the correct role tab | `discover` |
| S4 — How does the network work? | "How does Livepeer connect supply (GPU operators) with demand (applications)? What keeps it honest?" | J5 | `explain` | `concept` | Has a basic picture of what Livepeer does; wants to understand the underlying mechanism before trusting it | Has a working model of the supply/demand matching mechanism and can explain why the incentive structure produces reliable compute; can decide whether to read further or go to About for depth | `discover` |
| S5 — What is LPT and why does it matter? | "What does the Livepeer Token actually do — is it just speculation or does it have a real role in the network?" | J4 | `explain` | `concept` | Has heard of LPT; does not understand its protocol function | Has confirmed that LPT has three distinct functions (staking/eligibility, delegation/rewards, governance) and can navigate to the Delegators tab to evaluate the mechanics in detail | `evaluate` |
| S6 — Who builds on Livepeer and what have they built? | "Has anyone actually shipped something real using Livepeer? Can I see examples of what it's used for?" | J2 | `evaluate` | `concept` | Has a working model of the network; wants evidence that the platform is credible and used in production | Has reviewed at least two concrete use-case examples and can name a workload category that applies to their situation; has a routing signal toward Solutions or Developers | `evaluate` |
| S7 — Where do I start for my role? | "I know what Livepeer is and I have a sense of where I fit — how do I get to the right place quickly?" | J1, J3, J4, J6 | `orient` | `navigation` | Has read enough to know which participation path applies to them | Has clicked through to the correct role tab or used the role-routing interface to begin their specific journey | `discover` |
| S8 — What has changed recently? | "Has there been a significant protocol upgrade or product change that I should know about?" | J7 | `update` | `reference` | Returning visitor, or new visitor who has been tracking Livepeer over time and wants to confirm current state | Has confirmed whether there is a significant recent change and has navigated to the relevant depth content (changelog, release notes, or upgrade documentation) | `discover` |

**Section count**: 8 sections. Within the target range of 8–12. Home's shorter count reflects its routing function — its job is to start reader journeys, not complete them. A longer section count would risk duplicating what the role tabs should do.

**Design flag check — S1 and S7 overlap potential**: S1 is the disambiguation section (which path is mine?). S7 is a role-routing exit ramp (where do I start?). These are structurally different: S1 appears first and is for readers who haven't yet identified their role; S7 appears last and is for readers who have completed enough orientation to commit to a path. No flag required — distinct entry states and distinct reader jobs.

**Design flag check — S2 and S3 overlap potential**: S2 explains what Livepeer is; S3 explains what workloads it handles. These could merge. However, "what Livepeer is" and "which specific workload it handles" serve different reader states: a complete newcomer needs S2 before S3 makes sense, and an experienced builder arriving with a specific workload question can skip S2 and go directly to S3. Keeping them separate supports both flows. No split flag required.

**Design flag check — S4 "How does the network work?"**: This section is doing conceptual explanation work that could expand. For Home, it must remain introductory — enough for the reader to trust the mechanism, with a clear link to About for depth. If it begins to cover staking parameters, governance mechanics, or payment details, it needs to split. `[⚠ Design flag: may need to split if network mechanism explanation expands beyond orientation depth — watch for S4 absorbing staking, governance, and payment content that belongs in About]`

**Cross-tab gate applied**: S4 is introduction-only for the network mechanism — deep content remains in About. S5 introduces LPT but links to Delegators for mechanics. S6 introduces use cases but links to Solutions/Developers for depth. S7 uses routing to all role tabs. No CROSS-TAB rows required — all section content is needed by the Home audience to achieve their routing goal.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| The Evaluating Builder | S2 (what is Livepeer?) — they arrive with intent; can skip S1 disambiguation if they already know they want to build | S6 (use cases) or S7 (role routing) — after confirming workload support and seeing evidence of real use | None | S3 must confirm their specific workload type is supported before they will trust S6's examples — confirmed: S3 precedes S6 | None |
| The Curious GPU Operator | S1 (which path is mine?) — they need to confirm "GPU operator" maps to "Orchestrator" before anything else makes sense | S7 (role routing) — after S1 identifies their path, they navigate directly to Orchestrators | None — S1 explicitly covers this path | S4 (how the network works) provides enough mechanism context for them to understand why their stake matters before they commit to the Orchestrators tab | None |
| The Token Investor / Delegator-to-Be | S1 or S5 (what is LPT?) — either identifying their path at S1 or arriving directly at the LPT explanation if they came via token-specific search | S5 (LPT explanation) then S7 (routing to Delegators) | None | S5 must appear before S7 — confirmed: S5 precedes S7 | None |
| The Protocol Researcher | S2 (what is Livepeer?) — needs foundational framing before assessing protocol depth | S4 (how the network works) + S7 (routing to About) — S4 gives them enough to confirm there is depth worth pursuing; S7 routes to About | None | S4 must signal that About exists for protocol depth — confirmed: this is the routing function of S4 | None — About tab carries the depth; S4 correctly routes there |
| The Complete Newcomer | S1 (which path is mine?) or S2 (what is Livepeer?) — they need the most basic orientation first | S7 (role routing) — after they have identified one section to explore | None | S2 must precede S1 in logical reading order — however, S1 is the disambiguation section and is structurally first. **Resolution**: S1 can contain a one-sentence "what is Livepeer" anchor (2–3 words of context) before presenting role options. This does not require S2 to move — S1 is a routing section, not a teaching section, and the anchor text is orientation scaffolding, not explanation. The full explanation lives in S2 which the newcomer will read after or alongside S1. | None |
| The Community / Ecosystem Contributor | S1 (which path is mine?) — the Community path must be visible here | S7 (role routing) — routing to Community tab | None | S1 must include Community as an explicit path option — confirmed: S1 is designed for all 5+ destination tabs including Community | None — but Community path visibility in S1 must be designed explicitly; do not allow Community to become a default "none of the above" option |

**Gap identified and resolved**: The Complete Newcomer's knowledge gap (needs basic "what is Livepeer" before role disambiguation) is resolved by adding a brief orientation anchor to S1 — not by reordering sections. S1 remains structurally first with `lifecycleStage: discover` and `purpose: orient`.

**All personas have complete, unblocked paths.**

---

## Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table — multi-audience, routing tab, all role tokens at `discover` stage
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary as cross-check only
- [x] Phase 0: Any glossary term with a heading/body expansion mismatch flagged as `[DEFINITION CONFLICT]` or `[BLOCKED TERM]` — BYOC and Confluent/Confluence Upgrade flagged and blocked
- [x] Phase 0: No governance-controlled numeric values hard-coded — active set size, unbonding period, target bonding rate, treasury reward cut rate all flagged `[verify-live]`
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock
- [x] Arriving question is specific — "I've heard of Livepeer — is this for me, and if so, where do I start?" — not a topic, an actual question
- [x] Personas described with motivation and entry vector — 6 distinct personas, not role labels; each has a different arriving state and entry vector
- [x] Self-identification check done — dedicated disambiguation section added as S1 (more than 2 paths; readers cannot self-identify without content)
- [x] Entry blockers identified and resolved by section order — S2 (what is Livepeer?) logically precedes S1 in reading preference but S1 is structurally first; resolved by adding orientation anchor to S1 without reordering
- [x] Jobs are first-principles — 7 jobs, none derived from current nav structure
- [x] Every section has a reader question, job, entry state, and exit state
- [x] No exit state uses "understands" — all are concrete actions or decisions
- [x] Cross-tab gate applied — decision-enabling content included; no CROSS-TAB rows needed (all content is needed by Home audience for routing goal)
- [x] Persona path validation done — every persona has an unblocked path; one gap (newcomer needs orientation before disambiguation) resolved by structural note on S1
- [x] All enum values are canonical — `purpose` (15 values used: orient, explain, evaluate, update); `pageType` (7 values used: navigation, concept, reference); `lifecycleStage` (7 values used: discover, evaluate, setup) — no invented tokens
- [x] Disambiguation section (S1) has `pageType: navigation`, `lifecycleStage: discover`, `purpose: orient` — confirmed

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.1]**: The Audience Definitions table has no single token for Home, exactly as it has none for About (which carries an explicit note). Home's case is analogous but the note is only written for About. Assumption made: Home is a multi-audience routing tab; AUDIENCE is recorded as `multi-audience` with all role tokens at `discover` stage. Suggested improvement to prompt: add an explicit note in the Audience Definitions table for Home parallel to the About note.

- **[Phase 0 / Step 0.2 — BYOC]**: The BYOC glossary entry has a heading that presents two simultaneous expansions ("Bring Your Own Compute / Bring Your Own Container") where Compute ≠ Container is a substantive semantic difference. The definition body asserts only "Bring-Your-Own-Container." This is a definition conflict per the prompt's Phase 0 rule. Flagged as `[DEFINITION CONFLICT]` and `[BLOCKED TERM]`. Suggested resolution source: go-livepeer repo latest tagged release — the flag or feature name used in code is the canonical form. A quick search of the repo for "BYOC" in flag definitions or documentation strings would resolve this.

- **[Phase 0 / Step 0.2 — Confluent/Confluence Upgrade]**: The glossary heading reads "Confluent Upgrade" but the body reads "Confluence upgrade (also called Confluence)." "Confluent" and "Confluence" are different words — this is a substantive naming conflict, not a formatting variation. The LIPs repo entry for LIP-73 is the canonical source for the formal upgrade name. Flagged as `[DEFINITION CONFLICT]` and `[BLOCKED TERM]`. Human resolution required before either term is used in documentation.

- **[Phase 0 / Step 0.2 — Compute Marketplace / Marketplace]**: The glossary contains two separate entries ("Compute Marketplace" and "Marketplace") with nearly identical definitions. Both describe the same concept — the decentralised mechanism matching GPU supply with compute demand. This is a potential duplicate term in the glossary rather than a definition conflict, but it should be consolidated. Neither term was locked for Home (the Product Context phrasing "decentralised compute network" is sufficient at this level). Flagged here for the terminology team.

- **[Phase 0 / Step 0.2 — AI Video]**: `deprecated-terms.md` flags "AI Video" as a draft term with thin definition and no external reference. The glossary marks its status as "draft." Excluded from TERMINOLOGY_LOCK. However, "AI inference" (from the Product Context block) is locked and covers the same conceptual territory. If "AI Video" is intended to mean something distinct from AI inference (e.g. AI-powered video specifically, not AI inference in general), that distinction needs a clear definition before it can be used in documentation.

- **[Phase 0 / Step 0.2 — NaaP]**: The veracity-sources.md file references "NaaP (Network as a Platform)" and specifically flags the potential conflict between "Network as a Platform" and "Network-as-a-Product" as an example of a definition conflict to watch for. NaaP does not appear in the Home glossary, so there is no conflict to flag for this run. However, this term may surface in the About or Solutions tabs. Pre-flagging for those runs: check Notion (per veracity-sources instructions) for the canonical NaaP definition before using it.

- **[Phase 0 / Step 0.3 — No web access]**: The prompt instructs to search for recent primary sources if web access is available. No web access confirmed during this run. `[SUGGESTED SOURCE: Livepeer Explorer live data — https://explorer.livepeer.org — live on-chain state for active set size, stake distribution, treasury balance — primary]` (already in veracity-sources). `[SUGGESTED SOURCE: Livepeer Foundation blog — https://blog.livepeer.org — ecosystem announcements and SPE framing updates — acceptable]` (already in veracity-sources). No new sources to suggest from this run.

- **[Phase 1]**: The Audience Definitions table lists `founder` separately from `builder`. At the Home tab level, both arrive in an "evaluating" mode rather than a "building" mode — the distinction between founder (evaluating for a business) and builder (building with the API) matters more at the Solutions and Developers tabs than at Home's routing level. The Evaluating Builder persona is intentionally broad enough to cover both, with the disambiguation happening at S1 and S7 when they route to Solutions vs Developers. If this creates a problem during detailed design of S1, a founder-specific routing option should be added explicitly.

- **[Phase 2C / Section ordering]**: The Disambiguation Rule in the prompt states the disambiguation section must appear as the first content section. However, the Complete Newcomer persona has a knowledge gap: they cannot self-identify a role without first understanding what Livepeer is. This creates a logical sequencing tension. Resolution adopted: S1 carries a minimal orientation anchor (2–3 sentences max) to give newcomers enough context to use the disambiguation paths, without displacing S2 or making S1 do the work of explanation. This is flagged for detailed design — S1's minimal anchor must not grow into a duplicate of S2.

- **[Phase 2C / S4 design flag]**: S4 ("How does the network work?") accumulates risk as Home content is written. The mechanism explanation can easily pull in staking parameters, governance detail, and payment mechanics — all of which belong in About. This section must remain introduction-depth only. `[S4 is carrying mechanism-explanation work that could expand beyond Home's orientation scope — monitor during detailed design; if S4 grows beyond ~200 words it likely needs to split or delegate more explicitly to About]`

- **[Phase 2C / Section count]**: 8 sections — within the 8–12 target range. The lower count is appropriate for a routing/landing tab whose primary function is to start journeys rather than complete them. If Home content is later expanded to include product-depth content (e.g. case studies, network statistics sections), additional sections may be warranted and the section count should be re-evaluated.

- **[Phase 2B / Linear journey]**: The Home tab's linear journey has only 4 stages, ending at "entry to the role tab." This is intentional — Home's job is routing, not education. The prompt's instruction to "cover the full journey from first arrival to operating state" was interpreted to mean the full journey through the Home tab specifically, not the full journey to operating state on the network (which is completed in the role tabs). This interpretation is flagged: if the intent is to design Home so that it also introduces operating-state concepts, the section count and linear journey would need to expand.
