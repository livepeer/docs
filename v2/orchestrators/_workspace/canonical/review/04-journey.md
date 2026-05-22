# Part 4: Ideal Journey

**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## Linear journey (the main path, in order)

| # | Stage | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Identifying the right operating path | `discover` | Working out whether solo video, AI/dual, or pool is right for their hardware, capital, and goals |
| 2 | Evaluating viability and hardware fit | `evaluate` | Checking hardware requirements, income mechanics, LPT stake implications |
| 3 | Understanding how work and payment reach them | `evaluate` | Mapping routing mechanics (video vs AI), micropayments, rewards, fee/reward cut |
| 4 | Clearing prerequisites | `setup` | LPT acquisition/staking (solo video), ETH bridging, on-chain registration |
| 5 | Standing up the first working node | `setup` | Installing go-livepeer, setting config flags, starting process, confirming connectivity |
| 6 | Verifying reachability and live routing | `setup` | Confirming active set membership (video) or capability advertisement (AI); first test job |
| 7 | Configuring AI workloads | `build` | aiModels.json, warm model config, capability advertisement |
| 8 | Operating day-to-day | `operate` | Reward calls, monitoring, software updates, ticket redemptions |
| 9 | Optimising earnings and performance | `optimise` | Pricing adjustments, performance score, delegation attractiveness, VRAM allocation |

---

## On-demand lookups (not linear — come back as needed)

- Active set size and minimum viable stake threshold
- pricePerUnit / pixelsPerUnit benchmark ranges and gateway MaxPrice thresholds
- Reward call timing, automation, gas cost
- AI pipeline types, model IDs, VRAM requirements
- CLI flag reference — current names, defaults, accepted values
- Performance score: calculation, thresholds, improvement
- Ticket redemption mechanics and win probability
- Reward cut / fee cut: competitive values, how to change, when changes take effect
- Pool operator contacts / registry
- Governance vote schedule and treasury contribution rates

---

## Cross-tab links

| Direction | Route | Why |
|---|---|---|
| **In** | Home → Orchestrators | Homepage CTA for GPU operators |
| **In** | About → Orchestrators | Protocol readers wanting to participate |
| **In** | Delegators → Orchestrators | Delegators evaluating which orchestrator to stake to, or considering running own node |
| **In** | Community → Orchestrators | Community members interested in infrastructure |
| **Out** | Orchestrators → Delegators | Understanding how to attract delegators |
| **Out** | Orchestrators → Gateways | Understanding gateway selection logic, MaxPrice |
| **Out** | Orchestrators → Developers | Building custom AI/video flows |
| **Out** | Orchestrators → Resource Hub | CLI reference, changelog, glossary |
| **Out** | Orchestrators → About | Deeper protocol architecture, tokenomics |

---

## Review questions

1. Is this the actual order someone goes through? Or do people skip steps?
2. Is stage 3 (understanding payments) really needed before setup, or do people just want to get running first?
3. Should AI config (stage 7) be optional/branching rather than linear?
4. Are the on-demand lookups the right ones? Missing any?
5. Do the cross-tab links reflect real navigation patterns?

---

## Existing research (raw — for reference)

Research collected 2026-03-23. Grouped by source file path. Covers all journey, lifecycle, sequencing, cross-tab, and entry-vector definitions found across the three searched directories.

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/collated/canonical-orchestrators-audience-design.md`

**Status**: CANONICAL — ready for Phase 2 input. Synthesised from 4 AI runs (Claude agent, Claude web, ChatGPT, Perplexity).

**Arriving Question**:

> "I have GPU hardware — how do I connect it to the Livepeer network and start earning from it, and which path is right for my hardware and capital situation?"

**Ideal Journey — Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Identifying the right operating path | `discover` | Working out whether solo video, AI/dual, or pool participation is the right model for their hardware, capital, and goals |
| 2 | Evaluating viability and hardware fit | `evaluate` | Checking hardware requirements, income mechanics, LPT stake implications, and economic fit before committing |
| 3 | Understanding how work and payment reach them | `evaluate` | Mapping stake-based routing (video), capability-based routing (AI), probabilistic micropayments, inflation rewards, and reward/fee cut mechanics |
| 4 | Clearing prerequisites | `setup` | Acquiring and staking LPT (solo video), bridging ETH to Arbitrum, registering on-chain — all blockers resolved before software setup |
| 5 | Standing up the first working node | `setup` | Installing go-livepeer, setting base configuration flags, starting the process, confirming connectivity |
| 6 | Verifying reachability and live routing | `setup` | Confirming active set membership (video) or capability advertisement (AI); receiving and completing first test job |
| 7 | Configuring AI workloads | `build` | Writing aiModels.json, setting warm model configuration, advertising capabilities — for AI or dual-mode operators |
| 8 | Operating day-to-day | `operate` | Managing reward calls, monitoring performance metrics, software updates, ticket redemptions |
| 9 | Optimising earnings and performance | `optimise` | Adjusting pricing competitiveness, improving performance score, tuning cuts to attract delegation, managing model warmth and VRAM allocation |

**Ideal Journey — On-demand**:
- Current active set size and minimum viable stake threshold to enter or maintain membership
- pricePerUnit and pixelsPerUnit benchmark ranges and how to check whether price is above gateway MaxPrice thresholds
- Reward call timing, automation options, and gas cost on Arbitrum
- AI pipeline types currently routable, model IDs, and VRAM requirements per pipeline
- CLI flag reference — current flag names, defaults, and accepted values for the installed go-livepeer release
- Performance score: how it is calculated, which thresholds affect routing, and how to improve it
- Ticket redemption mechanics and current win probability parameters
- Reward cut and fee cut: what values are competitive, how to change them on-chain, and when changes take effect
- Pool operator contacts or registry for operators with insufficient LPT
- Governance vote schedule and treasury contribution rates affecting orchestrator economics

**Ideal Journey — Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → Orchestrators | Homepage CTA routes GPU operators and compute providers to this tab |
| Inbound | About → Orchestrators | Readers who came to understand the protocol and now want to participate as compute providers |
| Inbound | Delegators → Orchestrators | Delegators evaluating which orchestrator to stake to, or delegators considering running their own node |
| Inbound | Community → Orchestrators | Community members directed here after expressing interest in running infrastructure |
| Outbound | Orchestrators → Delegators | Operators who want to understand how to attract delegators and what delegators look for in cut settings |
| Outbound | Orchestrators → Gateways | Operators who want to understand how gateway selection logic works, pricing signals, and MaxPrice behaviour |
| Outbound | Orchestrators → Developers | Operators who want to build custom AI or video flows rather than just operate supply-side infrastructure |
| Outbound | Orchestrators → Resource HUB | CLI reference, changelog, protocol glossary, governance records |
| Outbound | Orchestrators → About | Operators who want deeper protocol architecture, tokenomics, or governance mechanics beyond operational needs |

**Persona entry vectors** (from the same file):

| Rank | Persona | Entry vector |
|---|---|---|
| 1 | Independent GPU operator | Search ("livepeer orchestrator setup", "earn with GPU"), Discord referral, mining/crypto community forum, Foundation blog post |
| 2 | AI inference specialist | Livepeer AI blog post, Discord `#ai-video`, AI/ML community referral |
| 3 | Capital-constrained operator | Discord thread, search ("join Livepeer without staking", "pool node livepeer"), referral from pool operator |
| 4 | Running operator (return visit) | Bookmark, direct URL, Discord link to specific doc, search for specific error message |
| 5 | Delegator-turned-operator | Delegators tab CTA, forum thread, community discussion |

**Section order consequence (from entry blockers analysis)**: Disambiguation → path viability assessment → payment mechanics → prerequisites → solo node setup OR pool node section → AI pipeline setup → verification → operations → optimisation → troubleshooting.

---

### Source: `workspace/plan/active/CONTENT-WRITING/context-packs/orchestrators-audience-doc.md`

**Status**: DRAFT — awaiting checkpoint. Generated 2026-03-22. Sources: orchestrators-ia-map.md, orchestrator-tab-review-v3.md, dep-personas-and-pages.mdx.

**Arriving Question**: "Can my GPU earn on this network, and what exactly do I need to do to get there?"

**Ideal Journey — Linear (6-stage version)**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Orient & route | `discover` | Learning what orchestrators are and identifying which of the three paths (solo, pool, AI-first) matches their situation |
| 2 | Evaluate viability | `evaluate` | Assessing hardware fit, LPT requirements, economics, and time commitment before committing to a path |
| 3 | Set up | `setup` | Following their chosen path: solo node quickstart, pool worker join, or AI-first node setup |
| 4 | Activate | `setup` | Connecting to network, staking/registering (solo path), confirming first job receipt |
| 5 | Operate | `operate` | Monitoring node health, configuring pricing, managing rewards and payments day-to-day |
| 6 | Optimise | `optimise` | Tuning pricing, adding workloads (AI on top of transcoding), scaling infrastructure, managing delegation attraction |

**Note on branching**: "The journey branches at Position 3. Pool Worker exits after joining a pool (no staking/activation needed). AI Native may skip staking/rewards and go directly to AI workloads. The section structure must accommodate these branches — sections 4–6 are not all mandatory for every persona."

**On-demand lookups**: CLI flags and runtime parameters; competitive pricing benchmarks (video vs AI workloads); VRAM requirements by pipeline and model; contract addresses and Arbitrum network references; troubleshooting by symptom; Explorer usage and earnings verification.

**Cross-tab links**:

| Direction | From / To | Why |
|---|---|---|
| → out | Orchestrators → LP Token / Delegators | Staking mechanics, delegation, governance voting |
| → out | Orchestrators → About | Architecture depth, protocol economics, tokenomics |
| ← in | LP Token / Delegators → Orchestrators | Delegators evaluate orchestrators to choose where to delegate |
| ← in | Developers → Orchestrators | Developers building custom pipelines may graduate to running their own orchestrator |
| ↔ both | Orchestrators ↔ Gateways | Gateways select orchestrators; orchestrators configure pricing for gateways; PM ticket payment mechanics shared |

---

### Source: `workspace/plan/active/CONTENT-WRITING/decisions/cross-tab-journeys.md`

**Status**: Stub — populated during Phase 3 (IA Audit).

**Known paths to confirm during Phase 3**:
- Founder → About → Builder → Developers (or Gateways)
- Builder → Developer graduation
- Delegator → About (protocol context)
- Orchestrator → Gateway (dual-mode operator) — "An orchestrator who wants to also run a gateway needs a clear graduation path. This is a dual-mode operator journey — both tabs must be aware of it."

**Phase 12 Trigger Note**: Decision required — run Phase 12 once (all 5 tabs complete) or incrementally (minimum 3 tabs sharing a cross-tab journey). Suggested minimum tab set: Gateways + Orchestrators + Developers (shared graduation path).

---

### Source: `v2/orchestrators/_workspace/research/orchestrator-tab-review-v3.md`

**Title**: "Orchestrator Tab Review v3: Product Thinking Critique"

**Critique 3 — The Section Order Assumes a Linear Journey**:

> "This is a waterfall journey. Real operators don't move linearly:
> - J6 (AI-first, low LPT) skips Staking entirely and goes Considerations → Deployment → Workloads → Payments → Monitor
> - J2 (adding AI to video) starts at Workloads, not Considerations
> - J3 (LPT maximiser) cares about Staking before Workloads — they stake first, then figure out what to run
> - J4 (commercial) needs Payments and Pricing BEFORE Deployment — the business case drives infrastructure decisions"

**Recommendation**: "The section order is fine as a default reading order, but the Navigator must route by job story, not by section sequence."

**Critique 7 — Customer Journey Has No 'Aha Moment' Design**:

| Moment | What happens | Should happen |
|--------|-------------|--------------|
| First visit | Operator lands on portal | Job-story routing: "What's your situation?" |
| Worth-it check | Operator evaluates ROI | Interactive calculator or quick decision matrix |
| First setup | Operator installs and configures | Quickstart that gets to first job in 30 mins |
| First earning | Operator sees first reward/fee | Verification page should confirm "You're earning" |
| First problem | Something breaks | Error-specific routing from health checks |
| Scaling decision | Operator considers growing | Triggered by monitoring signals (auto-surfaced) |

---

### Source: `v2/orchestrators/_workspace/plans/product-thinking-review.md`

**Customer Journey Map (J1: GPU owner wanting earnings)**:

| Stage | Touchpoint | Thinking | Feeling | Friction | Opportunity |
|-------|-----------|---------|---------|----------|-------------|
| Evaluation | operator-rationale | "Is this worth my 4090's time?" | Calculating | Page is 439 lines, dense | Scannable decision matrix at top |
| Path Selection | setup-options | "Pool or solo? Video or AI or both?" | Uncertain | Binary framing (video OR AI) | Hybrid-first framing |
| Hardware Check | requirements | "Does my hardware qualify?" | Anxious | Page exists but not linked from rationale | Direct CTA from rationale |
| Setup | Quickstart + Setup section | "Walk me through it" | Focused | Setup is in different nav section | Cross-ref setup steps |
| First Workload | job-types → video or AI setup | "What do I run first?" | Engaged | 6 pages in Workloads, unclear sequencing | "Start with X, then add Y" guidance |
| Staking | earnings, rewards-and-fees | "How do I actually get paid?" | Motivated | Must read 2 pages + payments in different section | "Earning" umbrella section |
| First Earning | Explorer, CLI | "Is it working?" | Excited/anxious | No "verify you're earning" checkpoint page | Earning verification in monitoring |
| Ongoing Ops | monitoring, troubleshooting | "Something broke" | Frustrated | Troubleshooting is comprehensive but long | Symptom-based quick-nav |

**Critical Moments**: Aha = seeing first reward call succeed on Explorer + understanding compounding math. Churn trigger = "No jobs" after setup — operator doesn't know if problem is pricing, capability, or connectivity. Advocacy trigger = sharing first month's earnings showing both video + AI revenue.

---

### Source: `v2/orchestrators/_workspace/research/L0-hybrid-operator-product-exercise.md`

**Customer Journey Map — Hybrid Operator ("Sam", ML engineer with RTX 4090)**:

| Stage | Touchpoint | Doing | Thinking | Feeling | Friction | Opportunity |
|-------|-----------|-------|---------|---------|----------|-------------|
| Awareness | Discord, Twitter, friend referral | "Livepeer pays for GPU time?" | "Is this legit? How much can I earn?" | Curious, sceptical | No clear "hybrid earner" messaging | Portal hero should lead with hybrid earning |
| Evaluation | Portal → Operator Rationale | Reading economics, checking Explorer | "Can my 4090 do this? Video AND AI?" | Calculating, comparing | Current page doesn't model hybrid earnings | Decision matrix should default to hybrid |
| Decision | Navigator → Setup Options | Choosing a path | "Do I do video first or AI first?" | Confused by the fork | Binary choice when reality is hybrid | Navigator should route to hybrid quickstart |
| Setup | Quickstart → Setup flow | Installing, configuring | "Which flags do I need for both?" | Focused, following steps | Must stitch video + AI guides manually | Single hybrid setup sequence |
| First Earnings | Explorer, CLI, logs | Checking for jobs, calling rewards | "Is it working? Am I earning?" | Anxious, checking often | Separate verification for video and AI | Unified hybrid health check |
| Optimisation | Monitoring, pricing, session tuning | Adjusting prices, loading models | "How do I earn more from both?" | Engaged, experimenting | No hybrid-specific tuning guide | Hybrid tuning page or section |
| Scaling | O-T split, additional GPUs | Considering expansion | "Should I split video and AI?" | Planning, calculating | No "when to split hybrid" guidance | Clear split criteria |

**Critical Moments**: Aha = first winning ticket redeemed + first AI inference job completed (both on same node). Churn trigger = GPU contention causes video job failures, operator disables AI rather than tuning. Advocacy trigger = operator shares earnings screenshot showing both video AND AI revenue.

**Staged Action Sequence**:
- Phase 1 (Mental Model Shift): Rename/reframe navigator so "Both" is the first option; add hybrid path to operator-rationale decision matrix; update setup-options with hybrid as primary path.
- Phase 2 (Hybrid Content): Create hybrid-setup.mdx; add "Already running video?" section to AI workloads guide; add hybrid resource management section to session-limits.
- Phase 3 (Hybrid Tooling Guidance): Hybrid health check in troubleshooting; "When to split" criteria in Advanced Operations; hybrid monitoring dashboard guidance.

---

### Source: `v2/orchestrators/_workspace/research/dual-mode-orchestrator-planning.md`

**10 pre-draft questions for the Dual Mode page** (journey/sequencing relevant):

- Q5: "Should this Dual Mode page cover the 'existing video operator upgrading' path, or only fresh dual-mode setup, with the upgrade path deferred to AI-prompt-start?"
- Q8: "Does the Dual Mode page assume the navigator already routes there (downstream page), or does it need to self-contain the 'should I run dual mode?' decision logic?"
- Q9: "Two key sub-journeys: (a) new operator starting fresh with dual mode, and (b) existing video operator adding AI. If both paths land on this page, should they be separated via Tabs or an AccordionGroup?"

---

### Source: `v2/orchestrators/_workspace/plans/plan.md`

**Section order locked**: Operator Considerations → Deployment Details → Workloads & AI → Staking & Earning → Config & Optimisation → Monitoring & Tools → Advanced Operations → Roadmap & Funding → Tutorials.

**Job Stories (Canonical, 7 stories)**:

| # | Situation | Motivation | Outcome |
|---|-----------|-----------|---------|
| J1 | GPU sitting idle | Earn crypto from compute | Offset hardware costs |
| J2 | Already run video, AI demand growing | Add AI to existing node | Earn from both without second machine |
| J3 | Have significant LPT | Maximise yield | Compound position via rewards + delegation |
| J4 | Company needs GPU compute under SLAs | Operate commercial infrastructure | Earn service fees from products |
| J5 | Want to influence open compute | Operate with governance weight | Vote on protocol decisions |
| J6 | Have 24GB+ GPU, limited LPT | Earn from AI without active set | Start earning immediately via capability |
| J7 | Something broke | Diagnose and fix quickly | Minimise missed rewards and lost jobs |

**Key sequencing decisions**: "Dual mode is the default production configuration. Most active operators run both video and AI." Navigator routes by job story situation, not by persona or section sequence.

---

### Source: `v2/orchestrators/_workspace/plans/dep-personas-and-pages.mdx`

**Persona Journey Map — structural pattern (position order is fixed)**:

| Position | Purpose Type | Job at This Position |
|---|---|---|
| 1 | `landing` (portal) | Route them. "You're in the right place. Here's what's here." |
| 2 | `overview` | Orient them. "Here's what this is and why it matters to you." |
| 3 | `tutorial` (quickstart/get started) | Activate them. "Do this one thing and see it work." |
| 4 | `how_to` (operational guides) | Enable them. "Here's how to do each specific task." |
| 5 | `concept` (deeper understanding) | Deepen them. "Here's how it actually works." |
| 6 | `reference` (technical detail) | Support them. "Here's the exact specification." |
| 7 | `faq` / `troubleshooting` | Rescue them. "Here's what to do when it breaks." |
| 8 | `glossary` (if section-specific) | Define terms. "Here's what the words mean." |

**Orchestrator Journey (10-stage, from the same file)**:

| Stage | What They're Doing | Questions They Need Answered |
|-------|--------------------|-----------------------------|
| 1. Discovery | Understanding the opportunity | What is an orchestrator? How do they earn? What hardware do I need? |
| 2. Evaluation | Deciding whether to run one | GPU requirements? LPT stake? ETH for gas? Bandwidth? Costs vs earnings? |
| 3. Installation | Getting go-livepeer running | Download, install, configure basic settings. Docker or bare metal? |
| 4. On-Chain Registration | Joining the network | How do I stake LPT? Register? Set reward/fee cut? Minimum stake? |
| 5. AI Setup (if running AI) | Configuring GPU pipelines | Which AI models? Pipeline config? GPU memory management? |
| 6. First Success | Processing first job | How do I verify I'm receiving jobs? First earnings? |
| 7. Optimisation | Maximising earnings | Pricing strategy. Which pipelines are most profitable? Multi-GPU? |
| 8. Advanced Operations | Scaling and securing | Remote signers. Payment clearinghouses. Multiple nodes. Monitoring. |
| 9. Governance | Protocol governance | How do voting rounds work? Stake-weighted voting? |
| 10. Troubleshooting | Something broke | Node not receiving jobs. GPU errors. Earnings not showing. |

**Activation test**: "Tester goes from zero to a registered orchestrator that processes at least one job and shows earnings in the Explorer."

**Self-identification problem**: "People don't arrive at docs thinking 'I'm a Gateway Operator.' They arrive thinking 'I'm a developer' or 'I want to build something.'" Mapping: "I want to earn with my GPUs" → Orchestrator (GPU Nodes tab).

---

### Source: `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/02_04-IA-Journey-Derived-IA/index.md`

**Journey 6: ORCHESTRATOR / GPU COMPUTE PROVIDER**:

"Who: Running GPU infrastructure. Earns from compute + staking. Entry point: Home → 'I want to provide GPU compute' → GPU Nodes tab."

GPU Nodes tab pages (journey-derived): ~9 (Portal, What is an Orchestrator, Requirements & Economics, Quickstart, Join a Pool, AI Configuration, Model Curation, Earnings & Optimisation, Troubleshooting). Plus reference pages: Hardware Requirements detail, CLI Flags, FAQ.

Previous (repo-contaminated) blueprint: 177 pages. Journey-derived blueprint: ~96 pages total across all tabs — "That's the difference between 'find homes for everything in the repo' and 'what do the personas actually need.'"

---

### Source: `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/02_02.-Personas-Journey-Alignment/index.md`

**5 orchestrator personas with journey-stage arrival points**:

| Persona | Journey stage at arrival |
|---|---|
| A: Solo Miner (1–4 consumer GPUs) | Pos 2–3 |
| B: Pool Worker (single GPU, lacks LPT) | Pos 3 |
| C: Pro Operator (4–20 GPUs, devops) | Pos 4–5 |
| D: Enterprise (100+ GPUs, commercial) | Pos 2–3 |
| E: AI Native (24GB+ VRAM, no crypto background) | Pos 3 |

**Persona A key questions at each stage**: Orienting: "What is this and is it worth my time?" Decision: "Solo or pool? What LPT do I need?" Activation: "How do I install, configure, set flags?" Operational: "Why no jobs? How to set price per pixel?" Deepening: "Should I add AI pipelines?" Reference: "CLI flags, Explorer, pricing tools."

---

### Source: `v2/orchestrators/_workspace/canonical/Frameworks.mdx`

**Lifecycle Stage (canonical enum)**:

| Value | Reader position |
|---|---|
| `discover` | First encounter with a concept or tool |
| `evaluate` | Assessing viability or comparing options |
| `setup` | Implementing for the first time |
| `build` | Constructing or extending something beyond initial setup |
| `operate` | Managing a live system day-to-day |
| `troubleshoot` | Diagnosing and fixing problems |
| `optimise` | Improving a running system on specific metrics |

**Content pipeline levels** (journey-related):

| Level | Name | What happens | Output |
|---|---|---|---|
| L1 | Site | Map audiences, cross-tab journeys, tab ownership | `site-map.md` |
| L2 | Tab | Personas, entry vectors, JTBD matrix, linear journey | `tab-audience-doc.md` |

**Definition of Good — Tab level**: "Primary audience journey complete: entry → depth → exit. On-demand sections exist for every major post-activation need. At least 3 cross-tab links at journey intersections."

**Banned phrase (sequencing relevant)**: "As mentioned above" — banned because "docs navigated non-linearly."

---

### Source: `v2/orchestrators/_workspace/canonical/review/07-path-validation.md`

**Persona paths through sections**:

| Persona | Enters | Exits | Blocked? |
|---|---|---|---|
| Independent GPU operator | S1 | S9 (initial); returns S10-S11 | No |
| AI inference specialist | S1 | S8 or S9 | No |
| Capital-constrained (pool) | S1 → S6 | S6 | No |
| Running operator (return) | S10, S11, or S12 directly | Same section | No |
| Delegator-turned-operator | S2 | S4 or S5 | No |

**Entry blockers (things that stop someone mid-journey)**:

| Blocker | Affects | Must be addressed before |
|---|---|---|
| LPT stake | Solo video path only | S5 (setup) |
| ETH for gas | All on-chain paths | S5 (setup) |
| Publicly reachable service URI | All paths | S5 (setup) — node registration |
| VRAM capacity | AI inference path | S8 (AI setup) — model selection |
| Pool membership arrangement | Pool node path | S6 — not self-serviceable from docs |
| Capability advertisement | AI path | S9 (verify) — gateways must see capabilities |

---

### Source: `v2/orchestrators/_workspace/canonical/review/05-section-structure.md`

**12 sections with entry/exit states and lifecycle stages**:

| # | Section | lifecycleStage | Entry state | Exit state |
|---|---|---|---|---|
| S1 | Which path is mine? | `discover` | Arrived at tab; has GPU; doesn't know which path | Identified path; navigated to correct start |
| S2 | Is this viable? | `evaluate` | Identified candidate path | Go/no-go decision made |
| S3 | How does work reach me? | `evaluate` | Decided to proceed | Can describe income streams, routing, cuts |
| S4 | Prerequisites | `setup` | Chosen path | Hardware confirmed, wallet funded, LPT staked (if needed) |
| S5 | Get your node running | `setup` | Prerequisites confirmed | Running, registered node |
| S6 | Join as a pool node | `evaluate` | Identified as pool candidate | Decision made on pool vs solo vs AI-first |
| S7 | Set pricing and cuts | `setup` | Node installed | Pricing set with justification |
| S8 | Set up AI pipelines | `build` | go-livepeer running; AI not configured | aiModels.json configured; capabilities advertised |
| S9 | Verify your node | `setup` | Set up and configured | Discoverable, priced, first job received |
| S10 | Monitor and operate | `operate` | Live and receiving work | Monitoring routine in place |
| S11 | Optimise earnings | `optimise` | Operating with monitoring | Identified key variable, made targeted adjustment |
| S12 | Diagnose and fix | `troubleshoot` | In production but experiencing a problem | Root cause diagnosed, fix applied or queued |

---

### Source: `v2/orchestrators/_workspace/plans/product-thinking-review.md` (additional)

**Job story sequencing** — non-linear paths identified:

- J6 (AI-first, low LPT): skips Staking entirely → Considerations → Deployment → Workloads → Payments → Monitor
- J2 (adding AI to video): starts at Workloads, not Considerations
- J3 (LPT maximiser): cares about Staking before Workloads
- J4 (commercial): needs Payments and Pricing BEFORE Deployment

---

### Source: `v2/orchestrators/_workspace/drafts/docs-section-planning-playbook.md`

**Step 2d — Customer Journey Map (canonical process)**:

"Map primary job story through 7 stages (Awareness → Evaluation → Decision → Setup → First Value → Optimisation → Scaling). Document: touchpoint, thinking, feeling, friction, opportunity per stage. Identify critical moments: aha, churn trigger, advocacy trigger."

---

### Source: `v2/orchestrators/_workspace/context-packs/orchestrators-ia-mapping.md`

**IA mapping verdict per section** (journey-relevant findings):

- S1 (Which path is mine?): PARTIALLY COVERED. "No page uses pageType: navigation as required. The LPT-required vs. not-required distinction across paths is not the stated focus of any existing page."
- S2 (Is this viable?): PARTIALLY COVERED. "No single page synthesises hardware fit + income mechanics + participation cost into one unified go/no-go evaluation concept page."
- S3 (How does work reach me?): PARTIALLY COVERED. "S3 content is fragmented across 4+ pages. No single concept page synthesises all of this."

---

### Source: `docs-guide/frameworks/content-system.mdx`

**Content Layers model**:
- Layer 1 (Product and Positioning): value proposition and context framing; user journey entry points; concise decision-oriented summaries.
- Layer 2 (Operational How-to): setup, runbooks, migration/checklist pages; practical workflows with expected outcomes.
- Layer 3 (Deep Reference): APIs, schema/spec docs, command matrices; troubleshooting and edge-case documentation.

---

### Source: `v2/orchestrators/_workspace/research/Orchestrators_new/05-setup-paths.md`

**Content brief for setup-paths.mdx** (journey-relevant excerpts):

Docs purpose: "Take each persona from 'I just heard about Livepeer' to 'I am confidently doing the thing I came to do.'" Success metric per orchestrator persona: "Not 'I read about it' — 'I processed my first job.'"

---

### Summary of journey definitions found

| Source | Journey type | Stage count | Key difference from this file |
|---|---|---|---|
| Canonical audience design (collated) | Linear + on-demand + cross-tab | 9 linear stages | Most complete; includes entry blockers and section order consequence |
| Audience doc (draft, 2026-03-22) | Linear + on-demand + cross-tab | 6 linear stages | Explicitly documents branching at Position 3 |
| dep-personas-and-pages.mdx | 10-stage orchestrator journey | 10 stages | Includes governance and advanced operations stages |
| product-thinking-review.md | Customer journey map (J1) | 8 touchpoint stages | Includes feeling/friction/opportunity per stage |
| L0-hybrid-operator-product-exercise.md | Hybrid operator journey map | 7 stages | Specific to dual-mode operator; includes aha/churn/advocacy moments |
| orchestrator-tab-review-v3.md | Critique of linear assumption | N/A | Documents non-linear paths per job story |
| Section structure (review/05) | Section entry/exit states | 12 sections | Maps lifecycleStage per section with explicit entry/exit state contracts |
| Journey-Derived IA (docs-guide) | Journey 6: Orchestrator | ~9 pages derived | Derived page list from journey stages without consulting repo |
| Section planning playbook | 7-stage canonical process | 7 stages | Awareness → Evaluation → Decision → Setup → First Value → Optimisation → Scaling |
