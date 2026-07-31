# SOLUTIONS Tab: Detailed Personas & Needs Map

## Persona #1: Video Product Builder

### Profile

**Title**: Software Engineer / Technical Product Manager  
**Background**: 3-7 years building video products; now evaluating/migrating to decentralised infrastructure  
**Tech depth**: High (API design, authentication, streaming protocols)  
**Livepeer knowledge**: None to low; evaluating for specific feature fit  
**Motivation**: Cost reduction, decentralisation, or feature differentiation  

### Typical Scenario

> "We build a SaaS video editor. Currently on Cloudflare Stream. We want to add AI features (background removal, real-time effects) without massive AWS bills. Can Livepeer Studio + Daydream do this?"

### Behavioral Pattern

1. **Evaluation phase** (3-7 days)
   - Searches "Livepeer video API", "decentralised livestream", "AI video transcoding"
   - Reads product overviews, compares features
   - Checks pricing and SLA guarantees
   - Evaluates API ergonomics (SDK, REST, rate limits)

2. **Proof-of-concept phase** (2-5 days)
   - Needs quickstart that works in < 1 hour
   - Builds first livestream OR first transcoding job
   - Tests latency, error handling, cost model
   - Validates that "this actually works"

3. **Integration phase** (1-4 weeks)
   - Implements feature integration (livestream dashboard, VOD library, access control)
   - Wires up webhooks for notification flow
   - Handles edge cases (network interruption, transcoding failure, playback fallback)
   - Sets up monitoring and alerting

4. **Production phase** (ongoing)
   - Tunes parameters (bitrate, segment size, failover strategy)
   - Monitors costs and performance
   - Scales across regions or products

### Information Needs

**Phase 1: Evaluation**
- What does Studio do? (feature list)
- How does it compare to Cloudflare/Mux? (comparison)
- What's the pricing model? (cost transparency)
- What's the SLA/uptime? (reliability)
- Can it do AI? (feature confirmation)

**Phase 2: Proof of Concept**
- Quickstart with live code (not just instructions)
- API endpoint list and example requests
- SDKs available (JS, Python, Go, Ruby?)
- Error handling examples
- Expected latency and cost for typical job

**Phase 3: Integration**
- Full API reference (parameters, response codes, edge cases)
- Webhook structure and retry logic
- Authentication (API keys, JWT, session management)
- Rate limits and quotas
- Best practices (caching, batching, error recovery)

**Phase 4: Production**
- Monitoring and alerting (health endpoints, logs)
- Capacity planning (max concurrent streams, global region availability)
- Cost optimization (batch encoding, segment settings)
- Disaster recovery (failover, fallback, data retention)
- Support escalation path

### Pain Points & Misconceptions

| Pain Point | Current State | Fix Needed |
|---|---|---|
| "Is it production-ready?" | SLA unclear; uptime metrics not published | Add public status page + reliability stats |
| "How much will this cost?" | Pricing varies by product; no calculator | Create cost comparison tool + ROI estimator |
| "What if Studio breaks?" | Fallback strategy not documented | Add disaster recovery + multi-gateway failover guide |
| "Can I run my own gateway?" | Possible but requires Gateways tab knowledge | Add explicit "self-hosted vs managed" decision guide |
| "How do I test this locally?" | No local test environment documented | Add testnet/sandbox setup guide per product |

### Metrics

- **Entry point confidence**: 40% (many have to read multiple tabs to get full picture)
- **Time to first working result**: 30-60 minutes (good if achievable)
- **Conversion to paid**: 25% (evaluation to actual usage)

---

## Persona #2: Active Builder / Return Visitor

### Profile

**Title**: Developer using Livepeer in production  
**Background**: Already building, has integrated one product (usually Studio)  
**Tech depth**: High (knows Livepeer protocol, understands network model)  
**Livepeer knowledge**: Moderate to high; familiar with basics  
**Motivation**: Ship faster, unblock specific feature  

### Typical Scenario

> "I have Studio livestreams working. Now I need to add access control so only paying subscribers can view. I remember seeing JWT authentication somewhere. Where is it?"

### Behavioral Pattern

1. **Entry**: Bookmark or direct URL
2. **Search**: "Livepeer Studio JWT" or "access control webhooks"
3. **Expect**: Task-specific guide (2-5 min read, code example, copy-paste ready)
4. **Exit**: Implement and ship same day

### Information Needs

- **Task guide**: "How to require JWT for livestream playback" (3 steps, code example)
- **API reference**: Exact endpoint, parameters, error codes
- **Integration example**: "Validate JWT + check subscription status + serve token"
- **Error recovery**: "What if JWT generation fails?" "What if token expires during stream?"

### Pain Points

| Pain Point | Current State | Fix Needed |
|---|---|---|
| "Where is the docs?" | Per-product docs scattered (some external, some internal) | Single source of truth per product |
| "Is this the latest API?" | Breaking changes not always highlighted | Changelog section in product overview |
| "Why is my request failing?" | Error codes not well documented | Comprehensive error reference |
| "How do I debug this?" | No troubleshooting guide per feature | Add diagnostics section (logs, network tracing, common errors) |

### Metrics

- **Entry point confidence**: 85% (knows exactly what they need)
- **Time to resolution**: 5-15 minutes (looking up specific feature)
- **Conversion**: 100% (already a user, just needs specific answer)

---

## Persona #3: AI Media Builder

### Profile

**Title**: ML Engineer / AI startup founder  
**Background**: 2-5 years AI/ML; deploying inference at scale  
**Tech depth**: High (CUDA, model serving, optimization)  
**Livepeer knowledge**: Very low; may not know Livepeer exists  
**Motivation**: Cost-effective GPU compute, decentralised alternative to Lambda/Replicate  

### Typical Scenario

> "We built a real-time video style transfer model. We want to serve it at scale without Lambda costs. Can we run it on Livepeer? How does Daydream fit in?"

### Behavioral Pattern

1. **Discovery phase** (1-3 days)
   - Learns about Livepeer from AI forums, Hugging Face, or ML communities
   - Discovers Daydream or AI runner
   - Questions: "Can I run my own model? Do I have to use pre-built pipelines?"

2. **Technical evaluation** (3-5 days)
   - Reads Daydream architecture
   - Explores AI runner documentation
   - Tests with a reference model (e.g., Stable Diffusion)

3. **Integration phase** (2-8 weeks)
   - Deploys custom model to Livepeer network
   - Builds inference API wrapper
   - Handles streaming input/output
   - Scales across replicas

### Information Needs

**Phase 1: Discovery**
- What's Daydream? How is it different from running my own model on Livepeer?
- Can I bring my own model to Daydream?
- What's the cost model? (per-inference? per-GPU-hour?)
- What latency should I expect?
- How does real-time video processing work on Livepeer?

**Phase 2: Evaluation**
- Daydream API and supported model formats
- AI runner documentation (what's an orchestrator's role in serving inference?)
- Model hosting and discovery (how do orchestrators find my model?)
- Performance benchmarks (RTX 4090 with model X = ~Y ms latency, Z throughput)
- Cost breakdown (GPU time, network, inference fees)

**Phase 3: Integration**
- Custom model deployment guide (Docker, vLLM, TGI format)
- Streaming video input/output (WebRTC, WHIP/WHEP)
- Batching and queue management
- Monitoring inference (latency, error rate, GPU utilization)
- Scaling strategy (replicas, model selection, failover)

### Pain Points

| Pain Point | Current State | Fix Needed |
|---|---|---|
| "What's the minimum hardware?" | Scattered across Orchestrators tab; not product-focused | Create "min requirements for Daydream" guide |
| "How do I deploy a custom model?" | BYOC documentation exists but is Orchestrators-focused | Create bridge guide from AI perspective |
| "What's the cost per inference?" | No explicit cost model; requires network economics knowledge | Create simplified cost calculator |
| "Why is latency high?" | No diagnostics guide for inference pipeline | Add latency breakdown: network + queueing + inference + encoding |
| "How do I sell my inference service?" | No path to monetization documented | Add operator guide: "How to earn from AI inference on Livepeer" |

### Metrics

- **Entry point confidence**: 30% (high technical depth, but Livepeer unfamiliar)
- **Time to first working result**: 2-5 days (need to understand Livepeer model first)
- **Conversion**: 15% (high bar; most will try Replicate/Lambda first)

---

## Persona #4: Integration Evaluator

### Profile

**Title**: Technical Product Manager / Solutions Architect  
**Background**: Evaluating third-party services for business requirements  
**Tech depth**: Medium (understands architecture but not necessarily coding)  
**Livepeer knowledge**: None; may not know Livepeer at all  
**Motivation**: Meet feature requirements, reduce vendor lock-in, differentiate product  

### Typical Scenario

> "We need decentralised video infrastructure for a social network platform. Feature checklist: livestream, VOD, access control, proof of authenticity. Which product? Can we self-host? What's the cost? Who's already using it?"

### Behavioral Pattern

1. **Requirements gathering** (2-3 days)
   - Checks feature matrix (does it have X, Y, Z?)
   - Evaluates deployment options (managed, self-hosted, hybrid)
   - Reviews pricing and SLAs

2. **Vendor comparison** (2-5 days)
   - Compares Streamplace vs Studio vs Frameworks for use case
   - Reads case studies or customer examples
   - Checks company viability (funding, roadmap, community size)

3. **Proof of concept** (1-2 weeks)
   - Hands integration to developer
   - Evaluates quality of developer experience (docs, SDK, support)
   - Assesses integration effort (days or months?)

4. **Go/no-go decision** (end of week 3)
   - Decides: build, self-host, or choose alternative

### Information Needs

**Phase 1: Requirements**
- Feature matrix (livestream? VOD? access control? AI? provenance? social features?)
- Deployment options (managed, self-hosted, hybrid)
- Cost model (per-stream, per-minute, per-GB, flat fee?)
- Scalability limits (concurrent users, throughput, regions)
- Compliance/security (data residency, encryption, audit logs)

**Phase 2: Vendor Comparison**
- Product positioning (who is this for? What problem does it solve best?)
- Competitive differentiation (vs Mux, vs Cloudflare, vs centralized)
- Company track record (customers, funding, roadmap)
- Community size and activity (engagement signal)
- Support tiers (documentation, support channels, SLA)

**Phase 3: PoC**
- Quick-start time estimate (hours to integrate?)
- SDK quality (types, examples, error handling)
- Documentation completeness (covers 90%+ of use cases?)
- Community help (Discord, forums, StackOverflow coverage)

### Pain Points

| Pain Point | Current State | Fix Needed |
|---|---|---|
| "Which product is right for us?" | No decision tree or comparison matrix | Create "choose your product" flowchart + feature matrix |
| "What features do we get?" | Spread across multiple pages | Create product spec sheet per product (1 page, all features) |
| "Can we self-host this?" | Deployment options unclear | Add explicit "managed vs self-hosted" comparison |
| "Who else is using this?" | Showcase page exists but thin | Add case studies or customer logos |
| "What's the developer experience like?" | Subjective; hard to evaluate | Add DX comparison (SDK quality, docs completeness, examples) |
| "Can we afford this?" | Pricing pages exist but scattered | Create cost comparison tool: "Your profile → estimated monthly cost" |

### Metrics

- **Entry point confidence**: 20% (many missing answers; forced to synthesize across tabs)
- **Time to decision**: 1-3 weeks (decision-making is slow)
- **Conversion**: 35-45% (high bar; many choose established centralized competitors)

---

## Persona #5: Ecosystem Explorer

### Profile

**Title**: Student / Community Member / Newcomer  
**Background**: Learning about Livepeer ecosystem  
**Tech depth**: Low to medium (may not code yet)  
**Livepeer knowledge**: Very low; may be totally new  
**Motivation**: Curiosity, learning, potential future builder  

### Typical Scenario

> "I heard Livepeer has AI and video. What's available? What can I build? Where do I start?"

### Behavioral Pattern

1. **Orientation** (30 min - 2 hours)
   - Reads Home primer
   - Graduates to Solutions portal
   - Browses what exists (cards, descriptions)

2. **Interest narrowing** (30 min - 1 week)
   - Clicks into one or two products
   - Reads overviews and key features
   - Watches demo video or tries app

3. **Next step commitment** (decision)
   - Join Discord
   - Follow blog / Twitter
   - Start Quickstart
   - Read deeper (About tab)

### Information Needs

- **What exists?** (Portal card deck)
- **What's impressive about each?** (Demo video, key features, use case)
- **Can I try it?** (Try app, live demo, simple tutorial)
- **What's next?** (Discord invite, blog link, quickstart path)
- **Who's building on this?** (Community activity, showcase)

### Pain Points

| Pain Point | Current State | Fix Needed |
|---|---|---|
| "Too much text" | Overviews can be 2-3 screens; explorers lose interest | Add 1-sentence summaries above product card |
| "Where's the demo?" | Some products have embedded video; others don't | Ensure every product has 30-60s hero video |
| "Is there a community?" | Social links exist but automation broken | Fix community feed automation or provide static fallback |
| "What's this SPE thing?" | Streamplace/Frameworks docs mention SPE but unexplained | Add 1-sentence explanation; link to About/Treasury for details |
| "What do I do next?" | CTA not always clear; scattered Discord links | Add explicit "next steps" section per product |

### Metrics

- **Entry point confidence**: 70% (visual, high-level overview works well)
- **Bounce rate**: 60% (high; explorers don't convert without clear next step)
- **Conversion to builder**: 5-10% (very low; but important for long-term ecosystem growth)

---

## Cross-Persona Insights

### Content Reuse Matrix

| Content | Used By | Priority |
|---|---|---|
| Product overview (what is it, features) | All personas | P0 |
| Quickstart (first working result) | Builder, AI Builder | P0 |
| Feature comparison / "Which product?" | Evaluator, Integration Evaluator, Explorer | P0 |
| Task guide (livestream, VOD, access control) | Builder, Active Builder | P1 |
| API reference | Builder, Active Builder, AI Builder | P0 |
| Deployment options (managed/self-host) | Integration Evaluator, Evaluator | P1 |
| Cost calculator | Evaluator, Integration Evaluator | P1 |
| Monitoring/ops guide | Active Builder, Evaluator | P1 |
| Community activity feed | Explorer, Evaluator | P2 |
| Case studies | Integration Evaluator, Evaluator | P2 |

### Persona Journey Overlap

All personas pass through **evaluation → proof-of-concept → integration → production**. Content structure should support all 4 phases.

---