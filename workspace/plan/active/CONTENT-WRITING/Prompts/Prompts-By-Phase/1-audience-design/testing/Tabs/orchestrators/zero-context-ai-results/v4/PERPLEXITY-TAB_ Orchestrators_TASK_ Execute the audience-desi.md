<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# TAB: Orchestrators

TASK: Execute the audience-design-brief.

Now I have all the context needed. I'll execute the full brief in order.

***

# Orchestrators — Audience Design

`v4-orchestrators-audience-design.md`

```markdown
# Orchestrators — Audience Design

**Tab**: Orchestrators
**Audience**: orchestrator
**TERMINOLOGY_LOCK**: [generated in Phase 0 below]
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint
```


***

## Phase 0 Anchors

**Step 0.1 — Derive AUDIENCE**

> **AUDIENCE**: `orchestrator`

***

**Step 0.2 — Generate TERMINOLOGY_LOCK**

Working from the Product Context block as primary authority, cross-referencing `veracity-sources-4.md` for source coverage, and using `glossary-orchestrators-3.md` as unverified cross-check only. All glossary definitions treated as claims, not facts.

**Terms surfaced** (reasoning from Product Context + authority sources):

The Orchestrators tab covers two meaningfully distinct workload types (video transcoding and AI inference) and two meaningfully distinct operating models (solo operator vs pool worker). This requires exceeding 20 terms to give minimal coverage of all paths — explained in the Addendum.


| \# | Term | Definition (derived from Product Context + authority sources) | Verify flags |
| :-- | :-- | :-- | :-- |
| 1 | **Orchestrator** | A GPU hardware operator who connects their machine to the Livepeer network and earns fees by processing compute jobs. The network-canonical term for this role. | — |
| 2 | **LPT (Livepeer Token)** | The network's staking and governance token. Orchestrators must hold and stake LPT to enter the active pool for video jobs. Earned via inflation rewards and job fees. | `[verify-live: https://explorer.livepeer.org]` for current required amounts |
| 3 | **Staking** | Locking LPT tokens on-chain, required for an orchestrator to compete for video transcoding jobs in the active set. Also called "bonding" in protocol terminology. | `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` |
| 4 | **Active Set** | The pool of orchestrators currently eligible to receive video transcoding work in a given round, determined by ranking orchestrators by total bonded LPT. AI inference routing does not require active set membership. | `[verify-live: https://explorer.livepeer.org]` — size is governance-controlled (currently 100, per deprecated-terms.md) |
| 5 | **Delegation** | The mechanism by which external LPT token holders (delegators) stake their tokens to an orchestrator, increasing the orchestrator's total bonded stake and reward share. The orchestrator does not control delegated tokens. | `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` |
| 6 | **Reward Cut** | The percentage of inflationary LPT rewards an orchestrator retains before distributing the remainder to delegators. Set on-chain by the orchestrator. | `[verify-live: https://explorer.livepeer.org]` |
| 7 | **Fee Cut** | The percentage of ETH service fees an orchestrator retains before distributing the remainder to delegators. Set independently from reward cut. | `[verify-live: https://explorer.livepeer.org]` |
| 8 | **Gateway** | The demand-side node that routes AI or video jobs to orchestrators and pays per job. Gateways select orchestrators based on stake weight, performance history, and price. From the orchestrator's perspective, gateways are the source of work and payment. | — |
| 9 | **Video Transcoding** | Converting live or on-demand video from one encoding format to multiple renditions at different resolutions and bitrates. One of the two compute workload types on the network. | — |
| 10 | **AI Inference** | Running a trained machine learning model on input data to produce outputs (image generation, video transformation, etc.). The second compute workload type on the network. AI routing does not use stake-based active set selection. | — |
| 11 | **Pool (Orchestrator Pool)** | An arrangement where operators with insufficient stake to compete independently contribute GPU capacity to a pooling orchestrator, sharing fees. The term "Pool node" is the current term for a participant; "Pool worker" is deprecated. | `[verify-against: https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md]` |
| 12 | **Pool Node** | An operator who contributes GPU capacity to an orchestrator pool rather than operating solo. Formerly "Pool worker" (deprecated per `deprecated-terms-2.md`). | — |
| 13 | **Dual Mode** | A deployment configuration where a single orchestrator process handles both video transcoding and AI inference simultaneously. "Combined mode" and "Hybrid" are deprecated terms for this. | — |
| 14 | **go-livepeer** | The official Go binary for running any Livepeer network role, including the orchestrator. Configured via CLI flags. | `[verify-against: https://github.com/livepeer/go-livepeer]` — latest tagged release |
| 15 | **Probabilistic Micropayments** | The payment mechanism by which gateways pay orchestrators: instead of a transaction per job, gateways issue lottery-style tickets; winning tickets are redeemed on-chain for ETH. Reduces gas costs. | `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` |
| 16 | **ETH** | Ethereum's native token, used as the settlement currency for orchestrator service fee payments on Livepeer (which runs on Arbitrum). | — |
| 17 | **Arbitrum** | The Ethereum Layer 2 network on which Livepeer's protocol contracts are deployed. Orchestrators interact with the protocol on Arbitrum. | `[verify-against: https://github.com/livepeer/governor-scripts/blob/master/updates/addresses.js]` |
| 18 | **Capability Advertisement** | The mechanism by which an orchestrator informs gateways which AI pipelines and models it can handle, either on-chain or via off-chain discovery. Required for AI work routing. | `[verify-against: https://github.com/livepeer/go-livepeer]` |
| 19 | **Pricing (pricePerUnit / pixelsPerUnit)** | The per-unit price an orchestrator sets for processing work. Gateways apply a hard gate — MaxPrice — against this value; orchestrators priced above a gateway's threshold receive no work from that gateway. | `[verify-against: https://github.com/livepeer/go-livepeer]` — flag names may change between releases |
| 20 | **O-T Split** | The Orchestrator–Transcoder split architecture introduced in the Streamflow upgrade, where the orchestrator process manages job routing and a separate transcoder process handles compute. Relevant to pool architectures. | `[verify-against: https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md]` |
| 21 | **Warm Model** | An AI model pre-loaded into GPU memory at node startup, ready to serve inference requests without cold-start latency. Configured in `aiModels.json`. | `[verify-against: https://github.com/livepeer/go-livepeer]` — AI config surface is high-staleness |
| 22 | **aiModels.json** | The primary configuration file for AI orchestrators, specifying which models to load, at what price, and whether to pre-warm them. | `[verify-against: https://github.com/livepeer/go-livepeer]` — latest tagged release |

**Deprecated term check** (against `deprecated-terms-2.md`):

- "Broadcaster" → not relevant to orchestrator tab; excluded
- "Pool worker" → replaced with **Pool node** ✓
- "Combined mode" / "Hybrid" → replaced with **Dual mode** ✓
- "Transcoder" as synonym for Orchestrator → excluded; only used in its go-livepeer-specific O-T split sense where unambiguous

> **TERMINOLOGY_LOCK**: `Orchestrator, LPT, Staking, Active Set, Delegation, Reward Cut, Fee Cut, Gateway, Video Transcoding, AI Inference, Pool (Orchestrator Pool), Pool Node, Dual Mode, go-livepeer, Probabilistic Micropayments, ETH, Arbitrum, Capability Advertisement, Pricing, O-T Split, Warm Model, aiModels.json`

***

**Step 0.3 — Anchoring Questions**

**1. What does this audience call themselves?**

Before encountering this network, these operators call themselves **GPU miners**, **compute operators**, **node operators**, or simply **server operators**. Those running AI workloads may say **AI compute providers** or **inference providers**. They do not arrive using the term "orchestrator" — that is the network's term for their role.

**2. What are the 3–5 actions that define their core job?**

In their own language, before learning network terminology:

- Rack up hardware, configure drivers, and keep GPUs running
- Connect their machines to a marketplace and make them available for jobs
- Set pricing to be competitive enough to attract work while maintaining margin
- Monitor performance — uptime, job completion rates, error rates — and fix problems
- Manage token positions: stake, collect earnings, and re-stake or withdraw as needed

**3. Terms with network-specific meanings that differ from industry default:**


| Term | Industry default meaning | Network-specific meaning | Risk |
| :-- | :-- | :-- | :-- |
| **Staking** | Generic "locking tokens" — may mean yield farming, liquidity provision, etc. | Specifically: locking LPT on-chain to enter the active job pool for video transcoding. AI routing does not require stake. | Reader may assume staking is optional or applies equally to both workloads |
| **Active Set** | Not a standard industry term | A specific on-chain list of the top-N orchestrators by bonded LPT eligible for video work. Does not apply to AI routing. | Reader may assume "active set" governs all work routing — it does not |
| **Gateway** | Generic: a network entry point / API gateway | Specifically: the demand-side role in Livepeer — the entity that routes jobs and pays orchestrators | Reader may conflate with infrastructure gateway (nginx, API gateway products) |
| **Delegation** | May mean "assigning permissions" in general infra contexts | Specifically: external token holders staking LPT to an orchestrator, increasing the orchestrator's bonded stake | Reader may not realise delegation comes from others' tokens, not their own |
| **Probabilistic Micropayments** | No industry default | Network-specific payment primitive: lottery tickets that resolve to ETH on-chain. Not a standard payment pattern. | Reader may not understand why they aren't receiving per-job payments |
| **Dual Mode** | Not standard | Network-specific term for running both video transcoding and AI inference simultaneously on one node | Previously called "Combined mode" or "Hybrid" — deprecated |

**Web access note**: I have web access. Per the brief's instruction, I will suggest relevant recently-updated primary sources in the Addendum using the `[SUGGESTED SOURCE]` format.

***

**Phase 0 Gate**: ✓ AUDIENCE derived. ✓ TERMINOLOGY_LOCK generated (22 terms; exceeded 20 because the tab covers two distinct workload paths and two operating models — explained in Addendum). ✓ Three anchoring questions answered.

***

## Phase 1 — Persona Research

**Arrival context questions:**

**1. What situation triggers a visit?**
The most common trigger is arriving after reading about earning passive income from GPU hardware, or after seeing a referral from a mining or node-operating community. The second most common is an existing node operator already running Livepeer who needs to configure AI workloads or fix a performance issue. A third trigger is a token-holding delegator who decides they want to operate a node themselves.

**2. What do they know at arrival?**

- Almost universally: knows how to run a Linux server, manage drivers, and operate networked machines
- Often: has some familiarity with Ethereum or L2s (may have mined ETH or run validators)
- Rarely: understands the specific mechanics of LPT staking, active set selection, or probabilistic micropayments
- Never (first visit): knows Livepeer's terminology — "orchestrator", "active set", "reward cut", "capability advertisement"

**3. The arriving question:**
> "I have GPU hardware sitting idle — can I earn money from it by connecting it to this network, and what would I actually need to do?"

**4. What does a successful visit look like?**

- For a first-time visitor: has made a go/no-go decision and, if going, has a node running and receiving jobs
- For a returning operator: has resolved the specific problem or configuration question that brought them back

**5. Wrong-path risks:**

- Assumes staking LPT is optional or trivially cheap (it isn't — stake weight affects active set eligibility)
- Assumes AI inference and video transcoding are configured the same way (they aren't — different routing, different config files)
- Arrives thinking "pool" means mining pool (similar concept but different mechanics)
- Assumes they can test the full setup without holding any LPT or ETH (they cannot — both required before receiving jobs)
- Misreads the active set constraint as applying to AI inference (it doesn't)

***

**Personas:**

*Assumption on volume (no analytics available): Reasoning from Product Context. The network has two compute types now active (video and AI), and GPU operators generally arrive from crypto mining communities or AI compute provider contexts. Solo video operators are the legacy cohort; dual-mode/AI operators are the growing cohort. Pool nodes are the "insufficient stake" path — volume depends on LPT cost, which is market-driven; treating as moderate. Delegator-to-operator conversions are rare but high-impact.*


| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| 1 | **The GPU Operator** — Has idle GPU server(s), wants to earn from them; no prior Livepeer experience | Referral article, mining forum, external search ("earn with GPU") | Knows how to run servers; doesn't know Livepeer mechanics, staking requirements, or workload types | A clear go/no-go decision and, if go: a running node receiving jobs | 3 | 3 | 3 | 9 |
| 2 | **The AI Compute Provider** — Runs ML inference infrastructure; wants to monetise spare GPU capacity via AI-specific workloads | External AI/ML community link, Livepeer blog post about AI, Discord \#ai-video | Knows AI inference well; unfamiliar with Livepeer protocol, payment flows, or how capability advertisement works | aiModels.json configured, AI pipeline serving requests, pricing set | 2 | 3 | 3 | 8 |
| 3 | **The Running Operator** — Already operating a node; returning to configure, optimise, or troubleshoot | Bookmark / direct URL, Discord link to specific doc, search for error message | Has a node running; needs a specific answer (flag value, parameter, performance fix) | Specific problem resolved or configuration applied | 3 | 2 | 2 | 7 |
| 4 | **The Pool Node Candidate** — Wants to participate but has insufficient stake for solo operation | Discord thread, Gateway/Orchestrators tab, referral from someone already in a pool | GPU hardware available; knows or just learned they don't have enough LPT to go solo | Decision made: pool or wait; if pool — knows how to connect to a pool operator | 2 | 2 | 2 | 6 |
| 5 | **The Stake-First Evaluator** — Holds LPT as a delegator; considering upgrading to running their own node | Delegators tab CTA, forum thread | Knows delegation mechanics and LPT; unfamiliar with hardware requirements and operational overhead | Go/no-go decision on running a node vs. continuing to delegate | 1 | 1 | 2 | 4 |

> **Primary persona**: **The GPU Operator** (total: 9) — this persona drives the section structure. All other personas are accommodated within that structure but do not add sections unless their path is otherwise blocked.

**Self-identification check:**
This audience self-identifies as "GPU operator" or "node operator." That label could describe three meaningfully different paths with different setup requirements:

- Solo video-only operator (requires sufficient stake)
- Solo AI operator or dual-mode operator (different config path; stake less critical)
- Pool node (no solo stake required; different architecture entirely)

Three meaningfully different setup paths exist. A reader cannot identify their correct path without reading some content first (the stake question in particular requires knowing how much LPT is required, which is a live governance value). **A dedicated disambiguation section is required as the first content section.**

**Entry blocker check:**


| Persona | Hard-stop blocker | Section that resolves it | Must appear before |
| :-- | :-- | :-- | :-- |
| The GPU Operator (solo video) | Must hold and stake LPT before receiving video jobs — requires on-chain funding | Staking + eligibility section | Setup section |
| The GPU Operator (solo AI) | Must hold ETH on Arbitrum for gas before any on-chain config | Wallet/prerequisites section | Setup section |
| The Pool Node Candidate | Must find and arrange pool membership before any setup | Pool path routing | Setup section |
| The AI Compute Provider | Must understand capability advertisement mechanics before AI work arrives | Capability advertisement section | AI config section |
| The Stake-First Evaluator | No hard blocker — evaluation only; can leave without setting up | — | — |


***

**Phase 1 Gate**: ✓ 5 distinct personas. ✓ Disambiguation section required (flagged). ✓ Entry blockers identified with resolution order.

***

## Phase 2A — Jobs to be Done

| \# | When… | I want to… | So I can… |
| :-- | :-- | :-- | :-- |
| J1 | I have idle GPU hardware and have just heard about this network | assess whether my hardware qualifies and how much I'd realistically earn | make a go/no-go decision before investing any setup time |
| J2 | I've decided to participate but don't know which path applies to me | identify whether I should go solo, join a pool, or focus on AI-only workloads | start the correct setup path without wasting time on the wrong one |
| J3 | I'm ready to set up but have never staked LPT or used Arbitrum | complete the on-chain prerequisites (wallet, LPT, ETH on Arbitrum, stake registered) | unblock myself so the node software can actually receive jobs |
| J4 | I have prerequisites sorted and want a running node | follow a complete, ordered setup sequence (install, configure, start, verify) | reach a state where my hardware is live and processing jobs |
| J5 | My node is running but I'm not getting enough work | diagnose why (pricing too high, performance score low, not in active set, AI not advertised) | adjust the right variable and start receiving jobs |
| J6 | I want to configure AI inference workloads on my GPU | understand the AI-specific configuration (aiModels.json, warm models, capability advertisement) and apply it | earn from AI inference jobs alongside or instead of video transcoding |
| J7 | I need to check a specific parameter, flag, or value while operating | look up the exact current value (CLI flag name, reward cut setting, active set size, pipeline model ID) | make a confident configuration change without guessing |

**Phase 2A Gate**: ✓ 7 jobs. ✓ Covers arrival, active-use, reference, and edge cases (AI-specific, pool path).

***

## Phase 2B — Ideal Journey

**Linear** (discovery → operation):


| Position | Stage name | lifecycleStage | What they're doing |
| :-- | :-- | :-- | :-- |
| 1 | Sizing up the opportunity | `evaluate` | Assessing hardware fit, income potential, and participation cost before committing any time or capital |
| 2 | Finding their path | `evaluate` | Determining whether solo (video), solo (AI/dual), or pool participation is the right model for their situation |
| 3 | Clearing the prerequisites | `setup` | Acquiring and staking LPT, bridging ETH to Arbitrum, registering on-chain — all blockers before software setup |
| 4 | Getting the node running | `setup` | Installing go-livepeer, setting base configuration flags, starting the process, verifying it's connected |
| 5 | Configuring for their workload | `build` | Choosing and configuring video-only, AI-only, or dual mode; setting pricing and reward/fee cuts |
| 6 | Verifying they're live and receiving work | `setup` | Confirming active set membership (video) or capability advertisement (AI); checking first job receipts |
| 7 | Operating day-to-day | `operate` | Monitoring performance metrics, managing reward calls, adjusting pricing, handling software updates |
| 8 | Optimising earnings and performance | `optimise` | Improving transcode fail rate, adjusting cuts to attract delegation, tuning AI model warmth and pricing |

**On-demand** (return visits):

- Current CLI flag names and their accepted values for the installed go-livepeer version
- Active set size and current minimum viable stake threshold
- Reward cut and fee cut settings for their own node (as displayed in Explorer)
- Pricing benchmarks — what other operators are charging per pixel or per AI request
- AI model IDs and pipeline types available in the current go-livepeer release
- Probabilistic micropayment redemption timing and current ticket parameters
- Pool arrangements and how to find or contact pool operators
- Governance vote schedule and treasury contribution rates

**Cross-tab:**


| Direction | From / To | Why |
| :-- | :-- | :-- |
| Inbound | Home → Orchestrators | Audience routing from homepage CTA for "earn with GPU" |
| Inbound | About → Orchestrators | Reader who learned the protocol at a conceptual level wants to go operational |
| Inbound | Delegators → Orchestrators | Delegator evaluating whether to upgrade to running their own node |
| Inbound | Community → Orchestrators | Community member directed here for setup help |
| Outbound | Orchestrators → Delegators | Operator needs to understand how to attract delegation; or wants to delegate their own LPT earnings |
| Outbound | Orchestrators → Gateways | Operator wants to understand how gateways select orchestrators and what their pricing looks like from the demand side |
| Outbound | Orchestrators → Resource HUB | Deep reference: CLI reference, changelog, full glossary |


***

## Phase 2C — Ideal Section Structure

*Universal elements excluded (portal/landing, section index pages, resources/compendium).*


| \# | Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| 1 | **What kind of operator are you?** *(Disambiguation)* | "There seem to be different ways to participate — which one is for me?" | J2 | `orient` | `navigation` | Has arrived at the tab; does not yet know which setup path applies | Has identified which of three paths applies: solo (video/dual), AI-focused, or pool node — and navigated to the correct section | `evaluate` |
| 2 | **Is this worth it for your hardware?** | "Will my GPU and setup actually earn meaningful income on this network?" | J1 | `evaluate` | `concept` | Knows what hardware they have; doesn't know network requirements or income model | Has made a go/no-go decision based on hardware requirements, income mechanics (fees + inflation), and participation cost | `evaluate` |
| 3 | **How the network pays you** | "Where does the money come from and how does it reach me?" | J1 | `explain` | `concept` | Has decided to proceed; doesn't yet know payment mechanics | Can explain the two income streams (inflation rewards and service fees), how probabilistic micropayments work, and what reward cut and fee cut affect | `evaluate` |
| 4 | **Before you start: prerequisites** | "What do I need to have in place before I can install anything?" | J3 | `start` | `instruction` | Has decided which path to take; has not yet acquired LPT, ETH, or wallet | Has completed all on-chain prerequisites: wallet configured, LPT acquired and staked, ETH bridged to Arbitrum, on-chain registration done | `setup` |
| 5 | **Getting your node running** | "How do I install and start go-livepeer?" | J4 | `start` | `instruction` | Prerequisites complete; go-livepeer not yet installed | Node process is running and connected to the network; confirmed via Explorer or local logs | `setup` |
| 6 | **Configuring your workload** | "How do I set up video transcoding, AI inference, or both?" | J4, J6 | `configure` | `instruction` | Node running with base config; workload not yet configured | Workload is configured for their chosen path (video-only, AI-only, or dual mode); pricing and cuts set | `setup` |
| 7 | **Advertising AI capabilities** | "How do gateways find out I can run AI inference jobs?" | J6 | `explain` | `concept` | AI workload configured; not yet receiving AI jobs | Has published capability advertisement (on-chain or off-chain discovery); can verify gateways can route AI work to their node | `build` |
| 8 | **Verifying you're live** | "How do I confirm the network is routing work to me?" | J4, J6 | `verify` | `instruction` | Node and workload configured; not yet confirmed receiving work | Has confirmed active set membership (video) or capability discovery (AI); has received and processed at least one test job | `setup` |
| 9 | **Joining as a pool node** | "I don't have enough stake to go solo — how does participating in a pool work?" | J2 | `explain` | `guide` | Identified via disambiguation as pool path; no setup started | Has decided whether pool participation suits them; if yes: knows the connection architecture, how fees are shared, and how to approach a pool operator | `evaluate` |
| 10 | **Day-to-day operation** | "What do I need to check and do regularly to keep earning?" | J5, J7 | `operate` | `guide` | Node live and receiving work | Has a routine for: reward calls, monitoring fail rates, software updates, and responding to pricing changes | `operate` |
| 11 | **Improving your earnings** | "My node is running but I want to earn more — what levers do I have?" | J5 | `optimise` | `guide` | Node operating; wants to improve performance or income | Has identified the variable most affecting their earnings (pricing, stake position, delegation cuts, AI model warmth) and made a targeted change | `optimise` |
| 12 | **Troubleshooting** | "My node is connected but not getting work / is throwing errors — what's wrong?" | J5 | `troubleshoot` | `guide` | Something is wrong; operator doesn't know which of several possible causes applies | Has diagnosed the cause from a structured set of checks (pricing gate, active set status, AI advertisement, fail rate, software version) and knows the fix | `troubleshoot` |

*Section count: 12 — within the 8–12 target range.*

***

**Phase 2C Gate**: ✓ Every section has a reader question, job, entry state, exit state (no "understands" used), purpose, pageType, and lifecycleStage. ✓ All enum values are canonical. ✓ Disambiguation section is first content section with `purpose: orient` and `pageType: navigation`. ✓ Prerequisites section (§4) appears before setup sections (§5, §6). ✓ Self-containment principle applied — payment mechanics and staking explained in-tab even though About is the canonical deep reference.

***

## Phase 2D — Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
| :-- | :-- | :-- | :-- | :-- | :-- |
| The GPU Operator (solo video/dual) | §1 Disambiguation → §2 Hardware evaluation | §8 Verify live | None | §3 (payments) must be read before §4 (prerequisites) — natural order enforced by section sequence | None |
| The AI Compute Provider | §1 Disambiguation → §2 (partial — hardware known) → §6 AI config | §8 Verify live | None | §7 (capability advertisement) may be the primary reason this persona arrives — it must be present and must appear after §6 configuration | None |
| The Running Operator | Enters directly at §10 (operations) or §12 (troubleshooting) | §10 or §12 | None | No gap — on-demand lookup sections (§10, §12) serve this persona without needing prior sections | None |
| The Pool Node Candidate | §1 Disambiguation → §9 Pool node | §9 | None | §9 must resolve the "enough stake?" question with sufficient context to make the decision, not just say "join a pool" — the section includes the decision gate and connection architecture | None |
| The Stake-First Evaluator | §2 Hardware evaluation → §3 Payment mechanics | §2 or §3 (evaluation only; may not proceed further) | None | This persona needs the economics of solo operation vs. continued delegation clearly surfaced in §2 — the section should include a cost-of-operation framing | None |

**All personas have complete, unblocked paths. No missing sections.**

***

## Quality Gates

- [x] Arriving question is specific — not a topic, an actual question the reader would ask?
- [x] At least 3 distinct personas, each with a different arriving state and entry vector? *(5 personas)*
- [x] Self-identification check done — disambiguation section added if required? *(§1 — 3 paths, dedicated section required and designed)*
- [x] Entry blockers identified — sections that resolve blockers placed before sections that require them? *(§4 prerequisites before §5 setup; §3 payments before §4)*
- [x] At least 5 jobs, first-principles, not derived from current nav structure? *(7 jobs)*
- [x] Every section has a reader question, job, entry state, and exit state? ✓
- [x] No exit state uses "understands" — all are concrete actions or decisions? ✓
- [x] Cross-tab gate applied — decision-enabling content included for this audience; CROSS-TAB rows only where the audience does not need the content? ✓ *(Payment mechanics, staking, and protocol economics are included in-tab; deep protocol architecture links to About)*
- [x] Persona path validation complete — every persona has an unblocked path through the structure? ✓
- [x] All enum values are from the canonical lists — no invented tokens? ✓

**All gates pass. Output produced.**

***

## ⏸ Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary as cross-check only?
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas described with motivation and entry vector — not just role labels?
- [x] Self-identification check done — disambiguation section added if required?
- [x] Entry blockers identified and resolved by section order?
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"?
- [x] Cross-tab gate applied — decision-enabling content included; CROSS-TAB rows only where audience does not need the content?
- [x] Persona path validation done — every persona has an unblocked path?
- [x] All enum values are canonical — no invented tokens?

***

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.2 — term count]**: The brief specifies 10–20 terms as a default range but permits exceeding 20 for tabs with multiple distinct paths. The Orchestrators tab has two workload types (video transcoding and AI inference) with meaningfully different configuration surfaces (CLI flags vs. `aiModels.json`, active set vs. capability advertisement), and two operating models (solo vs. pool node). Coverage of both AI-specific terms (`Warm Model`, `aiModels.json`, `Capability Advertisement`) and pool-specific terms (`Pool Node`, `O-T Split`) required 22 terms. This is the minimum necessary to avoid leaving either path without its own core vocabulary.
- **[Phase 0 / Step 0.2 — glossary verification]**: The glossary's definition of `go-livepeer` lists "Broadcaster" as one of the roles in the binary. Per `deprecated-terms-2.md`, "Broadcaster" is deprecated and the current term is "Gateway (operator)." The glossary entry is therefore partially incorrect on this point. Noted; did not use the glossary's term list as authoritative. **Glossary discrepancy**: `go-livepeer` definition in glossary should read "Gateway" not "Broadcaster."
- **[Phase 0 / Step 0.3 — web access]**: I have web access per the brief's instruction. I was unable to directly verify a live go-livepeer release changelog during this execution (no repo access per brief constraints). Suggested sources below.
    - `[SUGGESTED SOURCE: go-livepeer Releases — https://github.com/livepeer/go-livepeer/releases — Latest tagged release changelog, current CLI flag names and defaults — primary]`
    - `[SUGGESTED SOURCE: Livepeer Explorer Orchestrators view — https://explorer.livepeer.org/orchestrators — Live active set, per-node stake, reward/fee cut settings — primary]`
    - `[SUGGESTED SOURCE: AI Capability Discovery Forum Thread — https://forum.livepeer.org/t/ai-capability-discovery/3233 — Current state of capability advertisement mechanics — acceptable]`
- **[Phase 1 — volume assumptions]**: No analytics data available. Volume scores were reasoned from Product Context. The "AI Compute Provider" persona is scored as moderate (2) not high (3) because: AI inference on Livepeer is newer than video transcoding and the operator cohort is still smaller; however, it is the fastest-growing path and scored Impact: 3 accordingly. If analytics showed AI-focused arrivals exceeding video-focused, the primary persona designation should be revisited.
- **[Phase 1 — Stake-First Evaluator persona depth]**: Scored Depth: 1 (thin). This persona arrives from the Delegators tab and has evaluation needs, not setup needs. The brief rules prevent this persona from "adding a section unless their path is otherwise blocked." Their path is served within §2 (hardware evaluation) and §3 (payment mechanics), which already contain the economics needed to make the solo-vs-delegate decision. No additional section added; framing note added to §2's exit state in persona path validation.
- **[Phase 2C — section §6 dual purpose]**: Section §6 "Configuring your workload" serves both J4 (get node running) and J6 (configure AI). It carries `configure` purpose across three sub-paths (video-only, AI-only, dual mode). During detailed design, this section may need to split into separate pages per workload path — particularly if the AI configuration surface (aiModels.json, warm model, pricing) is substantially longer than the video configuration surface. Not split here; flagged for detailed design review.
- **[Phase 2C — §9 Pool Node as evaluate, not setup]**: The pool node section is purposefully `evaluate` + `guide`, not `instruction`. This is because joining a pool requires finding a pool operator and making an arrangement — there is no self-service setup path that can be fully documented without a specific pool operator's instructions. The section can only resolve the decision and provide the architectural knowledge to engage with a pool operator. Noted as a design constraint.
<span style="display:none">[^1][^2][^3][^4]</span>

<div align="center">⁂</div>

[^1]: audience-design-v4.md

[^2]: deprecated-terms-2.md

[^3]: glossary-orchestrators-3.md

[^4]: veracity-sources-4.md

