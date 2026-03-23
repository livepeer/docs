# About — Audience Design

**Tab**: About
**Audience**: community
**TERMINOLOGY_LOCK**: [Livepeer, Arbitrum, Gateway, Orchestrator, Delegator, LPT, bonding, delegation, active set [verify-live: Livepeer Explorer], round [verify-live: Livepeer Explorer / protocol contracts], video transcoding, AI inference, ETH fees, payment tickets [verify-against: go-livepeer repo / Whitepaper], probabilistic micropayments [verify-against: Whitepaper / protocol contracts], dynamic inflation [verify-live: Livepeer Explorer / LIPs], unbonding [verify-live: Livepeer Explorer / protocol contracts], slashing [verify-against: Whitepaper / protocol contracts], treasury [verify-live: Livepeer Explorer treasury / governance records], governance, LIP]
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `community`
**TERMINOLOGY_LOCK**: `[Livepeer, Arbitrum, Gateway, Orchestrator, Delegator, LPT, bonding, delegation, active set [verify-live: Livepeer Explorer], round [verify-live: Livepeer Explorer / protocol contracts], video transcoding, AI inference, ETH fees, payment tickets [verify-against: go-livepeer repo / Whitepaper], probabilistic micropayments [verify-against: Whitepaper / protocol contracts], dynamic inflation [verify-live: Livepeer Explorer / LIPs], unbonding [verify-live: Livepeer Explorer / protocol contracts], slashing [verify-against: Whitepaper / protocol contracts], treasury [verify-live: Livepeer Explorer treasury / governance records], governance, LIP]`

1. This audience calls themselves: No single label. They arrive as builders, operators, token holders, founders, researchers, or ecosystem newcomers trying to work out where they fit.
2. Core job actions: decide whether the network is relevant; identify which participant role applies; trace how work, money, and control move through the system; determine whether the token layer matters to them; choose the correct next path.
3. Terms with network-specific meanings that differ from industry default:
   - **Gateway** — not a generic API edge or reverse proxy; here it is the demand-side network participant that submits jobs and manages payment flow.
   - **Orchestrator** — not a generic workflow engine; here it is a stake-competing compute supplier providing video transcoding or AI inference.
   - **Delegator** — not a loose supporter or forum voter; here it is an LPT holder whose bonded stake affects rewards and governance weight.
   - **Active set** — not a generic “currently online nodes” list; here it is a governed, stake-ranked eligibility set and must be verified live.
   - **Round** — not just a rough time period; here it is a protocol accounting interval with contract-level consequences and must be verified live.
   - **Payment tickets / probabilistic micropayments** — not ordinary invoices or fixed transfers; here they are the protocol’s lottery-based payment mechanism.
   - **Treasury** — not a company balance sheet; here it is an on-chain, governance-controlled protocol fund.
   - **Bonding / delegation** — not casual “staking” in a generic sense; here they affect orchestrator eligibility, reward distribution, and governance exposure.

---

## Arriving Question

> "What exactly is Livepeer, how does this network work end to end, and which part of it is relevant to me before I go deeper?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | Fit-check evaluator | Home page, search result, external article, product mention | A top-line claim that Livepeer does decentralised AI or video, but no reliable mental model of what the network actually is | A clear decision on whether Livepeer is relevant and which tab to enter next | 3 | 3 | 3 | 9 |
| 2 | System-model seeker | CTA from Developers, Gateways, Orchestrators, or a Discord/forum link | A practical goal in mind, but missing the underlying model of roles, workload flow, and protocol boundaries | A usable end-to-end map of how requests, compute, incentives, and control fit together | 2 | 3 | 3 | 8 |
| 3 | Token and governance checker | LPT page, governance thread, exchange research, treasury discussion | Awareness that LPT, staking, and governance exist, but no precise understanding of what the token changes or why | A decision on whether delegation, governance participation, or protocol economics matter to their goals | 2 | 3 | 3 | 8 |
| 4 | Protocol/history researcher | Governance forum, technical essay, ecosystem referral, research workflow | A need for an accurate conceptual model plus upgrade context so they can place older terms and claims correctly | A trustworthy explanation of current architecture, authority boundaries, and major protocol-era shifts | 1 | 2 | 2 | 5 |

**Primary persona**: Fit-check evaluator — this persona drives section structure.
**Self-identification**: There is no single clean self-label for About. Labels such as developer, operator, token holder, founder, and researcher all route to different needs. **Dedicated disambiguation section required** as the first content section.
**Entry blockers**:  
- Readers cannot interpret economics, staking, or governance until they first know what the network does and who the participants are. Sections 2–4 must precede Sections 5–7.  
- Readers cannot choose the right next path until they have separated stable concepts from live, governed, or release-dependent values. Sections 8–9 must precede Section 10.  
- Readers arriving from a vague product claim need path-routing before detail. Section 1 resolves this blocker.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | When I first land on Livepeer from a product page, search result, or referral | determine what the network actually does and where its boundaries are | decide whether it is relevant to my problem at all |
| 2 | When I see multiple participant types mentioned | identify who does what in the system | work out which role or perspective applies to me |
| 3 | When I hear that both video transcoding and AI inference run on the network | trace how work moves from request to compute to payment | picture the end-to-end operating model accurately |
| 4 | When I evaluate the protocol rather than just the product story | connect fees, rewards, stake, and eligibility | judge whether the incentive system is coherent and worth deeper evaluation |
| 5 | When I encounter LPT, bonding, delegation, or governance language | understand what the token layer actually changes | decide whether I need to care about staking or governance |
| 6 | When I come across numbers, thresholds, or mechanics that may change | know which values are live or governed and where to verify them | avoid acting on stale documentation or outdated community explanations |
| 7 | When I finish the conceptual overview | choose the correct next tab or path | continue into setup or deeper evaluation without reading the wrong material |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Orienting to the network and their reason for being here | discover | Separating product story, protocol mechanics, token mechanics, and role-specific paths |
| 2 | Establishing the platform mental model | discover | Determining what Livepeer is for and which workload types it supports |
| 3 | Mapping participants and responsibility boundaries | discover | Working out who submits demand, who supplies compute, who stakes, and who governs |
| 4 | Following work and money through the system | evaluate | Tracing jobs, execution, and payment flow end to end |
| 5 | Understanding stake, incentives, and control | evaluate | Connecting LPT, eligibility, rewards, governance, and treasury mechanics |
| 6 | Separating durable concepts from live values and legacy terms | evaluate | Learning what must be verified live and what older vocabulary should not be trusted |
| 7 | Choosing the correct deeper path | evaluate | Routing to the right role tab or technical section for the next action |

**On-demand**:
- Role definitions and responsibility boundaries
- Current governed values and live protocol parameters
- LPT mechanics: bonding, delegation, unbonding, reward implications
- Payment flow terms: deposits, tickets, redemptions, ETH fee logic
- Round and active-set mechanics
- Governance process and treasury authority
- Legacy vs current terminology
- Major protocol-era changes and what they affected
- Where to verify current contracts, releases, and on-chain state

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| From | Home → About | Reader wants the conceptual substrate before choosing a role path |
| From | Solutions → About | Reader needs the underlying network model beneath the product/use-case framing |
| From | Developers / Gateways / Orchestrators / Delegators → About | Reader needs mechanism depth, role boundaries, or token/economic context before proceeding confidently |
| To | About → Developers | Reader has concluded they need to build or integrate rather than just understand the system |
| To | About → Gateways / Orchestrators / Delegators | Reader has identified the specific participation model they want to evaluate or operate |
| To | About → Community / Resource HUB | Reader wants governance discourse, ecosystem participation, or cross-cutting reference material after forming the core model |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| 1. Find your place in the network | Am I here to evaluate the network, understand a participant role, or understand the token and governance layer? | Route the reader to the right conceptual path | orient | navigation | Knows the name Livepeer or one partial claim about it, but not what kind of information they need first | Has identified which conceptual path in the About tab matches their reason for visiting | discover |
| 2. What Livepeer is actually for | What problem does this network solve, and what kinds of work run on it? | Establish platform fit | evaluate | concept | Has identified that they need the platform-level picture before detail | Has decided whether Livepeer’s problem space overlaps their use case or area of interest | discover |
| 3. Who does what here | Which participants exist, and what responsibility boundary separates them? | Map the actors | learn | concept | Knows the network’s high-level purpose but not its participant model | Can name the participant types that matter to their situation and distinguish demand, supply, stake, and governance roles | discover |
| 4. How work moves through the system | From request to result, how do jobs, compute, and payments flow? | Trace end-to-end workflow | explain | concept | Knows the participant types but not the operational sequence connecting them | Can trace the system flow from submitted work to execution output and payment initiation | evaluate |
| 5. Why the token exists | What does LPT actually control, and when does it matter? | Establish token relevance | explain | concept | Knows the network flow but not why a token layer exists in the model | Has decided whether the token layer is directly relevant to their intended role or evaluation criteria | evaluate |
| 6. How incentives and payouts connect | How do fees, rewards, stake, and eligibility fit together? | Connect economics to behaviour | explain | concept | Knows that LPT exists and that participants are paid differently, but not how those pieces connect | Can distinguish demand-side fees from protocol rewards and explain how each reaches the relevant participants | evaluate |
| 7. How governance changes the network | Who can change protocol rules, and how do changes become real? | Explain authority and change control | explain | concept | Understands the economic model but not who controls upgrades, treasury use, or rule changes | Can trace the proposal-to-execution path and identify where governance authority sits | evaluate |
| 8. What changed over time | Which major protocol changes or upgrade eras matter for reading current material correctly? | Place terms and mechanics in the right era | update | guide | Has the current-system model but may still encounter legacy names, outdated explanations, or pre-upgrade references | Can recognise when a term or explanation belongs to an older protocol era and avoid carrying it forward incorrectly | evaluate |
| 9. What must be verified live | Which values are fixed concepts, which are governed or release-dependent, and where do I verify them? | Prevent stale interpretation | verify | reference | Knows the conceptual model but does not yet know which claims require live verification | Can verify current values against the correct authority before acting on a number, threshold, contract, or implementation detail | evaluate |
| 10. Where to go next | Given what I now know, which deeper path should I take next? | Route to the correct role-specific continuation | choose | navigation | Has a working conceptual model of the network and knows what matters to them | Has selected the next tab or path that matches their actual goal | evaluate |

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| Fit-check evaluator | 1. Find your place in the network | 10. Where to go next | None | Needs plain-language separation between platform purpose, participant roles, and token mechanics before deeper evaluation; covered by Sections 2–5 | None |
| System-model seeker | 3. Who does what here | 10. Where to go next | None | Needs an end-to-end operational flow before economics and governance become meaningful; covered by Section 4 | None |
| Token and governance checker | 5. Why the token exists | 10. Where to go next | None | Needs explicit separation of fees, rewards, stake effects, governance authority, and live-verification rules; covered by Sections 6–9 | None |
| Protocol/history researcher | 4. How work moves through the system | 9. What must be verified live | None | Needs a dedicated protocol-era clarification step so legacy terms do not contaminate current interpretation; covered by Section 8 | None |

---

## ⏸ Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary as cross-check only?
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
- [x] All enum values are canonical — no invented tokens?

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.1]**: The brief requires a single AUDIENCE token, but the brief itself also states that About serves all audiences at the discover stage and cannot be cleanly represented by one token. I used `community` as the broadest available token, but treated the tab as substantively multi-audience throughout.
- **[Phase 0 / Step 0.3]**: The anchoring question asks what “this audience” calls themselves, but About does not have a single stable self-label. I treated “no single label” as the most accurate answer instead of forcing a false category.
- **[Phase 0 / Step 0.2]**: The per-tab glossary includes `Broadcaster (deprecated)` but marks its status as `current`. I treated the term as deprecated and excluded it in favour of `Gateway`.
- **[Phase 0 / Step 0.2]**: The glossary contains specific claims that require primary-source confirmation before use in final content, including upgrade identifiers, governance references, latency targets, and contract-era statements. I kept those out of the structural logic unless they could be treated as verify-live / verify-against items.
- **[Phase 2C]**: Because About is cross-audience and cross-lifecycle by nature, the first section had to do hard routing work that role tabs usually do not require. I kept that routing isolated in Section 1 to avoid contaminating the explanatory sections with mixed-purpose navigation.
- **[Phase 0 / Suggested source]**: [SUGGESTED SOURCE: livepeer/ai-runner — https://github.com/livepeer/ai-runner — AI inference runtime and model-serving behaviour that sits beneath the AI worker path — primary]
- **[Phase 0 / Suggested source]**: [SUGGESTED SOURCE: livepeer/subgraph — https://github.com/livepeer/subgraph — indexed protocol analytics implementation and query surface for current network data; useful for discovery and analysis, but on-chain sources remain canonical for state — acceptable]
