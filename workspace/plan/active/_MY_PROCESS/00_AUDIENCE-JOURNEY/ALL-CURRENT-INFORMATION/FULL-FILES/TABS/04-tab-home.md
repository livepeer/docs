# Home tab: audience analysis and gap report

Tab path: `v2/home/`
Branch: `docs-v2-dev`

---

## 1. Primary audience persona

**Name:** The Unoriented Newcomer

**Who they are:** Someone who has heard of Livepeer — possibly through a DePIN article, a friend's recommendation, a social media post about AI video, or a CoinGecko lookup of LPT — and has arrived at the docs to understand what Livepeer actually is. They have no role assumption yet. They may become a delegator, an orchestrator, a developer, or simply an informed observer.

This is the one tab where no specific technical background can be assumed. The Home tab must be comprehensible to a crypto-curious non-developer while also not being condescending to a technically sophisticated reader arriving to evaluate the network.

**Their single most important question:** "What is this, and where do I go?"

---

## 2. Secondary visitor personas

**All other personas** pass through or return to Home at some point. It is the routing layer for the entire site. Each other persona type (orchestrator, delegator, developer, gateway operator, community member) should find a clear path from Home into their correct tab within two clicks.

---

## 3. What the tab currently contains (inventory)

### Root level
- `index.mdx` (2KB) — minimal tab index
- `mission-control.mdx` (6.3KB) — routing/navigation hub
- `primer.mdx` (10.6KB) — what is Livepeer primer
- `get-started.mdx` (7.5KB) — get started routing
- `trending.mdx` (6.4KB) — current network activity/trends

### about-livepeer/
- `vision.mdx` (8.8KB) — Livepeer's mission and vision
- `evolution.mdx` (7.9KB) — history and pivot narrative
- `ecosystem.mdx` (25.7KB) — ✅ substantial — ecosystem map including Foundation
- `benefits.mdx` (9.9KB) — why Livepeer
- `roadmap.mdx` (1.8KB) — ⚠️ stub-level, very short

### get-started/ (subdirectory)
- contents not confirmed separately

### solutions/ (subdirectory)
- contents not confirmed separately

### resources/ (subdirectory)
- contents not confirmed separately

---

## 4. Gap analysis

### 4.1 The Foundation is documented here — but needs to be findable

The Livepeer Foundation is covered in `ecosystem.mdx` (25.7KB). This is correct per the ownership map. However, at 25.7KB, `ecosystem.mdx` is doing a lot of work. The Foundation section within it needs to be clearly anchored with a header that search and direct linking can surface (e.g., `#livepeer-foundation`).

Live docs MCP search confirms `ecosystem.mdx#livepeer-foundation` is findable. This is correct and sufficient — no separate Foundation page is needed here.

### 4.2 `roadmap.mdx` is functionally empty

At 1.8KB this page cannot contain the Foundation's 3-phase roadmap (Foundation 2025 → Scaling 2026-2027 → Decentralisation 2028+). The roadmap is public content from the blog. This page is high-value for investors, analysts, and newcomers evaluating whether the project has a credible future.
- Action: Full content. Source: Foundation blog posts, Transformation SPE retrospective, Foundation mandate documents.

### 4.3 The AI pivot story needs to be front and centre

`evolution.mdx` (7.9KB) covers the history. The question is whether it adequately explains the 2024-2025 AI infrastructure pivot in terms a newcomer can understand. Given that AI inference now drives >70% of protocol fees, this is the defining current story. The Home tab needs to ensure that a newcomer lands on the right framing — not "video transcoding network" but "AI infrastructure for real-time video."

### 4.4 Role-based routing needs to be explicit

`mission-control.mdx` and `get-started.mdx` are both routing pages. For a newcomer, "I am an orchestrator / delegator / developer / gateway operator" routing cards with a one-line description of each role are essential. Currently unclear whether this routing is sufficiently explicit without reading the actual files.

### 4.5 Trending / current activity content has stale risk

`trending.mdx` (6.4KB) — if this contains any static content purporting to show "current" network activity, it will be stale immediately. This type of content needs either live data embedding or clear softening language ("as of [date]...") with links to live sources (Livepeer Explorer, Dune dashboards).

---

## 5. Recommended IA for Home tab

Home uses a custom IA that is not canonical — correctly so. It is a routing and orientation tab, not a task tab.

```
v2/home/
├── index.mdx                           ✅ (tab index)
├── mission-control.mdx                 ✅ (routing hub — confirm routing quality)
├── primer.mdx                          ✅ (what is Livepeer)
├── get-started.mdx                     ✅ (role-based routing)
├── trending.mdx                        ⚠️  stale risk — audit content type
│
└── about-livepeer/
    ├── vision.mdx                      ✅ good
    ├── evolution.mdx                   ⚠️  confirm AI pivot is the lead story
    ├── ecosystem.mdx                   ✅ strong — Foundation covered here
    ├── benefits.mdx                    ✅ good
    └── roadmap.mdx                     🔴 stub — high value page, needs full content
```

Legend: ✅ good | ⚠️ needs work | 🔴 critical gap
