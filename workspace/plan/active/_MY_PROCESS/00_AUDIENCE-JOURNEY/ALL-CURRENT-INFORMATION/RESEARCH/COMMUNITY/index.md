AIM: consolidate all audience, personas, journeys for each tab & determine a final mapping.

# ALL FILES

| Name | Location | Category |
|------|----------|----------|
| agent-v5-community-audience-design.md | `CONTENT-WRITING/.../testing/Tabs/community/zero-context-ai-results/v5/` | Audience, Persona, Journey, IA |
| chatgpt-v4-community-audience-design.md | `...community/zero-context-ai-results/v4/` | Audience, Persona, Journey, IA |
| glossary-community.md | `...community/input-pack/` | Content |
| veracity-sources.md | `...community/input-pack/` | Prompt/Skill |
| deprecated-terms.md | `...community/input-pack/` | Content |
| v4.md (learnings) | `...community/learnings/` | Prompt/Skill |
| community-tab-02-audience-and-purpose.md | `v2/community/_workspace/research/` | Persona, Audience, Journey |
| community-tab-05-final-ia-and-pages.md | `v2/community/_workspace/research/` | IA, Plan |
| 06-tab-community.md | `_MY_PROCESS/.../FULL-FILES/TABS/` | Persona, Journey, IA, Plan |
| (collated/ directory) | `...testing/Tabs/community/collated/` | **EMPTY — no canonical collation exists** |

---

# AUDIENCE — Who lands on this tab

**Audience token**: `community`

| Arriving type | Entry vector | Routing need |
|---|---|---|
| **Existing participant seeking connection** | Discord, forum, social media, governance link | Stays — this is their tab |
| **New arrivals who don't know what tab they need** | Landed here first by accident | Should be quickly routed to correct tab |
| **Press / researchers doing social proof checks** | External research, comparative analysis | Reads activity evidence, may leave |

### Arriving question

> "I want to get involved — how do I actually participate, and where do I start?"

(ChatGPT v4: "What is the right participation path for me right now, and what exact first step should I take?" — **strongest arriving question in the entire test suite**)

---

# PERSONAS — Who this tab actually serves

### Source: 06-tab-community.md (process analysis)

**Primary persona: The Network Participant Seeking Connection**

An existing participant — delegator, orchestrator, developer, or interested holder — who wants to engage with the human layer of the Livepeer ecosystem. Not task-driven in the operational sense; motivated by connection, contribution, and staying informed.

**Three distinct intents within this persona:**

| Intent | Who | What they need |
|---|---|---|
| **Intent A: Find the community** | "Where do I talk to people about Livepeer?" | Discord invite, forum link, X/social channels, confidence there is an active community |
| **Intent B: Follow what's happening** | "What's the latest? What are people discussing?" | Trending forum topics, current governance proposals, ecosystem news |
| **Intent C: Contribute** | "I want to do more than operate a node or hold LPT. How do I contribute?" | SPE proposal process, OSS contribution paths, content contribution, event participation |

### Source: community-tab-02-audience-and-purpose.md (first-principles research)

Community tab = **participation infrastructure** converting visitor interest into active ecosystem role.

7 personas ranked by visit likelihood:

| Rank | Persona | Key question | Voice preference |
|---|---|---|---|
| 1 | Curious Newcomer | "Is this community active and welcoming?" | Scannable cards, short explainers |
| 2 | Active Delegator/LPT Holder | "What's happening that affects my stake?" | Precision, financial consequences noted |
| 3 | Governance Participant | "How do I participate in decisions?" | Factual, process-clear |
| 4 | Potential Contributor | "How do I contribute?" | Direct CTAs, categorised pathways |
| 5 | Existing Orchestrator | "What's the community discussing about operations?" | Operational, peer-level |
| 6 | Ecosystem Observer/Researcher | "Is this a real community?" | Evidence-based, honest |
| 7 | AI/GPU Builder | "Who else is building here?" | Technical, project-oriented |

Voice register: **invitational and directional** — outcome-forward, no hype, active language. No "thriving community." No exclamation marks on factual content.

### Source: canonical AI runs (v5 Agent, v4 ChatGPT)

v5 personas: Engaged Holder, Contribution Seeker, Ecosystem Newcomer, Protocol Researcher, Active Contributor.
v4 personas: First-time Ecosystem Participant (primary, rank 9), Active Contributor, Governance Participant, Funded-work Seeker, Ecosystem Mapper.

**Primary persona decision UNRESOLVED**: Engaged Holder (v5 — governance is time-sensitive and distinctive) vs First-time Participant (v4 — participation-path ambiguity is the first reader problem). Both defensible.

---

# JOURNEYS — What each persona needs to accomplish through this tab

## The three intent journeys

### Intent A: Find the community

| Step | Reader's question | What they need |
|---|---|---|
| 1 | Where do I talk to people? | Discord invite, forum link, social channels |
| 2 | Is anyone actually here? | Evidence of activity |
| 3 | How do I introduce myself? | Community guidelines, norms |

### Intent B: Follow what's happening

| Step | Reader's question | What they need |
|---|---|---|
| 1 | What are people discussing? | Forum trending topics, governance proposals |
| 2 | What's changing? | Protocol upgrades, treasury allocations, SPE updates |
| 3 | How do I stay current? | Community calls, newsletters, channels to watch |

### Intent C: Contribute

| Step | Reader's question | What they need |
|---|---|---|
| 1 | What contribution paths exist? | Funded (grants, bounties, RFPs) vs non-funded (OSS, docs, community) |
| 2 | How do I get started? | SPE proposal process, contribution guides |
| 3 | Who do I talk to? | SPE leads, workstream contacts |

## Canonical ideal journey (v4/v5)

| Position | Stage | lifecycleStage |
|---|---|---|
| 1 | Orienting to participation paths | `discover` |
| 2 | Understanding governance model | `discover` |
| 3 | Participating in governance | `setup` |
| 4 | Understanding treasury | `evaluate` |
| 5 | Finding funded opportunities | `setup` |
| 6 | Joining community spaces | `setup` |
| 7 | Contributing to initiatives | `operate` |

---

# IA — All section structures found

## Source: community-tab-05-final-ia-and-pages.md — 14-page structure (published research)

| Section | Pages |
|---|---|
| **Hub** | Community Portal (orient, landing), Community FAQ (answer, faq) |
| **This Community** | Who's Here (orient, concept), Community Guidelines (reference) |
| **Shape the Network** | Governance Participation (orient+activate, concept), Workstreams (navigate, reference) |
| **Get Involved** | Ways to Contribute (orient+activate, landing), Opportunities (discover, reference) |
| **Connect** | Channels (navigate, reference), Events and Calls (discover, reference), News and Updates (inform, reference) |
| **Ecosystem** | Community Tools (discover, reference), Community Guides (discover, reference) |

**Handoff map** (content NOT owned by Community):
- Governance mechanics → LP Token tab
- Protocol governance → About tab
- Code contribution/grants → Developers tab

**Staleness rule**: Information changing faster than quarterly cycle routes to live source rather than documentation.

## Agent v5 run — 11 sections

S1 Participation paths → S2 Governance concepts → S3 Live voting → S4 Proposal writing → S5 Treasury → S6 Funded work → S7 SPEs/workstreams → S8 Community calls → S9 Forums/channels → S10 Ecosystem projects → S11 Technical contribution.

## ChatGPT v4 run — 9 sections

S1 Pick your path → S2 Map community structure → S3 Join venues → S4 Start non-funded contribution → S5 Choose funded path → S6 Follow governance flow → S7 Participate in proposals → S8 Explore ecosystem → S9 Route to deeper paths.

## Current live v2/community/ structure

```
v2/community/
├── community-portal.mdx (6.9KB)       ✅ entry point
├── index.mdx (2.1KB)                  ✅ minimal
├── faq.mdx (7.7KB)                    ✅ good — audit for cross-tab duplication
├── livepeer-community/
│   ├── community-guidelines.mdx (19.7KB) ✅ comprehensive
│   ├── governance-and-foundation.mdx (14KB) ✅ good — scope boundary with About needed
│   ├── livepeer-latest-topics.mdx (3.9KB) ⚠️ stale risk
│   ├── trending-topics.mdx (6.8KB)    ⚠️ stale risk
│   └── roadmap.mdx (2KB)              ⚠️ stub — duplicate risk with Home
├── livepeer-connect/                   ⚠️ confirm published contents
├── livepeer-contribute/                ⚠️ confirm published contents
└── resources/                          ⚠️ confirm published contents
```

---

# OPEN ITEMS

1. **NO CANONICAL COLLATION EXISTS** — collated/ directory is empty. Needs 2nd+ model run then collation synthesis before Phase 2.
2. **Primary persona decision unresolved** — Engaged Holder (v5) vs First-time Participant (v4).
3. **livepeer-connect/ contents unconfirmed** — critical for Intent A (finding community).
4. **livepeer-contribute/ contents unconfirmed** — critical for Intent C (contributing).
5. **Roadmap duplication** — Community roadmap.mdx (2KB) vs Home roadmap.mdx (1.8KB). One canonical location needed.
6. **FAQ scope** — check for cross-tab duplication (delegation questions belong in LPT tab).
7. **Governance scope boundary** — Community covers participation; About covers mechanics.
