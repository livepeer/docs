# Livepeer — Source Authority Registry

**Purpose**: Tells content prompts where to verify factual claims. Consult this before citing any specific value, parameter, contract address, or protocol mechanic.
**Full source**: `tasks/plan/active/TERMINOLOGY-COLLATE/consolidated/veracity-sources.md`
**Generated**: 2026-03-20

---

## How to use

- **primary** — must be consulted for this claim type; use first
- **acceptable** — may support a claim; do not use as sole source
- **not-permitted** — never cite (not listed here; avoid secondary blogs, social posts, community wikis)

If a claim involves a parameter value (e.g. unbonding period, reward cut, active set size): always verify on-chain via Explorer, not from source code — constants can be overridden by governance.

---

## Protocol and On-Chain

| What you want to verify | Source | Tier | Staleness risk |
|---|---|---|---|
| Protocol architecture, segment model, job lifecycle, slashing conditions | [Whitepaper](https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md) | primary | low (conceptual); high (specific params — cross-check LIPs) |
| O-T split architecture, pool deployments, Streamflow upgrade | [Streamflow spec](https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md) | primary | low (arch); medium (op detail) |
| Live stake, active set, delegator positions, reward call status, treasury balance | [Livepeer Explorer](https://explorer.livepeer.org) | primary | low (live on-chain) |
| Treasury balance and governance proposal outcomes | [Treasury dashboard](https://explorer.livepeer.org/treasury) | primary | low (live on-chain) |
| Deployed contract addresses | [Contract addresses reference](https://docs.livepeer.org/references/contract-addresses) | primary | low (stable post-deploy) |
| Smart contract source, ABI, on-chain governance params as implemented | [Protocol contracts repo](https://github.com/livepeer/protocol) — use `confluence` branch | primary | low (use deployment branch, not main) |
| Formal protocol changes — LIP-1, LIP-73, LIP-89, LIP-91, LIP-92 | [LIPs repo](https://github.com/livepeer/LIPs) | primary | low (LIPs are immutable once accepted) |
| Upgrade phase names (Snowmelt, Tributary, Streamflow, Confluence, Delta) | [Wiki Roadmap](https://github.com/livepeer/wiki/wiki/Roadmap) | primary | medium (Delta completion status may be outdated) |
| Stake-weighted voting, vote detachment, governance process history | [Wiki Governance](https://github.com/livepeer/wiki/wiki/Governance) — cross-check LIP-89 | primary | medium |
| LPT bridging (L1↔L2), L2LPTGateway, L1 Escrow | [arbitrum-lpt-bridge repo](https://github.com/livepeer/arbitrum-lpt-bridge) | primary | low |

---

## Code and SDKs

| What you want to verify | Source | Tier | Staleness risk |
|---|---|---|---|
| CLI flag names and defaults (`pricePerUnit`, `pixelsPerUnit`, `orchSecret`, `aiWorker`, etc.) | [go-livepeer repo](https://github.com/livepeer/go-livepeer) — use latest tagged release, not `main` | primary | medium (flags change between releases) |
| Published CLI flags for current stable release | [go-livepeer CLI reference](https://docs.livepeer.org/references/go-livepeer/cli-reference) | primary | medium (may lag release) |
| JS SDK for Studio API (stream/asset management, auth) | [livepeer-js](https://github.com/livepeer/livepeer-js) | primary | medium |
| JS/TS client for AI API (pipeline requests, response schemas) | [livepeer-ai-js](https://github.com/livepeer/livepeer-ai-js) | primary | medium (AI API evolves frequently) |
| Python client for AI API | [livepeer-ai-sdks](https://github.com/livepeer/livepeer-ai-sdks) | primary | medium |
| ComfyStream (ComfyUI workflows as real-time media backends) | [comfystream repo](https://github.com/livepeer/comfystream) | primary | high (ComfyUI API compatibility breaks often) |
| Monitoring setup (Prometheus/Grafana) | [livepeer-monitoring](https://github.com/livepeer/livepeer-monitoring) | primary | medium |
| Ecosystem tools (community-maintained) | [awesome-livepeer](https://github.com/livepeer/awesome-livepeer) — verify each tool is still active | acceptable | high (community tools appear/disappear) |

---

## Official Documentation

| What you want to verify | Source | Tier | Staleness risk |
|---|---|---|---|
| Site structure — which pages exist | `docs.json` in this repo | primary | low (committed; reflects current nav) |
| AI gateway setup, pipeline types, `aiModels.json`, BYOC, warm/cold models | [Livepeer AI docs](https://docs.livepeer.org/ai/introduction) | primary | **high** (AI features change frequently; verify against go-livepeer release) |
| Studio API endpoints, auth, stream/asset objects | [API reference](https://docs.livepeer.org/api-reference/) | primary | medium |
| SDK method signatures, Player/Broadcast props, livepeer-go | [SDK docs](https://docs.livepeer.org/sdks/introduction) | primary | medium (cross-check against npm types) |
| Bonding rate formula, inflation adjustment, reward cut/fee cut definitions | [Delegator yield guide](https://docs.livepeer.org/delegators/guides/yield-calculation) | primary | medium (params can change via governance) |
| Performance score, transcode fail rate, benchmarking methodology | [Orchestrator benchmark guide](https://docs.livepeer.org/orchestrators/guides/benchmark-transcoding) | primary | medium |
| Current glossary content | `v2/gateways/resources/glossary.mdx` (gateways, ~15 terms, current) / `v2/orchestrators/resources/glossary.mdx` (~35 terms, current) / `v2/resources/livepeer-glossary.mdx` (~80 terms, **stub — unverified**) | primary (gateways/orchestrators) / acceptable (resources) | varies |

---

## Foundation and Ecosystem

| What you want to verify | Source | Tier | Staleness risk |
|---|---|---|---|
| Ecosystem announcements, product vision, SPE framing | [Livepeer Foundation blog](https://blog.livepeer.org) — any factual claims within must be independently verified | acceptable | low (posts dated; represent point-in-time) |
| Governance proposals, pre-LIP discussions, SPE funding decisions, pricing guidance | [Livepeer Forum](https://forum.livepeer.org) — cite final version, not draft | acceptable (primary for governance proposals not yet in LIPs) | medium |

**Key forum threads**:
- Pricing per pixel guidance: `/t/a-guide-for-determining-price-per-pixel/2197`
- Bonding overview: `/t/an-overview-of-bonding/97`
- Inflation LIP discussion: `/t/inflation-focused-lip-discussion-thread/2753`
- AI capability discovery: `/t/ai-capability-discovery/3233`
- Treasury strategy: `/t/its-time-to-act-accumulation-the-treasury-ceiling/3153`
- Pool working group: `/t/transcoder-pool-working-group/1684`

---

## Information Type Quick-Reference

Use these types when classifying claims:

| Type | Meaning |
|---|---|
| `factual` | Verifiable facts (contract addresses, parameter values, on-chain state) |
| `conceptual` | Explanations of how a mechanism works |
| `technical` | Code-level specifics (CLI flags, API schemas, SDK methods) |
| `procedural` | Step-by-step instructions |
| `structural` | Site/nav structure — always verify against `docs.json` |
| `evaluative` | Comparative judgements (performance benchmarks, pricing guidance) |
| `narrative` | Vision, positioning, framing — verify embedded factual claims separately |
| `change` | What changed in an upgrade or LIP |
