# Monitoring & Tooling Section Review

## Outstanding REVIEW Flags (Gateway Tab)

The troubleshooting page has 4 REVIEW flags but 253 REVIEW flags exist across 60 gateway files (72 in x-deprecated/x-archived, ~181 in active files). The troubleshooting page does not need all of them, but key TECHNICAL VERIFICATION flags that affect troubleshooting advice should be tracked here.

**Key unresolved flags affecting troubleshooting content:**
- **Deposit/reserve amounts**: Multiple pages reference "0.065 ETH deposit + 0.03 ETH reserve" for testing and "0.36 ETH reserve" for production. Needs Rick/Mehrdad confirmation. (funding-guide, health-checks, faq, business-case)
- **CLI option numbers**: Option 1 (Get node status), Option 11 (Deposit broadcasting funds), Option 16 (Set max price per capability). Needs Rick confirmation. (funding-guide, pricing-strategy, tools-and-dashboards)
- **CLI default port**: Is 5935 the default livepeer_cli port? v1 docs say yes but v2 tooling may differ. (funding-guide, health-checks, tools-and-dashboards)
- **`/getOrchestratorInfo` endpoint**: Is this the correct endpoint for AI capability queries? (troubleshooting, health-checks, faq)
- **Windows AI binary**: Is a Windows AI binary on the roadmap? (troubleshooting, faq)
- **`-signer` flag name**: Is `-signer` the correct flag for remote signer mode? (remote-signers)
- **`-signerAddr` flag name**: Is this the correct flag for pointing gateway at a signer? (remote-signers, clearinghouse-guide)
- **`livepeer_success_rate` metric**: Does this exist as a direct gauge or must it be calculated? (monitoring-setup)
- **`/hardware/stats` and `/hardware/info`**: Exposed on all gateway types or only when GPU is present? (health-checks)
- **TicketBroker contract address**: Current address on Arbitrum One mainnet. (on-chain-metrics)
- **TicketBroker event names**: Exact event names (`FundDeposit`, `FundReserve`, `RedeemWinningTicket`, `Unlock`, `Withdraw`). (on-chain-metrics)
- **TicketBroker unlock period**: Historically 7 days on L1, may differ on Arbitrum. (funding-guide)
- **`livepeer/livepeer-monitoring` repo**: Is it current and maintained? (monitoring-setup)
- **Livepeer Tools URL**: `tools.livepeer.cloud` vs `livepeer.tools/gateways`. (tools-and-dashboards)
- **Community signer URL**: `signer.eliteencoder.net` vs typo `signer.eiteencoder.net`. (remote-signers, clearinghouse-guide)
- **Minimum go-livepeer version for remote signer**: PRs #3791/#3822 merged Jan 2026. (remote-signers)
- **AI inference latency in Prometheus**: Will per-pipeline/per-model latency be added to `/metrics`? (monitoring-setup)
- **LLM per-token pricing**: Is this implemented in go-livepeer? (pricing-strategy)
- **`-priceFeedAddr` requirement**: Required when using USD notation in `-maxPricePerUnit`? (pricing-strategy)
- **ByteDance/SDXL-Lightning**: Still a reliable model for onboarding tests? (troubleshooting, health-checks)
- **Port 8937 vs 8935 conflict**: The quickstart `code.jsx` uses port 8935 for ALL gateway types (video, AI, dual) via `-httpAddr`. But `faq.mdx` line 229 explicitly states "the AI gateway defaults to 8937, not 8935. This is intentional." These two authoritative sources disagree. Pages still using 8937 in rendered content: `faq.mdx`, `guide.mdx`, `capabilities.mdx`, `role.mdx`, `architecture.mdx`, `overview.mdx`, `tutorials-resources.mdx`. All guides-section pages have been fixed to 8935 per quickstart. **Needs Rick to confirm which port is correct before fixing the remaining pages.**
- **`-aiServiceRegistry` is a boolean flag**: ai-pipelines.mdx previously showed `-aiServiceRegistry <REGISTRY_CONTRACT_ADDRESS>` (fixed). The flag takes no argument - the contract address is hardcoded in go-livepeer.

---

## Section Structure

**Current nav order:**
1. gateway-health-checks - "Is it alive?"
2. monitoring-setup - "How do I set up proper observability?"
3. on-chain-debugging - "What's happening at the contract layer?"
4. tools-and-dashboards - "Where do I see what's happening?"
5. troubleshooting - "Something broke"

**Stub-defined journey order (consistent across all 5 pages):**
1. Gateway Health Checks - "Is it alive?"
2. Tools & Dashboards - "Where do I see what's happening?"
3. Monitoring Setup - "How do I set up proper observability?"
4. Troubleshooting - "Something broke"
5. FAQ - "Common questions"

**Issue: Nav order differs from stub journey order.** The stubs put Tools & Dashboards at #2 (before Monitoring Setup), but the nav puts monitoring-setup at #2 and tools at #4. The stub order is better: an operator who just ran health checks wants to SEE what's happening (tools) before SETTING UP deep observability (Prometheus/Grafana).

**Recommended nav order:**
1. gateway-health-checks - quick verification (entry point)
2. tools-and-dashboards - visual tools for immediate insight
3. monitoring-setup - production Prometheus/Grafana setup
4. on-chain-debugging - specialised on-chain inspection (on-chain operators only)
5. troubleshooting - symptom-based fix guide

**Rationale:** This follows the operator's natural progression:
- "Is it alive?" → quick checks
- "What can I see?" → existing tools (Explorer, livepeer_cli, Livepeer Tools)
- "How do I set up proper monitoring?" → Prometheus/Grafana (deeper commitment)
- "What about on-chain?" → specialised (only relevant for on-chain operators)
- "Something broke" → troubleshooting (always last - the page you hope not to need)

---

## Section Journey Coherence

### Strengths

1. **Clear purpose separation.** Each page answers a distinct question. No two pages compete for the same reader intent.
2. **Consistent internal cross-refs.** All 5 pages link to each other's Related Pages in a coherent pattern. Health checks → tools/monitoring → troubleshooting is a natural escalation path.
3. **Workload-aware structure.** Health checks, monitoring-setup, and troubleshooting all segment content by Video/AI/Dual node type. This matches the glossary's three-axis model.
4. **Stub comments are thorough.** Every page has detailed PURPOSE, JOURNEY POSITION, RELATED FILES, and CROSS-REFS documentation.

### Journey Gaps

1. **No section entry page.** Unlike AI & Job Pipelines (which has guide.mdx) and Payments & Pricing (which has payment-guide.mdx as a router), Monitoring & Tooling has no landing/overview page. The reader enters directly at health-checks. Consider whether a brief router page is needed or whether health-checks serves as the de facto entry point. Health-checks currently opens with "Run these checks the moment you start your gateway..." which works as an entry but doesn't orient the reader to the full section.

2. **on-chain-debugging position is awkward.** It sits between monitoring-setup and tools-and-dashboards in the current nav. It's a specialised page for on-chain operators only (explicitly scoped by its Warning callout). It should be after monitoring-setup (the general case) and before troubleshooting (the break-fix page), not interrupting the tools → monitoring flow.

3. **FAQ referenced in journey but missing from nav.** All 5 stubs reference "FAQ" as position #5 in the journey. The gateway FAQ exists at `v2/gateways/resources/faq` in the Resources section. The journey implies it belongs in this section, but it lives elsewhere. This is fine if there's a cross-link, but none of the Related Pages cards link to the FAQ.

4. **setup/monitor/monitor-and-optimise.mdx is a brainstorm page.** It's in the "Run A Gateway" nav under "Monitor & Optimise" but is explicitly marked as "Currently operating as a brainstorming page." Scaling.mdx in advanced-operations links to it. This page either needs to be completed, redirected to monitoring-setup, or removed from nav.

---

## Cross-Section Duplication Analysis

### Minimal duplication (well-managed)

1. **funding-guide.mdx "Monitoring" section** (H2) covers deposit monitoring only. No overlap with monitoring-setup.mdx which covers Prometheus metrics. Different scope, no duplication.

2. **node-pipelines pages** link to monitoring-setup via Related Pages cards. No content duplication - clean cross-refs.

3. **advanced-operations/production-hardening.mdx and orchestrator-selection.mdx** both have "Monitoring orchestrator performance" H2 sections. These cover orchestrator-specific monitoring (swap rates, selection scoring). monitoring-setup.mdx covers gateway-level Prometheus metrics. Different scope but worth checking for metric name overlap.

4. **tutorial-go-production.mdx** has "Monitoring your production gateway" H2. This is a tutorial-level brief pointer to monitoring-setup. Appropriate for a tutorial to provide brief context + link.

### Potential duplication concerns

5. **troubleshooting.mdx vs FAQ (resources/faq.mdx).** The stubs explicitly differentiate: troubleshooting = "X is broken, fix it"; FAQ = "how does X work?" But both may cover similar topics from different angles (e.g. "ETH deposit shows zero" appears in troubleshooting; "How do deposits work?" might appear in FAQ). Verify when reviewing FAQ page.

6. **on-chain-debugging.mdx vs funding-guide.mdx.** Both cover deposit verification via livepeer_cli. funding-guide covers it as a setup step; on-chain-debugging covers it as a diagnostic step. Different context, but the actual commands overlap. Acceptable - diagnostic guides legitimately repeat verification commands.

7. **tools-and-dashboards.mdx vs monitoring-setup.mdx.** tools-and-dashboards covers livepeer_cli, Explorer, Livepeer Tools, Arbiscan. monitoring-setup covers Prometheus/Grafana. Clean separation. The "Which Tool When?" section in tools-and-dashboards correctly differentiates.

8. **health-checks.mdx vs pipeline-configuration.mdx verification section.** pipeline-configuration.mdx has a "Verification" section with Video/AI/General tabs covering health endpoints and test requests. health-checks.mdx covers the same endpoints in more depth. pipeline-configuration's verification is appropriate as a post-configuration check, while health-checks is for ongoing operational verification. Some command overlap is expected.

---

## Tab-Level Journey Cohesion

### Full Gateways Tab Journey (from docs-gate-work.json)

```
Home (portal, navigator)
  → Concepts (role, capabilities, architecture, business-model)
    → Quickstart (gateway-setup, byoc-tutorial, AI-prompt)
      → Run A Gateway (setup guide with nested sections)
        → Guides (7 sub-sections):
            1. Operator Considerations
            2. Deployment Options
            3. AI & Job Pipelines
            4. Payments & Pricing
            5. Monitoring & Tooling ← THIS SECTION
            6. Advanced Operations
            7. Opportunities
          → Resources (FAQ, glossary, technical reference)
```

### Where Monitoring & Tooling fits in the tab journey

**Position 5 of 7 guide sections is correct.** The natural operator journey is:
1. Understand the system (Concepts)
2. Set it up (Quickstart / Run A Gateway)
3. Understand pipeline options (AI & Job Pipelines)
4. Configure payments (Payments & Pricing)
5. **Monitor it (Monitoring & Tooling)** ← here
6. Optimise it (Advanced Operations)
7. Explore opportunities (Opportunities)

Monitoring comes after the gateway is configured and funded, before advanced optimisation. This is the right position.

### Cross-section journey links (verified)

- **From Setup:** `setup/monitor/monitor-and-optimise.mdx` is a brainstorm page that should link to monitoring-setup. Currently links are unclear.
- **From Pipelines:** video-pipelines.mdx, ai-pipelines.mdx, and byoc-pipelines.mdx all link to monitoring-setup via Related Pages. Clean.
- **From Payments:** funding-guide.mdx has a Monitoring H2 for deposit balance monitoring. Links to this section would be appropriate but are currently missing.
- **From Advanced Operations:** scaling.mdx links to monitor-and-optimise (brainstorm page) rather than monitoring-setup. Should be updated.
- **To Resources:** troubleshooting.mdx links to Discord, Forum, GitHub for escalation. health-checks and monitoring-setup link to API Reference in Resources.

---

## Recommendations

### Nav order change
```json
"group": "Monitoring and Tooling",
"pages": [
  "v2/gateways/guides/monitoring-and-tooling/gateway-health-checks",
  "v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards",
  "v2/gateways/guides/monitoring-and-tooling/monitoring-setup",
  "v2/gateways/guides/monitoring-and-tooling/on-chain-debugging",
  "v2/gateways/guides/monitoring-and-tooling/troubleshooting"
]
```

### Cross-section link fixes
1. **scaling.mdx:** Update link from `setup/monitor/monitor-and-optimise` to `guides/monitoring-and-tooling/monitoring-setup`
2. **funding-guide.mdx:** Add cross-link to monitoring-setup for production deposit monitoring
3. **All 5 monitoring pages:** Add FAQ cross-link (to `resources/faq`) in Related Pages where appropriate
4. **setup/monitor/monitor-and-optimise.mdx:** Either complete as a setup-phase monitoring brief (distinct from the guides section), redirect to monitoring-setup, or remove from nav

### Content gaps to address per page (style fixes deferred)
1. **gateway-health-checks:** Consider adding a brief 2-line section intro orienting the reader to the full monitoring section ("This is the first of five monitoring guides...")
2. **on-chain-debugging:** Verify the "fund-your-gateway" link target (should be funding-guide per our fixes)
3. **troubleshooting:** Port 8937 reference in "Port conflict between video (8935) and AI (8937)" heading needs review (should both be 8935 per quickstart findings)
4. **All pages:** Em dashes present throughout (noted in section-level review.md, will fix during per-page implementation)
