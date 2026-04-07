# About Tab — Page Briefs for Claude Web

> Copy each brief into Claude Web as a standalone prompt.
> Include the VOICE RULES section at the top of every conversation.
> After Claude Web produces the page, bring it back and run:
> `./workspace/plan/active/_MY_PROCESS/tools/page-quality-gate.sh v2/about/{path}.mdx`

---

## VOICE RULES (paste at start of every Claude Web session)

```
You are writing documentation for Livepeer, a decentralised AI and video compute network.

HARD RULES — follow exactly:
- UK English throughout (-ise, -our, -re, no em-dashes)
- Entity-led voice: lead with system facts and reader outcomes, never with "this page covers"
- Open with value or outcome BEFORE mechanism
- One paragraph, one job. End paragraphs with fact, number, or next step
- No hedging: use "is" not "can be", "does" not "may do" for value claims
- Audience: community/general (About tab serves everyone at discover stage)

BANNED WORDS (zero tolerance): effectively, essentially, basically, meaningful, significant, real (as intensifier), various, several, obviously, clearly

BANNED PHRASES (zero tolerance): "This page covers/explains/walks you through", "Understanding X is essential", "It is important to note", "As mentioned above", "and so on", "etc.", "rather than", "what it takes", "it should be noted", "not just X", "can generate / may produce" in value claims

BANNED CONSTRUCTIONS: "not [X]" in value statements (state positive instead), "if [condition]" in body prose (resolve it), "This page [verb]" (delete self-reference), "can/may [verb]" in value claims (assert directly)

OUTPUT FORMAT: Plain markdown. No MDX components, no imports, no frontmatter. Just the content body. I will add frontmatter and components later.
```

---

## BRIEF 1: REWRITE — concepts/core-concepts.mdx

### Context for Claude Web

```
I need you to REWRITE the About tab's core-concepts page for the Livepeer docs.

THE QUESTION THIS PAGE ANSWERS:
"What are the core building blocks of the Livepeer ecosystem?"

READER STATE:
- ENTRY: Has read livepeer-overview.mdx (knows Livepeer is a decentralised AI + video compute network) and mental-model.mdx (has the 10-layer stack, 3-zone architecture)
- EXIT: Can name: protocol, network, platform, the actors, the two compute types, the economic model at a glance, the governance model at a glance. Ready to explore network/ or protocol/ sections in depth.

WHAT THE READER NEEDS TO LEARN (in order):
1. The three-zone architecture: Protocol (security + incentives), Network (execution), Platform (products + APIs)
2. The boundary between them: protocol does NOT run compute, network does NOT manage economics, platform does NOT govern
3. The actors: orchestrators, gateways, delegators, builders/end-users — what each does in one sentence
4. The two compute types: video transcoding and AI inference — why they're distinct
5. The economic model at a glance: ETH fees (usage) + LPT inflation (protocol) — two income streams
6. Governance at a glance: stake-weighted voting, LIPs, community-driven — not a company

WHAT CURRENTLY EXISTS (the problem):
The current page (137 lines, 5.4KB) duplicates content from mental-model.mdx. It uses composable tabs (Protocol/Network/Actors) that create confusion — the reader sees the same concepts explained twice in different formats. The prose and tabs don't have a clear relationship. The audience is marked "general" but the tab content assumes different knowledge levels.

WHAT TO DO:
Write a clean single-flow page (no tabs) that builds from the 3-zone architecture → actors → compute types → economics glance → governance glance. Each section should be 2-4 paragraphs. The page is a bridge between the mental model (abstract) and the deep-dive sections (protocol/, network/).

Do NOT:
- Repeat the 10-layer stack from mental-model.mdx
- Use tabs or composable components
- Explain any mechanism in depth (that's what protocol/ and network/ pages are for)
- Use "This page covers" or any self-referential framing

EXEMPLAR PATTERN (how a good concept page opens):
"The Protocol is the on-chain coordination, security and economic layer responsible for governing the network, securing the system, and incentivising desired behaviour from participants."
— This is entity-led (starts with the subject), assertive ("is" not "can be"), and immediately tells you what the thing DOES.

TARGET: ~3-4KB, 80-120 lines of clean prose. No tabs, no components.
```

---

## BRIEF 2: EXPAND — network/overview.mdx

### Context for Claude Web

```
I need you to EXPAND the About tab's network overview page for the Livepeer docs.

THE QUESTION THIS PAGE ANSWERS:
"What IS the Livepeer network, distinct from the protocol?"

READER STATE:
- ENTRY: Has read concepts/ (knows the 3-zone architecture, the actors, the compute types). Now entering the network/ section.
- EXIT: Understands that the network is the execution layer (layers 1-3 of the mental model). Knows the protocol/network boundary. Ready to read about actors, job lifecycle, and marketplace.

WHAT CURRENTLY EXISTS:
52 lines, 2.2KB. Opens well ("The network is the execution layer") but then lists node types at a code-level that's too deep for an overview (BroadcastSessionsManager, SegmentChans, RemoteTranscoderManager). This reads like a developer reference, not an orientation page.

WHAT THE READER NEEDS TO LEARN:
1. The network is the execution layer — the actual running system of machines performing work
2. The protocol secures it, the network runs it — clear boundary statement
3. What the network does: accepts compute jobs (video + AI), routes them to GPU operators, delivers results, settles payment
4. How it relates to the protocol: protocol sets the rules and incentives, network follows them
5. What comes next in this section: actors, job lifecycle, marketplace, architecture, interfaces

WHAT TO DO:
Rewrite as a 3-4KB orientation page. Lead with what the network IS and what it DOES. Explain the boundary with the protocol. Preview the section's journey. Remove code-level node type details (those belong in technical-architecture.mdx).

Do NOT list internal class names (BroadcastSessionsManager, SegmentChans, etc.) — those are developer reference, not orientation.

TARGET: ~3-4KB, 60-90 lines.
```

---

## BRIEF 3: EXPAND — protocol/design-philosophy.mdx

### Context for Claude Web

```
I need you to WRITE the About tab's protocol design philosophy page for the Livepeer docs.

THE QUESTION THIS PAGE ANSWERS:
"Why is the Livepeer protocol designed the way it is?"

READER STATE:
- ENTRY: Has read all of protocol/ (core mechanisms, LPT, economics, governance, treasury, contracts). Understands WHAT the protocol does.
- EXIT: Understands WHY the protocol makes the design choices it does. Can articulate the trade-offs. This is the deepest page in About — serves researchers, contributors, and founders doing due diligence.

WHAT CURRENTLY EXISTS:
53 lines, 2KB. A placeholder that lists topics ("Why Livepeer uses stake as security", "Why inflation exists") and links to other pages. No actual content.

WHAT THE READER NEEDS TO LEARN:
1. Why stake-as-security instead of permissioned membership — permissionless participation, economic alignment, skin in the game
2. Why dynamic inflation exists — bootstraps participation when fee revenue is insufficient, adjusts toward target bonding rate, creates delegator incentive
3. Why probabilistic micropayments instead of per-job on-chain settlement — gas costs would make per-segment payment impossible, lottery amortises cost
4. Why protocol and network stay separate — protocol stays lightweight and censorship-resistant, network handles heavy compute off-chain
5. Why Arbitrum — Ethereum security with lower gas costs, Optimistic Rollup finality trade-offs
6. The core design tension — the 89:1 inflation-to-fees ratio means the protocol currently relies on inflation more than usage revenue. LIP-107/100/101 are the first steps toward sustainability

SOURCES:
- Whitepaper: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md
- Streamflow spec: https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md
- LIP-92 (Treasury), LIP-107 (emissions), LIP-100 (inflation bounds)
- Livepeer Forum governance discussions

Do NOT present this as marketing ("Livepeer's elegant design..."). Present it as engineering trade-offs: "The protocol uses X because Y, at the cost of Z."

TARGET: ~4-5KB, 100-140 lines.
```

---

## BRIEF 4: WRITE — resources/reference/technical-roadmap.mdx

### Context for Claude Web

```
I need you to WRITE the About tab's technical roadmap reference page for the Livepeer docs.

THE QUESTION THIS PAGE ANSWERS:
"What is the Livepeer Foundation's roadmap and where is the ecosystem heading?"

READER STATE:
- ENTRY: Has explored About (any section). Wants to understand the project's direction and whether it's actively developed.
- EXIT: Understands the 3-phase Foundation roadmap, the current phase, key initiatives, and where to track progress.

WHAT CURRENTLY EXISTS:
25 lines, 795 bytes. Just two blog post URLs with no context.

WHAT THE READER NEEDS TO LEARN:
1. The Foundation's 3-phase roadmap:
   - Phase 1: Foundation (2025) — establish core infrastructure, AI subnet, initial SPEs
   - Phase 2: Scaling (2026-2027) — grow demand, diversify compute, expand gateway ecosystem
   - Phase 3: Decentralisation (2028+) — reduce Foundation dependency, full community governance
2. Current phase and key initiatives (as of April 2026):
   - AI inference growth (fees up 21x in 3 quarters)
   - SPE model (Transformation SPE, Protocol R&D SPE, LiveInfra)
   - go-livepeer releases (v0.8.7-v0.8.10, major AI pipeline additions)
   - Governance activity (LIP-107 emissions, LIP-100 inflation bounds, LIP-101 treasury)
3. Where to track progress:
   - Livepeer Forum (governance proposals)
   - GitHub releases (go-livepeer, ai-worker)
   - Livepeer Explorer (on-chain metrics)
   - Foundation blog

SOURCES:
- https://blog.livepeer.org/introducing-livepeer-cascade-a-vision-for-livepeers-future-in-the-age-of-real-time-ai-video/
- https://blog.livepeer.org/a-real-time-update-to-the-livepeer-network-vision/
- Forum: Transformation SPE retrospective, Protocol R&D SPE proposal
- go-livepeer release notes v0.8.7-v0.8.10

IMPORTANT: All specific numbers (inflation rates, fee revenue, active set size) are governance-controlled and change. Do NOT hard-code them. Instead say "check Explorer for current values" or "governance-controlled, verify on-chain."

This is a reference page, not a narrative page. Structure as: current phase overview, key initiatives table, where to track progress.

TARGET: ~3-4KB, 70-100 lines.
```

---

## BRIEF 5: REVIEW — protocol/economics.mdx

### Context for Claude Web

```
I need you to REVIEW AND UPDATE the About tab's protocol economics page for the Livepeer docs.

THE QUESTION THIS PAGE ANSWERS:
"How does money flow through the Livepeer ecosystem?"

READER STATE:
- ENTRY: Understands protocol mechanisms (staking, delegation, rewards from core-mechanisms.mdx) and LPT (from livepeer-token.mdx)
- EXIT: Can describe BOTH income streams (ETH fees from usage, LPT inflation from protocol) and who earns each. Understands the economic health of the network.

WHAT CURRENTLY EXISTS:
172 lines, 7KB. Opens with "Livepeer uses both its native token - LPT, and Ethereum (ETH)..." then goes into technical staking flow details (Token Approval, Bonding function calls). The content is accurate but too implementation-focused for an About page — reads like a developer guide, not an economic model explanation.

WHAT NEEDS UPDATING:
1. LIP-107 (voted February 2026) proposes reducing targetBondingRate from 50% to 46% and accelerating inflationChange. If passed, the inflation mechanics description must reflect this.
2. LIP-100 proposes adding inflation ceiling and floor bounds.
3. LIP-101 (treasury restart) may affect treasury contribution percentage.
4. The economic reality: ~89:1 inflation-to-fees ratio ($18M staking rewards vs ~$204K fees per quarter Q3 2025). AI fee revenue growing (21x in 3 quarters) but still small relative to inflation.

WHAT TO DO:
Review the page. For each claim about protocol parameters:
- If it's a hard-coded number (inflation rate, bonding rate target), add a note: "Governance-controlled. Verify current value at explorer.livepeer.org"
- If it references a LIP that has been superseded, update the reference
- If the economic framing is outdated (doesn't acknowledge the inflation-to-fees tension), add context

Do NOT rewrite the entire page. Just review, flag, and update where needed. The voice and structure are acceptable — the facts may be stale.

For any parameter you cannot verify, add: {/* REVIEW: [claim] — verify against [source] */}

TARGET: Same length (~7KB). Updated facts, governance-controlled values flagged.
```

---

## AFTER CLAUDE WEB — Bring pages back and run:

```bash
# For each page, run quality gate:
./workspace/plan/active/_MY_PROCESS/tools/page-quality-gate.sh v2/about/concepts/core-concepts.mdx
./workspace/plan/active/_MY_PROCESS/tools/page-quality-gate.sh v2/about/network/overview.mdx
./workspace/plan/active/_MY_PROCESS/tools/page-quality-gate.sh v2/about/protocol/design-philosophy.mdx
./workspace/plan/active/_MY_PROCESS/tools/page-quality-gate.sh v2/about/resources/reference/technical-roadmap.mdx
./workspace/plan/active/_MY_PROCESS/tools/page-quality-gate.sh v2/about/protocol/economics.mdx

# All must return: PASS (10/10 checks passed)
```
