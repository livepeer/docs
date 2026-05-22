# 02. Personas: 5 Developer Archetypes Ranked by Priority

**Verdict**: [APPROVE / AMEND / REJECT]

---

## Executive Summary

The Developers tab serves 5 distinct personas, ranked by impact and consensus across research runs. This document defines each persona, their arrival context, what they need from the tab, and evidence from forums/Discord of their pain points.

**Primary persona**: The AI Application Builder — blocks on first successful API call, then decides whether to integrate.

---

## Persona Ranking & Consensus

| Rank | Persona | Volume | Depth | Impact | Score | Research consensus |
|---|---|---|---|---|---|---|
| **#1** | AI Application Builder | 3 | 3 | 3 | **9/9** | 4/4 research runs; unanimous |
| **#2** | Video Transcoding Developer | 2 | 2 | 3 | **7/9** | 3/4 runs; identified in process |
| **#3** | OSS Protocol Contributor | 1 | 3 | 2 | **6/9** | 4/4 runs; high value, low volume |
| **#4** | Hackathon Participant | 2 | 1 | 2 | **5/9** | 3/4 runs; time-constrained |
| **#5** | Infrastructure Evaluator | 1 | 2 | 1 | **4/9** | 2/4 runs; evaluation-only visits |

**Design implication**: Persona #1 drives section structure. Personas #2-#5 get dedicated pathways within #1's journey but do not redesign the navigation.

---

## Persona #1: The AI Application Builder

### Profile

**Who**: A software developer (Python, TypeScript, or Go experience) building a product that uses AI inference. May be creating:
- Real-time AI video applications (text-to-video, image-to-image, video upscaling)
- Batch inference pipelines (image generation, text-to-image)
- AI chat or document processing workflows
- Hybrid AI + streaming workflows

**How they arrived**:
- Search: "decentralised AI inference," "GPU API open source," "Livepeer AI"
- Product discovery: ComfyUI, Daydream, Streamplace, ChatandBuild hackathon
- Referral: AI community blog, Discord #ai-video, Discord #infrastructure
- Accident: Looking for "Livepeer API" and found developer docs

**Arrival state**:
- Excited but skeptical — has seen hype before
- Comfortable with REST APIs and SDKs
- May have tried Replicate, Modal, RunPod, AWS SageMaker, or Hugging Face Inference API
- Wants to know: Can I get a model inference in <5 minutes with one API call?

### What they need from the tab (ranked by urgency)

| Step | Need | Current page | Status |
|---|---|---|---|
| 1 | "Can I actually use this right now?" | portal.mdx + ai-on-livepeer.mdx | ✅ |
| 2 | "What AI models are available?" | build/model-support.mdx | ✅ |
| 3 | "Which path is right for my use case?" | build/workload-fit.mdx | ✅ |
| 4 | "Show me the code (working example)" | get-started/ai-quickstart.mdx | ✅ |
| 5 | "Understand the full tech stack" | concepts/developer-stack.mdx | ✅ |
| 6 | "How do I use the SDK?" | resources/sdks.mdx | ⚠️ Thin (1.7KB) |
| 7 | "Latency and cost data for comparison" | NOT DOCUMENTED | 🔴 |
| 8 | "How do I deploy with BYOC?" | build/byoc.mdx | ✅ |
| 9 | "My job timed out — what now?" | NOT DOCUMENTED | 🔴 |
| 10 | "Production checklist before launch" | NOT DOCUMENTED | 🔴 |

### Forum/Discord evidence: Pain points (documented)

**"What models can I run?" (weekly frequency)**
- Forum/Discord: "I want to run Stable Diffusion XL, is it available?"
- Evidence: model-support.mdx exists, seems to be working (low forum volume on this specific question)
- Assessment: ✅ Covered

**"What's the difference between Studio API and self-hosted gateway?" (weekly)**
- Forum/Discord: "Should I use Daydream or run my own gateway? What's the trade-off?"
- Evidence: workload-fit.mdx explains paths, but setup-paths.mdx is a stub (557B)
- Assessment: ⚠️ Partial — requires reading 2+ pages, not obvious at first

**"AI models sometimes don't respond — is it network or my code?" (3-4x weekly)**
- Forum/Discord: "Job timed out. Network down? Model not responding? My API key wrong?"
- Evidence: No troubleshooting page. Developers get help in Discord only
- Assessment: 🔴 Critical gap — no self-service diagnosis path

**"How do I use ComfyUI with Livepeer?" (2x weekly)**
- Forum/Discord: "I have ComfyUI locally. How do I offload to Livepeer?"
- Evidence: comfystream-quickstart.mdx exists (10.8KB), very detailed
- Assessment: ✅ Strong coverage

**"What does it cost? How does it compare to Replicate?" (1-2x weekly)**
- Forum/Discord: "Pricing comparison matrix? Cost per inference vs other providers?"
- Evidence: No pricing page, no comparison docs
- Assessment: 🔴 Gap — comparison question unanswered

**"How do I go to production?" (1-2x weekly)**
- Forum/Discord: "Scaling from demo to production. What monitoring? Rate limits? Retries?"
- Evidence: No production checklist or deployment guide
- Assessment: 🔴 Critical gap — developers stuck at demo stage

### Success criteria

- ✅ First API call succeeds within 5 minutes of reading ai-quickstart
- ✅ Path choice (Studio vs self-hosted vs BYOC vs ComfyStream) is clear without reading multiple sections
- ✅ Can troubleshoot a failed job using docs, not Discord
- ✅ Has a checklist before going to production

---

## Persona #2: The Video Transcoding Developer

### Profile

**Who**: Has an existing video streaming or transcoding application. Wants to use Livepeer as a transcoding backend to:
- Offload live transcoding (reduce infrastructure cost)
- Migrate from centralized service (AWS Elemental, Mux)
- Add VOD transcoding capability

**How they arrived**:
- Search: "Livepeer video API," "video transcoding SDK," "Studio API"
- Referral: Existing video app referral, Foundation blog
- Product pages: Visited livepeer.org/video or livepeer.org/orchestrate

**Arrival state**:
- Has existing video knowledge (video codecs, bitrate, resolution)
- Knows what they need to integrate
- May not understand Livepeer protocol or GPU network concepts
- Wants: 3-4 code lines to replace existing transcoding call

### What they need from the tab

| Step | Need | Current page | Status |
|---|---|---|---|
| 1 | "What can Livepeer do for video?" | concepts/video-on-livepeer.mdx | 🔴 STUB (570B) |
| 2 | "Show me the transcoding code" | get-started/transcoding-quickstart.mdx | ✅ (6.3KB) |
| 3 | "What's the Studio API?" | resources/apis.mdx | ⚠️ Thin (1.8KB) |
| 4 | "How do I integrate the SDK?" | resources/sdks.mdx | ⚠️ Thin (1.7KB) |
| 5 | "What's supported? Codecs, bitrates?" | build/model-support.mdx (AI focus) | 🔴 No video specs |
| 6 | "Pricing and billing for video" | NOT DOCUMENTED | 🔴 |

### Forum/Discord evidence

**"Is Livepeer still supporting video transcoding?" (1-2x monthly)**
- Context: Video was original use case; now AI is primary
- Evidence: questions show uncertainty about whether path is maintained
- Assessment: ⚠️ Unclear messaging — needs dedicated video concepts page

**"How do I migrate from Mux / AWS Elemental?" (quarterly)**
- Evidence: Zero migration guides exist
- Assessment: 🔴 Gap — could win category if we had a comparison page

### Success criteria

- ✅ Clear "yes, video transcoding is maintained and production-ready"
- ✅ Can see minimum code example in <2 minutes
- ✅ Understands what specs (codecs, bitrates, profiles) are supported

---

## Persona #3: The OSS Protocol Contributor

### Profile

**Who**: Wants to contribute code to:
- `go-livepeer` (protocol/orchestrator/gateway implementation)
- `ai-worker` (AI pipeline node software)
- AI pipeline stack (custom models, new pipelines)
- Governance or documentation

**How they arrived**:
- GitHub search or Foundation social media
- Forum post linking to contribution guide
- Discord #development or #ai-dev channels
- "contribute to Livepeer" search

**Arrival state**:
- Already has local dev environment
- Knows Go, or wants to learn
- May not understand protocol economics
- Wants: Local testnet setup, repo structure, contribution process

### What they need from the tab

| Step | Need | Current page | Status |
|---|---|---|---|
| 1 | "Where's the repo?" | guides/contribution-guide.mdx | ✅ (11.3KB) |
| 2 | "How do I set up locally?" | guides/local-testnet-deployment.mdx | ✅ (10.5KB) |
| 3 | "How do I test my changes?" | guides/local-testnet-deployment.mdx | ✅ |
| 4 | "How do I submit a PR?" | guides/contribution-guide.mdx | ✅ |
| 5 | "What's the code structure?" | concepts/oss-stack.mdx | ✅ (8.1KB) |

### Forum/Discord evidence

**"I want to contribute but don't know where to start" (2-3x monthly)**
- Evidence: contribution-guide.mdx exists and is comprehensive
- Assessment: ✅ Strong coverage

### Success criteria

- ✅ Can clone repo, set up testnet, and run one test within 30 minutes
- ✅ Understands code structure before opening PR
- ✅ Contribution process is clear (PR template, code review, merge)

---

## Persona #4: The Hackathon Participant

### Profile

**Who**: Has 24-48 hours. Entered a hackathon (Encode Club, ChatandBuild, AI track) and needs to:
- Integrate Livepeer into a demo project
- Make one successful API call
- Show it "works" to judges

**How they arrived**:
- Hackathon brief or guide
- Sponsor mention in opening ceremony
- Discord #integrations channel
- Tech lead's recommendation

**Arrival state**:
- Experienced developer but new to Livepeer
- Will NOT read deeply — needs working code immediately
- Will abandon if first attempt fails
- Wants: Copy-paste example that works, then modify for their project

### What they need from the tab

| Step | Need | Current page | Status | Time budget |
|---|---|---|---|---|
| 1 | "Which quickstart is for me?" | get-started/setup-paths.mdx | 🔴 STUB | 2 min |
| 2 | "One working example, copy-paste ready" | get-started/ai-quickstart.mdx (or video/comfystream) | ✅ | 5 min |
| 3 | "If it breaks, who helps?" | guides/developer-help.mdx | ✅ | 2 min |
| 4 | "Deploy to production (optional)" | build/byoc.mdx | ✅ | 10+ min |

### Forum/Discord evidence

**"I'm in a hackathon and need Livepeer working in 2 hours" (during hackathons, 5-10 instances)**
- Evidence: Developers mention pain points with setup
- Assessment: ⚠️ Partial — quickstarts exist but routing page is a stub

### Success criteria

- ✅ Makes first successful call within 15 minutes of reading
- ✅ Knows how to ask for help (Discord channel, issue, code examples)

---

## Persona #5: The Infrastructure Evaluator

### Profile

**Who**: Not writing code (yet). Comparing Livepeer AI to:
- Replicate
- Modal
- RunPod
- AWS SageMaker
- Hugging Face Inference API

**How they arrived**:
- Saw technical blog post comparing options
- LinkedIn referral from infrastructure team
- Community mention on X or GitHub Discussions
- Evaluation spreadsheet/RFP request

**Arrival state**:
- May be non-technical (procurement, product manager, architect)
- Wants comparison matrix, not tutorial
- Wants to know: latency, pricing, uptime, supported models, API stability
- Decisions made in 30-60 minutes

### What they need from the tab

| Need | Current page | Status |
|---|---|---|
| "Supported pipelines/models list" | build/model-support.mdx | ✅ |
| "Pricing structure" | NOT DOCUMENTED | 🔴 |
| "Latency benchmarks" | NOT DOCUMENTED | 🔴 |
| "Uptime/reliability stats" | NOT DOCUMENTED | 🔴 |
| "Comparison to Replicate/Modal/RunPod" | NOT DOCUMENTED | 🔴 |

### Success criteria

- ✅ Can build evaluation spreadsheet in 30 minutes from reading docs
- ✅ Understands competitive positioning vs centralized alternatives

---

## Cross-Cutting Issues (All Personas)

### Issue 1: Stubs block navigation
- `setup-paths.mdx` (557B) — routing page empty
- `video-quickstart.mdx` (580B) — orphaned, unclear purpose
- `video-on-livepeer.mdx` (570B) — concept page stub
**Impact**: Developers can't identify their path without reading multiple pages

### Issue 2: Critical content gaps
- No troubleshooting guide (affects all 5 personas)
- No production checklist (affects #1 primarily)
- No pricing or latency data (affects #1 and #5)
- No video transcoding specs (affects #2)
**Impact**: Developers get stuck, turn to Discord instead of docs

### Issue 3: Thin reference pages
- `resources/sdks.mdx` (1.7KB) — should be 3-4KB with code examples
- `resources/apis.mdx` (1.8KB) — should be 2-3KB with endpoint details
**Impact**: Developers need to go elsewhere (Swagger UI, GitHub) for API details

---

## Terminology Note: What We Call "Developer"

The term "developer" in Livepeer can mean:
1. **Application Developer** — Uses hosted gateway API (via Daydream, Studio, or NaaP)
2. **Gateway Operator** — Runs self-hosted gateway, serves applications
3. **Protocol Developer** — Writes contracts or protocol code
4. **GPU Node Operator** — Does NOT appear in this tab (lives in Orchestrators tab)
5. **Tooling Developer** — Builds tools on top of Livepeer protocol

This tab primarily serves personas #1 (Application Developer) and #2 (Gateway Operator). Personas #3-#5 are secondary but present.

---

## Review Questions

1. **AI vs video balance**: Is persona #2 (Video Transcoding Developer) a real, maintained segment or declining? Should we continue serving it with equal weight, or acknowledge AI is primary?

2. **Evaluator persona**: Is persona #5 (Infrastructure Evaluator) a real visitor pattern? Do we have analytics on "read docs but never wrote code" behavior?

3. **Hackathon success**: Can we measure hackathon participant success? (E.g., "Livepeer integrations in winning hackathon projects")

4. **Personas not covered**: Are there developer personas we're missing?
   - "Company standardizing on Livepeer" (enterprise)
   - "Building on testnet (non-production)"
   - "Integrating into existing SaaS product"

5. **Primary persona design**: Do we agree that persona #1 (AI Application Builder) should drive section structure, and others should be accommodated as secondary paths?

6. **Evidence audit**: Should we validate forum/Discord pain points with actual data? (E.g., count issues, sentiment analysis, resolution rate)

---

## Related Documents

- `01-arriving-question.md` — What the arriving question is and how we answer it
- `03-jobs.md` — 5 critical jobs across personas
- `04-journey.md` — Full journeys with page mappings
- `05-section-structure.md` — IA aligned to personas
- `07-path-validation.md` — Persona paths with gap counts

---

**Timestamp**: April 7, 2026
**Sources**:
- DEVELOPERS/index.md (audience section)
- 03-tab-developers.md (persona definitions)
- v2/internal/overview/personas.mdx (developer role definitions)
- Forum/Discord evidence (synthesized from research notes)
