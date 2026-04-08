# Livepeer — Source Authority Registry

**Purpose**: Tells content prompts where to verify factual claims. Consult this before citing any specific value, parameter, contract address, or protocol mechanic.
**Generated**: 2026-03-20

---

## What counts as a source of truth

Sources of truth fall into three categories:

1. **On-chain / blockchain** — the canonical record of what is deployed and live. Cannot be wrong about state. Arbiscan is the verifier; Explorer surfaces it readably.
2. **Source code (tagged release)** — the canonical record of intended software behaviour. Use the latest tagged release, not `main`.
3. **Formal governance records** — LIPs (immutable once `Final`), on-chain governance outcomes via the protocol contracts and LIPs repo. Cross-check LIPs against go-livepeer implementation to confirm the change is actually in the deployed binary.

**Lead sources** (useful starting points — not standalone authorities): the docs site (docs.livepeer.org), web search results, Discord threads, and community guides can surface claims and point you toward the right primary source. Use them as leads — then verify every factual claim against a primary source before using it. Never cite a lead source as the authority.

**Not-permitted**: social media posts without named author context, undated community wikis, anonymous blog posts.

---

## Tiers

- **primary** — must be consulted for this claim type; use first
- **acceptable** — may support or corroborate a claim; do not use as sole source; always date-check (treat content older than ~18 months as potentially stale)
- **lead** — use to find claims and locate primary sources; never cite as authority; always verify before using
- **not-permitted** — never cite

If a claim involves a governance-controlled parameter value (e.g. unbonding period, reward cut, active set size): verify on-chain via Explorer or Arbiscan — constants can be overridden by governance without a code change.

---

## On-Chain and Protocol

| What you want to verify | Source | Tier | Notes |
|---|---|---|---|
| Live stake, active set membership, delegator positions, reward call status, treasury balance | [Livepeer Explorer](https://explorer.livepeer.org) | primary | Live on-chain read |
| Treasury balance and governance proposal outcomes | [Treasury dashboard](https://explorer.livepeer.org/treasury) | primary | Live on-chain read |
| All Livepeer contract addresses currently deployed on Arbitrum | [Arbiscan — Livepeer label](https://arbiscan.io/accounts/label/livepeer) | primary | Blockchain is the canonical record; this view scopes Arbiscan to Livepeer-tagged contracts only |
| Canonical address list (cross-reference against Arbiscan) | [governor-scripts addresses.js](https://github.com/livepeer/governor-scripts/blob/master/updates/addresses.js) | primary | Cross-check this against Arbiscan to confirm addresses are live and match |
| Smart contract source code and ABI | [Protocol contracts repo](https://github.com/livepeer/protocol) — `confluence` branch is the deployed version | primary | For source and ABI only — use governor-scripts + Arbiscan for addresses. Cross-check implementation against relevant LIPs and the go-livepeer binary to confirm the change is deployed. |
| Protocol architecture, segment model, job lifecycle, slashing conditions | [Whitepaper](https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md) | primary | Low staleness for conceptual content; high for specific param values — cross-check LIPs |
| O-T split architecture, pool deployments, Streamflow upgrade | [Streamflow spec](https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md) | primary | Low staleness for architecture; medium for operational detail |
| Formal protocol changes | [LIPs repo](https://github.com/livepeer/LIPs) — each LIP has its own numbered file, immutable once `Final` | primary | LIPs do not change after acceptance. Verify LIP numbers here directly — do not trust secondary descriptions of what a LIP says. |
| Upgrade phase names and completion status | [Wiki Roadmap](https://github.com/livepeer/wiki/wiki/Roadmap) | primary | Medium staleness — Delta completion status may be outdated |
| Stake-weighted voting, vote detachment, governance process | [Wiki Governance](https://github.com/livepeer/wiki/wiki/Governance) — cross-check LIP-89 | primary | Medium staleness |
| LPT bridging (L1↔Arbitrum), L2LPTGateway, L1 Escrow | [arbitrum-lpt-bridge repo](https://github.com/livepeer/arbitrum-lpt-bridge) | primary | Low staleness |

---

## Code and SDKs

| What you want to verify | Source | Tier | Notes |
|---|---|---|---|
| CLI flag names, defaults, and accepted values (`pricePerUnit`, `pixelsPerUnit`, `orchSecret`, `aiWorker`, etc.) | [go-livepeer repo](https://github.com/livepeer/go-livepeer) — latest tagged release, not `main` | primary | Medium staleness — flags change between releases; always specify which release. Cross-check against LIPs for any flag implementing a governance change. |
| AI pipeline config, `aiModels.json` schema, BYOC container API, warm/cold model behaviour | [go-livepeer repo](https://github.com/livepeer/go-livepeer) — latest tagged release | primary | High staleness — AI config surface changes frequently |
| JS/TS SDK for Studio API (stream and asset management, auth) | [livepeer-js repo](https://github.com/livepeer/livepeer-js) | primary | Medium staleness |
| JS/TS client for AI API (pipeline requests, response schemas) | [livepeer-ai-js repo](https://github.com/livepeer/livepeer-ai-js) | primary | High staleness — AI API evolves frequently |
| Python client for AI API | [livepeer-ai-sdks repo](https://github.com/livepeer/livepeer-ai-sdks) | primary | High staleness |
| ComfyUI integration (ComfyStream — ComfyUI workflows as live media backends) | [comfystream repo](https://github.com/livepeer/comfystream) | primary | High staleness — ComfyUI API compatibility breaks often |
| Python real-time streaming SDK (low-latency developer workflows, trickle streaming protocol) | [pytrickle repo](https://github.com/livepeer/pytrickle) | primary | High staleness — API surface evolves with protocol changes |
| Runner-side AI execution behaviour, custom inference flow, OpenAPI definitions for AI worker API | [ai-runner repo](https://github.com/livepeer/ai-runner) | primary | High staleness — AI runner architecture changes frequently |
| Official end-to-end Studio integration example (product wiring patterns, auth, asset management) | [studio-sample-app repo](https://github.com/livepeer/studio-sample-app) | acceptable | Check last-updated date; verify patterns against livepeer-js and Studio API docs |
| Monitoring stack (Prometheus metrics, Grafana dashboards for go-livepeer) | [livepeer-monitoring repo](https://github.com/livepeer/livepeer-monitoring) | primary | Medium staleness |
| Community-maintained ecosystem tools | [awesome-livepeer](https://github.com/livepeer/awesome-livepeer) — verify each tool is still maintained | acceptable | High staleness — community tools appear and disappear |

---

## Official Channels

| What you want to verify | Source | Tier | Notes |
|---|---|---|---|
| Governance proposals, pre-LIP discussions, SPE funding decisions, pricing guidance | [Livepeer Forum](https://forum.livepeer.org) — cite final version, not drafts; always check date | acceptable (primary for proposals not yet formalised as LIPs) | Forum posts can be edited; confirm against on-chain outcome where available |
| Real-time operator Q&A, pricing benchmarks, pool arrangements, troubleshooting, core team announcements | [Livepeer Discord](https://discord.gg/livepeer) — `#orchestrators`, `#node-operators`, `#ai-video`, `#announcements` | acceptable | Primary comms channel for the ecosystem — high information density but high staleness; always note date and corroborate technical claims against primary sources |
| Ecosystem announcements, product vision, SPE framing | [Livepeer Foundation blog](https://blog.livepeer.org) — check post date | acceptable | Posts represent a point in time; verify any factual claims independently |

**Key forum threads** (verify dates before using):
- Pricing per pixel guidance: `/t/a-guide-for-determining-price-per-pixel/2197`
- Bonding overview: `/t/an-overview-of-bonding/97`
- Inflation LIP discussion: `/t/inflation-focused-lip-discussion-thread/2753`
- AI capability discovery: `/t/ai-capability-discovery/3233`
- Treasury strategy: `/t/its-time-to-act-accumulation-the-treasury-ceiling/3153`
- Pool working group: `/t/transcoder-pool-working-group/1684`

---

## Internal Design and Planning

These sources contain pre-publication design plans, product specs, and internal decision records. For concepts and features not yet merged to a GitHub repo, these are the earliest available primary sources. Once a spec lands on GitHub (repo, LIP, or release), the GitHub record takes precedence.

**Connector requirement**: Claude (via Notion MCP) and ChatGPT (via Notion connector) can query Notion directly at runtime. Models without a Notion connector cannot access this source and must rely on web-accessible alternatives.

| What you want to verify | Source | Tier | Notes |
|---|---|---|---|
| Product design plans, feature specs, and architectural decisions not yet published to GitHub | [Livepeer Notion workspace](https://www.notion.so) — search for the relevant page, team, or project | primary for pre-GitHub content; cross-check against GitHub once spec is published | Requires Notion connector. Treat Notion content as primary when no GitHub record exists; once a LIP, repo, or release note covers the same claim, that source takes precedence. Always check the page's last-edited date. |
| NaaP (Network as a Platform) design, scope, and architecture — pre-publication or ongoing | Livepeer Notion — search NaaP / Network as a Platform | primary (pre-GitHub) | NaaP design work lives in Notion before landing in the livepeer/naap repo or a LIP. Use to resolve ambiguities (e.g., acronym expansion) that cannot be confirmed from GitHub alone. Cross-check against livepeer/naap repo when available. |
| New feature design and product roadmap items under active development | Livepeer Notion — engineering and product pages | primary (pre-GitHub) | Most reliable source for features that have not yet shipped or been formally specified in a LIP. Higher staleness risk than GitHub: Notion pages may reflect in-progress decisions that were later revised. Always note the last-edited date. |

---

## Secondary and Community (Acceptable — corroborate only, date-check required)

Treat anything older than ~18 months as potentially stale.

| What you want to verify | Source | Tier | Notes |
|---|---|---|---|
| Network role breakdowns — orchestrator geography, stake distribution by region, node operator demographics | [livepeer-data-geography](https://github.com/shtukaresearch/livepeer-data-geography) — Shtuka Research | primary | High-quality independent research; check last-updated date and cross-reference against Explorer for current on-chain state |
| On-chain analytics, stake distribution, reward patterns, network activity trends | [Dune Analytics](https://dune.com) — search "Livepeer" for community dashboards | acceptable | Check last-updated date; dashboards may be unmaintained |
| Protocol research, tokenomics analysis, network metrics | [Messari](https://messari.io) — Livepeer asset profile and research reports | acceptable | Reports are dated; verify figures against Explorer |
| Developer and operator commentary, product signals | Livepeer core team on X/Twitter | acceptable | Signal for topics worth investigating; not a source of facts |
| Video explainers — protocol overview, node setup walkthroughs, AI feature demos | [Livepeer YouTube](https://www.youtube.com/@Livepeer) | acceptable | High staleness for technical content — always cross-check against current go-livepeer release |
| Long-form discussion of protocol design, operator economics, network strategy | Podcasts featuring Livepeer core team (verify episode date) | acceptable | High staleness for technical claims; useful for strategic context and framing |
| Third-party operator tutorials, node setup guides | Community GitHub repos, Medium posts, personal blogs | acceptable | Must check date and author credibility; use to corroborate or surface questions, never as sole source |

---

## Lead Sources (Start Here — Verify Everything)

These are useful for finding claims and locating the right primary source, but cannot stand alone as authorities.

| Source | What it's useful for | How to use it |
|---|---|---|
| docs.livepeer.org (the site we are writing) | Finding existing claims and coverage gaps | Use to identify what's asserted; verify every factual claim against a primary source before using |
| Web search | Finding recent community discussions, research, or announcements | Use to surface leads; verify before citing |
| Any undated community content | Context and orientation | Cross-check all specific claims against primary sources |

**If you have web access**: search for additional relevant sources not listed in this registry — recent research reports, updated community resources, on-chain analytics dashboards. Suggest additions in the Addendum using: `[SUGGESTED SOURCE: {name} — {URL} — {what it covers} — {suggested tier}]`

---

## Information Type Quick-Reference

| Type | Meaning | Minimum veracity level | Source kind |
|---|---|---|---|
| `factual` | A specific verifiable value or state (a number, address, setting, model name, on-chain figure) | **primary** | Whatever primary source owns that domain — on-chain for deployed state, code for configured defaults, governance record for governed values. Do not use one domain's source to verify another domain's facts. |
| `technical` | Code-level behaviour (flag names and defaults, API contracts, SDK method signatures) | **primary** | Source code at a specific tagged release. Version matters — always state which release the claim is based on. |
| `procedural` | Step-by-step instructions | **primary** | Must match actual current behaviour. If you cannot verify a step against source code or a current official guide, mark it `[unverified-step]`. |
| `change` | What changed in an upgrade, release, or governance decision | **primary** | Formal record only — a LIP, a release changelog, or an on-chain governance outcome. Secondary summaries of what changed are not sufficient. |
| `conceptual` | How a mechanism works — architecture, flow, design intent | **primary preferred; acceptable permitted** | Primary if available. If using an acceptable source, date-check: content older than ~18 months may not reflect current design. |
| `evaluative` | Comparative or judgemental claims (benchmarks, pricing guidance, recommendations) | **acceptable** | Any specific number or threshold inside an evaluative claim is itself `factual` — source it accordingly. |
| `narrative` | Vision, positioning, framing, strategic context | **acceptable** | Derived from official communications (announcements, blog posts, Foundation materials). Verify any `factual` or `technical` claims embedded in the narrative separately — they do not inherit the narrative's lower bar. |
