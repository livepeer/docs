# Terminology Collation — Harvest

**Date**: 2026-03-20
**Task**: 2 of 5 (Harvest raw terms)
**Status**: Draft — awaiting human review
**Input**: [research.md](research.md)

---

## How to read this table

- **Term**: The term as it appears in source files
- **Source(s)**: Abbreviated file reference(s) — see key at bottom
- **Draft Definition**: Definition as found in source, or `—` if none exists
- **Domain Guess**: Preliminary category assignment (to be refined in Task 3)
- **Notes**: Flags for duplicates, conflicts, deprecation, empty defs, etc.

---

## A

| Term                       | Source(s)        | Draft Definition                                                                                  | Domain Guess                         | Notes                               |
| -------------------------- | ---------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------- |
| @accepts                   | COMP-S           | Extensibility declaration — what the consumer can customise (children, style, className, ...rest) | Component Taxonomy                   | JSDoc tag                           |
| @category (removed)        | COMP-S, SCRIPT-S | Replaced by @type                                                                                 | Component Taxonomy / Script Taxonomy | Removed — must not appear           |
| @component                 | COMP-S           | Component identity — export name (PascalCase)                                                     | Component Taxonomy                   | JSDoc tag                           |
| @concern                   | SCRIPT-S         | Layer 2 — what domain the script is about                                                         | Script Taxonomy                      | JSDoc tag                           |
| @contentAffinity (removed) | COMP-S           | Not queried by anyone in practice                                                                 | Component Taxonomy                   | Removed                             |
| @dataSource                | COMP-S           | Where external data comes from (none, prop, CoinGecko API, fetch(url), etc.)                      | Component Taxonomy                   | JSDoc tag, required for integrators |
| @decision (removed)        | COMP-S           | All said KEEP — served its purpose during audit                                                   | Component Taxonomy                   | Removed                             |
| @description               | COMP-S, SCRIPT-S | One-line human-readable description                                                               | Component Taxonomy / Script Taxonomy | Shared tag                          |
| @mode                      | SCRIPT-S         | How the script affects the system                                                                 | Script Taxonomy                      | JSDoc tag                           |
| @niche                     | SCRIPT-S         | Layer 3 — specific sub-concern                                                                    | Script Taxonomy                      | JSDoc tag                           |
| @pipeline                  | SCRIPT-S         | Flow declaration — trigger, inputs, outputs, dependants                                           | Script Taxonomy                      | JSDoc tag                           |
| @policy                    | SCRIPT-S         | Governance/requirement traceability                                                               | Script Taxonomy                      | JSDoc tag                           |
| @purpose                   | SCRIPT-S         | Functional category — what job the script performs                                                | Script Taxonomy                      | JSDoc tag                           |
| @scope                     | SCRIPT-S         | What files/directories the script operates on                                                     | Script Taxonomy                      | JSDoc tag                           |
| @script                    | SCRIPT-S         | Script identity — filename without extension                                                      | Script Taxonomy                      | JSDoc tag                           |
| @status                    | COMP-S           | Lifecycle state (stable, experimental, deprecated, broken)                                        | Component Taxonomy                   | JSDoc tag                           |
| @subniche                  | COMP-S           | Layer 2 — specific sub-concern within component type                                              | Component Taxonomy                   | JSDoc tag                           |
| @type                      | COMP-S, SCRIPT-S | Layer 1 — what kind of component/script                                                           | Component Taxonomy / Script Taxonomy | Shared tag, different value sets    |
| @usage                     | SCRIPT-S         | CLI invocation example                                                                            | Script Taxonomy                      | JSDoc tag                           |
| Activation / deactivation  | ORCH-G           | On-chain transaction that registers or unregisters an orchestrator                                | Protocol & Network                   |                                     |
| Active set                 | ORCH-G           | Group of orchestrators eligible to receive video transcoding work in the current round            | Protocol & Network                   | Size is a protocol parameter        |
| Agent                      | GLOSS            | A system that uses models to make decisions or interact with an environment                       | AI & Inference                       |                                     |
| AI runner / AI worker      | ORCH-G           | Container that executes AI inference jobs via HTTP                                                | Operational                          |                                     |
| .allowlist                 | ROOT-GOV         | Machine-readable input to root-structure gate in .githooks/pre-commit                             | Governance & Policy                  |                                     |
| ARB                        | GLOSS            | Arbitrum's native token                                                                           | Web3 & Blockchain                    |                                     |
| audit                      | SCRIPT-S         | Script type: read-only scan, measure, report                                                      | Script Taxonomy                      |                                     |
| autoAdjustPrice            | ORCH-G           | Flag enabling dynamic price adjustment based on demand                                            | Operational                          | CLI flag                            |
| automation                 | SCRIPT-S         | Script type: automated pipelines — translation, data fetching, transforms                         | Script Taxonomy                      |                                     |

## B

| Term                            | Source(s)           | Draft Definition                                                           | Domain Guess         | Notes                           |
| ------------------------------- | ------------------- | -------------------------------------------------------------------------- | -------------------- | ------------------------------- |
| Bitrate                         | GLOSS               | Amount of data encoded per second of video                                 | Video Engineering    |                                 |
| Block Timestamps                | GLOSS               | 256-bit Unix time value within each Ethereum block                         | Web3 & Blockchain    | Typo in source: "Timestanps"    |
| Bridging                        | GLOSS               | Process of moving tokens between chains (e.g. L1 and L2)                   | Web3 & Blockchain    |                                 |
| Broadcaster (deprecated)        | GLOSS, GW-G, ORCH-G | Pre-2023 name for gateway. -broadcaster flag replaced by -gateway          | Actors & Roles       | Deprecated                      |
| broken                          | COMP-S              | @status value: non-functional — flagged for removal or rewrite             | Component Taxonomy   |                                 |
| builder                         | CW-FW               | Audience token: building products using Livepeer APIs/SDKs/hosted gateways | Content Architecture | New — replaces platform-builder |
| BYOC (Bring Your Own Container) | ORCH-G              | Custom AI inference containers conforming to Livepeer AI worker API spec   | Operational          |                                 |

## C

| Term                       | Source(s) | Draft Definition                                                                   | Domain Guess         | Notes                                                       |
| -------------------------- | --------- | ---------------------------------------------------------------------------------- | -------------------- | ----------------------------------------------------------- |
| Canonical source           | OWN-GOV   | The file or path that defines truth for a governed surface                         | Governance & Policy  |                                                             |
| Capability                 | ORCH-G    | A specific workload type an orchestrator can process                               | Operational          |                                                             |
| changelog                  | CW-FW     | pageVariant: chronological change records, release notes                           | Content Architecture |                                                             |
| check_only                 | GEN-ART   | Hook behaviour: fails with targeted remediation command instead of auto-staging    | Governance & Policy  |                                                             |
| children                   | COMP-S    | @accepts value: accepts child content via React children                           | Component Taxonomy   |                                                             |
| className                  | COMP-S    | @accepts value: accepts CSS class on outermost element                             | Component Taxonomy   |                                                             |
| Cleanup quarantine         | CLEAN-POL | Conservative cleanup: classify first, review second, quarantine third              | Governance & Policy  |                                                             |
| CLI                        | GLOSS     | Command-line interface used to configure gateways or orchestrators                 | Operational          |                                                             |
| Cold model                 | ORCH-G    | Model that must be loaded from disk before processing, adding latency              | Operational          |                                                             |
| Combined mode (deprecated) | ORCH-G    | Ambiguous: meant both (1) single-process O+T and (2) video+AI workloads            | Operational          | Deprecated — use "single-process deployment" or "dual mode" |
| committed_authoritative    | GEN-ART   | Artifact class: part of runtime, tests, or repo contract                           | Governance & Policy  |                                                             |
| committed_derived_scoped   | GEN-ART   | Artifact class: committed, derives from declared source set                        | Governance & Policy  |                                                             |
| community                  | CW-FW     | Audience token: contributors, governance participants                              | Content Architecture |                                                             |
| Comparator label           | NAMING    | Names the relationship or comparison, not the content                              | Content Architecture | Naming rubric term                                          |
| complexity                 | CW-FW     | Frontmatter field: beginner, intermediate, advanced                                | Content Architecture |                                                             |
| compendium                 | CW-FW     | pageVariant: glossary terms, FAQ, troubleshooting, comparisons, ecosystem catalogs | Content Architecture |                                                             |
| concept                    | CW-FW     | pageType: explain a mechanism/system                                               | Content Architecture |                                                             |
| config                     | COMP-S    | Component type: non-component config objects                                       | Component Taxonomy   |                                                             |
| Configuration Parameters   | GLOSS     | Settings (flags/env vars) that control node behaviour                              | Operational          |                                                             |
| Content contract           | INFRA-P   | Docs pages, navigation, and imports must stay structurally valid                   | Governance & Policy  |                                                             |
| Content descriptor         | NAMING    | Names what the section is actually about                                           | Content Architecture | Naming rubric term                                          |
| ControlNet                 | GLOSS     | Conditioning mechanism for diffusion models allowing structural guidance           | AI & Inference       |                                                             |
| cross-agent-packager       | SKILL-MAP | Stage 6 skill: exports aligned packs for Codex/Cursor/Claude/Windsurf              | Governance & Policy  | Pipeline stage                                              |

## D

| Term                                        | Source(s)         | Draft Definition                                                                                  | Domain Guess                               | Notes                                             |
| ------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------- |
| DAO (Decentralised Autonomous Organisation) | GLOSS             | Organisation managed by decentralised computer programs with blockchain voting/finances           | Web3 & Blockchain                          |                                                   |
| Decentralised GPU Network                   | GLOSS             | Marketplace of GPUs contributed by orchestrators worldwide, coordinated through crypto incentives | Protocol & Network                         |                                                   |
| Delegated stake                             | ORCH-G            | LPT bonded to an orchestrator by delegators                                                       | Protocol & Network                         |                                                   |
| Delegator                                   | GLOSS, ORCH-G     | Token holder who stakes LPT to an orchestrator to earn rewards                                    | Actors & Roles                             |                                                   |
| Delegator Rewards                           | GLOSS             | LPT or ETH earned by delegators proportional to their stake                                       | Payments & Economics                       |                                                   |
| delete-later                                | CLEAN-POL         | Cleanup outcome: candidate for deletion after review window                                       | Governance & Policy                        |                                                   |
| Delivery                                    | GLOSS             | Sending processed video to viewers via CDN or playback                                            | Video Engineering                          |                                                   |
| DePIN                                       | GLOSS             | Decentralised Physical Infrastructure Network                                                     | Web3 & Blockchain                          | Duplicate entry in source                         |
| Deployment (gateway)                        | GW-G              | Complete configuration: operational mode + setup type + node type                                 | Operational                                |                                                   |
| Deployment (orchestrator)                   | ORCH-G            | Complete configuration: node mode + deployment type + scale                                       | Operational                                |                                                   |
| Deployment type                             | ORCH-G            | How orchestrator infrastructure is organised (Solo/Pool/O-T split/Siphon)                         | Operational                                |                                                   |
| deprecated                                  | COMP-S            | @status value: still exported for backward compat, do not use in new pages                        | Component Taxonomy                         |                                                   |
| Derived output                              | OWN-GOV           | Generated or synced artifact that must match its canonical source                                 | Governance & Policy                        |                                                   |
| Developer                                   | GLOSS, 101, CW-FW | Builds things on the network: custom pipelines, BYOC, protocol extensions, tooling                | Actors & Roles                             | Redefined in CW-FW from old broader meaning       |
| Developer Platform                          | GLOSS             | Abstraction layer on protocol providing tools/services for developers                             | Protocol & Network                         |                                                   |
| dispatch                                    | SCRIPT-S          | Script type: dispatch work to agents, pipeline chaining                                           | Script Taxonomy                            |                                                   |
| displays                                    | COMP-S            | Component type: renders authored content into specific visual format                              | Component Taxonomy                         |                                                   |
| docs-quality-and-freshness-audit            | SKILL-MAP         | Stage 2 skill: inventories TODO/TBD/Coming Soon and thin content                                  | Governance & Policy                        | Pipeline stage                                    |
| Domain                                      | OWN-GOV, CW-FW    | Taxonomy metadata classifying by repo concern / broad industry field                              | Governance & Policy / Content Architecture | Used in two contexts                              |
| domain                                      | CW-FW             | Frontmatter field: broad industry/knowledge field                                                 | Content Architecture                       | Pending Step 6                                    |
| Domain-anchor rule                          | NAMING            | Title must retain subject domain for clarity                                                      | Content Architecture                       | Naming rubric rule                                |
| Dual mode                                   | ORCH-G, GW-G      | Dual-workload configuration: video transcoding + AI inference on single node                      | Operational                                | Canonical term (replaces "combined" and "hybrid") |

## E

| Term              | Source(s) | Draft Definition                                                                 | Domain Guess         | Notes |
| ----------------- | --------- | -------------------------------------------------------------------------------- | -------------------- | ----- |
| Earnings          | ORCH-G    | Combined total of inflation rewards (LPT) and service fees (ETH)                 | Payments & Economics |       |
| Ecosystem Partner | GLOSS     | Complementary company working with Livepeer (storage, security, etc.)            | Business & Ecosystem |       |
| Edge Compute      | GLOSS     | Computing performed near the data source                                         | Operational          |       |
| elements          | COMP-S    | Component type: smallest visual atoms — no children, no fetching, no arrangement | Component Taxonomy   |       |
| ephemeral_local   | GEN-ART   | Artifact class: exists for local diagnostics only, do not commit                 | Governance & Policy  |       |
| ETH               | GLOSS     | Ethereum's native token, used to pay network fees                                | Web3 & Blockchain    |       |
| Ethereum Address  | GLOSS     | 42-character hexadecimal string starting with 0x                                 | Web3 & Blockchain    |       |
| everyone          | CW-FW     | Audience token: content serving all audiences equally                            | Content Architecture |       |
| experimental      | COMP-S    | @status value: working but API may change                                        | Component Taxonomy   |       |

## F

| Term          | Source(s)     | Draft Definition                                                                      | Domain Guess         | Notes     |
| ------------- | ------------- | ------------------------------------------------------------------------------------- | -------------------- | --------- |
| Fee Cut       | GLOSS, ORCH-G | Percentage of ETH service fees kept by orchestrator before distributing to delegators | Payments & Economics |           |
| Fee Pool      | GLOSS         | Accumulated fees available for orchestrators based on performance and stake weight    | Payments & Economics |           |
| founder       | CW-FW         | Audience token: evaluating Livepeer for their product/business                        | Content Architecture | New token |
| Full sweep CI | INFRA-P, QG   | Browser/link/page sweeps catching system-level regressions                            | Governance & Policy  |           |

## G

| Term                    | Source(s)        | Draft Definition                                                                           | Domain Guess         | Notes                  |
| ----------------------- | ---------------- | ------------------------------------------------------------------------------------------ | -------------------- | ---------------------- |
| Game Theory             | GLOSS            | —                                                                                          | Web3 & Blockchain    | No definition provided |
| Gas                     | GLOSS            | Fee paid for on-chain operations                                                           | Web3 & Blockchain    |                        |
| Gate layer              | OWN-GOV          | Single primary enforcement layer for a surface: pre-commit, PR CI, scheduled CI, or manual | Governance & Policy  |                        |
| gateway-operator        | CW-FW            | Audience token: running gateway infrastructure, routing traffic                            | Content Architecture |                        |
| Gateway                 | GLOSS, GW-G, 101 | Livepeer node operated to interact directly with protocol; routes jobs, manages payments   | Actors & Roles       |                        |
| general                 | CW-FW            | Audience token: non-technical readers, investors, curious people                           | Content Architecture |                        |
| Generated artifacts     | INFRA-P, GEN-ART | Files rebuilt from source scripts, never hand-maintained                                   | Governance & Policy  |                        |
| generator               | SCRIPT-S         | Script type: produce files from source-of-truth data                                       | Script Taxonomy      |                        |
| Generic descriptor      | NAMING           | Valid umbrella term, but too weak or broad                                                 | Content Architecture | Naming rubric term     |
| go-livepeer             | GW-G             | Standard Livepeer gateway/orchestrator binary                                              | Operational          | Setup type             |
| Governing-concept label | NAMING           | Names the underlying concept behind examples — ideal naming class                          | Content Architecture | Naming rubric term     |
| guide                   | CW-FW            | pageType: practical understanding of a system                                              | Content Architecture |                        |
| GWID                    | GW-G             | Gateway Wizard — managed DevOps platform for single-click gateway deployment               | Operational          | Community project      |

## H

| Term                | Source(s) | Draft Definition                                                      | Domain Guess      | Notes                          |
| ------------------- | --------- | --------------------------------------------------------------------- | ----------------- | ------------------------------ |
| Health Check        | GLOSS     | Verification check to ensure orchestrators produce correct results    | Operational       | Definition truncated in source |
| HLS                 | GLOSS     | Segmented streaming protocol widely used for delivery to end-users    | Video Engineering |                                |
| Hosted              | GW-G      | Setup type: use existing gateway operator instead of running your own | Operational       |                                |
| Hybrid (deprecated) | ORCH-G    | Community shorthand for dual mode. Canonical term is "dual mode"      | Operational       | Deprecated informal term       |

## I

| Term                        | Source(s) | Draft Definition                                                            | Domain Guess         | Notes           |
| --------------------------- | --------- | --------------------------------------------------------------------------- | -------------------- | --------------- |
| ICO (Initial Coin Offering) | GLOSS     | Method of raising capital by selling digital tokens to the public           | Web3 & Blockchain    |                 |
| Inference                   | GLOSS     | Running a model to generate outputs from inputs                             | AI & Inference       |                 |
| Inflation                   | GLOSS     | Issuance of new LPT each round, distributed to orchestrators and delegators | Protocol & Network   |                 |
| Inflation rewards           | ORCH-G    | Newly minted LPT distributed to active orchestrators each round             | Payments & Economics |                 |
| Ingest                      | GLOSS     | Process of receiving a live video feed                                      | Video Engineering    |                 |
| instruction                 | CW-FW     | pageType: step-by-step task execution                                       | Content Architecture | Replaces how_to |
| integrators                 | COMP-S    | Component type: fetches, embeds, or binds to external/third-party data      | Component Taxonomy   |                 |
| internal                    | CW-FW     | Audience token: docs maintainers, core team                                 | Content Architecture |                 |

## J

| Term | Source(s) | Draft Definition                                                                  | Domain Guess       | Notes |
| ---- | --------- | --------------------------------------------------------------------------------- | ------------------ | ----- |
| Job  | GLOSS     | Unit of work submitted to network: transcoding, inference, or processing pipeline | Protocol & Network |       |

## K

| Term | Source(s) | Draft Definition                       | Domain Guess        | Notes |
| ---- | --------- | -------------------------------------- | ------------------- | ----- |
| keep | CLEAN-POL | Cleanup outcome: retain in active tree | Governance & Policy |       |

## L

| Term                             | Source(s)   | Draft Definition                                                                         | Domain Guess         | Notes                            |
| -------------------------------- | ----------- | ---------------------------------------------------------------------------------------- | -------------------- | -------------------------------- |
| landing                          | CW-FW       | pageVariant: section-level entry with cards and brief context                            | Content Architecture | Was primary pageType in old enum |
| Latency                          | GLOSS       | Delay between receiving input and delivering output                                      | Operational          |                                  |
| Layer 1: Product and Positioning | CONTENT-SYS | Value proposition and context framing, user journey entry points                         | Content Architecture | Content layer                    |
| Layer 2 (blockchain)             | GLOSS       | Scaling solution for Ethereum enabling high-throughput transactions                      | Web3 & Blockchain    |                                  |
| Layer 2: Operational How-to      | CONTENT-SYS | Setup, runbooks, migration/checklist pages, practical workflows                          | Content Architecture | Content layer                    |
| Layer 3: Deep Reference          | CONTENT-SYS | APIs, schema/spec docs, command matrices, component details                              | Content Architecture | Content layer                    |
| lifecycleStage                   | CW-FW       | Frontmatter field: discover, evaluate, setup, build, operate, troubleshoot, optimize     | Content Architecture |                                  |
| Literal label                    | NAMING      | Names the visible examples directly                                                      | Content Architecture | Naming rubric term               |
| Livepeer Actor                   | GLOSS       | Participant in protocol or network performing a defined role                             | Actors & Roles       |                                  |
| Livepeer Ecosystem               | GLOSS       | —                                                                                        | Business & Ecosystem | No definition provided           |
| Livepeer Foundation              | GLOSS       | Non-profit steward of long-term vision, ecosystem growth, and core development           | Business & Ecosystem |                                  |
| Livepeer Network                 | GLOSS       | Running system of machines performing work (orchestrators, transcoders, gateways)        | Protocol & Network   |                                  |
| Livepeer Protocol                | GLOSS       | Ruleset + on-chain logic governing staking, delegation, inflation, rewards, verification | Protocol & Network   |                                  |
| Lock holder                      | OWN-GOV     | Current actor holding local execution lock for codex isolation                           | Governance & Policy  |                                  |
| LPT (Livepeer Token)             | GLOSS       | Governance and staking token for orchestrator selection, delegation, rewards, security   | Web3 & Blockchain    |                                  |

## M

| Term                     | Source(s) | Draft Definition                                                 | Domain Guess         | Notes |
| ------------------------ | --------- | ---------------------------------------------------------------- | -------------------- | ----- |
| Merkle Mine              | GLOSS     | Token distribution model using Merkle tree for fair distribution | Web3 & Blockchain    |       |
| MoC (Market Opportunity) | GLOSS     | Size of market opportunity for a product or service              | Business & Ecosystem |       |
| Model                    | GLOSS     | Machine learning system hosted on orchestrator or gateway        | AI & Inference       |       |

## N

| Term                         | Source(s) | Draft Definition                                                                       | Domain Guess         | Notes                              |
| ---------------------------- | --------- | -------------------------------------------------------------------------------------- | -------------------- | ---------------------------------- |
| NaaP (Network as a Platform) | GW-G      | Reference implementation for multi-tenant gateway operation with JWT auth and API keys | Operational          |                                    |
| navigation                   | CW-FW     | pageType: route the reader — portals, tab landings, section roots                      | Content Architecture | Replaces "landing" as primary type |
| Network Effects              | GLOSS     | Value of product/service increases as more people use it                               | Business & Ecosystem |                                    |
| Network Participant          | GLOSS     | Same as Protocol Actor (..?)                                                           | Actors & Roles       | Uncertain — flagged in source      |
| niche                        | CW-FW     | Frontmatter field: specific subject area within domain                                 | Content Architecture | Pending Step 6                     |
| Node                         | GLOSS     | Any machine running Livepeer software                                                  | Operational          |                                    |
| Node Mode                    | ORCH-G    | What workloads orchestrator accepts: Video, AI, or Dual                                | Operational          |                                    |
| Node Type                    | GW-G      | What workloads gateway routes: Video, AI, or Dual                                      | Operational          |                                    |

## O

| Term                       | Source(s)           | Draft Definition                                                                                | Domain Guess                     | Notes                                     |
| -------------------------- | ------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------- |
| O-T split                  | ORCH-G              | Deployment type: separate orchestrator and transcoder processes on different machines           | Operational                      |                                           |
| Off-chain                  | GLOSS, GW-G         | Data/operations not recorded on blockchain; for gateways: uses remote signer                    | Protocol & Network / Operational | Different meaning per context             |
| On-chain                   | GLOSS, GW-G         | Data/operations recorded on blockchain; for gateways: manages own wallet                        | Protocol & Network / Operational |                                           |
| On-chain Treasury          | GLOSS               | Smart contract holding and managing protocol funds                                              | Protocol & Network               |                                           |
| Open Source                | GLOSS               | Code publicly available and community-maintained                                                | Other                            |                                           |
| Operational Mode           | GW-G                | How gateway connects to network: on-chain or off-chain                                          | Operational                      | Gateway-specific axis                     |
| Operational Mode Asymmetry | GW-G, ORCH-G        | Gateways have genuine on-chain/off-chain fork; orchestrators do not                             | Operational                      | Concept                                   |
| orchestrator               | CW-FW               | Audience token: running GPU nodes, providing compute                                            | Content Architecture             |                                           |
| Orchestrator (actor)       | GLOSS, GW-G, ORCH-G | Supply-side operator contributing GPU resources; receives jobs, performs compute, earns rewards | Actors & Roles                   |                                           |
| Orchestrator (process)     | ORCH-G              | go-livepeer process running with -orchestrator flag                                             | Operational                      | Process meaning                           |
| overview                   | CW-FW               | pageVariant: entry/orientation page for a section — available on all types except navigation    | Content Architecture             | Was primary type in old enum, now variant |

## P

| Term                                   | Source(s)     | Draft Definition                                                                            | Domain Guess         | Notes                      |
| -------------------------------------- | ------------- | ------------------------------------------------------------------------------------------- | -------------------- | -------------------------- |
| P0–P3                                  | INFRA-P       | Priority levels: P0 merge/deploy safety, P1 correctness, P2 quality drift, P3 advisory debt | Governance & Policy  |                            |
| pageType                               | CW-FW         | Frontmatter field: structural format container (7 primary types)                            | Content Architecture |                            |
| pageVariant                            | CW-FW         | Frontmatter field: optional refinement within a pageType                                    | Content Architecture |                            |
| Payment Clearinghouse                  | GW-G          | Remote signer abstraction with multi-user support, API key auth, billing                    | Operational          |                            |
| Payment Ticket / Ticket                | GLOSS         | Probabilistic micropayment mechanism for efficient orchestrator payment                     | Payments & Economics |                            |
| persona                                | CW-FW         | Frontmatter field: optional audience-scoped refinement                                      | Content Architecture |                            |
| Pipeline (AI)                          | GLOSS, ORCH-G | Sequence of inference steps / specific AI workload type                                     | AI & Inference       |                            |
| PM ticket (probabilistic micropayment) | ORCH-G, GW-G  | Lottery ticket payment unit; expected value equals fair payment over time                   | Payments & Economics |                            |
| Pool                                   | ORCH-G        | Shared infrastructure: pool operator + multiple pool workers providing GPU compute          | Operational          |                            |
| Pool node                              | ORCH-G        | go-livepeer node in transcoder mode connected to pool operator's orchestrator               | Operational          | Renamed from "pool worker" |
| Pool operator                          | ORCH-G        | Orchestrator accepting external transcoder workers, managing on-chain operations            | Operational          |                            |
| Pool worker (deprecated)               | ORCH-G        | Renamed to "pool node"                                                                      | Operational          | Deprecated                 |
| portal                                 | CW-FW         | pageVariant: tab-level entry point with hero/starfield                                      | Content Architecture |                            |
| Pre-commit                             | QG            | Local gate: fast staged structure/style invariants (<=60s budget)                           | Governance & Policy  |                            |
| Pre-push                               | QG            | codex/\* governance gate for task-contract, issue-readiness, lock overlap                   | Governance & Policy  |                            |
| PR Changed-File CI                     | QG            | Blocking gate for changed-file checks (style, MDX, spelling, quality, links)                | Governance & Policy  |                            |
| pricePerGateway                        | ORCH-G        | Flag allowing different prices for different gateway addresses                              | Operational          | CLI flag                   |
| pricePerUnit                           | ORCH-G        | Flag setting orchestrator's video transcoding price in wei per pixel                        | Operational          | CLI flag                   |
| Probabilistic micropayments            | GW-G, ORCH-G  | Payment mechanism: gateways send lottery tickets; expected value equals fair payment        | Payments & Economics |                            |
| Protocol                               | GLOSS         | On-chain governance and incentive layer coordinating orchestrators, staking, payments       | Protocol & Network   |                            |
| Protocol Actor                         | GLOSS         | Main participants: gateways, orchestrators, delegators                                      | Actors & Roles       |                            |
| Publishable content tree               | V2-GOV        | v2/<section>/<publishable-subtree>/... — user-facing docs pages                             | Governance & Policy  |                            |
| Publishable section root               | V2-GOV        | v2/<section>/index.mdx, portal.mdx, navigator.mdx — section entry points                    | Governance & Policy  |                            |
| purpose                                | CW-FW         | Frontmatter field: reader outcome (15 intent-based values)                                  | Content Architecture |                            |

## Q

| Term           | Source(s) | Draft Definition                                                          | Domain Guess         | Notes                        |
| -------------- | --------- | ------------------------------------------------------------------------- | -------------------- | ---------------------------- |
| Quality Ladder | GLOSS     | Multiple renditions of video at different qualities for adaptive playback | Video Engineering    |                              |
| quarantine     | CLEAN-POL | Cleanup outcome: move to tasks/quarantine/ for review                     | Governance & Policy  |                              |
| quickstart     | CW-FW     | pageVariant: fastest path from zero to running (<15 min)                  | Content Architecture | Was primary type in old enum |

## R

| Term           | Source(s)     | Draft Definition                                                                      | Domain Guess         | Notes                     |
| -------------- | ------------- | ------------------------------------------------------------------------------------- | -------------------- | ------------------------- |
| Real-Time AI   | GLOSS         | AI workflows fast enough for interactive/streaming use cases                          | AI & Inference       |                           |
| reference      | CW-FW         | pageType: structured lookup content                                                   | Content Architecture |                           |
| remediator     | SCRIPT-S      | Script type: bulk fix/repair                                                          | Script Taxonomy      |                           |
| Remote signer  | GW-G          | Separate service holding Ethereum key, signing payment tickets for off-chain gateways | Operational          |                           |
| Repair command | OWN-GOV       | Exact repo-backed command that repairs deterministic drift                            | Governance & Policy  |                           |
| Reputation     | GLOSS         | Measure of orchestrator performance, reliability, trustworthiness                     | Protocol & Network   |                           |
| resource       | CW-FW         | pageType: curated collections, ecosystem material                                     | Content Architecture |                           |
| Reward Call    | ORCH-G        | On-chain transaction (Reward()) claiming minted LPT once per round                    | Protocol & Network   |                           |
| Reward Cut     | GLOSS, ORCH-G | Percentage of inflation rewards kept by orchestrator                                  | Payments & Economics |                           |
| Rollout state  | OWN-GOV       | Current posture: advisory, autofix, blocking, or migrating                            | Governance & Policy  |                           |
| Rollups        | GLOSS         | Method for tallying/confirming L2 transactions on main chain                          | Web3 & Blockchain    |                           |
| Round          | ORCH-G        | Protocol time period (~22 hours / 5760 L1 blocks)                                     | Protocol & Network   |                           |
| RTMP           | GLOSS         | Real-Time Messaging Protocol for live streaming ingest                                | Video Engineering    | Duplicate entry in source |

## S

| Term                                 | Source(s)     | Draft Definition                                                            | Domain Guess                           | Notes                        |
| ------------------------------------ | ------------- | --------------------------------------------------------------------------- | -------------------------------------- | ---------------------------- |
| scaffolding                          | COMP-S        | Component type: one-per-page structural skeleton                            | Component Taxonomy                     |                              |
| Scale                                | ORCH-G        | Hardware scope: Single GPU / Multi-GPU / Fleet                              | Operational                            | Orchestrator deployment axis |
| Segment                              | GLOSS, ORCH-G | Short chunk of video (~2s) independently transcoded for parallel processing | Video Engineering / Protocol & Network |                              |
| Service fees                         | ORCH-G        | ETH earned from processing actual jobs, paid by gateways via PM tickets     | Payments & Economics                   |                              |
| Service URI                          | ORCH-G        | Public URL orchestrator advertises on-chain for gateway connections         | Protocol & Network                     |                              |
| Session                              | ORCH-G        | Logical connection between gateway and orchestrator for a specific job      | Operational                            |                              |
| setup                                | CW-FW         | pageVariant: initial installation, configuration, activation procedures     | Content Architecture                   |                              |
| Siphon                               | ORCH-G        | Lightweight transcoder connecting to remote orchestrator for local GPU work | Operational                            | Deployment type              |
| Slashing                             | GLOSS         | Penalty applied to orchestrators for misbehaviour                           | Protocol & Network                     |                              |
| Slashing Conditions                  | GLOSS         | Network-defined rules determining when LPT is destroyed                     | Protocol & Network                     |                              |
| Solo operator                        | ORCH-G        | Single operator running complete orchestrator node with full control        | Operational                            | Deployment type              |
| Source of truth                      | SOT-POL       | Canonical ownership boundaries preventing drift across surfaces             | Governance & Policy                    |                              |
| specification                        | CW-FW         | pageVariant: API specs, CLI flags, config parameters, technical data        | Content Architecture                   |                              |
| SPE (Special Purpose Entity)         | GLOSS, GW-G   | Mission-driven team funded by Livepeer ecosystem for specific deliverables  | Business & Ecosystem                   |                              |
| stable                               | COMP-S        | @status value: production-ready, actively used in v2 pages                  | Component Taxonomy                     |                              |
| Stake (self-stake)                   | ORCH-G        | LPT bonded directly by orchestrator to its own address                      | Protocol & Network                     |                              |
| Stake-for-Access (SFA)               | GLOSS         | Model requiring service providers to stake native token to perform work     | Protocol & Network                     |                              |
| Staking                              | GLOSS         | Locking LPT to an orchestrator to earn rewards                              | Web3 & Blockchain / Protocol & Network |                              |
| Streaming                            | GLOSS         | Continuous transmission of audio/video over the network                     | Video Engineering                      |                              |
| style                                | COMP-S        | @accepts value: accepts a style prop that merges with internal defaults     | Component Taxonomy                     |                              |
| style-and-language-homogenizer-en-gb | SKILL-MAP     | Stage 3 skill: enforces UK English/style in EN v2 scope                     | Governance & Policy                    | Pipeline stage               |

## T

| Term                           | Source(s) | Draft Definition                                               | Domain Guess         | Notes              |
| ------------------------------ | --------- | -------------------------------------------------------------- | -------------------- | ------------------ |
| TAM (Total Addressable Market) | GLOSS     | Total potential market for a product or service                | Business & Ecosystem |                    |
| Taxonomy mismatch              | NAMING    | Uses the wrong conceptual category for the content             | Content Architecture | Naming rubric term |
| TensorRT                       | GLOSS     | Inference optimisation framework for NVIDIA GPUs               | AI & Inference       |                    |
| Ticket redemption              | ORCH-G    | On-chain transaction redeeming winning PM ticket for ETH       | Payments & Economics |                    |
| Tokenomics                     | GLOSS     | Study of designing economic systems for decentralised networks | Web3 & Blockchain    |                    |
| Transcoder (Worker)            | GLOSS     | Worker process performing actual compute work                  | Actors & Roles       |                    |
| Transcoder (process)           | ORCH-G    | go-livepeer process running with -transcoder flag              | Operational          | Process meaning    |
| Transcoding                    | GLOSS     | Converting video from one format/resolution/bitrate to another | Video Engineering    |                    |
| tutorial                       | CW-FW     | pageType: structured learning experience, learn by building    | Content Architecture |                    |

## V

| Term             | Source(s) | Draft Definition                                                                          | Domain Guess        | Notes |
| ---------------- | --------- | ----------------------------------------------------------------------------------------- | ------------------- | ----- |
| V2 Lane Contract | QG        | Mint, tests, and audits treat \_workspace, x-deprecated, v2/x-archived as non-publishable | Governance & Policy |       |
| validator        | SCRIPT-S  | Script type: enforce rules, pass/fail gate                                                | Script Taxonomy     |       |
| Verifier         | GLOSS     | Network component validating work performed by orchestrators                              | Actors & Roles      |       |

## W

| Term            | Source(s) | Draft Definition                                                                  | Domain Guess        | Notes |
| --------------- | --------- | --------------------------------------------------------------------------------- | ------------------- | ----- |
| Warm model      | ORCH-G    | Model loaded into GPU memory, ready for immediate inference                       | Operational         |       |
| World Model     | GLOSS     | Holistic model generating coherent multi-modal worlds (video, audio, action)      | AI & Inference      |       |
| wrappers        | COMP-S    | Component type: holds, groups, or spatially arranges other components             | Component Taxonomy  |       |
| write_and_stage | GEN-ART   | Hook behaviour: reserved for bounded deterministic artifacts                      | Governance & Policy |       |
| \_workspace/    | V2-GOV    | Active non-publishable working lane for plans, research, reviews, handoff, drafts | Governance & Policy |       |

---

## Banned Words (Voice Governance)

| Word        | Source   |
| ----------- | -------- |
| effectively | BANNED-W |
| essentially | BANNED-W |
| basically   | BANNED-W |
| meaningful  | BANNED-W |
| significant | BANNED-W |
| real        | BANNED-W |
| various     | BANNED-W |
| several     | BANNED-W |
| obviously   | BANNED-W |
| clearly     | BANNED-W |

## Banned Phrases (Voice Governance)

| Phrase                        | Source   |
| ----------------------------- | -------- |
| This section covers           | BANNED-P |
| The reason is straightforward | BANNED-P |
| Understanding X is essential  | BANNED-P |
| It is important to note       | BANNED-P |
| As mentioned above            | BANNED-P |
| among other factors           | BANNED-P |
| and so on                     | BANNED-P |
| low but not zero              | BANNED-P |
| not just                      | BANNED-P |
| rather than                   | BANNED-P |
| what it takes                 | BANNED-P |
| once X is stable              | BANNED-P |
| it should be noted            | BANNED-P |
| not preference                | BANNED-P |
| depends on various            | BANNED-P |
| can generate                  | BANNED-P |
| may produce                   | BANNED-P |

---

## Source Key

| Abbreviation | File                                                                    |
| ------------ | ----------------------------------------------------------------------- |
| GLOSS        | `v2/resources/livepeer-glossary.mdx`                                    |
| GW-G         | `v2/gateways/resources/glossary.mdx`                                    |
| ORCH-G       | `v2/orchestrators/resources/glossary.mdx`                               |
| 101          | `v2/resources/concepts/livepeer-101.mdx`                                |
| DEFN         | `v2/internal/definitions.mdx`                                           |
| CW-FW        | `tasks/plan/active/CONTENT-WRITING/framework.md`                        |
| COMP-S       | `tasks/plan/active/COMPONENT-GOVERNANCE/structure.md`                   |
| SCRIPT-S     | `tasks/plan/active/SCRIPT-GOVERNANCE/structure.md`                      |
| TAX-FW       | `docs-guide/frameworks/page-taxonomy-framework.mdx`                     |
| PAGETYPE     | `v2/_workspace/references/content-pipeline/01-page-type-definitions.md` |
| CONTENT-SYS  | `docs-guide/frameworks/content-system.mdx`                              |
| COMP-GOV     | `docs-guide/frameworks/component-governance.mdx`                        |
| OWN-GOV      | `docs-guide/policies/ownerless-governance.mdx`                          |
| INFRA-P      | `docs-guide/policies/infrastructure-principles.mdx`                     |
| GEN-ART      | `docs-guide/policies/generated-artifact-and-hook-governance.mdx`        |
| QG           | `docs-guide/policies/quality-gates.mdx`                                 |
| AGENT-GOV    | `docs-guide/policies/agent-governance-framework.mdx`                    |
| AUDIT-SYS    | `docs-guide/policies/audit-system-overview.mdx`                         |
| CLEAN-POL    | `docs-guide/policies/cleanup-quarantine-policy.mdx`                     |
| LAYOUT       | `docs-guide/policies/component-layout-decisions.mdx`                    |
| ROOT-GOV     | `docs-guide/policies/root-allowlist-governance.mdx`                     |
| SKILL-MAP    | `docs-guide/policies/skill-pipeline-map.mdx`                            |
| SOT-POL      | `docs-guide/policies/source-of-truth-policy.mdx`                        |
| V2-GOV       | `docs-guide/policies/v2-folder-governance.mdx`                          |
| NAMING       | `v2/_workspace/research/content-naming.md`                              |
| PERSONAS     | `v2/gateways/personas.md`                                               |
| AGENTS       | `AGENTS.md`                                                             |
| BANNED-W     | `tools/lib/copy-governance/banned-words.txt`                            |
| BANNED-P     | `tools/lib/copy-governance/banned-phrases.txt`                          |

---

## Statistics

| Category                   | Count    |
| -------------------------- | -------- |
| Protocol & Network terms   | ~25      |
| Actors & Roles terms       | ~12      |
| Web3 & Blockchain terms    | ~20      |
| Video Engineering terms    | ~10      |
| AI & Inference terms       | ~10      |
| Payments & Economics terms | ~15      |
| Operational terms          | ~35      |
| Content Architecture terms | ~45      |
| Component Taxonomy terms   | ~40      |
| Script Taxonomy terms      | ~30      |
| Governance & Policy terms  | ~40      |
| Business & Ecosystem terms | ~8       |
| Voice/Copy rules           | ~27      |
| **Total unique terms**     | **~317** |

---

## Next Step

**Checkpoint**: Human reviews this harvest document.

- Any terms missing that should be added?
- Any terms that should be removed or merged?
- Domain guesses look right?

Once approved, proceed to **Task 3: Categorise terms** -> `categories.md` (interactive).
