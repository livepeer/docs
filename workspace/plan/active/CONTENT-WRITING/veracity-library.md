# Veracity Library

**Status**: COMPLETE — 45 sources. Priority table in `tasks/plan/active/TERMINOLOGY-COLLATE/consolidated/veracity-sources.md`
**Purpose**: Map every significant Livepeer documentation source to its information type and veracity standard
**Owner**: Content pipeline — used at runtime by the review skill (Step 18) to verify claims per section

---

## Agent Instructions

You are being asked to build the Livepeer veracity source library. This is a structured registry of every significant source of information used in Livepeer documentation, mapped to its information type and veracity standard.

**What you are building**: A lookup table the review pipeline uses to know: for a given section of content, what sources should claims be verified against, and how strictly?

**Read these files first — in this order**:

1. [index.md](index.md) — full governance index, context for the pipeline
2. [information-type.md](information-type.md) — the 9 information types and what each means
3. [veracity.md](veracity.md) — veracity standards and source tiers per information type
4. [research.md](research.md) — external research references already identified

**Use the terminology collation as your primary source material**:

The terminology team has already done a comprehensive scan of all Livepeer documentation sources across every tab. This is your richest input — it contains identified terms, definitions, and the sources they came from.

Definition collations (by domain):
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/definitions-livepeer.md` — Livepeer-specific definitions
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/definitions-ai.md` — AI domain definitions
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/definitions-video.md` — video domain definitions
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/definitions-web3-economic-technical-ops.md` — web3/economics/ops definitions

Tab-level scans (per site section):
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-home.md`
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-about.md`
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-solutions.md`
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-developers.md`
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-gateways.md`
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-orchestrators.md`
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-lpt.md`
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-community.md`
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-resources.md`

Summary and classification:
- `tasks/plan/active/TERMINOLOGY-COLLATE/research.md` — research overview
- `tasks/plan/active/TERMINOLOGY-COLLATE/classified-by-tag.md` — terms classified by tag
- `tasks/plan/active/TERMINOLOGY-COLLATE/classified-by-tab.md` — terms classified by tab
- `tasks/plan/active/TERMINOLOGY-COLLATE/harvest.md` — harvested terminology with sources
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-summary.md` — scan summary

**Also use the source-verification skill for methodology**:
- `ai-tools/ai-skills/templates/33-docs-source-verification.references/source-priority.md`
- `ai-tools/ai-skills/templates/33-docs-source-verification.references/claim-ledger.md`

---

## What to produce per source entry

For each source you identify, complete one entry in the format below:

```
### [Source Name]

1. **URL / Path**: [full URL or repo path]
2. **Type**: [internal repo / external URL / on-chain / GitHub / official doc / community]
3. **Authoritative for**: [what specific content/claims this source is the ground truth for]
4. **Information types**: [which of the 9 types this source covers — factual / technical / procedural / etc.]
5. **Veracity tier**: [primary / acceptable / not-permitted — from veracity.md definitions]
6. **Update frequency**: [static / versioned / live / irregular]
7. **Staleness risk**: [low / medium / high — how quickly does this go out of date?]
8. **Notes**: [anything important about how to use or interpret this source]
```

---

## Source Categories to Cover

Work through these categories. Each should yield multiple source entries:

### 1. Protocol and on-chain
- Smart contracts (GitHub)
- On-chain data explorers
- Protocol spec documents
- Governance proposals (LIPs/SPEs)

### 2. Code repositories
- `go-livepeer` (node software)
- `livepeer-js` / `livepeer-kit` (SDK)
- `protocol` repo (contracts)
- Any other active repos

### 3. Official documentation
- Current Livepeer docs (v2 — this repo)
- API reference
- SDK documentation
- Developer guides

### 4. Foundation and ecosystem
- Foundation blog / announcements
- Official product positioning
- Partnership announcements
- Shtuka Research `livepeer-data-geography` v1 (see research.md)

### 5. Community and operator sources
- Livepeer Forum
- Discord (as secondary only — not primary)
- Community-maintained tools / dashboards
- Operator reports and benchmarks

### 6. External domain sources
- AI infrastructure benchmarks
- Video streaming standards (HLS, WebRTC)
- Web3 / DeFi reference sources
- GPU hardware specs

---

## Completed Entries

## Category 1 — Protocol and On-Chain

### Livepeer Whitepaper

1. **URL / Path**: `https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md`
2. **Type**: GitHub / official doc
3. **Authoritative for**: Protocol architecture, job lifecycle, segment model, slashing conditions, verification mechanisms (Truebit-style), Video DNA, Broadcaster/Gateway role history, inflation design fundamentals, round structure
4. **Information types**: `factual`, `conceptual`, `technical`
5. **Veracity tier**: primary
6. **Update frequency**: static (foundational design document; does not track live parameter changes)
7. **Staleness risk**: low for conceptual/architectural claims; high for specific parameter values superseded by LIPs
8. **Notes**: Ground truth for original protocol design. Terminology in this document predates the Gateway rename from "Broadcaster" — treat "Broadcaster" in this source as the deprecated term. Cross-check live parameter values against on-chain state or LIPs. The Streamflow doc (`STREAMFLOW.md`) extends this document for the O-T split architecture.

---

### Livepeer Streamflow Spec

1. **URL / Path**: `https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md`
2. **Type**: GitHub / official doc
3. **Authoritative for**: Orchestrator/Transcoder split (O-T split) architecture, pool deployments, WebRTC support introduction, peer-to-peer distribution model, Streamflow upgrade rationale
4. **Information types**: `factual`, `technical`, `conceptual`
5. **Veracity tier**: primary
6. **Update frequency**: static
7. **Staleness risk**: low for architectural claims; medium for operational detail (flags and config have evolved)
8. **Notes**: Companion to the Whitepaper. Defines the canonical architecture for the O-T split that remains in production. The "Siphon" deployment type is documented in release notes, not here.

---

### Livepeer Wiki Roadmap

1. **URL / Path**: `https://github.com/livepeer/wiki/wiki/Roadmap`
2. **Type**: GitHub / official doc
3. **Authoritative for**: Upgrade phase names (Snowmelt, Tributary, Streamflow, Confluence, Delta), roadmap history
4. **Information types**: `factual`, `change`
5. **Veracity tier**: primary
6. **Update frequency**: irregular
7. **Staleness risk**: medium (Delta phase completion status may be outdated)
8. **Notes**: Source of truth for named upgrade phases. Delta upgrade (Truebit-based verification) was planned but not yet deployed as of research date. Verify current status against forum announcements before citing Delta as completed.

---

### Livepeer Wiki Governance

1. **URL / Path**: `https://github.com/livepeer/wiki/wiki/Governance`
2. **Type**: GitHub / official doc
3. **Authoritative for**: Stake-weighted voting mechanics, vote detachment (delegators overriding orchestrator vote), governance process history
4. **Information types**: `factual`, `procedural`, `technical`
5. **Veracity tier**: primary
6. **Update frequency**: irregular
7. **Staleness risk**: medium (LIP-89 introduced LivepeerGovernor; wiki may lag behind)
8. **Notes**: Cross-check against LIP-89 for current on-chain governance mechanics. The wiki captures design intent; LIP-89 defines what was actually deployed.

---

### Smart Contract Addresses — Livepeer Docs Reference

1. **URL / Path**: `https://docs.livepeer.org/references/contract-addresses`
2. **Type**: official doc
3. **Authoritative for**: Deployed contract addresses for BondingManager, BondingVotes, Controller, Governor/LivepeerGovernor, L1 Escrow, Minter, RoundsManager, ServiceRegistry, TicketBroker, AIServiceRegistry on Arbitrum Mainnet and Ethereum L1
4. **Information types**: `factual`, `technical`
5. **Veracity tier**: primary
6. **Update frequency**: versioned (changes on protocol upgrades)
7. **Staleness risk**: low (contract addresses are stable post-deployment; new contracts added for new features)
8. **Notes**: Single authoritative source for all deployed contract addresses. Never use addresses sourced from community posts or secondary blogs — only this page or the protocol repo's deployment artifacts.

---

### Protocol Contracts Repository

1. **URL / Path**: `https://github.com/livepeer/protocol`
2. **Type**: GitHub
3. **Authoritative for**: Smart contract source code, ABI definitions, contract logic, Confluence upgrade (`protocol/tree/confluence` branch), on-chain governance parameters as implemented
4. **Information types**: `technical`, `factual`
5. **Veracity tier**: primary
6. **Update frequency**: versioned
7. **Staleness risk**: low (changes are tracked; use the deployment branch, not `main`, for current production state)
8. **Notes**: Use the `confluence` branch for the currently deployed production contracts. Source code in `main` may be ahead of deployment. For exact parameter values (e.g. unbonding period, active set size), read from on-chain state via Livepeer Explorer rather than source code constants, which can be overridden by governance.

---

### Arbitrum LPT Bridge Repository

1. **URL / Path**: `https://github.com/livepeer/arbitrum-lpt-bridge`
2. **Type**: GitHub
3. **Authoritative for**: L2LPTGateway contract, LPT bridging mechanics between Ethereum L1 and Arbitrum L2, L1 Escrow contract
4. **Information types**: `technical`, `factual`
5. **Veracity tier**: primary
6. **Update frequency**: static (bridge contracts are stable post-deployment)
7. **Staleness risk**: low
8. **Notes**: Ground truth for the bridging path. Use alongside the contract addresses reference page.

---

### Livepeer Explorer (On-Chain)

1. **URL / Path**: `https://explorer.livepeer.org`
2. **Type**: on-chain
3. **Authoritative for**: Live protocol state — active set composition, orchestrator stake, delegator positions, current round, reward call status, treasury balance, governance proposal state and vote counts
4. **Information types**: `factual`, `evaluative`
5. **Veracity tier**: primary
6. **Update frequency**: live
7. **Staleness risk**: low (live on-chain data; data is as current as the latest Arbitrum block)
8. **Notes**: The only source for live protocol state values. For any factual claim about current stake amounts, active set membership, or treasury balance, this is the ground truth. The governance dashboard within Explorer is authoritative for proposal voting data.

---

### Community Treasury (On-Chain)

1. **URL / Path**: `https://explorer.livepeer.org/treasury`
2. **Type**: on-chain
3. **Authoritative for**: Current treasury balance, treasury allocation history, on-chain governance proposal outcomes
4. **Information types**: `factual`, `evaluative`
5. **Veracity tier**: primary
6. **Update frequency**: live
7. **Staleness risk**: low
8. **Notes**: Authoritative for treasury state. For governance vote outcomes, cross-check against the forum thread for the proposal to capture the full discussion context alongside the on-chain result.

---

### LIP Repository — Livepeer Improvement Proposals

1. **URL / Path**: `https://github.com/livepeer/LIPs`
2. **Type**: GitHub / official doc
3. **Authoritative for**: Formal protocol changes — LIP-1 (governance process), LIP-73 (Confluence/Arbitrum migration), LIP-89 (LivepeerGovernor + treasury), LIP-91 (treasury bundle), LIP-92 (treasury reward cut rate), any future protocol upgrades
4. **Information types**: `factual`, `technical`, `change`
5. **Veracity tier**: primary
6. **Update frequency**: irregular (new LIPs as proposals pass)
7. **Staleness risk**: low (LIPs are immutable once accepted; only new LIPs are added)
8. **Notes**: The authoritative record of every protocol change. Before citing a protocol parameter, check whether a LIP has changed it from the Whitepaper value. LIP-89 introduced the LivepeerGovernor and community treasury. LIP-91/92 introduced the inflation-funded treasury mechanism and treasury reward cut rate.

---

## Category 2 — Code Repositories

### go-livepeer (Node Software)

1. **URL / Path**: `https://github.com/livepeer/go-livepeer`
2. **Type**: GitHub
3. **Authoritative for**: CLI flag names and defaults (`pricePerUnit`, `pixelsPerUnit`, `pricePerGateway`, `pricePerCapability`, `autoAdjustPrice`, `MaxPrice`, `orchSecret`, `aiWorker`), OrchestratorInfo data structure, weight factors (`selectRandWeight`, `selectStakeWeight`, `selectPriceWeight`), orchestrator selection algorithm, Siphon deployment type implementation, release notes for deployment types
4. **Information types**: `technical`, `factual`, `procedural`
5. **Veracity tier**: primary
6. **Update frequency**: versioned
7. **Staleness risk**: medium (CLI flags and defaults change between releases; always pin to a release version when documenting)
8. **Notes**: Ground truth for node software behaviour. The issues tracker (`go-livepeer/issues`) is an acceptable source for orchestrator selection algorithm details (issue #1802 documents weight factors). Do not use `main` branch for documentation of current stable behaviour — use the latest tagged release.

---

### go-livepeer CLI Reference

1. **URL / Path**: `https://docs.livepeer.org/references/go-livepeer/cli-reference`
2. **Type**: official doc
3. **Authoritative for**: Published CLI flags with descriptions, defaults, and valid values for the current stable release
4. **Information types**: `factual`, `technical`
5. **Veracity tier**: primary
6. **Update frequency**: versioned
7. **Staleness risk**: medium (may lag the release by a sprint; cross-check against the release for the version being documented)
8. **Notes**: The rendered reference page is the most accessible form of CLI documentation. If a flag is not listed here but exists in the binary, it may be undocumented or experimental — do not document undocumented flags without confirmation from the go-livepeer repo.

---

### livepeer-js / Livepeer.js

1. **URL / Path**: `https://github.com/livepeer/livepeer-js`
2. **Type**: GitHub
3. **Authoritative for**: JavaScript library for the Livepeer Studio API — stream and asset management, SDK method signatures, response types, authentication patterns
4. **Information types**: `technical`, `factual`
5. **Veracity tier**: primary
6. **Update frequency**: versioned
7. **Staleness risk**: medium
8. **Notes**: Also tagged `livepeer:sdk` and `livepeer:product` in the terminology collation. The `@livepeer/react` React SDK providing the Player and Broadcast UI components is distributed separately from the core API client. Check package versions in npm before documenting API shapes.

---

### livepeer-ai-js

1. **URL / Path**: `https://github.com/livepeer/livepeer-ai-js`
2. **Type**: GitHub
3. **Authoritative for**: JavaScript/TypeScript client for the Livepeer AI API — pipeline request formats, response schemas, authentication, AI inference integration patterns
4. **Information types**: `technical`, `factual`
5. **Veracity tier**: primary
6. **Update frequency**: versioned
7. **Staleness risk**: medium (AI API is actively developed; pipeline types and schemas evolve frequently)
8. **Notes**: Separate from `livepeer-js` (Studio API). For AI-specific SDK documentation, use this repo, not `livepeer-js`.

---

### livepeer-ai-sdks (Python)

1. **URL / Path**: `https://github.com/livepeer/livepeer-ai-sdks`
2. **Type**: GitHub
3. **Authoritative for**: Python client for the Livepeer AI API
4. **Information types**: `technical`, `factual`
5. **Veracity tier**: primary
6. **Update frequency**: versioned
7. **Staleness risk**: medium
8. **Notes**: Python counterpart to `livepeer-ai-js`. Used by the `livepeer-ai-python` package.

---

### LPMS — Livepeer Media Server

1. **URL / Path**: `https://github.com/livepeer/lpms`
2. **Type**: GitHub
3. **Authoritative for**: Open-source media server providing RTMP input and HLS output; the media server layer underlying `go-livepeer`
4. **Information types**: `technical`, `factual`
5. **Veracity tier**: primary
6. **Update frequency**: versioned
7. **Staleness risk**: medium
8. **Notes**: Lower-level than `go-livepeer`. Most documentation should reference `go-livepeer` for operator-facing content. LPMS is relevant for deep technical content about ingest and transcoding mechanics.

---

### PyTrickle

1. **URL / Path**: `https://github.com/livepeer/pytrickle`
2. **Type**: GitHub
3. **Authoritative for**: Trickle Streaming Protocol implementation, Python real-time video/audio streaming with custom processing, `FrameProcessor` pattern
4. **Information types**: `technical`, `factual`
5. **Veracity tier**: primary
6. **Update frequency**: versioned
7. **Staleness risk**: medium
8. **Notes**: Relevant for AI video pipeline documentation and real-time streaming integration content. The Trickle protocol itself is defined by this implementation.

---

### ComfyStream

1. **URL / Path**: `https://github.com/livepeer/comfystream`
2. **Type**: GitHub
3. **Authoritative for**: ComfyStream implementation — running ComfyUI workflows as real-time media processing backends, integration with Livepeer AI network
4. **Information types**: `technical`, `factual`
5. **Veracity tier**: primary
6. **Update frequency**: versioned
7. **Staleness risk**: high (AI tooling evolves quickly; ComfyUI API compatibility can break between versions)
8. **Notes**: Also tagged `livepeer:product` and `ai:framework`. Cross-check ComfyUI version compatibility before publishing procedural content.

---

### awesome-livepeer

1. **URL / Path**: `https://github.com/livepeer/awesome-livepeer`
2. **Type**: GitHub / community
3. **Authoritative for**: Community-curated list of ecosystem tools, dashboards, and resources (AI Compute Visualiser, AI Inference Tester, Growth Dashboard, livepeer-monitoring, Livepeer Reward Watcher, Livepeer.Tools, Livepeer Primer, Stream Tester, Telegram Watcher Bot, Test Streams Dashboard)
4. **Information types**: `structural`, `factual`
5. **Veracity tier**: acceptable
6. **Update frequency**: irregular
7. **Staleness risk**: high (community tools appear and disappear; links go stale)
8. **Notes**: Use as a discovery source for community tooling. Verify that each tool still exists and is maintained before citing in documentation. Do not cite tool availability as a fact without checking the linked repo is active.

---

### livepeer-monitoring

1. **URL / Path**: `https://github.com/livepeer/livepeer-monitoring`
2. **Type**: GitHub
3. **Authoritative for**: Bundled Prometheus/Grafana monitoring for Livepeer node instances
4. **Information types**: `technical`, `procedural`
5. **Veracity tier**: primary
6. **Update frequency**: versioned
7. **Staleness risk**: medium
8. **Notes**: Also listed in `awesome-livepeer`. Use the repo directly for procedural documentation of monitoring setup.

---

### Orchestrator Price API

1. **URL / Path**: `https://github.com/livepeer/orchestrator-price-api`
2. **Type**: GitHub
3. **Authoritative for**: Price-per-pixel fluctuation data by orchestrator, pricing visibility tooling
4. **Information types**: `technical`, `evaluative`
5. **Veracity tier**: acceptable
6. **Update frequency**: live
7. **Staleness risk**: medium
8. **Notes**: Community/ecosystem tooling maintained by Livepeer. Acceptable for evaluative content about pricing benchmarks with methodology stated.

---

### Stream Tester

1. **URL / Path**: `https://github.com/livepeer/stream-tester`
2. **Type**: GitHub
3. **Authoritative for**: Orchestrator performance testing via RTMP streams, transcoding success metrics
4. **Information types**: `technical`, `evaluative`
5. **Veracity tier**: acceptable
6. **Update frequency**: versioned
7. **Staleness risk**: medium
8. **Notes**: Ground truth for stream-tester methodology. Acceptable as a source of benchmark methodology; results are evaluative data requiring labelling.

---

### Livepeer Explorer Repository

1. **URL / Path**: `https://github.com/livepeer/explorer`
2. **Type**: GitHub
3. **Authoritative for**: Explorer UI source code, governance dashboard implementation
4. **Information types**: `technical`
5. **Veracity tier**: acceptable
6. **Update frequency**: versioned
7. **Staleness risk**: medium
8. **Notes**: Use the live Explorer at `explorer.livepeer.org` for on-chain data; use this repo only for technical content about Explorer implementation.

---

## Category 3 — Official Documentation

### Livepeer Docs v2 (this repo)

1. **URL / Path**: `https://docs.livepeer.org` / repo: `Docs-v2-dev`
2. **Type**: internal repo / official doc
3. **Authoritative for**: All published Livepeer developer documentation — gateway guides, orchestrator guides, AI docs, developer SDK guides, protocol overviews, resource glossary (`v2/resources/livepeer-glossary.mdx`), gateway glossary (`v2/gateways/resources/glossary.mdx`), orchestrator glossary (`v2/orchestrators/resources/glossary.mdx`), Livepeer 101 (`v2/resources/concepts/livepeer-101.mdx`), internal definitions (`v2/internal/definitions.mdx`), contract address reference
4. **Information types**: `factual`, `conceptual`, `procedural`, `technical`, `structural`
5. **Veracity tier**: primary
6. **Update frequency**: versioned (per release cycle; some pages lag)
7. **Staleness risk**: medium (individual pages can fall behind the live system; `veracityStatus: stale` flags this)
8. **Notes**: This is the canonical output of the documentation pipeline. For the review pipeline, `docs.json` is authoritative for site structure (`structural` type). The internal definitions file (`v2/internal/definitions.mdx`) is authoritative for audience tokens, page types, and content architecture terms.

---

### Livepeer AI Documentation

1. **URL / Path**: `https://docs.livepeer.org/ai/introduction`
2. **Type**: official doc
3. **Authoritative for**: AI gateway setup (`/ai/gateways/`), AI orchestrator configuration (`/ai/orchestrators/`), pipeline types, capability advertisement, `aiModels.json` configuration, warm/cold model concepts, BYOC deployment pattern, on-chain vs off-chain gateway modes
4. **Information types**: `factual`, `procedural`, `technical`
5. **Veracity tier**: primary
6. **Update frequency**: versioned (AI features are actively developed; update frequency is higher than other sections)
7. **Staleness risk**: high (AI pipeline types, model IDs, and configuration schemas change frequently)
8. **Notes**: The highest-staleness-risk section of official documentation due to the pace of AI feature development. All procedural content in this section should be verified against the current `go-livepeer` release before publication. Cross-check pipeline names against `aiModels.json` schema.

---

### Livepeer API Reference

1. **URL / Path**: `https://docs.livepeer.org/api-reference/` (and `https://docs.livepeer.org/reference/api`)
2. **Type**: official doc
3. **Authoritative for**: Studio API endpoint definitions, request/response schemas, authentication (API keys, Bearer tokens), stream object structure, asset management endpoints, playback info API, multistream target API, access control (JWT signing), room API
4. **Information types**: `factual`, `technical`
5. **Veracity tier**: primary
6. **Update frequency**: versioned
7. **Staleness risk**: medium
8. **Notes**: For API reference content, the OpenAPI spec (if available in the repo) takes precedence over rendered documentation. Verify endpoint paths and response schemas against the live API if there is any discrepancy.

---

### Livepeer SDK Documentation

1. **URL / Path**: `https://docs.livepeer.org/sdks/introduction` (and `https://docs.livepeer.org/sdks/react/getting-started`)
2. **Type**: official doc
3. **Authoritative for**: SDK installation, method signatures, `@livepeer/react` Player and Broadcast component props, SDK quickstart patterns, `livepeer-go` server-side SDK usage
4. **Information types**: `procedural`, `technical`, `factual`
5. **Veracity tier**: primary
6. **Update frequency**: versioned
7. **Staleness risk**: medium
8. **Notes**: SDK docs should be cross-checked against the npm/package release for the version being documented. Component prop types are authoritative in the TypeScript types published to npm, not the prose documentation.

---

### docs.json (Navigation Structure)

1. **URL / Path**: `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/docs.json`
2. **Type**: internal repo
3. **Authoritative for**: Site navigation structure — all tabs, groups, and page paths that exist in the live site; the only ground truth for `structural` information type verification
4. **Information types**: `structural`
5. **Veracity tier**: primary
6. **Update frequency**: versioned
7. **Staleness risk**: low (changes are committed; the file reflects the committed navigation state)
8. **Notes**: The single source of truth for site structure. Any `structural` content claim (e.g. "this section exists", "this page is under this group") must be verified against this file. Never assert structural claims from memory or from an older version of the site.

---

### Delegator Yield Calculation Guide

1. **URL / Path**: `https://docs.livepeer.org/delegators/guides/yield-calculation`
2. **Type**: official doc
3. **Authoritative for**: Bonding rate formula, inflation adjustment mechanism (0.00005% per round), target bonding rate (50%), commission rate definitions (fee cut, reward cut), delegator reward calculation, dilution mechanics
4. **Information types**: `factual`, `technical`, `evaluative`
5. **Veracity tier**: primary
6. **Update frequency**: versioned
7. **Staleness risk**: medium (inflation parameters can change via governance)
8. **Notes**: Key source for economic model documentation. If a LIP has changed the inflation adjustment rate or target bonding rate, the LIP takes precedence.

---

### Orchestrator Benchmark Transcoding Guide

1. **URL / Path**: `https://docs.livepeer.org/orchestrators/guides/benchmark-transcoding`
2. **Type**: official doc
3. **Authoritative for**: Performance score calculation (latency score x success rate), transcode fail rate definition, uptime definition, benchmarking methodology
4. **Information types**: `factual`, `procedural`, `technical`
5. **Veracity tier**: primary
6. **Update frequency**: versioned
7. **Staleness risk**: medium
8. **Notes**: Ground truth for orchestrator performance metric definitions. Cross-check against `go-livepeer` issue #1802 for selection algorithm weight factor details.

---

## Category 4 — Foundation and Ecosystem

### Livepeer Foundation Blog

1. **URL / Path**: `https://blog.livepeer.org`
2. **Type**: external URL / official doc
3. **Authoritative for**: Ecosystem announcements, product vision, strategic framing (Cascade vision, Daydream launch, Foundation launch), partnership announcements, SPE funding decisions (narrative level), community updates
4. **Information types**: `narrative`, `factual` (for embedded specific claims), `change`
5. **Veracity tier**: acceptable
6. **Update frequency**: irregular
7. **Staleness risk**: low (blog posts are dated and represent a point in time; they do not go "stale" in the way live system docs do)
8. **Notes**: Acceptable for narrative and value-proposition content. Any specific factual claims embedded in blog posts (numbers, protocol parameters, benchmarks) must be independently verified against primary sources before citing. Blog posts are not primary sources for technical or procedural content.

**Key posts identified in terminology collation**:
- Cascade vision: `https://blog.livepeer.org/introducing-livepeer-cascade-a-vision-for-livepeers-future-in-the-age-of-real-time-ai-video/`
- Daydream launch: `https://blog.livepeer.org/daydream-live-a-glimpse-into-the-future-of-realtime-ai-video-on-livepeer/`
- Inflation and delegation analysis: `https://blog.livepeer.org/why-delegation-still-matters-in-a-low-inflation-environment/`

---

### Livepeer Forum

1. **URL / Path**: `https://forum.livepeer.org`
2. **Type**: community / official
3. **Authoritative for**: Pre-proposals and LIP discussions (governance category), SPE proposals and funding decisions, treasury proposals (treasury category), community governance processes, pricing guidance (`/t/a-guide-for-determining-price-per-pixel/2197`), deployment type discussions (pool working group: `/t/transcoder-pool-working-group/1684`), inflation LIP discussions (`/t/inflation-focused-lip-discussion-thread/2753`), AI capability discovery (`/t/ai-capability-discovery/3233`), treasury strategy (`/t/its-time-to-act-accumulation-the-treasury-ceiling/3153`)
4. **Information types**: `factual` (for ratified proposals), `analytical`, `narrative`
5. **Veracity tier**: acceptable (primary for governance proposals that have not yet become LIPs; secondary for general discussion)
6. **Update frequency**: live
7. **Staleness risk**: medium (proposals evolve through discussion; cite the final version not intermediate drafts)
8. **Notes**: Governance category and treasury category posts are acceptable sources for community governance facts. General discussion threads are secondary only. Always cite the specific thread URL, not the forum homepage. For SPE facts (GWID, GovWorks, LiveInfra, LISAR, Embody, AI Video SPE, Transformation SPE, Workstreams, Advisory Boards), the forum pre-proposal or proposal thread is the primary source until a formal governance record exists elsewhere.

---

### livepeer.org (Marketing Site)

1. **URL / Path**: `https://livepeer.org` (incl. `/primer`, `/lpt`, `/delegate`, `/orchestrate`, `/network`, `/community-hub`)
2. **Type**: external URL / official doc
3. **Authoritative for**: Public product positioning, network participation entry points, LPT token overview, staking entry point for delegators, Livepeer Primer (visual protocol overview), community hub links
4. **Information types**: `narrative`, `structural`
5. **Veracity tier**: acceptable
6. **Update frequency**: irregular
7. **Staleness risk**: medium (marketing copy can lag protocol changes)
8. **Notes**: Acceptable for narrative/positioning content. Not a primary source for technical or factual claims. The Primer at `livepeer.org/primer` is a useful conceptual overview but is not a substitute for the Whitepaper or LIP documentation for specific protocol claims.

---

### Shtuka Research — livepeer-data-geography v1

1. **URL / Path**: `https://github.com/shtukaresearch/livepeer-data-geography/tree/v1`
2. **Type**: external URL / ecosystem research
3. **Authoritative for**: Ecosystem role taxonomy (7 roles across 5 entity types: Foundation, Gateway, Investor-Delegator, Orchestrator-Delegate, SPE), data geography model (0-5 information accessibility ratings per role), 6 data views (Demand, Supply, Delegator, Staking, Market, Governance), developer/gateway fuzzy boundary analysis, builder classification into 3 categories, gateway role definition ("Aggregate customer requests for video transcoding and AI workloads, and distribute jobs to Orchestrators"), identified data gaps (protocol-level fault mitigation for AI, transparent orchestrator performance data, extended capability reporting, job tagging)
4. **Information types**: `analytical`, `evaluative`, `conceptual`
5. **Veracity tier**: acceptable (primary for audience/role definitions and ecosystem analysis)
6. **Update frequency**: static (v1 is a point-in-time research publication)
7. **Staleness risk**: medium (ecosystem has evolved since publication; the Developer Platform and AI capabilities postdate or were nascent during this research)
8. **Notes**: The highest-quality independent ecosystem analysis available. Use for audience definition, role taxonomy, and developer journey analysis. Shtuka's 3-category builder taxonomy (API consumer / custom pipeline / tooling builder) is the recommended basis for audience segmentation. Key files: `roles/gateway.md`, `roles/orchestrator-delegate.md`, `roles/investor-delegator.md`, `model.md`, `resource-table.md`. Cross-reference with current official docs for any protocol mechanics claims.

---

### Livepeer Foundation Launch Announcement

1. **URL / Path**: `https://forum.livepeer.org/t/launching-the-livepeer-foundation/2849`
2. **Type**: community / official
3. **Authoritative for**: Livepeer Foundation entity definition (non-profit Cayman Islands Foundation Company), stewardship mandate, relationship between Foundation and Livepeer Inc
4. **Information types**: `factual`, `narrative`
5. **Veracity tier**: acceptable
6. **Update frequency**: static (announcement post)
7. **Staleness risk**: low
8. **Notes**: Cross-reference with `https://forum.livepeer.org/t/livepeer-inc-in-the-age-of-the-livepeer-foundation/2850` for the Livepeer Inc / Foundation transition context.

---

### Livepeer Governance Process Definition

1. **URL / Path**: `https://forum.livepeer.org/t/livepeer-governance-process/2767`
2. **Type**: community / official
3. **Authoritative for**: SPE definition (Special Purpose Entity — treasury-funded unit with defined scope, budget, accountability), governance process flow, pre-proposal → LIP pathway
4. **Information types**: `factual`, `procedural`
5. **Veracity tier**: acceptable
6. **Update frequency**: irregular
7. **Staleness risk**: medium (governance process evolves; cross-check against recent LIPs)
8. **Notes**: Defines the SPE model that underlies GWID, GovWorks, LiveInfra, and all other SPEs. If the governance process has been updated via a LIP or forum decision since this post, the more recent source takes precedence.

---

## Category 5 — Community and Operator Sources

### Livepeer Forum — Community and Operator Threads

1. **URL / Path**: `https://forum.livepeer.org` (community/operator threads)
2. **Type**: community
3. **Authoritative for**: Operator experiences, community pricing discussion, deployment type experiences, pool working group decisions, transcoder campaign reports (Titan Node), community tool announcements
4. **Information types**: `analytical`, `evaluative`, `narrative`
5. **Veracity tier**: acceptable (for evaluative/analytical content with methodology stated; never for factual or technical claims without primary source cross-check)
6. **Update frequency**: live
7. **Staleness risk**: high (community posts reflect a point in time; operator conditions change)
8. **Notes**: Use for operator perspective and community context. Never cite forum posts as the sole source for factual or technical claims. Community-reported benchmarks must state the methodology, hardware, and software version used.

**Key operator threads**:
- Pricing guide: `https://forum.livepeer.org/t/a-guide-for-determining-price-per-pixel/2197`
- Pool working group: `https://forum.livepeer.org/t/transcoder-pool-working-group/1684`
- Titan Node campaign: `https://forum.livepeer.org/t/transcoder-campaign-titan-node/1392`
- GWID SPE pre-proposal: `https://forum.livepeer.org/t/gwid-spe-pre-proposal-gateway-wizard-phase-1/2868`
- LiveInfra SPE pre-proposal: `https://forum.livepeer.org/t/pre-proposal-liveinfra-spe/2953`
- AI SPE retrospective: `https://forum.livepeer.org/t/ai-spe-phase-4-retrospective/3208`

---

### Livepeer Discord

1. **URL / Path**: `https://www.livepeer.org/community-hub` (Discord link)
2. **Type**: community
3. **Authoritative for**: Real-time community discussion, informal operator Q&A — not authoritative for any permanent content
4. **Information types**: (none — not a citable information source)
5. **Veracity tier**: not-permitted (as a documentation source; secondary only for discovering that a topic needs coverage)
6. **Update frequency**: live
7. **Staleness risk**: high
8. **Notes**: Discord is explicitly not-permitted as a citation source. It may be used to identify community confusion or documentation gaps that need addressing, but no claim in documentation may be sourced from Discord alone. Any information encountered on Discord must be verified against a primary or acceptable source before use.

---

### Community Dashboards and Tools

1. **URL / Path**: Various — `https://github.com/livepeer/awesome-livepeer` for index
2. **Type**: community
3. **Authoritative for**: Ecosystem tooling availability (Livepeer.Tools, livepeer.tools payout dashboard, livepeer-monitoring, AI Compute Visualiser, Growth Dashboard, Test Streams Dashboard)
4. **Information types**: `evaluative` (benchmark data), `structural` (tool inventory)
5. **Veracity tier**: acceptable (for benchmark data with methodology stated; not-permitted for factual protocol claims)
6. **Update frequency**: irregular
7. **Staleness risk**: high
8. **Notes**: Community tools are valuable for evaluative content (benchmarks, performance data) but require methodology disclosure and version pinning. Verify tool is actively maintained before citing.

---

### Livepeer Academy

1. **URL / Path**: `https://forum.livepeer.org/t/livepeer-academy-get-started-here/1546`
2. **Type**: community
3. **Authoritative for**: Community-produced educational content about the protocol
4. **Information types**: `conceptual`, `narrative`
5. **Veracity tier**: acceptable (for conceptual framing and community perspective; never for factual or technical claims without primary source verification)
6. **Update frequency**: irregular
7. **Staleness risk**: high
8. **Notes**: Useful for understanding how the community frames protocol concepts. Content quality varies; always cross-check factual claims against primary sources.

---

### Livepeer Community Arbitrum Node (LiveInfra SPE)

1. **URL / Path**: `https://forum.livepeer.org/t/pre-proposal-liveinfra-spe/2953`
2. **Type**: community / ecosystem
3. **Authoritative for**: Community Arbitrum Node service — free, load-balanced, geo-distributed RPC for Arbitrum L2 and Ethereum L1
4. **Information types**: `technical`, `factual`
5. **Veracity tier**: acceptable
6. **Update frequency**: live (service availability)
7. **Staleness risk**: medium
8. **Notes**: Provided by LiveInfra SPE. Acceptable source for documenting the community RPC service. For SLA guarantees, check the most recent SPE update thread.

---

### Snapshot (Off-Chain Governance)

1. **URL / Path**: `https://snapshot.org`
2. **Type**: external URL / community
3. **Authoritative for**: Off-chain gasless governance polls and community sentiment signals
4. **Information types**: `factual` (for vote outcome records)
5. **Veracity tier**: acceptable
6. **Update frequency**: live
7. **Staleness risk**: low (historical poll records are permanent)
8. **Notes**: Not a substitute for on-chain governance via LivepeerGovernor. Snapshot polls are non-binding community sentiment signals. Use only for documenting that a community poll occurred; for binding governance outcomes, cite the on-chain transaction via Livepeer Explorer.

---

### Dune Analytics

1. **URL / Path**: `https://dune.com/home`
2. **Type**: external URL / community
3. **Authoritative for**: On-chain analytics via SQL queries on Arbitrum/Ethereum data — protocol usage metrics, fee volumes, staking participation rates
4. **Information types**: `evaluative`, `factual`
5. **Veracity tier**: acceptable
6. **Update frequency**: live
7. **Staleness risk**: low (queries run against live chain data)
8. **Notes**: Acceptable for evaluative content about network usage with the query URL cited. Verify the query is against the correct contract addresses. Community-created dashboards on Dune vary in quality; cite the specific query, not "Dune says".

---

## Category 6 — External Domain Sources

### Video Streaming Standards — Wikipedia

1. **URL / Path**: Multiple — `https://en.wikipedia.org/wiki/HTTP_Live_Streaming`, `https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol`, `https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP`, `https://en.wikipedia.org/wiki/WebRTC`, `https://en.wikipedia.org/wiki/Secure_Reliable_Transport`
2. **Type**: external URL
3. **Authoritative for**: Streaming protocol definitions (HLS, RTMP, RTMPS, DASH, SRT, WebRTC, WHIP, WHEP), general video format definitions (MP4, WebVTT, OBS)
4. **Information types**: `conceptual`, `factual`
5. **Veracity tier**: acceptable
6. **Update frequency**: irregular (Wikipedia — community-edited)
7. **Staleness risk**: low for established standards; medium for evolving standards
8. **Notes**: Acceptable for conceptual definitions of industry-standard protocols. Not a primary source for Livepeer-specific implementation details of these protocols. For WHIP (RFC 9725), use the IETF RFC as primary: `https://www.rfc-editor.org/rfc/rfc9725.html`. For WHEP, use the IETF draft: `https://datatracker.ietf.org/doc/draft-ietf-wish-whep/`.

---

### IETF / RFC Standards

1. **URL / Path**: `https://www.rfc-editor.org/rfc/rfc9725.html` (WHIP RFC 9725); `https://datatracker.ietf.org/doc/draft-ietf-wish-whep/` (WHEP draft)
2. **Type**: external URL / official standard
3. **Authoritative for**: WHIP (WebRTC-HTTP Ingestion Protocol) — RFC 9725 is the ratified standard; WHEP (WebRTC-HTTP Egress Protocol) — IETF draft
4. **Information types**: `factual`, `technical`
5. **Veracity tier**: primary (for the protocol standard itself)
6. **Update frequency**: static (RFCs are immutable; drafts update)
7. **Staleness risk**: low (RFCs); medium (drafts, until ratified)
8. **Notes**: Use when documenting WHIP/WHEP protocol compliance requirements. For WHEP, note the draft status and version cited.

---

### Video Encoding References

1. **URL / Path**: `https://slhck.info/video/2017/02/24/crf-guide.html` (CRF); `https://cloudinary.com/glossary/encoding-ladder` (encoding ladder); `https://cloudinary.com/glossary/video-rendition` (rendition)
2. **Type**: external URL
3. **Authoritative for**: CRF (Constant Rate Factor) encoding parameter explanation, encoding ladder concept definition, video rendition definition
4. **Information types**: `conceptual`, `factual`
5. **Veracity tier**: acceptable
6. **Update frequency**: static
7. **Staleness risk**: low
8. **Notes**: Acceptable for conceptual definitions of standard video encoding terms. The CRF guide at slhck.info is widely referenced in the video engineering community. Use for `conceptual` content; for Livepeer-specific encoding profiles, use official Livepeer docs.

---

### Video Performance Metrics

1. **URL / Path**: `https://www.mux.com/blog/the-four-elements-of-video-performance` (rebuffer ratio); `https://wiki.svta.org/time-to-first-frame/` (TTFF); `https://www.wowza.com/blog/what-is-low-latency` (latency tiers)
2. **Type**: external URL
3. **Authoritative for**: Video performance metric definitions — rebuffer ratio, TTFF (Time to First Frame), low latency vs ultra-low latency tier definitions (2-5s vs sub-second)
4. **Information types**: `factual`, `evaluative`
5. **Veracity tier**: acceptable
6. **Update frequency**: static
7. **Staleness risk**: low
8. **Notes**: Industry-standard metric definitions from reputable streaming industry sources. Acceptable for `evaluative` content about video delivery quality. When citing latency figures, note that the sub-second threshold is a community convention, not an IEEE standard.

---

### AI/ML Model Repositories — Hugging Face

1. **URL / Path**: `https://huggingface.co` (incl. specific model cards and docs)
2. **Type**: external URL
3. **Authoritative for**: Model definitions and specifications — BLIP, ControlNet, LoRA, SAM 2, SDXL, Whisper, Stable Video Diffusion (SVD), StreamDiffusion; AI pipeline concept definitions (image-to-text, image-to-video, text-to-image, etc.); model card format; model ID format; diffusers scheduler features
4. **Information types**: `factual`, `technical`, `conceptual`
5. **Veracity tier**: acceptable
6. **Update frequency**: live (model cards update; new models added)
7. **Staleness risk**: medium (model versions and APIs change; pin to specific model version when documenting)
8. **Notes**: Acceptable for model definitions and AI concept explanations. When documenting a specific model (e.g. `stabilityai/sdxl`), cite the specific model page and note the model version. Model card definitions are more stable than SDK APIs. For Livepeer-specific model configuration (`aiModels.json`), use official Livepeer AI docs as primary.

**Key pages**:
- BLIP: `https://huggingface.co/docs/transformers/model_doc/blip`
- ControlNet: `https://huggingface.co/lllyasviel/ControlNet`
- LoRA: `https://huggingface.co/docs/diffusers/training/lora`
- SAM 2: `https://huggingface.co/docs/transformers/en/model_doc/sam2`
- SDXL: `https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0`
- SVD: `https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt`
- Whisper: `https://huggingface.co/openai/whisper-large-v3`
- Pipelines: `https://huggingface.co/docs/transformers/en/main_classes/pipelines`
- Model cards: `https://huggingface.co/docs/hub/en/model-cards`
- Scheduler features: `https://huggingface.co/docs/diffusers/en/using-diffusers/scheduler_features`

---

### AI/ML Concept Definitions — Wikipedia

1. **URL / Path**: Multiple — `https://en.wikipedia.org/wiki/Inference_engine`, `https://en.wikipedia.org/wiki/Large_language_model`, `https://en.wikipedia.org/wiki/Diffusion_model`, `https://en.wikipedia.org/wiki/Word_embedding`, `https://en.wikipedia.org/wiki/Stable_Diffusion`, `https://en.wikipedia.org/wiki/Speech_recognition`, `https://en.wikipedia.org/wiki/Image_segmentation`, `https://en.wikipedia.org/wiki/Object_detection`, `https://en.wikipedia.org/wiki/Neural_style_transfer`, etc.
2. **Type**: external URL
3. **Authoritative for**: General AI/ML concept definitions (inference, LLMs, diffusion models, embeddings, agents, multimodal, synthetic data, world models, generative video, style transfer, pose estimation, depth estimation, etc.)
4. **Information types**: `conceptual`, `factual`
5. **Veracity tier**: acceptable
6. **Update frequency**: irregular
7. **Staleness risk**: low for established concepts; medium for rapidly evolving areas
8. **Notes**: Acceptable for `conceptual` type content defining AI terms. Not a source for Livepeer-specific implementation claims. Rapidly evolving areas (e.g. world models, real-time AI) may have more accurate definitions in research papers or vendor documentation.

---

### NVIDIA Developer Documentation

1. **URL / Path**: `https://developer.nvidia.com/tensorrt` (TensorRT); Wikipedia entries for NVDEC, NVENC, CUDA, VRAM
2. **Type**: external URL
3. **Authoritative for**: TensorRT inference SDK (quantization, layer fusion, kernel tuning for low-latency GPU inference), CUDA parallel computing platform, NVDEC hardware video decoder, NVENC hardware video encoder, GPU/VRAM hardware specifications
4. **Information types**: `factual`, `technical`
5. **Veracity tier**: acceptable
6. **Update frequency**: versioned (TensorRT has release cycles; NVIDIA hardware specs are per-GPU-generation)
7. **Staleness risk**: medium (GPU generations and TensorRT versions evolve; pin to version when documenting)
8. **Notes**: Use NVIDIA's official developer documentation for TensorRT. For CUDA, NVDEC, NVENC: Wikipedia is acceptable for conceptual definitions; NVIDIA docs are primary for version-specific technical details.

---

### StreamDiffusion

1. **URL / Path**: `https://github.com/cumulo-autumn/StreamDiffusion`
2. **Type**: GitHub / external
3. **Authoritative for**: Stream batching and stochastic similarity filtering for real-time diffusion pipeline optimization, live-video-to-video pipeline concept
4. **Information types**: `technical`, `factual`
5. **Veracity tier**: acceptable
6. **Update frequency**: versioned
7. **Staleness risk**: high (actively developed research codebase)
8. **Notes**: The upstream project that inspired Livepeer's live-video-to-video pipeline. When documenting Livepeer's implementation, cross-check against `comfystream` and AI orchestrator docs for Livepeer-specific behaviour.

---

### Ethereum Developer Documentation

1. **URL / Path**: `https://ethereum.org/developers/docs/` (incl. smart contracts, gas, accounts, consensus mechanisms, bridges, scaling)
2. **Type**: external URL / official
3. **Authoritative for**: Ethereum-native concept definitions (smart contracts, gas, ETH, ERC-20, proof-of-stake, wallets, addresses, public/private keys, Layer 2, bridging, rollups, finality, permissionless, trustless)
4. **Information types**: `conceptual`, `factual`, `technical`
5. **Veracity tier**: acceptable
6. **Update frequency**: irregular
7. **Staleness risk**: low for stable concepts; medium for post-Merge details
8. **Notes**: Acceptable for explaining Ethereum concepts to Livepeer users. Do not use for Arbitrum-specific behaviour — use Arbitrum docs instead. For Livepeer-specific use of Ethereum concepts (e.g. how LPT uses ERC-20), use Livepeer's own primary sources.

**Key pages**:
- ERC-20: `https://ethereum.org/developers/docs/standards/tokens/erc-20/`
- Gas: `https://ethereum.org/developers/docs/gas/`
- Accounts: `https://ethereum.org/developers/docs/accounts/`
- POS: `https://ethereum.org/developers/docs/consensus-mechanisms/pos/`
- Bridges: `https://ethereum.org/developers/docs/bridges/`
- Scaling: `https://ethereum.org/developers/docs/scaling/`
- Glossary: `https://ethereum.org/glossary/`
- Wallets: `https://ethereum.org/wallets/`
- Layer 2: `https://ethereum.org/layer-2/`
- Web3: `https://ethereum.org/web3`

---

### Arbitrum Developer Documentation

1. **URL / Path**: `https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction`
2. **Type**: external URL / official
3. **Authoritative for**: Arbitrum One (Optimistic Rollup) architecture, Arbitrum transaction processing, ARB token
4. **Information types**: `conceptual`, `factual`, `technical`
5. **Veracity tier**: acceptable
6. **Update frequency**: versioned
7. **Staleness risk**: low
8. **Notes**: Acceptable for explaining Arbitrum concepts to Livepeer users. For Livepeer-specific deployment on Arbitrum (contract addresses, bridge), use Livepeer primary sources.

---

### The Graph — Subgraph Documentation

1. **URL / Path**: `https://thegraph.com/docs/en/subgraphs/developing/subgraphs/`
2. **Type**: external URL / official
3. **Authoritative for**: Subgraph concept definition — custom open API indexing and querying blockchain data via GraphQL
4. **Information types**: `conceptual`, `technical`
5. **Veracity tier**: acceptable
6. **Update frequency**: versioned
7. **Staleness risk**: low
8. **Notes**: Relevant for documentation covering how Livepeer on-chain data can be queried via subgraphs. Use for concept definition only; for Livepeer-specific subgraph queries, cite the Livepeer subgraph directly.

---

### AI Infrastructure — Cold Start Latency

1. **URL / Path**: `https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/`
2. **Type**: external URL
3. **Authoritative for**: Cold model / cold start latency concept and typical ranges (5-90s load time from storage)
4. **Information types**: `conceptual`, `evaluative`
5. **Veracity tier**: acceptable
6. **Update frequency**: static (blog post)
7. **Staleness risk**: medium (hardware improves; NVMe SSDs have reduced cold start times)
8. **Notes**: Acceptable for explaining cold/warm model concepts in `conceptual` content. For Livepeer-specific cold start behaviour, cross-check against AI orchestrator documentation. Label any latency figures as approximate and hardware-dependent.

---

### Real-Time AI Inference Concepts

1. **URL / Path**: `https://www.ultralytics.com/glossary/real-time-inference`
2. **Type**: external URL
3. **Authoritative for**: Real-time AI inference definition and latency thresholds for interactive use (typically under 100ms)
4. **Information types**: `conceptual`, `factual`
5. **Veracity tier**: acceptable
6. **Update frequency**: static
7. **Staleness risk**: low
8. **Notes**: Acceptable for defining the real-time AI concept. The sub-100ms threshold is a practical guideline, not a hard standard — actual requirements depend on the use case.

---

### Decentralized AI (DeAI) Research

1. **URL / Path**: `https://arxiv.org/abs/2411.17461`
2. **Type**: external URL / academic
3. **Authoritative for**: DeAI (Decentralized AI) conceptual definition — integrating AI computation within decentralized networks using blockchain for trustless inference
4. **Information types**: `conceptual`
5. **Veracity tier**: acceptable
6. **Update frequency**: static (academic paper)
7. **Staleness risk**: low for the concept definition
8. **Notes**: Acceptable for grounding the DeAI concept in academic literature. Not a source for specific protocol claims. Use sparingly — prefer Livepeer's own ecosystem framing for product documentation.

---

### Content Provenance — C2PA

1. **URL / Path**: `https://c2pa.org/`
2. **Type**: external URL / official standard
3. **Authoritative for**: C2PA (Coalition for Content Provenance and Authenticity) standard for tamper-evident content manifests and provenance chains
4. **Information types**: `factual`, `technical`
5. **Veracity tier**: acceptable
6. **Update frequency**: versioned (standard evolves)
7. **Staleness risk**: medium
8. **Notes**: Primary source for the C2PA standard when documenting Livepeer's provenance features. For Livepeer-specific implementation, use official Livepeer docs as primary.

---

### Decentralized Social Protocols

1. **URL / Path**: `https://en.wikipedia.org/wiki/AT_Protocol`; `https://en.wikipedia.org/wiki/Fediverse`
2. **Type**: external URL
3. **Authoritative for**: AT Protocol (Authenticated Transfer Protocol by Bluesky), Fediverse/ActivityPub conceptual definitions
4. **Information types**: `conceptual`, `factual`
5. **Veracity tier**: acceptable
6. **Update frequency**: irregular
7. **Staleness risk**: medium (AT Protocol is actively evolving)
8. **Notes**: Relevant for Livepeer integration content (Streamplace and AT Protocol ecosystem). For current AT Protocol specifications, the official AT Protocol documentation (`https://atproto.com/`) is more authoritative than Wikipedia.

---

### Blockchain Analytics — Wikipedia Definitions

1. **URL / Path**: Multiple — `https://en.wikipedia.org/wiki/Blockchain`, `https://en.wikipedia.org/wiki/Decentralized_autonomous_organization`, `https://en.wikipedia.org/wiki/Non-fungible_token`, `https://en.wikipedia.org/wiki/Cryptoeconomics`, `https://en.wikipedia.org/wiki/Proof_of_stake`, `https://en.wikipedia.org/wiki/Decentralized_physical_infrastructure_network`, etc.
2. **Type**: external URL
3. **Authoritative for**: General web3/blockchain conceptual definitions (DAO, NFT, DeFi, DePIN, proof-of-stake, cryptoeconomics, tokenomics, vesting, liquidity risk, concentration risk)
4. **Information types**: `conceptual`, `factual`
5. **Veracity tier**: acceptable
6. **Update frequency**: irregular
7. **Staleness risk**: low for established concepts
8. **Notes**: Acceptable for `conceptual` content defining standard web3 terms. For Livepeer-specific application of these concepts, use Livepeer primary sources.

---

### Cloudflare — WebRTC/WHIP/WHEP Deployment

1. **URL / Path**: `https://blog.cloudflare.com/webrtc-whip-whep-cloudflare-stream/`
2. **Type**: external URL
3. **Authoritative for**: Sub-second latency via WebRTC and WHIP/WHEP in production, practical implementation context
4. **Information types**: `evaluative`, `conceptual`
5. **Veracity tier**: acceptable
6. **Update frequency**: static (blog post)
7. **Staleness risk**: low for the conceptual content
8. **Notes**: Acceptable as supporting evidence for sub-second latency claims via WebRTC. Not a primary source for Livepeer-specific implementation.

---

### Joinhive — USD Pricer for Livepeer

1. **URL / Path**: `https://github.com/joinhive-ai/livepeer-usd-pricer`
2. **Type**: GitHub / community
3. **Authoritative for**: USD-denominated orchestrator pricing implementation, price feed integration for ETH/USD conversion
4. **Information types**: `technical`
5. **Veracity tier**: acceptable
6. **Update frequency**: versioned
7. **Staleness risk**: medium
8. **Notes**: Community tool for USD pricing. Acceptable source for documenting USD pricing as a pattern; verify the implementation is still maintained before citing in procedural documentation.

---

## Source Priority Summary

| Source | Information types | Veracity tier | Staleness risk |
|---|---|---|---|
| Livepeer Whitepaper (`github.com/livepeer/wiki/WHITEPAPER.md`) | factual, conceptual, technical | primary | low (architecture) / high (parameters) |
| Livepeer Streamflow Spec | factual, technical, conceptual | primary | low |
| Livepeer Wiki Roadmap | factual, change | primary | medium |
| Livepeer Wiki Governance | factual, procedural, technical | primary | medium |
| Contract Addresses (docs.livepeer.org) | factual, technical | primary | low |
| Protocol Contracts Repo (`github.com/livepeer/protocol`) | technical, factual | primary | low |
| Arbitrum LPT Bridge Repo | technical, factual | primary | low |
| Livepeer Explorer (on-chain) | factual, evaluative | primary | low (live) |
| Community Treasury (on-chain) | factual, evaluative | primary | low (live) |
| LIP Repository | factual, technical, change | primary | low |
| go-livepeer (node software) | technical, factual, procedural | primary | medium |
| go-livepeer CLI Reference (docs) | factual, technical | primary | medium |
| livepeer-js / Livepeer.js | technical, factual | primary | medium |
| livepeer-ai-js | technical, factual | primary | medium |
| livepeer-ai-sdks (Python) | technical, factual | primary | medium |
| LPMS | technical, factual | primary | medium |
| PyTrickle | technical, factual | primary | medium |
| ComfyStream | technical, factual | primary | high |
| awesome-livepeer | structural, factual | acceptable | high |
| livepeer-monitoring | technical, procedural | primary | medium |
| Orchestrator Price API | technical, evaluative | acceptable | medium |
| Stream Tester | technical, evaluative | acceptable | medium |
| Livepeer Docs v2 (this repo) | factual, conceptual, procedural, technical, structural | primary | medium |
| Livepeer AI Documentation | factual, procedural, technical | primary | high |
| Livepeer API Reference | factual, technical | primary | medium |
| Livepeer SDK Documentation | procedural, technical, factual | primary | medium |
| docs.json (navigation) | structural | primary | low |
| Delegator Yield Calculation Guide | factual, technical, evaluative | primary | medium |
| Orchestrator Benchmark Guide | factual, procedural, technical | primary | medium |
| Livepeer Foundation Blog | narrative, factual (embedded), change | acceptable | low |
| Livepeer Forum (governance/treasury posts) | factual (ratified proposals), analytical, narrative | acceptable | medium |
| livepeer.org (marketing site) | narrative, structural | acceptable | medium |
| Shtuka Research livepeer-data-geography v1 | analytical, evaluative, conceptual | acceptable | medium |
| Foundation Launch Announcement | factual, narrative | acceptable | low |
| Livepeer Governance Process Definition | factual, procedural | acceptable | medium |
| Livepeer Forum (community/operator threads) | analytical, evaluative, narrative | acceptable | high |
| Livepeer Discord | (none) | not-permitted | high |
| Community dashboards and tools | evaluative, structural | acceptable | high |
| Livepeer Academy | conceptual, narrative | acceptable | high |
| Community Arbitrum Node (LiveInfra) | technical, factual | acceptable | medium |
| Snapshot (off-chain governance) | factual (vote records) | acceptable | low |
| Dune Analytics | evaluative, factual | acceptable | low |
| Video streaming standards — Wikipedia | conceptual, factual | acceptable | low |
| IETF/RFC Standards (WHIP RFC 9725, WHEP draft) | factual, technical | primary | low (RFC) / medium (draft) |
| Video encoding references (slhck, Cloudinary) | conceptual, factual | acceptable | low |
| Video performance metrics (Mux, SVTA, Wowza) | factual, evaluative | acceptable | low |
| Hugging Face (model cards and docs) | factual, technical, conceptual | acceptable | medium |
| NVIDIA Developer Documentation | factual, technical | acceptable | medium |
| StreamDiffusion | technical, factual | acceptable | high |
| Ethereum Developer Documentation | conceptual, factual, technical | acceptable | low |
| Arbitrum Developer Documentation | conceptual, factual, technical | acceptable | low |
| The Graph — Subgraph Documentation | conceptual, technical | acceptable | low |
| AI Infrastructure — Cold Start Latency (OpenMetal) | conceptual, evaluative | acceptable | medium |
| Real-Time AI Inference (Ultralytics) | conceptual, factual | acceptable | low |
| DeAI Research (arXiv) | conceptual | acceptable | low |
| C2PA Standard | factual, technical | acceptable | medium |
| Decentralized social protocols (AT Protocol, Fediverse) | conceptual, factual | acceptable | medium |
| Blockchain/web3 concept definitions — Wikipedia | conceptual, factual | acceptable | low |
| Cloudflare WebRTC/WHIP/WHEP blog | evaluative, conceptual | acceptable | low |
| Joinhive USD Pricer | technical | acceptable | medium |
