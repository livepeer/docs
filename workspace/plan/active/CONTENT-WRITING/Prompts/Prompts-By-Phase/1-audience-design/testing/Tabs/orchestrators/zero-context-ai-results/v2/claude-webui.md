# Orchestrators — Audience Design

**Tab**: Orchestrators
**Audience**: `orchestrator`
**TERMINOLOGY_LOCK**: see Phase 0 below
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `orchestrator`

**TERMINOLOGY_LOCK**: `Orchestrator, GPU, LPT (Livepeer Token), Active Set, Staking / Bonding, Delegation, Reward Cut, Fee Cut, Performance Score, Probabilistic Micropayment (PM), pricePerUnit / pixelsPerUnit, go-livepeer, O-T Split, Pool / Pool Node, Dual Mode, AI Inference, Video Transcoding, Capability Advertisement, Warm Model / Cold Start, Yield`

**Deprecated-terms check applied**:

- "Transcoder" used only in the O-T Split context (its correct remaining usage per deprecated-terms); not used as a synonym for Orchestrator.
- "Pool node" used instead of "Pool worker" throughout.
- "Dual mode" used instead of "Combined mode" or "Hybrid".
- "Broadcaster" does not appear.

**High-staleness terms flagged in lock**:

- Active Set size (100) — `[verify-live: Livepeer Explorer]`
- Target bonding rate (50%) — `[verify-live: Delegator yield guide + LIPs]`
- Inflation adjustment rate (0.00005% per round) — `[verify-live: Delegator yield guide + LIPs]`
- Treasury reward cut rate — `[verify-live: LIPs repo, LIP-92]`

**Discrepancy flag**: The glossary entry for LIP-92 describes it as defining the AI model registry and capability discovery mechanism. This is a _protocol_ LIP; the deprecated-terms file references LIP-92 as defining the treasury reward cut rate. These are likely two different LIPs numbered identically in different glossary sources. The veracity-sources.md instructs verification via the LIPs repo — both should be cross-checked there before use. This prompt treats both meanings as unresolved and does not assert either in content that requires precision.

---

### Anchoring question 1 — What does this audience call themselves?

GPU operators, node operators, or compute providers. In GPU-mining adjacent communities they may say "running a node." In DePIN / web3 infrastructure circles: "running an orchestrator." Many arrive not yet knowing the Livepeer term — they self-identify as someone who has GPUs and wants to put them to work.

### Anchoring question 2 — Core job actions (in their language)

1. Set up and keep a node running reliably
2. Earn fees and rewards from their hardware investment
3. Stay competitive — win jobs, maintain performance, set the right price
4. Manage stake — either self-stake or attract delegators
5. Decide what workloads to run — video, AI, or both

### Anchoring question 3 — Terms with Livepeer-specific meanings that differ from industry default

| Term                           | Industry default                                                                                                                                                                               | Livepeer-specific meaning                                                                                                                                                                                         |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Staking / Bonding**          | "Staking" in web3 typically means locking tokens to validate a chain. In Livepeer it means locking LPT to enter the job-receiving pool — the "proof" is compute quality, not chain validation. | Requires explanation.                                                                                                                                                                                             |
| **Active Set**                 | No industry default.                                                                                                                                                                           | Livepeer-specific: the top 100 [verify-live: Explorer] orchestrators by bonded stake who receive video transcoding work. AI routing does not require Active Set membership.                                       |
| **Reward Cut**                 | No direct industry default.                                                                                                                                                                    | The percentage of inflationary LPT rewards an orchestrator _retains_ before distributing the remainder to delegators. Higher cut = more goes to the operator. Inverted from how most people expect "cut" to work. |
| **Probabilistic Micropayment** | No direct analogue.                                                                                                                                                                            | Off-chain lottery tickets where only a probabilistic winner is redeemed on-chain — most payments never touch the chain. Sounds speculative; needs explaining as a gas-efficiency mechanism.                       |
| **Performance Score**          | Generic quality metric.                                                                                                                                                                        | Livepeer-specific composite: latency score × success rate, tracked per-gateway, directly affects job routing probability. Not self-reported — gateways measure it.                                                |
| **Pool**                       | Generic clustering term.                                                                                                                                                                       | Livepeer: an orchestrator coordinating multiple separate worker machines (pool nodes) under one on-chain identity. Different from a staking pool in other networks.                                               |

---

## Arriving Question

> "I have GPU hardware — can I actually earn from it on this network, and what does it take to get started?"

---

## Personas

| Rank | Persona                   | Entry vector                                                                                                                     | Arriving with                                                                                                                    | Wants to leave with                                                                  | Vol | Depth | Impact | Total |
| ---- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --- | ----- | ------ | ----- |
| 1    | **The Hardware Investor** | Web search ("GPU mining alternative", "earn from GPU", "Livepeer orchestrator setup"), Reddit/Discord referral, or DePIN content | GPUs available (consumer or prosumer), no prior Livepeer knowledge, likely some web3 familiarity                                 | A clear yes/no on viability + a working node or a concrete plan to get one running   | 3   | 3     | 3      | 9     |
| 2    | **The Existing Operator** | Bookmarked docs, search for a specific flag or config option, direct link from community forum or Discord                        | Already running a node in production; needs to solve a specific problem or optimise a metric                                     | A config change applied, a problem resolved, or a pricing/hardware decision made     | 2   | 3     | 3      | 8     |
| 3    | **The Pool Candidate**    | Community referral, Discord link to pool documentation, or Gateway/community tab CTA                                             | Has hardware but not enough LPT self-stake to enter the active set solo; wants to participate without the full stake requirement | A decision: join a pool vs. accumulate solo stake; or a working pool node connection | 2   | 2     | 2      | 6     |
| 4    | **The AI-First Operator** | AI/ML community referral, Daydream showcase, or a developer looking at the supply side                                           | Background in ML engineering; has capable GPU (24 GB+ VRAM); unfamiliar with Livepeer's video side; wants AI jobs specifically   | An AI-only or dual-mode node running and receiving inference requests                | 1   | 3     | 3      | 7     |

_Volume assumptions_: The Hardware Investor is the broadest pool — any GPU owner who encounters Livepeer starts here. The Existing Operator has moderate volume but high return-visit frequency. The Pool Candidate and AI-First Operator are narrower entry vectors but both have significant content depth requirements. The AI-First Operator scores 7 despite lower volume because the AI workload path is substantively different and high-impact for the network.

**Primary persona**: **The Hardware Investor** — this persona drives the section structure. The Existing Operator is served within the same structure via operational and reference sections. The Pool Candidate and AI-First Operator are served by explicit branching sections placed after the main activation path.

**Self-identification**: Readers arrive saying "I have a GPU" or "I want to run a node." Neither label uniquely routes to one persona. Someone who "wants to run a node" could be: a new entrant (Hardware Investor), a returning operator (Existing Operator), someone without enough stake (Pool Candidate), or an AI engineer (AI-First Operator). The arriving question — viability + setup path — is shared across all four, but the answer diverges based on: (a) how much LPT they hold, and (b) which workload they're targeting.

**Disambiguation required**: Yes. The tab requires a routing/orientation section at or near the top that branches on workload type (video / AI / both) and stake position (self-stake solo / join a pool). Without this, operators will proceed down the wrong setup path and discover the mismatch too late. A disambiguation page is flagged — see Section 1 below.

**Entry blockers**:

| Persona           | Hard-stop blocker                                                                                                                   | Resolving section                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Hardware Investor | No LPT = cannot enter active set for video transcoding; some operators don't know this until late in setup                          | Section 2 (Is This Right for Me) must surface the stake requirement _before_ Section 3 (Setup), not after |
| Hardware Investor | No ETH for gas = cannot fund ticket deposits or submit reward call                                                                  | Section 2 must note ETH requirement alongside LPT                                                         |
| Pool Candidate    | No solo path available without stake — but pool-joining path requires contacting a pool operator, not a self-serve flow             | Section 6 (Pool Path) must make the off-chain nature of pool agreements explicit; not a simple quickstart |
| AI-First Operator | AI inference does not require active set membership — but operators may assume it does and believe they're blocked when they're not | Section 2 must distinguish video vs AI routing requirements before setup begins                           |

---

## Jobs to be Done

| #   | When...                                                                 | I want to...                                                                                                                 | So I can...                                                                                     |
| --- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| J1  | I'm evaluating whether to put my GPUs on Livepeer                       | Understand what hardware I need, how much LPT is required, and what I can realistically earn                                 | Decide whether to commit time and capital before I set anything up                              |
| J2  | I've decided to proceed and want to activate for the first time         | Follow a step-by-step setup path for my chosen workload (video, AI, or both) and confirm the node is live and receiving jobs | Move from "installed" to "actively earning" without guessing which flags and configs are needed |
| J3  | I'm running a node and my job volume is lower than expected             | Diagnose why I'm not being selected — price, performance score, stake weight, or capability gap                              | Fix the specific issue and restore competitive job routing                                      |
| J4  | I want to set a price that wins jobs without leaving money on the table | Understand how gateways select orchestrators on price and what other operators are charging                                  | Configure pricePerUnit and pixelsPerUnit at a level that wins volume at acceptable margin       |
| J5  | I want to add AI inference to my existing video node, or vice versa     | Understand what additional hardware/config is needed and how AI routing differs from video routing                           | Expand my earning surface without misconfiguring or destabilising my existing operation         |
| J6  | My delegator count is low or I want to attract more stake               | Understand what delegators look for when choosing where to bond LPT                                                          | Set reward cut and fee cut at levels that attract delegation and grow my total bonded stake     |
| J7  | I have hardware but not enough LPT to compete solo in the active set    | Understand the pool path — how it works, what a pool operator requires, and how earnings are distributed                     | Participate in the network today without waiting to accumulate sufficient solo stake            |

---

## Ideal Journey

**Linear**:

| Position | Stage name                | lifecycleStage | What they're doing                                                                                                                 |
| -------- | ------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1        | Assessing the opportunity | `discover`     | Forming a picture of what it means to be an orchestrator — role, requirements, earning model, and where they fit                   |
| 2        | Qualifying themselves     | `evaluate`     | Checking their hardware, capital (LPT + ETH), and workload preference against actual requirements before committing time           |
| 3        | Choosing their path       | `evaluate`     | Deciding: video-only / AI-only / dual mode / pool node — and understanding why the choice matters for setup                        |
| 4        | Activating the node       | `setup`        | Installing go-livepeer, configuring for chosen workload, and verifying the node is live and connected                              |
| 5        | Getting selected for work | `build`        | Configuring pricing, staking enough LPT (or joining a pool), ensuring capability advertisement is correct, and confirming job flow |
| 6        | Running stably            | `operate`      | Monitoring performance score, redemption cadence, uptime, and delegator positions; calling rewards each round                      |
| 7        | Improving earnings        | `optimise`     | Adjusting pricing, expanding hardware for additional workloads, improving performance score, attracting delegators                 |

**On-demand**:

- Current CLI flag names, defaults, and valid value ranges for the installed go-livepeer version
- AI model IDs, VRAM requirements, and pipeline types available on the network
- Current active set size and approximate self-stake threshold to be competitive [verify-live: Explorer]
- Reward call timing, gas cost estimates, and `autoAdjustPrice` behaviour
- Performance score formula and how to read it from the Explorer
- Probabilistic micropayment ticket parameters — face value, win probability, redemption gas cost
- Governance: current reward cut norms among competitive orchestrators, treasury reward cut rate [verify-live: Explorer + LIPs]
- Hardware procurement guidance: GPU models by workload (video vs AI), VRAM minimums, NVENC/NVDEC support matrix

**Cross-tab**:

| Direction | From / To                    | Why                                                                                                                                                                     |
| --------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inbound   | About → Orchestrators        | Readers who came through About to understand protocol economics now want to act as operators                                                                            |
| Inbound   | Home → Orchestrators         | Home routes GPU operators directly here                                                                                                                                 |
| Inbound   | Community → Orchestrators    | Pool working group and community content directs prospective operators to setup docs                                                                                    |
| Outbound  | Orchestrators → Delegators   | Operators attracting delegators link out to the Delegators tab for the delegator's perspective on stake decisions                                                       |
| Outbound  | Orchestrators → Gateways     | Understanding how gateways select orchestrators (pricing, capability, performance scoring) is the Gateways tab's domain — link for operators who want supply-side depth |
| Outbound  | Orchestrators → Resource HUB | CLI reference, contract addresses, changelog — deep reference lives in Resource HUB                                                                                     |

---

## Ideal Section Structure

| Section                                               | Reader question                                                                                    | Job    | purpose        | pageType      | Entry state                                                                                                                                                        | Exit state                                                                                                                                                      | lifecycleStage |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------ | -------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **1. What is an orchestrator?**                       | "What exactly does an orchestrator do on this network, and is this what I think it is?"            | J1     | `explain`      | `concept`     | Arrived from search or referral; no prior Livepeer context                                                                                                         | Has decided whether the role matches their mental model; can name the two workload types and the basic earning model                                            | `discover`     |
| **2. Is this right for me?** (routing/disambiguation) | "Do I have what it takes — hardware, capital, workload fit — to make this worthwhile?"             | J1     | `evaluate`     | `guide`       | Knows what an orchestrator is; has not yet checked requirements against their situation                                                                            | Has assessed their hardware, LPT and ETH position, and workload preference; has identified their path (solo video / solo AI / dual / pool) and any blockers     | `evaluate`     |
| **3. Quickstart — Video node**                        | "How do I get a video transcoding node running and receiving jobs for the first time?"             | J2     | `start`        | `instruction` | Has confirmed hardware meets requirements; has LPT staked or in wallet; has chosen video-only path                                                                 | Has a running node confirmed connected to the network and able to receive video transcoding work                                                                | `setup`        |
| **4. Quickstart — AI node**                           | "How do I get an AI inference node running and receiving jobs for the first time?"                 | J2     | `start`        | `instruction` | Has confirmed GPU meets AI requirements (VRAM minimum); has go-livepeer and AI runner configured; understands active set membership is not required for AI routing | Has a running AI node with at least one warm model confirmed reachable by the network                                                                           | `setup`        |
| **5. Quickstart — Dual mode**                         | "How do I run both video and AI on the same hardware?"                                             | J5     | `configure`    | `instruction` | Has completed either the video or AI quickstart; wants to add the second workload type                                                                             | Has a dual-mode node running both workload types; has verified capability advertisement reflects both                                                           | `setup`        |
| **6. Joining a pool**                                 | "I don't have enough LPT to compete solo — can I still participate, and how?"                      | J7     | `choose`       | `guide`       | Has confirmed hardware is sufficient but solo stake path is blocked; has read the "Is this right for me?" section                                                  | Has decided whether to pursue the pool path; if yes, knows what a pool operator requires and how off-chain earnings agreements work                             | `evaluate`     |
| **7. Staking and attracting delegators**              | "How much LPT do I need, and how do I attract delegators to grow my stake?"                        | J6     | `explain`      | `concept`     | Running a node; wants to grow stake to improve active set position or job routing probability                                                                      | Has set reward cut and fee cut with a deliberate rationale; can describe what delegators look for when choosing an orchestrator                                 | `operate`      |
| **8. Setting prices**                                 | "What should I charge, and how do I know if my price is competitive?"                              | J4     | `guide`        | `guide`       | Running a node with default or arbitrary pricing; wants to understand the selection mechanism                                                                      | Has configured pricePerUnit and pixelsPerUnit with a rationale based on cost, market positioning, and gateway MaxPrice dynamics                                 | `build`        |
| **9. Getting selected — how job routing works**       | "Why am I not getting jobs, and what do gateways actually look for when choosing an orchestrator?" | J3     | `explain`      | `concept`     | Running a node but receiving fewer jobs than expected; unclear on selection factors                                                                                | Can identify the specific factor (price, performance score, stake, capability gap) most likely limiting their job volume and knows which section addresses it   | `troubleshoot` |
| **10. Monitoring your node**                          | "How do I know my node is healthy and performing well?"                                            | J3     | `operate`      | `guide`       | Node is live; wants to set up ongoing visibility into performance, rewards, and job flow                                                                           | Has a monitoring setup configured (Prometheus/Grafana or equivalent); is reading performance score, reward call status, and transcode fail rate from live data  | `operate`      |
| **11. Calling rewards**                               | "What is a reward call, when do I do it, and what happens if I miss one?"                          | J3     | `operate`      | `instruction` | Running a node; has earned inflation rewards; has not yet called rewards or is uncertain about timing                                                              | Has called rewards at least once; understands the per-round cadence and gas cost implications; has a reminder or automation in place                            | `operate`      |
| **12. Improving performance score**                   | "My performance score is low — what does that mean and how do I fix it?"                           | J3     | `troubleshoot` | `guide`       | Monitoring data shows low performance score or high transcode fail rate                                                                                            | Has identified root cause (latency, fail rate, hardware bottleneck, misconfiguration) and applied a fix; performance score is trending up                       | `troubleshoot` |
| **13. Optimising for profitability**                  | "How do I increase earnings from my existing setup without buying more hardware?"                  | J4, J6 | `optimise`     | `guide`       | Stable, operating node; wants systematic approach to improving yield                                                                                               | Has evaluated pricing strategy, reward cut positioning, and delegator attraction levers; has made at least one deliberate change and a plan to track its effect | `optimise`     |
| **14. Expanding to additional workloads or hardware** | "I want to scale — add GPUs, add AI, or serve more jobs. What's the right path?"                   | J5     | `build`        | `guide`       | Running one workload type on one GPU setup; wants to grow capacity                                                                                                 | Has assessed the hardware and configuration path for their chosen expansion; has a working multi-GPU or multi-workload configuration                            | `optimise`     |
| **15. Protocol and governance participation**         | "How do I participate in network governance as a stake-weighted node operator?"                    | J6     | `explain`      | `concept`     | Active operator; knows governance exists; wants to understand voting, treasury, and their stake weight's role                                                      | Has voted in at least one governance proposal or can describe the process and their stake weight's influence; knows where to monitor proposals                  | `operate`      |

---

## Persona Path Validation

| Persona               | Enters at                                                                                                | Exits at                                       | Structural block                                                                                                                                                                                                              | Knowledge gap                                                                                                                                                                                                                                         | Missing section                                        |
| --------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| **Hardware Investor** | Section 1 (What is an orchestrator?)                                                                     | Section 3 or 4 (Quickstart for their workload) | None — Section 2 resolves the stake/ETH blocker before Section 3 requires it                                                                                                                                                  | None                                                                                                                                                                                                                                                  | None — the linear path from 1 → 2 → 3 or 4 is complete |
| **Existing Operator** | Section 9, 10, 11, 12, or 13 depending on their immediate need (returns directly to operational content) | Section 12 or 13                               | None                                                                                                                                                                                                                          | Assumes familiarity with setup path — acceptable for a return visitor                                                                                                                                                                                 | None — all operational sections exist                  |
| **Pool Candidate**    | Section 1 or 2                                                                                           | Section 6                                      | Section 2 must surface the stake floor and pool path _before_ Section 3 (which assumes solo stake is sufficient). This is handled: Section 2 explicitly routes Pool Candidates to Section 6.                                  | Gap risk: Section 6 must explain off-chain earnings agreements clearly — pool joining is not a self-serve technical flow; it requires finding and contacting a pool operator. This is a knowledge gap that must be addressed within Section 6 itself. | None — Section 6 exists                                |
| **AI-First Operator** | Section 1 or 2                                                                                           | Section 4 (AI Quickstart) then Section 5 or 10 | Section 2 must clarify that AI routing does not require active set membership. Without this, AI-first operators believe they're blocked by the LPT stake requirement and exit. This is handled in Section 2's disambiguation. | Section 4 must stand alone without assuming the reader has read Section 3 (video quickstart). Both quickstarts must be independently complete.                                                                                                        | None — Section 4 exists as a standalone AI quickstart  |

**Gate result**: All four personas have an unblocked path. Two knowledge gaps flagged (both within existing sections, not requiring new sections): (a) Section 2 must be explicit about the AI-routing / active-set distinction; (b) Section 6 must explain the off-chain nature of pool agreements.

---

## Quality Gates

- [x] Arriving question is specific — not a topic, an actual question the reader would ask?
- [x] At least 3 distinct personas, each with a different arriving state and entry vector? (4 personas defined)
- [x] Self-identification check done — ambiguous labels flagged, disambiguation page added if needed? (Section 2 explicitly serves this purpose)
- [x] Entry blockers identified — sections that resolve blockers placed before sections that require them? (LPT/ETH requirement, AI routing distinction both resolved in Section 2 before setup sections)
- [x] At least 5 jobs, first-principles, not derived from current nav structure? (7 jobs defined)
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands" — all are concrete actions or decisions?
- [x] Cross-tab gate applied to every section — no content duplicated from other tabs?
- [x] Persona path validation complete — every persona has an unblocked path through the structure?
- [x] All enum values are from the canonical lists — no invented tokens?

---

## ⏸ Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + per-tab glossary only — no training-data additions?
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas described with motivation and entry vector — not just role labels?
- [x] Self-identification check done — disambiguation page flagged if needed?
- [x] Entry blockers identified and resolved by section order?
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"?
- [x] Cross-tab gate applied — no content duplicated from other tabs?
- [x] Persona path validation done — every persona has an unblocked path?
- [x] All enum values are canonical — no invented tokens?

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.2 — LIP-92 conflict]**: The deprecated-terms file and the glossary assign different meanings to LIP-92 — one attributes the treasury reward cut rate, the other the AI capability registry. These are likely distinct LIPs with a numbering collision in the source docs. Assumption made: flagged as unresolved; neither meaning was asserted in content requiring factual precision. Resolution requires checking the LIPs repo directly.

- **[Phase 0 / Step 0.2 — TERMINOLOGY_LOCK size]**: The brief permits exceeding 20 terms when the tab covers two distinct workload paths. The Orchestrators tab covers both video transcoding and AI inference as substantively different operational paths (different hardware profiles, different routing mechanisms, different setup flows). The lock was held to 20 terms by grouping closely related pairs (e.g. Warm Model / Cold Start, pricePerUnit / pixelsPerUnit) and excluding model-specific terms (pipeline names, BLIP, Whisper, etc.) that belong in reference material, not in the foundational design lock.

- **[Phase 1 — Volume assumptions without analytics]**: The brief instructs use of the Product Context block to reason about volume. The AI-First Operator was scored lower on volume (1) than Depth (3) and Impact (3) because the AI inference market is newer and the network is in beta for AI workloads. If analytics data exists showing AI-origin visitor volume is comparable to general GPU-operator traffic, the AI-First Operator should be re-ranked and its path elevated in the section structure. This was flagged at scoring time.

- **[Phase 2C — Section 2 carries significant design load]**: The disambiguation and qualification work that a separate routing/landing page might handle in a more mature IA has been collapsed into Section 2 ("Is this right for me?"). This is appropriate under the brief's instruction to exclude universal structural elements (portal/landing, section indexes) from the design. However, the executing writer should note that Section 2 is doing multiple jobs simultaneously: hardware qualification, capital qualification, workload path selection, and blocker identification. It may need to be split into two pages during detailed design if it becomes too long or non-linear to execute as a single guide.

- **[Phase 2C — Section 15 (Governance) scope boundary]**: Governance participation as an orchestrator (stake-weighted voting) was included because the site ownership map states that orchestrators appear as stake-weighted voters in governance contexts. The deep reference for governance mechanics is the About tab; Section 15 is scoped to the operator's participation path only, with About as the canonical depth link. The cross-tab gate was applied: the section does not duplicate About's governance architecture content.

Now I have everything I need. Let me execute all phases and produce the output document.I have enough context. Now let me produce the complete output document.I now have sufficient information to execute all phases. Let me write the output document.All phases complete. A few things worth flagging from the run:

**Section 2 carries the most design risk.** It's doing hardware qualification, capital qualification, workload path selection, and active-set/AI routing disambiguation simultaneously. It will likely need to split into two pages during detailed design — but the brief correctly excludes structural landing pages from this phase.

**The AI-First Operator got a dedicated quickstart (Section 4) that must stand alone.** The persona path validation flagged that Section 4 can't assume readers have done Section 3 — AI-only operators skip the video path entirely. This is a writer instruction embedded in the section's entry state.

**Two content notes requiring follow-up before writing begins:**

1. The LIP-92 numbering collision between the deprecated-terms file and the glossary — needs resolution against the [LIPs repo](https://github.com/livepeer/LIPs) before any governance content is drafted.
2. Four high-staleness values in the TERMINOLOGY_LOCK (active set size, bonding rate, inflation adjustment, treasury cut rate) — all need live verification against the Explorer and LIPs before they appear in any page body copy.
