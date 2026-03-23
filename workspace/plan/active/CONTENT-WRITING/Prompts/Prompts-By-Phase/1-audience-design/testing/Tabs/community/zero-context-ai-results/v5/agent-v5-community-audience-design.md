# Community — Audience Design

**Tab**: Community
**Audience**: `community`
**TERMINOLOGY_LOCK**: governance, LPT, treasury, SPE (Special Purpose Entity), LIP (Livepeer Improvement Proposal), stake-weighted voting, vote detachment, delegator, orchestrator, inflationary rewards, reward cut, bonding, unbonding period, quorum, passing threshold, pre-proposal, workstream, advisory board, grant, bounty, round
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

### Step 0.1 — AUDIENCE

**AUDIENCE**: `community`

### Step 0.2 — TERMINOLOGY_LOCK

The following 20 terms are central to this audience's work on the network. They are derived from the Product Context block with the per-tab glossary used as a cross-check only. Terms marked `[verify-live]` reference governance-controlled values that may change without a code deployment.

| # | Term | Definition (from Product Context + reasoning) | Flags |
|---|---|---|---|
| 1 | governance | The system of processes — on-chain voting, forum discussion, proposal authoring — by which LPT holders collectively decide protocol changes and treasury spending | — |
| 2 | LPT | Livepeer Token — the network's ERC-20 staking and governance token. Staked LPT determines orchestrator selection probability, delegation reward share, and voting weight | — |
| 3 | treasury | The on-chain pool of LPT funded by a governance-controlled share of each round's inflation, disbursed via on-chain votes to fund ecosystem work | `[verify-live: https://explorer.livepeer.org/treasury]` |
| 4 | SPE (Special Purpose Entity) | A treasury-funded organisational unit with defined scope, budget, and accountability structure, the primary vehicle for executing funded community work | — |
| 5 | LIP (Livepeer Improvement Proposal) | The formal design document through which protocol changes are proposed, discussed, and ratified; immutable once `Final` | `[verify-against: https://github.com/livepeer/LIPs]` |
| 6 | stake-weighted voting | Governance voting where each participant's vote weight equals their bonded LPT stake at the snapshot block | `[verify-against: https://github.com/livepeer/wiki/wiki/Governance]` |
| 7 | vote detachment | The mechanism by which a delegator independently overrides their orchestrator's governance vote using their own stake weight | `[verify-against: https://github.com/livepeer/wiki/wiki/Governance]` |
| 8 | delegator | An LPT holder who bonds tokens to an orchestrator they trust, earning a share of rewards without running infrastructure | — |
| 9 | orchestrator | A GPU hardware operator who connects machines to the network and earns fees by processing video transcoding and AI inference jobs | — |
| 10 | inflationary rewards | New LPT minted each protocol round and distributed to active orchestrators and their delegators proportional to bonded stake | — |
| 11 | reward cut | The percentage of inflationary LPT an orchestrator retains before distributing the remainder to their delegators; set by each orchestrator | — |
| 12 | bonding | The act of locking LPT to an orchestrator in Livepeer's delegated proof-of-stake system; the source of delegation stake weight and reward eligibility | — |
| 13 | unbonding period | The waiting period after initiating unbonding during which LPT is locked and cannot be transferred or re-staked | `[verify-live: https://explorer.livepeer.org]` (governance-controlled value — glossary states 7 rounds) |
| 14 | quorum | The minimum stake participation required for a governance vote to be considered valid | `[verify-live: https://explorer.livepeer.org/treasury]` |
| 15 | passing threshold | The minimum proportion of "for" votes (excluding abstentions) required for a governance proposal to pass | `[verify-live: https://explorer.livepeer.org/treasury]` |
| 16 | pre-proposal | An informal governance discussion posted on the Forum before a formal LIP or treasury proposal, used to gather early feedback | — |
| 17 | workstream | A focused execution team organised around a specific domain, translating advisory board recommendations into phased funded initiatives | — |
| 18 | advisory board | A domain-specific strategic body that recommends priorities for Livepeer workstreams | — |
| 19 | grant | A non-repayable allocation from the community treasury or Livepeer Foundation for ecosystem development contributions | — |
| 20 | bounty | A reward for completing a specific, well-defined task funded by the community treasury or Foundation | — |
| — | round | A discrete time interval (measured in Arbitrum blocks, approximately one day) for calculating staking rewards and protocol state transitions | `[verify-live: https://explorer.livepeer.org]` |

**Note on term count**: 21 terms are locked (including `round`). The Community tab spans several distinct participation paths — governance participation, contribution/funding, ecosystem newcomer orientation, and protocol economics context — and 20 terms provides minimal coverage without omitting any path. See Addendum.

**Deprecated term check**: No deprecated terms from `deprecated-terms.md` appear in this lock. `veLPT` was noted in `deprecated-terms.md` as a draft proposal not yet implemented — it is excluded from the lock. `Inflation Model` overlaps with dynamic inflation — not included; the lock uses `inflationary rewards` instead. `Active Set Election` overlaps with the broader governance context but is not central enough to include; the underlying concept (`active set`) is addressed via `orchestrator` and `bonding` definitions.

**Glossary cross-check flags**:

- **Unbonding period**: The glossary states "7 rounds" as the unbonding period value. This is a governance-controlled parameter. The Product Context block does not hard-code this value. The glossary definition should not be treated as authoritative on the specific number — it requires `[verify-live: https://explorer.livepeer.org]` before any content asserts it. No conflict between sources — the value is simply unverified.

- **Treasury Reward Cut Rate**: The glossary states "currently 10%." This is governance-controlled (set via LIP-92 per `deprecated-terms.md`). The specific percentage requires `[verify-live: https://explorer.livepeer.org/treasury]` and `[verify-against: https://github.com/livepeer/LIPs]` before assertion. Not included in the lock as a numeric value.

- **Voting delay / Voting period**: The glossary states "1 round" (voting delay) and "10 rounds" (voting period). These are governance-controlled values. `[verify-live: https://explorer.livepeer.org/treasury]` before asserting in content.

- **Inflation Rate**: The glossary states "starts around 0.00042% per round and decreases by 0.00005% per round." The `deprecated-terms.md` lists `Inflation adjustment rate (0.00005% per round)` as a high-staleness term requiring verification. These values require `[verify-live]` — both numbers are governance-controlled. Not included in the lock with any specific value.

- **GWID (Gateway Wizard)**: The glossary gives a dual definition — the heading reads "GWID (Gateway Wizard)" but the body context describes it as "a Governance Workstream Identification number assigned to the Gateway Wizard SPE." These are two distinct meanings for the same acronym: (a) the SPE's name and (b) a governance tracking identifier. This is ambiguous. `[DEFINITION CONFLICT: GWID — heading says "Gateway Wizard" (an SPE name), body says "Governance Workstream Identification number" (an identifier class) — do not assert either form until resolved against https://forum.livepeer.org]`. Term excluded from TERMINOLOGY_LOCK. Noted in Addendum.

- **LISAR**: The glossary gives a dual interpretation — both "Livepeer Infrastructure and Services Accountability Report" (a document format) and "the SPE identity for the infrastructure services workstream" (an entity). If LISAR is both the document naming convention and the SPE name, this needs human confirmation. Not included in TERMINOLOGY_LOCK. Noted in Addendum.

**TERMINOLOGY_LOCK**: `governance, LPT, treasury, SPE (Special Purpose Entity), LIP (Livepeer Improvement Proposal), stake-weighted voting, vote detachment, delegator, orchestrator, inflationary rewards, reward cut, bonding, unbonding period, quorum, passing threshold, pre-proposal, workstream, advisory board, grant, bounty, round`

### Step 0.3 — Anchoring Questions

**1. What does this audience call themselves?**

Before finding this network, this audience calls themselves: community members, open-source contributors, protocol researchers, governance participants, token holders, ecosystem builders, or simply "people interested in [project]." There is no single unifying self-label — they identify by their primary activity (e.g. "I'm a governance voter," "I want to contribute to the project," "I hold LPT and want to understand how to participate"). For the purposes of this design, the dominant arriving self-label is "someone who wants to get involved" or "a token holder who wants to do more than just hold."

**2. What are the 3–5 actions that define their core job?**

In their own language, before knowing network-specific terms:
1. Learn how the project makes decisions and how to have a say
2. Find ways to contribute work and get paid or recognised for it
3. Stay informed about what is happening in the project
4. Understand what their tokens are doing and whether they are working for them
5. Find the right people and places to connect with others in the project

**3. Terms in TERMINOLOGY_LOCK with network-specific meanings that differ from industry default:**

- **bonding** — In standard finance/employment contexts, "bonding" refers to insurance or legal surety. In Livepeer, it means staking LPT to an orchestrator in a delegated proof-of-stake system. First-time readers will not recognise this usage — must be explained before use.
- **round** — In everyday language, a "round" is a period in a competition or a funding event. In Livepeer, it is a discrete protocol time interval (measured in blocks, ~1 day) governing reward distribution and protocol state. Must be explained before use.
- **reward cut** — In everyday language, "cut" suggests a reduction or penalty. In Livepeer, it is the share of inflationary rewards an orchestrator keeps — a normal configurable parameter, not a punishment. The framing is counterintuitive for newcomers.
- **vote detachment** — Has no standard industry equivalent. Specific to Livepeer's delegated governance design — a delegator can "detach" their stake-weight from their orchestrator's vote and cast independently. Must be defined fresh.
- **SPE (Special Purpose Entity)** — In traditional finance, an SPE/SPV is a legal entity used for risk isolation. In Livepeer governance, it refers to a treasury-funded work unit with accountability structures — a substantially different meaning. Must be explained before use.

---

## Arriving Question

> "I want to get involved with Livepeer — how do I actually participate, and where do I start?"

---

## Phase 1 — Persona Research

**Situation that triggers a visit**: The reader has encountered Livepeer — via a token purchase, a Discord invite, a mention in a governance forum, or a job/grant posting — and now wants to move from passive observer to active participant. They know Livepeer exists and has a community layer but do not yet know what "participating" looks like in practice.

**What they know at arrival**: They know Livepeer is a decentralised network with a token (LPT). They may know it does video and/or AI. They do not know: what governance looks like, how to vote, how the treasury works, how to contribute to earn rewards, or which community channels are active.

**What they do not know**: The structure of participation paths (governance voter vs. contributor vs. ecosystem builder), how proposals move from idea to vote, how SPEs and workstreams relate to each other, how grants and bounties work, what community events exist, or how their token holdings connect to governance power.

**Arriving question**: "I want to get involved — how do I actually participate, and where do I start?"

**Successful visit**: The reader has identified one specific participation path that matches their situation, taken one concrete first step on that path (e.g. posted a pre-proposal, applied for a grant, joined a community call, voted on a proposal), and knows what their next action is.

**Wrong-path risks**:
- Arriving thinking the Community tab is about building on Livepeer (that is the Developers / Solutions tab)
- Arriving thinking it is about running infrastructure (Orchestrators or Gateways tab)
- Confusing "governance" with needing to be a large token holder — accessibility is a key misconception
- Thinking participation requires technical expertise
- Not finding the grant/bounty path and leaving assuming there is no paid contribution route

### Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | The Engaged Holder | Discord/Forum link, token holder, has seen governance activity mentioned | LPT tokens staked or held; basic awareness of governance; no prior vote or proposal experience | Has voted on a live proposal or knows exactly how to; understands voting delay/period and how their stake weight works | 3 | 3 | 3 | 9 |
| 2 | The Contribution Seeker | Foundation blog post, grant announcement, Twitter/X referral, ecosystem job board | Wants to do paid work for the ecosystem; no knowledge of how treasury, grants, bounties, or SPEs work | Has identified one open bounty or grant to apply for, or knows how to post a proposal; has a specific next action | 3 | 3 | 3 | 9 |
| 3 | The Ecosystem Newcomer | Home tab CTA, About tab link, search result for "Livepeer community" | New to Livepeer entirely; may have heard it is an interesting project but does not know how it is structured or what participation means | Understands what the different participation paths are and has chosen one to explore further | 3 | 2 | 3 | 8 |
| 4 | The Protocol Researcher | Academic or DeFi research context, Whitepaper, LIPs repo, governance forum | Familiar with blockchain governance patterns; wants to understand Livepeer's specific governance design, SPE model, and treasury mechanics | Has a clear map of governance architecture, SPE/workstream structure, treasury flows, and where to find primary governance records | 2 | 2 | 2 | 6 |
| 5 | The Active Contributor | Already in the ecosystem (orchestrator, developer, or delegator) seeking to expand their participation | Knows the technical layer; wants community-layer involvement — events, dev calls, forums, working groups, governance contribution | Knows where the active community spaces are, which calls to join, how to engage in governance discussions, how to apply for a grant for work they are already doing | 2 | 2 | 2 | 6 |

**Volume assumption**: Volume scores are based on the community composition of a typical open protocol ecosystem. Token holders who want to participate but have not yet are the largest reachable group. Contribution seekers are the second largest because grant/bounty culture is a strong draw for open-source communities. Ecosystem newcomers are high volume but have shorter session depth. Researchers and active contributors are smaller but represent high return-visit frequency. No analytics data available — assumption stated explicitly.

**Primary persona**: The Engaged Holder and Contribution Seeker tie at 9. Because the Contribution Seeker's path (grant/bounty discovery, proposal process) is structurally distinct from the Engaged Holder's path (governance voting, LIP process) and each requires different content sections, both paths must be fully represented in the structure. The **Engaged Holder** is named primary persona because governance participation is the most time-sensitive use case (live votes have deadlines) and the highest-visibility reason to visit the Community tab. All other personas are accommodated within the structure.

> **Primary persona**: The Engaged Holder — drives the section structure. The Contribution Seeker path is fully represented as parallel sections because it is structurally distinct. All other personas are accommodated within those structures.

**Self-identification check**: The label "community member" maps to 3+ meaningfully different paths: (1) governance voter, (2) funded contributor, (3) ecosystem newcomer/learner. A reader self-identifying as "wanting to get involved" cannot identify their specific path without reading content first. A **dedicated disambiguation section is required** as the first content section.

**Entry blockers**:
- **Engaged Holder**: Needs to understand bonding → voting weight connection before governance participation makes sense. Must know that their LPT stake confers voting power and how vote detachment works. This is a **knowledge blocker** (not a funding/setup blocker), resolved by S2 (governance concepts).
- **Contribution Seeker**: No hard-stop technical blocker. Main blocker is not knowing the funding mechanisms exist. Resolved by S5 (treasury and funding paths).
- **Ecosystem Newcomer**: No hard-stop blocker. Addressed by S1 (disambiguation).
- **Protocol Researcher**: No hard-stop blocker. Addressed by sections on governance architecture and LIP process.
- **Active Contributor**: No hard-stop blocker. Addressed by community events and channels sections.

---

## Phase 2A — Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I hold LPT and see a governance vote is live | cast my vote or delegate my voting power to my orchestrator's position — or override it | exercise my stake-weighted influence on the protocol decision before the voting period closes |
| J2 | I want to propose a change to the protocol or treasury | understand the full proposal process — from pre-proposal to on-chain vote — and what I need to post at each stage | submit a well-formed proposal that moves through the governance process without being rejected on procedural grounds |
| J3 | I have skills and want to do paid work for the ecosystem | find open grants, bounties, or SPE work opportunities and understand how to apply | secure funded work for a contribution that benefits the network |
| J4 | I am new to Livepeer and want to figure out how I fit in | understand the different ways to participate and which one matches my situation and skills | take one concrete first step without wasting time on paths that are not right for me |
| J5 | I want to stay informed about what is happening in governance and the ecosystem | know which calls, forums, and channels carry the most signal and how to follow them without noise | remain an informed participant without spending excessive time searching |
| J6 | I want to understand how the treasury works and whether my LPT tokens are funding ecosystem activity | understand how inflation flows into the treasury, how SPEs and grants get funded, and how to track treasury spending | make an informed judgment about the health and use of community resources |
| J7 | I want to contribute to an SPE, workstream, or advisory board — not just vote | understand how SPEs and workstreams are structured, who leads them, and how to get involved as a team member or contributor | apply for a specific role or reach out to the right person without guessing at the structure |

---

## Phase 2B — Ideal Journey

### Linear

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Orienting to community participation | `discover` | Understanding what the Community tab covers, what the different participation paths are, and which one applies to them |
| 2 | Understanding how the protocol is governed | `discover` | Learning the governance model: on-chain voting, stake-weighted voting, vote detachment, LIPs, the proposal lifecycle |
| 3 | Participating in governance for the first time | `setup` | Casting a vote, reviewing a live proposal, or posting a pre-proposal on the forum |
| 4 | Understanding how treasury funding works | `evaluate` | Learning how LPT inflation flows into the treasury, how SPEs and grants are funded, and what kinds of work get funded |
| 5 | Finding and pursuing a funded contribution path | `setup` | Locating open grants, bounties, or workstream roles; preparing and submitting a proposal or application |
| 6 | Joining community spaces and staying connected | `operate` | Finding the right channels, calls, and forums; establishing a regular participation rhythm |
| 7 | Contributing to or launching a governance initiative | `build` | Authoring a LIP or treasury proposal; joining a workstream or SPE; running for an advisory board |

### On-demand

- Current live governance proposals and their voting deadlines
- Active SPEs, their mandates, team leads, and how to contact them
- Open grants and bounties and how to apply
- How treasury reward cut rate and quorum thresholds are set and where to verify current values
- How to verify current unbonding period and voting period duration
- Calendar of community calls (Dev Call, Treasury Talk, Water Cooler) and how to attend
- How to post a pre-proposal and what format it should follow
- How the KYO (Know Your Orchestrator) interview series works and how to participate
- Where to find the LIPs repo and how to read a LIP
- How vote detachment works and when to use it

### Cross-tab

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → Community | Home routes ecosystem newcomers and interested parties toward the Community tab as their entry point |
| Inbound | About → Community | About explains the protocol architecture and actor roles; readers who want to participate rather than just understand are routed to Community |
| Inbound | Delegators → Community | Delegators tab covers staking and governance mechanics; delegators who want to go beyond staking into active governance participation are routed to Community |
| Inbound | Orchestrators → Community | Orchestrators who want to participate in governance or contribute to ecosystem work are routed to Community |
| Outbound | Community → Delegators | Governance voting requires understanding bonding and stake weight — readers who need delegation depth are routed to Delegators |
| Outbound | Community → About | Protocol researchers and governance contributors who want conceptual depth on the network architecture, economics, and governance model are routed to About |
| Outbound | Community → Resource HUB | Readers who need the LIP index, glossary, or changelog after getting oriented in Community are routed to Resource HUB |

---

## Phase 2C — Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1 — Participation paths | "I want to get involved — which path is right for me?" | J4 | `orient` | `navigation` | Has arrived at the Community tab with no specific path in mind; knows Livepeer exists and has a community | Has identified which of the three primary participation paths (governance voter, funded contributor, ecosystem connector) applies to their situation, and has navigated to the first section of that path | `discover` |
| S2 — How Livepeer governance works | "How does the network make decisions, and what role does my LPT stake play?" | J1, J2 | `explain` | `concept` | Has chosen the governance path (from S1) or arrived directly as an Engaged Holder; knows LPT exists but has not participated in governance | Has mapped the full governance model — stake-weighted voting, vote detachment, LIP lifecycle, quorum, passing threshold, voting delay and period — and can explain how a decision moves from idea to executed change | `discover` |
| S3 — Voting on a live proposal | "There is a vote happening — how do I cast my vote before it closes?" | J1 | `start` | `instruction` | Knows the governance model (S2); has LPT staked (or is willing to stake before voting); wants to act on a specific live proposal | Has cast a vote (or confirmed their orchestrator voted on their behalf); knows when the voting period closes and how to verify their vote was recorded | `setup` |
| S4 — Writing and submitting a proposal | "I have an idea I want to bring to governance — how do I write a pre-proposal and move it to an on-chain vote?" | J2 | `build` | `guide` | Understands the governance model (S2); has an idea for a protocol change or treasury allocation; has not previously authored a governance document | Has posted a well-formed pre-proposal on the forum, received initial feedback, and has a clear map of the steps needed to reach an on-chain vote | `build` |
| S5 — How the treasury works | "Where does the treasury funding come from, and what kinds of work does it pay for?" | J6, J3 | `explain` | `concept` | Has chosen the funded contributor path (from S1) or arrived as a Contribution Seeker; knows Livepeer has a treasury but does not understand how it is funded or governed | Has mapped the full treasury flow — inflation → treasury reward cut → on-chain pool → SPE/grant/bounty disbursement — and can assess whether their contribution type is fundable | `evaluate` |
| S6 — Finding and applying for funded work | "I want to contribute to the ecosystem and get paid — what is open right now and how do I apply?" | J3, J7 | `choose` | `guide` | Understands the treasury model (S5); has a contribution in mind (tooling, research, documentation, infrastructure, etc.) | Has identified at least one open opportunity (bounty, grant, or SPE role) that matches their skills and has either submitted an application or knows exactly what to submit and where | `setup` |
| S7 — SPEs, workstreams, and advisory boards | "How is funded work organised — what are SPEs and workstreams, and how do I join one?" | J7 | `explain` | `concept` | Has reviewed S5 and S6; wants to understand the organisational layer beyond individual grants | Has mapped the SPE/workstream/advisory board structure, knows which active SPEs and workstreams exist, and has identified a specific team or lead to contact | `evaluate` |
| S8 — Community calls and events | "What calls and events should I be attending, and how do I find them?" | J5 | `orient` | `resource` | Active in or entering the community; wants to find the right recurring touchpoints and avoid missing important discussions | Has added the recurring community calls (Dev Call, Treasury Talk, Water Cooler) to their calendar and knows how to attend each | `operate` |
| S9 — Forums, channels, and communication norms | "Where does the community actually talk, and how do I participate without being ignored or posting in the wrong place?" | J5 | `learn` | `guide` | Wants to engage in community discussion; has not yet found the right channels or knows the communication conventions | Has joined the Governance Forum and relevant Discord channels, knows which channel serves which purpose, and has posted an introduction or first message | `setup` |
| S10 — Ecosystem projects and programmes | "What community-led projects and programmes exist, and is there something I can contribute to right now?" | J4, J5 | `orient` | `resource` | Has gone through S1 and wants a broader view of the ecosystem before choosing a specific contribution path | Has reviewed the current live ecosystem projects and programmes (Ambassador Programme, Live Pioneers, KYO, active SPE work) and has identified one to explore further | `discover` |
| S11 — Contributing to the protocol (technical) | "I am a developer — how do I contribute code, documentation, or tooling to the Livepeer open-source repos?" | J3, J7 | `start` | `instruction` | Has technical skills; has found the Community tab looking for a contribution path; wants specific first steps rather than a conceptual overview | Has identified the right repo, opened an issue or found an existing one to work on, understands the commit and PR conventions, and has a specific first task | `setup` |

**Section count**: 11 sections, within the 8–12 target range.

**S1 disambiguation note**: S1 has `pageType: navigation`, `lifecycleStage: discover`, `purpose: orient`. The reader is identifying which path applies to them, not yet evaluating options. Its exit state is: "has identified which participation path applies to their situation." This satisfies the disambiguation section rule.

**Section load check**:
- S2 and S7 each carry meaningful conceptual load across the governance and organisational dimensions, but each serves a single reader state with a single entry and exit condition. No split required.
- **S5 (How the treasury works)** serves both J6 (understanding treasury for its own sake) and J3 (as the conceptual prerequisite for finding funded work). The reader arriving to understand the treasury model and the reader arriving to find funded work have the same entry condition (wants to contribute, doesn't know the funding model) and the same exit condition (can map inflation → treasury → disbursement). No structural split required, but the page must serve both motivations — the writing should frame treasury understanding in terms of "what this means for contributors" rather than pure protocol description. No design flag needed.
- **S10 (Ecosystem projects and programmes)** could accumulate both `orient` and `evaluate` work simultaneously — a reader scanning for a project to join is also beginning to evaluate options. `[⚠ Design flag: may need to split]` — see Addendum.

---

## Phase 2D — Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| The Engaged Holder | S1 (to confirm governance path) or S2 (direct arrival with governance intent) | S3 (after casting a vote) or S4 (if proposing) | None | None — S2 provides the LPT→voting-weight→vote detachment conceptual chain before S3 requires it | None |
| The Contribution Seeker | S1 (to confirm funded contributor path) or S5 (direct arrival) | S6 (after finding and applying for an opportunity) or S7 (if joining an SPE/workstream) | None — S5 must precede S6 and it does | None | None |
| The Ecosystem Newcomer | S1 (primary entry point — this is the persona S1 is designed for) | S10 (after surveying ecosystem projects) or S9 (after joining community channels) | None | None — S1 routes them to the most relevant next section | None |
| The Protocol Researcher | S2 (governance concepts) or S7 (SPE/workstream structure) | S7 (after mapping the full organisational model) | None | S2 + S7 together provide governance architecture; LIPs repo and formal governance records are cross-tab linked to Resource HUB and About | None — the path through S2 → S4 → S7 → Resource HUB covers their research needs |
| The Active Contributor | S8 (community calls) or S9 (channels/forums) or S11 (technical contribution) | S11 (for technical contributors) or S4 (for governance contributors) | None | None — they arrive with network knowledge; S8, S9, S11 are specifically designed for the operate/setup stage they are in | None |

All five personas have complete, unblocked paths through the structure.

---

## Quality Gates

- [x] Arriving question is specific — not a topic, an actual question the reader would ask?
- [x] At least 3 distinct personas, each with a different arriving state and entry vector? (5 personas)
- [x] Self-identification check done — disambiguation section added if required? (S1 is the disambiguation section)
- [x] Entry blockers identified — sections that resolve blockers placed before sections that require them? (S2 before S3; S5 before S6)
- [x] At least 5 jobs, first-principles, not derived from current nav structure? (7 jobs)
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands" — all are concrete actions or decisions?
- [x] Cross-tab gate applied — decision-enabling content included for this audience; CROSS-TAB rows only where the audience does not need the content to achieve their goal here?
- [x] Persona path validation complete — every persona has an unblocked path through the structure?
- [x] All enum values are from the canonical lists — no invented tokens? (`purpose`: orient, explain, learn, choose, evaluate, start, build, configure, operate, troubleshoot, verify, integrate, optimise, reference, update — 15 values checked; `pageType`: navigation, concept, tutorial, guide, instruction, reference, resource — 7 values checked; `lifecycleStage`: discover, evaluate, setup, build, operate, troubleshoot, optimise — 7 values checked)
- [x] No governance-controlled numeric values hard-coded — all flagged `[verify-live]`?
- [x] Disambiguation section (S1) has `lifecycleStage: discover` — not `evaluate` or any other value?
- [x] Phase 0 definition conflicts flagged — any glossary heading/body mismatch marked `[DEFINITION CONFLICT]` or `[BLOCKED TERM]`?

All gates pass.

---

## Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary as cross-check only?
- [x] Phase 0: Any glossary term with a heading/body expansion mismatch flagged as `[DEFINITION CONFLICT]` or `[BLOCKED TERM]`? (GWID flagged; LISAR flagged)
- [x] Phase 0: No governance-controlled numeric values hard-coded — all flagged `[verify-live]`?
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

- **[Phase 0 / Step 0.2 — GWID definition conflict]**: The glossary entry for GWID (Gateway Wizard) uses the heading to name an SPE ("Gateway Wizard") but the body context describes GWID as "a Governance Workstream Identification number" — two semantically distinct things. The heading form and body form assign different meanings to the acronym: one is a proper name, the other is an identifier class. `[DEFINITION CONFLICT: GWID — heading says "Gateway Wizard" (SPE name), body says "Governance Workstream Identification number" (identifier class) — do not assert either form until resolved against https://forum.livepeer.org]`. Term excluded from TERMINOLOGY_LOCK pending human resolution.

- **[Phase 0 / Step 0.2 — LISAR dual interpretation]**: The glossary entry for LISAR presents it as both (a) a naming convention for accountability reports (the document format) and (b) "the SPE identity for the infrastructure services workstream" (an organisational entity). These two interpretations are not mutually exclusive but the relationship between them is unclear — is LISAR the SPE's name, or the report type it produces, or both? Term excluded from TERMINOLOGY_LOCK. Flagged for human resolution. Noted as ambiguous in glossary.

- **[Phase 0 / Step 0.2 — Governance-controlled numeric values]**: The glossary states specific numeric values for unbonding period (7 rounds), voting delay (1 round), voting period (10 rounds), treasury reward cut rate (10%), and inflation adjustment rate (0.00005% per round). All are governance-controlled per `deprecated-terms.md`. None have been hard-coded in this output. All are marked `[verify-live]` where referenced.

- **[Phase 0 / Step 0.2 — TERMINOLOGY_LOCK count]**: The lock contains 21 terms, one above the stated 20-term guideline. The Community tab covers four distinct participation paths (governance, funded contribution, protocol research, ecosystem newcomer) each requiring distinct vocabulary. The 21st term (`round`) is foundational to understanding unbonding and reward timing — terms that governance participants and delegators will encounter immediately. Removing it would leave a gap in the minimum viable coverage of the governance path. Justified as necessary for coverage.

- **[Phase 0 / Step 0.2 — veLPT]**: The glossary lists veLPT (Voting Escrow LPT) with status `draft`. `deprecated-terms.md` states: "veLPT (Vote-Escrowed LPT) — Proposal not yet implemented — do not describe as existing." Term excluded from TERMINOLOGY_LOCK and from all section designs in this output.

- **[Phase 1 — Tied primary persona]**: The Engaged Holder and Contribution Seeker tied at score 9. The disambiguation section rule was applied — a dedicated S1 routes both paths cleanly. The Engaged Holder was named primary because their job (governance voting) is time-sensitive and closely tied to the Community tab's most distinctive value proposition. The Contribution Seeker's path is fully represented in sections S5, S6, and S7.

- **[Phase 2C / S10 — Section load flag]**: S10 (Ecosystem projects and programmes) is carrying both `orient` work (surveying what exists) and early `evaluate` work (beginning to assess which project to join). A reader scanning for a project to join is simultaneously orienting and beginning to evaluate. During detailed design, S10 may need to split into: (a) an `orient`/`navigation` page listing active programmes and projects, and (b) per-programme `guide` pages enabling the reader to evaluate fit and take a first step. Do not split here — flag for detailed design phase.

- **[Phase 2C — S11 scope note]**: S11 (Contributing to the protocol — technical) serves a defined but narrower sub-audience (developers and technical contributors). Its `depth` score is moderate because the core audience of this tab is not primarily technical. The section is included because the self-containment principle requires it — a developer arriving on the Community tab looking for a contribution path should not have to leave to find the answer. S11 is written lean, with links outward to the Developers tab for SDK and API depth.

- **[Phase 2B — On-demand: Live Pioneers / KYO]**: The Live Pioneers programme and KYO interview series appear in the glossary as active community programmes primarily serving LPT holders and delegators. These are included in S10 (Ecosystem projects and programmes) and flagged in the on-demand list. Their primary utility to this tab's audience is as a discovery and community-connection resource rather than a procedural path.

- **[Web access — suggested sources]**: No web search was performed for this run. If web access is available, the following additions to `veracity-sources.md` are suggested based on gaps identified during this execution:
  - `[SUGGESTED SOURCE: Livepeer Explorer — Governance proposals view — https://explorer.livepeer.org/treasury — live listing of all on-chain governance proposals with voting status, deadline, and outcome — primary (live on-chain read)]`
  - `[SUGGESTED SOURCE: Livepeer Forum governance category — https://forum.livepeer.org/c/governance — off-chain pre-proposal discussion, LIP drafts, community feedback — acceptable (primary for pre-formalised proposals)]`
  - `[SUGGESTED SOURCE: awesome-livepeer — https://github.com/livepeer/awesome-livepeer — community-curated list of ecosystem tools, projects, and resources — acceptable (verify each entry is still maintained)]`
