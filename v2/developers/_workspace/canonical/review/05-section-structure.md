# 05. Section Structure: 7 Canonical Sections with Page Inventory

**Verdict**: [APPROVE / AMEND / REJECT]

---

## Executive Summary

The Developers tab should have 7 core sections (S1-S7) serving the primary AI Application Builder journey plus secondary paths. This document maps each section's purpose, current pages, gaps, and design decisions.

---

## Section Inventory & Gap Analysis

### S1: Orientation — Choose Your Build Track

**Purpose**: Help developers identify which path (Studio API, self-hosted gateway, BYOC, ComfyStream, video, OSS) fits their needs

**Personas served**: All 5 (entry point)

**Current pages**:
| Page | Size | Status | Role |
|---|---|---|---|
| `portal.mdx` | 5.3 KB | ✅ | Entry point, confirm credibility |
| `concepts/ai-on-livepeer.mdx` | 8.7 KB | ✅ | What you can build with AI |
| `concepts/video-on-livepeer.mdx` | 570B STUB | 🔴 | What you can build with video |
| `build/workload-fit.mdx` | 8.9 KB | ✅ | Decision framework: which path? |
| `get-started/setup-paths.mdx` | 557B STUB | 🔴 | Routing: which quickstart? |
| `developer-journey.mdx` | 13.6 KB | ✅ | Visual overview of all paths (unique) |

**S1 gaps**:
- `video-on-livepeer.mdx` stub (570B) blocks video path understanding
- `setup-paths.mdx` stub (557B) blocks routing to quickstarts
- Need explicit "Studio API vs self-hosted" comparison table in setup-paths
- Missing: latency/cost comparison across paths

**Priority**: CRITICAL (blocks entry to all other sections)

**Fix**: 
- Fill `video-on-livepeer.mdx` with 3-4KB content mirroring `ai-on-livepeer.mdx`
- Fill `setup-paths.mdx` with 2-3KB routing page + decision tree
- Add latency/cost data if available

---

### S2: Concepts — Understand the Architecture

**Purpose**: Explain how Livepeer works, what the stack looks like, and what options are available

**Personas served**: AI Builder (#1), Video Developer (#2), all on their first visit

**Current pages**:
| Page | Size | Status | Role |
|---|---|---|---|
| `concepts/developer-stack.mdx` | 10.6 KB | ✅ | How the system fits together |
| `concepts/oss-stack.mdx` | 8.1 KB | ✅ | What repos exist and their relationships |
| `concepts/running-a-gateway.mdx` | 5.7 KB | ✅ | What a self-hosted gateway is |
| `build/sdk-gateway.mdx` | 1.8 KB | ⚠️ | SDK vs direct gateway access (too thin) |

**S2 gaps**:
- `sdk-gateway.mdx` critically thin (1.8KB) for its importance — should be 3-4KB with code examples
- Missing: real-time architecture concepts (latency, streaming)
- Missing: authentication concepts (API keys, JWT, access control)
- Missing: error codes and retry concepts

**Priority**: MEDIUM (foundational, but not blocking first call)

**Fix**:
- Expand `sdk-gateway.mdx` to 3-4KB with code examples in multiple languages
- Add authentication concepts page (1-2KB)
- Add error codes reference (1-2KB)

---

### S3: Get Started — Make Your First Call

**Purpose**: Provide working examples for each path, from zero to first successful API call

**Personas served**: All (required to proceed)

**Current pages**:
| Page | Size | Status | Role |
|---|---|---|---|
| `get-started/ai-quickstart.mdx` | 5.6 KB | ✅ | First AI inference call |
| `get-started/transcoding-quickstart.mdx` | 6.3 KB | ✅ | First transcoding call |
| `get-started/comfystream-quickstart.mdx` | 10.8 KB | ✅ | First ComfyStream integration |
| `get-started/contributor-quickstart.mdx` | 2.6 KB | ✅ | First contribution steps |
| `get-started/video-quickstart.mdx` | 580B STUB | 🔴 | First video call (unclear purpose) |

**S3 gaps**:
- `video-quickstart.mdx` is ambiguous — merge with transcoding or remove?
- All quickstarts are good quality but missing error diagnosis section (what does success look like vs failure?)
- No "ComfyUI local + Livepeer" quickstart for hybrid workflows

**Priority**: HIGH (blocks progress for all personas)

**Fix**:
- Resolve `video-quickstart.mdx` (merge or remove after confirming with team)
- Add error diagnosis section to each quickstart (what successful output looks like, common errors)
- Add hybrid ComfyUI quickstart if demand exists

---

### S4: Build — Implementation Guides for Each Path

**Purpose**: Provide detailed how-to guides for each integration path after the first call

**Personas served**: AI Builder (#1), Video Developer (#2)

**Current pages**:
| Page | Size | Status | Role |
|---|---|---|---|
| `build/model-support.mdx` | 10.2 KB | ✅ | What AI pipelines/models available |
| `build/byoc.mdx` | 12.8 KB | ✅ | Deploy your own model |
| `build/comfystream.mdx` | 12.5 KB | ✅ | Setup ComfyStream integration |
| `build/sdk-gateway.mdx` | 1.8 KB | ⚠️ | SDK usage guide (too thin) |

**S4 gaps**:
- `sdk-gateway.mdx` thin — should move to S2 (concepts) or expand here
- Missing: @muxionlabs/byoc-sdk documentation
- Missing: PyTrickle documentation
- Missing: Real-time inference architecture guide
- Missing: Video transcoding specs (codecs, bitrates, profiles)
- Missing: Model selection guide (how to choose between pipelines)

**Priority**: HIGH (blocks integration for all paths)

**Fix**:
- Document @muxionlabs/byoc-sdk (JavaScript browser-to-gateway BYOC)
- Document PyTrickle (Python package for AI worker)
- Add real-time inference guide (streaming APIs, latency patterns)
- Add video transcoding specs page
- Expand SDK usage (1.8KB → 3-4KB)

---

### S5: Guides — Operational and Advanced Topics

**Purpose**: Serve developers in production and advanced use cases

**Current pages**:
| Page | Size | Status | Role |
|---|---|---|---|
| `guides/developer-guides.mdx` | 13.4 KB | ✅ | Hub/overview page |
| `guides/developer-help.mdx` | 11.9 KB | ✅ | Support channels and community |
| `guides/contribution-guide.mdx` | 11.3 KB | ✅ | OSS contribution (for #3 persona) |
| `guides/local-testnet-deployment.mdx` | 10.5 KB | ✅ | Local dev environment |
| `guides/testnet-contract-deployment.mdx` | 19.1 KB | ✅ | Advanced testnet contracts |
| `guides/troubleshooting.mdx` | — MISSING | 🔴 | Diagnose and fix problems |
| `guides/production-checklist.mdx` | — MISSING | 🔴 | Production readiness guide |

**S5 gaps**:
- 🔴 **Critical**: `troubleshooting.mdx` missing — "My job timed out" (3-4x weekly in Discord)
- 🔴 **Critical**: `production-checklist.mdx` missing — "How do I go to production?" (1-2x weekly)
- ⚠️ Section organization mixed (operational guides + OSS guides together)

**Priority**: CRITICAL (production blocks and troubleshooting have highest Discord volume)

**Fix**:
- Create `guides/troubleshooting.mdx` (3-4KB) covering:
  - Common timeout scenarios
  - Network status checks
  - Error code diagnostics
  - Model-specific issues
  - When to escalate
- Create `guides/production-checklist.mdx` (2-3KB) covering:
  - Rate limiting and quotas
  - Retry logic (exponential backoff)
  - Monitoring setup
  - Cost estimation
  - Access control and security
  - Pre-launch sign-off

---

### S6: Reference — APIs, SDKs, and Examples

**Purpose**: Serve developers looking up specific API details, code examples, or ready-made applications

**Current pages**:
| Page | Size | Status | Role |
|---|---|---|---|
| `resources/sdks.mdx` | 1.7 KB | ⚠️ | SDK index (too thin) |
| `resources/apis.mdx` | 1.8 KB | ⚠️ | API reference index (too thin) |
| `resources/example-applications.mdx` | 1.7 KB | ⚠️ | Example apps index |
| `resources/awesome-livepeer.mdx` | 987B | ✅ | Community resource list |
| `resources/deepwiki.mdx` | 1.4 KB | ✅ | DeepWiki link |
| `resources/wiki.mdx` | 841B | ✅ | Wiki link |
| `resources/compendium/` | (directory) | ⚠️ | Confirm contents |
| `technical-references/` | (5 files, thin stubs) | 🔴 | Duplicate of resources/ — should remove |

**S6 gaps**:
- `sdks.mdx` thin (1.7KB) — should be 3-4KB with installation, init patterns, code examples
- `apis.mdx` thin (1.8KB) — should be 2-3KB with endpoint overview, auth, examples
- `example-applications.mdx` thin (1.7KB) — could be 2-3KB with more apps and use cases
- `technical-references/` appears to be duplicate of `resources/` — should audit and remove

**Priority**: MEDIUM (reference, not blocking progress but used frequently)

**Fix**:
- Expand `sdks.mdx` to 3-4KB with per-language installation, init, code examples
- Expand `apis.mdx` to 2-3KB with endpoint overview, auth patterns, rate limits
- Expand `example-applications.mdx` to 2-3KB with more examples and use cases
- Audit and remove or redirect `technical-references/` to `resources/`

---

### S7: Opportunities — Economic and Governance Participation

**Purpose**: Help developers find grants, bounties, and contribution opportunities

**Current pages**:
| Page | Size | Status | Role |
|---|---|---|---|
| `opportunities/overview.mdx` | 6.5 KB | ✅ | Overview of opportunities |
| `opportunities/grants-and-programmes.mdx` | 12.1 KB | ✅ | Foundation grants, hackathon programs |
| `opportunities/bug-bounties.mdx` | 8.7 KB | ✅ | Bug bounty programme |
| `opportunities/oss-contributions.mdx` | 13.9 KB | ✅ | Contributing to protocol repos |
| `opportunities/rfps-and-proposals.mdx` | 10.7 KB | ✅ | RFPs and SPE process |

**S7 gaps**: None — well-structured section

**Priority**: LOW (not blocking, serves secondary use case)

---

## Current vs Ideal Structure

### Current (v2/developers/ as-is)
```
28 pages across 6 sections
12 draft-quality pages
6 current-quality pages
11 deprecated pageType
24 missing frontmatter
13 orphan files
```

### Ideal (after filling gaps)
```
S1: Orientation (6 pages) — choose your path
S2: Concepts (5-6 pages) — understand architecture  
S3: Quickstarts (5 pages) — make first call
S4: Build (7-8 pages) — implement each path
S5: Guides (8-9 pages) — operations, troubleshooting, production
S6: Reference (6-7 pages) — SDKs, APIs, examples
S7: Opportunities (5 pages) — grants, bounties, contributions

~42-48 pages total
All pages production-quality
Comprehensive frontmatter
No orphans
```

---

## Design Decisions Made

**Decision 1**: Keep `developer-journey.mdx` as unique page
- Rationale: Provides valuable visual overview not replicated in canonical structure
- Status: KEEP (unique asset)

**Decision 2**: Keep `opportunities/` as separate section (not collapsing into guides/)
- Rationale: Distinct purpose (economic participation vs operational guides)
- Status: KEEP (custom section)

**Decision 3**: Technical-references/ is deprecated
- Rationale: Content moved to resources/; old stubs should be removed
- Status: AUDIT and REMOVE after docs.json audit

**Decision 4**: Guides section serves both operational + OSS personas
- Rationale: Both are "advanced topics" but are they the same section? 
- Status: CONSIDER SPLITTING into `guides/operational/` and `guides/oss/` if both grow

**Decision 5**: Portal page is the true entry point
- Rationale: Instead of index.mdx, portal.mdx serves the "what should I read?" question
- Status: CONFIRM portal quality and ensure it links to S1

---

## Page Quality Assessment

### A-tier (5+ KB, comprehensive, well-structured)
- concepts/developer-stack.mdx (10.6 KB)
- concepts/oss-stack.mdx (8.1 KB)
- concepts/ai-on-livepeer.mdx (8.7 KB)
- build/workload-fit.mdx (8.9 KB)
- build/model-support.mdx (10.2 KB)
- build/byoc.mdx (12.8 KB)
- build/comfystream.mdx (12.5 KB)
- get-started/ai-quickstart.mdx (5.6 KB)
- get-started/transcoding-quickstart.mdx (6.3 KB)
- get-started/comfystream-quickstart.mdx (10.8 KB)
- guides/contribution-guide.mdx (11.3 KB)
- guides/local-testnet-deployment.mdx (10.5 KB)
- guides/testnet-contract-deployment.mdx (19.1 KB)
- guides/developer-guides.mdx (13.4 KB)
- guides/developer-help.mdx (11.9 KB)

### B-tier (2-4 KB, functional but thin)
- portal.mdx (5.3 KB) ⚠️ Quality not yet confirmed
- get-started/contributor-quickstart.mdx (2.6 KB) ✅
- concepts/running-a-gateway.mdx (5.7 KB) ✅
- resources/awesome-livepeer.mdx (987 B) → Needs to be 2-3KB

### C-tier (< 2 KB, stubs or thin)
- build/sdk-gateway.mdx (1.8 KB) ⚠️ Should be 3-4KB
- resources/sdks.mdx (1.7 KB) ⚠️ Should be 3-4KB
- resources/apis.mdx (1.8 KB) ⚠️ Should be 2-3KB
- resources/example-applications.mdx (1.7 KB) ⚠️ Should be 2-3KB
- resources/deepwiki.mdx (1.4 KB) ✅
- resources/wiki.mdx (841B) ✅
- opportunities/* (5 pages, 6-14 KB each) ✅

### D-tier (< 1 KB, stubs, needs removal or filling)
- concepts/video-on-livepeer.mdx (570B) 🔴 STUB
- get-started/setup-paths.mdx (557B) 🔴 STUB
- get-started/video-quickstart.mdx (580B) 🔴 STUB
- technical-references/* (5 pages, ~700B each) 🔴 DUPLICATES

---

## Review Questions

1. **Section split at S5**: Should operational guides (troubleshooting, production, monitoring) be split from OSS guides? Or are they fine together?

2. **Portal quality**: Can someone confirm that `portal.mdx` actually conveys "this is production-ready" and "here are your options"?

3. **Reference consolidation**: Should we merge `resources/` and `technical-references/`? (Audit docs.json nav first)

4. **Video section**: Is video transcoding a maintained, first-class path, or secondary? This determines whether `video-on-livepeer.mdx` gets 4KB of content or gets deprecated.

5. **Compendium**: What's in `resources/compendium/`? Is it active or archive?

6. **NaaP documentation**: Node as a Platform (pipelines.livepeer.org) launched Feb 2026. Should this get a page in S1 or S4, or is it too early?

---

## Related Documents

- `04-journey.md` — How personas move through these sections
- `07-path-validation.md` — Detailed gap counts and priority scoring

---

**Timestamp**: April 7, 2026
