# Community tab: audience analysis and gap report

Tab path: `v2/community/`
Branch: `docs-v2-dev`

---

## 1. Primary audience persona

**Name:** The Network Participant seeking connection

**Who they are:** An existing participant — delegator, orchestrator, developer, or interested holder — who wants to engage with the human layer of the Livepeer ecosystem. Not task-driven in the operational sense; motivated by connection, contribution, and staying informed.

Three distinct intents arrive here:

**Intent A: Find the community** — "Where do I talk to people about Livepeer?" They need Discord invite, forum link, X/social channels, and confidence that there is an active community.

**Intent B: Follow what's happening** — "What's the latest? What are people discussing?" They need the trending forum topics, current governance proposals, ecosystem news.

**Intent C: Contribute** — "I want to do more than operate a node or hold LPT. How do I contribute?" They need: SPE proposal process, OSS contribution paths, content contribution, event participation.

---

## 2. Secondary visitor personas

**Press / researchers** doing social proof checks: "Is this an active community?" They look for governance activity evidence, forum participation, event history.

**New arrivals** who don't know what tab they need and land in Community first. Should be quickly routed to the correct tab.

---

## 3. What the tab currently contains (inventory)

### Root level
- `index.mdx` (2.1KB) — minimal
- `community-portal.mdx` (6.9KB) — tab entry point
- `faq.mdx` (7.7KB) — ✅ general FAQ

### livepeer-community/
- `community-guidelines.mdx` (19.7KB) — ✅ comprehensive
- `governance-and-foundation.mdx` (14KB) — ✅ covers Foundation and governance overview
- `livepeer-latest-topics.mdx` (3.9KB) — current ecosystem highlights
- `roadmap.mdx` (2KB) — ⚠️ may duplicate Home tab roadmap
- `trending-topics.mdx` (6.8KB) — forum trends

### livepeer-connect/
- (directory exists — contents not confirmed)
- Expected: social channels, Discord, Forum, X, events

### livepeer-contribute/
- (directory exists — contents not confirmed)
- Expected: SPE proposals, OSS paths, content contribution

### resources/
- (directory exists — contents not confirmed)
- Expected: awesome-livepeer list, event archives, external links

---

## 4. Gap analysis

### 4.1 `livepeer-connect/` — needs population confirmed

The "connect" section is the most important section for new community members (Intent A above). If it is empty or under-populated, new arrivals cannot find the community. Need to confirm its published contents. Expected: Discord, Forum, X, Telegram (if active), GitHub, YouTube.

### 4.2 `livepeer-contribute/` — needs population confirmed

The "contribute" section serves Intent C. If empty, contributors have no clear entry. The SPE proposal process has documentation in `lpt/treasury/proposals.mdx` — the Community tab's contribute section should reference this rather than duplicate it.

### 4.3 `roadmap.mdx` duplication risk

Community has `livepeer-community/roadmap.mdx` (2KB). Home has `home/about-livepeer/roadmap.mdx` (1.8KB). Both are stubs. One canonical roadmap page should exist with the other redirecting. The Home tab is the correct canonical location for the roadmap. The Community version should either redirect or focus on community-specific activities (governance calendar, SPE milestones) rather than duplicating the Foundation's technical roadmap.

### 4.4 FAQ scope — check for cross-tab duplication

`faq.mdx` (7.7KB) is the general FAQ. Live docs MCP confirms it covers governance voting, the Foundation, and other cross-persona questions. Need to ensure questions that belong to specific tabs (e.g., "how do I delegate?" belongs in LP Token tab's FAQ) are answered there and cross-linked here, rather than duplicated.

### 4.5 Governance and Foundation page — scope boundary with About

`governance-and-foundation.mdx` (14KB) explains the Foundation and governance as a community resource. The About tab's `governance-model.mdx` explains the on-chain mechanics. These must not duplicate. The Community version should cover: who the Foundation is, what SPEs are, how to engage with governance as a participant. The About version covers the technical mechanics of on-chain voting.

---

## 5. Recommended IA status for Community tab

```
v2/community/
├── community-portal.mdx                ✅ entry point
├── index.mdx                           ✅ routing
├── faq.mdx                             ✅ good — audit for cross-tab duplication
│
├── livepeer-community/
│   ├── community-guidelines.mdx        ✅ comprehensive
│   ├── governance-and-foundation.mdx   ✅ good — scope boundary with About needed
│   ├── livepeer-latest-topics.mdx      ⚠️  stale risk — audit content type
│   ├── trending-topics.mdx             ⚠️  stale risk — confirm live data approach
│   └── roadmap.mdx                     ⚠️  stub — redirect to Home or make community-specific
│
├── livepeer-connect/                   ⚠️  confirm published contents
├── livepeer-contribute/                ⚠️  confirm published contents
└── resources/                          ⚠️  confirm published contents
```

Legend: ✅ good | ⚠️ needs work | 🔴 critical gap
