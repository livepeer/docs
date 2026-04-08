AIM: consolidate all audience, personas, journeys for each tab & determine a final mapping.

# ALL FILES

| Name | Location | Category |
|------|----------|----------|
| agent-v5-home-audience-design.md | `CONTENT-WRITING/.../testing/Tabs/home/zero-context-ai-results/v5/` | Audience, Persona, Journey |
| glossary-home.md | `...home/input-pack/` | Content |
| veracity-sources.md | `...home/input-pack/` | Prompt/Skill |
| deprecated-terms.md | `...home/input-pack/` | Content |
| index.mdx | `v2/home/` | IA |
| get-started.mdx | `v2/home/` | Journey, Content |
| ai-pipelines.mdx, build-on-livepeer.mdx, stream-video.mdx, use-livepeer.mdx | `v2/home/get-started/` | Content (ALL STUBS) |
| mission-control.mdx | `v2/home/` | IA, Journey |
| primer.mdx | `v2/home/` | Content, Persona |
| 04-tab-home.md | `_MY_PROCESS/.../FULL-FILES/TABS/` | Persona, Journey, Plan |

---

# AUDIENCE — Who lands on this tab

**Audience token**: Multi-audience (matches About). All 7 persona types present.

Home is the **first landing point for the entire site**. No specific technical background assumed. Must work for crypto-curious non-developers AND technically sophisticated evaluators.

| Arriving type | Entry vector | Routing need |
|---|---|---|
| Newcomer | DePIN article, social media, friend, CoinGecko | Needs orientation → routed to correct tab |
| Developer | Search "Livepeer AI API" | Routed to Developers tab |
| GPU operator | Search "earn with GPU" | Routed to Orchestrators tab |
| LPT holder | Exchange, "what is LPT" | Routed to Delegators tab |
| Company/founder | Referral, evaluation | Routed to Solutions or About |
| Researcher | Whitepaper search, academic | Routed to About |
| Community member | Discord, Twitter | Routed to Community |

### Arriving question

> "What is this, and where do I go?"

---

# PERSONAS — Who this tab actually serves

### Source: 04-tab-home.md (process analysis)

**Primary persona: The Unoriented Newcomer**

Someone who has heard of Livepeer — possibly through a DePIN article, a friend, a social media post about AI video, or a CoinGecko lookup — and has arrived to understand what Livepeer actually is. **No role assumption yet.** May become delegator, orchestrator, developer, or informed observer.

This is the one tab where no technical background can be assumed. Must be comprehensible to crypto-curious non-developer while not being condescending to a sophisticated evaluator.

**Single most important question:** "What is this, and where do I go?"

**All other personas pass through or return to Home.** It is the routing layer for the entire site. Each persona type should find a clear path within two clicks.

### Source: agent-v5-home-audience-design.md

6 secondary personas identified:
- Complete Newcomer
- Evaluating Builder
- Curious GPU Operator
- Token Investor
- Protocol Researcher
- Community Contributor

---

# JOURNEYS — What each persona needs to accomplish through this tab

## The Unoriented Newcomer's journey

Home must accomplish routing within two clicks. Six persona-specific journeys:

| Persona | Journey through Home | Destination |
|---|---|---|
| Newcomer | Livepeer Showcase → real-world projects → About Livepeer → ecosystem understanding | About |
| Developer | AI integration pathway (Livepeer AI Quickstart, Daydream) OR custom pipelines (ComfyStream, BYOC) OR build business (Developer Hub, Gateways, Funding) | Developers |
| GPU Provider | Orchestrators OR Data Centre contact | Orchestrators |
| User/Creator | Stream/broadcast pathway (Daydream, Stream Video Quickstart, Livepeer Studio) | Solutions |
| LPT Holder | Delegate LPT pathway OR Governance/voting pathway | Delegators |
| Company | Ecosystem partnerships OR direct contact | Solutions / About |
| Researcher | Whitepaper OR blog/research | About |

Each journey surfaces in discovery cards with icon, title, brief description, and direct link (get-started.mdx).

---

# IA — Current structure

Home uses a custom IA — correctly so. It is routing/orientation, not task-oriented.

```
v2/home/
├── index.mdx (2KB)                    ✅ auto-generated TOC
├── mission-control.mdx (6.3KB)        ✅ 9-card routing hub with Starfield hero + Daydream GIF
├── primer.mdx (10.6KB)                ✅ 10-minute "what is Livepeer" — strong content
├── get-started.mdx (7.5KB)            ✅ 6-persona routing with discovery cards + mermaid diagram
├── trending.mdx (6.4KB)               ⚠️ stale risk if contains static "current" content
├── about-livepeer/
│   ├── vision.mdx (8.8KB)             ✅ good
│   ├── evolution.mdx (7.9KB)          ⚠️ confirm AI pivot is lead story
│   ├── ecosystem.mdx (25.7KB)         ✅ strong — Foundation covered here
│   ├── benefits.mdx (9.9KB)           ✅ good
│   └── roadmap.mdx (1.8KB)            🔴 STUB — high priority
└── get-started/ (4 stubs)
    ├── ai-pipelines.mdx               🔴 STUB "Coming Soon"
    ├── build-on-livepeer.mdx           🔴 STUB "Coming Soon"
    ├── stream-video.mdx                🔴 STUB "Coming Soon"
    └── use-livepeer.mdx                🔴 STUB "Coming Soon"
```

---

# OPEN ITEMS

1. **CRITICAL — 4 get-started/ stubs**: All "Coming Soon." Need full content.
2. **CRITICAL — roadmap.mdx stub**: 1.8KB. Needs Foundation 3-phase roadmap content.
3. **AI pivot narrative**: evolution.mdx (7.9KB) needs audit — AI inference now >70% of protocol fees, must be the defining narrative.
4. **Trending stale risk**: trending.mdx needs live data embedding or clear date-stamping.
5. **Only 1 AI run completed** (v5). No collation, no Check B yet.
