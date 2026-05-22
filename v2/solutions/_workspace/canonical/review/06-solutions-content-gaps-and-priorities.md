# SOLUTIONS Tab: Gap Analysis & Build Priority

## Critical Gaps (Journey-Blocking, P0)

### Gap #1: Feature Comparison Matrix Missing

**Impact**: Evaluators cannot make product-to-use-case mapping without synthesizing across 5 product overview pages  
**Personas affected**: Evaluator, Integration Evaluator, Product Builder (high volume)  
**Current state**: Implicit in product features; not explicit  
**Solution**: Create `/solutions/_common/feature-matrix.mdx`

**Content required**:
- 20-30 feature rows (livestream, VOD, AI, access control, self-hosting, cost, etc.)
- 5 product columns (Studio, Daydream, Frameworks, Streamplace, Embody)
- ✓ / — / Partial indicators
- Use cases → product mapping (e.g., "I need AI video" → Daydream)

**Effort**: 2-4 hours (research + structure)  
**Owner**: Solutions content lead  
**Target**: Week 1

---

### Gap #2: "Choose Your Product" Decision Tree Missing

**Impact**: Evaluators and builders don't have explicit routing; rely on trial-and-error  
**Personas affected**: All (high volume)  
**Current state**: None; implicit in product descriptions  
**Solution**: Create `/solutions/_common/choose-your-product.mdx`

**Content required**:
- Flowchart or multi-step decision tree (use case → product)
- 5-7 major decision branches (livestream, VOD, AI, social, avatars)
- Product positioning (who is it for? What problem does it solve?)
- "Next steps" CTA (e.g., "Read Frameworks overview, then try the app")

**Effort**: 4-6 hours (research + iteration)  
**Owner**: Solutions content lead  
**Target**: Week 1

---

### Gap #3: Community Feeds Automation Broken

**Impact**: Explorer and Active Builder personas expect "what's new?" feed; see stale or no data  
**Personas affected**: Explorer (high bounce risk), Active Builder (lower, but noticeable)  
**Current state**: SOLUTIONS-SOCIAL-DATA pipeline "complete (4 phases done)" but "5 community pages marked automation broken"  
**Solution**: (A) Fix automation, OR (B) Create static fallback updated monthly

**Content required**:
- For each product: YouTube videos (latest 3), GitHub releases (latest 5), Discord activity (curated), blog posts (latest 3)
- Manual curation: ~30 min/product/month

**Effort**: 4-8 hours (debugging automation) + 2 hours/month (maintenance)  
**Owner**: DevOps + content  
**Target**: Week 1 (fix automation); Week 2 (fallback if unfixable)

---

### Gap #4: Studio Legacy Links Not Converted

**Impact**: Builder following Studio task guides hits external links (livepeer.studio/docs) instead of internal routes  
**Personas affected**: Product Builder (high volume), Active Builder  
**Current state**: "~35 external links to livepeer.studio/docs need path conversion"  
**Solution**: Audit all Studio pages; replace external links with internal `/solutions/livepeer-studio/docs/...` routes

**Content required**:
- Find all `https://livepeer.studio/docs/` links in `/v2/solutions/livepeer-studio/`
- Replace with relative `/solutions/livepeer-studio/docs/...` paths
- Test all links post-conversion

**Effort**: 2-3 hours (audit + replace + test)  
**Owner**: Solutions content lead or developer  
**Target**: Week 1

---

### Gap #5: Production Readiness Checklist Missing

**Impact**: Builders launching in production don't have validation checklist; may miss critical setup (monitoring, failover, security)  
**Personas affected**: Product Builder (going live), Active Builder  
**Current state**: None  
**Solution**: Create `/solutions/_common/production-readiness.mdx`

**Content required**:
- Infrastructure (multi-region, load testing, capacity)
- Monitoring (alerting, logs, uptime checks)
- Security (auth, encryption, compliance)
- Support (escalation path, on-call, runbooks)
- Performance (latency targets, throughput, error rate)

**Effort**: 6-8 hours (research + structure)  
**Owner**: DevOps or Platform team lead  
**Target**: Week 2

---

## High-Impact Gaps (P1)

### Gap #6: Task Guides Missing for Daydream, Frameworks, Streamplace, Embody

**Impact**: Builders for these products must consult external docs or infer API usage; high friction  
**Personas affected**: Product Builder, AI Builder (high volume)  
**Current state**: Studio has comprehensive guides; others have 0-2 guides each  
**Solution**: Create 3-5 task guides per product (see IA section S3)

**Content required per product**:

**Daydream**:
- "Create a real-time AI workflow"
- "Deploy a custom model"
- "Integrate with Studio"
- "Debug inference latency"

**Frameworks**:
- "Deploy the full stack (self-hosted)"
- "Use StreamCrafter for live production"
- "Configure Skipper routing"
- "Hybrid: mix self-hosted + hosted processing"

**Streamplace**:
- "Set up a Streamplace node"
- "Embed Streamplace in your web app"
- "Configure C2PA metadata and rights"
- "Integrate with AT Protocol (Bluesky)"

**Embody**:
- "Deploy an avatar cluster"
- "Customize avatar appearance"
- "Configure authentication and allowlist"
- "Monitor avatar performance"

**Effort**: 24-32 hours total (~6-8 hours per product)  
**Owner**: Product teams + Solutions content lead  
**Target**: Week 2-3

---

### Gap #7: Cost Transparency / Calculator Missing

**Impact**: Evaluators cannot estimate costs before PoC; high friction in enterprise sales  
**Personas affected**: Evaluator, Integration Evaluator (high value, lower volume)  
**Current state**: None; pricing scattered across product pages  
**Solution**: Create `/solutions/_common/cost-calculator.mdx` or interactive tool

**Content required**:
- Studio: cost per minute of ingestion + transcoding + delivery
- Daydream: cost per inference
- Frameworks: tiered pricing (self-hosted free tier, hosted processing cost)
- Streamplace: cost model (likely per-node if self-hosted, or per-GB if managed)
- Embody: cost per session or per concurrent avatar

**Effort**: 6-8 hours (research + structure; or 16+ if building interactive calculator)  
**Owner**: Product manager or finance  
**Target**: Week 2

---

### Gap #8: Monitoring / Troubleshooting Guides Missing

**Impact**: Active Builder diagnosing issues must guess or ask Discord; slow time-to-resolution  
**Personas affected**: Active Builder, Production operator (mid-to-high volume)  
**Current state**: Studio has analytics; others minimal  
**Solution**: Create troubleshooting guide per product

**Content required per product**:
- Common errors and fixes (error code → root cause → solution)
- Health checks (how to verify system is working)
- Logging strategy (where logs live, how to access)
- Performance diagnostics (latency, throughput, error rate)
- Cost monitoring (what am I paying for?)

**Effort**: 12-16 hours total (~3-4 per product)  
**Owner**: Solutions content lead + product teams  
**Target**: Week 2-3

---

## Medium-Impact Gaps (P2)

### Gap #9: Daydream API Concepts Not Embedded

**Impact**: Builders integrating Daydream with Studio lack context for real-time inference  
**Personas affected**: AI Builder, Product Builder (medium volume, high value)  
**Current state**: Docs exist at docs.daydream.live; no internal bridge  
**Solution**: Create task guide "Integrate Daydream AI with Studio" that explains concepts

**Content required**:
- What's a Daydream workflow? (visual + explanation)
- How to invoke Daydream API from Studio context
- Real-time inference pipeline (input → inference → output)
- Example: style transfer on Studio livestream

**Effort**: 4-6 hours  
**Owner**: Solutions content lead  
**Target**: Week 3

---

### Gap #10: Operator Economics / "Why Builders Succeed" Missing

**Impact**: Explorers and early builders lack proof that Livepeer products are viable at scale  
**Personas affected**: Explorer, Evaluator (medium volume)  
**Current state**: None; scattered in Orchestrators/Gateways tabs  
**Solution**: Create case studies or success stories in Solutions overview

**Content required**:
- 3-5 case studies (products shipping on Livepeer, their metrics)
- Example: "Daydream API: 10K concurrent users, $X monthly cost"
- Example: "Studio livestream: enterprise migration, 40% cost reduction"

**Effort**: 8-12 hours (interviews + writing)  
**Owner**: Marketing or sales  
**Target**: Week 3-4

---

## Low-Impact Gaps (P3)

### Gap #11: Glossary (Product-Specific Terms)

**Impact**: Readers unfamiliar with video/AI terminology struggle  
**Personas affected**: Evaluator, Ecosystem Explorer (low volume)  
**Current state**: Site-wide glossary exists; product-specific glossary thin  
**Solution**: Expand `_workspace/canonical/glossary.md` with product-specific terms

**Content required**:
- Daydream: world models, StreamDiffusion, real-time inference
- Frameworks: MistServer, StreamCrafter, Skipper
- Streamplace: C2PA, AT Protocol, Fediverse, provenance
- Studio: transcoding profiles, multi-bitrate (MBR), DVR
- Embody: Unreal Engine, Pixel Streaming, avatar cluster

**Effort**: 3-4 hours  
**Owner**: Solutions content lead  
**Target**: Week 4

---

## Priority Build Order (Recommended Timeline)

### Week 1 (P0: Critical, Blocking)

1. **Feature Comparison Matrix** (2-4 hours) — unblocks Evaluator journey
2. **"Choose Your Product" Decision Tree** (4-6 hours) — unblocks all personas
3. **Fix Community Feeds** (4-8 hours) — restores Explorer confidence
4. **Audit & Convert Studio Links** (2-3 hours) — fixes Builder friction
5. **Production Readiness Checklist** (6-8 hours) — enables go-live validation

**Subtotal**: 18-29 hours (~3-4 days of FTE effort)

---

### Week 2-3 (P1: High-Impact)

6. **Task Guides (Daydream)** (6-8 hours) — unblocks AI Builder journey
7. **Task Guides (Frameworks)** (6-8 hours) — self-hosting path clarity
8. **Task Guides (Streamplace)** (6-8 hours) — provenance + Web3 path clarity
9. **Cost Calculator / Comparison** (6-8 hours) — enterprise evaluation support
10. **Troubleshooting Guides (all products)** (12-16 hours) — Active Builder support

**Subtotal**: 36-48 hours (~1.5 weeks of FTE effort)

---

### Week 3-4 (P2: Medium-Impact)

11. **Task Guides (Embody)** (6-8 hours) — completes all products
12. **Daydream + Studio Integration Guide** (4-6 hours) — AI + video bridge
13. **Case Studies / Success Stories** (8-12 hours) — proof of viability
14. **Product-Specific Glossary** (3-4 hours) — terminology clarity

**Subtotal**: 21-30 hours (~1 week of FTE effort)

---

## Total Build Estimate

- **P0 (Critical)**: 18-29 hours (~1 week)
- **P1 (High-Impact)**: 36-48 hours (~1.5 weeks)
- **P2 (Medium-Impact)**: 21-30 hours (~1 week)
- **P3 (Low-Impact)**: 3-4 hours (~4 hours)

**Total**: 78-111 hours (~2-3 weeks of FTE effort for 1 person, or 1 week with 2-3 people)

---