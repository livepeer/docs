# Part 2: Personas

**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## 5 personas, ranked by priority

### #1 — Independent GPU operator (choosing a path)
- **Entry**: Search ("livepeer orchestrator setup"), Discord, mining forums, Foundation blog
- **Arrives with**: GPU hardware, Linux skills, no Livepeer knowledge, unclear which path applies
- **Wants to leave with**: Clear path identified, first working node running
- **Score**: Volume 3, Depth 3, Impact 3 = **9/9**
- **Consensus**: 4/4 runs

### #2 — AI inference specialist (adding Livepeer as demand channel)
- **Entry**: AI blog post, Discord #ai-video, ML community referral
- **Arrives with**: Existing ML infrastructure, no Livepeer payment/staking knowledge
- **Wants to leave with**: AI pipelines configured, capabilities advertised, first job received
- **Score**: Volume 2, Depth 3, Impact 3 = **8/9**
- **Consensus**: 4/4 runs

### #3 — Capital-constrained operator (solo vs pool decision)
- **Entry**: Discord, search ("join Livepeer without staking"), pool operator referral
- **Arrives with**: GPU hardware, suspects they lack enough LPT for solo
- **Wants to leave with**: Clear decision — pool, AI-first, or delay solo — and knows how to proceed
- **Score**: Volume 3, Depth 2, Impact 3 = **8/9**
- **Consensus**: 4/4 runs

### #4 — Running operator (returning to configure/optimise/troubleshoot)
- **Entry**: Bookmark, direct URL, Discord link, search for error message
- **Arrives with**: Node in production, needs specific answer
- **Wants to leave with**: Problem resolved or config change applied
- **Score**: Volume 3, Depth 2, Impact 2 = **7/9**
- **Consensus**: 3/4 runs

### #5 — Delegator-turned-operator (evaluating hardware operation)
- **Entry**: Delegators tab CTA, forum thread
- **Arrives with**: Understands LPT/delegation, lacks ops knowledge
- **Wants to leave with**: Go/no-go decision on running a node vs continuing to delegate
- **Score**: Volume 1, Depth 1, Impact 2 = **4/9**
- **Consensus**: 2/4 runs

---

## Key design decisions

- **Primary persona**: Independent GPU operator — unanimous. Drives section structure.
- **Self-identification**: All 4 runs say a dedicated disambiguation section is needed (S1) because operators can't identify their path without reading content first.

---

## Review questions

1. Are these the right people? Anyone missing? Anyone who shouldn't be here?
2. Is the priority order right? Should AI specialist be higher?
3. Is persona #5 (delegator-turned-operator) real or theoretical?
4. Does the "primary persona drives structure" decision feel right?

---

## Existing research (raw — for reference)

### Earlier persona research: 5 demographic personas (dep-personas-and-pages.mdx)

**Persona A — The Solo GPU Operator ("The Miner")**
- Background: Former crypto miner transitioned after PoS switch. 1-4 consumer GPUs (RTX 2060-3080), home broadband or small VPS.
- Motivations: Passive income (ETH fees + LPT rewards), crypto community participation, "set and forget"
- Entry: GPU mining communities, Udemy courses, Video Miner/Titan Node websites, YouTube, Live Pioneers
- Pain points: LPT acquisition barrier, pool vs solo confusion, price per pixel guidance missing, port forwarding, "Orchestrator not available" errors, monitoring complexity
- Hardware: RTX 2060-3080 (8-12GB VRAM), 1-4 GPUs

**Persona B — The Pool Worker ("The Easy Earner")**
- Background: Consumer GPUs, wants earnings without LPT or full orchestrator complexity. Joins Video Miner, Titan Node, LivePool.
- Motivations: Passive income without large LPT stake, simplicity
- Entry: Pool websites, Discord, "Know Your Orchestrator" content
- Pain points: Distinction buried in docs, community pools page doesn't explain operational model, no clear "join a pool" guide
- Hardware: Single GPU (RTX 1070Ti-3070, 8GB VRAM)

**Persona C — The Infrastructure Engineer ("The Pro Operator")**
- Background: 4-20 GPUs in data centre. Strong devops (Docker, K8s, Prometheus/Grafana).
- Motivations: Maximise ROI, add AI pipelines, build reliable/scalable infrastructure
- Entry: explorer.livepeer.org, Discord, blog, Messari reports
- Pain points: AI pipeline config underdocumented, remote worker setup requires Discord, no mixed-workload earnings guide, pool docs thin, BYOC scattered
- Hardware: RTX 3090, A5000, server-class, Docker-native

**Persona D — The Enterprise / Data Centre Operator ("The Business")**
- Background: Professional GPU infra operator or cloud provider evaluating Livepeer. Business-level evaluation: ROI, compliance, SLA.
- Motivations: New revenue stream, build Livepeer compute business, evaluate protocol economics
- Entry: Foundation BD, conferences, Messari, livepeer.org/orchestrate
- Pain points: No enterprise-facing section, economics at scale undocumented, no programmatic management docs
- Hardware: A100/H100/4090, multi-region, hundreds of GPUs

**Persona E — The AI Compute Specialist ("The AI Native")**
- Background: ML engineer or AI startup. Came via AI subnet launch, Daydream, Cascade. Possibly no crypto background.
- Motivations: Earn serving open-source AI models, access decentralised GPU compute, anti-centralisation values
- Entry: Mirror.xyz blog, Encode Club bootcamp, ComfyStream, Daydream/Cascade announcements
- Pain points: Realtime vs batch unclear, aiModels.json undocumented, Docker complexity, VRAM per pipeline/model not documented, no AI pricing guidance
- Hardware: RTX 4090 (24GB), A100/H100, high VRAM priority

---

### Alternative framework: situational job stories (orchestrator-tab-review-v3.md)

Critique of demographic personas — proposes replacing with **situational job stories**:

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | GPU sitting idle | earn crypto | offset hardware cost |
| J2 | Already run video, see AI demand growing | add AI workloads to existing setup | earn from both without second node |
| J3 | Have substantial LPT | maximise yield | run well-performing orchestrator attracting delegation |
| J4 | Company needs GPU compute at scale | operate commercial orchestrator infra | earn service fees under SLAs |
| J5 | Want to govern open compute protocol | operate node with meaningful stake | vote on proposals |
| J6 | Have 24GB+ GPU but limited LPT | earn from AI inference without active set | start earning immediately |

Key insight: J1 and J6 are the same person in different situations. J2 (hybrid add-on) has NO content in the docs.

---

### Terminology framework for personas (v2 review)

3 axes that cut across all personas:
- **Node mode**: Video / AI / Dual
- **Deployment type**: Solo operator / Pool worker / Pool operator / Split (O+T) / Siphon
- **Scale**: Single GPU / Multi-GPU / Fleet

---

### Docs-guide persona mapping (8 roles, site-wide)

From `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/`:

Orchestrator persona defined as simultaneously:
1. GPU compute provider
2. AI model curator (selects and loads models)
3. Governance delegate (staked LPT = voting power)
4. Market participant (sets pricing, job acceptance)
5. Reputation player (attracts delegators)

Self-identifies as: "Miner," "GPU operator," "node operator," "infrastructure provider"
Technical depth: **Deepest technical role** in the ecosystem.

---

### High-opportunity content gaps (scored)

| Gap | Score | Notes |
|---|---|---|
| O3 — Hybrid operator path (adding AI to video) | 56 | No content exists |
| O1 — Worth-it evaluation (ROI/decision matrix) | 54 | |
| O2 — Path selection (job-story navigator) | 45 | |

---

### Comparison: canonical 5 vs earlier 5

| Canonical (audience design) | Earlier research (dep-personas) | Match? |
|---|---|---|
| #1 Independent GPU operator | Persona A (Solo Miner) | Partial — canonical is broader, earlier has hardware specifics |
| #2 AI inference specialist | Persona E (AI Native) | Strong match |
| #3 Capital-constrained (pool) | Persona B (Pool Worker) | Strong match |
| #4 Running operator (return) | Persona C (Pro Operator) | Partial — canonical is return-visit focused, earlier is scale-focused |
| #5 Delegator-turned-operator | No direct match | Canonical only |
| No match | Persona D (Enterprise) | Earlier research only |

**Notable gap**: Enterprise/data centre persona (D) exists in earlier research but was dropped from canonical. Was that correct?
