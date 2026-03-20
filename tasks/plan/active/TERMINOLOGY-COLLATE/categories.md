# Terminology Collation — Per-Domain Breakdown

**Date**: 2026-03-20
**Task**: 3 of 5 (Categorise terms)
**Status**: Draft — awaiting human review
**Input**: [harvest.md](harvest.md)

---

## Category Overview

| # | Domain | Term Count | Scope |
|---|---|---|---|
| 1 | Protocol & Network | 25 | Core protocol mechanisms, network architecture, economic primitives |
| 2 | Actors & Roles | 12 | Named participants in the protocol and network |
| 3 | Web3 & Blockchain | 20 | Generic blockchain/crypto terms used in Livepeer context |
| 4 | Video Engineering | 10 | Transcoding, streaming protocols, media processing |
| 5 | AI & Inference | 10 | Models, pipelines, inference, AI-specific tooling |
| 6 | Payments & Economics | 15 | Fee structures, rewards, micropayments, pricing |
| 7 | Operational | 35 | Deployment, configuration, infrastructure, CLI, node management |
| 8 | Content Architecture | 45 | Frontmatter schema, page taxonomy, content layers, naming rubric |
| 9 | Component Taxonomy | 40 | Component types, sub-niches, JSDoc tags, status/accepts values |
| 10 | Script Taxonomy | 30 | Script types, concerns, niches, JSDoc tags, mode values |
| 11 | Governance & Policy | 40 | Canonical sources, quality gates, artifact classes, cleanup, ownership |
| 12 | Business & Ecosystem | 8 | Foundation, SPEs, treasury, market terms |
| 13 | Voice & Copy Rules | 27 | Banned words, banned phrases |

**Total: ~317 terms**

---

## 1. Protocol & Network (25 terms)

Core protocol mechanisms, on-chain logic, network architecture, and economic primitives that define how the Livepeer system works.

| Term | Draft Definition | Status |
|---|---|---|
| Livepeer Protocol | Ruleset + on-chain logic governing staking, delegation, inflation, rewards, verification | current |
| Livepeer Network | Running system of machines performing work (orchestrators, transcoders, gateways) | current |
| Protocol | On-chain governance and incentive layer coordinating orchestrators, staking, payments | current |
| Decentralised GPU Network | Marketplace of GPUs contributed by orchestrators, coordinated through crypto incentives | current |
| Developer Platform | Abstraction layer on protocol providing tools/services for developers | current |
| Active set | Group of orchestrators eligible to receive video transcoding work in the current round | current |
| Round | Protocol time period (~22 hours / 5760 L1 blocks) | current |
| Reward Call | On-chain transaction (Reward()) claiming minted LPT once per round | current |
| Job | Unit of work submitted to network: transcoding, inference, or processing pipeline | current |
| Segment | Short chunk of video (~2s) independently transcoded for parallel processing | current |
| Inflation | Issuance of new LPT each round, distributed to orchestrators and delegators | current |
| Slashing | Penalty applied to orchestrators for misbehaviour | current |
| Slashing Conditions | Network-defined rules determining when LPT is destroyed | current |
| Reputation | Measure of orchestrator performance, reliability, trustworthiness | current |
| Stake (self-stake) | LPT bonded directly by orchestrator to its own address | current |
| Delegated stake | LPT bonded to an orchestrator by delegators | current |
| Stake-for-Access (SFA) | Model requiring service providers to stake native token to perform work | current |
| Activation / deactivation | On-chain transaction that registers or unregisters an orchestrator | current |
| Service URI | Public URL orchestrator advertises on-chain for gateway connections | current |
| On-chain | Data/operations recorded on the blockchain | current |
| Off-chain | Data/operations not recorded on the blockchain | current |
| On-chain Treasury | Smart contract holding and managing protocol funds | current |
| Staking | Locking LPT to an orchestrator to earn rewards | current |
| Capability | A specific workload type an orchestrator can process | current |
| Operational Mode Asymmetry | Gateways have genuine on-chain/off-chain fork; orchestrators do not | current |

---

## 2. Actors & Roles (12 terms)

Named participants in the Livepeer protocol and network — human or machine.

| Term | Draft Definition | Status |
|---|---|---|
| Gateway | Livepeer node operated to interact directly with protocol; routes jobs, manages payments | current |
| Orchestrator | Supply-side operator contributing GPU resources; receives jobs, performs compute, earns rewards | current |
| Transcoder (Worker) | Worker process performing actual compute work (transcoding or AI inference) | current |
| Delegator | Token holder who stakes LPT to an orchestrator to earn rewards | current |
| Developer | Builds things on the network: custom pipelines, BYOC, protocol extensions, tooling | current |
| Verifier | Network component validating work performed by orchestrators | current |
| Protocol Actor | Main participants: gateways, orchestrators, delegators | current |
| Livepeer Actor | Participant in protocol or network performing a defined role | current |
| Network Participant | Same as Protocol Actor (..?) | uncertain |
| Broadcaster (deprecated) | Pre-2023 name for gateway. -broadcaster flag replaced by -gateway | deprecated |
| Ecosystem Partner | Complementary company working with Livepeer (storage, security, etc.) | current |
| Gateway Operator | A person/org running a gateway node (used as audience token in content architecture) | current |

---

## 3. Web3 & Blockchain (20 terms)

Generic blockchain, crypto, and web3 terms used within the Livepeer context.

| Term | Draft Definition | Status |
|---|---|---|
| DAO (Decentralised Autonomous Organisation) | Organisation managed by decentralised computer programs with blockchain voting/finances | current |
| Ethereum Address | 42-character hexadecimal string starting with 0x | current |
| Block Timestamps | 256-bit Unix time value within each Ethereum block | current |
| DePIN | Decentralised Physical Infrastructure Network | current |
| LPT (Livepeer Token) | Governance and staking token for orchestrator selection, delegation, rewards, security | current |
| ETH | Ethereum's native token, used to pay network fees | current |
| ARB | Arbitrum's native token | current |
| Layer 2 | Scaling solution for Ethereum enabling high-throughput transactions | current |
| Gas | Fee paid for on-chain operations | current |
| Bridging | Process of moving tokens between chains (e.g. L1 and L2) | current |
| Rollups | Method for tallying/confirming L2 transactions on main chain | current |
| Tokenomics | Study of designing economic systems for decentralised networks | current |
| Game Theory | — | draft |
| Merkle Mine | Token distribution model using Merkle tree for fair distribution | current |
| ICO (Initial Coin Offering) | Method of raising capital by selling digital tokens to the public | current |
| Open Source | Code publicly available and community-maintained | current |

---

## 4. Video Engineering (10 terms)

Video processing, streaming protocols, and media terminology.

| Term | Draft Definition | Status |
|---|---|---|
| Transcoding | Converting video from one format/resolution/bitrate to another | current |
| Ingest | Process of receiving a live video feed | current |
| Delivery | Sending processed video to viewers via CDN or playback | current |
| Streaming | Continuous transmission of audio/video over the network | current |
| RTMP | Real-Time Messaging Protocol for live streaming ingest | current |
| HLS | Segmented streaming protocol widely used for delivery to end-users | current |
| Bitrate | Amount of data encoded per second of video | current |
| Quality Ladder | Multiple renditions of video at different qualities for adaptive playback | current |
| Latency | Delay between receiving input and delivering output | current |
| Edge Compute | Computing performed near the data source | current |

---

## 5. AI & Inference (10 terms)

Machine learning, AI model execution, and inference-specific terminology.

| Term | Draft Definition | Status |
|---|---|---|
| Inference | Running a model to generate outputs from inputs | current |
| Model | Machine learning system hosted on orchestrator or gateway | current |
| Pipeline (AI) | Sequence of inference steps / specific AI workload type | current |
| Real-Time AI | AI workflows fast enough for interactive/streaming use cases | current |
| World Model | Holistic model generating coherent multi-modal worlds (video, audio, action) | current |
| Agent | A system that uses models to make decisions or interact with an environment | current |
| TensorRT | Inference optimisation framework for NVIDIA GPUs | current |
| ControlNet | Conditioning mechanism for diffusion models allowing structural guidance | current |
| Warm model | Model loaded into GPU memory, ready for immediate inference | current |
| Cold model | Model that must be loaded from disk before processing, adding latency | current |

---

## 6. Payments & Economics (15 terms)

Fee structures, reward mechanisms, micropayment systems, and pricing.

| Term | Draft Definition | Status |
|---|---|---|
| Payment Ticket / Ticket | Probabilistic micropayment mechanism for efficient orchestrator payment | current |
| PM ticket (probabilistic micropayment) | Lottery ticket payment unit; expected value equals fair payment over time | current |
| Probabilistic micropayments | Payment mechanism: gateways send lottery tickets; expected value equals fair payment | current |
| Ticket redemption | On-chain transaction redeeming winning PM ticket for ETH | current |
| Fee Pool | Accumulated fees available for orchestrators based on performance and stake weight | current |
| Reward Cut | Percentage of inflation rewards kept by orchestrator | current |
| Fee Cut | Percentage of ETH service fees kept by orchestrator before distributing to delegators | current |
| Delegator Rewards | LPT or ETH earned by delegators proportional to their stake | current |
| Inflation rewards | Newly minted LPT distributed to active orchestrators each round | current |
| Service fees | ETH earned from processing actual jobs, paid by gateways via PM tickets | current |
| Earnings | Combined total of inflation rewards (LPT) and service fees (ETH) | current |
| pricePerUnit | Flag setting orchestrator's video transcoding price in wei per pixel | current |
| pricePerGateway | Flag allowing different prices for different gateway addresses | current |
| autoAdjustPrice | Flag enabling dynamic price adjustment based on demand | current |
| Payment Clearinghouse | Remote signer abstraction with multi-user support, API key auth, billing | current |

---

## 7. Operational (35 terms)

Deployment configurations, node management, infrastructure, CLI flags, and runtime concepts.

| Term | Draft Definition | Status |
|---|---|---|
| Node | Any machine running Livepeer software | current |
| CLI | Command-line interface used to configure gateways or orchestrators | current |
| Configuration Parameters | Settings (flags/env vars) that control node behaviour | current |
| Health Check | Verification check to ensure orchestrators produce correct results | draft |
| go-livepeer | Standard Livepeer gateway/orchestrator binary | current |
| GWID | Gateway Wizard — managed DevOps platform for single-click gateway deployment | current |
| Hosted | Setup type: use existing gateway operator instead of running your own | current |
| Deployment (gateway) | Complete configuration: operational mode + setup type + node type | current |
| Deployment (orchestrator) | Complete configuration: node mode + deployment type + scale | current |
| Operational Mode | How gateway connects to network: on-chain or off-chain | current |
| Node Mode | What workloads orchestrator accepts: Video, AI, or Dual | current |
| Node Type | What workloads gateway routes: Video, AI, or Dual | current |
| Deployment type | How orchestrator infrastructure is organised (Solo/Pool/O-T split/Siphon) | current |
| Scale | Hardware scope: Single GPU / Multi-GPU / Fleet | current |
| Dual mode | Dual-workload configuration: video transcoding + AI inference on single node | current |
| Solo operator | Single operator running complete orchestrator node with full control | current |
| Pool | Shared infrastructure: pool operator + multiple pool workers providing GPU compute | current |
| Pool node | go-livepeer node in transcoder mode connected to pool operator's orchestrator | current |
| Pool operator | Orchestrator accepting external transcoder workers, managing on-chain operations | current |
| O-T split | Deployment type: separate orchestrator and transcoder processes on different machines | current |
| Siphon | Lightweight transcoder connecting to remote orchestrator for local GPU work | current |
| Orchestrator (process) | go-livepeer process running with -orchestrator flag | current |
| Transcoder (process) | go-livepeer process running with -transcoder flag | current |
| AI runner / AI worker | Container that executes AI inference jobs via HTTP | current |
| Session | Logical connection between gateway and orchestrator for a specific job | current |
| Remote signer | Separate service holding Ethereum key, signing payment tickets for off-chain gateways | current |
| NaaP (Network as a Platform) | Reference implementation for multi-tenant gateway operation with JWT auth and API keys | current |
| BYOC (Bring Your Own Container) | Custom AI inference containers conforming to Livepeer AI worker API spec | current |
| Combined mode (deprecated) | Ambiguous: meant both single-process O+T and video+AI workloads | deprecated |
| Hybrid (deprecated) | Community shorthand for dual mode | deprecated |
| Pool worker (deprecated) | Renamed to "pool node" | deprecated |
| Setup Type | What software you run and how you install it (go-livepeer/SDK/GWID/Hosted) | current |

---

## 8. Content Architecture (45 terms)

Frontmatter schema, page taxonomy, content layers, audience segmentation, naming rubric.

| Term | Draft Definition | Status |
|---|---|---|
| **Frontmatter fields** | | |
| pageType | Structural format container (7 primary types) | current |
| pageVariant | Optional refinement within a pageType | current |
| audience | Broad reader class | current |
| persona | Optional audience-scoped refinement | current |
| purpose | Reader outcome (15 intent-based values) | current |
| domain | Broad industry/knowledge field | pending |
| niche | Specific subject area within domain | pending |
| complexity | beginner, intermediate, advanced | current |
| lifecycleStage | discover, evaluate, setup, build, operate, troubleshoot, optimize | current |
| **pageType values (7)** | | |
| navigation | Route the reader — portals, tab landings, section roots | current |
| concept | Explain a mechanism/system | current |
| tutorial | Structured learning experience, learn by building | current |
| guide | Practical understanding of a system | current |
| instruction | Step-by-step task execution | current |
| reference | Structured lookup content | current |
| resource | Curated collections, ecosystem material | current |
| **pageVariant values** | | |
| portal | Tab-level entry point with hero/starfield | current |
| landing | Section-level entry with cards and brief context | current |
| overview | Entry/orientation page for a section | current |
| quickstart | Fastest path from zero to running (<15 min) | current |
| setup | Initial installation, configuration, activation procedures | current |
| specification | API specs, CLI flags, config parameters, technical data | current |
| compendium | Glossary terms, FAQ, troubleshooting, comparisons, ecosystem catalogs | current |
| changelog | Chronological change records, release notes | current |
| **audience values (10)** | | |
| founder | Evaluating Livepeer for their product/business | current |
| builder | Building products using Livepeer APIs/SDKs/hosted gateways | current |
| developer (audience) | Building custom pipelines, BYOC, protocol extensions, tooling | current |
| gateway-operator | Running gateway infrastructure, routing traffic | current |
| orchestrator (audience) | Running GPU nodes, providing compute | current |
| delegator (audience) | Staking LPT tokens | current |
| community | Contributors, governance participants | current |
| internal | Docs maintainers, core team | current |
| general | Non-technical readers, investors, curious people | current |
| everyone | Content serving all audiences equally | current |
| **purpose values (15)** | | |
| orient | Help user understand where they are / what exists | current |
| explain | Clarify a concept or system | current |
| choose | Support a decision | current |
| start | Get going quickly | current |
| build | Create or implement something | current |
| configure | Set up options/parameters | current |
| operate | Run/manage in practice | current |
| troubleshoot | Diagnose/fix problems | current |
| optimize | Improve performance/cost/reliability | current |
| integrate | Connect with other systems/tools | current |
| verify | Validate setup, behaviour, or results | current |
| compare | Distinguish between options/models/paths | current |
| reference (purpose) | Look up exact facts/syntax/values | current |
| learn | Learn terminology/foundations | current |
| update | Communicate changes/new features | current |
| **Content layers** | | |
| Layer 1: Product and Positioning | Value proposition and context framing | current |
| Layer 2: Operational How-to | Setup, runbooks, practical workflows | current |
| Layer 3: Deep Reference | APIs, specs, command matrices, component details | current |
| **Naming rubric terms** | | |
| Literal label | Names the visible examples directly | current |
| Comparator label | Names the relationship or comparison, not the content | current |
| Generic descriptor | Valid umbrella term, but too weak or broad | current |
| Taxonomy mismatch | Uses the wrong conceptual category for the content | current |
| Content descriptor | Names what the section is actually about | current |
| Governing-concept label | Names the underlying concept behind examples — ideal class | current |
| Domain-anchor rule | Title must retain subject domain for clarity | current |

---

## 9. Component Taxonomy (40 terms)

Component classification, folder structure, JSDoc governance tags, status lifecycle.

| Term | Draft Definition | Status |
|---|---|---|
| **Component types (6)** | | |
| elements | Smallest visual atoms — no children, no fetching, no arrangement | current |
| wrappers | Holds, groups, or spatially arranges other components | current |
| displays | Renders authored content into specific visual format | current |
| scaffolding | One-per-page structural skeleton | current |
| integrators | Fetches, embeds, or binds to external/third-party data | current |
| config | Non-component config objects | current |
| **Sub-niches (30)** | | |
| a11y | Accessibility helpers | current |
| buttons | Button components | current |
| callouts | Status/preview callout banners | current |
| icons | Brand and UI icons | current |
| images | Static image display | current |
| links | Navigation and link elements | current |
| math | Mathematical notation | current |
| social | Social media links | current |
| spacing | Spacers and dividers | current |
| text | Text display primitives | current |
| accordions | Collapsible content groups | current |
| cards | Card-based layouts | current |
| containers | Generic spatial containers | current |
| grids | Grid and carousel layouts | current |
| lists | List layouts | current |
| steps | Step-flow layouts | current |
| tables | Table layouts | current |
| code | Code block renderers | current |
| diagrams | Diagram renderers | current |
| quotes | Quote renderers | current |
| response-fields | API response field renderers | current |
| video | Video and media renderers | current |
| frame-mode | Frame-mode heading overrides | current |
| heroes | Hero section components | current |
| page-containers | Page-level containers | current |
| portals | Portal page layouts | current |
| blog | Blog feed renderers | current |
| embeds | Third-party embed components | current |
| feeds | API-driven data feeds | current |
| video-data | Video data from APIs | current |
| **JSDoc tags (7 active)** | | |
| @component | Component identity — export name (PascalCase) | current |
| @type | Layer 1 — what kind of component | current |
| @subniche | Layer 2 — specific sub-concern within component type | current |
| @status | Lifecycle state | current |
| @description | One-line human-readable description | current |
| @dataSource | Where external data comes from | current |
| @accepts | Extensibility declaration | current |
| **@status values (4)** | | |
| stable | Production-ready, actively used in v2 pages | current |
| experimental | Working but API may change | current |
| deprecated | Still exported for backward compat, do not use in new pages | current |
| broken | Non-functional — flagged for removal or rewrite | current |
| **@accepts values (4)** | | |
| children | Accepts child content via React children | current |
| style | Accepts a style prop that merges with internal defaults | current |
| className | Accepts a CSS class on outermost element | current |
| ...rest | Spreads remaining props onto outermost element | current |

---

## 10. Script Taxonomy (30 terms)

Script classification, execution concerns, niches, JSDoc governance tags, mode values.

| Term | Draft Definition | Status |
|---|---|---|
| **Script types (6)** | | |
| audit | Read-only scan, measure, report | current |
| generator | Produce files from source-of-truth data | current |
| validator | Enforce rules, pass/fail gate | current |
| remediator | Bulk fix/repair | current |
| dispatch | Dispatch work to agents, pipeline chaining | current |
| automation | Automated pipelines — translation, data fetching, transforms | current |
| **Concerns (4)** | | |
| content (concern) | Docs pages, copy, SEO, quality, veracity, reference | current |
| components (concern) | Component library, registry, CSS, naming, documentation | current |
| governance (concern) | Scripts about scripts, repo structure, agent docs, manifests, catalogs | current |
| ai (concern) | AI-adjacent operations — LLM files, agent packaging, skills sync | current |
| **JSDoc tags (11 active)** | | |
| @script | Script identity — filename without extension | current |
| @type (script) | Layer 1 — what the script does | current |
| @concern | Layer 2 — what domain the script is about | current |
| @niche | Layer 3 — specific sub-concern | current |
| @purpose (script) | Functional category — what job the script performs | current |
| @description (script) | One-line human-readable description | current |
| @mode | How the script affects the system | current |
| @pipeline | Flow declaration — trigger, inputs, outputs, dependants | current |
| @scope | What files/directories the script operates on | current |
| @usage | CLI invocation example | current |
| @policy | Governance/requirement traceability | current |
| **@mode values (5)** | | |
| read-only | Inspects and reports only — no file changes | current |
| write | Creates new files | current |
| edit | Modifies existing files in place | current |
| generate | Produces artefacts (JSON, MDX, indexes, registries) | current |
| execute | Runs external commands, dispatches work | current |
| **Niches (24)** | | |
| quality | Content quality audits | current |
| veracity | Fact-checking and evidence | current |
| copy | Copy/voice enforcement | current |
| structure | Page structure validation | current |
| grammar | Grammar and spelling checks | current |
| library | Component library management | current |
| documentation | Component/script documentation | current |
| compliance | Governance compliance | current |
| pr | PR-level checks | current |
| codex | Codex branch operations | current |
| agents | Agent packaging and sync | current |
| pipelines | Pipeline orchestration | current |
| seo | SEO generation | current |
| catalogs | Index/catalog generation | current |
| reference | Reference content generation | current |
| reconciliation | Content gap reconciliation | current |
| repair | Content repair | current |
| style | Style enforcement | current |
| classification | Content classification | current |
| data | Data fetching/transforms | current |
| language-translation | Translation automation | current |
| llm | LLM file generation | current |
| scaffold | Script scaffolding | current |
| reports | Report generation | current |

---

## 11. Governance & Policy (40 terms)

Canonical sources, quality gates, artifact classification, cleanup workflows, ownership models, enforcement layers.

| Term | Draft Definition | Status |
|---|---|---|
| **Ownership & truth** | | |
| Canonical source | The file or path that defines truth for a governed surface | current |
| Source of truth | Canonical ownership boundaries preventing drift across surfaces | current |
| Derived output | Generated or synced artifact that must match its canonical source | current |
| Generated artifacts | Files rebuilt from source scripts, never hand-maintained | current |
| Content contract | Docs pages, navigation, and imports must stay structurally valid | current |
| **Quality gates** | | |
| Pre-commit | Local gate: fast staged structure/style invariants (<=60s budget) | current |
| Pre-push | codex/* governance gate for task-contract, issue-readiness, lock overlap | current |
| PR Changed-File CI | Blocking gate for changed-file checks | current |
| Full sweep CI | Browser/link/page sweeps catching system-level regressions | current |
| V2 Lane Contract | _workspace, x-deprecated, v2/x-archived treated as non-publishable | current |
| Gate layer | Single primary enforcement layer for a surface | current |
| P0–P3 | Priority levels: P0 safety, P1 correctness, P2 quality drift, P3 advisory debt | current |
| **Artifact classes** | | |
| committed_authoritative | Part of runtime, tests, or repo contract | current |
| committed_derived_scoped | Committed, derives from declared source set | current |
| ephemeral_local | Exists for local diagnostics only, do not commit | current |
| **Hook behaviours** | | |
| check_only | Fails with targeted remediation command instead of auto-staging | current |
| write_and_stage | Reserved for bounded deterministic artifacts | current |
| ignore | Hook does not manage the artifact at commit time | current |
| **Cleanup & lifecycle** | | |
| keep | Retain in active tree | current |
| quarantine | Move to tasks/quarantine/ for review | current |
| delete-later | Candidate for deletion after review window | current |
| Cleanup quarantine | Classify first, review second, quarantine third | current |
| Repair command | Exact repo-backed command that repairs deterministic drift | current |
| **Rollout & state** | | |
| Rollout state | Current posture of a governed surface | current |
| advisory | Validate and report only; do not block | current |
| autofix | Deterministic repair exists, blocking not complete | current |
| blocking | Surface is ownerless-ready and enforced | current |
| migrating | Contract changing, dual-read support active | current |
| Lock holder | Current actor holding local execution lock for codex isolation | current |
| **Folder governance** | | |
| .allowlist | Machine-readable input to root-structure gate | current |
| Publishable section root | Section entry points (index.mdx, portal.mdx, navigator.mdx) | current |
| Publishable content tree | User-facing docs pages | current |
| _workspace/ | Active non-publishable working lane | current |
| x-deprecated/ | Section-local retirement lane | current |
| x-archived/ | Global frozen archive lane | current |
| **Pipeline stages** | | |
| script-footprint-and-usage-audit | Stage 1: detect script sprawl, backups, placeholders | current |
| docs-quality-and-freshness-audit | Stage 2: inventory TODO/TBD/thin content | current |
| style-and-language-homogenizer-en-gb | Stage 3: enforce UK English/style | current |
| component-layout-governance | Stage 4: validate sections and components by page type | current |
| cleanup-quarantine-manager | Stage 5: produce reversible cleanup manifest | current |
| cross-agent-packager | Stage 6: export aligned packs for agents | current |

---

## 12. Business & Ecosystem (8 terms)

Foundation, entities, treasury, and market/investment terms.

| Term | Draft Definition | Status |
|---|---|---|
| Livepeer Foundation | Non-profit steward of long-term vision, ecosystem growth, and core development | current |
| SPE (Special Purpose Entity) | Mission-driven team funded by Livepeer ecosystem for specific deliverables | current |
| On-chain Treasury | Smart contract holding and managing protocol funds | current |
| Livepeer Ecosystem | — | draft |
| Ecosystem Partner | Complementary company working with Livepeer | current |
| Network Effects | Value of product/service increases as more people use it | current |
| TAM (Total Addressable Market) | Total potential market for a product or service | current |
| MoC (Market Opportunity) | Size of market opportunity for a product or service | current |

---

## 13. Voice & Copy Rules (27 terms)

Banned words and phrases that must not appear in any glossary definitions or docs content.

### Banned Words (10)

effectively, essentially, basically, meaningful, significant, real, various, several, obviously, clearly

### Banned Phrases (17)

This section covers, The reason is straightforward, Understanding X is essential, It is important to note, As mentioned above, among other factors, and so on, low but not zero, not just, rather than, what it takes, once X is stable, it should be noted, not preference, depends on various, can generate, may produce

---

## Cross-Domain Notes

| Issue | Terms Affected | Resolution |
|---|---|---|
| On-chain / Off-chain appear in both Protocol & Operational | On-chain, Off-chain | Primary entry in Protocol & Network; Operational Mode in Operational references back |
| "Segment" spans Video and Protocol | Segment | Primary entry in Protocol & Network (unit of work); cross-ref from Video Engineering |
| "Developer" is both an Actor and an Audience token | Developer | Actor definition in Actors & Roles; audience token in Content Architecture with cross-ref |
| Pipeline means different things in AI vs Script taxonomy | Pipeline (AI), @pipeline (script) | Separate entries in their respective domains |
| @type and @description appear in both Component and Script taxonomy | @type, @description | Noted as shared tags with different value sets per domain |
| Payment terms overlap (Ticket, PM ticket, Probabilistic micropayments) | 3 entries | Consolidate into single entry with aliases in glossary-draft |

---

## Next Step

**Checkpoint**: Human reviews this per-domain breakdown.
- Are the 13 domains right? Merge any? Split any? Rename any?
- Any terms in the wrong domain?
- Cross-domain notes accurate?

Once approved, proceed to **Task 4: Build glossary entries** -> `glossary-draft.md`.
