# Part 3: Jobs to be Done

**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## 7 jobs

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I have GPU hardware and just heard about this network | assess whether my hardware qualifies, what I'd earn, and what each path requires | make a go/no-go decision and choose the right path before investing setup time or capital |
| J2 | I've decided to participate but don't know which path | identify whether I should go solo video, AI-only, dual mode, or join a pool | start the correct setup path without wasting time on the wrong one |
| J3 | I'm ready to set up but haven't done on-chain prerequisites | complete wallet funding, LPT acquisition/staking, ETH bridging in the right order | unblock myself so the node software can actually receive jobs |
| J4 | I have prerequisites in place and want a working node | follow a complete, ordered setup sequence (install, configure, register, verify) | reach a state where my hardware is live, discoverable, and processing jobs |
| J5 | My node is running but I'm not getting enough work | diagnose why — pricing too high, not in active set, low performance score, AI capabilities not advertised | fix the correct variable and start receiving jobs without guessing |
| J6 | I want to configure AI inference on my GPU | set up aiModels.json, configure warm models, advertise capabilities to gateways | earn from AI inference jobs alongside or instead of video transcoding |
| J7 | I'm operating a node and need a specific current value | look up the exact parameter, CLI flag, active set threshold, or reward cut setting | make a confident config change without rereading narrative content |

---

## Coverage check

- **Arrival**: J1, J2
- **Active setup**: J3, J4
- **Return visit / reference**: J7
- **Edge cases**: J5 (low-work diagnosis), J6 (AI-specific path)

---

## Review questions

1. Do these match what orchestrators actually come to the docs to do?
2. Is anything missing? (e.g. "I want to upgrade my node" or "I want to scale to multiple GPUs")
3. Are J1 and J2 really separate jobs, or are they the same moment?
4. Is J6 (AI setup) important enough to be a standalone job?
5. Any jobs here that don't actually happen in practice?

## Existing research (raw — for reference)

Research collected 2026-03-23. Grouped by source file path. Covers all JTBD, job story, task analysis, and user need definitions found across the three searched directories.

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/collated/canonical-orchestrators-audience-design.md`

**Status**: CANONICAL — ready for Phase 2 input. Synthesised from 4 AI runs (Claude agent, Claude web, ChatGPT, Perplexity).

**Jobs to be Done (7 entries)**:

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I have GPU hardware and have just heard about this network | assess whether my hardware qualifies, what I'd realistically earn, and what each participation path actually requires | make a go/no-go decision and choose the right path before investing any setup time or capital |
| J2 | I've decided to participate but don't know which path applies | identify whether I should go solo video, AI-only, dual mode, or join a pool — based on my hardware, LPT, and goals | start the correct setup path without wasting time on the wrong one |
| J3 | I'm ready to set up but haven't yet done any on-chain prerequisites | complete wallet funding, LPT acquisition and staking, and ETH bridging in the right order | unblock myself so the node software can actually receive jobs |
| J4 | I have prerequisites in place and want a working node | follow a complete, ordered setup sequence (install, configure, register, verify) for my chosen path | reach a state where my hardware is live, discoverable, and processing jobs |
| J5 | My node is running but I'm not getting enough work | diagnose why — pricing too high, not in active set, performance score low, AI capabilities not advertised | fix the correct variable and start receiving jobs without guessing |
| J6 | I want to configure AI inference on my GPU | set up aiModels.json, configure warm models, and advertise my capabilities to gateways | earn from AI inference jobs alongside or instead of video transcoding |
| J7 | I'm operating a node and need a specific current value | look up the exact current parameter, CLI flag name, active set threshold, or reward cut setting | make a confident configuration change without having to reread narrative content |

**Coverage check**: Arrival jobs (J1, J2), active-use jobs (J3, J4), reference/return-visit jobs (J7), edge cases (J5 for low-work diagnosis, J6 for AI-specific path). Full coverage confirmed.

**Entry blockers (from same file, section order consequence)**:
- **LPT stake** (solo video transcoding path): Hard-stop blocker for active set eligibility. Reader discovering mid-setup that they need significant bonded stake will stall. The pool node path and AI-only path bypass this blocker — the disambiguation section must make this visible before either path begins.
- **ETH for gas** (all on-chain paths): All reward calls, ticket redemptions, and activation transactions cost ETH gas on Arbitrum.
- **Publicly reachable service URI** (all paths): A node without a reachable service URI cannot receive routed work.
- **VRAM capacity** (AI inference path): AI pipelines require minimum VRAM to load models.
- **Pool membership arrangement** (pool node path): A pool node candidate must find and arrange a connection with a pool operator before any setup makes sense. Not self-serviceable from documentation alone.
- **Capability advertisement** (AI path): An AI operator who configures models but does not understand capability advertisement cannot verify that gateways will route AI work to them.

Section order consequence: Disambiguation → path viability assessment → payment mechanics → prerequisites → solo node setup OR pool node section → AI pipeline setup → verification → operations → optimisation → troubleshooting.

---

### Source: `v2/orchestrators/_workspace/plans/product-thinking-review.md`

**Title**: "Product Thinking Review: Orchestrator Guides Section"

**Job Stories (7 entries, with acceptance criteria and gap analysis)**:

**J1**: "When I have a GPU sitting idle, I want to start earning crypto from Livepeer, so I can offset my hardware costs."
- Acceptance: Can estimate earnings before committing. Can reach first earning within 24 hours. Understands which path (pool/solo/AI-only) fits my hardware.
- Pages serving: operator-rationale (evaluation), setup-options (path selection), join-a-pool (fastest path)
- Gap: No unified "start here" page within guides. operator-rationale is evaluation, not action.

**J2**: "When I already run video transcoding and see AI demand growing, I want to add AI to my existing node, so I can earn from both workloads without a second machine."
- Acceptance: Can add AI flags to existing config in under 1 hour. Understands VRAM impact on video sessions. Knows which AI models are in demand.
- Pages serving: ai-workloads-guide (conceptual), batch-ai-setup (step-by-step)
- **Gap: No "add AI to existing video node" bridge content. Both AI pages assume fresh setup. No VRAM coexistence guidance.**

**J3**: "When I have significant LPT and want to maximise yield, I want to operate a reliable, well-staked orchestrator, so I can compound rewards and delegation."
- Acceptance: Understands reward calling gas economics. Can set competitive cuts. Can monitor delegation trends.
- Pages serving: earnings, rewards-and-fees, attracting-delegates
- Gap: No "LPT yield optimisation" framing. Content is mechanistic (how rewards work) not strategic (how to maximise).

**J4**: "When my company needs to provide GPU compute under SLAs, I want to operate commercial orchestrator infrastructure, so I can earn service fees from products like Livepeer Studio."
- Acceptance: Can set per-gateway pricing. Understands O-T split for reliability. Has SLA monitoring.
- Pages serving: business-case (evaluation), gateways-orchestrators (relationship), large-scale-operations (fleet)
- Gap: No end-to-end commercial operator journey. Pages exist but aren't connected into a path.

**J5**: "When I want to influence the direction of open compute infrastructure, I want to operate a node with governance weight, so I can vote on protocol decisions."
- Acceptance: Understands vote weight mechanics. Knows where proposals are discussed. Can vote via Explorer.
- Pages serving: protocol-influence (comprehensive), governance (mechanics)
- Gap: None significant. Well covered between the two pages.

**J6**: "When I have a high-VRAM GPU (24GB+) but limited LPT, I want to earn from AI inference without active set membership, so I can start immediately."
- Acceptance: AI routing works without high stake. Can check pipeline demand. Sees first AI job within hours.
- Pages serving: ai-workloads-guide, batch-ai-setup, model-vram-reference
- Gap: The AI setup pages don't explicitly say "you don't need LPT for this." The low-barrier AI path isn't prominently surfaced.

**J7**: "When something breaks on my running node, I want to diagnose and fix it quickly, so I can minimise missed rewards and lost jobs."
- Acceptance: Can find my error symptom. Gets actionable fix steps. Knows when to escalate.
- Pages serving: troubleshooting (comprehensive)
- Gap: No quick-reference error lookup. Must scroll a long page.

**Opportunity Solution Tree (scored)**:

| # | Opportunity | Imp | Sat | Score | Evidence |
|---|---|---|---|---|---|
| O1 | "I run video but can't figure out how to add AI" | 9 | 1 | **72** | No hybrid bridge content exists anywhere |
| O2 | "I can't tell which path earns more for my situation" | 9 | 4 | **54** | operator-rationale has decision matrix but no earnings modelling |
| O3 | "I don't know which AI models are worth running" | 8 | 5 | **40** | model-vram-reference has hardware data but not demand/earnings data |
| O4 | "Pricing is confusing — I don't know how to be competitive" | 8 | 1 | **72** | pricing-strategy.mdx is a STUB |
| O5 | "I set up my node but I'm not getting any jobs" | 8 | 6 | **32** | troubleshooting covers this but gateway selection criteria aren't clear |
| O6 | "I want to scale but don't know the right architecture" | 6 | 6 | **24** | O-T setup + large-scale both exist and are complete |
| O7 | "I want to earn from Livepeer but the setup looks complex" | 9 | 5 | **45** | setup-options exists but quickstart → guides handoff is unclear |

**Value Propositions (by job story)**:

- **J1 (idle GPU)**: "Livepeer's orchestrator guides take you from idle GPU to earning revenue, with a clear decision matrix so you pick the right path for your hardware and stake."
- **J2 (add AI to video)**: "Already transcoding? Add AI inference to your existing node and earn from both workloads on the same hardware." — **This value prop has no page to deliver it.**
- **J3 (LPT yield)**: "Maximise your LPT position with reward calling optimisation, competitive pricing, and delegation growth strategies."
- **J4 (commercial)**: "Run production GPU infrastructure for Livepeer-powered products with per-gateway pricing and fleet operations."
- **J6 (AI-first, low LPT)**: "Start earning from AI inference immediately — no active set membership required. Your GPU capability is your entry ticket." — **This value prop is buried. batch-ai-setup doesn't lead with it.**

**Additional job stories from structural proposal (merge analysis)**:

**J-earn**: "When I want to understand and maximise my earnings, I want to see the complete earning picture in one place, so I can make informed decisions about staking, pricing, and delegation."
- Currently fragmented across 2 sections, 7 pages

**J-tune**: "When I have a running node and want to improve performance or add capabilities, I want a guide to tuning options, so I can optimise without re-reading the setup guide."
- Currently homeless: pricing-strategy is in Payments, dual-workload-setup is in Deployment Details, session-limits is deprecated, benchmarking is deprecated, reward calling config is in Staking

---

### Source: `v2/orchestrators/_workspace/research/orchestrator-tab-review-v3.md`

**Title**: "Orchestrator Tab Review v3: Product Thinking Critique"

**Job Stories (6 entries, replacing demographic personas with situational stories)**:

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I have a GPU sitting idle most of the day | earn crypto from its compute cycles | offset the hardware cost |
| J2 | I already run a Livepeer video node and see AI demand growing | add AI workloads to my existing setup | earn from both without running a second node |
| J3 | I have substantial LPT and want to maximise its yield | run a well-performing orchestrator that attracts delegation | compound my position in the active set |
| J4 | My company needs to provide GPU compute at scale for a product (Livepeer Studio, Daydream, custom platform) | operate commercial orchestrator infrastructure | earn service fees under SLAs |
| J5 | I want to participate in governing an open compute protocol | operate a node with meaningful stake | vote on proposals that shape video and AI infrastructure |
| J6 | I have a powerful GPU (24GB+) but limited LPT | earn from AI inference without needing active set membership | start earning immediately |

**Acceptance criteria per story**:
- J1: Can estimate earnings before committing. Can start earning within 4 hours. Does not require buying LPT to start.
- J2: Can add AI to existing config in under 1 hour. Understands VRAM impact. Knows which models are in demand.
- J3: Understands reward calling economics. Can set competitive cut rates. Can monitor delegation growth.
- J4: Can set per-gateway pricing. Understands O-T split for scaling. Has monitoring for SLA compliance.
- J5: Understands governance weight. Knows where proposals are discussed. Can vote via Explorer.
- J6: AI routing works without high stake. Can check which pipelines are in demand. Can verify earnings within 1 day.

**Key insight**: J1 and J6 are the **same person in different situations** (idle GPU) but the v2 review treats them as separate personas.

**Key gap**: J2 (the hybrid add-on) has **no page, no path, no section** — this is the L0 gap identified in the hybrid exercise.

**Non-linear journey paths per job story**:
- J6 (AI-first, low LPT): skips Staking entirely → Considerations → Deployment → Workloads → Payments → Monitor
- J2 (adding AI to video): starts at Workloads, not Considerations
- J3 (LPT maximiser): cares about Staking before Workloads — they stake first, then figure out what to run
- J4 (commercial): needs Payments and Pricing BEFORE Deployment — the business case drives infrastructure decisions

**Opportunity Solution Tree (scored)**:

| # | Opportunity | Importance | Current Satisfaction | Score |
|---|---|---|---|---|
| O1 | "I can't tell if this is worth it before committing" | 9 | 3 | **54** |
| O2 | "I don't know which setup path fits my situation" | 9 | 4 | **45** |
| O3 | "I run video but don't know how to add AI" | 8 | 1 | **56** |
| O4 | "I don't understand the earning model well enough to optimise" | 8 | 4 | **32** |
| O5 | "I can't find my specific error in troubleshooting" | 7 | 5 | **14** |
| O6 | "I want to run at scale but don't know the architecture" | 6 | 4 | **12** |

---

### Source: `v2/orchestrators/_workspace/plans/plan.md`

**Title**: "Orchestrator Documentation Plan" — Consolidated from product-thinking-review.md, orchestrator-tab-review-v3.md, product-thinking-handoff.md, and in-session analysis.

**Job Stories (Canonical, 7 stories — Situation/Motivation/Outcome format)**:

| # | Situation | Motivation | Outcome |
|---|---|---|---|
| J1 | GPU sitting idle | Earn crypto from compute | Offset hardware costs |
| J2 | Already run video, AI demand growing | Add AI to existing node | Earn from both without second machine |
| J3 | Have significant LPT | Maximise yield | Compound position via rewards + delegation |
| J4 | Company needs GPU compute under SLAs | Operate commercial infrastructure | Earn service fees from products |
| J5 | Want to influence open compute | Operate with governance weight | Vote on protocol decisions |
| J6 | Have 24GB+ GPU, limited LPT | Earn from AI without active set | Start earning immediately via capability |
| J7 | Something broke | Diagnose and fix quickly | Minimise missed rewards and lost jobs |

**Page-to-job-story mapping across 9 sections (44 pages)** — selected entries:

| Section | Page | Job stories served |
|---|---|---|
| 1. Operator Considerations | operator-rationale | J1, J3 |
| 1. Operator Considerations | business-case | J4 |
| 1. Operator Considerations | protocol-influence | J5 |
| 2. Deployment Details | setup-options | J1 |
| 2. Deployment Details | join-a-pool | J1 |
| 3. Workloads & AI | workload-landscape | J1, J6 |
| 3. Workloads & AI | ai-inference-operations | J2, J6 |
| 4. Staking & Earning | earning-model | J1, J3 |
| 5. Config & Optimisation | pricing-strategy | J3, J4 |
| 5. Config & Optimisation | dual-mode-configuration | J2 |
| 6. Monitoring & Tools | troubleshooting | J7 |
| 9. Tutorials | zero-to-first-reward | J1 |
| 9. Tutorials | ai-earning-quickstart | J6 |
| 9. Tutorials | add-ai-to-video-node | J2 |

**Key sequencing decisions**: "Dual mode is the default production configuration. Most active operators run both video and AI." Navigator routes by job story situation, not by persona or section sequence.

**Opportunity Scores (Top Gaps from plan)**:

| Score | Opportunity | Status |
|---|---|---|
| 72 | "I run video but can't add AI" (hybrid bridge) | dual-workload-setup.mdx created |
| 72 | "Pricing is confusing" | pricing-strategy.mdx is a STUB |
| 54 | "Can't tell which path earns more" | operator-rationale exists but needs earnings modelling |
| 45 | "Setup looks complex" | quickstart path designed |
| 40 | "Don't know which AI models are worth running" | model-vram-reference needs demand data |

---

### Source: `v2/orchestrators/_workspace/research/L0-hybrid-operator-product-exercise.md`

**Title**: "L0 Product Exercise: The Hybrid Operator Path"

**JTBD framing**: "When I have a GPU sitting idle, I want to earn from both video and AI workloads, so I can maximise my hardware ROI"

**4 opportunities (O1-O4) with solutions**:

**O1: "I don't know if I should set up video or AI first"**
- Score: High importance, low satisfaction
- Solutions: Hybrid-first navigator (default to "both"); hybrid quickstart; decision flowchart mapping GPU VRAM → workload combination

**O2: "I set up video, now I want to add AI, but I have to re-learn everything"**
- Score: High importance, low satisfaction
- Solutions: "Add AI to Your Node" guide page; "Already running video? Start here" accordion on AI workloads guide; flag diff table showing exactly which flags to ADD

**O3: "I'm running both but I don't know if my GPU can handle the combined load"**
- Score: Medium importance, low satisfaction
- Solutions: Hybrid resource section on session-limits (VRAM budget calculator); monitoring alerts for GPU contention; "When to split" decision guide

**O4: "The pricing is confusing — video is per-pixel, AI is per-capability, how do I set both?"**
- Score: Medium importance, medium satisfaction
- Solutions: Unified pricing section covering both -pricePerUnit and -pricePerCapability in one flow; downloadable pricing template configs

**Hybrid-specific customer journey (7 stages)**:

| Stage | Doing | Thinking | Friction | Opportunity |
|---|---|---|---|---|
| Awareness | "Livepeer pays for GPU time?" | "Is this legit? How much can I earn?" | No clear "hybrid earner" messaging | Portal hero should lead with hybrid earning |
| Evaluation | Reading economics, checking Explorer | "Can my 4090 do this? Video AND AI?" | Current page doesn't model hybrid earnings | Decision matrix should default to hybrid |
| Decision | Choosing a path | "Do I do video first or AI first?" | Binary choice when reality is hybrid | Navigator should route to hybrid quickstart |
| Setup | Installing, configuring | "Which flags do I need for both?" | Must stitch video + AI guides manually | Single hybrid setup sequence |
| First Earnings | Checking for jobs, calling rewards | "Is it working? Am I earning?" | Separate verification for video and AI | Unified hybrid health check |
| Optimisation | Adjusting prices, loading models | "How do I earn more from both?" | No hybrid-specific tuning guide | Hybrid tuning page or section |
| Scaling | Considering expansion | "Should I split video and AI?" | No "when to split hybrid" guidance | Clear split criteria |

**Critical moments**: Aha = first winning ticket redeemed + first AI inference job completed (both on same node). Churn trigger = GPU contention causes video job failures, operator disables AI rather than tuning. Advocacy trigger = operator shares earnings screenshot showing both video AND AI revenue.

---

### Source: `workspace/plan/active/CONTENT-WRITING/context-packs/orchestrators-audience-doc.md`

**Status**: DRAFT — awaiting checkpoint. Generated 2026-03-22.

**Jobs to be Done (7 entries, different numbering/framing from canonical)**:

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | I arrive with a GPU and no knowledge of Livepeer | understand whether solo node, pool worker, or AI-first is right for my hardware, stake, and goals | start the correct setup path without wasting time on the wrong one |
| 2 | I've decided to run a node | complete install, configure, and activate in a logical sequence with clear checkpoints | reach a working, job-receiving node with confidence it's set up correctly |
| 3 | I have a running node and want to earn competitively | understand how to set pricing for video and AI workloads | stop leaving earnings on the table and not get overlooked by gateways |
| 4 | I want to add AI inference to my existing transcoding node | follow a clear setup path for AI Runner, models, and pipelines | earn additional fee revenue from AI workloads alongside transcoding |
| 5 | My node is running but not receiving jobs | diagnose the most likely causes quickly and confidently | get back to earning without spelunking Discord for answers |
| 6 | I have GPU hardware but not enough LPT to compete solo | understand the pool worker path and how to join a pool | earn from my GPU without the LPT acquisition barrier |
| 7 | I'm running at scale (10+ GPUs or a GPU fleet) | understand large-scale operations, pool management, and enterprise economics | operate professionally and make informed long-term infrastructure decisions |

**6-stage linear journey with branching note**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Orient & route | `discover` | Learning what orchestrators are; identifying which of three paths (solo, pool, AI-first) matches |
| 2 | Evaluate viability | `evaluate` | Assessing hardware fit, LPT requirements, economics, time commitment |
| 3 | Set up | `setup` | Following chosen path: solo node quickstart, pool worker join, or AI-first node setup |
| 4 | Activate | `setup` | Connecting to network, staking/registering (solo), confirming first job receipt |
| 5 | Operate | `operate` | Monitoring node health, configuring pricing, managing rewards and payments |
| 6 | Optimise | `optimise` | Tuning pricing, adding workloads, scaling infrastructure, managing delegation attraction |

"The journey branches at Position 3. Pool Worker exits after joining a pool (no staking/activation needed). AI Native may skip staking/rewards and go directly to AI workloads."

**On-demand lookup needs**: CLI flags and runtime parameters; competitive pricing benchmarks (video vs AI); VRAM requirements by pipeline and model; contract addresses and Arbitrum references; troubleshooting by symptom; Explorer usage and earnings verification.

---

### Source: `v2/orchestrators/_workspace/plans/dep-personas-and-pages.mdx`

**5 personas (A-E) with "Key Questions at Each Stage" structured as task lists**:

**Persona A — Solo GPU Operator ("The Miner")**:
- Orienting: What is this and is it worth my time? How much will I earn?
- Decision: Should I run a solo orchestrator or join a pool? What LPT do I need?
- Activation: How do I install go-livepeer? How do I configure it? What flags do I need?
- Operational: Why aren't I getting jobs? How do I set price per pixel? How do I monitor earnings?
- Deepening: Should I add AI pipelines to increase income? How?
- Reference: CLI flags, Livepeer Explorer, pricing tools

**Persona B — Pool Worker ("The Easy Earner")**:
- Orienting: What's the difference between a pool worker and a solo orchestrator?
- Activation: How do I join a pool? Do I run go-livepeer differently?
- Operational: How do I check my earnings? How does the pool distribute rewards?

**Persona C — Infrastructure Engineer ("The Pro Operator")**:
- Operational: How do I set up AI Runner containers? What VRAM do I need per pipeline?
- Deepening: How do I set up remote workers (BYOC)? How do I host and manage models? How do I run an orchestrator pool?
- Reference: CLI flags, aiModels.json schema, pricing reference for AI jobs vs transcoding

**Persona D — Enterprise ("The Business")**:
- Orienting: What is the business model? Economics at scale? How does LPT stake affect earnings?
- Decision: Is this worth running as a business? Regulatory/compliance posture?
- Activation: How do we provision infrastructure at scale? Data centre setup guide?
- Operational: Multi-region orchestrators? Publishing offerings?
- Deepening: Running a pool and onboarding other operators?

**Persona E — AI Compute Specialist ("The AI Native")**:
- Orienting: How does the Livepeer AI network work? What pipelines are supported? How is pricing set?
- Decision: What hardware do I need? VRAM minimum per pipeline?
- Activation: Realtime AI quickstart vs batch AI quickstart — which do I choose?
- Operational: How do I configure aiModels.json? Keep models warm? Set pricing?
- Deepening: How do I host custom models (BYOC)? How do remote workers scale?
- Reference: Pipeline docs, model compatibility, CLI flags for AI

**Persona Journey Map structural pattern (8 positions)**:

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

**10-stage orchestrator journey**:

| Stage | What They're Doing | Questions They Need Answered |
|---|---|---|
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

### Source: `v2/orchestrators/_workspace/canonical/review/02-personas.md`

**Alternative framework: situational job stories (from orchestrator-tab-review-v3.md, reproduced in sibling file)**:

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | GPU sitting idle | earn crypto | offset hardware cost |
| J2 | Already run video, see AI demand growing | add AI workloads to existing setup | earn from both without second node |
| J3 | Have substantial LPT | maximise yield | run well-performing orchestrator attracting delegation |
| J4 | Company needs GPU compute at scale | operate commercial orchestrator infra | earn service fees under SLAs |
| J5 | Want to govern open compute protocol | operate node with meaningful stake | vote on proposals |
| J6 | Have 24GB+ GPU but limited LPT | earn from AI inference without active set | start earning immediately |

Key insight: J1 and J6 are the same person in different situations. J2 (hybrid add-on) has NO content in the docs.

**Persona "Wants to leave with" (implicit task definitions)**:
- #1 Independent GPU operator: Clear path identified, first working node running
- #2 AI inference specialist: AI pipelines configured, capabilities advertised, first job received
- #3 Capital-constrained operator: Clear decision — pool, AI-first, or delay solo — and knows how to proceed
- #4 Running operator: Problem resolved or config change applied
- #5 Delegator-turned-operator: Go/no-go decision on running a node vs continuing to delegate

**High-opportunity content gaps (scored)**:

| Gap | Score | Notes |
|---|---|---|
| O3 — Hybrid operator path (adding AI to video) | 56 | No content exists |
| O1 — Worth-it evaluation (ROI/decision matrix) | 54 | |
| O2 — Path selection (job-story navigator) | 45 | |

---

### Source: `v2/orchestrators/_workspace/canonical/review/05-section-structure.md`

**12 sections with entry/exit states mapping to jobs**:

| # | Section | purpose | lifecycleStage | Entry state | Exit state |
|---|---|---|---|---|---|
| S1 | Which path is mine? | `orient` | `discover` | Arrived at tab; has GPU; doesn't know which path | Identified path; navigated to correct start |
| S2 | Is this viable? | `evaluate` | `evaluate` | Identified candidate path | Go/no-go decision made |
| S3 | How does work reach me? | `explain` | `evaluate` | Decided to proceed | Can describe income streams, routing, cuts |
| S4 | Prerequisites | `learn` | `setup` | Chosen path | Hardware confirmed, wallet funded, LPT staked (if needed) |
| S5 | Get your node running | `start` | `setup` | Prerequisites confirmed | Running, registered node |
| S6 | Join as a pool node | `orient` | `evaluate` | Identified as pool candidate | Decision made on pool vs solo vs AI-first |
| S7 | Set pricing and cuts | `configure` | `setup` | Node installed | Pricing set with justification |
| S8 | Set up AI pipelines | `build` | `build` | go-livepeer running; AI not configured | aiModels.json configured; capabilities advertised |
| S9 | Verify your node | `verify` | `setup` | Set up and configured | Discoverable, priced, first job received |
| S10 | Monitor and operate | `operate` | `operate` | Live and receiving work | Monitoring routine in place |
| S11 | Optimise earnings | `optimise` | `optimise` | Operating with monitoring | Identified key variable, made targeted adjustment |
| S12 | Diagnose and fix | `troubleshoot` | `troubleshoot` | In production but experiencing a problem | Root cause diagnosed, fix applied or queued |

**Design flags**: S5 may need to split (serves both solo and pool node operators). S8 may need to split (AI config surface substantially larger than video). S8 BYOC path not covered (custom Docker containers may warrant own page).

---

### Source: `v2/orchestrators/_workspace/canonical/review/07-path-validation.md`

**Persona paths through sections with entry blockers**:

| Persona | Enters | Exits | Blocked? | Knowledge gap |
|---|---|---|---|---|
| Independent GPU operator | S1 | S9 (initial); returns S10-S11 | No | S4 must cover LPT *acquisition* path, not just define LPT. S3 must clarify reward calls are active requirement. |
| AI inference specialist | S1 | S8 or S9 | No | S3 must state active set NOT required for AI. S4 must distinguish AI vs video prerequisites. S8 must address VRAM planning before pipeline selection. |
| Capital-constrained (pool) | S1 → S6 | S6 | No | S4 must clarify LPT NOT required for pool nodes. S6 must give enough context for pool vs solo vs AI-first decision. |
| Running operator (return) | S10, S11, or S12 directly | Same section | No | S12 must distinguish low demand vs low selection vs low margin as separate diagnostic paths. |
| Delegator-turned-operator | S2 | S4 or S5 | No | S2 must surface cost-of-operation comparison (operator earnings vs continued delegation). S7 must address cuts from operator perspective, not delegator's. |

**Entry blockers**:

| Blocker | Affects | Must be addressed before |
|---|---|---|
| LPT stake | Solo video path only | S5 (setup) |
| ETH for gas | All on-chain paths | S5 (setup) |
| Publicly reachable service URI | All paths | S5 (setup) — node registration |
| VRAM capacity | AI inference path | S8 (AI setup) — model selection |
| Pool membership arrangement | Pool node path | S6 — not self-serviceable from docs |
| Capability advertisement | AI path | S9 (verify) — gateways must see capabilities |

**5 gap notes for content briefs**:
1. S3: Add explicit statement that active set membership is NOT required for AI inference routing
2. S4: Separate LPT acquisition instructions from general prerequisites; mark LPT section as "solo video path only"
3. S4: Make explicit that pool node operators do NOT need LPT
4. S7: Address cut settings from the operator's perspective — not from the delegator's
5. S12: Structure as three distinct diagnostic paths: low work volume, operational errors, performance score degradation

---

### Source: `v2/orchestrators/_workspace/canonical/Frameworks.mdx`

**Content pipeline — L2 Tab level requires "JTBD matrix"**:

| Level | Name | What happens | Output |
|---|---|---|---|
| L1 | Site | Map audiences, cross-tab journeys, tab ownership | `site-map.md` |
| L2 | Tab | Personas, entry vectors, JTBD matrix, linear journey | `tab-audience-doc.md` |

**Definition of Good — Tab level**: "Primary audience journey complete: entry → depth → exit. On-demand sections exist for every major post-activation need. At least 3 cross-tab links at journey intersections."

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

---

### Source: `v2/orchestrators/_workspace/handoff/product-thinking-handoff.md`

**Reader job statement**: "Choose the lowest-risk path from evaluation to first earnings and understand where to go next for setup, workload expansion, pricing, and gateway-selection questions without stitching together overlapping or conflicting guide branches."

**3 concrete reader decisions the handoff must support**:
1. Choose between pool worker, standard solo operator, dual-workload operator, or advanced split / fleet setups.
2. Choose between video-only, AI-first, or dual-workload operation based on hardware, stake, and operating goals.
3. Choose the next page to read for evaluation, deployment, workload execution, or gateway optimisation.

**Outcome statement**: "Enable orchestrator readers with GPU hardware to choose the right workload and deployment path, reach the correct next page in one hop, and understand where dual-workload, economics, and gateway-routing questions belong so they can move from evaluation to first earnings without stitching together overlapping guides."

**Trigger questions (what brings the reader to the tab)**:
- Should I run an orchestrator at all, or should I join a pool?
- If I run one, should I stay video-only, AI-only, or run both workloads on the same node?
- If I already run video, what changes are required to add AI without starting over?
- If I am live but not earning, is the issue stake, pricing, capabilities, or gateway selection?

---

### Source: `v2/orchestrators/_workspace/drafts/docs-section-planning-playbook.md`

**Step 2a — Canonical JTBD process**:
- Write 6-10 job stories using JTBD format: "When [situation], I want to [motivation], so I can [outcome]"
- Each with 3-6 acceptance criteria
- Cover the full lifecycle: evaluation, setup, operation, scaling, troubleshooting
- Do NOT use personas — use situations

**Step 2d — Customer journey map process**:
- Map primary job story through 7 stages: Awareness → Evaluation → Decision → Setup → First Value → Optimisation → Scaling
- Document: touchpoint, thinking, feeling, friction, opportunity per stage
- Identify critical moments: aha, churn trigger, advocacy trigger

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
| A: Solo Miner (1-4 consumer GPUs) | Pos 2-3 |
| B: Pool Worker (single GPU, lacks LPT) | Pos 3 |
| C: Pro Operator (4-20 GPUs, devops) | Pos 4-5 |
| D: Enterprise (100+ GPUs, commercial) | Pos 2-3 |
| E: AI Native (24GB+ VRAM, no crypto background) | Pos 3 |

**Persona A key questions at each stage**: Orienting: "What is this and is it worth my time?" Decision: "Solo or pool? What LPT do I need?" Activation: "How do I install, configure, set flags?" Operational: "Why no jobs? How to set price per pixel?" Deepening: "Should I add AI pipelines?" Reference: "CLI flags, Explorer, pricing tools."

**Self-identification problem**: "People don't arrive at docs thinking 'I'm a Gateway Operator.' They arrive thinking 'I'm a developer' or 'I want to build something.'" Route by goal, not by label. "I want to earn with my GPUs" → Orchestrator.

---

### Source: `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/01_01.-Audience-&-Persona-Mapping-&-Definitions/index.md`

**Orchestrator defined as persona #4**:
- Primary function: "Provide compute + capital + governance"
- Self-identifies as: "Miner," "GPU operator," "node operator," "infrastructure provider"
- Technical depth: Deepest technical role in the ecosystem

**Activation moment**: "First winning ticket + first AI inference job"

**Audience token**: `orchestrator` — arriving question: "How do I set up, run, and earn with a node?"

---

### Summary: comparison of job story sets across sources

| Source | Job count | Format | Key difference from this file's J1-J7 |
|---|---|---|---|
| Canonical audience design (collated) | 7 (J1-J7) | When/I want to/So I can | Identical to this file — this file IS the canonical set |
| Product-thinking-review.md | 7 (J1-J7) + 2 (J-earn, J-tune) | When/I want to/So I can + acceptance criteria + gap analysis | Adds acceptance criteria and page-gap mapping per story; J-earn and J-tune are structural merge stories |
| orchestrator-tab-review-v3.md | 6 (J1-J6) | When/I want to/So I can + acceptance criteria | No J7 (troubleshooting). Notes J1/J6 are same person in different situations. Notes J2 has zero content. |
| plan.md | 7 (J1-J7) | Situation/Motivation/Outcome | Compressed format; adds page-to-job mapping for all 44 pages |
| L0-hybrid-operator-product-exercise.md | 1 (hybrid JTBD) | Single story + 4 opportunities | Hybrid-specific: "earn from both video and AI workloads" |
| orchestrators-audience-doc.md (draft) | 7 (numbered 1-7) | When/I want to/So I can | Different framing; J7 = enterprise/scale (not troubleshooting); J2 = general setup (not AI add-on) |
| dep-personas-and-pages.mdx | 5 personas × 5-6 stages | Key questions per stage per persona | Task-oriented questions, not JTBD format |
| 02-personas.md (sibling) | 6 (J1-J6) | When/I want to/So I can (abbreviated) | Reproduced from orchestrator-tab-review-v3.md |
| product-thinking-handoff.md | 4 trigger questions | Reader decisions | Decision-oriented, not JTBD format |
