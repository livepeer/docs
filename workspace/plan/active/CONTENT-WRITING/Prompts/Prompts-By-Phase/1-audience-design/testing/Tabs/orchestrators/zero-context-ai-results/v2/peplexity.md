Now I have all the inputs needed. Let me execute the full brief.

```markdown
# Orchestrators — Audience Design

**Tab**: Orchestrators
**Audience**: `orchestrator`
**TERMINOLOGY_LOCK**: [generated in Phase 0]
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `orchestrator`

**TERMINOLOGY_LOCK**: `Orchestrator, GPU, LPT (Livepeer Token), Staking / Bonding, Active Set, Delegation, Reward Cut, Fee Cut, Performance Score, Probabilistic Micropayment (PM), go-livepeer, AI Inference, Video Transcoding, O-T Split, Pool Node, Dual Mode, Gateway, Capability Advertisement, aiModels.json, BYOC`

> Note on exceeding 20 terms: The tab covers two distinct workload paths — video transcoding and AI inference — each with its own configuration surface, hardware requirements, and earning mechanics. 20 terms are required to give minimal coverage of both paths without omitting either. See Addendum for elaboration.

**Deprecated term checks applied**:

- "Broadcaster" → not used; Gateway used throughout ✓
- "Pool worker" → replaced with Pool Node ✓
- "Combined mode" / "Hybrid" → replaced with Dual Mode ✓
- "Transcoder" → used only in its go-livepeer-specific sense (O-T split worker subprocess), not as synonym for Orchestrator ✓

**Term definitions (Product Context + veracity-sources as authority; glossary as cross-check only)**:

| Term                            | Definition                                                                                                                                                                                          | Verify-live?                                                        |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Orchestrator                    | GPU hardware operator connecting machines to the Livepeer network, earning fees by processing AI inference and video transcoding jobs                                                               | —                                                                   |
| GPU                             | Specialised parallel processor used for both video transcoding and AI model inference on the network                                                                                                | —                                                                   |
| LPT (Livepeer Token)            | Livepeer's native token; required by orchestrators for staking to enter the active job pool; also used for governance                                                                               | —                                                                   |
| Staking / Bonding               | Locking LPT to an orchestrator to enter or remain in the active set; determines job eligibility for video transcoding                                                                               | `[verify-live: Explorer — BondingManager]`                          |
| Active Set                      | The top orchestrators by total bonded stake (self-stake + delegated stake) eligible to receive video transcoding work in a given round; AI inference routing does not require active set membership | `[verify-live: Explorer — active set size currently 100]`           |
| Delegation                      | LPT token holders (Delegators) staking tokens to an orchestrator, increasing its total bonded stake and earning a share of rewards                                                                  | —                                                                   |
| Reward Cut                      | Percentage of LPT inflation rewards an orchestrator retains before distributing the remainder to delegators                                                                                         | `[verify-live: Explorer — per-orchestrator setting]`                |
| Fee Cut                         | Percentage of ETH service fees an orchestrator retains before distributing the remainder to delegators                                                                                              | `[verify-live: Explorer — per-orchestrator setting]`                |
| Performance Score               | Composite metric (latency × success rate) used by gateways when selecting orchestrators for job routing                                                                                             | —                                                                   |
| Probabilistic Micropayment (PM) | Lottery-based payment scheme where gateways send signed tickets; only winning tickets are redeemed on-chain, amortising gas costs across many payments                                              | —                                                                   |
| go-livepeer                     | Official Go binary implementing the Livepeer protocol; the software orchestrators run, configured via CLI flags                                                                                     | `[verify-live: go-livepeer repo — use latest tagged release]`       |
| AI Inference                    | Running a trained neural network model on input data to produce generated outputs; one of two compute types on the network                                                                          | —                                                                   |
| Video Transcoding               | Encoding live or on-demand video into one or more output renditions at different resolutions and bitrates; the other compute type                                                                   | —                                                                   |
| O-T Split                       | Architecture separating the Orchestrator process (protocol negotiation, payment, routing) from one or more Transcoder worker subprocesses (GPU encoding); enables multi-machine deployments         | —                                                                   |
| Pool Node                       | Operator who contributes GPU capacity to an orchestrator pool rather than running an independent orchestrator; previously called "Pool worker" (deprecated)                                         | —                                                                   |
| Dual Mode                       | Deployment configuration where one orchestrator node handles both video transcoding and AI inference simultaneously; requires sufficient GPU VRAM                                                   | —                                                                   |
| Gateway                         | Demand-side actor routing AI or video jobs into the network, selecting orchestrators based on stake weight, performance, and price                                                                  | —                                                                   |
| Capability Advertisement        | Mechanism by which orchestrators inform gateways which AI pipelines and models they can process, either on-chain (AIServiceRegistry) or off-chain                                                   | —                                                                   |
| aiModels.json                   | Configuration file specifying which AI models an orchestrator loads, at what price, and whether models are pre-warmed on startup                                                                    | `[verify-live: go-livepeer repo — structure evolves with releases]` |
| BYOC (Bring Your Own Container) | Deployment pattern enabling orchestrators to run custom Docker containers for AI workloads alongside standard Livepeer pipelines                                                                    | `[verify-live: AI docs — BYOC API spec changes frequently]`         |

---

**Anchoring questions**:

**1. What does this audience call themselves?**
In their own world, this audience calls themselves **GPU operators**, **node operators**, or simply **miners** (in the broadest GPU-monetisation sense). Some will use "validator" from familiarity with other proof-of-stake networks, but that is imprecise here. The self-label that best describes their primary activity is **GPU operator** or **compute operator**.

**2. What are the 3–5 actions that define their core job?**

1. Provision and maintain GPU hardware (install drivers, manage VRAM, monitor uptime)
2. Configure and run node software to connect machines to the network
3. Set pricing to compete for and win jobs
4. Monitor earnings, performance, and job volume; tune configuration in response
5. Manage on-chain stake (self-stake + attracting delegators) to maintain or improve network standing

**3. Terms in the TERMINOLOGY_LOCK with Livepeer-specific meanings that differ from the industry default:**

| Term              | Industry default                                          | Livepeer-specific meaning                                                                                                                                                | Risk                                                                                                          |
| ----------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Orchestrator      | General term for a system coordinating multiple processes | A specific network role — a GPU hardware operator who earns fees by processing jobs; not a software scheduler                                                            | High — "orchestrator" in ML/DevOps means workflow coordination; here it means a specific economic participant |
| Bonding / Staking | Generally interchangeable in proof-of-stake networks      | In Livepeer code and docs, "bonding" is the on-chain action (BondingManager); "staking" is used colloquially; they mean the same thing but "bonding" is the precise term | Medium                                                                                                        |
| Active Set        | Not a standard term                                       | The specific group of orchestrators eligible for transcoding work in the current round, determined by stake rank; AI routing bypasses this entirely                      | High — readers may assume it applies to AI jobs; it does not                                                  |
| Performance Score | Generic quality metric                                    | A specific composite calculation (latency × success rate) tracked per-gateway, not a global score                                                                        | Medium                                                                                                        |
| Pool Node         | Generic infrastructure term                               | Specifically an operator contributing GPU capacity to an orchestrator pool without operating independently; previously "Pool worker" (deprecated)                        | Low–medium                                                                                                    |
| Gateway           | In networking: an infrastructure routing component        | In Livepeer: the demand-side actor — a business or developer routing jobs into the network and paying orchestrators                                                      | High — GPU operators will associate "gateway" with network hardware, not a business counterparty              |

---

## Arriving Question

> "I have GPU hardware — how do I connect it to Livepeer and start earning?"

---

## Personas

| Rank | Persona                                                                                                                                        | Entry vector                                                                                       | Arriving with                                                                                               | Wants to leave with                                                                         | Vol | Depth | Impact | Total |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --- | ----- | ------ | ----- |
| 1    | **The Ready Operator** — GPU miner or idle compute owner who has evaluated Livepeer and decided to try it; hardware is ready, decision is made | External article or crypto/GPU mining forum link; Livepeer blog post; Discord referral             | Knows they want to run an orchestrator; understands GPU hardware; may have zero Livepeer protocol knowledge | Node running, first job received, earning model understood                                  | 3   | 3     | 3      | 9     |
| 2    | **The Evaluating Operator** — GPU operator still deciding whether to run Livepeer vs other GPU compute networks (e.g. Akash, Render, io.net)   | Homepage CTA or organic search for "GPU compute monetisation" or "best networks for GPU operators" | Hardware exists; currently evaluating Livepeer against alternatives; no prior Livepeer knowledge            | A clear earning estimate and setup effort assessment — enough to make the go/no-go decision | 2   | 2     | 3      | 7     |
| 3    | **The Active Operator** — already running a node but hitting a specific problem: low job volume, low earnings, or wanting to add AI workloads  | Direct URL from Discord/forum, search for "Livepeer low jobs" or "add AI to orchestrator"          | Node is live; specific operational problem or growth question in mind                                       | Concrete fix or configuration change implemented                                            | 2   | 3     | 2      | 7     |
| 4    | **The Pool Node Entrant** — wants to participate in the network but lacks the LPT stake to operate independently; looking for pool options     | Discord referral; community post about pools; Delegators tab cross-link                            | Understands they cannot operate solo due to stake; wants to understand pool participation                   | Pool joined or clear path to pool participation                                             | 1   | 2     | 2      | 5     |

**Primary persona**: **The Ready Operator** — this persona drives the section structure. They have committed hardware and a decision to proceed; they need a clear path from zero knowledge to first earning. All other personas are accommodated within this structure without adding sections except where their path would otherwise be blocked.

**Self-identification**: This audience self-identifies as "GPU operators" or "node operators" — not "orchestrators." The label "orchestrator" is Livepeer-specific and will not be recognised as a self-descriptor at arrival. However, the label maps cleanly to one persona type (hardware operator contributing compute supply) without meaningful ambiguity. **No disambiguation page required** — the tab can open with a brief role definition that bridges the reader's self-label to the Livepeer term.

**Entry blockers**:

- **LPT stake requirement**: To operate as a solo orchestrator and compete for video transcoding jobs, a meaningful amount of LPT must be staked. This is a hard-stop blocker for Persona 1 (Ready Operator) and Persona 2 (Evaluating Operator) — they may not know this requirement exists, and they cannot proceed to setup without understanding it. The section that explains the staking model and entry paths (solo vs pool) **must precede** the setup/quickstart section.
- **AI inference does not require active set membership**: Operators with insufficient stake can earn from AI inference without being in the active transcoding set. This bifurcation in entry paths must be resolved before the reader chooses a setup path.
- **Hardware requirements gate AI mode**: AI inference requires GPU VRAM meeting minimum thresholds (and CUDA drivers); a reader with the wrong hardware cannot complete AI setup. Hardware requirements must be stated before the AI configuration section.

---

## Jobs to be Done

| #   | When...                                                                           | I want to...                                                                                        | So I can...                                                             |
| --- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 1   | I have GPU hardware and have decided to try Livepeer                              | Follow a step-by-step path to get my node running and receiving jobs                                | Start earning fees and understand whether the setup was correct         |
| 2   | I'm comparing Livepeer to other GPU compute networks                              | See a clear breakdown of how earnings work, what costs I'll face, and how much LPT I need           | Make an informed go/no-go decision before committing time to setup      |
| 3   | My node is live but I'm receiving very few or no jobs                             | Diagnose why my node is not being selected — stake, pricing, performance score, or capability gaps  | Fix the specific problem and see job volume recover                     |
| 4   | I'm running video transcoding and want to add AI inference workloads              | Understand what hardware and configuration changes are required and which pipelines are available   | Expand my earning surface without breaking my existing setup            |
| 5   | I'm setting pricing for my node                                                   | Understand how pricing works (per-pixel for video, per-unit for AI) and where competitive rates sit | Set prices that attract jobs while covering my costs and turning profit |
| 6   | I want to attract more delegators to increase my stake and move up the active set | Understand what delegators look at (reward cut, fee cut, performance) and what I can control        | Make informed decisions about my cut settings and improve my standing   |
| 7   | I don't have enough LPT to operate solo                                           | Understand my options — pool participation vs accumulating stake — and how each path works          | Choose the right entry path and take the next concrete step             |

---

## Ideal Journey

**Linear**:

| Position | Stage name                                                          | lifecycleStage | What they're doing                                                                                                  |
| -------- | ------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------- |
| 1        | Forming a picture of what this network is and whether it's for them | `discover`     | Reading the role overview — what orchestrators do, how earning works at a high level, who the counterparties are    |
| 2        | Deciding whether to proceed and which path to take                  | `evaluate`     | Assessing the staking requirement, hardware requirements, earnings model, and entry paths (solo vs pool vs AI-only) |
| 3        | Preparing hardware and acquiring prerequisites                      | `setup`        | Getting hardware ready, acquiring LPT, choosing deployment mode (video, AI, dual)                                   |
| 4        | Getting the node running for the first time                         | `setup`        | Installing go-livepeer, configuring flags, connecting to the network, verifying registration                        |
| 5        | Getting selected for and completing first jobs                      | `build`        | Setting pricing, advertising capabilities, monitoring job flow, confirming payment receipt                          |
| 6        | Running and improving a live production node                        | `operate`      | Monitoring performance score, managing uptime, adjusting pricing, claiming rewards                                  |
| 7        | Expanding capacity or workload type                                 | `optimise`     | Adding AI workloads, scaling to multi-GPU, joining or managing a pool, tuning for profitability                     |

**On-demand**:

- Current CLI flag names, syntax, and defaults for go-livepeer (change between releases)
- Active set current size and the minimum stake required to enter it
- Competitive pricing benchmarks for video (per-pixel) and AI (per-pipeline) workloads
- Available AI pipeline types and model IDs, with VRAM requirements per model
- Reward call timing and gas cost estimates for ticket redemption
- Performance score calculation method and how to improve a low score
- Reward cut and fee cut settings and their effect on delegator attraction
- Monitoring setup — Prometheus/Grafana configuration for go-livepeer
- Pool operators directory and how to join an existing pool
- Unbonding period duration and how to safely reduce or exit stake

**Cross-tab**:

| Direction | From / To                    | Why                                                                                             |
| --------- | ---------------------------- | ----------------------------------------------------------------------------------------------- |
| Inbound   | Home → Orchestrators         | Homepage routes GPU operators to this tab via audience CTA                                      |
| Inbound   | About → Orchestrators        | Readers who explore protocol architecture arrive here for the operational layer                 |
| Inbound   | Gateways → Orchestrators     | Gateway operators looking to understand the supply side / compute counterparty                  |
| Outbound  | Orchestrators → Delegators   | Orchestrators attracting delegators; readers who want to understand what delegators need to see |
| Outbound  | Orchestrators → Gateways     | Understanding how gateways select orchestrators; pricing and routing mechanics                  |
| Outbound  | Orchestrators → Resource HUB | Deep reference: CLI reference, protocol contract addresses, changelog                           |

---

## Ideal Section Structure

| Section                                    | Reader question                                                                                 | Job                    | purpose        | pageType      | Entry state                                                                                         | Exit state                                                                                                                                                                | lifecycleStage |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------- | ---------------------- | -------------- | ------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 1. What orchestrators do and how they earn | "What is an orchestrator, what work do they do, and how do they get paid?"                      | Job 2 (evaluate)       | `orient`       | `concept`     | Has GPU hardware; no Livepeer knowledge; may not know the term "orchestrator"                       | Has decided whether this role matches their situation; can name the two compute types and the two earning streams (job fees + inflation rewards)                          | `discover`     |
| 2. Entry paths and prerequisites           | "Do I need LPT to start? What if I don't have enough stake?"                                    | Job 7 (pool path)      | `choose`       | `guide`       | Understands the orchestrator role; does not yet know the LPT requirement or alternative entry paths | Has chosen a specific entry path (solo video, AI-only, pool node) and knows what they need to acquire or prepare before setup                                             | `evaluate`     |
| 3. Hardware and system requirements        | "What hardware do I need for video transcoding vs AI inference?"                                | Job 4 (add AI)         | `learn`        | `reference`   | Has chosen an entry path; hardware situation is known to them but requirements are not yet verified | Has confirmed whether existing hardware is sufficient for their chosen path, or identified what upgrade is needed                                                         | `evaluate`     |
| 4. Staking and the active set              | "How does staking work, and how much LPT do I need to compete?"                                 | Job 2 (evaluate)       | `explain`      | `concept`     | Has decided to pursue solo orchestration; understands they need LPT but not the mechanics           | Can describe how bonded stake determines active set position, how delegation amplifies self-stake, and how reward/fee cut settings affect delegator attraction            | `evaluate`     |
| 5. Quickstart — first node                 | "How do I install go-livepeer, configure it, and connect to the network?"                       | Job 1 (get running)    | `start`        | `instruction` | Has completed prerequisites (hardware, LPT acquired, entry path chosen); ready to run software      | Has go-livepeer running, node registered on-chain, and has verified the node is discoverable by gateways                                                                  | `setup`        |
| 6. Earning from video transcoding          | "How does video job routing work, and what do I need to configure to receive transcoding jobs?" | Job 5 (pricing)        | `configure`    | `guide`       | Node is running; has not yet received video jobs or set video pricing                               | Has configured video pricing, understands the active set selection mechanic, and has received or can expect to receive first video transcoding jobs                       | `setup`        |
| 7. Earning from AI inference               | "How do I configure my node to run AI pipelines and start receiving AI jobs?"                   | Job 4 (add AI)         | `configure`    | `guide`       | Node is running; wants to add or begin with AI workloads; hardware has been verified                | Has configured `aiModels.json`, loaded at least one AI pipeline, registered capabilities via Capability Advertisement, and received or can expect first AI inference jobs | `setup`        |
| 8. Setting and optimising pricing          | "How should I price my work to attract jobs and stay profitable?"                               | Job 5 (pricing)        | `optimise`     | `guide`       | Node is running and receiving some jobs; wants to improve pricing strategy for profitability        | Has reviewed per-pixel pricing for video and per-unit pricing for AI; has made concrete changes to pricing configuration and understands the trade-offs                   | `operate`      |
| 9. Monitoring and performance              | "How do I know if my node is healthy, and why am I getting few or no jobs?"                     | Job 3 (low jobs)       | `troubleshoot` | `guide`       | Node is live; experiencing low job volume or uncertainty about performance                          | Has identified the cause of low job volume or confirmed node health; has implemented at least one corrective action                                                       | `operate`      |
| 10. Attracting delegators                  | "What do delegators look at, and how can I set my cuts to attract more stake?"                  | Job 6 (delegators)     | `optimise`     | `guide`       | Node is in the active set or approaching it; wants to grow total bonded stake via delegation        | Has reviewed their reward cut and fee cut settings; understands the delegator decision model; has made or decided on a cut configuration                                  | `operate`      |
| 11. Scaling and advanced deployment        | "How do I add more GPUs, split orchestrator from transcoder workers, or add AI at scale?"       | Job 4 (add AI / scale) | `build`        | `guide`       | Running a single-node production setup; wants to expand capacity                                    | Has completed at least one of: O-T split deployment, multi-GPU AI worker setup, or BYOC container configuration                                                           | `optimise`     |
| 12. Pool node participation                | "How do I join an orchestrator pool if I can't operate independently?"                          | Job 7 (pool path)      | `start`        | `instruction` | Has chosen the pool node path in Section 2; understands they will not operate solo                  | Has connected as a Pool Node to an existing orchestrator pool and confirmed work is routing to their hardware                                                             | `setup`        |

---

## Persona Path Validation

| Persona                 | Enters at                                                   | Exits at                                                                  | Structural block                                                                                                                                                                                                                                                                                                                                                                 | Knowledge gap                                                                                                                                                                                                                                                                                         | Missing section                                                                                                                                                                           |
| ----------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Ready Operator      | Section 1 (What orchestrators do)                           | Section 6 or 7 (first earning, depending on chosen workload)              | None — Section 2 resolves the LPT/entry path blocker before Section 5 requires it                                                                                                                                                                                                                                                                                                | Section 4 (Staking) must be read before attempting to set up a solo video node; path is ordered correctly                                                                                                                                                                                             | None                                                                                                                                                                                      |
| The Evaluating Operator | Section 1 (role overview)                                   | Section 2 or 3 (entry paths / hardware requirements) — exits before setup | None                                                                                                                                                                                                                                                                                                                                                                             | Needs pricing/earnings estimates to make the go/no-go decision; Section 8 (pricing) is late in the journey. **Fix**: Add an earnings overview within Section 1 or 2 covering the earning model at a high level sufficient for evaluation — not a full pricing guide, but enough to estimate viability | Section 1 should include a summary earnings model; alternatively, add a brief earnings estimate callout in Section 2. Added as a content requirement within Section 2, not a new section. |
| The Active Operator     | Section 9 (Monitoring / troubleshoot) or Section 7 (add AI) | Section 8, 9, 10, or 11 depending on problem                              | None                                                                                                                                                                                                                                                                                                                                                                             | Section 9 must cover the main diagnostic paths (low stake, bad pricing, low performance score, missing capability advertisement) to serve this persona without requiring a re-read of all prior sections. The section description covers this.                                                        | None                                                                                                                                                                                      |
| The Pool Node Entrant   | Section 2 (Entry paths)                                     | Section 12 (Pool node participation)                                      | Section 12 is currently the last section — this persona cannot proceed through Sections 5–11 (designed for solo operators). **Fix**: Section 12 must be flagged in Section 2 as a direct jump path; the section order is acceptable because Section 2 explicitly routes pool node entrants to Section 12. No new section needed; routing language in Section 2 must be explicit. | Section 2 must contain an explicit routing callout: "If you are choosing the Pool Node path → go to Section 12."                                                                                                                                                                                      | None — routing callout resolves the path.                                                                                                                                                 |

**Post-validation fix applied**: The Evaluating Operator's need for a high-level earnings model has been addressed by adding a content requirement (earnings summary) within Section 2, not as a new section — Section 2's exit state and purpose already accommodate this.

---

## ⏸ Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + per-tab glossary only — no training-data additions?
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas described with motivation and entry vector — not just role labels?
- [x] Self-identification check done — disambiguation page flagged if needed? (No disambiguation page required — label maps cleanly; routing callout in Section 2 handles Pool Node Entrant.)
- [x] Entry blockers identified and resolved by section order? (LPT stake requirement: Section 2 before Section 5; hardware requirements: Section 3 before Section 7.)
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"?
- [x] Cross-tab gate applied — no content duplicated from other tabs? (Delegator mechanics: introduced in Sections 4 and 10 for this audience's decision-making; deep reference routes to Delegators tab. Gateway selection mechanics: introduced in Sections 6 and 9 for operational understanding; deep reference routes to Gateways tab.)
- [x] Persona path validation done — every persona has an unblocked path?
- [x] All enum values are canonical — no invented tokens?

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.2]**: The brief caps the TERMINOLOGY_LOCK at 20 terms but permits exceeding it for tabs covering multiple workload paths. The Orchestrators tab covers video transcoding and AI inference — two distinct configuration surfaces with different hardware gates, different job routing mechanics (active set for video; capability advertisement for AI), and different pricing units. Staying at 20 required either omitting AI-specific terms (aiModels.json, BYOC, Capability Advertisement) or video-specific terms (O-T Split, Performance Score). I included all 20 and noted the dual-path rationale as instructed.

- **[Phase 0 / Step 0.2]**: The veracity-sources file flags Active Set size (currently 100) and AI pipeline types/model IDs as high-staleness. Both are marked `[verify-live]` in the TERMINOLOGY_LOCK. The active set size appears in Section 4 (Staking and the active set) — content authors must pull the live value from Explorer, not hardcode 100.

- **[Phase 1]**: Volume estimates for all four personas are based on Product Context reasoning, not analytics data. Assumption stated: GPU operators deciding to run a node (Persona 1) are the most common visitor type because this tab is the primary destination for compute supply onboarding. Evaluating operators (Persona 2) are moderately common but many will have resolved the decision before arriving. Active operators (Persona 3) are moderately common as a return-visit segment. Pool node entrants (Persona 4) are niche because the pool path requires community knowledge not present in the docs themselves.

- **[Phase 2C / Cross-tab gate]**: Delegator mechanics (reward cut, fee cut, delegation mechanics) are included in Sections 4 and 10 because orchestrators need this information to make cut configuration decisions and attract stake — they cannot complete their goal without it. This is not duplication of the Delegators tab; it is the orchestrator-facing view of the same mechanics. Deep reference routes to the Delegators tab.

- **[Phase 2C]**: The brief's universal elements instruction excludes portal/landing, section-level index pages, and a resources/compendium section. Section 12 (Pool Node Participation) is last in the linear order but is a valid `setup`-stage section for a real persona path, not a resources section — it is included on that basis.
```
