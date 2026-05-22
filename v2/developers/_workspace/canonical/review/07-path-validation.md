# 07. Path Validation: Persona Paths with 20 Gap Items Prioritized

**Verdict**: [APPROVE / AMEND / REJECT]

---

## Executive Summary

This document traces each persona's complete path from arrival to success, cataloging 20 critical gaps and prioritizing them by:
- **Personas blocked** (how many personas affected)
- **Severity** (do they abandon or find Discord help?)
- **Fix effort** (quick win vs major content work)
- **Discord frequency** (how often does this question appear?)

---

## Gap Inventory: 20 Prioritized Items

### Priority Tier 1 — CRITICAL (Blocks multiple personas, high Discord frequency)

#### Gap #1: Troubleshooting Guide Missing
**Affected personas**: AI Builder (#1), Video Developer (#2), Hackathon (#4)
**Symptom**: "My job timed out," "Status 502," "No response" (3-4x weekly in Discord)
**Current state**: No documentation. All answers in Discord.
**Fix**: Create `guides/troubleshooting.mdx` (3-4KB)
- Common timeout scenarios and diagnostics
- Network status checks
- Error code reference
- Model-specific issues (model not responding, VRAM exceeded)
- When to escalate to Discord
**Effort**: Medium (1-2 days writing + research)
**Impact**: HIGH — removes 3-4 weekly Discord interrupts

#### Gap #2: Setup-Paths Stub
**Affected personas**: All 5 (blocks routing)
**Symptom**: Developer reads workload-fit, unsure which quickstart to read next
**Current state**: 557-byte stub
**Fix**: Fill with 2-3KB routing content:
- Decision tree matching use case to quickstart
- 1-sentence description of each path
- Links to correct quickstart
**Effort**: Low (1/2 day writing)
**Impact**: HIGH — blocks entry for all personas

#### Gap #3: Production Checklist Missing
**Affected personas**: AI Builder (#1), Video Developer (#2)
**Symptom**: "How do I go to production?" (1-2x weekly in Discord)
**Current state**: No documentation.
**Fix**: Create `guides/production-checklist.mdx` (2-3KB)
- Rate limiting and quotas (how to handle)
- Retry logic (exponential backoff)
- Monitoring setup (what to track)
- Cost estimation (per-inference costs)
- Security (API key rotation, access control)
- Pre-launch sign-off checklist
**Effort**: Medium (1-2 days research + writing)
**Impact**: HIGH — unblocks production deployments, removes weekly Discord questions

#### Gap #4: Video Concept Page Stub
**Affected personas**: Video Developer (#2)
**Symptom**: "Is video transcoding still supported?" (question in Discord, unclear)
**Current state**: 570-byte stub in `concepts/video-on-livepeer.mdx`
**Fix**: Fill with 3-4KB content mirroring `ai-on-livepeer.mdx`:
- What you can build with video
- Use cases (live streaming, VOD, migration from Mux/AWS)
- Supported codecs/bitrates
- Comparison: Livepeer vs other solutions
**Effort**: Low-Medium (1 day writing)
**Impact**: MEDIUM — clarifies video path, removes confusion about path being maintained

#### Gap #5: SDK Reference Expansion
**Affected personas**: AI Builder (#1), Video Developer (#2)
**Symptom**: "How do I install and use the SDK?" — currently requires jumping to GitHub
**Current state**: `resources/sdks.mdx` is 1.7KB (too thin)
**Fix**: Expand to 3-4KB:
- Per-language installation (npm, pip, go get)
- Initialization/constructor pattern
- Code examples in JS/Python/Go
- Common SDK methods
**Effort**: Low (1/2 day writing + code samples)
**Impact**: MEDIUM — reduces external references, improves developer velocity

---

### Priority Tier 2 — HIGH (Blocks one persona, significant friction)

#### Gap #6: Authentication Guide Missing
**Affected personas**: AI Builder (#1), Video Developer (#2)
**Symptom**: "How do I authenticate requests?" (implicit in quickstarts, not explicit)
**Current state**: Scattered across quickstarts, not documented conceptually
**Fix**: Create dedicated page (1-2KB):
- API key management (where to get, how to use)
- JWT authentication (if applicable)
- Header format (Authorization: Bearer X)
- Key rotation best practices
**Effort**: Low-Medium (1/2 day)
**Impact**: MEDIUM — reduces confusion, improves security awareness

#### Gap #7: Error Codes Reference
**Affected personas**: AI Builder (#1), Video Developer (#2)
**Symptom**: "I got a 502 / 429 / 400 — what does it mean?" (not documented)
**Current state**: No page. Developers need to infer from context.
**Fix**: Create page (1-2KB):
- HTTP status codes (200, 400, 401, 429, 500, 502, 503)
- API-specific error codes (if any)
- Meaning and recovery action for each
**Effort**: Low (1/2 day)
**Impact**: MEDIUM — improves troubleshooting velocity

#### Gap #8: API Reference Expansion
**Affected personas**: Video Developer (#2), Evaluator (#5)
**Symptom**: Thin reference forcing developers to other sources
**Current state**: `resources/apis.mdx` is 1.8KB
**Fix**: Expand to 2-3KB:
- REST endpoint overview (POST /jobs, etc.)
- Authentication requirements
- Rate limit information
- Response format examples
- Link to Swagger/OpenAPI docs
**Effort**: Low-Medium (1/2 day)
**Impact**: MEDIUM — consolidates API info, reduces external references

#### Gap #9: Real-Time Architecture Guide
**Affected personas**: AI Builder (#1) — subset wanting low-latency streaming
**Symptom**: "Can I use this for real-time video gen?" (not clearly answered)
**Current state**: No documentation on streaming APIs or low-latency patterns
**Fix**: Create guide (2-3KB):
- Real-time vs batch trade-offs
- Streaming API patterns (if available)
- Expected latency ranges
- Use cases (chat, live video, interactive)
**Effort**: Medium (1-2 days research + writing)
**Impact**: MEDIUM — enables new use case, supports competitive positioning

#### Gap #10: Video Transcoding Specs
**Affected personas**: Video Developer (#2)
**Symptom**: "What codecs and bitrates are supported?" (not documented)
**Current state**: No specs page for video transcoding
**Fix**: Create page (1-2KB):
- Supported codecs (H.264, H.265, VP9, AV1, etc.)
- Bitrate ranges (min/max per codec)
- Resolution support
- Frame rate options
- Audio codec support
**Effort**: Low (1/2 day) — assumes specs exist internally
**Impact**: MEDIUM — needed for video developer integration

---

### Priority Tier 3 — MEDIUM (Affects one persona or missing nice-to-have)

#### Gap #11: Latency & Cost Benchmarks
**Affected personas**: AI Builder (#1), Infrastructure Evaluator (#5)
**Symptom**: "How does latency compare to Replicate?" (1-2x weekly)
**Current state**: No data published
**Fix**: Create comparison page (2-3KB):
- Typical latency for common models
- Cost per inference (if publicly disclosed)
- Comparison table (Livepeer vs Replicate/Modal/RunPod)
**Effort**: HIGH (requires data collection, product/finance approval)
**Impact**: MEDIUM — improves competitive positioning, aids evaluators

#### Gap #12: PyTrickle Documentation
**Affected personas**: AI Builder (#1) — subset wanting to run AI nodes
**Symptom**: "@muxionlabs/byoc-sdk documented, but PyTrickle not" (Feb 2026 launch)
**Current state**: No docs for Python AI worker package
**Fix**: Add to `build/byoc.mdx` (1-2KB):
- What PyTrickle does (Python AI worker participation)
- Installation (pip)
- Configuration (models, VRAM)
- Starting and monitoring
**Effort**: Low-Medium (1 day) — assuming PyTrickle is stable
**Impact**: MEDIUM — enables Python-native AI workers

#### Gap #13: @muxionlabs/byoc-sdk Documentation
**Affected personas**: AI Builder (#1) — subset wanting browser-based BYOC
**Symptom**: "How do I use the TypeScript BYOC SDK?" (Phase 4 launch)
**Current state**: SDK exists, no docs
**Fix**: Add to `build/byoc.mdx` (1-2KB):
- What it does (React hooks for browser-to-gateway BYOC)
- Installation (npm)
- Example: setup, submit job, get result
- API reference (hooks available)
**Effort**: Low (1/2 day)
**Impact**: MEDIUM — enables web developers to integrate BYOC

#### Gap #14: Rate Limiting & Quota Docs
**Affected personas**: AI Builder (#1), Video Developer (#2)
**Symptom**: "How many requests per second can I make?" (implicit, not stated)
**Current state**: No documentation
**Fix**: Add to production checklist (1KB):
- Rate limits (requests/sec per account)
- Quota (monthly spend or job count)
- How to request increases
- Backoff strategies (exponential backoff example)
**Effort**: Low (1/2 day)
**Impact**: MEDIUM — prevents surprise rate-limit errors in production

#### Gap #15: Example Applications Expansion
**Affected personas**: All (reference)
**Symptom**: Developers want to see "full working app" not just API call
**Current state**: `resources/example-applications.mdx` is 1.7KB
**Fix**: Expand to 2-3KB:
- Add 3-5 working example repos (GitHub links)
- Each with: what it does, how to run, what to learn
- Mix: AI apps, video apps, ComfyStream examples
**Effort**: Low (1/2 day) — assuming repos exist or can be referenced
**Impact**: MEDIUM — improves learning velocity

---

### Priority Tier 4 — NICE-TO-HAVE (Affects <1 persona or low friction)

#### Gap #16: Webhook/Callback Documentation
**Affected personas**: AI Builder (#1) — subset needing async responses
**Symptom**: "How do I use webhooks?" (not documented)
**Current state**: Webhooks exist, no docs
**Fix**: Add to production checklist (1KB):
- What webhooks do (async notifications)
- How to register a callback URL
- Webhook payload format
- Retry logic (how many times? backoff?)
**Effort**: Low (1/2 day)
**Impact**: LOW — only needed for advanced flows

#### Gap #17: NaaP (Node as a Platform) Documentation
**Affected personas**: AI Builder (#1) — subset wanting plugin extensibility
**Symptom**: "What is pipelines.livepeer.org?" (Feb 2026 launch, not documented)
**Current state**: NaaP is live but not documented in developer docs
**Fix**: Add to `concepts/` or `build/` (2-3KB):
- What NaaP does (plugin-based node platform)
- Use cases (custom plugins, model extensions)
- How to deploy a plugin
- Examples
**Effort**: Medium (1-2 days) — may require internal research
**Impact**: LOW — new feature, early adoption phase

#### Gap #18: Video-to-Video Models
**Affected personas**: AI Builder (#1) — subset interested in video generation
**Symptom**: "Can I generate video with Livepeer?" (implied but not explicit)
**Current state**: Listed in model-support but not highlighted
**Fix**: Add use-case callout to `ai-on-livepeer.mdx` (1/2 KB):
- Video-to-video and text-to-video examples
- Link to relevant models in model-support
**Effort**: Low (1/4 day)
**Impact**: LOW — documentation adjustment, not new content

#### Gap #19: Developer Grants/RFPs Callout
**Affected personas**: AI Builder (#1) — subset interested in funding
**Symptom**: "Are there grants or bounties?" (answered in opportunities/ section, but not in dev journey)
**Current state**: Section exists but not cross-linked from main dev path
**Fix**: Add callout to `guides/developer-guides.mdx` or create "Getting funded" subsection (1/2 KB)
**Effort**: Low (1/4 day)
**Impact**: LOW — already exists, just needs visibility

#### Gap #20: Contribution Path for Video
**Affected personas**: OSS Contributor (#3) — wanting to contribute to video pipelines
**Symptom**: "How do I contribute a new video codec?" (not documented)
**Current state**: Generic contribution guide exists, no video-specific path
**Fix**: Add subsection to `guides/contribution-guide.mdx` (1-2KB):
- Where video pipelines live
- How to add a new codec/profile
- Testing and review process
**Effort**: Medium (1-2 days) — requires collaboration with video team
**Impact**: LOW — niche segment

---

## Gap Priority Matrix

| Gap # | Title | Personas blocked | Severity | Effort | Discord frequency | Priority |
|---|---|---|---|---|---|---|
| 1 | Troubleshooting guide | 3 | Critical | Medium | 3-4x weekly | **CRITICAL** |
| 2 | Setup-paths stub | 5 | Critical | Low | High | **CRITICAL** |
| 3 | Production checklist | 2 | Critical | Medium | 1-2x weekly | **CRITICAL** |
| 4 | Video concept page | 1 | High | Low-Med | Low | **HIGH** |
| 5 | SDK expansion | 2 | High | Low | Moderate | **HIGH** |
| 6 | Authentication guide | 2 | High | Low-Med | Moderate | **HIGH** |
| 7 | Error codes | 2 | High | Low | Moderate | **HIGH** |
| 8 | API reference expansion | 2 | High | Low-Med | Moderate | **HIGH** |
| 9 | Real-time guide | 1 | Medium | Medium | Low | **MEDIUM** |
| 10 | Video specs | 1 | Medium | Low | Low | **MEDIUM** |
| 11 | Latency/cost data | 2 | Medium | HIGH | 1-2x weekly | **MEDIUM** |
| 12 | PyTrickle docs | 1 | Medium | Low-Med | Low | **MEDIUM** |
| 13 | BYOC SDK docs | 1 | Medium | Low | Low | **MEDIUM** |
| 14 | Rate limiting docs | 2 | Medium | Low | Low | **MEDIUM** |
| 15 | Example apps expansion | 5 | Medium | Low | Low | **MEDIUM** |
| 16 | Webhook docs | 1 | Low | Low | Low | **NICE-TO-HAVE** |
| 17 | NaaP documentation | 1 | Low | Medium | Very low | **NICE-TO-HAVE** |
| 18 | Video-to-video callout | 1 | Low | Low | Very low | **NICE-TO-HAVE** |
| 19 | Grants/RFPs visibility | 1 | Low | Low | Low | **NICE-TO-HAVE** |
| 20 | Video contribution path | 1 | Low | Medium | Very low | **NICE-TO-HAVE** |

---

## Recommended Phase 1 Execution (Weeks 1-2)

**Focus**: Fix CRITICAL gaps that block multiple personas and have high Discord frequency

1. **Gap #2: Fill setup-paths.mdx** (1/2 day) — 557B → 2-3KB routing page
2. **Gap #1: Create troubleshooting.mdx** (1-2 days) — 3-4KB troubleshooting guide
3. **Gap #3: Create production-checklist.mdx** (1-2 days) — 2-3KB production guide

**Result after Phase 1**: Developers can navigate, troubleshoot, and go to production without Discord help. Estimated reduction: 5-8 weekly Discord support questions.

---

## Recommended Phase 2 Execution (Weeks 3-4)

**Focus**: HIGH priority gaps affecting specific personas

4. **Gap #5: Expand sdks.mdx** (1/2 day) — 1.7KB → 3-4KB
5. **Gap #4: Fill video-on-livepeer.mdx** (1 day) — 570B → 3-4KB
6. **Gap #6: Create auth guide** (1/2 day) — 1-2KB
7. **Gap #7: Create error codes page** (1/2 day) — 1-2KB
8. **Gap #8: Expand apis.mdx** (1/2 day) — 1.8KB → 2-3KB

**Result after Phase 2**: Video developer path is clear, SDK integration is easier, and error diagnosis improves.

---

## Recommended Phase 3+ (Ongoing)

**Gap #11: Latency/cost data** — Requires product/finance alignment; separate stream
**Gap #12-13: New SDK docs** — Depends on library stabilization
**Gap #9: Real-time guide** — Depends on feature availability
**Gap #14-20**: Lower priority; can be phased in as needed

---

## Success Metrics (Post-Implementation)

### Metric 1: Discord troubleshooting volume
**Baseline**: 3-4 troubleshooting questions per week
**Target**: <1 per week (self-service docs work)
**Timeline**: 1 week post-publication

### Metric 2: Time-to-first-call
**Baseline**: 5-15 minutes depending on path
**Target**: <5 minutes for any path
**Measurement**: Track new developer funnels

### Metric 3: Path clarity
**Baseline**: Developers uncertain which path
**Target**: Path chosen before first API call
**Measurement**: Survey or analytics on page sequences

### Metric 4: Production deployment rate
**Baseline**: Unknown (demos work, production unclear)
**Target**: Measure % of developers who deploy after demo
**Measurement**: Track API call patterns for production markers

---

## Review Questions

1. **Phase 1 resource allocation**: Can we allocate 1 writer for 2 weeks to close the 3 CRITICAL gaps?

2. **Data dependencies**: For Gap #11 (latency/cost), who owns gathering and vetting this data? Should this block other work or proceed in parallel?

3. **Video prioritization**: Is video transcoding a first-class citizen (warrant same documentation depth as AI) or secondary? This determines Gap #4 and #10 priority.

4. **NaaP timing**: Is NaaP (Gap #17) stable enough to document now, or should we wait for more maturity?

5. **Discord metrics**: Can we set up tracking for which questions appear in Discord and how often? This would validate our estimated frequencies.

---

## Related Documents

- `03-jobs.md` — What each gap blocks (Job #4 and #5)
- `04-journey.md` — Which journeys each gap affects
- `05-section-structure.md` — Which sections host fixes

---

**Timestamp**: April 7, 2026
**Research basis**: Forum/Discord evidence synthesis, developer journey mapping, persona analysis from earlier research runs
