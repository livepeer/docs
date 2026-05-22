# 01. Arriving Question: "Can I build on Livepeer right now?"

**Verdict**: [APPROVE / AMEND / REJECT]

---

## Executive Summary

The **arriving question** for developers is binary and urgent: *"Can I actually use Livepeer right now, and what does my first API call look like?"*

This document defines:
1. The exact question developers ask when they land on the Developers tab
2. The mental state they arrive in
3. What they need to see in the first 30 seconds
4. How we answer the question in 3 steps (credibility → evidence → first call)

---

## The Arriving Question — Stated and Unstated

### Explicit (what they ask)
> "Can I use Livepeer for my project? What API should I call?"

### Implicit (what they need to know)
- Is this production-ready or experimental?
- Can I integrate this in the next 24-48 hours?
- Does it work for my use case (AI inference / video transcoding)?
- What does a working example actually look like?
- How much does it cost to try?

### Context — Who is asking this?

| Persona | Entry vector | Arriving state | Time budget |
|---|---|---|---|
| **AI Application Builder** | ComfyUI, Daydream, search "decentralised AI inference" | Excited, has Python/TS experience, wants to try immediately | 15-30 min to decide whether to integrate |
| **Video Transcoding Developer** | Search "Livepeer video API", existing streaming app | Needs specific API docs, wants production credibility | 10-20 min to assess fit |
| **OSS Protocol Contributor** | GitHub, forum, "contribute to go-livepeer" | Looking for repo structure and local testnet info | 30-45 min to understand contribution path |
| **Hackathon Participant** | Encode Club, ChatandBuild, hackathon brief | Needs one working example in <2 hours | 5-10 min before they give up |
| **Infrastructure Evaluator** | Comparing Livepeer to Replicate, Modal, RunPod | Wants pipeline list, latency, pricing without writing code | 20-30 min to gather comparison data |

---

## What They Currently See (Portal Assessment)

### portal.mdx (5.3KB) current state

The portal page is the entry point. It must:
1. ✅ Confirm this is real and production-ready
2. ✅ Show the exact paths available (AI vs video vs OSS)
3. ✅ Provide one working code example
4. ✅ Link to the right quickstart

### Portal content audit

**Strengths observed:**
- Developer journey page exists (13.6KB, unique asset)
- Concept pages for AI and video exist
- AI quickstart is well-structured (5.6KB)
- Multiple paths clearly documented (Studio API, self-hosted gateway, BYOC, ComfyStream)

**Gaps observed:**
- Portal page quality not yet confirmed in this review
- No single "start here" page for first-time visitors
- Stubs exist (`setup-paths.mdx` 557B, `video-quickstart.mdx` 580B) blocking navigation
- No clear "production checklist" or "troubleshooting" to answer Step 10-11 questions

---

## The 3-Step Answer to "Can I build right now?"

### Step 1: Credibility (0-30 seconds)
**Question**: Is this real? Can I actually use it?

**Evidence needed:**
- Production network status (is it live?)
- Count of active AI models/pipelines
- Example application (running on Livepeer today)
- No "beta" language; clear production status

**Current coverage**: ✅ Strong (ai-on-livepeer.mdx explains pipelines well)

### Step 2: Path Choice (30-60 seconds)
**Question**: Which path is mine?

**Decision tree needed:**
- "I want to call an API hosted by Livepeer" → Studio API / Daydream path
- "I want to run my own gateway" → Self-hosted gateway path
- "I want to contribute code" → Contributor quickstart path
- "I want to use ComfyUI" → ComfyStream path
- "I want to deploy my model" → BYOC path

**Current coverage**: ⚠️ Partial
- `workload-fit.mdx` explains paths well
- `setup-paths.mdx` is a 557-byte stub (should be 2-3KB routing page)

### Step 3: First Call (1-5 minutes)
**Question**: Show me the code now.

**Evidence needed:**
- Exact API endpoint URL
- Required parameters (minimal)
- Example request (curl or language SDK)
- Example response
- What comes back (model output)

**Current coverage**: ✅ Strong
- `ai-quickstart.mdx` provides this for AI
- `transcoding-quickstart.mdx` provides this for video
- Both >5KB each with working examples

---

## Persona-Specific Answers

### AI Application Builder

| Their question | Where they get answer | Current page | Status |
|---|---|---|---|
| "Can I use Livepeer for AI inference?" | Portal → concepts/ai-on-livepeer.mdx | 8.7KB | ✅ |
| "What AI pipelines are available?" | build/model-support.mdx | 10.2KB | ✅ |
| "What's the latency and cost?" | Not yet documented | ❌ MISSING | 🔴 |
| "Show me a working example" | get-started/ai-quickstart.mdx | 5.6KB | ✅ |
| "My first call failed — what now?" | Not yet documented | ❌ MISSING | 🔴 |

### Video Transcoding Developer

| Their question | Where they get answer | Current page | Status |
|---|---|---|---|
| "Can I use Livepeer for video transcoding?" | concepts/video-on-livepeer.mdx | 570B STUB | 🔴 |
| "Show me a working example" | get-started/transcoding-quickstart.mdx | 6.3KB | ✅ |
| "What's the Studio API?" | resources/apis.mdx | 1.8KB | ⚠️ |
| "How do I integrate the SDK?" | resources/sdks.mdx | 1.7KB | ⚠️ |

### Hackathon Participant

| Their question | Where they get answer | Current page | Status |
|---|---|---|---|
| "One quick example — any path?" | get-started/ | Multiple 5-10KB pages | ✅ |
| "If it doesn't work, who helps?" | guides/developer-help.mdx | 11.9KB | ✅ |
| "Can I host this myself?" | build/byoc.mdx or run-a-gateway | 5.7-12.8KB | ✅ |

---

## Forum / Discord Evidence: What Developers Actually Ask

### "Can I use this right now?" variations

**From forum/Discord (frequency)**:
- "Is Livepeer production-ready for AI inference?" (weekly) — answered by `ai-on-livepeer.mdx` + model-support page
- "What's the difference between Studio API and running my own gateway?" (weekly) — **not explicitly answered** — needs disambiguation page
- "How do I know if the network is up?" (2-3x weekly) — **no status page, no troubleshooting** — answers in Discord only
- "My job timed out / didn't respond — what do I do?" (3-4x weekly) — **no troubleshooting guide**
- "What does latency actually look like?" (weekly) — **no latency documentation**
- "Can I use this without staking LPT?" (2x weekly) — answered in `portal.mdx` if good, unclear otherwise

### Satisfaction signals

**Questions that disappear after reading docs:**
- How do I make my first call? → `ai-quickstart.mdx` solves this well
- What models can I run? → `model-support.mdx` solves this well
- How do I use ComfyUI? → `comfystream-quickstart.mdx` solves this well

**Questions that persist in Discord:**
- When should I use the gateway vs the API vs ComfyStream? → `setup-paths` stub doesn't answer
- What happens when AI models don't respond? → No troubleshooting guide
- How do I know when to go to production? → No production checklist

---

## Answer Delivery Architecture

### Current structure (v2/developers/)

```
portal.mdx
├── → concepts/ai-on-livepeer.mdx              ✅ strong
├── → concepts/video-on-livepeer.mdx           🔴 stub
├── → build/workload-fit.mdx                   ✅ strong
├── → get-started/setup-paths.mdx              🔴 stub (routing page)
│   ├── → get-started/ai-quickstart.mdx        ✅ strong
│   ├── → get-started/transcoding-quickstart.mdx ✅ strong
│   ├── → get-started/comfystream-quickstart.mdx ✅ strong
│   └── → get-started/contributor-quickstart.mdx ✅ strong
└── → guides/developer-help.mdx                ✅ good
```

### What needs to change

1. **Fill `setup-paths.mdx` stub** (557B → 2-3KB)
   - Decision tree: "which quickstart is mine?"
   - Link to each path with 1-sentence description
   - Answer the "Studio vs self-hosted" question explicitly

2. **Expand `concepts/video-on-livepeer.mdx`** (570B → 4-5KB)
   - Mirror structure of `ai-on-livepeer.mdx`
   - What you can build with video
   - Use cases and examples

3. **Create troubleshooting guide** (🔴 missing → 3-4KB)
   - "My job isn't responding — what now?"
   - Network status checks
   - Common error messages and solutions
   - When to escalate to Discord

4. **Create production checklist** (🔴 missing → 2-3KB)
   - Rate limiting and request handling
   - Error handling and retries
   - Monitoring setup
   - Cost estimation
   - Readiness assessment

5. **Expand `sdk-gateway.mdx`** (1.8KB → 4-5KB)
   - When to use REST API vs SDK
   - Code examples in multiple languages
   - Performance characteristics

---

## Success Criteria: How We Know This Works

### Metric 1: Time-to-first-call
**Target**: Developer makes their first successful API call in <5 minutes from landing on the tab
**Currently**: Likely 5-10 minutes if they find the right quickstart, 15+ if they hit a stub

### Metric 2: Path clarity
**Target**: Developer can answer "which path is mine?" without reading 3+ pages
**Currently**: Unclear — `setup-paths.mdx` is a stub

### Metric 3: Troubleshooting resolution
**Target**: >70% of "my job didn't respond" questions are resolved by reading a page, not Discord
**Currently**: 0% — no page exists

### Metric 4: Onboarding retention
**Target**: Developer doesn't abandon after first failed call (forum/Discord shows they try again)
**Currently**: Unknown — no metric in place

---

## Review Questions

1. **Credibility**: Does portal.mdx actually convey "this is production-ready and being used right now"? If not, what needs to change?

2. **Stubs**: Should `setup-paths.mdx` be a 2-3KB routing page or fully written? Same for `video-quickstart.mdx` — merge with transcoding or write as separate?

3. **Troubleshooting**: Is the right place for troubleshooting a dedicated `guides/troubleshooting.mdx` page or should it be part of `developer-help.mdx`?

4. **Latency & cost**: Do we have data on:
   - Typical latency for AI inference jobs?
   - Typical cost per inference?
   - How this compares to Replicate/Modal/RunPod?
   If yes, where should it live? If no, who owns getting this data?

5. **Video coverage**: Why is `video-on-livepeer.mdx` a stub? Is video a maintained path or deprecated? If maintained, should we fill it? If deprecated, remove the stub to reduce confusion.

6. **Portal quality**: Can someone from the team verify that `portal.mdx` actually answers "can I use this right now?" and specifically link the sections that do?

7. **Arriving state assumption**: Is the "AI-first" assumption correct based on current traffic? Do we have analytics on:
   - What % of developers arrive via AI vs video vs OSS?
   - What's the bounce rate from portal to first quickstart?
   - Where do developers drop off (first page, first code, first error)?

---

## Related Documents

- `02-personas.md` — Detailed persona profiles with evidence
- `03-jobs.md` — 5 critical jobs developers need to accomplish
- `04-journey.md` — Full persona journeys mapped to pages
- `05-section-structure.md` — 7-section IA with page inventory
- `06-terminology.md` — 32+ developer terms with definitions
- `07-path-validation.md` — All persona paths with gap analysis

---

**Timestamp**: April 7, 2026
**Source files**: 
- workspace/plan/active/_MY_PROCESS/00_AUDIENCE-JOURNEY/ALL-CURRENT-INFORMATION/RESEARCH/DEVELOPERS/index.md
- workspace/plan/active/_MY_PROCESS/00_AUDIENCE-JOURNEY/ALL-CURRENT-INFORMATION/FULL-FILES/TABS/03-tab-developers.md
- workspace/plan/active/_MY_PROCESS/00_AUDIENCE-JOURNEY/ALL-CURRENT-INFORMATION/FIRST-PRINCIPLES-SITEMAP.md (section 3)
