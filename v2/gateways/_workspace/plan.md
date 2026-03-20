# Gateway Tab Plan

Applying the docs-section-planning-playbook to the Gateways tab. This is a delta review - the gateway guides were already reviewed page-by-page in this conversation. This plan consolidates those reviews and identifies remaining work.

<CustomDivider />

## Part 1: Consolidated Learnings

### Decisions Already Made (from earlier gateway reviews)

1. **Port 8937 → 8935**: All AI endpoints use port 8935 (same as video). `-httpIngest` enables AI on the same HTTP port. Fixed across all active gateway pages.
2. **`-maxPricePerCapability` JSON format**: Corrected from simplified `{"pipeline/model": value}` to proper `capabilities_prices` array format. Fixed in ai-pipelines.mdx.
3. **Operational mode = not "payment mode"**: Per user feedback. On-chain/off-chain describes how the gateway integrates with the protocol, not how it pays.
4. **"Dual" = workload configuration, not a third operational mode**: Running both video and AI from one node.
5. **Broken links fixed**: fund-your-gateway → funding-guide, payment-paths → payment-guide, gateway-health-checks → health-checks, on-chain-debugging → on-chain-metrics, monitor-and-optimise → monitoring-setup, production-hardening → removed, opportunities/ → roadmap-and-funding/.
6. **Section renamed**: Opportunities → Roadmap and Funding. Files renamed: overview → operator-support, community-ecosystem → gateway-showcase.
7. **Operational mode asymmetry documented**: Gateways have genuine off-chain production path; orchestrators do not. Added to both glossaries.
8. **`-aiServiceRegistry` flag**: Shipped and in active use for AI gateways. Not speculative.
9. **to-include.md**: Created in payments-and-pricing for content gaps found during page reviews.

### Terminology (locked)

| Term | Usage | Notes |
|------|-------|-------|
| Operational mode | On-chain / Off-chain | NOT "payment mode" |
| Node type | Video / AI / Dual | Badges: blue/purple/green |
| Setup type | go-livepeer / SDK / GWID / Hosted | |
| Dual | Workload configuration | NOT a third operational mode |
| Gateway | Routing layer, no GPU | Does not perform compute |
| Remote signer | Handles payment for off-chain gateways | Community signer available |
| PM tickets | Probabilistic micropayments | Gateway sends, orchestrator receives |

### Job Stories (formally derived)

**J1**: "When I want to build a video or AI product without managing GPU infrastructure, I want to route work through a Livepeer gateway, so I can access decentralised compute at lower cost than cloud providers."
- Acceptance: Can compare Livepeer cost vs AWS/GCP. Can get a gateway routing jobs within 1 hour (off-chain). Understands the gateway-orchestrator relationship.
- Pages serving: business-case, setup-options, quickstart
- Gap: No explicit "Livepeer vs cloud" comparison page. business-case covers this partially.

**J2**: "When I need to choose between on-chain and off-chain gateway operation, I want to understand the trade-offs, so I can pick the right operational mode for my use case."
- Acceptance: Understands what off-chain provides (no ETH, remote signer) vs on-chain (protocol integration, orchestrator discovery). Can make an informed decision.
- Pages serving: glossary (operational mode), payment-guide, setup-options
- Gap: The operational mode decision is spread across multiple pages. No single "choose your mode" decision page.

**J3**: "When I have a running gateway and want to optimise costs, I want to tune pricing caps and orchestrator selection, so I can get the best compute for my budget."
- Acceptance: Can set -maxPricePerUnit and -maxPricePerCapability. Understands orchestrator selection criteria. Can evaluate orchestrator offerings.
- Pages serving: pricing-strategy, orchestrator-selection
- Gap: None significant. These pages were reviewed and updated in this conversation.

**J4**: "When something breaks on my gateway, I want to find the symptom and fix it quickly, so I can restore service to my users."
- Acceptance: Can find symptom in troubleshooting. Gets actionable fix steps. Knows when to escalate.
- Pages serving: troubleshooting, health-checks, monitoring-setup
- Gap: None significant. Full monitoring section reviewed.

**J5**: "When I want to route AI inference jobs, I want to understand AI pipeline configuration, so I can offer AI capabilities to my application."
- Acceptance: Can configure -httpIngest. Understands AI pipeline types. Can verify AI routing works.
- Pages serving: ai-pipelines, pipeline-configuration, guide (node pipelines)
- Gap: None significant. Node pipelines section is the strongest section.

**J6**: "When I want to build a multi-tenant platform on Livepeer, I want to understand middleware, authentication, and billing options, so I can serve multiple customers from one gateway."
- Acceptance: Understands NaaP architecture. Knows clearinghouse options. Can configure auth webhooks.
- Pages serving: gateway-middleware, clearinghouse-guide, naap-multi-tenancy
- Gap: NaaP is design-stage only. Clearinghouse guide exists but is conceptual.

**J7**: "When I want to fund my on-chain gateway, I want to understand deposits, reserves, and ETH management, so I can keep my gateway operational without running out of funds."
- Acceptance: Can fund deposit and reserve. Understands how PM tickets consume deposit. Knows when to top up.
- Pages serving: funding-guide, payment-guide
- Gap: None significant. Reviewed and updated.

**J8**: "When I operate both a gateway and an orchestrator, I want to understand how they interact, so I can run both efficiently on my infrastructure."
- Acceptance: Understands port allocation. Can configure self-routing or external routing. Knows monitoring for both roles.
- Pages serving: No page exists on gateway side.
- **Gap: No "Orchestrator Interface" page. Mirror of orchestrator's "Gateway Interface". P1 priority.**

### Evidence Gaps (need SME verification)

- 253 REVIEW flags across 60 gateway files (from earlier audit)
- Active set threshold for video orchestrator selection
- Whether all gateways query AIServiceRegistry or only those with `-aiServiceRegistry` enabled
- Current community remote signer uptime/reliability
- NaaP architecture current status (design stage vs implementation)

<CustomDivider />

## Part 2: Current State Assessment

### What's Working Well

1. **Glossary complete** (232 lines, 3 deployment axes defined)
2. **Node Pipelines section strong**: ai-pipelines (688 lines), video-pipelines (522), pipeline-configuration (540), byoc-pipelines (323), guide (354) - all reviewed and updated in this conversation
3. **Payments and Pricing section complete**: 5 pages, all reviewed and updated
4. **Monitoring and Tooling section complete**: 5 pages, all reviewed and updated
5. **Advanced Operations section complete**: 4 pages, all reviewed
6. **Tutorials**: 3 zero-to-hero tutorials (397-565 lines each)
7. **StyledTable and CardGroup usage**: 35/38 files compliant

### What Needs Work

#### Style Issues
| Issue | Files affected | Severity |
|-------|---------------|----------|
| Em dashes remaining | 7 files (ai-pipelines, byoc-pipelines, guide, video-pipelines, byoc-cpu-tutorial, tutorials-resources, faq) | Medium - 169 total instances |
| Missing PURPOSE comments | 20/38 files | Low - structural, not user-facing |
| Missing REVIEW flag resolution | 253 flags across 60 files | High - accuracy risk |

#### Structural Issues
| Issue | Detail | Priority |
|-------|--------|----------|
| "Run A Gateway" section overlaps with Setup | Nested groups in "Run A Gateway" duplicate setup content | ⚠️ HUMAN REVIEW |
| Quickstart is actually Setup | `gateway-setup.mdx` (10KB) with View components is a full setup flow, not a quickstart | ⚠️ HUMAN REVIEW |
| No genuine quickstart exists | The quickstart should take under 1 hour with no financial commitment. Current "quickstart" requires on-chain configuration. | ⚠️ HUMAN REVIEW |
| Tutorials section has tutorials-resources.mdx (458 lines) | This is a reference page in a tutorials section | ⚠️ HUMAN REVIEW |
| byoc-cpu-tutorial.mdx exists alongside zero-to-hero tutorials | Two tutorial systems coexist | ⚠️ HUMAN REVIEW |

#### Content Gaps
| Gap | Evidence | Priority |
|-----|----------|----------|
| No "Orchestrator Interface" page | Mirror of orchestrator's "Gateway Interface" page. Gateway operators need to understand how they interact with orchestrators. | P1 |
| to-include.md items not yet absorbed | 9 items identified during payments review, some resolved, some pending | P1 |
| Quickstart/Setup separation not implemented | Product-thinking-review identified this as a structural issue | P2 |

<CustomDivider />

## Part 3: Section-by-Section IA

### Current Nav Structure (Guides only)

```
Guides
├── Operator Considerations (2 pages)
│   ├── business-case
│   └── production-gateways
├── Deployment Options (2 pages)
│   ├── setup-options
│   └── setup-requirements
├── AI & Job Pipelines (5 pages)
│   ├── guide
│   ├── video-pipelines
│   ├── ai-pipelines
│   ├── byoc-pipelines
│   └── pipeline-configuration
├── Payments and Pricing (5 pages)
│   ├── payment-guide
│   ├── pricing-strategy
│   ├── funding-guide
│   ├── clearinghouse-guide
│   └── remote-signers
├── Monitoring and Tooling (5 pages)
│   ├── health-checks
│   ├── tools-and-dashboards
│   ├── monitoring-setup
│   ├── on-chain-metrics
│   └── troubleshooting
├── Advanced Operations (4 pages)
│   ├── orchestrator-selection
│   ├── scaling
│   ├── gateway-middleware
│   └── gateway-discoverability  (or publishing)
├── Roadmap and Funding (4 pages)
│   ├── operator-support
│   ├── naap-multi-tenancy
│   ├── spe-grant-model
│   └── gateway-showcase
└── Tutorial: Zero-to-Hero (3 pages)
    ├── tutorial-1-offchain-transcoding-test
    ├── tutorial-2-byoc-cpu-pipeline
    └── tutorial-3-go-production
```

### Recommended Changes

#### Section renames (align with orchestrator pattern)
| Current | Target | Rationale |
|---------|--------|-----------|
| Operator Considerations | Operator Considerations | Keep (matches orchestrator) |
| Deployment Options | Deployment Details | Align with orchestrator naming |
| AI & Job Pipelines | Node Pipelines | Already the folder name |
| Payments and Pricing | Payments and Pricing | Keep |
| Monitoring and Tooling | Monitoring and Tools | Align with orchestrator naming |
| Advanced Operations | Advanced Operations | Keep |
| Roadmap and Funding | Roadmap and Funding | Minor formatting alignment |
| Tutorial: Zero-to-Hero | Tutorials | Simplify |

#### Page additions needed
| Page | Section | Rationale | Priority |
|------|---------|-----------|----------|
| orchestrator-interface | Advanced Operations | Mirror of orchestrator's gateway-interface. How gateways interact with orchestrators. | P1 |
| operator-toolbox | Monitoring and Tools | Rename tools-and-dashboards to match orchestrator pattern | P2 (rename only) |

#### Pages to rename (align with orchestrator where appropriate)
| Current | Target | Notes |
|---------|--------|-------|
| tools-and-dashboards | operator-toolbox | 📌 Flagged during orchestrator review as good gateway rename |
| production-gateways | ??? | ⚠️ HUMAN REVIEW: What is this page's purpose? Name unclear. |
| gateway-discoverability | publishing | Already partially renamed in earlier reviews |

<CustomDivider />

## Part 4: Priority Actions

### P0: Already Done
- [x] Port 8937 → 8935 across all pages
- [x] `-maxPricePerCapability` format fixed
- [x] Broken links fixed (6 patterns)
- [x] Roadmap and Funding section renamed and restructured
- [x] Glossary complete with operational mode asymmetry
- [x] Node pipelines section reviewed page by page
- [x] Payments and Pricing section reviewed page by page
- [x] Monitoring and Tooling section reviewed page by page
- [x] Advanced Operations section reviewed

### P1: Next Actions
- [ ] Fix em dashes in 7 files (169 instances)
- [ ] Add PURPOSE comments to 20 files
- [ ] Create orchestrator-interface page in Advanced Operations
- [ ] Absorb remaining to-include.md items
- [ ] Resolve "Run A Gateway" vs Setup overlap (⚠️ HUMAN REVIEW)
- [ ] Rename tools-and-dashboards → operator-toolbox
- [ ] Rename section headers to align with orchestrator (Deployment Details, Monitoring and Tools)

### P2: Later
- [ ] Implement quickstart/setup separation
- [ ] Address 253 REVIEW flags (requires SME input)
- [ ] Review tutorials coherency (byoc-cpu-tutorial vs zero-to-hero series)
- [ ] Add demand data to pipeline pages (cross-ref tools.livepeer.cloud)
- [ ] Run page-authoring skill compliance on all pages
- [ ] Apply copywriting framework

<CustomDivider />

## Part 5: Comparison with Orchestrator Tab

| Dimension | Orchestrator | Gateway | Gap |
|-----------|-------------|---------|-----|
| Glossary | Complete (300+ lines) | Complete (232 lines) | None |
| Product thinking review | Complete (9 steps) | Not done formally | Gateway needs formal review |
| Job stories | 7 defined | 6 defined above (not formally validated) | ⚠️ HUMAN REVIEW |
| Quickstart/Setup separation | Designed (not implemented) | Not designed | Gateway needs this |
| Section count | 9 | 8 | Gateway missing Config and Optimisation equivalent |
| Page-level reviews | All guides reviewed | 5/8 sections reviewed in this conversation | Operator Considerations and Deployment not reviewed page-by-page |
| PURPOSE comments | 34/34 guide pages | 18/38 files | Gateway needs 20 more |
| Cross-role bridges | gateway-orchestrator-interface exists | orchestrator-interface missing | P1 |
| Em dashes | Clean | 7 files with 169 instances | P1 |
| Content packs | Complete | Not needed (most content exists) | N/A |
| Tutorials | 6 new orchestrator-specific | 3 zero-to-hero (reviewed, accurate) + 1 standalone | Gateway tutorials in good shape |

### Missing Gateway Equivalent of Orchestrator Sections

| Orchestrator section | Gateway equivalent | Status |
|---------------------|-------------------|--------|
| Config and Optimisation | No direct equivalent | pipeline-configuration partially covers this. Pricing is in Payments. No capacity-planning or model-management equivalent (gateways don't manage models). |
| Staking and Earning | N/A | Gateways don't stake. Payments section covers the gateway side. |

The gateway tab legitimately has fewer sections because gateways have a simpler operational model (no staking, no reward calling, no model management, no GPU capacity planning).

<CustomDivider />

## Flags for Human Review

1. **"Run A Gateway" section vs Guides > Deployment / Setup**: The nav has BOTH a "Run A Gateway" top-level group with nested setup content AND separate Quickstart/Setup sections. This creates navigation confusion. Decision needed: merge into one setup flow or keep separate with clear scoping.

2. **Quickstart is actually a full setup**: `gateway-setup.mdx` is 10KB with View components for Docker/Linux/Windows and on-chain/off-chain tabs. This is a setup guide, not a quickstart. The product-thinking skill Step 9 (Quickstart/Setup separation) should be applied formally.

3. **production-gateways page purpose**: What does this page cover that business-case doesn't? Name suggests "how to run in production" but that's what the entire setup flow covers.

4. **tutorials-resources.mdx in Tutorials section**: This is a reference page (458 lines) sitting in a tutorials section. Should it move to Resources?

5. **byoc-cpu-tutorial.mdx**: Standalone tutorial (626 lines) alongside the zero-to-hero series. Is it supplementary or redundant?

6. **Job stories not formally validated**: The 6 job stories above are inferred from the page reviews, not derived through the full product-thinking process with human validation.

7. **Operator Considerations only has 2 pages**: The orchestrator equivalent has 4. Is a gateway "requirements" page needed? Is a gateway "operator impact" (protocol influence) page relevant?

8. **Section naming inconsistency**: Some sections use "&" (Payments and Pricing), some use "and" (Monitoring and Tooling), some use neither (Advanced Operations). Should standardise.
