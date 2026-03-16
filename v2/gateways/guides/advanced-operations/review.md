# Advanced Operations Section Review

## Critical Issue

**`production-hardening.mdx` is a duplicate of `orchestrator-selection.mdx`.** Both files contain identical content titled "Orchestrator Selection & Tiering". Production hardening content was never written. The nav shows both pages, meaning readers see the same content twice.

**Resolution:** File renamed to `dep-production-hardening.mdx` (deprecated). Removed from nav. The section now has 4 pages. If production hardening content is needed in future, create a new file with real content (TLS, process management, log rotation, security, backup).

---

## Section Structure

**Current nav order:**
1. production-hardening - "Make it production-ready" (DUPLICATE - identical to #2)
2. orchestrator-selection - "Choose the best orchestrators"
3. scaling - "When and how to scale"
4. gateway-middleware - "Custom middleware and integrations"
5. publishing - "Make your gateway discoverable"

**Stub-defined journey (consistent across all pages):**
1. Production Hardening - "Make it production-ready"
2. Orchestrator Selection - "Choose the best orchestrators"
3. Scaling & Resource Management - "When and how to scale"
4. Gateway Middleware - "Custom middleware and integrations"
5. Publishing Your Gateway - "Make your gateway discoverable"

**Assessment:** The journey order makes sense IF production-hardening has real content. The progression is: harden → optimise orchestrator selection → scale → add middleware → go public. Each page builds on the previous.

---

## Per-Page Review

### 1. production-hardening.mdx

**Status: DUPLICATE - needs rewrite or removal from nav.**

Current content is identical to orchestrator-selection.mdx. The file was likely copied as a placeholder and never populated.

**If written, should cover:**
- TLS/HTTPS setup (`-serviceAddr` with TLS)
- Process management (systemd unit file, Docker restart policies)
- Log rotation and management
- Firewall rules (which ports to expose)
- Key security (keystore location, permissions)
- Backup and recovery strategy
- Configuration management (config files vs CLI flags)
- Health check integration (Docker HEALTHCHECK, load balancer probes)

**Cross-refs:** health-checks.mdx (automation section), monitoring-setup.mdx (alert rules), funding-guide.mdx (deposit monitoring)

### 2. orchestrator-selection.mdx

**Journey fit:** Correct position (#2). Answers "which orchestrators should the Gateway use?" This is genuinely advanced content - operators who need manual orchestrator control, tiering, and failover configuration.

**Journey coherence:** Good. Flows from default selection → manual control → performance scoring → blocklisting → tiering → failover → AI-specific matching → monitoring.

**Gaps:**
- **Metadata:** title "Orchestrator Selection & Tiering" is fine. sidebarTitle "Orchestrator Selection" is fine. Description is accurate.
- **Related Pages link to production-hardening** which is currently a duplicate. Needs fixing when production-hardening is resolved.
- **5 REVIEW flags** for metric names and API endpoints
- **Voice:** uses "your gateway" throughout (entity-led needed)
- **Port references:** check for 8937 (not found in agent report, likely clean)

**Overlap with node-pipelines:** video-pipelines.mdx covers orchestrator selection at a concept level (BroadcastSessionsManager, how selection works). ai-pipelines.mdx covers AISessionManager. This page goes deeper into manual control. Acceptable differentiation - pipelines explain HOW selection works, this page explains how to TUNE it.

**New content:** Yes - tiering strategy, blocklisting, performance scoring with leaderboard API, failover configuration. Not duplicated elsewhere.

### 3. scaling.mdx

**Journey fit:** Correct position (#3). Answers "when and how to scale." Builds on orchestrator selection (after optimising orchestrators, the next bottleneck is resources).

**Journey coherence:** Good. Signs you need to scale → session limits → GPU management → split or share? → horizontal scaling → capacity planning.

**Gaps:**
- **Related Pages links to `setup/monitor/monitor-and-optimise`** which is a brainstorm page. Should link to `guides/monitoring-and-tooling/monitoring-setup` instead.
- **3 REVIEW flags** for metric/endpoint names
- **Overlap with monitoring-setup.mdx:** monitoring-setup's Dual tab covers "when to separate workloads" with the same 85% GPU threshold and same `livepeer_orchestrator_swaps` metric. scaling.mdx goes deeper (benchmarking, horizontal patterns, capacity planning). Monitoring-setup should cross-ref to scaling rather than duplicating the decision criteria.
- **Voice:** uses "your gateway" throughout

**New content:** Yes - session benchmarking with livepeer_bench, horizontal scaling patterns, capacity planning formulas. Not duplicated elsewhere.

### 4. gateway-middleware.mdx

**Journey fit:** Correct position (#4). Answers "how to add auth, rate limiting, and billing." This is for operators building a service layer around go-livepeer.

**Journey coherence:** Good. What middleware does → architecture patterns → auth → rate limiting → custom routing → billing → vs clearinghouse.

**Gaps:**
- **1 REVIEW flag** for webhook auth flag names
- **"Middleware vs clearinghouse" section** differentiates well from clearinghouse-guide.mdx. No duplication.
- **Overlap with clearinghouse-guide.mdx:** Minimal. clearinghouse = fully delegated payment. Middleware = custom service layer you control. The "vs clearinghouse" section in this page handles the differentiation cleanly.
- **Voice:** uses "your" throughout

**New content:** Yes - reverse proxy patterns, JWT auth, rate limiting, usage metering. Genuinely unique content.

### 5. publishing.mdx

**Journey fit:** Correct position (#5, last). Answers "how do I make the Gateway discoverable?" This is the final step - after hardening, optimising, scaling, and adding middleware, the operator goes public.

**Journey coherence:** Good. Service URI → capability advertising → current discovery methods → marketplace → planned features.

**Gaps:**
- **4 REVIEW flags** for serviceAddr/gatewayHost interaction, tools.livepeer.cloud listings, on-chain registry roadmap, AIServiceRegistry status
- **Related Pages links to `operator-considerations/operator-opportunities` and `operator-considerations/commercial-gateways`** - verify these file paths exist
- **"What is planned" section** - speculative content per SKILL.md rules. Should be clearly labelled as planned/future.
- **Voice:** uses "your" throughout

**New content:** Yes - serviceAddr configuration, DNS setup, capability advertising, community discovery channels. Not duplicated elsewhere.

---

## Cross-Section Duplication Analysis

### Acceptable (different depth/scope)
1. **Orchestrator selection** in node-pipelines (how it works conceptually) vs advanced-operations (how to tune it manually) - different scope, both needed
2. **GPU monitoring** in monitoring-setup (Prometheus metrics) vs scaling (decision criteria) - monitoring identifies the problem, scaling solves it
3. **Scaling thresholds** mentioned in health-checks, monitoring-setup, troubleshooting, AND scaling - but only scaling covers the full decision and architecture patterns

### Needs attention
4. **`setup/monitor/monitor-and-optimise.mdx`** is referenced by scaling.mdx but is a brainstorm page. Link should point to monitoring-setup.
5. **production-hardening duplicate** is the critical issue.

---

## Tab-Level Journey Position

```
Guides section:
  1. Operator Considerations (why operate)
  2. Deployment Options (how to deploy)
  3. AI & Job Pipelines (what workloads)
  4. Payments & Pricing (how to pay)
  5. Monitoring & Tooling (how to monitor)
  6. Advanced Operations ← THIS SECTION (how to optimise)
  7. Opportunities (what's next)
```

**Position 6 of 7 is correct.** Advanced Operations comes after monitoring (observe → optimise) and before Opportunities (optimise → monetise). The section serves operators who have a running, monitored gateway and want to improve performance, add services, or go public.

---

## Recommendations

### Must fix
1. **Resolve production-hardening.mdx duplicate** - either write real content or remove from nav
2. **Fix scaling.mdx link** from `setup/monitor/monitor-and-optimise` → `guides/monitoring-and-tooling/monitoring-setup`

### Per-page fixes (style - to be done during per-page implementation)
3. Voice → entity-led across all 5 pages
4. Em dashes → hyphens (check each page)
5. `---` → CustomDivider (check each page)
6. Markdown tables → StyledTable (check each page)
7. Missing imports (CustomDivider, LinkArrow, StyledTable)
8. Missing accordion/tab icons
9. Missing `## Related Pages` headings
10. Opening CustomDivider pattern
11. Section orientation ("first/second/etc of five advanced operations guides")

### Nav order
Keep current order (once production-hardening has real content):
1. production-hardening
2. orchestrator-selection
3. scaling
4. gateway-middleware
5. publishing
