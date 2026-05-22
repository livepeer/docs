# SOLUTIONS Tab: Complete Information Architecture

## Root Navigation Map

```
Portal (/solutions/)
├── Navigation / Product Index
├── Portal Hero + Product Cards
├── Ecosystem Links
└── Next Steps CTAs

Per-Product Section (5 products)
├── [Product] Overview
├── [Product] Quickstart
├── [Product] Task Guides / API Docs
├── [Product] Resources
└── [Product] Community Updates

Reference & Resources
├── Feature Matrix / Product Comparison
├── Cost Calculator
├── Deployment Decision Tree
├── Troubleshooting Index
└── Glossary (product-specific terms)
```

---

## Full File Structure (Canonical IA)

```
v2/solutions/
├── portal.mdx                           [LANDING/FRAME]
│   ├── Hero (Starfield background)
│   ├── Product card deck (5 products)
│   └── "More" link to ecosystem
│
├── _workspace/canonical/
│   ├── IA.mdx                           [REFERENCE]
│   ├── glossary.md                      [REFERENCE]
│   └── pageStatus.md                    [INTERNAL]
│
├── daydream/
│   ├── overview.mdx                     [OVERVIEW]
│   ├── changelog.mdx                    [CHANGELOG]
│   ├── community.mdx                    [COMMUNITY] ← automation broken
│   └── data/ (badges, infra, socials)   [DATA]
│
├── livepeer-studio/                     [LARGE SECTION: 88 pages]
│   ├── overview.mdx                     [OVERVIEW]
│   ├── changelog.mdx                    [CHANGELOG]
│   ├── community.mdx                    [COMMUNITY] ← automation broken
│   ├── docs/
│   │   ├── quickstart.mdx               [QUICKSTART]
│   │   ├── get-started/
│   │   │   ├── overview.mdx
│   │   │   ├── authentication.mdx
│   │   │   └── studio-cli.mdx
│   │   ├── livestream/
│   │   │   ├── overview.mdx
│   │   │   ├── create-livestream.mdx
│   │   │   ├── stream-via-obs.mdx
│   │   │   ├── livestream-from-browser.mdx
│   │   │   ├── playback-livestream.mdx
│   │   │   ├── optimize-latency.mdx
│   │   │   ├── stream-health.mdx
│   │   │   ├── multistream.mdx
│   │   │   └── clip-livestream.mdx
│   │   ├── vod/ (upload, playback, etc.)
│   │   ├── access-control/
│   │   │   ├── overview.mdx
│   │   │   ├── jwt.mdx
│   │   │   └── webhooks.mdx
│   │   ├── analytics/
│   │   │   ├── overview.mdx
│   │   │   ├── listen-to-events.mdx
│   │   │   └── webhooks.mdx
│   │   ├── reference/
│   │   │   ├── overview.mdx
│   │   │   ├── api.mdx
│   │   │   ├── sdks.mdx
│   │   │   └── managing-projects.mdx
│   │   ├── api-reference/
│   │   │   ├── assets/
│   │   │   ├── signing-keys/
│   │   │   ├── webhooks/
│   │   │   ├── rooms/
│   │   │   ├── playback/
│   │   │   ├── transcode/
│   │   │   ├── multistream/
│   │   │   └── sessions/
│   │   └── player.mdx
│   └── studio-client-use-cases.mdx
│
├── frameworks/
│   ├── overview.mdx                     [OVERVIEW]
│   ├── changelog.mdx                    [CHANGELOG]
│   ├── community.mdx                    [COMMUNITY] ← automation broken
│   └── data/ (badges, infra, socials)   [DATA]
│
├── streamplace/
│   ├── overview.mdx                     [OVERVIEW]
│   ├── changelog.mdx                    [CHANGELOG]
│   ├── community.mdx                    [COMMUNITY] ← automation broken
│   ├── introduction/
│   │   ├── streamplace-guide.mdx        [TASK GUIDE]
│   │   ├── streamplace-architecture.mdx [ARCHITECTURE]
│   │   ├── streamplace-integration.mdx  [INTEGRATION GUIDE]
│   │   ├── streamplace-funding-model.mdx [CONTEXT]
│   │   └── streamplace-provenance.mdx   [PROVENANCE & METADATA]
│   └── data/ (badges, infra, socials)   [DATA]
│
├── embody/
│   ├── overview.mdx                     [OVERVIEW]
│   ├── changelog.mdx                    [CHANGELOG]
│   ├── community.mdx                    [COMMUNITY] ← automation broken
│   └── data/ (badges, infra, socials)   [DATA]
│
├── solution-providers.mdx               [ECOSYSTEM SHOWCASE]
│
├── _common/
│   ├── feature-matrix.mdx               [COMPARISON/NAVIGATION] ← MISSING
│   ├── choose-your-product.mdx          [DECISION TREE] ← MISSING
│   ├── cost-calculator.mdx              [COST TRANSPARENCY] ← MISSING
│   ├── deployment-options.mdx           [DECISION GUIDE] ← MISSING
│   ├── production-readiness.mdx         [CHECKLIST] ← MISSING
│   └── troubleshooting-index.mdx        [REFERENCE] ← MISSING
│
└── data/
    └── (centralized badges, infra tags, social links)
```

---

## Section Patterns (per Product)

### Section S1: Product Overview

**File**: `[product]/overview.mdx`  
**Page type**: `overview`  
**Reading time**: 3-5 minutes

**Template**:
1. Icon badges (tech stack, deployment mode)
2. Product definition (1-2 sentences)
3. Connection to Livepeer (how it uses the network)
4. Key features (4-6 bullets)
5. Demo video (30-60 seconds)
6. "Try" section (4 cards: try app, quickstart, docs, integration guide)
7. "Get Started" steps (3-5 steps, code examples)
8. Resources (docs, GitHub, Discord, etc.)

**Frontmatter**:
```yaml
---
title: About [Product]
sidebarTitle: About [Product]
description: [1-2 sentence product description]
pageType: overview
audience: platform-builder
lastVerified: 2026-03-25
purpose: overview
---
```

**Current state**: All 5 products have this; good quality

---

### Section S2: Quickstart / Getting Started

**File**: `[product]/quickstart.mdx` OR embedded in overview  
**Page type**: `instruction`  
**Reading time**: 5-15 minutes

**Template**:
1. Prerequisites (SDK version, API key, setup time estimate)
2. Step-by-step (3-7 steps, copy-paste code)
3. Expected output (what success looks like)
4. Troubleshooting (common errors)
5. Next step (feature to implement next)

**Current state**:
- Studio: has embedded quickstart in overview + separate full quickstart.mdx
- Daydream: linked to external docs.daydream.live
- Frameworks: linked to external docs.frameworks.network
- Streamplace: embedded 4-step CLI install in overview
- Embody: embedded 4-step CLI install in overview

**Required content**: Ensure all have at least one working quickstart embedded or linked

---

### Section S3: Task Guides (Feature-Level)

**File**: `[product]/docs/[feature]/[task].mdx`  
**Page type**: `guide`  
**Reading time**: 3-10 minutes per task

**Template**:
1. Goal statement (1 sentence: "Create a livestream that only paying subscribers can watch")
2. Prerequisites (API key, SDK installed, understanding of authentication)
3. Step-by-step instructions (code blocks, copy-paste ready)
4. Code example (full, runnable)
5. Expected output
6. Error handling (what can go wrong, how to fix)
7. Variations (e.g., "to use webhooks instead of polling")
8. Related tasks (what to do next)

**Current state**:
- Studio: comprehensive (livestream, VOD, access control, webhooks, analytics)
- Daydream: minimal (no task guides)
- Frameworks: minimal (no per-feature guides)
- Streamplace: minimal (some in introduction/)
- Embody: minimal (no per-feature guides)

**Required content**: Create task guides for:
- Daydream: API setup, workflow creation, real-time inference, debugging
- Frameworks: self-hosted setup, StreamCrafter, Skipper, hybrid mode
- Streamplace: metadata configuration, C2PA signing, integration patterns
- Embody: cluster setup, avatar customization, allowlist management

---

### Section S4: API Reference

**File**: `[product]/docs/api-reference/` or `docs/reference/`  
**Page type**: `reference`

**Template**:
1. Overview (what can this API do?)
2. Authentication (API keys, JWT, OAuth)
3. Endpoint list (grouped by resource)
4. Detailed endpoints:
   - Endpoint: `GET /streams/{id}`
   - Description
   - Parameters
   - Request example
   - Response example
   - Error codes
5. Error handling (all error codes, what they mean)
6. Rate limits and quotas
7. SDKs available (JS, Python, Go, Ruby?)
8. Code examples (real use cases)

**Current state**:
- Studio: comprehensive (100+ endpoints documented)
- Others: external or minimal

**Required content**: Ensure all products link to or embed critical API endpoints

---

### Section S5: Community Updates

**File**: `[product]/community.mdx`  
**Page type**: `community`

**Template** (auto-generated from social data pipeline):
1. YouTube videos (latest N from channel)
2. Discord messages (latest N from #product channel)
3. GitHub releases (latest N)
4. Blog posts (latest N from team blog or Livepeer blog)
5. Forum discussions (latest N from Livepeer forum tagged #product)

**Current state**: Automation broken; pages exist but show no data

**Required content**: Fix automation or create static fallback (manually curated monthly)

---

### Section S6: Changelog

**File**: `[product]/changelog.mdx`  
**Page type**: `changelog`

**Template**:
1. Version log (latest first)
2. Per-version:
   - Version number
   - Release date
   - Breaking changes (if any)
   - New features
   - Bug fixes
   - Deprecated features

**Current state**: All 5 products have this (good structure)

---

## Cross-Product Reference Sections (Missing, P0)

### S7: Feature Matrix / Product Comparison

**File**: `_common/feature-matrix.mdx`  
**Purpose**: "Which product should I use?"

**Content**:
```
| Feature | Studio | Daydream | Frameworks | Streamplace | Embody |
|---|---|---|---|---|---|
| Livestream ingest | ✓ | ✓ | ✓ | ✓ | ✗ |
| VOD transcoding | ✓ | ✗ | ✓ | ✓ | ✗ |
| Real-time AI inference | – | ✓ | – | – | ✓ |
| Access control (JWT) | ✓ | – | – | – | – |
| Self-hosting | ✗ | – | ✓ | ✓ | ✗ |
| C2PA provenance | ✗ | ✗ | – | ✓ | ✗ |
| Multi-region | ✓ | – | ✓ | – | – |
| Cost model | Per-minute | Per-inference | Tiered | Self-hosted | Per-session |
```

**Status**: MISSING (P0) — Required for Evaluator and Integration Evaluator personas

---

### S8: "Choose Your Product" Decision Tree

**File**: `_common/choose-your-product.mdx`  
**Purpose**: Route readers to the right product

**Content**:
```
1. What's your primary use case?
   a. Live video streaming → Studio or Frameworks
   b. Video-on-demand → Studio or Frameworks
   c. Real-time AI inference → Daydream or custom BYOC
   d. Social network video → Streamplace
   e. AI avatars for education → Embody

2. Do you need self-hosting?
   a. Managed service → Studio
   b. Self-hosted + managed hybrid → Frameworks
   c. Full DIY (Gateway API) → Gateways tab

3. Do you have decentralization requirements?
   a. Yes, provenance matters → Streamplace
   b. Yes, no vendor lock-in → Frameworks
   c. No → Studio is simplest
```

**Status**: MISSING (P0) — Required for all personas in evaluation phase

---

### S9: Cost Calculator

**File**: `_common/cost-calculator.mdx`  
**Purpose**: "How much will this cost me?"

**Content**:
1. Studio: Input stream minutes/month → cost
2. Daydream: Input inferences/day → cost
3. Frameworks: Input streams + hosting tier → cost
4. Streamplace: Input node type → cost (DIY)
5. Embody: Input sessions/month → cost

**Status**: MISSING (P1) — Required for Evaluator and Integration Evaluator personas

---

### S10: Production Readiness Checklist

**File**: `_common/production-readiness.mdx`  
**Purpose**: "Is my implementation ready to launch?"

**Content**:
```
Infrastructure
- [ ] Multi-region fallback configured
- [ ] Load testing completed
- [ ] Capacity planning done

Monitoring
- [ ] Alerting rules set
- [ ] Log aggregation configured
- [ ] Uptime monitoring active

Security
- [ ] Authentication implemented (API key / JWT)
- [ ] Data encryption enabled
- [ ] Compliance review passed

Support
- [ ] Support escalation path documented
- [ ] On-call team assigned
- [ ] Runbook for common failures created
```

**Status**: MISSING (P0) — Required for Production operator personas (Stage 10)

---

### S11: Troubleshooting Index

**File**: `_common/troubleshooting-index.mdx`  
**Purpose**: Fast lookup for common errors

**Content**:
```
Studio
- [ ] Error: "Transcoding failed" → link to /studio/docs/livestream/troubleshooting
- [ ] Error: "Stream rejected (invalid credentials)" → link to /studio/docs/auth/troubleshooting
- ...

Daydream
- [ ] Error: "Inference timeout" → link to daydream docs
- ...
```

**Status**: MISSING (P1) — Required for Active Builder and Production operators

---

## Frontmatter Taxonomy (All Pages)

All pages use canonical frontmatter:

```yaml
---
title: [Human-readable title]
sidebarTitle: [Shorter for sidebar]
description: [Meta description, 1-2 sentences]
keywords:
  - livepeer
  - solutions
  - [product-name]
  - [feature]
pageType: [overview|quickstart|guide|reference|comparison|checklist|community|changelog]
audience: [platform-builder|developer|evaluator]
lastVerified: [YYYY-MM-DD] # Date content was reviewed
purpose: [orient|start|build|evaluate|reference]
---
```

**pageType values**:
- `overview` — Product/feature explanation (what is it?)
- `quickstart` — First working result (get started in 15 min)
- `guide` — Task-specific implementation (how to do X)
- `reference` — API, parameter, or lookup (official docs)
- `comparison` — Feature matrix or product comparison
- `checklist` — Production readiness, pre-flight checks
- `community` — Community updates, activity feeds
- `changelog` — Version history and release notes

---

## IA Validation Rules

Every product section must have:
- [ ] Overview page (S1)
- [ ] Quickstart or "Try" (S2)
- [ ] At least 3 task guides OR external link to complete docs (S3)
- [ ] API reference or SDK documentation link (S4)
- [ ] Community/changelog section (S5-S6)

Every portal must have:
- [ ] Feature matrix (S7) — linking to specific products
- [ ] Decision tree (S8) — routing evaluators correctly
- [ ] Cost transparency (S9) — calculator or comparison
- [ ] Production readiness guide (S10)
- [ ] Troubleshooting index (S11)

---