# SOLUTIONS Tab: Complete User Journeys

## Canonical 10-Stage Journey (All Personas Converge)

### Stage 1: Orient to Product Ecosystem

**Question**: "What products exist on Livepeer?"

**Persona**: Explorer > Evaluator  
**Entry**: Home primer, Solutions portal, blog post referral  
**Reads**:
- Portal landing page (hero + 5 product cards + ecosystem link)
- 30-second hero videos per product
- Social/community activity feed

**Outcome**: Reader knows what exists and can name 3-5 products

**Current state**: Portal.mdx good; social feeds broken

**Required content**: Fix automation or static fallback for community activity

---

### Stage 2: Understand Which Product Solves My Problem

**Question**: "Which product should I use for [use case]?"

**Persona**: Evaluator, Integration Evaluator, Product Builder  
**Entry**: Portal product cards, internal feature list, product comparison search  
**Reads**:
- Feature matrix or decision tree (missing)
- Product positioning statements
- Comparison guide (e.g., "Studio vs Frameworks")

**Outcome**: Reader can map their feature requirements to a product

**Current state**: Implicit in product overviews; not explicit

**Required content**: Create "Choose Your Product" guide with decision tree and feature matrix

---

### Stage 3: Evaluate Fit (Read Product Overview)

**Question**: "What is [Product] and will it work for me?"

**Persona**: Evaluator, Product Builder, AI Builder, Integration Evaluator  
**Entry**: Product card CTA, search result, referral  
**Reads**: Product overview.mdx
- Product definition (1-2 sentences)
- Connection to Livepeer network
- Key features (4-6 bullets)
- Deployment options (managed, self-hosted, hybrid)
- Cost model reference
- Use cases
- Key technical capabilities

**Watches**: 30-60 second demo video

**Outcome**: Reader understands what product does and whether it's relevant

**Current state**: Overview.mdx exists for all 5 products; good quality

**Required content**: Ensure all overviews include deployment options + cost model

---

### Stage 4: Try or Quickstart (First Working Result)

**Question**: "Can I get something working in < 1 hour?"

**Persona**: Product Builder, AI Builder, Explorer (2 paths diverge)

**Path A: Try App / Demo**
- For Daydream, Studio, Embody, Frameworks: try-app card with live link
- Outcome: Working in browser, 5 minutes

**Path B: Quickstart Code**
- For Streamplace: CLI install + first stream
- For all: SDK quickstart (if available)
- Outcome: Working locally, 15-30 minutes

**Current state**: All products have "Try" cards; not all have working embedded demos

**Required content**:
- Ensure every product has at least one of: (a) live demo app, (b) CLI one-liner, (c) 5-minute code quickstart
- Quickstart should include: copy-paste code, expected output, next step

---

### Stage 5: Implement First Feature (Task Guide)

**Question**: "How do I actually build [feature] with [product]?"

**Persona**: Product Builder, Active Builder, AI Builder  
**Entry**: Search ("how to livestream with Studio"), bookmark, Discord link  
**Reads**: Task guide (e.g., `/solutions/livepeer-studio/docs/livestream/create-livestream`)

Task guide structure:
- Goal statement (1 sentence)
- Prerequisites (SDK version, API key, URL)
- Step-by-step instructions (3-7 steps)
- Code example (full, copy-paste ready)
- Expected output (what success looks like)
- Troubleshooting (common errors + fixes)
- Next step (what to do after this works)

**Outcome**: Feature working, reader knows how to build variations

**Current state**: Studio has comprehensive task guides; others thin or missing

**Required content**: Create task guide template; apply to:
- Studio: livestream, VOD, access control, webhooks, analytics (exists; good)
- Daydream: API setup, workflow creation, real-time inference (minimal)
- Streamplace: node setup, node integration, metadata configuration (partial)
- Frameworks: self-hosted setup, StreamCrafter, hybrid mode (partial)
- Embody: cluster deployment, avatar customization (minimal)

---

### Stage 6: Secure the Implementation (Access Control, Auth)

**Question**: "How do I add [security feature] to my implementation?"

**Persona**: Product Builder, Active Builder  
**Entry**: Security requirement in spec, "how to" search, code review feedback  
**Reads**: Security task guides
- Authentication (API keys, JWT, OAuth)
- Authorization (token validation, scope checking)
- Encryption (HTTPS, signed URLs)
- Privacy (data retention, GDPR compliance)

**Outcome**: Implementation passes security review

**Current state**: Studio has JWT + webhook docs; others minimal

**Required content**:
- Studio: comprehensive (exists; good)
- Daydream: API authentication
- Streamplace: metadata signing (C2PA, Ethereum)
- Frameworks: API authentication, multi-tenant isolation
- Embody: allowlist + matchmaker authentication

---

### Stage 7: Connect to External Systems (Webhooks, Events, Notifications)

**Question**: "How do I react when X happens in my stream?"

**Persona**: Product Builder, Active Builder  
**Entry**: Integration requirement ("notify user when livestream ends"), webhook search  
**Reads**: Integration guides
- Webhook structure and signing
- Event types and payloads
- Retry logic and failure handling
- Testing webhook locally

**Outcome**: Webhook flow working; app notified of stream events

**Current state**: Studio has webhook docs; others minimal

**Required content**:
- Studio: comprehensive (exists; good)
- Daydream: inference callback/notification
- Streamplace: ingest status, encoding completion
- Frameworks: stream event webhooks
- Embody: session start/end, avatar state events

---

### Stage 8: Monitor and Troubleshoot (Observability, Error Handling)

**Question**: "Why is my implementation broken? What's happening?"

**Persona**: Active Builder, Production operator  
**Entry**: Error in production, debugging session, performance investigation  
**Reads**: Troubleshooting + monitoring guides
- Health endpoints and status checks
- Log structure and aggregation
- Error codes and what they mean
- Network diagnostics (latency, packet loss)
- Cost monitoring (what am I paying for?)

**Outcome**: Issue diagnosed and resolved

**Current state**: Studio has analytics; others minimal

**Required content**:
- Studio: comprehensive (exists; good)
- All products: "Troubleshooting common errors" section
- All products: "Where are my logs?" + how to aggregate
- All products: Cost breakdown and optimization tips

---

### Stage 9: Optimize for Scale and Cost (Performance Tuning, Capacity Planning)

**Question**: "How do I handle 10x more users? How do I reduce costs?"

**Persona**: Active Builder, Production operator  
**Entry**: Performance requirement, cost review, capacity planning  
**Reads**: Performance + cost guides
- Throughput limits and how to increase
- Caching strategies
- Compression and encoding settings
- Multi-region deployment
- Cost optimization (segment size, bitrate, encoding profiles)

**Outcome**: Implementation scaled; cost per user reduced

**Current state**: Frameworks has self-host scaling; others thin

**Required content**:
- Studio: "Optimize your streams for cost and quality" guide
- Daydream: Batch inference, batching strategies
- Streamplace: Node scaling, replication
- Frameworks: Self-host capacity planning, hybrid mode
- Embody: Avatar slot allocation, GPU utilization

---

### Stage 10: Go to Production (Launch Readiness, Disaster Recovery)

**Question**: "Is my implementation ready for production?"

**Persona**: Product Builder → Production operator  
**Entry**: Launch timeline, production readiness review, disaster recovery planning  
**Reads**: Production readiness checklist
- Infrastructure (redundancy, failover)
- Monitoring and alerting (uptime SLA target)
- Backup and disaster recovery (data retention, restore procedures)
- Security review (auth, encryption, compliance)
- Load testing (capacity verification)
- Support escalation path (who to call when it breaks)

**Outcome**: Implementation launched; monitoring in place; support contact known

**Current state**: Missing across all products

**Required content**: Create "Production Readiness Checklist" template; apply to all products

---

## Persona-Specific Journey Customization

### Product Builder Journey (Compressed)

1. Evaluate fit (product overview)
2. Try/Quickstart (first working result)
3. Implement livestream
4. Add access control
5. Wire up webhooks
6. Deploy to production

**Duration**: 1-4 weeks  
**Content focus**: Quickstart, task guides, API reference, production checklist

---

### Active Builder Journey (Focused)

1. Search for specific feature (e.g., "JWT authentication")
2. Read task guide
3. Find API reference
4. Implement and test
5. Monitor and optimize

**Duration**: 5-30 minutes per task  
**Content focus**: Task guides, API reference, troubleshooting

---

### AI Media Builder Journey (Learning-Heavy)

1. Understand Daydream vs BYOC vs custom models
2. Evaluate cost model and latency
3. Quickstart with pre-built model (Daydream)
4. Deploy custom model (BYOC guide, Orchestrators bridge)
5. Build inference API wrapper
6. Scale and monitor

**Duration**: 2-8 weeks  
**Content focus**: Architecture, cost model, BYOC integration guide, model serving best practices

---

### Integration Evaluator Journey (Top-Down)

1. Feature matrix / product comparison
2. Deployment options (managed vs self-hosted)
3. Cost calculator
4. Case studies / customer list
5. PoC: Delegate to developer (follows Product Builder journey)
6. Decision: Build, partner, or choose alternative

**Duration**: 2-4 weeks  
**Content focus**: Comparison guide, cost estimator, spec sheets, case studies

---

### Ecosystem Explorer Journey (Loose)

1. Portal landing (see what exists)
2. Click into 1-2 products (watch demo)
3. "Next step" CTA (join Discord, try app, read blog)
4. Optional: Deep dive into one product

**Duration**: 30 min - 1 week  
**Content focus**: Hero videos, "what's this?" summaries, social links, Discord invite

---

## Cross-Persona Decision Points (Where Journeys Diverge)

### Decision Point 1: "Should I use Studio or Frameworks?"

**Question**: "I need self-hosted video infrastructure."

**Decision tree**:
- Full self-hosting + no vendor lock-in? → Frameworks
- Hybrid (self-host + optional services)? → Frameworks
- Managed service? → Studio
- Build custom? → Use Gateways API

---

### Decision Point 2: "Can I run my own AI model?"

**Question**: "I have a custom AI model I want to serve."

**Decision tree**:
- Use pre-built models (style transfer, etc.)? → Daydream
- Deploy custom PyTorch/TFLite model? → BYOC (Orchestrators handoff)
- Run as orchestrator? → Orchestrators tab
- Run as gateway? → Gateways tab

---

### Decision Point 3: "Can I add provenance and authenticity?"

**Question**: "I need C2PA and Ethereum signatures on my content."

**Decision tree**:
- Streamplace (built-in)? → Streamplace overview + integration guide
- Custom C2PA signing? → Streamplace architecture guide
- Ethereum attestation only? → Streamplace provenance guide + Smart contract interaction (About tab handoff)

---