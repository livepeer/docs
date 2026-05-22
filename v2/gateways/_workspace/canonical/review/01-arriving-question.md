# Part 1: Arriving Question

**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## The question driving the entire tab

> "I have GPU hardware — how do I connect it to the Livepeer network and start earning from it, and which path is right for my hardware and capital situation?"

---

## How this was derived

All four runs produced variants of a GPU-hardware-to-earning question:
- RUN-A + RUN-D: most direct formulation
- RUN-B: added "don't miss rewards" emphasis (reward call concern)
- RUN-C: emphasised path-selection decision ("given my hardware, capital, and goals")

The canonical question synthesises the hardware-to-earning core (unanimous) with the path-selection element (3-run presence).

---

## Review questions

### Does it reflect reality?

1. Is this actually why orchestrators come to the docs?
2. Does it cover both new arrivals AND returning operators?
3. Is the "which path" part important enough to be in the core question, or is it secondary?
4. Is there a completely different question that should drive this tab?
5. What situation triggers a visit to this tab? What just happened before they arrived?
6. What do they know at arrival? What do they NOT know yet?

### Is it well-formed?

7. Is it **specific** — an actual question a real person asks, not a topic? (Good: "Can I run a gateway without holding LPT?" Bad: "How do gateways work?")
8. Is it derived from **first principles** — not from current nav labels or page titles?
9. Is it **answerable and completable within one tab visit**?
10. Does it capture the **primary persona's arrival state** accurately?
11. Does it address the **primary entry blocker** or decision point?
12. Is it **expressible in the audience's own language** — not network jargon they haven't learned yet?

### Does it work for all personas?

13. Can persona #1 (independent GPU operator) answer this question by exiting the tab?
14. Can persona #2 (AI inference specialist) answer it?
15. Can persona #3 (capital-constrained / pool) answer it?
16. Can persona #4 (returning operator) answer it? — or does this question only serve first-timers?
17. Can persona #5 (delegator-turned-operator) answer it?

### Common failure modes to check

| Failure | Signal | Fix |
|---|---|---|
| **Topic not question** | Could be answered by reading a section title | Reframe as personal friction: "Can I do X without Y?" |
| **Too generic** | Could apply to multiple audiences | Add specificity: role, hardware, capital, or path constraint |
| **Assumes prior knowledge** | Uses terms like "active set" or "LPT" without intro | Rewrite in plain language |
| **Unresolvable in scope** | Requires info from another tab to answer | Refactor to what CAN be answered here |
| **Overlooks blockers** | Doesn't surface the real thing preventing progress | Surface what prevents the first actionable step |
| **Ignores multi-path** | Implies one path when multiple exist (solo vs pool vs AI) | Make path-selection explicit or defer to S1 routing |

---

## What this question feeds downstream

The arriving question is the single highest-level requirement. Everything else must serve it:

- **Jobs** (Part 3) — must resolve aspects of this question
- **Section sequence** (Part 5) — must answer it progressively
- **Path validation** (Part 7) — each persona must be able to answer it by exit
- **IA audit** — all navigation decisions must support it

If this question is wrong, everything downstream is wrong.

---

## Existing research (raw — for reference)

Research collected 2026-03-23. Grouped by source file path. Covers all arriving question formulations, synthesis notes, quality criteria, prompt testing learnings, validation checks, entry vectors, self-identification research, and pack-guide definitions found across the three searched directories.

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/collated/canonical-orchestrators-audience-design.md`

**Status**: CANONICAL — ready for Phase 2 input. Synthesised from 4 AI runs (Claude agent, Claude web, ChatGPT, Perplexity).

**Arriving Question**:

> "I have GPU hardware — how do I connect it to the Livepeer network and start earning from it, and which path is right for my hardware and capital situation?"

**Synthesis note**: All four runs produced variants of a GPU-hardware-to-earning question. RUN-A and RUN-D produced the most direct formulation; RUN-B added the "don't miss rewards" emphasis (reward call concern); RUN-C emphasised the path-selection decision ("given my hardware, capital, and goals"). The canonical question synthesises the hardware-to-earning core (unanimous) with the path-selection element (strong 3-run presence).

**Self-identification**: Four out of four runs determined that a dedicated disambiguation section is required as the first content section. Self-identifying label "GPU operator" or "node operator" maps to at least three meaningfully different setup paths (solo video/dual, AI-focused, pool node) with different requirements, economics, and configuration surfaces. The reader cannot identify their correct path without reading some content first. Canonical decision: **dedicated disambiguation section** as S1.

**Entry blockers** (things preventing arrival question resolution):
- **LPT stake** (solo video transcoding path): Hard-stop blocker for active set eligibility. A reader who discovers mid-setup that they need significant bonded stake will stall. The section explaining LPT acquisition and staking must appear before the solo video setup section. The pool node path and AI-only path bypass this blocker — the disambiguation section must make this visible before either path begins.
- **ETH for gas** (all on-chain paths): All reward calls, ticket redemptions, and activation transactions cost ETH gas on Arbitrum. Must be addressed in prerequisites before setup instructions begin.
- **Publicly reachable service URI** (all paths): A node without a reachable service URI cannot receive routed work. Network and firewall configuration must be resolved before the node is registered on-chain.
- **VRAM capacity** (AI inference path): AI pipelines require minimum VRAM to load models. Affects which pipelines an operator can configure and must be addressed in AI setup before model selection.
- **Pool membership arrangement** (pool node path): A pool node candidate must find and arrange a connection with a pool operator before any setup makes sense. This is not self-serviceable from the documentation alone.
- **Capability advertisement** (AI path): An AI operator who configures models but does not understand capability advertisement cannot verify that gateways will route AI work to them. Must be covered before verification section.

Section order consequence: Disambiguation → path viability assessment → payment mechanics → prerequisites → solo node setup OR pool node section → AI pipeline setup → verification → operations → optimisation → troubleshooting.

**Persona entry vectors** (from the same file):

| Rank | Persona | Entry vector |
|---|---|---|
| 1 | Independent GPU operator | Search ("livepeer orchestrator setup", "earn with GPU"), Discord referral, mining/crypto community forum, Foundation blog post |
| 2 | AI inference specialist | Livepeer AI blog post, Discord `#ai-video`, AI/ML community referral |
| 3 | Capital-constrained operator | Discord thread, search ("join Livepeer without staking", "pool node livepeer"), referral from pool operator |
| 4 | Running operator (return visit) | Bookmark, direct URL, Discord link to specific doc, search for specific error message |
| 5 | Delegator-turned-operator | Delegators tab CTA, forum thread, community discussion |

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/collated/collation-notes-orchestrators.md`

**Status**: Collation notes — produced alongside the canonical output.

**Per-run arriving question inventory**:

| Run | Arriving question |
|---|---|
| RUN-A (Agent) | "I have GPU hardware — how do I connect it to the Livepeer network and start earning from it?" |
| RUN-B (Claude Web) | "I have GPU hardware — how do I connect it to Livepeer, start earning fees, and make sure I don't miss out on jobs or rewards?" |
| RUN-C (ChatGPT) | "Given my hardware, capital, and goals, what is the right way for me to run supply on Livepeer — and what do I need to do first to start earning work reliably?" |
| RUN-D (Perplexity) | "I have idle GPU hardware — can I earn money from it by connecting it to this network, and what would I actually need to do?" |

**Primary persona (drives arriving question)**: Independent GPU operator — unanimous across all four runs. Drives section structure. All other personas accommodated within this structure.

**Primary persona tie-break (Open Item 5)**: RUN-A identified a scoring tie between solo video operator (9) and solo AI inference operator (9). RUN-A broke the tie in favour of video on grounds that video is the more established path and the LPT blocker is the most significant structural constraint. The other three runs did not score these as competing primaries — they used a broader "independent GPU operator" framing that subsumes both paths. Analytics data on actual tab entry patterns (video-focused arrivals vs AI-focused arrivals) would allow an evidence-based decision. If AI inference arrivals now exceed video transcoding arrivals as the primary use case, the primary persona designation should be reconsidered and section ordering may need to change.

**Run quality notes relevant to arriving question**:

- **RUN-C (ChatGPT)** — produced the most concise arriving question ("Given my hardware, capital, and goals, what is the right way for me to run supply on Livepeer — and what do I need to do first to start earning work reliably?") which most precisely captures the decision-orientation of this audience. Best at surfacing source-level conflicts in the terminology phase.
- **RUN-D (Perplexity)** — produced the most practically-oriented arriving question ("I have idle GPU hardware — can I earn money from it by connecting it to this network, and what would I actually need to do?") which most closely matches the literal language of this audience.

---

### Source: `workspace/plan/active/CONTENT-WRITING/context-packs/orchestrators-audience-doc.md`

**Status**: DRAFT — awaiting checkpoint. Generated 2026-03-22. Sources: orchestrators-ia-map.md, orchestrator-tab-review-v3.md, dep-personas-and-pages.mdx.

**Arriving Question**: "Can my GPU earn on this network, and what exactly do I need to do to get there?"

**Self-identification**: Visitors self-identify as "GPU operator" or "node operator" — these labels map to at least three distinct situations (solo node, pool worker, AI-focused node). **Disambiguation required.** The tab landing page must route personas to the correct path before any setup content begins.

**Entry blockers**:
- **LPT acquisition** — Solo Miner must acquire and stake LPT before earning. This is a hard-stop blocker that deters many entrants. The section that explains the LPT requirement must appear before the solo quickstart, with the pool worker path presented as an explicit alternative for those who cannot or will not acquire LPT.
- **Realtime vs batch AI distinction** — AI Native arrives expecting to "run AI inference" without knowing Livepeer distinguishes realtime pipeline AI from batch AI. Wrong-path setup wastes hours. Must be clarified before the AI quickstart.

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/validation-check.md`

**Status**: Check B — Canonical Design Alignment Validation. APPROVED FOR PHASE 2.

**Phase 3 input requirements checked against arriving question**:

| Phase 3 input requirement | Present in canonical output? | Notes |
|---|---|---|
| Arriving question | Yes — "I have GPU hardware — how do I connect it to the Livepeer network and start earning from it, and which path is right for my hardware and capital situation?" | |
| Primary persona | Yes — Independent GPU operator (unanimous 4/4) | |

**Check 4 — Personas: Complete Entry Question, Knowledge Gap, JTBD**:

| Persona | Entry question present? | Knowledge gap documented? | JTBD clear? |
|---|---|---|---|
| Independent GPU operator (solo video/dual) | Yes — path identification via S1 | Yes — S4 must cover LPT acquisition path, S3 must clarify reward calls are active requirement | Yes — J1–J4, J7 |
| AI inference specialist | Yes — AI path via S1 | Yes — S3 must clarify active set not required for AI inference; S4 must distinguish AI prerequisites | Yes — J1, J2, J6 |
| Capital-constrained operator (pool node path) | Yes — S1 routes to S6 | Yes — S4 must explicitly state pool node operators do not need LPT | Yes — J1, J2 |
| Running operator (return visit) | Yes — enters S10, S11, or S12 directly | Yes — S12 must distinguish diagnostic paths (low demand vs low selection vs low margin) | Yes — J5, J7 |
| Delegator-turned-operator | Yes — S2 viability assessment | Yes — S2 must surface cost-of-operation framing; S7 must address cuts from operator perspective | Yes — J1, J6 |

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/pack-guide.md`

**Status**: Phase 1 pack guide — defines quality criteria for arriving questions.

**What Good Output Looks Like** (arriving question quality criteria):

**Good arriving question**: "Can I run a gateway without holding LPT?" — specific, answerable, reveals real friction.
**Bad arriving question**: "How do gateways work?" — a topic, not a question a real person asks.

**Common Failure Modes** (arriving question relevant):

| Failure | Signal | Fix |
|---|---|---|
| Generic personas | Persona names are role labels, not arriving situations | Delete and re-run; push for specificity in arriving state |
| Jobs mirror current nav | Job descriptions match section titles in the current sidebar | Explicitly tell AI: "Do not look at the current structure. What would this person actually do?" |

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/audience-design-v5.md`

**Status**: Current prompt version — defines how arriving questions are derived.

**Phase 1 derivation instructions** (arriving question):

"No arriving question pre-filled. Derive it from first principles."

For the TAB and AUDIENCE in the context block, answer:

1. What situation triggers a visit to this tab? What just happened before they arrived?
2. What do they know at arrival? What do they not know yet?
3. What single question most accurately captures what they need to answer? (This is the arriving question — specific, not a topic.)
4. What does a successful visit look like? A concrete action completed or decision made — not "understanding X."
5. What are the most common wrong-path risks — misconceptions or misrouting at arrival?

**Quality Gate**: "Arriving question is specific — not a topic, an actual question the reader would ask?"

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/audience-design-collation-v2.md`

**Status**: Collation prompt — defines how arriving questions are synthesised across runs.

**Checkpoint**: "Arriving question specific — not a topic?"

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/learnings/v1.md`

**Status**: v1 prompt testing learnings (3 runs: Claude Sonnet agent, Claude web, ChatGPT).

**Arriving question convergence finding**: "ChatGPT's arriving question was notably more complex: 'Given my hardware, stake position, and operating goal, what is the right way to join Livepeer supply and get to my first paid work without taking the wrong path?' — captures the multi-variable decision better than the simpler formulations in the other runs."

**Self-identification finding**: "All three flagged that 'operator' is ambiguous and that disambiguation routing must be the first section."

**Entry blockers found**: LPT acquisition, VRAM requirements, and public reachability all surfaced across runs.

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/learnings/v2.md`

**Status**: v2 prompt testing learnings (4 runs: Claude Sonnet agent, Claude web UI, Perplexity, additional Claude run).

**Arriving question convergence**: "All four produced an arriving question centred on hardware + earning + 'what does it take'. This is stronger than v1, which had more variation."

**Self-identification finding**: "Three of four runs: 'Disambiguation required — routing page needed as first section.' One run (Perplexity): 'No disambiguation page required — label maps cleanly; routing callout in Section 2 handles it.' These are structurally different outputs."

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/learnings/v3.md`

**Status**: v3 prompt testing learnings (3 runs: Claude run 1, Claude run 2, Perplexity).

**Self-identification finding**: "All three correctly identified 'GPU operator' as mapping to 3+ distinct setup paths and correctly chose the dedicated disambiguation section rather than a routing callout."

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/learnings/v4.md`

**Status**: v4 prompt testing learnings (4 runs: Claude Agent, Claude Web, ChatGPT, Perplexity). All v4 fixes confirmed working.

(No new arriving question findings beyond what is captured in the collation notes. v4 learnings focus on LIP-92 testing, pageType navigation on disambiguation section, and section load flag.)

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/learnings/v5.md`

**Status**: v5 learnings — single Agent run only. v4 canonical output takes precedence.

**v5 arriving question**: "I have GPU hardware — what does it take to actually start earning on Livepeer, and is it worth it for my setup?"

**Finding**: "Arriving question is specific and hardware-focused (correct for this audience)." Consistent with v4 canonical arriving question. No divergence on the arriving question itself.

---

### Source: All individual run outputs — arriving question inventory across all versions

**Complete arriving question history (15 runs across 5 prompt versions)**:

| Version | Run | Arriving question |
|---|---|---|
| v1 | Claude Sonnet (agent) | "I have GPU hardware — can I connect it to this network and earn from it, and if so, what do I need to do first?" |
| v1 | Claude web | "I have GPU hardware — can I actually earn money running it on this network, and what do I have to do to get there?" |
| v1 | ChatGPT | "Given my hardware, stake position, and operating goal, what is the right way to join Livepeer supply and get to my first paid work without taking the wrong path?" |
| v2 | Claude Sonnet (agent) | "Given my hardware, stake, and workload goal, which operating path should I choose and what do I need to do first to get paid work flowing safely?" |
| v2 | Claude web UI | "I have GPU hardware — can I actually earn from it on this network, and what does it take to get started?" |
| v2 | Perplexity | "I have GPU hardware — how do I connect it to Livepeer and start earning?" |
| v2 | Claude Sonnet v2 | "I have GPU hardware — can I earn by connecting it to this network, and what do I actually need to do to get started?" |
| v3 | Claude run 1 | "Given my hardware, capital, and workload intent, what exact operating path should I choose to get this machine earning on Livepeer without setting it up wrong?" |
| v3 | Claude run 2 | "I have GPU hardware — can I earn money connecting it to this network, and what do I actually have to do to get set up?" |
| v3 | Perplexity | "I have GPU hardware — can I earn money from it on this network, and what do I actually need to do to get set up and start receiving jobs?" |
| v4 | Agent (RUN-A) | "I have GPU hardware — how do I connect it to the Livepeer network and start earning from it?" |
| v4 | Claude Web (RUN-B) | "I have GPU hardware — how do I connect it to Livepeer, start earning fees, and make sure I don't miss out on jobs or rewards?" |
| v4 | ChatGPT (RUN-C) | "Given my hardware, capital, and goals, what is the right way for me to run supply on Livepeer — and what do I need to do first to start earning work reliably?" |
| v4 | Perplexity (RUN-D) | "I have idle GPU hardware — can I earn money from it by connecting it to this network, and what would I actually need to do?" |
| v5 | Agent | "I have GPU hardware — what does it take to actually start earning on Livepeer, and is it worth it for my setup?" |

**Convergence pattern**: All 15 runs centre on hardware + earning + "what does it take." Two distinct formulation families emerge: (a) "I have GPU hardware — can I earn?" (direct, 11 runs) and (b) "Given my hardware, capital, and goals — which path?" (decision-oriented, 4 runs). The canonical question combines both families.

---

### Source: `workspace/plan/active/CONTENT-WRITING/content-pipeline-canonical.md`

**Status**: Content pipeline canonical reference.

**Phase 1.2 (Tab Level) purpose**: "Understand each tab's audience, arriving question, and reader journey. Define what the tab needs to deliver for its primary audience from entry to depth."

**Phase 1.2 artefact**: "Tab context document — Per-tab: audience, arriving question, journey, canonical sections."

---

### Source: `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/02_02.-Personas-Journey-Alignment/index.md`

**Status**: Personas-Journey-Alignment — earlier audience taxonomy with per-token arriving questions.

**Audience taxonomy arriving question for orchestrator**:

| Token | Who They Are | Arriving Question | Primary Section |
|---|---|---|---|
| `orchestrator` | Running GPU nodes / orchestrator infrastructure | "How do I set up, run, and earn with a node?" | GPU Nodes |

**The Persona Self-Identification Problem**: "People don't arrive at docs thinking 'I'm a Gateway Operator.' They arrive thinking 'I'm a developer' or 'I want to build something.'" Mapping: "I want to earn with my GPUs" → Orchestrator (GPU Nodes tab).

**Orchestrator persona core questions by stage**:

| Persona | Name | Core Question |
|---|---|---|
| A | The Solo GPU Operator ("The Miner") | "Can I earn from my GPU?" |
| B | The Pool Worker ("The Easy Earner") | "Simplest path to earnings?" |
| C | The Infrastructure Engineer ("The Pro Operator") | "How do I add AI to my setup?" |
| D | The Enterprise ("The Business") | "What's the business case at scale?" |
| E | The AI Native ("The AI Native") | "How does Livepeer AI work?" |

**Persona A key questions at each stage**: Orienting: "What is this and is it worth my time?" Decision: "Solo or pool? What LPT do I need?" Activation: "How do I install, configure, set flags?" Operational: "Why no jobs? How to set price per pixel?" Deepening: "Should I add AI pipelines?" Reference: "CLI flags, Explorer, pricing tools."

---

### Source: `v2/orchestrators/_workspace/research/orchestrator-tab-review.md`

**Status**: Earlier tab review — per-persona core questions.

**Per-persona core questions**:

| Persona | Core Question |
|---|---|
| A: The Solo GPU Operator ("The Miner") | "Can I earn from my GPU?" |
| B: The Pool Worker ("The Easy Earner") | "Simplest path to earnings?" |
| C: The Infrastructure Engineer ("The Pro Operator") | "How do I add AI to my setup?" |
| D: The Enterprise ("The Business") | "What's the business case at scale?" |
| E: The AI Native ("The AI Native") | "How does Livepeer AI work?" |

---

### Source: `v2/orchestrators/_workspace/plans/product-thinking-review.md`

**Status**: Product Thinking Review — customer journey and entry point analysis.

**Customer Journey Map (J1: GPU owner wanting earnings)** — first touchpoint (evaluation stage):

| Stage | Touchpoint | Thinking | Feeling | Friction | Opportunity |
|---|---|---|---|---|---|
| Evaluation | operator-rationale | "Is this worth my 4090's time?" | Calculating | Page is 439 lines, dense | Scannable decision matrix at top |

**Entry point assumption tested**: "operator-rationale is the right entry point for 'should I?'" — flagged as Usability concern: "It's 439 lines. May be too long for an evaluation page."

**First visit moment (from Critique 7 — Customer Journey Has No 'Aha Moment' Design)**:

| Moment | What happens | Should happen |
|---|---|---|
| First visit | Operator lands on portal | Job-story routing: "What's your situation?" |
| Worth-it check | Operator evaluates ROI | Interactive calculator or quick decision matrix |

---

### Source: `v2/orchestrators/_workspace/research/orchestrator-tab-review-v3.md`

**Status**: Product Thinking Critique — non-linear journey analysis.

**Critique 3 — The Section Order Assumes a Linear Journey** (affects arriving question resolution paths):

> "This is a waterfall journey. Real operators don't move linearly:
> - J6 (AI-first, low LPT) skips Staking entirely and goes Considerations → Deployment → Workloads → Payments → Monitor
> - J2 (adding AI to video) starts at Workloads, not Considerations
> - J3 (LPT maximiser) cares about Staking before Workloads — they stake first, then figure out what to run
> - J4 (commercial) needs Payments and Pricing BEFORE Deployment — the business case drives infrastructure decisions"

**Implication for arriving question**: The arriving question must accommodate multiple non-linear entry points. J2 and J4 arrive with a different version of the question than J1 and J6.

---

### Source: `v2/orchestrators/_workspace/research/L0-hybrid-operator-product-exercise.md`

**Status**: Hybrid Operator Product Exercise — "Sam", ML engineer with RTX 4090.

**Arrival thinking** (Awareness stage): "Livepeer pays for GPU time?" → "Is this legit? How much can I earn?" (Curious, sceptical.)

**Friction at arrival**: No clear "hybrid earner" messaging. Portal hero should lead with hybrid earning.

**Evaluation stage question**: "Can my 4090 do this? Video AND AI?" (Calculating, comparing.) Friction: Current page doesn't model hybrid earnings.

---

### Source: `v2/orchestrators/_workspace/plans/plan.md`

**Status**: Section plan — job stories that drive the arriving question.

**Job Stories (Canonical, 7 stories)** — the situations that trigger a visit:

| # | Situation | Motivation | Outcome |
|---|---|---|---|
| J1 | GPU sitting idle | Earn crypto from compute | Offset hardware costs |
| J2 | Already run video, AI demand growing | Add AI to existing node | Earn from both without second machine |
| J3 | Have significant LPT | Maximise yield | Compound position via rewards + delegation |
| J4 | Company needs GPU compute under SLAs | Operate commercial infrastructure | Earn service fees from products |
| J5 | Want to influence open compute | Operate with governance weight | Vote on protocol decisions |
| J6 | Have 24GB+ GPU, limited LPT | Earn from AI without active set | Start earning immediately via capability |
| J7 | Something broke | Diagnose and fix quickly | Minimise missed rewards and lost jobs |

---

### Source: `v2/orchestrators/_workspace/canonical/review/05-section-structure.md`

**Status**: Canonical section structure — S1 entry state directly tied to arriving question.

**S1 entry/exit state (arriving question resolution starts here)**:

| # | Section | lifecycleStage | Entry state | Exit state |
|---|---|---|---|---|
| S1 | Which path is mine? | `discover` | Arrived at tab; has GPU; doesn't know which path | Identified path; navigated to correct start |

---

### Source: `v2/orchestrators/_workspace/canonical/review/07-path-validation.md`

**Status**: Canonical path validation — persona paths through arriving question resolution.

**Persona entry points** (where each persona enters to answer the arriving question):

| Persona | Enters | Exits | Blocked? |
|---|---|---|---|
| Independent GPU operator | S1 | S9 (initial); returns S10-S11 | No |
| AI inference specialist | S1 | S8 or S9 | No |
| Capital-constrained (pool) | S1 → S6 | S6 | No |
| Running operator (return) | S10, S11, or S12 directly | Same section | No |
| Delegator-turned-operator | S2 | S4 or S5 | No |

---

### Source: `docs-guide/frameworks/content-system.mdx`

**Status**: Content Layers model — arriving question maps to Layer 1.

**Content Layers**:
- Layer 1 (Product and Positioning): value proposition and context framing; user journey entry points; concise decision-oriented summaries.
- Layer 2 (Operational How-to): setup, runbooks, migration/checklist pages; practical workflows with expected outcomes.
- Layer 3 (Deep Reference): APIs, schema/spec docs, command matrices; troubleshooting and edge-case documentation.

The arriving question is a Layer 1 concern — it drives the entry point and decision-oriented framing.

---

### Source: `workspace/plan/active/ORCHS/01-CORE-NEEDS-AND-STANDARDS.md`

**Status**: Orchestrators Tab — Core Needs & Copywriting Standards. Single reference for every content pass on the orchestrators tab.

**Core need (the one job)**: "Help a GPU operator go from 'I have hardware' to 'I am earning' — with zero ambiguity at every step."

**Arriving question (canonical, restated)**: "I have GPU hardware — how do I connect it to the Livepeer network and start earning from it, and which path is right for my hardware and capital situation?"

**Rule**: All content answers a sub-question of this. If a page cannot trace its reason back to this question, it does not belong in the tab. Primary persona: Independent GPU operator choosing a path (Volume: 3, Depth: 3, Impact: 3, Total: 9, Consensus: 4/4).

---

### Source: `v2/orchestrators/_workspace/canonical/review/DRAFT-ANSWERS.md`

**Status**: Draft answers to all 12 review questions — generated from research in review files 01–07.

**Q1 (is this why they come?)**: Yes. Product-thinking-handoff.md confirms trigger questions: "Should I run an orchestrator at all?", "Should I stay video-only, AI-only, or run both?" The dep-personas-and-pages.mdx activation test: "zero to a registered orchestrator that processes at least one job." Returning operators (persona #4, volume 3/3) come for different reasons — they need a specific answer, not the arriving question. Confidence: HIGH.

**Q2 (covers returning operators?)**: Correctly does NOT cover returning operators. Returning operators enter at S10/S11/S12 directly; they bypass the arriving question entirely. Confidence: HIGH.

**Q3 (is "which path" important?)**: Belongs in the core question. Three of four runs included path-selection. Product-thinking-review.md scores path-selection confusion at importance 9, satisfaction 4 (opportunity score 45). Without "which path," the question becomes generic and fails to surface the real decision point. Confidence: HIGH.

**Q4 (completely different question?)**: No. The earlier draft from orchestrators-audience-doc.md ("Can my GPU earn on this network, and what exactly do I need to do to get there?") is the same core question. Product-thinking-handoff.md reader job: "Choose the lowest-risk path from evaluation to first earnings." All sources converge. Confidence: HIGH.

**Q5 (what triggers a visit?)**: Most common: GPU hardware available + just learned Livepeer pays for GPU compute. Entry vectors: Discord, mining/crypto community forum, AI blog, Foundation blog, search "livepeer orchestrator setup." Second trigger: existing video operator sees AI demand. Third: delegator considers running own node. Fourth: something broke. L0-hybrid-operator-product-exercise.md: awareness stage begins with "Livepeer pays for GPU time?" followed by "Is this legit? How much can I earn?" Confidence: HIGH.

**Q6 (what do they know / not know?)**: Know: GPU hardware, Linux/CLI skills, Livepeer pays for GPU. Do NOT know: which path, whether LPT needed, how work gets routed, earning mechanics (fees vs inflation), what "active set" means, video vs AI routing differences, realistic earning potential, operational requirements (reward calls, monitoring, pricing). Confidence: HIGH.

**Q7–Q12 (well-formed checks)**: All PASS with HIGH confidence. Specific (not a topic), derived from first principles (not nav labels), answerable in one tab visit (S1 for path, S9 for earning), captures primary persona accurately, addresses primary entry blocker (path confusion + LPT), expressible in audience language (no jargon).

---

### Source: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/3-content-pass/pack-guide.md`

**Status**: Content pass pack guide — defines how arriving question is used during content review.

**Relevance to arriving question**: Arriving question serves as persona fit check input during content pass. Pack-guide warns against generic persona fit checks: "Push: 'Which sections serve this persona's arriving question? Which don't? Quote the text.'" This ensures the arriving question is used as a quality gate on every page in the tab, not just at Phase 1.

---

### Summary of arriving question formulations found

| Source | Arriving question | Type |
|---|---|---|
| Canonical (collated, v4) | "I have GPU hardware — how do I connect it to the Livepeer network and start earning from it, and which path is right for my hardware and capital situation?" | CANONICAL |
| Audience doc (draft, 2026-03-22) | "Can my GPU earn on this network, and what exactly do I need to do to get there?" | DRAFT |
| Personas-Journey-Alignment (earlier) | "How do I set up, run, and earn with a node?" | TAXONOMY |
| v5 Agent (single run) | "I have GPU hardware — what does it take to actually start earning on Livepeer, and is it worth it for my setup?" | TEST RUN |
| v4 RUN-A | "I have GPU hardware — how do I connect it to the Livepeer network and start earning from it?" | TEST RUN |
| v4 RUN-B | "I have GPU hardware — how do I connect it to Livepeer, start earning fees, and make sure I don't miss out on jobs or rewards?" | TEST RUN |
| v4 RUN-C | "Given my hardware, capital, and goals, what is the right way for me to run supply on Livepeer — and what do I need to do first to start earning work reliably?" | TEST RUN |
| v4 RUN-D | "I have idle GPU hardware — can I earn money from it by connecting it to this network, and what would I actually need to do?" | TEST RUN |

**Two formulation families**: (a) "I have GPU hardware — can I earn?" (direct, majority of runs) and (b) "Given my hardware, capital, and goals — which path?" (decision-oriented, 4 of 15 runs). The canonical question combines both.
