# 04. Journey Mapping: 5 Persona Journeys with Page Assignments

**Verdict**: [APPROVE / AMEND / REJECT]

---

## Executive Summary

This document maps each persona's complete journey through the Developers tab, stage by stage. Shows which pages currently serve each stage and identifies gaps.

---

## Journey #1: AI Application Builder (Primary)

**Arrival**: "Can I use Livepeer AI for my inference application?"
**Success**: Deployed app making production calls to Livepeer network with error handling

| Stage | Question | Current page(s) | Size | Status | Gap |
|---|---|---|---|---|---|
| **1. Credibility** | Is this real and production-ready? | portal.mdx + ai-on-livepeer.mdx | 5.3 + 8.7 KB | ✅ | None |
| **2. Surface mapping** | What can I build? What models exist? | build/model-support.mdx | 10.2 KB | ✅ | Latency/cost data missing |
| **3. Path selection** | Which approach fits my use case? | build/workload-fit.mdx | 8.9 KB | ✅ | Routing to quickstarts |
| **4. Setup** | Choose between paths (Studio/self-hosted/BYOC/ComfyStream) | get-started/setup-paths.mdx [STUB] | 557B | 🔴 | Needs full content |
| **5. First call** | Make my first inference | get-started/ai-quickstart.mdx | 5.6 KB | ✅ | Error diagnosis missing |
| **6. Understanding** | Understand the full stack | concepts/developer-stack.mdx | 10.6 KB | ✅ | None |
| **7. SDK usage** | Use the SDK to integrate | resources/sdks.mdx | 1.7 KB | ⚠️ | Too thin; needs auth guide |
| **8. Advanced: BYOC** | Deploy my own model | build/byoc.mdx | 12.8 KB | ✅ | @muxionlabs/byoc-sdk undocumented |
| **9. Advanced: ComfyStream** | Integrate with ComfyUI | build/comfystream.mdx | 12.5 KB | ✅ | PyTrickle undocumented |
| **10. Advanced: Real-time** | Build low-latency, real-time inference | (Not documented) | — | 🔴 | Missing: real-time architecture, streaming APIs |
| **11. Troubleshooting** | My job timed out / isn't responding | (Not documented) | — | 🔴 | Missing: troubleshooting guide |
| **12. Production** | Go to production safely | (Not documented) | — | 🔴 | Missing: production checklist, monitoring, rate limits |

### Gap summary for AI Builder
- **Critical blocks**: Job #4 (troubleshooting), Job #5 (production readiness) completely missing
- **Navigation blocks**: `setup-paths.mdx` stub prevents quick routing
- **Content gaps**: Real-time architectures, PyTrickle, @muxionlabs/byoc-sdk, latency/cost data
- **Thin pages**: `resources/sdks.mdx` (1.7KB), authentication not covered

---

## Journey #2: Video Transcoding Developer (Secondary)

**Arrival**: "Can I use Livepeer to transcode my video stream?"
**Success**: Live/VOD transcoding requests working and cost-effective vs current solution

| Stage | Question | Current page(s) | Size | Status | Gap |
|---|---|---|---|---|---|
| **1. Surface** | What can I do with Livepeer for video? | concepts/video-on-livepeer.mdx [STUB] | 570B | 🔴 | Needs full conceptual page |
| **2. Quickstart** | Make my first transcoding call | get-started/transcoding-quickstart.mdx | 6.3 KB | ✅ | None |
| **3. Path selection** | Studio API vs self-hosted? | (Not explicitly for video) | — | ⚠️ | Needs video-specific guidance |
| **4. API reference** | What's the Studio API? | resources/apis.mdx | 1.8 KB | ⚠️ | Too thin; needs examples |
| **5. SDK usage** | Integrate the SDK | resources/sdks.mdx | 1.7 KB | ⚠️ | Too thin; needs video examples |
| **6. Specs** | What codecs, bitrates, profiles supported? | (Not documented) | — | 🔴 | Missing: transcoding specs page |
| **7. Troubleshooting** | Transcoding failed / slow | (Not documented) | — | 🔴 | Missing: video troubleshooting |
| **8. Production** | Move from pilot to production | (Not documented) | — | 🔴 | Missing: production guidance |

### Gap summary for Video Developer
- **Conceptual block**: `video-on-livepeer.mdx` stub prevents entry to video pathway
- **Reference blocks**: APIs and SDKs pages too thin for integration
- **Spec gap**: No documentation of supported codecs/bitrates
- **Troubleshooting**: No video-specific troubleshooting

---

## Journey #3: OSS Protocol Contributor (Secondary, High-Value)

**Arrival**: "I want to contribute to go-livepeer / ai-worker"
**Success**: First PR merged, understanding protocol and testing locally

| Stage | Question | Current page(s) | Size | Status | Gap |
|---|---|---|---|---|---|
| **1. Orientation** | Where are the repos? What's the structure? | concepts/oss-stack.mdx | 8.1 KB | ✅ | None |
| **2. Setup** | How do I set up a local testnet? | guides/local-testnet-deployment.mdx | 10.5 KB | ✅ | None |
| **3. Building** | How do I make changes and test? | guides/contribution-guide.mdx | 11.3 KB | ✅ | None |
| **4. Contributing** | How do I submit a PR? Code standards? | guides/contribution-guide.mdx | 11.3 KB | ✅ | None |
| **5. Advanced** | Deploy contracts to testnet | guides/testnet-contract-deployment.mdx | 19.1 KB | ✅ | None |

### Gap summary for OSS Contributor
- **Strong coverage**: All pages exist and are comprehensive
- **No blocks**: Path is clear from entry to first PR
- **Quality**: Well-documented compared to other journeys

---

## Journey #4: Hackathon Participant (Secondary, Time-Constrained)

**Arrival**: "I have 24-48 hours to build something with Livepeer"
**Success**: Working demo showing Livepeer integration, demo works for judges

| Stage | Question | Current page(s) | Time | Status | Gap |
|---|---|---|---|---|---|
| **1. Route** | Which quickstart is for me? | get-started/setup-paths.mdx [STUB] | 2 min | 🔴 | Needs routing |
| **2. Example** | Show me working code, now | get-started/[quickstart].mdx | 5 min | ✅ | ai/comfystream/transcoding exist |
| **3. Copy-paste** | Can I run this as-is? | (implicit in quickstart) | 5 min | ✅ | Quickstart should be runnable |
| **4. Modify** | Tweak for my project | (implicit in quickstart) | 30 min | ⚠️ | May need more examples |
| **5. Deploy** | Can I host this? | build/byoc.mdx (heavy) | 20 min | ⚠️ | BYOC may be too complex for 48h |
| **6. Help** | If it breaks... | guides/developer-help.mdx | 5 min | ✅ | Discord support clear |

### Gap summary for Hackathon Participant
- **Time-critical**: `setup-paths.mdx` stub wastes 5+ minutes
- **Complexity**: Some paths (BYOC) may be too heavy for 48-hour constraint
- **Success**: Quickstarts and help pages exist

---

## Journey #5: Infrastructure Evaluator (Secondary, Decision-Only)

**Arrival**: "How does Livepeer compare to Replicate / Modal / RunPod?"
**Success**: Built evaluation matrix, made go/no-go decision

| Stage | Question | Current page(s) | Status | Gap |
|---|---|---|---|---|
| **1. Capability** | What pipelines/models? | build/model-support.mdx | ✅ | None |
| **2. Pricing** | What does it cost? | (Not documented) | 🔴 | MISSING |
| **3. Performance** | Latency? Throughput? | (Not documented) | 🔴 | MISSING |
| **4. Reliability** | Uptime SLA? Error rates? | (Not documented) | 🔴 | MISSING |
| **5. Comparison** | How vs Replicate/Modal? | (Not documented) | 🔴 | MISSING |

### Gap summary for Infrastructure Evaluator
- **Critical gaps**: Pricing, latency, reliability data all missing
- **No comparison content**: Can't build evaluation matrix from docs
- **Impact**: Evaluator either abandons or guesses

---

## Cross-Journey Patterns

### Pattern 1: Stubs block multiple journeys
- `setup-paths.mdx` (557B) blocks: AI Builder, Video Developer, Hackathon Participant
- `video-on-livepeer.mdx` (570B) blocks: Video Developer (primary entry)

### Pattern 2: Reference pages too thin
- `resources/sdks.mdx` (1.7KB) thin for: AI Builder, Video Developer
- `resources/apis.mdx` (1.8KB) thin for: Video Developer

### Pattern 3: Critical gaps affecting multiple journeys
- Troubleshooting missing: AI Builder, Video Developer, Hackathon Participant
- Production checklist missing: AI Builder, Video Developer
- Latency/pricing data missing: AI Builder, Infrastructure Evaluator

### Pattern 4: Well-served journeys
- OSS Contributor journey: complete, no blocks
- Quickstart-to-demo: strong (except routing)

---

## Journey Completion Scores

| Journey | Arrival to first call | First call to integration | Integration to production | Overall |
|---|---|---|---|---|
| **AI Builder** | ✅ (5-10 min) | ✅ (30-60 min) | 🔴 (missing) | 60% |
| **Video Developer** | 🔴 (stub) | ⚠️ (thin pages) | 🔴 (missing) | 40% |
| **OSS Contributor** | ✅ (5 min) | ✅ (20-30 min) | ✅ (20+ min) | 95% |
| **Hackathon** | 🔴 (stub) | ✅ (10 min) | ⚠️ (complex) | 65% |
| **Evaluator** | ✅ (model list) | 🔴 (no pricing) | 🔴 (no data) | 30% |

---

## Review Questions

1. **Real-time pathway**: Should AI Builder journey include explicit real-time architecture path, or is this too niche?

2. **Video journey priority**: Is video transcoding a maintained, equal-weight pathway? Or secondary and acceptable at lower quality?

3. **Evaluator content**: Should we create pricing/latency/comparison content for infrastructure evaluators, or is this out of scope for developer docs?

4. **Routing strategy**: For `setup-paths.mdx`, should it be:
   - A simple 2-3KB decision tree (routing only)?
   - Or fully-featured like `workload-fit.mdx` (8.9KB)?

5. **Hackathon-specific content**: Should we create a dedicated "hackathon speedrun" guide, or is 24-48h path acceptable as-is?

---

## Related Documents

- `02-personas.md` — Who these journeys serve
- `03-jobs.md` — What each stage accomplishes
- `05-section-structure.md` — Where journeys fit in IA
- `07-path-validation.md` — Detailed gap counts per journey

---

**Timestamp**: April 7, 2026
